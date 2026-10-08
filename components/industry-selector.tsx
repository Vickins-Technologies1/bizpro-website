"use client";

import { ArrowRight, Check, Layers3 } from "lucide-react";
import { useState } from "react";
import { industryDetailMap, industryGroups } from "@/config/industries";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function IndustrySelector() {
  const [selected, setSelected] = useState<(typeof industryGroups)[number]["key"]>("retail");
  const active = industryDetailMap[selected];
  const currentGroup = industryGroups.find((item) => item.key === selected) ?? industryGroups[0];

  return (
    <Card className="overflow-hidden p-2 sm:p-3">
      <div className="flex gap-1.5 overflow-x-auto pb-1" role="tablist" aria-label="Business type selector">
        {industryGroups.map((item) => <button key={item.key} type="button" role="tab" id={`industry-tab-${item.key}`} aria-selected={selected === item.key} aria-controls="industry-panel" className={cn("shrink-0 rounded-lg border px-3 py-2 text-xs font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", selected === item.key ? "border-primary/30 bg-primary/10 text-foreground" : "border-border/70 bg-background/60 text-muted hover:border-primary/25 hover:text-foreground")} onClick={() => setSelected(item.key)}>{item.label}</button>)}
      </div>

      <div id="industry-panel" role="tabpanel" aria-labelledby={`industry-tab-${selected}`} className="mt-2 grid gap-0 overflow-hidden rounded-xl border border-border bg-surface lg:grid-cols-[0.8fr_1.2fr]">
        <div key={`summary-${selected}`} className="border-b border-border p-5 motion-safe:animate-slide-up lg:border-b-0 lg:border-r lg:p-6"><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">{currentGroup.label}</p><h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{active.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{currentGroup.summary}</p><div className="mt-6 space-y-2">{currentGroup.capabilities.map((capability) => <div key={capability} className="flex items-center gap-2 text-xs text-muted"><Check className="h-3.5 w-3.5 text-accent" /> {capability}</div>)}</div></div>
        <div key={`detail-${selected}`} className="p-5 motion-safe:animate-slide-up sm:p-6" style={{ animationDelay: "80ms" }}><div className="flex items-center justify-between"><p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary"><Layers3 className="h-3.5 w-3.5" /> Workflow lens</p><span className="text-[10px] font-semibold text-accent">{active.primaryAction}</span></div><div className="mt-6 flex flex-wrap items-center gap-2">{active.workflow.map((step, index) => <div key={step} className="flex items-center gap-2"><span className={cn("rounded-lg border px-3 py-2 text-xs font-semibold", index === 0 ? "border-primary/20 bg-primary/10 text-primary" : "border-border bg-card text-foreground")}>{step}</span>{index < active.workflow.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-muted" aria-hidden="true" />}</div>)}</div><div className="mt-7 grid gap-2 sm:grid-cols-2">{active.bullets.map((bullet) => <div key={bullet} className="rounded-lg border border-border bg-card px-3 py-3 text-xs text-muted">{bullet}</div>)}</div></div>
      </div>
    </Card>
  );
}
