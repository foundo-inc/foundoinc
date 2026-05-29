'use client';

import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import StatsSection from "@/sections/StatsSection";
import SinglePackageSection from "@/sections/SinglePackageSection";
import StatesSection from "@/sections/StatesSection";
import HowItWorksSection from "@/sections/HowItWorksSection";
import ServicesSection from "@/sections/ServicesSection";
import UrgencyCTASection from "@/sections/UrgencyCTASection";
import WhyFoundoSection from "@/sections/WhyFoundoSection";
import ComparisonSection from "@/sections/ComparisonSection";
import WeHandleSection from "@/sections/WeHandleSection";
import TrustSecuritySection from "@/sections/TrustSecuritySection";
import PromiseSection from "@/sections/PromiseSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import GuaranteeSection from "@/sections/GuaranteeSection";
import ContactSection from "@/sections/ContactSection";
import FinalCTASection from "@/sections/FinalCTASection";
import FAQSection from "@/sections/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppPopup from "@/components/WhatsAppPopup";

export default function Home() {
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
