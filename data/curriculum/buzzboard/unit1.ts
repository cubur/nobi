import type { Unit } from "@/data/types";

export const buzzboardUnit1: Unit = {
  id: "unit1",
  title: "The B2SMB Market",
  description:
    "Why selling AI to small businesses is a different game — BuzzBoard's core thesis, product suite, and the market dynamics that define the opportunity.",
  companySlug: "buzzboard",
  goTerm: "Fuseki",
  goReading: "ふせき",
  goMeaning:
    "Opening strategy that shapes the entire game. Understanding the B2SMB market is your fuseki — every product decision downstream flows from who the customer is.",
  color: "neon",
  lessons: [
    {
      id: "1-1",
      unitId: "unit1",
      companySlug: "buzzboard",
      title: "What Is B2SMB?",
      tldr:
        "B2SMB — selling to small and medium businesses — is fundamentally different from enterprise sales. SMBs move fast, have limited budgets, and won't tolerate complexity. BuzzBoard's thesis: AI agents can unlock this market at scale in a way humans never could.",
      skills: ["Market framing", "ICP definition", "B2SMB dynamics"],
      xp: 20,
      content: [
        {
          heading: "B2SMB: the market no one could crack",
          body: `B2SMB stands for Business-to-Small-Medium-Business: companies that sell their products or services *to* SMBs rather than to consumers or enterprises.\n\nThe addressable market is enormous — there are 33 million small businesses in the US alone — but notoriously hard to reach at scale. Enterprise sales works on long cycles with dedicated account executives. Consumer sales works on volume marketing. SMBs fit neither model:\n\n**Too many to cover with AEs** — a $2M flooring contractor doesn't justify a $150K/year account executive.\n\n**Too complex for mass marketing** — their needs vary by industry, size, tenure, and tech stack. Generic ad campaigns convert poorly.\n\n**High churn** — SMBs go out of business, get acquired, or change focus. The installed base erodes constantly.\n\nThe result: most vendors either underserve SMBs with self-serve funnels that don't convert, or overpay to serve them with humans and never find unit economics that work.\n\nBuzzBoard's thesis: AI agents change this equation entirely. An AI that can research, engage, and support an SMB at the cost of a software subscription — not a salesperson — makes the math work.`,
          goAnalogy: {
            term: "Hoshi",
            reading: "ほし",
            meaning:
              "The star point — a position of maximum influence from a corner. B2SMB is the hoshi of the AI market: it controls enormous territory that no one has fully claimed yet.",
          },
        },
        {
          heading: "What makes SMBs distinct as customers",
          body: `To build AI products for the B2SMB market, you need to understand what makes SMBs behave differently from enterprise buyers:\n\n**Speed over process** — SMBs don't do 6-month procurement cycles. They evaluate, decide, and either use it or don't within days. Your product has to show value in the first session.\n\n**No dedicated IT** — the owner or office manager is also the IT department. Complexity is a dealbreaker. Setup friction kills adoption before it starts.\n\n**Price sensitivity with ROI bias** — SMBs will pay for things that demonstrably make them money. They won't pay for features or "potential." Value has to be concrete and immediate.\n\n**Vertical identity** — a plumber and an event caterer are both "SMBs" but share almost nothing. They respond to messaging that speaks their language, uses their industry terms, and understands their specific pain.\n\n**Limited data footprint** — enterprise customers have CRMs, ERPs, and data warehouses. Many SMBs run their business on spreadsheets and Gmail. AI products built for SMBs have to work with incomplete, inconsistent data.\n\nFor a PM at BuzzBoard, every feature decision filters through these constraints. An AI that works beautifully for an enterprise demo but requires 2-hour setup will fail with SMBs.`,
        },
        {
          heading: "BuzzBoard's core market position",
          body: `BuzzBoard positions itself as the AI-native platform for companies whose *customers* are SMBs — so their end users are sales reps, account managers, and marketers at larger companies who are trying to win and serve SMB clients.\n\nThis "sell to the seller" model is important to understand. BuzzBoard isn't building a tool for the flooring contractor themselves — they're building a tool for the rep at a media company, SaaS vendor, or franchisor who needs to sell to, and support, thousands of SMB accounts.\n\nThis creates a two-sided understanding requirement: you need to understand both the rep's workflow (sales tools, CRM, outreach sequences) *and* the SMB's world (what makes them a good prospect, what their digital presence signals about their needs, when they're likely to buy).\n\nBuzzBoard's AI agents sit at the intersection: intelligence about SMBs, delivered to the humans and automated workflows that convert that intelligence into revenue.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "Why do traditional sales models fail at B2SMB scale, according to BuzzBoard's founding thesis?",
          options: [
            "SMBs don't have credit cards and can't sign enterprise contracts",
            "The market is too small to justify investment in dedicated sales infrastructure",
            "SMBs are too many and too varied to serve profitably with human-led sales at scale — unit economics break",
            "SMBs already have AI tools and don't need new solutions",
          ],
          correct: 2,
          explanation:
            "The B2SMB market is enormous but has terrible unit economics for human-led sales. Too many accounts, too varied, too fast-churning. AI agents change the cost equation — that's BuzzBoard's core thesis.",
        },
        {
          type: "multiple-choice",
          question:
            "BuzzBoard's AI products are used primarily by which type of user?",
          options: [
            "Small business owners managing their own operations",
            "Enterprise IT departments evaluating procurement tools",
            "Sales reps and account managers at companies that sell to SMBs",
            "Data scientists building ML pipelines for marketing analytics",
          ],
          correct: 2,
          explanation:
            "BuzzBoard is B2SMB infrastructure — their users are the sellers targeting SMBs, not the SMBs themselves. Understanding this 'sell to the seller' dynamic is key to framing any product decision.",
        },
        {
          type: "multiple-choice",
          question:
            "An SMB prospect evaluation feature requires a 45-minute setup process involving manual data uploads. What's the most significant PM concern?",
          options: [
            "The feature may exceed BuzzBoard's cloud storage limits",
            "SMBs have no dedicated IT — complexity and setup friction kill adoption before value is demonstrated",
            "The feature should require enterprise sign-off before deployment",
            "Manual uploads may introduce GDPR compliance issues",
          ],
          correct: 1,
          explanation:
            "SMBs (and reps serving them) have zero tolerance for setup complexity. If value isn't visible in the first session, the product will churn. Setup friction is a conversion killer in B2SMB.",
        },
      ],
      resources: [
        {
          title: "BuzzBoard: AI for B2SMB Sales",
          url: "https://buzzboard.com",
          description: "BuzzBoard's main site — understand the brand positioning and product messaging.",
        },
        {
          title: "The State of SMB Sales (McKinsey)",
          url: "https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-new-b2b-growth-equation",
          description: "Why AI is reshaping B2B growth models — relevant to the B2SMB opportunity.",
        },
      ],
    },
    {
      id: "1-2",
      unitId: "unit1",
      companySlug: "buzzboard",
      title: "BuzzBoard's Product Suite: Zylo, IRIS, Ignite & Ember",
      tldr:
        "BuzzBoard ships agent systems, not features bolted onto legacy tools. Each product — Zylo, IRIS, Ignite, and Ember — is an AI agent with a specific role in the B2SMB sales workflow. Understanding what each does (and how they connect) is table stakes for this PM interview.",
      skills: ["Product portfolio literacy", "Agent system thinking", "Competitive positioning"],
      xp: 25,
      content: [
        {
          heading: "Agent systems vs. AI features",
          body: `BuzzBoard explicitly distinguishes itself from companies that add AI features to legacy products. This is a strategic choice, not just a marketing line.\n\n**AI features on legacy products** look like: a "Write with AI" button in a CRM, a "Summarize" option in an email tool, or an "AI scoring" module in a 10-year-old analytics platform. The AI is a thin layer over data and UI that was designed without it.\n\n**Agent systems** are designed from first principles around AI acting as an autonomous or semi-autonomous participant in a workflow. The agent doesn't just suggest — it researches, decides, drafts, sends, follows up, and reports. The human is an exception handler and approver, not the primary doer.\n\nThis distinction matters for product management because the two have completely different design requirements:\n\n- Features need good UI and useful defaults. Agents need **reliable behavior** at scale, **graceful degradation** when input is messy, and **human-in-the-loop controls** that don't create more work than the agent saves.\n- Features are evaluated by user satisfaction scores. Agents are evaluated by **task completion rate**, **error rate**, and **cost per outcome**.`,
          goAnalogy: {
            term: "Sente",
            reading: "せんて",
            meaning:
              "The initiative — forcing the opponent to respond rather than react. Agent systems seize sente in the workflow: they act first, leaving the human to review and confirm rather than initiate.",
          },
        },
        {
          heading: "The four products",
          body: `BuzzBoard's current product family targets distinct stages of the B2SMB sales and customer success cycle:\n\n**Zylo** is BuzzBoard's AI sales agent — a conversational, autonomous agent designed to prospect, qualify, and engage SMB leads at scale. Zylo handles the top-of-funnel tasks that would otherwise require a human SDR: researching prospects, personalizing outreach, and managing multi-touch sequences.\n\n**IRIS** (Intelligent Research & Intelligence System) is the intelligence engine underlying BuzzBoard's product suite. IRIS analyzes an SMB's digital presence — website, reviews, social, ad spend, tech stack signals — and produces a rich profile that the other agents consume. For a PM, IRIS is the data foundation: everything downstream depends on IRIS getting its inputs right.\n\n**Ignite** is the account-based marketing and prospecting layer — designed for teams that need to identify and prioritize SMB accounts before outreach begins. Ignite uses IRIS signals to build prospect lists, score accounts by fit and timing, and route them to the right workflow.\n\n**Ember** focuses on customer success and retention — keeping SMB clients engaged after the sale. Ember monitors account health signals, triggers proactive outreach when risk is detected, and surfaces expansion opportunities.\n\nThink of these as a funnel: **Ignite** finds accounts → **IRIS** understands them → **Zylo** engages them → **Ember** retains them.`,
        },
        {
          heading: "How a PM thinks about portfolio coherence",
          body: `When BuzzBoard asks you to own a product line, they're not just asking you to manage a feature backlog — they're asking you to understand how your product sits in the four-product funnel and what happens at the handoff points.\n\nPortfolio coherence questions you should be ready to answer:\n\n**Data flows**: IRIS generates the underlying SMB profile. If IRIS's data quality degrades, all downstream agents (Zylo, Ignite, Ember) get worse. As a PM on any product, you need to understand what IRIS provides and how to flag quality issues upstream.\n\n**Workflow handoffs**: When Ignite routes an account to Zylo, what context transfers? If a lead Zylo has been engaging converts to a customer, what does Ember inherit? Broken handoffs are the most common failure mode in multi-agent systems.\n\n**Shared infrastructure**: Prompt logic, model calls, output validation, and cost monitoring are shared concerns. As a product owner, you'll have to collaborate with the AI team on decisions that affect all four products.\n\n**Customer journey**: Enterprise customers may use all four products. Your roadmap decisions can't optimize for your product alone — they have to account for the end-to-end experience.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A sales rep using BuzzBoard notices that Zylo's outreach messages feel generic and off-target for the last 50 prospects. What's the most likely upstream issue?",
          options: [
            "Zylo's language model needs to be fine-tuned on new data",
            "IRIS's SMB profile data is degraded or incomplete, causing Zylo to personalize against poor-quality signals",
            "The rep's CRM integration is misconfigured",
            "Zylo has a prompt injection vulnerability that's been activated",
          ],
          correct: 1,
          explanation:
            "Zylo personalizes outreach based on IRIS-generated SMB profiles. If the profiles are low quality, Zylo produces generic output regardless of its own model quality. This is the most important upstream dependency to diagnose first.",
        },
        {
          type: "multiple-choice",
          question:
            "What is the most significant design difference between building an AI agent system vs. adding AI features to an existing product?",
          options: [
            "Agent systems cost more to build and require larger engineering teams",
            "AI features integrate with existing UX; agent systems require new UI design from scratch",
            "Agent systems require reliable behavior at scale, graceful degradation, and human-in-the-loop controls — evaluated by task completion and error rate, not user satisfaction",
            "Agent systems always use larger language models with more parameters",
          ],
          correct: 2,
          explanation:
            "The design paradigm shifts completely: features optimize for usability in a human-driven workflow; agents optimize for autonomous task completion with minimal human intervention. Metrics and failure modes are fundamentally different.",
        },
        {
          type: "multiple-choice",
          question:
            "In BuzzBoard's four-product funnel (Ignite → IRIS → Zylo → Ember), which product is most critical to the quality of all downstream outputs?",
          options: [
            "Zylo, because it produces the customer-facing output",
            "Ember, because customer retention is the highest-value stage",
            "IRIS, because it produces the SMB profile data that all other agents consume",
            "Ignite, because without good prospects there's nothing for other agents to work with",
          ],
          correct: 2,
          explanation:
            "IRIS is the intelligence foundation. Every other agent — Ignite for prioritization, Zylo for personalization, Ember for health monitoring — depends on IRIS's SMB profile quality. IRIS data issues cascade across the entire product family.",
        },
      ],
      resources: [
        {
          title: "BuzzBoard Blog",
          url: "https://buzzboard.com/blog",
          description: "Latest BuzzBoard thinking on AI agents for B2SMB sales.",
        },
        {
          title: "What Are AI Agents? (Anthropic)",
          url: "https://www.anthropic.com/news/building-effective-agents",
          description: "Foundational framing on agent design patterns — directly relevant to BuzzBoard's product philosophy.",
        },
      ],
    },
    {
      id: "1-3",
      unitId: "unit1",
      companySlug: "buzzboard",
      title: "SMB Sales Dynamics — Why This Market Is Hard",
      tldr:
        "SMBs have extreme churn, resist complexity, and make fast decisions. Understanding these dynamics lets you design AI products with the right defaults, the right latency requirements, and the right success metrics.",
      skills: ["Churn analysis", "Onboarding design", "SMB buyer psychology"],
      xp: 25,
      content: [
        {
          heading: "The churn problem",
          body: `SMBs churn for reasons enterprises almost never do:\n\n**Business failure** — roughly 20% of small businesses fail in their first year; 50% by year 5. A business that closes can't renew.\n\n**Ownership change** — SMBs are frequently bought, merged, or passed to a new owner who comes with their own toolset preferences.\n\n**Budget volatility** — an economic slowdown, a bad quarter, or a single large invoice can trigger cancellation of software subscriptions that seemed sticky.\n\n**Low switching costs** — SMBs rarely have deep integrations or internal dependencies on a tool. Switching is often as simple as canceling and starting a trial elsewhere.\n\nFor a PM on an AI product serving this market, churn is a first-order product problem, not just a revenue concern. Churn data should drive feature prioritization: what are the most common reasons customers leave in their first 90 days? Those are your highest-leverage problems to solve.\n\nThe implication for agents like Zylo and Ember: **time to first value** is the single most important metric. If an agent doesn't produce a meaningful output (a qualified prospect, a detected churn risk) within the first session, the customer will not be retained long enough to see the full value.`,
          goAnalogy: {
            term: "Ko",
            reading: "こう",
            meaning:
              "A recurring fight that neither player can win outright — both must make elsewhere first. Churn is ko: you can't eliminate it entirely, but strategic moves elsewhere (faster onboarding, earlier value delivery) improve your position each cycle.",
          },
        },
        {
          heading: "The onboarding constraint",
          body: `SMB customers routinely give software 15–30 minutes to prove its value before abandoning it. This isn't impatience — it's rational resource allocation. A 5-person business can't spend 3 hours in onboarding flows.\n\nFor AI agent products, this creates a specific design challenge: agents need data to work well, but data collection takes time. The tension:\n\n**Data-hungry agents** produce better output when they know more about the customer — their territory, their ICP, their messaging, their CRM data. Asking for all this upfront creates setup friction.\n\n**Zero-shot performance** — if an agent can produce useful output with only minimal inputs (a URL, a company name, an industry), it can demonstrate value before the user has invested heavily. The user then *wants* to provide more data because they've seen a reason to.\n\nThe PM's design principle: **progressive data enrichment**. Start with what the agent can infer or fetch autonomously (web scraping, public data, firmographic APIs). Show value. Then ask for additional context that will improve results further. Never front-load the full data collection before the first valuable output.\n\nThis pattern shows up across all four BuzzBoard products: Ignite can generate a prospect list from a basic ICP description, IRIS can analyze an SMB from a URL alone, Zylo can draft outreach from the IRIS profile without requiring CRM import.`,
        },
        {
          heading: "Speed as a product requirement",
          body: `SMBs have a different relationship with latency than enterprise users. An enterprise user working in a compliance workflow will wait 30 seconds for a result. An SMB owner checking leads while between appointments will not.\n\nThis sets hard performance requirements on AI products in this space:\n\n**Perceived latency matters more than actual latency** — streaming outputs (showing partial results as they generate) is often better than waiting and showing the complete result. A 10-second wait feels long; 10 seconds of text streaming feels productive.\n\n**Background processing should be invisible** — if an agent is doing deep research (crawling an SMB's site, pulling review data, analyzing ad spend), this should happen asynchronously. The user shouldn't watch a spinner for 45 seconds.\n\n**Caching and pre-computation** — IRIS should pre-analyze prospect lists so that when a rep opens an account, the profile is instant. Lazy computation at the moment of need is the wrong architecture for SMB-speed workflows.\n\nFor the PM interview: when BuzzBoard asks you about a feature spec, include latency requirements explicitly. "This endpoint should return in under 2 seconds P95" is a product requirement, not just an engineering concern. Cost and speed are always in your spec.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A BuzzBoard AI agent requires users to complete a 12-step onboarding wizard before generating its first output. What's the core PM problem with this design?",
          options: [
            "The onboarding wizard is too visually complex and needs a redesign",
            "SMBs give software 15–30 minutes to prove value — front-loading data collection before showing results violates progressive enrichment and will kill adoption",
            "The 12-step flow may exceed mobile screen size limits",
            "Users will input incorrect data in a long flow, degrading model quality",
          ],
          correct: 1,
          explanation:
            "Progressive data enrichment is the right pattern for SMB products: generate first value with minimal inputs, then request more data. Requiring full setup before showing any output means most SMB users will abandon before they see a reason to stay.",
        },
        {
          type: "multiple-choice",
          question:
            "Which SMB churn driver is most unique to this market (rarely affects enterprise customers)?",
          options: [
            "Dissatisfaction with support response times",
            "Business failure — the customer's company closes entirely",
            "Feature gaps compared to competitors",
            "Price increases at contract renewal",
          ],
          correct: 1,
          explanation:
            "Enterprise companies rarely disappear overnight. SMB churn uniquely includes businesses that simply fail — meaning your churn analysis must distinguish voluntary cancellation from involuntary (company closure), which require very different retention strategies.",
        },
        {
          type: "scenario",
          prompt:
            "You're the PM for Zylo. Your team wants to add a deep-research mode: Zylo spends 2 minutes crawling an SMB's full digital footprint before generating outreach. Current behavior generates outreach in 8 seconds. Users have asked for 'more personalized' messages. How do you evaluate this tradeoff and what do you recommend?",
          sampleAnswer:
            "I'd test both modes in a controlled experiment before deciding. Key metrics: message open rates, reply rates, and sequence completion rates (does the rep actually send it?). My hypothesis: the 8-second version + streaming output wins on adoption because reps want to move fast, even if the deep-research version produces objectively better copy. But I'd validate with data. If deep research is the winner, I'd make it async — trigger research when an account is queued, not when the rep opens it, so it's instant when they need it. I'd also consider a progressive option: fast mode by default with a 'Dig deeper' button that queues background enrichment.",
          keyPoints: [
            "Latency vs. quality tradeoff is measurable — use A/B testing with business metrics (replies, conversions), not just UX preference",
            "Async/pre-computation is the right architecture if deep research wins — hide the latency from the user",
            "SMB reps have time pressure; adoption of a slower tool may be lower even if output quality is higher",
            "The 'right answer' requires data, not intuition — frame it as an experiment with clear success metrics",
          ],
        },
      ],
      resources: [
        {
          title: "SMB Software Adoption Research (Capterra)",
          url: "https://www.capterra.com/resources/smb-tech-adoption/",
          description: "How SMBs evaluate and adopt new software tools — useful context for product design.",
        },
        {
          title: "Time to Value in SaaS (Intercom)",
          url: "https://www.intercom.com/blog/time-to-value/",
          description: "Designing products for fast first value — directly applicable to SMB-speed onboarding.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "What is the core economic reason traditional human-led sales fails at B2SMB scale?",
      options: [
        "SMBs don't have purchasing authority — all buying decisions go through a corporate parent",
        "The cost of a human salesperson exceeds the lifetime value of most SMB accounts",
        "SMBs prefer self-serve and will never talk to a sales rep",
        "B2SMB markets are too small to justify any sales investment",
      ],
      correct: 1,
      explanation:
        "At typical SMB ACV ($500–$5K/year), a dedicated AE (cost: $80K–$150K/year loaded) can only be justified by a very small number of very large SMB accounts. AI agents serving thousands of accounts at software cost is what makes the unit economics work.",
    },
    {
      type: "multiple-choice",
      question: "Which of the following best describes BuzzBoard's 'agent systems' product philosophy?",
      options: [
        "AI features embedded in an enterprise CRM platform",
        "Autonomous AI participants in the workflow that act first, with humans handling exceptions",
        "Recommendation engines that surface insights for human decision-making",
        "Process automation bots that execute rule-based tasks without machine learning",
      ],
      correct: 1,
      explanation:
        "Agent systems flip the workflow dynamic: the agent does the work, the human reviews. This is fundamentally different from AI features (tools that help humans do the work themselves).",
    },
    {
      type: "multiple-choice",
      question: "In BuzzBoard's product funnel, what is IRIS's role?",
      options: [
        "It is the outreach and messaging agent that engages SMB prospects directly",
        "It is the data intelligence engine that generates SMB profiles consumed by all other agents",
        "It is the customer success layer that monitors account health post-sale",
        "It is the prospecting layer that identifies and prioritizes accounts",
      ],
      correct: 1,
      explanation:
        "IRIS is the intelligence foundation — it analyzes an SMB's digital footprint and produces profiles that Ignite, Zylo, and Ember all rely on. Quality issues in IRIS cascade downstream.",
    },
    {
      type: "multiple-choice",
      question: "What is 'progressive data enrichment' and why does it matter for B2SMB AI products?",
      options: [
        "Automatically enriching user data from third-party sources without permission prompts",
        "Starting with minimal inputs to show fast first value, then requesting more data progressively as the user sees results",
        "Charging more as customers provide more data to improve their AI output quality",
        "Enriching SMB databases over time as agents learn from new market signals",
      ],
      correct: 1,
      explanation:
        "SMBs won't invest time in setup before seeing value. Progressive enrichment means generating useful output from minimal inputs (URL, industry) first, then earning the right to ask for more. This directly drives adoption and retention.",
    },
  ],
  quizXp: 35,
};
