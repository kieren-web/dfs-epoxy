"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { PHONE_NUMBER, PHONE_HREF, BUSINESS_NAME } from "@/lib/config";
import { trackClickCall } from "@/lib/analytics";

const NAV_LINKS = [
  { label: "Commercial", href: "/services/commercial-epoxy-flooring-central-coast" },
  { label: "Residential", href: "/services/residential-epoxy-flooring-central-coast" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/#reviews" },
];

const MOBILE_LINKS = [
  { label: "Commercial Epoxy Flooring", href: "/services/commercial-epoxy-flooring-central-coast" },
  { label: "Residential Epoxy Flooring", href: "/services/residential-epoxy-flooring-central-coast" },
  { label: "Warehouse Flooring", href: "/services/warehouse-epoxy-flooring-central-coast" },
  { label: "Garage Epoxy Flooring", href: "/services/garage-epoxy-flooring-central-coast" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog & Guides", href: "/blog" },
  { label: "Reviews", href: "/#reviews" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#181818] border-b border-[#333333] shadow-lg">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt={`${BUSINESS_NAME} logo`}
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="font-bold text-white text-sm leading-tight hidden sm:block">
            {BUSINESS_NAME}<br />
            <span className="text-gray-400 font-normal text-xs">Epoxy Flooring Specialists</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right: phone + CTA */}
        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            onClick={() => trackClickCall("header")}
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
          >
            <PhoneIcon />
            {PHONE_NUMBER}
          </a>
          <Link
            href="/#quote"
            className="dfs-btn text-sm px-4 py-2 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Free Quote
          </Link>
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#222222] border-t border-[#333333] px-4 py-4">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 px-1">Services</p>
          {MOBILE_LINKS.slice(0, 4).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm font-medium text-gray-300 hover:text-white border-b border-[#2a2a2a] px-1"
            >
              {l.label}
            </Link>
          ))}
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-4 mb-3 px-1">Resources</p>
          {MOBILE_LINKS.slice(4).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm font-medium text-gray-300 hover:text-white border-b border-[#2a2a2a] px-1"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={PHONE_HREF}
            onClick={() => { trackClickCall("header-mobile"); setMenuOpen(false); }}
            className="flex items-center gap-2 pt-4 text-base font-bold text-white px-1"
          >
            <PhoneIcon />
            {PHONE_NUMBER}
          </a>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
