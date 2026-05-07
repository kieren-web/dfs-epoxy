"use client";

import { useInView } from "@/hooks/useInView";

const STEPS = [
  { num: "01", title: "Free Site Quote",      body: "We visit your site, assess the floor condition, and give you a fixed price. No surprises, no variations on the day." },
  { num: "02", title: "System Selection",     body: "We recommend the right epoxy system for your environment - commercial, industrial, or residential. Not the cheapest. The right one." },
  { num: "03", title: "Surface Preparation",  body: "Diamond grinding removes all contaminants and creates the ideal surface profile for adhesion. The step most cheap operators skip." },
  { num: "04", title: "Multi-Layer Install",  body: "Primer coat, broadcast layer (flake or solid colour), and durable topcoat applied to manufacturer spec. Every layer, every time." },
  { num: "05", title: "Final Inspection",     body: "We walk through the finished job with you. Not done until you're completely satisfied and the site is clean." },
];

export default function Process() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section className="py-20 px-4 bg-[#1a1a1a]" id="process">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{color: "#D4187A"}}>
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">From Quote to Completion</h2>
        </div>

        <div ref={ref} className={`grid sm:grid-cols-2 lg:grid-cols-5 gap-6 stagger ${isVisible ? "visible" : ""}`}>
          {STEPS.map((step, i) => (
            <div key={step.num} className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-5 left-[calc(50%+1.5rem)] w-[calc(100%-3rem)] h-0.5 opacity-30"
                  style={{background: "linear-gradient(90deg, #7B35CC, #F05A28)"}}
                  aria-hidden="true"
                />
              )}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm mb-3 flex-shrink-0 relative z-10"
                style={{background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)"}}
              >
                {step.num}
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{step.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
