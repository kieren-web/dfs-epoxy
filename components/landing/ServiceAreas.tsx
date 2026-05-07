"use client";

import { useInView } from "@/hooks/useInView";
import { SERVICE_SUBURBS, PHONE_NUMBER, PHONE_HREF } from "@/lib/config";

export default function ServiceAreas() {
  const { ref, isVisible } = useInView(0.15);

  return (
    <section className="py-20 px-4 bg-[#181818]" id="areas">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto text-center reveal ${isVisible ? "visible" : ""}`}
      >
        <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{color: "#D4187A"}}>
          Where We Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Serving the Central Coast & Surrounds
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Based in Tuggerah. Operating within a 50km radius - Central Coast, Lake Macquarie, and surrounding areas.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {SERVICE_SUBURBS.map((suburb) => (
            <span
              key={suburb}
              className="text-sm px-3 py-1.5 rounded-full font-medium border text-gray-300 border-[#333333] bg-[#222222] hover:border-purple-600 transition-colors cursor-default"
            >
              {suburb}
            </span>
          ))}
          <span className="text-sm px-3 py-1.5 rounded-full text-gray-500 border border-[#2a2a2a]">
            + surrounding areas
          </span>
        </div>

        <p className="text-gray-400 text-sm">
          Don&apos;t see your suburb?{" "}
          <a href={PHONE_HREF} className="font-semibold hover:text-white transition-colors dfs-gradient-text">
            Call us on {PHONE_NUMBER}
          </a>{" "}
          - if we can reach you, we&apos;ll quote you.
        </p>
      </div>
    </section>
  );
}
