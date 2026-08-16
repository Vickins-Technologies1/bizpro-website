"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";
import { buttonStyles } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { DownloadCTA } from "@/components/ui/download-cta";
import { cn } from "@/lib/utils";

function NavLink({
  href,
  label,
  active = false,
  mobile = false
}: {
  href: string;
  label: string;
  active?: boolean;
  mobile?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium text-muted transition hover:text-foreground",
        active && "text-foreground",
        mobile && "rounded-2xl px-4 py-3 text-base hover:bg-foreground/5"
      )}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-8xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-9 w-28">
            <Image
              src="/brand/logo-light.svg"
              alt="BizPro"
              fill
              priority
              sizes="112px"
              unoptimized
              className="object-contain dark:hidden"
            />
            <Image
              src="/brand/logo-dark.svg"
              alt="BizPro"
              fill
              priority
              sizes="112px"
              unoptimized
              className="hidden object-contain dark:block"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} active={pathname === item.href} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <DownloadCTA />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle className="px-3" />
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={buttonStyles("secondary", "px-3")}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-border/60 bg-background/95 lg:hidden">
          <div className="mx-auto grid w-full max-w-8xl gap-3 px-4 py-4 sm:px-6">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} active={pathname === item.href} mobile />
              ))}
            </nav>
            <div className="grid gap-3 rounded-3xl border border-border/70 bg-card/80 p-4 shadow-panel">
              <p className="text-sm text-muted">Primary conversion goal: download BizPro for Android.</p>
              <DownloadCTA className="w-full justify-center" />
              <Link href="/download" className={buttonStyles("outline", "w-full justify-center")}>
                Open download page
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
