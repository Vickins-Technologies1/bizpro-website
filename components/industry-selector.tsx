"use client";

import { useState } from "react";
import { industryDetailMap, industryGroups } from "@/config/industries";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function IndustrySelector() {
  const [selected, setSelected] = useState<(typeof industryGroups)[number]["key"]>("retail");
  const active = industryDetailMap[selected];
  const currentGroup = industryGroups.find((item) => item.key === selected) ?? industryGroups[0];

  return (
    <Card className="p-4">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Business type selector">
        {industryGroups.map((item) => (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={selected === item.key}
            className={cn(
              "rounded-full border px-3.5 py-2 text-[13px] transition",
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

      <div className="mt-4 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-border/70 bg-background/70 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Selected business</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">{currentGroup.label}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{currentGroup.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {currentGroup.capabilities.map((capability) => (
              <span
                key={capability}
                className="rounded-full border border-primary/15 bg-primary/5 px-2.5 py-1 text-[11px] font-medium text-primary"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border/70 bg-card/70 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">How BizPro adapts</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">{active.title}</h3>
          <ul className="mt-4 grid gap-2.5">
            {active.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 rounded-2xl border border-border/60 px-3 py-2.5">
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
