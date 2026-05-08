import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Epoxy Flooring Central Coast | Dynamic Flooring Solutions",
  description: "Browse our commercial and residential epoxy flooring work across the Central Coast. Warehouses, garages, commercial kitchens and more — see the quality for yourself.",
  alternates: { canonical: `${SITE_URL}/gallery` },
};

const COMMERCIAL_IMAGES = Array.from({ length: 20 }, (_, i) => {
  const n = i + 1;
  const ext = [1, 2, 3, 18, 19, 20].includes(n) ? "jpeg" : "jpg";
  return {
    src: `/images/gallery/commercial/commercial-${n}.${ext}`,
    alt: `Commercial epoxy flooring Central Coast — job ${n}`,
  };
});

const RESIDENTIAL_IMAGES: { src: string; alt: string }[] = [
  // Residential photos will be added here
];

export default function GalleryPage() {
  return (
    <GalleryClient
      commercialImages={COMMERCIAL_IMAGES}
      residentialImages={RESIDENTIAL_IMAGES}
    />
  );
}
