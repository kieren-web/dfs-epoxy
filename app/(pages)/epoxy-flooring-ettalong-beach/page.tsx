import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Epoxy Flooring Ettalong Beach | Dynamic Flooring Solutions",
  description:
    "Epoxy flooring in Ettalong Beach. Garages, driveways, hospitality, and retail. Moisture testing, salt air resistant systems for coastal concrete. Free quotes — call 0483 986 101.",
  alternates: { canonical: `${SITE_URL}/epoxy-flooring-ettalong-beach` },
};

const services = [
  { title: "Garage Epoxy Flooring", desc: "UV-stable, moisture-resistant epoxy for Ettalong Beach residential garages. Built for coastal conditions with salt air resistant systems.", href: "/services/garage-epoxy-flooring-central-coast" },
  { title: "Hospitality & Retail Flooring", desc: "Slip-resistant, durable commercial epoxy for Ettalong Beach hospitality venues and retail stores. Food-safe options available.", href: "/services/commercial-epoxy-flooring-central-coast" },
  { title: "Driveways & Patios", desc: "Polyaspartic UV-stable coatings for outdoor concrete at Ettalong Beach. Handles coastal salt air, sun, and foot traffic.", href: "/services/residential-epoxy-flooring-central-coast" },
  { title: "Workshop Flooring", desc: "Oil-resistant, hard-wearing epoxy for workshops and trade premises on the Ettalong Beach peninsula.", href: "/services/workshop-epoxy-flooring-central-coast" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Epoxy Flooring Ettalong Beach",
  provider: {
    "@type": "LocalBusiness",
    name: "Dynamic Flooring Solutions",
    telephone: "+61483986101",
    address: { "@type": "PostalAddress", addressLocality: "Tuggerah", addressRegion: "NSW", addressCountry: "AU" },
  },
  areaServed: "Ettalong Beach, NSW",
  description: "Residential and commercial epoxy flooring in Ettalong Beach. Coastal specialists — moisture testing, salt air resistant systems. Peninsula service run from Tuggerah.",
};

const nearbyAreas = ["Umina Beach", "Woy Woy", "Booker Bay", "Patonga", "Wagstaffe", "Killcare", "Blackwall", "Gosford"];

const faqs = [
  {
    q: "Do you install epoxy flooring in Ettalong Beach?",
    a: "Yes. Ettalong Beach is part of our regular peninsula service run. We service Woy Woy, Umina Beach, and Ettalong Beach as a regular route. Both residential and commercial jobs — garages, driveways, and hospitality venues.",
  },
  {
    q: "How does salt air affect epoxy flooring at Ettalong Beach?",
    a: "Salt air is hard on standard coatings — it&apos;s less of an issue with properly specified epoxy systems. We use UV-stable polyaspartic topcoats for outdoor applications, which resist degradation from coastal UV and humidity. For indoor applications, the main concern is moisture in the slab, which we address with moisture testing before every installation.",
  },
  {
    q: "How much does epoxy cost for an older coastal home in Ettalong Beach?",
    a: "Residential garage systems start from $90–$100/m². Older concrete may need additional preparation — we factor this into the quote after the site assessment. All quotes are free and fixed-price with no day-of variations.",
  },
  {
    q: "Do you do retail and hospitality floors in Ettalong Beach?",
    a: "Yes. We install commercial epoxy for retail stores and hospitality venues in the Ettalong Beach village area. Slip-resistant, durable systems that can handle foot traffic and daily cleaning. Food-safe systems available for kitchens.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dynamicflooringsolutions.com.au" },
    { "@type": "ListItem", position: 2, name: "Epoxy Flooring Ettalong Beach", item: "https://dynamicflooringsolutions.com.au/epoxy-flooring-ettalong-beach" },
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

export default function EttalongBeachEpoxyPage() {
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
            <span className="text-gray-300">Epoxy Flooring Ettalong Beach</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30" style={{ background: "rgba(123,53,204,0.15)" }}>
            <span style={{ color: "#D4187A" }}>📍</span> Serving Ettalong Beach &amp; The Peninsula
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Epoxy Flooring{" "}
            <span style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Ettalong Beach
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Residential and commercial epoxy flooring in Ettalong Beach. Garages, driveways, hospitality venues, and retail — salt air resistant, moisture-tested systems for coastal conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}>
              Get a Free Quote in Ettalong Beach
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
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>Ettalong Beach Services</p>
            <h2 className="text-3xl font-bold text-white">Epoxy Flooring Services in Ettalong Beach</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">Residential and commercial systems designed for the challenges of a coastal peninsula location.</p>
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
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>Peninsula Coastal Specialists</p>
              <h2 className="text-3xl font-bold text-white mb-5">Epoxy Flooring in Ettalong Beach</h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>Ettalong Beach is a coastal peninsula location with specific challenges — salt air, older concrete, and high humidity. We account for all of this at the preparation stage. Moisture testing and proper slab profiling are standard on every job here, not optional extras.</p>
                <p>The village has a mix of hospitality venues, retail, and residential — we work across all of these with appropriate systems for each environment. A cafe floor needs different specifications to a residential garage. We assess each site and spec the right system.</p>
                <p>We service Ettalong Beach as part of our regular peninsula run covering Woy Woy, Umina Beach, and Ettalong. Owner-operated — Carl and Santiago on every job from quote to completion.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Peninsula coastal specialists", sub: "Salt air and humidity resistant systems" },
                { label: "Moisture testing on every job", sub: "Non-negotiable for coastal concrete" },
                { label: "Residential & commercial", sub: "Garages, retail, and hospitality" },
                { label: "Fixed-price quotes", sub: "No variations on the day" },
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
          <h2 className="text-2xl font-bold text-white mb-3">Also Serving the Peninsula</h2>
          <p className="text-gray-400 text-sm mb-8">We service Ettalong Beach and all surrounding peninsula suburbs.</p>
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
            <h2 className="text-3xl font-bold text-white">Epoxy Flooring Ettalong Beach — FAQs</h2>
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

      <ServicePageForm heading="Get a Free Quote in Ettalong Beach" subheading="We'll visit your site, assess the floor, and give you a fixed price. No surprises." />
    </>
  );
}
