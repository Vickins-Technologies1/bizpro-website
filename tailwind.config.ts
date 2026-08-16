import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./config/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-foreground": "rgb(var(--primary-foreground) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)"
      },
      boxShadow: {
        glow: "0 24px 80px -30px rgba(59, 130, 246, 0.45)",
        panel: "0 18px 60px -36px rgba(2, 6, 23, 0.45)"
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
        softPulse: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" }
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "sync-drift": "syncDrift 8s ease-in-out infinite",
        "soft-pulse": "softPulse 6s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;

