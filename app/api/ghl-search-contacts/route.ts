import { NextResponse } from "next/server";

const GHL_API_KEY = process.env.GHL_API_KEY!;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;

const ghlHeaders = {
  Authorization: `Bearer ${GHL_API_KEY}`,
  "Content-Type": "application/json",
  Version: "2021-07-28",
};

export async function GET() {
  try {
    // 1. Get all pipelines and find "pre-qualified"
    const pipelinesRes = await fetch(
      `https://services.leadconnectorhq.com/opportunities/pipelines?locationId=${GHL_LOCATION_ID}`,
      { headers: ghlHeaders }
    );
    const pipelinesData = await pipelinesRes.json();
    const pipelines: Array<{ id: string; name: string }> = pipelinesData?.pipelines ?? [];
    const pipeline = pipelines.find(p => /pre[- ]?qual/i.test(p.name));

    if (!pipeline) {
      return NextResponse.json(
        { error: "Pre-Qualified pipeline not found", pipelines: pipelines.map(p => p.name) },
        { status: 404 }
      );
    }

    // 2. Fetch opportunities from that pipeline (up to 100)
    const oppsRes = await fetch(
      `https://services.leadconnectorhq.com/opportunities/search?location_id=${GHL_LOCATION_ID}&pipeline_id=${pipeline.id}&limit=100`,
      { headers: ghlHeaders }
    );
    const oppsData = await oppsRes.json();
    const opps: Array<Record<string, unknown>> = oppsData?.opportunities ?? [];

    // 3. Map to a flat contact-like shape
    const contacts = opps.map(o => {
      const c = o.contact as Record<string, unknown> | undefined;
      const name = (o.name as string | undefined) ?? "";
      return {
        id: (c?.id ?? o.contactId ?? "") as string,
        opportunityId: o.id as string,
        firstName: (c?.firstName ?? name.split(" ")[0] ?? "") as string,
        lastName: (c?.lastName ?? name.split(" ").slice(1).join(" ") ?? "") as string,
        phone: (c?.phone ?? "") as string,
        email: (c?.email ?? "") as string,
        address: [c?.address1, c?.city, c?.state].filter(Boolean).join(", "),
        stageName: ((o.pipelineStage as Record<string, unknown> | undefined)?.name ?? "") as string,
      };
    }).filter(c => c.firstName || c.phone);

    return NextResponse.json(contacts);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
