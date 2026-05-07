import type { Metadata } from "next";
import Link from "next/link";
import ServicePageForm from "@/components/page/ServicePageForm";
import { PHONE_NUMBER, PHONE_HREF, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Garage Epoxy Flooring Central Coast | Dynamic Flooring Solutions",
  description:
    "Premium garage epoxy flooring on the Central Coast. Flake systems, hot tyre resistant, oil-proof. Owner-operated, 500+ floors. Residential double garage from $50/m². Free quotes.",
  alternates: {
    canonical: `${SITE_URL}/services/garage-epoxy-flooring-central-coast`,
  },
};

const features = [
  {
    title: "Full Broadcast Flake System",
    desc: "Our most popular residential choice. Coloured vinyl flakes broadcast into the wet epoxy create a decorative, durable, and naturally anti-slip surface.",
  },
  {
    title: "Hot Tyre Resistant Topcoat",
    desc: "Polyaspartic topcoat resists hot tyre pickup that softens cheaper epoxy systems. Drive in and out without leaving tyre marks.",
  },
  {
    title: "UV-Stable - No Yellowing",
    desc: "Polyaspartic topcoat is UV-stable, so the finish stays clear and bright in Australian sunlight - unlike standard epoxy which yellows over time.",
  },
  {
    title: "Oil & Stain Resistant",
    desc: "Sealed, seamless surface means oil, coolant, and garage spills wipe up without staining. No porous concrete to absorb spills.",
  },
  {
    title: "Anti-Slip as Standard",
    desc: "All our garage systems include anti-slip aggregate for safety - especially important around cars, driveways, and in wet conditions.",
  },
  {
    title: "Completed in 1–2 Days",
    desc: "Most residential double garages are complete in 1–2 days. Walk on in 24 hours. Drive on in 48–72 hours.",
  },
];

const faqs = [
  {
    q: "How much does garage epoxy flooring cost on the Central Coast?",
    a: "Residential double garages typically start from $90–$100 per m² for a full broadcast flake system. Price depends on the floor size, existing condition, and system chosen. We provide free, fixed-price quotes - the price we quote is the price you pay.",
  },
  {
    q: "What's the best epoxy system for a residential garage?",
    a: "For most residential garages we recommend a full-broadcast flake system with a polyaspartic topcoat. It looks great, hides surface imperfections in the concrete, is naturally anti-slip, holds up to vehicle traffic, and resists hot tyre pickup and UV yellowing.",
  },
  {
    q: "Will epoxy handle hot tyre pickup?",
    a: "Not all systems do - cheaper products soften under hot tyres and peel off. We use polyaspartic topcoats on all our garage work. Polyaspartic is specifically formulated to resist heat transfer from tyres. Worth asking any contractor what topcoat they're using.",
  },
  {
    q: "How long does a garage epoxy install take?",
    a: "A standard double garage (around 36–40m²) takes 1–2 days. You can typically walk on the surface within 24 hours and drive on it within 48–72 hours.",
  },
  {
    q: "Does the concrete need to be prepared first?",
    a: "Yes - and this is where cheap jobs fail. We diamond grind every garage floor to create a mechanically profiled surface for adhesion. Without proper grinding, even good-quality epoxy will peel. If you're getting quotes, ask every contractor what surface prep they include.",
  },
  {
    q: "What colours and flake styles are available?",
    a: "We offer a range of flake blends and solid colour options. Popular choices include grey, charcoal, tan, and mixed-colour blends. We can show you samples at the quote stage.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Garage Epoxy Flooring Central Coast",
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
    "Premium residential garage epoxy flooring on the Central Coast. Full broadcast flake systems with UV-stable, hot tyre resistant polyaspartic topcoat.",
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

export default function GarageEpoxyPage() {
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
            <span className="text-gray-300">Garage Epoxy Flooring</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30"
            style={{ background: "rgba(123,53,204,0.15)" }}>
            <span style={{ color: "#D4187A" }}>⚡</span>
            Residential Specialist - Central Coast
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Garage Epoxy Flooring{" "}
            <span style={{
              background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Central Coast
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mb-6 leading-relaxed">
            Transform your garage with a durable, easy-clean flake epoxy system.
            Hot-tyre resistant, UV stable, oil-proof - looks great and built to last.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <div className="px-4 py-2 rounded-lg border border-[#333] text-sm" style={{ background: "#222" }}>
              <span className="text-white font-bold">From $90-$100/m²</span>
              <span className="text-gray-400 ml-1">double garage</span>
            </div>
            <div className="px-4 py-2 rounded-lg border border-[#333] text-sm" style={{ background: "#222" }}>
              <span className="text-white font-bold">1–2 day</span>
              <span className="text-gray-400 ml-1">install</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}
            >
              Get a Free Garage Quote
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

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>
              What You Get
            </p>
            <h2 className="text-3xl font-bold text-white">
              Not Just Paint - A Proper Epoxy System
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
              We don't sell painted concrete. Every garage system is multi-layer, properly prepared, and designed to last.
            </p>
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

      {/* Ask the right questions callout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-[#7B35CC]/30 p-8" style={{ background: "rgba(123,53,204,0.08)" }}>
            <h2 className="text-xl font-bold text-white mb-4">
              Getting multiple quotes? Ask these questions.
            </h2>
            <div className="space-y-3">
              {[
                "Do you diamond grind the concrete first, or just clean and apply?",
                "What topcoat do you use - and is it hot tyre resistant?",
                "Is the topcoat UV-stable, or will it yellow in sunlight?",
                "What's the warranty, and what does it cover?",
                "Who actually does the installation - owner or subcontractor?",
              ].map((q, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A)" }}>
                    {i + 1}
                  </span>
                  <span className="text-gray-300 leading-relaxed">{q}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-5">
              We'll happily answer all of these at your free quote. The answers tell you everything about what you're actually buying.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Garage Epoxy FAQs</h2>
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
        heading="Get a Free Garage Epoxy Quote"
        subheading="We'll visit your garage, assess the concrete, and give you a fixed price. No surprises."
      />
    </>
  );
}
