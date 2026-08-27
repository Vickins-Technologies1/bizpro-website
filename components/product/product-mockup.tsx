import {
  ArrowUpRight,
  BellRing,
  CircleAlert,
  CircleDollarSign,
  LayoutDashboard,
  PackageSearch,
  ReceiptText,
  Search,
  ShoppingCart,
  Store,
  TrendingUp,
  Users2,
  WifiOff
} from "lucide-react";
import { siteConfig } from "@/config/site";

const currency = siteConfig.defaultCurrency;

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "POS", icon: ShoppingCart },
  { label: "Inventory", icon: PackageSearch },
  { label: "Customers", icon: Users2 },
  { label: "Expenses", icon: CircleDollarSign },
  { label: "Reports", icon: TrendingUp },
  { label: "Team", icon: Store }
] as const;

const metrics = [
  { label: "Revenue today", value: `${currency} 84.2k`, detail: "+18% vs yesterday", accent: "Up" },
  { label: "Sales", value: "126", detail: "42 walk-ins", accent: "Live" },
  { label: "Inventory alerts", value: "18", detail: "6 urgent", accent: "Low" }
] as const;

const trendBars = [34, 48, 42, 70, 58, 84, 72] as const;

const transactions = [
  { name: "Milk 500ml", category: "Grocery", amount: "65", state: "Paid" },
  { name: "Bread", category: "Bakery", amount: "70", state: "Cash" },
  { name: "Sugar 1kg", category: "Grocery", amount: "180", state: "Card" }
] as const;

export function ProductMockup() {
  return (
    <div
      className="group relative isolate mx-auto w-full max-w-[49rem] motion-safe:animate-slide-up"
      style={{ animationDelay: "380ms" }}
    >
      <div className="pointer-events-none absolute inset-x-8 top-8 -z-10 h-32 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.16),transparent_68%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(45,216,233,0.18),transparent_68%)]" />
      <div className="pointer-events-none absolute -left-3 top-16 hidden rounded-[1.15rem] border border-border/70 bg-background/90 px-3 py-2 shadow-panel backdrop-blur-md sm:block">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">Today</p>
        <p className="mt-1 text-sm font-semibold tracking-tight">{currency} 84.2k revenue</p>
      </div>
      <div className="pointer-events-none absolute -bottom-4 right-4 hidden rounded-[1.15rem] border border-border/70 bg-background/90 px-3 py-2 shadow-panel backdrop-blur-md md:block">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">Inventory</p>
        <p className="mt-1 text-sm font-semibold tracking-tight">18 low-stock items</p>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-border/75 bg-card/85 p-2.5 shadow-[0_28px_96px_-42px_rgba(2,6,23,0.55)] backdrop-blur-sm transition duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-glow lg:rotate-[1.25deg]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="relative overflow-hidden rounded-[1.65rem] border border-border/70 bg-background/92">
          <div className="flex items-center justify-between gap-3 border-b border-border/70 px-4 py-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primary/6 text-primary">
                <Store className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">BizPro</p>
                <p className="truncate text-xs text-muted">Business OS dashboard</p>
              </div>
            </div>

            <div className="hidden min-w-0 flex-1 justify-center lg:flex">
              <div className="flex w-full max-w-[17rem] items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-2">
                <Search className="h-3.5 w-3.5 shrink-0 text-muted" aria-hidden="true" />
                <span className="truncate text-[12px] text-muted">Retail overview</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-medium text-emerald-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500 motion-safe:animate-soft-pulse" aria-hidden="true" />
                Live sync
              </div>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">
                BK
              </div>
            </div>
          </div>

          <div className="grid gap-2.5 p-3 sm:p-4 lg:grid-cols-[12rem_minmax(0,1fr)]">
            <aside className="rounded-[1.45rem] border border-border/70 bg-card/65 p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primary/6 text-primary">
                  <Store className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">BizPro</p>
                  <p className="text-xs text-muted">Business OS</p>
                </div>
              </div>

              <nav className="mt-3 grid grid-cols-2 gap-1.5 lg:grid-cols-1" aria-label="Dashboard navigation">
                {sidebarItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2 rounded-2xl px-2 py-1.5 text-[11px] font-medium ${
                        index === 0 ? "bg-primary/8 text-foreground" : "text-muted"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                      <span className="truncate">{item.label}</span>
                    </div>
                  );
                })}
              </nav>

              <div className="mt-3 rounded-2xl border border-border/70 bg-background/78 p-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BellRing className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Sync queue</p>
                    <p className="truncate text-[11px] text-muted">Saved locally</p>
                  </div>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-border/60">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] motion-safe:animate-sync-drift" />
                </div>
                <p className="mt-2 text-[11px] leading-5 text-muted">Queued actions sync when the connection returns.</p>
              </div>
            </aside>

            <div className="min-w-0 space-y-2.5">
              <div className="grid gap-2.5 sm:grid-cols-3">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className="rounded-[1.35rem] border border-border/70 bg-card/72 p-3 motion-safe:animate-slide-up"
                    style={{ animationDelay: `${120 + index * 50}ms` }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">{metric.label}</p>
                        <p className="mt-2 text-[1.08rem] font-semibold tracking-tight">{metric.value}</p>
                      </div>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-[10px] font-semibold text-[rgb(var(--primary-foreground))] shadow-glow">
                        {metric.accent}
                      </div>
                    </div>
                    <p className="mt-2 text-[11px] leading-5 text-muted">{metric.detail}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-2.5 lg:grid-cols-[1.05fr_0.95fr]">
                <section className="rounded-[1.45rem] border border-border/70 bg-card/70 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Revenue trend</p>
                      <h4 className="mt-0.5 text-sm font-semibold tracking-tight">Weekly overview</h4>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/6 px-2.5 py-1 text-[11px] font-medium text-primary">
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      +18%
                    </div>
                  </div>

                  <div className="mt-4 grid h-28 grid-cols-7 items-end gap-2 rounded-[1.35rem] border border-border/60 bg-background/72 p-3">
                    {trendBars.map((height, index) => (
                      <div key={index} className="flex h-full items-end">
                        <div className="w-full">
                          <div
                            className="origin-bottom rounded-full bg-gradient-to-t from-[rgb(var(--primary))] via-[rgb(var(--accent))] to-[rgb(var(--primary))] motion-safe:animate-bar-rise"
                            style={{
                              height: `${height}%`,
                              animationDelay: `${index * 80}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    {[
                      { label: "Orders", value: "126", detail: "42 walk-ins" },
                      { label: "AOV", value: `${currency} 672`, detail: "Stable today" },
                      { label: "Sync", value: "Ready", detail: "6 pending" }
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-border/60 bg-card/65 p-3">
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">{item.label}</p>
                        <p className="mt-1.5 text-sm font-semibold tracking-tight">{item.value}</p>
                        <p className="mt-1 text-[11px] text-muted">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-[1.45rem] border border-border/70 bg-card/70 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Recent transactions</p>
                      <h4 className="mt-0.5 text-sm font-semibold tracking-tight">Latest sales</h4>
                    </div>
                    <ReceiptText className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>

                  <div className="mt-4 space-y-2">
                    {transactions.map((transaction) => (
                      <div
                        key={transaction.name}
                        className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/78 px-3 py-2"
                      >
                        <div>
                          <p className="text-[12px] font-medium tracking-tight">{transaction.name}</p>
                          <p className="text-[11px] text-muted">{transaction.category}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[12px] font-semibold">
                            {currency} {transaction.amount}
                          </p>
                          <p className="text-[11px] text-primary">{transaction.state}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-[1.35rem] border border-border/60 bg-background/76 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <WifiOff className="h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                        <div>
                          <p className="text-[11px] font-medium">Offline queue active</p>
                          <p className="text-[11px] text-muted">6 pending</p>
                        </div>
                      </div>
                      <CircleAlert className="h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-border/60">
                      <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] motion-safe:animate-sync-drift" />
                    </div>
                    <p className="mt-2 text-[11px] leading-5 text-muted">Changes sync automatically when the connection returns.</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
