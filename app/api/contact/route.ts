import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  service: string;
  suburb: string;
  first_name: string;
  last_name: string;
  mobile: string;
  email: string;
  best_time?: string;
  honeypot?: string;
  // Attribution
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  gclid?: string | null;
  landing_path?: string | null;
  referrer?: string | null;
  device?: string | null;
  timestamp?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    // Basic validation
    if (!body.service || !body.suburb || !body.first_name || !body.mobile || !body.email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Silently drop bots
    if (body.honeypot) {
      return NextResponse.json({ ok: true });
    }

    const apiKey    = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!apiKey || !locationId) {
      // Log lead locally if GHL not yet configured
      console.log("[DFS Lead - GHL not configured]", JSON.stringify(body, null, 2));
      return NextResponse.json({ ok: true });
    }

    const ghlHeaders = {
      "Authorization": `Bearer ${apiKey}`,
      "Version": "2021-07-28",
      "Content-Type": "application/json",
    };

    const serviceTag = body.service.toLowerCase().replace(/[\s/]+/g, "-");
    const suburbTag  = body.suburb.toLowerCase().replace(/\s+/g, "-");

    // ── Step 1: Create contact in GHL ─────────────────────────────────────────
    const contactRes = await fetch("https://services.leadconnectorhq.com/contacts/", {
      method: "POST",
      headers: ghlHeaders,
      body: JSON.stringify({
        locationId,
        firstName: body.first_name,
        lastName:  body.last_name,
        phone:     body.mobile.replace(/\s/g, ""),
        email:     body.email,
        city:      body.suburb,
        source:    "dynamicflooringsolutions.com.au",
        tags: [
          "website-lead",
          "dfs",
          serviceTag,
          `suburb-${suburbTag}`,
          ...(body.utm_source ? [`src-${body.utm_source}`] : []),
        ],
      }),
    });

    const contactData = await contactRes.json() as { contact?: { id?: string } };
    const contactId   = contactData?.contact?.id;

    if (!contactId) {
      console.error("[GHL] Contact creation failed:", contactData);
      // Still return success to user - don't block the lead
      return NextResponse.json({ ok: true });
    }

    // ── Step 2: Add a note with full lead details ──────────────────────────────
    const noteLines = [
      `Source: DFS Website`,
      `Service: ${body.service}`,
      `Suburb: ${body.suburb}`,
      `Best time to call: ${body.best_time || "ASAP"}`,
      body.utm_source   ? `UTM Source: ${body.utm_source}`     : null,
      body.utm_medium   ? `UTM Medium: ${body.utm_medium}`     : null,
      body.utm_campaign ? `UTM Campaign: ${body.utm_campaign}` : null,
      body.gclid        ? `GCLID: ${body.gclid}`               : null,
      body.landing_path ? `Landing page: ${body.landing_path}` : null,
      body.referrer     ? `Referrer: ${body.referrer}`         : null,
      body.device       ? `Device: ${body.device}`             : null,
    ].filter(Boolean).join("\n");

    await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
      method: "POST",
      headers: ghlHeaders,
      body: JSON.stringify({ body: noteLines }),
    });

    console.log("[DFS] Lead created in GHL. Contact ID:", contactId);
    return NextResponse.json({ ok: true }, { status: 201 });

  } catch (err) {
    console.error("[DFS] Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
