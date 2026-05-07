"use client";

import { useInView } from "@/hooks/useInView";
import { FLOORS_INSTALLED, YEARS_EXPERIENCE, SERVICE_RADIUS } from "@/lib/config";

const STATS = [
  { num: FLOORS_INSTALLED, label: "Floors Installed" },
  { num: YEARS_EXPERIENCE, label: "Years Experience" },
  { num: "5★",            label: "Google Rated" },
  { num: SERVICE_RADIUS,  label: "Service Radius" },
  { num: "Owner",         label: "Operated" },
];

export default function TrustBar() {
  const { ref, isVisible } = useInView(0.3);

  return (
    <section className="bg-[#222222] border-y border-[#333333]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 py-8 stagger ${isVisible ? "visible" : ""}`}
      >
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-0">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-0">
              <div className="text-center px-6 md:px-8">
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.num}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">{stat.label}</div>
              </div>
              {i < STATS.length - 1 && (
                <div
                  className="hidden md:block w-px h-10 flex-shrink-0"
                  style={{background: "linear-gradient(180deg, #7B35CC, #D4187A, #F05A28)"}}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
