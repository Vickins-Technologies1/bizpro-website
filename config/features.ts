import {
  Barcode,
  Calculator,
  Layers3,
  ReceiptText,
  ShieldCheck,
  Warehouse
} from "lucide-react";

export const homepageFeatureBlocks = [
  {
    title: "Point of sale",
    description: "Fast checkout, discounts and receipts.",
    icon: ReceiptText,
    bullets: ["Basket building", "Payment lines", "Receipt handling"]
  },
  {
    title: "Inventory",
    description: "Track products, suppliers and stock movement.",
    icon: Warehouse,
    bullets: ["Stock control", "Barcode lookup", "Transfers"]
  },
  {
    title: "Finance",
    description: "Keep sales, expenses and balances in view.",
    icon: Calculator,
    bullets: ["Summaries", "Collections", "Balances"]
  },
  {
    title: "Team management",
    description: "Give each role the access it needs.",
    icon: ShieldCheck,
    bullets: ["Roles", "Permissions", "Branches"]
  },
  {
    title: "Reporting",
    description: "See performance at a glance.",
    icon: Layers3,
    bullets: ["Sales trends", "Low stock", "Insights"]
  },
  {
    title: "Offline sync",
    description: "Keep working when connectivity drops.",
    icon: Barcode,
    bullets: ["Local queue", "Reconnect sync", "Recovery"]
  }
] as const;

export const featureCategories = [
  {
    label: "Sell",
    title: "Sell quickly.",
    description: "Keep checkout fast without losing control of pricing or receipts.",
    items: [
      "Fast product search",
      "Basket building",
      "Discounts and tax",
      "Returns and corrections",
      "Multiple payment lines",
      "Receipt preview and sharing"
    ]
  },
  {
    label: "Teams",
    title: "Keep the day moving.",
    description: "Bring daily activity, receipts and operating summaries into one dependable workflow.",
    items: [
      "Daily and monthly views",
      "Sales summaries",
      "Receipt and print support",
      "Operational snapshots",
      "Audit-friendly workflows",
      "Secure everyday operations"
    ]
  },
  {
    label: "Manage",
    title: "Know what you have.",
    description: "Manage products, suppliers and stock movement from one place.",
    items: [
      "Products, brands and categories",
      "Suppliers and purchase orders",
      "Stock transfers",
      "Barcode and SKU lookup",
      "Low stock awareness",
      "Receipt and print support"
    ]
  },
  {
    label: "Finance",
    title: "Track money clearly.",
    description: "See expenses, collections and balances together.",
    items: [
      "Sales summaries",
      "Expense capture",
      "Customer balances",
      "Collections",
      "Daily and monthly views",
      "Currency-aware totals"
    ]
  },
  {
    label: "Operate",
    title: "Give people the right access.",
    description: "Assign roles and branch access with clarity.",
    items: [
      "Employees and roles",
      "Business access",
      "Audit-friendly workflows",
      "Owner and manager views",
      "Secure everyday operations",
      "Roles and permissions"
    ]
  },
  {
    label: "Branches",
    title: "Keep locations connected.",
    description: "Give owners and managers a clearer view across the business.",
    items: [
      "Branch management",
      "Branch access",
      "Owner and manager views",
      "Business access",
      "Operational snapshots",
      "Secure everyday operations"
    ]
  },
  {
    label: "Understand",
    title: "Understand performance.",
    description: "Read trends and summaries without digging.",
    items: [
      "Performance summaries",
      "Sales trends",
      "Product movement",
      "Operational snapshots",
      "Export-ready data",
      "Flexible future reporting"
    ]
  },
  {
    label: "Stay connected",
    title: "Stay connected.",
    description: "Dira OS saves locally and syncs when the connection returns.",
    items: [
      "Local persistence",
      "Queued synchronization",
      "Reconnect handling",
      "Conflict-aware updates",
      "Continued operation offline",
      "Low-friction recovery"
    ]
  }
] as const;
