import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Pillars } from "@/components/sections/Pillars";
import { ProductDemo } from "@/components/sections/ProductDemo";
import { Safety } from "@/components/sections/Safety";
import { Science } from "@/components/sections/Science";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flame - Gamify Your Connection | Dating App for College Students",
  description: "Stop endless swiping. Flame uses 25+ interactive games to help college students make real connections. Verified safe, designed for vibes.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Flame - Gamify Your Connection",
    description: "Stop endless swiping. Flame uses 25+ interactive games to help college students make real connections.",
    url: 'https://Flameapp.in',
  }
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Pillars />
      <ProductDemo />
      <Safety />
      <Science />
      <FinalCTA />
      <Footer />
    </main>
  );
}
