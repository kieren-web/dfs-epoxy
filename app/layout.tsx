import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;

export const metadata: Metadata = {
  title: "Epoxy Flooring Central Coast | Dynamic Flooring Solutions",
  description:
    "High-performance epoxy flooring systems for warehouses, commercial kitchens, workshops, and garages on the Central Coast NSW. Owner-operated. 500+ floors installed. Free quotes.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dynamicflooringsolutions.com.au"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
      {GA4_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA4_ID}',{send_page_view:true});`}
          </Script>
        </>
      )}
    </html>
  );
}
