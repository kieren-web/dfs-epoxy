"use client";

import { useInView } from "@/hooks/useInView";

const PROBLEMS = [
  {
    title: "Cheap coatings that peel and chip",
    body: "Budget floor paint and low-grade epoxy systems can't handle heavy traffic, forklifts, or chemical spills. The result? A floor that looks worse than before within 2–3 years.",
    icon: "⚠️",
  },
  {
    title: "Subcontractors who cut corners",
    body: "Many contractors quote low and send inexperienced teams. The owners never set foot on site. Shortcuts in surface prep cause delamination and costly failures every time.",
    icon: "❌",
  },
  {
    title: "One-size-fits-all solutions",
    body: "Commercial kitchens, warehouses, and workshops have very different demands. A system designed for a residential garage won't survive a busy commercial environment.",
    icon: "🚫",
  },
];

export default function Problem() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section className="py-20 px-4 bg-[#181818]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Most epoxy jobs fail within 3 years.{" "}
            <span className="dfs-gradient-text">Here&apos;s why.</span>
          </h2>
        </div>

        <div ref={ref} className={`grid md:grid-cols-3 gap-6 stagger ${isVisible ? "visible" : ""}`}>
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="bg-[#222222] border border-[#333333] rounded-2xl p-7"
              style={{borderTop: "2px solid #F05A28"}}
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-base font-semibold dfs-gradient-text">
          Dynamic Flooring Solutions installs the right system for your environment. Every time. Guaranteed.
        </p>
      </div>
    </section>
  );
}
