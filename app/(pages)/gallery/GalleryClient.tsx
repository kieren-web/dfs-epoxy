"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface GalleryImage {
  src: string;
  alt: string;
}

interface BeforeAfterPair {
  before: GalleryImage;
  after: GalleryImage;
  label: string;
}

interface Props {
  commercialImages: GalleryImage[];
  residentialImages: GalleryImage[];
  beforeAfter: BeforeAfterPair[];
}

type Tab = "commercial" | "residential";

// ── Before/After Slider ───────────────────────────────────────────────────────
function BeforeAfterSlider({ pair }: { pair: BeforeAfterPair }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    updatePosition(e.clientX);
    e.preventDefault();
  };
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (dragging.current) updatePosition(e.clientX);
  }, [updatePosition]);
  const onMouseUp = () => { dragging.current = false; };

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => {
    dragging.current = true;
    updatePosition(e.touches[0].clientX);
  };
  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (dragging.current) updatePosition(e.touches[0].clientX);
  }, [updatePosition]);
  const onTouchEnd = () => { dragging.current = false; };

  return (
    <div className="rounded-2xl overflow-hidden border border-[#333]" style={{ background: "#222" }}>
      <div
        ref={containerRef}
        className="relative select-none overflow-hidden cursor-col-resize"
        style={{ aspectRatio: "16/9" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* After image — full width underneath */}
        <Image
          src={pair.after.src}
          alt={pair.after.alt}
          fill
          className="object-cover pointer-events-none"
          sizes="(max-width: 640px) 100vw, 800px"
          draggable={false}
        />

        {/* Before image — clipped to left of slider */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <Image
            src={pair.before.src}
            alt={pair.before.alt}
            fill
            className="object-cover pointer-events-none"
            style={{ width: `${10000 / position}%`, maxWidth: "none" }}
            sizes="(max-width: 640px) 100vw, 800px"
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 z-10"
          style={{ left: `${position}%`, background: "white", transform: "translateX(-50%)" }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 z-20 flex items-center justify-center rounded-full shadow-xl border-2 border-white"
          style={{
            left: `${position}%`,
            transform: "translate(-50%, -50%)",
            width: 44,
            height: 44,
            background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)",
          }}
        >
          <ChevronLeftRightIcon />
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="px-2.5 py-1 rounded text-xs font-bold text-white" style={{ background: "rgba(0,0,0,0.65)" }}>BEFORE</span>
        </div>
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="px-2.5 py-1 rounded text-xs font-bold text-white" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A)" }}>AFTER</span>
        </div>
      </div>

      {/* Label bar */}
      <div className="px-5 py-3 border-t border-[#333] flex items-center justify-between">
        <p className="text-sm text-gray-300 font-medium">{pair.label}</p>
        <p className="text-xs text-gray-600">← Drag to reveal →</p>
      </div>
    </div>
  );
}

// ── Main Gallery ──────────────────────────────────────────────────────────────
export default function GalleryClient({ commercialImages, residentialImages, beforeAfter }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("commercial");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const images = activeTab === "commercial" ? commercialImages : residentialImages;

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #181818 60%, #1a1020 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Gallery</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-purple-500/30" style={{ background: "rgba(123,53,204,0.15)" }}>
            <span style={{ color: "#C9A870" }}>📸</span> Our Work
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Epoxy Flooring{" "}
            <span style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Gallery
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Real jobs, real results. Every floor you see here was installed by Carl and Santiago — no stock photos, no subcontractors.
          </p>
        </div>
      </section>

      {/* Tabs + Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24" style={{ background: "#181818" }}>
        <div className="max-w-6xl mx-auto">

          {/* Tab switcher */}
          <div className="flex gap-3 py-8">
            <button
              onClick={() => setActiveTab("commercial")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeTab === "commercial" ? "text-white" : "text-gray-400 border border-[#333] hover:text-white hover:border-[#555]"}`}
              style={activeTab === "commercial" ? { background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" } : {}}
            >
              Commercial
            </button>
            <button
              onClick={() => setActiveTab("residential")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeTab === "residential" ? "text-white" : "text-gray-400 border border-[#333] hover:text-white hover:border-[#555]"}`}
              style={activeTab === "residential" ? { background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" } : {}}
            >
              Residential
            </button>
          </div>

          {/* Before & After sliders — residential only */}
          {activeTab === "residential" && beforeAfter.length > 0 && (
            <div className="mb-12">
              <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
                <span className="w-8 h-1 rounded-full inline-block flex-shrink-0" style={{ background: "linear-gradient(90deg, #7B35CC, #F05A28)" }} />
                Before & After
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {beforeAfter.map((pair, i) => (
                  <BeforeAfterSlider key={i} pair={pair} />
                ))}
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 mt-10 mb-8">
                <div className="flex-1 h-px bg-[#2a2a2a]" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-600">More Residential Work</span>
                <div className="flex-1 h-px bg-[#2a2a2a]" />
              </div>
            </div>
          )}

          {/* Image grid */}
          {images.length > 0 && (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer group relative"
                  style={{ background: "#222" }}
                  onClick={() => setLightbox(img)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" style={{ background: "rgba(123,53,204,0.25)" }}>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ExpandIcon />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-[#333] p-8 text-center" style={{ background: "#222" }}>
            <h2 className="text-2xl font-bold text-white mb-3">Like what you see?</h2>
            <p className="text-gray-400 mb-6 text-sm">Get a free quote for your floor. Fixed price — what we quote is what you pay.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#quote"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" }}
              >
                Get a Free Quote →
              </Link>
              <Link
                href="/services/residential-epoxy-flooring-central-coast"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-gray-300 font-semibold text-sm border border-[#444] hover:border-[#666] transition-colors"
              >
                Residential Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={900}
              className="w-full h-auto max-h-[90vh] object-contain rounded-xl"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}

function ChevronLeftRightIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
