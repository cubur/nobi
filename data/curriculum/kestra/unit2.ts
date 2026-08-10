import type { Unit } from "@/data/types";

export const kestraUnit2: Unit = {
  id: "unit2",
  title: "AI Product Judgment",
  description:
    "How to distinguish serious AI use cases from flashy demos, what makes an AI feature worth building, and how to think about the quality/cost/reliability tradeoffs that separate production AI from prototypes.",
  companySlug: "kestra",
  goTerm: "Katachi",
  goReading: "かたち",
  goMeaning:
    "Shape — the efficiency and soundness of a position's form. Good katachi is strong in all directions. An AI feature with good katachi handles failure, scales, and proves its value with a metric.",
  color: "golden",
  lessons: [
    {
      id: "2-1",
      unitId: "unit2",
      companySlug: "kestra",
      title: "Serious Use Cases vs. Flashy Demos",
      tldr:
        "Kestra's job posting explicitly warns about candidates with only demo experience. Learn the exact signals that separate a production AI feature from a prototype — and how to evaluate incoming customer requests against this bar.",
      skills: ["Product judgment", "Use case evaluation", "AI product thinking"],
      xp: 25,
      content: [
        {
          heading: "Why Kestra made this explicit in the job posting",
          body: `The line in the posting — "We have seen too many AI candidates whose entire experience is one demo or one prototype" — is unusually specific for a job description. It means they've interviewed candidates who:\n\n- Built an impressive Streamlit app or Jupyter notebook with GPT-4, and called it "an AI product"\n- Contributed to a hackathon project that "used LLMs for X"\n- Added a ChatGPT integration to an existing product as a one-week sprint, with no ongoing ownership\n- Worked adjacent to an AI team without making the hard product decisions themselves\n\n**What they're actually looking for:** a PM who has made real bets — prioritized one AI feature over another, decided when an AI approach wasn't good enough and rolled it back, shipped something that users relied on and then had to maintain as the model provider's API changed.\n\n**The interview implication:** Every AI experience you describe needs to go deep enough that a skeptical interviewer can't dismiss it as demo-level. Specifics are the signal: what was the eval framework? What happened when it failed? How did you know it was working?`,
          goAnalogy: {
            term: "Aji",
            reading: "あじ",
            meaning:
              "Latent potential in a position — stones that look dead but have future possibilities. Demo experience has aji: it shows possibility but not strength. Interviewers look for realized strength, not latent potential.",
          },
        },
        {
          heading: "The five questions that separate production from prototype",
          body: `Apply these to any AI use case — including ones customers bring you:\n\n**1. What happens when the AI is wrong?**\nPrototype: "It doesn't work perfectly yet but it's pretty good."\nProduction: "Wrong outputs trigger a fallback rule / human review queue / confidence threshold gate. We track error rate weekly."\n\n**2. How do you know it's working?**\nPrototype: "We tested it with 50 examples and it looked good."\nProduction: "We have an eval set of 500 labeled examples, run it after every model or prompt change, and track accuracy in our dashboard. We set a 90% accuracy threshold before any prompt change ships."\n\n**3. What does it cost to run?**\nPrototype: "We haven't measured that yet."\nProduction: "It costs $0.003 per run at current volume (2,000 runs/day = $180/month). We have a cost alert if that spikes more than 20%."\n\n**4. What happens when the API is unavailable?**\nPrototype: "We'd just re-run it manually."\nProduction: "The workflow retries up to 3 times with exponential backoff. After 3 failures it routes to a fallback path (rule-based classifier) and pages the on-call team."\n\n**5. Who owns it when it degrades?**\nPrototype: "The team that built it would fix it."\nProduction: "There's a runbook. When accuracy drops below 85% for 3 consecutive days, the ML team reviews recent failures and the PM decides whether to retrain, adjust the prompt, or escalate."`,
        },
        {
          heading: "Evaluating customer AI requests against this bar",
          body: `When a customer asks for an AI feature, your job as PM is to understand where they actually are on the serious/demo spectrum — because it affects what you build.\n\n**A customer who is at prototype level needs:**\n- Guardrails and confidence thresholds (don't let the AI act without a human checkpoint)\n- Easy fallback mechanisms\n- Visibility into what the AI is doing (per-step observability)\n- A clear path from prototype to production\n\n**A customer who has production AI workflows needs:**\n- Cost controls and monitoring\n- Eval integration (run their test suite against every workflow version)\n- Audit logs for compliance\n- Reliability guarantees (SLA, retry behavior, alerting)\n\n**Why this matters for the Kestra roadmap:**\nDifferent customers are at different points on this spectrum. A feature that serves prototype-level customers (easy confidence thresholds) is different from a feature that serves production customers (eval pipeline integration, cost dashboards). You need both — but they're different engineering bets, and you need to prioritize knowing which segment to serve first.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A customer says: 'We're using Kestra to run an AI workflow that summarizes daily reports and sends them to executives. It's been running for 3 months and they love it.' Is this serious production AI? What's the key question to ask?",
          options: [
            "Yes — 3 months of successful operation proves it's production-grade",
            "It might be — the key question is: 'What happens when it produces a wrong or incomplete summary? Who notices and how?' If there's no detection mechanism, it's a demo running on a schedule",
            "It depends on how many reports it processes per day",
            "Yes — executive users provide implicit quality feedback by continuing to use it",
          ],
          correct: 1,
          explanation:
            "Duration is not a quality signal — a prototype can run for 6 months if no one notices when it fails. The critical gap in most 'summary' workflows is detection: if the LLM returns an incomplete or hallucinated summary, does anyone know? Executive users often assume the AI is right and don't provide corrective feedback. The absence of a detection mechanism means this is likely a demo running on a schedule, not production AI.",
        },
        {
          type: "multiple-choice",
          question:
            "A PM candidate describes their AI product experience: 'I led the launch of an AI feature that used GPT-4 to auto-tag customer support tickets. We shipped it in 3 weeks and got great initial feedback.' What's the follow-up question that reveals whether this is serious experience?",
          options: [
            "'How many tickets did it tag per day?'",
            "'What was the tagging accuracy, how did you measure it, and what did you do when it tagged a ticket incorrectly?'",
            "'Did you get C-suite visibility for this project?'",
            "'How did you decide to use GPT-4 vs. another model?'",
          ],
          correct: 1,
          explanation:
            "The accuracy + measurement + failure handling question reveals everything. If the candidate says 'we got positive feedback from support managers' — that's demo-level (subjective, no measurement). If they say 'we achieved 87% accuracy on our test set, tracked production accuracy weekly, and built a human review queue for low-confidence tags' — that's production-level experience. The other questions are interesting but don't distinguish prototype from production as sharply.",
        },
        {
          type: "scenario",
          prompt:
            "You're in a customer interview. The customer says: 'We want to use AI to automatically resolve simple support tickets — answer the question, close the ticket, no human involved.' How do you think about whether to build this, and what would you tell them?",
          sampleAnswer:
            "This is a real use case, but 'no human involved' is the part that needs scrutiny before we commit to building it. My response to the customer: 'This is exactly the kind of workflow Kestra can support — let's figure out what 'simple' means and what the failure mode looks like. A few questions: What % of your tickets would qualify as simple? How would you know if the AI answered incorrectly? What happens if a customer escalates a ticket that was auto-closed? Would your support team trust this enough to actually leave it unsupervised?' My hypothesis: the right first version isn't 'fully autonomous resolution' — it's 'AI-drafted response that a support agent approves with one click.' That's a human-in-the-loop workflow that proves value quickly, builds trust in the system, and creates an eval dataset (every approval/rejection) for improving accuracy. I'd build toward full autonomy, but I wouldn't ship it without a confidence threshold and a human review gate for the first 90 days.",
          keyPoints: [
            "Fully autonomous AI actions on external-facing workflows need high confidence bars — start with human-in-the-loop",
            "Customer interviews should probe the failure mode before you commit to the happy path",
            "'Human-in-the-loop then graduate to autonomous' is a safer roadmap than 'autonomous from day one'",
            "The review queue creates the eval dataset you need to safely remove the human later",
          ],
        },
      ],
      resources: [],
    },
    {
      id: "2-2",
      unitId: "unit2",
      companySlug: "kestra",
      title: "The Quality / Cost / Reliability Triangle",
      tldr:
        "Every AI product decision involves a tradeoff between output quality, cost per run, and reliability. A Kestra PM needs to reason about this triangle for every AI feature — and help customers reason about it for their workflows.",
      skills: ["AI economics", "Product tradeoffs", "Model selection"],
      xp: 25,
      content: [
        {
          heading: "The three axes and what they mean",
          body: `**Quality:** How good is the AI output? For text tasks, this is accuracy, relevance, coherence. For structured output, it's whether the extracted fields are correct. For decisions, it's whether the AI chose the right path. Quality is almost never binary — it exists on a spectrum and degrades gradually.\n\n**Cost:** What does each run cost? LLM API cost is primarily driven by token volume (input + output) × price per token. Cost scales with usage — what's cheap at 100 runs/day may be prohibitive at 100,000 runs/day. Cost also includes engineering time for prompt tuning and eval maintenance.\n\n**Reliability:** Does the workflow run successfully? Reliability has two dimensions: (1) infrastructure reliability (does the API call succeed, does the task complete?) and (2) quality reliability (does the AI produce valid, usable output consistently?). A task can be infrastructure-reliable but quality-unreliable — it always returns something, but the output is sometimes wrong.\n\n**The tradeoff:** Better models cost more. Faster models are often less capable. Cheaper models may have worse reliability (more rate limiting, lower quality at edge cases). You can't optimize all three simultaneously — every AI feature involves making a call on where to land on this triangle.`,
          goAnalogy: {
            term: "Komi",
            reading: "こみ",
            meaning:
              "Points given as compensation — explicitly acknowledged starting asymmetry. The quality/cost/reliability tradeoffs are komi: acknowledge them explicitly at the start of every AI feature spec, not as an afterthought.",
          },
        },
        {
          heading: "Model selection as a PM decision",
          body: `PMs don't write the API calls, but they make the call on which model to use — or rather, they set the criteria that engineering uses to make that call. Here's the framework:\n\n**Task complexity → model tier:**\n- Simple extraction, classification, routing → smaller, faster models (Claude Haiku 4.5, GPT-4o Mini). Low cost, high speed, sufficient quality for well-defined tasks.\n- Summarization, generation, analysis → mid-tier models (Claude Sonnet 5, GPT-4o). Higher cost, better quality for nuanced tasks.\n- Complex reasoning, multi-step agent decisions, code generation → top-tier models (Claude Opus 5). Highest cost, best quality for hard problems.\n\n**The PM call:** Define the task precisely enough that engineering can pick the right tier. "Classify this ticket into one of 12 categories" is a haiku-tier task. "Analyze this contract and identify 15 categories of risk clauses with confidence scores and explanations" is an opus-tier task. If you can't specify the task clearly, you can't make a principled model choice.\n\n**When to use multiple models:** A common production pattern is a cheap model as the first pass (route to the right category, check confidence), escalating to an expensive model only for low-confidence cases. This gives you good average-case cost with high-quality handling of hard cases.\n\n**What this means for Kestra features:** Native model routing — "use model A for confidence > 0.8, escalate to model B otherwise" — is a genuine product feature. It's not just a prompt engineering trick; it requires workflow branching, output validation, and cost tracking. A native Kestra pattern for this would be valuable.`,
        },
        {
          heading: "Communicating tradeoffs to customers",
          body: `One of the most important PM skills in AI is helping customers make principled tradeoff decisions — not just implementing whatever they ask for.\n\n**Scenario:** A customer wants AI to review every contract for risk clauses, using the best available model, with results in under 5 seconds.\n\n**The tradeoff conversation:**\n- Best model + 5-second requirement: probably achievable, but at $0.40 per contract at high volume. Is that cost worth it?\n- If they process 500 contracts/day: $200/day = $6,000/month. Is that in their budget?\n- What if you use a mid-tier model for the first pass (catches 90% of issues, $0.04/contract) and only escalate to the best model for flagged contracts? $0.04 × 450 + $0.40 × 50 = $38/day = ~$1,140/month. Same quality for 90% of cases, 5x cheaper.\n- What if 5 seconds isn't actually a hard requirement — the contract review takes 3 days anyway, and they just want results before the lawyer reviews? Then latency isn't the constraint, and you can use an async approach with batching.\n\n**The PM's job is to surface these questions before committing to a solution.** Customers often specify requirements that embed hidden assumptions. Your job is to find the assumptions and test them.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A customer wants to use AI to classify incoming data integration errors into 8 categories to route them to the right on-call team. They need results in under 2 seconds. What model tier is appropriate and why?",
          options: [
            "Top-tier model — on-call routing is high-stakes and needs maximum accuracy",
            "Small/fast model — 8-category classification is a well-defined task where a capable small model will achieve high accuracy, and 2-second latency requirements favor models optimized for speed",
            "Mid-tier model — balance quality and cost for an important use case",
            "Multiple models — use a small model for common errors, escalate to top-tier for novel ones",
          ],
          correct: 1,
          explanation:
            "8-category classification is exactly the kind of well-structured, repetitive task where small models perform at near-parity with large models. The categories are known, the input (error messages) is structured, and the task doesn't require complex reasoning. A small model will meet the 2-second requirement easily. The multiple-model approach (Option D) adds complexity without meaningful quality gain for this task — save that pattern for tasks with genuinely high variance in difficulty.",
        },
        {
          type: "multiple-choice",
          question:
            "A customer's AI workflow costs $800/month at current volume. They're planning to expand usage 10x. Before the expansion, what conversation should a PM initiate?",
          options: [
            "Confirm the customer's budget can handle $8,000/month",
            "Work with the customer to identify cost optimization opportunities — model tiering, batching, caching common inputs, reducing output length — before the 10x expansion locks in the current architecture",
            "Recommend migrating to a cheaper model provider",
            "Escalate to the customer's engineering team to optimize the prompt",
          ],
          correct: 1,
          explanation:
            "10x scale is the right time to revisit the architecture, not after the bill arrives. The PM conversation should happen before the expansion: what % of their runs are high-complexity (need the current model tier) vs. routine (could use a cheaper model)? Do they cache results for repeated inputs? Can they batch non-time-sensitive runs for cheaper pricing? These architectural decisions are much easier to make before scale than after. A PM who surfaces this conversation proactively adds real value.",
        },
      ],
      resources: [],
    },
    {
      id: "2-3",
      unitId: "unit2",
      companySlug: "kestra",
      title: "What to Build vs. What Not to Build",
      tldr:
        "The Kestra posting specifically calls out 'making decisive calls about what not to build.' This lesson covers the frameworks and signals that help a PM say no confidently — and when to say yes.",
      skills: ["Prioritization", "Scope management", "Strategic focus"],
      xp: 20,
      content: [
        {
          heading: "Why 'what not to build' is called out explicitly",
          body: `For a Series A company in AI, the list of things you could build is effectively infinite. Every customer has different needs. Every competitor makes moves you could respond to. Every developer on the team has features they think would be interesting.\n\nThe PM's hardest job is not finding ideas — it's maintaining conviction about what not to build, even under pressure from:\n- A customer who's asking urgently (and implying they might churn if you don't build it)\n- A competitor who just shipped a similar feature\n- An investor who saw a demo of something and wants to know if Kestra does it\n- An engineer who built a prototype in a hackathon and wants to ship it\n\n**Why this is especially hard in AI:** AI makes everything feel possible. Demos are cheap and impressive. A prototype that impresses a customer in a meeting is 90% of the way to "we need this feature" — even when the productionization work is enormous and the use case is narrow.\n\n**The discipline Kestra needs:** Enough internal conviction about the AI roadmap direction that individual anecdotes (one customer request, one competitor feature) don't cause constant thrash.`,
          goAnalogy: {
            term: "Tenuki",
            reading: "てぬき",
            meaning:
              "Playing elsewhere — ignoring a local threat to take a larger initiative. Deciding what not to build is tenuki: recognizing when a local demand (one customer's request) is less valuable than the global initiative (the platform-wide AI strategy).",
          },
        },
        {
          heading: "Signals that something should NOT be on the roadmap",
          body: `**1. One customer, no pattern**\nA single customer asks for a very specific feature. Investigation reveals no other customer has expressed this need, and it wouldn't be useful to any other segment. Unless this customer is strategic for other reasons, this is custom development, not product development.\n\n**2. The demo is more impressive than the feature**\nSome AI features produce spectacular demos that customers love in the room but don't actually need in production. Flow generation from natural language is like this — the demo wows, but most customers can write YAML faster than describing what they want in natural language, especially for complex flows. The demo ≠ the value delivered.\n\n**3. The real problem is elsewhere**\nCustomers often request solutions to surface symptoms. "We want AI to automatically retry failed tasks" might actually be a symptom of "our retry configuration is too complex and we don't know how to set it up." The right solution might be better retry UI, not AI.\n\n**4. Technical dependencies aren't ready**\nSome AI features require infrastructure that doesn't exist yet. Building "AI that learns from your workflow patterns" requires extensive telemetry and ML infrastructure that Kestra doesn't have. Don't put it on the roadmap if the dependencies aren't on the roadmap.\n\n**5. You can't define success**\nIf you can't specify what "good" looks like for an AI feature — what metric goes up, what user behavior changes — you don't understand the problem well enough to build it yet.`,
        },
        {
          heading: "Signals that something SHOULD be on the roadmap",
          body: `**1. Multiple independent customers, same pain**\nWhen 3+ customers independently describe the same friction without being prompted, you've found a real product gap. The pattern is the signal, not any individual customer.\n\n**2. It unlocks the platform, not just the feature**\nSome features are infrastructure for other features. Native LLM task types enable all future AI workflow patterns. First-party evals enable quality tracking across all AI workflows. These platform bets compound.\n\n**3. You can define the before/after clearly**\nA buildable feature has a clear "jobs to be done" articulation: users who want to do X currently have to do Y (which is slow/fragile/expensive). This feature lets them do X directly. If you can't articulate the before/after, you can't validate it with customers.\n\n**4. Competitors haven't shipped it yet**\nIf a feature is on the right track and no competitor has shipped it, there's a window. Wait too long and the category expectation gets set by someone else.\n\n**5. It removes a blocker that stops deals**\nIn sales conversations, if one feature gap is consistently cited as the reason prospects don't convert, that feature has commercial urgency independent of general appeal.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A large enterprise customer (significant ARR potential) asks Kestra to build a custom AI feature: a compliance workflow that maps to their specific regulatory requirements. No other customer needs this. How should the PM respond?",
          options: [
            "Build it — revenue from a large enterprise customer justifies custom development",
            "Decline and explain why general-purpose compliance features would serve them better",
            "Offer to build it as a paid professional services engagement, not as a product feature — or explore whether the underlying capability (configurable compliance rules) could be generalized into a platform feature that serves multiple customers",
            "Put it at the bottom of the roadmap as a low-priority backlog item",
          ],
          correct: 2,
          explanation:
            "Custom development for a single customer is a product trap: it takes engineering resources away from platform work, creates a maintenance burden, and doesn't compound. The right answer is to find the generalization ('configurable compliance rules that any customer can configure for their jurisdiction') or move it to paid professional services (which prices in the custom work appropriately). A PM who says yes to all enterprise custom requests ends up with a consulting business, not a product.",
        },
        {
          type: "scenario",
          prompt:
            "Your engineering team built an AI feature during a hackathon: 'AI-powered anomaly detection for workflow execution metrics — it learns your normal patterns and alerts on unusual behavior.' The demo is impressive and the team is excited to ship it. Should you put it on the roadmap? Walk through your evaluation.",
          sampleAnswer:
            "I need to evaluate this against the 'what not to build' signals before committing. First question: do customers actually need this? I'd do 5 customer interviews focused on: 'When a workflow behaves unexpectedly, how do you find out? How long does it take? What do you do about it?' If customers are already satisfied with existing alerting tools, this feature doesn't solve a real pain. Second question: what does the demo actually deliver vs. what production would require? The hackathon demo probably learns on the team's own workflow history. A real product needs: customer-specific baseline learning periods (30+ days of data), configurable sensitivity thresholds, integration with their existing alerting tools (PagerDuty, Slack), explainable alerts (not just 'something is weird'), and low false-positive rates. That's months of work, not a sprint. Third question: can I define success? If I can't say 'this feature is working if X% of production anomalies are caught before customers notice them, with fewer than Y false positives per week' — I don't understand the feature well enough to build it. My recommendation: run the customer interviews. If the pain is real and validated, the hackathon prototype becomes the basis for a real spec. If not, celebrate the hack but park the feature.",
          keyPoints: [
            "Impressive demos require validation before they become roadmap commitments",
            "Hackathon prototypes rarely account for the productionization work — investigate the gap",
            "Define success before committing, not after",
            "Customer interview findings should drive the decision, not team excitement",
          ],
        },
      ],
      resources: [],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question:
        "A PM says: 'I've never rolled back an AI feature after launch.' Is this a good signal or a concerning one?",
      options: [
        "Good signal — it means their features were well-designed and didn't have problems",
        "Concerning — rolling back and adjusting AI features in response to quality issues is normal production behavior; never rolling back suggests either very limited AI experience or not measuring quality closely enough to know when to act",
        "Neutral — rollback decisions depend on the specific features built",
        "Good signal — rollbacks are costly and avoiding them is a PM skill",
      ],
      correct: 1,
      explanation:
        "Production AI features degrade as models change, data distributions shift, and edge cases emerge. A PM who has shipped AI features to real users and tracked quality carefully will almost certainly have made rollback decisions. Never rolling back suggests either a very short track record, or not measuring quality well enough to know when a feature has degraded.",
    },
    {
      type: "multiple-choice",
      question: "Which of these is the strongest signal that an AI use case is worth building into the Kestra platform?",
      options: [
        "A large enterprise customer is requesting it urgently",
        "A competitor just shipped a similar feature",
        "Five different customers independently described the same friction in discovery interviews, and solving it would require a platform capability (not just a plugin) that multiple future features could build on",
        "The engineering team has a working prototype that demonstrates feasibility",
      ],
      correct: 2,
      explanation:
        "Pattern across multiple independent customers + platform leverage = the strongest roadmap signal. Single customer urgency creates custom development pressure. Competitive response creates reactive, not strategic, roadmaps. A working prototype proves feasibility, not value. Five independent customers who found the same pain without being prompted is strong market signal; the platform leverage (it enables multiple future features) makes the investment compound.",
    },
  ],
  quizXp: 30,
};
