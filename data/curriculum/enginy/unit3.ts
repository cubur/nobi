import type { Unit } from "@/data/types";

export const enginyUnit3: Unit = {
  id: "unit3",
  title: "PM Craft for AI GTM Products",
  description: "The specific PM skills Enginy needs: discovery in AI products, GTM metrics, and prioritization at seed stage.",
  companySlug: "enginy",
  goTerm: "Semeai",
  goReading: "せめあい",
  goMeaning: "A capturing race where both groups fight for survival. PM craft for AI products is a semeai — user research and model feedback loops race in parallel.",
  color: "golden",
  lessons: [
    {
      id: "3-1",
      unitId: "unit3",
      companySlug: "enginy",
      title: "Discovery in AI Products",
      tldr: "Discovering what to build in an AI product requires two loops: the standard user research loop AND a model feedback loop. You can't just ask users what they want — you need to watch what the model gets wrong.",
      skills: ["User research", "AI product discovery", "Feedback loop design"],
      xp: 25,
      content: [
        {
          heading: "The two-loop discovery model",
          body: `In traditional SaaS, product discovery is roughly: user interviews → pain points → hypotheses → prototype → validate → build.\n\nIn AI products, add a second loop running in parallel:\n\n**Model feedback loop**: What is the AI getting wrong? Where are users correcting outputs, ignoring suggestions, or abandoning AI-assisted flows? This isn't captured in interviews — users often can't articulate what a "bad AI output" looks like. You need to instrument the product to capture it.\n\nFor Enginy, this means tracking: which personalized messages get edited before sending (and by how much), which intent signals are ignored by reps, which enrichment fields are frequently overridden. Each edit is a signal the model is miscalibrated.`,
          goAnalogy: {
            term: "Semeai",
            reading: "せめあい",
            meaning: "A capturing race where both groups fight for survival. Discovery in AI products is a semeai — the user research loop and the model feedback loop race simultaneously, and neglecting either one loses the game.",
          },
        },
        {
          heading: "Validating AI features",
          body: `You can't user-test AI features the way you test UI. A mockup of a button is meaningful. A mockup of "AI-generated personalized email" isn't — users need to see real outputs to react meaningfully.\n\nThis creates a prototyping challenge at Enginy. How do you validate the personalization engine before it's built? Approaches:\n\n**Wizard of Oz**: Show real AI outputs to a small cohort as if they're the product feature. Measure engagement vs. control.\n\n**Shadow mode**: Run the new model alongside the existing one, logging what it would have generated without showing it to users. Analyze output quality offline.\n\n**Beta cohorts**: Release to a small segment of real customers with higher tolerance for imperfection. Measure reply rate delta vs. control group.\n\nThe Enginy PM job description specifically mentions "prototype solutions independently to validate ideas quickly" — this is the skill they're testing for.`,
        },
        {
          heading: "Discovery in a fast-moving seed startup",
          body: `Enginy has ~95 people and a €5M seed. Discovery must be fast and cheap. Practical constraints:\n\n**No time for 12-week research cycles** — A week of user interviews + a week of synthesis is the max. Ship and iterate.\n\n**Customers are available** — At seed stage, you can email your top 20 customers directly. Use it. Direct access is an asset that disappears at scale.\n\n**Dogfood aggressively** — Enginy's own GTM team uses the product. Internal discovery is free and fast. The VP of Product works directly with the Head of Customer Success.\n\n**Use support tickets as discovery** — Every bug report and support ticket is an unfiltered expression of pain. At seed stage, the PM should read every ticket.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Why can't you fully discover AI product issues through user interviews alone?",
          options: [
            "Users are too busy to give interviews",
            "Users often can't articulate what a bad AI output looks like — you need to instrument the product to capture model errors",
            "User interviews are too expensive at seed stage",
            "AI features don't have usability issues",
          ],
          correct: 1,
          explanation: "Users experience AI output quality as a vague 'feel' rather than a specific articulation. Instrumentation (edit tracking, ignore rate) captures what interviews miss.",
        },
        {
          type: "fill-blank",
          prompt: "Running a new model in parallel without showing users — logging what it would have generated — is called ________ mode.",
          blank: "shadow",
          hint: "It runs invisibly, in the background",
        },
        {
          type: "scenario",
          prompt: `Enginy's Head of CS says: "Customers love the product but say the AI messages 'feel a bit off sometimes.' How do we understand this better?" What's your discovery plan?`,
          sampleAnswer: "The key challenge is that 'feels a bit off' is too vague to act on. My plan: First, instrument the product to track message edit rate — what % of AI-generated messages are edited before sending, and by how much (minor tweak vs. complete rewrite). Second, add a simple one-tap feedback mechanism on messages ('Good / Off') to capture in-context sentiment without friction. Third, run 5-7 customer calls specifically focused on the personalization experience, bringing examples of AI-generated messages to react to in real time. Fourth, pull the top 50 'most edited' messages and manually review them to identify patterns — is it tone, factual accuracy, signal selection, length? Then I'd have a concrete list of model improvement hypotheses to test.",
          keyPoints: ["Instrument edit rate and edit depth", "In-context feedback (not survey)", "Customer calls with real examples", "Manual review of 'most edited' messages to find patterns"],
        },
      ],
      resources: [
        {
          title: "Marty Cagan: Continuous Discovery Habits",
          url: "https://www.svpg.com/continuous-discovery/",
          description: "Recommended reading for this lesson.",
        },
        {
          title: "Teresa Torres: Product Discovery for AI Products",
          url: "https://www.producttalk.org",
          description: "Recommended reading for this lesson.",
        },
      ],
    },
    {
      id: "3-2",
      unitId: "unit3",
      companySlug: "enginy",
      title: "Metrics That Matter for GTM AI",
      tldr: "GTM AI products have a distinct metric stack: funnel metrics (reply rate, conversion), efficiency metrics (time saved, sequences launched), and model metrics (personalization quality, enrichment accuracy). Know all three layers.",
      skills: ["Product metrics", "GTM analytics", "AI quality measurement"],
      xp: 25,
      content: [
        {
          heading: "The three-layer metric stack",
          body: `For a product like Enginy, metrics live at three levels:\n\n**Layer 1 — Business outcomes** (what the customer cares about):\n- Conversion rate (Enginy's claim: 4% → 8%)\n- Reply rate (Enginy's claim: 10% → 45%)\n- Meetings booked per SDR per week\n- Revenue influenced by Enginy-sourced sequences\n\n**Layer 2 — Product usage** (leading indicators of outcomes):\n- Sequences launched per user per week\n- Time from ICP input to first email sent\n- % of contacts that make it through full enrichment\n- Inbox response time (how fast reps reply to hot leads)\n\n**Layer 3 — Model quality** (AI-specific):\n- Message edit rate (lower = better AI)\n- Enrichment accuracy rate (verified emails that don't bounce)\n- Intent signal click-through rate (signals reps actually use)\n- ICP match satisfaction score`,
          goAnalogy: {
            term: "Liberties",
            reading: "ダメ",
            meaning: "The open spaces around a group that keep it alive. Each metric layer gives the product 'liberties' — room to survive and grow. Lose layer 3 (model quality) and layers 1 and 2 collapse shortly after.",
          },
        },
        {
          heading: "North star and guardrails",
          body: `For a Senior PM at Enginy, you'd need a north star metric and guardrail metrics:\n\n**Candidate north star**: "Qualified meetings booked per SDR per month, attributed to Enginy-sourced sequences." This captures the full value chain and is directly tied to customer ROI.\n\n**Guardrail metrics** (things you must not sacrifice while optimizing the north star):\n- Email bounce rate < 5% (protects sender reputation)\n- Spam complaint rate < 0.1% (protects deliverability)\n- Data privacy compliance rate = 100% (legal requirement in EU)\n- Customer NPS > 50 (seed-stage startups live and die by expansion and referrals)\n\nA PM who optimizes reply rate by sending more messages would spike the north star temporarily but blow through the spam guardrail — classic Goodhart's Law.`,
        },
        {
          heading: "Measuring personalization quality",
          body: `The hardest metric to get right: is the AI generating good personalized messages?\n\nOptions from weakest to strongest:\n\n**Proxy metric** (weak): Edit rate. If reps edit heavily, quality is low. But reps also edit based on personal style, not just AI quality.\n\n**Outcome metric** (medium): Reply rate by message type. AI-personalized vs. template. Statistically significant? Requires A/B infrastructure.\n\n**Expert review** (strong but expensive): Human reviewers score samples from 1-5 on relevance, personalization quality, and tone. Calibrate on 100 messages monthly.\n\n**In-context feedback** (scalable): One-tap thumbs up/down at send time. Low friction, captures intent-moment signal, builds training data for model improvement.\n\nThe PM at Enginy needs all four — each catches different failure modes.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Enginy's PM optimizes reply rate by increasing send volume 5x. Reply rate stays flat but spam complaints triple. What went wrong?",
          options: [
            "The product has a bug",
            "The engineering team made an error",
            "The PM violated a guardrail metric (spam complaint rate) while chasing the north star",
            "The customers are using the product incorrectly",
          ],
          correct: 2,
          explanation: "This is Goodhart's Law in action — optimizing one metric (reply rate via volume) violated a critical guardrail (spam complaint rate), which will damage long-term deliverability.",
        },
        {
          type: "fill-blank",
          prompt: "A north star metric for Enginy could be 'qualified ________ booked per SDR per month, attributed to Enginy-sourced sequences.'",
          blank: "meetings",
          hint: "The end goal of a sales outreach sequence",
        },
        {
          type: "scenario",
          prompt: `In your first 30 days as PM at Enginy, how would you establish the product's metric framework? Walk through your approach.`,
          sampleAnswer: "First two weeks: gather, don't create. I'd pull every dashboard, report, and metric currently tracked. Interview the data team, CS team, and 5 top customers to understand what they already track and what they wish they knew. Week 3: map the customer journey and identify the metric that best captures full-funnel value — I'd land on something like 'qualified meetings booked attributed to Enginy.' Then define guardrails: bounce rate, spam rate, compliance, NPS. Week 4: identify gaps — what's not instrumented that should be? Propose instrumentation backlog. Present the framework to the product and leadership team for alignment. Avoid building a new dashboard on day 1 — understand what exists and why before changing anything.",
          keyPoints: ["Gather before creating — understand existing metrics", "Interview CS and customers for their definition of value", "North star = full-funnel customer outcome", "Identify instrumentation gaps", "Align with leadership before publishing"],
        },
      ],
      resources: [
        {
          title: "Amplitude: North Star Metric Guide",
          url: "https://amplitude.com/blog/north-star-metric",
          description: "Recommended reading for this lesson.",
        },
        {
          title: "Reforge: GTM Metrics for SaaS",
          url: "https://www.reforge.com/blog/saas-metrics",
          description: "Recommended reading for this lesson.",
        },
      ],
    },
    {
      id: "3-3",
      unitId: "unit3",
      companySlug: "enginy",
      title: "Prioritization at Seed Stage",
      tldr: "Seed-stage PM prioritization is different: you have fewer data points, faster cycles, and higher stakes per decision. The frameworks are the same but the inputs are noisier and the feedback loops are shorter.",
      skills: ["Prioritization", "Roadmap strategy", "Stakeholder management"],
      xp: 20,
      content: [
        {
          heading: "The seed-stage prioritization context",
          body: `Enginy has ~95 people, a €5M seed, and is building a product that still has significant model improvement runway. This changes prioritization dynamics:\n\n**Fewer data points** — 50 enterprise customers give you much less statistical signal than 5000. A single churned customer is a meaningful event, not noise.\n\n**Higher urgency on retention** — At seed stage, every customer loss is visible and analyzed. The PM's prioritization must account for "what keeps current customers happy" alongside "what attracts new customers."\n\n**Speed over perfection** — A 70% solution shipped in 2 weeks beats a 95% solution shipped in 8 weeks. The market is moving; competitors are shipping.\n\n**Founder weight** — At €5M seed, founders (Kai Brandt, Jaume Puig) still have strong opinions and direct access to customers. PM prioritization must be transparent and well-argued, not just declared.`,
          goAnalogy: {
            term: "Sente",
            reading: "せんて",
            meaning: "Having the initiative — forcing your opponent to respond rather than reacting to them. Good prioritization at seed stage means maintaining sente: always working on what has the highest forcing value, not reacting to the loudest customer.",
          },
        },
        {
          heading: "Practical prioritization at Enginy",
          body: `Given Enginy's three product areas (Find & Enrich, Engage, Integrations), a PM at Enginy constantly faces: "Should I fix a bug in Engage or build a new enrichment source?"\n\nA useful framework for this context:\n\n**Customer impact x frequency x strategic fit**\n\n- Customer impact: Does this unlock a new use case or fix a core workflow?\n- Frequency: How many customers are affected, how often?\n- Strategic fit: Does this strengthen the moat (data layer, closed loop) or add surface features?\n\nFor Enginy specifically: anything that improves data quality or closes the feedback loop tends to have outsized strategic fit because it compounds. Surface features (new email template types, UI polish) have high customer demand but low compounding value.\n\nAlways ask: "Is this a revenue-protecting fix, a revenue-growing feature, or a differentiation investment?"`,
        },
        {
          heading: "Handling competing stakeholders",
          body: `At Enginy's stage, the PM navigates: engineering capacity, founder opinions, VP of Product direction, CS escalations, and sales requests. Common conflicts:\n\n**Sales wants features to close deals** — "If we just had X, we'd close this €50K account." These are seductive and often valid, but can distort the roadmap toward one-off enterprise customizations.\n\n**CS wants fixes to retain customers** — Legitimate and urgent. The PM must distinguish "this customer is churning because of a core product gap" vs. "this customer wants a custom workflow."\n\n**Founders want the vision** — Long-horizon bets (e.g., the closed-loop learning system) that may not show ROI for 6 months. The PM must protect space for these while balancing near-term pressure.\n\nFramework: maintain a public, reasoned prioritization document. Every item has a reason. When stakeholders push back, point to the framework, not just a decision.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "At seed stage, why should a PM be especially alert to individual customer requests that 'would close a deal'?",
          options: [
            "Sales teams are usually wrong about what closes deals",
            "Enterprise features take too long to build",
            "These requests can distort the roadmap toward one-off customizations that don't scale to the full customer base",
            "Founders don't like enterprise customers",
          ],
          correct: 2,
          explanation: "Deal-specific feature requests are tempting but risk building a one-off product. The PM's job is to identify when a request signals a generalizable need vs. a single-customer edge case.",
        },
        {
          type: "fill-blank",
          prompt: "Anything that improves data quality or closes the feedback loop has high ________ fit because its value compounds over time.",
          blank: "strategic",
          hint: "One of three dimensions in the prioritization framework above",
        },
        {
          type: "scenario",
          prompt: `It's Q2 planning at Enginy. You have 3 competing priorities: (A) Fix a CRM sync bug affecting 8 enterprise customers, (B) Build a new LinkedIn enrichment source requested by 30% of users, (C) Instrument the personalization feedback loop (not user-visible, but improves model quality over time). Engineering can do 2. How do you decide?`,
          sampleAnswer: "A is non-negotiable. A CRM sync bug in enterprise accounts is a retention risk and trust issue — it gets fixed. That leaves B vs. C. B has high user demand (30% of users) and is visible/demonstrable to prospects and customers. C is invisible but has the highest long-term strategic value — without the feedback loop, the personalization model stagnates and Enginy loses its differentiation moat. My call: do A + C. Rationale: the feedback loop is a now-or-later decision where 'later' means missing months of training data that can't be recovered. The LinkedIn enrichment source is high-demand but 'shiny feature' — it adds breadth, not depth. I'd communicate this clearly to stakeholders with the strategic framing, and put the LinkedIn source as the top Q3 priority so it's not lost.",
          keyPoints: ["A is P0 — enterprise retention", "B vs. C is the hard choice", "C has compounding strategic value that can't be recovered if delayed", "Communicate the tradeoff clearly with a Q3 commitment on B"],
        },
      ],
      resources: [
        {
          title: "Intercom: The Prioritization Problem",
          url: "https://www.intercom.com/blog/product-prioritization/",
          description: "Recommended reading for this lesson.",
        },
        {
          title: "Shreyas Doshi: Prioritization Frameworks",
          url: "https://twitter.com/shreyas/status/1341682580578709505",
          description: "Recommended reading for this lesson.",
        },
      ],
    },
  ],
};
