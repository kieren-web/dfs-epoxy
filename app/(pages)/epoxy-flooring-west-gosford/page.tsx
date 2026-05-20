import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Epoxy Flooring West Gosford | Dynamic Flooring Solutions",
  description:
    "Commercial epoxy flooring in West Gosford. Warehouses, workshops, commercial kitchens, and commercial units. Environment-specific systems. Free quotes — call 0483 986 101.",
  alternates: { canonical: `${SITE_URL}/epoxy-flooring-west-gosford` },
};

const services = [
  { title: "Warehouse & Industrial Flooring", desc: "Forklift-rated, chemical-resistant industrial epoxy for warehouses and trade suppliers in the West Gosford industrial precinct.", href: "/services/warehouse-epoxy-flooring-central-coast" },
  { title: "Workshop Flooring", desc: "Oil-resistant, impact-rated epoxy for trade workshops and mechanical premises throughout West Gosford.", href: "/services/workshop-epoxy-flooring-central-coast" },
  { title: "Commercial Kitchen Flooring", desc: "Food-safe, slip-resistant epoxy for commercial kitchens and food production environments in West Gosford.", href: "/services/commercial-kitchen-epoxy-flooring-central-coast" },
  { title: "Commercial Flooring", desc: "Seamless commercial-grade epoxy for retail, showrooms, and general commercial premises in West Gosford and Gosford CBD.", href: "/services/commercial-epoxy-flooring-central-coast" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Epoxy Flooring West Gosford",
  provider: {
    "@type": "LocalBusiness",
    name: "Dynamic Flooring Solutions",
    telephone: "+61483986101",
    address: { "@type": "PostalAddress", addressLocality: "Tuggerah", addressRegion: "NSW", addressCountry: "AU" },
  },
  areaServed: "West Gosford, NSW",
  description: "Commercial and industrial epoxy flooring in West Gosford. Warehouses, workshops, commercial kitchens, and retail. Owner-operated, environment-specific systems.",
};

const nearbyAreas = ["Gosford", "East Gosford", "North Gosford", "Point Frederick", "Lisarow", "Narara", "Kariong", "Somersby"];

const faqs = [
  {
    q: "Do you do commercial epoxy flooring in West Gosford?",
    a: "Yes. West Gosford is one of our most active commercial service areas. We regularly install in workshops, warehouses, commercial kitchens, and retail premises throughout the precinct.",
  },
  {
    q: "What&apos;s the right epoxy system for a busy workshop in West Gosford?",
    a: "For a busy trade workshop, we specify an oil-resistant, impact-rated multi-layer system — penetrating primer, aggregate broadcast layer for texture and durability, and a chemical-resistant topcoat. The system handles vehicle traffic, oil spills, and the daily cleaning demands of a working workshop.",
  },
  {
    q: "Can you do commercial kitchen epoxy flooring in West Gosford?",
    a: "Yes. Commercial kitchen flooring requires a food-safe, slip-resistant, seamless system. We install multi-layer epoxy with anti-slip aggregate and a smooth topcoat profile that meets commercial kitchen requirements — easy to clean, no grout lines, chemical resistant.",
  },
  {
    q: "How quickly can you quote a commercial job in West Gosford?",
    a: "West Gosford is a regular part of our service area. We aim to visit within 2–3 business days of your enquiry. Carl and Santiago do every site assessment — you get a detailed, fixed-price quote, not a ballpark estimate.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dynamicflooringsolutions.com.au" },
    { "@type": "ListItem", position: 2, name: "Epoxy Flooring West Gosford", item: "https://dynamicflooringsolutions.com.au/epoxy-flooring-west-gosford" },
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

export default function WestGosfordEpoxyPage() {
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
            <span className="text-gray-300">Epoxy Flooring West Gosford</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30" style={{ background: "rgba(123,53,204,0.15)" }}>
            <span style={{ color: "#D4187A" }}>📍</span> Serving West Gosford &amp; Gosford Industrial Area
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Epoxy Flooring{" "}
            <span style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              West Gosford
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Commercial epoxy flooring in West Gosford. Warehouses, workshops, commercial kitchens, and retail — environment-specific systems, owner-operated by Carl and Santiago.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}>
              Get a Free Quote in West Gosford
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
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>West Gosford Services</p>
            <h2 className="text-3xl font-bold text-white">Epoxy Flooring Services in West Gosford</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">Industrial, commercial kitchen, and commercial systems for the Central Coast&apos;s busiest commercial precinct.</p>
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
          <div className="mt-8 text-center">
            <Link
              href="/services/commercial-epoxy-flooring-central-coast"
              className="text-sm font-semibold hover:opacity-80 transition-opacity"
              style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              View all commercial epoxy flooring Central Coast services →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>Commercial Precinct Specialists</p>
              <h2 className="text-3xl font-bold text-white mb-5">Commercial Epoxy Flooring in West Gosford</h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>West Gosford is the Central Coast&apos;s busiest commercial and industrial precinct — trade suppliers, workshops, warehouses, and commercial kitchen operations. We install in all of these environments regularly and understand what each one needs.</p>
                <p>Every environment gets the right system. A commercial kitchen needs a different floor to a warehouse — different slip resistance, different chemical resistance, different surface profile. We assess every site and spec accordingly. Primer, broadcast layer, and the right topcoat for that specific environment.</p>
                <p>Gosford is one of our most active service areas. Carl and Santiago are on every job from quote to final inspection — no sales reps, no subcontractors, no surprises.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Commercial precinct specialists", sub: "Workshops, warehouses, and kitchens" },
                { label: "Environment-specific systems", sub: "Right spec for each use case" },
                { label: "Owner-operators on every job", sub: "Carl & Santiago from quote to finish" },
                { label: "Commercial kitchen specialists", sub: "Food-safe, slip-resistant systems" },
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
          <h2 className="text-2xl font-bold text-white mb-3">Also Serving Nearby Areas</h2>
          <p className="text-gray-400 text-sm mb-8">We service West Gosford and all surrounding Gosford area suburbs.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) => (
              <span key={area} className="px-4 py-2 rounded-full text-sm text-gray-300 border border-[#333]" style={{ background: "#222" }}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Epoxy Flooring West Gosford — FAQs</h2>
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

      <ServicePageForm heading="Get a Free Quote in West Gosford" subheading="We'll visit your site, assess the floor, and give you a fixed price. No surprises." />
    </>
  );
}
