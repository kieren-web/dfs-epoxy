import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Epoxy Flooring Warnervale | Dynamic Flooring Solutions",
  description:
    "Warehouse and industrial epoxy flooring in Warnervale. Forklift-rated systems for the Warnervale industrial estate. Based in Tuggerah. Free quotes — call 0483 986 101.",
  alternates: { canonical: `${SITE_URL}/epoxy-flooring-warnervale` },
};

const services = [
  { title: "Warehouse & Industrial Flooring", desc: "Forklift-rated, chemical-resistant industrial epoxy for warehouses and distribution centres in the Warnervale industrial estate.", href: "/services/warehouse-epoxy-flooring-central-coast" },
  { title: "Workshop Flooring", desc: "Heavy-duty oil and impact resistant epoxy for trade workshops and mechanical premises in Warnervale.", href: "/services/workshop-epoxy-flooring-central-coast" },
  { title: "Commercial Flooring", desc: "Seamless commercial-grade epoxy for commercial units and light industrial premises in the Warnervale area.", href: "/services/commercial-epoxy-flooring-central-coast" },
  { title: "Garage Epoxy Flooring", desc: "Residential garage epoxy for homes in Warnervale and surrounding new estates. Hot tyre resistant, UV stable.", href: "/services/garage-epoxy-flooring-central-coast" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Epoxy Flooring Warnervale",
  provider: {
    "@type": "LocalBusiness",
    name: "Dynamic Flooring Solutions",
    telephone: "+61483986101",
    address: { "@type": "PostalAddress", addressLocality: "Tuggerah", addressRegion: "NSW", addressCountry: "AU" },
  },
  areaServed: "Warnervale, NSW",
  description: "Warehouse and industrial epoxy flooring in Warnervale. Forklift-rated systems for the Warnervale industrial estate. Based in nearby Tuggerah.",
};

const nearbyAreas = ["Hamlyn Terrace", "Wadalba", "Wyong", "Tuggerah", "Lake Haven", "Kanwal", "Mardi", "Charmhaven"];

const faqs = [
  {
    q: "Do you do warehouse epoxy flooring in Warnervale?",
    a: "Yes. The Warnervale industrial estate is one of our active commercial service areas. We install forklift-rated industrial epoxy systems for warehouses, distribution centres, and manufacturing facilities in the estate.",
  },
  {
    q: "What does a commercial warehouse epoxy floor cost in Warnervale?",
    a: "Warehouse and industrial floors are quoted on site — the area, current floor condition, and specific system requirements all affect the price. All quotes are free and fixed-price. We&apos;re based in Tuggerah, close to Warnervale, and can usually arrange a site visit within 2–3 business days.",
  },
  {
    q: "Can you stage the work in a live warehouse in Warnervale?",
    a: "Yes. We plan the install in stages to keep as much of the facility operational as possible. We confirm the staging plan before we start and can schedule around your operational requirements, including weekends and after-hours installs.",
  },
  {
    q: "How long does a large warehouse epoxy floor installation take in Warnervale?",
    a: "It depends on the square meterage and staging approach. Smaller floors take 2–3 days. Larger warehouse floors with staging can take a week or more. We provide a full installation timeline with the fixed-price quote.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dynamicflooringsolutions.com.au" },
    { "@type": "ListItem", position: 2, name: "Epoxy Flooring Warnervale", item: "https://dynamicflooringsolutions.com.au/epoxy-flooring-warnervale" },
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

export default function WarnervalEpoxyPage() {
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
            <span className="text-gray-300">Epoxy Flooring Warnervale</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30" style={{ background: "rgba(123,53,204,0.15)" }}>
            <span style={{ color: "#D4187A" }}>📍</span> Serving Warnervale Industrial Area &amp; Surrounds
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Epoxy Flooring{" "}
            <span style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Warnervale
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Warehouse and industrial epoxy flooring for the Warnervale industrial estate. Forklift-rated systems, minimum disruption scheduling — based in nearby Tuggerah.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}>
              Get a Free Quote in Warnervale
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
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>Warnervale Services</p>
            <h2 className="text-3xl font-bold text-white">Epoxy Flooring Services in Warnervale</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">Industrial and commercial systems for the Warnervale industrial estate and surrounding suburbs.</p>
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
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>Industrial Estate Specialists</p>
              <h2 className="text-3xl font-bold text-white mb-5">Warehouse &amp; Industrial Epoxy Flooring in Warnervale</h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>The Warnervale industrial estate is one of the fastest-growing commercial precincts on the Central Coast. Warehouses, distribution centres, and manufacturing facilities are moving into this area — and floor quality directly affects how these operations run. Dusty, deteriorating concrete isn&apos;t just an eyesore; it&apos;s a safety and maintenance problem.</p>
                <p>We install heavy-duty forklift-rated epoxy systems designed for the demands of warehousing and manufacturing. Chemical resistant, easy to clean, built to last 15–20 years with proper preparation. Diamond grinding is the foundation — we don&apos;t coat over poor concrete and hope for the best.</p>
                <p>Based in Tuggerah, we&apos;re close to Warnervale and service this industrial area regularly. Minimum disruption scheduling is available — we can stage the work around your operations.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Warnervale industrial specialists", sub: "Regular service in the estate" },
                { label: "Forklift-rated commercial systems", sub: "Built for warehouse demands" },
                { label: "Based in Tuggerah — fast response", sub: "Close to the Warnervale estate" },
                { label: "Minimum disruption scheduling", sub: "Staged installs around operations" },
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
          <h2 className="text-2xl font-bold text-white mb-3">Also Serving Nearby Suburbs</h2>
          <p className="text-gray-400 text-sm mb-8">We service Warnervale and surrounding northern Central Coast suburbs.</p>
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
            <h2 className="text-3xl font-bold text-white">Epoxy Flooring Warnervale — FAQs</h2>
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

      <ServicePageForm heading="Get a Free Quote in Warnervale" subheading="We'll visit your site, assess the floor, and give you a fixed price. No surprises." />
    </>
  );
}
