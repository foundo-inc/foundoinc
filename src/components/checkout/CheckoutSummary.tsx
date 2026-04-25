import { CheckoutData, FOUNDO_FEE, STATES, ADDON_PRICES } from "@/lib/checkout-data";
import { Shield, Lock, CheckCircle2 } from "lucide-react";

interface Props {
  data: CheckoutData;
}

export const computeTotals = (data: CheckoutData) => {
  const stateFee = STATES.find((s) => s.name === data.state)?.fee ?? 0;
  const itin = data.addonItin ? ADDON_PRICES.itin : 0;
  const sellerPermit = data.addonSellerPermit ? ADDON_PRICES.sellerPermit : 0;
  const premiumAddress = data.addonPremiumAddress ? ADDON_PRICES.premiumAddress : 0;
  const addons = itin + sellerPermit + premiumAddress;
  const total = FOUNDO_FEE + stateFee + addons;
  return { stateFee, itin, sellerPermit, premiumAddress, addons, total };
};

const CheckoutSummary = ({ data }: Props) => {
  const t = computeTotals(data);
  return (
    <div className="rounded-2xl border border-border bg-card p-5 md:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold font-display">Order Summary</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">
          {data.companyType}
        </span>
      </div>

      <div className="space-y-3 text-sm">
        <Row label={`Foundo ${data.companyType} Formation`} value={`$${FOUNDO_FEE}`} sub="Filing, Registered Agent (1yr), EIN" />
        <Row label={`${data.state} State Fee`} value={`$${t.stateFee}`} />

        {(t.itin || t.sellerPermit || t.premiumAddress) ? (
          <div className="pt-2 border-t border-border space-y-2">
            <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">Add-ons</p>
            {t.itin > 0 && <Row label="ITIN Processing" value={`$${t.itin}`} />}
            {t.sellerPermit > 0 && <Row label="Seller Permit" value={`$${t.sellerPermit}`} />}
            {t.premiumAddress > 0 && <Row label="Premium Address" value={`$${t.premiumAddress}`} />}
          </div>
        ) : null}
      </div>

      <div className="mt-5 pt-4 border-t border-border flex items-end justify-between">
        <div>
          <p className="text-xs text-muted-foreground font-medium">Total</p>
          <p className="text-3xl font-bold text-primary font-display">${t.total}</p>
        </div>
        <span className="text-xs text-muted-foreground">USD</span>
      </div>

      <div className="mt-5 space-y-2">
        <Trust icon={Shield} text="100% Secure Checkout" />
        <Trust icon={Lock} text="Encrypted with SSL" />
        <Trust icon={CheckCircle2} text="Money-back assurance" />
      </div>
    </div>
  );
};

const Row = ({ label, value, sub }: { label: string; value: string; sub?: string }) => (
  <div className="flex items-start justify-between gap-3">
    <div className="min-w-0">
      <p className="text-foreground font-medium">{label}</p>
      {sub && <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>}
    </div>
    <p className="font-semibold text-foreground whitespace-nowrap">{value}</p>
  </div>
);

const Trust = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className="flex items-center gap-2 text-xs text-muted-foreground">
    <Icon className="h-3.5 w-3.5 text-success" /> {text}
  </div>
);

export default CheckoutSummary;
