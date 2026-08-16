export const pricingPlans = [
  {
    name: "Lite",
    note: "For small teams getting started with structured operations.",
    features: ["Core POS", "Basic inventory", "Simple reporting", "Offline-first workflow"],
    recommended: false
  },
  {
    name: "Standard",
    note: "Balanced for growing businesses that need more control.",
    features: ["POS and receipts", "Inventory and suppliers", "Finance summaries", "Team permissions"],
    recommended: true
  },
  {
    name: "Pro",
    note: "For businesses that want the fullest operational toolkit.",
    features: ["Branch workflows", "Advanced reporting", "Broader controls", "Priority support options"],
    recommended: false
  }
] as const;

