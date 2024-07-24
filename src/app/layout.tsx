import type { Metadata } from "next";
import "./globals.css";
import { koulen, unbutton, zilla_slab } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "AlchemyConf 2025 | Save the Date",
  description: "AlchemyConf 2025 | 2-3 April | Braga, Portugal",
  icons: {
    icon: "/icon.ico",
  },
  openGraph: {
    images: [
      {
        url: "https://alchemyconf.com/opengraph-image.png",
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
      className={`scroll-smoth ${zilla_slab.variable} ${koulen.variable} ${unbutton.variable} `}
      lang="en"
    >
      <script
        data-goatcounter="https://alchemyconf2025.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
      <body className="bg-background">
        <div className="overflow-hidden md:overflow-auto">{children}</div>
      </body>
    </html>
  );
}
