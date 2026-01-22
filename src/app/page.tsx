import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Pillars } from "@/components/sections/Pillars";
import { ProductDemo } from "@/components/sections/ProductDemo";
import { Safety } from "@/components/sections/Safety";
import { Science } from "@/components/sections/Science";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer"; 

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
