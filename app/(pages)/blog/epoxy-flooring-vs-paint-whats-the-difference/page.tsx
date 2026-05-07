import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Epoxy Flooring vs Floor Paint: What's the Difference? | DFS Central Coast",
  description: "Floor paint and epoxy look similar but perform completely differently. Here's an honest breakdown from Central Coast epoxy specialists Dynamic Flooring Solutions.",
  alternates: { canonical: `${SITE_URL}/blog/epoxy-flooring-vs-paint-whats-the-difference` },
};

export default function EpoxyVsPaintPage() {
  return (
    <>
      <article className="pt-24 pb-8 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-300">Epoxy vs Floor Paint</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(123,53,204,0.2)", color: "#D4187A", border: "1px solid rgba(212,24,122,0.3)" }}>Education</span>
            <span className="text-xs text-gray-500">5 min read</span>
          </div>

          <h1 className="text-4xl font-bold text-white mb-5 leading-tight">Epoxy Flooring vs Floor Paint: What's the Difference?</h1>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">They come in similar tins and look similar on day one. But floor paint and epoxy are fundamentally different products - and confusing them is one of the most expensive mistakes you can make on a floor job.</p>

          <div className="space-y-8 text-gray-300 leading-relaxed text-sm">

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">The Short Answer</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Floor Paint", points: ["Single-component acrylic or latex", "Sits on top of the surface", "Chips, peels, and scuffs easily", "Lifespan: 1-3 years under traffic", "Low cost upfront, high cost long-term"], bad: true },
                  { label: "True Epoxy", points: ["Two-component chemical system", "Bonds to and penetrates the concrete", "Highly abrasion and chemical resistant", "Lifespan: 10-20 years properly installed", "Higher upfront cost, lower long-term cost"], bad: false },
                ].map((col) => (
                  <div key={col.label} className="rounded-xl border p-5 space-y-2" style={{ background: "#222", borderColor: col.bad ? "#555" : "#7B35CC" }}>
                    <h3 className="font-bold mb-3" style={{ color: col.bad ? "#9CA3AF" : "#D4187A" }}>{col.label}</h3>
                    {col.points.map((p) => (
                      <div key={p} className="flex items-start gap-2 text-xs">
                        <span className="mt-0.5 flex-shrink-0" style={{ color: col.bad ? "#6B7280" : "#7B35CC" }}>{col.bad ? "✗" : "✓"}</span>
                        <span className={col.bad ? "text-gray-500" : "text-gray-300"}>{p}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Why the Difference Matters</h2>
              <p>Floor paint is essentially a thick acrylic coating. It adheres to the surface through adhesion only - meaning it sits on top of the concrete rather than bonding to it chemically. Under foot traffic, vehicle weight, or chemical exposure, that adhesion breaks down. You get chips, scratches, and eventually full peeling.</p>
              <p className="mt-3">Epoxy is a two-part system - a resin and a hardener that undergo a chemical reaction when combined. When applied to properly prepared concrete, the epoxy penetrates the pores of the slab and forms a bond that becomes part of the structure. This is why properly installed epoxy can handle forklifts, chemical spills, and 15+ years of use without failing.</p>
              <p className="mt-3">The preparation also differs significantly. Floor paint can be rolled onto a moderately clean floor with minimal prep. Epoxy done correctly requires diamond grinding the concrete surface to open the pores, moisture testing the slab, and applying a penetrating primer before any epoxy goes down. This is where most of the cost - and most of the durability - comes from.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How to Tell if You're Getting Paint or Epoxy</h2>
              <p>Some contractors sell floor paint as "epoxy" - it's a widespread problem in the industry. Here's how to tell the difference:</p>
              <div className="space-y-3 mt-4">
                {[
                  { q: "Is it a two-part system?", a: "True epoxy always comes as two separate components that are mixed together on site. Single-tin products are not epoxy, regardless of what the label says." },
                  { q: "Are they diamond grinding the floor?", a: "Proper epoxy installation requires mechanical surface preparation - usually diamond grinding. If they're just cleaning the floor and rolling product on, it's not a proper epoxy installation." },
                  { q: "What's the price?", a: "Legitimate epoxy systems cost more to install properly. If the quote is $40-$50/m² for a full floor, they're either using paint or skipping preparation." },
                  { q: "How long is the warranty?", a: "A contractor confident in their epoxy system will warrant it. Paint jobs rarely come with meaningful warranties because the contractor knows how long they'll last." },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl border border-[#333] p-5" style={{ background: "#222" }}>
                    <h3 className="font-semibold text-white mb-2 text-sm">{item.q}</h3>
                    <p className="text-xs text-gray-400">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">When Does Floor Paint Make Sense?</h2>
              <p>Occasionally - for a very low-traffic area that's temporary, or as a short-term fix while planning a renovation. But for anything that takes regular foot traffic, vehicle use, or any kind of chemical exposure, paint is a false economy.</p>
              <p className="mt-3">The math is simple: floor paint at $20-$30/m² that lasts 2 years costs more over 10 years than a proper epoxy system at $90-$100/m² that lasts 15+.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What We Use at DFS</h2>
              <p>We use commercial-grade two-part epoxy systems throughout - primer, broadcast layer, and polyaspartic topcoat on all residential and commercial work. The polyaspartic topcoat is particularly important for the Central Coast climate: it's UV-stable (won't yellow in the sun), hard-wearing, and resists hot tyre pickup in garages.</p>
              <p className="mt-3">We don't sell floor paint and we don't apply single-component coatings. If you've been quoted by someone and aren't sure what you're getting, call us and we'll tell you what questions to ask.</p>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-[#333]">
            <div className="flex flex-wrap gap-3">
              <Link href="/blog/how-much-does-epoxy-flooring-cost-central-coast" className="text-sm font-semibold px-4 py-2 rounded-lg border border-[#444] text-gray-300 hover:border-[#7B35CC]/50 transition-colors">Epoxy Flooring Costs →</Link>
              <Link href="/services/garage-epoxy-flooring-central-coast" className="text-sm font-semibold px-4 py-2 rounded-lg border border-[#444] text-gray-300 hover:border-[#7B35CC]/50 transition-colors">Garage Epoxy Flooring →</Link>
              <Link href="/blog" className="text-sm font-semibold px-4 py-2 rounded-lg border border-[#444] text-gray-300 hover:border-[#7B35CC]/50 transition-colors">More Guides →</Link>
            </div>
          </div>
        </div>
      </article>

      <ServicePageForm heading="Get a Free Quote" subheading="We use proper two-part epoxy systems on every job. Fixed price, no surprises." />
    </>
  );
}
