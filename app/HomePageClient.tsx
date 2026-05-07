"use client";

import { useRef } from "react";
import Header from "@/components/site/Header";
import SiteFooter from "@/components/site/SiteFooter";
import Hero from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import Problem from "@/components/landing/Problem";
import ServicesGrid from "@/components/landing/ServicesGrid";
import BeforeAfter from "@/components/landing/BeforeAfter";
import WhyDFS from "@/components/landing/WhyDFS";
import Process from "@/components/landing/Process";
import Reviews from "@/components/landing/Reviews";
import ServiceAreas from "@/components/landing/ServiceAreas";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import MobileStickyBar from "@/components/landing/MobileStickyBar";
import { useAttribution } from "@/hooks/useAttribution";

export default function HomePageClient() {
  const attribution = useAttribution();
  const formRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Header />
      <main className="pb-16 md:pb-0">
        <Hero attribution={attribution} />
        <TrustBar />
        <Problem />
        <ServicesGrid />
        <BeforeAfter />
        <WhyDFS />
        <Process />
        <Reviews />
        <ServiceAreas />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
      <MobileStickyBar />
    </>
  );
}
