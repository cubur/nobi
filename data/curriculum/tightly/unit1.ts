import type { Unit } from "@/data/types";

export const tightlyUnit1: Unit = {
  id: "unit1",
  title: "The Inventory Problem",
  description: "Why $1.8 trillion gets locked in bad inventory decisions — and how the tech stack tries to fix it.",
  companySlug: "tightly",
  goTerm: "Fuseki",
  goReading: "ふせき",
  goMeaning: "Opening strategy that shapes the entire game. Understanding inventory fundamentals is your fuseki — the positions you set up now determine everything downstream.",
  color: "neon",
  lessons: [
    {
      id: "1-1",
      unitId: "unit1",
      companySlug: "tightly",
      title: "The $1.8 Trillion Problem",
      tldr: "Retail loses $1.8 trillion annually to 'inventory distortion' — the combination of stockouts (lost sales) and overstock (tied-up capital). Tightly's thesis: this is a forecasting failure, not a logistics failure.",
      skills: ["Problem framing", "Inventory fundamentals", "Market context"],
      xp: 20,
      content: [
        {
          heading: "Inventory distortion: two failure modes",
          body: `Tightly's founding thesis is that retail has a $1.8 trillion problem. It comes in two forms:\n\n**Stockouts** — you run out of a product while demand still exists. The customer either buys from a competitor or waits. You lose the sale, you lose the customer relationship, and you damage your brand's reliability signal.\n\n**Overstock** — you bought too much and demand didn't materialize. Capital is tied up in unsold inventory. You're paying for warehouse space to store things that aren't selling. Eventually you markdown and destroy margin.\n\nBoth failures have the same root cause: the forecast was wrong. Either you underestimated demand (stockout) or overestimated it (overstock). The question is why forecasts fail — and what an AI-native system can do that spreadsheets and legacy tools can't.`,
          goAnalogy: {
            term: "Atari",
            reading: "アタリ",
            meaning: "A stone or group one move from capture. Stockouts and overstock are both atari positions — you're one bad forecast away from a serious loss. The PM's job is to keep the product's stones out of atari.",
          },
        },
        {
          heading: "Why spreadsheets fail",
          body: `Most brands at $1M–$10M GMV run inventory on Excel or Google Sheets. The formula is simple: if current stock / daily sales rate < reorder lead time, buy more.\n\nThis breaks in four ways:\n\n**Manual lag** — updating a spreadsheet takes time. By the time a buyer notices a problem, it's too late to place an order before stockout.\n\n**No multi-signal awareness** — a spreadsheet can't simultaneously account for a seasonal spike, a promotion next month, a supplier with a 3-week lead time, and a 3PL receiving backlog.\n\n**Static lead times** — supplier lead times vary. A spreadsheet uses the average. Reality uses the actual current lead time.\n\n**No learning** — the spreadsheet doesn't get smarter. It uses the same formula this year as last year, regardless of what it got wrong.`,
        },
        {
          heading: "Tightly's approach: autonomous execution",
          body: `Tightly describes itself as moving toward "autonomous execution" rather than "better dashboards." The distinction:\n\n**Dashboard tools** (most competitors): show you better data, let you make better decisions manually. You still have to process the information and act.\n\n**Autonomous execution tools** (Tightly's direction): analyze signals, generate recommendations, and execute replenishment with minimal human intervention. The human reviews exceptions, not every SKU.\n\nFor a $5M GMV Shopify brand with 500 SKUs across 3 warehouses, reviewing every SKU manually is impossible. Tightly's value prop: the algorithm does the routine work, the buyer handles the edge cases.\n\nCEO Byron Berrisford: "Inventory isn't a spreadsheet problem — it's a sales problem." The framing matters: Tightly is positioned as a revenue enabler, not an ops tool.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "What does Tightly mean by 'inventory distortion'?",
          options: [
            "Inaccurate inventory counts in the warehouse management system",
            "The combination of stockouts and overstock that costs retail $1.8 trillion annually",
            "Data corruption when syncing between Shopify and an ERP",
            "Seasonal demand fluctuations that distort annual forecasts",
          ],
          correct: 1,
          explanation: "Inventory distortion is Tightly's framing for the dual failure of stockouts (lost sales) and overstock (tied-up capital) — both caused by forecasting failures.",
        },
        {
          type: "multiple-choice",
          question: "Why does CEO Byron Berrisford say 'inventory isn't a spreadsheet problem — it's a sales problem'?",
          options: [
            "Because spreadsheets can't connect to Shopify's API",
            "Because inventory decisions directly affect revenue — stockouts lose sales, overstock destroys margins through markdowns",
            "Because sales teams should own inventory decisions, not ops teams",
            "Because the real problem is the sales forecast, not the inventory formula",
          ],
          correct: 1,
          explanation: "The framing positions Tightly as a revenue tool, not an ops tool. Bad inventory decisions directly cause lost sales or margin destruction — making it a sales problem at its core.",
        },
        {
          type: "multiple-choice",
          question: "What is the key difference between a 'dashboard tool' and an 'autonomous execution tool' in inventory planning?",
          options: [
            "Dashboard tools are cheaper; autonomous tools require enterprise pricing",
            "Dashboard tools show better data for manual decisions; autonomous tools generate and execute recommendations with minimal human input",
            "Dashboard tools work offline; autonomous tools require cloud connectivity",
            "Dashboard tools integrate with ERPs; autonomous tools work only with Shopify",
          ],
          correct: 1,
          explanation: "Tightly positions itself as moving beyond dashboards toward autonomous execution — the algorithm handles routine replenishment decisions, freeing buyers to focus on exceptions.",
        },
      ],
      resources: [
        {
          title: "Tightly: $17M Seed Launch Announcement",
          url: "https://tightly.io/newsroom/tightly-launches-with-17m-seed-financing-to-end-retail-s-1-8-trillion-inventory-distortion-problem",
          description: "Tightly's founding story and core thesis on inventory distortion.",
        },
        {
          title: "Tightly Knowledge Base",
          url: "https://knowledge.tightly.io",
          description: "Official product documentation covering Smart Replenishment, POs, and integrations.",
        },
      ],
    },
    {
      id: "1-2",
      unitId: "unit1",
      companySlug: "tightly",
      title: "The Tech Stack Decoded: ERP, PLM, OMS, WMS, 3PL",
      tldr: "Five acronyms every inventory PM must understand cold: ERP, PLM, OMS, WMS, and 3PL. They describe the systems that manage products from design to delivery — and where Tightly plugs in.",
      skills: ["Tech stack literacy", "Systems thinking", "Integration context"],
      xp: 25,
      content: [
        {
          heading: "ERP — Enterprise Resource Planning",
          body: `An ERP is the central nervous system of a business: it connects finance, inventory, purchasing, HR, and operations into one data model. Every transaction — a purchase order, a sale, a warehouse receipt — is recorded here.\n\n**Key ERP players**: SAP (large enterprise), Oracle NetSuite (mid-market), Microsoft Dynamics 365 (SMB to enterprise), Sage (SMB).\n\n**Why it matters for Tightly**: Most brands at $10M+ GMV have or will adopt an ERP. Tightly must sync POs and inventory data with these systems. "ERP export" is in Tightly's integration list — meaning Tightly generates the plan, the ERP records the execution.\n\n**The gap Tightly fills**: ERPs are systems of record — they track what happened. Tightly is a system of intelligence — it recommends what should happen next. These are complementary, not competing, roles.`,
          goAnalogy: {
            term: "Territory",
            reading: "じち",
            meaning: "Secure, owned space on the board. An ERP is a company's territory — it records what is definitively owned and transacted. Tightly plays in the adjacent open spaces: forecasting what territory you should claim next.",
          },
        },
        {
          heading: "PLM, OMS, WMS — the other three",
          body: `**PLM (Product Lifecycle Management)** — manages a product from concept to end-of-life: design files, BOM (bill of materials), specification sheets, supplier sourcing, certifications. PLM is upstream of inventory — it determines what gets made before inventory planning decides how much to stock. Brands rarely mention PLM to Tightly; it's more relevant in fashion and manufacturing.\n\n**OMS (Order Management System)** — manages customer orders across all channels: Shopify storefront, Amazon, wholesale, POS. Routes orders to the right warehouse or 3PL. Tracks fulfillment status. When Tightly recommends a stock transfer between locations, it's interacting with the same data an OMS tracks. Extensiv (formerly Skubana) and Linnworks are OMS tools.\n\n**WMS (Warehouse Management System)** — manages operations inside a warehouse: receiving, put-away, pick-pack-ship, cycle counts. Tracks exactly where each unit is in the building. When a PO is received, the WMS scans it in. Tightly's "Days of Stock" calculations depend on accurate WMS data. Canary7 is an example WMS that Tightly integrates with.`,
        },
        {
          heading: "3PL — Third-Party Logistics",
          body: `A 3PL is an outsourced logistics provider that handles warehousing, picking, packing, and shipping on behalf of a brand. Instead of running your own warehouse, you ship inventory to a 3PL and they fulfill orders for you.\n\n**Why brands use 3PLs**: Asset-light growth — you don't own warehouse real estate. Geographic coverage — a 3PL can have locations in multiple regions. Expertise — 3PLs handle carrier relationships, customs, and compliance.\n\n**Tightly's 3PL integrations**: byrd (Europe), Elite OPS, Flowspace, NLRP, Smart Warehousing (all US). This is critical: Tightly pulls live inventory counts from the 3PL's system so its Days of Stock calculations are accurate. If a 3PL isn't integrated, inventory data is stale.\n\n**PM implication**: When a new customer onboards, their 3PL integration is on the critical path. If Tightly doesn't integrate with a customer's 3PL, the forecasting accuracy is limited. This is a known constraint on the ICP.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "A Shopify brand asks if Tightly replaces their NetSuite ERP. What's the correct PM answer?",
          options: [
            "Yes — Tightly replaces the inventory module of any ERP",
            "No — Tightly is a system of intelligence that generates plans; the ERP remains the system of record for transactions",
            "It depends on how large the brand is",
            "Yes, but only for Shopify-native brands under $10M GMV",
          ],
          correct: 1,
          explanation: "Tightly and ERPs are complementary. ERPs record what happened; Tightly recommends what should happen next. They sync via integration, not replacement.",
        },
        {
          type: "multiple-choice",
          question: "A Tightly customer says their Days of Stock calculations are often wrong for 3 of their 5 warehouse locations. What's the most likely root cause?",
          options: [
            "Tightly's forecasting algorithm has bugs for multi-location brands",
            "The 3 problem locations use 3PLs that aren't integrated with Tightly, so inventory data is stale",
            "The customer's Shopify store is misconfigured",
            "The customer has too many SKUs for Tightly's model to handle",
          ],
          correct: 1,
          explanation: "Tightly pulls live inventory counts from integrated 3PLs. Locations without a direct 3PL integration rely on manually synced data, making Days of Stock calculations unreliable.",
        },
        {
          type: "multiple-choice",
          question: "Which system is responsible for managing a product's design files, bill of materials, and supplier specifications BEFORE it enters inventory planning?",
          options: [
            "WMS (Warehouse Management System)",
            "OMS (Order Management System)",
            "PLM (Product Lifecycle Management)",
            "ERP (Enterprise Resource Planning)",
          ],
          correct: 2,
          explanation: "PLM manages the product from design to end-of-life — upstream of inventory. It handles BOM, specifications, and sourcing before inventory planning decisions are made.",
        },
      ],
      resources: [
        {
          title: "Tightly Integrations Directory",
          url: "https://tightly.io/integrations",
          description: "Full list of Tightly's current 3PL, WMS, and ERP integrations.",
        },
        {
          title: "NetSuite: ERP vs. Inventory Planning Tools",
          url: "https://www.netsuite.com/portal/resource/articles/inventory-management/inventory-planning.shtml",
          description: "How ERP inventory modules differ from dedicated planning tools.",
        },
      ],
    },
    {
      id: "1-3",
      unitId: "unit1",
      companySlug: "tightly",
      title: "How AI Changes Inventory Planning",
      tldr: "Traditional forecasting uses static models (moving averages, seasonal indices). AI-native forecasting adapts in real time to demand signals, learns from outcomes, and explains its reasoning. That's what Tightly's Smart Replenishment engine does.",
      skills: ["AI forecasting", "Demand signals", "ML fundamentals for PM"],
      xp: 25,
      content: [
        {
          heading: "Traditional vs. AI forecasting",
          body: `Classical inventory forecasting relies on statistical models: moving averages (average of the last N weeks of sales), exponential smoothing (recent weeks weighted higher), and seasonal indices (last year's December × growth factor).\n\nThese models have known weaknesses:\n\n**Lagging signals** — they react to what already happened. A viral social post that drives a 10× sales spike isn't in historical data.\n\n**One model fits all** — the same formula is applied to a fast-moving SKU and a slow-moving SKU, despite their very different demand patterns.\n\n**Manual seasonality** — a buyer has to manually tell the system "December is peak season." If they forget or the pattern shifts, the model breaks.\n\nAI-native forecasting addresses these by: automatically detecting seasonality patterns, applying different models to different SKUs based on their demand characteristics, and incorporating live demand signals (current sales velocity, not just historical averages).`,
          goAnalogy: {
            term: "Aji",
            reading: "アジ",
            meaning: "Latent potential that hasn't been activated yet. Each new demand signal — a sales spike, a supplier delay, a new market — is aji in Tightly's model. The algorithm holds these possibilities and activates the right response at the right time.",
          },
        },
        {
          heading: "Tightly's Smart Replenishment engine",
          body: `Tightly's core algorithm uses a composite scoring matrix that prioritizes SKUs by replenishment urgency and revenue impact simultaneously. The key metric: **Days of Stock (DoH)** — how many days of inventory you have on hand based on current sales velocity.\n\nThe engine takes live inputs:\n- Current stock levels (from Shopify + 3PL sync)\n- Sales velocity (not just historical average — the trailing velocity weighted by recency)\n- Inbound POs (stock already ordered but not yet received)\n- Lead times (per supplier, updated based on actual performance)\n- Seasonal events (configured by the buyer)\n- Anomaly detection (sudden demand spikes or drops)\n\nOutput: a ranked list of replenishment recommendations, from "must order today" to "no action needed," with the reasoning shown for each SKU.`,
        },
        {
          heading: "Explainability as a product feature",
          body: `One of Tightly's stated differentiators is explainable recommendations. For each SKU, the system shows: current DoH, projected DoH at reorder point, lead time to receipt, inbound coverage already in transit.\n\nThis matters for a specific reason: **buyers don't trust black boxes**. If a tool says "order 500 units of SKU-1234 by Friday" with no explanation, a buyer will second-guess it or ignore it. If it says "order 500 units because at current velocity you'll hit zero stock in 18 days, your supplier lead time is 22 days, and there's no inbound PO covering this gap" — the buyer can verify, trust, and act.\n\nAs PM, explainability is not just a UX feature — it's a trust mechanism. The adoption rate of AI recommendations is directly tied to the buyer's confidence in the explanation. Tracking "recommendation acceptance rate" is a core model quality metric.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "What is 'Days of Stock (DoH)' and why is it Tightly's central metric?",
          options: [
            "The number of days since an order was placed — a measure of supplier speed",
            "How many days of inventory you have on hand based on current sales velocity — tells you when you'll run out",
            "The number of SKUs that have stock in a given warehouse location",
            "A benchmark metric comparing your stock levels to industry averages",
          ],
          correct: 1,
          explanation: "Days of Stock is the core urgency signal: at current sales velocity, how many days until you run out? Combining this with lead time tells you exactly when to order.",
        },
        {
          type: "multiple-choice",
          question: "Why is explainability a trust mechanism rather than just a UX feature in Tightly's replenishment engine?",
          options: [
            "Because regulators require AI decisions to be explainable in retail",
            "Because buyers won't act on — or will override — black-box recommendations, making the AI useless regardless of its accuracy",
            "Because explainability reduces the computational cost of the model",
            "Because Shopify's API requires explanation metadata on all purchase orders",
          ],
          correct: 1,
          explanation: "Adoption rate of AI recommendations is tied to buyer trust. An unexplained recommendation gets ignored. Explaining the reasoning (DoH, lead time, coverage gap) lets buyers verify and act with confidence.",
        },
        {
          type: "multiple-choice",
          question: "What is the key weakness of classical moving average forecasting that AI-native tools like Tightly address?",
          options: [
            "Moving averages require too much computing power for large SKU catalogs",
            "Moving averages only work for products with stable, non-seasonal demand",
            "Moving averages react to what already happened and can't respond to live demand signals or sudden shifts",
            "Moving averages require manual data entry that AI tools can automate",
          ],
          correct: 2,
          explanation: "Classical forecasting is backward-looking — it averages historical data. AI-native tools weight recent velocity, detect anomalies, and adapt to live signals that historical models miss entirely.",
        },
      ],
      resources: [
        {
          title: "Tightly: Smart Replenishment (Knowledge Base)",
          url: "https://knowledge.tightly.io/en/articles/10689943-smart-replenishment",
          description: "Official documentation on how Tightly's replenishment algorithm works.",
        },
        {
          title: "Prediko: Ecommerce Inventory Forecasting Guide",
          url: "https://www.prediko.io/blog/ecommerce-inventory-forecasting",
          description: "Comprehensive overview of forecasting methods from statistical to AI-native.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "Tightly targets brands at which GMV range as its primary ICP?",
      options: ["Under $500K GMV — pre-product-market-fit startups", "$1M–$10M GMV — scaling Shopify brands that have outgrown spreadsheets", "$50M+ GMV — enterprise retailers with dedicated supply chain teams", "Any size — Tightly works for all B2C brands"],
      correct: 1,
      explanation: "Tightly's sweet spot is $1M–$10M GMV brands — too big for spreadsheets, too small for a full ERP. They've 'found the problem' and need an algorithmic solution.",
    },
    {
      type: "multiple-choice",
      question: "Which of the following BEST describes the relationship between Tightly and a customer's ERP?",
      options: ["Tightly replaces the ERP's inventory module entirely", "Tightly is a planning intelligence layer that syncs with the ERP as the system of record", "Tightly and ERPs target completely different customer segments", "The ERP generates replenishment recommendations; Tightly executes them"],
      correct: 1,
      explanation: "Tightly is a planning brain, not a transaction system. The ERP records what happened; Tightly recommends what to do next. They're complementary.",
    },
    {
      type: "multiple-choice",
      question: "A 3PL integration is on the 'critical path' for Tightly onboarding because:",
      options: ["3PLs own the customer relationship for most Shopify brands", "Without 3PL integration, Tightly can't pull live inventory counts, making Days of Stock calculations unreliable", "3PLs must approve Tightly's replenishment recommendations before POs are sent", "Tightly's pricing model is based on 3PL transaction volume"],
      correct: 1,
      explanation: "Accurate Days of Stock depends on live inventory data. Without a direct 3PL integration, counts are stale and the replenishment algorithm loses accuracy.",
    },
    {
      type: "multiple-choice",
      question: "What does Tightly mean by its 'InStock' feature?",
      options: ["A real-time inventory counter displayed on the Shopify storefront", "A backorder management tool that keeps products purchasable with PO-aware ETAs even during stockouts", "An automated reorder trigger that fires when stock hits zero", "A quality control module that checks incoming stock against purchase orders"],
      correct: 1,
      explanation: "InStock lets brands capture demand during stockout windows by showing PO-aware ETAs and accepting backorders — instead of losing the sale to a competitor.",
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT part of Tightly's current product scope?",
      options: ["Purchase order automation with supplier communication built in", "Dynamic pricing based on competitive scanning", "Warehouse pick-pack-ship operations (WMS functionality)", "Multi-location inventory transfer recommendations"],
      correct: 2,
      explanation: "Tightly covers planning, replenishment, POs, InStock, and dynamic pricing. Pick-pack-ship is WMS functionality — Tightly integrates with WMS providers like Canary7 but doesn't replace them.",
    },
  ],
  quizXp: 35,
};
