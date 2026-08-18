import {
  BarChart3,
  BellRing,
  CircleAlert,
  CircleCheck,
  CircleDollarSign,
  LayoutDashboard,
  PackageSearch,
  ReceiptText,
  ScanLine,
  ShoppingCart,
  Store,
  TrendingUp,
  Users2,
  WifiOff
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const currency = siteConfig.defaultCurrency;

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "POS", icon: ShoppingCart },
  { label: "Inventory", icon: PackageSearch },
  { label: "Customers", icon: Users2 },
  { label: "Expenses", icon: CircleDollarSign },
  { label: "Reports", icon: BarChart3 },
  { label: "Team", icon: Store }
] as const;

const metrics = [
  {
    label: "Revenue today",
    value: `${currency} 84,200`,
    detail: "+18% vs yesterday",
    tone: "from-[rgb(var(--primary))] to-[rgb(var(--accent))]"
  },
  {
    label: "Orders",
    value: "126",
    detail: "42 walk-ins",
    tone: "from-slate-500 to-slate-400"
  },
  {
    label: "Avg basket",
    value: `${currency} 668`,
    detail: "Up from 640",
    tone: "from-cyan-500 to-sky-500"
  },
  {
    label: "Low stock",
    value: "18",
    detail: "6 urgent",
    tone: "from-amber-500 to-amber-400"
  }
] as const;

const trendBars = [
  { day: "Mon", height: 36 },
  { day: "Tue", height: 54 },
  { day: "Wed", height: 48 },
  { day: "Thu", height: 72 },
  { day: "Fri", height: 64 },
  { day: "Sat", height: 86 },
  { day: "Sun", height: 74 }
] as const;

const transactions = [
  { name: "Milk 500ml", category: "Grocery", amount: "65", state: "Paid" },
  { name: "Bread", category: "Bakery", amount: "70", state: "Cash" },
  { name: "Sugar 1kg", category: "Grocery", amount: "180", state: "Card" }
] as const;

const lowStockItems = [
  { name: "Cooking oil", stock: "4 left", level: 24 },
  { name: "Rice 5kg", stock: "7 left", level: 40 },
  { name: "Detergent", stock: "2 left", level: 16 }
] as const;

const posItems = [
  { name: "Milk 500ml", amount: "65" },
  { name: "Bread", amount: "70" },
  { name: "Sugar 1kg", amount: "180" }
] as const;

export function ProductMockup() {
  return (
    <div
      className="group relative isolate mx-auto w-full max-w-[74rem] overflow-hidden rounded-[2rem] border border-border/70 bg-card/80 p-3 shadow-panel backdrop-blur-sm transition duration-300 motion-safe:animate-slide-up motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-glow sm:p-4"
      style={{ animationDelay: "420ms" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_80%_76%,rgba(34,211,238,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),transparent_18%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_18%)]" />

      <div className="relative grid gap-3 xl:grid-cols-[14rem_minmax(0,1fr)]">
        <aside className="rounded-[1.5rem] border border-border/70 bg-background/80 p-3.5 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/15 bg-primary/5 text-primary">
              <Store className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">BizPro</p>
              <p className="text-xs text-muted">Business OS</p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-border/60 bg-card/60 p-2.5">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">Offline-first</p>
              <span className="rounded-full border border-primary/15 bg-primary/5 px-2 py-0.5 text-[10px] font-medium text-primary">
                Live demo
              </span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-border/60">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] motion-safe:animate-sync-drift" />
            </div>
          </div>

          <nav className="mt-4 grid gap-1" aria-label="Dashboard navigation">
            {sidebarItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 rounded-2xl px-2.5 py-1.5 text-xs font-medium ${
                    index === 0 ? "bg-primary/8 text-foreground" : "text-muted"
                  }`}
                  style={{ animationDelay: `${120 + index * 60}ms` }}
                >
                  <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  {item.label}
                </div>
              );
            })}
          </nav>

          <div className="mt-4 rounded-2xl border border-border/70 bg-card/70 p-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BellRing className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Sync queue</p>
                <p className="text-[11px] text-muted">Saved locally, waiting to sync</p>
              </div>
            </div>
            <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-border/60">
              <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] motion-safe:animate-sync-drift" />
            </div>
          </div>
        </aside>

        <div className="relative min-w-0 xl:pr-[20rem] xl:pb-[12rem]">
          <div className="rounded-[1.75rem] border border-border/70 bg-background/92 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-5 lg:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">Good morning</p>
                <h3 className="text-2xl font-semibold tracking-tight text-balance">Today&apos;s sales metrics</h3>
                <p className="max-w-xl text-sm leading-6 text-muted">
                  A compact view of sales, stock and sync health for the day.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-500">
                  <CircleCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Saved locally
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/75 px-2.5 py-1 text-[11px] font-medium text-muted">
                  Branch 03
                </span>
              </div>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((metric, index) => (
                <Card
                  key={metric.label}
                  className="overflow-hidden p-0"
                  style={{ animationDelay: `${180 + index * 70}ms` }}
                >
                  <div className="space-y-2.5 p-3.5 motion-safe:animate-slide-up">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">{metric.label}</p>
                        <p className="mt-1.5 text-[1.35rem] font-semibold tracking-tight">{metric.value}</p>
                      </div>
                      <div className={`h-8 w-8 rounded-2xl bg-gradient-to-br ${metric.tone} opacity-90`} />
                    </div>
                    <p className="text-[11px] leading-5 text-muted">{metric.detail}</p>
                    <div className="h-1.5 rounded-full bg-border/60">
                      <div className={`h-full rounded-full bg-gradient-to-r ${metric.tone}`} />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-4 grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-3">
                <Card className="p-4" style={{ animationDelay: "420ms" }}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Revenue trend</p>
                      <h4 className="mt-1 text-base font-semibold tracking-tight">Weekly overview</h4>
                    </div>
                    <TrendingUp className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>

                  <div className="mt-3 grid h-36 grid-cols-7 items-end gap-2 rounded-[1.5rem] border border-border/60 bg-card/60 p-3">
                    {trendBars.map((bar, index) => (
                      <div key={bar.day} className="flex h-full items-end">
                        <div className="flex w-full flex-col items-center">
                          <div
                            className="w-full origin-bottom rounded-full bg-gradient-to-t from-[rgb(var(--primary))] via-[rgb(var(--accent))] to-[rgb(var(--primary))] motion-safe:animate-bar-rise"
                            style={{
                              height: `${bar.height}%`,
                              animationDelay: `${index * 90}ms`
                            }}
                          />
                          <div className="mt-2 text-center text-[10px] uppercase tracking-[0.16em] text-muted">
                            {bar.day}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-4" style={{ animationDelay: "500ms" }}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Recent transactions</p>
                      <h4 className="mt-1 text-base font-semibold tracking-tight">Latest sales</h4>
                    </div>
                    <ReceiptText className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>

                  <div className="mt-3 grid gap-2">
                    {transactions.map((transaction, index) => (
                      <div
                        key={transaction.name}
                        className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-3 py-2.5 motion-safe:animate-slide-up"
                        style={{ animationDelay: `${index * 90}ms` }}
                      >
                        <div>
                          <p className="text-[13px] font-medium">{transaction.name}</p>
                          <p className="text-xs text-muted">{transaction.category}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[13px] font-semibold">
                            {currency} {transaction.amount}
                          </p>
                          <p className="text-xs text-primary">{transaction.state}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="grid gap-3">
                <Card className="p-4" style={{ animationDelay: "430ms" }}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Inventory</p>
                      <h4 className="mt-1 text-base font-semibold tracking-tight">Low stock watch</h4>
                    </div>
                    <PackageSearch className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>

                  <div className="mt-3 grid gap-3">
                    {lowStockItems.map((item, index) => (
                      <div
                        key={item.name}
                        className="rounded-2xl border border-border/60 bg-card/60 p-3 motion-safe:animate-slide-up"
                        style={{ animationDelay: `${index * 70}ms` }}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-[13px] font-medium">{item.name}</p>
                            <p className="text-xs text-muted">{item.stock}</p>
                          </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium text-amber-500">
                          <CircleAlert className="h-3 w-3" aria-hidden="true" />
                          Low
                        </span>
                        </div>
                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-border/60">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400"
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-4" style={{ animationDelay: "520ms" }}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Sync status</p>
                      <h4 className="mt-1 text-base font-semibold tracking-tight">Offline queue active</h4>
                    </div>
                    <WifiOff className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>

                  <div className="mt-3 rounded-2xl border border-border/60 bg-background/70 p-3">
                    <div className="flex items-center justify-between gap-3 text-[12px]">
                      <span className="inline-flex items-center gap-2 text-muted">
                        <span className="h-2 w-2 rounded-full bg-amber-400" aria-hidden="true" />
                        Saved locally
                      </span>
                      <span className="font-medium text-foreground">6 pending</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-border/60">
                      <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] motion-safe:animate-sync-drift" />
                    </div>
                    <p className="mt-2 text-xs leading-5 text-muted">Changes sync automatically when the connection returns.</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <Card
            className="relative mt-3 overflow-hidden p-3.5 xl:absolute xl:right-4 xl:top-4 xl:mt-0 xl:w-[18rem]"
            style={{ animationDelay: "620ms" }}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">POS</p>
                <h4 className="mt-1 text-sm font-semibold tracking-tight">Quick basket</h4>
              </div>
              <ScanLine className="h-4 w-4 text-primary" aria-hidden="true" />
            </div>

            <div className="mt-3 rounded-[1.5rem] border border-border/70 bg-card/70 p-2.5">
              <div className="flex items-center gap-2 text-sm text-muted">
                <PackageSearch className="h-3.5 w-3.5" aria-hidden="true" />
                Search or scan items
              </div>
              <div className="mt-3 space-y-2">
                {posItems.map((item, index) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/75 px-3 py-2 motion-safe:animate-slide-up"
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    <div>
                      <p className="text-[13px] font-medium">{item.name}</p>
                      <p className="text-xs text-muted">Qty 1</p>
                    </div>
                    <p className="text-[13px] font-semibold">
                      {currency} {item.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 rounded-3xl border border-primary/15 bg-[linear-gradient(135deg,rgba(59,130,246,0.08),rgba(34,211,238,0.12))] p-3.5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted">Total</p>
              <p className="mt-1.5 text-xl font-semibold">
                {currency} 315
              </p>
              <div className="mt-3 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] px-4 py-2 text-[13px] font-semibold text-white">
                Charge
              </div>
            </div>
          </Card>

          <Card
            className="relative mt-3 overflow-hidden p-3.5 xl:absolute xl:left-4 xl:bottom-4 xl:mt-0 xl:w-[16rem]"
            style={{ animationDelay: "740ms" }}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Sync demo</p>
                <h4 className="mt-1 text-sm font-semibold tracking-tight">Offline-first state</h4>
              </div>
              <BellRing className="h-4 w-4 text-primary" aria-hidden="true" />
            </div>

            <div className="relative mt-3 h-14 overflow-hidden rounded-2xl border border-border/60 bg-background/70 p-3">
              <div className="absolute inset-3 flex items-center gap-3 motion-safe:animate-status-swap">
                <WifiOff className="h-4 w-4 text-amber-500" aria-hidden="true" />
                <div>
                  <p className="text-[13px] font-medium">Saved locally</p>
                  <p className="text-xs text-muted">Waiting to sync</p>
                </div>
              </div>
              <div
                className="absolute inset-3 flex items-center gap-3 motion-safe:animate-status-swap"
                style={{ animationDelay: "4s" }}
              >
                <CircleCheck className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                <div>
                  <p className="text-[13px] font-medium">Connection restored</p>
                  <p className="text-xs text-muted">Synced ✓</p>
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs leading-5 text-muted">
              Demo state changes show BizPro working smoothly even when the network drops.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
