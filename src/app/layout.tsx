import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { SWRegistration } from "@/components/layout/SWRegistration";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FACC15",
};

export const metadata: Metadata = {
  title: "Infriend - Gamify Your Connection | Dating App for College Students",
  description: "Stop endless swiping. Infriend uses 25+ interactive games to help college students make real connections. Verified safe, designed for vibes.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        <Header />
        <SWRegistration />
        {children}
      </body>
    </html>
  );
}
