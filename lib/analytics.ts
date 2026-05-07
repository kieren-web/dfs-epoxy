"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  }
}

export function trackFormStep1Complete(service: string, suburb: string) {
  gtag("event", "form_step1_complete", { service, suburb });
}

export function trackFormSubmitSuccess(service: string) {
  gtag("event", "form_submit_success", { service });
  const conversionId = process.env.NEXT_PUBLIC_GADS_CONVERSION_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL;
  if (conversionId && conversionLabel) {
    gtag("event", "conversion", { send_to: `${conversionId}/${conversionLabel}` });
  }
}

export function trackClickCall(location: string) {
  gtag("event", "click_call", { call_location: location });
}
