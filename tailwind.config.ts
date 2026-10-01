import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./config/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", foreground: "var(--foreground)", card: "var(--card)", surface: "var(--surface)", "surface-muted": "var(--surface-muted)", "surface-elevated": "var(--surface-elevated)", muted: "var(--muted)", border: "var(--border)", primary: "var(--primary)", "primary-foreground": "var(--primary-foreground)", accent: "var(--accent)"
      },
      boxShadow: {
        glow: "0 24px 80px -30px rgba(59, 130, 246, 0.45)",
        panel: "var(--shadow-panel)"
      },
      borderRadius: {
        "2xl": "1.5rem",
        "3xl": "1.75rem"
      },
      maxWidth: {
        "8xl": "90rem"
      },
      keyframes: {
        syncDrift: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(12px)" }
        },
        syncTravel: {
          "0%": { left: "0%" },
          "20%": { left: "18%" },
          "40%": { left: "36%" },
          "60%": { left: "54%" },
          "80%": { left: "72%" },
          "100%": { left: "calc(100% - 1.5rem)" }
        },
        softPulse: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" }
        },
        statusSwap: {
          "0%, 42%": { opacity: "1", transform: "translateY(0)" },
          "50%, 100%": { opacity: "0", transform: "translateY(-4px)" }
        },
        barRise: {
          "0%": { transform: "scaleY(0.35)", opacity: "0.35" },
          "60%, 100%": { transform: "scaleY(1)", opacity: "1" }
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "sync-drift": "syncDrift 8s ease-in-out infinite",
        "sync-travel": "syncTravel 7s ease-in-out infinite",
        "soft-pulse": "softPulse 6s ease-in-out infinite",
        "status-swap": "statusSwap 8s ease-in-out infinite",
        "bar-rise": "barRise 900ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "slide-up": "slideUp 0.6s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
