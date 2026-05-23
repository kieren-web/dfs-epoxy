import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Factory Floor Sealing Central Coast | Dynamic Flooring Solutions",
  description:
    "Factory floor sealing on the Central Coast. Heavy-duty epoxy and polyurethane systems for manufacturing, industrial, and warehouse floors. Owner-operated, 500+ floors. Free quotes — 0483 986 101.",
  alternates: { canonical: `${SITE_URL}/services/factory-floor-sealing-central-coast` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Factory Floor Sealing Central Coast",
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
    "Factory floor sealing specialists on the Central Coast. Heavy-duty epoxy and polyurethane systems for manufacturing facilities, warehouses, and industrial floors.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dynamicflooringsolutions.com.au" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://dynamicflooringsolutions.com.au/services" },
    { "@type": "ListItem", position: 3, name: "Factory Floor Sealing Central Coast", item: "https://dynamicflooringsolutions.com.au/services/factory-floor-sealing-central-coast" },
  ],
};

const faqs = [
  {
    q: "What is factory floor sealing?",
    a: "Factory floor sealing involves applying a heavy-duty epoxy or polyurethane coating system to an industrial or manufacturing concrete floor. The purpose is to protect the slab from chemical attack, abrasion, oil penetration, and forklift traffic, while creating a surface that's easy to clean and maintain. Unlike residential or decorative coatings, factory floor sealers are formulated for continuous heavy industrial use.",
  },
  {
    q: "What's the best coating system for a factory floor on the Central Coast?",
    a: "For most factory environments on the Central Coast, a multi-layer epoxy system with a polyurethane or polyaspartic topcoat is the best option. The base coat penetrates and bonds to the concrete; the mid coat builds thickness and chemical resistance; the topcoat protects against abrasion and UV. The exact specification depends on your floor's existing condition, traffic load, chemical exposure, and whether you need anti-static or anti-slip properties.",
  },
  {
    q: "How long does factory floor sealing take?",
    a: "Most factory floor sealing projects on the Central Coast are completed in 2–5 days depending on floor size and system specification. We can stage the work in sections to keep your operation running during installation. You can typically return to light foot traffic within 24 hours and full forklift traffic within 72 hours.",
  },
  {
    q: "Can you seal a factory floor while the business is operating?",
    a: "Yes — this is something we do regularly on the Central Coast. We plan the installation in sections so you can continue operating in the unsealed areas. We'll map out a staging plan before we start and confirm the schedule in your quote so there are no surprises.",
  },
  {
    q: "How much does factory floor sealing cost on the Central Coast?",
    a: "Factory floor sealing is priced on site inspection because the variables are significant — floor size, existing condition, preparation required, system specification, and access constraints all affect the price. We provide free, fixed-price quotes after inspecting the floor. The price we quote is the price you pay — no day-of variations.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FactoryFloorSealingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section
        className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #181818 50%, #0f1020 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gray-300">Factory Floor Sealing Central Coast</span>
          </nav>

          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30"
            style={{ background: "rgba(123,53,204,0.15)" }}
          >
            <span style={{ color: "#D4187A" }}>✦</span> Central Coast Industrial Flooring Specialists
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Factory Floor Sealing{" "}
            <span style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Central Coast
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mb-6 leading-relaxed">
            Heavy-duty epoxy and polyurethane floor sealing systems for manufacturing facilities, warehouses, and industrial premises across the Central Coast. Built to handle forklifts, chemical spills, and continuous production traffic. Owner-operated. Free fixed-price quotes.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl">
            {[
              { n: "10–20yr", l: "System lifespan" },
              { n: "500+", l: "Floors installed" },
              { n: "Free", l: "Fixed-price quotes" },
            ].map((s) => (
              <div key={s.n} className="rounded-xl p-4 text-center border border-[#333]" style={{ background: "#222" }}>
                <p className="text-xl font-bold mb-1" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {s.n}
                </p>
                <p className="text-xs text-gray-400">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}
            >
              Get a Free Quote
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

      {/* Why factory floors need proper sealing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
                The Problem
              </p>
              <h2 className="text-3xl font-bold text-white mb-5">
                Why Unsealed Factory Floors Cost You Money
              </h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>
                  Bare concrete is porous. In a factory or manufacturing environment, that means oil, chemicals, dust, and contaminants penetrate the slab and become impossible to fully remove. Over time, the surface degrades — creating trip hazards, hygiene issues, and a floor that never looks clean no matter how often it&apos;s swept.
                </p>
                <p>
                  Forklift traffic accelerates this. The constant wheel load on unsealed concrete causes dusting and surface erosion. That concrete dust contaminates products, blocks drains, and creates ongoing maintenance costs.
                </p>
                <p>
                  A properly sealed factory floor eliminates all of this. The sealed surface doesn&apos;t absorb spills, doesn&apos;t dust, resists forklift wheel marks, and can be properly cleaned with a mop rather than requiring a pressure washer and chemical treatment.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Forklift and pallet jack rated", sub: "Heavy-duty systems rated for continuous industrial traffic" },
                { label: "Chemical and oil resistant", sub: "Handles fuel, hydraulic fluid, industrial cleaners" },
                { label: "Dust-free surface", sub: "Eliminates concrete dusting that contaminates products and machinery" },
                { label: "Anti-slip options available", sub: "Aggregate can be added where slip safety is a requirement" },
                { label: "Easy to clean and maintain", sub: "Sealed surface mops clean — no ongoing pressure washing" },
                { label: "Staged installation available", sub: "We work in sections so your operation keeps running" },
              ].map((s) => (
                <div key={s.label} className="flex items-start gap-4 p-4 rounded-xl border border-[#333]" style={{ background: "#222" }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: "linear-gradient(135deg, #7B35CC, #F05A28)" }} />
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

      {/* Factory types we work in */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
              Where We Work
            </p>
            <h2 className="text-3xl font-bold text-white">
              Factory Floor Sealing for Every Industrial Environment
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
              Every industrial environment has different demands. We specify the right system for your floor — not a one-size-fits-all solution.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Manufacturing Facilities",
                desc: "Continuous forklift and heavy equipment traffic, chemical exposure, and strict hygiene requirements. We specify multi-layer epoxy systems built for this environment.",
                href: "/services/warehouse-epoxy-flooring-central-coast",
              },
              {
                title: "Warehouses & Distribution",
                desc: "High forklift traffic, racking loads, and the need for clearly marked traffic zones. Durable epoxy base with hard-wearing topcoat and optional line marking.",
                href: "/services/warehouse-epoxy-flooring-central-coast",
              },
              {
                title: "Workshops & Trade Premises",
                desc: "Oil, grease, and solvent exposure alongside vehicle and equipment traffic. Chemical-resistant systems that clean easily and don't absorb hydrocarbons.",
                href: "/services/workshop-epoxy-flooring-central-coast",
              },
              {
                title: "Food Production Facilities",
                desc: "Hygiene-rated seamless epoxy systems. Coved skirting options available. Slip-resistant aggregate added as standard. Meets food safety requirements.",
                href: "/services/commercial-kitchen-epoxy-flooring-central-coast",
              },
              {
                title: "Cold Storage & Freezer Rooms",
                desc: "Low-temperature epoxy systems that cure and perform in cold environments. We specify products that maintain adhesion and flexibility through temperature cycling.",
                href: "/services/commercial-epoxy-flooring-central-coast",
              },
              {
                title: "Breweries & Beverage Production",
                desc: "Chemical-resistant coatings that handle CO2, acids, and constant wet conditions. Anti-slip aggregate throughout. Coved skirting for hygiene compliance.",
                href: "/services/commercial-epoxy-flooring-central-coast",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-xl p-6 border border-[#333] hover:border-[#7B35CC]/40 transition-colors" style={{ background: "#222" }}>
                <div className="w-1 h-8 rounded-full mb-4" style={{ background: "linear-gradient(180deg, #7B35CC, #F05A28)" }} />
                <h3 className="font-bold text-white mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{s.desc}</p>
                <Link
                  href={s.href}
                  className="text-xs font-semibold hover:opacity-80 transition-opacity"
                  style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
              The Process
            </p>
            <h2 className="text-3xl font-bold text-white">
              How We Seal Factory Floors on the Central Coast
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
              Preparation is where most industrial floor coating failures start. Here&apos;s why our floors don&apos;t fail.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Site Assessment & Quote", desc: "We inspect the floor, assess condition, note any contamination, cracks, or previous coatings. We discuss your operational requirements, traffic load, and staging needs. You get a fixed price before we start." },
              { step: "02", title: "Surface Preparation", desc: "Diamond grinding or shot blasting to remove contamination and open the concrete pores. Crack repair and joint treatment where needed. Moisture testing as standard — we won't apply epoxy over a damp slab." },
              { step: "03", title: "System Application", desc: "Penetrating primer, epoxy base coat, mid coat, and durable polyurethane or polyaspartic topcoat applied to manufacturer specification. We don't shortcut the layer count." },
              { step: "04", title: "Line Marking (Optional)", desc: "Traffic lanes, safety zones, loading areas, and pedestrian paths marked in durable epoxy line marking paint. We can follow your existing layout or help design a new one." },
            ].map((s) => (
              <div key={s.step} className="rounded-xl p-6 border border-[#333]" style={{ background: "#222" }}>
                <p className="text-3xl font-black mb-3" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {s.step}
                </p>
                <h3 className="font-bold text-white mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DFS for industrial */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
              Why Choose DFS
            </p>
            <h2 className="text-3xl font-bold text-white">
              Why Central Coast Businesses Choose Us for Factory Floor Sealing
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Commercial-grade systems only", desc: "We don't use residential coatings on industrial floors. Every factory job gets a system rated for the traffic and chemical exposure it will actually face." },
              { title: "Owner-operators on every job", desc: "Carl and Santiago are on site. Not a crew supervisor. Not a subcontractor. You deal with the owners from quote to completion." },
              { title: "Staged installation available", desc: "We plan around your production schedule. We've worked in live warehouses and manufacturing facilities — we know how to minimise your downtime." },
              { title: "Proper surface prep — always", desc: "Diamond grinding, moisture testing, and appropriate primer as standard. This is where cheap jobs fail. We don't skip it." },
              { title: "Fixed-price quotes", desc: "The price we quote after inspecting your floor is the price you pay. No variations on the day, no surprise additions." },
              { title: "Central Coast locals", desc: "Based in Tuggerah. We know the region's industrial and commercial precincts — Tuggerah Business Park, West Gosford, Somersby Industrial Estate and beyond." },
            ].map((s) => (
              <div key={s.title} className="rounded-xl p-6 border border-[#333]" style={{ background: "#222" }}>
                <div className="w-8 h-1 rounded-full mb-4" style={{ background: "linear-gradient(90deg, #7B35CC, #F05A28)" }} />
                <h3 className="font-bold text-white mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services/warehouse-epoxy-flooring-central-coast"
              className="text-sm font-semibold hover:opacity-80 transition-opacity"
              style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              View all commercial epoxy flooring Central Coast services →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Factory Floor Sealing — FAQs</h2>
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
        heading="Get a Free Factory Floor Sealing Quote"
        subheading="We'll visit your site, assess the floor, and give you a fixed price. No surprises on the day."
      />
    </>
  );
}
