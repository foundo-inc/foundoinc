import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Plus, Trash2, Sparkles, ShieldCheck, CreditCard, Lock, Pencil, AlertCircle } from "lucide-react";
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
} from "@/lib/checkout-data";
import StepIndicator from "@/components/checkout/StepIndicator";
import CheckoutSummary, { computeTotals } from "@/components/checkout/CheckoutSummary";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { CheckCircle2, Rocket, Zap } from "lucide-react";

const STORAGE_KEY = "foundo_checkout_v1";
const STEPS = ["Package", "Your Info", "Business", "Members", "Add-ons", "Review", "Payment"];

const Checkout = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<CheckoutData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...initialData, ...JSON.parse(saved) } : initialData;
    } catch { return initialData; }
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Autosave
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [step]);

  const update = <K extends keyof CheckoutData>(k: K, v: CheckoutData[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => { const { [k as string]: _, ...rest } = e; return rest; });
  };

  // Members helpers
  const addMember = () => {
    setData((d) => {
      const next = [...d.members, { ...emptyMember(), isResponsible: false }];
      return { ...d, members: next };
    });
  };
  const removeMember = (id: string) => {
    setData((d) => {
      const filtered = d.members.filter((m) => m.id !== id);
      // ensure 1 responsible
      if (filtered.length === 1) filtered[0].isResponsible = true;
      else if (!filtered.some((m) => m.isResponsible) && filtered[0]) filtered[0].isResponsible = true;
      return { ...d, members: filtered };
    });
  };
  const updateMember = (id: string, patch: Partial<CheckoutData["members"][number]>) => {
    setData((d) => ({ ...d, members: d.members.map((m) => (m.id === id ? { ...m, ...patch } : m)) }));
  };
  const setResponsible = (id: string) => {
    setData((d) => ({ ...d, members: d.members.map((m) => ({ ...m, isResponsible: m.id === id })) }));
  };

  // Auto-assign responsible if 1 member
  useEffect(() => {
    if (data.members.length === 1 && !data.members[0].isResponsible) {
      setData((d) => ({ ...d, members: [{ ...d.members[0], isResponsible: true }] }));
    }
  }, [data.members.length]);

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
        if (!m.address.trim()) e[`m${i}-address`] = "Address required";
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

  const handlePay = () => {
    toast({ title: "Order placed!", description: "Redirecting to confirmation…" });
    localStorage.removeItem(STORAGE_KEY);
    setTimeout(() => navigate("/checkout/thank-you"), 600);
  };

  const totals = computeTotals(data);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="h-16 md:h-20" />

      <header className="border-b border-border bg-gradient-to-b from-secondary/40 to-background">
        <div className="container py-8 md:py-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <Sparkles className="h-3.5 w-3.5" /> Place Your Order
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">Launch your US company in minutes</h1>
            <p className="text-muted-foreground text-base md:text-lg">Simple, guided checkout. Your progress is auto-saved.</p>
          </div>
          <div className="mt-8">
            <StepIndicator steps={STEPS} current={step} />
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
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
                  <div className="pt-6"><CheckoutSummary data={data} /></div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
              {step === 0 && <Step2 data={data} update={update} errors={errors} />}
              {step === 1 && <Step1 data={data} update={update} errors={errors} />}
              {step === 2 && <Step3 data={data} update={update} errors={errors} />}
              {step === 3 && (
                <Step4
                  data={data} errors={errors}
                  addMember={addMember} removeMember={removeMember}
                  updateMember={updateMember} setResponsible={setResponsible}
                />
              )}
              {step === 4 && (
                <Step5 data={data} update={update} showItin={showItin} isEcom={isEcom} isMarketplace={isMarketplace} />
              )}
              {step === 5 && <Step6 data={data} goTo={setStep} />}
              {step === 6 && <Step7 data={data} onPay={handlePay} />}

              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between gap-3">
                <Button variant="ghost" onClick={back} disabled={step === 0} className="rounded-xl">
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back
                </Button>
                {step < STEPS.length - 1 ? (
                  <Button onClick={next} size="lg" className="rounded-xl px-6 h-12 font-bold shadow-lg shadow-primary/20">
                    Continue <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button onClick={handlePay} size="lg" className="rounded-xl px-6 h-12 font-bold shadow-lg shadow-primary/20">
                    <Lock className="h-4 w-4 mr-2" /> Pay ${totals.total} Securely
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Desktop sticky summary */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <CheckoutSummary data={data} />
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
  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-1">Choose your package</h2>
      <p className="text-muted-foreground mb-6">Pick your state and entity type. You can change these later if needed.</p>

      <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 mb-6">
        <div className="flex items-center justify-between mb-2">
          <p className="font-bold font-display text-lg">Foundo Formation Package</p>
          <span className="text-2xl font-bold text-primary font-display">${FOUNDO_FEE}</span>
        </div>
        <ul className="text-sm text-muted-foreground space-y-1.5">
          {["State filing & Articles of Organization", "Registered Agent (1 year free)", "EIN application support", "Operating Agreement template", "Bank account intros (Mercury, Stripe)"].map((f) => (
            <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> {f}</li>
          ))}
        </ul>
      </div>

      <Field label="State of Formation" error={errors.state}>
        <Select value={data.state} onValueChange={(v) => update("state", v)}>
          <SelectTrigger className="h-12 rounded-xl"><SelectValue /></SelectTrigger>
          <SelectContent className="max-h-60">
            {STATES.map((s) => (
              <SelectItem key={s.name} value={s.name}>{s.name} — ${s.fee} state fee</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground mt-1">Selected state fee: <span className="font-semibold text-foreground">${stateFee}</span></p>
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
const Step4 = ({ data, errors, addMember, removeMember, updateMember, setResponsible }: any) => (
  <section>
    <h2 className="text-2xl font-bold font-display mb-1">Members & Directors</h2>
    <p className="text-muted-foreground mb-6">Add owners or directors of your company. You can add more later.</p>

    <div className="space-y-4">
      {data.members.map((m: any, i: number) => (
        <div key={m.id} className="rounded-xl border border-border p-4 md:p-5 bg-secondary/20">
          <div className="flex items-center justify-between mb-3">
            <p className="font-bold font-display">Member {i + 1}{m.isResponsible && <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">Responsible Party</span>}</p>
            {data.members.length > 1 && (
              <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive" onClick={() => removeMember(m.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="First Name" error={errors[`m${i}-firstName`]}>
              <Input value={m.firstName} onChange={(e) => updateMember(m.id, { firstName: e.target.value })} className="h-11 rounded-xl" />
            </Field>
            <Field label="Last Name" error={errors[`m${i}-lastName`]}>
              <Input value={m.lastName} onChange={(e) => updateMember(m.id, { lastName: e.target.value })} className="h-11 rounded-xl" />
            </Field>
            <Field label="Residential Address" error={errors[`m${i}-address`]} className="md:col-span-2">
              <Input value={m.address} onChange={(e) => updateMember(m.id, { address: e.target.value })} placeholder="Street, City, Country" className="h-11 rounded-xl" />
            </Field>
            <Field label="SSN or ITIN (optional)" hint="Skip if you don't have one — we'll suggest ITIN processing." className="md:col-span-2">
              <Input value={m.ssn} onChange={(e) => updateMember(m.id, { ssn: e.target.value })} placeholder="XXX-XX-XXXX" className="h-11 rounded-xl" />
            </Field>
          </div>
          {data.members.length > 1 && (
            <label className="mt-3 flex items-center gap-2 cursor-pointer">
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

/* ---------------- Step 5: Upsells ---------------- */
const Step5 = ({ data, update, showItin, isEcom, isMarketplace }: any) => {
  const upsells = [
    showItin && {
      key: "addonItin", title: "Get Your ITIN",
      tagline: "Required for US tax filing & opening Stripe / Mercury without an SSN.",
      price: ADDON_PRICES.itin, urgent: true, value: data.addonItin,
    },
    isEcom && {
      key: "addonSellerPermit", title: "Seller Permit",
      tagline: "Sell legally in the US & collect sales tax in your state.",
      price: ADDON_PRICES.sellerPermit, value: data.addonSellerPermit,
    },
    isMarketplace && {
      key: "addonPremiumAddress", title: "Premium Address (Unique Suite #)",
      tagline: "Required by Amazon, Walmart & eBay to verify your seller account.",
      price: ADDON_PRICES.premiumAddress, value: data.addonPremiumAddress,
    },
  ].filter(Boolean) as any[];

  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-1">Recommended add-ons</h2>
      <p className="text-muted-foreground mb-6">Hand-picked based on your answers. Add only what you need.</p>

      {upsells.length === 0 ? (
        <div className="rounded-xl border border-border bg-secondary/30 p-6 text-center">
          <ShieldCheck className="h-8 w-8 text-success mx-auto mb-2" />
          <p className="font-semibold">You're all set — no add-ons needed.</p>
          <p className="text-sm text-muted-foreground mt-1">Continue to review your order.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {upsells.map((u) => (
            <div key={u.key} className={cn("rounded-xl border-2 p-4 md:p-5 transition-all", u.value ? "border-primary bg-primary/5" : "border-border")}>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-bold font-display">{u.title}</p>
                    {u.urgent && <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-warning/15 text-warning font-bold">Most Important</span>}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{u.tagline}</p>
                  <p className="text-sm font-bold text-primary mt-2">+ ${u.price}</p>
                </div>
                <Switch checked={u.value} onCheckedChange={(v) => update(u.key, v)} />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

/* ---------------- Step 6: Review ---------------- */
const Step6 = ({ data, goTo }: any) => {
  const t = computeTotals(data);
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
  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-1">Review your order</h2>
      <p className="text-muted-foreground mb-6">Double-check everything before payment.</p>
      <div className="space-y-3">
        {sec("Contact", 1, (
          <p className="text-sm text-muted-foreground">{data.firstName} {data.lastName} · {data.email} · {data.countryCode} {data.phone}</p>
        ))}
        {sec("Package", 0, (
          <p className="text-sm text-muted-foreground">{data.companyType} in {data.state}</p>
        ))}
        {sec("Business", 2, (
          <div className="text-sm text-muted-foreground space-y-1">
            <p><span className="text-foreground font-medium">{data.businessName}</span>{data.website && ` · ${data.website}`}</p>
            <p>{data.industry}</p>
            <p className="line-clamp-2">{data.description}</p>
          </div>
        ))}
        {sec("Members", 3, (
          <ul className="text-sm text-muted-foreground space-y-1">
            {data.members.map((m: any) => (
              <li key={m.id}>
                {m.firstName} {m.lastName}{m.isResponsible && <span className="ml-2 text-xs text-primary font-semibold">(Responsible Party)</span>}
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

/* ---------------- Step 7: Payment ---------------- */
const Step7 = ({ data, onPay }: any) => {
  const t = computeTotals(data);
  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-1">Secure Payment</h2>
      <p className="text-muted-foreground mb-6">Powered by Stripe. Your details are encrypted end-to-end.</p>

      <div className="rounded-xl border border-border p-5 bg-secondary/20 mb-5">
        <div className="flex items-center justify-between mb-4">
          <p className="font-bold font-display">Order Total</p>
          <p className="text-2xl font-bold text-primary font-display">${t.total}</p>
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
