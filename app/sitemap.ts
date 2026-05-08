import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ── Homepage ────────────────────────────────────────────────────────────
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },

    // ── Commercial service pages ────────────────────────────────────────────
    { url: `${SITE_URL}/services/commercial-epoxy-flooring-central-coast`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/services/warehouse-epoxy-flooring-central-coast`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/services/commercial-kitchen-epoxy-flooring-central-coast`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },

    // ── Residential service pages ───────────────────────────────────────────
    { url: `${SITE_URL}/services/residential-epoxy-flooring-central-coast`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/services/garage-epoxy-flooring-central-coast`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Location pages ──────────────────────────────────────────────────────
    { url: `${SITE_URL}/epoxy-flooring-gosford`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/epoxy-flooring-tuggerah`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/epoxy-flooring-wyong`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/epoxy-flooring-terrigal`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/epoxy-flooring-erina`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/epoxy-flooring-the-entrance`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/epoxy-flooring-woy-woy`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // ── Blog ────────────────────────────────────────────────────────────────
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/blog/how-much-does-epoxy-flooring-cost-central-coast`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blog/epoxy-flooring-vs-paint-whats-the-difference`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/commercial-epoxy-flooring-guide-central-coast`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/blog/garage-epoxy-flooring-buyers-guide-central-coast`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },

    // ── Static pages ────────────────────────────────────────────────────────
    { url: `${SITE_URL}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
