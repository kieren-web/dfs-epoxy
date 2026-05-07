import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Epoxy Flooring Woy Woy | Dynamic Flooring Solutions",
  description:
    "Epoxy flooring in Woy Woy. Garages, driveways, workshops, commercial. Owner-operated, 500+ floors installed on the Central Coast. Free quotes - call 0483 986 101.",
  alternates: { canonical: `${SITE_URL}/epoxy-flooring-woy-woy` },
};

const services = [
  { title: "Garage Epoxy Flooring", desc: "Full broadcast flake systems for Woy Woy residential garages. Hot tyre resistant, UV stable, handles coastal moisture.", href: "/services/garage-epoxy-flooring-central-coast" },
  { title: "Driveways & Patios", desc: "Tough outdoor coatings for the peninsula's concrete surfaces. Handles salt air, foot traffic, and coastal UV.", href: "/services/residential-epoxy-flooring-central-coast" },
  { title: "Workshop & Trade Flooring", desc: "Oil-resistant, hard-wearing epoxy for mechanics and trade workshops on the Woy Woy peninsula.", href: "/services/commercial-epoxy-flooring-central-coast" },
  { title: "Commercial Flooring", desc: "Seamless epoxy for retail stores, cafes, and commercial premises across Woy Woy and Umina Beach.", href: "/services/commercial-epoxy-flooring-central-coast" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Epoxy Flooring Woy Woy",
  provider: {
    "@type": "LocalBusiness",
    name: "Dynamic Flooring Solutions",
    telephone: "+61483986101",
    address: { "@type": "PostalAddress", addressLocality: "Tuggerah", addressRegion: "NSW", addressCountry: "AU" },
  },
  areaServed: "Woy Woy, NSW",
  description: "Commercial and residential epoxy flooring in Woy Woy and surrounds. Owner-operated, 500+ floors installed, Central Coast based.",
};

const nearbyAreas = ["Umina Beach", "Ettalong Beach", "Booker Bay", "Blackwall", "Gosford", "Koolewong", "Point Clare", "Tascott"];

export default function WoyWoyEpoxyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #181818 50%, #1a1020 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Epoxy Flooring Woy Woy</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30" style={{ background: "rgba(123,53,204,0.15)" }}>
            <span style={{ color: "#D4187A" }}>📍</span> Serving Woy Woy & The Peninsula
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Epoxy Flooring{" "}
            <span style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Woy Woy
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Residential and commercial epoxy flooring across the Woy Woy peninsula. Garages, driveways, patios, workshops, and commercial spaces - built for peninsula coastal conditions. Owner-operated. Free fixed-price quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}>
              Get a Free Quote in Woy Woy
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
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>Woy Woy Services</p>
            <h2 className="text-3xl font-bold text-white">Epoxy Flooring Services in Woy Woy</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">Residential and commercial systems designed for the unique demands of peninsula living.</p>
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
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>Peninsula Specialists</p>
              <h2 className="text-3xl font-bold text-white mb-5">Epoxy Flooring on the Woy Woy Peninsula</h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>The peninsula presents specific challenges for floor coatings - high humidity, salt air from the bay, and concrete that's often older and more porous than newer builds. We account for all of this at the preparation stage, not as an afterthought.</p>
                <p>We moisture-test every slab before we lay a drop of epoxy. On the peninsula, this is critical. Moisture rising through an unsealed slab is one of the leading causes of epoxy delamination - and it's entirely preventable with proper preparation.</p>
                <p>We're based in Tuggerah, and service Woy Woy, Umina, Ettalong, and the surrounding peninsula areas regularly. Owner-operated, fixed-price quotes, and we're on site from start to finish.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Moisture testing on every job", sub: "Critical for peninsula concrete" },
                { label: "Salt air resistant systems", sub: "Formulated for coastal conditions" },
                { label: "Based in Tuggerah", sub: "Regular peninsula service area" },
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
          <p className="text-gray-400 text-sm mb-8">We service Woy Woy and all surrounding peninsula suburbs.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) => (
              <span key={area} className="px-4 py-2 rounded-full text-sm text-gray-300 border border-[#333]" style={{ background: "#222" }}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      <ServicePageForm heading="Get a Free Quote in Woy Woy" subheading="We'll visit your site, assess the floor, and give you a fixed price. No surprises." />
    </>
  );
}
