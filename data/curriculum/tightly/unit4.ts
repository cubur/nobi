import type { Unit } from "@/data/types";

export const tightlyUnit4: Unit = {
  id: "tightly-unit4",
  companySlug: "tightly",
  title: "PM Craft for Inventory Tech",
  description:
    "Great inventory planning PMs speak the language of ops. This unit covers the metrics that drive product decisions, the distinct personas inside a Shopify brand, and how to run discovery with buyers who care more about stock levels than NPS.",
  goTerm: "Yomi",
  goReading: "よみ",
  goMeaning:
    "Yomi — reading the board. A strong Go player doesn't just react to the last move; they read sequences many moves ahead. In PM work, yomi is the ability to read what users haven't said yet: anticipating the workflow friction before it surfaces as a support ticket, and designing for the downstream decision, not just the immediate screen.",
  color: "golden",
  lessons: [
    // ─── Lesson 4-1 ────────────────────────────────────────────────────────────
    {
      id: "tightly-4-1",
      unitId: "tightly-unit4",
      companySlug: "tightly",
      title: "Metrics That Matter",
      tldr:
        "Days of Stock, stockout rate, forecast accuracy, and PO acceptance rate — the four numbers that tell you whether the product is working.",
      skills: ["OKRs", "North Star Metric", "Supply Chain KPIs"],
      xp: 20,
      content: [
        {
          body: "# Metrics That Matter for Inventory Planning Products\n\nInventory planning software lives or dies by operational outcomes. Unlike engagement metrics in consumer apps, the signal here is concrete: did the brand avoid running out of stock? Did they avoid tying up cash in excess inventory? Your product metrics must map directly to these business outcomes.",
        },
        {
          body: "## The Four Core Metrics\n\n**1. Days of Stock (DoS / DoH)**\nDays of Stock (also called Days on Hand) tells you how many days of sales your current inventory covers at the current sell-through rate. Formula: `Inventory Units ÷ Average Daily Sales`. A healthy DoS target varies by category — fashion might target 45-60 days, consumables 14-21 days. DoS is Tightly's primary health indicator for each SKU.\n\n**2. Stockout Rate**\nThe percentage of SKUs (or revenue-weighted SKU-days) that had zero inventory during a period. Even one day out of stock on a high-velocity SKU can mean lost revenue that never comes back — the customer just buys from a competitor. Tightly's InStock feature is specifically designed to minimize stockout rate by managing backorders.\n\n**3. Forecast Accuracy (MAPE)**\nMean Absolute Percentage Error: `|Actual - Forecast| ÷ Actual × 100`. Industry average for e-commerce brands is 25-35% MAPE; Tightly targets <15% on high-velocity SKUs by using composite scoring across velocity, trend, and seasonality. This is a core retention metric — when customers see forecast accuracy improve after onboarding, they stay.\n\n**4. PO Acceptance Rate**\nWhat percentage of Tightly-generated purchase order suggestions does the buyer actually approve without modification? A high acceptance rate (>80%) means the algorithm is trusted. A low rate means the buyer is manually overriding — a signal that the model parameters or supplier configurations need tuning.",
        },
        {
          body: "## Secondary Metrics Worth Tracking\n\n**Inventory Turnover**: COGS ÷ Average Inventory Value. Higher is better; turns of 4-6x annually is healthy for most DTC brands.\n\n**GMROI (Gross Margin Return on Investment)**: Gross Margin ÷ Average Inventory Cost. Measures how much gross profit you earn for every dollar tied up in stock. GMROI > 200% is generally considered strong.\n\n**Lead Time Compliance**: Are purchase orders arriving when expected? Variance here feeds forecast error, so tracking it helps attribute accuracy problems to supplier behavior vs. demand model behavior.\n\n**Reorder Frequency**: How often is Tightly generating POs per SKU? Too-frequent small orders increase shipping costs; too-infrequent large orders increase stock risk.",
        },
        {
          body: "## PM Implications: Metric Ladders\n\nAs a PM, connect product features to metrics in ladders:\n\n`Smart Replenishment → DoS per SKU ↑ → Stockout Rate ↓ → Revenue Retained`\n`Forecast Engine → MAPE ↓ → PO Acceptance Rate ↑ → Buyer Trust → Retention`\n`InStock Module → Backorder Conversion Rate ↑ → Lost Revenue Recovered`\n\nWhen writing PRDs or OKRs at Tightly, always anchor to at least one of these operational outcomes. Stakeholders — especially the COO or Head of Operations at a customer brand — will immediately evaluate your credibility by whether you use these numbers fluently.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A Shopify brand's Days of Stock drops from 45 to 8 across their top SKUs. Which Tightly feature is most directly designed to address this situation?",
          options: [
            "Smart Replenishment — it recalculates reorder points and generates new PO suggestions",
            "Dynamic Pricing — it raises prices to reduce sell-through velocity",
            "Multi-location Planning — it redistributes inventory between warehouses",
            "Forecast Engine — it improves MAPE on future demand predictions",
          ],
          correct: 0,
          explanation:
            "Smart Replenishment is triggered by low DoS signals. It recalculates reorder points using the composite scoring matrix and generates PO suggestions to bring Days of Stock back to target. Dynamic Pricing reduces velocity (wrong direction), Multi-location redistribution helps balance stock but doesn't create new inventory, and the Forecast Engine is an input to replenishment, not the action itself.",
        },
        {
          type: "multiple-choice",
          question:
            "Tightly's PO Acceptance Rate drops from 85% to 60% after a customer adds three new suppliers with non-standard lead times. What does this tell you as a PM?",
          options: [
            "The forecast accuracy (MAPE) has degraded and needs retraining",
            "Buyers don't trust the algorithm when supplier lead time data is incorrect",
            "The InStock backorder module is not configured properly",
            "Days of Stock targets need to be reduced across all SKUs",
          ],
          correct: 1,
          explanation:
            "PO Acceptance Rate is a trust signal. When buyers override suggestions, it usually means the inputs (supplier lead times, MOQs) are wrong — not the demand forecast. After adding suppliers with non-standard lead times that aren't configured in Tightly, the system generates POs with incorrect timing and quantities, so buyers reject them. The PM action is to improve how Tightly handles supplier onboarding and lead time variability.",
        },
        {
          type: "multiple-choice",
          question:
            "Which formula correctly calculates Days of Stock?",
          options: [
            "Average Daily Sales ÷ Inventory Units",
            "Inventory Units × Average Daily Sales",
            "Inventory Units ÷ Average Daily Sales",
            "COGS ÷ Average Inventory Value",
          ],
          correct: 2,
          explanation:
            "Days of Stock = Inventory Units ÷ Average Daily Sales. This tells you how many days of sales velocity your current inventory covers. The first option is the inverse (gives daily velocity as a fraction), the second multiplies (no meaningful unit), and the fourth is Inventory Turnover — a related but different metric.",
        },
      ],
      resources: [
        {
          title: "Tightly Knowledge Base — Understanding Replenishment Metrics",
          url: "https://knowledge.tightly.io",
          description: "Official Tightly docs on how the platform surfaces and uses inventory KPIs.",
        },
      ],
    },

    // ─── Lesson 4-2 ────────────────────────────────────────────────────────────
    {
      id: "tightly-4-2",
      unitId: "tightly-unit4",
      companySlug: "tightly",
      title: "User Personas at Tightly",
      tldr:
        "Tightly has three distinct users — the founder-operator, the ops manager, and the buyer. Each has different jobs-to-be-done, different success metrics, and different reasons to churn.",
      skills: ["User Personas", "Jobs-to-be-Done", "B2B SaaS"],
      xp: 20,
      content: [
        {
          body: "# User Personas at Tightly\n\nTightly is a B2B SaaS product with a multilayer user structure. The person who signs the contract is rarely the person who uses the product daily. Understanding this separation is critical for prioritization, onboarding design, and churn prevention.",
        },
        {
          body: "## The Economic Buyer: Founder / CEO\n\n**Profile**: Owns a Shopify brand doing $1M-$20M in revenue. Often the original operator who grew the brand from zero. Increasingly time-constrained as the team grows.\n\n**Job-to-be-Done**: Protect cash and margins without micromanaging. They want to trust that inventory won't blow up while they focus on growth, marketing, and fundraising.\n\n**Success looks like**: No more midnight stockout alerts. Monthly inventory costs trending down. A report they can share with their CFO or investor.\n\n**Why they churn**: They don't see ROI fast enough. The product feels like it requires too much manual setup. Or a cheaper tool (Prediko) comes along that covers the 80% they actually use.\n\n**PM implication**: The founder needs a fast time-to-value. Onboarding must be self-serve or near-self-serve. ROI calculators and benchmark comparisons (\"Brands like yours typically reduce overstock by 18%\") drive retention at this persona.",
        },
        {
          body: "## The Power User: Operations Manager / Head of Supply Chain\n\n**Profile**: Hired by the founder once the brand hits ~$3M-$5M ARR. Lives in spreadsheets. Probably has an existing process (however manual) that Tightly needs to improve, not replace wholesale.\n\n**Job-to-be-Done**: Hit fill rate targets, minimize freight premiums from emergency orders, and justify headcount by showing operational leverage from tooling.\n\n**Success looks like**: Fewer weekly fire drills. Clear visibility into which SKUs need attention this week. Purchase orders that go out on time without heroics.\n\n**Why they churn**: Product doesn't match their workflow. They had a mental model of how replenishment should work; if Tightly's model conflicts without explanation, they lose trust. Or the UI is too rigid — they need to override things and the product fights them.\n\n**PM implication**: This persona needs configurability, explainability, and bulk actions. They want to understand WHY Tightly is recommending a PO, not just accept it blindly. Audit trails, editable parameters, and batch approve/reject workflows matter enormously here.",
        },
        {
          body: "## The Daily User: Buyer / Inventory Analyst\n\n**Profile**: Often a more junior team member — sometimes the founder wearing a different hat at smaller brands. Executes POs, updates supplier lead times, manages catalog data.\n\n**Job-to-be-Done**: Get through their daily task list without making a mistake that costs the brand money or customer trust.\n\n**Success looks like**: A clear daily to-do view. Easy PO creation and supplier communication. Alerts that are actionable, not noisy.\n\n**Why they churn**: Tool is too slow. Too many clicks to do common tasks. They go back to Excel because it's faster for the specific workflow they repeat 50 times a week.\n\n**PM implication**: This persona is where UX polish wins. Speed, keyboard shortcuts, sensible defaults, and bulk operations matter. They're also the best source for task-level friction discovery — if you can get 30 minutes with them, you'll find the next 5 quick wins.",
        },
        {
          body: "## Enterprise Buyers: COO / VP Operations\n\n**Profile**: At brands $20M+, there's often a COO or VP of Operations who evaluates tools from a systems perspective. They care about integrations (does it talk to our ERP?), security, SLA, and fit in a broader supply chain stack.\n\n**Job-to-be-Done**: Build a scalable ops infrastructure that doesn't break as the brand grows from $20M to $100M.\n\n**Why they churn**: Product can't handle their complexity. Multi-DC, multi-channel, complex supplier relationships. Or the Tightly team can't give them the white-glove support they expect at their contract size.\n\n**PM implication**: This persona drives the enterprise roadmap — multi-location planning, ERP integrations, role-based permissions, audit logging. Features that Prediko (the lower-market competitor) doesn't have and can't easily build.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A Tightly customer's ops manager submits a feature request for 'bulk PO approval with a single click.' Which persona does this request primarily represent, and what does it tell you about their current workflow?",
          options: [
            "Founder persona — they want less oversight of the buying process",
            "Buyer/Analyst persona — they're processing too many small POs manually each week",
            "COO persona — they want better governance over procurement decisions",
            "Buyer/Analyst persona — they want to approve POs without reviewing individual line items",
          ],
          correct: 1,
          explanation:
            "Bulk PO approval is a classic power-user/buyer request that signals high PO volume and repetitive manual work. The buyer/analyst generates and reviews dozens of POs per week and the per-PO click overhead adds up. This is a velocity problem for a daily user. The ops manager might also benefit, but the request originates from whoever is doing the repetitive daily task — typically the buyer.",
        },
        {
          type: "multiple-choice",
          question:
            "Which of these product decisions is MOST likely to reduce churn from the founder/CEO persona at a $3M Shopify brand?",
          options: [
            "Adding multi-currency support for international suppliers",
            "Building a 'Days of Stock Health Score' email digest sent weekly",
            "Adding role-based permissions so ops can't accidentally change forecast parameters",
            "Improving the audit log to show who changed each PO",
          ],
          correct: 1,
          explanation:
            "The founder/CEO persona values trust and time savings above features. A weekly digest that shows inventory health at a glance — without requiring them to log in — reduces the fear that something is wrong while minimizing the time investment. Multi-currency, role-based permissions, and audit logs are all valuable but address ops/enterprise personas, not the founder who needs to trust the system and step away.",
        },
        {
          type: "multiple-choice",
          question:
            "An ops manager tells you: 'I always end up exporting to Excel to do the final review before approving POs.' What is the most PM-correct interpretation of this signal?",
          options: [
            "They prefer Excel and won't change their workflow regardless of product improvements",
            "Tightly's PO review UI is missing data or flexibility that they need to make a decision",
            "The export feature is broken and needs a bug fix",
            "They don't trust Tightly's forecast and should be offboarded",
          ],
          correct: 1,
          explanation:
            "When a user exports to a spreadsheet to 'finish' a workflow, it's a PM signal that the product isn't giving them everything they need in-context. The ops manager goes to Excel because Tightly's PO review UI is missing some data field, grouping, sorting, or annotation capability they need. The discovery question is: 'What do you do in Excel that you can't do in Tightly?' — the answer will give you the next feature to build.",
        },
      ],
      resources: [
        {
          title: "Jobs-to-be-Done Framework — Intercom",
          url: "https://www.intercom.com/blog/the-why-behind-jobs-to-be-done/",
          description: "A practical introduction to JTBD thinking, applicable to B2B SaaS personas.",
        },
      ],
    },

    // ─── Lesson 4-3 ────────────────────────────────────────────────────────────
    {
      id: "tightly-4-3",
      unitId: "tightly-unit4",
      companySlug: "tightly",
      title: "Discovery in Supply Chain Software",
      tldr:
        "Ops-heavy buyers are busy, data-driven, and skeptical of product people. Here's how to run discovery that earns trust and surfaces real workflow friction.",
      skills: ["User Research", "Discovery", "B2B Interviews"],
      xp: 20,
      content: [
        {
          body: "# Discovery in Supply Chain Software\n\nRunning discovery with operations teams is different from interviewing consumer users or growth-focused SaaS buyers. Ops people are time-scarce, process-oriented, and quick to dismiss abstract product questions. Your interview technique must adapt.",
        },
        {
          body: "## The Ops Buyer's Skepticism\n\nOps managers have been burned by software before. They've seen tools that promised to replace Excel and ended up requiring more Excel to compensate. They're suspicious of product people who ask them about \"pain points\" without understanding how their supply chain actually works.\n\nTo earn credibility in a discovery call:\n- Know the vocabulary before you walk in (DoS, MAPE, MOQ, lead time, fill rate)\n- Reference their specific vertical — footwear brands have different seasonality than supplements\n- Ask about their current process FIRST, before asking about software\n- Never say \"how could we improve our product?\" — ask \"walk me through what you did last Monday to prepare POs\"",
        },
        {
          body: "## The 5-Step Discovery Interview for Ops\n\n**Step 1: Anchor to a specific recent task**\n\"Can you walk me through the last time you placed a purchase order? Start from when you first realized you needed to order.\"\n\nThis prevents abstract answers and gives you observable workflow data.\n\n**Step 2: Map the full workflow**\nDraw the steps as they describe them. Where do they switch tools? Where do they wait for someone else? Where do they make judgment calls without data?\n\n**Step 3: Find the workarounds**\n\"Is there anything you do outside of Tightly to complete this task?\" — This is where the gold is. Every workaround is a feature request in disguise.\n\n**Step 4: Quantify the friction**\n\"How often does this happen?\" \"How long does it take?\" \"What happens if you get it wrong?\" — These questions turn anecdotes into prioritization data.\n\n**Step 5: Test your hypotheses last**\nOnly after you've heard their world in their words, test your solution hypothesis: \"We've been thinking about building X — does that sound like it would help with what you just described?\"",
        },
        {
          body: "## Discovery Anti-Patterns in Supply Chain\n\n**The Demo-First Trap**: Showing the product before understanding workflow. The user evaluates your demo against their current tool, not against their actual job.\n\n**The Feature Laundry List**: Sending a survey asking which of 10 features they'd most like to see. Ops users are bad at imagining features they've never seen; they're excellent at describing what they did last Tuesday.\n\n**The NPS Obsession**: Supply chain software lives and dies on operational outcomes, not satisfaction scores. An ops manager with 85% PO acceptance rate and 12% MAPE is a happy customer even if they'd give you a 7 on NPS.\n\n**The Single Persona Problem**: Only talking to the ops manager. The founder might be making the renewal decision with completely different criteria. Always get at least two personas per account in your discovery rotation.",
        },
        {
          body: "## What Good Discovery Looks Like at Tightly\n\nGiven Tightly's SMB-to-mid-market focus, discovery should:\n\n- **Be embedded in customer success calls** — CS is already talking to customers; train them to run lightweight workflow interviews\n- **Use session recording tools** (FullStory, Hotjar) to watch real PO workflows without needing a call\n- **Track support tickets as discovery signals** — the most common support questions are a direct readout of UI/UX friction\n- **Run a quarterly \"shadow day\"** — sit with a power user for 2 hours and watch them work. You'll learn more than in 20 interview calls.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "You're starting a discovery call with an ops manager at a Tightly customer. Which opening question will give you the most useful workflow data?",
          options: [
            "\"What features would you most like to see us add to Tightly?\"",
            "\"On a scale of 1-10, how satisfied are you with the replenishment workflow?\"",
            "\"Walk me through the last time you placed a purchase order — start from when you realized you needed to order.\"",
            "\"How does Tightly compare to other inventory tools you've used?\"",
          ],
          correct: 2,
          explanation:
            "Anchoring to a specific recent task ('the last time you placed a PO') gives you observable workflow data rather than opinions or feature wishlists. Users describe concrete steps, tools, and workarounds when asked about specific events. The feature wish list question gets you abstract ideas. The satisfaction score is a metric, not discovery data. The comparison question puts you in competitive sales mode rather than learning mode.",
        },
        {
          type: "multiple-choice",
          question:
            "During a discovery interview, an ops manager says: 'I always download the reorder report to Excel and add a column for our supplier's current lead times before sending POs.' What should your immediate follow-up question be?",
          options: [
            "\"Would you prefer a Google Sheet integration instead of Excel?\"",
            "\"Why doesn't Tightly have the updated lead times already?\"",
            "\"What information do you add to that column and where do you get it?\"",
            "\"How many POs do you send per week?\"",
          ],
          correct: 2,
          explanation:
            "The workaround (adding a lead time column in Excel) tells you there's missing or stale data in Tightly. The follow-up question should explore what data they're adding and where it comes from — because that reveals what Tightly should either store, sync, or display. Asking about Google Sheets is a solution jump. Asking 'why doesn't Tightly have it' is accusatory. Asking how many POs they send is useful but second priority — understand the data problem first.",
        },
        {
          type: "multiple-choice",
          question:
            "Which of the following is the best source of discovery signal for a PM at a B2B supply chain SaaS company like Tightly?",
          options: [
            "NPS survey responses from all users",
            "Support tickets filtered to the most common workflow-related issues",
            "Feature requests submitted through the in-app feedback widget",
            "Competitor product reviews on G2 and Capterra",
          ],
          correct: 1,
          explanation:
            "Support tickets filtered to workflow issues give you high-fidelity, unsolicited discovery data: users file tickets when they can't complete a task they expected to complete. NPS surveys give satisfaction scores, not workflow data. In-app feature requests are opinions about solutions, not problems. Competitor reviews are useful for competitive analysis but aren't a substitute for your own customer discovery — they reflect a different user base with different configurations.",
        },
      ],
      resources: [
        {
          title: "Continuous Discovery Habits — Teresa Torres",
          url: "https://www.producttalk.org/2021/08/product-discovery/",
          description: "Framework for embedding weekly discovery into PM work — particularly relevant for B2B products.",
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
        "A Tightly customer's MAPE improves from 32% to 14% in their first three months. Which downstream metric is MOST likely to improve as a direct result?",
      options: [
        "GMROI — gross margin return on inventory investment",
        "PO Acceptance Rate — buyers trust the algorithm more when forecasts are accurate",
        "Stockout Rate — fewer SKUs run out because lead times are shorter",
        "Inventory Turnover — products sell faster because demand prediction is better",
      ],
      correct: 1,
      explanation:
        "When forecast accuracy improves, the PO suggestions Tightly generates are more aligned with actual demand — so buyers approve more of them without modification. MAPE → PO Acceptance Rate is the direct causal chain. GMROI and Inventory Turnover improve indirectly over time, but they're not the first-order effect. Stockout rate is related to replenishment timing, not forecast accuracy directly.",
    },
    {
      type: "multiple-choice",
      question:
        "Which persona at a $5M Shopify brand is most likely to be the 'economic buyer' who decides whether to renew Tightly?",
      options: [
        "The buyer/analyst who creates POs daily",
        "The ops manager who manages the supply chain workflow",
        "The founder/CEO who owns cash flow and margins",
        "The CFO who approves the SaaS budget",
      ],
      correct: 2,
      explanation:
        "At a $5M Shopify brand, the founder/CEO typically still owns strategic vendor decisions. They care about cash, margins, and whether the tool is paying for itself. The ops manager is the champion who advocates for renewal but rarely has final budget authority at this company size. A $5M brand is unlikely to have a dedicated CFO.",
    },
    {
      type: "multiple-choice",
      question:
        "An ops manager at a Tightly customer exports data to Excel every week before approving POs. You ask why. They say: 'I need to see the POs grouped by supplier, not by SKU, before I send them.' What's the correct PM action?",
      options: [
        "Build a supplier-grouped PO view in Tightly's PO approval screen",
        "Improve the CSV export format so the grouping is done in the export",
        "Document this as a low-priority feature request since workarounds exist",
        "Conduct more interviews to validate whether this is a common pattern",
      ],
      correct: 3,
      explanation:
        "Before building, validate. One ops manager using Excel workaround is an interesting signal, not a confirmed problem. The PM-correct move is to check whether other power users share this workflow pattern — through CS interviews, support ticket analysis, or session recordings. If multiple ops managers do this, building supplier-grouped PO view becomes high priority. Building immediately on one data point is the classic single-user feature trap.",
    },
    {
      type: "multiple-choice",
      question:
        "GMROI stands for Gross Margin Return on Investment. Which calculation is correct?",
      options: [
        "Revenue ÷ Average Inventory Cost",
        "Gross Margin ÷ Average Inventory Cost",
        "Net Profit ÷ Total Inventory Value",
        "COGS ÷ Average Inventory Value",
      ],
      correct: 1,
      explanation:
        "GMROI = Gross Margin ÷ Average Inventory Cost. It measures how much gross profit you earn for every dollar tied up in inventory. Revenue ÷ Inventory would ignore the cost of goods. Net Profit ÷ Inventory would reflect operating expenses unrelated to inventory management. COGS ÷ Average Inventory Value is Inventory Turnover — a related but different metric.",
    },
    {
      type: "multiple-choice",
      question:
        "Which of these is the best opening question for a discovery interview with an ops manager at a potential Tightly customer?",
      options: [
        "\"What's your biggest pain point with inventory planning today?\"",
        "\"How many SKUs are you managing, and what ERP do you use?\"",
        "\"Walk me through what you did last week to prepare your purchase orders.\"",
        "\"If we built X feature, would that solve your problem?\"",
      ],
      correct: 2,
      explanation:
        "Asking about a specific recent task ('walk me through last week') generates observable workflow data instead of abstract opinions. 'Pain point' questions produce vague generalities. Qualification questions (SKUs, ERP) are useful but should follow after establishing rapport. Leading with a solution hypothesis is the last step of discovery, not the first.",
    },
  ],
};
