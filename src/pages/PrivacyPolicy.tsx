import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 md:pt-36 pb-20">
        <div className="container mx-auto max-w-4xl px-4">
          <header className="mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Foundo ("we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our LLC formation services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Personal identification (name, email, phone, address)</li>
                <li>Business information (company name, structure, members)</li>
                <li>Payment and billing information</li>
                <li>Government-issued identification when required for filings</li>
                <li>Communications and correspondence with our team</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide, maintain, and improve our services</li>
                <li>Process LLC formations and related state filings</li>
                <li>Communicate with you about your account and services</li>
                <li>Send administrative notices and customer support messages</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share information with state agencies to file your formation documents, with trusted service providers who assist us in operating our business, and when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures including encryption, secure servers, and access controls to protect your personal information from unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, contact us at the email below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a new "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at <a href="mailto:support@foundo.com" className="text-primary font-medium hover:underline">support@foundo.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
