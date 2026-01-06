import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { chamferGothic, trebuc } from "../fonts/fonts";
import Header from "@/src/components/Header"
import Footer from "../components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Surge | Electric Moto Club",
  description: "Engineering the future of electric motorcycles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${chamferGothic.variable} ${trebuc.variable}`}
    >
      <body className="bg-white">
        <Header />
        <main className="pt-20 md:pt-30 bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}