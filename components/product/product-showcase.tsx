"use client";

import {
  Activity,
  ArrowUpRight,
  BarChart3,
  CalendarClock,
  Check,
  CircleDollarSign,
  CloudOff,
  CreditCard,
  Layers3,
  MapPin,
  Users2
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const views = [
  { key: "command", label: "Command center", eyebrow: "See the whole picture", title: "Everything happening in the business, connected.", description: "Bring performance, activity, people and operational status into one calm workspace." },
  { key: "workflow", label: "Workflows", eyebrow: "Keep work moving", title: "Make the next step easier to see.", description: "Keep appointments, services, payments and follow-ups close to the people doing the work." },
  { key: "mobile", label: "Mobile workspace", eyebrow: "Work from anywhere", title: "Bring the operating picture with you.", description: "A focused mobile surface for checking the day, capturing work and staying connected." },
  { key: "insights", label: "Insights", eyebrow: "Understand performance", title: "Read the signal without digging.", description: "Turn connected activity into useful context for better everyday decisions." }
] as const;

type ViewKey = (typeof views)[number]["key"];

function WindowChrome({ children, label }: { children: ReactNode; label: string }) {
  return <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-panel"><div className="flex items-center justify-between border-b border-border bg-surface-muted px-4 py-3"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary/40" /><span className="h-2 w-2 rounded-full bg-accent/70" /><span className="h-2 w-2 rounded-full bg-accent" /><span className="ml-2 text-[10px] font-semibold text-muted">Dira OS / {label}</span></div><span className="flex items-center gap-1 text-[10px] font-semibold text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Connected</span></div>{children}</div>;
}

const activityItems = [
  [Activity, "New sale", "Recorded in Sales"], [CalendarClock, "Appointment", "Ready for today"], [Users2, "Customer", "Profile updated"],
  [CreditCard, "Payment", "Added to Finance"], [Layers3, "Service / job", "Assigned to a team"], [CircleDollarSign, "Expense", "Captured for review"]
] as const;

function CommandCenterView() {
  return <WindowChrome label="Command center"><div className="grid gap-3 p-4 sm:p-5"><div className="grid gap-3 lg:grid-cols-[1.06fr_.94fr]"><div className="rounded-xl border border-border bg-surface-muted p-4"><div className="flex items-start justify-between gap-3"><div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Business performance</p><p className="mt-2 text-2xl font-semibold tracking-[-0.05em]">One clear picture.</p></div><BarChart3 className="h-5 w-5 text-primary" /></div><div className="mt-5 grid grid-cols-2 gap-2">{[["Revenue", "In view"], ["Transactions", "Recorded"], ["Expenses", "Tracked"], ["Customers", "Active"]].map(([label, value]) => <div key={label} className="rounded-lg border border-border bg-card p-3"><p className="text-[10px] text-muted">{label}</p><p className="mt-2 text-xs font-semibold">{value}</p></div>)}</div><div className="mt-4 flex h-14 items-end gap-1.5 rounded-lg border border-border bg-card px-3 pb-2 pt-3">{[28, 42, 34, 55, 48, 69, 61, 78, 72, 88].map((height, index) => <span key={index} className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent opacity-80" style={{ height: `${height}%` }} />)}</div></div><div className="rounded-xl border border-border bg-surface-muted p-4"><div className="flex items-center justify-between"><p className="text-xs font-semibold">Recent activity</p><span className="text-[10px] text-muted">Illustrative view</span></div><div className="mt-3 space-y-1.5">{activityItems.map(([Icon, title, detail]) => <div key={title} className="flex items-center gap-2.5 rounded-lg border border-border bg-card px-2.5 py-2"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"><Icon className="h-3.5 w-3.5" /></span><span className="min-w-0"><b className="block truncate text-[11px] font-semibold">{title}</b><small className="mt-0.5 block truncate text-[10px] text-muted">{detail}</small></span><Check className="ml-auto h-3.5 w-3.5 shrink-0 text-accent" /></div>)}</div></div></div><div className="grid gap-2 sm:grid-cols-3">{[[MapPin, "Branches", "Connected"], [Users2, "Team", "In sync"], [CloudOff, "Offline status", "Ready to work"]].map(([Icon, label, value]) => <div key={label as string} className="flex items-center gap-2.5 rounded-lg border border-border bg-card px-3 py-2.5"><Icon className="h-4 w-4 text-accent" /><span><small className="block text-[10px] text-muted">{label as string}</small><b className="mt-0.5 block text-[11px]">{value as string}</b></span></div>)}</div></div></WindowChrome>;
}

function WorkflowView() {
  const workflows = [[CalendarClock, "Appointment", "Ready for today", "Customer work"], [Layers3, "Service / job", "In progress", "Assigned to team"], [CreditCard, "Payment", "Awaiting confirmation", "Finance"], [CircleDollarSign, "Expense", "Captured", "Operations"]] as const;
  return <WindowChrome label="Operations"><div className="p-4 sm:p-5"><div className="flex items-start justify-between gap-3"><div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Today&apos;s workflow</p><p className="mt-2 text-2xl font-semibold tracking-[-0.05em]">Keep the next step visible.</p></div><ArrowUpRight className="h-5 w-5 text-primary" /></div><div className="mt-5 grid gap-2 sm:grid-cols-2">{workflows.map(([Icon, title, status, group]) => <div key={title} className="flex items-center gap-3 rounded-xl border border-border bg-surface-muted p-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-card text-primary"><Icon className="h-4 w-4" /></span><span className="min-w-0"><b className="block text-xs font-semibold">{title}</b><small className="mt-1 block text-[10px] text-muted">{status} · {group}</small></span><Check className="ml-auto h-4 w-4 shrink-0 text-accent" /></div>)}</div><div className="mt-4 flex items-center gap-2 rounded-lg border border-dashed border-primary/30 bg-primary/5 px-3 py-2.5 text-[10px] text-muted"><Activity className="h-3.5 w-3.5 text-primary" /> Work stays connected as it moves between people and teams.</div></div></WindowChrome>;
}

function MobileWorkspaceView() {
  return <WindowChrome label="Mobile workspace"><div className="grid items-center gap-5 p-4 sm:grid-cols-[.8fr_1.2fr] sm:p-5"><div className="mx-auto w-full max-w-[190px] rounded-[1.7rem] border-[6px] border-slate-900 bg-background p-2 shadow-panel dark:border-slate-700"><div className="rounded-[1.15rem] border border-border bg-surface p-3"><div className="flex items-center justify-between"><span className="text-[9px] font-semibold">Dira OS</span><span className="h-1.5 w-1.5 rounded-full bg-accent" /></div><p className="mt-5 text-[9px] text-muted">Today at a glance</p><p className="mt-1 text-lg font-semibold tracking-[-0.05em]">Ready when you are.</p><div className="mt-4 space-y-1.5">{["Revenue · In view", "Next appointment · Ready", "Offline mode · Available"].map((item) => <div key={item} className="rounded-md border border-border bg-card px-2 py-2 text-[9px] text-muted">{item}</div>)}</div></div></div><div><p className="text-xs font-semibold">Quick actions</p><p className="mt-2 max-w-sm text-[11px] leading-5 text-muted">Capture the work that happens away from the desk, then let the wider workspace catch up.</p><div className="mt-4 grid grid-cols-2 gap-2">{[[Activity, "Record activity"], [CalendarClock, "Book appointment"], [Users2, "Add customer"], [CircleDollarSign, "Capture expense"]].map(([Icon, label]) => <div key={label as string} className="flex items-center gap-2 rounded-lg border border-border bg-surface-muted p-2.5 text-[10px] font-semibold"><Icon className="h-3.5 w-3.5 text-primary" /> {label as string}</div>)}</div></div></div></WindowChrome>;
}

function InsightsView() {
  return <WindowChrome label="Insights"><div className="grid gap-4 p-4 sm:grid-cols-[1.2fr_.8fr] sm:p-5"><div className="rounded-xl border border-border bg-surface-muted p-4"><div className="flex items-start justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Business activity</p><p className="mt-2 text-2xl font-semibold tracking-[-0.05em]">A clearer next move.</p></div><BarChart3 className="h-5 w-5 text-primary" /></div><svg viewBox="0 0 600 180" aria-label="Illustrative business activity trend" className="mt-5 h-40 w-full text-primary"><path d="M0 145 C70 134 90 115 145 124 S220 90 270 103 S345 61 395 78 S460 45 515 55 S565 34 600 22" fill="none" stroke="currentColor" strokeWidth="4" /></svg><div className="flex items-center justify-between text-[10px] text-muted"><span>Earlier</span><span>Now</span></div></div><div className="space-y-2">{["Revenue", "Customers", "Operations", "Team activity"].map((item, index) => <div key={item} className="rounded-xl border border-border bg-surface-muted p-3"><div className="flex items-center justify-between"><span className="text-[11px] font-semibold">{item}</span><span className="text-[10px] text-accent">{index % 2 === 0 ? "Visible" : "Connected"}</span></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-background"><span className="block h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${54 + index * 9}%` }} /></div></div>)}</div></div></WindowChrome>;
}

export function ProductShowcase() {
  const [selected, setSelected] = useState<ViewKey>("command");
  const active = views.find((view) => view.key === selected) ?? views[0];
  return <div className="grid items-center gap-8 lg:grid-cols-[0.68fr_1.32fr]"><div><div className="flex flex-wrap gap-2" role="tablist" aria-label="Product views">{views.map((view) => <button key={view.key} type="button" role="tab" aria-selected={selected === view.key} aria-controls="product-view-panel" onClick={() => setSelected(view.key)} className={cn("rounded-lg border px-3 py-2 text-xs font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", selected === view.key ? "border-primary/25 bg-primary/10 text-primary" : "border-border bg-surface text-muted hover:border-primary/25 hover:text-foreground")}>{view.label}</button>)}</div><div id="product-view-panel" role="tabpanel" className="mt-7" key={active.key}><p className="eyebrow">{active.eyebrow}</p><h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{active.title}</h3><p className="mt-3 max-w-md text-sm leading-6 text-muted">{active.description}</p><div className="mt-5 flex items-center gap-2 text-xs font-medium text-muted"><Check className="h-4 w-4 text-emerald-600" /> Connected to the same workspace</div></div></div><div>{selected === "command" ? <CommandCenterView /> : selected === "workflow" ? <WorkflowView /> : selected === "mobile" ? <MobileWorkspaceView /> : <InsightsView />}</div></div>;
}
