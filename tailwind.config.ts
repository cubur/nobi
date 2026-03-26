import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        board: "#DCB167",
        "board-dark": "#C49B50",
        "stone-black": "#1A1A1A",
        "stone-white": "#F5F0E8",
        grid: "#B8944A",
        ink: "#2C2C2C",
        mist: "#F7F4EE",
        moss: "#4A7C59",
        "moss-light": "#6A9E79",
        atari: "#C0392B",
        "atari-light": "#E74C3C",
        liberty: "#2980B9",
        "liberty-light": "#3498DB",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "Consolas", "monospace"],
      },
      backgroundImage: {
        "board-grid": `
          linear-gradient(#B8944A 1px, transparent 1px),
          linear-gradient(90deg, #B8944A 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        "board-grid": "40px 40px",
      },
      animation: {
        "stone-place": "stoneDrop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "pulse-liberty": "pulseFree 2s ease-in-out infinite",
        "slide-up": "slideUp 0.4s ease-out",
        "fade-in": "fadeIn 0.3s ease-out",
      },
      keyframes: {
        stoneDrop: {
          "0%": { transform: "scale(1.4)", opacity: "0.5" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        pulseFree: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(74,124,89,0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(74,124,89,0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
