"use client";

import { useInView } from "@/hooks/useInView";
import { RATING, REVIEW_COUNT } from "@/lib/config";

const REVIEWS = [
  {
    name: "[Placeholder Name]",
    role: "Warehouse Manager, Central Coast",
    stars: 5,
    text: "DFS transformed our warehouse floor. The finish is incredible and Carl and Santiago were professional from start to finish. The diamond grinding prep made all the difference - couldn't recommend them more highly for any commercial project.",
  },
  {
    name: "[Placeholder Name]",
    role: "Restaurant Owner, Gosford",
    stars: 5,
    text: "Had our commercial kitchen floor done by DFS. Incredibly clean finish, slip-resistant, and they had the job done with minimal disruption to our operation. The owners were on site the whole time - that made a huge difference.",
  },
  {
    name: "[Placeholder Name]",
    role: "Homeowner, Tuggerah",
    stars: 5,
    text: "Got my garage done - these guys are the real deal. No shortcuts, proper preparation, looks absolutely amazing. Could tell they actually cared about the quality of the result. Would definitely use again.",
  },
];

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" style={{color: filled ? "#C9A870" : "#444"}}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Reviews() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section className="py-20 px-4 bg-[#222222]" id="reviews">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{color: "#D4187A"}}>
            Google Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">What Our Clients Say</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
            <span className="font-bold text-white">{RATING} / 5</span>
            <span className="text-gray-400 text-sm">({REVIEW_COUNT}+ Google Reviews)</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Note: Replace placeholder reviews with real Google reviews before launch.
          </p>
        </div>

        <div ref={ref} className={`grid md:grid-cols-3 gap-6 stagger ${isVisible ? "visible" : ""}`}>
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-[#1a1a1a] border border-[#333333] rounded-2xl p-6">
              <div className="flex mb-4">{[...Array(r.stars)].map((_, i) => <StarIcon key={i} />)}</div>
              <p className="text-sm text-gray-300 leading-relaxed mb-5">&ldquo;{r.text}&rdquo;</p>
              <div>
                <p className="text-sm font-bold text-white">{r.name}</p>
                <p className="text-xs text-gray-500">{r.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            See all reviews on{" "}
            <span className="font-semibold" style={{color: "#C9A870"}}>Google</span>
          </p>
        </div>
      </div>
    </section>
  );
}
