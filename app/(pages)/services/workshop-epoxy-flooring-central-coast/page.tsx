import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Workshop & Industrial Epoxy Flooring Central Coast | Dynamic Flooring Solutions",
  description:
    "Workshop and industrial epoxy flooring on the Central Coast. Oil-resistant, forklift-rated systems for mechanics, manufacturing, and industrial spaces. Owner-operated, 500+ floors. Free quotes - call 0483 986 101.",
  alternates: {
    canonical: `${SITE_URL}/services/workshop-epoxy-flooring-central-coast`,
  },
  openGraph: {
    title: "Workshop & Industrial Epoxy Flooring Central Coast | Dynamic Flooring Solutions",
    description:
      "Workshop and industrial epoxy flooring on the Central Coast. Owner-operated, 500+ floors installed.",
    url: `${SITE_URL}/services/workshop-epoxy-flooring-central-coast`,
  },
};

const relatedServices = [
  {
    title: "Warehouse Epoxy Flooring",
    desc: "Heavy-duty seamless systems for forklifts, pallet jacks, and constant traffic. Chemical-resistant, anti-slip topcoats as standard.",
    href: "/services/warehouse-epoxy-flooring-central-coast",
  },
  {
    title: "Commercial Epoxy Flooring",
    desc: "Full-spectrum commercial flooring for any business environment. We specify the right system for your operation.",
    href: "/services/commercial-epoxy-flooring-central-coast",
  },
  {
    title: "Commercial Kitchen Flooring",
    desc: "Hygiene-grade, food-safe coatings that handle daily cleaning, hot water, and chemical washdowns.",
    href: "/services/commercial-kitchen-epoxy-flooring-central-coast",
  },
  {
    title: "Garage Epoxy Flooring",
    desc: "Full broadcast flake systems with polyaspartic topcoat. Hot tyre resistant, UV stable.",
    href: "/services/garage-epoxy-flooring-central-coast",
  },
];

const whyDFS = [
  {
    title: "Oil & Chemical Resistance Built In",
    desc: "We use industrial-grade epoxy systems with chemical-resistant topcoats as standard. Oil, hydraulic fluid, and solvent spills won't penetrate or stain.",
  },
  {
    title: "Forklift-Rated Options Available",
    desc: "Heavier build coats and hard-wearing topcoat systems for workshops that run forklifts, hoists, or heavy mobile equipment.",
  },
  {
    title: "Owner-Operators On Every Job",
    desc: "Carl and Santiago are on site — not a supervisor, not a sub. You deal with the owners from quote to final inspection.",
  },
  {
    title: "Minimum Downtime",
    desc: "We work around your operating schedule. Early starts, weekend installs, staged sections — whatever keeps your workshop running.",
  },
  {
    title: "Proper Surface Preparation",
    desc: "Every job starts with diamond grinding. No shortcuts on prep — that's why our floors don't delaminate at 12 months.",
  },
  {
    title: "Fixed-Price Quotes",
    desc: "The price we quote is the price you pay. No variations on the day, no surprise add-ons.",
  },
];

const faqs = [
  {
    q: "Can epoxy hold up to oil and hydraulic fluid in a mechanics workshop?",
    a: "Yes — provided the right system is specified. We install chemical-resistant topcoats on all workshop jobs as standard. Oil, hydraulic fluid, brake fluid, and common solvents won't penetrate or permanently stain a properly installed industrial epoxy system. Spills should still be cleaned up promptly, but the floor won't absorb them.",
  },
  {
    q: "How long will a workshop epoxy floor last?",
    a: "A correctly prepared and installed industrial epoxy system should last 10–20 years in a typical workshop environment. The key is surface preparation — we diamond grind every job to ensure maximum adhesion. Floors that fail early almost always failed because of poor prep, not the coating itself.",
  },
  {
    q: "Does the concrete need to be in perfect condition?",
    a: "No. We assess the concrete condition during your quote visit. Cracks, spalling, and surface damage can be repaired before coating. The more important factor is that the concrete is structurally sound and free of active moisture issues. We'll advise you honestly on what's achievable at the quote stage.",
  },
  {
    q: "How long is the workshop out of action during installation?",
    a: "Most workshop installations take 1–3 days depending on floor size and the system specified. You can return to light foot traffic within 24 hours of final coat, and full workshop operations within 72 hours. We'll give you an exact schedule in your quote.",
  },
  {
    q: "Is epoxy flooring slip-resistant in a workshop environment?",
    a: "Yes. We add anti-slip aggregate to the topcoat on all workshop and industrial jobs as standard. This gives a textured surface that provides grip even when wet or oily — an important safety requirement for any workshop environment.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Workshop & Industrial Epoxy Flooring Central Coast",
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
    "Industrial-grade epoxy flooring systems for mechanics workshops, manufacturing facilities, and industrial spaces on the Central Coast of NSW. Oil-resistant, forklift-rated, anti-slip.",
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

export default function WorkshopEpoxyPage() {
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
            <span className="text-gray-300">Workshop & Industrial Flooring</span>
          </nav>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30"
            style={{ background: "rgba(123,53,204,0.15)" }}
          >
            <span style={{ color: "#D4187A" }}>⚡</span>
            Central Coast Industrial Specialists
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Workshop &amp; Industrial Epoxy Flooring{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Central Coast
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Industrial-grade epoxy systems built for mechanics workshops, manufacturing floors, and heavy-use industrial spaces.
            Oil-resistant. Forklift-rated options. Anti-slip as standard. Owner-operated, 500+ floors installed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}
            >
              Get a Free Workshop Quote
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
                Epoxy Flooring Built for Real Workshop Conditions
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
                <p>
                  Workshop floors take a beating that residential and light commercial floors never will — oil spills, dropped
                  tools, heavy equipment, chemical exposure, and constant vehicle movement. A standard coating won't survive it.
                </p>
                <p>
                  Dynamic Flooring Solutions installs industrial-grade epoxy systems specifically engineered for workshop and
                  manufacturing environments. That means diamond-ground prep, moisture-mitigating primers, heavy build coats,
                  and chemical-resistant topcoats with anti-slip aggregate. Every system is specified to match your environment.
                </p>
                <p>
                  We've installed floors in mechanics workshops, panel shops, manufacturing facilities, engineering workshops,
                  and industrial units across the Central Coast. We know what these floors need to last — and we don't cut corners.
                </p>
              </div>
              <div className="mt-6 p-4 rounded-xl border border-[#333]" style={{ background: "#222" }}>
                <p className="text-sm font-semibold text-white mb-1">Prep is everything.</p>
                <p className="text-xs text-gray-400">
                  Most workshop floor failures come from inadequate surface preparation. We diamond grind every job — no exceptions.
                  It's the difference between a floor that lasts 15 years and one that peels in 18 months.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "500+", sub: "Industrial floors" },
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

      {/* Why DFS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
              Why Us
            </p>
            <h2 className="text-3xl font-bold text-white">
              Why Workshop Owners Choose DFS
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

      {/* Related services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
              Also Available
            </p>
            <h2 className="text-3xl font-bold text-white">Related Flooring Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {relatedServices.map((s) => (
              <div
                key={s.title}
                className="rounded-xl p-6 border border-[#333] hover:border-[#7B35CC]/40 transition-colors"
                style={{ background: "#222" }}
              >
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

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">
              Workshop Epoxy Flooring — FAQs
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
        heading="Get a Free Workshop Epoxy Quote"
        subheading="We visit your site, assess the floor condition, and give you a fixed price. No surprises."
      />
    </>
  );
}
