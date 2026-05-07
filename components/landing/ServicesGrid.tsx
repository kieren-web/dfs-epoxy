"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";

const COMMERCIAL = [
  {
    title: "Warehouse Epoxy Flooring",
    desc: "Heavy-duty seamless epoxy systems built for forklifts, pallet jacks, and constant foot traffic. Chemical-resistant, slip-resistant, easy to clean.",
    icon: "🏭",
  },
  {
    title: "Commercial Kitchen Flooring",
    desc: "Hygiene-grade epoxy coatings with anti-slip, chemical-resistant surfaces. Meets food safety requirements. Designed for hot environments and daily cleaning.",
    icon: "🍳",
  },
  {
    title: "Workshop & Industrial Flooring",
    desc: "Hard-wearing epoxy systems for mechanics workshops, manufacturing floors, and industrial spaces. Oil-resistant, impact-resistant, built to last.",
    icon: "🔧",
  },
  {
    title: "Brewery & Hospitality Flooring",
    desc: "Specialist coatings for breweries, bars, and hospitality venues. Slip-resistant, easy to sanitise, built for wet environments.",
    icon: "🍺",
  },
];

const RESIDENTIAL = [
  {
    title: "Garage Epoxy Flooring",
    desc: "Transform your garage with a durable, easy-clean flake epoxy system. Looks great, handles the load, built to last.",
    icon: "🚗",
  },
  {
    title: "Interior Epoxy Flooring",
    desc: "Seamless interior floors for living areas, showrooms, and studios. Modern finish with lasting durability.",
    icon: "🏠",
  },
];

export default function ServicesGrid() {
  const commercialAnim = useInView(0.1);
  const residentialAnim = useInView(0.1);

  return (
    <section className="py-20 px-4 bg-[#1a1a1a]" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{color: "#D4187A"}}>
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Epoxy Flooring Systems Built for the Job
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            Commercial work is our specialty. Residential is where we started.
          </p>
        </div>

        {/* Commercial - primary */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{background: "linear-gradient(135deg, rgba(123,53,204,0.3), rgba(212,24,122,0.3))", color: "#D4187A", border: "1px solid #D4187A"}}
            >
              Commercial Priority
            </span>
            <div className="flex-1 h-px bg-[#333333]" />
          </div>
          <div ref={commercialAnim.ref} className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger ${commercialAnim.isVisible ? "visible" : ""}`}>
            {COMMERCIAL.map((s) => (
              <div
                key={s.title}
                className="bg-[#222222] border border-[#333333] rounded-2xl p-6 hover:border-purple-600 transition-colors group"
                style={{borderTop: "2px solid transparent", backgroundImage: "linear-gradient(#222222, #222222), linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box"}}
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{s.desc}</p>
                <Link href="#quote" className="text-sm font-semibold dfs-gradient-text hover:opacity-80 transition-opacity">
                  Get a Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Residential - secondary */}
        <div id="residential" className="pt-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-gray-400 border border-[#444]">
              Residential
            </span>
            <div className="flex-1 h-px bg-[#333333]" />
          </div>
          <div ref={residentialAnim.ref} className={`grid sm:grid-cols-2 gap-5 stagger ${residentialAnim.isVisible ? "visible" : ""}`}>
            {RESIDENTIAL.map((s) => (
              <div key={s.title} className="bg-[#222222] border border-[#333333] rounded-2xl p-6 hover:border-[#555] transition-colors">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{s.desc}</p>
                <Link href="#quote" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
                  Get a Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
