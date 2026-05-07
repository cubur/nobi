export type GlossaryEntry = {
  term: string;
  aliases?: string[];
  definition: string;
  category: "supply-chain" | "pm" | "finance" | "tech";
};

export const GLOSSARY: GlossaryEntry[] = [
  // ── Supply Chain / Inventory ───────────────────────────────────────────────
  {
    term: "Days of Stock",
    aliases: ["Days on Hand"],
    definition: "How many days of inventory you have at today's sell-through rate. Formula: Inventory Units ÷ Average Daily Sales.",
    category: "supply-chain",
  },
  {
    term: "DoS",
    definition: "Days of Stock — how many days of inventory remain at current sales velocity.",
    category: "supply-chain",
  },
  {
    term: "DoH",
    definition: "Days on Hand — same as Days of Stock. Inventory Units ÷ Average Daily Sales.",
    category: "supply-chain",
  },
  {
    term: "SKU",
    definition: "Stock Keeping Unit — a unique identifier for a specific product variant (e.g. size, color). Brands often manage thousands of SKUs simultaneously.",
    category: "supply-chain",
  },
  {
    term: "MAPE",
    definition: "Mean Absolute Percentage Error — measures forecast accuracy. Formula: |Actual − Forecast| ÷ Actual × 100. Industry average for e-commerce is 25–35%; Tightly targets <15% on high-velocity SKUs.",
    category: "supply-chain",
  },
  {
    term: "WMAPE",
    definition: "Weighted MAPE — MAPE weighted by revenue or volume. More reliable than plain MAPE when SKU volumes vary widely, because it prevents low-volume SKUs from distorting the overall score.",
    category: "supply-chain",
  },
  {
    term: "MAE",
    definition: "Mean Absolute Error — average absolute difference between forecast and actual. Unlike MAPE, it doesn't blow up when actual values are near zero.",
    category: "supply-chain",
  },
  {
    term: "MOQ",
    definition: "Minimum Order Quantity — the smallest amount a supplier will accept in a single purchase order. A key constraint in replenishment planning.",
    category: "supply-chain",
  },
  {
    term: "3PL",
    definition: "Third-Party Logistics — a company that handles warehousing, pick/pack, and shipping on behalf of a brand. Common for DTC brands that don't own their own fulfillment centers.",
    category: "supply-chain",
  },
  {
    term: "WMS",
    definition: "Warehouse Management System — software controlling warehouse operations: receiving, putaway, picking, packing, shipping. Examples: ShipBob, Deposco, Manhattan.",
    category: "supply-chain",
  },
  {
    term: "OMS",
    definition: "Order Management System — software tracking orders from placement through fulfillment. Routes orders, manages returns, and syncs inventory across channels.",
    category: "supply-chain",
  },
  {
    term: "ERP",
    definition: "Enterprise Resource Planning — integrated software suite managing core business processes: finance, HR, procurement, inventory. Examples: NetSuite, SAP, Microsoft Dynamics.",
    category: "tech",
  },
  {
    term: "PLM",
    definition: "Product Lifecycle Management — software managing a product from design and sourcing through end-of-life. Common in apparel and consumer goods.",
    category: "tech",
  },
  {
    term: "S&OP",
    definition: "Sales & Operations Planning — a cross-functional monthly process that aligns demand forecasts with supply capacity, production, and financial goals.",
    category: "supply-chain",
  },
  {
    term: "Lead Time",
    definition: "Time between placing a purchase order and receiving the goods. Variance in lead time is a primary driver of safety stock requirements.",
    category: "supply-chain",
  },
  {
    term: "Safety Stock",
    definition: "Buffer inventory held above expected demand to protect against demand spikes or supply delays. The tradeoff: more safety stock = fewer stockouts but more capital tied up.",
    category: "supply-chain",
  },
  {
    term: "Backorder",
    definition: "An order for an item currently out of stock, to be fulfilled when inventory arrives. Tightly's InStock feature converts stockouts into managed backorders instead of lost sales.",
    category: "supply-chain",
  },
  {
    term: "Stockout",
    definition: "When inventory hits zero and demand cannot be met. Even one day of stockout on a high-velocity SKU can mean permanent lost revenue — the customer just buys from a competitor.",
    category: "supply-chain",
  },
  {
    term: "Fill Rate",
    definition: "Percentage of customer orders fulfilled immediately from available stock. A key service-level metric; 95%+ fill rate is a common target for DTC brands.",
    category: "supply-chain",
  },
  {
    term: "Reorder Point",
    definition: "The inventory level at which a new purchase order should be triggered. Calculated as: Lead Time Demand + Safety Stock.",
    category: "supply-chain",
  },
  {
    term: "Inventory Turnover",
    definition: "How many times inventory is sold and replaced in a period. Formula: COGS ÷ Average Inventory Value. Higher = better capital efficiency; 4–6x annually is healthy for most DTC brands.",
    category: "supply-chain",
  },
  {
    term: "Composite Score",
    definition: "Tightly's blended demand signal combining velocity score, trend score, seasonality score, and supplier reliability score to drive replenishment recommendations.",
    category: "supply-chain",
  },
  {
    term: "Replenishment",
    definition: "The process of restocking inventory when levels fall below a threshold. Can be triggered manually, by reorder point, or algorithmically (as Tightly does).",
    category: "supply-chain",
  },
  {
    term: "Bias",
    definition: "Systematic forecast error — consistently over- or under-predicting demand. Positive bias = excess inventory; negative bias = stockouts. Different from MAPE which measures magnitude, not direction.",
    category: "supply-chain",
  },
  // ── Finance / Business ─────────────────────────────────────────────────────
  {
    term: "COGS",
    definition: "Cost of Goods Sold — direct costs of producing the goods sold. Excludes operating expenses like marketing and salaries.",
    category: "finance",
  },
  {
    term: "GMROI",
    definition: "Gross Margin Return on Investment — gross profit earned per dollar of inventory invested. Formula: Gross Margin ÷ Average Inventory Cost. GMROI > 200% is generally strong.",
    category: "finance",
  },
  {
    term: "GMV",
    definition: "Gross Merchandise Value — total sales value processed through a platform before deductions. A top-line size metric, not a profitability metric.",
    category: "finance",
  },
  {
    term: "DTC",
    definition: "Direct-to-Consumer — a brand that sells directly to end customers, bypassing retailers. DTC brands own their customer relationships and data, which enables more sophisticated inventory planning.",
    category: "finance",
  },
  {
    term: "AOV",
    definition: "Average Order Value — total revenue divided by number of orders. Higher AOV generally means fewer orders to fulfill for the same revenue.",
    category: "finance",
  },
  // ── PM / Product ──────────────────────────────────────────────────────────
  {
    term: "PRD",
    definition: "Product Requirements Document — describes the purpose, features, and constraints of a product or feature. The PM's primary alignment artifact with engineering.",
    category: "pm",
  },
  {
    term: "OKR",
    definition: "Objectives and Key Results — a goal-setting framework linking qualitative objectives to 2–5 measurable outcomes. Popularized by Google; standard at most SaaS companies.",
    category: "pm",
  },
  {
    term: "KPI",
    definition: "Key Performance Indicator — a measurable value tracking progress toward a business goal. Good KPIs are specific, measurable, and directly connected to a business outcome.",
    category: "pm",
  },
  {
    term: "NPS",
    definition: "Net Promoter Score — measures loyalty by asking 'How likely are you to recommend us?' (0–10). Promoters (9–10) minus Detractors (0–6). Widely used but criticized as a lagging indicator.",
    category: "pm",
  },
  {
    term: "JTBD",
    definition: "Jobs to Be Done — a framework explaining customer behavior in terms of the 'job' they hire a product to accomplish. Focuses on motivation and context, not demographics.",
    category: "pm",
  },
  {
    term: "ICE",
    definition: "Impact × Confidence ÷ Effort — a scoring framework for prioritizing features. Quick to apply; useful for early-stage prioritization before you have enough data for more rigorous methods.",
    category: "pm",
  },
  {
    term: "MVP",
    definition: "Minimum Viable Product — the simplest version that delivers enough value to test with real users and generate learning. Not a half-finished product; a complete solution to a narrow problem.",
    category: "pm",
  },
  {
    term: "MRR",
    definition: "Monthly Recurring Revenue — predictable monthly revenue from active subscriptions. The primary growth metric for SaaS companies.",
    category: "finance",
  },
  {
    term: "ARR",
    definition: "Annual Recurring Revenue — MRR × 12. Used for company valuation and growth rate benchmarking.",
    category: "finance",
  },
  {
    term: "Churn",
    definition: "The rate at which customers cancel or don't renew. Logo churn = % of customers lost; revenue churn = % of ARR lost. High churn destroys compounding growth.",
    category: "pm",
  },
  {
    term: "GTM",
    definition: "Go-to-Market — the strategy for how a product reaches its target customers, including positioning, pricing, sales motion, and channels.",
    category: "pm",
  },
  {
    term: "TAM",
    definition: "Total Addressable Market — the total revenue opportunity if you captured 100% of the target market with no competition.",
    category: "pm",
  },
  {
    term: "CAC",
    definition: "Customer Acquisition Cost — total sales and marketing spend divided by number of new customers acquired. Healthy SaaS: CAC payback period < 12 months.",
    category: "pm",
  },
  {
    term: "LTV",
    aliases: ["CLV"],
    definition: "Lifetime Value (or Customer Lifetime Value) — total revenue expected from a customer over their relationship. LTV:CAC ratio > 3:1 is a common SaaS benchmark.",
    category: "finance",
  },
  {
    term: "PO Acceptance Rate",
    definition: "Percentage of Tightly-generated PO suggestions approved by buyers without modification. A primary trust and product-quality metric for Tightly.",
    category: "supply-chain",
  },
  {
    term: "Stockout Rate",
    definition: "Percentage of SKUs (or revenue-weighted SKU-days) with zero available inventory during a period. One of Tightly's key outcome metrics.",
    category: "supply-chain",
  },
];

// Pre-sorted: longer terms first, to match multi-word phrases before single words
export const GLOSSARY_SORTED: GlossaryEntry[] = [...GLOSSARY].sort(
  (a, b) => b.term.length - a.term.length
);

// Flat lookup map: all terms + aliases → entry
export const GLOSSARY_MAP = new Map<string, GlossaryEntry>();
for (const entry of GLOSSARY) {
  GLOSSARY_MAP.set(entry.term.toLowerCase(), entry);
  for (const alias of entry.aliases ?? []) {
    GLOSSARY_MAP.set(alias.toLowerCase(), entry);
  }
}
