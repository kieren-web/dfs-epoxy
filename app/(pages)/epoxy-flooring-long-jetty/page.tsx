import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Epoxy Flooring Long Jetty | Dynamic Flooring Solutions",
  description:
    "Epoxy flooring in Long Jetty. Cafes, bars, boutique retail, and residential garages. Food-safe, slip-resistant systems. Owner-operated. Free quotes — call 0483 986 101.",
  alternates: { canonical: `${SITE_URL}/epoxy-flooring-long-jetty` },
};

const services = [
  { title: "Hospitality & Cafe Flooring", desc: "Food-safe, slip-resistant commercial epoxy for Long Jetty cafes, bars, and restaurants. Built for foot traffic, humidity, and daily cleaning.", href: "/services/commercial-kitchen-epoxy-flooring-central-coast" },
  { title: "Garage Epoxy Flooring", desc: "Full broadcast flake systems for Long Jetty residential garages. Hot tyre resistant, UV stable, moisture resistant.", href: "/services/garage-epoxy-flooring-central-coast" },
  { title: "Commercial & Retail Flooring", desc: "Seamless commercial-grade epoxy for boutique retail, studios, and commercial premises on the Long Jetty strip.", href: "/services/commercial-epoxy-flooring-central-coast" },
  { title: "Driveways & Patios", desc: "Durable outdoor epoxy and polyaspartic coatings for Long Jetty homes. Handles coastal UV and daily foot traffic.", href: "/services/residential-epoxy-flooring-central-coast" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Epoxy Flooring Long Jetty",
  provider: {
    "@type": "LocalBusiness",
    name: "Dynamic Flooring Solutions",
    telephone: "+61483986101",
    address: { "@type": "PostalAddress", addressLocality: "Tuggerah", addressRegion: "NSW", addressCountry: "AU" },
  },
  areaServed: "Long Jetty, NSW",
  description: "Epoxy flooring for Long Jetty cafes, homes, and businesses. Hospitality floor specialists, residential and commercial systems. Owner-operated, 500+ floors installed.",
};

const nearbyAreas = ["The Entrance", "Bateau Bay", "Killarney Vale", "Toowoon Bay", "Shelly Beach", "The Entrance North", "Chittaway Bay", "Blue Bay"];

const faqs = [
  {
    q: "Do you do commercial epoxy for cafes in Long Jetty?",
    a: "Yes. Long Jetty&apos;s cafe and bar strip is exactly the environment we specialize in. We install food-safe, slip-resistant commercial epoxy systems that handle daily foot traffic, frequent cleaning, and the humidity that comes with lakeside locations.",
  },
  {
    q: "Is epoxy flooring suitable for a hospitality venue in Long Jetty?",
    a: "Absolutely. Commercial epoxy is one of the best flooring options for hospitality environments — it&apos;s seamless (no grout lines for bacteria), food-safe, slip-resistant when we add anti-slip aggregate, easy to clean, and extremely durable. We install a multi-layer system specifically designed for commercial kitchens, cafes, and bars.",
  },
  {
    q: "How much does a cafe epoxy floor cost in Long Jetty?",
    a: "Commercial hospitality floors are quoted on site — the area size, current floor condition, and system required all affect the price. All quotes are free and fixed-price. We can also provide after-hours or weekend installs to avoid disrupting your trading hours.",
  },
  {
    q: "Do you work after hours to avoid disrupting my Long Jetty business?",
    a: "Yes. We regularly schedule commercial installs outside trading hours — evenings and weekends — to minimise disruption. We&apos;re based in Tuggerah, just minutes from Long Jetty, so late finishes and early starts are manageable for our team.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dynamicflooringsolutions.com.au" },
    { "@type": "ListItem", position: 2, name: "Epoxy Flooring Long Jetty", item: "https://dynamicflooringsolutions.com.au/epoxy-flooring-long-jetty" },
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

export default function LongJettyEpoxyPage() {
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
            <span className="text-gray-300">Epoxy Flooring Long Jetty</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30" style={{ background: "rgba(123,53,204,0.15)" }}>
            <span style={{ color: "#D4187A" }}>📍</span> Serving Long Jetty &amp; The Entrance Area
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Epoxy Flooring{" "}
            <span style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Long Jetty
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Epoxy flooring for Long Jetty&apos;s cafes, homes, and businesses. Food-safe, slip-resistant systems for hospitality venues and residential properties — owner-operated, free fixed-price quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}>
              Get a Free Quote in Long Jetty
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
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>Long Jetty Services</p>
            <h2 className="text-3xl font-bold text-white">Epoxy Flooring Services in Long Jetty</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">Hospitality, residential, and commercial systems for Long Jetty&apos;s unique mix of cafes, homes, and boutique businesses.</p>
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
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>Hospitality Floor Specialists</p>
              <h2 className="text-3xl font-bold text-white mb-5">Epoxy Flooring for Long Jetty&apos;s Cafes, Homes &amp; Businesses</h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>Long Jetty&apos;s popular strip of cafes, bars, and boutique stores is exactly where we do a lot of our commercial work. We install food-safe, slip-resistant epoxy systems that handle daily cleaning, heavy foot traffic, and the humidity that comes with lakeside locations — built for venues that can&apos;t afford downtime.</p>
                <p>Residential garages and driveways in the older parts of Long Jetty often have weathered concrete that needs serious preparation work before epoxy can be applied. Diamond grinding is non-negotiable here — we profile the slab properly so the coating bonds mechanically and lasts. No shortcuts.</p>
                <p>We&apos;re based in Tuggerah, just minutes from Long Jetty. Owner-operators on every job — no subcontractors, and we can schedule around your trading hours.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Hospitality floor specialists", sub: "Cafes, bars, and restaurants" },
                { label: "Slip-resistant commercial systems", sub: "Anti-slip aggregate as standard" },
                { label: "500+ floors installed", sub: "10+ years of Central Coast experience" },
                { label: "Owner-operated, no subs", sub: "Carl & Santiago on every job" },
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
          <h2 className="text-2xl font-bold text-white mb-3">Also Serving The Entrance Area</h2>
          <p className="text-gray-400 text-sm mb-8">We service Long Jetty and all surrounding suburbs in The Entrance area.</p>
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
            <h2 className="text-3xl font-bold text-white">Epoxy Flooring Long Jetty — FAQs</h2>
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

      <ServicePageForm heading="Get a Free Quote in Long Jetty" subheading="We'll visit your site, assess the floor, and give you a fixed price. No surprises." />
    </>
  );
}
