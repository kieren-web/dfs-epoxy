"use client";

import Link from "next/link";
import { PHONE_HREF } from "@/lib/config";
import { trackClickCall } from "@/lib/analytics";

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-pb" style={{background: "#181818", borderTop: "1px solid transparent", borderImage: "linear-gradient(90deg, #7B35CC, #D4187A, #F05A28) 1"}}>
      <div className="flex">
        <a
          href={PHONE_HREF}
          onClick={() => trackClickCall("mobile-sticky")}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-semibold text-sm border-r border-[#333333] hover:bg-[#222] transition-colors"
        >
          <PhoneIcon />
          Call Now
        </a>
        <Link
          href="#quote"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-bold text-sm"
          style={{background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)"}}
        >
          <QuoteIcon />
          Get a Quote
        </Link>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  );
}
function QuoteIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}
