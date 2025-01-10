import { Zilla_Slab, Koulen, Alegreya_Sans, Sofia_Sans_Extra_Condensed } from "next/font/google";
import localFont from "next/font/local";

export const unbutton = localFont({
  src: "../assets/fonts/unbutton/unbutton.ttf",
  variable: "--font-unbutton",
});

export const zilla_slab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-zilla-slab",
});

export const koulen = Koulen({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-koulen",
});

export const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800"],
  variable: "--font-alegreya-sans",
});

export const sofia_sans_extra_condensed = Sofia_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800"],
  variable: "--font-sofia-sans-extra-condensed",
});
