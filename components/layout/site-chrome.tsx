"use client";
import { BackToTop } from "@/components/layout/back-to-top";
import { Footer } from "@/components/layout/footer";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      {children}
      <BackToTop />
      <Footer />
    </div>
  );
}
