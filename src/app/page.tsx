import Image from "next/image";

import HeroSection from "@/components/hero-section";
import Content from "@/components/content";
import Services from "@/components/services";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Content />
      <Services />
      <Contact />
    </main>
  );
}
