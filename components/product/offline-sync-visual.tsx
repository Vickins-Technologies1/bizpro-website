import { Cloud, Laptop, RotateCcw, WifiOff } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  { label: "Sale", icon: Laptop, caption: "Record locally" },
  { label: "Local", icon: WifiOff, caption: "Saved on device" },
  { label: "Queue", icon: RotateCcw, caption: "Waiting to sync" },
  { label: "Reconnect", icon: Cloud, caption: "Connection returns" },
  { label: "Cloud", icon: Cloud, caption: "Synced data" }
] as const;

export function OfflineSyncVisual() {
  return (
    <Card className="relative overflow-hidden p-4 sm:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,216,233,0.1),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_30%)]" />
      <div className="relative space-y-4">
        <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.label}
                className="rounded-2xl border border-border/70 bg-background/75 p-3.5 transition duration-200 motion-safe:animate-slide-up motion-safe:hover:-translate-y-0.5"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/15 bg-primary/5 text-primary">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{step.label}</p>
                    <p className="text-xs text-muted">{step.caption}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-3xl border border-border/70 bg-card/80 p-4">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-muted">
            <span>Offline</span>
            <span>Queue</span>
            <span>Reconnect</span>
            <span>Cloud</span>
          </div>
          <div className="relative mt-4 h-12 overflow-hidden rounded-full border border-border/70 bg-background/75">
            <div className="absolute inset-y-0 left-0 w-[1.5rem] rounded-full bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] shadow-glow motion-safe:animate-sync-travel" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(59,130,246,0.08),transparent)] motion-safe:animate-soft-pulse" />
          </div>
        </div>
      </div>
    </Card>
  );
}
