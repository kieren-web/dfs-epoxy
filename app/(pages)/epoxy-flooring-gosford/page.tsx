import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Epoxy Flooring Gosford | Dynamic Flooring Solutions",
  description:
    "Epoxy flooring in Gosford. Commercial and residential - warehouses, kitchens, workshops, garages. Owner-operated, 500+ floors. Free quotes - call 0483 986 101.",
  alternates: {
    canonical: `${SITE_URL}/epoxy-flooring-gosford`,
  },
};

const services = [
  {
    title: "Warehouse & Industrial Flooring",
    desc: "Heavy-duty systems for Gosford and Central Coast warehouses. Forklift-rated, chemical-resistant, anti-slip.",
    href: "/services/warehouse-epoxy-flooring-central-coast",
  },
  {
    title: "Commercial Kitchen Flooring",
    desc: "Food-safe, seamless epoxy for restaurants, cafes, and commercial kitchens in Gosford.",
    href: "/services/commercial-kitchen-epoxy-flooring-central-coast",
  },
  {
    title: "Workshop & Industrial",
    desc: "Oil-resistant, durable systems for mechanics, manufacturing, and trades workshops.",
    href: "/services/commercial-epoxy-flooring-central-coast",
  },
  {
    title: "Garage Epoxy Flooring",
    desc: "Full broadcast flake systems with polyaspartic topcoat. Hot tyre resistant, UV stable.",
    href: "/services/garage-epoxy-flooring-central-coast",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Epoxy Flooring Gosford",
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
  areaServed: "Gosford, NSW",
  description:
    "Commercial and residential epoxy flooring in Gosford and surrounds. Owner-operated, 500+ floors installed, Central Coast based.",
};

const nearbyAreas = [
  "West Gosford", "North Gosford", "Kariong", "Lisarow",
  "Erina", "Narara", "Point Frederick", "Springfield",
];

const faqs = [
  {
    q: "Do you install epoxy flooring in Gosford?",
    a: "Yes, we service Gosford and all surrounding suburbs regularly. We're based in Tuggerah — about 15 minutes north — so Gosford is one of our most active service areas for both commercial and residential jobs.",
  },
  {
    q: "How much does epoxy flooring cost in Gosford?",
    a: "Residential garage systems start from $90–$100/m². Commercial jobs — warehouses, kitchens, workshops — are priced on site inspection due to the variation in floor size, condition, and system requirements. We provide free fixed-price quotes with no obligation.",
  },
  {
    q: "How quickly can you quote a job in Gosford?",
    a: "We aim to visit within 2–3 business days of your enquiry and provide a same-day quote on site. Most Gosford jobs we can schedule quickly given our proximity.",
  },
  {
    q: "Do you work on commercial floors in Gosford?",
    a: "Yes. We regularly install epoxy in Gosford warehouses, commercial kitchens, workshops, and industrial spaces. Commercial work makes up a large part of what we do on the Central Coast.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dynamicflooringsolutions.com.au" },
    { "@type": "ListItem", position: 2, name: "Epoxy Flooring Gosford", item: "https://dynamicflooringsolutions.com.au/epoxy-flooring-gosford" },
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

export default function GosfordEpoxyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
            <span className="text-gray-300">Epoxy Flooring Gosford</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30"
            style={{ background: "rgba(123,53,204,0.15)" }}>
            <span style={{ color: "#D4187A" }}>📍</span>
            Serving Gosford & Surrounds
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Epoxy Flooring{" "}
            <span style={{
              background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Gosford
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Commercial and residential epoxy flooring in Gosford and the surrounding Central Coast area.
            Owner-operated by Carl & Santiago. 500+ floors installed. Fixed-price quotes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}
            >
              Get a Free Quote in Gosford
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

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
              Gosford Services
            </p>
            <h2 className="text-3xl font-bold text-white">
              Epoxy Flooring Services in Gosford
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
              Commercial-grade systems for every environment. We're based on the Central Coast and service Gosford and surrounding suburbs regularly.
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

      {/* About section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
                Central Coast Based
              </p>
              <h2 className="text-3xl font-bold text-white mb-5">
                Local Epoxy Flooring in Gosford
              </h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>
                  Dynamic Flooring Solutions is based in Tuggerah - right in the heart of the Central Coast. Gosford is one of our most
                  active service areas, and we install in commercial and residential properties across the entire Gosford region regularly.
                </p>
                <p>
                  Carl and Santiago are owner-operators. They're on every job - not a subcontractor crew. When you deal with DFS,
                  you deal with the owners from your first call to the final inspection.
                </p>
                <p>
                  We've installed 500+ floors across the Central Coast. Commercial kitchens, warehouses, workshops, and residential
                  garages - we know what each environment demands and we spec the system accordingly.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Based in Tuggerah", sub: "15 min from Gosford CBD" },
                { label: "500+ floors installed", sub: "Across the Central Coast" },
                { label: "10+ years experience", sub: "Commercial & residential" },
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

      {/* Nearby areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Also Serving Gosford Surrounds</h2>
          <p className="text-gray-400 text-sm mb-8">
            We service Gosford and all surrounding suburbs within the Central Coast region.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) => (
              <span key={area} className="px-4 py-2 rounded-full text-sm text-gray-300 border border-[#333]" style={{ background: "#222" }}>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Epoxy Flooring Gosford — FAQs</h2>
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

      <ServicePageForm
        heading="Get a Free Quote in Gosford"
        subheading="We'll visit your site, assess the floor, and give you a fixed price. No surprises."
      />
    </>
  );
}
