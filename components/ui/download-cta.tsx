"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MouseEventHandler } from "react";
import { getDownloadLink } from "@/config/site";
import { buttonStyles } from "@/components/ui/button";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function DownloadCTA({
  className,
  variant = "primary",
  label,
  compact = false,
  onClick
}: {
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  label?: string;
  compact?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  const download = getDownloadLink();
  const text = label ?? "Download BizPro";
  const handleClick = () => {
    track("apk_download_click", {
      available: download.available,
      destination: download.href
    });
  };

  const compactClasses = cn(
    "inline-flex min-h-9 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border px-[16px] py-[10px] text-[13px] font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variant === "primary" &&
      "border-transparent bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-[rgb(var(--primary-foreground))] hover:brightness-105",
    variant === "secondary" && "border-border/80 bg-card/85 text-foreground hover:border-primary/40 hover:bg-card",
    variant === "ghost" && "border-transparent bg-transparent text-foreground hover:bg-foreground/5",
    variant === "outline" && "border-border/80 bg-transparent text-foreground hover:border-primary/40 hover:bg-primary/5",
    className
  );

  const classes = compact ? compactClasses : cn(buttonStyles(variant, className), "whitespace-nowrap");

  if (download.external) {
    return (
      <a className={classes} href={download.href} target="_blank" rel="noreferrer" onClick={(event) => {
        handleClick();
        onClick?.(event);
      }}>
        {text}
        <ArrowRight className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link
      className={classes}
      href={download.href}
      onClick={(event) => {
        handleClick();
        onClick?.(event);
      }}
    >
      {text}
      <ArrowRight className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} aria-hidden="true" />
    </Link>
  );
}
