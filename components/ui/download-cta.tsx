"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDownloadLink } from "@/config/site";
import { buttonStyles } from "@/components/ui/button";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function DownloadCTA({
  className,
  variant = "primary",
  label
}: {
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  label?: string;
}) {
  const download = getDownloadLink();
  const text = label ?? download.label;
  const handleClick = () => {
    track("apk_download_click", {
      available: download.available,
      destination: download.href
    });
  };

  const classes = cn(buttonStyles(variant, className), "whitespace-nowrap");

  if (download.external) {
    return (
      <a className={classes} href={download.href} target="_blank" rel="noreferrer" onClick={handleClick}>
        {text}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link className={classes} href={download.href} onClick={handleClick}>
      {text}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
