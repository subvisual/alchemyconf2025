import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{png,svg,jpeg}",
  ],
  theme: {
    screens: {
      xs: { max: "390px" },
      mobile: "290px",
      tablet: "834px",
      desktop: "1440px",
    },
    variants: {
      fill: ["hover", "focus"],
    },
    container: {
      center: true,
    },
    fontFamily: {
      zilla_slab: ["var(--font-zilla-slab)"],
      koulen: ["var(--font-koulen)"],
      unbutton: ["var(--font-unbutton)"],
      alegreya_sans: ["var(--font-alegreya-sans)"],
    },
    extend: {
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
      fontSize: {
        "2.5xl": ["2rem", { lineHeight: "44.8px" }],
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
