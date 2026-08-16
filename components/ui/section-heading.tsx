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
    <div className={cn("flex flex-col gap-4", align === "center" && "items-center text-center")}>
      <div className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
        {eyebrow}
      </div>
      <div className={cn("flex w-full flex-col gap-4", align === "center" && "items-center")}>
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p>
        </div>
        {action ? <div>{action}</div> : null}
      </div>
    </div>
  );
}

