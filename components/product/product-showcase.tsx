"use client";

import { BarChart3, Check, Receipt, ShoppingCart } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const views = [
  { key: "pos", label: "POS", eyebrow: "Sell with focus", title: "A faster checkout for busy teams.", description: "Keep the counter moving with a clear sale flow, receipts and a live view of today’s activity." },
  { key: "inventory", label: "Inventory", eyebrow: "Stay in control", title: "Know what is available at a glance.", description: "Track stock, spot low items early and keep products connected to every sale." },
  { key: "reports", label: "Reports", eyebrow: "See the signal", title: "Turn activity into a useful picture.", description: "Bring sales, revenue and stock performance into one calm, readable view." }
] as const;

type ViewKey = (typeof views)[number]["key"];

function WindowChrome({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-400" /><span className="h-2 w-2 rounded-full bg-amber-400" /><span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="ml-2 text-[10px] font-semibold text-slate-500">Dira OS / {label}</span>
        </div>
        <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Synced</span>
      </div>
      {children}
    </div>
  );
}

function PosView() {
  return <WindowChrome label="POS"><div className="grid gap-4 p-4 sm:grid-cols-[0.95fr_1.05fr] sm:p-5">
    <div className="rounded-lg bg-slate-950 p-4 text-white"><div className="flex items-center justify-between"><div><p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Current sale</p><p className="mt-2 text-2xl font-bold">KES 4,850</p></div><ShoppingCart className="h-5 w-5 text-cyan-300" /></div><div className="mt-7 space-y-2">{[["House Blend", "KES 1,200"], ["Sparkling Water", "KES 450"], ["Lunch Special × 2", "KES 3,200"]].map(([name, price]) => <div key={name} className="flex items-center justify-between border-b border-white/10 py-2 text-[11px]"><span className="text-slate-300">{name}</span><span className="font-semibold">{price}</span></div>)}</div><button type="button" className="mt-5 w-full rounded-lg bg-blue-600 py-2.5 text-xs font-semibold text-white">Complete sale</button></div>
    <div><div className="flex items-center justify-between"><p className="text-xs font-semibold text-slate-900">Quick products</p><span className="text-[10px] text-slate-400">42 items</span></div><div className="mt-3 grid grid-cols-2 gap-2">{["Coffee", "Lunch", "Water", "Pastry", "Juice", "Snacks"].map((item, i) => <div key={item} className="rounded-lg border border-slate-200 p-3"><div className={cn("flex h-7 w-7 items-center justify-center rounded-md", i % 2 ? "bg-cyan-50 text-cyan-700" : "bg-blue-50 text-blue-700")}><Receipt className="h-3.5 w-3.5" /></div><p className="mt-3 text-[11px] font-semibold text-slate-900">{item}</p><p className="mt-1 text-[10px] text-slate-500">Add to sale</p></div>)}</div></div>
  </div></WindowChrome>;
}

function InventoryView() {
  return <WindowChrome label="Inventory"><div className="p-4 sm:p-5"><div className="grid grid-cols-3 gap-2"><div className="rounded-lg bg-slate-50 p-3"><p className="text-[10px] text-slate-500">Products</p><p className="mt-1 text-lg font-bold text-slate-950">482</p></div><div className="rounded-lg bg-amber-50 p-3"><p className="text-[10px] text-amber-700">Low stock</p><p className="mt-1 text-lg font-bold text-slate-950">06</p></div><div className="rounded-lg bg-emerald-50 p-3"><p className="text-[10px] text-emerald-700">In stock</p><p className="mt-1 text-lg font-bold text-slate-950">476</p></div></div><div className="mt-4 overflow-hidden rounded-lg border border-slate-200"><div className="grid grid-cols-[1.3fr_.7fr_.7fr] border-b border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500"><span>Product</span><span>Available</span><span>Status</span></div>{[["House Blend", "128", "Healthy"], ["Sparkling Water", "18", "Healthy"], ["Lunch Special", "06", "Low stock"], ["Orange Juice", "42", "Healthy"]].map(([name, stock, status]) => <div key={name} className="grid grid-cols-[1.3fr_.7fr_.7fr] items-center border-b border-slate-100 px-3 py-3 text-[11px] last:border-0"><span className="font-medium text-slate-800">{name}</span><span className="text-slate-600">{stock}</span><span className={status === "Low stock" ? "font-semibold text-amber-600" : "font-semibold text-emerald-600"}>{status}</span></div>)}</div></div></WindowChrome>;
}

function ReportsView() {
  return <WindowChrome label="Reports"><div className="p-4 sm:p-5"><div className="flex items-start justify-between"><div><p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Sales performance</p><p className="mt-1 text-2xl font-bold text-slate-950">KES 84,200</p><p className="mt-1 text-[10px] font-semibold text-emerald-600">↑ 12.4% from yesterday</p></div><BarChart3 className="h-5 w-5 text-blue-600" /></div><div className="mt-5 flex h-36 items-end gap-2 rounded-lg bg-slate-50 px-3 pb-3 pt-5">{[34, 48, 39, 62, 55, 76, 66, 90, 82, 96].map((height, i) => <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-cyan-400 motion-safe:animate-bar-rise" style={{ height: `${height}%`, animationDelay: `${i * 35}ms` }} />)}</div><div className="mt-3 flex items-center justify-between text-[10px] text-slate-400"><span>Mon</span><span>Today</span></div></div></WindowChrome>;
}

export function ProductShowcase() {
  const [selected, setSelected] = useState<ViewKey>("pos");
  const active = views.find((view) => view.key === selected) ?? views[0];

  return <div className="grid items-center gap-8 lg:grid-cols-[0.72fr_1.28fr]">
    <div><div className="flex flex-wrap gap-2" role="tablist" aria-label="Product views">{views.map((view) => <button key={view.key} type="button" role="tab" aria-selected={selected === view.key} aria-controls="product-view-panel" onClick={() => setSelected(view.key)} className={cn("rounded-lg border px-3 py-2 text-xs font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", selected === view.key ? "border-primary/25 bg-primary/10 text-primary" : "border-border bg-card text-muted hover:border-primary/25 hover:text-foreground")}>{view.label}</button>)}</div><div id="product-view-panel" role="tabpanel" className="mt-7" key={active.key}><p className="eyebrow">{active.eyebrow}</p><h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">{active.title}</h3><p className="mt-3 max-w-md text-sm leading-6 text-muted">{active.description}</p><div className="mt-5 flex items-center gap-2 text-xs font-medium text-slate-600"><Check className="h-4 w-4 text-emerald-600" /> Connected to the same workspace</div></div></div>
    <div>{selected === "pos" ? <PosView /> : selected === "inventory" ? <InventoryView /> : <ReportsView />}</div>
  </div>;
}
