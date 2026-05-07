"use client";

import { useInView } from "@/hooks/useInView";

const FAQS = [
  {
    question: "How much does epoxy flooring cost on the Central Coast?",
    answer: "Pricing depends on the size, condition of the existing floor, and system type. Residential garages typically start from $50–$80 per m². Commercial jobs are priced on site inspection. We provide free, fixed-price quotes — the price we quote is the price you pay, no variations on the day.",
  },
  {
    question: "How long does epoxy flooring last?",
    answer: "A properly installed commercial-grade epoxy system lasts 10–20 years with standard maintenance. The key is surface preparation and using the right product for the environment. Cheap coatings applied without proper prep typically fail in 2–3 years.",
  },
  {
    question: "Can you install epoxy in a working warehouse or business?",
    answer: "Yes. We plan around your operations and can stage the work in sections to minimise disruption. We've worked in live commercial kitchens, active warehouses, and busy workshops. Just let us know your constraints at the quote stage.",
  },
  {
    question: "Is epoxy flooring slippery?",
    answer: "Standard high-gloss epoxy can be slippery when wet. We add anti-slip aggregate to all commercial and wet-area work as standard practice — this creates texture without affecting the appearance. Slip resistance ratings are available on request for commercial applications.",
  },
  {
    question: "How long does installation take?",
    answer: "A residential double garage takes 1–2 days. Commercial jobs vary depending on floor size and condition — we'll confirm exact timeframes in your quote. You can typically walk on the surface within 24 hours and return to full commercial use within 72 hours.",
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes. We stand behind our work. Warranty terms are confirmed at quote stage and depend on the system installed and the environment. We use commercial-grade materials and follow manufacturer installation specs on every job.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section className="py-20 px-4 bg-[#1a1a1a]" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{color: "#D4187A"}}>
            Common Questions
          </p>
          <h2 className="text-3xl font-bold text-white">
            Epoxy Flooring FAQ — Central Coast
          </h2>
        </div>

        <div ref={ref} className={`space-y-3 stagger ${isVisible ? "visible" : ""}`}>
          {FAQS.map((faq) => (
            <details key={faq.question} className="group bg-[#222222] border border-[#333333] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-semibold text-white hover:bg-[#2a2a2a] transition-colors text-sm">
                {faq.question}
                <span className="flex-shrink-0 transition-transform group-open:rotate-45 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-400 leading-relaxed text-sm border-t border-[#333333] pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
