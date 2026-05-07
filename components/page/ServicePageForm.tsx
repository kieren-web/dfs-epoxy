"use client";

import LeadForm from "@/components/landing/LeadForm";
import { useAttribution } from "@/hooks/useAttribution";

interface ServicePageFormProps {
  heading?: string;
  subheading?: string;
}

export default function ServicePageForm({
  heading = "Get Your Free Quote",
  subheading = "We respond within 24 hours. Fixed-price, no surprises.",
}: ServicePageFormProps) {
  const attribution = useAttribution();

  return (
    <section id="quote" className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1a1a1a" }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#D4187A" }}>
            Free Quote
          </p>
          <h2 className="text-3xl font-bold text-white">{heading}</h2>
          <p className="text-gray-400 mt-2">{subheading}</p>
        </div>
        <LeadForm attribution={attribution} />
      </div>
    </section>
  );
}
