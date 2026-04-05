import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WhyFoundoSection from "@/components/WhyFoundoSection";
import PromiseSection from "@/components/PromiseSection";
import SolutionSection from "@/components/SolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <PricingSection />
    <ServicesSection />
    <ProcessSection />
    <WhyFoundoSection />
    <PromiseSection />
    <SolutionSection />
    <TestimonialsSection />
    <FAQSection />
    <FinalCTASection />
    <Footer />
  </div>
);

export default Index;
