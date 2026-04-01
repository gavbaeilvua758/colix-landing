import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#050816",
        graphite: "#0B1220",
        slate: "#101A2C",
        steel: "#91A4C3",
        cloud: "#E6EEF9",
        electric: {
          400: "#5AA7FF",
          500: "#288DFF",
          600: "#0B6BFF"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(90, 167, 255, 0.18), 0 18px 80px rgba(11, 107, 255, 0.24)",
        panel: "0 24px 80px rgba(2, 8, 23, 0.55)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(145,164,195,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(145,164,195,0.08) 1px, transparent 1px)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.28" },
          "50%": { opacity: "0.7" }
        },
        gridShift: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -8px, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" }
        }
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "pulse-line": "pulseLine 4s ease-in-out infinite",
        "grid-shift": "gridShift 16s ease-in-out infinite"
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"]
      }
    }
  },
  plugins: []
} satisfies Config;
