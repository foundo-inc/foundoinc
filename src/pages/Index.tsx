import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PricingSection from "@/components/PricingSection";
import SinglePackageSection from "@/components/SinglePackageSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import StatesSection from "@/components/StatesSection";
import ProcessSection from "@/components/ProcessSection";
import MidCTASection from "@/components/MidCTASection";
import WhyFoundoSection from "@/components/WhyFoundoSection";
import ComparisonSection from "@/components/ComparisonSection";
import TrustSecuritySection from "@/components/TrustSecuritySection";
import PartnersSection from "@/components/PartnersSection";
import PromiseSection from "@/components/PromiseSection";
import SolutionSection from "@/components/SolutionSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import UrgencyCTASection from "@/components/UrgencyCTASection";
import FinalCTASection from "@/components/FinalCTASection";
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
    <ProcessSection />
    <MidCTASection />
    <WhyFoundoSection />
    <ComparisonSection />
    <TrustSecuritySection />
    <PartnersSection />
    <PromiseSection />
    <SolutionSection />
    <SuccessStoriesSection />
    <TestimonialsSection />
    <GuaranteeSection />
    <FAQSection />
    <UrgencyCTASection />
    <FinalCTASection />
    <Footer />
  </div>
);

export default Index;
