import {
  Activity,
  BarChart3,
  Calculator,
  Layers3,
  ReceiptText,
  Users2,
  Wifi
} from "lucide-react";

export const homepageFeatureBlocks = [
  {
    title: "Run",
    description: "Daily operations and workflows in one dependable place.",
    icon: Activity,
    bullets: ["Today's activity", "Work queues", "Approvals"]
  },
  {
    title: "Sell",
    description: "Sales, transactions, payments and receipts without the clutter.",
    icon: ReceiptText,
    bullets: ["Sales flows", "Payments", "Receipts"]
  },
  {
    title: "Manage",
    description: "Customers, services, products and business records stay connected.",
    icon: Layers3,
    bullets: ["Customer records", "Service records", "Business data"]
  },
  {
    title: "Finance",
    description: "Revenue, expenses, balances and financial visibility in context.",
    icon: Calculator,
    bullets: ["Revenue visibility", "Expenses", "Balances"]
  },
  {
    title: "Operate",
    description: "Teams, branches, appointments and day-to-day work move together.",
    icon: Users2,
    bullets: ["Roles", "Branches", "Appointments"]
  },
  {
    title: "Understand",
    description: "Reports, analytics and business performance without the noise.",
    icon: BarChart3,
    bullets: ["Performance views", "Trends", "Business insights"]
  },
  {
    title: "Stay connected",
    description: "Keep working offline and sync when the connection returns.",
    icon: Wifi,
    bullets: ["Local work", "Queued sync", "Recovery"]
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
