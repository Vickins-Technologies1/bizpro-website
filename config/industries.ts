export const industryGroups = [
  {
    key: "retail",
    label: "Retail",
    summary: "Retail shops, boutiques, cosmetics, accessories, wines & spirits and hardware.",
    capabilities: ["Fast POS", "Inventory control", "Suppliers", "Branches", "Reports"]
  },
  {
    key: "food",
    label: "Food & Beverage",
    summary: "Restaurants, cafes, bakeries and bars that need quick service workflows.",
    capabilities: ["Menu POS", "Expenses", "Staff access", "Receipts", "Sales reporting"]
  },
  {
    key: "beauty",
    label: "Beauty",
    summary: "Salons and spas managing services, products and customer visits.",
    capabilities: ["Appointments support", "Product sales", "Customer records", "Team roles"]
  },
  {
    key: "hospitality",
    label: "Hospitality",
    summary: "Hotels and lodges that need everyday operating visibility.",
    capabilities: ["Sales tracking", "Inventory", "Team access", "Branch workflows"]
  },
  {
    key: "healthcare",
    label: "Healthcare",
    summary: "Clinics, pharmacies and dental practices with structured operations.",
    capabilities: ["Product lookup", "Stock control", "User permissions", "Reporting"]
  },
  {
    key: "automotive",
    label: "Automotive",
    summary: "Garages, auto parts sellers and service centers.",
    capabilities: ["Parts inventory", "Purchases", "Receipts", "Financial summaries"]
  },
  {
    key: "services",
    label: "Services",
    summary: "Consultancies, agencies and service businesses that need clarity and control.",
    capabilities: ["Team management", "Finance", "Reports", "Customer records"]
  },
  {
    key: "professional",
    label: "Professional Services",
    summary: "Law firms, accounting firms and office-based professional teams.",
    capabilities: ["Role access", "Reporting", "Customer management", "Branch support"]
  }
] as const;

export const industryDetailMap = {
  retail: {
    title: "Retail businesses that need speed at the counter.",
    bullets: ["POS and receipt flow", "Products and stock control", "Low-stock awareness", "Branch-ready operations"]
  },
  food: {
    title: "Service businesses that move quickly and need clean handoffs.",
    bullets: ["Fast ordering", "Sales and expense tracking", "Team access", "Clear daily summaries"]
  },
  beauty: {
    title: "Appointments, products and repeat visits, organized in one place.",
    bullets: ["Customer history", "Service and product sales", "Team permissions", "Compact reporting"]
  },
  hospitality: {
    title: "Flexible operations for properties that run all day.",
    bullets: ["Sales visibility", "Inventory control", "Branch support", "Reliable offline workflows"]
  },
  healthcare: {
    title: "A structured business workspace for everyday clinical operations.",
    bullets: ["Product management", "Stock tracking", "Access control", "Operational reporting"]
  },
  automotive: {
    title: "Parts and services under one operational view.",
    bullets: ["Spare parts inventory", "Purchases and suppliers", "Receipts", "Daily performance summaries"]
  },
  services: {
    title: "Keep services lean, visible and easy to manage.",
    bullets: ["Finance visibility", "Employee access", "Client records", "Branch expansion ready"]
  },
  professional: {
    title: "Professional offices need trustworthy workflows and clean controls.",
    bullets: ["Permissions", "Reporting", "Client management", "Multi-location support"]
  }
} as const;

