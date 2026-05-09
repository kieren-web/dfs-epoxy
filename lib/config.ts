// Single source of truth - change here and it propagates everywhere.

// ── Contact ──────────────────────────────────────────────────────────────────
export const PHONE_NUMBER = "0483 986 101";
export const PHONE_HREF = "tel:+61483986101";
export const PHONE_SCHEMA = "+61483986101";
export const EMAIL = "Santiago@dynamicflooringsolutions.com.au";
export const EMAIL_HREF = "mailto:Santiago@dynamicflooringsolutions.com.au";

// ── Business ─────────────────────────────────────────────────────────────────
export const BUSINESS_NAME = "Dynamic Flooring Solutions";
export const BUSINESS_SHORT = "DFS";
export const OWNERS = "Carl & Santiago";
export const YEARS_EXPERIENCE = "10+";
export const FLOORS_INSTALLED = "500+";
export const RATING = "5.0";
export const REVIEW_COUNT = "20";
export const SERVICE_RADIUS = "50km";
export const LOCATION = "Tuggerah, NSW";
export const SERVICE_AREA_PRIMARY = "Central Coast";

// ── Site / Domain ─────────────────────────────────────────────────────────────
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dynamicflooringsolutions.com.au";

// ── Service suburbs ───────────────────────────────────────────────────────────
export const SERVICE_SUBURBS = [
  "Tuggerah", "Gosford", "Wyong", "Terrigal", "Erina",
  "The Entrance", "Avoca Beach", "Toukley", "Woy Woy",
  "Umina Beach", "Ourimbah", "Lisarow", "West Gosford",
  "Kariong", "Mannering Park", "Lake Munmorah", "Budgewoi",
  "Bateau Bay", "Killarney Vale", "Long Jetty", "Toowoon Bay",
];

// ── Reviews ───────────────────────────────────────────────────────────────────
export const GOOGLE_REVIEW_URL = "https://g.page/r/CVDLxrwBhDXoEAI/review";

// ── Lead flow ─────────────────────────────────────────────────────────────────
export const SUPABASE_TABLE = "leads_dfs";
export const API_ROUTE = "/api/contact";
