import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Epoxy Flooring Services Central Coast | Dynamic Flooring Solutions",
  description:
    "Commercial and residential epoxy flooring services on the Central Coast. Warehouses, commercial kitchens, workshops, garages. Owner-operated, 500+ floors. Free quotes.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "Epoxy Flooring Services Central Coast | Dynamic Flooring Solutions",
    description:
      "Commercial and residential epoxy flooring services on the Central Coast. Owner-operated, 500+ floors installed.",
    url: `${SITE_URL}/services`,
  },
};

const services = [
  {
    title: "Commercial Epoxy Flooring",
    desc: "High-performance systems for warehouses, commercial kitchens, workshops, and industrial spaces. Multi-layer build, chemical-resistant topcoats, anti-slip as standard.",
    href: "/services/commercial-epoxy-flooring-central-coast",
    tag: "Commercial",
  },
  {
    title: "Warehouse Epoxy Flooring",
    desc: "Heavy-duty seamless systems rated for forklifts, pallet jacks, and constant traffic. Chemical-resistant and anti-slip topcoats fitted as standard on every warehouse job.",
    href: "/services/warehouse-epoxy-flooring-central-coast",
    tag: "Commercial",
  },
  {
    title: "Commercial Kitchen Epoxy Flooring",
    desc: "Hygiene-grade, food-safe coatings that handle daily cleaning, hot water, and chemical washdowns. Fully seamless — no grout lines, no bacteria traps.",
    href: "/services/commercial-kitchen-epoxy-flooring-central-coast",
    tag: "Commercial",
  },
  {
    title: "Residential Epoxy Flooring",
    desc: "Premium decorative epoxy for homes and residential properties. Full broadcast flake, solid colour, and metallic systems available. UV stable and hot tyre resistant.",
    href: "/services/residential-epoxy-flooring-central-coast",
    tag: "Residential",
  },
  {
    title: "Garage Epoxy Flooring",
    desc: "Full broadcast flake systems with polyaspartic topcoat. Hot tyre resistant, UV stable, and easy to clean. Transforms a concrete garage into a finished space.",
    href: "/services/garage-epoxy-flooring-central-coast",
    tag: "Residential",
  },
  {
    title: "Workshop & Industrial Flooring",
    desc: "Oil-resistant, impact-resistant systems for mechanics workshops, manufacturing plants, and industrial spaces. Forklift-rated options and anti-slip aggregates available.",
    href: "/services/workshop-epoxy-flooring-central-coast",
    tag: "Industrial",
  },
];

const tagColors: Record<string, string> = {
  Commercial: "#7B35CC",
  Residential: "#D4187A",
  Industrial: "#F05A28",
};

export default function ServicesIndexPage() {
  return (
    <>
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
            <span className="text-gray-300">Services</span>
          </nav>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30"
            style={{ background: "rgba(123,53,204,0.15)" }}
          >
            <span style={{ color: "#D4187A" }}>⚡</span>
            Central Coast Epoxy Specialists
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Epoxy Flooring{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Services
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Commercial and residential epoxy flooring across the Central Coast. Owner-operated by Carl &amp; Santiago.
            500+ floors installed. Every job diamond-ground and fixed-price quoted.
          </p>
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

      {/* Services grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
              All Services
            </p>
            <h2 className="text-3xl font-bold text-white">Epoxy Flooring Systems We Install</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
              Every environment has different demands. We specify the right system for yours — commercial, residential, or industrial.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-xl p-6 border border-[#333] hover:border-[#7B35CC]/40 transition-colors flex flex-col"
                style={{ background: "#222" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-1 h-8 rounded-full" style={{ background: "linear-gradient(180deg, #7B35CC, #F05A28)" }} />
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: `${tagColors[s.tag]}22`,
                      color: tagColors[s.tag],
                      border: `1px solid ${tagColors[s.tag]}44`,
                    }}
                  >
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-5 flex-1">{s.desc}</p>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
                Why DFS
              </p>
              <h2 className="text-3xl font-bold text-white mb-5">
                Owner-Operated. Every Job.
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
                <p>
                  Carl and Santiago are on site for every installation — not a supervisor, not a subcontracted crew.
                  When you engage Dynamic Flooring Solutions, you deal with the owners from your first call to the final walk-through.
                </p>
                <p>
                  Every job starts with diamond grinding. No shortcuts on prep, no skipping moisture testing, no applying
                  a garage system to a commercial kitchen. We spec the right system for the environment.
                </p>
                <p>
                  The price we quote is the price you pay. Fixed-price quotes, no day-of variations, no surprise add-ons.
                  We've been doing this for 10+ years and have installed 500+ floors across the Central Coast.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "500+", sub: "Floors installed" },
                { label: "10+", sub: "Years in business" },
                { label: "72hr", sub: "Return to service" },
                { label: "0", sub: "Subcontractors used" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl p-6 text-center border border-[#333]" style={{ background: "#222" }}>
                  <p
                    className="text-4xl font-bold mb-1"
                    style={{
                      background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.label}
                  </p>
                  <p className="text-xs text-gray-400">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get a Quote?</h2>
          <p className="text-gray-400 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
            We visit your site, assess the floor condition, and give you a fixed price. No obligation, no hidden costs.
            We service the entire Central Coast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}
            >
              Get a Free Quote
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-semibold text-sm border border-white/20 hover:bg-white/5 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
