export const pricingPlans = [
  {
    name: "Lite",
    note: "For small teams getting started.",
    features: ["Core POS", "Basic inventory", "Simple reporting", "Offline-first"],
    recommended: false
  },
  {
    name: "Standard",
    note: "For growing businesses.",
    features: ["POS and receipts", "Inventory", "Finance summaries", "Team permissions"],
    recommended: true
  },
  {
    name: "Pro",
    note: "For multi-location operations.",
    features: ["Branch workflows", "Advanced reporting", "Broader controls", "Priority support"],
    recommended: false
  }
] as const;
