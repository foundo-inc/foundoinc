// Mock data for the client dashboard
export const company = {
  name: "Acme Ventures LLC",
  state: "Wyoming",
  ein: "98-7654321",
  formationDate: "Mar 14, 2024",
  status: "Active",
  registeredAgent: "Foundo Registered Agents Inc.",
  fiscalYearEnd: "Dec 31",
  members: 1,
};

export const documents = [
  { name: "Articles of Organization", type: "PDF", size: "248 KB", date: "Mar 14, 2024", category: "Formation" },
  { name: "EIN Confirmation Letter (CP575)", type: "PDF", size: "112 KB", date: "Mar 21, 2024", category: "IRS" },
  { name: "Operating Agreement", type: "PDF", size: "486 KB", date: "Mar 14, 2024", category: "Legal" },
  { name: "Certificate of Good Standing", type: "PDF", size: "98 KB", date: "Jan 08, 2025", category: "Compliance" },
  { name: "BOI Report Confirmation", type: "PDF", size: "76 KB", date: "Apr 02, 2024", category: "Compliance" },
  { name: "Form W-9 (signed)", type: "PDF", size: "54 KB", date: "Mar 25, 2024", category: "Tax" },
];

export type FilingStatus = "completed" | "in_progress" | "upcoming" | "overdue";
export const filings: { name: string; due: string; status: FilingStatus; description: string }[] = [
  { name: "BOI Report (FinCEN)", due: "Apr 02, 2024", status: "completed", description: "Beneficial ownership info filed with FinCEN." },
  { name: "Wyoming Annual Report", due: "Mar 01, 2025", status: "completed", description: "$60 state fee paid." },
  { name: "Federal Tax Return (1120/5472)", due: "Apr 15, 2025", status: "in_progress", description: "We're preparing your filing — no action needed." },
  { name: "Wyoming Annual Report 2026", due: "Mar 01, 2026", status: "upcoming", description: "Reminder will be sent 60 days before due date." },
];

export type AppStatus = "approved" | "in_review" | "action_needed" | "available";
export const banking: { name: string; status: AppStatus; lastUpdate: string; logo?: string; description: string }[] = [
  { name: "Mercury Bank", status: "approved", lastUpdate: "Mar 28, 2024", description: "Account live • Debit card shipped." },
  { name: "Stripe Atlas Payouts", status: "approved", lastUpdate: "Apr 04, 2024", description: "Connected to Mercury • Payouts active." },
  { name: "Airwallex", status: "in_review", lastUpdate: "Apr 18, 2025", description: "Compliance team reviewing documents." },
  { name: "Payoneer", status: "action_needed", lastUpdate: "Apr 20, 2025", description: "Upload proof of business address." },
  { name: "Wise Business", status: "available", lastUpdate: "—", description: "Apply through Foundo for fast-track review." },
];

export const messages = [
  { from: "Sara — Foundo Specialist", text: "Your Wyoming annual report has been filed successfully ✅", time: "2h ago", avatar: "S" },
  { from: "Foundo Compliance Bot", text: "Reminder: Federal tax filing deadline in 21 days.", time: "1d ago", avatar: "F" },
  { from: "Sara — Foundo Specialist", text: "Mercury approved your account! Card is on the way 🎉", time: "3d ago", avatar: "S" },
];
