import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Commercial Epoxy Flooring Central Coast | Dynamic Flooring Solutions",
  description:
    "Commercial epoxy flooring specialists on the Central Coast. Warehouses, kitchens, workshops, industrial spaces. Owner-operated, 500+ floors installed. Free quotes - call 0483 986 101.",
  alternates: {
    canonical: `${SITE_URL}/services/commercial-epoxy-flooring-central-coast`,
  },
  openGraph: {
    title: "Commercial Epoxy Flooring Central Coast | Dynamic Flooring Solutions",
    description:
      "Commercial epoxy flooring specialists on the Central Coast. Owner-operated, 500+ floors installed.",
    url: `${SITE_URL}/services/commercial-epoxy-flooring-central-coast`,
  },
};

const services = [
  {
    title: "Warehouse Epoxy Flooring",
    desc: "Heavy-duty seamless systems for forklifts, pallet jacks, and constant traffic. Chemical-resistant, anti-slip topcoats as standard.",
    href: "/services/warehouse-epoxy-flooring-central-coast",
  },
  {
    title: "Commercial Kitchen Flooring",
    desc: "Hygiene-grade, food-safe coatings that handle daily cleaning, hot water, and chemical washdowns. Fully seamless - no grout lines.",
    href: "/services/commercial-kitchen-epoxy-flooring-central-coast",
  },
  {
    title: "Workshop & Industrial Flooring",
    desc: "Oil-resistant, impact-resistant systems for mechanics workshops, manufacturing plants, and industrial spaces.",
    href: "/services/warehouse-epoxy-flooring-central-coast",
  },
  {
    title: "Brewery & Hospitality Flooring",
    desc: "Slip-resistant, easy-to-sanitise specialist coatings for breweries, bars, cafes, and hospitality venues.",
    href: "/services/commercial-epoxy-flooring-central-coast",
  },
];

const whyDFS = [
  {
    title: "Owner-Operators On Every Job",
    desc: "Carl and Santiago are on site - not a supervisor, not a sub. You deal with the owners from quote to final inspection.",
  },
  {
    title: "500+ Commercial Floors Installed",
    desc: "We've done this in warehouses, commercial kitchens, workshops, and manufacturing spaces across the Central Coast and NSW.",
  },
  {
    title: "Commercial-Grade Systems Only",
    desc: "Multi-layer primer, broadcast, and chemical-resistant topcoat. We don't apply a garage system to a commercial kitchen.",
  },
  {
    title: "Minimum Disruption",
    desc: "We stage work around your operations - nights, weekends, sections. Warehouses and commercial kitchens stay running.",
  },
  {
    title: "Proper Surface Preparation",
    desc: "Every job starts with diamond grinding. No prep shortcuts - that's why our floors don't delaminate at 12 months.",
  },
  {
    title: "Fixed-Price Quotes",
    desc: "The price we quote is the price you pay. No variations on the day, no surprise add-ons.",
  },
];

const faqs = [
  {
    q: "What types of commercial floors do you install?",
    a: "We specialise in warehouses, commercial kitchens, workshops, manufacturing facilities, breweries, hospitality venues, and industrial spaces across the Central Coast. Any high-traffic commercial environment.",
  },
  {
    q: "Can you work around our business hours?",
    a: "Yes. We regularly stage commercial jobs to avoid disrupting operations. We can work nights, weekends, or in sections - whatever keeps your business running.",
  },
  {
    q: "What's the difference between commercial and residential epoxy?",
    a: "Commercial systems use heavier build coats, chemical-resistant topcoats, and anti-slip aggregates as standard. Residential systems prioritise aesthetics. We specify the right system for the environment - we don't cut corners by applying a garage system to a warehouse.",
  },
  {
    q: "Do your commercial coatings meet food safety standards?",
    a: "Yes. Our commercial kitchen systems use food-safe, seamless coatings with anti-slip and chemical-resistant topcoats. Product data sheets are available on request.",
  },
  {
    q: "How long does a commercial epoxy install take?",
    a: "It depends on floor size, condition, and staging requirements. A 500m² warehouse typically takes 2–4 days. We'll confirm exact timeframes in your quote. You can return to commercial use within 72 hours of final coat.",
  },
  {
    q: "Do you provide a warranty?",
    a: "Yes. Warranty terms are confirmed at quote stage and depend on the system installed and the environment. We use commercial-grade materials and follow manufacturer installation specs on every job.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Epoxy Flooring Central Coast",
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
    "High-performance commercial epoxy flooring systems for warehouses, commercial kitchens, workshops, and industrial spaces on the Central Coast of NSW.",
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

export default function CommercialEpoxyPage() {
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gray-300">Commercial Epoxy Flooring</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30"
            style={{ background: "rgba(123,53,204,0.15)" }}>
            <span style={{ color: "#D4187A" }}>⚡</span>
            Central Coast Commercial Specialists
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Commercial Epoxy Flooring{" "}
            <span style={{
              background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Central Coast
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
            High-performance epoxy systems for warehouses, commercial kitchens, workshops, and industrial spaces.
            Owner-operated. 500+ floors installed. Built for environments where floors actually get used.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}
            >
              Get a Free Commercial Quote
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

      {/* Trust strip */}
      <div className="border-y border-[#333] py-4 px-4" style={{ background: "#222" }}>
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-400">
          {["500+ Floors Installed", "10+ Years Experience", "Owner-Operated", "Central Coast Based", "Fixed-Price Quotes"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span style={{ color: "#D4187A" }}>✓</span> {t}
            </span>
          ))}
        </div>
      </div>

      {/* What we do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
                What We Do
              </p>
              <h2 className="text-3xl font-bold text-white mb-5">
                Commercial Epoxy Flooring That Earns Its Keep
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
                <p>
                  Commercial and industrial floors face demands that residential floors never will - forklifts, chemical spills,
                  daily washdowns, heavy foot traffic, and pressure-cleaning. A standard coating won't cut it.
                </p>
                <p>
                  Dynamic Flooring Solutions installs multi-layer commercial-grade epoxy systems: proper diamond-ground prep,
                  moisture-mitigating primers, broadcast or solid mid-coats, and durable chemical-resistant topcoats.
                  Every system is specified to match the environment.
                </p>
                <p>
                  We've installed floors in working warehouses, active commercial kitchens, busy workshops, and manufacturing
                  facilities across the Central Coast. We know what it takes to get the job done without shutting your operation down.
                </p>
              </div>
              <div className="mt-6 p-4 rounded-xl border border-[#333]" style={{ background: "#222" }}>
                <p className="text-sm font-semibold text-white mb-1">The prep is the product.</p>
                <p className="text-xs text-gray-400">
                  80% of commercial epoxy failures come from inadequate surface preparation. We diamond grind every job.
                  No exceptions. It's the difference between a floor that lasts 15 years and one that peels in 18 months.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "500+", sub: "Commercial floors" },
                { label: "10+", sub: "Years in business" },
                { label: "72hr", sub: "Return to service" },
                { label: "0", sub: "Subcontractors used" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl p-6 text-center border border-[#333]" style={{ background: "#222" }}>
                  <p className="text-4xl font-bold mb-1" style={{
                    background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    {stat.label}
                  </p>
                  <p className="text-xs text-gray-400">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
              Our Services
            </p>
            <h2 className="text-3xl font-bold text-white">Commercial Flooring Systems</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
              Every environment has different demands. We specify and install the right system for yours.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl p-6 border border-[#333] hover:border-[#7B35CC]/40 transition-colors" style={{ background: "#222" }}>
                <div className="w-1 h-8 rounded-full mb-4" style={{ background: "linear-gradient(180deg, #7B35CC, #F05A28)" }} />
                <h3 className="font-bold text-white mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{s.desc}</p>
                <Link
                  href={s.href}
                  className="text-xs font-semibold hover:opacity-80 transition-opacity"
                  style={{
                    background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DFS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
              Why Us
            </p>
            <h2 className="text-3xl font-bold text-white">
              Why Commercial Businesses Choose DFS
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyDFS.map((item) => (
              <div key={item.title} className="rounded-xl p-6 border border-[#333]" style={{ background: "#222" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(123,53,204,0.15)" }}>
                  <svg className="w-4 h-4" fill="none" stroke="#7B35CC" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">
              Commercial Epoxy Flooring - FAQs
            </h2>
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

      {/* Quote form */}
      <ServicePageForm
        heading="Get a Free Commercial Epoxy Quote"
        subheading="We visit your site, assess the floor, and give you a fixed price. No surprises."
      />
    </>
  );
}
