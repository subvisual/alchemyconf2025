import type { Metadata } from "next";
import "./globals.css";
import { zilla_slab } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Save the Date",
  description: "Save the date app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${zilla_slab.variable}`} lang="en">
      <body className="bg-background">{children}</body>
    </html>
  );
}