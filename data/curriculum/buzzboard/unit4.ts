import type { Unit } from "@/data/types";

export const buzzboardUnit4: Unit = {
  id: "unit4",
  title: "Evaluation Frameworks",
  description:
    "How to measure whether an AI product is actually working — building eval datasets, defining quality rubrics, tracking cost efficiency, and making quality vs. speed tradeoffs.",
  companySlug: "buzzboard",
  goTerm: "Fuseki Hyoka",
  goReading: "ふせきひょうか",
  goMeaning:
    "Opening evaluation — assessing the state of the board after the opening sequence. An evaluation framework is your fuseki hyoka: the ability to objectively score the board position and identify where you're winning or losing.",
  color: "crimson",
  lessons: [
    {
      id: "4-1",
      unitId: "unit4",
      companySlug: "buzzboard",
      title: "Why AI Products Need Different Metrics",
      tldr:
        "Traditional software is either working or broken. AI products exist on a quality spectrum, degrade silently, and fail in ways that are hard to reproduce. Standard product metrics aren't enough — you need evals.",
      skills: ["AI product metrics", "Eval thinking", "Silent failure detection"],
      xp: 20,
      content: [
        {
          heading: "The silent failure problem",
          body: `Traditional software has deterministic behavior: a button either works or it doesn't. If it breaks, there's an error log. The failure is discrete and visible.\n\nAI products fail differently:\n\n**Gradual quality degradation** — a model update, a prompt change, or a shift in input distribution can cause output quality to slowly decline. No 500 error. No stack trace. Just slightly worse outputs that users notice individually but don't report systematically.\n\n**Distribution shift** — your evals were built on last quarter's prospect data. The sales team is now targeting a new vertical, and the input distribution has changed. Your eval metrics still look fine because they're measuring the old use case; the new use case is quietly failing.\n\n**Inconsistent behavior** — the same input can produce different outputs across runs (LLMs are probabilistic). "It worked when I tested it" is not evidence it works reliably at scale.\n\n**Hallucination in the tail** — the model performs well on the 95th percentile of inputs. On unusual or edge-case inputs (an SMB with no digital presence, a prospect in a niche industry), it fabricates. Your average-case metrics look great; your worst-case behavior is a customer embarrassment.\n\nFor a PM on BuzzBoard's AI products, the implication is clear: you need monitoring systems that catch these failures before customers do. This requires: a baseline eval suite, continuous monitoring of production outputs, and clear quality thresholds that trigger alerts.`,
          goAnalogy: {
            term: "Dame",
            reading: "だめ",
            meaning:
              "Neutral points that don't affect the score — until they do. Ignored edge cases are dame: seemingly irrelevant until the endgame, when a silent failure in the tail costs you the match.",
          },
        },
        {
          heading: "The eval mindset: LLM-as-judge",
          body: `The most scalable way to evaluate LLM outputs is to use another LLM as a judge. This is called **LLM-as-judge** evaluation.\n\nHere's how it works for Zylo's outreach quality:\n\n1. You define a rubric: "Grade this outreach message on: (1) personalization quality (does it reference specific prospect details?), (2) value prop clarity (is the BuzzBoard benefit clearly stated?), (3) tone appropriateness (professional but warm, under 150 words?). Score 1–5 on each."\n\n2. You build a judge prompt that applies this rubric consistently.\n\n3. For every Zylo output (or a sampled subset), the judge model scores it automatically.\n\n4. You track average scores over time. A drop in any dimension triggers investigation.\n\nLLM-as-judge is imperfect — the judge can be biased, inconsistent, or calibrated differently than your actual quality bar. Mitigations:\n- **Calibrate the judge**: have humans manually score 100–200 examples and verify the judge's scores correlate with human scores (aim for >80% agreement on the same rubric)\n- **Use multiple judge calls**: average across 3 judge calls to reduce single-run variance\n- **Anchor with human review**: periodically re-validate the judge against fresh human labels\n\n**Outcome metrics are the gold standard** — for Zylo, the ultimate eval metric is **outreach reply rate**. An LLM judge evaluating message quality is a proxy; actual rep replies are the truth. Both are needed: judge scores give you fast feedback on prompt changes; reply rates give you ground truth on real-world performance.`,
        },
        {
          heading: "The PM's metric dashboard for an AI agent",
          body: `An AI agent product needs four layers of metrics:\n\n**Task success rate** — what % of agent runs complete successfully (without errors, without hitting fallback behavior, producing a non-empty output)? This is your reliability baseline. 95%+ is table stakes for a production agent.\n\n**Quality score** — LLM-judge scores on your quality rubric. Track per-dimension and in aggregate. Trending down = something changed. Track separately for different input segments (industry, SMB size, data quality).\n\n**Outcome metrics** — the actual downstream business result. For Zylo: outreach reply rate, meeting booking rate. For Ember: churn prediction accuracy (did the accounts it flagged actually churn?). For Ignite: conversion rate of recommended prospects vs. non-recommended.\n\n**Efficiency metrics** — cost per run, latency P50/P95, tokens consumed per run. These aren't quality metrics, but they're operational health indicators. Sudden cost increases or latency spikes indicate something changed in the pipeline.\n\n**Fairness and safety checks** — for an outreach agent, does it produce different quality outputs for prospects of different industries, sizes, or geographic regions? Are there outputs that violate brand guidelines or could create legal exposure? These aren't tracked by default — you have to build for them explicitly.\n\nA PM who can define this dashboard in a spec interview will stand out from candidates who can only talk about generic product KPIs.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "Zylo's average LLM-judge quality score drops from 4.2 to 3.8 over two weeks, but no code changes were deployed. What are the two most likely causes?",
          options: [
            "The judge model was updated, or the input distribution shifted (new verticals, new prospect types being fed to Zylo)",
            "The model provider had an outage, or the database has data corruption",
            "The system prompt was accidentally deleted, or the API key expired",
            "A competitor released a better outreach tool, reducing the perceived quality of Zylo's messages",
          ],
          correct: 0,
          explanation:
            "Silent quality drops with no code change typically come from: (1) the judge model itself changing behavior (providers update models), or (2) the input distribution shifting (sales team targeting a new vertical that Zylo isn't calibrated for). Both require investigation: check if judge calibration changed, and segment quality scores by input type to identify if a specific segment is degrading.",
        },
        {
          type: "multiple-choice",
          question:
            "What is the correct way to validate that an LLM-as-judge evaluation rubric is reliable?",
          options: [
            "Confirm with the model provider that it's capable of consistent evaluation",
            "Have humans manually score 100–200 examples and verify that judge scores correlate with human scores at >80% agreement",
            "Run the judge on the same 10 examples 5 times and check for consistency",
            "Compare the judge's scores against a competitor's eval benchmark",
          ],
          correct: 1,
          explanation:
            "LLM judges can produce plausible-looking but miscalibrated scores. The only way to validate is to compare against human ground truth: manually score a representative set, verify correlation. If the judge agrees with humans 80%+ of the time, it's a reliable proxy. Less than that and you need to revise your judge prompt.",
        },
        {
          type: "multiple-choice",
          question:
            "Why is 'outreach reply rate' a more reliable quality signal than LLM-judge quality scores for Zylo?",
          options: [
            "Reply rates are faster to compute than running the judge prompt",
            "Reply rate is a real-world outcome signal — it measures what actually moves a rep's pipeline, not a model's assessment of quality",
            "LLM judge scores can only evaluate grammar and tone, not business impact",
            "Reply rates are the only metric that avoids hallucination bias in evaluation",
          ],
          correct: 1,
          explanation:
            "Judge scores measure 'does this look like good outreach?' Reply rates measure 'did this outreach actually get a response?' A message can score high on a rubric and still be ineffective. Ground truth outcome metrics validate whether your proxy metrics (judge scores) are actually predicting business results.",
        },
      ],
      resources: [
        {
          title: "LLM-as-Judge Evaluation Pattern (Hamel.dev)",
          url: "https://hamel.dev/blog/posts/llm-judge/",
          description: "Practical guide to using LLMs for automated evaluation — calibration, pitfalls, and best practices.",
        },
        {
          title: "Braintrust: LLM Evaluation Platform",
          url: "https://www.braintrustdata.com/",
          description: "One of the leading eval platforms — good to know for PM interviews about tooling.",
        },
      ],
    },
    {
      id: "4-2",
      unitId: "unit4",
      companySlug: "buzzboard",
      title: "Building an Eval Framework",
      tldr:
        "An eval framework is a curated dataset + a scoring method + a review process. Building one is the PM's job, not the ML team's. Without it, you're shipping blind.",
      skills: ["Eval dataset curation", "Rubric design", "Evaluation tooling"],
      xp: 25,
      content: [
        {
          heading: "The eval dataset",
          body: `An eval dataset is a curated set of inputs with known-good (and known-bad) expected outputs. It's your testing ground for every agent change.\n\n**What makes a good eval dataset:**\n\n**Representative** — covers the distribution of real inputs the agent will encounter. If Zylo will mostly see HVAC, legal, and retail SMBs, your eval set should have all three in proportion.\n\n**Challenging** — include edge cases, not just easy examples. An agent that scores 95% on your eval should be one that can handle difficult inputs: low-data-quality prospects, unusual industries, incomplete profiles.\n\n**Labeled** — each example should have a clear expected output or a quality rubric score. Not necessarily a ground-truth response (LLM output isn't deterministic), but a rubric: "a good output for this input includes at least 2 specific prospect details and exactly one clear value prop."\n\n**Stable** — the eval set shouldn't change frequently. Changing it makes trend comparisons meaningless. When you need to add new edge cases, add them without removing existing ones (your dataset grows, it doesn't rotate).\n\n**How to build it:**\n1. Take a sample of real production runs from the last 30 days (100–200 examples)\n2. Have 2–3 humans grade each output on your rubric, independently\n3. Resolve disagreements and document the reasoning\n4. Flag the 20% lowest-scoring examples as your "adversarial set" — these are the cases the agent is most likely to fail on\n5. Flag the 10% highest-scoring examples as your "golden set" — these should be preserved and always pass after any change\n\nThis process takes 1–2 weeks the first time. It's the highest-leverage investment an AI PM can make.`,
          goAnalogy: {
            term: "Gote no Sente",
            reading: "ごてのせんて",
            meaning:
              "A gote move that becomes sente — a slow investment that later forces the opponent to respond. Building an eval dataset is gote no sente: it slows you down initially but gives you sente in every future iteration.",
          },
        },
        {
          heading: "Rubric design: what does 'good' look like?",
          body: `A rubric is an explicit, scoreable definition of quality. Vague rubrics ("is this a good outreach message?") produce inconsistent evaluations. Precise rubrics are the foundation of reliable evals.\n\nA good rubric for Zylo outreach quality might look like:\n\n**Personalization** (1–5):\n- 1: No prospect-specific information\n- 3: References the prospect's industry generically\n- 5: References 2+ specific facts about this prospect (review count, specific challenge identified in IRIS profile, recent company event)\n\n**Value prop clarity** (1–5):\n- 1: No BuzzBoard value prop mentioned\n- 3: Mentions BuzzBoard but doesn't connect to a specific prospect challenge\n- 5: Directly connects a specific prospect challenge to a specific BuzzBoard capability\n\n**Length and tone** (pass/fail):\n- Fail: over 150 words OR uses passive voice more than once OR includes competitor names\n- Pass: under 150 words, active voice, no competitors\n\n**Design principles for rubrics:**\n- Behavioral anchors at each score level (not just "1=bad, 5=good")\n- Binary pass/fail for hard constraints (length limits, prohibited content)\n- Separate dimensions for separate concerns — don't conflate personalization quality with tone\n- Test your rubric by having two different people score the same 10 examples; if they disagree by more than 1 point consistently, the rubric is ambiguous`,
        },
        {
          heading: "Eval tooling and workflow",
          body: `Running evals manually is fine for the first 50 examples. At scale, you need tooling.\n\n**Eval platforms to know:**\n\n**Braintrust** — purpose-built for LLM evaluation. Tracks eval runs over time, manages datasets, supports LLM-as-judge, and integrates with OpenAI/Anthropic APIs. Good for PM-accessible dashboards.\n\n**LangSmith** — LangChain's observability and eval platform. Excellent for pipelines built on LangChain. Captures every LLM call with full input/output, latency, and cost data.\n\n**PromptLayer** — prompt version management + evaluation tracking. Good for teams where prompt iteration is the primary lever.\n\n**Custom eval scripts** — sometimes a 100-line Python script that runs your eval set against the current prompt and prints a score is the right tool. Don't over-engineer.\n\n**The PM's role in eval tooling:** you don't need to build the tooling, but you need to define the requirements: What does the eval dashboard need to show? How often should evals run (every deploy? every day?)? Who gets alerted when quality drops below threshold? What threshold triggers a rollback?\n\n**The eval-driven development workflow:**\n1. Start of sprint: baseline eval run to know current quality state\n2. Prompt or feature change: run eval before merging\n3. If eval scores improve or hold: merge and deploy\n4. If eval scores drop: investigate, fix, or flag for PM decision\n5. Weekly: review production eval trends vs. outcome metrics\n\nThis workflow makes AI product development testable and accountable — a stark contrast to "we updated the prompt and it seems better now."`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "An engineer wants to remove 20 'old' examples from the eval dataset to make room for new edge cases. Why is this a bad idea?",
          options: [
            "Eval datasets should never be modified once created",
            "Removing examples breaks trend comparisons — you can no longer tell if a score change reflects model improvement or eval set change",
            "The removed examples may have been the most important ones",
            "Eval datasets are contractual artifacts that can't be modified without PM approval",
          ],
          correct: 1,
          explanation:
            "Eval dataset stability is what makes trend data meaningful. If your dataset changes, you can't tell whether a quality improvement reflects a better model or an easier eval set. Add new examples; don't remove existing ones. Clearly label the dataset version so historical comparisons remain valid.",
        },
        {
          type: "multiple-choice",
          question:
            "A rubric dimension for 'personalization quality' is scored as: 1=no personalization, 5=excellent personalization. Two different raters consistently disagree by 2 points on the same examples. What does this indicate?",
          options: [
            "One rater has more AI product experience and should be designated the authority",
            "The rubric's behavioral anchors are too vague — the intermediate scores (2, 3, 4) aren't clearly defined enough to produce consistent human judgment",
            "The examples in the eval set are too similar and need more diversity",
            "5-point scales are too granular for LLM output evaluation; switch to a 3-point scale",
          ],
          correct: 1,
          explanation:
            "Consistent rater disagreement indicates rubric ambiguity, not rater error. The fix is to define precise behavioral anchors for each score level (not just 1 and 5) with concrete examples. When two people reading the same rubric can't agree, the rubric isn't specific enough.",
        },
        {
          type: "scenario",
          prompt:
            "You're building the first eval framework for Ember's churn prediction agent. Ember flags accounts as 'at-risk' (> 60% predicted churn probability). You have 6 months of historical data: account health signals and which accounts actually churned. Design the eval framework.",
          sampleAnswer:
            "I'd build a binary classification eval using historical ground truth. Dataset: 200 accounts from the past 6 months — 100 that churned, 100 that didn't (stratified by account size and industry to avoid bias). Label: churned=1, retained=0. Metrics: (1) Precision — of the accounts Ember flags as at-risk, what % actually churned? (2) Recall — of all accounts that actually churned, what % did Ember catch? (3) F1 score — harmonic mean of precision and recall. Business context: in B2SMB, false negatives (missed churn) are worse than false positives (unnecessary intervention), so I'd weight recall higher and set a recall target of >75% before considering precision. I'd also segment by account size — Ember may be accurate for mid-market but weak for micro-SMBs. Running this eval monthly on the trailing 90 days of production data gives us continuous accuracy monitoring. Alert threshold: if recall drops below 65%, trigger a prompt review and model evaluation cycle.",
          keyPoints: [
            "Use historical ground truth (actual churn outcomes) for classification evals — no LLM judge needed",
            "Precision vs. recall tradeoff is a business decision: in churn prediction, missing at-risk accounts (low recall) is typically worse than false alarms (low precision)",
            "Segment eval results by input characteristics — accuracy may vary significantly by account size, industry, or data quality",
            "Define alert thresholds upfront — at what score do you trigger an investigation?",
          ],
        },
      ],
      resources: [
        {
          title: "Building LLM Evals (Eugene Yan)",
          url: "https://eugeneyan.com/writing/llm-evaluations/",
          description: "Practical, PM-accessible guide to building evaluation pipelines for LLM products.",
        },
        {
          title: "Evaluation Datasets: How to Curate (Hamel.dev)",
          url: "https://hamel.dev/blog/posts/evals/",
          description: "How to build eval datasets from scratch — highly practical for BuzzBoard's use case.",
        },
      ],
    },
    {
      id: "4-3",
      unitId: "unit4",
      companySlug: "buzzboard",
      title: "Quality, Cost & Latency Tradeoffs",
      tldr:
        "Every AI product decision involves a tradeoff between output quality, cost per run, and response latency. There is no free lunch — understanding this triangle is what separates experienced AI PMs from beginners.",
      skills: ["Tradeoff analysis", "Cost optimization", "Latency vs. quality"],
      xp: 30,
      content: [
        {
          heading: "The AI product tradeoff triangle",
          body: `Every AI system exists in a tension between three constraints:\n\n**Quality** — how good are the outputs? For IRIS, quality is depth and accuracy of SMB profile analysis. For Zylo, quality is personalization and reply rate. Quality typically increases with: larger models, more context, better prompts, and more sophisticated retrieval.\n\n**Cost** — how much does each run cost? Cost increases with: larger models, more tokens (longer prompts + longer outputs), more tool calls, higher request frequency.\n\n**Latency** — how fast does the agent respond? Latency increases with: larger models (slower inference), more context (longer input processing), more tool calls (each adds network latency), sequential pipeline steps.\n\n**The tradeoffs:**\n- Higher quality → higher cost, higher latency (larger models, more context)\n- Lower latency → lower quality or lower context (smaller models, truncated context)\n- Lower cost → lower quality or higher latency (smaller models, fewer tool calls, caching)\n\n**The PM's job:** define the required quality floor, the maximum acceptable latency, and the target cost per run — then work with engineering to find an architecture that satisfies all three. When they can't all be satisfied simultaneously, make the explicit tradeoff decision and document it.\n\nFor BuzzBoard: a Zylo outreach draft might require <3 second latency (rep is waiting), high quality (customer-facing), and moderate cost ($0.02/draft). An IRIS deep analysis might tolerate 30-second latency (async batch job), require high quality, and target $0.05/analysis.`,
          goAnalogy: {
            term: "Miai",
            reading: "みあい",
            meaning:
              "Two equivalent options — if the opponent takes one, you take the other. Quality, cost, and latency are not miai: you can't have all three optimally. Choosing which two to optimize is the strategic move.",
          },
        },
        {
          heading: "Cost optimization techniques",
          body: `When cost is the binding constraint, these are the levers:\n\n**Prompt compression** — reduce token count without losing critical information. Use a prompt optimizer (DSPy, PromptPerfect) to find shorter prompts that maintain output quality. A 2,000-token prompt that achieves the same results as a 4,000-token prompt halves input cost.\n\n**Caching** — if the same or similar inputs recur, cache the outputs. IRIS doesn't need to re-analyze an SMB every hour if nothing has changed. Cache profiles with a TTL (time-to-live) matched to how frequently the underlying data changes. Semantic caching (embedding-based similarity matching) can cache near-identical inputs even when they're not byte-identical.\n\n**Model routing by task complexity** — not every task needs the most capable model. Use a cheap, fast model (Haiku, GPT-4o-mini) for simple classification tasks (is this prospect worth enriching?) and reserve expensive models (Sonnet, GPT-4o) for complex generation tasks (multi-paragraph outreach drafting).\n\n**Batching** — instead of processing prospects one at a time, batch them. Batch API pricing (OpenAI, Anthropic both offer batch endpoints) is typically 50% cheaper than real-time API pricing. Use for async workflows where latency isn't critical.\n\n**Output length control** — explicitly constrain output length in your prompt ("respond in under 200 tokens"). Models have a tendency to verbosity; left unconstrained, they produce longer outputs than necessary. Output tokens are the most expensive.\n\n**Approximate retrieval** — for RAG systems, expensive embedding search can be partially replaced with BM25 (keyword-based) retrieval for the first pass, using vector search only for the top candidates. Hybrid retrieval cuts retrieval cost while maintaining quality.`,
        },
        {
          heading: "Latency optimization techniques",
          body: `When latency is the binding constraint (a rep is waiting for a Zylo draft), these are the levers:\n\n**Streaming** — start sending output to the user before the model is done generating. The first token appears in ~500ms; the full response appears over the next few seconds. Total time is the same but perceived latency is dramatically lower. This is the highest-impact latency fix for interactive features.\n\n**Pre-computation** — don't compute at the moment of need; compute in advance. IRIS can analyze prospects during off-peak hours so that when a rep opens an account, the profile is instant. Ember can run account health checks overnight so morning risk alerts are ready at login.\n\n**Parallelization** — if Zylo needs to draft outreach for 20 prospects and each draft is independent, run them all in parallel rather than sequentially. 20 × 2 seconds = 40 seconds sequential; parallel = 2 seconds.\n\n**Model selection for latency** — smaller models are faster. Claude Haiku is ~3–5× faster than Claude Sonnet for the same input. If Haiku meets your quality bar, the latency gain is free.\n\n**Reduce round trips** — each tool call in an agent adds a network round trip (100–500ms). Batch tool calls where possible; design prompts that minimize the number of calls needed to complete a task.\n\n**Right-size the context** — don't pass the full IRIS research report to Zylo if Zylo only needs a 200-token summary. Shorter inputs process faster. Context trimming is both a cost optimization and a latency optimization.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A rep reports that Zylo takes 12 seconds to generate an outreach draft, which breaks their workflow. Engineering says the model itself responds in 4 seconds but there are 3 sequential tool calls before the model runs. What's the highest-impact fix?",
          options: [
            "Switch to a faster model to reduce the 4-second model call time",
            "Implement streaming to reduce perceived latency while the model generates",
            "Parallelize or pre-compute the 3 tool calls — 8 seconds of tool call latency before the model runs is the binding constraint",
            "Reduce the length of Zylo's system prompt to speed up input processing",
          ],
          correct: 2,
          explanation:
            "The tool calls (8 of 12 seconds) are the bottleneck, not the model (4 seconds). Parallelizing independent tool calls (run all 3 simultaneously) reduces 8 seconds to ~3 seconds. Pre-computing frequently-needed data eliminates the latency entirely. Fixing the model call would only reduce total time by 4 seconds even if you made it instant.",
        },
        {
          type: "multiple-choice",
          question:
            "Which cost optimization technique is most appropriate for IRIS's SMB profile generation, where the same prospect is sometimes analyzed multiple times per week?",
          options: [
            "Prompt compression — reduce IRIS's system prompt length",
            "Caching with a TTL — store the generated profile and serve it for repeated requests, refreshing when the underlying data changes",
            "Model routing — use a cheaper model for IRIS's analysis",
            "Output length control — constrain IRIS to generate shorter profiles",
          ],
          correct: 1,
          explanation:
            "Repeated analysis of the same prospect is the exact use case for caching. IRIS's underlying data (review scores, website content) doesn't change hourly. Cache the profile with a TTL (daily? weekly?) matched to data freshness requirements. Repeated calls serve the cache at zero model cost.",
        },
        {
          type: "multiple-choice",
          question:
            "BuzzBoard wants to add a real-time competitive intelligence feature: when a rep views an account, instantly show competitor products that prospect is likely evaluating. The feature requires 3 API calls to external intelligence services. How do you meet the <1 second latency requirement?",
          options: [
            "Use a faster model to reduce generation time",
            "Pre-compute competitive intelligence for all active accounts during off-peak hours so the data is ready before the rep views the account",
            "Reduce the number of API calls from 3 to 1",
            "Stream the competitive intelligence output so the rep sees partial results faster",
          ],
          correct: 1,
          explanation:
            "3 external API calls will never complete in under 1 second reliably. The only way to meet <1 second latency for complex analysis is pre-computation: run the intelligence jobs in the background for all active accounts and store results, so the rep's page load just queries a cache. Real-time computation of this feature at this latency is architecturally impossible without pre-computation.",
        },
      ],
      resources: [
        {
          title: "LLM Cost Optimization Guide (OpenAI Cookbook)",
          url: "https://cookbook.openai.com/examples/how_to_optimize_llm_usage",
          description: "Practical techniques for reducing token usage and cost without sacrificing quality.",
        },
        {
          title: "Streaming with the Anthropic API",
          url: "https://docs.anthropic.com/en/api/streaming",
          description: "How to implement streaming to reduce perceived latency in Claude integrations.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "Ember's churn prediction recall drops from 78% to 61% over a month with no code changes. What's the most important first investigation step?",
      options: [
        "Switch to a more capable model immediately",
        "Check if the account input distribution has shifted — new customer segments may have different churn signals that Ember wasn't trained or prompted to detect",
        "Increase the eval dataset size to reduce statistical noise",
        "Check if a competitor released a better churn prediction tool",
      ],
      correct: 1,
      explanation:
        "Silent quality degradation without code changes typically indicates input distribution shift. New customer types (different industries, sizes) bring different behavioral patterns. Segment the eval results to find where accuracy is holding vs. where it's dropping.",
    },
    {
      type: "multiple-choice",
      question: "Why should an eval dataset's examples be added to (not replaced) over time?",
      options: [
        "To avoid legal issues with data retention policies",
        "To maintain historical trend comparability — if examples are swapped, score changes could reflect dataset changes rather than model/prompt changes",
        "To keep all labeled examples for fine-tuning purposes",
        "Because removing examples requires ML team approval",
      ],
      correct: 1,
      explanation:
        "Eval trend data is only meaningful if the eval set is stable. Swapping examples makes it impossible to tell whether a score improvement reflects a better model or an easier eval set. Accumulate examples; retire dataset versions explicitly with clear version labeling.",
    },
    {
      type: "multiple-choice",
      question: "Which combination of optimization techniques best addresses both cost AND latency for a background batch job (async, no user waiting)?",
      options: [
        "Streaming + model routing — stream to reduce perceived latency, route simple tasks to cheaper models",
        "Batching for 50% cost reduction + pre-computation — batch API calls for lower cost, no latency concern since it's async",
        "Caching + streaming — serve cached results instantly, stream uncached results",
        "Prompt compression + parallelization — shorter prompts and parallel calls",
      ],
      correct: 1,
      explanation:
        "For async batch jobs, latency isn't a constraint — no user is waiting. The optimization focus shifts entirely to cost. Batch API pricing (50% cheaper) directly addresses cost. Pre-computation ensures results are available when needed. Streaming adds no value when there's no real-time display.",
    },
    {
      type: "multiple-choice",
      question: "You're using GPT-4o for Ignite's prospect scoring at $0.015/score. Switching to GPT-4o-mini (10× cheaper) would save $13,500/month at current volume, but quality needs validation. What is the minimum validation before switching?",
      options: [
        "Run both models on 10 examples and manually compare the scores",
        "Ask the AI team if GPT-4o-mini is capable enough for scoring tasks",
        "Run both models against your prospect scoring eval suite; confirm quality scores meet threshold, then A/B test lead conversion rate on live traffic before full rollout",
        "Switch immediately — GPT-4o-mini is an OpenAI model so it meets the same quality bar",
      ],
      correct: 2,
      explanation:
        "Cost savings require evidence of quality preservation. The bar: (1) eval suite confirms quality scores hold, (2) live A/B test on downstream conversion rates validates that prospect quality is maintained end-to-end. Never switch a customer-facing model without both steps.",
    },
  ],
  quizXp: 35,
};
