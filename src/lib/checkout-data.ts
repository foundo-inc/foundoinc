const ALL_STATES = [
  { name: "Alabama", fee: 236 }, { name: "Alaska", fee: 250 }, { name: "Arizona", fee: 85 },
  { name: "Arkansas", fee: 45 }, { name: "California", fee: 70 }, { name: "Colorado", fee: 50 },
  { name: "Connecticut", fee: 120 }, { name: "Delaware", fee: 160 }, { name: "District of Columbia", fee: 99 },
  { name: "Florida", fee: 125 }, { name: "Georgia", fee: 105 }, { name: "Hawaii", fee: 51 },
  { name: "Idaho", fee: 103 }, { name: "Illinois", fee: 153 }, { name: "Indiana", fee: 97 },
  { name: "Iowa", fee: 50 }, { name: "Kansas", fee: 166 }, { name: "Kentucky", fee: 40 },
  { name: "Louisiana", fee: 105 }, { name: "Maine", fee: 178 }, { name: "Maryland", fee: 155 },
  { name: "Massachusetts", fee: 520 }, { name: "Michigan", fee: 50 }, { name: "Minnesota", fee: 155 },
  { name: "Mississippi", fee: 53 }, { name: "Missouri", fee: 51 }, { name: "Montana", fee: 35 },
  { name: "Nebraska", fee: 103 }, { name: "Nevada", fee: 436 }, { name: "New Hampshire", fee: 102 },
  { name: "New Jersey", fee: 129 }, { name: "New Mexico", fee: 51 }, { name: "New York", fee: 205 },
  { name: "North Carolina", fee: 128 }, { name: "North Dakota", fee: 135 }, { name: "Ohio", fee: 99 },
  { name: "Oklahoma", fee: 104 }, { name: "Oregon", fee: 100 }, { name: "Pennsylvania", fee: 125 },
  { name: "Rhode Island", fee: 156 }, { name: "South Carolina", fee: 125 }, { name: "South Dakota", fee: 150 },
  { name: "Tennessee", fee: 307 }, { name: "Texas", fee: 300 }, { name: "Utah", fee: 59 },
  { name: "Vermont", fee: 155 }, { name: "Virginia", fee: 100 }, { name: "Washington", fee: 200 },
  { name: "West Virginia", fee: 130 }, { name: "Wisconsin", fee: 130 }, { name: "Wyoming", fee: 104 },
];

export const POPULAR_STATE_NAMES = ["Wyoming", "Delaware", "New Mexico", "Montana"];

const popular = POPULAR_STATE_NAMES
  .map((n) => ALL_STATES.find((s) => s.name === n)!)
  .filter(Boolean);
const rest = ALL_STATES
  .filter((s) => !POPULAR_STATE_NAMES.includes(s.name))
  .sort((a, b) => a.name.localeCompare(b.name));

export const STATES = [...popular, ...rest];

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
  // Ecommerce & Retail
  "Ecommerce — Own Store (Shopify, WooCommerce, BigCommerce)",
  "Ecommerce — Marketplace (Amazon, Walmart, eBay, Etsy)",
  "Dropshipping",
  "Print on Demand",
  "Wholesale / B2B Trading",
  "Import / Export",
  "Retail — Brick & Mortar",
  // Tech & software
  "SaaS / Software",
  "Mobile App / Web App",
  "AI / Machine Learning",
  "Web3 / Crypto / Blockchain",
  "Cybersecurity",
  "IT Services / DevOps",
  "Hardware / IoT",
  // Services
  "Consulting / Agency",
  "Marketing / Advertising Agency",
  "Digital Marketing / SEO",
  "Freelancing / Professional Services",
  "Legal Services",
  "Accounting / Bookkeeping",
  "HR / Recruiting",
  "Translation / Localization",
  // Creator economy
  "Content Creation / Influencer",
  "Media / Publishing",
  "Photography / Videography",
  "Music / Entertainment",
  "Gaming / Esports",
  "Podcasting",
  // Finance & real estate
  "Real Estate / Property Management",
  "Trading / Investments",
  "Fintech / Payments",
  "Insurance",
  "Lending / Credit",
  // Education
  "Education / Online Courses",
  "Coaching / Mentoring",
  "EdTech",
  "Tutoring",
  // Health & wellness
  "Health & Wellness",
  "Beauty & Cosmetics",
  "Fitness / Sports",
  "Telemedicine / Healthcare",
  "Mental Health",
  "Pharmaceuticals / Supplements",
  // Lifestyle
  "Food & Beverage",
  "Restaurant / Catering",
  "Travel & Hospitality",
  "Fashion / Apparel",
  "Jewelry & Accessories",
  "Home & Lifestyle",
  "Pet Products / Services",
  // Industry & operations
  "Manufacturing",
  "Construction",
  "Logistics / Shipping",
  "Automotive",
  "Energy / Sustainability",
  "Agriculture",
  "Events / Weddings",
  "Non-Profit / Charity",
  "Other",
];

export const MARKETPLACE_KEYWORDS = ["Marketplace", "Amazon", "Walmart", "eBay", "Etsy"];

export const COUNTRIES = [
  "United States", "United Kingdom", "Canada", "Australia", "India", "Pakistan",
  "Bangladesh", "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain",
  "Oman", "Egypt", "Turkey", "Germany", "France", "Spain", "Italy", "Netherlands",
  "Belgium", "Switzerland", "Sweden", "Norway", "Denmark", "Finland", "Ireland",
  "Portugal", "Poland", "Romania", "Greece", "Czech Republic", "Austria",
  "Singapore", "Malaysia", "Indonesia", "Philippines", "Thailand", "Vietnam",
  "Japan", "South Korea", "China", "Hong Kong", "Taiwan", "New Zealand",
  "South Africa", "Nigeria", "Kenya", "Ghana", "Morocco",
  "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Peru",
  "Russia", "Ukraine", "Israel", "Other",
];

export type CompanyType = "LLC" | "C-Corp";

export type IdDocType = "passport" | "national_id";

export interface UploadedFile {
  name: string;
  size: number;
  type: string;
}

export interface Member {
  id: string;
  firstName: string;
  lastName: string;
  // Residential address
  street: string;
  city: string;
  stateProvince: string;
  country: string;
  zip: string;
  ssn: string;
  isResponsible: boolean;
  // ID document
  idType: IdDocType;
  idFile: UploadedFile | null;
}

export interface CheckoutData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  state: string;
  companyType: CompanyType;
  businessName: string;
  website: string;
  industry: string;
  description: string;
  members: Member[];
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
  street: "",
  city: "",
  stateProvince: "",
  country: "",
  zip: "",
  ssn: "",
  isResponsible: true,
  idType: "passport",
  idFile: null,
});

export const initialData: CheckoutData = {
  firstName: "", lastName: "", email: "", countryCode: "+1", phone: "",
  state: "", companyType: "LLC",
  businessName: "", website: "", industry: "", description: "",
  members: [emptyMember()],
  addonItin: false, addonSellerPermit: false, addonPremiumAddress: false,
};

/* ---------------- Coupons ---------------- */
export interface Coupon {
  code: string;
  type: "percent" | "fixed";
  value: number; // percent (0-100) or fixed USD
  label: string;
}

export const COUPONS: Coupon[] = [
  { code: "FOUNDO20", type: "percent", value: 20, label: "20% off Foundo fee" },
  { code: "WELCOME50", type: "fixed", value: 50, label: "$50 off your order" },
  { code: "LAUNCH100", type: "fixed", value: 100, label: "$100 off your order" },
];

export const findCoupon = (code: string): Coupon | null => {
  const c = code.trim().toUpperCase();
  return COUPONS.find((x) => x.code === c) ?? null;
};
