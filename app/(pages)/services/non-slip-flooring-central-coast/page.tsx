import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Non-Slip Flooring Central Coast | Anti-Slip Floor Coatings | Dynamic Flooring Solutions",
  description:
    "Non-slip and anti-slip floor coatings on the Central Coast. Epoxy systems with slip-resistant aggregate for warehouses, commercial kitchens, wet areas & factories. Owner-operated. Free quotes — 0483 986 101.",
  alternates: { canonical: `${SITE_URL}/services/non-slip-flooring-central-coast` },
  openGraph: {
    title: "Non-Slip Flooring Central Coast | Dynamic Flooring Solutions",
    description:
      "Anti-slip and non-slip floor coatings on the Central Coast. Commercial-grade epoxy systems for wet areas, warehouses, kitchens & factories. Free quotes.",
    url: `${SITE_URL}/services/non-slip-flooring-central-coast`,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Non-Slip Flooring Central Coast",
  alternateName: ["Anti-Slip Floor Coating Central Coast", "Non-Slip Floor Coating Central Coast"],
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
    "Non-slip and anti-slip floor coating specialists on the Central Coast. Commercial-grade epoxy systems with slip-resistant aggregate for warehouses, commercial kitchens, wet areas, factories, and industrial spaces.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dynamicflooringsolutions.com.au" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://dynamicflooringsolutions.com.au/services" },
    { "@type": "ListItem", position: 3, name: "Non-Slip Flooring Central Coast", item: "https://dynamicflooringsolutions.com.au/services/non-slip-flooring-central-coast" },
  ],
};

const faqs = [
  {
    q: "What is non-slip floor coating?",
    a: "Non-slip floor coating is an epoxy or polyurethane flooring system with a slip-resistant aggregate — typically aluminium oxide or quartz — broadcast into the topcoat to increase traction underfoot. It provides measurable slip resistance even when wet, meeting Australian Standard AS/NZS 4586 for slip resistance classification. We add anti-slip aggregate to all our commercial, wet-area, and kitchen flooring as standard practice.",
  },
  {
    q: "Where is non-slip flooring required on the Central Coast?",
    a: "Commercial kitchens are legally required to have slip-resistant flooring under the Food Standards Code and WH&S legislation. Warehouses, loading docks, and factories should have non-slip coatings in wet areas and near exit points. Any area that gets wet regularly — laundries, pool surrounds, change rooms, food processing areas — benefits from anti-slip floor coating. We can advise on the appropriate slip resistance rating for your specific environment.",
  },
  {
    q: "How much does non-slip floor coating cost on the Central Coast?",
    a: "Adding anti-slip aggregate to an epoxy system adds minimal cost — typically $5–$15/m² depending on the aggregate type and application method. For new floor installations, we include anti-slip topcoats as standard on all commercial kitchen, wet-area, and industrial jobs. We provide free, fixed-price quotes — the price we quote is the price you pay.",
  },
  {
    q: "Can you add anti-slip coating to an existing floor?",
    a: "Yes. We can apply a non-slip epoxy topcoat to existing concrete, existing epoxy, or most solid floor surfaces without a full recoat. The existing surface needs to be clean, sound, and free of contaminants. We'll assess your floor and recommend the appropriate system during a free site visit.",
  },
  {
    q: "What slip resistance rating do you achieve?",
    a: "Our non-slip systems are rated P4 or P5 under Australian Standard AS/NZS 4586, which covers commercial kitchens, wet public areas, and industrial environments. We can provide compliance documentation on request. If you have a specific WH&S requirement or need to meet a particular standard, let us know and we'll specify the right system.",
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

const environments = [
  {
    title: "Commercial Kitchens",
    desc: "WH&S and food safety legislation requires slip-resistant flooring in commercial kitchens. Our non-slip epoxy systems handle daily hot water washdowns, chemical cleaners, and constant foot traffic. Seamless — no grout lines for bacteria to hide in.",
    href: "/services/commercial-kitchen-epoxy-flooring-central-coast",
  },
  {
    title: "Warehouses & Loading Docks",
    desc: "Wet loading docks and spill-prone warehouse areas are a significant slip hazard. We coat high-risk zones with heavy-duty anti-slip epoxy that handles forklift traffic, chemical spills, and external weather exposure.",
    href: "/services/warehouse-epoxy-flooring-central-coast",
  },
  {
    title: "Factories & Industrial Spaces",
    desc: "Factories with machinery, oils, coolants, or wet processes need floors that keep workers safe under WH&S. Our anti-slip systems meet P4/P5 slip resistance ratings required in industrial environments.",
    href: "/services/factory-floor-sealing-central-coast",
  },
  {
    title: "Workshops & Trade Premises",
    desc: "Oil and coolant spills are a constant hazard in workshops. Anti-slip aggregate in the topcoat provides grip even when the floor is wet, and the seamless epoxy surface is easy to clean between jobs.",
    href: "/services/workshop-epoxy-flooring-central-coast",
  },
  {
    title: "Wet Areas & Pool Surrounds",
    desc: "Change rooms, pool plant rooms, laundries, and wet area bathrooms need surfaces that are slip-resistant when constantly wet. We use high-aggregate topcoats rated for continuous wet exposure.",
    href: "/services/commercial-epoxy-flooring-central-coast",
  },
  {
    title: "Retail & Hospitality",
    desc: "Slip incidents in retail and hospitality create significant public liability exposure. Our non-slip floor coatings look professional while providing the traction needed in busy customer-facing environments.",
    href: "/services/commercial-epoxy-flooring-central-coast",
  },
];

export default function NonSlipFlooringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section
        className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #181818 50%, #0f141a 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gray-300">Non-Slip Flooring Central Coast</span>
          </nav>

          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30"
            style={{ background: "rgba(123,53,204,0.15)" }}
          >
            <span style={{ color: "#D4187A" }}>✦</span> Anti-Slip Floor Coating Specialists
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Non-Slip Flooring{" "}
            <span style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Central Coast
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mb-4 leading-relaxed">
            Anti-slip and non-slip floor coatings for commercial kitchens, warehouses, factories, wet areas, and industrial spaces across the Central Coast. Epoxy systems with slip-resistant aggregate — rated P4/P5 under Australian Standard AS/NZS 4586. Owner-operated. Free fixed-price quotes.
          </p>

          <p className="text-sm text-gray-500 max-w-2xl mb-8">
            We add anti-slip aggregate to all commercial, wet-area, and industrial jobs as standard — no extra charge for the specification, only for the aggregate where required.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl">
            {[
              { n: "P4 / P5", l: "Slip resistance rating" },
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

      {/* Why non-slip matters */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
                Why It Matters
              </p>
              <h2 className="text-3xl font-bold text-white mb-5">
                Slippery Floors Are a Liability and a Safety Risk
              </h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>
                  Slip and fall incidents are the most common workplace injury in Australia. In commercial kitchens and wet industrial environments, the risk is constant — grease, water, and cleaning chemicals all reduce traction on standard floor surfaces.
                </p>
                <p>
                  Non-slip floor coating isn&apos;t just about safety — it&apos;s a WH&S compliance requirement. Commercial kitchens under the Food Standards Code are legally required to have slip-resistant floors. Warehouses and factories must demonstrate reasonable steps to prevent slip hazards under the Work Health and Safety Act.
                </p>
                <p>
                  Our anti-slip epoxy systems use aluminium oxide or quartz aggregate broadcast into the topcoat to achieve P4 and P5 slip resistance ratings under Australian Standard AS/NZS 4586. We can provide compliance documentation on request — useful if you&apos;re audited or managing a public liability claim.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "P4/P5 slip resistance rating", sub: "Meets AS/NZS 4586 — commercial kitchen & industrial standard" },
                { label: "Compliance documentation available", sub: "Useful for WH&S audits and public liability" },
                { label: "Effective when wet", sub: "Anti-slip aggregate works in wet and greasy conditions" },
                { label: "Seamless — no grout lines", sub: "Hygienic, easy to clean, no bacteria traps" },
                { label: "Standard on all commercial work", sub: "We don't cut corners on safety-critical specs" },
                { label: "Can be added to existing floors", sub: "Anti-slip topcoat over existing concrete or epoxy" },
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

      {/* Where we install */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
              Applications
            </p>
            <h2 className="text-3xl font-bold text-white">
              Where We Install Non-Slip Floor Coatings on the Central Coast
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
              Anti-slip epoxy is used wherever wet floors, oils, or chemicals create a slip hazard — or where legislation requires it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {environments.map((s) => (
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

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
              The Process
            </p>
            <h2 className="text-3xl font-bold text-white">
              How We Apply Non-Slip Floor Coating
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
              The same preparation standards apply whether we&apos;re adding anti-slip aggregate to a new installation or over-coating an existing floor.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Site Assessment", desc: "We visit, assess the existing floor condition, identify the level of slip resistance required, and recommend the right system and aggregate specification for your environment." },
              { step: "02", title: "Surface Preparation", desc: "Diamond grinding opens the concrete pores and creates the mechanical profile for adhesion. For over-coating, we clean and abrade the existing surface to the same standard." },
              { step: "03", title: "Epoxy Base Coat", desc: "Two-part epoxy primer and base coat applied to the prepared surface. For wet or chemical environments, we select the appropriate epoxy chemistry for the conditions." },
              { step: "04", title: "Aggregate & Topcoat", desc: "Anti-slip aggregate (aluminium oxide or quartz) is broadcast into or added to the topcoat. The sealed result is slip-resistant, hygienic, and built to last in demanding conditions." },
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

      {/* Related services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "Commercial Kitchen Flooring", href: "/services/commercial-kitchen-epoxy-flooring-central-coast", desc: "Hygiene-grade, slip-resistant floors for food service environments." },
              { title: "Warehouse Epoxy Flooring", href: "/services/warehouse-epoxy-flooring-central-coast", desc: "Heavy-duty systems for wet loading docks and high-traffic industrial spaces." },
              { title: "Factory Floor Sealing", href: "/services/factory-floor-sealing-central-coast", desc: "Industrial-grade sealing with anti-slip specification for manufacturing environments." },
            ].map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="block rounded-xl p-5 border border-[#333] hover:border-[#7B35CC]/50 transition-colors"
                style={{ background: "#222" }}
              >
                <h3 className="font-bold text-white text-sm mb-2">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Non-Slip Floor Coating — FAQs</h2>
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
        heading="Get a Free Non-Slip Flooring Quote"
        subheading="We'll visit, assess the slip risk in your environment, and give you a fixed-price quote. No surprises."
      />
    </>
  );
}
