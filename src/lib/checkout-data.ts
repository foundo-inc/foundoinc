export const STATES = [
  { name: "Alabama", fee: 200 }, { name: "Alaska", fee: 250 }, { name: "Arizona", fee: 50 },
  { name: "Arkansas", fee: 45 }, { name: "California", fee: 70 }, { name: "Colorado", fee: 50 },
  { name: "Connecticut", fee: 120 }, { name: "Delaware", fee: 90 }, { name: "Florida", fee: 125 },
  { name: "Georgia", fee: 100 }, { name: "Hawaii", fee: 50 }, { name: "Idaho", fee: 100 },
  { name: "Illinois", fee: 150 }, { name: "Indiana", fee: 95 }, { name: "Iowa", fee: 50 },
  { name: "Kansas", fee: 160 }, { name: "Kentucky", fee: 40 }, { name: "Louisiana", fee: 100 },
  { name: "Maine", fee: 175 }, { name: "Maryland", fee: 100 }, { name: "Massachusetts", fee: 500 },
  { name: "Michigan", fee: 50 }, { name: "Minnesota", fee: 155 }, { name: "Mississippi", fee: 50 },
  { name: "Missouri", fee: 50 }, { name: "Montana", fee: 70 }, { name: "Nebraska", fee: 100 },
  { name: "Nevada", fee: 75 }, { name: "New Hampshire", fee: 100 }, { name: "New Jersey", fee: 125 },
  { name: "New Mexico", fee: 50 }, { name: "New York", fee: 200 }, { name: "North Carolina", fee: 125 },
  { name: "North Dakota", fee: 135 }, { name: "Ohio", fee: 99 }, { name: "Oklahoma", fee: 100 },
  { name: "Oregon", fee: 100 }, { name: "Pennsylvania", fee: 125 }, { name: "Rhode Island", fee: 150 },
  { name: "South Carolina", fee: 110 }, { name: "South Dakota", fee: 150 }, { name: "Tennessee", fee: 300 },
  { name: "Texas", fee: 300 }, { name: "Utah", fee: 54 }, { name: "Vermont", fee: 125 },
  { name: "Virginia", fee: 100 }, { name: "Washington", fee: 180 }, { name: "West Virginia", fee: 100 },
  { name: "Wisconsin", fee: 130 }, { name: "Wyoming", fee: 100 },
];

export const FOUNDO_FEE = 249;

export const COUNTRY_CODES = [
  { code: "+1", country: "US/Canada", flag: "🇺🇸" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+92", country: "Pakistan", flag: "🇵🇰" },
  { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+55", country: "Brazil", flag: "🇧🇷" },
  { code: "+52", country: "Mexico", flag: "🇲🇽" },
  { code: "+90", country: "Turkey", flag: "🇹🇷" },
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
  { code: "+62", country: "Indonesia", flag: "🇮🇩" },
];

export const INDUSTRIES = [
  "Ecommerce — Own Store (Shopify, WooCommerce)",
  "Ecommerce — Marketplace (Amazon, Walmart, eBay, Etsy)",
  "SaaS / Software",
  "Consulting / Agency",
  "Freelancing / Services",
  "Digital Marketing",
  "Content Creation / Influencer",
  "Dropshipping",
  "Real Estate",
  "Trading / Investments",
  "Education / Coaching",
  "Other",
];

export const MARKETPLACE_KEYWORDS = ["Marketplace", "Amazon", "Walmart", "eBay", "Etsy"];

export type CompanyType = "LLC" | "C-Corp";

export interface Member {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  ssn: string;
  isResponsible: boolean;
}

export interface CheckoutData {
  // Step 1
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  // Step 2
  state: string;
  companyType: CompanyType;
  // Step 3
  businessName: string;
  website: string;
  industry: string;
  description: string;
  // Step 4
  members: Member[];
  // Step 5
  addonItin: boolean;
  addonSellerPermit: boolean;
  addonPremiumAddress: boolean;
}

export const ADDON_PRICES = {
  itin: 199,
  sellerPermit: 149,
  premiumAddress: 99,
};

export const emptyMember = (): Member => ({
  id: crypto.randomUUID(),
  firstName: "",
  lastName: "",
  address: "",
  ssn: "",
  isResponsible: true,
});

export const initialData: CheckoutData = {
  firstName: "", lastName: "", email: "", countryCode: "+1", phone: "",
  state: "Wyoming", companyType: "LLC",
  businessName: "", website: "", industry: "", description: "",
  members: [emptyMember()],
  addonItin: false, addonSellerPermit: false, addonPremiumAddress: false,
};
