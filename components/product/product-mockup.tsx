import {
  BarChart3,
  BellRing,
  CircleAlert,
  CircleCheck,
  CircleDollarSign,
  LayoutDashboard,
  PackageSearch,
  ReceiptText,
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
  { label: "Revenue", value: `${currency} 84.2k`, detail: "+18% today" },
  { label: "Sales", value: "126", detail: "42 walk-ins" },
  { label: "Inventory", value: "18 low", detail: "6 urgent" },
  { label: "Sync", value: "Ready", detail: "6 pending" }
] as const;

const trendBars = [36, 52, 47, 70, 63, 84, 72] as const;

const transactions = [
  { name: "Milk 500ml", category: "Grocery", amount: "65", state: "Paid" },
  { name: "Bread", category: "Bakery", amount: "70", state: "Cash" },
  { name: "Sugar 1kg", category: "Grocery", amount: "180", state: "Card" }
] as const;

export function ProductMockup() {
  return (
    <div
      className="group relative isolate mx-auto w-full max-w-[42rem] overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/80 p-2 shadow-panel backdrop-blur-sm transition duration-300 motion-safe:animate-slide-up motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-glow sm:p-3"
      style={{ animationDelay: "420ms" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_80%_76%,rgba(34,211,238,0.1),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_18%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_18%)]" />

      <div className="relative grid gap-2 lg:grid-cols-[10.5rem_minmax(0,1fr)]">
        <aside className="rounded-[1.35rem] border border-border/70 bg-background/82 p-3 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-primary/15 bg-primary/5 text-primary">
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
                  <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  <span className="truncate">{item.label}</span>
                </div>
              );
            })}
          </nav>

          <div className="mt-3 rounded-2xl border border-border/70 bg-card/65 p-2.5">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BellRing className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Sync queue</p>
                <p className="text-[11px] text-muted">Saved locally</p>
              </div>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-border/60">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] motion-safe:animate-sync-drift" />
            </div>
          </div>
        </aside>

        <div className="min-w-0 rounded-[1.5rem] border border-border/70 bg-background/92 p-3 sm:p-4">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">Good morning</p>
              <h3 className="text-[1.1rem] font-semibold tracking-tight sm:text-[1.18rem]">Today&apos;s sales metrics</h3>
              <p className="max-w-xl text-[13px] leading-5 text-muted sm:text-sm">
                A compact view of sales, stock and sync health for the day.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-500">
              <CircleCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Saved locally
            </div>
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric, index) => (
              <Card key={metric.label} className="p-0" style={{ animationDelay: `${120 + index * 40}ms` }}>
                <div className="space-y-1.5 p-3">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">{metric.label}</p>
                  <div className="flex items-end justify-between gap-2">
                    <p className="text-[1.1rem] font-semibold tracking-tight">{metric.value}</p>
                    <div className="h-7 w-7 rounded-2xl bg-gradient-to-br from-[rgb(var(--primary))] to-[rgb(var(--accent))] opacity-90" />
                  </div>
                  <p className="text-[11px] leading-5 text-muted">{metric.detail}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.02fr_0.98fr]">
            <Card className="p-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Revenue trend</p>
                  <h4 className="mt-0.5 text-sm font-semibold tracking-tight">Weekly overview</h4>
                </div>
                <TrendingUp className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>

              <div className="mt-3 grid h-24 grid-cols-7 items-end gap-1.5 rounded-[1.35rem] border border-border/60 bg-card/60 p-2.5">
                {trendBars.map((height, index) => (
                  <div key={index} className="flex h-full items-end">
                    <div className="w-full">
                      <div
                        className="origin-bottom rounded-full bg-gradient-to-t from-[rgb(var(--primary))] via-[rgb(var(--accent))] to-[rgb(var(--primary))] motion-safe:animate-bar-rise"
                        style={{
                          height: `${height}%`,
                          animationDelay: `${index * 70}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Recent transactions</p>
                  <h4 className="mt-0.5 text-sm font-semibold tracking-tight">Latest sales</h4>
                </div>
                <ReceiptText className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>

              <div className="mt-3 space-y-2">
                {transactions.map((transaction) => (
                  <div key={transaction.name} className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/72 px-3 py-2">
                    <div>
                      <p className="text-[12px] font-medium">{transaction.name}</p>
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

              <div className="mt-3 rounded-[1.35rem] border border-border/60 bg-card/60 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <WifiOff className="h-4 w-4 text-amber-500" aria-hidden="true" />
                    <div>
                      <p className="text-[11px] font-medium">Offline queue active</p>
                      <p className="text-[11px] text-muted">6 pending</p>
                    </div>
                  </div>
                  <CircleAlert className="h-4 w-4 text-amber-500" aria-hidden="true" />
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-border/60">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] motion-safe:animate-sync-drift" />
                </div>
                <p className="mt-2 text-[11px] leading-5 text-muted">Changes sync automatically when the connection returns.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
