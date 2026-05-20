import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Epoxy Flooring Ourimbah & Somersby | Dynamic Flooring Solutions",
  description:
    "Commercial and industrial epoxy flooring in Ourimbah and Somersby. Warehouses, workshops, commercial kitchens. Forklift-rated systems. Based in Tuggerah — fast response. Free quotes — call 0483 986 101.",
  alternates: { canonical: `${SITE_URL}/epoxy-flooring-ourimbah` },
};

const services = [
  { title: "Warehouse & Industrial Flooring", desc: "Forklift-rated, chemical-resistant industrial epoxy for warehouses and manufacturing facilities in the Ourimbah and Somersby industrial precinct.", href: "/services/warehouse-epoxy-flooring-central-coast" },
  { title: "Workshop Flooring", desc: "Oil-resistant, impact-rated epoxy for trade workshops and mechanical premises in the Ourimbah and Somersby area.", href: "/services/workshop-epoxy-flooring-central-coast" },
  { title: "Commercial Kitchen Flooring", desc: "Food-safe, slip-resistant epoxy for commercial kitchen and food processing environments in Ourimbah.", href: "/services/commercial-kitchen-epoxy-flooring-central-coast" },
  { title: "Garage Epoxy Flooring", desc: "Residential garage epoxy for homes in the Ourimbah area. Hot tyre resistant, UV stable, easy to clean.", href: "/services/garage-epoxy-flooring-central-coast" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Epoxy Flooring Ourimbah",
  provider: {
    "@type": "LocalBusiness",
    name: "Dynamic Flooring Solutions",
    telephone: "+61483986101",
    address: { "@type": "PostalAddress", addressLocality: "Tuggerah", addressRegion: "NSW", addressCountry: "AU" },
  },
  areaServed: "Ourimbah, NSW",
  description: "Commercial and industrial epoxy flooring in Ourimbah and the Somersby industrial precinct. Forklift-rated systems, minimum disruption installs. Based in Tuggerah.",
};

const nearbyAreas = ["Somersby", "Gosford", "Tuggerah", "Lisarow", "Narara", "Kariong", "West Gosford", "Point Clare"];

const faqs = [
  {
    q: "Do you do warehouse epoxy flooring in Ourimbah and Somersby?",
    a: "Yes. The Ourimbah and Somersby industrial precinct is one of our most active commercial service areas. We regularly install forklift-rated industrial epoxy systems in warehouses, workshops, and manufacturing facilities in this area.",
  },
  {
    q: "How do you minimise disruption in a working warehouse?",
    a: "We plan the install in stages to keep as much of the facility operational as possible. We can work weekends, early mornings, or after hours to avoid disrupting normal operations. We confirm the staging plan before we start.",
  },
  {
    q: "What system is right for a heavy industrial floor in Ourimbah?",
    a: "For heavy industrial environments — forklift traffic, chemical exposure, heavy point loads — we specify a multi-layer system: moisture-tolerant primer, aggregate broadcast layer for thickness and impact resistance, and a chemical-resistant polyurethane or epoxy topcoat. Not a garage system scaled up — a proper industrial specification.",
  },
  {
    q: "How long does a large commercial floor installation take?",
    a: "It depends on the square meterage and staging requirements. Smaller commercial floors take 2–3 days. Larger warehouse floors can take a week or more with staging. We provide a full installation timeline with the quote.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dynamicflooringsolutions.com.au" },
    { "@type": "ListItem", position: 2, name: "Epoxy Flooring Ourimbah", item: "https://dynamicflooringsolutions.com.au/epoxy-flooring-ourimbah" },
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

export default function OurimbahEpoxyPage() {
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
            <span className="text-gray-300">Epoxy Flooring Ourimbah</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30" style={{ background: "rgba(123,53,204,0.15)" }}>
            <span style={{ color: "#D4187A" }}>📍</span> Serving Ourimbah &amp; Somersby Industrial Area
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Epoxy Flooring{" "}
            <span style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Ourimbah
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Commercial and industrial epoxy flooring for the Ourimbah and Somersby industrial precinct. Warehouses, workshops, and commercial facilities — forklift-rated systems, minimum disruption installs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}>
              Get a Free Quote in Ourimbah
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
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>Ourimbah Services</p>
            <h2 className="text-3xl font-bold text-white">Epoxy Flooring Services in Ourimbah &amp; Somersby</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">Industrial and commercial systems for the Ourimbah and Somersby precinct.</p>
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
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>Industrial Precinct Specialists</p>
              <h2 className="text-3xl font-bold text-white mb-5">Commercial Epoxy Flooring for the Ourimbah &amp; Somersby Industrial Precinct</h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>The Ourimbah and Somersby industrial precinct is one of the Central Coast&apos;s busiest commercial areas — warehouses, trade workshops, and manufacturing facilities. Industrial flooring is our specialty, and this precinct is part of our regular commercial service area.</p>
                <p>We install forklift-rated, chemical-resistant epoxy systems built for industrial environments. That means a multi-layer system: moisture-tolerant primer, broadcast aggregate layer for impact resistance, and a commercial-grade topcoat. Not a garage system scaled up for a warehouse floor.</p>
                <p>We&apos;re based in Tuggerah — minutes from the Ourimbah and Somersby industrial area. Fast response for quotes and scheduled installs, and we can stage the work to minimise disruption to your operations.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Industrial estate specialists", sub: "Warehouses, workshops, manufacturing" },
                { label: "Forklift-rated systems", sub: "Proper industrial specifications" },
                { label: "Based minutes away in Tuggerah", sub: "Fast response, local team" },
                { label: "Minimum disruption installs", sub: "Staged scheduling available" },
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
          <p className="text-gray-400 text-sm mb-8">We service Ourimbah, Somersby, and surrounding Central Coast areas.</p>
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
            <h2 className="text-3xl font-bold text-white">Epoxy Flooring Ourimbah — FAQs</h2>
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

      <ServicePageForm heading="Get a Free Quote in Ourimbah" subheading="We'll visit your site, assess the floor, and give you a fixed price. No surprises." />
    </>
  );
}
