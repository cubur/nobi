import type { Unit } from "@/data/types";

export const tightlyUnit2: Unit = {
  id: "unit2",
  title: "Tightly's Product Deep Dive",
  description: "Know the product cold: Smart Replenishment, PO automation, InStock, and how the closed loop works.",
  companySlug: "tightly",
  goTerm: "Kikashi",
  goReading: "きかし",
  goMeaning: "A forcing move that demands a response. Smart Replenishment recommendations are kikashi — they force buyers to act at exactly the right moment, before the stockout window opens.",
  color: "ice",
  lessons: [
    {
      id: "2-1",
      unitId: "unit2",
      companySlug: "tightly",
      title: "Smart Replenishment — The Core Algorithm",
      tldr: "Smart Replenishment is Tightly's forecasting engine: it ranks every SKU by urgency and revenue impact, shows Days of Stock, and generates buy/transfer recommendations with full reasoning.",
      skills: ["Forecasting algorithms", "Replenishment logic", "AI product mechanics"],
      xp: 25,
      content: [
        {
          heading: "How the composite scoring matrix works",
          body: `Smart Replenishment doesn't just flag SKUs that are low on stock — it ranks them by a composite score of urgency and revenue impact simultaneously.\n\nWhy both dimensions matter:\n- **Urgency alone** would surface every low-stock SKU equally. A slow-moving SKU with 5 days of stock is less important than a fast-moving SKU with 12 days of stock (if lead time is 15 days).\n- **Revenue impact alone** would always prioritize your best-sellers. But if your best-seller has 45 days of stock, there's no urgency — prioritizing it wastes attention.\n\nThe composite score identifies the intersection: high-revenue SKUs that are approaching their reorder point. These are the items where acting now prevents the most damage.\n\nOutput: a ranked list, updated daily/weekly/monthly depending on your configured replenishment cycle, showing every SKU with its DoH, projected stockout date, recommended order quantity, and the supplier to order from.`,
          goAnalogy: {
            term: "Sente",
            reading: "せんて",
            meaning: "Having the initiative. A replenishment recommendation with urgency + revenue scoring gives the buyer sente — they act before the stockout forces a reactive crisis.",
          },
        },
        {
          heading: "Inputs the algorithm consumes",
          body: `The quality of replenishment recommendations depends entirely on the quality of inputs. Tightly pulls:\n\n**Live inventory** — from Shopify and 3PL integrations (units on hand, per location)\n**Sales velocity** — recent sales weighted by recency (last 7 days matters more than last 90 days)\n**Inbound POs** — units already ordered and in transit (crucial for accurate DoH)\n**Supplier lead times** — per supplier, ideally updated from actual delivery history\n**Safety stock policies** — minimum coverage rules set per SKU or category\n**Budget constraints** — total open-to-buy budget caps what gets recommended\n**Seasonal event flags** — buyer-configured upcoming promotions or seasonal peaks\n\nThe critical one: inbound POs. If a PO for 500 units is already in transit and not captured in the system, Tightly would recommend ordering another 500 units unnecessarily. Accurate PO tracking prevents double-ordering.`,
        },
        {
          heading: "Adaptive learning over time",
          body: `Tightly's forecasting engine learns seasonality patterns from your brand's own sales history. First season: the algorithm uses a generic seasonality template. Second season onward: it adjusts based on what your brand's actuals looked like.\n\nThis matters because two brands in the same category can have wildly different demand shapes. A swimwear brand's peak might be March–May (northern hemisphere summer prep). A Scandinavian outdoor brand's peak might be October–November (pre-winter). Generic seasonality models get this wrong. Brand-specific learning gets it right.\n\nAs PM, the "learning flywheel" is a key differentiation narrative: the longer a customer uses Tightly, the better it gets for their specific business. This creates both retention (high switching cost as the model learns) and a competitive moat (a newer tool doesn't have your training history).`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Why does Tightly's composite scoring rank SKUs by BOTH urgency AND revenue impact rather than urgency alone?",
          options: [
            "Because revenue impact is required by Shopify's app store guidelines",
            "Because urgency alone would surface slow-moving low-stock SKUs that don't matter, while high-revenue SKUs approaching reorder points would be missed",
            "Because the algorithm can only process a limited number of SKUs per cycle",
            "Because buyers prefer to prioritize their best-sellers regardless of urgency",
          ],
          correct: 1,
          explanation: "A slow-moving SKU with 5 days of stock may matter less than a best-seller with 12 days of stock and a 15-day lead time. The composite score finds the intersection of high-value + urgent.",
        },
        {
          type: "multiple-choice",
          question: "Why are inbound POs a critical input to Tightly's algorithm — not just historical sales data?",
          options: [
            "POs are required to trigger Shopify inventory updates",
            "Without inbound PO data, Tightly would recommend reordering stock that's already been ordered and is in transit",
            "Suppliers require Tightly to log POs for EDI compliance",
            "PO data is used to calculate supplier payment terms and cash flow",
          ],
          correct: 1,
          explanation: "If 500 units are already in transit but not captured, the algorithm sees a gap that doesn't actually exist and recommends a duplicate order. Accurate PO tracking prevents costly double-orders.",
        },
        {
          type: "multiple-choice",
          question: "How does Tightly's adaptive learning create a retention moat for the business?",
          options: [
            "It locks customer data in a proprietary format that can't be exported",
            "The longer a brand uses Tightly, the more accurately the model learns their specific seasonality — a new tool starts without this history",
            "Tightly's contracts include 12-month minimum terms that prevent churn",
            "The machine learning model improves globally for all users, not per customer",
          ],
          correct: 1,
          explanation: "Brand-specific seasonality learning means the model gets more accurate over time for each customer. Switching to a new tool means losing that learned history — a meaningful switching cost.",
        },
      ],
      resources: [
        {
          title: "Tightly: How to Create and Manage Replenishment Plans",
          url: "https://knowledge.tightly.io/en/articles/11975869-how-to-create-and-manage-replenishment-plans",
          description: "Step-by-step walkthrough of the replenishment planning workflow in Tightly.",
        },
        {
          title: "Tightly 2.0 Product Announcement",
          url: "https://tightly.io/newsroom/tightly-unveils-tightly-2-0",
          description: "Overview of Tightly's full product suite as of the 2.0 release.",
        },
      ],
    },
    {
      id: "2-2",
      unitId: "unit2",
      companySlug: "tightly",
      title: "From Forecast to PO — The Full Workflow",
      tldr: "Tightly's PO automation turns replenishment recommendations into supplier-ready purchase orders in one workflow — with supplier communication, pricing history, and approval flow built in.",
      skills: ["Purchase order workflow", "Supplier management", "Operational PM"],
      xp: 20,
      content: [
        {
          heading: "The PO automation layer",
          body: `Most inventory planning tools stop at the recommendation: "order 500 units." The buyer then has to open a separate email client, find the supplier contact, write the PO, send it, and manually track the response. This context-switching is where errors and delays happen.\n\nTightly's PO automation collapses this into one workflow:\n1. Smart Replenishment generates the recommendation with quantity, SKU, and urgency\n2. The recommendation auto-populates into a PO with the correct supplier, pricing, MOQ, and lead time\n3. Supplier communication happens inside the PO record — email threads are stored and accessible\n4. The buyer reviews, edits if needed, and approves\n5. The PO syncs to the WMS or 3PL for receipt tracking\n\nThe embedded supplier communication is a key differentiator: the full history of what was agreed (price, delivery date, quantity) is attached to the PO, not scattered across email inboxes.`,
          goAnalogy: {
            term: "Nobi",
            reading: "のび",
            meaning: "Extension — connecting your stones to build territory. The PO workflow extends the replenishment recommendation into an executed action, closing the gap between insight and outcome.",
          },
        },
        {
          heading: "Supplier management as a product foundation",
          body: `The quality of PO automation depends on the accuracy of supplier records: lead times, MOQs (minimum order quantities), case pack sizes, pricing tiers, and currency.\n\nTightly stores these in centralized supplier profiles. When you create a PO, it pulls the current pricing and MOQ from the supplier profile — so a buyer doesn't have to manually enter it every time, and the system can split or consolidate orders based on business rules.\n\nSupplier lead time accuracy is especially important: if your supplier profile says 3-week lead time but they're currently running 5 weeks, every DoH calculation is wrong. Tightly tracks actual delivery history to update lead times over time — closing the feedback loop between promise and reality.`,
        },
        {
          heading: "Budget and policy controls",
          body: `Replenishment recommendations without constraints can blow budgets. Tightly's policy layer allows buyers and finance to set guardrails:\n\n**Open-to-buy budgets** — a dollar cap on total PO spend per cycle. Tightly prioritizes recommendations within budget, so the highest-urgency, highest-revenue SKUs get funded first.\n\n**Safety stock policies** — minimum coverage rules per SKU or category. "Never go below 14 days of stock for top-20 SKUs" is a policy that automatically shapes recommendations.\n\n**Reorder points** — Days of Coverage thresholds that trigger replenishment. Set per SKU, per category, or globally.\n\nAs PM, the policy layer is where you'll hear the most customer requests: every buyer has their own rules, and making the policy engine flexible enough to cover them without overwhelming new users is a classic UX tension.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Why is embedded supplier communication inside the PO record a meaningful differentiator for Tightly?",
          options: [
            "It allows Tightly to charge suppliers a transaction fee for each PO",
            "It keeps the full history of agreed pricing, quantities, and delivery dates attached to the PO — preventing disputes and eliminating email-hunting",
            "It's required for EDI compliance with large retail suppliers",
            "It reduces the need for a dedicated procurement manager role",
          ],
          correct: 1,
          explanation: "When pricing or delivery disputes arise, the evidence is in the PO record — not scattered across multiple email threads. This is a trust and efficiency feature.",
        },
        {
          type: "multiple-choice",
          question: "A customer says their PO quantities are always 20% too low because their supplier recently extended lead times from 3 to 5 weeks. What Tightly capability would fix this?",
          options: [
            "Manually updating the safety stock policy to add a 20% buffer",
            "Updating the supplier profile lead time from 3 to 5 weeks so Days of Stock calculations use accurate data",
            "Switching to a weekly replenishment cycle instead of monthly",
            "Activating the anomaly detection feature to flag the lead time discrepancy",
          ],
          correct: 1,
          explanation: "Days of Stock calculations depend on accurate lead times in supplier profiles. A stale lead time makes every recommendation systematically wrong. The fix is updating the supplier record.",
        },
        {
          type: "multiple-choice",
          question: "What problem does Tightly's 'open-to-buy budget' feature solve for buyers?",
          options: [
            "It prevents overspending by capping total PO spend per cycle, ensuring the highest-urgency SKUs get funded first within budget",
            "It automatically negotiates better pricing with suppliers when budgets are tight",
            "It connects to the brand's accounting software to track actual vs. planned spend",
            "It limits the number of POs that can be created per month to avoid operational overload",
          ],
          correct: 0,
          explanation: "Without budget guardrails, a replenishment algorithm would recommend ordering everything that needs restocking regardless of cash position. Open-to-buy constraints prioritize within available budget.",
        },
      ],
      resources: [
        {
          title: "Tightly: How to Create a Purchase Order",
          url: "https://knowledge.tightly.io/en/articles/10689943-smart-replenishment",
          description: "Official documentation for Tightly's PO creation and management workflow.",
        },
        {
          title: "Inventory Planner vs. Tightly: Feature Comparison",
          url: "https://tightly.io/tightly-vs-inventory-planner",
          description: "Tightly's own comparison showing PO automation as a key differentiator.",
        },
      ],
    },
    {
      id: "2-3",
      unitId: "unit2",
      companySlug: "tightly",
      title: "InStock, Multi-Location, and Dynamic Pricing",
      tldr: "Three modules that extend Tightly beyond replenishment: InStock captures demand during stockouts, multi-location planning balances inventory across warehouses, and dynamic pricing optimizes margin in real time.",
      skills: ["Backorder management", "Multi-location inventory", "Dynamic pricing"],
      xp: 20,
      content: [
        {
          heading: "InStock — backorder management",
          body: `InStock solves a specific problem: what happens when a product goes out of stock before the next shipment arrives?\n\n**Without InStock**: the product shows "out of stock" on the Shopify storefront. Customers leave. Some come back; most don't. You lose the sale and potentially the customer.\n\n**With InStock**: the product remains purchasable. Instead of showing "out of stock," it shows an ETA based on the next inbound PO. Customers can buy now and receive when stock arrives. Demand is captured, not lost.\n\nThis requires tight integration between Tightly's PO data and the Shopify storefront. When a PO's delivery date changes (supplier is late), InStock updates the ETA shown to customers automatically.\n\nProduct implication: InStock creates a promise to the customer. If the ETA is wrong because PO data is inaccurate, customer trust is damaged. Data quality in the PO system is a prerequisite for InStock being valuable.`,
          goAnalogy: {
            term: "Ko",
            reading: "コウ",
            meaning: "A cycle of captures that requires breaking elsewhere. InStock breaks the stockout cycle — instead of losing a customer forever, you capture their order and fulfill it when stock arrives, keeping the relationship intact.",
          },
        },
        {
          heading: "Multi-location inventory planning",
          body: `Brands that sell across multiple channels or operate multiple warehouses face a distribution problem: too much stock in one location, not enough in another, while a stockout is brewing at a third.\n\nTightly's multi-location module generates SKU-level recommendations across every warehouse or store location, including **transfer recommendations** — move X units from Location A to Location B before they're needed.\n\nTransfer recommendations are harder than replenishment recommendations because:\n- They require accurate real-time stock by location (not just total inventory)\n- They need to account for transfer lead time (how long does a cross-warehouse move take?)\n- They create operational work (pick, pack, ship internally) that replenishment doesn't\n\nFor a brand running Shopify + 3 3PLs in different regions, multi-location planning can significantly reduce overall safety stock requirements — because stock in one location can cover for temporary shortfalls in another.`,
        },
        {
          heading: "Dynamic pricing",
          body: `Tightly's dynamic pricing module continuously scans competitors, third-party retailers, and marketplaces to track where a brand's pricing stands in real time.\n\nWhy this connects to inventory planning: pricing and inventory are linked decisions. If you're overstocked, lowering price accelerates sell-through. If you're nearly stocked out, maintaining or raising price protects margin. A brand that sees both their inventory position (from Tightly) and their competitive pricing position (from the dynamic pricing module) in one place can make better-connected decisions.\n\nAs PM, this is an example of **platform adjacency** — Tightly started with inventory planning and expanded into adjacent decisions that share the same data. The question is always: where does the core data create leverage in neighboring workflows? Pricing is a natural answer because it directly affects sales velocity, which feeds back into the forecast.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "What is the prerequisite for InStock's backorder ETAs to be trustworthy?",
          options: [
            "The customer must have a Shopify Plus subscription",
            "Accurate and up-to-date PO data in Tightly, so ETA calculations reflect actual supplier delivery timelines",
            "A real-time integration with the carrier's tracking API",
            "Manual ETA confirmation from the supplier for each PO",
          ],
          correct: 1,
          explanation: "InStock promises customers a delivery date based on inbound PO data. If that PO data is stale or inaccurate, the ETA shown is wrong — damaging customer trust.",
        },
        {
          type: "multiple-choice",
          question: "Why can transfer recommendations (between locations) be more complex than replenishment recommendations?",
          options: [
            "Transfers require supplier approval while replenishment does not",
            "Transfer recommendations require accurate stock by location, transfer lead time, and internal operational capacity — more variables than a simple reorder",
            "Shopify's API doesn't support multi-location inventory updates",
            "Transfer costs are higher than reorder costs, requiring CFO approval",
          ],
          correct: 1,
          explanation: "Replenishment is straightforward: buy from supplier. Transfers add complexity: accurate per-location counts, internal logistics lead time, and operational capacity to execute the move.",
        },
        {
          type: "multiple-choice",
          question: "Why does Tightly adding a dynamic pricing module make strategic sense as a product expansion?",
          options: [
            "Because pricing is the most requested feature by Shopify brands",
            "Because pricing and inventory are linked — overstock benefits from lower prices (accelerate sell-through) and near-stockout positions benefit from higher prices (protect margin)",
            "Because dynamic pricing is a higher-margin SaaS feature than inventory planning",
            "Because Tightly's competitors don't have pricing features, creating a market gap",
          ],
          correct: 1,
          explanation: "Pricing decisions and inventory decisions share the same data (stock levels, velocity). Connecting them in one platform allows brands to make better-coordinated decisions — this is platform adjacency in action.",
        },
      ],
      resources: [
        {
          title: "Tightly: InStock Backorder Management",
          url: "https://knowledge.tightly.io",
          description: "How InStock integrates with Shopify storefronts to capture demand during stockout windows.",
        },
        {
          title: "Tightly: Multi-Store Connection Guide",
          url: "https://knowledge.tightly.io",
          description: "Setup and management of multi-location inventory planning in Tightly.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "In Tightly's composite scoring, which SKU gets the HIGHEST replenishment priority?",
      options: ["The SKU with the most units sold last year", "The SKU with the lowest stock level in absolute unit count", "A high-revenue SKU approaching its reorder point based on current DoH and lead time", "The most recently added SKU in the catalog"],
      correct: 2,
      explanation: "The composite score finds the intersection of high-revenue AND urgent. A best-seller with 45 days of stock isn't urgent. A slow-mover with 5 days of stock isn't high-revenue enough to prioritize.",
    },
    {
      type: "multiple-choice",
      question: "What happens to InStock ETAs when a supplier delays a PO by 2 weeks?",
      options: ["InStock ETAs update automatically if Tightly has accurate PO delivery data synced", "The buyer must manually update each affected product page", "InStock pauses and shows 'out of stock' until the PO is received", "A notification is sent to customers with the old ETA"],
      correct: 0,
      explanation: "InStock's ETAs are driven by PO data. When delivery dates change in Tightly, the storefront ETA updates — as long as the PO data is kept current.",
    },
    {
      type: "multiple-choice",
      question: "A buyer complains that Tightly's recommendations always exceed their monthly budget. What is the correct PM-level resolution?",
      options: ["Reduce the forecasting frequency to monthly so fewer recommendations are generated", "Help the buyer configure an open-to-buy budget cap so Tightly prioritizes within available spend", "Disable the algorithm for low-velocity SKUs to reduce total recommended spend", "Recommend that the brand increases its purchasing budget"],
      correct: 1,
      explanation: "Open-to-buy budget constraints are a core Tightly feature. Setting a budget cap ensures the algorithm prioritizes the highest-urgency, highest-revenue SKUs within available cash — rather than recommending everything at once.",
    },
    {
      type: "multiple-choice",
      question: "Why is accurate supplier lead time data critical to all of Tightly's calculations?",
      options: ["Supplier lead times determine EDI compliance windows", "Lead time is the denominator in every DoH-to-stockout calculation — wrong lead time means every recommendation is systematically off", "Tightly invoices customers based on total supplier lead time hours", "Shopify requires lead time data for product page delivery estimates"],
      correct: 1,
      explanation: "If your supplier actually takes 5 weeks but Tightly has 3 weeks recorded, the algorithm thinks you have more time than you do — and your replenishment recommendations arrive too late.",
    },
    {
      type: "multiple-choice",
      question: "Which module would you recommend first to a customer who says 'we keep losing sales when we run out of stock'?",
      options: ["Dynamic pricing — to lower prices and accelerate sell-through before stockouts", "InStock — to capture backorders and show ETAs so customers buy during the stockout window", "Multi-location planning — to redistribute existing inventory to prevent stockouts", "Smart Replenishment — to improve forecast accuracy and reduce how often stockouts happen"],
      correct: 3,
      explanation: "InStock captures demand after stockouts happen. But the root cause fix is Smart Replenishment — better forecasting means fewer stockouts in the first place. InStock is the safety net; replenishment is the prevention.",
    },
  ],
  quizXp: 35,
};
