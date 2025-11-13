import Hero from "@/components/Hero";
import BenefitsBar from "@/components/BenefitsBar";
import PricingSection from "@/components/PricingSection";
import HowItWorks from "@/components/HowItWorks";
import BenefitsSection from "@/components/BenefitsSection";
import ForWhoIs from "@/components/ForWhoIs";
import TransformationsSection from "@/components/TransformationsSection";
import Guarantee from "@/components/Guarantee";
import HowToUse from "@/components/HowToUse";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Leanova 21 Ervas";
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <BenefitsBar />
      <BenefitsSection />
      <TransformationsSection />
      <HowItWorks />
      <ForWhoIs />
      <HowToUse/>
      <PricingSection />
      <Guarantee />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
