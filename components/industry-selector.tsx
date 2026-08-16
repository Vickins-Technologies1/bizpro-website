"use client";

import { useState } from "react";
import { industryDetailMap, industryGroups } from "@/config/industries";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function IndustrySelector() {
  const [selected, setSelected] = useState<(typeof industryGroups)[number]["key"]>("retail");
  const active = industryDetailMap[selected];

  return (
    <Card className="p-4 sm:p-5">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Business type selector">
        {industryGroups.map((item) => (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={selected === item.key}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition",
              selected === item.key
                ? "border-primary/30 bg-primary/10 text-foreground"
                : "border-border/70 bg-background/60 text-muted hover:text-foreground"
            )}
            onClick={() => setSelected(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-border/70 bg-background/70 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Selected business</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">{industryGroups.find((item) => item.key === selected)?.label}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{industryGroups.find((item) => item.key === selected)?.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {industryGroups.find((item) => item.key === selected)?.capabilities.map((capability) => (
              <span
                key={capability}
                className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border/70 bg-card/70 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">How BizPro adapts</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">{active.title}</h3>
          <ul className="mt-4 grid gap-3">
            {active.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 rounded-2xl border border-border/60 px-4 py-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent))]" aria-hidden="true" />
                <span className="text-sm text-muted">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}

