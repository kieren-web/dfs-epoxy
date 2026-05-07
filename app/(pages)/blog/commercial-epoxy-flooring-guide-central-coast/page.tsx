import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { SITE_URL, PHONE_NUMBER, PHONE_HREF } from "@/lib/config";

export const metadata: Metadata = {
  title: "Commercial Epoxy Flooring Central Coast: A Complete Guide | DFS",
  description: "Everything Central Coast business owners need to know before getting epoxy installed - system types, timelines, how to manage disruption, and what to ask your contractor.",
  alternates: { canonical: `${SITE_URL}/blog/commercial-epoxy-flooring-guide-central-coast` },
};

export default function CommercialGuide() {
  return (
    <>
      <article className="pt-24 pb-8 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-300">Commercial Epoxy Flooring Guide</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(123,53,204,0.2)", color: "#D4187A", border: "1px solid rgba(212,24,122,0.3)" }}>Commercial</span>
            <span className="text-xs text-gray-500">8 min read</span>
          </div>

          <h1 className="text-4xl font-bold text-white mb-5 leading-tight">Commercial Epoxy Flooring on the Central Coast: A Complete Guide</h1>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">Everything Central Coast business owners need to know before getting epoxy installed. System types, realistic timelines, how to manage disruption, and the questions that separate good contractors from bad ones.</p>

          <div className="space-y-8 text-gray-300 leading-relaxed text-sm">

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Why Commercial Epoxy is Different to Residential</h2>
              <p>Commercial floors take significantly more abuse than residential ones. Forklifts, chemical spills, foot traffic from dozens of staff daily, cleaning with industrial chemicals, temperature fluctuations from commercial equipment - a residential garage system simply isn't built for this.</p>
              <p className="mt-3">Commercial epoxy systems use heavier build coats, chemical-resistant topcoats, and anti-slip aggregates as standard. The prep is also more intensive - commercial slabs often have contaminants from years of operation that need to be fully removed before any epoxy will bond properly.</p>
              <p className="mt-3">The critical mistake businesses make is letting a contractor apply a residential system to a commercial environment to save money. It fails, the business has to close again for repairs, and it ends up costing three times as much.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">The Right System for Each Commercial Environment</h2>
              <div className="space-y-4">
                {[
                  { env: "Warehouses & Industrial", system: "Heavy-duty epoxy build coat (3-4mm+), chemical-resistant polyurethane topcoat, anti-slip aggregate. Forklift-rated. Line marking compatible." },
                  { env: "Commercial Kitchens", system: "Food-safe seamless epoxy with integral coving at wall junctions. Anti-slip rated to R11 or R12. Chemical-resistant to commercial degreasers. Seamless to prevent bacterial harbourage." },
                  { env: "Workshops & Mechanics", system: "Oil and chemical resistant epoxy with anti-slip surface. Solvent-resistant topcoat. Standard epoxy will soften under petrochemical exposure - this needs to be specified correctly." },
                  { env: "Retail & Showrooms", system: "High-gloss or satin finish for aesthetics. Lower build coat but still commercial-grade. UV-stable to prevent yellowing under fluorescent and natural light." },
                  { env: "Breweries & Hospitality", system: "Acid-resistant coatings for brewery environments. Anti-slip aggregate suitable for wet conditions. Seamless finish for hygiene compliance." },
                ].map((item) => (
                  <div key={item.env} className="rounded-xl border border-[#333] p-5" style={{ background: "#222" }}>
                    <h3 className="font-bold text-white mb-2">{item.env}</h3>
                    <p className="text-xs text-gray-400">{item.system}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Realistic Timelines for Commercial Epoxy Installation</h2>
              <p>The biggest question businesses ask us is how long they'll be shut. Here's an honest breakdown:</p>
              <div className="rounded-xl border border-[#333] overflow-hidden mt-4" style={{ background: "#222" }}>
                {[
                  ["Surface preparation (grinding)", "Half day to 1 day depending on floor condition"],
                  ["Primer coat + cure", "4-8 hours cure time minimum"],
                  ["Build coat application", "4-8 hours depending on system"],
                  ["Topcoat application + cure", "12-24 hours before light foot traffic"],
                  ["Full commercial use", "48-72 hours after final coat"],
                ].map(([stage, time]) => (
                  <div key={stage} className="grid grid-cols-2 gap-4 px-5 py-3.5 border-b border-[#333] last:border-0">
                    <span className="text-white text-xs font-medium">{stage}</span>
                    <span className="text-gray-400 text-xs">{time}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4">Most commercial jobs can be staged in sections so you're not fully shut for the entire period. Talk to us at the quote stage about your operational constraints and we'll design the installation sequence around them.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Managing Business Disruption During Installation</h2>
              <p>We've worked in live commercial kitchens, active warehouses, and operating workshops. It takes planning, but it's manageable. Here's how we approach it:</p>
              <ul className="space-y-3 mt-4">
                {[
                  "Stage the work in sections - complete half the floor, let the business operate on the completed section while we do the other half",
                  "Work nights or weekends - we're flexible on scheduling to minimise your downtime",
                  "Establish clear cure time expectations upfront so you can plan around them",
                  "Coordinate with your operations team on traffic flow and equipment placement",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "linear-gradient(135deg, #7B35CC, #F05A28)" }} />
                    {point}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Questions to Ask a Commercial Epoxy Contractor</h2>
              <p>Not all contractors are equipped for commercial work. Ask these before you book:</p>
              <div className="space-y-3 mt-4">
                {[
                  { q: "Have you worked in this type of environment before?", note: "Warehouses, kitchens, and workshops each have specific requirements. Experience in one doesn't automatically translate to the others." },
                  { q: "What system are you specifying for this environment?", note: "They should be able to describe the build coat thickness, topcoat type, and anti-slip rating. Vague answers suggest a one-size-fits-all approach." },
                  { q: "Can you work around our operating hours?", note: "A contractor who can't be flexible isn't a good fit for an active commercial environment." },
                  { q: "Is the price fixed?", note: "Commercial jobs can have surprises - old coatings, oil contamination, structural cracks. A good contractor identifies these at the inspection stage and prices for them upfront." },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl border border-[#333] p-5" style={{ background: "#222" }}>
                    <h3 className="font-semibold text-white mb-1.5 text-sm">{item.q}</h3>
                    <p className="text-xs text-gray-400">{item.note}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">DFS Commercial Flooring on the Central Coast</h2>
              <p>We specialise in commercial and industrial epoxy flooring across the Central Coast - warehouses, commercial kitchens, workshops, breweries, and manufacturing facilities. Carl and Santiago are owner-operators who've been doing this for 10+ years and have installed 500+ floors across the region.</p>
              <p className="mt-3">We visit your site, assess the floor and environment, and give you a fixed price that covers everything. Call us on <a href={PHONE_HREF} className="font-semibold" style={{ color: "#D4187A" }}>{PHONE_NUMBER}</a> to arrange a site visit.</p>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-[#333]">
            <div className="flex flex-wrap gap-3">
              <Link href="/services/commercial-epoxy-flooring-central-coast" className="text-sm font-semibold px-4 py-2 rounded-lg border border-[#444] text-gray-300 hover:border-[#7B35CC]/50 transition-colors">Commercial Epoxy →</Link>
              <Link href="/services/warehouse-epoxy-flooring-central-coast" className="text-sm font-semibold px-4 py-2 rounded-lg border border-[#444] text-gray-300 hover:border-[#7B35CC]/50 transition-colors">Warehouse Flooring →</Link>
              <Link href="/services/commercial-kitchen-epoxy-flooring-central-coast" className="text-sm font-semibold px-4 py-2 rounded-lg border border-[#444] text-gray-300 hover:border-[#7B35CC]/50 transition-colors">Kitchen Flooring →</Link>
            </div>
          </div>
        </div>
      </article>

      <ServicePageForm heading="Get a Commercial Quote" subheading="We'll visit your site and give you a fixed price designed around your operating schedule." />
    </>
  );
}
