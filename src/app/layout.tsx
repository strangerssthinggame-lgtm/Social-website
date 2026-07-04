import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { SWRegistration } from "@/components/layout/SWRegistration";
import JsonLd from "@/components/seo/JsonLd";
import { InstallPrompt } from "@/components/layout/InstallPrompt";
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
  metadataBase: new URL('https://Flameapp.in'),
  title: {
    default: "Flame - Gamify Your Connection",
    template: "%s | Flame"
  },
  description: "Stop endless swiping. Flame uses 25+ interactive games to help college students make real connections. Verified safe, designed for vibes.",
  keywords: ["dating app", "college students", "social games", "Flame", "friends", "connection"],
  authors: [{ name: "Flame Team" }],
  creator: "Flame",
  publisher: "Flame",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://Flameapp.in',
    siteName: 'Flame',
    images: [{
      url: '/og-image.png', // We should ensure this exists or use a placeholder
      width: 1200,
      height: 630,
      alt: 'Flame App Preview',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Flameapp',
    creator: '@Flameapp',
  },
  manifest: "/manifest.json",
  icons: {
    icon: '/logo.png',
    apple: '/icons/icon-192x192.png',
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
        <InstallPrompt />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
