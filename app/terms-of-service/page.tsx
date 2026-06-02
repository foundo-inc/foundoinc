import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 px-4 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p>Terms of service content goes here.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
