import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-3", align === "center" && "items-center text-center")}>
      <div className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
        {eyebrow}
      </div>
      <div className={cn("flex w-full flex-col gap-3", align === "center" && "items-center")}>
        <div className="max-w-2xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl lg:text-4xl">{title}</h2>
          <p className="max-w-xl text-sm leading-6 text-muted sm:text-[15px]">{description}</p>
        </div>
        {action ? <div>{action}</div> : null}
      </div>
    </div>
  );
}
