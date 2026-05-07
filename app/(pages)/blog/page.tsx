import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Epoxy Flooring Blog | Central Coast Tips & Guides | Dynamic Flooring Solutions",
  description: "Epoxy flooring guides, cost breakdowns, and expert advice for Central Coast homeowners and businesses. Written by the team at Dynamic Flooring Solutions.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

const posts = [
  {
    slug: "how-much-does-epoxy-flooring-cost-central-coast",
    title: "How Much Does Epoxy Flooring Cost on the Central Coast? [2025 Guide]",
    excerpt: "Transparent pricing breakdown for residential garages, commercial kitchens, and warehouse floors on the Central Coast. What drives the cost and what to watch out for.",
    category: "Pricing",
    readTime: "6 min read",
  },
  {
    slug: "epoxy-flooring-vs-paint-whats-the-difference",
    title: "Epoxy Flooring vs Floor Paint: What's the Difference?",
    excerpt: "Floor paint and epoxy look similar in the tin but perform completely differently underfoot. Here's an honest breakdown of why they're not the same thing.",
    category: "Education",
    readTime: "5 min read",
  },
  {
    slug: "commercial-epoxy-flooring-guide-central-coast",
    title: "Commercial Epoxy Flooring on the Central Coast: A Complete Guide",
    excerpt: "Everything Central Coast business owners need to know before getting epoxy installed - system types, timelines, disruption management, and what questions to ask.",
    category: "Commercial",
    readTime: "8 min read",
  },
  {
    slug: "garage-epoxy-flooring-buyers-guide-central-coast",
    title: "Garage Epoxy Flooring: A Buyer's Guide for Central Coast Homeowners",
    excerpt: "Flake vs solid, polyaspartic vs standard epoxy, hot tyre pickup, UV yellowing - everything you need to know before getting your garage floor done.",
    category: "Residential",
    readTime: "7 min read",
  },
];

export default function BlogIndexPage() {
  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8" style={{ background: "#181818", minHeight: "100vh" }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4187A" }}>Expert Advice</p>
          <h1 className="text-4xl font-bold text-white mb-4">Epoxy Flooring Guides</h1>
          <p className="text-gray-400 max-w-xl">Straight-talking guides on epoxy flooring costs, systems, and what to ask your contractor. Written by the team at Dynamic Flooring Solutions on the Central Coast.</p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="rounded-2xl border border-[#333] p-7 transition-colors hover:border-[#7B35CC]/50" style={{ background: "#222" }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(123,53,204,0.2)", color: "#D4187A", border: "1px solid rgba(212,24,122,0.3)" }}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 group-hover:opacity-80 transition-opacity leading-snug">{post.title}</h2>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-sm font-semibold" style={{ background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Read more →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
