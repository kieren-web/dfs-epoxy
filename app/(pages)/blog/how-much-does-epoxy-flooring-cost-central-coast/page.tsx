import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { SITE_URL, PHONE_NUMBER, PHONE_HREF } from "@/lib/config";

export const metadata: Metadata = {
  title: "How Much Does Epoxy Flooring Cost on the Central Coast? [2025]",
  description: "Transparent epoxy flooring pricing for the Central Coast. Residential garages from $90-$100/m². Commercial priced on inspection. What drives the cost and what to watch out for.",
  alternates: { canonical: `${SITE_URL}/blog/how-much-does-epoxy-flooring-cost-central-coast` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does epoxy flooring cost in Central Coast?", acceptedAnswer: { "@type": "Answer", text: "Residential garages on the Central Coast typically start from $90-$100 per m² for a full broadcast flake system with polyaspartic topcoat. Commercial jobs are priced on site inspection due to the range of environments and systems involved." } },
    { "@type": "Question", name: "Why is epoxy flooring so expensive?", acceptedAnswer: { "@type": "Answer", text: "Most of the cost is in labour and preparation, not materials. Diamond grinding, moisture testing, primer coats, broadcast layer, and topcoat application take time to do properly. Cheaper quotes usually mean shortcuts in preparation, which is why those floors fail." } },
    { "@type": "Question", name: "How much does it cost to epoxy a double garage?", acceptedAnswer: { "@type": "Answer", text: "A standard double garage (around 36-40m²) typically costs $3,200-$4,000 on the Central Coast for a full commercial-grade flake system with polyaspartic topcoat. Single garages start from around $1,800-$2,200." } },
  ],
};

export default function CostGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="pt-24 pb-8 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-300">Epoxy Flooring Cost Central Coast</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(123,53,204,0.2)", color: "#D4187A", border: "1px solid rgba(212,24,122,0.3)" }}>Pricing</span>
            <span className="text-xs text-gray-500">6 min read</span>
          </div>

          <h1 className="text-4xl font-bold text-white mb-5 leading-tight">
            How Much Does Epoxy Flooring Cost on the Central Coast? [2025 Guide]
          </h1>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            Transparent pricing breakdown for residential garages, commercial kitchens, and warehouse floors. What drives the cost, what red flags to watch for, and why cheap quotes usually end up costing more.
          </p>

          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Quick Answer: Epoxy Flooring Costs on the Central Coast</h2>
              <div className="rounded-xl border border-[#333] overflow-hidden mb-6" style={{ background: "#222" }}>
                <div className="grid grid-cols-3 gap-0 text-xs font-bold text-gray-400 uppercase tracking-wider px-5 py-3 border-b border-[#333]">
                  <span>Job Type</span><span>Size</span><span>Typical Price</span>
                </div>
                {[
                  ["Single garage", "~20m²", "$1,800 - $2,200"],
                  ["Double garage", "~40m²", "$3,200 - $4,000"],
                  ["Large garage / workshop", "60-80m²", "$5,000 - $7,500+"],
                  ["Commercial (small)", "50-150m²", "Quoted on inspection"],
                  ["Warehouse / industrial", "150m²+", "Quoted on inspection"],
                ].map(([type, size, price]) => (
                  <div key={type} className="grid grid-cols-3 gap-0 px-5 py-3.5 border-b border-[#333] last:border-0">
                    <span className="text-white text-sm font-medium">{type}</span>
                    <span className="text-gray-400 text-sm">{size}</span>
                    <span className="text-sm font-semibold" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{price}</span>
                  </div>
                ))}
              </div>
              <p>These prices are for a proper multi-layer commercial-grade system including diamond grinding, primer, broadcast flake or solid colour, and polyaspartic topcoat. If you're quoted significantly less, ask what's being skipped.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What Drives the Cost of Epoxy Flooring?</h2>
              <p>Epoxy flooring price depends on four main factors:</p>
              <div className="space-y-4 mt-4">
                {[
                  { title: "1. Floor size", body: "Larger floors cost more in total but often less per m² due to setup efficiency. A 100m² warehouse is cheaper per square metre than a 20m² garage." },
                  { title: "2. Surface condition", body: "A brand new slab that just needs grinding is quick to prep. A 30-year-old slab with oil stains, cracks, and previous coatings needs significantly more work. Preparation is where most of the labour hours go." },
                  { title: "3. System type", body: "A basic solid-colour system costs less than a full broadcast flake with metallic accents. Polyaspartic topcoats (which resist hot tyres and UV) cost more than standard epoxy topcoats but last significantly longer in Australian conditions." },
                  { title: "4. Environment and access", body: "A commercial kitchen requiring work around trading hours, or a warehouse that needs to be sectioned and staged, takes more time and planning than a straightforward residential garage." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-[#333] p-5" style={{ background: "#222" }}>
                    <h3 className="font-bold text-white mb-2 text-sm">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Why Cheap Quotes Usually End Up Costing More</h2>
              <p>The most common reason epoxy floors fail - and the reason people end up paying twice - is inadequate surface preparation. Proper prep means diamond grinding the slab to open the concrete pores, testing for moisture, and applying a penetrating primer before any epoxy goes down.</p>
              <p className="mt-3">Contractors who quote $40-$60/m² are not doing this properly. They might roll on a two-part garage coating and call it epoxy. It looks the same on day one. By month 18 it's peeling, yellowing, or delaminating.</p>
              <p className="mt-3">A properly prepared and installed commercial-grade system lasts 10-20 years. A cheap coating lasts 2-3 if you're lucky.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Questions to Ask Before You Book</h2>
              <ul className="space-y-3">
                {[
                  "Will you diamond grind the floor before applying epoxy?",
                  "Do you moisture test the slab?",
                  "What topcoat are you using - standard epoxy or polyaspartic?",
                  "Is the price fixed, or can it change on the day?",
                  "Are you the owner or will you be sending a crew?",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-3 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 text-white text-xs font-bold" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}>?</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What DFS Charges on the Central Coast</h2>
              <p>We're transparent about our pricing. Residential garages start from <strong className="text-white">$90-$100 per m²</strong> for a full commercial-grade broadcast flake system with polyaspartic topcoat.</p>
              <p className="mt-3">Commercial jobs are priced on site inspection - there are too many variables to quote reliably without seeing the floor. We'll visit, assess, and give you a fixed price that doesn't change on install day.</p>
              <p className="mt-3">If you want a ballpark before the inspection, call us on <a href={PHONE_HREF} className="font-semibold" style={{ color: "#D4187A" }}>{PHONE_NUMBER}</a> and we'll give you an honest estimate based on what you describe.</p>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-[#333]">
            <div className="flex flex-wrap gap-3">
              <Link href="/services/garage-epoxy-flooring-central-coast" className="text-sm font-semibold px-4 py-2 rounded-lg border border-[#444] text-gray-300 hover:border-[#7B35CC]/50 transition-colors">Garage Epoxy Flooring →</Link>
              <Link href="/services/commercial-epoxy-flooring-central-coast" className="text-sm font-semibold px-4 py-2 rounded-lg border border-[#444] text-gray-300 hover:border-[#7B35CC]/50 transition-colors">Commercial Epoxy Flooring →</Link>
              <Link href="/blog" className="text-sm font-semibold px-4 py-2 rounded-lg border border-[#444] text-gray-300 hover:border-[#7B35CC]/50 transition-colors">More Guides →</Link>
            </div>
          </div>
        </div>
      </article>

      <ServicePageForm heading="Get a Fixed-Price Quote" subheading="Tell us about your floor and we'll give you a price that doesn't change on the day." />
    </>
  );
}
