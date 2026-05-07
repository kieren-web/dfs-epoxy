import Link from "next/link";
import { PHONE_NUMBER, PHONE_HREF, FLOORS_INSTALLED, SERVICE_AREA_PRIMARY } from "@/lib/config";

export default function FinalCTA() {
  return (
    <section
      className="relative py-24 px-4 text-white text-center overflow-hidden"
      style={{background: "radial-gradient(ellipse at center, rgba(123,53,204,0.25) 0%, rgba(212,24,122,0.1) 50%, #181818 80%)"}}
    >
      {/* Gradient overlay line at top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{background: "linear-gradient(90deg, transparent, #7B35CC, #D4187A, #F05A28, transparent)"}} aria-hidden="true" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Upgrade Your Floor?
        </h2>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Get a free, no-obligation quote from the Central Coast&apos;s commercial epoxy specialists. We respond within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="#quote"
            className="dfs-btn text-lg px-9 py-4 text-center"
          >
            Get My Free Quote →
          </Link>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/50 text-white font-semibold text-lg px-7 py-4 rounded-lg transition-colors"
          >
            <PhoneIcon />
            {PHONE_NUMBER}
          </a>
        </div>

        <p className="text-sm text-gray-500">
          Owner-operated · {FLOORS_INSTALLED} floors installed · {SERVICE_AREA_PRIMARY} & surrounds
        </p>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  );
}
