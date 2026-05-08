import { NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

// ── Auth ─────────────────────────────────────────────────────────────────────

function getOAuthClient() {
  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );
  auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
  return auth;
}

// ── Date helpers ──────────────────────────────────────────────────────────────

function fmt(d: Date) { return d.toISOString().split("T")[0]; }

function getDateRanges() {
  const today = new Date();
  // Search Console has ~3 day lag
  const scEnd = new Date(today); scEnd.setDate(scEnd.getDate() - 3);
  const scStart = new Date(scEnd); scStart.setDate(scStart.getDate() - 6);
  const scPrevEnd = new Date(scStart); scPrevEnd.setDate(scPrevEnd.getDate() - 1);
  const scPrevStart = new Date(scPrevEnd); scPrevStart.setDate(scPrevStart.getDate() - 6);

  const ga4End = new Date(today);
  const ga4Start = new Date(today); ga4Start.setDate(ga4Start.getDate() - 6);
  const ga4PrevStart = new Date(today); ga4PrevStart.setDate(ga4PrevStart.getDate() - 13);
  const ga4PrevEnd = new Date(today); ga4PrevEnd.setDate(ga4PrevEnd.getDate() - 7);

  return { scStart, scEnd, scPrevStart, scPrevEnd, ga4Start, ga4End, ga4PrevStart, ga4PrevEnd };
}

// ── GA4 ───────────────────────────────────────────────────────────────────────

async function getGA4Data(auth: ReturnType<typeof getOAuthClient>) {
  const client = google.analyticsdata({ version: "v1beta", auth });
  const property = `properties/${process.env.GA4_PROPERTY_ID}`;
  const { ga4Start, ga4End, ga4PrevStart, ga4PrevEnd } = getDateRanges();

  const [thisWeek, lastWeek] = await Promise.all([
    client.properties.runReport({
      property,
      requestBody: {
        dateRanges: [{ startDate: fmt(ga4Start), endDate: fmt(ga4End) }],
        metrics: [{ name: "sessions" }, { name: "activeUsers" }],
        dimensions: [{ name: "sessionDefaultChannelGroup" }],
      },
    }),
    client.properties.runReport({
      property,
      requestBody: {
        dateRanges: [{ startDate: fmt(ga4PrevStart), endDate: fmt(ga4PrevEnd) }],
        metrics: [{ name: "sessions" }, { name: "activeUsers" }],
      },
    }),
  ]);

  let totalSessions = 0, totalUsers = 0;
  const channelBreakdown: Record<string, number> = {};
  (thisWeek.data.rows || []).forEach(row => {
    const ch = row.dimensionValues?.[0]?.value || "Other";
    const s = parseInt(row.metricValues?.[0]?.value || "0");
    const u = parseInt(row.metricValues?.[1]?.value || "0");
    totalSessions += s; totalUsers += u;
    channelBreakdown[ch] = s;
  });

  const lastWeekSessions = parseInt(lastWeek.data.rows?.[0]?.metricValues?.[0]?.value || "0");
  const sessionChange = lastWeekSessions > 0
    ? Math.round(((totalSessions - lastWeekSessions) / lastWeekSessions) * 100) : 0;

  return { totalSessions, totalUsers, channelBreakdown, sessionChange, lastWeekSessions };
}

// ── Search Console ────────────────────────────────────────────────────────────

interface KeywordRow { query: string; clicks: number; impressions: number; position: number; }

async function getSearchConsoleData(auth: ReturnType<typeof getOAuthClient>) {
  const sc = google.searchconsole({ version: "v1", auth });
  const siteUrl = process.env.SEARCH_CONSOLE_SITE_URL!;
  const { scStart, scEnd, scPrevStart, scPrevEnd } = getDateRanges();

  const [thisWeek, lastWeek, overview, prevOverview] = await Promise.all([
    sc.searchanalytics.query({
      siteUrl,
      requestBody: { startDate: fmt(scStart), endDate: fmt(scEnd), dimensions: ["query"], rowLimit: 10 },
    }),
    sc.searchanalytics.query({
      siteUrl,
      requestBody: { startDate: fmt(scPrevStart), endDate: fmt(scPrevEnd), dimensions: ["query"], rowLimit: 10 },
    }),
    sc.searchanalytics.query({
      siteUrl,
      requestBody: { startDate: fmt(scStart), endDate: fmt(scEnd), dimensions: [] },
    }),
    sc.searchanalytics.query({
      siteUrl,
      requestBody: { startDate: fmt(scPrevStart), endDate: fmt(scPrevEnd), dimensions: [] },
    }),
  ]);

  // Build position map for last week
  const lastWeekPositions: Record<string, number> = {};
  (lastWeek.data.rows || []).forEach(r => {
    const q = r.keys?.[0] || "";
    lastWeekPositions[q] = r.position || 0;
  });

  // This week keywords with position change
  const keywords: (KeywordRow & { prevPosition: number | null; change: number | null })[] =
    (thisWeek.data.rows || []).map(r => {
      const query = r.keys?.[0] || "";
      const position = r.position || 0;
      const prevPosition = lastWeekPositions[query] ?? null;
      const change = prevPosition !== null ? Math.round((prevPosition - position) * 10) / 10 : null;
      return {
        query,
        clicks: Math.round(r.clicks || 0),
        impressions: Math.round(r.impressions || 0),
        position,
        prevPosition,
        change,
      };
    });

  const row = overview.data.rows?.[0];
  const prevRow = prevOverview.data.rows?.[0];
  const clicks = Math.round(row?.clicks || 0);
  const impressions = Math.round(row?.impressions || 0);
  const avgPosition = row?.position ? parseFloat(row.position.toFixed(1)) : 0;
  const ctr = row?.ctr ? (row.ctr * 100).toFixed(1) + "%" : "0%";
  const prevImpressions = Math.round(prevRow?.impressions || 0);
  const prevAvgPosition = prevRow?.position ? parseFloat(prevRow.position.toFixed(1)) : 0;
  const impressionChange = prevImpressions > 0
    ? Math.round(((impressions - prevImpressions) / prevImpressions) * 100) : 0;
  const positionChange = prevAvgPosition > 0
    ? Math.round((prevAvgPosition - avgPosition) * 10) / 10 : 0;

  return { clicks, impressions, avgPosition, ctr, keywords, impressionChange, positionChange, prevAvgPosition };
}

// ── GHL Leads ─────────────────────────────────────────────────────────────────

async function getGHLLeads() {
  try {
    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;
    if (!apiKey || !locationId) return { thisWeek: 0, lastWeek: 0 };

    const now = Date.now();
    const weekAgo = now - 7 * 24 * 60 * 60 * 1000;
    const twoWeeksAgo = now - 14 * 24 * 60 * 60 * 1000;

    const headers = { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" };

    const [thisRes, lastRes] = await Promise.all([
      fetch(`https://services.leadconnectorhq.com/contacts/?locationId=${locationId}&startDate=${weekAgo}&endDate=${now}&limit=100`, { headers }),
      fetch(`https://services.leadconnectorhq.com/contacts/?locationId=${locationId}&startDate=${twoWeeksAgo}&endDate=${weekAgo}&limit=100`, { headers }),
    ]);

    const [thisData, lastData] = await Promise.all([thisRes.json(), lastRes.json()]);
    return {
      thisWeek: thisData?.contacts?.length || 0,
      lastWeek: lastData?.contacts?.length || 0,
    };
  } catch {
    return { thisWeek: 0, lastWeek: 0 };
  }
}

// ── Narrative Summary ─────────────────────────────────────────────────────────

function generateSummary(
  ga4: Awaited<ReturnType<typeof getGA4Data>>,
  sc: Awaited<ReturnType<typeof getSearchConsoleData>>,
  leads: Awaited<ReturnType<typeof getGHLLeads>>
): string {
  const parts: string[] = [];

  // Traffic trend
  if (ga4.sessionChange > 20) parts.push(`Website traffic is up <strong>${ga4.sessionChange}%</strong> this week — strong growth.`);
  else if (ga4.sessionChange > 0) parts.push(`Website traffic is up <strong>${ga4.sessionChange}%</strong> this week.`);
  else if (ga4.sessionChange < -20) parts.push(`Website traffic dropped <strong>${Math.abs(ga4.sessionChange)}%</strong> this week — worth monitoring.`);
  else if (ga4.sessionChange < 0) parts.push(`Website traffic is slightly down <strong>${Math.abs(ga4.sessionChange)}%</strong> vs last week.`);
  else parts.push(`Website traffic is steady this week.`);

  // Rankings trend
  if (sc.positionChange > 2) parts.push(`Google rankings improved by <strong>${sc.positionChange} positions</strong> on average — site is climbing.`);
  else if (sc.positionChange > 0) parts.push(`Average Google ranking improved slightly by <strong>${sc.positionChange} positions</strong>.`);
  else if (sc.positionChange < -2) parts.push(`Average ranking dropped <strong>${Math.abs(sc.positionChange)} positions</strong> — check for any new competitors.`);
  else parts.push(`Rankings are holding steady at around position <strong>${sc.avgPosition}</strong>.`);

  // Impressions
  if (sc.impressionChange > 10) parts.push(`Impressions are up <strong>${sc.impressionChange}%</strong> — Google is showing the site to more people.`);
  else if (sc.impressionChange < -10) parts.push(`Impressions dropped <strong>${Math.abs(sc.impressionChange)}%</strong> this week.`);

  // Leads
  if (leads.thisWeek > 0) parts.push(`<strong>${leads.thisWeek} new lead${leads.thisWeek > 1 ? "s" : ""}</strong> came through the website this week.`);
  else parts.push(`No new website leads this week — follow up on reviews to boost rankings.`);

  // Moving keywords
  const improving = sc.keywords.filter(k => k.change !== null && k.change > 1);
  if (improving.length > 0) {
    const top = improving[0];
    parts.push(`"${top.query}" moved up <strong>${top.change} positions</strong> to #${top.position.toFixed(0)}.`);
  }

  return parts.join(" ");
}

// ── Email HTML ────────────────────────────────────────────────────────────────

function buildEmailHtml(
  ga4: Awaited<ReturnType<typeof getGA4Data>>,
  sc: Awaited<ReturnType<typeof getSearchConsoleData>>,
  leads: Awaited<ReturnType<typeof getGHLLeads>>,
  summary: string,
  weekLabel: string
) {
  const clientName = process.env.CLIENT_NAME || "Client";
  const domain = (process.env.SEARCH_CONSOLE_SITE_URL || "").replace("sc-domain:", "").replace(/\/$/, "");

  const trafficArrow = ga4.sessionChange >= 0 ? "▲" : "▼";
  const trafficColor = ga4.sessionChange >= 0 ? "#4ade80" : "#f87171";
  const impressionArrow = sc.impressionChange >= 0 ? "▲" : "▼";
  const impressionColor = sc.impressionChange >= 0 ? "#4ade80" : "#f87171";
  const posArrow = sc.positionChange >= 0 ? "▲" : "▼";
  const posColor = sc.positionChange >= 0 ? "#4ade80" : "#f87171";
  const leadsArrow = leads.thisWeek >= leads.lastWeek ? "▲" : "▼";
  const leadsColor = leads.thisWeek >= leads.lastWeek ? "#4ade80" : "#f87171";

  const channelRows = Object.entries(ga4.channelBreakdown)
    .sort((a, b) => b[1] - a[1])
    .map(([ch, sessions]) => `
      <tr>
        <td style="padding:7px 12px;border-bottom:1px solid #2a2a2a;color:#ccc;font-size:13px;">${ch}</td>
        <td style="padding:7px 12px;border-bottom:1px solid #2a2a2a;color:#fff;text-align:right;font-size:13px;">${sessions}</td>
      </tr>`).join("");

  const keywordRows = sc.keywords.slice(0, 8).map(k => {
    const changeStr = k.change === null
      ? `<span style="color:#666;font-size:11px;">new</span>`
      : k.change > 0
        ? `<span style="color:#4ade80;font-size:11px;">▲ ${k.change}</span>`
        : k.change < 0
          ? `<span style="color:#f87171;font-size:11px;">▼ ${Math.abs(k.change)}</span>`
          : `<span style="color:#666;font-size:11px;">—</span>`;
    return `
      <tr>
        <td style="padding:7px 12px;border-bottom:1px solid #2a2a2a;color:#ccc;font-size:12px;">${k.query}</td>
        <td style="padding:7px 12px;border-bottom:1px solid #2a2a2a;color:#C9A870;text-align:center;font-size:13px;font-weight:700;">#${k.position.toFixed(0)}</td>
        <td style="padding:7px 12px;border-bottom:1px solid #2a2a2a;text-align:center;">${changeStr}</td>
        <td style="padding:7px 12px;border-bottom:1px solid #2a2a2a;color:#888;text-align:right;font-size:12px;">${k.impressions} imp</td>
      </tr>`;
  }).join("");

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0f0f0f;font-family:Inter,Arial,sans-serif;">
<div style="max-width:620px;margin:0 auto;padding:28px 16px;">

  <!-- Header -->
  <div style="background:linear-gradient(135deg,#7B35CC,#D4187A,#F05A28);border-radius:14px;padding:28px 24px;margin-bottom:20px;">
    <p style="color:rgba(255,255,255,0.75);margin:0 0 6px;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Weekly Performance Report</p>
    <h1 style="color:#fff;margin:0 0 4px;font-size:24px;font-weight:800;">${clientName}</h1>
    <p style="color:rgba(255,255,255,0.65);margin:0;font-size:13px;">${weekLabel} · ${domain}</p>
  </div>

  <!-- Summary -->
  <div style="background:#1c1c1c;border:1px solid #2e2e2e;border-left:3px solid #7B35CC;border-radius:10px;padding:18px 20px;margin-bottom:16px;">
    <p style="color:#9CA3AF;margin:0 0 6px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;">This Week's Summary</p>
    <p style="color:#e5e5e5;margin:0;font-size:14px;line-height:1.7;">${summary}</p>
  </div>

  <!-- 4 key stats -->
  <table width="100%" cellpadding="0" cellspacing="8" style="margin-bottom:16px;">
    <tr>
      <td width="25%" style="background:#1c1c1c;border:1px solid #2e2e2e;border-radius:10px;padding:14px;text-align:center;">
        <p style="color:#9CA3AF;margin:0 0 4px;font-size:10px;text-transform:uppercase;">Sessions</p>
        <p style="color:#fff;margin:0 0 4px;font-size:22px;font-weight:800;">${ga4.totalSessions}</p>
        <p style="color:${trafficColor};margin:0;font-size:11px;">${trafficArrow} ${Math.abs(ga4.sessionChange)}%</p>
      </td>
      <td width="25%" style="background:#1c1c1c;border:1px solid #2e2e2e;border-radius:10px;padding:14px;text-align:center;">
        <p style="color:#9CA3AF;margin:0 0 4px;font-size:10px;text-transform:uppercase;">Impressions</p>
        <p style="color:#fff;margin:0 0 4px;font-size:22px;font-weight:800;">${sc.impressions}</p>
        <p style="color:${impressionColor};margin:0;font-size:11px;">${impressionArrow} ${Math.abs(sc.impressionChange)}%</p>
      </td>
      <td width="25%" style="background:#1c1c1c;border:1px solid #2e2e2e;border-radius:10px;padding:14px;text-align:center;">
        <p style="color:#9CA3AF;margin:0 0 4px;font-size:10px;text-transform:uppercase;">Avg Position</p>
        <p style="color:#C9A870;margin:0 0 4px;font-size:22px;font-weight:800;">#${sc.avgPosition}</p>
        <p style="color:${posColor};margin:0;font-size:11px;">${posArrow} ${Math.abs(sc.positionChange)} pos</p>
      </td>
      <td width="25%" style="background:#1c1c1c;border:1px solid #2e2e2e;border-radius:10px;padding:14px;text-align:center;">
        <p style="color:#9CA3AF;margin:0 0 4px;font-size:10px;text-transform:uppercase;">Leads</p>
        <p style="color:#fff;margin:0 0 4px;font-size:22px;font-weight:800;">${leads.thisWeek}</p>
        <p style="color:${leadsColor};margin:0;font-size:11px;">${leadsArrow} from ${leads.lastWeek} last wk</p>
      </td>
    </tr>
  </table>

  <!-- Keyword rankings -->
  <div style="background:#1c1c1c;border:1px solid #2e2e2e;border-radius:10px;padding:18px 20px;margin-bottom:16px;">
    <p style="color:#fff;margin:0 0 14px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Keyword Rankings <span style="color:#666;font-size:11px;font-weight:400;text-transform:none;">vs last week</span></p>
    <table width="100%" cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <th style="padding:6px 12px;text-align:left;color:#555;font-size:10px;text-transform:uppercase;">Keyword</th>
          <th style="padding:6px 12px;text-align:center;color:#555;font-size:10px;text-transform:uppercase;">Rank</th>
          <th style="padding:6px 12px;text-align:center;color:#555;font-size:10px;text-transform:uppercase;">Change</th>
          <th style="padding:6px 12px;text-align:right;color:#555;font-size:10px;text-transform:uppercase;">Visibility</th>
        </tr>
      </thead>
      <tbody>${keywordRows}</tbody>
    </table>
  </div>

  <!-- Traffic by channel -->
  <div style="background:#1c1c1c;border:1px solid #2e2e2e;border-radius:10px;padding:18px 20px;margin-bottom:16px;">
    <p style="color:#fff;margin:0 0 14px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Traffic Sources</p>
    <table width="100%" cellpadding="0" cellspacing="0">
      <tbody>${channelRows}</tbody>
    </table>
  </div>

  <!-- Footer -->
  <div style="text-align:center;padding:16px 0 8px;">
    <p style="color:#444;font-size:11px;margin:0;">Automated weekly report by <a href="https://axiondigital.com.au" style="color:#7B35CC;text-decoration:none;">Axion Digital</a> · Every Monday 8am AEST</p>
    <p style="color:#333;font-size:10px;margin:6px 0 0;">Reply to this email to reach Kieren · kieren@axiondigital.com.au</p>
  </div>

</div>
</body>
</html>`;
}

// ── Main ──────────────────────────────────────────────────────────────────────

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  if (searchParams.get("secret") !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const auth = getOAuthClient();
    const [ga4, sc, leads] = await Promise.all([
      getGA4Data(auth),
      getSearchConsoleData(auth),
      getGHLLeads(),
    ]);

    const weekLabel = new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
    const summary = generateSummary(ga4, sc, leads);
    const html = buildEmailHtml(ga4, sc, leads, summary, weekLabel);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.REPORTING_GMAIL, pass: process.env.GMAIL_APP_PASSWORD },
    });

    await transporter.sendMail({
      from: `"Axion Digital Reporting" <${process.env.REPORTING_GMAIL}>`,
      to: process.env.REPORT_EMAIL_TO || "kieren@axiondigital.com.au",
      subject: `${process.env.CLIENT_NAME} — Weekly Report · ${weekLabel}`,
      html,
    });

    return NextResponse.json({ success: true, weekLabel, summary, ga4, sc, leads });
  } catch (err) {
    console.error("Weekly report error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
