import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ── Homepage ────────────────────────────────────────────────────────────
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    // ── Commercial service pages ────────────────────────────────────────────
    {
      url: `${SITE_URL}/services/commercial-epoxy-flooring-central-coast`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/warehouse-epoxy-flooring-central-coast`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services/commercial-kitchen-epoxy-flooring-central-coast`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // ── Residential service pages ───────────────────────────────────────────
    {
      url: `${SITE_URL}/services/garage-epoxy-flooring-central-coast`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ── Location pages ──────────────────────────────────────────────────────
    {
      url: `${SITE_URL}/epoxy-flooring-gosford`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/epoxy-flooring-tuggerah`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/epoxy-flooring-wyong`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // ── Static pages ────────────────────────────────────────────────────────
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
