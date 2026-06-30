import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1B2E",
        navy: "#102A44",
        navy2: "#0E2138",
        navyline: "#243F5A",
        steel: "#5E8DB8",
        steeldeep: "#34618C",
        silver: "#9AA7B4",
        graphite: "#3E4E5E",
        mist: "#F3F5F7",
        mist2: "#E9EDF1",
        line: "#DDE3E9",
        inksoft: "#42566A",
        muted: "#7A8896",
        inktext: "#101D2A",
      },
      fontFamily: {
        // Institutional pairing: a transitional serif for display (the gravitas
        // established credit managers use) over a clean grotesque for everything
        // else. mono aliases to the grotesque so legacy utilities stay sans.
        sans: ["var(--font-sans)", "system-ui", "Segoe UI", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "Times New Roman", "serif"],
        mono: ["var(--font-sans)", "system-ui", "Segoe UI", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
        prose: "68ch",
      },
      letterSpacing: {
        tightish: "-0.012em",
      },
    },
  },
  plugins: [],
};

export default config;
