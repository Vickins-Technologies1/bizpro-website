"use client";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
export function SiteChrome({ children }: { children: React.ReactNode }) { return <div className="site-shell"><Navbar />{children}<Footer /></div>; }
