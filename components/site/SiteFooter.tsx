import Link from "next/link";
import {
  BUSINESS_NAME, BUSINESS_SHORT, PHONE_NUMBER, PHONE_HREF,
  EMAIL, EMAIL_HREF, LOCATION, SERVICE_AREA_PRIMARY,
} from "@/lib/config";

const SERVICES = [
  { label: "Commercial Epoxy Flooring", href: "/#services" },
  { label: "Warehouse Flooring", href: "/#services" },
  { label: "Commercial Kitchen Flooring", href: "/#services" },
  { label: "Workshop Flooring", href: "/#services" },
  { label: "Garage Epoxy Flooring", href: "/#residential" },
  { label: "Get a Free Quote", href: "/#quote" },
];

const SUBURBS = [
  "Tuggerah", "Gosford", "Wyong", "Terrigal",
  "Erina", "The Entrance", "Woy Woy", "Avoca Beach",
  "Umina Beach", "Ourimbah",
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#111111] text-gray-400">
      <div className="max-w-6xl mx-auto px-4 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1: Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-lg dfs-gradient flex items-center justify-center font-black text-white text-base flex-shrink-0">
              {BUSINESS_SHORT}
            </span>
            <span className="text-white font-bold text-sm">{BUSINESS_NAME}</span>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            High-performance epoxy flooring systems for commercial and residential environments across the {SERVICE_AREA_PRIMARY}. Owner-operated. 500+ floors installed.
          </p>
          <a href={PHONE_HREF} className="flex items-center gap-2 text-sm font-semibold mb-2 hover:text-white transition-colors" style={{color: "#C9A870"}}>
            <PhoneIcon />
            {PHONE_NUMBER}
          </a>
          <a href={EMAIL_HREF} className="text-sm text-gray-500 hover:text-white transition-colors break-all">
            {EMAIL}
          </a>
        </div>

        {/* Col 2: Services */}
        <div>
          <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-4">Services</h3>
          <ul className="space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="text-sm hover:text-white transition-colors">{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Areas */}
        <div>
          <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-4">Areas We Serve</h3>
          <ul className="space-y-2.5">
            {SUBURBS.map((s) => (
              <li key={s} className="text-sm">{s}</li>
            ))}
            <li className="text-sm text-gray-500">+ more Central Coast suburbs</li>
          </ul>
        </div>

        {/* Col 4: CTA */}
        <div>
          <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-4">Get in Touch</h3>
          <p className="text-sm mb-4 leading-relaxed">
            Free quotes, no obligation. We respond within 24 hours. Based in {LOCATION}.
          </p>
          <Link
            href="/#quote"
            className="dfs-btn inline-block text-sm px-5 py-2.5"
          >
            Get My Free Quote →
          </Link>
          <div className="mt-6 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
            <span className="text-sm text-white font-semibold ml-1.5">5.0 / 5</span>
            <span className="text-xs ml-1">(Google)</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#222222]">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {year} {BUSINESS_NAME} Pty Ltd. All rights reserved.</p>
          <div className="flex gap-4">
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
    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" style={{color: "#C9A870"}}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
