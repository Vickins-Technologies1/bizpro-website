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
    title: "Sell faster. Keep stock tight.",
    workflow: ["Products", "Sales", "Inventory", "Customers"],
    primaryAction: "Move products with control",
    bullets: ["POS", "Stock control", "Low stock", "Branches"]
  },
  food: {
    title: "Move quickly at the counter.",
    workflow: ["Menu", "Orders", "Kitchen", "Tables", "Payments"],
    primaryAction: "Keep service moving",
    bullets: ["Ordering", "Sales", "Staff access", "Daily summaries"]
  },
  beauty: {
    title: "Services, products and repeat visits.",
    workflow: ["Services", "Appointments", "Specialists", "Clients", "Payments"],
    primaryAction: "Keep client work together",
    bullets: ["Customer history", "Sales", "Team permissions", "Reports"]
  },
  hospitality: {
    title: "Reliable operations all day.",
    workflow: ["Rooms", "Reservations", "Guests", "Stays", "Charges"],
    primaryAction: "Keep stays visible",
    bullets: ["Sales visibility", "Inventory", "Branch support", "Offline work"]
  },
  healthcare: {
    title: "Structured daily operations.",
    workflow: ["Patients", "Appointments", "Visits", "Services", "Billing"],
    primaryAction: "Keep care operations organized",
    bullets: ["Products", "Stock tracking", "Access control", "Reports"]
  },
  automotive: {
    title: "Parts, service and stock together.",
    workflow: ["Vehicles", "Job cards", "Services", "Parts", "Invoices"],
    primaryAction: "Connect the job to the invoice",
    bullets: ["Parts inventory", "Purchases", "Receipts", "Summaries"]
  },
  services: {
    title: "Keep services lean and visible.",
    workflow: ["Clients", "Services", "Jobs", "Payments"],
    primaryAction: "Keep client work moving",
    bullets: ["Finance", "Employee access", "Client records", "Branches"]
  },
  professional: {
    title: "Clean control for office teams.",
    workflow: ["Clients", "Matters", "Tasks", "Time", "Billing"],
    primaryAction: "Keep work and billing aligned",
    bullets: ["Permissions", "Reporting", "Client management", "Multi-location"]
  }
} as const;
