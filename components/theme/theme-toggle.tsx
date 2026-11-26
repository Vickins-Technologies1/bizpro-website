"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme/theme-provider";

export function ThemeToggle({ className, showLabels = false }: { className?: string; showLabels?: boolean }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={cn("theme-toggle", showLabels && "theme-toggle--labeled", className)} role="group" aria-label="Color theme">
      <button
        type="button"
        data-theme-option="light"
        aria-label="Use light theme"
        aria-pressed={theme ? theme === "light" : undefined}
        title="Light theme"
        onClick={(event) => setTheme("light", event.currentTarget)}
      >
        <Sun className="h-4 w-4" aria-hidden="true" />
        {showLabels ? <span>Light</span> : null}
      </button>
      <button
        type="button"
        data-theme-option="dark"
        aria-label="Use dark theme"
        aria-pressed={theme ? theme === "dark" : undefined}
        title="Dark theme"
        onClick={(event) => setTheme("dark", event.currentTarget)}
      >
        <Moon className="h-4 w-4" aria-hidden="true" />
        {showLabels ? <span>Dark</span> : null}
      </button>
    </div>
  );
}
