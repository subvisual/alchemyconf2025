import { Zilla_Slab, Koulen } from "next/font/google";
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
