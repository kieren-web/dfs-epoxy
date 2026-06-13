import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Colour Chip & Flake Flooring Central Coast | Dynamic Flooring Solutions",
  description:
    "Colour chip and flake flooring specialists on the Central Coast. Decorative broadcast flake epoxy systems for garages, workshops, showrooms & commercial spaces. Owner-operated, 500+ floors. Free quotes — 0483 986 101.",
  alternates: { canonical: `${SITE_URL}/services/colour-chip-flooring-central-coast` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Colour Chip & Flake Flooring Central Coast",
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
    "Colour chip and flake flooring specialists on the Central Coast. Decorative broadcast flake epoxy systems for residential garages, workshops, showrooms, and commercial spaces.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dynamicflooringsolutions.com.au" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://dynamicflooringsolutions.com.au/services" },
    { "@type": "ListItem", position: 3, name: "Colour Chip Flooring Central Coast", item: "https://dynamicflooringsolutions.com.au/services/colour-chip-flooring-central-coast" },
  ],
};

const faqs = [
  {
    q: "What is colour chip flooring?",
    a: "Colour chip flooring — also called broadcast flake epoxy or flake epoxy flooring — is a decorative epoxy system where coloured vinyl chips or flakes are broadcast into a wet epoxy base coat, then sealed with a durable polyaspartic or urethane topcoat. The result is a seamless, slip-resistant floor with a professional, speckled finish available in a wide range of colour combinations.",
  },
  {
    q: "What are colour chip floors used for on the Central Coast?",
    a: "Colour chip epoxy is popular for residential garages, residential driveways, workshops, showrooms, retail spaces, and commercial kitchens. It's one of the most durable and visually appealing flooring systems available — hot tyre resistant, UV stable (with polyaspartic topcoat), chemical resistant, and easy to clean.",
  },
  {
    q: "How much does colour chip flooring cost on the Central Coast?",
    a: "Residential garage colour chip systems start from $90–$100/m² for a full broadcast flake system with polyaspartic topcoat. A standard double garage (36–40m²) typically costs $3,200–$4,000. Commercial and industrial applications are priced on site inspection based on floor size, condition, and system specification. All quotes are free and fixed-price.",
  },
  {
    q: "How long does colour chip flooring last?",
    a: "A properly installed colour chip epoxy system with a polyaspartic topcoat typically lasts 10–20 years in a residential environment and 7–15 years in commercial or high-traffic settings. The key variables are surface preparation (diamond grinding is non-negotiable) and the quality of the topcoat. We use UV-stable polyaspartic topcoats that won't yellow or chalk in the Australian sun.",
  },
  {
    q: "Can colour chip flooring be installed in one day?",
    a: "Some systems can be completed in a single day depending on floor size. Standard residential garages are typically a 1–2 day installation. We'll confirm exact timeframes in your quote. You can usually walk on the surface within hours and return to vehicle traffic within 24 hours.",
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

const chipColours = [
  { name: "Classic Grey", desc: "The most popular choice — professional, clean, works with any interior." },
  { name: "Sandstone Blend", desc: "Warm earthy tones, popular for showrooms and residential living areas." },
  { name: "Charcoal Mix", desc: "Dark, premium look — popular for high-end garages and commercial spaces." },
  { name: "Custom Blend", desc: "We can source specific colour combinations to match your brand or aesthetic." },
];

export default function ColourChipFlooringPage() {
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
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gray-300">Colour Chip Flooring Central Coast</span>
          </nav>

          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30"
            style={{ background: "rgba(123,53,204,0.15)" }}
          >
            <span style={{ color: "#D4187A" }}>✦</span> Central Coast Decorative Flooring Specialists
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Colour Chip & Flake Flooring{" "}
            <span style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Central Coast
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mb-6 leading-relaxed">
            Decorative broadcast flake epoxy flooring for garages, workshops, showrooms, and commercial spaces across the Central Coast. Also called colour chip or flake flooring — durable, slip-resistant, and available in a wide range of colour combinations. Owner-operated. Free fixed-price quotes.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl">
            {[
              { n: "From $90/m²", l: "Residential systems" },
              { n: "10–20yr", l: "Expected lifespan" },
              { n: "500+", l: "Floors installed" },
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

      {/* What is colour chip flooring */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
                What Is It
              </p>
              <h2 className="text-3xl font-bold text-white mb-5">
                What Is Colour Chip / Flake Flooring?
              </h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>
                  Colour chip flooring — also called flake flooring, broadcast flake epoxy, or decorative flake flooring — is a multi-layer epoxy system where coloured vinyl chips (flakes) are broadcast into a wet epoxy base coat, then locked in with a clear polyaspartic or urethane topcoat.
                </p>
                <p>
                  The result is a seamless, professional-looking floor with a speckled, granite-like finish. It hides dirt and minor marks better than plain epoxy, provides a naturally slip-resistant surface from the chip texture, and is available in virtually unlimited colour combinations.
                </p>
                <p>
                  It&apos;s the most popular decorative system we install on the Central Coast — garages, workshops, showrooms, retail spaces, and commercial environments. Looks better than painted concrete. Lasts far longer than vinyl or laminate. Handles vehicle traffic, chemical spills, and daily cleaning without complaint.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Slip-resistant from the chip texture", sub: "No added aggregate needed" },
                { label: "UV-stable polyaspartic topcoat", sub: "Won't yellow or chalk in Australian sun" },
                { label: "Hot tyre resistant", sub: "Standard on all our garage systems" },
                { label: "Chemical and oil resistant", sub: "Handles workshop and garage spills" },
                { label: "Seamless — no grout lines", sub: "Easy to clean, hygienic" },
                { label: "Wide colour range", sub: "Grey, sandstone, charcoal, custom blends" },
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

      {/* Where it&apos;s used */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
              Applications
            </p>
            <h2 className="text-3xl font-bold text-white">
              Where We Install Colour Chip & Flake Flooring on the Central Coast
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
              The same broadcast flake system works across a wide range of environments — adapted with the right base coat and topcoat for each application.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Residential Garages",
                desc: "The most popular colour chip application. Hot tyre resistant, UV stable, handles vehicle traffic and oil spills. Transforms a dull concrete garage into a professional-looking space.",
                href: "/services/garage-epoxy-flooring-central-coast",
              },
              {
                title: "Workshops & Trade Premises",
                desc: "Oil-resistant base coat with broadcast chip and durable topcoat. Handles heavy tools, vehicle traffic, and chemical spills. Easy to clean, hides marks between cleans.",
                href: "/services/workshop-epoxy-flooring-central-coast",
              },
              {
                title: "Commercial Showrooms",
                desc: "Professional finish that presents well to customers. Seamless, hygienic, and available in colour combinations that match your brand or fitout.",
                href: "/services/commercial-epoxy-flooring-central-coast",
              },
              {
                title: "Driveways & Outdoor Areas",
                desc: "UV-stable polyaspartic systems suitable for outdoor use. Handles Australian sun, rain, and foot traffic without yellowing or peeling.",
                href: "/services/residential-epoxy-flooring-central-coast",
              },
              {
                title: "Warehouses & Industrial",
                desc: "Heavy-duty commercial-grade version with forklift-rated base coat. Colour chips add visibility and reduce the cold, industrial look of plain grey epoxy.",
                href: "/services/warehouse-epoxy-flooring-central-coast",
              },
              {
                title: "Retail & Hospitality",
                desc: "Eye-catching floor finish for retail stores, cafes, and hospitality venues. Slip-resistant, easy to mop, and looks professional even with heavy foot traffic.",
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

      {/* The installation process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
              How It&apos;s Done
            </p>
            <h2 className="text-3xl font-bold text-white">
              How We Install Colour Chip Flooring
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
              The finish looks simple. The process behind it isn&apos;t. Here&apos;s why our floors last when cheaper ones don&apos;t.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Diamond Grinding", desc: "We grind the entire concrete surface to open the pores and create the mechanical profile needed for proper adhesion. This is what most cheap jobs skip." },
              { step: "02", title: "Moisture Testing", desc: "We test every slab for moisture before we lay a drop of epoxy. Rising moisture is the #1 cause of epoxy delamination — and it's entirely preventable." },
              { step: "03", title: "Primer & Base Coat", desc: "Two-part epoxy primer penetrates and bonds to the concrete. The base coat is applied in the chosen colour — typically matching the chip blend." },
              { step: "04", title: "Chip Broadcast & Topcoat", desc: "Chips are broadcast into the wet base coat at full saturation. Once cured, excess chips are removed and a UV-stable polyaspartic topcoat locks everything in." },
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

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Colour Chip & Flake Flooring — FAQs</h2>
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
        heading="Get a Free Colour Chip Flooring Quote"
        subheading="Tell us about your floor and we'll visit, assess, and give you a fixed price. No surprises."
      />
    </>
  );
}
