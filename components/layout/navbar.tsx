"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { DownloadCTA } from "@/components/ui/download-cta";
import { cn } from "@/lib/utils";

function NavLink({
  href,
  label,
  active = false,
  mobile = false,
  onNavigate
}: {
  href: string;
  label: string;
  active?: boolean;
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
      className={cn(
        "inline-flex items-center rounded-full text-[13px] font-medium tracking-[-0.01em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        mobile
          ? "w-full rounded-2xl px-4 py-3 text-[14px] text-foreground hover:bg-foreground/5"
          : "px-2.5 py-1.5 text-muted hover:bg-foreground/5 hover:text-foreground",
        active && !mobile && "bg-primary/5 text-foreground",
        active && mobile && "bg-primary/5 text-foreground ring-1 ring-inset ring-primary/15"
      )}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuPanelRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const root = menuPanelRef.current;
    const focusable = root
      ? Array.from(root.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(
          (element) => !element.hasAttribute("disabled")
        )
      : [];

    focusable[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (!activeElement || activeElement === first) {
          event.preventDefault();
          last.focus();
        }
        return;
      }

      if (activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled
          ? "border-border/70 bg-background/90 shadow-panel backdrop-blur-md supports-[backdrop-filter]:bg-background/80"
          : "border-border/60 bg-background/90 backdrop-blur-md",
        "supports-[backdrop-filter]:bg-background/75"
      )}
    >
      <Container className="relative">
        <div className="flex min-h-[64px] items-center justify-between gap-3 py-2 lg:min-h-[68px]">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/brand/dira-logo.png"
              alt="Dira OS"
              width={36}
              height={36}
              priority
              sizes="36px"
              unoptimized
              className="h-9 w-9 shrink-0 rounded-xl object-cover sm:h-10 sm:w-10"
            />
            <span className="text-[13px] font-semibold tracking-[-0.01em] text-foreground">Dira OS</span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} active={pathname === item.href} />
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle compact className="shrink-0" />
            <DownloadCTA compact label="Start Free Trial" className="shrink-0" />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle compact className="shrink-0" />
            <button
              ref={menuButtonRef}
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-card/80 text-foreground transition duration-200 hover:border-primary/40 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <button
          type="button"
          aria-hidden="true"
          tabIndex={-1}
          onClick={closeMenu}
          className={cn(
            "fixed inset-x-0 bottom-0 z-40 bg-transparent transition-opacity duration-200 lg:hidden",
            menuOpen ? "pointer-events-auto top-[60px] opacity-100 sm:top-[64px]" : "pointer-events-none top-[60px] opacity-0 sm:top-[64px]"
          )}
        />

        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          ref={menuPanelRef}
          className={cn(
            "absolute left-0 right-0 top-full z-50 overflow-hidden border-b border-border/60 bg-card/96 backdrop-blur-xl transition-[max-height,opacity,transform] duration-200 ease-out lg:hidden supports-[backdrop-filter]:bg-card/88",
            menuOpen ? "max-h-[calc(100dvh-60px)] translate-y-0 opacity-100 sm:max-h-[calc(100dvh-64px)]" : "max-h-0 -translate-y-2 opacity-0"
          )}
        >
          <Container className="py-3">
            <nav className="grid gap-1" aria-label="Mobile navigation links">
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  active={pathname === item.href}
                  mobile
                  onNavigate={closeMenu}
                />
              ))}
            </nav>
            <div className="pt-3">
              <DownloadCTA compact label="Start Free Trial" className="w-full justify-center" onClick={closeMenu} />
            </div>
          </Container>
        </div>
      </Container>
    </header>
  );
}
