"use client";

import { Monitor, MoonStar, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className, compact = true }: { className?: string; compact?: boolean }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted
    ? (theme === "system" ? resolvedTheme : theme) === "dark"
    : false;

  return <div className={cn("theme-control", className)}><button type="button" className="theme-button" aria-label="Toggle color theme" aria-pressed={isDark} onClick={() => setTheme(isDark ? "light" : "dark")}>{isDark ? <SunMedium size={16}/> : <MoonStar size={16}/>}</button>{!compact && <button type="button" className="theme-system" onClick={() => setTheme("system")} aria-label="Use system theme"><Monitor size={14}/></button>}</div>;
}
