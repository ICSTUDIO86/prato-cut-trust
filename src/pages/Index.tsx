import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Capabilities from "@/components/sections/Capabilities";
import Workshop from "@/components/sections/Workshop";
import ProductionExamples from "@/components/sections/ProductionExamples";
import HowWeWork from "@/components/sections/HowWeWork";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <LanguageSwitcher />
        <Hero />
        <WhatWeDo />
        <Capabilities />
        <Workshop />
        <ProductionExamples />
        <HowWeWork />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default Index;
