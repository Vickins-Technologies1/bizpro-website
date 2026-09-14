"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function HomeFaq({ items }: { items: readonly { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(0);
  return <div className="mx-auto mt-8 max-w-3xl divide-y divide-border rounded-2xl border border-border/70 bg-card">{items.map((item, index) => <div key={item.question}><button type="button" aria-expanded={open === index} className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left text-sm font-semibold" onClick={() => setOpen(open === index ? -1 : index)}>{item.question}<ChevronDown className={cn("h-4 w-4 shrink-0 text-primary transition-transform", open === index && "rotate-180")} /></button><div className={cn("grid transition-[grid-template-rows,opacity] duration-200", open === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}><div className="overflow-hidden"><p className="px-5 pb-5 text-sm leading-6 text-muted">{item.answer}</p></div></div></div>)}</div>;
}
