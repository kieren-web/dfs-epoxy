import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Epoxy Flooring Central Coast | Dynamic Flooring Solutions",
  description: "Browse our commercial and residential epoxy flooring work across the Central Coast. Warehouses, garages, commercial kitchens and more — see the quality for yourself.",
  alternates: { canonical: `${SITE_URL}/gallery` },
};

const COMMERCIAL_IMAGES = [
  ...Array.from({ length: 20 }, (_, i) => {
    const n = i + 1;
    const ext = [1, 2, 3, 18, 19, 20].includes(n) ? "jpeg" : "jpg";
    return { src: `/images/gallery/commercial/commercial-${n}.${ext}`, alt: `Commercial epoxy flooring Central Coast — job ${n}` };
  }),
  { src: "/images/gallery/commercial/commercial-21.jpg", alt: "Commercial epoxy flooring Central Coast" },
  { src: "/images/gallery/commercial/commercial-22.jpg", alt: "Commercial epoxy flooring Central Coast" },
  { src: "/images/gallery/commercial/commercial-23.jpg", alt: "Commercial epoxy flooring Central Coast" },
  { src: "/images/gallery/commercial/commercial-24.jpg", alt: "Commercial epoxy flooring Central Coast" },
];

const RESIDENTIAL_IMAGES = Array.from({ length: 17 }, (_, i) => ({
  src: `/images/gallery/residential/residential-${i + 1}.jpg`,
  alt: `Residential epoxy flooring Central Coast — job ${i + 1}`,
}));

const BEFORE_AFTER = [
  {
    before: { src: "/images/gallery/before-after/before-1.jpg", alt: "Before epoxy flooring — concrete floor" },
    after: { src: "/images/gallery/before-after/after-1.jpg", alt: "After epoxy flooring — finished floor" },
    label: "Garage Floor Transformation",
  },
  {
    before: { src: "/images/gallery/before-after/before-2.jpg", alt: "Before epoxy flooring — concrete floor" },
    after: { src: "/images/gallery/before-after/after-2.jpg", alt: "After epoxy flooring — finished floor" },
    label: "Garage Floor Transformation",
  },
];

export default function GalleryPage() {
  return (
    <GalleryClient
      commercialImages={COMMERCIAL_IMAGES}
      residentialImages={RESIDENTIAL_IMAGES}
      beforeAfter={BEFORE_AFTER}
    />
  );
}
