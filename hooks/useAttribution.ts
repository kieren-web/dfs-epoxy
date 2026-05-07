"use client";

import { useEffect, useState } from "react";

export interface Attribution {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  gclid: string | null;
  fbclid: string | null;
  landing_path: string | null;
  referrer: string | null;
  device: string | null;
}

function getParam(params: URLSearchParams, key: string): string | null {
  return params.get(key) || null;
}

function getDevice(): string {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent;
  if (/Mobi|Android/i.test(ua)) return "mobile";
  if (/Tablet|iPad/i.test(ua)) return "tablet";
  return "desktop";
}

export function useAttribution(): Attribution {
  const [attr, setAttr] = useState<Attribution>({
    utm_source: null, utm_medium: null, utm_campaign: null,
    utm_content: null, utm_term: null, gclid: null, fbclid: null,
    landing_path: null, referrer: null, device: null,
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setAttr({
      utm_source:    getParam(params, "utm_source"),
      utm_medium:    getParam(params, "utm_medium"),
      utm_campaign:  getParam(params, "utm_campaign"),
      utm_content:   getParam(params, "utm_content"),
      utm_term:      getParam(params, "utm_term"),
      gclid:         getParam(params, "gclid"),
      fbclid:        getParam(params, "fbclid"),
      landing_path:  window.location.pathname + window.location.search,
      referrer:      document.referrer || null,
      device:        getDevice(),
    });
  }, []);

  return attr;
}
