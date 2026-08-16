import { Cloud, Laptop, RotateCcw, WifiOff } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  { label: "User action", icon: Laptop, caption: "Tap, sell or update stock" },
  { label: "Saved locally", icon: WifiOff, caption: "Core action persists on device" },
  { label: "Queued for sync", icon: RotateCcw, caption: "Ready for the next connection" },
  { label: "Internet returns", icon: Cloud, caption: "Connectivity is detected" },
  { label: "Cloud updated", icon: Cloud, caption: "Data flows back to the cloud" }
] as const;

export function OfflineSyncVisual() {
  return (
    <Card className="relative overflow-hidden p-5 sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,216,233,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.10),transparent_30%)]" />
      <div className="relative">
        <div className="grid gap-3 md:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.label}
                className="relative rounded-2xl border border-border/70 bg-background/70 p-4"
              >
                {index < steps.length - 1 ? (
                  <div className="absolute right-[-0.6rem] top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-primary/50 to-accent/70 md:block motion-safe:animate-sync-drift" />
                ) : null}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/15 bg-primary/5 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{step.label}</p>
                    <p className="text-xs text-muted">{step.caption}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-3xl border border-border/70 bg-card/80 p-4">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-muted">
            <span>Offline</span>
            <span>Queue</span>
            <span>Reconnect</span>
            <span>Sync</span>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-border/60">
            <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-[rgb(var(--primary))] via-[rgb(var(--accent))] to-[rgb(var(--primary))] motion-safe:animate-sync-drift" />
          </div>
        </div>
      </div>
    </Card>
  );
}

