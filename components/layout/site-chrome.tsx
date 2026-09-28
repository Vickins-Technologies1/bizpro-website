"use client";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
export function SiteChrome({ children }: { children: React.ReactNode }) { const pathname = usePathname(); const home = pathname === "/"; return <>{!home && <Navbar />}{children}{!home && <Footer />}</>; }
