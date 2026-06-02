import Pricing from "@/components/PricingSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
