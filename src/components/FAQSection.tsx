import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Do I need to be a U.S. citizen to form an LLC?", a: "No! Our service is specifically designed for non-U.S. residents. You can form a U.S. LLC from anywhere in the world without a Social Security Number (SSN) or U.S. address." },
  { q: "What information do you need to get started?", a: "We need your full name, address, email, phone number, and basic business details. The entire process takes less than 10 minutes to complete." },
  { q: "How long does it take to form my LLC?", a: "Standard processing takes 3–5 business days. Expedited processing is available and can be completed in as little as 1 business day, depending on the state." },
  { q: "Can I open a U.S. bank account remotely?", a: "Yes! We partner with U.S. banks that allow remote account opening for international founders. No U.S. visit required." },
  { q: "What states do you offer for LLC formation?", a: "We offer LLC formation in all 50 U.S. states. The most popular choices for international founders are Wyoming, Delaware, and New Mexico." },
  { q: "Does Foundo help with ongoing compliance?", a: "Absolutely. We provide annual report reminders, registered agent services, and compliance guidance to keep your business in good standing year after year." },
  { q: "Can Foundo help me set up Stripe or PayPal?", a: "Yes, once your LLC and EIN are set up, we guide you through activating payment processors like Stripe, PayPal, and other gateways." },
];

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-24 lg:py-28 bg-background relative">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3 md:mb-4">FAQ</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-5 font-display leading-tight">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
      </div>
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-5 md:px-6 bg-card data-[state=open]:border-primary/20 data-[state=open]:shadow-sm transition-all">
              <AccordionTrigger className="text-left font-semibold text-sm md:text-base py-4 md:py-5 hover:no-underline hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-4 md:pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
