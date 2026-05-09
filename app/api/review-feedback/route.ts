import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, contact, message, rating } = body;

    if (!name || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!apiKey || !locationId) {
      console.log("[DFS Review Feedback]", { name, contact, rating, message });
      return NextResponse.json({ success: true });
    }

    const ghlHeaders = {
      "Authorization": `Bearer ${apiKey}`,
      "Version": "2021-07-28",
      "Content-Type": "application/json",
    };

    // Determine first/last name
    const nameParts = name.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || "";

    // Determine if contact is email or phone
    const isEmail = contact && contact.includes("@");
    const contactPayload = {
      locationId,
      firstName,
      lastName,
      source: "dynamicflooringsolutions.com.au",
      tags: ["dfs", "negative-review"],
      ...(isEmail ? { email: contact } : {}),
      ...(contact && !isEmail ? { phone: contact.replace(/\s/g, "") } : {}),
    };

    // ── Create or find contact ────────────────────────────────────────────────
    const contactRes = await fetch("https://services.leadconnectorhq.com/contacts/", {
      method: "POST",
      headers: ghlHeaders,
      body: JSON.stringify(contactPayload),
    });

    let contactId: string | undefined;

    if (contactRes.ok) {
      const data = await contactRes.json() as { contact?: { id?: string } };
      contactId = data?.contact?.id;
    } else if (contactRes.status === 400) {
      const errData = await contactRes.json() as { meta?: { contactId?: string } };
      contactId = errData?.meta?.contactId;
    }

    // Fallback: search by contact detail if available
    if (!contactId && contact) {
      const searchRes = await fetch(
        `https://services.leadconnectorhq.com/contacts/search?locationId=${locationId}&query=${encodeURIComponent(contact)}`,
        { headers: ghlHeaders }
      );
      const searchData = await searchRes.json() as { contacts?: { id?: string }[] };
      contactId = searchData?.contacts?.[0]?.id;
    }

    if (!contactId) {
      console.error("[DFS] Could not get contactId for review feedback");
      return NextResponse.json({ success: true });
    }

    // ── Add note with full feedback details ───────────────────────────────────
    const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
    const noteLines = [
      `⚠️ Negative Review Feedback — DFS Website`,
      ``,
      `Rating: ${stars} (${rating}/5)`,
      `Name: ${name}`,
      `Contact: ${contact || "Not provided"}`,
      ``,
      `Feedback:`,
      message,
      ``,
      `Submitted: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" })}`,
    ].join("\n");

    await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
      method: "POST",
      headers: ghlHeaders,
      body: JSON.stringify({ body: noteLines }),
    });

    // ── Remove then re-add negative-review tag to fire GHL automation ─────────
    await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/tags`, {
      method: "DELETE",
      headers: ghlHeaders,
      body: JSON.stringify({ tags: ["negative-review"] }),
    }).catch(() => {});

    await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/tags`, {
      method: "POST",
      headers: ghlHeaders,
      body: JSON.stringify({ tags: ["negative-review"] }),
    });

    console.log("[DFS] Review feedback sent to GHL. Contact ID:", contactId);
    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("[DFS] Review feedback error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
