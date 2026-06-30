import type { Metadata } from "next";
import QuoteBuilderClient from "./QuoteBuilderClient";

export const metadata: Metadata = {
  title: "Quote Builder | Dynamic Flooring Solutions",
  robots: { index: false, follow: false },
};

export default function QuoteBuilderPage() {
  return <QuoteBuilderClient />;
}
