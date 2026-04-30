import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { SWRegistration } from "@/components/layout/SWRegistration";
import JsonLd from "@/components/seo/JsonLd";
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
  metadataBase: new URL('https://ling.app'),
  title: {
    default: "Ling - Gamify Your Connection",
    template: "%s | Ling"
  },
  description: "Stop endless swiping. Ling uses 25+ interactive games to help college students make real connections. Verified safe, designed for vibes.",
  keywords: ["dating app", "college students", "social games", "ling", "friends", "connection"],
  authors: [{ name: "Ling Team" }],
  creator: "Ling",
  publisher: "Ling",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ling.app',
    siteName: 'Ling',
    images: [{
      url: '/og-image.png', // We should ensure this exists or use a placeholder
      width: 1200,
      height: 630,
      alt: 'Ling App Preview',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lingapp',
    creator: '@lingapp',
  },
  manifest: "/manifest.json",
  icons: {
    icon: '/favicon.ico',
    apple: '/icon-192x192.png',
  },
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
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
