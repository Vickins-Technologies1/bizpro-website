"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";

export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "dira-os-theme";

type ThemeContextValue = {
  theme: Theme | null;
  setTheme: (theme: Theme, origin?: HTMLElement | null) => void;
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

function getRevealGeometry(origin?: HTMLElement | null) {
  const width = document.documentElement.clientWidth || window.innerWidth;
  const height = document.documentElement.clientHeight || window.innerHeight;
  const bounds = origin?.getBoundingClientRect();
  const x = Math.min(width, Math.max(0, bounds ? bounds.left + bounds.width / 2 : width / 2));
  const y = Math.min(height, Math.max(0, bounds ? bounds.top + bounds.height / 2 : height / 2));
  const radius = Math.ceil(Math.hypot(Math.max(x, width - x), Math.max(y, height - y)) + 2);

  return { x, y, radius };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme | null>(null);
  const activeTransitionRef = useRef<ViewTransition | null>(null);
  const revealAnimationRef = useRef<Animation | null>(null);

  const setTheme = useCallback((nextTheme: Theme, origin?: HTMLElement | null) => {
    const root = document.documentElement;
    const currentTheme = isTheme(root.dataset.theme) ? root.dataset.theme : theme;
    if (currentTheme === nextTheme) {
      setThemeState(nextTheme);
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch {
        // Keep the explicit choice active for this visit when browser storage is unavailable.
      }
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const commitTheme = () => {
      applyTheme(nextTheme);
      setThemeState(nextTheme);
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch {
        // Keep the theme active for this visit when browser storage is unavailable.
      }
    };

    // New clicks supersede the current reveal, allowing rapid changes to settle on the latest choice.
    revealAnimationRef.current?.cancel();
    revealAnimationRef.current = null;
    activeTransitionRef.current?.skipTransition();
    activeTransitionRef.current = null;

    if (typeof document.startViewTransition !== "function") {
      commitTheme();
      return;
    }

    const { x, y, radius } = getRevealGeometry(origin);
    let transition: ViewTransition;
    try {
      transition = document.startViewTransition(commitTheme);
    } catch {
      commitTheme();
      return;
    }
    activeTransitionRef.current = transition;

    void transition.ready.then(() => {
      if (activeTransitionRef.current !== transition) return;

      const duration = reducedMotion ? 150 : 720;
      const keyframes: Keyframe[] = reducedMotion
        ? [{ opacity: 0.82 }, { opacity: 1 }]
        : [
            { clipPath: `circle(0px at ${x}px ${y}px)` },
            { clipPath: `circle(${radius}px at ${x}px ${y}px)` }
          ];
      const animation = root.animate(keyframes, {
        duration,
        easing: reducedMotion ? "ease-out" : "cubic-bezier(0.18, 0.78, 0.18, 1)",
        fill: "both",
        pseudoElement: "::view-transition-new(root)"
      });
      revealAnimationRef.current = animation;
      return animation.finished.catch(() => undefined);
    }).catch(() => {
      // The theme update still applies if the browser skips a snapshot transition.
    });

    void transition.finished.then(() => {
      if (activeTransitionRef.current === transition) activeTransitionRef.current = null;
      if (activeTransitionRef.current === null) revealAnimationRef.current = null;
    }).catch(() => {
      if (activeTransitionRef.current === transition) {
        activeTransitionRef.current = null;
        revealAnimationRef.current = null;
      }
    });
  }, [theme]);

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
