"use client";

import { useState } from "react";
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
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "commercial"
                  ? "text-white"
                  : "text-gray-400 border border-[#333] hover:text-white hover:border-[#555]"
              }`}
              style={activeTab === "commercial" ? { background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" } : {}}
            >
              Commercial
            </button>
            <button
              onClick={() => setActiveTab("residential")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "residential"
                  ? "text-white"
                  : "text-gray-400 border border-[#333] hover:text-white hover:border-[#555]"
              }`}
              style={activeTab === "residential" ? { background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)" } : {}}
            >
              Residential
            </button>
          </div>

          {/* Before & After — residential only */}
          {activeTab === "residential" && beforeAfter.length > 0 && (
            <div className="mb-12">
              <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
                <span className="w-8 h-1 rounded-full inline-block" style={{ background: "linear-gradient(90deg, #7B35CC, #F05A28)" }} />
                Before & After
              </h2>
              <div className="grid sm:grid-cols-1 gap-6">
                {beforeAfter.map((pair, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-[#333]" style={{ background: "#222" }}>
                    <div className="grid grid-cols-2 gap-0.5">
                      {/* Before */}
                      <div className="relative cursor-pointer group" onClick={() => setLightbox(pair.before)}>
                        <Image
                          src={pair.before.src}
                          alt={pair.before.alt}
                          width={800}
                          height={600}
                          className="w-full h-64 sm:h-80 object-cover"
                          sizes="(max-width: 640px) 50vw, 600px"
                        />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" style={{ background: "rgba(0,0,0,0.3)" }}>
                          <ExpandIcon />
                        </div>
                        <div className="absolute bottom-3 left-3">
                          <span className="px-3 py-1 rounded-md text-xs font-bold text-white" style={{ background: "rgba(0,0,0,0.7)" }}>BEFORE</span>
                        </div>
                      </div>
                      {/* After */}
                      <div className="relative cursor-pointer group" onClick={() => setLightbox(pair.after)}>
                        <Image
                          src={pair.after.src}
                          alt={pair.after.alt}
                          width={800}
                          height={600}
                          className="w-full h-64 sm:h-80 object-cover"
                          sizes="(max-width: 640px) 50vw, 600px"
                        />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" style={{ background: "rgba(123,53,204,0.25)" }}>
                          <ExpandIcon />
                        </div>
                        <div className="absolute bottom-3 right-3">
                          <span className="px-3 py-1 rounded-md text-xs font-bold text-white" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A)" }}>AFTER</span>
                        </div>
                      </div>
                    </div>
                    <div className="px-5 py-3 border-t border-[#333]">
                      <p className="text-sm text-gray-300 font-medium">{pair.label}</p>
                    </div>
                  </div>
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
                href="/services/commercial-epoxy-flooring-central-coast"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-gray-300 font-semibold text-sm border border-[#444] hover:border-[#666] transition-colors"
              >
                Commercial Services
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
          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
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
