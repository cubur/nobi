import type { Unit } from "@/data/types";

export const kestraUnit4: Unit = {
  id: "unit4",
  title: "Building the AI Roadmap",
  description:
    "How to structure Kestra's AI roadmap — the short-term wins vs. platform bets, how to communicate the roadmap to different audiences, and how to make the hard sequencing calls.",
  companySlug: "kestra",
  goTerm: "Amashi",
  goReading: "あまし",
  goMeaning:
    "Thickness — accumulated influence that doesn't score directly but constrains future possibilities. Platform AI investments are amashi: they don't ship features immediately, but they make every future AI feature easier to build and harder for competitors to match.",
  color: "crimson",
  lessons: [
    {
      id: "4-1",
      unitId: "unit4",
      companySlug: "kestra",
      title: "The Kestra AI Roadmap Structure",
      tldr:
        "A coherent AI roadmap has three layers: quick wins (visible value now), platform investments (infrastructure that compounds), and strategic bets (where to own the market). Learn how to balance all three.",
      skills: ["Roadmap planning", "Prioritization", "Platform thinking"],
      xp: 25,
      content: [
        {
          heading: "Three layers of an AI roadmap",
          body: `**Layer 1: Quick wins (0–3 months)**\nFeatures that deliver visible customer value without deep platform investment. They validate that Kestra is serious about AI, generate early feedback, and give engineering a manageable scope to start.\n\nExamples for Kestra:\n- First-party LLM task types (Anthropic, OpenAI, Bedrock) with production-ready defaults: retry, timeout, structured output parsing\n- Per-run AI cost logging (token usage + cost added to execution metadata)\n- AI-assisted flow debugging: on task failure, call an LLM with the error and recent logs to suggest root cause\n\n**Layer 2: Platform investments (3–9 months)**\nInfrastructure that doesn't ship as a customer-visible feature immediately but makes the next 12 months of AI features much easier to build. Often the most important and most undervalued layer.\n\nExamples for Kestra:\n- Eval framework integration: native support for running eval datasets against a flow, tracking accuracy over time\n- Human-in-the-loop as a first-class task type: pause/resume workflow pending external approval, with timeout and escalation\n- AI-specific observability: per-step agent execution traces, cost and latency dashboards at the flow level\n\n**Layer 3: Strategic bets (9–18 months)**\nLarger investments where Kestra can potentially own a market position if they move early enough.\n\nExamples for Kestra:\n- Agent-as-workflow: a native agent loop task type that makes Kestra the default orchestration layer for production AI agents\n- AI workflow marketplace: community-contributed and Kestra-curated blueprints with quality signals and usage stats\n- AI governance layer: audit trail, prompt versioning, model version pinning for regulated industries`,
          goAnalogy: {
            term: "Myōshu",
            reading: "みょうしゅ",
            meaning:
              "A brilliant or unexpected move that dramatically changes the position. Strategic bets are potential myōshu: if the timing is right and competitors haven't seen it coming, a well-executed platform bet can reframe the entire competitive landscape.",
          },
        },
        {
          heading: "How to sequence the roadmap",
          body: `The hard part of roadmap planning isn't identifying the right things to build — it's sequencing them given limited engineering capacity and competing customer pressures.\n\n**Sequencing principles for AI features:**\n\n**1. Platform before features (usually)**\nBuilding AI features on top of weak platform foundations creates technical debt that's expensive to unwind. Shipping the first LLM task type with proper retry, cost logging, and structured output parsing upfront means every future AI feature inherits those properties. Skipping the platform work means every feature has its own bespoke retry logic.\n\n**2. Instrumentation before optimization**\nYou can't optimize what you can't measure. Build cost and latency instrumentation before optimizing cost and latency. Build eval infrastructure before tuning accuracy. Data comes before decisions.\n\n**3. Validated pain before innovative features**\nBuild for the pain you've validated in customer interviews before building for the pain you've hypothesized from market analysis. Your hypotheses might be right, but validated pain has lower risk.\n\n**4. Anchor customer before broad release**\nFor novel AI features, find one design partner customer who will use it seriously and give honest feedback before broad launch. Their usage patterns will teach you more than 3 more months of internal spec work.\n\n**5. Internal before external**\nSome AI features (AI-assisted flow generation, AI debugging assistant) can be tested internally on Kestra's own workflows before shipping to customers. Internal usage surfaces failure modes cheaply.`,
        },
        {
          heading: "The roadmap communication problem",
          body: `A Kestra AI roadmap will be read by four very different audiences. The same roadmap document doesn't work for all four:\n\n**Engineering:** wants specificity — what to build, what the success criteria are, how it fits with the existing codebase, what not to build\n\n**Sales:** wants stories — "what can I tell a customer this quarter?" and "what's coming that I can use in a Q4 deal?"\n\n**Investors:** wants the narrative — where is the market going, how does Kestra win, what does success look like in 18 months?\n\n**Customers (design partners):** want to know when their specific pain will be addressed — not the full roadmap, just their slice\n\n**The PM skill:** translate the same underlying decisions into language that works for each audience. An engineering spec becomes a sales one-pager becomes an investor slide becomes a customer commitment. The underlying decisions are the same; the framing is different.\n\n**The one thing to avoid:** making commitments to customers that aren't reflected in the engineering roadmap. Customer expectations set by sales conversations that aren't backed by committed engineering work create trust debt that's very expensive to repay.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "You have 3 engineering sprints (6 weeks). Option A: ship 4 quick-win AI features (LLM task types for the top 4 providers). Option B: build the eval framework infrastructure that all future AI features will depend on. No additional engineering capacity is available. Which do you choose and why?",
          options: [
            "Option A — 4 features shipped is visible progress; infrastructure is invisible to customers",
            "Option B — if the eval framework doesn't exist, you have no way to know if Option A's features meet quality thresholds before or after shipping. Building features without eval infrastructure creates unmeasurable quality risk",
            "Option A — quick wins generate customer feedback that informs what infrastructure to build",
            "Split the time: 3 sprints on one provider's LLM task type, done properly with eval framework included",
          ],
          correct: 3,
          explanation:
            "Option D is the right answer: scope one feature and do it properly, rather than four features without the infrastructure to measure them. An LLM task type built with a basic eval framework (test against 50 canonical examples, track accuracy in CI) ships with a quality signal. Four LLM task types shipped without any eval infrastructure ship with unknown quality. The instinct that 'infrastructure is invisible' is wrong — the quality problems it prevents are very visible to customers.",
        },
        {
          type: "multiple-choice",
          question:
            "A sales rep commits to a customer: 'Kestra will have AI flow generation by end of Q3.' You haven't committed to that timeline. What do you do?",
          options: [
            "Adjust the roadmap to hit Q3 — sales commitments are revenue-critical",
            "Tell the customer the timeline is wrong",
            "Have a direct conversation with the sales rep: explain the actual timeline, understand what they told the customer, agree on how to reset the customer's expectations, and establish a process to prevent unilateral timeline commitments in the future",
            "Put AI flow generation on the roadmap but deprioritize other items to make it fit",
          ],
          correct: 2,
          explanation:
            "The sales-PM misalignment is the issue to fix, not the customer commitment to honor at any cost. Adjusting the roadmap to hit an uncommitted timeline creates false urgency that hurts other customers and the team. Telling the customer the timeline is wrong without coordinating with sales is bad process. The right move is to fix the root cause (uncoordinated customer commitments) and reset the customer expectation together with sales, with a clear explanation of the actual timeline and what the customer will get by when.",
        },
      ],
      resources: [],
    },
    {
      id: "4-2",
      unitId: "unit4",
      companySlug: "kestra",
      title: "The Async Technical Homework",
      tldr:
        "Kestra's interview process includes an asynchronous homework assignment. For a PM role, this is almost certainly a product exercise — a case study, product analysis, or spec-writing task. Here's how to approach it.",
      skills: ["Interview prep", "Product exercise", "Case study thinking"],
      xp: 30,
      content: [
        {
          heading: "What the homework likely involves",
          body: `The posting says stage 2 is an "asynchronous technical homework assignment." For a Product Manager, AI role, this is almost certainly one of:\n\n**Option A: Product analysis**\n"Here is a specific part of Kestra. Identify the biggest product gaps and how you'd prioritize addressing them. What would you build first and why?"\n\n**Option B: Customer scenario**\n"Here is a customer use case. Write a product spec for how Kestra should address it."\n\n**Option C: Market / competitive analysis**\n"How should Kestra position its AI strategy given the current competitive landscape? What should be on the AI roadmap and in what order?"\n\n**Option D: Specific AI product design**\n"Design a feature for Kestra that helps users build and maintain AI agent workflows. Define the requirements, UX, success metrics, and launch plan."\n\n**What they're evaluating in all cases:**\n- Product thinking quality: can you identify real problems vs. surface symptoms?\n- Decisiveness: can you make and defend a clear call about what to build first?\n- Technical fluency: do you understand the AI and orchestration concepts well enough to propose something implementable?\n- Communication: is the document clear, concise, and organized?\n- Judgment: do you know what not to include?`,
          goAnalogy: {
            term: "Shicho",
            reading: "しちょう",
            meaning:
              "A sequence of moves where the outcome is determined by distant board conditions you can't see in the immediate position. The homework assignment is shicho: your answer's quality is determined by the context you've built across all your preparation, not just your response to the prompt.",
          },
        },
        {
          heading: "How to structure a strong product exercise response",
          body: `Regardless of the specific prompt, this structure works:\n\n**1. Restate the problem (1 paragraph)**\nShow you understood what was asked. Briefly note any assumptions you're making.\n\n**2. Frame your analysis (1 paragraph)**\nWhat lens are you using? (Customer pain? Market opportunity? Platform strategy?) Why is that the right frame?\n\n**3. The analysis (the main body)**\nFor product analysis: identify 3-5 gaps, explain why they matter, briefly dismiss the ones you're not prioritizing\nFor customer scenario: define the problem clearly, describe the solution, explain the design decisions\nFor market analysis: describe the landscape, identify Kestra's position, propose the strategic direction\n\n**4. The recommendation (clear and direct)**\nWhat's the one thing you'd build first? Why? Be decisive. "I would prioritize X because Y, which I expect to result in Z" is better than "there are several options, each with merits..."\n\n**5. What you'd need to validate (1-2 bullets)**\nShow that you know your recommendation is a hypothesis, not a certainty. What would you need to learn to confirm it?\n\n**6. What you explicitly chose NOT to do and why**\nThis demonstrates the "decisive calls about what not to build" judgment the posting calls out.\n\n**Format guidelines:**\n- Shorter is better. 2-4 pages well-organized beats 10 pages comprehensive\n- Use headers so the reviewer can skim\n- Be specific about Kestra — show you've done your homework on the actual product\n- No generic AI PM frameworks without Kestra-specific application`,
        },
        {
          heading: "Common homework mistakes to avoid",
          body: `**1. Listing features instead of making a call**\n"Kestra could build LLM task types, eval frameworks, agent loop support, AI debugging, flow generation, anomaly detection..." This is not a product analysis — it's a feature list. The evaluator wants to know which one you'd build first and why, not all the things you could imagine.\n\n**2. Generic AI PM language without Kestra specifics**\n"AI features should have clear success metrics, handle failure gracefully, and be evaluated against an eval set." True, but not insightful. Apply this to a specific Kestra feature with specific metrics and specific failure modes.\n\n**3. Hedging the recommendation**\n"It depends on business priorities and customer feedback before committing." This signals you can't make a call under ambiguity. Make the call, state your assumptions, show you know it's a hypothesis.\n\n**4. Ignoring the competitive context**\nA Kestra AI roadmap recommendation that doesn't account for what Airflow, Prefect, and Temporal are doing misses a key dimension. Show you understand the landscape.\n\n**5. Over-engineering the format**\nA beautifully formatted 15-page document with charts and tables is a signal of over-investment in form. A clear 3-page document with sharp thinking is more impressive. Kestra is a startup — they want to see signal-to-noise, not comprehensive coverage.`,
        },
      ],
      exercises: [
        {
          type: "scenario",
          prompt:
            "The homework prompt is: 'Kestra is investing in AI. What should the first AI feature be, and why? Write a brief recommendation.' Write the core of your answer.",
          sampleAnswer:
            "**Recommendation: First-party LLM task type with production defaults.**\n\n**Why:** Every other AI feature Kestra will build depends on having a reliable, observable, cost-tracked way to call an LLM. The first AI feature should be the foundation, not a use-case-specific feature on top of nothing.\n\n**What it includes:** Native task types for the top 3 LLM providers (Anthropic, OpenAI, AWS Bedrock). Each task type ships with: configurable retry with exponential backoff, token + cost logging to execution metadata, structured output parsing with validation, timeout and rate limit handling, and secret management for API keys. Template blueprints for the 3 most common use cases: text classification, document summarization, and data extraction.\n\n**Why these defaults matter:** Customers who build AI workflows on top of a basic HTTP task type (which Kestra already has) will implement their own retry, their own cost logging, their own output parsing — inconsistently. First-party task types with production defaults eliminate this fragmentation and make Kestra's AI story coherent: 'Kestra handles the hard parts, you focus on the business logic.'\n\n**Success metric:** 3 months post-launch, >20% of active Kestra organizations have at least 1 flow using a first-party LLM task type. Average time from account creation to first LLM task execution <4 hours (documentation quality proxy).\n\n**What I'm not recommending first:** AI flow generation (impressive demo, unclear production value), AI debugging assistant (high complexity, unclear quality threshold), or agent loop support (important, but better as the second feature once the base LLM task types are proven).",
          keyPoints: [
            "Lead with the recommendation, then the reasoning — don't bury the conclusion",
            "Be specific about what the feature includes, not just what it is",
            "Include a concrete success metric that's measurable at the 3-month mark",
            "Explicitly say what you're not recommending and why — this is part of the evaluation",
          ],
        },
        {
          type: "multiple-choice",
          question:
            "The homework prompt asks: 'How should Kestra compete with Airflow for AI workflow customers?' What's the weakest response to this prompt?",
          options: [
            "'Kestra's YAML model is more accessible to non-Python engineers, which is an advantage for AI workflows that span multiple teams'",
            "'Kestra should build better observability for AI runs, including per-step cost tracking and LLM-specific metrics, which Airflow's plugin ecosystem can't provide as a cohesive experience'",
            "'Kestra should undercut Airflow on pricing to attract users who are price-sensitive'",
            "'Kestra should focus on the agent workflow use case where Airflow's Python-centric model is a genuine disadvantage — agent loops are easier to express in YAML task sequences than in Python DAGs'",
          ],
          correct: 2,
          explanation:
            "Pricing competition is the weakest strategic response — it's purely reactive, doesn't create defensible differentiation, and doesn't address why Kestra wins on product merits. The stronger answers all identify specific product advantages (YAML accessibility, coherent observability, agent workflow fit) that are hard for Airflow to copy quickly because they're architectural. A PM who recommends price competition as the primary competitive strategy is not thinking at the right level of abstraction.",
        },
      ],
      resources: [],
    },
    {
      id: "4-3",
      unitId: "unit4",
      companySlug: "kestra",
      title: "Demonstrating Shipped AI Products",
      tldr:
        "How to present your AI product experience in a way that passes Kestra's explicit bar: real shipped products with real trade-offs, not demos and prototypes. The framing, the specifics, and the stories.",
      skills: ["Self-positioning", "STAR stories", "AI product portfolio"],
      xp: 20,
      content: [
        {
          heading: "The Kestra credibility bar",
          body: `Kestra's posting is unusually specific: they've seen candidates with only demo/prototype experience and they're explicitly filtering them out. This means they're going to probe your AI experience until they find the edges.\n\n**What probe questions sound like:**\n- "You mentioned shipping an AI feature. How did you measure whether it was working?"\n- "What happened when you changed the prompt or model? How did you know it was still safe to ship?"\n- "Tell me about a time the AI feature behaved unexpectedly in production. What did you do?"\n- "How did you decide the accuracy was good enough to ship without a human review gate?"\n- "What did it cost to run at scale? How did you model that before launch?"\n\n**The pattern:** every probe is asking for specifics that only a PM with real production experience would know. If you can answer all of these with concrete details — actual numbers, actual incidents, actual decisions — you pass. If you generalize ("we had monitoring in place, we measured accuracy regularly"), you signal demo-level experience.\n\n**Preparation strategy:** for each AI product you've worked on, write down the answers to all six probe questions above. These become your stories. If you can't answer some of them, that product may not be a strong example to lead with.`,
          goAnalogy: {
            term: "Yose",
            reading: "よせ",
            meaning:
              "Endgame — converting accumulated board position into concrete points. The interview is yose: converting your real production experience (the accumulated position) into concrete, specific answers that score points.",
          },
        },
        {
          heading: "Structuring your AI product stories",
          body: `For each significant AI product you've worked on, prepare a story with these components:\n\n**The context (30 seconds):**\n"At [company], I owned [product/feature]. The business problem it solved was [X]. The users were [Y].\"\n\n**The AI approach (1 minute):**\n"We used [model/approach] to [task]. The input was [X], the output was [Y]. We chose this approach because [specific reason: cost, latency, accuracy, existing infrastructure]."\n\n**The production challenge (1-2 minutes — this is the important part):**\nPick ONE real challenge from: quality issues, cost surprises, model API changes, distribution shift, user trust building, edge cases, accuracy degradation, or rollback decisions. Describe:\n- What happened specifically\n- How you detected it\n- What decision you made and why\n- What the outcome was\n\n**The metrics (30 seconds):**\n"We measured success by [metric]. At launch we were at [X]. After [N] months/iterations we achieved [Y]."\n\n**What you'd do differently (30 seconds):**\nThis shows self-awareness and continued learning. "Looking back, I'd have [built the eval framework earlier / chosen a different model for the scale we reached / set a stricter accuracy bar before removing the human review gate]."\n\n**The key:** the production challenge section is what distinguishes real experience from demos. Demos don't have production challenges. Production AI does.`,
        },
        {
          heading: "If your AI experience is limited: what to do",
          body: `If you're honest with yourself and your AI product experience is closer to the prototype end of the spectrum — there are still ways to prepare and present authentically:\n\n**Build something before the interview**\nIn 2–4 weeks, you can build a real (small-scale) AI workflow using Kestra, deploy it, run it for a few weeks, and measure it. It doesn't need to be impressive in scope — a workflow that classifies 50 GitHub issues per day using an LLM and tracks accuracy weekly is more credible than a theoretical description of what you'd build. This gives you production experience to speak from, even if limited.\n\n**Go deep on orchestration and AI architecture**\nThe posting allows for "technical fluency without coding." You can demonstrate genuine depth on: how LLM APIs work in production (rate limits, token costs, structured output), what makes an eval framework valid, why agent workflows fail at scale, and what production AI observability requires. This depth signals you understand the space even if your personal portfolio is limited.\n\n**Be honest about depth, confident about direction**\n"I've worked with AI at the workflow level but haven't owned the eval infrastructure myself — here's how I think about it and what I'd build" is stronger than overstating experience that gets probed away in the next question. Kestra is looking for intellectual honesty and good judgment, not a fabricated resume.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "You're asked: 'Tell me about a time an AI feature you worked on failed or underperformed.' You have a story about a feature where accuracy was 78% at launch when the target was 85%. How do you present this?",
          options: [
            "Minimize it — 'we had some early accuracy issues but resolved them quickly'",
            "Describe the full story: what the target was, what you shipped at, how you detected the gap (and be specific about the detection mechanism), what you did (fallback? human review? retrain?), and what you learned — treating it as a learning story, not a failure story",
            "Avoid the topic and redirect to a stronger example",
            "Explain that 78% was actually acceptable given the use case constraints",
          ],
          correct: 1,
          explanation:
            "Specificity about failure is exactly the credibility signal Kestra is looking for. A PM who can say 'we launched at 78%, detected the gap because our weekly eval run showed accuracy dropping from the beta baseline, implemented a confidence threshold gate at 0.7 that routed low-confidence predictions to human review, and improved to 88% after 6 weeks of prompt iterations' has demonstrated: measurement rigor, decision-making under uncertainty, and iteration discipline. This is more impressive than a feature that shipped perfectly — because it shows how you handle the reality of production AI.",
        },
        {
          type: "scenario",
          prompt:
            "A Kestra interviewer asks: 'What's the most important thing you learned from shipping an AI feature to production?' Give your answer.",
          sampleAnswer:
            "The most important thing I learned is that quality confidence doesn't transfer from your eval set to production — you have to earn it separately. When we launched our document classification feature, we had 91% accuracy on our 500-example eval set. I felt good about it. Three weeks after launch, a customer reported that their contracts were being systematically misclassified in one category. We dug into it: that category had almost no examples in our eval set because it was rare in our historical data, but it was common in that customer's document corpus. Our eval set didn't reflect their distribution. We added a production accuracy monitor that sampled 2% of outputs for human review, caught another distribution mismatch two months later before any customer noticed, and changed our eval strategy to include minimum coverage requirements per category. The lesson: an eval set is a hypothesis about what your production distribution looks like. Your monitoring strategy is how you validate or disprove that hypothesis after launch. Every AI feature needs both.",
          keyPoints: [
            "Lead with the concrete learning, not the process",
            "Describe a specific failure mode (category coverage gap in eval set) rather than a generic lesson",
            "Show the causal chain: failure → root cause analysis → system change",
            "End with the generalizable principle, not just 'I learned to test more'",
          ],
        },
      ],
      resources: [],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "For a Kestra AI roadmap, why should platform investments (eval framework, observability, human-in-the-loop) come before or alongside feature investments?",
      options: [
        "Platform investments impress investors more than feature investments",
        "Without platform investments, every AI feature ship is a quality gamble — you have no infrastructure to measure accuracy, detect degradation, or handle failures consistently. Features built on a weak platform compound technical debt instead of compounding value",
        "Platform investments are faster to build than features",
        "Kestra's existing users expect infrastructure improvements, not AI features",
      ],
      correct: 1,
      explanation:
        "The compounding argument is key: a platform investment (eval framework) improves the quality of every subsequent AI feature. Without it, each feature is independently unmeasured, and you have no systematic way to know if the portfolio is improving or degrading over time. Features built without eval infrastructure are exactly the 'demo and prototype' work Kestra is trying to avoid. Platform work is what makes AI features production-grade.",
    },
    {
      type: "multiple-choice",
      question: "Which best describes what Kestra is evaluating in the async homework assignment?",
      options: [
        "Technical knowledge of AI and orchestration systems",
        "Ability to write comprehensive, detailed product documentation",
        "Product judgment: can you identify the right problem, make a decisive recommendation, explain your reasoning, and explicitly scope out what not to build?",
        "Familiarity with Kestra's existing product features and API",
      ],
      correct: 2,
      explanation:
        "The homework is a product judgment test, not a knowledge test. Kestra can teach you more about their product; they can't easily teach you to have good judgment about what to build. The evaluation is on the quality of your thinking: did you identify a real problem, make a clear call, explain the reasoning, and demonstrate the 'what not to build' discipline the posting explicitly calls out?",
    },
  ],
  quizXp: 30,
};
