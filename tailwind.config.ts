import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "390px",
      tablet: "834px",
      desktop: "1440px",
    },
    variants: {
      fill: ["hover", "focus"],
    },
    container: {
      center: true,
    },
    colors: {
      background: "#FFF5DA",
      white: "#FFFFFF",
      "dark-blue": "#003049",
      sage: "#B6B980",
      purple: "#827191",
      bordeux: "#7D1D3F",
      blue: "#84ACCE",
      yellow: "#F4AC45",
      grey: "#C4C4C4",
    },
    fontFamily: {
      zilla_slab: ["var(--font-zilla-slab)"],
      koulen: ["var(--font-koulen)"],
      unbutton: ["var(--font-unbutton)"],
    },
    extend: {
      fontSize: {
        "2.5xl": ["2rem", { lineHeight: "2.5rem" }],
      },
      animation: {
        "bounce-horizontal": "bounce-horizontal 1s infinite",
      },
      keyframes: {
        "bounce-horizontal": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(25%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
