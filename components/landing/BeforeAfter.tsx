"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

export default function BeforeAfter() {
  const { ref, isVisible } = useInView(0.15);

  return (
    <section className="py-20 px-4 bg-[#222222]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{color: "#D4187A"}}>
            The Transformation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            The Difference Is Night and Day
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            Every floor starts with proper surface preparation. We diamond grind, prime, and apply multi-layer systems — not just paint it over.
          </p>
        </div>

        <div
          ref={ref}
          className={`flex flex-col md:flex-row gap-4 reveal ${isVisible ? "visible" : ""}`}
        >
          {/* Before */}
          <div className="flex-1 relative rounded-2xl overflow-hidden aspect-video md:aspect-[4/3] bg-[#333]">
            <Image
              src="/images/before.jpg"
              alt="Commercial kitchen floor before epoxy — damaged tiles with grime and cracked grout"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-[#444] text-white text-xs font-bold px-3 py-1.5 rounded-full border border-[#555]">
                BEFORE
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex flex-col items-center justify-center gap-2 flex-shrink-0 w-12">
            <div className="flex-1 w-px" style={{background: "linear-gradient(180deg, transparent, #7B35CC, #D4187A, #F05A28, transparent)"}} />
            <span className="text-xs font-bold text-gray-500 rotate-0 px-2">VS</span>
            <div className="flex-1 w-px" style={{background: "linear-gradient(180deg, transparent, #F05A28, #D4187A, #7B35CC, transparent)"}} />
          </div>

          {/* After */}
          <div className="flex-1 relative rounded-2xl overflow-hidden aspect-video md:aspect-[4/3] bg-[#333]">
            <Image
              src="/images/after.jpg"
              alt="Commercial kitchen floor after epoxy installation — seamless grey anti-slip epoxy coating"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4">
              <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full" style={{background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)"}}>
                AFTER
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="#quote" className="text-sm font-semibold dfs-gradient-text hover:opacity-80 transition-opacity">
            Get Your Transformation Started →
          </Link>
        </div>
      </div>
    </section>
  );
}
