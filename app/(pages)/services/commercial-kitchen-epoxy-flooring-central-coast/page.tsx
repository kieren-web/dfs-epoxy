import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Commercial Kitchen Epoxy Flooring Central Coast | Dynamic Flooring Solutions",
  description:
    "Food-safe, hygiene-grade epoxy flooring for commercial kitchens on the Central Coast. Anti-slip, chemical-resistant, seamless. Installed with minimal downtime. Free quotes.",
  alternates: {
    canonical: `${SITE_URL}/services/commercial-kitchen-epoxy-flooring-central-coast`,
  },
};

const features = [
  {
    title: "Food-Safe & Hygiene Grade",
    desc: "Fully seamless, non-porous surface eliminates bacteria-harbouring grout lines. Coating is food-safe and compliant with commercial kitchen hygiene standards.",
  },
  {
    title: "Anti-Slip as Standard",
    desc: "Broadcast anti-slip aggregate in all kitchen work — mandatory in wet, greasy kitchen environments. Slip resistance ratings available on request.",
  },
  {
    title: "Chemical & Heat Resistant",
    desc: "Handles commercial degreasers, caustic cleaners, steam, and hot water daily. Topcoat is specified for kitchen chemical exposure.",
  },
  {
    title: "Minimal Kitchen Downtime",
    desc: "We stage kitchen installs to keep you trading. Section-by-section approach, night and weekend work available on request.",
  },
  {
    title: "Coved Skirtings Available",
    desc: "Epoxy coved skirting (curved floor-to-wall junction) eliminates hard-to-clean corners — recommended for commercial kitchens and food-prep areas.",
  },
  {
    title: "Drain-Compatible Installation",
    desc: "We work around floor drains with proper sloping and waterproof detailing — no pooling, no water ingress under the coating.",
  },
];

const faqs = [
  {
    q: "Does your commercial kitchen epoxy meet Australian food safety standards?",
    a: "Yes. We use food-safe, non-toxic epoxy systems specifically rated for commercial food preparation environments. These coatings are non-porous, seamless, and easy to clean and sanitise. Product data sheets are available on request.",
  },
  {
    q: "Can you install without shutting down my kitchen?",
    a: "In most cases, yes. We stage the work in sections and schedule around your trading hours. We can work nights or early mornings to minimise disruption. This needs to be discussed at quote stage so we can plan the staging properly.",
  },
  {
    q: "How do you handle floor drains?",
    a: "We work around floor drains using proper profiling and sealing techniques, maintaining appropriate fall to drains to avoid pooling. This is standard practice on all commercial kitchen jobs.",
  },
  {
    q: "Is epoxy flooring slippery in a kitchen environment?",
    a: "Standard high-gloss epoxy can be slippery when wet — which is why we include anti-slip aggregate in all commercial kitchen work as standard. This creates a textured surface that significantly improves slip resistance without compromising hygiene or cleanability.",
  },
  {
    q: "What's a coved skirting and do I need it?",
    a: "A coved skirting is a curved, sealed junction between the floor and wall that eliminates the right-angle corner — a bacteria trap in commercial kitchens. It's highly recommended for food-prep environments and is required in some commercial kitchen fit-out specifications.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Kitchen Epoxy Flooring Central Coast",
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
    "Hygiene-grade, food-safe epoxy flooring for commercial kitchens on the Central Coast of NSW. Anti-slip, chemical-resistant, seamless systems installed with minimal business disruption.",
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

export default function CommercialKitchenPage() {
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
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/commercial-epoxy-flooring-central-coast" className="hover:text-white transition-colors">Commercial</Link>
            <span>/</span>
            <span className="text-gray-300">Commercial Kitchen Flooring</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30"
            style={{ background: "rgba(123,53,204,0.15)" }}>
            <span style={{ color: "#D4187A" }}>⚡</span>
            Food-Safe & Hygiene Grade
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Commercial Kitchen Epoxy Flooring{" "}
            <span style={{
              background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Central Coast
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Seamless, food-safe epoxy flooring for restaurants, commercial kitchens, cafes, and food-prep areas.
            Anti-slip, chemical-resistant, and installed with minimal kitchen downtime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}
            >
              Get a Free Kitchen Quote
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

      {/* Why kitchen epoxy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
                Why Epoxy for Kitchens
              </p>
              <h2 className="text-3xl font-bold text-white mb-5">
                The Floor That Handles What Your Kitchen Dishes Out
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
                <p>
                  Commercial kitchen floors take a daily beating — hot water, grease, caustic cleaners, dropped equipment,
                  and constant foot traffic from close-toed shoes. Tiles crack and grow grout lines. Vinyl lifts at the edges.
                  Paint peels under pressure cleaning.
                </p>
                <p>
                  A properly installed commercial kitchen epoxy system is seamless, so there are no grout lines for bacteria to
                  colonise. It bonds to the concrete slab and doesn't lift. It handles chemical cleaners without degrading.
                  And with the right anti-slip aggregate, it's safe to work on in wet, greasy conditions.
                </p>
                <p>
                  We've installed epoxy in commercial kitchens across the Central Coast — restaurants, cafes, catering
                  facilities, school canteens, and aged care kitchens. We understand the hygiene requirements and how to
                  install without shutting your kitchen down.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Seamless surface", desc: "No grout lines — eliminates bacteria traps that tiled floors create" },
                { label: "Anti-slip standard", desc: "Mandatory broadcast aggregate on all wet-area commercial kitchen work" },
                { label: "Food-safe certified", desc: "Non-toxic, food-grade coatings with product data sheets available" },
                { label: "Chemical resistant", desc: "Handles degreasers, caustic soda, steam, and hot washdown daily" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 p-4 rounded-xl border border-[#333]" style={{ background: "#222" }}>
                  <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ background: "linear-gradient(135deg, #7B35CC, #F05A28)" }} />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
              System Features
            </p>
            <h2 className="text-3xl font-bold text-white">
              What's Included in Every Kitchen Install
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl p-6 border border-[#333]" style={{ background: "#222" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(123,53,204,0.15)" }}>
                  <svg className="w-4 h-4" fill="none" stroke="#7B35CC" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{f.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Commercial Kitchen Flooring FAQs</h2>
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

      <ServicePageForm
        heading="Get a Free Commercial Kitchen Quote"
        subheading="We'll visit your kitchen, assess the floor, and give you a fixed price. No surprises."
      />
    </>
  );
}
