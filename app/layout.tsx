import type { Metadata } from "next";
import { Shippori_Mincho } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-shippori-mincho",
  display: "swap",
});

export const metadata: Metadata = {
  title: "西宮合氣道同好会",
  description: "西宮市で合氣道を始めませんか。年齢・体力不問、初心者大歓迎。無料体験稽古随時受付中。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={shipporiMincho.variable}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
