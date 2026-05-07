import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Notebook / educational palette
        paper: {
          DEFAULT: "#f5f0e6",
          100: "#faf8f2",
          200: "#ede8d8",
          300: "#e0d8c4",
          400: "#cfc8b0",
        },
        pencil: {
          DEFAULT: "#2c2c2c",
          dim: "#5a5a5a",
          faint: "#8a8a8a",
          ghost: "#c0c0c0",
        },
        redpen: {
          DEFAULT: "#c0392b",
          dim: "#96281b",
          faint: "#fdf0ee",
        },
        bluepen: {
          DEFAULT: "#2d6da3",
          dim: "#1d4f7a",
          faint: "#eaf2f8",
        },
        inkgreen: {
          DEFAULT: "#1e7e4c",
          dim: "#155c37",
          faint: "#eaf6ee",
        },
        // Keep legacy color names for XP / quiz elements
        golden: {
          DEFAULT: "#c47d0e",
          dim: "#9c6208",
          faint: "#fef3dc",
        },
        neon: {
          DEFAULT: "#1e7e4c",
          dim: "#155c37",
          faint: "#eaf6ee",
        },
        crimson: {
          DEFAULT: "#c0392b",
          dim: "#96281b",
          faint: "#fdf0ee",
        },
        ice: {
          DEFAULT: "#2d6da3",
          dim: "#1d4f7a",
          faint: "#eaf2f8",
        },
        // void/snow kept for any legacy references
        void: {
          DEFAULT: "#f5f0e6",
          200: "#ede8d8",
          300: "#e0d8c4",
          400: "#cfc8b0",
          500: "#bfb89c",
        },
        snow: {
          DEFAULT: "#2c2c2c",
          dim: "#5a5a5a",
          faint: "#8a8a8a",
        },
        // Light-mode gray scale
        gray: {
          50: "#faf8f2",
          100: "#f0ece0",
          200: "#e0d8c4",
          300: "#cfc8b0",
          400: "#a8a090",
          500: "#7a7268",
          600: "#5a5450",
          700: "#403c38",
          800: "#2c2820",
          900: "#1a1610",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        handwritten: ["var(--font-caveat)", "cursive"],
      },
      animation: {
        "neon-pulse": "neonPulse 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
        "xp-flash": "xpFlash 0.6s ease-out",
      },
      keyframes: {
        neonPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        xpFlash: {
          "0%": { boxShadow: "0 0 0 0 rgba(0,255,159,0.7)" },
          "50%": { boxShadow: "0 0 24px 8px rgba(0,255,159,0.4)" },
          "100%": { boxShadow: "0 0 0 0 rgba(0,255,159,0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
