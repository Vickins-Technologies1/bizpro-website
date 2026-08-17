"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "left" | "right";

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up"
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      className={cn(
        "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:will-change-transform",
        visible
          ? "opacity-100 translate-x-0 translate-y-0"
          : direction === "left"
            ? "opacity-0 -translate-x-5"
            : direction === "right"
              ? "opacity-0 translate-x-5"
              : "opacity-0 translate-y-5",
        className
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
