import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Warehouse Epoxy Flooring Central Coast | Dynamic Flooring Solutions",
  description:
    "Heavy-duty warehouse epoxy flooring on the Central Coast. Forklift-rated, chemical-resistant, anti-slip systems. Owner-operated, 500+ floors installed. Free site quotes.",
  alternates: {
    canonical: `${SITE_URL}/services/warehouse-epoxy-flooring-central-coast`,
  },
};

const features = [
  {
    title: "Forklift & Pallet Jack Rated",
    desc: "Multi-layer systems engineered for point loads from forklifts, reach stackers, and heavy pallet jacks. No cracking, no delamination.",
  },
  {
    title: "Chemical Resistant Topcoat",
    desc: "Chemical-resistant polyurethane topcoats that handle oils, solvents, hydraulic fluid, and industrial cleaning agents.",
  },
  {
    title: "Anti-Slip as Standard",
    desc: "Broadcast aggregate anti-slip finish on all warehouse work. Meets WHS slip-resistance requirements for commercial environments.",
  },
  {
    title: "Seamless — Easy to Clean",
    desc: "No joints, no cracks, no grout lines. Scrubber machines and pressure cleaning won't damage the surface.",
  },
  {
    title: "Minimal Business Disruption",
    desc: "We stage warehouse installs in sections, working nights or weekends to keep your operation running throughout.",
  },
  {
    title: "Line Marking Ready",
    desc: "Apply safety line marking and bay delineation directly over the epoxy once cured. Creates a professional, compliant warehouse layout.",
  },
];

const faqs = [
  {
    q: "Can you install epoxy in a working warehouse without shutting it down?",
    a: "Yes. We section the warehouse floor and install in stages, working around racking, equipment, and operations. We regularly work nights and weekends to minimise downtime.",
  },
  {
    q: "How thick is a warehouse epoxy system?",
    a: "A commercial warehouse system is typically 3–5mm total build depth across primer, intermediate coat, and topcoat layers. Heavier-duty applications can go thicker. We'll specify the right build for your loading conditions.",
  },
  {
    q: "How long before we can return forklifts to the floor?",
    a: "Typically 72 hours for full forklift and heavy-vehicle traffic. Light foot traffic is usually possible within 24 hours. We'll confirm exact cure times in your quote based on the system specified.",
  },
  {
    q: "What surface prep do you do on warehouse concrete?",
    a: "Every job starts with industrial diamond grinding to remove laitance, coatings, and contaminants, and to create a mechanical profile for adhesion. We also conduct moisture testing. Without proper prep, no epoxy system will last in a warehouse environment.",
  },
  {
    q: "Can you add line marking and safety zones?",
    a: "Yes. We can apply epoxy line marking for bays, forklift lanes, pedestrian zones, and safety demarcation as part of the same project — or after the floor is cured.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Warehouse Epoxy Flooring Central Coast",
  provider: {
    "@type": "LocalBusiness",
    name: "Dynamic Flooring Solutions",
    telephone: "+61483986101",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tuggerah",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
  },
  areaServed: "Central Coast, NSW",
  description:
    "Heavy-duty epoxy flooring systems for warehouses and industrial facilities on the Central Coast of NSW. Forklift-rated, chemical-resistant, anti-slip.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function WarehouseEpoxyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section
        className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #181818 50%, #1a1020 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/commercial-epoxy-flooring-central-coast" className="hover:text-white transition-colors">Commercial</Link>
            <span>/</span>
            <span className="text-gray-300">Warehouse Epoxy Flooring</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30"
            style={{ background: "rgba(123,53,204,0.15)" }}>
            <span style={{ color: "#D4187A" }}>⚡</span>
            Industrial Grade Systems
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Warehouse Epoxy Flooring{" "}
            <span style={{
              background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Central Coast
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Heavy-duty epoxy systems built for forklifts, pallet jacks, and demanding industrial environments.
            Chemical-resistant, anti-slip, and installed around your operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}
            >
              Get a Free Warehouse Quote
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold text-sm border border-white/20 hover:bg-white/5 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
              Built for Warehouses
            </p>
            <h2 className="text-3xl font-bold text-white">
              What Makes a Warehouse Epoxy System Different
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
              Standard coatings fail in warehouse environments. Here's what a proper commercial system delivers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl p-6 border border-[#333]" style={{ background: "#222" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(123,53,204,0.15)" }}>
                  <svg className="w-4 h-4" fill="none" stroke="#7B35CC" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{f.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process callout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            The Prep Is What Makes It Last
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Every warehouse floor we install starts with industrial diamond grinding — the only way to create a mechanically profiled
            surface that epoxy truly bonds to. We then apply moisture-mitigating primer, a commercial build coat, and a heavy-duty
            polyurethane topcoat. This isn't how budget operators work. It's how you get a floor that's still performing at 15 years.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              ["Step 1", "Diamond Grinding"],
              ["Step 2", "Moisture Testing"],
              ["Step 3", "Primer Coat"],
              ["Step 4", "Build Coat"],
              ["Step 5", "Topcoat + Anti-Slip"],
            ].map(([step, label]) => (
              <div key={step} className="text-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-white text-xs font-bold"
                  style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}>
                  {step.replace("Step ", "")}
                </div>
                <p className="text-xs text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Warehouse Epoxy FAQs</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-xl overflow-hidden border border-[#333]" style={{ background: "#222" }}>
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-semibold text-white hover:bg-[#2a2a2a] transition-colors text-sm">
                  {faq.q}
                  <span className="flex-shrink-0 transition-transform group-open:rotate-45 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-400 leading-relaxed text-sm border-t border-[#333] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ServicePageForm
        heading="Get a Free Warehouse Epoxy Quote"
        subheading="We'll visit your site, assess the floor, and give you a fixed price — no surprises."
      />
    </>
  );
}
