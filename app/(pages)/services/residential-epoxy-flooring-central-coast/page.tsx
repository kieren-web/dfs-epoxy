import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Residential Epoxy Flooring Central Coast | Dynamic Flooring Solutions",
  description: "Residential epoxy flooring on the Central Coast. Garages, driveways, patios, interior floors. Owner-operated, polyaspartic topcoat, UV stable. Free quotes - 0483 986 101.",
  alternates: { canonical: `${SITE_URL}/services/residential-epoxy-flooring-central-coast` },
};

const services = [
  { title: "Garage Epoxy Flooring", desc: "Full broadcast flake or solid colour systems with polyaspartic topcoat. Hot tyre resistant, UV stable, oil-proof. The most popular residential application.", href: "/services/garage-epoxy-flooring-central-coast" },
  { title: "Driveways", desc: "Tough outdoor epoxy coatings designed for vehicle traffic, UV exposure, and coastal conditions. Transforms raw concrete into a clean, low-maintenance surface.", href: "#quote" },
  { title: "Patios & Entertaining Areas", desc: "Slip-resistant, UV-stable coatings for outdoor concrete areas. Looks great, easy to clean, built for Australian outdoor conditions.", href: "#quote" },
  { title: "Interior Floors", desc: "Seamless epoxy floors for living areas, rumpus rooms, studios, and showrooms. Modern finish with lasting durability.", href: "#quote" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Residential Epoxy Flooring Central Coast",
  provider: {
    "@type": "LocalBusiness",
    name: "Dynamic Flooring Solutions",
    telephone: "+61483986101",
    address: { "@type": "PostalAddress", addressLocality: "Tuggerah", addressRegion: "NSW", addressCountry: "AU" },
  },
  areaServed: "Central Coast, NSW",
  description: "Residential epoxy flooring for garages, driveways, patios, and interior floors across the Central Coast. Owner-operated, commercial-grade systems.",
};

export default function ResidentialEpoxyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #181818 50%, #1a1020 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Residential Epoxy Flooring Central Coast</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30" style={{ background: "rgba(123,53,204,0.15)" }}>
            <span style={{ color: "#D4187A" }}>🏡</span> Residential Flooring
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Residential Epoxy Flooring{" "}
            <span style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Central Coast
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Commercial-grade epoxy systems for Central Coast homes. Garages, driveways, patios, and interior floors. We apply the same preparation standards and product quality to residential work as we do to warehouses and commercial kitchens - because your floor deserves to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}>
              Get a Free Quote
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
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>Residential Services</p>
            <h2 className="text-3xl font-bold text-white">What We Install</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">Any concrete surface on your property. If it's concrete, we can coat it.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl p-6 border border-[#333] hover:border-[#7B35CC]/40 transition-colors" style={{ background: "#222" }}>
                <div className="w-1 h-8 rounded-full mb-4" style={{ background: "linear-gradient(180deg, #7B35CC, #F05A28)" }} />
                <h3 className="font-bold text-white mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{s.desc}</p>
                <Link href={s.href} className="text-xs font-semibold hover:opacity-80 transition-opacity" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Get a quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>Built for Central Coast Conditions</p>
            <h2 className="text-3xl font-bold text-white mb-4">Why the System Matters</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">The Central Coast has specific demands that inland areas don't - coastal UV, salt air, humidity. We account for all of it.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: "UV-Stable Polyaspartic Topcoat", body: "Standard epoxy topcoats yellow under the Central Coast sun within a few years. We use polyaspartic topcoats on all residential work - UV stable, won't chalk or yellow." },
              { title: "Moisture Testing on Every Slab", body: "Coastal humidity and older concrete slabs can have moisture issues that cause epoxy delamination. We test every slab before laying a drop of product." },
              { title: "Hot Tyre Resistant", body: "Our polyaspartic topcoats resist hot tyre transfer - a common failure point with cheaper epoxy systems used in Australian garages." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[#333] p-6" style={{ background: "#222" }}>
                <div className="w-8 h-1 rounded-full mb-4" style={{ background: "linear-gradient(90deg, #7B35CC, #F05A28)" }} />
                <h3 className="font-bold text-white mb-3 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-[#333] p-8" style={{ background: "#222" }}>
            <h2 className="text-2xl font-bold text-white mb-6">Residential Pricing Guide</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Single garage (~20m²)", price: "From $1,800 - $2,200" },
                { label: "Double garage (~40m²)", price: "From $3,200 - $4,000" },
                { label: "Large garage / workshop (60-80m²)", price: "From $5,000+" },
                { label: "Driveways & patios", price: "Priced on inspection" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between p-4 rounded-xl border border-[#333]" style={{ background: "#1a1a1a" }}>
                  <span className="text-sm text-gray-300">{item.label}</span>
                  <span className="text-sm font-bold text-white">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">All prices are for full commercial-grade systems including diamond grinding, primer, broadcast or solid colour, and polyaspartic topcoat. Prices depend on floor condition and access.</p>
          </div>
        </div>
      </section>

      <ServicePageForm heading="Get a Free Residential Quote" subheading="We'll visit your property, assess the floor, and give you a fixed price. No surprises on the day." />
    </>
  );
}
