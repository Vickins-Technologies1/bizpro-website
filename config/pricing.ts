export const pricingPlans = [
  {
    name: "Starter",
    price: "KES 700/month",
    note: "Up to 2 employees.",
    features: ["Core POS", "Inventory", "Receipts", "Offline-first"],
    recommended: false
  },
  {
    name: "Growth",
    price: "KES 1,200/month",
    note: "Up to 5 employees.",
    features: ["POS and receipts", "Inventory", "Finance tracking", "Team permissions"],
    recommended: true
  },
  {
    name: "Scale",
    price: "KES 1,800/month",
    note: "Up to 8 employees.",
    features: ["Branch workflows", "Business reports", "Finance tracking", "Team management"],
    recommended: false
  },
  {
    name: "Enterprise",
    price: "KES 2,500/month",
    note: "For 10+ employees.",
    features: ["Multi-branch visibility", "Advanced reporting", "Role-based access", "Business notifications"],
    recommended: false
  }
] as const;
