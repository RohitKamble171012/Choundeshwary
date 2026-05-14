import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f0f0f",
        machinery: "#b91c1c",
        soft: "#f5f5f5",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.9s ease-out both",
        "fade-in": "fadeIn 1.2s ease-out both",
        "scroll-hint": "scrollHint 2s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        scrollHint: {
          "0%,100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
