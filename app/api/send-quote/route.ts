import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY!;
const DFS_REPLY_EMAIL = process.env.DFS_REPLY_EMAIL!;

export async function POST(req: NextRequest) {
  try {
    const { html, quoteNumber, customerName, customerEmail } = await req.json();

    if (!RESEND_API_KEY) {
      return NextResponse.json({ error: "RESEND_API_KEY not configured" }, { status: 500 });
    }

    if (!customerEmail) {
      return NextResponse.json({ error: "customerEmail is required" }, { status: 400 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Dynamic Flooring Solutions <quotes@dynamicflooringsolutions.com.au>",
        reply_to: DFS_REPLY_EMAIL,
        to: [customerEmail],
        bcc: [DFS_REPLY_EMAIL, "kieren@axiondigital.com.au"],
        subject: `Your Quote from Dynamic Flooring Solutions — ${quoteNumber}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      return NextResponse.json({ error: err }, { status: 500 });
    }

    const _ = { customerName }; // suppress unused warning
    void _;
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
