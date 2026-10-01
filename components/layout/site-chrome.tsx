"use client";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
export function SiteChrome({ children }: { children: React.ReactNode }) { return <><Navbar />{children}<Footer /></>; }
