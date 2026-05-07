import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Epoxy Flooring The Entrance | Dynamic Flooring Solutions",
  description:
    "Epoxy flooring in The Entrance. Cafes, restaurants, garages, patios, retail. Owner-operated, 500+ floors installed on the Central Coast. Free quotes - call 0483 986 101.",
  alternates: { canonical: `${SITE_URL}/epoxy-flooring-the-entrance` },
};

const services = [
  { title: "Hospitality & Cafe Flooring", desc: "Slip-resistant, food-safe epoxy for The Entrance's cafes, restaurants, and tourism venues. Minimal disruption installs.", href: "/services/commercial-kitchen-epoxy-flooring-central-coast" },
  { title: "Garage Epoxy Flooring", desc: "Durable broadcast flake systems for residential garages. Built to handle coastal humidity and UV exposure.", href: "/services/garage-epoxy-flooring-central-coast" },
  { title: "Driveways & Patios", desc: "Outdoor concrete coatings that handle salt air, UV, and foot traffic. Transforms your outdoor concrete areas.", href: "/services/residential-epoxy-flooring-central-coast" },
  { title: "Commercial & Retail", desc: "Seamless epoxy floors for retail, showrooms, and commercial spaces in The Entrance and surrounds.", href: "/services/commercial-epoxy-flooring-central-coast" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Epoxy Flooring The Entrance",
  provider: {
    "@type": "LocalBusiness",
    name: "Dynamic Flooring Solutions",
    telephone: "+61483986101",
    address: { "@type": "PostalAddress", addressLocality: "Tuggerah", addressRegion: "NSW", addressCountry: "AU" },
  },
  areaServed: "The Entrance, NSW",
  description: "Commercial and residential epoxy flooring in The Entrance and surrounds. Owner-operated, 500+ floors installed, Central Coast based.",
};

const nearbyAreas = ["Bateau Bay", "Long Jetty", "Toowoon Bay", "Killarney Vale", "Chittaway Bay", "Ourimbah", "Tuggerah", "Blue Haven"];

export default function TheEntranceEpoxyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #181818 50%, #1a1020 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Epoxy Flooring The Entrance</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30" style={{ background: "rgba(123,53,204,0.15)" }}>
            <span style={{ color: "#D4187A" }}>📍</span> Serving The Entrance & Surrounds
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Epoxy Flooring{" "}
            <span style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              The Entrance
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Commercial and residential epoxy flooring in The Entrance and the surrounding lakeside suburbs. Hospitality venues, garages, patios, and retail - we install the right system for every environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}>
              Get a Free Quote in The Entrance
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
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>The Entrance Services</p>
            <h2 className="text-3xl font-bold text-white">Epoxy Flooring Services in The Entrance</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">From lakeside hospitality venues to residential garages - commercial-grade systems for every The Entrance environment.</p>
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
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>Central Coast Locals</p>
              <h2 className="text-3xl font-bold text-white mb-5">Why The Entrance Chooses DFS</h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>The Entrance is a high-traffic tourist and hospitality area - floors take a beating. Whether it's a cafe that needs a slip-resistant, food-safe finish or a residential property wanting to upgrade their garage or patio, we know what each application demands.</p>
                <p>We're based in Tuggerah - right next door. We don't charge travel fees or rush jobs to make up for drive time. Carl and Santiago are on site themselves from start to finish.</p>
                <p>Every job starts with proper surface prep - diamond grinding and moisture testing. That's what separates a floor that lasts 15 years from one that peels in 18 months.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Hospitality floor specialists", sub: "Food-safe, slip-resistant systems" },
                { label: "Based in Tuggerah", sub: "Next door to The Entrance" },
                { label: "Owner-operated", sub: "Carl & Santiago on every job" },
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
          <h2 className="text-2xl font-bold text-white mb-3">Also Serving The Entrance Surrounds</h2>
          <p className="text-gray-400 text-sm mb-8">We service The Entrance and all surrounding lake-side and coastal suburbs.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) => (
              <span key={area} className="px-4 py-2 rounded-full text-sm text-gray-300 border border-[#333]" style={{ background: "#222" }}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      <ServicePageForm heading="Get a Free Quote in The Entrance" subheading="We'll visit your site, assess the floor, and give you a fixed price. No surprises." />
    </>
  );
}
