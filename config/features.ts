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
    description: "Fast checkout, discounts, tax handling, returns and flexible payment lines.",
    icon: ReceiptText,
    bullets: ["Basket building", "Saved drafts", "Receipt handling"]
  },
  {
    title: "Inventory",
    description: "Track products, suppliers, stock movements and purchase orders in one place.",
    icon: Warehouse,
    bullets: ["Stock control", "Barcode lookup", "Transfers"]
  },
  {
    title: "Finance",
    description: "Keep sales, expenses and customer balances connected to real business activity.",
    icon: Calculator,
    bullets: ["Summaries", "Collections", "Balances"]
  },
  {
    title: "Team management",
    description: "Give owners, managers and staff only the access they need.",
    icon: ShieldCheck,
    bullets: ["Roles", "Permissions", "Branches"]
  },
  {
    title: "Reporting",
    description: "See performance snapshots without leaving your daily workflow.",
    icon: Layers3,
    bullets: ["Sales trends", "Low stock", "Business insights"]
  },
  {
    title: "Offline sync",
    description: "Keep working when connectivity drops and sync changes when it returns.",
    icon: Barcode,
    bullets: ["Local queue", "Cloud sync", "Conflict-aware flow"]
  }
] as const;

export const featureCategories = [
  {
    label: "Sell",
    title: "Point of sale built for busy counters.",
    description:
      "Move quickly through checkout while keeping pricing, discounts and receipts under control.",
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
    label: "Manage",
    title: "Inventory and product operations in one system.",
    description:
      "Organize products, categories, suppliers and stock movements with fewer manual steps.",
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
    label: "Track",
    title: "Finance that stays close to your sales reality.",
    description:
      "Monitor expenses, collections and balances without stitching together separate tools.",
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
    title: "Access control that scales with your team.",
    description:
      "Operate across branches and assign permissions that match how your business runs.",
    items: [
      "Employees and roles",
      "Branch management",
      "Business access",
      "Audit-friendly workflows",
      "Owner and manager views",
      "Secure everyday operations"
    ]
  },
  {
    label: "Understand",
    title: "Clear reporting for better decisions.",
    description:
      "See business performance with concise reports that are easy to understand at a glance.",
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
    title: "Offline-first architecture that keeps work moving.",
    description:
      "BizPro records core actions locally, queues sync operations and updates the cloud when the connection returns.",
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

