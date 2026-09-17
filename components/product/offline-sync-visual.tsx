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
    <Card className="relative overflow-hidden border-white/10 bg-[#101318] p-4 text-white shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,216,233,0.1),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_30%)]" />
      <div className="relative space-y-4">
        <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.label}
                className="relative rounded-xl border border-white/10 bg-white/[0.04] p-3.5 transition duration-200 motion-safe:animate-slide-up motion-safe:hover:-translate-y-0.5"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-300">{step.label}</p>
                    <p className="text-xs text-slate-400">{step.caption}</p>
                  </div>
                </div>
                {index < steps.length - 1 ? <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full border border-white/10 bg-[#101318] p-1 text-cyan-300 xl:block" aria-hidden="true" /> : null}
              </div>
            );
          })}
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-slate-400">
            <span>Offline</span><span>Saved</span><span>Online</span><span>Synced</span>
          </div>
          <div className="relative mt-4 h-10 overflow-hidden rounded-full border border-white/10 bg-black/20">
            <div className="absolute inset-y-0 left-0 w-[1.5rem] rounded-full bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] shadow-glow motion-safe:animate-sync-travel" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(45,216,233,0.12),transparent)] motion-safe:animate-soft-pulse" />
          </div>
        </div>
      </div>
    </Card>
  );
}
