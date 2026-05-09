import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, contact, message, rating } = body;

    if (!name || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log for now — wire to GHL or email notification once available
    console.log("[DFS] Private review feedback received:", {
      name,
      contact: contact || "not provided",
      rating,
      message,
      timestamp: new Date().toISOString(),
    });

    // ─── TODO: Send to GHL as a note / internal notification ─────────────────
    // Example: create a GHL contact with tag "negative-review-feedback"
    // and add a note with the feedback details
    // ─────────────────────────────────────────────────────────────────────────

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[DFS] Review feedback error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
