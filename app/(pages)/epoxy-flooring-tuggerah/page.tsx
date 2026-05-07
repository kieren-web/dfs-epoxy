import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Epoxy Flooring Tuggerah | Dynamic Flooring Solutions",
  description:
    "Epoxy flooring in Tuggerah. Local Central Coast specialists — warehouses, commercial kitchens, garages. Owner-operated from Tuggerah. Free quotes — call 0483 986 101.",
  alternates: {
    canonical: `${SITE_URL}/epoxy-flooring-tuggerah`,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Epoxy Flooring Tuggerah",
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
  areaServed: "Tuggerah, NSW",
  description:
    "Epoxy flooring specialists based in Tuggerah. Commercial and residential epoxy systems for the Central Coast region.",
};

const nearbyAreas = [
  "Wyong", "Kangy Angy", "Ourimbah", "Berkeley Vale",
  "Charmhaven", "Lake Haven", "Toukley", "Gorokan",
];

const services = [
  {
    title: "Warehouse & Industrial",
    desc: "Heavy-duty commercial systems for Tuggerah and the M1 corridor industrial areas.",
    href: "/services/warehouse-epoxy-flooring-central-coast",
  },
  {
    title: "Commercial Kitchen",
    desc: "Food-safe, seamless epoxy for restaurants, cafes, and commercial kitchens.",
    href: "/services/commercial-kitchen-epoxy-flooring-central-coast",
  },
  {
    title: "Commercial Epoxy",
    desc: "Full range of commercial epoxy systems — workshops, hospitality, showrooms.",
    href: "/services/commercial-epoxy-flooring-central-coast",
  },
  {
    title: "Garage Epoxy",
    desc: "Premium residential garage systems — flake broadcast, hot tyre resistant, UV stable.",
    href: "/services/garage-epoxy-flooring-central-coast",
  },
];

export default function TuggerahEpoxyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section
        className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #181818 50%, #1a1020 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Epoxy Flooring Tuggerah</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30"
            style={{ background: "rgba(123,53,204,0.15)" }}>
            <span style={{ color: "#D4187A" }}>📍</span>
            Based in Tuggerah
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Epoxy Flooring{" "}
            <span style={{
              background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Tuggerah
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Dynamic Flooring Solutions is based right here in Tuggerah. Commercial and residential epoxy flooring
            for the local area and the full Central Coast — owner-operated by Carl & Santiago.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}
            >
              Get a Free Local Quote
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

      {/* Local angle */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
                Local to Tuggerah
              </p>
              <h2 className="text-3xl font-bold text-white mb-5">
                Your Local Epoxy Flooring Specialists
              </h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>
                  We're not driving three hours and cutting corners to make the trip worthwhile. Dynamic Flooring Solutions
                  is based in Tuggerah — we're part of this community, and most of our commercial work is in the Tuggerah,
                  Wyong, and Gosford industrial precincts.
                </p>
                <p>
                  Carl and Santiago have been installing commercial and residential epoxy across the Central Coast for 10+ years.
                  They've done 500+ floors — from warehouses on the industrial estate to garages in residential streets around Tuggerah,
                  Kangy Angy, Berkeley Vale, and Ourimbah.
                </p>
                <p>
                  Being local means we turn up on time, we're available for follow-up if you need us, and our reputation is tied to
                  the quality of work we do in our own community.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "500+", l: "Floors installed" },
                { n: "10+", l: "Years experience" },
                { n: "50km", l: "Service radius" },
                { n: "0", l: "Subcontractors" },
              ].map((s) => (
                <div key={s.n} className="rounded-xl p-6 text-center border border-[#333]" style={{ background: "#222" }}>
                  <p className="text-4xl font-bold mb-1" style={{
                    background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    {s.n}
                  </p>
                  <p className="text-xs text-gray-400">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
              Services
            </p>
            <h2 className="text-3xl font-bold text-white">
              What We Install in Tuggerah
            </h2>
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

      {/* Nearby areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Also Serving Nearby Suburbs</h2>
          <p className="text-gray-400 text-sm mb-8">
            Based in Tuggerah, we service the entire northern Central Coast area.
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

      <ServicePageForm
        heading="Get a Free Quote in Tuggerah"
        subheading="Local job, local price. We'll be there fast — we're right around the corner."
      />
    </>
  );
}
