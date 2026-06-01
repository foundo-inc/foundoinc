import { createStore, get, set, del, UseStore } from "idb-keyval";
import type { CheckoutData } from "@/lib/checkout-data";

const receiptStore: UseStore = createStore("foundo-receipts", "receipts");
const LAST_KEY = "last";
const HISTORY_KEY = "history";

export interface Receipt {
  orderNumber: string;
  createdAt: string; // ISO
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  business: {
    name: string;
    state: string;
    companyType: string;
    industry: string;
  };
  pricing: {
    foundoFee: number;
    stateFee: number;
    addons: number;
    subtotal: number;
    discount: number;
    total: number;
    couponCode?: string | null;
  };
  payment: {
    brand?: string;
    last4?: string;
    tokenId?: string;
  };
}

export async function saveReceipt(r: Receipt): Promise<void> {
  await set(LAST_KEY, r, receiptStore);
  const history = ((await get<Receipt[]>(HISTORY_KEY, receiptStore)) ?? []);
  history.unshift(r);
  await set(HISTORY_KEY, history.slice(0, 20), receiptStore);
}

export async function getLastReceipt(): Promise<Receipt | null> {
  return (await get<Receipt>(LAST_KEY, receiptStore)) ?? null;
}

export async function getReceiptByOrder(orderNumber: string): Promise<Receipt | null> {
  const history = ((await get<Receipt[]>(HISTORY_KEY, receiptStore)) ?? []);
  return history.find((r) => r.orderNumber === orderNumber) ?? null;
}

export async function listReceipts(): Promise<Receipt[]> {
  return ((await get<Receipt[]>(HISTORY_KEY, receiptStore)) ?? []);
}

export async function deleteReceipt(orderNumber: string): Promise<void> {
  const history = ((await get<Receipt[]>(HISTORY_KEY, receiptStore)) ?? []);
  await set(HISTORY_KEY, history.filter((r) => r.orderNumber !== orderNumber), receiptStore);
  const last = await get<Receipt>(LAST_KEY, receiptStore);
  if (last?.orderNumber === orderNumber) await del(LAST_KEY, receiptStore);
}

export async function clearAllReceipts(): Promise<void> {
  await del(LAST_KEY, receiptStore);
  await del(HISTORY_KEY, receiptStore);
}

export async function clearLastReceipt(): Promise<void> {
  await del(LAST_KEY, receiptStore);
}

/** Build a Receipt from checkout state + totals + payment token info. */
export function buildReceipt(args: {
  orderNumber: string;
  data: CheckoutData;
  totals: { foundoFee?: number; stateFee: number; addons: number; subtotal: number; discount: number; total: number };
  couponCode?: string | null;
  payment: { brand?: string; last4?: string; tokenId?: string };
  foundoFee: number;
}): Receipt {
  return {
    orderNumber: args.orderNumber,
    createdAt: new Date().toISOString(),
    customer: {
      firstName: args.data.firstName,
      lastName: args.data.lastName,
      email: args.data.email,
      phone: `${args.data.countryCode} ${args.data.phone}`.trim(),
    },
    business: {
      name: args.data.businessName,
      state: args.data.state,
      companyType: args.data.companyType,
      industry: args.data.industry,
    },
    pricing: {
      foundoFee: args.foundoFee,
      stateFee: args.totals.stateFee,
      addons: args.totals.addons,
      subtotal: args.totals.subtotal,
      discount: args.totals.discount,
      total: args.totals.total,
      couponCode: args.couponCode ?? null,
    },
    payment: args.payment,
  };
}

/** Render a printable HTML receipt and trigger a download. */
export function downloadReceiptHtml(r: Receipt): void {
  const fmt = (n: number) => `$${n.toLocaleString()}`;
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8" />
<title>Receipt ${r.orderNumber}</title>
<style>
  *{box-sizing:border-box} body{font-family:-apple-system,Segoe UI,Inter,sans-serif;color:#0f172a;margin:0;padding:40px;background:#f8fafc}
  .card{max-width:680px;margin:0 auto;background:#fff;border:1px solid #e2e8f0;border-radius:16px;padding:32px}
  h1{font-size:22px;margin:0 0 4px} .muted{color:#64748b;font-size:13px}
  .row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed #e2e8f0;font-size:14px}
  .row:last-child{border:0} .total{font-weight:700;font-size:18px;color:#0436E3}
  .head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:24px}
  .pill{display:inline-block;background:#eff4ff;color:#0436E3;font-weight:600;font-size:12px;padding:4px 10px;border-radius:999px}
  h2{font-size:14px;text-transform:uppercase;letter-spacing:.05em;color:#64748b;margin:24px 0 8px}
  @media print{body{background:#fff;padding:0}.card{border:0}}
</style></head><body>
<div class="card">
  <div class="head">
    <div>
      <h1>Foundo · Receipt</h1>
      <p class="muted">Order ${r.orderNumber} · ${new Date(r.createdAt).toLocaleString()}</p>
    </div>
    <span class="pill">PAID</span>
  </div>
  <h2>Customer</h2>
  <div class="row"><span>Name</span><span>${r.customer.firstName} ${r.customer.lastName}</span></div>
  <div class="row"><span>Email</span><span>${r.customer.email}</span></div>
  <div class="row"><span>Phone</span><span>${r.customer.phone}</span></div>
  <h2>Business</h2>
  <div class="row"><span>Business name</span><span>${r.business.name}</span></div>
  <div class="row"><span>Entity</span><span>${r.business.companyType}</span></div>
  <div class="row"><span>State</span><span>${r.business.state}</span></div>
  <div class="row"><span>Industry</span><span>${r.business.industry || "—"}</span></div>
  <h2>Pricing</h2>
  <div class="row"><span>Foundo fee</span><span>${fmt(r.pricing.foundoFee)}</span></div>
  <div class="row"><span>State fee</span><span>${fmt(r.pricing.stateFee)}</span></div>
  <div class="row"><span>Add-ons</span><span>${fmt(r.pricing.addons)}</span></div>
  ${r.pricing.discount > 0 ? `<div class="row"><span>Discount${r.pricing.couponCode ? ` (${r.pricing.couponCode})` : ""}</span><span>−${fmt(r.pricing.discount)}</span></div>` : ""}
  <div class="row total"><span>Total</span><span>${fmt(r.pricing.total)}</span></div>
  <h2>Payment</h2>
  <div class="row"><span>Card</span><span>${r.payment.brand ? r.payment.brand.toUpperCase() : "Card"} •••• ${r.payment.last4 ?? ""}</span></div>
  ${r.payment.tokenId ? `<div class="row"><span>Token</span><span style="font-family:monospace;font-size:12px">${r.payment.tokenId}</span></div>` : ""}
  <p class="muted" style="margin-top:24px">Thank you for choosing Foundo. Keep this receipt for your records.</p>
</div>
</body></html>`;
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `foundo-receipt-${r.orderNumber}.html`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
