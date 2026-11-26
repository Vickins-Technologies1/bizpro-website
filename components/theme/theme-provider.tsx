"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "dira-os-theme";

type ThemeContextValue = {
  theme: Theme | null;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function isTheme(value: string | null | undefined): value is Theme {
  return value === "light" || value === "dark";
}

function getSavedTheme(): Theme | null {
  try {
    const value = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(value) ? value : null;
  } catch {
    return null;
  }
}

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme | null>(null);

  const setTheme = useCallback((nextTheme: Theme) => {
    applyTheme(nextTheme);
    setThemeState(nextTheme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Keep the theme active for this visit when browser storage is unavailable.
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const initialTheme = getSavedTheme() ?? (isTheme(root.dataset.theme) ? root.dataset.theme : getSystemTheme());
    applyTheme(initialTheme);
    setThemeState(initialTheme);

    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemPreferenceChange = (event: MediaQueryListEvent) => {
      if (getSavedTheme()) return;
      const nextTheme = event.matches ? "dark" : "light";
      applyTheme(nextTheme);
      setThemeState(nextTheme);
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key !== THEME_STORAGE_KEY && event.key !== null) return;
      const nextTheme = isTheme(event.newValue) ? event.newValue : getSystemTheme();
      applyTheme(nextTheme);
      setThemeState(nextTheme);
    };

    systemPreference.addEventListener("change", onSystemPreferenceChange);
    window.addEventListener("storage", onStorage);
    return () => {
      systemPreference.removeEventListener("change", onSystemPreferenceChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}
