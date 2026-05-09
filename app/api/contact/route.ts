import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  service: string;
  floor_size?: string;
  suburb: string;
  first_name: string;
  last_name: string;
  mobile: string;
  email: string;
  best_time?: string;
  honeypot?: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  gclid?: string | null;
  landing_path?: string | null;
  referrer?: string | null;
  device?: string | null;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    // Validation
    if (!body.service || !body.suburb || !body.first_name || !body.mobile || !body.email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Drop bots silently
    if (body.honeypot) return NextResponse.json({ ok: true });

    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!apiKey || !locationId) {
      console.log("[DFS Lead - GHL not configured]", JSON.stringify(body, null, 2));
      return NextResponse.json({ ok: true });
    }

    const ghlHeaders = {
      "Authorization": `Bearer ${apiKey}`,
      "Version": "2021-07-28",
      "Content-Type": "application/json",
    };

    // ── Step 1: Create contact ────────────────────────────────────────────────
    const contactRes = await fetch("https://services.leadconnectorhq.com/contacts/", {
      method: "POST",
      headers: ghlHeaders,
      body: JSON.stringify({
        locationId,
        firstName: body.first_name,
        lastName: body.last_name,
        phone: body.mobile.replace(/\s/g, ""),
        email: body.email,
        city: body.suburb,
        source: "dynamicflooringsolutions.com.au",
        tags: [
          "dfs",
          body.service.toLowerCase().replace(/[\s/]+/g, "-"),
          `suburb-${body.suburb.toLowerCase().replace(/\s+/g, "-")}`,
          ...(body.utm_source ? [`src-${body.utm_source}`] : []),
        ],
      }),
    });

    let contactId: string | undefined;

    if (contactRes.ok) {
      const data = await contactRes.json() as { contact?: { id?: string } };
      contactId = data?.contact?.id;
    } else if (contactRes.status === 400) {
      // Duplicate contact — extract id from error body
      const errData = await contactRes.json() as { meta?: { contactId?: string } };
      contactId = errData?.meta?.contactId;
    }

    if (!contactId) {
      console.error("[DFS] Could not get contactId from GHL");
      return NextResponse.json({ ok: true });
    }

    // ── Step 2: Add note with full lead details ───────────────────────────────
    const noteLines = [
      `Source: DFS Website`,
      `Service: ${body.service}`,
      body.floor_size  ? `Floor size: ${body.floor_size}`       : null,
      `Suburb: ${body.suburb}`,
      `Best time to call: ${body.best_time || "ASAP"}`,
      body.utm_source   ? `UTM Source: ${body.utm_source}`      : null,
      body.utm_medium   ? `UTM Medium: ${body.utm_medium}`      : null,
      body.utm_campaign ? `UTM Campaign: ${body.utm_campaign}`  : null,
      body.gclid        ? `GCLID: ${body.gclid}`                : null,
      body.landing_path ? `Landing page: ${body.landing_path}`  : null,
      body.referrer     ? `Referrer: ${body.referrer}`          : null,
      body.device       ? `Device: ${body.device}`              : null,
    ].filter(Boolean).join("\n");

    await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
      method: "POST",
      headers: ghlHeaders,
      body: JSON.stringify({ body: noteLines }),
    });

    // ── Step 3: Remove website-enquiry tag (ignore errors) ───────────────────
    await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/tags`, {
      method: "DELETE",
      headers: ghlHeaders,
      body: JSON.stringify({ tags: ["website-enquiry"] }),
    }).catch(() => {});

    // ── Step 4: Add website-enquiry tag — fires GHL automation every time ────
    await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/tags`, {
      method: "POST",
      headers: ghlHeaders,
      body: JSON.stringify({ tags: ["website-enquiry"] }),
    });

    console.log("[DFS] Lead processed. Contact ID:", contactId);
    return NextResponse.json({ ok: true }, { status: 201 });

  } catch (err) {
    console.error("[DFS] Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
