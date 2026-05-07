export const MILESTONES = [
  { key: "received", label: "Received", desc: "Order placed" },
  { key: "filing", label: "Filing", desc: "Filed with state" },
  { key: "ein", label: "EIN", desc: "EIN being processed" },
  { key: "documents_ready", label: "Documents Ready", desc: "All docs available" },
  { key: "completed", label: "Completed", desc: "Order complete" },
] as const;

export type MilestoneKey = typeof MILESTONES[number]["key"];

export const milestoneLabel = (k: string) =>
  MILESTONES.find((m) => m.key === k)?.label ?? k;

export const milestoneIndex = (k: string) =>
  MILESTONES.findIndex((m) => m.key === k);
