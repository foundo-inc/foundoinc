import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import WhyFoundoSection from "@/components/WhyFoundoSection";
import PricingSection from "@/components/PricingSection";
import StatesSection from "@/components/StatesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <ServicesSection />
    <WhyFoundoSection />
    <PricingSection />
    <StatesSection />
    <ProcessSection />
    <TestimonialsSection />
    <FinalCTASection />
    <Footer />
  </div>
);

export default Index;
