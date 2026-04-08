import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PricingSection from "@/components/PricingSection";
import SinglePackageSection from "@/components/SinglePackageSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import StatesSection from "@/components/StatesSection";


import WhyFoundoSection from "@/components/WhyFoundoSection";
import ComparisonSection from "@/components/ComparisonSection";
import TrustSecuritySection from "@/components/TrustSecuritySection";

import PromiseSection from "@/components/PromiseSection";
import SolutionSection from "@/components/SolutionSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import UrgencyCTASection from "@/components/UrgencyCTASection";
import FinalCTASection from "@/components/FinalCTASection";
import WeHandleSection from "@/components/WeHandleSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <StatsSection />
    {/* <PricingSection /> */}
    <SinglePackageSection />
    <StatesSection />
    <HowItWorksSection />
    <ServicesSection />
    <UrgencyCTASection />
    
    
    <WhyFoundoSection />
    <ComparisonSection />
    <WeHandleSection />
    <TrustSecuritySection />
    
    <PromiseSection />
    <TestimonialsSection />
    <GuaranteeSection />
    <ContactSection />
    <FinalCTASection />
    <FAQSection />
    <Footer />
  </div>
);

export default Index;
