import type { Unit } from "@/data/types";

export const buzzboardUnit3: Unit = {
  id: "unit3",
  title: "LLM Product Fundamentals",
  description:
    "Model selection, context windows, cost optimization, RAG vs. fine-tuning — the technical vocabulary a PM needs to make smart decisions and speak credibly with AI engineers.",
  companySlug: "buzzboard",
  goTerm: "Haengma",
  goReading: "はえんま",
  goMeaning:
    "Stone movement — the efficiency and direction of how stones develop across the board. Model selection is haengma: the wrong model creates inefficient, costly patterns; the right model moves with purpose.",
  color: "ice",
  lessons: [
    {
      id: "3-1",
      unitId: "unit3",
      companySlug: "buzzboard",
      title: "Model Selection for PMs",
      tldr:
        "Choosing a model is a product decision with cost, capability, latency, and compliance dimensions. The BuzzBoard role expects PMs to make and own these decisions — you can't outsource them to the AI team.",
      skills: ["Model comparison", "Capability vs. cost tradeoffs", "Model selection criteria"],
      xp: 25,
      content: [
        {
          heading: "The model landscape",
          body: `As of 2025, the major production LLM providers BuzzBoard's job posting explicitly names:\n\n**OpenAI** (GPT-4o, GPT-4o-mini, o1, o3-mini) — strongest ecosystem, best tool use reliability, most documentation. o1/o3 series adds explicit reasoning (chain-of-thought at inference time), useful for complex analytical tasks but slower and more expensive.\n\n**Anthropic / Claude** (Claude Sonnet 4, Claude Opus 5, Claude Haiku 4.5) — strongest performance on long-context tasks, best at following complex instructions, excellent structured output. Haiku is the fastest/cheapest tier; Opus is highest capability.\n\n**AWS Bedrock** — a gateway, not a model. Bedrock lets you access Claude, Llama, Mistral, and other models through a single AWS API. Critical for enterprise compliance: data doesn't leave AWS, supporting SOC 2, HIPAA, and other requirements. BuzzBoard likely routes production calls through Bedrock for enterprise customers.\n\n**Google (Gemini Flash, Gemini Pro)** — Gemini Flash is one of the fastest/cheapest high-quality models; strong on multimodal tasks. Increasingly competitive in tool use.\n\n**Open source (Llama 3, Mistral)** — self-hosted via AWS, Azure, or on-premise. Zero marginal cost per token after infrastructure, but you own reliability, scaling, and safety fine-tuning.\n\nFor a B2SMB agent product, the decision matrix typically has three axes: **task complexity** (what reasoning quality does this task require?), **volume** (how many calls per day?), and **latency requirement** (how fast does the user need a response?).`,
          goAnalogy: {
            term: "Sente / Gote",
            reading: "せんて / ごて",
            meaning:
              "Having the initiative vs. responding. A fast, cheap model keeps sente — it responds before the user loses patience. A powerful but slow model plays gote — the user waits, and the dynamic shifts.",
          },
        },
        {
          heading: "The PM's model selection framework",
          body: `Don't pick a model because it scored well on a benchmark. Pick a model because it solves your specific task reliably at acceptable cost and latency.\n\n**Step 1: Define the task precisely.** "Generate personalized sales outreach for SMB prospects" is more specific than "write text." What makes a good output? What makes a bad one? This is your evaluation criterion before you even look at models.\n\n**Step 2: Define the constraints.** What's the maximum acceptable latency? (Is this synchronous in a rep's workflow, or async in a background job?) What's the maximum cost per run? Are there data residency requirements that dictate cloud providers?\n\n**Step 3: Build a test set.** 50–100 representative inputs with labeled good/bad expected outputs. This is your ground truth.\n\n**Step 4: Run the test set against candidate models.** Evaluate against your defined criteria, not against generic benchmarks. A model that scores 90% on MMLU might score 60% on your specific outreach quality rubric.\n\n**Step 5: Cost-model the winner.** Estimate tokens per run × runs per day × cost per token. For 10,000 prospects/day at ~2,000 tokens per run, the cost difference between GPT-4o ($2.50/1M input tokens) and Claude Haiku ($0.25/1M input tokens) is $450/day vs. $45/day. That's $165,000/year in model cost difference for a single agent.\n\n**Step 6: Plan for model rotation.** Models improve and deprecate on 6–12 month cycles. Your eval suite is what lets you switch models without fear — run the new model against your test set, validate quality is maintained, and swap.`,
        },
        {
          heading: "Task-to-model matching for BuzzBoard",
          body: `Different tasks in BuzzBoard's pipeline have different model requirements:\n\n**IRIS: SMB digital footprint analysis** — deep reasoning over unstructured web data, identifying patterns and drawing inferences. Requires a high-capability model (Claude Sonnet or GPT-4o). Volume is moderate (thousands of prospects per day), so cost is a factor but not dominant.\n\n**Ignite: prospect scoring and ranking** — structured analysis of IRIS profiles against ICP criteria. More structured, less creative. A mid-tier model (GPT-4o-mini, Claude Haiku) likely performs near-equivalently to a top-tier model at 10× less cost.\n\n**Zylo: outreach drafting** — creative writing with persona and brand constraints. Quality matters a lot; this is customer-facing. Use a strong model (Sonnet, GPT-4o), but test whether a tuned mid-tier model can match quality at lower cost.\n\n**Ember: churn risk assessment** — pattern recognition over account health signals. More analytical than creative. A structured reasoning model (o1-mini) or a well-prompted Haiku might work well here.\n\nThis is the PM's job: not to pick one model for everything, but to right-size each component. The AI team implements; the PM decides the quality and cost standards each component must meet.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "Zylo currently uses GPT-4o for outreach drafting at a cost of $400/day. The AI team proposes switching to Claude Haiku to reduce costs. What's the correct PM process before approving the switch?",
          options: [
            "Approve it immediately — Haiku is a capable model and the cost savings are significant",
            "Run both models against your outreach quality eval suite; if Haiku meets the quality bar, A/B test on live traffic with reply rate as the success metric before switching",
            "Reject it — cost optimization should never compromise a customer-facing feature",
            "Ask the AI team to fine-tune Haiku first before evaluating it",
          ],
          correct: 1,
          explanation:
            "Model cost optimization is valid, but requires evidence that quality is maintained. The process: eval suite (does Haiku meet quality standards?) → A/B test (does live reply rate hold?) → switch with confidence. Approving blind risks degrading customer outcomes.",
        },
        {
          type: "multiple-choice",
          question:
            "A BuzzBoard enterprise customer requires that no prospect data leaves their AWS region for compliance reasons. Which provider decision does this drive?",
          options: [
            "The team must use only open-source models self-hosted in the customer's infrastructure",
            "All model calls must be routed through AWS Bedrock, which keeps data within AWS's infrastructure",
            "The customer must accept that AI features aren't available under their compliance constraints",
            "The team should use Google Gemini via Google Cloud, which has equivalent compliance certifications",
          ],
          correct: 1,
          explanation:
            "AWS Bedrock is specifically designed for this requirement: it provides access to top-tier models (Claude, Llama, etc.) while keeping all data within AWS, satisfying SOC 2, HIPAA, and data residency requirements. This is why the BuzzBoard job posting explicitly names Bedrock.",
        },
        {
          type: "multiple-choice",
          question:
            "Why should a PM maintain a model evaluation test set even after a model has been chosen and is running in production?",
          options: [
            "To satisfy ML engineering requirements for model monitoring",
            "To enable model rotation without fear: when a better/cheaper model emerges, you can validate it against your test set before switching, without relying on manual spot-checks",
            "To detect when the current model's provider raises prices",
            "To measure hallucination rates on a continuous basis",
          ],
          correct: 1,
          explanation:
            "The eval suite is your confidence mechanism for change. Models get deprecated, better options emerge, costs shift. A maintained test set lets you evaluate new candidates systematically and switch with data rather than intuition or hope.",
        },
      ],
      resources: [
        {
          title: "Anthropic Claude Model Overview",
          url: "https://docs.anthropic.com/en/docs/about-claude/models/overview",
          description: "Current Claude model lineup with capability tiers, context windows, and pricing.",
        },
        {
          title: "AWS Bedrock Overview",
          url: "https://aws.amazon.com/bedrock/",
          description: "How Bedrock works and which models it provides — key for enterprise compliance use cases.",
        },
      ],
    },
    {
      id: "3-2",
      unitId: "unit3",
      companySlug: "buzzboard",
      title: "Context Windows, Tokens & Cost",
      tldr:
        "Everything that goes into a model call costs tokens. Understanding how tokens are counted, how context windows work, and how cost accumulates is essential for making architecture decisions and writing accurate cost estimates in your specs.",
      skills: ["Token economics", "Context window management", "Cost modeling"],
      xp: 25,
      content: [
        {
          heading: "What is a token?",
          body: `A token is the unit of text that language models process. It's not exactly a word or a character — it's a subword unit determined by the model's tokenizer.\n\nRough rule of thumb: **1 token ≈ 4 characters ≈ ¾ of a word** in English. A 500-word outreach draft is approximately 650–700 tokens. A 10-page research report is approximately 4,000–5,000 tokens.\n\nEvery model call has two token types:\n\n**Input tokens** (prompt tokens) — everything you send to the model: the system prompt, any retrieved context, the conversation history, the user's current message. These are often the dominant cost in agent runs because they include all the context.\n\n**Output tokens** (completion tokens) — the model's response. Output tokens are typically 2–3× more expensive per token than input tokens, but there are usually fewer of them.\n\n**Why this matters for PM**: the system prompt is paid for on *every single call*. A 2,000-token system prompt that runs 10,000 times/day costs you 20 million input tokens per day in system prompt alone. A 500-token system prompt for the same volume costs 5 million. Prompt length is a cost lever.\n\nFor BuzzBoard's IRIS agent running against 5,000 SMB prospects daily, even a 1,000-token difference in prompt length is 5 million input tokens per day — at Claude Sonnet pricing ($3/1M tokens), that's $15/day or $5,475/year.`,
          goAnalogy: {
            term: "Komi",
            reading: "こみ",
            meaning:
              "Points given to white to compensate for black's first-move advantage. Token costs are komi for AI products — a fixed tax on every call. You must build products that generate enough value to justify the ongoing cost overhead.",
          },
        },
        {
          heading: "Context windows and their limits",
          body: `The **context window** is the maximum number of tokens a model can process in a single call — both input and output combined.\n\nCurrent production context windows:\n- GPT-4o: 128K tokens (~96,000 words)\n- Claude Sonnet/Opus: 200K tokens (~150,000 words)\n- Gemini Pro 1.5: 1M tokens (for document-heavy tasks)\n\nA 200K context window sounds enormous, but agents quickly fill it:\n- IRIS researching an SMB from 10 web pages: ~15,000 tokens of raw content\n- A conversation with 20 turns of research and refinement: ~30,000 tokens\n- A system prompt + tools definition: 2,000–5,000 tokens\n- Prior account history for Ember: 5,000–20,000 tokens\n\nContext limits create hard failure modes: when the window fills, either the request fails, older context is truncated (quietly dropping important information), or you have to architect around the limit.\n\n**PM implications:**\n- Specify context window requirements in your feature specs: "this feature processes up to N documents; architect for N × avg_doc_size tokens per call"\n- Design for context overflow explicitly: what gets dropped first when context fills? (Usually: earlier conversation turns. Make sure they're either summarized or stored in memory before dropping.)\n- Long-context models cost more per token. Don't default to the biggest context window; use the right-sized window for the task.`,
        },
        {
          heading: "Cost modeling an agent run",
          body: `Writing a feature spec without a cost estimate is incomplete. Here's the model:\n\n\`\`\`\nCost per run =\n  (system_prompt_tokens + context_tokens + user_input_tokens) × input_price_per_token\n  + output_tokens × output_price_per_token\n\nDaily cost = cost_per_run × runs_per_day\nMonthly cost = daily_cost × 30\n\`\`\`\n\nExample: Zylo drafting outreach for a prospect\n- System prompt: 1,500 tokens\n- IRIS profile passed as context: 3,000 tokens\n- User request: 100 tokens\n- Total input: 4,600 tokens\n- Output (outreach draft): 300 tokens\n\nAt Claude Sonnet pricing ($3/1M input, $15/1M output):\n- Input cost: 4,600 × $3/1M = **$0.0138 per draft**\n- Output cost: 300 × $15/1M = **$0.0045 per draft**\n- Total: **$0.018 per prospect**\n\nAt 5,000 prospects/day: **$90/day, $2,700/month, $32,400/year** for Zylo's drafting alone.\n\nThis is a line item in the product's unit economics. If BuzzBoard charges $500/month per seat, and one seat generates 500 prospects/month, the model cost is $9/seat/month — that's a 1.8% COGS contribution from model costs alone, before engineering, infrastructure, or support.\n\nPMs who can build this model earn credibility with finance and engineering. It also frames build-vs-buy decisions: a self-hosted open-source model might halve this cost, but adds engineering burden.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "Your team is considering adding a 3,000-token 'examples' section to Zylo's system prompt to improve output quality. The agent runs 8,000 times per day. At $3/1M input tokens, what is the monthly cost of this prompt addition?",
          options: [
            "$72/month",
            "$216/month",
            "$2,160/month",
            "$720/month",
          ],
          correct: 2,
          explanation:
            "3,000 tokens × 8,000 runs/day = 24,000,000 tokens/day. At $3/1M = $72/day × 30 days = $2,160/month. A seemingly small prompt addition compounds dramatically at scale — this is why prompt length is a first-class cost lever.",
        },
        {
          type: "multiple-choice",
          question:
            "An IRIS agent research run is failing intermittently with 'context length exceeded' errors on 8% of prospects. What's the most likely cause and the correct PM response?",
          options: [
            "The model is hitting its output token limit — reduce the length of IRIS's generated profiles",
            "Some SMB prospects have unusually large digital footprints — the web content retrieved exceeds the context window when combined with the system prompt and prior context",
            "The system prompt is too long — reduce it to free up context space",
            "IRIS is in a loop and accumulating context across multiple runs",
          ],
          correct: 1,
          explanation:
            "8% failure suggests an edge case, not a universal problem. Large-footprint SMBs (many websites, lots of reviews, rich ad history) generate more retrieved content, which can overflow the context window. The fix: add a content truncation step that caps retrieved content per source before it enters the context.",
        },
        {
          type: "multiple-choice",
          question:
            "Why is output token pricing typically higher per-token than input token pricing across all major LLM providers?",
          options: [
            "Output tokens require more server memory than input tokens",
            "Output generation is autoregressive — each token is generated sequentially, requiring more compute than parallel input encoding",
            "Output tokens are more valuable because they represent the model's work product",
            "Providers charge more for output to discourage excessive generation length",
          ],
          correct: 1,
          explanation:
            "Input tokens can be processed in parallel (the transformer encodes the full input simultaneously). Output tokens are generated one at a time — each token depends on all previous tokens. This sequential generation is computationally more expensive per token.",
        },
      ],
      resources: [
        {
          title: "OpenAI Tokenizer",
          url: "https://platform.openai.com/tokenizer",
          description: "Interactive tool to count tokens for any text — essential for prompt cost modeling.",
        },
        {
          title: "Claude Pricing",
          url: "https://www.anthropic.com/pricing",
          description: "Current Anthropic model pricing — input/output token costs by model tier.",
        },
      ],
    },
    {
      id: "3-3",
      unitId: "unit3",
      companySlug: "buzzboard",
      title: "RAG vs. Fine-Tuning vs. Prompting",
      tldr:
        "Three techniques for improving an LLM's knowledge and behavior: prompting (in-context examples), RAG (retrieval-augmented generation, giving the model fresh data at query time), and fine-tuning (updating model weights on your data). Knowing when to use each is a key PM decision.",
      skills: ["RAG architecture", "Fine-tuning use cases", "Make-vs-buy reasoning"],
      xp: 30,
      content: [
        {
          heading: "Prompting: in-context learning",
          body: `The simplest approach: include the information the model needs in the prompt itself.\n\n**Zero-shot** — just instructions: "Analyze this SMB and identify their top 3 digital growth challenges."\n\n**Few-shot** — instructions + examples: include 2–3 examples of ideal analysis before the model's task. Few-shot is reliably more accurate than zero-shot for structured tasks.\n\n**When prompting is sufficient:**\n- The task requires reasoning, not domain-specific knowledge\n- The knowledge needed is already in the model's training data\n- Volume and latency allow for larger prompts\n- The output format is consistent and can be specified in the prompt\n\n**When prompting breaks down:**\n- You need the model to use specific, up-to-date facts (a specific SMB's review scores from last week — not in training data)\n- You need the model to know about internal company-specific data (BuzzBoard's proprietary SMB database — never in training data)\n- Your prompt is growing so large it degrades performance or costs too much\n\nFor BuzzBoard's use case, pure prompting doesn't work for IRIS because the facts it needs (an SMB's current digital footprint) change constantly and don't exist in any model's training data. You need retrieval.`,
          goAnalogy: {
            term: "Kiai",
            reading: "きあい",
            meaning:
              "Fighting spirit — the energy to engage directly. Prompting is kiai: you meet the task directly with the model's own knowledge and reasoning, no support needed. Powerful when the model has what it needs; insufficient when it doesn't.",
          },
        },
        {
          heading: "RAG: retrieval-augmented generation",
          body: `RAG adds a retrieval step before the model call: instead of relying on what the model knows from training, you fetch relevant, current data and inject it into the prompt.\n\n**How RAG works:**\n1. User asks a question or triggers a task\n2. A retrieval system fetches relevant documents (from a vector database, a web scraper, a SQL query, an API)\n3. The retrieved content is added to the model prompt as context\n4. The model generates a response grounded in the retrieved data\n\n**When RAG is the right choice:**\n- The task requires current, frequently-updated information (SMB review scores, website content, ad spend signals)\n- The knowledge base is too large to fit in a prompt or fine-tuning dataset (millions of SMB profiles)\n- You want the model's response to be *grounded* — traceable to specific source documents (for explainability and debugging)\n- The information is proprietary and can't be baked into model weights\n\n**IRIS is fundamentally a RAG system:** it retrieves an SMB's current digital footprint (web scraping, review APIs, ad intelligence) and passes that data to Claude or GPT-4o for synthesis. The model doesn't "know" about ACME Plumbing — IRIS fetches what it needs in real time.\n\n**RAG failure modes PMs must spec for:**\n- **Retrieval quality** — bad retrieved content produces bad model output, even if the model is excellent. Garbage in, garbage out.\n- **Retrieval latency** — fetching from 5 sources before every model call adds latency. Pre-compute where possible.\n- **Hallucination on gaps** — if retrieval comes back empty, the model may hallucinate rather than say "I don't know." Spec explicit behavior for empty retrieval results.`,
        },
        {
          heading: "Fine-tuning: when to train",
          body: `Fine-tuning means continuing training on the base model with your own dataset — actually updating the model's weights to internalize your domain knowledge, style, or format requirements.\n\n**When fine-tuning is worth it:**\n- You have a large, high-quality labeled dataset of input/output pairs (thousands to tens of thousands)\n- The task has a very specific format or style that's hard to achieve consistently via prompting\n- You're calling the model at extremely high volume and can justify the upfront fine-tuning cost through ongoing inference cost reduction (fine-tuned models on smaller base models can match larger models on specific tasks at lower cost)\n- Latency is critical and you need to reduce prompt length by baking instructions into weights\n\n**When fine-tuning is NOT worth it:**\n- Your data changes frequently (fine-tuned knowledge becomes stale)\n- You're early-stage with a small dataset — the model will overfit\n- The task can be accomplished with prompting + RAG at acceptable quality\n- You don't have the ML infrastructure to manage fine-tuned model versions\n\n**For BuzzBoard:** the most plausible fine-tuning use case is for Zylo's outreach drafting — if BuzzBoard accumulates thousands of high-performing outreach messages (with reply rates as quality labels), fine-tuning on that dataset could produce a custom model that matches brand voice and performs better on SMB-specific outreach than any general-purpose model. But this is a Phase 3 investment, not a Phase 1 move.\n\n**The PM decision:** start with prompting, add RAG when you need current or proprietary data, consider fine-tuning when you have enough data and clear quality/cost gains to justify it.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "IRIS needs to know an SMB's current Google review count, average rating, and most recent review topics. Which technique is correct and why?",
          options: [
            "Fine-tuning — train IRIS on a large dataset of SMB review profiles",
            "Zero-shot prompting — GPT-4o has seen enough SMB review data in training to infer typical review patterns",
            "RAG — retrieve the current review data from Google via API at query time and inject it into the IRIS prompt as context",
            "Few-shot prompting — include 3 examples of SMB review profiles in the system prompt",
          ],
          correct: 2,
          explanation:
            "Review data changes constantly (new reviews appear daily) and is specific to each SMB. No model has this data in its training set, and it's too volatile for fine-tuning. RAG retrieves it fresh at query time — this is the correct architecture for current, SMB-specific facts.",
        },
        {
          type: "multiple-choice",
          question:
            "Zylo's outreach messages consistently use passive voice and overly formal language despite instructions to the contrary. The team has 50 examples of approved outreach with measured reply rates. Is this a fine-tuning use case?",
          options: [
            "Yes — 50 examples is sufficient for fine-tuning to solve a style issue",
            "No — start with few-shot prompting: include 5–10 high-reply examples directly in the system prompt. Fine-tuning requires thousands of examples and is premature with 50 data points",
            "Yes — style and tone issues can only be solved by fine-tuning, not prompting",
            "No — style issues require a different base model, not fine-tuning",
          ],
          correct: 1,
          explanation:
            "50 examples is far too few for fine-tuning (risk of overfitting) and the problem (style consistency) is solvable with few-shot prompting. Include your best-performing examples directly in the system prompt as demonstrations. Fine-tune when you have thousands of labeled examples and prompting has hit its ceiling.",
        },
        {
          type: "scenario",
          prompt:
            "A customer wants BuzzBoard to build a 'competitor analysis' feature for Ember: when an account shows churn risk, Ember should analyze what competing products they might switch to and explain why. The customer wants Ember to know about all major B2SMB competitors and their latest feature updates. How do you architect this?",
          sampleAnswer:
            "This is a RAG architecture. Competitor knowledge is: (1) too large and specific to fit reliably in a prompt, (2) constantly changing as competitors ship features, (3) not in any model's training data at the recency required. I'd build a competitor knowledge base: scraped competitor websites, review sites (G2, Capterra), LinkedIn posts, and product changelogs, indexed in a vector database. When Ember detects churn risk, it retrieves relevant competitor profiles from the knowledge base and injects them into the model prompt alongside the account's health signals. The model then synthesizes: 'This account is likely considering [Competitor X] because [reason derived from account signals + competitor features]. To counter, recommend [BuzzBoard feature].' Key PM specs to define: refresh frequency for the knowledge base (competitors change fast — weekly at minimum), source reliability scoring (G2 reviews vs. a blog post have different trust levels), and output format (structured competitor risk assessment, not free-form text).",
          keyPoints: [
            "Competitor knowledge changes too frequently for fine-tuning — RAG is the correct architecture",
            "A vector database enables semantic retrieval: 'find competitors relevant to this customer's churn signal'",
            "Knowledge base refresh frequency is a PM decision — weekly scraping vs. real-time depends on how quickly competitive landscape changes",
            "Source reliability scoring prevents low-quality content from degrading analysis quality",
          ],
        },
      ],
      resources: [
        {
          title: "RAG vs. Fine-Tuning: How to Choose (Pinecone)",
          url: "https://www.pinecone.io/learn/rag-vs-fine-tuning/",
          description: "Practical decision framework for choosing between retrieval and fine-tuning.",
        },
        {
          title: "OpenAI Fine-Tuning Guide",
          url: "https://platform.openai.com/docs/guides/fine-tuning",
          description: "When and how to fine-tune GPT models — including data requirements and cost.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "BuzzBoard is evaluating switching from GPT-4o to Claude Haiku for Ignite's prospect scoring. What is the correct evaluation sequence?",
      options: [
        "Switch immediately — both models are capable and Haiku is cheaper",
        "Benchmark on your prospect scoring eval suite first; if quality holds, A/B test on live traffic before full rollout",
        "Ask Anthropic for case studies showing Haiku performs well on B2SMB scoring tasks",
        "Run both models on the same 10 prospects manually and compare outputs",
      ],
      correct: 1,
      explanation:
        "Model switches require evidence at your specific task. A curated eval suite + live A/B test is the minimum bar. Case studies don't apply to your workload; 10 manual examples aren't statistically meaningful.",
    },
    {
      type: "multiple-choice",
      question: "A 5,000-token system prompt runs 6,000 times per day. At $3/1M input tokens, what is the monthly system prompt cost alone?",
      options: [
        "$90/month",
        "$270/month",
        "$2,700/month",
        "$27/month",
      ],
      correct: 2,
      explanation:
        "5,000 tokens × 6,000 runs = 30M tokens/day. At $3/1M = $90/day. × 30 days = $2,700/month. Prompt length directly drives cost — this is why concise, well-tested system prompts matter at scale.",
    },
    {
      type: "multiple-choice",
      question: "What is the primary advantage of RAG over fine-tuning for IRIS's SMB research task?",
      options: [
        "RAG is always cheaper than fine-tuning",
        "RAG retrieves current, SMB-specific facts at query time — fine-tuned knowledge becomes stale as SMBs change",
        "RAG produces more creative outputs than fine-tuned models",
        "RAG doesn't require a GPU to run, making it easier to deploy",
      ],
      correct: 1,
      explanation:
        "SMB digital footprints change constantly. Fine-tuning bakes knowledge into model weights at a point in time — it can't know about reviews posted last week. RAG fetches current data at query time, keeping outputs grounded in reality.",
    },
    {
      type: "multiple-choice",
      question: "When does the PM decision to fine-tune an LLM become justified?",
      options: [
        "When the current model produces any outputs that don't match the ideal format",
        "When you have thousands of high-quality labeled examples, prompting has hit its quality ceiling, and the projected inference cost savings justify the fine-tuning investment",
        "When the product is in beta and you want to improve quality before launch",
        "When a competitor announces they've fine-tuned their model on similar data",
      ],
      correct: 1,
      explanation:
        "Fine-tuning is expensive (upfront training cost, ongoing model management) and requires substantial data. It's justified when: (1) prompting/RAG have been exhausted, (2) you have the data to do it well, and (3) the economics work out — typically through either quality gains or inference cost reduction.",
    },
  ],
  quizXp: 35,
};
