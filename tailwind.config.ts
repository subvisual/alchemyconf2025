import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#FFF5DA",
      dark_blue: "#003049",
      sage: "#D7D9B1",
      purple: "#827191",
      bordeux: "#7D1D3F",
      blue: "#84ACCE",
    },
    fontFamily: {
      zilla_slab: ["var(--font-zilla-slab)"],
      koulen: ["var(--font-koulen)"],
      unbutton: ["var(--font-unbutton)"],
    },
  },
  plugins: [],
};
export default config;
