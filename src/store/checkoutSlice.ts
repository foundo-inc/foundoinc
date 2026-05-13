import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CheckoutData,
  Coupon,
  Member,
  emptyMember,
  initialData,
} from "@/lib/checkout-data";

export type PaymentStatus = "idle" | "processing" | "succeeded" | "failed";

export interface CheckoutState {
  step: number;
  data: CheckoutData;
  coupon: Coupon | null;
  payment: {
    status: PaymentStatus;
    error: string | null;
    orderId: string | null;
  };
}

const initialState: CheckoutState = {
  step: 0,
  data: initialData,
  coupon: null,
  payment: { status: "idle", error: null, orderId: null },
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
    /** Patch any top-level CheckoutData field (company, personal, business, addons). */
    updateField<K extends keyof CheckoutData>(
      state: CheckoutState,
      action: PayloadAction<{ key: K; value: CheckoutData[K] }>,
    ) {
      (state.data as CheckoutData)[action.payload.key] = action.payload.value;
    },
    /** Bulk patch for grouped sections. */
    patchData(state, action: PayloadAction<Partial<CheckoutData>>) {
      state.data = { ...state.data, ...action.payload };
    },

    // ---- Members ----
    addMember(state) {
      state.data.members.push({ ...emptyMember(), isResponsible: false });
    },
    removeMember(state, action: PayloadAction<string>) {
      state.data.members = state.data.members.filter((m) => m.id !== action.payload);
      if (state.data.members.length === 1) {
        state.data.members[0].isResponsible = true;
      } else if (
        state.data.members.length > 0 &&
        !state.data.members.some((m) => m.isResponsible)
      ) {
        state.data.members[0].isResponsible = true;
      }
    },
    updateMember(
      state,
      action: PayloadAction<{ id: string; patch: Partial<Member> }>,
    ) {
      const { id, patch } = action.payload;
      state.data.members = state.data.members.map((m) =>
        m.id === id ? { ...m, ...patch } : m,
      );
    },
    setResponsible(state, action: PayloadAction<string>) {
      state.data.members = state.data.members.map((m) => ({
        ...m,
        isResponsible: m.id === action.payload,
      }));
    },

    // ---- Coupon ----
    setCoupon(state, action: PayloadAction<Coupon | null>) {
      state.coupon = action.payload;
    },

    // ---- Payment ----
    setPaymentStatus(
      state,
      action: PayloadAction<{ status: PaymentStatus; error?: string | null; orderId?: string | null }>,
    ) {
      state.payment.status = action.payload.status;
      if (action.payload.error !== undefined) state.payment.error = action.payload.error;
      if (action.payload.orderId !== undefined) state.payment.orderId = action.payload.orderId;
    },

    // ---- Reset ----
    resetCheckout() {
      return {
        ...initialState,
        // ensure a fresh member id
        data: { ...initialData, members: [emptyMember()] },
      };
    },
  },
});

export const {
  setStep,
  updateField,
  patchData,
  addMember,
  removeMember,
  updateMember,
  setResponsible,
  setCoupon,
  setPaymentStatus,
  resetCheckout,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;

// ---- Grouped selectors ----
import type { RootState } from "./index";

export const selectCheckoutData = (s: RootState) => s.checkout.data;
export const selectStep = (s: RootState) => s.checkout.step;
export const selectCoupon = (s: RootState) => s.checkout.coupon;
export const selectPayment = (s: RootState) => s.checkout.payment;

export const selectCompany = (s: RootState) => ({
  state: s.checkout.data.state,
  companyType: s.checkout.data.companyType,
});
export const selectPersonal = (s: RootState) => ({
  firstName: s.checkout.data.firstName,
  lastName: s.checkout.data.lastName,
  email: s.checkout.data.email,
  countryCode: s.checkout.data.countryCode,
  phone: s.checkout.data.phone,
});
export const selectBusiness = (s: RootState) => ({
  businessName: s.checkout.data.businessName,
  website: s.checkout.data.website,
  industry: s.checkout.data.industry,
  description: s.checkout.data.description,
});
export const selectMembers = (s: RootState) => s.checkout.data.members;
export const selectAddons = (s: RootState) => ({
  addonItin: s.checkout.data.addonItin,
  addonSellerPermit: s.checkout.data.addonSellerPermit,
  addonPremiumAddress: s.checkout.data.addonPremiumAddress,
});
