import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 md:pt-36 pb-20">
        <div className="container mx-auto max-w-4xl px-4">
          <header className="mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Foundo's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Services Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                Foundo provides LLC formation and related business services, including state filings, registered agent services, EIN applications, and compliance support. We are not a law firm and do not provide legal advice. For legal matters, consult a licensed attorney.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Comply with all applicable federal, state, and local laws</li>
                <li>Promptly notify us of any unauthorized account access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Fees and Payments</h2>
              <p className="text-muted-foreground leading-relaxed">
                Service fees are clearly listed on our pricing page. State filing fees are separate and set by the respective state agencies. All payments are due at the time of order unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Refund Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our service fees are refundable before we begin processing your order. Once a state filing has been submitted, state fees are non-refundable. Please review our refund terms before placing an order or contact us with questions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on our website, including text, graphics, logos, and software, is the property of Foundo or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are provided "as is" without warranties of any kind. We do not guarantee that our services will be uninterrupted, error-free, or meet your specific requirements. Processing times depend on state agencies and are outside our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Foundo shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount you paid us in the past twelve months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">9. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may suspend or terminate your access to our services at any time for violations of these terms or for any other reason at our discretion. You may terminate your account by contacting our support team.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">10. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by the laws of the United States and the state in which Foundo is headquartered, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">11. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Continued use of our services after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms, contact us at <a href="mailto:support@foundo.com" className="text-primary font-medium hover:underline">support@foundo.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
