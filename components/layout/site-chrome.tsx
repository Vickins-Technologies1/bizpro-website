"use client";
import { Navbar } from "@/components/layout/navbar";
import { BackToTop } from "@/components/layout/back-to-top";
import { Footer } from "@/components/layout/footer";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <Navbar />
      {children}
      <BackToTop />
      <Footer />
    </div>
  );
}
