import { ArrowRight, Cloud, Laptop, RotateCcw, WifiOff } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  { label: "SELL", icon: Laptop, caption: "Keep serving" },
  { label: "SAVE LOCALLY", icon: WifiOff, caption: "Stored on device" },
  { label: "RECONNECT", icon: RotateCcw, caption: "Connection returns" },
  { label: "SYNC", icon: Cloud, caption: "Data catches up" }
] as const;

export function OfflineSyncVisual() {
  return (
    <Card className="relative overflow-hidden bg-surface p-4 shadow-panel sm:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.08),transparent_30%)]" />
      <div className="relative space-y-4">
        <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.label}
                className="relative rounded-xl border border-border bg-surface-muted p-3.5 transition duration-200 motion-safe:animate-slide-up motion-safe:hover:-translate-y-0.5"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">{step.label}</p>
                    <p className="text-xs text-muted">{step.caption}</p>
                  </div>
                </div>
                {index < steps.length - 1 ? <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full border border-border bg-surface p-1 text-primary xl:block" aria-hidden="true" /> : null}
              </div>
            );
          })}
        </div>

        <div className="rounded-xl border border-border bg-surface-muted p-4">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-muted">
            <span>Offline</span><span>Saved</span><span>Online</span><span>Synced</span>
          </div>
          <div className="relative mt-4 h-10 overflow-hidden rounded-full border border-border bg-background">
            <div className="absolute inset-y-0 left-0 w-[1.5rem] rounded-full bg-gradient-to-r from-primary to-accent shadow-glow motion-safe:animate-sync-travel" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(59,130,246,0.12),transparent)] motion-safe:animate-soft-pulse" />
          </div>
        </div>
      </div>
    </Card>
  );
}
