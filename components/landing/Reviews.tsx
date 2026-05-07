"use client";

import Script from "next/script";

export default function Reviews() {
  return (
    <section className="py-20 px-4 bg-[#222222]" id="reviews">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#D4187A" }}>
            Google Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Clients Say</h2>
        </div>

        <Script
          src="https://quotes.dynamicflooringsolutions.com.au/reputation/assets/review-widget.js"
          strategy="lazyOnload"
        />
        <iframe
          className="lc_reviews_widget"
          src="https://quotes.dynamicflooringsolutions.com.au/reputation/widgets/review_widget/fNxHmCUsMs5qIn1vLvDt?widgetId=69fc6a720a0c8aa125c6b840"
          frameBorder={0}
          scrolling="no"
          style={{ minWidth: "100%", width: "100%", border: "none" }}
          title="Dynamic Flooring Solutions Google Reviews"
        />
      </div>
    </section>
  );
}
