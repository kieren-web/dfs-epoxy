import { createClient } from "@supabase/supabase-js";

export function createServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  if (!url || !key) throw new Error("Missing Supabase env vars");
  return createClient(url, key, { auth: { persistSession: false } });
}

export interface LeadRow {
  id?: string;
  created_at?: string;
  service: string;
  suburb: string;
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  best_time: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
  gclid?: string | null;
  fbclid?: string | null;
  landing_path?: string | null;
  referrer?: string | null;
  device?: string | null;
  timestamp?: string;
  ip?: string | null;
}
