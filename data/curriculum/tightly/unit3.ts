import type { Unit } from "@/data/types";

export const tightlyUnit3: Unit = {
  id: "unit3",
  title: "The Competitive Landscape",
  description: "Who Tightly competes with, where it wins, and how to talk about the market in an interview.",
  companySlug: "tightly",
  goTerm: "Semeai",
  goReading: "せめあい",
  goMeaning: "A capturing race where both groups fight for survival. The inventory planning market is a semeai — multiple tools competing for the same budget, with different architectural bets on who captures the most territory.",
  color: "crimson",
  lessons: [
    {
      id: "3-1",
      unitId: "unit3",
      companySlug: "tightly",
      title: "Market Map — Where Tightly Plays",
      tldr: "The inventory management market has three tiers: dedicated planning tools (Tightly's tier), full inventory management platforms (Cin7, Linnworks), and ERP giants (SAP, NetSuite). Tightly competes in tier 1 but sells to customers who touch all three.",
      skills: ["Competitive analysis", "Market segmentation", "Positioning"],
      xp: 20,
      content: [
        {
          heading: "Three-tier market structure",
          body: `**Tier 1 — Dedicated inventory planning/forecasting tools**: Purpose-built for demand forecasting and replenishment. Light on transaction management. Examples: Tightly, Inventory Planner by Sage, Netstock, GMDH Streamline, Prediko.\n\n**Tier 2 — Full inventory management platforms**: Handle inventory tracking, order management, warehouse management, and some forecasting. Broader scope, more complex to implement. Examples: Cin7, Brightpearl, Linnworks, Unleashed, Extensiv (Skubana).\n\n**Tier 3 — ERP platforms**: Enterprise-grade systems with inventory as one of many modules. SAP, Oracle NetSuite, Microsoft Dynamics 365, Sage.\n\nTightly targets Tier 1 but sells to brands who also use Tier 2 and Tier 3 tools. The key insight: Tier 1 tools don't replace Tier 2 or 3 — they layer on top as a planning intelligence layer. Tightly syncs TO Cin7 or NetSuite; it doesn't replace them.`,
          goAnalogy: {
            term: "Moyo",
            reading: "もよう",
            meaning: "A large, loosely-bounded influence zone. The inventory planning market is a moyo — Tightly is staking out territory, but the boundaries between tier 1, tier 2, and tier 3 tools are still forming as the market evolves.",
          },
        },
        {
          heading: "Tightly's primary competitive set",
          body: `Tightly's most direct competitors are the other Tier 1 tools targeting Shopify/DTC brands:\n\n**Inventory Planner by Sage**: The incumbent. Acquired by Sage in 2022. Strong historical forecasting, 200+ metrics. Post-acquisition: pricing has tripled for some users, transfers feature deprecated, innovation slowed. Tightly's narrative: "We're what Inventory Planner used to be, built AI-native."\n\n**Netstock**: ERP-anchored predictive planning. Excellent at plugging into existing ERPs (60+ integrations). Less Shopify-native. Targets brands that already have an ERP and need a planning layer on top of it. Different ICP than Tightly.\n\n**GMDH Streamline**: Supply chain planning for manufacturers and distributors. Full S&OP capabilities. Heavier implementation, longer sales cycle. Not competing for the same $1M–$10M Shopify brand.\n\n**Prediko**: Direct competitor in the Shopify-native AI forecasting space. Starts at $119/month. Lower-end price point, less enterprise features.`,
        },
        {
          heading: "Market size and growth",
          body: `The global inventory management software market is ~$3B in 2025, growing at ~8-10% CAGR toward $6B by 2034. The inventory optimization segment specifically is $5.87B in 2025, growing toward $12.4B by 2032.\n\nThe e-commerce segment (Tightly's primary market) is the fastest-growing vertical at ~27% of the total market. 98% of companies report integrating AI into supply chains for inventory optimization in 2025 — meaning the "AI for inventory" category is not a niche, it's the direction the entire market is moving.\n\nFor Tightly, the key competitive dynamic: the market is consolidating around AI-native tools. The window to establish brand authority as the Shopify-native AI inventory platform is open now — but Inventory Planner's incumbent position and Sage's resources mean it won't stay open indefinitely.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Why is Netstock NOT a direct competitor to Tightly despite both being inventory planning tools?",
          options: [
            "Netstock is only available in North America while Tightly is global",
            "Netstock is ERP-anchored and targets brands with existing ERPs, while Tightly targets Shopify-native brands without full ERP setups",
            "Netstock focuses on manufacturing; Tightly focuses on retail",
            "Netstock is a warehouse management system, not a planning tool",
          ],
          correct: 1,
          explanation: "Netstock's value depends on having an ERP to plug into. Tightly's ICP is Shopify brands that don't have (and may never have) a full ERP. Different customers, different buying motions.",
        },
        {
          type: "multiple-choice",
          question: "What is Tightly's primary competitive narrative against Inventory Planner by Sage?",
          options: [
            "Tightly is cheaper because it doesn't have Sage's enterprise overhead",
            "Tightly has more ERP integrations than Inventory Planner",
            "Inventory Planner is a legacy pre-AI tool that has slowed down since acquisition; Tightly is AI-native and moving faster",
            "Inventory Planner doesn't support Shopify; Tightly does",
          ],
          correct: 2,
          explanation: "Post-Sage acquisition, Inventory Planner raised prices, deprecated features, and slowed innovation. Tightly's narrative: AI-native architecture, faster development, and focused exclusively on Shopify/DTC brands.",
        },
        {
          type: "multiple-choice",
          question: "A Shopify brand using Cin7 for inventory management asks if they should replace it with Tightly. What's the correct answer?",
          options: [
            "Yes — Tightly can fully replace Cin7's inventory management capabilities",
            "No — Tightly is a planning intelligence layer that syncs with Cin7; they serve different functions and can work together",
            "It depends on the brand's Shopify plan",
            "Yes, but only if the brand has fewer than 1,000 SKUs",
          ],
          correct: 1,
          explanation: "Cin7 is a Tier 2 inventory management platform (order management, warehouse tracking, multi-channel). Tightly is Tier 1 (forecasting and replenishment planning). They're complementary — Tightly improves the planning that feeds into Cin7's execution.",
        },
      ],
      resources: [
        {
          title: "Tightly: 2025's Top Inventory Tools Comparison",
          url: "https://tightly.io/newsroom/2025-s-top-inventory-tools-comparing-tightly-to-alternatives",
          description: "Tightly's own analysis of the competitive landscape across inventory planning tools.",
        },
        {
          title: "G2: Sales Intelligence & Inventory Planning Reviews",
          url: "https://www.g2.com/categories/inventory-control",
          description: "Customer reviews and comparisons across inventory management tools.",
        },
      ],
    },
    {
      id: "3-2",
      unitId: "unit3",
      companySlug: "tightly",
      title: "Head-to-Head: Inventory Planner, Netstock, Streamline",
      tldr: "Three deep comparisons for the questions you'll get in interviews and customer conversations: Inventory Planner (the incumbent), Netstock (the ERP partner), and Streamline (the manufacturer's tool).",
      skills: ["Competitive intelligence", "Differentiation messaging", "Product positioning"],
      xp: 25,
      content: [
        {
          heading: "Tightly vs. Inventory Planner by Sage",
          body: `**Inventory Planner strengths**: 200+ customizable metrics, deep historical forecasting, established customer base, bundle/subscription support, wide integration range (Shopify, Amazon, BigCommerce).\n\n**Inventory Planner weaknesses (post-acquisition)**: Pricing increases 3x+ for some customers since Sage acquired it. Inventory transfer feature was deprecated in mid-2025. Support quality declined. Innovation cadence slowed as Sage bundled it into a broader portfolio.\n\n**Tightly's positioning**: "We're what Inventory Planner was before the acquisition — focused, fast-moving, and built for the modern Shopify brand. Plus we've built AI-native from the start, not retrofitted."\n\n**Where Tightly can lose**: Inventory Planner still has deeper historical reporting (200+ metrics vs. Tightly's current scope). For a brand that runs monthly management reporting off their inventory tool and needs extensive metric customization, Inventory Planner may still win on features.`,
          goAnalogy: {
            term: "Atari",
            reading: "アタリ",
            meaning: "One move from capture. Inventory Planner's post-acquisition weaknesses have put them in atari — pricing, feature deprecation, and slower innovation are all liberties being taken away. Tightly's job is to capture that territory.",
          },
        },
        {
          heading: "Tightly vs. Netstock",
          body: `**Netstock strengths**: 60+ ERP integrations (widest in the market), excellent at policy tuning (safety stock levels, reorder points), AI that assigns the best forecasting model per item, supplier risk analytics.\n\n**Netstock weaknesses**: Requires an ERP to be valuable — not Shopify-native. Heavier implementation. Higher-touch sales motion (not self-serve). Not designed for the $1M–$5M DTC brand.\n\n**Where they don't compete**: Different ICP entirely. Netstock's customer has a dedicated supply chain team and an existing ERP. Tightly's customer is a founder or 2-person ops team running on Shopify. These tools are rarely in the same deal.\n\n**Where they could compete**: As Tightly moves upmarket toward larger brands with ERPs, they'll encounter more Netstock-adjacent situations. Today it's rare; in 2-3 years as Tightly scales, this overlap grows.`,
        },
        {
          heading: "Tightly vs. GMDH Streamline",
          body: `**Streamline strengths**: Full S&OP (Sales & Operations Planning) — connects demand planning, supply planning, and financial planning in one process. Multiple forecasting algorithms selectable per SKU. Deep ERP integrations (SAP, NetSuite, Dynamics). Used in manufacturing, distribution, wholesale.\n\n**Streamline weaknesses**: Not Shopify-native, not DTC-focused. More complex to implement. Longer sales cycles. Designed for companies with dedicated demand planners.\n\n**Where they don't compete**: Streamline targets manufacturers and distributors with dedicated operations teams. Tightly targets Shopify brands with lean ops teams. Almost no overlap in the current ICP.\n\n**Why it matters to know Streamline**: As Tightly's customers grow and add manufacturing or B2B wholesale channels, they'll outgrow Tightly's current scope and need S&OP tools. Understanding where Tightly hands off is important for retention conversations.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "A customer considering Tightly says: 'We already use Inventory Planner and it does everything we need.' What's your strongest response?",
          options: [
            "Ask them what specific features they'd miss — then show which ones Tightly covers",
            "Offer a significant discount to make switching worth the effort",
            "Point out Inventory Planner's post-acquisition pricing increases, feature deprecation, and slowed innovation — and position Tightly as the focused, AI-native alternative",
            "Acknowledge that Inventory Planner is a strong product and you don't recommend switching",
          ],
          correct: 2,
          explanation: "The strongest response uses Inventory Planner's known weaknesses (price increases, deprecated features, slowed innovation) as the switching trigger — then leads with Tightly's AI-native architecture as the future-forward alternative.",
        },
        {
          type: "multiple-choice",
          question: "Which scenario would most likely result in a deal where Tightly and Netstock are both being evaluated?",
          options: [
            "A $2M Shopify brand with 3 SKUs and no warehouse",
            "A $30M omnichannel retailer that has just implemented NetSuite ERP and wants a dedicated planning layer",
            "A D2C brand running on Shopify with a single US 3PL partner",
            "A startup that recently launched on Shopify and is forecasting manually in Google Sheets",
          ],
          correct: 1,
          explanation: "Netstock's strength is ERP integration depth. A brand that just implemented NetSuite is exactly the Netstock sweet spot. This is where Tightly and Netstock overlap — and where Tightly would need to compete on Shopify-nativeness and AI quality.",
        },
        {
          type: "multiple-choice",
          question: "At what point does a Tightly customer most likely need to evaluate adding a tool like GMDH Streamline?",
          options: [
            "When they reach 500 SKUs in their Shopify catalog",
            "When they add wholesale or manufacturing channels and need full S&OP planning across demand, supply, and financials",
            "When they expand to a second 3PL location",
            "When their annual GMV exceeds $10M",
          ],
          correct: 1,
          explanation: "Streamline's value is S&OP — connecting demand planning to supply and financial planning at an enterprise level. This becomes relevant when a brand adds complexity (wholesale, manufacturing, multiple planning cycles) that goes beyond Shopify replenishment.",
        },
      ],
      resources: [
        {
          title: "Tightly vs. Inventory Planner: Full Comparison",
          url: "https://tightly.io/tightly-vs-inventory-planner",
          description: "Tightly's own feature-by-feature comparison with Inventory Planner by Sage.",
        },
        {
          title: "Netstock: Product Overview",
          url: "https://www.netstock.com",
          description: "Netstock's positioning and ERP integration capabilities.",
        },
      ],
    },
    {
      id: "3-3",
      unitId: "unit3",
      companySlug: "tightly",
      title: "What Makes Tightly Different",
      tldr: "Tightly's differentiation isn't a single feature — it's an architectural bet: Shopify-native, AI-native, closed-loop, and operator-first. Understanding this compound differentiation is how you defend the product in competitive deals.",
      skills: ["Differentiation strategy", "Product positioning", "Competitive defense"],
      xp: 25,
      content: [
        {
          heading: "Four differentiation pillars",
          body: `Tightly's competitive moat isn't one feature — it's four architectural decisions compounding together:\n\n**1. Shopify-native**: Built specifically for Shopify's data model. Not a generic tool with a Shopify connector. This means faster sync, richer data access (metafields, sales channels, multi-storefront), and a UX designed for Shopify operators, not generic inventory managers.\n\n**2. AI-native**: The forecasting and recommendation engine was built with AI from day one — not a statistical model with an "AI" label added in marketing. Adaptive learning, confidence scoring, and explainable outputs are core, not bolt-ons.\n\n**3. Closed-loop architecture**: The cycle from forecast → recommend → PO → receive → learn is fully connected. Most competitors cover 1-2 steps; Tightly covers all of them. Each step feeds data back into the next cycle.\n\n**4. Operator-first UX**: Designed for lean ops teams (1-2 people managing 500+ SKUs). Sensible defaults, bulk actions, exception-based workflows. Not designed for dedicated demand planners with analytics backgrounds.`,
          goAnalogy: {
            term: "Shicho",
            reading: "しちょう",
            meaning: "A ladder sequence that, if started correctly, is unstoppable. Tightly's four pillars create a shicho — each element extends and reinforces the others. A competitor that copies one feature can't replicate the compounding architecture.",
          },
        },
        {
          heading: "The learning flywheel as moat",
          body: `Tightly's long-term moat is its learning flywheel:\n\n1. Brand joins Tightly → provides data (sales, inventory, POs, supplier history)\n2. Model learns brand-specific seasonality, supplier reliability, and demand patterns\n3. Recommendations improve → buyer acceptance rate increases → more actions taken through Tightly\n4. More actions generate more outcome data (did the PO arrive on time? did the SKU sell through?) \n5. Outcomes feed back into model → accuracy improves further\n\nOver time, this creates a significant switching cost: if a brand leaves Tightly after 18 months, they take their data but not the learned model. A new tool starts from zero. The longer a brand uses Tightly, the more painful leaving becomes.\n\nAs PM, protecting and accelerating this flywheel is a strategic priority. Every feature that increases acceptance rate, improves data quality, or closes the feedback loop is a flywheel investment.`,
        },
        {
          heading: "Where Tightly is still building",
          body: `Honest self-assessment is a sign of product maturity. Areas where Tightly is still catching up:\n\n**Reporting depth**: Inventory Planner's 200+ metric library is deeper than Tightly's current reporting. Brands that run detailed monthly board reporting from their inventory tool may find gaps.\n\n**Non-Shopify channels**: Tightly is Shopify-native — but many scaling brands also sell on Amazon, wholesale, or through POS. Multi-channel inventory unification across non-Shopify channels is an expansion area.\n\n**S&OP functionality**: As brands grow past $20M GMV and add complexity (manufacturing, B2B, multi-region planning), they'll need tools that Tightly doesn't yet cover.\n\n**Enterprise integrations**: ERP integration depth is currently "export" level. Deep bi-directional ERP sync (like Netstock's 60+ integrations) is a roadmap item, not a current capability.\n\nFor a Senior PM, knowing where your product is strong AND weak is essential. Pretending weaknesses don't exist damages trust with customers and internally.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "A prospect asks: 'What makes Tightly actually different from other Shopify inventory apps?' What is the strongest answer?",
          options: [
            "Tightly is cheaper than most alternatives and has a free tier",
            "Tightly combines Shopify-native architecture, AI-native forecasting, and a closed-loop workflow that connects forecast to PO to receipt to learning — most competitors cover only 1-2 steps",
            "Tightly has the most 3PL integrations in the market",
            "Tightly was built by supply chain experts, not software engineers",
          ],
          correct: 1,
          explanation: "The strongest differentiation is architectural: Shopify-native + AI-native + closed-loop. Competitors either cover one dimension or bolt on features. Tightly's compound architecture is the moat.",
        },
        {
          type: "multiple-choice",
          question: "Why is the learning flywheel a moat that can't be replicated by copying Tightly's features?",
          options: [
            "Because Tightly has patents on its forecasting algorithms",
            "Because the model learns from each brand's specific data history — a new tool starts from zero even if it copies the feature set",
            "Because Tightly's Shopify integration is exclusive and can't be replicated",
            "Because the flywheel requires specific hardware infrastructure that competitors can't access",
          ],
          correct: 1,
          explanation: "A competitor can copy Tightly's features but not a brand's 18 months of learned seasonality, supplier reliability data, and outcome history. The moat is the data relationship, not the code.",
        },
        {
          type: "multiple-choice",
          question: "A Tightly customer with $25M GMV says they need Amazon Seller Central inventory to be managed alongside their Shopify channels. How do you respond honestly?",
          options: [
            "Tell them Tightly fully supports Amazon inventory management today",
            "Acknowledge that Amazon channel integration is a roadmap item and discuss the current workaround (manual export/import) while setting honest expectations about timeline",
            "Recommend they use a different tool for Amazon and Tightly for Shopify",
            "Escalate to engineering to build an emergency Amazon integration",
          ],
          correct: 1,
          explanation: "Honest self-assessment builds trust. If Amazon integration is a roadmap item, say so, describe the current workaround, and set clear expectations. Overselling causes churn; honesty builds long-term relationships.",
        },
      ],
      resources: [
        {
          title: "Tightly: Home Page and Product Overview",
          url: "https://tightly.io",
          description: "Tightly's own positioning and product messaging.",
        },
        {
          title: "Shopify App Store: Tightly Listing",
          url: "https://apps.shopify.com/tightly-io",
          description: "Customer reviews and feature summary from the Shopify App Store.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "Tightly is best described as which tier in the inventory management market?",
      options: ["Tier 3 — ERP platform (SAP, NetSuite)", "Tier 2 — Full inventory management platform (Cin7, Brightpearl)", "Tier 1 — Dedicated inventory planning/forecasting tool", "A standalone WMS (Warehouse Management System)"],
      correct: 2,
      explanation: "Tightly is a Tier 1 dedicated planning tool — purpose-built for forecasting and replenishment. It layers on top of Tier 2 and Tier 3 tools rather than replacing them.",
    },
    {
      type: "multiple-choice",
      question: "Which of the following is a genuine current weakness of Tightly that a Senior PM should be ready to address?",
      options: ["Tightly doesn't integrate with Shopify", "Tightly lacks a mobile app", "Tightly's reporting depth is shallower than Inventory Planner's 200+ metric library", "Tightly can't handle brands with more than 100 SKUs"],
      correct: 2,
      explanation: "Tightly is strong on replenishment and AI, but Inventory Planner's reporting depth (200+ metrics) is deeper. For brands running complex management reporting from their inventory tool, this is a real gap.",
    },
    {
      type: "multiple-choice",
      question: "What post-acquisition change to Inventory Planner by Sage has most directly created an opening for Tightly?",
      options: ["Sage rebranded the product, confusing existing customers", "Sage increased prices 3x+ for some customers, deprecated the transfer feature, and slowed innovation", "Sage integrated Inventory Planner exclusively into NetSuite, making it unavailable for Shopify brands", "Sage discontinued customer support for the product"],
      correct: 1,
      explanation: "Price increases, deprecated features, and slower innovation are the three main reasons Inventory Planner customers have started evaluating alternatives — Tightly's primary acquisition channel.",
    },
    {
      type: "multiple-choice",
      question: "Why does Tightly describe its architecture as 'closed-loop' rather than just 'AI-powered'?",
      options: ["Because 'AI-powered' is overused marketing language with no technical meaning", "Because the closed loop specifically describes the full cycle: forecast → recommend → PO → receive → learn, where outcomes feed back into the next cycle", "Because Tightly doesn't use AI in its current forecasting model", "Because closed-loop is a technical requirement for Shopify app certification"],
      correct: 1,
      explanation: "Closed-loop describes the complete data cycle where each step feeds the next — and outcomes improve future forecasts. This is architecturally different from tools that stop at recommendations.",
    },
    {
      type: "multiple-choice",
      question: "Tightly's learning flywheel creates switching costs because:",
      options: ["Tightly contracts include 12-month minimum terms", "Tightly uses proprietary data formats that can't be exported", "The model learns brand-specific patterns over time — a brand that leaves loses their learned history and starts over with a new tool", "Tightly locks in Shopify API credentials that prevent competitors from connecting"],
      correct: 2,
      explanation: "The switching cost is the learned model, not contract terms or data lock-in. 18 months of brand-specific seasonality learning is genuinely painful to lose and rebuild.",
    },
  ],
  quizXp: 35,
};
