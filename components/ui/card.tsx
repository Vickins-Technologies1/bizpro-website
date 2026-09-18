import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border/70 bg-card text-card-foreground shadow-panel backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-200 motion-safe:will-change-transform",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
