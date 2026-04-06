import mercuryLogo from "@/assets/partners/mercury.svg";
import airwallexLogo from "@/assets/partners/airwallex.svg";
import payoneerLogo from "@/assets/partners/payoneer.svg";
import stripeLogo from "@/assets/partners/stripe.svg";
import quoLogo from "@/assets/partners/quo.svg";

const partners = [
  { name: "Mercury", logo: mercuryLogo },
  { name: "Airwallex", logo: airwallexLogo },
  { name: "Payoneer", logo: payoneerLogo },
  { name: "Stripe", logo: stripeLogo },
  { name: "Quo", logo: quoLogo },
];

const PartnersSection = () => (
  <section className="py-16 md:py-24 bg-background relative">
    <div className="container mx-auto px-5 md:px-4">
      <p className="text-center text-muted-foreground text-sm md:text-base font-medium mb-10 md:mb-14">
        Our Strategic Partners and Affiliates
      </p>
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-20 max-w-4xl mx-auto">
        {partners.map((p) => (
          <img
            key={p.name}
            src={p.logo}
            alt={p.name}
            className="h-7 md:h-9 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
          />
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
