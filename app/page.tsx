import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SinglePackageSection from "@/components/SinglePackageSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import StatesSection from "@/components/StatesSection";
import WhyFoundoSection from "@/components/WhyFoundoSection";
import ComparisonSection from "@/components/ComparisonSection";
import TrustSecuritySection from "@/components/TrustSecuritySection";
import PromiseSection from "@/components/PromiseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import UrgencyCTASection from "@/components/UrgencyCTASection";
import FinalCTASection from "@/components/FinalCTASection";
import WeHandleSection from "@/components/WeHandleSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppPopup from "@/components/WhatsAppPopup";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
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
      <WhatsAppPopup />
    </div>
  );
}
