import type { Unit } from "@/data/types";

export const enginyUnit1: Unit = {
  id: "unit1",
  title: "The GTM AI Landscape",
  description: "Why modern sales is broken, where AI fits, and what makes Enginy's approach different.",
  companySlug: "enginy",
  goTerm: "Fuseki",
  goReading: "ふせき",
  goMeaning: "The opening strategy that shapes the whole game. Understanding the GTM AI landscape is your fuseki — setting up positions that will pay off later.",
  color: "neon",
  lessons: [
    {
      id: "1-1",
      unitId: "unit1",
      companySlug: "enginy",
      title: "Why Sales Is Broken — The Problem Enginy Solves",
      tldr: "Sales teams drown in tools and noise because data, intent, and action live in disconnected systems. Enginy's thesis: unify them into one GTM brain.",
      skills: ["Problem framing", "Market context", "GTM fundamentals"],
      xp: 20,
      content: [
        {
          heading: "The fragmentation problem",
          body: `The average B2B sales team uses 6–10 tools: a CRM, a prospecting tool, a sequencing tool, a data enrichment tool, a LinkedIn automation tool, and more. Each has its own data model, login, and workflow.\n\nThe result is three compounding problems:\n\n**Signal loss** — Intent data lives in one tool, contact data in another, conversation history in a third. No single place has the full picture of a prospect.\n\n**Context collapse** — SDRs spend 3–4 hours a day on manual research and copy-paste between tools. Time spent on logistics is time not spent selling.\n\n**Noise amplification** — Generic outreach gets sent because personalization is too slow at scale. Reply rates suffer. Buyers tune out.`,
          goAnalogy: {
            term: "Fuseki",
            reading: "ふせき",
            meaning: "The opening strategy that sets up your entire game. Enginy's insight is that most sales teams play fuseki wrong — they scatter pieces across disconnected tools instead of building a unified framework from the start.",
          },
        },
        {
          heading: "Enginy's thesis: the GTM brain",
          body: `Enginy's answer is to collapse the stack into three integrated layers:\n\n**Find & Enrich** — One place to discover prospects using natural language ICP descriptions, enriched against 30+ data sources with waterfall logic (try source A, fall back to B, etc.)\n\n**Engage** — One unified inbox for email and LinkedIn outreach, with AI-generated personalized messaging, domain warm-up, and automatic conversation prioritization.\n\n**Integrations** — Bi-directional CRM sync so the data loop closes back into Salesforce, HubSpot, or Pipedrive.\n\nThe underlying philosophy is augmentation, not replacement: "giving reps back what they lost — clarity, leverage, and time to actually sell."`,
        },
        {
          heading: "Why this moment?",
          body: `Three trends converged to make this product possible in 2024:\n\n**LLMs got cheap enough** to generate personalized outreach at scale without costing more than the deal is worth.\n\n**Intent data got richer** — job change signals, hiring pattern APIs, tech stack detection tools — creating real-time triggers that were unavailable 3 years ago.\n\n**Buyer fatigue peaked** — open rates on generic sequences collapsed, forcing the market to demand quality over volume.\n\nEnginy was founded in Barcelona in 2021 as Genesy, raised €5M seed, and rebranded as Enginy to reflect its evolution from a data tool to a full GTM platform.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "What is the core problem Enginy's product architecture is designed to solve?",
          options: [
            "Sales reps lack negotiation training",
            "B2B data is inaccurate and expensive",
            "Data, intent signals, and outreach actions live in disconnected tools",
            "CRMs don't integrate with LinkedIn",
          ],
          correct: 2,
          explanation: "Enginy's GTM brain thesis is specifically about collapsing fragmented tools — data, intent, and action — into one integrated system.",
        },
        {
          type: "fill-blank",
          prompt: "Enginy's philosophy is ________ humans rather than replacing them, giving reps back clarity, leverage, and time.",
          blank: "augmenting",
          hint: "Think: enhancing or empowering, not automating away",
        },
        {
          type: "scenario",
          prompt: `An interviewer asks: "How would you explain what problem Enginy solves to someone who's never worked in sales?"\n\nGive a concise, jargon-free answer.`,
          sampleAnswer: "Sales teams today use a dozen different tools — one to find leads, another to research them, another to send emails, another to track replies. None of them talk to each other well, so reps spend hours every day doing manual work instead of actually selling. Enginy replaces all of that with one platform that finds the right people, personalizes outreach automatically, and keeps everything in sync — so reps spend their time on conversations, not logistics.",
          keyPoints: ["Fragmentation / too many disconnected tools", "Time wasted on manual work", "Enginy unifies find + enrich + engage", "Augments reps, doesn't replace them"],
        },
      ],
      resources: [
        {
          title: "Enginy website",
          url: "https://www.enginy.ai",
          description: "Recommended reading for this lesson.",
        },
        {
          title: "The Death of the SDR Stack (SaaStr)",
          url: "https://www.saastr.com",
          description: "Recommended reading for this lesson.",
        },
      ],
    },
    {
      id: "1-2",
      unitId: "unit1",
      companySlug: "enginy",
      title: "AI-Native vs. AI-Augmented GTM",
      tldr: "AI-native products bake intelligence into the core data model. AI-augmented products bolt AI onto existing workflows. Enginy is AI-native — the distinction matters for how you think about features.",
      skills: ["AI product strategy", "Product positioning", "Technical PM thinking"],
      xp: 25,
      content: [
        {
          heading: "The spectrum: bolt-on vs. built-in",
          body: `There's a spectrum of how AI integrates into a product:\n\n**Bolt-on AI** — An existing product adds a ChatGPT button. The underlying data model and workflow don't change. Example: Salesforce adding Einstein Copilot on top of its existing CRM.\n\n**Augmented AI** — AI is a first-class feature but the product can function without it. Example: HubSpot's AI content assistant.\n\n**AI-native** — The product's core value proposition cannot exist without AI. Remove the AI and there's no product. Example: Enginy — the personalization engine, the enrichment waterfall, and the intent signal processing are all AI-driven and central.`,
          goAnalogy: {
            term: "Aji",
            reading: "アジ",
            meaning: "Latent potential in a position that can be activated later. AI-native products build aji into every data point — each enriched contact has latent activation potential waiting for the right intent signal.",
          },
        },
        {
          heading: "Why it matters for PMs",
          body: `When you're a PM on an AI-native product, your job changes in three ways:\n\n**Quality = model quality** — User experience is directly tied to how accurate the enrichment is, how good the generated messages are, how precise the intent signals are. Traditional SaaS PMs optimize UI/UX; AI PMs optimize model inputs and outputs.\n\n**Failure modes are probabilistic** — A button either works or it doesn't. An AI feature sometimes gives bad output. You must design for graceful degradation and user correction.\n\n**Data is the moat** — Enginy's 30+ data source waterfall isn't just a feature, it's a defensible asset. The more proprietary signals they ingest, the harder it is to replicate. PMs need to think about data strategy, not just feature strategy.`,
        },
        {
          heading: "Enginy's AI stack in practice",
          body: `Enginy's AI runs across three layers:\n\n**Enrichment AI** — Waterfall logic decides which of 20+ enrichment tools to query based on data completeness, cost, and confidence score. This is a decision system, not a single API call.\n\n**Personalization AI** — LLMs generate outreach copy anchored to real signals (e.g., "I saw your company just expanded to Germany and hired 3 enterprise AEs…"). The quality depends entirely on signal quality upstream.\n\n**Prioritization AI** — The inbox ranks conversations by likelihood of conversion, surfacing the hottest leads first. This is a ranking model trained on engagement signals.\n\nAs PM, you'd be responsible for the success metrics, improvement cycle, and user feedback loops for all three.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "What is the key difference between an AI-native product and a bolt-on AI product?",
          options: [
            "AI-native products are more expensive to build",
            "AI-native products use more advanced models",
            "AI-native products cannot deliver core value without AI; bolt-on AI adds AI to an existing workflow",
            "AI-native products don't require human oversight",
          ],
          correct: 2,
          explanation: "The defining characteristic of AI-native is that the core value proposition depends on AI — remove it and the product doesn't work.",
        },
        {
          type: "fill-blank",
          prompt: "In AI products, user experience is directly tied to ________ quality — not just UI/UX quality.",
          blank: "model",
          hint: "Think: what powers the AI feature",
        },
        {
          type: "scenario",
          prompt: `An Enginy engineer says: "The personalization AI sometimes generates awkward messages. Should we add a review step before sending?"\n\nHow do you think through this as PM?`,
          sampleAnswer: "This is a classic AI PM tradeoff: quality vs. speed. First, I'd quantify the problem — how often does 'awkward' happen, and does it hurt reply rates measurably? If it's rare and low-impact, a review step adds friction that costs more than it saves. If it's frequent, I'd look at fixing the upstream issue — either improving the prompt, improving signal quality, or adding a confidence threshold that triggers review only for low-confidence outputs. A blanket review step on everything trades away the core value prop (personalization at scale) for marginal quality gains.",
          keyPoints: ["Quantify frequency and impact first", "Fix upstream vs. add downstream friction", "Confidence threshold as a middle path", "Don't trade core value prop for marginal gains"],
        },
      ],
      resources: [
        {
          title: "a16z: The New AI Product Stack",
          url: "https://a16z.com/the-new-ai-product-stack/",
          description: "Recommended reading for this lesson.",
        },
        {
          title: "Reforge: AI Product Management",
          url: "https://www.reforge.com/blog/ai-product-management",
          description: "Recommended reading for this lesson.",
        },
      ],
    },
    {
      id: "1-3",
      unitId: "unit1",
      companySlug: "enginy",
      title: "The Intent Signal Economy",
      tldr: "Intent signals are behavioral cues that a prospect is in-market. Understanding how they work — and their limitations — is core to understanding Enginy's Find & Enrich value.",
      skills: ["Intent data", "B2B data ecosystem", "Enrichment strategy"],
      xp: 20,
      content: [
        {
          heading: "What is an intent signal?",
          body: `An intent signal is a data point suggesting a prospect is actively in a buying window or receptive moment. They come in three tiers:\n\n**Tier 1 — Direct behavioral signals** (highest quality): Someone visited your pricing page, downloaded a competitor's whitepaper, or searched for your category on G2. These are logged by intent data platforms like Bombora or G2 Buyer Intent.\n\n**Tier 2 — Proxy signals** (medium quality): Job postings (a company hiring 5 SDRs probably needs sales enablement tools), LinkedIn activity spikes, funding announcements, executive job changes.\n\n**Tier 3 — Firmographic signals** (lowest quality): Company size, industry, tech stack. These are always true but not time-sensitive — they tell you who to target, not when.\n\nEnginy uses Tier 2 and 3 signals heavily — job change detection, hiring pattern analysis, and tech stack updates are explicitly called out in their product.`,
          goAnalogy: {
            term: "Kikashi",
            reading: "きかし",
            meaning: "A forcing move that provokes a response. Intent signals are kikashi moments — they tell you a prospect is forced to act now, making outreach at exactly this moment far more powerful than cold contact.",
          },
        },
        {
          heading: "The enrichment waterfall",
          body: `Enginy's 30+ data source waterfall is more sophisticated than it sounds. A naive approach: call one data provider, get a result, done. The waterfall approach:\n\n1. Start with the cheapest, fastest source (e.g., internal cache)\n2. If data is missing or stale, try Source B\n3. If still incomplete, escalate to Source C (more expensive, higher accuracy)\n4. Merge results with a confidence-weighted model\n\nThis has significant product implications: **cost vs. completeness tradeoffs**, **freshness vs. accuracy tradeoffs**, and **source reliability variation by geography or industry**. A PM owns these tradeoffs — deciding what "good enough" looks like for each data field.`,
        },
        {
          heading: "Limitations to know",
          body: `Intent data has well-known limitations that come up in product and customer conversations:\n\n**Noise and false positives** — A job change signal doesn't mean someone is buying. It means they're new and potentially evaluable. Overindexing on signals leads to spam.\n\n**Coverage gaps by region** — US intent data is rich. EMEA and APAC are patchy. For a Barcelona-based company selling to European markets, this is a real product challenge.\n\n**Signal decay** — A funding announcement is most useful in the first 2 weeks. After 3 months it's noise. Freshness logic in the enrichment pipeline matters.\n\n**Privacy and compliance** — GDPR in Europe means collecting and using personal data for outreach has legal requirements. Any enrichment waterfall touching European prospects needs legal review.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Why does Enginy use a 'waterfall' approach across 20+ enrichment sources rather than a single provider?",
          options: [
            "To reduce reliance on any one vendor and optimize cost vs. completeness tradeoffs",
            "Because a single provider refused to work with them",
            "To collect more data than legally necessary",
            "To make the product look more impressive on the website",
          ],
          correct: 0,
          explanation: "The waterfall maximizes data completeness while managing cost — cheaper sources are tried first, expensive ones used only for gaps.",
        },
        {
          type: "fill-blank",
          prompt: "GDPR means that enrichment waterfalls touching European prospects require ________ review before use in outreach.",
          blank: "legal",
          hint: "Who do you consult for compliance questions?",
        },
        {
          type: "scenario",
          prompt: `A customer complains: "Your intent signals in Germany are terrible — most contacts are missing email addresses and the data is outdated." How do you respond and what do you do as PM?`,
          sampleAnswer: "First, I validate: pull the data completeness metrics for Germany specifically vs. other markets. If the signal is real, I dig into why — is it a coverage gap in our enrichment sources (most B2B data providers have weaker DACH coverage), a GDPR compliance constraint on the sources we're using, or a freshness issue? I'd then prioritize fixing it if Germany is a meaningful segment of our customer base or target market. Short-term: identify a Germany-specific enrichment source to add to the waterfall. Long-term: build regional data quality dashboards so customers can see coverage before they buy, and so we can proactively address gaps.",
          keyPoints: ["Validate with data first", "Root cause: coverage vs. compliance vs. freshness", "Segment-specific sourcing strategy", "Proactive transparency with customers"],
        },
      ],
      resources: [
        {
          title: "Bombora: What is B2B Intent Data?",
          url: "https://bombora.com/blog/what-is-intent-data/",
          description: "Recommended reading for this lesson.",
        },
        {
          title: "Clay: The Enrichment Waterfall Explained",
          url: "https://www.clay.com/blog/data-enrichment",
          description: "Recommended reading for this lesson.",
        },
      ],
    },
  ],
};
