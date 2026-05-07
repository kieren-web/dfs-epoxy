import Link from "next/link";
import Image from "next/image";
import {
  BUSINESS_NAME, PHONE_NUMBER, PHONE_HREF,
  EMAIL, EMAIL_HREF, LOCATION, SERVICE_AREA_PRIMARY,
} from "@/lib/config";

const SERVICES = [
  { label: "Commercial Epoxy Flooring", href: "/services/commercial-epoxy-flooring-central-coast" },
  { label: "Residential Epoxy Flooring", href: "/services/residential-epoxy-flooring-central-coast" },
  { label: "Warehouse Flooring", href: "/services/warehouse-epoxy-flooring-central-coast" },
  { label: "Commercial Kitchen Flooring", href: "/services/commercial-kitchen-epoxy-flooring-central-coast" },
  { label: "Garage Epoxy Flooring", href: "/services/garage-epoxy-flooring-central-coast" },
  { label: "Get a Free Quote", href: "/#quote" },
];

const LOCATIONS = [
  { label: "Epoxy Flooring Gosford", href: "/epoxy-flooring-gosford" },
  { label: "Epoxy Flooring Tuggerah", href: "/epoxy-flooring-tuggerah" },
  { label: "Epoxy Flooring Wyong", href: "/epoxy-flooring-wyong" },
  { label: "Epoxy Flooring Terrigal", href: "/epoxy-flooring-terrigal" },
  { label: "Epoxy Flooring Erina", href: "/epoxy-flooring-erina" },
  { label: "Epoxy Flooring The Entrance", href: "/epoxy-flooring-the-entrance" },
  { label: "Epoxy Flooring Woy Woy", href: "/epoxy-flooring-woy-woy" },
];

const BLOG_POSTS = [
  { label: "Epoxy Flooring Cost Central Coast", href: "/blog/how-much-does-epoxy-flooring-cost-central-coast" },
  { label: "Epoxy Flooring vs Floor Paint", href: "/blog/epoxy-flooring-vs-paint-whats-the-difference" },
  { label: "Commercial Epoxy Flooring Guide", href: "/blog/commercial-epoxy-flooring-guide-central-coast" },
  { label: "Garage Epoxy Buyer's Guide", href: "/blog/garage-epoxy-flooring-buyers-guide-central-coast" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#111111] text-gray-400">
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-10">

        {/* Top: Brand */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pb-10 border-b border-[#222]">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt={`${BUSINESS_NAME} logo`} width={44} height={44} className="rounded-lg flex-shrink-0" />
            <div>
              <p className="text-white font-bold text-sm">{BUSINESS_NAME}</p>
              <p className="text-gray-500 text-xs">Epoxy Flooring Specialists — {SERVICE_AREA_PRIMARY}</p>
            </div>
          </div>
          <div className="flex flex-col sm:items-end gap-1.5">
            <a href={PHONE_HREF} className="flex items-center gap-2 text-sm font-bold hover:text-white transition-colors" style={{ color: "#C9A870" }}>
              <PhoneIcon /> {PHONE_NUMBER}
            </a>
            <a href={EMAIL_HREF} className="text-xs text-gray-500 hover:text-white transition-colors">{EMAIL}</a>
            <p className="text-xs text-gray-600">Based in {LOCATION} · Serving within 50km</p>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10 border-b border-[#222]">

          {/* Services */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm hover:text-white transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Service Areas</h3>
            <ul className="space-y-2.5">
              {LOCATIONS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
              <li className="text-xs text-gray-600 pt-1">+ Avoca Beach, Umina Beach & more</li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Guides & Resources</h3>
            <ul className="space-y-2.5">
              {BLOG_POSTS.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm hover:text-white transition-colors leading-snug block">{p.label}</Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/blog" className="text-xs font-semibold hover:opacity-80 transition-opacity" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  View all guides →
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Get a Quote</h3>
            <p className="text-sm mb-5 leading-relaxed">
              Free quotes, no obligation. Fixed price — what we quote is what you pay. We respond within 24 hours.
            </p>
            <Link href="/#quote" className="dfs-btn inline-block text-sm px-5 py-2.5 mb-5">
              Get My Free Quote →
            </Link>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              <span className="text-sm text-white font-semibold ml-1.5">5.0</span>
              <span className="text-xs ml-1">Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {year} {BUSINESS_NAME} Pty Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>Serving the {SERVICE_AREA_PRIMARY} & surrounds, NSW</span>
          </div>
        </div>
      </div>
    </footer>
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

function StarIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" style={{ color: "#C9A870" }}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
