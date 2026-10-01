"use client";

import { ArrowRight } from "lucide-react";
import type { MouseEventHandler } from "react";
import { useDownload } from "@/components/download/download-context";
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
  onClick?: MouseEventHandler<HTMLElement>;
}) {
  const text = label ?? "Get it on Google Play";
  const { openDownload } = useDownload();

  const compactClasses = cn(
    "group inline-flex min-h-9 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border px-[16px] py-[10px] text-[13px] font-medium transition-[transform,background-color,border-color,box-shadow,filter] duration-200 hover:-translate-y-0.5 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variant === "primary" &&
      "border-transparent bg-gradient-to-r from-primary to-accent text-primary-foreground hover:brightness-105",
    variant === "secondary" && "border-border/80 bg-card/85 text-foreground hover:border-primary/40 hover:bg-card",
    variant === "ghost" && "border-transparent bg-transparent text-foreground hover:bg-foreground/5",
    variant === "outline" && "border-border/80 bg-transparent text-foreground hover:border-primary/40 hover:bg-primary/5",
    className
  );

  const classes = compact ? compactClasses : cn(buttonStyles(variant, className), "whitespace-nowrap");

  return (
    <button
      type="button"
      className={classes}
      onClick={(event) => {
        track("play_store_click", { available: true, destination: "download-modal" });
        openDownload();
        onClick?.(event);
      }}
    >
      {text}
      <ArrowRight className={cn(compact ? "h-3.5 w-3.5" : "h-4 w-4", "transition-transform duration-200 group-hover:translate-x-1")} aria-hidden="true" />
    </button>
  );
}
