"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, MessageCircle, Mail, ArrowRight, FileText, Bell, Rocket, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Receipt, getLastReceipt, getReceiptByOrder, downloadReceiptHtml } from "@/lib/receipt-storage";

const WHATSAPP = "https://api.whatsapp.com/send?phone=919510022071&text=Hi!%20I%20just%20placed%20my%20Foundo%20order%20%F0%9F%9A%80";
const EMAIL = "info@foundo.co";

function ThankYouContent() {
  const params = useSearchParams();
  const orderParam = params.get("order");
  const [receipt, setReceipt] = useState<Receipt | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    (async () => {
      const r = orderParam ? await getReceiptByOrder(orderParam) : null;
      setReceipt(r ?? (await getLastReceipt()));
    })();
  }, [orderParam]);

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="mx-auto h-20 w-20 rounded-full bg-success/10 flex items-center justify-center mb-6 animate-fade-up">
        <CheckCircle2 className="h-10 w-10 text-success" />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold font-display mb-3 animate-fade-up">Order placed successfully 🎉</h1>
      <p className="text-muted-foreground text-base md:text-lg mb-6 animate-fade-up-delay">
        We&apos;ve sent a confirmation to your email. Our team will reach out within a few hours to begin your formation.
      </p>

      {receipt && (
        <div className="mb-10 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-border bg-card px-4 py-2 text-sm">
          <span className="font-mono text-xs font-bold text-primary">{receipt.orderNumber}</span>
          <span className="text-muted-foreground">·</span>
          <span className="font-semibold">${receipt.pricing.total}</span>
          <Button size="sm" variant="ghost" className="h-7 px-2 rounded-full" onClick={() => downloadReceiptHtml(receipt)}>
            <Download className="h-3.5 w-3.5 mr-1" /> Receipt
          </Button>
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
        <Link href="/">Back to Home <ArrowRight className="h-4 w-4 ml-2" /></Link>
      </Button>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="h-16 md:h-20" />
      <main className="container py-12 md:py-20">
        <Suspense fallback={<div>Loading...</div>}>
          <ThankYouContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
