import type { Unit } from "@/data/types";

export const kestraUnit5: Unit = {
  id: "unit5",
  title: "The PM Role & Interview",
  description:
    "What the Product Manager, AI role actually owns, the key product decisions Kestra faces, how to approach the async homework, and how to position your experience for the 4-stage interview process.",
  companySlug: "kestra",
  goTerm: "Yose",
  goReading: "よせ",
  goMeaning:
    "Endgame — converting board position into decisive results. The interview is yose: everything you've learned in Units 1–4 converts into specific answers here. The knowledge is the position; the interview is when you score it.",
  color: "snow",
  lessons: [
    {
      id: "5-1",
      unitId: "unit5",
      companySlug: "kestra",
      title: "What the PM, AI Role Actually Owns",
      tldr:
        "The PM, AI role sits at the intersection of customer discovery, product definition, and roadmap. Understanding what specifically they own at Kestra — not what a generic AI PM does — is how you walk into the interview with the right mental model.",
      skills: ["Role clarity", "Product ownership", "Kestra-specific context"],
      xp: 20,
      content: [
        {
          heading: "The JTBD of the PM, AI at Kestra",
          body: `The job posting gives direct language about what this PM owns:\n\n- **Define AI features and roadmap planning** — not just collect requests; make the call about what's on the roadmap and in what order\n- **Conduct customer interviews** — primary research, not just reading sales notes\n- **Transform validated concepts into product specifications** — spec writing that engineering can build from, not high-level vision documents\n- **Create reusable blueprints** — with engineering, not just for engineering\n- **Make decisive calls about what not to build** — explicitly called out; the ability to say no confidently is a requirement\n\n**What this means in practice:**\nAt a Series A company with a small product team, the PM owns the full customer-to-spec-to-ship loop for AI features. There's no large PM org to offload research to, no design team to hand wireframes to, no dedicated data team to pull usage metrics for you. You do the customer interviews, write the specs, work directly with engineers, and own the outcome.\n\n**What makes this role specifically hard at Kestra:**\nThe AI PM must understand orchestration deeply enough to know which AI features are technically coherent with the platform — not just which ones sound good in customer interviews. Building an AI feature that doesn't fit Kestra's execution model, plugin architecture, or YAML philosophy will fail during spec review regardless of customer demand.`,
          goAnalogy: {
            term: "Ippō",
            reading: "いっぽう",
            meaning:
              "One direction — a move that faces only one way with no alternates. The PM's role at a Series A company is ippō: you're the single point of ownership for a direction. Get it wrong and there's no other PM to catch it.",
          },
        },
        {
          heading: "The key product decisions the role faces now",
          body: `Based on the gap analysis from Unit 4, the PM inherits a specific set of decisions:\n\n**Decision 1: What AI observability to build first**\nThe current AIAgent task is a black box. Per-step traces, cost tracking, or a quality eval framework — which gap creates the most pain for enterprise AI workflow users right now? This requires customer research before committing.\n\n**Decision 2: How to sequence quick wins vs. platform investments**\nBuilding four new LLM provider integrations is faster than building per-step agent observability. But provider integrations are table stakes that competitors will match; observability is a platform investment that compounds. The sequencing call is the PM's.\n\n**Decision 3: Who is the primary AI workflow user persona?**\nData engineers starting to add LLM steps to their pipelines? ML engineers building production agents? DevOps teams using AI for infrastructure decision-making? The primary persona shapes which features to prioritize, which blueprints to create, and how to position Kestra's AI story.\n\n**Decision 4: Blueprint strategy**\nWhich AI workflow patterns are common enough to become official, curated Blueprints? Kestra curates these — they're a quality signal. The PM decides what makes the cut.\n\n**Decision 5: The AI Copilot roadmap**\nThe current Copilot handles simple to moderate flows well. Extending it to complex multi-agent flows, conditional logic, and custom plugin configurations is a significant investment. Is Copilot quality the right next investment, or should the resource go to runtime AI features (AIAgent improvements)?`,
        },
        {
          heading: "What 'technical fluency' means for this role",
          body: `The job posting says: "technical fluency in agents, orchestration, and integrations — not coding required, but deep understanding needed."\n\n**What deep understanding means:**\n- You can look at a Kestra flow YAML and understand what it does, what might fail, and what's missing (error handling, retry, timeout)\n- You understand the difference between a Runnable task and a Flowable task well enough to spec features correctly\n- You can explain why an AIAgent task's system message matters for output quality — and roughly what constitutes a good vs. bad system message\n- You can articulate why per-step agent observability is hard to build (it requires changes to how Kestra's execution engine tracks sub-executions, not just logging)\n- You understand LLM cost models (input tokens vs. output tokens, why streaming is cheaper for some use cases) well enough to evaluate whether a proposed feature is cost-efficient\n\n**What it does NOT mean:**\n- Writing Java plugin code\n- Implementing the YAML parser\n- Training or fine-tuning LLM models\n- Implementing the agent loop mechanics\n\n**The practical test:** can you have a 30-minute conversation with a senior Kestra engineer about AI feature trade-offs without the engineer having to explain prerequisite concepts? If yes, you have sufficient fluency for this role.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A customer discovery interview reveals: 'We run 50 AI agent workflows in Kestra and spend 30% of our engineering time debugging failed agent runs because we can't tell what happened.' Which product decision does this most directly inform?",
          options: [
            "Blueprint strategy — this customer needs a debugging Blueprint",
            "AI observability priority — this is a direct, quantified pain signal that per-step agent traces should be the highest-priority AI observability investment",
            "AI Copilot roadmap — better Copilot would help them write more reliable agents",
            "Provider integration — more LLM providers would reduce failure rates",
          ],
          correct: 1,
          explanation:
            "30% of engineering time on debugging failed agent runs is a concrete, high-pain signal. It directly validates the observability gap identified in Unit 4. Per-step agent traces would reduce this debugging time by making the failure point visible. This is exactly the kind of customer discovery signal that should move a product decision: specific persona (AI workflow engineers), specific pain (30% of time debugging), specific cause (can't see what happened inside the agent), specific solution direction (observability).",
        },
        {
          type: "scenario",
          prompt:
            "The Kestra engineering team says: 'We have capacity to build one of these two things: (A) 5 new LLM provider integrations, or (B) per-step AI agent execution traces.' You're the PM. Which do you recommend and how do you defend it?",
          sampleAnswer:
            "I'd recommend (B), per-step AI agent execution traces, but I'd want to validate the assumption first. Here's my reasoning: LLM provider integrations are table stakes — Anthropic, OpenAI, and Google AI cover 95% of enterprise use cases today. The remaining providers (Cohere, Mistral, local models) can be added incrementally and many customers can configure them via the generic HTTP task as a workaround. They're also the kind of feature that community contributors build — we might not need to use internal engineering capacity for them at all. Per-step agent execution traces, by contrast, require deep integration with Kestra's execution engine — this isn't something a community plugin can do. It's also the observability gap that makes AI agents untrustworthy in production: when an agent run fails, you need to know exactly what it did. Customer discovery data (if we have it) should anchor this decision. If discovery shows that 'can't debug failed agent runs' is a consistent customer pain point, that's the clinching argument. If it turns out customers are more frustrated by missing provider integrations, that changes the call. I'd recommend running 5 targeted customer conversations before committing — specific question: 'When an AI agent workflow fails, what's your process for diagnosing the failure, and how long does it take?'",
          keyPoints: [
            "Provider integrations are table stakes; observability is a platform investment that can't be bolted on by the community",
            "The recommendation is defensible but requires customer validation — state the assumption explicitly",
            "A good PM knows what data would change their recommendation",
            "Community contribution potential is a relevant input to engineering capacity allocation",
          ],
        },
      ],
      resources: [],
    },
    {
      id: "5-2",
      unitId: "unit5",
      companySlug: "kestra",
      title: "The Async Homework & The 4-Stage Process",
      tldr:
        "What Kestra's async homework likely tests, how to approach it, and what each of the four interview stages is actually evaluating. The interview process decoded through the lens of what you've learned about Kestra's product.",
      skills: ["Interview strategy", "Async homework", "Stage-by-stage preparation"],
      xp: 30,
      content: [
        {
          heading: "The async homework: what to expect",
          body: `Stage 2 is an asynchronous homework assignment. For a PM, AI role at a company focused on AI orchestration, the most likely formats are:\n\n**Format A: Product analysis**\n"Here is a specific part of Kestra's AI offering. Identify the biggest gaps and how you'd prioritize addressing them."\n\n**Format B: Customer scenario**\n"Here is a customer use case: [AI workflow description]. Write a product spec for how Kestra should support it."\n\n**Format C: Competitive positioning**\n"A prospect is choosing between Kestra and [competitor] for their AI workflow infrastructure. What are the key differentiators and what gaps should Kestra's roadmap address?"\n\n**What they're evaluating in all cases:**\n- Do you understand the actual product deeply enough to identify real gaps (not surface complaints)?\n- Can you make a decisive recommendation rather than hedging with "it depends"?\n- Is your recommendation grounded in customer JTBDs, not just technical elegance?\n- Do you explicitly call out what you're NOT building and why?\n- Is the document well-organized enough to read in 10 minutes?\n\n**The domain advantage from this course:**\nA candidate who has studied Units 1–4 can write a homework response that references specific Kestra concepts (Plugin Defaults, Flowable tasks, the Pause task pattern), specific competitor positioning (why Dagster's asset model doesn't address this use case, why Temporal wins for application durability but not orchestration), and specific gap analysis (per-step agent observability, cost tracking as a first-class metric). That specificity is the difference between a generic PM homework and one that demonstrates actual Kestra domain knowledge.`,
          goAnalogy: {
            term: "Sabaki",
            reading: "さばき",
            meaning:
              "Light, efficient play that makes the best of a difficult position without over-committing. A strong homework submission is sabaki: it covers the key points efficiently without trying to be comprehensive, making each sentence earn its place.",
          },
        },
        {
          heading: "Homework structure that works",
          body: `Regardless of the specific prompt, this structure consistently produces strong PM homework responses:\n\n**1. Problem statement (1 paragraph)**\nRestate the core problem in your own words. Show you understood what was asked and note any key assumptions you're making.\n\n**2. Your frame (2-3 sentences)**\nWhy are you looking at this through a particular lens? "I'm prioritizing the enterprise production user over the hobbyist user because Kestra's Series A and enterprise customer base suggest enterprise retention is the primary growth lever."\n\n**3. The analysis (main body — 40-60% of the document)**\nFor gap analysis: 3-4 gaps, ordered by severity, with specific evidence (customer signal, competitive gap, or product logic). Briefly dismiss alternatives you're not pursuing.\nFor customer scenario: define the user story clearly, walk through how Kestra's current platform handles it, identify what's missing, propose the solution.\nFor competitive: landscape overview (brief), Kestra's position, specific gaps that cost Kestra deals, recommended investments.\n\n**4. The recommendation (1-3 paragraphs — the core)**\nWhat to build first, specifically. Not "improve AI observability" but "add per-step execution traces to the AIAgent task: log each LLM call as a sub-execution with input prompt, output, token count, cost, and latency." Be specific enough that an engineer understands the scope.\n\n**5. What NOT to build (4-6 bullets)**\nExplicitly name what you're deprioritizing and why. This is the skill the job posting calls out by name — show you have it.\n\n**6. Success metric (1-2 sentences)**\nHow will you know the recommendation worked in 90 days?\n\n**7. What you'd validate first (1 sentence)**\n"My key assumption is [X] — I'd validate by [customer interviews / usage data / design partner test]."`,
        },
        {
          heading: "The 4-stage process: what each stage tests",
          body: `**Stage 1: 30-min intro call (hiring manager)**\nTests: do you understand what Kestra is and why this role exists? Is your background actually relevant to AI workflow products? Can you communicate clearly?\n\nPrepare: a 90-second opener that names a specific shipped AI product, what it did, and why you're excited about orchestration + AI specifically (not just "AI PM roles"). Have a crisp answer to "what do you know about Kestra?" that goes beyond the homepage — mention the 1.0 release, the AI Agents capability, the YAML-first philosophy, the Series A context.\n\n**Stage 2: Async homework**\nTests: product judgment, decisiveness, Kestra domain knowledge, written communication quality.\n\n**Stage 3: 30-min team discussion (2 colleagues)**\nTests: depth on your AI product experience, how you work with engineering, your product opinions grounded in customer evidence.\n\nExpect: "walk me through a specific AI feature you shipped" — go deep, not broad. Include the failure mode, how you measured quality, what you changed after launch. Expect "how do you handle disagreement with engineering?" — have a specific story.\n\n**Stage 4: 30-min co-founder conversation**\nTests: strategic alignment, genuine curiosity about the problem space, whether you'd make a strong early team member at a Series A company.\n\nBring: a specific opinion about Kestra's AI roadmap. Not "I'd need to learn more before having opinions" — a hypothesis you're willing to defend. The founder conversation is a strategy discussion, not an interview panel. Ask questions that reveal genuine curiosity: "What's the AI use case you're most uncertain about — where you're not sure if it's real demand or hype?"`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "The homework prompt is: 'What's the single most important AI feature Kestra should build next?' You choose per-step agent execution traces. Which response structure is strongest?",
          options: [
            "Explain why per-step traces are technically interesting and how they'd work",
            "Lead with the customer pain ('enterprise AI workflow operators can't debug failed agent runs because the AIAgent task is a black box'), then the recommendation (per-step traces as sub-executions in the DAG), then the specific scope (each LLM call and tool invocation logged with inputs/outputs/cost/latency), then what you're NOT building (new LLM provider integrations, Copilot improvements), then the success metric (% reduction in debugging time reported by design partners)",
            "Show a comprehensive analysis of all possible AI features before concluding with traces",
            "Focus on the business case (revenue impact) before the product design",
          ],
          correct: 1,
          explanation:
            "The customer-pain-first structure is the strongest because it establishes why this matters before stating what to build. Reviewers are looking for PM reasoning, not just recommendations. Starting with the pain ('can't debug agent runs') proves you grounded this in a real JTBD. The explicit 'NOT building' section demonstrates the discipline the posting calls out. The success metric makes it evaluable. Option C (comprehensive analysis first) buries the recommendation and signals you're not confident in the call.",
        },
        {
          type: "multiple-choice",
          question:
            "In Stage 4, the co-founder asks: 'We're debating whether to invest in AI Copilot improvements or AI Agent runtime improvements. How would you decide?' What's the strongest answer?",
          options: [
            "'I'd run an A/B test and let data decide'",
            "'I'd prioritize AI Agent runtime improvements — Copilot is a nice-to-have, runtime is table stakes for production AI'",
            "'I'd run 10 customer interviews focused on two specific questions: where do customers spend the most time today that Copilot improvements would save? And when agent workflows fail, how long do they spend diagnosing the failure? Whichever pain is more acute and more expensive drives the priority. My hypothesis is that runtime gaps (observability, cost tracking) block enterprise adoption more than Copilot quality gaps — but I'd validate that before committing budget'",
            "'It depends on the company's growth strategy and which segment we're optimizing for'",
          ],
          correct: 2,
          explanation:
            "Option C is strongest because it has a methodology (customer interviews), specific questions (not generic 'which is more important'), a hypothesis (runtime gaps block enterprise adoption more), and intellectual honesty (but validate before committing). Option A (A/B test) doesn't work for product strategy decisions at this level. Option B is decisive but unsupported. Option D is a hedge that signals inability to form an opinion under ambiguity — exactly what the posting warns against.",
        },
        {
          type: "scenario",
          prompt:
            "You're in the Stage 3 team discussion. An engineer asks: 'Walk me through the hardest product-engineering misalignment you've experienced on an AI feature.' Give your answer.",
          sampleAnswer:
            "The hardest misalignment I experienced was on an AI classification feature where engineering and I had different definitions of 'done.' I had specced '90% accuracy on our eval set before launch.' Engineering shipped code that hit 91% accuracy on the eval set they tested — but they had built the eval set themselves from a sample of data that wasn't representative of production distribution. When we launched, production accuracy was 78%. The root cause: I hadn't been specific enough about the eval methodology in the spec. 'Hit 90% accuracy' without specifying 'on a representative production sample, not a development sample' left room for a technically correct but practically wrong interpretation. What I changed: every AI feature spec I write now includes an 'eval methodology' section that defines not just the accuracy threshold but exactly how the eval set is constructed, who validates it as representative, and who signs off on it before the feature is considered launch-ready. The misalignment was my fault — I thought the evaluation methodology was obvious, but 'obvious' is the word engineers and PMs use right before discovering they had different assumptions. I now write down what's obvious.",
          keyPoints: [
            "Take ownership of the misalignment — blaming engineering for following the spec is weak",
            "The specific failure (eval set not representative of production) shows real AI product experience",
            "The fix (eval methodology section in every AI spec) shows you learned and changed your process",
            "The lesson ('obvious is the word we use right before finding different assumptions') is memorable and generalizable",
          ],
        },
      ],
      resources: [
        {
          title: "Kestra GitHub Issues",
          url: "https://github.com/kestra-io/kestra/issues",
          description: "Read 20–30 recent issues before Stage 3 — real user problems signal what's missing in the product and give you interview material grounded in actual customer pain.",
        },
      ],
    },
    {
      id: "5-3",
      unitId: "unit5",
      companySlug: "kestra",
      title: "Positioning Your Background for the Role",
      tldr:
        "How to frame your AI product experience to pass Kestra's explicit bar — shipped products, not demos. What to lead with, what to background, how to present a failure story, and how to construct an AI strategy pitch for the co-founder conversation.",
      skills: ["Self-positioning", "Storytelling", "AI strategy pitch"],
      xp: 25,
      content: [
        {
          heading: "What Kestra's bar actually is",
          body: `The posting says: "We have seen too many AI candidates whose entire experience is one demo or one prototype."\n\nThis isn't a boast — it's a calibration signal. They're telling you exactly what doesn't pass: a well-executed hackathon project, a one-week sprint that added a ChatGPT integration to an existing product, an AI dashboard that impressed the CEO but was never user-tested at scale.\n\n**What passes:**\n- You made a call about which AI approach to use and why (model selection decision, RAG vs. fine-tuning, structured output schema design)\n- You measured quality — you have a number, not just positive feedback\n- You handled at least one meaningful failure: accuracy degradation, a rollback, a prompt change that broke a downstream assumption\n- You know what it cost to run at scale (token cost, API cost) and you made at least one tradeoff decision based on cost\n- You own it — the feature still runs (or you can explain why it doesn't), and you were the PM from spec to post-launch measurement\n\n**The interview probe pattern:**\nThey will follow up every AI experience you name with: "How did you measure quality?" "What happened when it was wrong?" "What did it cost at scale?" "Who owns it now?" If you can answer all four specifically, you pass this filter. If you deflect or generalize on any of them, you don't.`,
          goAnalogy: {
            term: "Yose",
            reading: "よせ",
            meaning:
              "Endgame precision — converting accumulated position into concrete points. Telling your AI experience story is yose: the position (your real experience) is already set; precision in how you convert it to interview points is what determines the outcome.",
          },
        },
        {
          heading: "Your AI strategy pitch for the co-founder",
          body: `The co-founder will ask what you'd build. This is not a trick — it's an invitation to demonstrate that you've thought about the product deeply enough to have an opinion.\n\n**A pitch grounded in the domain you've learned:**\n\n"The biggest gap in Kestra's AI story right now is observability — when an AI agent workflow fails, operators can't tell what the agent was doing before it failed. The AIAgent task is a single execution entry in the DAG; the LLM calls and tool invocations inside it are invisible. For enterprise teams, this is a trust blocker: they won't run production AI workflows they can't inspect.\n\nWhat I'd build first: per-step agent execution traces. Every LLM call, every tool invocation, every agent decision logged as a sub-execution in the DAG with inputs, outputs, token count, cost, and latency. This doesn't require a new UI — it surfaces through Kestra's existing execution tree view. The work is in the execution engine, not the frontend.\n\nWhy this over other investments: LLM provider integrations are table stakes competitors will match. AI Copilot improvements serve new users. Per-step observability serves the production users who are already running AI workflows — the customers most likely to expand to enterprise contracts.\n\nSuccess metric: 60% of active AIAgent flow users enable execution trace view within 90 days of launch. I'd validate the hypothesis with 5 customer interviews focused on 'what's your process when an agent workflow fails?' before committing the spec to engineering."\n\n**This pitch is specific:** names a real gap (identified in the docs and gap analysis), a concrete feature (per-step traces), why it's the right priority (enterprise production users, trust blocker), and a validation methodology. Replace with your own view if you have a stronger conviction elsewhere.`,
        },
        {
          heading: "Handling the 'limited AI experience' scenario honestly",
          body: `If your AI product experience is thinner than ideal:\n\n**Build experience before the interview:**\nSet up a Kestra instance (it's open source — free). Build a flow that uses the AIAgent task type to do something small and real: research a topic and produce a structured summary. Run it 20 times. Observe how it fails. Write a brief analysis of what you'd add to make it production-ready. This is hands-on experience with the actual product and a concrete story to tell.\n\n**Go deep on the domain you do have:**\nIf you've shipped AI features but not orchestration-specific ones, prepare to go extremely deep on those features. The probe questions will try to find the edges of your experience. Know exactly: how you measured quality (the eval methodology, the specific metric, the threshold you set), how you handled failure (the incident, the root cause, what changed), and what it cost (the math, the model choice rationale, the cost optimization you made).\n\n**Be honest about what you'd need to learn:**\nA good answer to "what's your biggest gap for this role?" is not false modesty — it's specific and shows awareness. "I haven't owned the eval infrastructure for an AI product end-to-end; I've worked closely with the ML team on this but haven't made the methodology decisions myself. I understand the concepts and I'd want to build that ownership in the first 90 days" is stronger than overclaiming experience that gets probed away.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "You describe an AI feature you shipped: 'We built an LLM-powered support ticket classifier that ran in production for 8 months.' The interviewer asks: 'How did you know it was still working correctly after month 3?' What's the passing answer?",
          options: [
            "'Support managers gave us positive feedback consistently throughout the period'",
            "'We had a weekly eval pipeline: a sample of 200 tickets from the past week, labeled by a support QA team, run against the classifier. Accuracy was tracked in our analytics dashboard. When it dropped below 85% for two consecutive weeks, it triggered a prompt review. We had one such incident in month 5 — a new ticket category emerged and accuracy on those tickets was 62%. We added training examples and the accuracy recovered to 91%.'",
            "'The ticket routing error rate stayed low based on support team reports'",
            "'We monitored API response times and error rates to ensure the system was healthy'",
          ],
          correct: 1,
          explanation:
            "Option B passes because it describes a specific, rigorous eval methodology: weekly cadence, labeled sample, a defined accuracy threshold with a trigger condition, and a specific incident with a specific root cause and resolution. 'Support manager feedback' and 'low error rate' are not quality measurement — they're availability measurement. Option B demonstrates production AI experience; the others demonstrate monitoring a system, not measuring its quality.",
        },
        {
          type: "multiple-choice",
          question:
            "The co-founder pushes back on your strategy pitch: 'We tried building per-step agent traces 4 months ago and customers didn't use it — adoption was near zero in our beta.' How do you respond?",
          options: [
            "'That changes everything — I'd rethink the recommendation entirely'",
            "'Interesting. What was the beta cohort — were they running production AI workflows or still prototyping? And how did you surface the traces in the UI? Low adoption could signal that we built the wrong version of the feature, not that the underlying pain doesn't exist. What were the most common agent debugging workflows during the beta period?'",
            "'The market has changed significantly since 4 months ago — AI adoption in enterprise is much higher now'",
            "'I'd need to see the beta data before responding'",
          ],
          correct: 1,
          explanation:
            "The right response probes the beta outcome rather than capitulating or doubling down. Beta adoption near zero could mean: the feature wasn't surfaced prominently in the UI, the beta users weren't experiencing the pain at scale yet, the implementation was incomplete, or the pain genuinely doesn't exist. Each has different implications. The co-founder is testing whether you have the resilience to examine a negative data point critically rather than either abandoning your view reflexively or ignoring the signal.",
        },
      ],
      resources: [
        {
          title: "Kestra Community Slack",
          url: "https://kestra.io/slack",
          description: "Join before the co-founder conversation — the discussions there reveal what real users are struggling with and asking for, giving you fresh customer signal.",
        },
        {
          title: "Kestra Docs: AI Agents",
          url: "https://kestra.io/docs/ai-tools/ai-agents",
          description: "Build a small AIAgent flow before the interview — hands-on experience with the actual product is the strongest preparation.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "The PM, AI role requires 'decisive calls about what not to build.' Why is this specifically called out for an AI PM role at Kestra?",
      options: [
        "AI features are more expensive to build, so more careful prioritization is needed",
        "In AI product development, the space of possible features is practically infinite and demos are cheap and impressive — an AI PM without strong 'no' discipline will constantly chase impressive demos instead of building for validated production pain, which is exactly what Kestra has seen go wrong with other AI PM candidates",
        "Kestra has limited engineering resources and needs a PM who is efficient",
        "Enterprise customers expect a focused AI strategy, not many features",
      ],
      correct: 1,
      explanation:
        "The posting literally says 'we've seen too many AI candidates whose entire experience is one demo or one prototype.' The explicit 'decisive calls about what not to build' requirement is the corrective: a PM who is susceptible to impressive demos will put demos on the roadmap. A PM with discipline will validate the pain, distinguish prototype-level excitement from production-level need, and say no to things that don't pass the bar — even when the demo was impressive or the customer asking is large.",
    },
    {
      type: "multiple-choice",
      question: "Which of these answers best demonstrates deep Kestra product knowledge in a Stage 3 interview?",
      options: [
        "'I think Kestra's YAML model is a key differentiator because it's more readable than Python DAGs'",
        "'Kestra's Plugin Defaults feature enables a specific pattern I'd use for AI workflow governance: set the LLM provider, model, and API key at the namespace level, so any team's AI workflows automatically use the organization-approved model without requiring each flow author to configure the provider. This also means upgrading the model org-wide is one change, not N flow changes. I'd use this pattern in the spec for the AI governance feature I'd propose.'",
        "'I've used Kestra extensively and find the YAML editor very intuitive'",
        "'Kestra's 1300+ plugins make it the most integrated orchestration platform on the market'",
      ],
      correct: 1,
      explanation:
            "Option B demonstrates deep product knowledge because it: names a specific feature (Plugin Defaults), explains exactly how it works (namespace-level provider configuration), applies it to a specific use case (AI governance), and connects it to a product decision (how to spec the AI governance feature). It's not reciting marketing language — it's showing you understand the product well enough to use it in your product thinking. Option A is general positioning language. Options C and D are surface-level claims.",
    },
    {
      type: "multiple-choice",
      question: "After completing Units 1–4 of this course, which question are you best prepared to answer in the co-founder conversation that a candidate without this preparation couldn't?",
      options: [
        "'What's your greatest strength as a PM?'",
        "'How does Kestra's AI Agent tool use Plugin Defaults, and why is this the right architectural decision for enterprise AI governance?' — a question that requires understanding the specific product feature, its enterprise use case, and the design reasoning behind it",
        "'Tell me about yourself'",
        "'Where do you see AI going in the next 5 years?'",
      ],
      correct: 1,
      explanation:
        "The Plugin Defaults question tests Kestra-specific product knowledge that can only be answered by someone who has studied the actual product, not just the company or the market. A candidate without this preparation would give a generic answer about 'centralized configuration' without naming the feature, explaining the namespace scoping, or connecting it to enterprise governance. The course prepares you to give the specific, grounded answer — which is the co-founder conversation differentiator.",
    },
  ],
  quizXp: 35,
};
