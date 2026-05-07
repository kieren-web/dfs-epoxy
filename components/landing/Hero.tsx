"use client";

import Link from "next/link";
import LeadForm from "./LeadForm";
import type { Attribution } from "@/hooks/useAttribution";
import { PHONE_NUMBER, PHONE_HREF, FLOORS_INSTALLED, YEARS_EXPERIENCE, SERVICE_AREA_PRIMARY } from "@/lib/config";

const BULLETS = [
  "Experienced owner-operators — not subcontractors",
  "Commercial-grade systems for high-traffic environments",
  `Serving the ${SERVICE_AREA_PRIMARY} & surrounds within 50km`,
];

interface HeroProps {
  attribution: Attribution;
}

export default function Hero({ attribution }: HeroProps) {
  return (
    <section className="relative bg-[#181818] text-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Background: dark gradient texture standing in for real photo */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 70% 50%, rgba(123,53,204,0.15) 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(240,90,40,0.1) 0%, transparent 50%), #181818",
        }}
        aria-hidden="true"
      />
      {/* Subtle grid texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px"}}
        aria-hidden="true"
      />

      {/* Placeholder label for hero image */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-[#333] text-gray-400 text-xs px-3 py-1.5 rounded-full border border-[#444]">
        📸 Replace background with real warehouse/commercial epoxy photo
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-20 w-full flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

        {/* LEFT: Headline + bullets */}
        <div className="flex-1 pt-4">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 mb-6">
            <span
              className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border"
              style={{
                background: "linear-gradient(135deg, rgba(123,53,204,0.2), rgba(212,24,122,0.2), rgba(240,90,40,0.2))",
                borderColor: "#7B35CC",
                color: "#D4187A",
              }}
            >
              ⚡ Central Coast&apos;s Commercial Epoxy Specialists
            </span>
          </div>

          {/* H1 */}
          <h1 className="hero-h1 text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-tight tracking-tight mb-5">
            High-Performance Epoxy Flooring for{" "}
            <span className="dfs-gradient-text">Commercial & Industrial</span>{" "}
            Environments
          </h1>

          {/* Subheadline */}
          <p className="hero-sub text-lg text-gray-300 max-w-xl mb-7 leading-relaxed">
            Owner-operated. {FLOORS_INSTALLED} floors installed. Built for warehouses, commercial kitchens, workshops, and garages across the {SERVICE_AREA_PRIMARY}.
          </p>

          {/* Bullets */}
          <ul className="hero-bullets space-y-3 mb-8 max-w-lg">
            {BULLETS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                  style={{background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)"}}
                >
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row gap-3">
            <Link
              href="#quote"
              className="dfs-btn text-center text-base px-7 py-3.5"
            >
              Get a Free Quote →
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/50 text-white hover:text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 text-base"
            >
              <PhoneIcon />
              Call {PHONE_NUMBER}
            </a>
          </div>

          {/* Trust micro-line */}
          <p className="mt-5 text-xs text-gray-500">
            {FLOORS_INSTALLED} floors installed · {YEARS_EXPERIENCE} years experience · Owner-operated · Free quotes
          </p>
        </div>

        {/* RIGHT: Form */}
        <div id="quote" className="hero-form w-full lg:w-[420px] flex-shrink-0">
          <LeadForm attribution={attribution} />
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  );
}
