import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Epoxy Flooring Erina | Dynamic Flooring Solutions",
  description:
    "Epoxy flooring in Erina. Commercial and residential - retail, showrooms, workshops, garages, warehouses. Owner-operated, 500+ floors. Free quotes - call 0483 986 101.",
  alternates: { canonical: `${SITE_URL}/epoxy-flooring-erina` },
};

const services = [
  { title: "Commercial & Retail Flooring", desc: "Seamless epoxy for Erina's retail stores, showrooms, and commercial premises. Professional finish, durable underfoot.", href: "/services/commercial-epoxy-flooring-central-coast" },
  { title: "Warehouse & Industrial", desc: "Heavy-duty systems for Erina and Somersby industrial estates. Forklift-rated, chemical-resistant, built for the long term.", href: "/services/warehouse-epoxy-flooring-central-coast" },
  { title: "Workshop Flooring", desc: "Oil and chemical resistant systems for mechanics and trade workshops throughout the Erina area.", href: "/services/commercial-epoxy-flooring-central-coast" },
  { title: "Garage Epoxy Flooring", desc: "Flake and solid epoxy systems for residential garages in Erina and surrounding suburbs.", href: "/services/garage-epoxy-flooring-central-coast" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Epoxy Flooring Erina",
  provider: {
    "@type": "LocalBusiness",
    name: "Dynamic Flooring Solutions",
    telephone: "+61483986101",
    address: { "@type": "PostalAddress", addressLocality: "Tuggerah", addressRegion: "NSW", addressCountry: "AU" },
  },
  areaServed: "Erina, NSW",
  description: "Commercial and residential epoxy flooring in Erina and surrounds. Owner-operated, 500+ floors installed, Central Coast based.",
};

const nearbyAreas = ["Gosford", "East Gosford", "Niagara Park", "Lisarow", "Wyoming", "Kincumber", "Matcham", "Holgate"];

const faqs = [
  {
    q: "Do you install epoxy flooring in Erina?",
    a: "Yes. Erina is one of our regular service areas — both the retail and commercial precincts and surrounding residential streets. We're based in Tuggerah, just minutes away.",
  },
  {
    q: "How much does epoxy flooring cost in Erina?",
    a: "Residential garage systems start from $90–$100/m². Retail and commercial spaces vary based on floor size, condition, and system type. We provide free fixed-price quotes on site — no obligation.",
  },
  {
    q: "How quickly can you quote in Erina?",
    a: "We aim to visit within 2–3 business days and provide a same-day quote. Being based in Tuggerah, Erina is a very quick drive for us.",
  },
  {
    q: "Can you epoxy a retail or showroom floor in Erina?",
    a: "Yes. Seamless epoxy is a popular choice for retail and showroom environments — it's professional-looking, easy to maintain, and highly durable. We service commercial retail premises throughout Erina and the surrounding Central Coast.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dynamicflooringsolutions.com.au" },
    { "@type": "ListItem", position: 2, name: "Epoxy Flooring Erina", item: "https://dynamicflooringsolutions.com.au/epoxy-flooring-erina" },
  ],
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

export default function ErinaEpoxyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #181818 50%, #1a1020 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Epoxy Flooring Erina</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30" style={{ background: "rgba(123,53,204,0.15)" }}>
            <span style={{ color: "#D4187A" }}>📍</span> Serving Erina & Surrounds
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Epoxy Flooring{" "}
            <span style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Erina
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Commercial and residential epoxy flooring in Erina and the surrounding Central Coast area. Whether it's a retail space, industrial unit, or residential garage - we install the right system for the job. Owner-operated. Fixed-price quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}>
              Get a Free Quote in Erina
            </a>
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold text-sm border border-white/20 hover:bg-white/5 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" /></svg>
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>Erina Services</p>
            <h2 className="text-3xl font-bold text-white">Epoxy Flooring Services in Erina</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">Commercial-grade systems for Erina's retail, industrial, and residential environments. We're on-site regularly throughout the area.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl p-6 border border-[#333] hover:border-[#7B35CC]/40 transition-colors" style={{ background: "#222" }}>
                <div className="w-1 h-8 rounded-full mb-4" style={{ background: "linear-gradient(180deg, #7B35CC, #F05A28)" }} />
                <h3 className="font-bold text-white mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{s.desc}</p>
                <Link href={s.href} className="text-xs font-semibold hover:opacity-80 transition-opacity" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>Central Coast Based</p>
              <h2 className="text-3xl font-bold text-white mb-5">Local Epoxy Flooring in Erina</h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>Dynamic Flooring Solutions is based in Tuggerah - just minutes from Erina. We're not a company driving down from Sydney and rushing the job. We're local, and we're accountable to the local community.</p>
                <p>Erina has a mix of retail, commercial, and industrial work - and we handle all of it. The key difference is we spec the system properly for each environment rather than applying the same product everywhere. A retail showroom needs a different system to an industrial warehouse.</p>
                <p>Carl and Santiago are owner-operators. Every job they take on, they're on the tools themselves. 500+ floors installed and we stand behind every one of them.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Based in Tuggerah", sub: "Minutes from Erina" },
                { label: "Commercial & industrial specialists", sub: "Warehouses, retail, workshops" },
                { label: "500+ floors installed", sub: "Across the Central Coast" },
                { label: "Fixed-price quotes", sub: "No day-of variations" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-4 p-4 rounded-xl border border-[#333]" style={{ background: "#222" }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "linear-gradient(135deg, #7B35CC, #F05A28)" }} />
                  <div>
                    <p className="text-sm font-semibold text-white">{s.label}</p>
                    <p className="text-xs text-gray-400">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Also Serving Erina Surrounds</h2>
          <p className="text-gray-400 text-sm mb-8">We service Erina and all surrounding suburbs across the Central Coast.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) => (
              <span key={area} className="px-4 py-2 rounded-full text-sm text-gray-300 border border-[#333]" style={{ background: "#222" }}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Epoxy Flooring Erina — FAQs</h2>
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
                <div className="px-5 pb-5 text-gray-400 leading-relaxed text-sm border-t border-[#333] pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ServicePageForm heading="Get a Free Quote in Erina" subheading="We'll visit your site, assess the floor, and give you a fixed price. No surprises." />
    </>
  );
}
