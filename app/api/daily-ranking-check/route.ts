import { NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

// ── Auth ──────────────────────────────────────────────────────────────────────

function getOAuthClient() {
  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );
  auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
  return auth;
}

// ── Tier 1 keywords to track ──────────────────────────────────────────────────

const TIER1 = [
  "epoxy flooring central coast",
  "commercial epoxy flooring central coast",
  "warehouse epoxy flooring central coast",
  "epoxy flooring gosford",
  "epoxy flooring tuggerah",
  "garage epoxy flooring central coast",
  "industrial epoxy flooring central coast",
  "epoxy flooring central coast nsw",
  "colour chip flooring central coast",
  "factory floor sealing central coast",
];

// ── Search Console ────────────────────────────────────────────────────────────

interface KwRow { query: string; position: number; clicks: number; impressions: number; }

async function getRankings(auth: ReturnType<typeof getOAuthClient>) {
  const sc = google.searchconsole({ version: "v1", auth });
  const siteUrl = process.env.SEARCH_CONSOLE_SITE_URL!;

  const today = new Date();
  // SC has ~3 day lag
  const endDate = new Date(today); endDate.setDate(endDate.getDate() - 3);
  const startDate = new Date(endDate); startDate.setDate(startDate.getDate() - 6);
  const prevEndDate = new Date(startDate); prevEndDate.setDate(prevEndDate.getDate() - 1);
  const prevStartDate = new Date(prevEndDate); prevStartDate.setDate(prevStartDate.getDate() - 6);

  const fmt = (d: Date) => d.toISOString().split("T")[0];

  const [curr, prev] = await Promise.all([
    sc.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate: fmt(startDate), endDate: fmt(endDate),
        dimensions: ["query"], rowLimit: 200,
        orderBy: [{ fieldName: "impressions", sortOrder: "DESCENDING" }],
      },
    }),
    sc.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate: fmt(prevStartDate), endDate: fmt(prevEndDate),
        dimensions: ["query"], rowLimit: 200,
      },
    }),
  ]);

  const prevMap: Record<string, number> = {};
  (prev.data.rows || []).forEach(r => {
    const q = r.keys?.[0] || "";
    prevMap[q] = r.position || 0;
  });

  const allRows: (KwRow & { prevPosition: number | null; change: number | null })[] =
    (curr.data.rows || []).map(r => {
      const query = r.keys?.[0] || "";
      const position = r.position || 0;
      const prevPosition = prevMap[query] ?? null;
      const change = prevPosition !== null ? Math.round((prevPosition - position) * 10) / 10 : null;
      return { query, position, clicks: Math.round(r.clicks || 0), impressions: Math.round(r.impressions || 0), prevPosition, change };
    });

  // Tier 1 rows — always show these
  const tier1Rows = TIER1.map(kw => {
    const found = allRows.find(r => r.query === kw);
    return found ?? { query: kw, position: 0, clicks: 0, impressions: 0, prevPosition: null, change: null };
  });

  // Opportunity keywords: not in Tier 1, pos 6–20, impressions > 10
  const opportunities = allRows
    .filter(r => !TIER1.includes(r.query) && r.position >= 5 && r.position <= 20 && r.impressions >= 10)
    .slice(0, 6);

  // Notable movers: improved 3+ positions
  const movers = allRows
    .filter(r => r.change !== null && r.change >= 3 && !TIER1.includes(r.query))
    .slice(0, 5);

  return { tier1Rows, opportunities, movers, dateLabel: `${fmt(startDate)} → ${fmt(endDate)}` };
}

// ── Email HTML ────────────────────────────────────────────────────────────────

function positionBadge(pos: number) {
  if (pos === 0) return `<span style="color:#555;">—</span>`;
  const color = pos <= 3 ? "#4ade80" : pos <= 10 ? "#C9A870" : pos <= 20 ? "#fb923c" : "#f87171";
  return `<span style="color:${color};font-weight:700;">#${pos.toFixed(0)}</span>`;
}

function changeCell(change: number | null) {
  if (change === null) return `<span style="color:#555;font-size:11px;">new</span>`;
  if (change > 0) return `<span style="color:#4ade80;font-size:12px;">▲ ${change}</span>`;
  if (change < 0) return `<span style="color:#f87171;font-size:12px;">▼ ${Math.abs(change)}</span>`;
  return `<span style="color:#555;font-size:11px;">—</span>`;
}

function buildEmail(data: Awaited<ReturnType<typeof getRankings>>, dateLabel: string) {
  const clientName = process.env.CLIENT_NAME || "Dynamic Flooring Solutions";
  const todayStr = new Date().toLocaleDateString("en-AU", { weekday: "long", day: "numeric", month: "long" });

  const tier1Rows = data.tier1Rows.map(k => `
    <tr>
      <td style="padding:8px 12px;border-bottom:1px solid #2a2a2a;color:#ccc;font-size:12px;">${k.query}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #2a2a2a;text-align:center;">${positionBadge(k.position)}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #2a2a2a;text-align:center;">${changeCell(k.change)}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #2a2a2a;color:#666;text-align:right;font-size:11px;">${k.impressions}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #2a2a2a;color:#888;text-align:right;font-size:11px;">${k.clicks}</td>
    </tr>`).join("");

  const oppRows = data.opportunities.length > 0
    ? data.opportunities.map(k => `
    <tr>
      <td style="padding:7px 12px;border-bottom:1px solid #2a2a2a;color:#ccc;font-size:12px;">${k.query}</td>
      <td style="padding:7px 12px;border-bottom:1px solid #2a2a2a;text-align:center;">${positionBadge(k.position)}</td>
      <td style="padding:7px 12px;border-bottom:1px solid #2a2a2a;text-align:center;">${changeCell(k.change)}</td>
      <td style="padding:7px 12px;border-bottom:1px solid #2a2a2a;color:#666;text-align:right;font-size:11px;">${k.impressions} imp</td>
    </tr>`).join("")
    : `<tr><td colspan="4" style="padding:12px;color:#555;font-size:12px;text-align:center;">No new opportunities detected this period</td></tr>`;

  const moverRows = data.movers.length > 0
    ? data.movers.map(k => `
    <tr>
      <td style="padding:7px 12px;border-bottom:1px solid #2a2a2a;color:#ccc;font-size:12px;">${k.query}</td>
      <td style="padding:7px 12px;border-bottom:1px solid #2a2a2a;text-align:center;">${positionBadge(k.position)}</td>
      <td style="padding:7px 12px;border-bottom:1px solid #2a2a2a;text-align:center;color:#4ade80;font-size:12px;">▲ ${k.change}</td>
    </tr>`).join("")
    : "";

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#0f0f0f;font-family:Inter,Arial,sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:24px 16px;">

  <!-- Header -->
  <div style="background:linear-gradient(135deg,#7B35CC,#D4187A,#F05A28);border-radius:12px;padding:22px 22px;margin-bottom:16px;">
    <p style="color:rgba(255,255,255,0.7);margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;">Daily Ranking Check</p>
    <h1 style="color:#fff;margin:0 0 4px;font-size:20px;font-weight:800;">${clientName}</h1>
    <p style="color:rgba(255,255,255,0.6);margin:0;font-size:12px;">${todayStr} · SC data: ${dateLabel}</p>
  </div>

  <!-- Tier 1 Rankings -->
  <div style="background:#1c1c1c;border:1px solid #2e2e2e;border-radius:10px;padding:16px 18px;margin-bottom:14px;">
    <p style="color:#fff;margin:0 0 12px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">
      Priority Keywords
      <span style="color:#555;font-size:10px;font-weight:400;text-transform:none;margin-left:8px;">vs last 7 days</span>
    </p>
    <table width="100%" cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <th style="padding:5px 12px;text-align:left;color:#444;font-size:10px;text-transform:uppercase;">Keyword</th>
          <th style="padding:5px 12px;text-align:center;color:#444;font-size:10px;text-transform:uppercase;">Pos</th>
          <th style="padding:5px 12px;text-align:center;color:#444;font-size:10px;text-transform:uppercase;">Δ</th>
          <th style="padding:5px 12px;text-align:right;color:#444;font-size:10px;text-transform:uppercase;">Impr</th>
          <th style="padding:5px 12px;text-align:right;color:#444;font-size:10px;text-transform:uppercase;">Clicks</th>
        </tr>
      </thead>
      <tbody>${tier1Rows}</tbody>
    </table>
    <p style="color:#444;font-size:10px;margin:10px 0 0;padding-top:8px;border-top:1px solid #2a2a2a;">
      🟢 Top 3 &nbsp;|&nbsp; 🟡 4–10 &nbsp;|&nbsp; 🟠 11–20 &nbsp;|&nbsp; 🔴 20+
    </p>
  </div>

  ${data.movers.length > 0 ? `
  <!-- Notable movers -->
  <div style="background:#1c1c1c;border:1px solid #2e2e2e;border-left:3px solid #4ade80;border-radius:10px;padding:16px 18px;margin-bottom:14px;">
    <p style="color:#fff;margin:0 0 12px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">📈 Notable Movers</p>
    <table width="100%" cellpadding="0" cellspacing="0">
      <tbody>${moverRows}</tbody>
    </table>
  </div>` : ""}

  <!-- Opportunities -->
  <div style="background:#1c1c1c;border:1px solid #2e2e2e;border-left:3px solid #F05A28;border-radius:10px;padding:16px 18px;margin-bottom:14px;">
    <p style="color:#fff;margin:0 0 4px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">⚡ Page 2 Opportunities</p>
    <p style="color:#666;font-size:11px;margin:0 0 12px;">Keywords ranking 5–20 with 10+ impressions — candidates for a dedicated page</p>
    <table width="100%" cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <th style="padding:5px 12px;text-align:left;color:#444;font-size:10px;text-transform:uppercase;">Keyword</th>
          <th style="padding:5px 12px;text-align:center;color:#444;font-size:10px;text-transform:uppercase;">Pos</th>
          <th style="padding:5px 12px;text-align:center;color:#444;font-size:10px;text-transform:uppercase;">Δ</th>
          <th style="padding:5px 12px;text-align:right;color:#444;font-size:10px;text-transform:uppercase;">Impressions</th>
        </tr>
      </thead>
      <tbody>${oppRows}</tbody>
    </table>
  </div>

  <!-- Footer -->
  <div style="text-align:center;padding:12px 0 6px;">
    <p style="color:#333;font-size:10px;margin:0;">Daily ranking check by <a href="https://axiondigital.com.au" style="color:#7B35CC;text-decoration:none;">Axion Digital</a> · Runs every morning 7am AEST</p>
    <p style="color:#2a2a2a;font-size:10px;margin:4px 0 0;">SC data has ~3 day lag · Position changes vs previous 7-day window</p>
  </div>

</div>
</body>
</html>`;
}

// ── Main ──────────────────────────────────────────────────────────────────────

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const expectedSecret = process.env.CRON_SECRET || "axion-dfs-2025";
  if (searchParams.get("secret") !== expectedSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const auth = getOAuthClient();
    const data = await getRankings(auth);

    const todayStr = new Date().toLocaleDateString("en-AU", { weekday: "long", day: "numeric", month: "long" });
    const html = buildEmail(data, data.dateLabel);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.REPORTING_GMAIL, pass: process.env.GMAIL_APP_PASSWORD },
    });

    await transporter.sendMail({
      from: `"Axion Digital Reporting" <${process.env.REPORTING_GMAIL}>`,
      to: process.env.REPORT_EMAIL_TO || "kieren@axiondigital.com.au",
      subject: `DFS Rankings · ${todayStr}`,
      html,
    });

    return NextResponse.json({ success: true, tier1: data.tier1Rows, opportunities: data.opportunities });
  } catch (err) {
    console.error("Daily ranking check error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
