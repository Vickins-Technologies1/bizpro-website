import { BarChart3, BellRing, CircleDollarSign, LayoutDashboard, PackageSearch, ReceiptText, ShoppingCart, Store, TrendingUp, Users2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Sales", icon: CircleDollarSign },
  { label: "Inventory", icon: PackageSearch },
  { label: "POS", icon: ShoppingCart },
  { label: "Reports", icon: BarChart3 }
] as const;

const metricCards = [
  { label: "Transactions", value: "126", tone: "from-[rgb(var(--primary))] to-[rgb(var(--accent))]" },
  { label: "Products", value: "1,284", tone: "from-slate-500 to-slate-400" },
  { label: "Low stock", value: "18", tone: "from-amber-500 to-amber-400" },
  { label: "Branches", value: "3", tone: "from-cyan-500 to-sky-500" }
] as const;

const chartBars = [42, 58, 50, 74, 66, 88, 76];

const transactions = [
  { name: "Milk 500ml", category: "Grocery", amount: "65", state: "Paid" },
  { name: "Bread", category: "Bakery", amount: "70", state: "Cash" },
  { name: "Sugar 1kg", category: "Grocery", amount: "180", state: "Card" }
] as const;

const basketItems = [
  { name: "Milk 500ml", amount: "65" },
  { name: "Bread", amount: "70" },
  { name: "Sugar 1kg", amount: "180" }
] as const;

export function ProductMockup() {
  return (
    <div className="group relative isolate overflow-hidden rounded-[2rem] border border-border/70 bg-card/80 p-3 shadow-panel transition duration-300 motion-safe:animate-slide-up motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-glow sm:p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,216,233,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_26%)]" />

      <div className="relative grid gap-3 lg:grid-cols-[14rem_minmax(0,1fr)]">
        <aside className="rounded-[1.5rem] border border-border/70 bg-background/85 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/15 bg-primary/5 text-primary">
              <Store className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">BizPro</p>
              <p className="text-sm text-muted">Live store</p>
            </div>
          </div>

          <nav className="mt-5 grid gap-1" aria-label="Dashboard navigation">
            {sidebarItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium ${
                    index === 0 ? "bg-primary/8 text-foreground" : "text-muted"
                  }`}
                  style={{ animationDelay: `${120 + index * 60}ms` }}
                >
                  <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  {item.label}
                </div>
              );
            })}
          </nav>

          <div className="mt-5 rounded-2xl border border-border/70 bg-card/70 p-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BellRing className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Sync</p>
                <p className="text-xs text-muted">All changes up to date</p>
              </div>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-border/60">
              <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] motion-safe:animate-sync-drift" />
            </div>
          </div>
        </aside>

        <div className="grid gap-3">
          <div className="flex items-center justify-between rounded-[1.5rem] border border-border/70 bg-background/85 px-4 py-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Dashboard</p>
              <h3 className="mt-1 text-lg font-semibold tracking-tight">Today</h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-medium text-primary sm:inline-flex">
                Branch 03
              </span>
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-500">
                Live
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/80 text-primary">
                <Users2 className="h-4 w-4" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
            {metricCards.map((metric, index) => (
              <Card key={metric.label} className="overflow-hidden p-0" style={{ animationDelay: `${160 + index * 60}ms` }}>
                <div className="space-y-3 p-4 motion-safe:animate-slide-up">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">{metric.label}</p>
                      <p className="mt-2 text-2xl font-semibold tracking-tight">{metric.value}</p>
                    </div>
                    <div className={`h-9 w-9 rounded-2xl bg-gradient-to-br ${metric.tone} opacity-90`} />
                  </div>
                  <div className="h-1.5 rounded-full bg-border/60">
                    <div className={`h-full rounded-full bg-gradient-to-r ${metric.tone}`} />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid gap-3 xl:grid-cols-[1.08fr_0.92fr]">
            <Card className="overflow-hidden p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Sales</p>
                  <h3 className="mt-1 text-lg font-semibold">Revenue trend</h3>
                </div>
                <TrendingUp className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>

              <div className="mt-4 grid h-40 grid-cols-7 items-end gap-2 rounded-[1.5rem] border border-border/60 bg-background/70 p-4">
                {chartBars.map((height, index) => (
                  <div key={height} className="flex h-full items-end">
                    <div className="w-full">
                      <div
                        className="mx-auto w-full rounded-full bg-gradient-to-t from-[rgb(var(--primary))] via-[rgb(var(--accent))] to-[rgb(var(--primary))] motion-safe:animate-soft-pulse"
                        style={{
                          height: `${height}%`,
                          animationDelay: `${index * 120}ms`
                        }}
                      />
                      <div className="mt-2 text-center text-[10px] uppercase tracking-[0.16em] text-muted">
                        {["M", "T", "W", "T", "F", "S", "S"][index]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-2">
                {transactions.map((transaction, index) => (
                  <div
                    key={transaction.name}
                    className="flex items-center justify-between rounded-2xl border border-border/60 px-3 py-2.5"
                    style={{ animationDelay: `${220 + index * 70}ms` }}
                  >
                    <div>
                      <p className="text-sm font-medium">{transaction.name}</p>
                      <p className="text-xs text-muted">{transaction.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold">{siteConfig.defaultCurrency} {transaction.amount}</p>
                      <p className="text-xs text-primary">{transaction.state}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid gap-3">
              <Card className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">POS</p>
                    <h3 className="mt-1 text-base font-semibold">Search products</h3>
                  </div>
                  <ShoppingCart className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>

                <div className="mt-4 rounded-[1.5rem] border border-border/70 bg-background/70 p-3">
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <PackageSearch className="h-4 w-4" aria-hidden="true" />
                    Quick scan or search
                  </div>
                  <div className="mt-4 space-y-2.5">
                    {basketItems.map((item, index) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between rounded-2xl border border-border/60 px-3 py-2"
                        style={{ animationDelay: `${260 + index * 60}ms` }}
                      >
                        <div>
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-muted">Qty 1</p>
                        </div>
                        <p className="text-sm font-semibold">
                          {siteConfig.defaultCurrency} {item.amount}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Cart</p>
                    <p className="mt-1 text-base font-semibold">3 items</p>
                  </div>
                  <ReceiptText className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div className="mt-4 rounded-3xl border border-primary/15 bg-[linear-gradient(135deg,rgba(59,130,246,0.08),rgba(34,211,238,0.12))] p-4">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted">Total</p>
                  <p className="mt-2 text-2xl font-semibold">
                    {siteConfig.defaultCurrency} 315
                  </p>
                  <div className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] px-4 py-2 text-sm font-semibold text-white">
                    Charge
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
