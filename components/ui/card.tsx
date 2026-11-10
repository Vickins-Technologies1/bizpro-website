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
        "rounded-xl border border-border/70 bg-card text-card-foreground shadow-soft transition-[transform,border-color] duration-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
