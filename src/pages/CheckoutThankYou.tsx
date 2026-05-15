import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, MessageCircle, Mail, ArrowRight, FileText, Bell, Rocket, Download, Eye, CreditCard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Receipt, getLastReceipt, getReceiptByOrder, downloadReceiptHtml } from "@/lib/receipt-storage";

const WHATSAPP = "https://api.whatsapp.com/send?phone=919510022071&text=Hi!%20I%20just%20placed%20my%20Foundo%20order%20%F0%9F%9A%80";
const EMAIL = "info@foundo.co";

const ThankYou = () => {
  const [params] = useSearchParams();
  const orderParam = params.get("order");
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    (async () => {
      const r = orderParam ? await getReceiptByOrder(orderParam) : await getLastReceipt();
      setReceipt(r ?? (await getLastReceipt()));
      setLoaded(true);
    })();
  }, [orderParam]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="h-16 md:h-20" />
      <main className="container py-12 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mx-auto h-20 w-20 rounded-full bg-success/10 flex items-center justify-center mb-6 animate-fade-up">
            <CheckCircle2 className="h-10 w-10 text-success" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-display mb-3 animate-fade-up">Order placed successfully 🎉</h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8 animate-fade-up-delay">
            We've sent a confirmation to your email. Our team will reach out within a few hours to begin your formation.
          </p>

          {/* Receipt card */}
          {loaded && receipt && (
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 text-left shadow-sm mb-8">
              <div className="flex items-start justify-between gap-3 mb-5">
                <div>
                  <div className="font-mono text-xs font-bold text-primary mb-1">{receipt.orderNumber}</div>
                  <h3 className="text-lg font-bold font-display">Your receipt</h3>
                  <p className="text-xs text-muted-foreground">{new Date(receipt.createdAt).toLocaleString()}</p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-success/10 text-success px-2 py-1 rounded-full">Paid</span>
              </div>

              <div className="space-y-2 text-sm">
                <Row label={`${receipt.business.companyType} formation · ${receipt.business.state}`} value={`$${receipt.pricing.foundoFee + receipt.pricing.stateFee}`} />
                {receipt.pricing.addons > 0 && <Row label="Add-ons" value={`$${receipt.pricing.addons}`} />}
                {receipt.pricing.discount > 0 && (
                  <Row label={`Discount${receipt.pricing.couponCode ? ` (${receipt.pricing.couponCode})` : ""}`} value={`−$${receipt.pricing.discount}`} accent="success" />
                )}
                <div className="flex justify-between pt-2 mt-2 border-t border-border">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-primary text-lg">${receipt.pricing.total}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <CreditCard className="h-3.5 w-3.5" />
                {receipt.payment.brand ? receipt.payment.brand.toUpperCase() : "Card"} •••• {receipt.payment.last4 ?? "—"}
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-2">
                <Button size="sm" onClick={() => downloadReceiptHtml(receipt)} className="rounded-lg flex-1">
                  <Download className="h-4 w-4 mr-1.5" /> Download receipt
                </Button>
                <Button size="sm" variant="outline" onClick={() => setShowDetails((s) => !s)} className="rounded-lg flex-1">
                  <Eye className="h-4 w-4 mr-1.5" /> {showDetails ? "Hide" : "View"} details
                </Button>
              </div>

              {showDetails && (
                <div className="mt-5 pt-5 border-t border-border space-y-3 text-sm">
                  <Detail label="Customer" value={`${receipt.customer.firstName} ${receipt.customer.lastName}`} />
                  <Detail label="Email" value={receipt.customer.email} />
                  <Detail label="Phone" value={receipt.customer.phone || "—"} />
                  <Detail label="Business" value={receipt.business.name} />
                  <Detail label="Industry" value={receipt.business.industry || "—"} />
                  {receipt.payment.tokenId && (
                    <Detail label="Token" value={<span className="font-mono text-xs">{receipt.payment.tokenId}</span>} />
                  )}
                </div>
              )}
              <p className="text-[11px] text-muted-foreground mt-4">
                Saved locally in this browser — refresh-safe.
              </p>
            </div>
          )}

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 text-left shadow-sm mb-8">
            <h3 className="text-lg font-bold font-display mb-4">What happens next</h3>
            <ol className="space-y-4">
              {[
                { icon: FileText, title: "We file your company", desc: "Our team prepares & files your Articles with the state." },
                { icon: Bell, title: "EIN & documents", desc: "We obtain your EIN and send formation docs to your inbox." },
                { icon: Rocket, title: "Banking & launch", desc: "We introduce you to Mercury, Stripe & your business is live." },
              ].map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-bold">{i + 1}</div>
                  <div>
                    <p className="font-semibold">{s.title}</p>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-border bg-secondary/30 p-6 md:p-8 mb-8">
            <p className="font-semibold mb-4">Need help? Talk to a human.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="rounded-xl h-12 font-bold">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" /> Chat on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl h-12 font-bold">
                <a href={`mailto:${EMAIL}`}>
                  <Mail className="h-4 w-4 mr-2" /> Email us
                </a>
              </Button>
            </div>
          </div>

          <Button asChild variant="ghost" className="rounded-xl">
            <Link to="/">Back to Home <ArrowRight className="h-4 w-4 ml-2" /></Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Row = ({ label, value, accent }: { label: string; value: string; accent?: "success" }) => (
  <div className="flex items-start justify-between gap-3">
    <span className="text-foreground">{label}</span>
    <span className={`font-semibold whitespace-nowrap ${accent === "success" ? "text-success" : ""}`}>{value}</span>
  </div>
);

const Detail = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="flex justify-between gap-4">
    <span className="text-muted-foreground">{label}</span>
    <span className="font-medium text-right">{value}</span>
  </div>
);

export default ThankYou;
