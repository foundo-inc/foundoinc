'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Plus, Trash2, Sparkles, ShieldCheck, CreditCard, Lock, Pencil, AlertCircle, TrendingUp, Star, Building2, Tag, Users, Shield, Zap, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  CheckoutData, COUNTRY_CODES, INDUSTRIES, MARKETPLACE_KEYWORDS,
  STATES, POPULAR_STATE_NAMES, emptyMember, initialData, ADDON_PRICES, FOUNDO_FEE,
  Coupon, findCoupon,
} from "@/lib/checkout-data";
import { FileUpload } from "@/components/FileUpload";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";
import { useCountries } from "@/hooks/use-countries";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  setStep as setStepAction,
  updateField,
  addMember as addMemberAction,
  removeMember as removeMemberAction,
  updateMember as updateMemberAction,
  setResponsible as setResponsibleAction,
  setCoupon as setCouponAction,
  setPaymentStatus,
  resetCheckout,
  selectCheckoutData,
  selectStep,
  selectCoupon,
} from "@/store/checkoutSlice";
import { saveFileToIDB, deleteFileFromIDB } from "@/lib/idb-storage";
import { Elements, CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getStripe } from "@/lib/stripe";
import { saveReceipt, buildReceipt, downloadReceiptHtml } from "@/lib/receipt-storage";

const STEPS = ["Package", "Your Info", "Business", "Members", "Add-ons", "Review", "Payment"];

// Placeholder components - import from actual files when needed
const StepIndicator = ({ steps, current }: any) => (
  <div className="flex items-center justify-center gap-2">
    {steps.map((s: string, i: number) => (
      <div key={i} className={cn(
        "h-2 rounded-full transition-all",
        i <= current ? "bg-primary w-8" : "bg-border w-2"
      )} />
    ))}
  </div>
);

const CheckoutSummary = ({ data, coupon }: any) => (
  <div className="rounded-xl border border-border p-4">
    <h3 className="font-bold mb-4">Order Summary</h3>
    <p className="text-sm text-muted-foreground">Checkout features coming soon</p>
  </div>
);

const computeTotals = (data: any, coupon: any) => ({
  subtotal: 0,
  discount: 0,
  tax: 0,
  total: 0
});

const Checkout = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectCheckoutData);
  const step = useAppSelector(selectStep);
  const coupon = useAppSelector(selectCoupon);
  
  const setStep = (updater: number | ((s: number) => number)) => {
    const next = typeof updater === "function" ? (updater as (s: number) => number)(step) : updater;
    dispatch(setStepAction(next));
  };
  
  const setCoupon = (c: Coupon | null) => dispatch(setCouponAction(c));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [uploadingCount, setUploadingCount] = useState(0);
  const isUploading = uploadingCount > 0;
  
  const handleUploadingChange = (u: boolean) =>
    setUploadingCount((c) => Math.max(0, c + (u ? 1 : -1)));

  useEffect(() => { 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  }, [step]);

  const update = <K extends keyof CheckoutData>(k: K, v: CheckoutData[K]) => {
    dispatch(updateField({ key: k, value: v }));
    setErrors((e) => { const { [k as string]: _, ...rest } = e; return rest; });
  };

  const addMember = () => dispatch(addMemberAction());
  const removeMember = (id: string) => dispatch(removeMemberAction(id));
  const updateMember = (id: string, patch: Partial<CheckoutData["members"][number]>) =>
    dispatch(updateMemberAction({ id, patch }));
  const setResponsible = (id: string) => dispatch(setResponsibleAction(id));

  useEffect(() => {
    if (data.members.length === 1 && !data.members[0].isResponsible) {
      dispatch(setResponsibleAction(data.members[0].id));
    }
  }, [data.members.length, data.members, dispatch]);

  const showItin = useMemo(() => data.members.every((m) => !m.ssn.trim()), [data.members]);
  const isEcom = data.industry.toLowerCase().includes("ecommerce");
  const isMarketplace = MARKETPLACE_KEYWORDS.some((k) => data.industry.includes(k));

  useEffect(() => { if (!showItin && data.addonItin) update("addonItin", false); }, [showItin]);
  useEffect(() => { if (!isEcom && data.addonSellerPermit) update("addonSellerPermit", false); }, [isEcom]);
  useEffect(() => { if (!isMarketplace && data.addonPremiumAddress) update("addonPremiumAddress", false); }, [isMarketplace]);

  const validate = (s: number): boolean => {
    const e: Record<string, string> = {};
    if (s === 0) {
      if (!data.state) e.state = "Select a state";
    }
    if (s === 1) {
      if (!data.firstName.trim()) e.firstName = "First name required";
      if (!data.lastName.trim()) e.lastName = "Last name required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Valid email required";
      if (!/^\d{6,15}$/.test(data.phone.replace(/\D/g, ""))) e.phone = "Valid phone required";
    }
    if (s === 2) {
      if (!data.businessName.trim()) e.businessName = "Business name required";
      if (!data.industry) e.industry = "Select industry";
      if (data.description.trim().length < 10) e.description = "Add a short description (10+ chars)";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validate(step)) setStep((s) => Math.min(s + 1, STEPS.length - 1)); };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handlePay = async (payment: { brand?: string; last4?: string; tokenId?: string }) => {
    try {
      dispatch(setPaymentStatus({ status: "processing", error: null }));
      const orderNumber = `FN-${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
      dispatch(setPaymentStatus({ status: "succeeded", error: null, orderId: orderNumber }));
      dispatch(resetCheckout());
      router.push(`/checkout/thank-you?order=${encodeURIComponent(orderNumber)}`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Order failed";
      dispatch(setPaymentStatus({ status: "failed", error: msg }));
      toast({ title: "Order failed", description: msg, variant: "destructive" });
    }
  };

  const totals = computeTotals(data, coupon);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="h-16 md:h-20" />

      <header className="border-b border-border bg-gradient-to-b from-secondary/40 to-background">
        <div className="container py-6 md:py-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <Sparkles className="h-3.5 w-3.5" /> Place Your Order
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight">Launch your US company in minutes</h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Simple, guided checkout. Your progress is auto-saved.</p>
          </div>
          <div className="mt-6 md:mt-8">
            <StepIndicator steps={STEPS} current={step} />
          </div>
        </div>
      </header>

      <main className="container py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 lg:gap-8">
          <div className="min-w-0">
            <div className="lg:hidden mb-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full justify-between h-12 rounded-xl">
                    <span className="font-semibold">View Order Summary</span>
                    <span className="font-bold text-primary">${totals.total}</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="rounded-t-2xl">
                  <div className="pt-6"><CheckoutSummary data={data} coupon={coupon} /></div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-8 shadow-sm">
              <div className="min-h-96 flex items-center justify-center text-center">
                <div>
                  <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Checkout Coming Soon</h2>
                  <p className="text-muted-foreground mb-6">Our enhanced checkout experience is being prepared.</p>
                  <Link href="/">
                    <Button>Return to Home</Button>
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between gap-3">
                <Button variant="ghost" onClick={back} disabled={step === 0} className="rounded-xl px-3 sm:px-4">
                  <ArrowLeft className="h-4 w-4 sm:mr-2" /> <span className="hidden sm:inline">Back</span>
                </Button>
                {step < STEPS.length - 2 ? (
                  <Button onClick={next} size="lg" disabled={isUploading} className="rounded-xl px-5 sm:px-6 h-12 font-bold shadow-lg shadow-primary/20">
                    Continue <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : null}
              </div>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <CheckoutSummary data={data} coupon={coupon} />
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
