import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Garage Epoxy Flooring Buyer's Guide - Central Coast | DFS",
  description: "Flake vs solid, polyaspartic vs standard epoxy, hot tyre pickup, UV yellowing - everything Central Coast homeowners need to know before getting their garage floor done.",
  alternates: { canonical: `${SITE_URL}/blog/garage-epoxy-flooring-buyers-guide-central-coast` },
};

export default function GarageBuyersGuide() {
  return (
    <>
      <article className="pt-24 pb-8 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-300">Garage Epoxy Buyer's Guide</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(123,53,204,0.2)", color: "#D4187A", border: "1px solid rgba(212,24,122,0.3)" }}>Residential</span>
            <span className="text-xs text-gray-500">7 min read</span>
          </div>

          <h1 className="text-4xl font-bold text-white mb-5 leading-tight">Garage Epoxy Flooring: A Buyer's Guide for Central Coast Homeowners</h1>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">Flake vs solid colour, polyaspartic vs standard epoxy, hot tyre pickup, UV yellowing under the Central Coast sun - everything you need to know before getting your garage floor done.</p>

          <div className="space-y-8 text-gray-300 leading-relaxed text-sm">

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">The Most Common Question: Flake or Solid Colour?</h2>
              <p>Both are good options, but they suit different preferences:</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {[
                  { label: "Broadcast Flake System", points: ["Hides imperfections in the slab well", "Anti-slip texture built in", "Easy to touch up if damaged", "Huge range of colour combinations", "Most popular for residential garages"], recommended: true },
                  { label: "Solid Colour System", points: ["Clean, minimal look", "Shows slab imperfections more", "Smooth finish - anti-slip aggregate can be added", "Easier to keep very clean", "More of a showroom aesthetic"], recommended: false },
                ].map((col) => (
                  <div key={col.label} className="rounded-xl border p-5" style={{ background: "#222", borderColor: col.recommended ? "#7B35CC" : "#333" }}>
                    {col.recommended && <div className="text-xs font-bold mb-2" style={{ color: "#D4187A" }}>Most Popular</div>}
                    <h3 className="font-bold text-white mb-3 text-sm">{col.label}</h3>
                    {col.points.map((p) => (
                      <div key={p} className="flex items-start gap-2 text-xs mb-1.5">
                        <span className="mt-0.5 flex-shrink-0" style={{ color: "#7B35CC" }}>-</span>
                        <span className="text-gray-400">{p}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p className="mt-4">For most Central Coast garages, we recommend the full broadcast flake system. It handles imperfections well, provides natural anti-slip texture, and looks better for longer in the Australian sun.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">The Topcoat Question: Polyaspartic or Standard Epoxy?</h2>
              <p>This is the question most homeowners don't think to ask - and it's the most important one for long-term performance in Central Coast conditions.</p>
              <p className="mt-3">Standard epoxy topcoats are not UV-stable. In the Australian sun - particularly in a garage that gets afternoon sun - standard epoxy topcoats will yellow and chalk within a few years. It doesn't affect the structural integrity of the floor, but it looks terrible.</p>
              <p className="mt-3">Polyaspartic topcoats are UV-stable. They don't yellow. They're also significantly harder and more scratch-resistant than standard epoxy topcoats, which matters in a garage environment where you're dragging things across the floor, dropping tools, and parking hot vehicles.</p>
              <p className="mt-3">We use polyaspartic topcoats on all our residential garage work as standard. Ask any contractor quoting you what their topcoat is - if it's not polyaspartic, ask why not.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Hot Tyre Pickup - What It Is and How to Avoid It</h2>
              <p>Hot tyre pickup is when a vehicle's tyres are warm from driving and they bond slightly to the epoxy surface, pulling up sections of the coating when the car moves. It's one of the most common complaints about poorly specified garage floor systems.</p>
              <p className="mt-3">It happens with lower-quality epoxy systems and standard epoxy topcoats that don't have sufficient hardness. Polyaspartic topcoats significantly resist hot tyre transfer - it's one of the main reasons we use them.</p>
              <p className="mt-3">If a contractor doesn't mention hot tyre resistance when quoting a garage floor, that's worth asking about directly.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What Surface Prep Actually Involves</h2>
              <p>This is where most cheap jobs cut corners, and it's why they fail. Proper garage floor prep includes:</p>
              <ul className="space-y-3 mt-4">
                {[
                  { title: "Diamond grinding", body: "Opens the pores of the concrete to create a surface the epoxy can bond to chemically. Without this, epoxy only adheres mechanically and will eventually peel." },
                  { title: "Moisture testing", body: "Moisture vapour rising through the slab is a leading cause of epoxy failure. We test every slab before applying any product." },
                  { title: "Crack and joint treatment", body: "Cracks need to be addressed before epoxy goes down. Filling them with epoxy filler prevents them from telegraphing through the finished floor." },
                  { title: "Oil contamination treatment", body: "Old oil stains need to be treated properly - standard epoxy won't bond to oil-contaminated concrete regardless of how well you clean it." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-[#333] p-5" style={{ background: "#222" }}>
                    <h3 className="font-semibold text-white mb-1.5">{item.title}</h3>
                    <p className="text-xs text-gray-400">{item.body}</p>
                  </div>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How Long Will a Garage Epoxy Floor Last?</h2>
              <p>A properly installed commercial-grade system with polyaspartic topcoat should last 15-20 years in a normal residential garage with standard use. The factors that shorten this are:</p>
              <ul className="space-y-2 mt-3">
                {["Inadequate surface preparation at install", "Using a residential paint system rather than true epoxy", "Standard epoxy topcoat rather than polyaspartic (UV degradation)", "Chemical exposure beyond what the system was rated for", "Physical damage - heavy objects dropped, dragging sharp equipment"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style={{ background: "#D4187A" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What to Ask When Getting Quotes</h2>
              <div className="space-y-3">
                {[
                  "Are you diamond grinding the floor before applying epoxy?",
                  "Do you moisture test the slab?",
                  "What brand and type of epoxy are you using?",
                  "What's your topcoat - polyaspartic or standard epoxy?",
                  "Is your system resistant to hot tyre pickup?",
                  "Is the price fixed?",
                ].map((q, i) => (
                  <div key={q} className="flex items-start gap-4 p-4 rounded-xl border border-[#333]" style={{ background: "#222" }}>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A)" }}>{i + 1}</span>
                    <span className="text-sm text-gray-300 pt-0.5">{q}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-[#333]">
            <div className="flex flex-wrap gap-3">
              <Link href="/services/garage-epoxy-flooring-central-coast" className="text-sm font-semibold px-4 py-2 rounded-lg border border-[#444] text-gray-300 hover:border-[#7B35CC]/50 transition-colors">Garage Epoxy Service →</Link>
              <Link href="/blog/how-much-does-epoxy-flooring-cost-central-coast" className="text-sm font-semibold px-4 py-2 rounded-lg border border-[#444] text-gray-300 hover:border-[#7B35CC]/50 transition-colors">Pricing Guide →</Link>
              <Link href="/blog" className="text-sm font-semibold px-4 py-2 rounded-lg border border-[#444] text-gray-300 hover:border-[#7B35CC]/50 transition-colors">More Guides →</Link>
            </div>
          </div>
        </div>
      </article>

      <ServicePageForm heading="Get a Free Garage Quote" subheading="Polyaspartic topcoat, diamond ground prep, fixed price. Central Coast based." />
    </>
  );
}
