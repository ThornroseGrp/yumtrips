import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ocean blues
        ocean: {
          light: "#E0F2FE",
          DEFAULT: "#0EA5E9",
          dark: "#0369A1",
          900: "#0c4a6e", // Deep ocean blue
          950: "#082f49", // Midnight ocean
        },
        // Night ocean colors for dark mode
        "ocean-night": {
          50: "#0f172a",  // Deep sea
          100: "#1e293b", // Dark ocean
          200: "#334155", // Ocean twilight
          300: "#475569", // Ocean dusk
          400: "#64748b", // Ocean mist
          500: "#94a3b8", // Ocean fog
        },
        // Seafoam greens
        seafoam: {
          light: "#D1FAE5",
          DEFAULT: "#10B981",
          dark: "#059669",
        },
        // Sunset oranges
        sunset: {
          light: "#FED7AA",
          DEFAULT: "#F97316",
          dark: "#C2410C",
        },
        // Sand colors
        sand: {
          light: "#FEF3C7",
          DEFAULT: "#F59E0B",
          dark: "#D97706",
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
