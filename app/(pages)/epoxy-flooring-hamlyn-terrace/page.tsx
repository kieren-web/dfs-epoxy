import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Epoxy Flooring Hamlyn Terrace | Dynamic Flooring Solutions",
  description:
    "Epoxy flooring in Hamlyn Terrace. Residential garages, driveways, patios, and commercial flooring. Specialists in new-build concrete slabs. Free quotes — call 0483 986 101.",
  alternates: { canonical: `${SITE_URL}/epoxy-flooring-hamlyn-terrace` },
};

const services = [
  { title: "Garage Epoxy Flooring", desc: "Full broadcast flake and solid colour systems for Hamlyn Terrace residential garages. Hot tyre resistant, UV stable — perfect for new concrete slabs.", href: "/services/garage-epoxy-flooring-central-coast" },
  { title: "Driveways & Patios", desc: "Polyaspartic UV-stable coatings for outdoor concrete at Hamlyn Terrace homes. Durable, low maintenance, and built to last.", href: "/services/residential-epoxy-flooring-central-coast" },
  { title: "Commercial Flooring", desc: "Seamless commercial-grade epoxy for new and established commercial premises in Hamlyn Terrace and Warnervale.", href: "/services/commercial-epoxy-flooring-central-coast" },
  { title: "Workshop Flooring", desc: "Oil-resistant, hard-wearing epoxy for workshops and trade spaces in the Hamlyn Terrace area.", href: "/services/workshop-epoxy-flooring-central-coast" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Epoxy Flooring Hamlyn Terrace",
  provider: {
    "@type": "LocalBusiness",
    name: "Dynamic Flooring Solutions",
    telephone: "+61483986101",
    address: { "@type": "PostalAddress", addressLocality: "Tuggerah", addressRegion: "NSW", addressCountry: "AU" },
  },
  areaServed: "Hamlyn Terrace, NSW",
  description: "Residential and commercial epoxy flooring in Hamlyn Terrace. Specialists in new-build concrete slabs. Owner-operated, 500+ Central Coast floors.",
};

const nearbyAreas = ["Warnervale", "Wadalba", "Mardi", "Lake Haven", "Kanwal", "Gorokan", "Tuggerah", "Wyong"];

const faqs = [
  {
    q: "Do you install epoxy flooring in Hamlyn Terrace?",
    a: "Yes. Hamlyn Terrace is in our regular northern suburbs service area. We install residential garage epoxy, driveways, and patios throughout the suburb, and we&apos;re based in nearby Tuggerah.",
  },
  {
    q: "What&apos;s the best epoxy finish for a new residential garage in Hamlyn Terrace?",
    a: "For new homes, the most popular option is a full broadcast flake system — coloured flakes broadcast over a base coat, then sealed with a clear polyaspartic topcoat. It&apos;s hot tyre resistant, UV stable, hides minor imperfections in the concrete, and looks great. Solid colour systems are a cleaner alternative if you prefer a more minimalist look.",
  },
  {
    q: "How much does a double garage epoxy cost in Hamlyn Terrace?",
    a: "A standard double garage (around 36–40m²) typically falls in the $3,200–$4,000 range depending on the system chosen. All quotes are free and fixed-price. We&apos;ll assess the slab condition and confirm the price on site.",
  },
  {
    q: "How long until I can drive on a new epoxy floor in Hamlyn Terrace?",
    a: "We require 24 hours before light foot traffic and 72 hours before driving on the floor. Newer concrete slabs in Hamlyn Terrace typically cure well and don&apos;t require extended wait times beyond the standard cure period.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dynamicflooringsolutions.com.au" },
    { "@type": "ListItem", position: 2, name: "Epoxy Flooring Hamlyn Terrace", item: "https://dynamicflooringsolutions.com.au/epoxy-flooring-hamlyn-terrace" },
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

export default function HamlynTerraceEpoxyPage() {
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
            <span className="text-gray-300">Epoxy Flooring Hamlyn Terrace</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30" style={{ background: "rgba(123,53,204,0.15)" }}>
            <span style={{ color: "#D4187A" }}>📍</span> Serving Hamlyn Terrace &amp; Warnervale
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Epoxy Flooring{" "}
            <span style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Hamlyn Terrace
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Residential and commercial epoxy flooring in Hamlyn Terrace. Garages, driveways, patios — specialists in newer concrete slabs. Owner-operated, free fixed-price quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}>
              Get a Free Quote in Hamlyn Terrace
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
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>Hamlyn Terrace Services</p>
            <h2 className="text-3xl font-bold text-white">Epoxy Flooring Services in Hamlyn Terrace</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">Residential and commercial systems for Hamlyn Terrace&apos;s newer homes and developing commercial precinct.</p>
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
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>New Home Specialists</p>
              <h2 className="text-3xl font-bold text-white mb-5">Epoxy Flooring in Hamlyn Terrace</h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>Hamlyn Terrace is one of the Central Coast&apos;s newer residential areas — and newer concrete slabs are ideal for epoxy installation. They typically require less preparation than older concrete, bond excellently to epoxy systems, and give you a cleaner, more predictable result.</p>
                <p>We install full broadcast flake systems, solid colour systems, and polyaspartic topcoats for residential garages in Hamlyn Terrace. All our garage systems are hot tyre resistant, UV stable, and easy to clean — built to handle daily vehicle use for 15+ years.</p>
                <p>We&apos;re based in Tuggerah and service Hamlyn Terrace, Warnervale, and the surrounding northern suburbs regularly. Free fixed-price quotes, owner-operated on every job.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Newer home specialists", sub: "Ideal conditions for epoxy installation" },
                { label: "Residential garage experts", sub: "Flake, solid colour, and polyaspartic systems" },
                { label: "Based in Tuggerah", sub: "Regular northern suburbs service" },
                { label: "Free fixed-price quotes", sub: "No variations on the day" },
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
          <p className="text-gray-400 text-sm mb-8">We service Hamlyn Terrace, Warnervale, and surrounding northern Central Coast suburbs.</p>
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
            <h2 className="text-3xl font-bold text-white">Epoxy Flooring Hamlyn Terrace — FAQs</h2>
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

      <ServicePageForm heading="Get a Free Quote in Hamlyn Terrace" subheading="We'll visit your site, assess the floor, and give you a fixed price. No surprises." />
    </>
  );
}
