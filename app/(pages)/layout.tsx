import Header from "@/components/site/Header";
import SiteFooter from "@/components/site/SiteFooter";
import MobileStickyBar from "@/components/landing/MobileStickyBar";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pb-16 md:pb-0">
        {children}
      </main>
      <SiteFooter />
      <MobileStickyBar />
    </>
  );
}
