import type { Metadata } from "next";
import Script from "next/script";
import { localBusinessSchema, faqPageSchema } from "@/lib/schema";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Epoxy Flooring Central Coast | Dynamic Flooring Solutions",
  description:
    "High-performance epoxy flooring systems for warehouses, commercial kitchens, workshops, and garages on the Central Coast NSW. Owner-operated by Carl & Santiago. 500+ floors installed. Free quotes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Epoxy Flooring Central Coast | Dynamic Flooring Solutions",
    description:
      "Central Coast's commercial epoxy specialists. Owner-operated, 500+ floors, warehouses, kitchens, workshops, garages. Free quotes.",
    type: "website",
  },
};

const FAQS = [
  {
    question: "How much does epoxy flooring cost on the Central Coast?",
    answer:
      "Pricing depends on the size, condition of the existing floor, and system type. Residential garages typically start from $50–$80 per m². Commercial jobs are priced on site inspection. We provide free, fixed-price quotes — the price we quote is the price you pay, no variations on the day.",
  },
  {
    question: "How long does epoxy flooring last?",
    answer:
      "A properly installed commercial-grade epoxy system lasts 10–20 years with standard maintenance. The key is surface preparation and using the right product for the environment. Cheap coatings applied without proper prep typically fail in 2–3 years.",
  },
  {
    question: "Can you install epoxy in a working warehouse or business?",
    answer:
      "Yes. We plan around your operations and can stage the work in sections to minimise disruption. We've worked in live commercial kitchens, active warehouses, and busy workshops.",
  },
  {
    question: "Is epoxy flooring slippery?",
    answer:
      "Standard high-gloss epoxy can be slippery when wet. We add anti-slip aggregate to all commercial and wet-area work as standard practice. Slip resistance ratings are available on request.",
  },
  {
    question: "How long does installation take?",
    answer:
      "A residential double garage takes 1–2 days. Commercial jobs vary — we'll confirm timeframes in your quote. You can typically walk on the surface within 24 hours and return to full commercial use within 72 hours.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Yes. Warranty terms are confirmed at quote stage and depend on the system installed and the environment. We use commercial-grade materials and follow manufacturer installation specs on every job.",
  },
];

export default function HomePage() {
  const lbSchema  = localBusinessSchema();
  const faqSchema = faqPageSchema(FAQS);

  return (
    <>
      <Script id="schema-lb" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(lbSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <HomePageClient />
    </>
  );
}
