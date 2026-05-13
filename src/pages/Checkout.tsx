import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import StepIndicator from "@/components/checkout/StepIndicator";
import CheckoutSummary, { computeTotals } from "@/components/checkout/CheckoutSummary";
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

const STEPS = ["Package", "Your Info", "Business", "Members", "Add-ons", "Review", "Payment"];

const Checkout = () => {
  const navigate = useNavigate();
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
  const [uploadingMembers, setUploadingMembers] = useState<Record<string, boolean>>({});
  const isUploading = Object.values(uploadingMembers).some(Boolean);
  const setMemberUploading = (id: string, uploading: boolean) =>
    setUploadingMembers((prev) => ({ ...prev, [id]: uploading }));

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [step]);

  const update = <K extends keyof CheckoutData>(k: K, v: CheckoutData[K]) => {
    dispatch(updateField({ key: k, value: v }));
    setErrors((e) => { const { [k as string]: _, ...rest } = e; return rest; });
  };

  // Members helpers
  const addMember = () => dispatch(addMemberAction());
  const removeMember = (id: string) => dispatch(removeMemberAction(id));
  const updateMember = (id: string, patch: Partial<CheckoutData["members"][number]>) =>
    dispatch(updateMemberAction({ id, patch }));
  const setResponsible = (id: string) => dispatch(setResponsibleAction(id));

  // Auto-assign responsible if 1 member
  useEffect(() => {
    if (data.members.length === 1 && !data.members[0].isResponsible) {
      dispatch(setResponsibleAction(data.members[0].id));
    }
  }, [data.members.length, data.members, dispatch]);

  // Smart upsell visibility
  const showItin = useMemo(() => data.members.every((m) => !m.ssn.trim()), [data.members]);
  const isEcom = data.industry.toLowerCase().includes("ecommerce");
  const isMarketplace = MARKETPLACE_KEYWORDS.some((k) => data.industry.includes(k));

  // Auto-disable upsells when condition no longer applies
  useEffect(() => { if (!showItin && data.addonItin) update("addonItin", false); }, [showItin]);
  useEffect(() => { if (!isEcom && data.addonSellerPermit) update("addonSellerPermit", false); }, [isEcom]);
  useEffect(() => { if (!isMarketplace && data.addonPremiumAddress) update("addonPremiumAddress", false); }, [isMarketplace]);

  // Validation per step
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
    if (s === 3) {
      data.members.forEach((m, i) => {
        if (!m.firstName.trim()) e[`m${i}-firstName`] = "Required";
        if (!m.lastName.trim()) e[`m${i}-lastName`] = "Required";
        if (!m.street.trim()) e[`m${i}-street`] = "Street required";
        if (!m.city.trim()) e[`m${i}-city`] = "City required";
        if (!m.country.trim()) e[`m${i}-country`] = "Country required";
        if (!m.zip.trim()) e[`m${i}-zip`] = "ZIP required";
        if (!m.idFile) e[`m${i}-idFile`] = "Upload your passport or ID";
      });
      if (data.members.length > 1 && !data.members.some((m) => m.isResponsible)) {
        e["responsible"] = "Select Responsible Party";
      }
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validate(step)) setStep((s) => Math.min(s + 1, STEPS.length - 1)); };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handlePay = async () => {
    dispatch(setPaymentStatus({ status: "processing", error: null }));
    // Backend in progress — simulate a successful order locally.
    await new Promise((r) => setTimeout(r, 600));
    const mockOrderId = `local_${Date.now()}`;
    dispatch(setPaymentStatus({ status: "succeeded", error: null, orderId: mockOrderId }));
    toast({ title: "Order placed!", description: "Redirecting to confirmation…" });
    dispatch(resetCheckout());
    setTimeout(() => navigate("/checkout/thank-you"), 600);
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-2 leading-tight">Launch your US company in minutes</h1>
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
            {/* Mobile summary */}
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
              {step === 0 && <Step2 data={data} update={update} errors={errors} />}
              {step === 1 && <Step1 data={data} update={update} errors={errors} />}
              {step === 2 && <Step3 data={data} update={update} errors={errors} />}
              {step === 3 && (
                <Step4
                  data={data} errors={errors}
                  addMember={addMember} removeMember={removeMember}
                  updateMember={updateMember} setResponsible={setResponsible}
                  setMemberUploading={setMemberUploading}
                />
              )}
              {step === 4 && (
                <Step5 data={data} update={update} showItin={showItin} isEcom={isEcom} isMarketplace={isMarketplace} />
              )}
              {step === 5 && <Step6 goTo={setStep} />}
              {step === 6 && <Step7 onPay={handlePay} />}

              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between gap-3">
                <Button variant="ghost" onClick={back} disabled={step === 0} className="rounded-xl px-3 sm:px-4">
                  <ArrowLeft className="h-4 w-4 sm:mr-2" /> <span className="hidden sm:inline">Back</span>
                </Button>
                {step < STEPS.length - 1 ? (
                  <Button onClick={next} size="lg" disabled={isUploading} className="rounded-xl px-5 sm:px-6 h-12 font-bold shadow-lg shadow-primary/20">
                    {isUploading ? (
                      <>
                        <span className="w-4 h-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Uploading…
                      </>
                    ) : (
                      <>Continue <ArrowRight className="h-4 w-4 ml-2" /></>
                    )}
                  </Button>
                ) : (
                  <Button onClick={handlePay} size="lg" className="rounded-xl px-4 sm:px-6 h-12 font-bold shadow-lg shadow-primary/20 text-sm sm:text-base">
                    <Lock className="h-4 w-4 mr-2" /> Pay ${totals.total} <span className="hidden sm:inline ml-1">Securely</span>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Desktop sticky summary */}
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

/* ---------------- Step 1: Basic Info ---------------- */
const Step1 = ({ data, update, errors }: any) => (
  <section>
    <h2 className="text-2xl font-bold font-display mb-1">Let's start with the basics</h2>
    <p className="text-muted-foreground mb-6">We'll use this to send updates about your formation.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Field label="First Name" error={errors.firstName}>
        <Input value={data.firstName} onChange={(e) => update("firstName", e.target.value)} placeholder="John" className="h-12 rounded-xl" />
      </Field>
      <Field label="Last Name" error={errors.lastName}>
        <Input value={data.lastName} onChange={(e) => update("lastName", e.target.value)} placeholder="Doe" className="h-12 rounded-xl" />
      </Field>
      <Field label="Email Address" error={errors.email} className="md:col-span-2">
        <Input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="you@company.com" className="h-12 rounded-xl" />
      </Field>
      <Field label="Phone Number" error={errors.phone} className="md:col-span-2">
        <div className="flex gap-2">
          <Select value={data.countryCode} onValueChange={(v) => update("countryCode", v)}>
            <SelectTrigger className="h-12 rounded-xl w-32"><SelectValue /></SelectTrigger>
            <SelectContent className="max-h-60">
              {COUNTRY_CODES.map((c) => (
                <SelectItem key={c.code + c.country} value={c.code}>{c.flag} {c.code}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="555 123 4567" className="h-12 rounded-xl flex-1" />
        </div>
      </Field>
    </div>
  </section>
);

/* ---------------- Step 2: Package ---------------- */
const Step2 = ({ data, update, errors }: any) => {
  const stateFee = STATES.find((s) => s.name === data.state)?.fee ?? 0;
  const popularStates = STATES.filter((s) => POPULAR_STATE_NAMES.includes(s.name));
  const otherStates = STATES.filter((s) => !POPULAR_STATE_NAMES.includes(s.name));
  const leftFeatures = [
    "Company formation (LLC or C-Corp)",
    "Expedited Tax ID (EIN) setup",
    "All state filing fees included",
    "Business bank account setup",
    "Registered U.S. business address",
    "Registered agent service included",
  ];
  const rightFeatures = [
    "Free expert tax consultation",
    "All essential documents",
    "Operating Agreement / Corporate Bylaws",
    "Annual compliance reminders",
    "Lifetime expert support",
  ];
  const stats = [
    { icon: Users, value: "700+", label: "Founders served" },
    { icon: Shield, value: "100%", label: "Compliance rate" },
    { icon: Zap, value: "48hrs", label: "Avg. setup time" },
  ];
  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-1">Choose your package</h2>
      <p className="text-muted-foreground mb-6">Pick your state and entity type. You can change these later if needed.</p>

      {/* Brand package card — mirrors SinglePackageSection */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 mb-6 bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(0,0%,100%,0.08)_0%,_transparent_60%)]" />
        <div className="grid lg:grid-cols-5 relative z-10">
          {/* Left — Pricing */}
          <div className="lg:col-span-2 p-6 md:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-primary-foreground/10">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
                <Zap className="h-3 w-3" /> Best Value
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold font-display text-primary-foreground mb-1 leading-tight">
                Foundo Complete
              </h3>
              <p className="text-primary-foreground/60 text-sm mb-6">
                Everything to start & scale your US business
              </p>

              {/* Prominent price */}
              <div className="mb-3">
                <div className="flex flex-wrap items-end gap-2">
                  <span className="text-5xl md:text-6xl font-extrabold font-display text-primary-foreground leading-none">
                    ${FOUNDO_FEE}+
                  </span>
                  <span className="rounded-full bg-primary-foreground/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary-foreground mb-1">
                    All-Inclusive
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-sm line-through text-primary-foreground/30">$349</span>
                  <span className="text-[10px] font-bold text-primary-foreground bg-primary-foreground/15 px-2 py-1 rounded-full uppercase tracking-wider">
                    SAVE 29%
                  </span>
                </div>
              </div>

              {/* Live total preview */}
              <div className="mt-5 rounded-xl bg-primary-foreground/10 backdrop-blur p-3.5 border border-primary-foreground/10">
                {data.state ? (
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider font-bold text-primary-foreground/60">Your total today</span>
                      <span className="block text-[11px] text-primary-foreground/60 mt-0.5">{data.state} · all-inclusive</span>
                    </div>
                    <span className="text-2xl font-extrabold font-display text-primary-foreground leading-none">
                      ${FOUNDO_FEE + stateFee}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-xs text-primary-foreground/70">
                    <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
                    Select a state below to see your exact total.
                  </div>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 pt-5 border-t border-primary-foreground/10">
              <div className="grid grid-cols-3 gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <s.icon className="h-4 w-4 text-primary-foreground/70 mx-auto mb-1.5" />
                    <p className="text-base md:text-lg font-extrabold font-display text-primary-foreground leading-none">{s.value}</p>
                    <p className="text-[10px] text-primary-foreground/50 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Features */}
          <div className="lg:col-span-3 p-6 md:p-7">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground/40 mb-4">
              What's included
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
              {[...leftFeatures, ...rightFeatures].map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <div className="h-4 w-4 rounded-full bg-primary-foreground/15 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span className="text-xs md:text-sm text-primary-foreground/80 leading-snug">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Field label="State of Formation" error={errors.state} hint="Most founders choose Wyoming or Delaware for low fees & strong privacy.">
        <Select value={data.state} onValueChange={(v) => update("state", v)}>
          <SelectTrigger className="h-12 rounded-xl"><SelectValue placeholder="Select your state" /></SelectTrigger>
          <SelectContent className="max-h-72">
            <div className="px-2 py-1.5 text-[10px] uppercase tracking-wider font-bold text-primary">
              ⭐ Most Popular
            </div>
            {popularStates.map((s) => (
              <SelectItem key={s.name} value={s.name}>{s.name} — ${FOUNDO_FEE + s.fee} all-inclusive</SelectItem>
            ))}
            <div className="px-2 py-1.5 mt-1 border-t border-border text-[10px] uppercase tracking-wider font-bold text-muted-foreground">
              All States (A–Z)
            </div>
            {otherStates.map((s) => (
              <SelectItem key={s.name} value={s.name}>{s.name} — ${FOUNDO_FEE + s.fee} all-inclusive</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {data.state && (
          <p className="text-xs text-muted-foreground mt-1">Total for {data.state}: <span className="font-semibold text-foreground">${FOUNDO_FEE + stateFee}</span> · all-inclusive</p>
        )}
      </Field>

      <Label className="block mt-6 mb-3 text-sm font-semibold">Company Type</Label>
      <RadioGroup value={data.companyType} onValueChange={(v) => update("companyType", v)} className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          { v: "LLC", title: "LLC", desc: "Most popular. Pass-through tax, simple compliance, perfect for solo founders & SMBs." },
          { v: "C-Corp", title: "C-Corp", desc: "Best for raising VC funding. Required by most US accelerators & investors." },
        ].map((o) => (
          <label
            key={o.v}
            className={cn(
              "rounded-xl border-2 p-4 cursor-pointer transition-all",
              data.companyType === o.v ? "border-primary bg-primary/5" : "border-border hover:border-primary/40",
            )}
          >
            <div className="flex items-start gap-3">
              <RadioGroupItem value={o.v} className="mt-1" />
              <div>
                <p className="font-bold font-display">{o.title}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{o.desc}</p>
              </div>
            </div>
          </label>
        ))}
      </RadioGroup>
    </section>
  );
};

/* ---------------- Step 3: Business ---------------- */
const Step3 = ({ data, update, errors }: any) => (
  <section>
    <h2 className="text-2xl font-bold font-display mb-1">Tell us about your business</h2>
    <p className="text-muted-foreground mb-6">We'll use this info on your filing & EIN application.</p>

    <div className="space-y-4">
      <Field label="Business Name" error={errors.businessName} hint="We'll add 'LLC' or 'Inc.' as required by your state.">
        <Input value={data.businessName} onChange={(e) => update("businessName", e.target.value)} placeholder="Acme Ventures" className="h-12 rounded-xl" />
      </Field>
      <Field label="Website (optional)">
        <Input value={data.website} onChange={(e) => update("website", e.target.value)} placeholder="https://yourbrand.com" className="h-12 rounded-xl" />
      </Field>
      <Field label="Industry" error={errors.industry}>
        <Select value={data.industry} onValueChange={(v) => update("industry", v)}>
          <SelectTrigger className="h-12 rounded-xl"><SelectValue placeholder="Select your industry" /></SelectTrigger>
          <SelectContent className="max-h-60">
            {INDUSTRIES.map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}
          </SelectContent>
        </Select>
      </Field>
      <Field label="Business Description" error={errors.description} hint="A short sentence about what you do.">
        <Textarea
          value={data.description}
          onChange={(e) => update("description", e.target.value)}
          placeholder="We sell premium handmade leather wallets to customers in the US."
          className="min-h-[110px] rounded-xl"
        />
      </Field>
    </div>
  </section>
);

/* ---------------- Step 4: Members ---------------- */
const Step4 = ({ data, errors, addMember, removeMember, updateMember, setResponsible, setMemberUploading }: any) => {
  const { countries, loading: countriesLoading } = useCountries();

  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-1">Members & Directors</h2>
      <p className="text-muted-foreground mb-6">Add owners or directors of your company. We'll need a residential address & ID for KYC compliance.</p>

      <div className="space-y-5">
        {data.members.map((m: any, i: number) => (
          <div key={m.id} className="rounded-xl border border-border p-4 md:p-5 bg-secondary/20">
            <div className="flex items-center justify-between mb-4">
              <p className="font-bold font-display flex items-center gap-2">
                Member {i + 1}
                {m.isResponsible && <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary uppercase tracking-wider font-bold">Responsible Party</span>}
              </p>
              {data.members.length > 1 && (
                <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive" onClick={() => removeMember(m.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <Field label="First Name" error={errors[`m${i}-firstName`]}>
                <Input value={m.firstName} onChange={(e) => updateMember(m.id, { firstName: e.target.value })} placeholder="John" className="h-11 rounded-xl" />
              </Field>
              <Field label="Last Name" error={errors[`m${i}-lastName`]}>
                <Input value={m.lastName} onChange={(e) => updateMember(m.id, { lastName: e.target.value })} placeholder="Doe" className="h-11 rounded-xl" />
              </Field>
            </div>

            {/* Residential address */}
            <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-2">Residential Address</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <Field label="Street Address" error={errors[`m${i}-street`]} className="md:col-span-2">
                <Input value={m.street} onChange={(e) => updateMember(m.id, { street: e.target.value })} placeholder="123 Main St, Apt 4B" className="h-11 rounded-xl" />
              </Field>
              <Field label="City" error={errors[`m${i}-city`]}>
                <Input value={m.city} onChange={(e) => updateMember(m.id, { city: e.target.value })} placeholder="New York" className="h-11 rounded-xl" />
              </Field>
              <Field label="State / Province">
                <Input value={m.stateProvince} onChange={(e) => updateMember(m.id, { stateProvince: e.target.value })} placeholder="NY" className="h-11 rounded-xl" />
              </Field>
              <Field label="Country" error={errors[`m${i}-country`]}>
                <Select value={m.country} onValueChange={(v) => updateMember(m.id, { country: v })}>
                  <SelectTrigger className="h-11 rounded-xl">
                    <SelectValue placeholder={countriesLoading ? "Loading countries…" : "Select country"} />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="ZIP / Postal Code" error={errors[`m${i}-zip`]}>
                <Input value={m.zip} onChange={(e) => updateMember(m.id, { zip: e.target.value })} placeholder="10001" className="h-11 rounded-xl" />
              </Field>
            </div>

            {/* SSN */}
            <Field label="SSN or ITIN (optional)" hint="Skip if you don't have one — we'll suggest ITIN processing." className="mb-4">
              <Input value={m.ssn} onChange={(e) => updateMember(m.id, { ssn: e.target.value })} placeholder="XXX-XX-XXXX" className="h-11 rounded-xl" />
            </Field>

            {/* ID Upload */}
            <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-2">Identity Verification (KYC)</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <Field label="ID Document Type">
                <Select value={m.idType} onValueChange={(v) => updateMember(m.id, { idType: v })}>
                  <SelectTrigger className="h-11 rounded-xl"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="passport">Passport</SelectItem>
                    <SelectItem value="national_id">National ID Card</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <Field label="Upload Document" error={errors[`m${i}-idFile`]}>
              <FileUpload
                value={m.idFile}
                onChange={(meta) => updateMember(m.id, { idFile: meta })}
                onFileSelect={saveFileToIDB}
                onUploadingChange={(u) => setMemberUploading?.(m.id, u)}
                onRemove={() => {
                  if (m.idFile?.key) deleteFileFromIDB(m.idFile.key);
                }}
                error={errors[`m${i}-idFile`]}
              />
            </Field>
            <p className="text-xs text-muted-foreground flex items-start gap-1.5 mt-2">
              <ShieldCheck className="h-3.5 w-3.5 text-success shrink-0 mt-0.5" />
              Required for EIN & bank account verification. JPG, PNG, WEBP or PDF · max 10MB · 256-bit encrypted.
            </p>

            {data.members.length > 1 && (
              <label className="mt-4 flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="responsible"
                  checked={m.isResponsible}
                  onChange={() => setResponsible(m.id)}
                  className="h-4 w-4 accent-primary"
                />
                <span className="text-sm">Set as Responsible Party / Authorized Person (required for EIN)</span>
              </label>
            )}
          </div>
        ))}
      </div>

      {errors.responsible && (
        <p className="text-sm text-destructive mt-2 flex items-center gap-1.5"><AlertCircle className="h-4 w-4" /> {errors.responsible}</p>
      )}

      <Button variant="outline" onClick={addMember} className="mt-4 rounded-xl h-11">
        <Plus className="h-4 w-4 mr-2" /> Add Member / Director
      </Button>
    </section>
  );
};

/* ---------------- Step 5: Upsells ---------------- */
const Step5 = ({ data, update, showItin, isEcom, isMarketplace }: any) => {
  type Upsell = {
    key: "addonItin" | "addonSellerPermit" | "addonPremiumAddress";
    title: string;
    tagline: string;
    price: number;
    originalPrice?: number;
    value: boolean;
    badge?: string;
    badgeTone?: "warning" | "primary" | "success";
    icon: any;
    benefits: string[];
    socialProof?: string;
  };

  const upsells: Upsell[] = [
    showItin && {
      key: "addonItin" as const,
      title: "ITIN — Individual Taxpayer ID",
      tagline: "Required for non-US founders to file US taxes & verify payment processors.",
      price: ADDON_PRICES.itin,
      originalPrice: 299,
      value: data.addonItin,
      badge: "REQUIRED FOR NON-US FOUNDERS",
      badgeTone: "warning" as const,
      icon: Star,
      benefits: [
        "Required to file your annual US tax return",
        "Required to verify PayPal & most payment processors",
        "Avoid 30% IRS withholding tax on your earnings",
        "Build your US tax & business credit history",
      ],
      socialProof: "94% of our non-US founders add this",
    },
    isEcom && {
      key: "addonSellerPermit" as const,
      title: "Seller's Permit (Sales Tax License)",
      tagline: "Required to legally sell products & collect sales tax in the US.",
      price: ADDON_PRICES.sellerPermit,
      originalPrice: 249,
      value: data.addonSellerPermit,
      badge: "RECOMMENDED FOR ECOMMERCE",
      badgeTone: "primary" as const,
      icon: TrendingUp,
      benefits: [
        "Sell legally across all 50 US states",
        "Buy inventory wholesale tax-free",
        "Avoid penalties from state tax authorities",
        "Required by Shopify Payments & wholesale suppliers",
      ],
      socialProof: "Approved in 5–10 business days",
    },
    isMarketplace && {
      key: "addonPremiumAddress" as const,
      title: "Premium US Address (Unique Suite #)",
      tagline: "Pass Amazon, Walmart & eBay seller verification on the first try.",
      price: ADDON_PRICES.premiumAddress,
      originalPrice: 199,
      value: data.addonPremiumAddress,
      badge: "REQUIRED BY MARKETPLACES",
      badgeTone: "warning" as const,
      icon: Building2,
      benefits: [
        "Unique suite number — not flagged as virtual mailbox",
        "Accepted by Amazon, Walmart, eBay, Etsy seller central",
        "Mail scanning & forwarding worldwide",
        "Use as your business address on filings",
      ],
      socialProof: "98% first-attempt approval rate",
    },
  ].filter(Boolean) as Upsell[];

  const toneClasses = (tone?: string) =>
    tone === "warning"
      ? "bg-warning/15 text-warning"
      : tone === "success"
      ? "bg-success/15 text-success"
      : "bg-primary/15 text-primary";

  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-1">Recommended add-ons</h2>
      <p className="text-muted-foreground mb-6">Hand-picked based on your answers. Only what you actually need.</p>

      {upsells.length === 0 ? (
        <div className="rounded-xl border border-border bg-secondary/30 p-6 text-center">
          <ShieldCheck className="h-8 w-8 text-success mx-auto mb-2" />
          <p className="font-semibold">You're all set — no add-ons needed.</p>
          <p className="text-sm text-muted-foreground mt-1">Continue to review your order.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {upsells.map((u) => {
            const Icon = u.icon;
            return (
              <div
                key={u.key}
                className={cn(
                  "relative rounded-2xl border-2 p-4 sm:p-5 md:p-6 transition-all overflow-hidden",
                  u.value
                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border hover:border-primary/40 hover:shadow-md",
                )}
              >
                {u.badge && (
                  <div className={cn("inline-flex sm:absolute sm:top-0 sm:right-0 mb-3 sm:mb-0 px-2.5 py-1 rounded-md sm:rounded-bl-xl sm:rounded-tl-none sm:rounded-tr-none sm:rounded-br-none text-[10px] font-extrabold uppercase tracking-wider", toneClasses(u.badgeTone))}>
                    {u.badge}
                  </div>
                )}

                <div className="flex items-start gap-3 sm:gap-4 mb-3">
                  <div className={cn("h-10 w-10 sm:h-11 sm:w-11 rounded-xl flex items-center justify-center shrink-0", u.value ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary")}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1 sm:pr-16">
                    <p className="font-bold font-display text-base md:text-lg leading-tight">{u.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{u.tagline}</p>
                  </div>
                </div>

                <ul className="space-y-1.5 mb-4 pl-1">
                  {u.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span className="text-foreground/85">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-end justify-between gap-3 pt-3 border-t border-border">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="text-2xl font-extrabold font-display text-primary">+${u.price}</span>
                      {u.originalPrice && (
                        <span className="text-sm line-through text-muted-foreground">${u.originalPrice}</span>
                      )}
                      {u.originalPrice && (
                        <span className="text-[10px] font-bold bg-success/15 text-success px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Save ${u.originalPrice - u.price}
                        </span>
                      )}
                    </div>
                    {u.socialProof && (
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <Sparkles className="h-3 w-3 text-primary" /> {u.socialProof}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={cn("text-xs font-semibold", u.value ? "text-primary" : "text-muted-foreground")}>
                      {u.value ? "Added" : "Add"}
                    </span>
                    <Switch checked={u.value} onCheckedChange={(v) => update(u.key, v)} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

/* ---------------- Step 6: Review (reads from Redux) ---------------- */
const Step6 = ({ goTo }: { goTo: (n: number) => void }) => {
  const data = useAppSelector(selectCheckoutData);
  const coupon = useAppSelector(selectCoupon);
  const t = computeTotals(data, coupon);

  const sec = (title: string, stepIdx: number, body: React.ReactNode) => (
    <div className="rounded-xl border border-border p-4 md:p-5">
      <div className="flex items-center justify-between mb-3">
        <p className="font-bold font-display">{title}</p>
        <Button variant="ghost" size="sm" className="text-primary" onClick={() => goTo(stepIdx)}>
          <Pencil className="h-3.5 w-3.5 mr-1" /> Edit
        </Button>
      </div>
      {body}
    </div>
  );

  const stateFee = STATES.find((s) => s.name === data.state)?.fee ?? 0;

  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-1">Review your order</h2>
      <p className="text-muted-foreground mb-6">Double-check everything before payment.</p>
      <div className="space-y-3">
        {sec("Contact", 1, (
          <div className="text-sm text-muted-foreground space-y-1">
            <p><span className="text-foreground font-medium">{data.firstName} {data.lastName}</span></p>
            <p>{data.email}</p>
            <p>{data.countryCode} {data.phone}</p>
          </div>
        ))}
        {sec("Package", 0, (
          <div className="text-sm text-muted-foreground space-y-1">
            <p><span className="text-foreground font-medium">{data.companyType}</span> in <span className="text-foreground font-medium">{data.state}</span></p>
            <p>Foundo {data.companyType} Formation — <span className="text-foreground font-semibold">${FOUNDO_FEE + stateFee}</span> · all-inclusive (state fees included)</p>
          </div>
        ))}
        {sec("Business", 2, (
          <div className="text-sm text-muted-foreground space-y-1">
            <p><span className="text-foreground font-medium">{data.businessName}</span>{data.website && ` · ${data.website}`}</p>
            <p>{data.industry}</p>
            <p className="line-clamp-3">{data.description}</p>
          </div>
        ))}
        {sec("Members", 3, (
          <ul className="text-sm text-muted-foreground space-y-2">
            {data.members.map((m) => (
              <li key={m.id} className="rounded-lg bg-secondary/30 p-3">
                <p className="text-foreground font-medium">
                  {m.firstName} {m.lastName}
                  {m.isResponsible && <span className="ml-2 text-[10px] text-primary font-bold uppercase tracking-wider">Responsible Party</span>}
                </p>
                <p className="text-xs mt-0.5">{m.street}, {m.city} {m.stateProvince} {m.zip}, {m.country}</p>
                <p className="text-xs mt-0.5 capitalize">ID: {m.idType.replace("_", " ")}{m.idFile && ` · `}
                  {m.idFile && (
                    <a href={m.idFile.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {m.idFile.name}
                    </a>
                  )}
                </p>
              </li>
            ))}
          </ul>
        ))}
        {sec("Add-ons", 4, (
          <ul className="text-sm text-muted-foreground space-y-1">
            {data.addonItin && <li>ITIN Processing — ${ADDON_PRICES.itin}</li>}
            {data.addonSellerPermit && <li>Seller Permit — ${ADDON_PRICES.sellerPermit}</li>}
            {data.addonPremiumAddress && <li>Premium Address — ${ADDON_PRICES.premiumAddress}</li>}
            {!data.addonItin && !data.addonSellerPermit && !data.addonPremiumAddress && <li>No add-ons</li>}
          </ul>
        ))}
      </div>

      <div className="mt-5 rounded-xl bg-primary/5 border border-primary/20 p-4 flex items-end justify-between">
        <div>
          <p className="text-xs text-primary font-semibold">Total Due Today</p>
          <p className="text-3xl font-bold text-primary font-display">${t.total}</p>
        </div>
        <span className="text-xs text-muted-foreground">All-inclusive · USD</span>
      </div>
    </section>
  );
};

/* ---------------- Step 7: Payment (reads from Redux, no coupon UI) ---------------- */
const Step7 = ({ onPay }: { onPay: () => void }) => {
  const data = useAppSelector(selectCheckoutData);
  const coupon = useAppSelector(selectCoupon);
  const t = computeTotals(data, coupon);

  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-1">Secure Payment</h2>
      <p className="text-muted-foreground mb-6">Powered by Stripe. Your details are encrypted end-to-end.</p>

      <div className="rounded-xl border border-border p-5 bg-secondary/20 mb-5">
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="font-bold font-display">Order Total</p>
            {t.discount > 0 && (
              <p className="text-xs text-success font-semibold mt-0.5">You saved ${t.discount}</p>
            )}
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary font-display leading-none">${t.total}</p>
            {t.discount > 0 && (
              <p className="text-xs text-muted-foreground line-through mt-1">${t.subtotal}</p>
            )}
          </div>
        </div>
        <div className="space-y-4">
          <Field label="Card Number"><Input placeholder="1234 1234 1234 1234" className="h-12 rounded-xl" /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Expiry"><Input placeholder="MM / YY" className="h-12 rounded-xl" /></Field>
            <Field label="CVC"><Input placeholder="123" className="h-12 rounded-xl" /></Field>
          </div>
          <Field label="Name on Card"><Input defaultValue={`${data.firstName} ${data.lastName}`} className="h-12 rounded-xl" /></Field>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        <Trust icon={Lock} text="256-bit SSL encryption" />
        <Trust icon={ShieldCheck} text="Powered by Stripe" />
        <Trust icon={CreditCard} text="Money-back assurance" />
      </div>

      <Button onClick={onPay} size="lg" className="w-full h-14 rounded-xl text-base font-bold shadow-lg shadow-primary/20">
        <Lock className="h-4 w-4 mr-2" /> Pay ${t.total} Securely
      </Button>
      <p className="text-xs text-muted-foreground text-center mt-3">
        By placing this order you agree to our <Link to="/terms-of-service" className="text-primary hover:underline">Terms</Link> and <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
      </p>
    </section>
  );
};

/* ---------------- Helpers ---------------- */
const Field = ({ label, error, hint, children, className }: any) => (
  <div className={cn("space-y-1.5", className)}>
    <Label className="text-sm font-semibold">{label}</Label>
    {children}
    {hint && !error && <p className="text-xs text-muted-foreground">{hint}</p>}
    {error && <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {error}</p>}
  </div>
);

const Trust = ({ icon: Icon, text }: any) => (
  <div className="flex items-center gap-2 text-sm rounded-lg border border-border bg-card px-3 py-2.5">
    <Icon className="h-4 w-4 text-success" />
    <span className="text-muted-foreground">{text}</span>
  </div>
);

export default Checkout;
