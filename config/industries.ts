export const industryGroups = [
  {
    key: "retail",
    label: "Retail",
    summary: "Shops and product-led businesses that need a connected view of customers, sales and stock.",
    capabilities: ["Sales workflows", "Stock visibility", "Suppliers", "Branches", "Insights"]
  },
  {
    key: "food",
    label: "Food & Beverage",
    summary: "Restaurants, cafes, bakeries and bars that need quick service and team workflows.",
    capabilities: ["Orders", "Expenses", "Staff access", "Payments", "Daily insights"]
  },
  {
    key: "beauty",
    label: "Beauty",
    summary: "Salons and spas managing services, specialists, appointments and repeat visits.",
    capabilities: ["Appointments", "Service records", "Customer history", "Team roles"]
  },
  {
    key: "hospitality",
    label: "Hospitality",
    summary: "Hotels and lodges that need reservations, stays, charges and everyday visibility.",
    capabilities: ["Reservations", "Rooms and stays", "Team access", "Branch workflows"]
  },
  {
    key: "healthcare",
    label: "Healthcare",
    summary: "Clinics and healthcare teams with structured appointments, visits and billing workflows.",
    capabilities: ["Appointments", "Visits and services", "Access control", "Reporting"]
  },
  {
    key: "automotive",
    label: "Automotive",
    summary: "Garages and service centers connecting vehicles, job cards, parts and invoices.",
    capabilities: ["Job cards", "Parts visibility", "Service records", "Invoices"]
  },
  {
    key: "services",
    label: "Services",
    summary: "Consultancies, agencies and service businesses that need clarity across client work.",
    capabilities: ["Client work", "Team management", "Finance", "Customer records"]
  },
  {
    key: "professional",
    label: "Professional Services",
    summary: "Law, accounting and office-based teams connecting matters, tasks, time and billing.",
    capabilities: ["Matters and tasks", "Role access", "Time and billing", "Client management"]
  }
] as const;

export const industryDetailMap = {
  retail: {
    title: "Keep product-led work visible.",
    workflow: ["Customers", "Sales", "Stock", "Insights"],
    primaryAction: "Connect the daily picture",
    bullets: ["Sales workflows", "Stock visibility", "Customer history", "Branches"]
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
