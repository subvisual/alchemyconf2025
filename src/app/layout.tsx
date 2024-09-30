import type { Metadata } from "next";
import "./globals.css";
import { koulen, unbutton, zilla_slab } from "@/utils/fonts";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
export const metadata: Metadata = {
  title: "Alchemy Conf 2025",
  description: "Alchemy Conf | 2-3 April 2025 | Braga, Portugal",
  icons: {
    icon: "/icon.ico",
  },
  metadataBase: new URL("https://alchemyconf.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`scroll-smooth ${zilla_slab.variable} ${koulen.variable} ${unbutton.variable} `}
      lang="en"
    >
      <script
        data-goatcounter="https://alchemyconf2025.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
      <GoogleTagManager gtmId="GTM-TMJC46NG" />
      <body className="overflow-x-hidden overscroll-none bg-background">
        <Header />
        <div className="overflow-hidden md:overflow-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
