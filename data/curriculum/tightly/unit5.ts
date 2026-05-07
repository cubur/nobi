import type { Unit } from "@/data/types";

export const tightlyUnit5: Unit = {
  id: "tightly-unit5",
  companySlug: "tightly",
  title: "Market Intelligence",
  description:
    "To build the right product you first need to understand the market's accumulated wisdom — what users have repeatedly complained about, what competitors have tried and abandoned, and which patterns keep recurring across the category. This unit maps the inventory planning landscape so you can find Tightly's lane.",
  goTerm: "Joseki",
  goReading: "じょせき",
  goMeaning:
    "Joseki are established corner sequences in Go — both players follow a pattern that's been proven optimal through thousands of games. In PM work, joseki is understanding the established wisdom of a market: what users have repeatedly complained about, what competitors have tried and abandoned, and which patterns keep recurring across the category.",
  color: "ice",
  lessons: [
    // ─── Lesson 5-1 ────────────────────────────────────────────────────────────
    {
      id: "tightly-5-1",
      unitId: "tightly-unit5",
      companySlug: "tightly",
      title: "What Customers Actually Say",
      tldr:
        "G2, Capterra, and Reddit reviews are a free, unfiltered readout of what the inventory planning market gets right and gets badly wrong. Here's what the data says.",
      skills: ["Competitive Research", "Voice of Customer", "Review Mining"],
      xp: 25,
      content: [
        {
          body: "# What Customers Actually Say\n\nBefore you write a single PRD at Tightly, spend a few hours reading reviews on G2, Capterra, and Reddit's r/ecommerce and r/shopify. These are unfiltered signals from real buyers — no marketing spin, no sales-mediated framing. What people praise and what they complain about in aggregate tells you more about product-market fit than any analyst report.\n\nThis lesson maps the review landscape for the inventory planning software category so you walk in knowing the terrain.",
        },
        {
          heading: "What Users Praise Across the Category",
          body: "Across tools, the positive reviews cluster around a few consistent themes. Users light up when:\n\n**Setup is fast and Shopify integration is seamless.** The highest-rated reviews almost universally mention getting connected and seeing their data in under an hour. Shopify brands have low patience for complex implementation — they compare everything to \"it just synced.\"\n\n**Time savings on purchase orders are immediately obvious.** When users say \"I used to spend all day Monday on POs, now it takes an hour,\" that's a tool working. Time-to-first-PO-recommendation is a key activation metric across the category.\n\n**Forecast accuracy noticeably improves on their best SKUs.** Users often single out a specific product: \"It nailed our summer seasonality on our top seller.\" Concrete accuracy wins build trust faster than feature lists.\n\n**Customer support is responsive.** In a category where tools are complex and data-sensitive, fast support is disproportionately valued. For smaller brands, a support rep who understands supply chain is a retention mechanism.",
        },
        {
          heading: "Tool-by-Tool: What Users Complain About",
          body: "**Inventory Planner by Sage** (formerly independent, acquired 2022)\nPost-acquisition reviews have shifted sharply negative on several dimensions:\n- *Support degradation*: \"Used to get a reply in hours; now it's days, and the rep doesn't know the product.\" The acquisition broke the human connection that indie users valued.\n- *Pricing hikes*: Multiple reviews cite 40-80% price increases post-acquisition with no commensurate feature improvements.\n- *Shopify sync reliability*: \"It randomly stops pulling orders and I don't know until I check the sync log manually.\" This is the most alarming complaint — unreliable data input means unreliable PO recommendations.\n- *Limited multi-location support*: Brands with multiple 3PLs or warehouses hit hard ceilings. \"Works great for one warehouse; completely breaks for two.\"\n- *Slow product cadence*: Features that were on the public roadmap 18 months ago have still not shipped.\n\n**Netstock**\n- *Steep learning curve*: \"Took three months before we felt comfortable.\" The onboarding is ERP-centric — it assumes users have a supply chain background and a dedicated implementation partner.\n- *Feels heavy for pure Shopify brands*: Netstock's architecture is built for multi-channel distributors. DTC Shopify brands feel like they're using 20% of a system designed for someone else.\n- *UI feels dated*: Consistent complaints about dense, form-heavy screens. \"Looks like it was designed in 2012.\"\n- *Limited self-service onboarding*: Most users needed a paid onboarding engagement to go live. For SMB brands, this is a non-starter.\n\n**Prediko** (Shopify-native, raised in 2023-24)\n- *Limited forecasting sophistication*: \"Great for simple, fast-moving SKUs but falls apart on seasonal products or anything with a promotional pattern.\"\n- *No real multi-location support*: Hard stop for brands managing inventory across multiple warehouses or 3PLs.\n- *Basic PO management*: PO generation works; PO collaboration (notes, approvals, multi-user workflows) does not.\n- *Missing supplier lead time variability handling*: The tool assumes static lead times. Brands with variable supplier performance — which is most of them — get inaccurate reorder recommendations.\n\n**Cin7 / Brightpearl**\n- *Extremely complex implementation*: Implementation projects running 3-6 months are common. Professional services costs often exceed the annual SaaS fee.\n- *Expensive*: Entry pricing is typically $500-$1,500/month before implementation and add-ons.\n- *Overkill for mid-market DTC*: These are full OMS + inventory suites. A $5M Shopify brand using Cin7 is like using an 18-wheel truck for grocery runs — they have it, but they hate the parking.",
        },
        {
          heading: "Cross-Cutting Themes: What Everyone Wants",
          body: "Regardless of which tool they're using, users across the category express versions of the same unmet needs:\n\n**Forecast explainability**: \"Why did it tell me to order 500 units when I only sell 80 a week?\" Users want to understand the recommendation, not just see a number. This complaint appears in reviews of every tool in the category. Nobody has solved it well.\n\n**Bulk actions for PO approval**: Power users managing 200+ SKUs cannot click through individual PO approvals. \"I need a one-click approve all\" is the most common workflow-level feature request.\n\n**Better seasonality handling**: \"It doesn't account for the fact that we sell 5x in November-December.\" Seasonal businesses — a large fraction of DTC Shopify brands — feel consistently underserved.\n\n**Cleaner UX with fewer clicks**: The category as a whole has dense, complex interfaces built by teams who think like supply chain consultants, not product designers. The bar for \"clean\" is low.",
        },
        {
          heading: "PM Implication: Where the Gaps Point",
          body: "Reading review data as a PM isn't just about knowing the competition — it's about identifying where repeated frustration signals unmet demand that Tightly can own.\n\nThree signals stand out:\n\n1. **Explainability is a category gap, not a vendor gap.** Every tool gets this complaint. The brand that builds \"show your work\" into the recommendation UI will have a durable differentiation point.\n\n2. **The post-acquisition degradation of Inventory Planner is actively creating churned customers.** Many reviews end with \"looking for alternatives.\" Tightly's sales team should be targeting Inventory Planner accounts that are 12-18 months post-acquisition — they're the most motivated switchers.\n\n3. **Prediko's ceiling is real.** Customers love Prediko until they grow. A natural upgrade path exists from Prediko to Tightly for brands hitting $2M-$5M who are outgrowing simplicity. Understanding what triggers that \"Prediko isn't enough anymore\" moment is a critical discovery question.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A brand currently using Inventory Planner by Sage posts a G2 review: 'Pricing went up 60% and support has gotten terrible since the Sage acquisition. Looking for alternatives.' What is the most PM-correct response to this signal at Tightly?",
          options: [
            "Prioritize a Shopify sync reliability feature, since that's the most-mentioned technical complaint about Inventory Planner",
            "Flag this as a high-intent sales opportunity and ensure Tightly's switching cost is low — migration tooling, onboarding support, pricing clarity",
            "Lower Tightly's pricing to compete directly with pre-acquisition Inventory Planner",
            "Build a comparison landing page targeting 'Inventory Planner alternative' search terms",
          ],
          correct: 1,
          explanation:
            "The review signals a motivated switcher — they've already decided to leave. The PM job is to reduce switching friction, not to re-compete on features or price. Migration tooling (import from IP, data validation), a fast onboarding experience, and a clear value story are what convert a churning competitor customer. A landing page is a marketing action; lowering pricing may not be warranted; and shipping features for Shopify sync is useful long-term but doesn't address the immediate conversion opportunity.",
        },
        {
          type: "multiple-choice",
          question:
            "Multiple Prediko reviews say: 'Great for our core SKUs, but we have a product line that sells 3x in Q4 and Prediko just doesn't handle it.' What does this tell you about where Tightly should focus?",
          options: [
            "Tightly should build a Q4 promotional calendar feature to capture holiday traffic",
            "Tightly should improve its seasonality modeling and make the improvement visible to users — this is a realistic upgrade trigger from Prediko",
            "Tightly should acquire Prediko to remove a competitor from the market",
            "Seasonality handling is too complex for SMB brands; focus on the core replenishment workflow instead",
          ],
          correct: 1,
          explanation:
            "Prediko's seasonality weakness is a documented ceiling that drives real churn and switch intent. Brands that outgrow Prediko's forecasting sophistication are exactly the ICP Tightly is targeting ($2M-$10M DTC). Building verifiably better seasonality handling — and making the accuracy improvement visible in the product UI — creates a natural upgrade story. The discovery question to answer first: what triggers the decision to switch? Likely a missed Q4, an overstock event, or a new ops hire who demands better tooling.",
        },
        {
          type: "multiple-choice",
          question:
            "Which of the following cross-cutting review complaints represents the best product differentiation opportunity for Tightly, and why?",
          options: [
            "Cleaner UX — because UI quality is easy to improve and broadly valued",
            "Better seasonality handling — because seasonal DTC brands are a large addressable segment",
            "Forecast explainability — because no tool in the category has solved it and it is a trust-building feature that drives PO acceptance rate",
            "Bulk PO approval — because power users need it and it reduces time-on-task significantly",
          ],
          correct: 2,
          explanation:
            "Explainability is the rarest combination: a universal complaint across all tools in the category, a feature that directly drives the key product metric (PO acceptance rate), and something that no competitor has invested in building well. Clean UX is table stakes. Seasonality and bulk PO are both valuable but don't offer the same durable differentiation — competitors can copy them. Explainability requires a model transparency investment that entrenches the tool with buyers and builds trust that compounds over time.",
        },
      ],
      resources: [
        {
          title: "G2 — Inventory Management Software Reviews",
          url: "https://www.g2.com/categories/inventory-management",
          description:
            "Unfiltered buyer reviews across all major inventory planning tools. Filter by company size ($1M-$10M) to find reviews from Tightly's ICP.",
        },
        {
          title: "Capterra — Inventory Control Software",
          url: "https://www.capterra.com/inventory-control-software/",
          description:
            "Alternative review source with strong SMB representation. Search for specific competitor tools to read recent reviews.",
        },
        {
          title: "r/fulfillment and r/ecommerce on Reddit",
          url: "https://www.reddit.com/r/ecommerce/",
          description:
            "Search for 'inventory planning', 'reorder', 'Inventory Planner', 'Prediko' to find candid brand operator discussions — often more specific than formal review sites.",
        },
      ],
    },

    // ─── Lesson 5-2 ────────────────────────────────────────────────────────────
    {
      id: "tightly-5-2",
      unitId: "tightly-unit5",
      companySlug: "tightly",
      title: "Competitor Recent Moves & Trajectories",
      tldr:
        "Understanding where competitors are going matters more than where they are today. Every major player is moving — and the direction they're moving reveals the market segment they're vacating.",
      skills: ["Competitive Analysis", "Market Positioning", "Strategic Planning"],
      xp: 25,
      content: [
        {
          body: "# Competitor Recent Moves & Trajectories\n\nCompetitive analysis isn't a one-time snapshot — it's a directional read. Where a competitor is today is less important than the trajectory they're on. A tool that's moving upmarket is actively abandoning its SMB customers. A tool that's staying simple is capping its ceiling. Understanding these vectors helps you see which lane is opening up for Tightly.",
        },
        {
          heading: "Inventory Planner by Sage: The Acquisition Drag",
          body: "**What they've shipped recently**: Since the 2022 Sage acquisition, the product roadmap has slowed visibly. The major releases have been ERP integration expansions (Sage X3, Sage Intacct), multi-entity support for brands with multiple legal entities, and enterprise-grade audit logging. The Shopify-native improvements that defined the pre-acquisition product have largely stopped.\n\n**Trajectory**: Moving upmarket toward enterprise and ERP-dependent customers. Sage's existing customer base is mid-to-large enterprise; they want Inventory Planner to serve as the demand planning module for that segment, not to compete on Shopify App Store discovery.\n\n**Weakness they're creating**: The $1M-$10M Shopify brand is no longer the priority customer. Support is slower, the product moves slower, and pricing is higher. This is a large segment being actively deprioritized — and they're vocal about it on review sites.\n\n**What Tightly should do with this**: Identify Inventory Planner accounts that are 12-24 months post-acquisition (they'll have lived through at least one renewal cycle) and are starting to feel the service degradation. These are the highest-intent switchers in the market.",
        },
        {
          heading: "Prediko: Doubling Down on Simple",
          body: "**What they've shipped recently**: Prediko raised in 2023-24 and used the capital to invest in their Shopify-native experience. Recent additions include bundle forecasting (forecasting demand for bundles as a unit, not just components), a refreshed analytics UI with visual DoS charts, and improved onboarding with a guided setup flow. They've also added Shopify Markets support for brands selling in multiple regions.\n\n**Trajectory**: Stay Shopify-native, stay simple, stay affordable. Prediko is explicitly not trying to be Netstock. Their bet is that there are thousands of Shopify brands in the $500K-$3M range who need 80% of the functionality at 20% of the complexity, and they can own that segment.\n\n**Weakness they're creating**: The ceiling is real and getting lower as brands grow. Bundle forecasting helps, but multi-location remains limited. More importantly, their forecasting engine is not getting meaningfully more sophisticated — it's a good model applied simply, not a great model. Brands that grow into complexity will outgrow Prediko before they outgrow Tightly.\n\n**What Tightly should do with this**: Don't compete with Prediko on simplicity — you'll lose, and it's not your segment. Instead, define the upgrade criteria clearly: when a brand has more than 3 warehouses, more than 300 active SKUs, or a seasonal coefficient above 2x, they need Tightly. Make the upgrade story explicit in marketing and sales.",
        },
        {
          heading: "Netstock: The Enterprise Migration",
          body: "**What they've shipped recently**: Netstock has added S&OP-style planning layers — scenario modeling, demand consensus workflows, executive dashboard views. They've deepened ERP integrations (SAP, Oracle NetSuite) and are increasingly marketing to VP Supply Chain and COO buyers rather than ops managers.\n\n**Trajectory**: Moving toward enterprise supply chain planning — less pure replenishment, more planning orchestration. They want to be in the same conversation as Kinaxis and o9 Solutions, just for mid-market.\n\n**Weakness they're creating**: They're leaving the \"I need better Shopify replenishment\" customer behind. The brands who used Netstock for Shopify-native demand planning and liked it are now finding the product increasingly complex, expensive, and oriented toward problems they don't have.\n\n**What Tightly should do with this**: The Netstock customers who are $3M-$15M Shopify-first brands are a natural fit for Tightly. They want sophistication without enterprise complexity. Tightly's pitch against Netstock is: \"You're paying for 60% of a tool you don't need. We're built for your size.\"",
        },
        {
          heading: "Cin7 / Brightpearl: The OMS Consolidation Play",
          body: "**What they've shipped recently**: Both tools have leaned into AI-labelled features — what are essentially heuristics and analytics wrapped in an \"AI-powered\" marketing layer. More significantly, they're consolidating into full OMS + inventory suites: order management, warehousing, inventory, and light demand planning in one platform. They've added Shopify Plus integrations and are marketing to brands doing $20M+.\n\n**Trajectory**: Becoming the operational backbone for high-complexity, high-volume DTC brands. Their play is consolidation — replace 4-5 point solutions with one platform.\n\n**Weakness they're creating**: The consolidation play adds complexity, not removes it. Brands at $3M-$15M don't want to replace all their tools; they want their inventory planning to work better. Cin7 and Brightpearl require implementation projects, dedicated admins, and ongoing consultants to maintain.\n\n**What Tightly should do with this**: Explicitly position as a point solution that integrates with what brands already use (Shopify, ShipBob, their 3PL, Gorgias, Klaviyo). \"We make your inventory smarter without replacing your stack\" is a direct counter to the Cin7/Brightpearl consolidation narrative.",
        },
        {
          heading: "The Whitespace Reading: Everyone Is Moving Except Into the Middle",
          body: "Step back and look at all four trajectories together:\n\n- Inventory Planner → moving upmarket (enterprise ERP)\n- Netstock → moving upmarket (enterprise supply chain planning)\n- Cin7/Brightpearl → moving upmarket (full OMS consolidation)\n- Prediko → staying downmarket (simple, cheap, Shopify-native SMB)\n\nThe $3M-$30M DTC brand — sophisticated enough to need real forecasting, too small to need ERP integration, Shopify-native, growing — is being left behind by everyone moving upmarket and underserved by the simplicity-first downmarket tools.\n\n**This is Tightly's lane.** Not because no one has entered it, but because everyone who could compete there is actively choosing to leave.\n\nThe PM implication: every major roadmap decision at Tightly should be evaluated against one question — does this feature serve the $3M-$30M Shopify brand better than anyone else can, or does it pull us toward complexity we don't need or simplicity we've outgrown?",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "Inventory Planner by Sage has added ERP integrations with Sage X3 and Intacct, and their Shopify-native feature development has slowed significantly. What is the most strategically useful interpretation of this for Tightly?",
          options: [
            "Tightly should build ERP integrations to compete in the same enterprise segment",
            "Tightly should focus on Shopify-native features and target Inventory Planner's churning SMB customers as switchers",
            "Tightly should lower prices to undercut Inventory Planner's post-acquisition pricing",
            "This is not relevant since Tightly targets different company sizes",
          ],
          correct: 1,
          explanation:
            "When a competitor moves upmarket, they create churn among their existing SMB customers — who are unhappy with the direction, the pricing, and the support degradation. Tightly's strategic opportunity is to capture that churn by being the best Shopify-native alternative. Building ERP integrations to compete upmarket would abandon Tightly's lane. Price competition alone doesn't win switchers who care about product quality. And it's definitely relevant — these churning Inventory Planner customers are among Tightly's highest-intent prospects.",
        },
        {
          type: "multiple-choice",
          question:
            "Prediko recently shipped bundle forecasting and refreshed their analytics UI. A Tightly PM suggests: 'We should copy these features to stay competitive.' What's the problem with this reasoning?",
          options: [
            "Bundle forecasting is a technically complex feature that Tightly can't build",
            "Copying features is always wrong — Tightly should only ship original innovations",
            "Matching Prediko's feature set doesn't win on their terms; Tightly should differentiate on sophistication, not parity with a simpler competitor",
            "Prediko's UI refresh is a design decision, not a product decision",
          ],
          correct: 2,
          explanation:
            "Competing by copying a simpler competitor's recent features is strategically backward. Prediko's lane is simplicity and low price — matching them there weakens Tightly's positioning without winning that segment. Tightly's advantage is forecasting sophistication, explainability, and multi-location capabilities that Prediko can't easily build. Bundle forecasting is worth shipping if Tightly's customers need it, but the reason to ship it should be customer demand, not Prediko's roadmap. The competitive response to Prediko is to make the upgrade from Prediko to Tightly seamless — not to eliminate the reason to upgrade.",
        },
        {
          type: "multiple-choice",
          question:
            "Based on the competitive trajectory analysis, which brand profile is MOST likely to be in Tightly's sweet spot — the segment that competitors are actively vacating?",
          options: [
            "A $500K Shopify brand with 40 SKUs run by a founder-operator with no ops staff",
            "A $50M multi-channel brand with SAP integration requirements and a 5-person supply chain team",
            "A $6M Shopify-first DTC brand with 2 warehouses, 180 SKUs, and a recently hired ops manager",
            "A $20M brand on Shopify Plus using Brightpearl for OMS and looking to consolidate tools",
          ],
          correct: 2,
          explanation:
            "The $6M Shopify-first brand with multiple warehouses, a growing SKU catalog, and a new ops hire is exactly the profile that outgrows Prediko (too complex) but doesn't need Cin7/Netstock (too heavy). They need real forecasting sophistication, multi-location support, explainability, and a tool that won't take 3 months to implement. This is the customer every major competitor is leaving behind. The $500K brand is Prediko's segment. The $50M brand with SAP needs Netstock or above. The Brightpearl customer is embedded in a competing OMS stack.",
        },
      ],
      resources: [
        {
          title: "Prediko — Shopify Inventory Planning App",
          url: "https://www.prediko.io",
          description:
            "Walk through their onboarding and pricing page quarterly. Their positioning copy changes as they figure out their market.",
        },
        {
          title: "Netstock — Inventory Optimization Software",
          url: "https://www.netstock.com",
          description:
            "Review their case studies and product pages to track their upmarket movement and S&OP positioning.",
        },
        {
          title: "Inventory Planner by Sage",
          url: "https://www.inventoryplanner.com",
          description:
            "Check G2 reviews quarterly to monitor customer sentiment post-acquisition. The delta from their pre-acquisition ratings tells you how much churn opportunity is building.",
        },
      ],
    },

    // ─── Lesson 5-3 ────────────────────────────────────────────────────────────
    {
      id: "tightly-5-3",
      unitId: "tightly-unit5",
      companySlug: "tightly",
      title: "Finding the Whitespace",
      tldr:
        "Synthesizing user review patterns and competitor trajectories into specific product opportunities — and a framework for validating and prioritizing them.",
      skills: ["Opportunity Sizing", "Product Strategy", "Roadmap Prioritization"],
      xp: 25,
      content: [
        {
          body: "# Finding the Whitespace\n\nCompetitive intelligence is only useful when it drives decisions. This lesson turns the review patterns and competitor trajectory analysis from the previous two lessons into a concrete whitespace map for Tightly — and gives you a framework for validating and prioritizing those opportunities before committing roadmap resources.",
        },
        {
          heading: "The User Feedback → Product Gap Mapping Framework",
          body: "Review data is noisy. Not every complaint is a product opportunity. Use this filter to separate signal from noise:\n\n**Step 1: Cluster the complaints.** Group reviews into themes. Don't treat every complaint as unique — look for patterns across 10+ reviews before treating something as a validated pain.\n\n**Step 2: Check for competitor solutions.** If every competitor already has a solution for a complaint and reviews still surface it, the problem is either execution (the implementations are bad) or expectation (users expect more than the category delivers). Both can be opportunities.\n\n**Step 3: Map to workflow moments.** For each complaint cluster, ask: where in the user's workflow does this pain occur? Is it during data setup, daily review, PO creation, or supplier communication? Pain that occurs in high-frequency workflows (daily) is more valuable to solve than pain in low-frequency workflows (quarterly).\n\n**Step 4: Estimate the stakes.** If they don't solve this, what happens? Complaints that map to financial outcomes (overstock event, stockout, missed supplier window) are higher priority than complaints that map to annoyance (too many clicks, UI confusion).",
        },
        {
          heading: "Three Whitespace Opportunities for Tightly",
          body: "Applying this framework to the review data produces three high-confidence whitespace opportunities:\n\n**Opportunity 1: Explainability of AI Recommendations**\n*The gap*: Every tool in the category generates recommendations; no tool explains them well. Users across all platforms complain about not understanding why a PO was recommended at a specific quantity or timing.\n*The financial stake*: A buyer who doesn't understand a recommendation will either reject it (lowering PO acceptance rate) or accept it blindly and lose trust when it's wrong. Both outcomes hurt retention.\n*What good looks like*: A recommendation card that shows the contributing factors — \"This PO is driven by Q4 seasonality (+40% uplift), a 14-day supplier lead time, and a DoS that drops to 7 days without action\" — and lets users drill into each factor. Not a black box.\n\n**Opportunity 2: Supplier Relationship Management Inside the Replenishment Workflow**\n*The gap*: Replenishment recommendations are only as good as the supplier data feeding them. Lead time variability, MOQ changes, and temporary supplier constraints are tracked in spreadsheets, email threads, and ops managers' heads — not in the tool generating the POs.\n*The financial stake*: Inaccurate supplier data causes wrong PO timing. Wrong PO timing causes stockouts or overstock. This is the root cause of most \"the tool suggested something crazy\" complaints.\n*What good looks like*: A supplier profile inside Tightly that tracks actual vs. promised lead times, surfaces lead time drift (\"this supplier's average lead time has increased from 14 to 22 days over the last 6 months\"), and automatically adjusts replenishment calculations.\n\n**Opportunity 3: Cash Flow Impact Modeling on Every PO**\n*The gap*: Inventory planning tools speak in units and days. Founders and CFOs speak in dollars and cash. No tool currently shows the working capital implication of the PO it's recommending.\n*The financial stake*: For a $5M brand with thin margins, a $200K purchase order tied up in 90-day inventory is an existential decision, not an operational one. Founders who feel this risk will be conservative and reject POs — reducing the value they get from the tool.\n*What good looks like*: Every PO recommendation shows estimated cash tied up (cost × units × days until sold), cash flow timing (when does this inventory convert to cash, given average DoS?), and a simple comparison — \"Ordering 500 units ties up $18,000 for ~42 days vs. ordering 300 units ties up $11,000 for ~42 days.\"",
        },
        {
          heading: "How to Validate Whitespace Before Building",
          body: "Identifying whitespace from review data is hypothesis generation, not validation. Before committing engineering resources, validate with:\n\n**Discovery interviews targeted to the gap**: Don't ask \"would you want explainability?\" — ask \"walk me through the last time you disagreed with a Tightly recommendation. What did you do?\" If they describe a workaround that reveals the missing information, you've validated.\n\n**Support ticket analysis**: Pull 3 months of support tickets and classify them. If \"why did Tightly recommend X\" is in the top 5 ticket types, explainability is validated. If suppliers appear in tickets about wrong recommendations, the supplier data gap is validated.\n\n**Win/loss patterns**: Ask the sales team — what objections come up in deals you lose? What do churned customers say? If \"we don't understand what the tool is doing\" is in the churn data, explainability becomes urgent.\n\n**Cohort behavior analysis**: If you have product analytics, look at whether customers who configure supplier lead times have higher PO acceptance rates than those who don't. That's a quantitative proxy for the supplier data gap's impact.",
        },
        {
          heading: "Prioritizing Whitespace: Impact × Confidence × Effort",
          body: "Once validated, prioritize using a simple ICE matrix adapted for inventory planning context:\n\n**Impact**: Does solving this directly improve a retention metric (PO acceptance rate, MAPE, stockout rate)? Does it expand the ICP (cash flow modeling unlocks founder-level engagement, not just ops)?  \n**Confidence**: How many distinct data sources validate this gap (reviews + support tickets + interview data)?  \n**Effort**: Is this a UI/data presentation problem (easier) or a model/data pipeline problem (harder)?\n\nApplied to the three opportunities:\n\n| Opportunity | Impact | Confidence | Effort | ICE Score |\n|---|---|---|---|---|\n| Explainability | High (trust + retention) | High (universal review pattern) | Medium (UI + model transparency) | **Build first** |\n| Supplier intelligence | High (input quality = output quality) | High (support ticket data) | High (data pipeline + UI) | **Build second** |\n| Cash flow modeling | High (unlocks CEO retention) | Medium (fewer explicit reviews) | Medium (financial calculation + API) | **Build third** |\n\nThe competitive intelligence validates this order: explainability is table stakes that no one has built, supplier intelligence is an input quality problem that drives all output quality, and cash flow modeling is a strategic differentiator that opens a new buyer persona.",
        },
        {
          heading: "Using Competitive Intelligence as a Roadmap Forcing Function",
          body: "A practical PM workflow for integrating competitive intelligence into quarterly planning:\n\n**Monthly**: Do a 30-minute competitive review. Check G2 for new reviews on the top 3 competitors. Check their changelog or product announcement pages. What did they ship? What complaints remain unsolved?\n\n**Quarterly**: Run a whitespace refresh. Have any of the three identified opportunities been addressed by a competitor? Have new ones emerged? Update the ICE scores with new data.\n\n**Before every major roadmap review**: Ask \"does this feature defend our lane or move us out of it?\" A feature that makes Tightly more like Netstock is not automatically good — it may be pulling you out of the $3M-$30M DTC sweet spot that competitors are vacating.\n\nThe goal of competitive intelligence isn't to copy competitors or to differentiate for differentiation's sake. It's to see the market clearly enough that your roadmap choices are defensible — and to find the moves that opponents have proven valuable but failed to execute well.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "You've identified 'explainability of AI recommendations' as a whitespace opportunity based on review data. Before adding it to the Q2 roadmap, what's the most PM-correct next step?",
          options: [
            "Ship a basic version immediately since the review data is strong enough to validate it",
            "Present the opportunity to engineering and let them estimate the build effort",
            "Run discovery interviews and support ticket analysis to validate that Tightly's own customers experience this gap — not just competitor customers",
            "Check if any competitor has started building explainability features and copy their approach",
          ],
          correct: 2,
          explanation:
            "Review data from competitors validates that the gap exists in the market. Before committing roadmap resources, you need to validate it against Tightly's own customers — through interviews, support ticket analysis, and product analytics (like override rate). Your customers may have the same pain or a different acute issue. Discovery validates the hypothesis before engineering starts. Shipping immediately on review data alone skips validation. Asking engineering for estimates is premature before validating. Copying a competitor's approach is a solution jump without understanding Tightly's specific customer needs.",
        },
        {
          type: "multiple-choice",
          question:
            "An ops manager tells you in discovery: 'Every time I review POs, I open a separate tab with our supplier's WhatsApp messages to check if they're running late before I approve.' What whitespace opportunity does this most directly validate?",
          options: [
            "Explainability — the buyer doesn't trust the recommendation",
            "Cash flow modeling — they're checking supplier costs before committing capital",
            "Supplier intelligence — lead time data isn't in the tool, so they work around it manually",
            "Bulk PO approval — they're doing too many manual steps per PO",
          ],
          correct: 2,
          explanation:
            "Checking WhatsApp for supplier status before approving a PO is a textbook workaround for missing supplier data inside the tool. The ops manager needs current lead time information (is the supplier running late?) to make a sound PO decision, and Tightly doesn't surface it — so they work around it. This directly validates the supplier intelligence whitespace opportunity: if Tightly tracked real-time lead time performance and flagged supplier delays, this workaround disappears. It's not an explainability issue (they understand the recommendation), a cash issue, or primarily a bulk-action issue.",
        },
        {
          type: "multiple-choice",
          question:
            "Using the ICE framework, which of these three Tightly whitespace opportunities should be prioritized first, and why?",
          options: [
            "Cash flow modeling — because it appeals to the CEO persona who makes renewal decisions",
            "Supplier intelligence — because improving input data quality improves all downstream outputs",
            "Explainability — because it has high impact on a key metric (PO acceptance rate), high confidence from multiple data sources, and medium effort relative to the others",
            "All three should be designed together since they're interconnected",
          ],
          correct: 2,
          explanation:
            "ICE scoring prioritizes explainability first: it has the highest confidence (universal review pattern across all competitors, support ticket evidence), direct impact on PO acceptance rate (the key trust metric), and medium effort (primarily a UI and model transparency problem, not a new data pipeline). Supplier intelligence has high impact but higher effort (requires new data infrastructure). Cash flow modeling has high strategic value but medium confidence from review data and needs API integrations. Designing all three together sounds collaborative but is a prioritization trap — without sequencing, none ships.",
        },
      ],
      resources: [
        {
          title: "Continuous Discovery Habits — Teresa Torres",
          url: "https://www.producttalk.org/2021/08/product-discovery/",
          description:
            "The foundational text on embedding customer discovery into weekly PM workflows — relevant for validating whitespace opportunities before committing to roadmap.",
        },
        {
          title: "ICE Scoring Model — Intercom",
          url: "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/",
          description:
            "A practical introduction to impact/confidence/effort prioritization frameworks (Intercom's version is RICE, but the principles apply directly to ICE scoring).",
        },
        {
          title: "Win/Loss Analysis in B2B SaaS — OpenView",
          url: "https://openviewpartners.com/blog/win-loss-analysis/",
          description:
            "How to structure win/loss interviews to extract competitive intelligence that validates whitespace hypotheses — particularly useful for Tightly's sales-to-PM feedback loop.",
        },
      ],
    },
  ],

  // ── Unit Quiz ────────────────────────────────────────────────────────────────
  quizXp: 35,
  quiz: [
    {
      type: "multiple-choice",
      question:
        "A G2 review of Inventory Planner by Sage says: 'The Sage acquisition has been a disaster — support response times went from 4 hours to 4 days and pricing went up 50%. Actively evaluating alternatives.' What is the most PM-relevant action for Tightly?",
      options: [
        "Schedule a competitive feature tear-down of Inventory Planner to identify parity gaps",
        "Treat this as evidence of a motivated switcher segment and ensure Tightly's migration experience is frictionless",
        "Add 'Inventory Planner alternative' to Tightly's paid search keyword list",
        "Lower Tightly's pricing to be meaningfully cheaper than post-acquisition Inventory Planner",
      ],
      correct: 1,
      explanation:
        "This review signals a high-intent customer who has already decided to leave — they're shopping for alternatives. The PM's job is to ensure that when they land on Tightly, switching is easy: clean data import from Inventory Planner, fast time-to-first-recommendation, and responsive onboarding support. Feature parity analysis and keyword buys are marketing and competitive tasks. Price competition alone doesn't win customers who are frustrated with product quality and support.",
    },
    {
      type: "multiple-choice",
      question:
        "Looking at all four major competitors, Inventory Planner, Netstock, Cin7, and Prediko — which brand profile is most clearly underserved by all of them simultaneously?",
      options: [
        "A $500K Shopify brand with 30 SKUs and a founder doing all the ops manually",
        "A $7M Shopify-first DTC brand with 200 SKUs, 2 warehouses, and an ops manager who needs real forecasting sophistication without enterprise complexity",
        "A $60M omni-channel brand with EDI requirements and a 10-person supply chain team",
        "A $2M brand just starting to think about inventory planning for the first time",
      ],
      correct: 1,
      explanation:
        "The $7M Shopify-first brand with a hired ops manager is too complex for Prediko, too small and Shopify-native for Netstock, priced out of Cin7's implementation costs, and deprioritized by Inventory Planner post-acquisition. This is the exact segment all four competitors are actively leaving behind through their respective strategic moves. The $500K brand and $2M brand are Prediko's territory. The $60M omni-channel brand is Netstock or Cin7 territory.",
    },
    {
      type: "multiple-choice",
      question:
        "Prediko has stayed simple and affordable, doubling down on the sub-$3M Shopify brand. Why is it a mistake for Tightly to compete with Prediko on price and simplicity in that segment?",
      options: [
        "Prediko has a patent on their forecasting algorithm that Tightly cannot replicate",
        "Competing on simplicity and price in Prediko's lane requires Tightly to abandon the sophistication features that serve its actual ICP and defend its differentiation",
        "The sub-$3M segment is too small to generate meaningful revenue for Tightly",
        "Prediko's brand recognition is too strong to displace in that segment",
      ],
      correct: 1,
      explanation:
        "This is a positioning discipline question. Tightly's differentiation is forecasting sophistication, explainability, multi-location support, and supplier intelligence — features that serve the $3M-$30M brand. Competing on simplicity and price against Prediko means stripping the product of the capabilities that make it valuable to Tightly's actual ICP. It's not that the segment is too small or Prediko's brand is too strong — it's that winning there requires a different product than Tightly should be building.",
    },
    {
      type: "multiple-choice",
      question:
        "You're using the User Feedback → Product Gap framework to analyze review data. You find 40 reviews mentioning 'confusing UI' and 8 reviews mentioning 'the tool recommended a PO that caused a $30K overstock event.' Which complaint should be prioritized for roadmap investigation?",
      options: [
        "Confusing UI — because it affects 5x more users and drives churn from daily users",
        "The $30K overstock complaint — because it maps to a high financial stakes outcome for the customer, even though fewer reviews mention it",
        "Both equally — volume and impact should be weighted the same",
        "Neither — individual review complaints are too noisy to use for prioritization",
      ],
      correct: 1,
      explanation:
        "The complaint about a $30K overstock event maps directly to the financial consequences of a bad recommendation — a catastrophic outcome for the customer that drives immediate churn and is a trust-destroying event. Review volume is one input to prioritization, but the financial stakes filter should be applied: a feature failure that costs a customer $30K is higher priority than UI confusion that costs them time. Confusing UI is important (and should be tracked), but the overstock complaint is a signal that the core forecasting workflow has a failure mode with severe consequences.",
    },
    {
      type: "multiple-choice",
      question:
        "Tightly's head of sales tells you: 'We keep losing deals to Prediko on price — I want us to match their pricing.' What is the most strategically correct PM response?",
      options: [
        "Agree to the price match and plan a packaging change that reduces the lowest-tier feature set to justify it",
        "Decline and explain that Tightly and Prediko serve different ICPs — if prospects are choosing Prediko on price, the sales team may be targeting the wrong accounts",
        "Agree to a 90-day pricing test to gather data on whether lower price improves conversion",
        "Ask the product team to build a simplified 'Lite' version of Tightly to compete at Prediko's price point",
      ],
      correct: 1,
      explanation:
        "When a competitor keeps winning on price, the first PM question is whether you're targeting the right customer — not whether to cut price. If Tightly and Prediko are appearing in the same deal, either the sales ICP targeting is off (pursuing brands too small for Tightly's value proposition) or the product's value isn't being communicated clearly enough to justify the price premium. A price match abandons margin and positioning. A Lite version is a product strategy question that requires separate validation. The correct response is to sharpen the ICP and the value story, not to follow a competitor into their pricing floor.",
    },
  ],
};
