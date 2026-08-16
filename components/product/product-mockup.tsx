import { ArrowDownRight, Barcode, ShoppingCart, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const salesRows = [
  { name: "Milk 500ml", amount: "65", trend: "+12%" },
  { name: "Bread", amount: "70", trend: "+8%" },
  { name: "Sugar 1kg", amount: "180", trend: "+6%" }
];

export function ProductMockup() {
  return (
    <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/75 p-3 shadow-panel sm:p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,216,233,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_26%)]" />
      <div className="relative grid gap-3 lg:grid-cols-[1.08fr_0.92fr]">
        <Card className="overflow-hidden bg-background/85 p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Dashboard</p>
              <h3 className="mt-1 text-lg font-semibold">Today</h3>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-primary/5 px-3 py-2 text-right">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted">Sales</p>
              <p className="mt-1 text-base font-semibold text-foreground">{siteConfig.defaultCurrency} 48,250</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {[
              ["Transactions", "126", "positive"],
              ["Products", "1,284", "neutral"],
              ["Low stock", "18", "warning"],
              ["Branches", "3", "neutral"]
            ].map(([label, value, tone]) => (
              <div
                key={label}
                className="rounded-2xl border border-border/70 bg-card/70 p-2.5"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">{label}</p>
                <p className="mt-2 text-base font-semibold">{value}</p>
                <div
                  className={`mt-3 h-1.5 rounded-full ${
                    tone === "positive"
                      ? "bg-[linear-gradient(90deg,rgb(var(--primary)),rgb(var(--accent)))]"
                      : tone === "warning"
                        ? "bg-amber-400"
                        : "bg-border"
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-border/70 bg-card/70 p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold">Recent sales</p>
              </div>
              <TrendingUp className="h-4 w-4 text-primary" aria-hidden="true" />
            </div>
            <div className="mt-3 grid gap-2.5">
              {salesRows.map((row) => (
                <div key={row.name} className="flex items-center justify-between rounded-2xl border border-border/60 px-3 py-2.5">
                  <div>
                    <p className="text-sm font-medium">{row.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">
                      {siteConfig.defaultCurrency} {row.amount}
                    </p>
                    <p className="text-xs text-primary">{row.trend}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="grid gap-3">
          <Card className="p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">POS</p>
                <h3 className="mt-1 text-base font-semibold">Search products</h3>
              </div>
              <ShoppingCart className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <div className="mt-4 rounded-2xl border border-border/70 bg-background/70 p-3">
              <div className="flex items-center gap-2 text-sm text-muted">
                <Barcode className="h-4 w-4" aria-hidden="true" />
                Milk 500ml
              </div>
              <div className="mt-3 space-y-2.5">
                {salesRows.map((row) => (
                  <div
                    key={row.name}
                    className="flex items-center justify-between rounded-2xl border border-border/60 px-3 py-2"
                  >
                    <div>
                      <p className="text-sm font-medium">{row.name}</p>
                    </div>
                    <p className="text-sm font-semibold">{siteConfig.defaultCurrency} {row.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Cart</p>
                <p className="mt-1 text-base font-semibold">3 items</p>
              </div>
              <ArrowDownRight className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <div className="mt-4 rounded-3xl border border-primary/15 bg-[linear-gradient(135deg,rgba(59,130,246,0.08),rgba(34,211,238,0.12))] p-4">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted">Total</p>
              <p className="mt-2 text-2xl font-semibold">
                {siteConfig.defaultCurrency} 315
              </p>
              <div className="mt-4 h-10 rounded-full bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] px-4 py-2 text-center text-sm font-semibold text-white">
                Charge
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
