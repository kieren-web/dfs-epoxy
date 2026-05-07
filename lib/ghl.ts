import type { LeadRow } from "./supabase";

export async function pushToGHL(lead: LeadRow): Promise<void> {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!apiKey || !locationId) {
    console.warn("[GHL] API key or location ID not configured — skipping.");
    return;
  }

  const headers = {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json",
    "Version": "2021-07-28",
  };

  try {
    const serviceTag = lead.service.toLowerCase().replace(/[\s/]+/g, "-");
    const suburbTag = lead.suburb.toLowerCase().replace(/\s+/g, "-");

    const contactRes = await fetch("https://services.leadconnectorhq.com/contacts/", {
      method: "POST",
      headers,
      body: JSON.stringify({
        locationId,
        firstName: lead.first_name,
        lastName: lead.last_name,
        email: lead.email,
        phone: lead.mobile,
        source: "DFS Website",
        tags: [
          "epoxy-lead",
          serviceTag,
          `suburb-${suburbTag}`,
          ...(lead.utm_source ? [`src-${lead.utm_source}`] : []),
        ],
        customFields: [
          { key: "service_type",      field_value: lead.service },
          { key: "suburb",            field_value: lead.suburb },
          { key: "best_time_to_call", field_value: lead.best_time || "ASAP" },
          { key: "utm_source",        field_value: lead.utm_source   || "" },
          { key: "utm_medium",        field_value: lead.utm_medium   || "" },
          { key: "utm_campaign",      field_value: lead.utm_campaign || "" },
          { key: "gclid",             field_value: lead.gclid        || "" },
          { key: "landing_page",      field_value: lead.landing_path || "" },
        ],
      }),
    });

    if (!contactRes.ok) {
      console.error("[GHL] Failed to create contact:", contactRes.status, await contactRes.text());
      return;
    }

    const contactData = await contactRes.json() as { contact?: { id?: string } };
    const contactId = contactData?.contact?.id;
    if (!contactId) { console.error("[GHL] No contact ID returned"); return; }

    const noteLines = [
      `Service: ${lead.service}`,
      `Suburb: ${lead.suburb}`,
      `Best time: ${lead.best_time || "ASAP"}`,
      lead.utm_source    ? `Source: ${lead.utm_source}`       : null,
      lead.utm_medium    ? `Medium: ${lead.utm_medium}`       : null,
      lead.utm_campaign  ? `Campaign: ${lead.utm_campaign}`   : null,
      lead.gclid         ? `GCLID: ${lead.gclid}`             : null,
      lead.landing_path  ? `Landing: ${lead.landing_path}`    : null,
    ].filter(Boolean).join("\n");

    await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
      method: "POST",
      headers,
      body: JSON.stringify({ userId: contactId, body: noteLines }),
    });

    console.log("[GHL] Contact created. ID:", contactId);
  } catch (err) {
    console.error("[GHL] Error:", err);
  }
}
