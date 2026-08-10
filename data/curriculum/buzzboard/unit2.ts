import type { Unit } from "@/data/types";

export const buzzboardUnit2: Unit = {
  id: "unit2",
  title: "Agent System Design",
  description:
    "How to design AI agents that behave reliably at scale — prompt architecture, output schemas, multi-agent orchestration, and the failure modes every PM must own.",
  companySlug: "buzzboard",
  goTerm: "Katachi",
  goReading: "かたち",
  goMeaning:
    "Shape — the structural form of a position that determines its strength. Prompt architecture is katachi: the structure you give an agent determines how it performs under pressure.",
  color: "golden",
  lessons: [
    {
      id: "2-1",
      unitId: "unit2",
      companySlug: "buzzboard",
      title: "What Is an AI Agent?",
      tldr:
        "An AI agent combines a language model with tools, memory, and a control loop — it can perceive context, reason about a goal, take actions, and observe results. Understanding agent anatomy is the PM's prerequisite for writing any spec.",
      skills: ["Agent architecture", "LLM fundamentals", "Control loop design"],
      xp: 20,
      content: [
        {
          heading: "The anatomy of an agent",
          body: `A simple LLM call is stateless: you send a prompt, you get a response, the model forgets everything. An AI agent is different — it has four components that enable autonomous task completion:\n\n**Model** — the LLM at the center (GPT-4o, Claude Sonnet, Gemini Flash). The model reasons, plans, and generates outputs. Its capabilities and limitations define what the agent can and can't do.\n\n**Tools** — functions the agent can call: web search, a database query, a CRM API, a code executor. Tools let the agent act on the world, not just generate text. The model decides which tool to call and with what arguments; the result comes back into the context.\n\n**Memory** — context the agent can reference across turns or sessions. Short-term memory is the context window (the current conversation). Long-term memory is an external store (a vector database, a structured DB) that the agent retrieves from via tool calls.\n\n**Control loop** — the logic that decides when the agent is done. A naive agent runs until the model says it's finished. A robust control loop includes: max iterations, confidence thresholds, human approval gates, and error recovery branches.\n\nFor BuzzBoard's products: Zylo is an agent with tools (CRM read/write, web search, email send), memory (account history, prior outreach), and a control loop that determines when to escalate to a human rep.`,
          goAnalogy: {
            term: "Tesuji",
            reading: "てすじ",
            meaning:
              "A brilliant local tactic — the right move in a specific situation. Tools are tesuji: each one is the right tactic for a specific subtask. The agent's job is to recognize which tesuji to play.",
          },
        },
        {
          heading: "Agents vs. chatbots vs. automation",
          body: `Three things often get conflated. A PM needs to be precise:\n\n**Chatbot** — responds to user input in a conversational format. It may use an LLM for language quality, but it's fundamentally reactive. It doesn't take actions autonomously. Examples: a support FAQ bot, a product assistant that answers questions.\n\n**Automation (RPA, workflow automation)** — executes predefined rules or steps without intelligence. Zapier, Make, n8n. The logic is authored by humans; the system just executes it. It can't handle ambiguous inputs or reason about novel situations.\n\n**AI Agent** — combines LLM reasoning with the ability to take actions, evaluate results, and adapt. An agent can handle instructions like "find the 20 best SMB prospects in the HVAC vertical in Ohio and draft personalized outreach for each" — it reasons about what data to pull, calls the right tools, evaluates quality, and iterates.\n\nBuzzBoard's value proposition requires agents, not chatbots or automations. A rep shouldn't have to tell Zylo exactly how to research each prospect. Zylo should reason about the goal, select the right research approach, and produce the output autonomously.`,
        },
        {
          heading: "The agent failure modes a PM must own",
          body: `AI agents fail in ways that are different from traditional software. A PM who doesn't understand these failure modes will write specs that look complete but fail in production:\n\n**Hallucination** — the model generates plausible-sounding but false information. For Zylo, this means fabricating details about a prospect that aren't in the data. Mitigation: constrain the model to only use data it has retrieved via tools; use output validation to flag low-confidence claims.\n\n**Tool call failure** — the model calls a tool with malformed arguments, the tool returns an error, and the agent loops or gets stuck. Mitigation: robust error handling in the tool integration, fallback behaviors when tools are unavailable.\n\n**Context overflow** — as the agent works longer, the context window fills up. Important early context gets truncated. Mitigation: summarization steps, selective context pruning, structured memory rather than raw conversation history.\n\n**Goal drift** — in complex multi-step tasks, the agent optimizes for a proximate goal that diverges from the actual intent. Example: told to "write personalized outreach," the agent generates technically personalized but aggressive messages that violate brand guidelines. Mitigation: explicit constraints and evaluation criteria in the system prompt.\n\n**Cost explosion** — an agent loop that makes many tool calls or processes long contexts can generate unexpected costs. Mitigation: budget controls, max iterations, cost monitoring per run.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "Zylo is conducting research on 500 prospects and is 200 in when the web search tool starts returning errors. What agent failure mode is this and what should the PM spec as mitigation?",
          options: [
            "Hallucination — mitigate by adding fact-checking steps",
            "Tool call failure — spec robust error handling with fallback behavior (skip search, use available data, flag for retry) and never let a single tool failure halt the entire run",
            "Context overflow — mitigate by summarizing earlier research results",
            "Goal drift — mitigate by adding evaluation criteria to the system prompt",
          ],
          correct: 1,
          explanation:
            "Tool call failures are expected at scale. The PM's spec should require graceful degradation: when a tool fails, the agent continues with available data, logs the failure, and flags affected records for retry — never halting the entire batch run.",
        },
        {
          type: "multiple-choice",
          question:
            "What fundamentally distinguishes an AI agent from a traditional workflow automation tool (like Zapier)?",
          options: [
            "AI agents cost more to run and require larger infrastructure",
            "Workflow automations are faster; agents are more accurate",
            "AI agents can reason about ambiguous inputs and adapt to novel situations; automations execute predefined rules only",
            "AI agents require cloud deployment; automations can run on-premise",
          ],
          correct: 2,
          explanation:
            "Automation executes rules you authored. An agent applies LLM reasoning to handle situations the rules didn't anticipate — that's what makes it capable of complex, variable tasks like researching and personalizing SMB outreach.",
        },
        {
          type: "multiple-choice",
          question:
            "An agent spec says 'the agent will summarize its research before proceeding to outreach drafting.' Which failure mode does this step primarily mitigate?",
          options: [
            "Hallucination — summaries force the model to cite its sources",
            "Context overflow — summarizing condenses earlier work so important context isn't truncated as the task grows",
            "Tool call failure — summaries provide a recovery point if tools fail mid-run",
            "Cost explosion — summaries reduce the number of model calls needed",
          ],
          correct: 1,
          explanation:
            "Summarization is a context management technique: it compresses prior work into a shorter representation so the agent retains key facts without filling the context window with raw tool outputs.",
        },
      ],
      resources: [
        {
          title: "Building Effective Agents (Anthropic)",
          url: "https://www.anthropic.com/news/building-effective-agents",
          description:
            "Anthropic's definitive guide on agent design patterns — required reading for any AI PM.",
        },
        {
          title: "LangChain: Agents Conceptual Guide",
          url: "https://python.langchain.com/docs/concepts/agents/",
          description: "Technical framing of agent components — tools, memory, and the control loop.",
        },
      ],
    },
    {
      id: "2-2",
      unitId: "unit2",
      companySlug: "buzzboard",
      title: "Prompt Architecture & Output Schemas",
      tldr:
        "A system prompt is a product specification. Output schemas are contracts between the model and your application. Getting these right is the PM's core technical skill in agent product development — and BuzzBoard's job posting explicitly calls it out.",
      skills: ["Prompt engineering", "Output schema design", "Structured outputs"],
      xp: 30,
      content: [
        {
          heading: "The system prompt as product spec",
          body: `For a traditional software feature, a product spec tells engineers what to build. For an AI agent, the **system prompt** is the spec that tells the model how to behave.\n\nA well-architected system prompt has distinct sections:\n\n**Role and persona** — who is the agent? What is its purpose? This grounds all subsequent instructions. "You are Zylo, BuzzBoard's AI sales assistant. Your job is to research SMB prospects and draft personalized outreach for sales reps." The persona sets tone, formality, and authority scope.\n\n**Task instructions** — step-by-step guidance on what to do. Not a vague direction like "research the prospect" but a structured process: (1) retrieve the IRIS profile, (2) identify the top 3 business challenges from their digital signals, (3) select the most relevant BuzzBoard value prop for each challenge, (4) draft outreach that connects their challenge to the value prop.\n\n**Constraints** — what the agent must NOT do. Constraints are often more important than instructions. "Never fabricate information not present in the IRIS profile." "Never mention competitors by name." "Always keep outreach under 150 words." Without explicit constraints, models will fill gaps with their own defaults.\n\n**Output format** — how the response should be structured. Should it return JSON? Markdown? A numbered list? If the output feeds into your application, it must be deterministic. Specify the exact format.\n\n**Examples (few-shot)** — 2–3 examples of ideal input/output pairs calibrate the model's behavior more reliably than written instructions alone. For outreach drafting, include 2 examples of good outreach and 1 of bad outreach with explanations.`,
          goAnalogy: {
            term: "Joseki",
            reading: "じょせき",
            meaning:
              "Established sequences of play — locally optimal moves both players know. System prompt patterns are joseki: proven structures that reliably produce good outcomes, refined by iteration.",
          },
        },
        {
          heading: "Output schemas: structured outputs",
          body: `An agent that returns free-form text is hard to integrate into a product. Your application can't reliably parse "Here are three outreach options for ACME Plumbing:" into a data structure.\n\n**Structured outputs** force the model to return JSON (or another schema-constrained format) that your application can process programmatically. OpenAI, Anthropic, and Google all support structured output modes.\n\nDesigning an output schema is a product decision:\n\n\`\`\`json\n{\n  "prospect_id": "acme-plumbing-oh",\n  "research_confidence": 0.87,\n  "top_challenges": [\n    {\n      "challenge": "Low review count vs. local competitors",\n      "evidence": "12 Google reviews vs. competitor average of 47",\n      "relevance_score": 0.92\n    }\n  ],\n  "outreach_variants": [\n    {\n      "variant_id": "v1",\n      "subject": "15 new reviews in 30 days — here's how",\n      "body": "...",\n      "tone": "consultative"\n    }\n  ],\n  "flags": {\n    "low_data_quality": false,\n    "needs_human_review": false\n  }\n}\n\`\`\`\n\nEach field is a product decision: Why include \`research_confidence\`? Because downstream you'll want to surface low-confidence prospects for human review. Why \`flags.needs_human_review\`? Because the agent should be able to escalate when it's uncertain.\n\nThe schema is the contract between the model and your application. Changes to the schema require coordination with engineering — treat it like an API contract.`,
        },
        {
          heading: "Prompt versioning and iteration",
          body: `Prompts are code. They need version control, testing, and a deployment process.\n\n**Version control** — prompts should live in your codebase (or a prompt management system like LangSmith, PromptLayer, or Braintrust), not in a spreadsheet or someone's head. When you change a prompt, the old version should be recoverable.\n\n**Regression testing** — every prompt change should run against a test suite of inputs and expected outputs before going to production. A change that improves average output quality by 5% but breaks behavior on 10% of inputs is worse, not better.\n\n**A/B testing** — for high-volume agents (like Zylo sending thousands of outreach messages), prompt variants can be tested against each other on real traffic with outcome metrics (reply rates, meeting bookings) as the north star.\n\n**Prompt ownership** — as PM, you should own the prompt spec. Engineers implement the integration; the AI team advises on model behavior; but the definition of what the agent should do is a product decision. If the prompt is owned by engineering or AI without PM input, it will optimize for technical convenience, not user value.\n\nThe BuzzBoard job posting explicitly calls out "design agent behaviors including prompt architecture" — this is not a nice-to-have PM skill for this role, it's a core responsibility.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "You're writing the system prompt for Zylo's outreach drafting module. Which component is most likely to be missing from a first draft that causes inconsistent real-world performance?",
          options: [
            "The role/persona section — models don't understand their purpose without explicit labeling",
            "Constraints — without explicit prohibitions, models fill gaps with their own defaults, producing brand-inconsistent or inappropriate outputs",
            "Examples — models can't learn from written instructions alone",
            "Output format — models always default to markdown unless told otherwise",
          ],
          correct: 1,
          explanation:
            "Constraints are the most commonly omitted section. Instructions tell the agent what to do; constraints tell it what NOT to do. Models will optimistically fill unconstrained gaps (fabricating data, mentioning competitors, being too aggressive) unless explicitly prevented.",
        },
        {
          type: "multiple-choice",
          question:
            "Why should an output schema include a `research_confidence` score and a `needs_human_review` flag?",
          options: [
            "These fields help the model understand how certain it should be about its answers",
            "They enable downstream routing: low-confidence or flagged outputs can be automatically queued for human review rather than sent directly to prospects",
            "They are required by OpenAI's API for structured output compliance",
            "They reduce the model's hallucination rate by forcing explicit uncertainty quantification",
          ],
          correct: 1,
          explanation:
            "Confidence scores and review flags are routing signals, not model quality measures. They allow the application layer to decide: high-confidence outputs go straight to the rep; low-confidence or flagged outputs go to a review queue. This is the 'human in the loop' design pattern.",
        },
        {
          type: "scenario",
          prompt:
            "Your team is about to change Zylo's system prompt to improve message personalization. An engineer says 'I'll just update the prompt and push it.' What process should you require and why?",
          sampleAnswer:
            "Prompts are product code — they need the same rigor as a feature release. I'd require: (1) version the old prompt before any changes, (2) run the new prompt against our regression test suite (a curated set of prospect inputs with expected output characteristics), (3) if regression passes, A/B test on a small traffic slice with reply rate as the success metric, (4) only ship to 100% traffic once the A/B shows improvement with statistical significance. The engineer 'just pushing' a prompt change is equivalent to shipping a feature without testing — one bad prompt can send wrong messages to thousands of prospects before anyone notices.",
          keyPoints: [
            "Prompts are code — version control is non-negotiable",
            "A regression test suite should exist before any prompt is changed in production",
            "A/B testing on outcome metrics (not model output quality alone) is the correct evaluation method for customer-facing agents",
            "The blast radius of a bad prompt change scales with volume — treat it with the same care as any high-traffic feature",
          ],
        },
      ],
      resources: [
        {
          title: "Anthropic: Prompt Engineering Guide",
          url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
          description: "Anthropic's official prompt engineering documentation — directly applicable to Claude-based agents.",
        },
        {
          title: "OpenAI: Structured Outputs",
          url: "https://platform.openai.com/docs/guides/structured-outputs",
          description: "How to enforce JSON schema compliance in model outputs.",
        },
      ],
    },
    {
      id: "2-3",
      unitId: "unit2",
      companySlug: "buzzboard",
      title: "Multi-Agent Systems",
      tldr:
        "BuzzBoard's product suite is a multi-agent system: IRIS, Ignite, Zylo, and Ember each do specialized work and pass context between them. Understanding how to design, orchestrate, and debug multi-agent pipelines is a required PM skill for this role.",
      skills: ["Multi-agent orchestration", "Agent handoffs", "Pipeline debugging"],
      xp: 30,
      content: [
        {
          heading: "Why multi-agent instead of one big agent",
          body: `The instinct when building an AI product is to create one powerful agent that does everything. In practice, multi-agent systems outperform single agents for complex tasks. Here's why:\n\n**Specialization** — a model focused on a single task (research an SMB's digital footprint) can be prompted, tested, and optimized for that task alone. An agent trying to do research, scoring, personalization, and email drafting in one pass is harder to evaluate and harder to improve.\n\n**Context window management** — a single agent accumulating all the context from a full sales workflow would quickly exhaust its context window. Agents that hand off summaries rather than full transcripts keep individual context windows manageable.\n\n**Parallelization** — independent agents can work in parallel. IRIS can research 50 prospects simultaneously; Zylo doesn't need to wait for them sequentially.\n\n**Independent failure isolation** — if Zylo's email drafting module has a prompt issue, it doesn't take down IRIS's research pipeline. Failures are contained within their agent boundary.\n\n**Modularity** — you can upgrade the model powering IRIS without touching Zylo. You can run Ember on a cheaper, faster model because its tasks are simpler. Each agent can be right-sized to its workload.\n\nFor BuzzBoard's PM: when you're scoping a new capability, the first design question is "is this a new tool for an existing agent, or a new specialized agent in the pipeline?"`,
          goAnalogy: {
            term: "Shicho",
            reading: "しちょう",
            meaning:
              "A ladder — a sequence of forced moves that runs across the board. Multi-agent pipelines are shicho: each agent's output is the forced input to the next, and you must calculate the full chain before committing to the sequence.",
          },
        },
        {
          heading: "Orchestration patterns",
          body: `Multi-agent systems need an orchestration layer — something that decides which agents run when, in what order, with what inputs.\n\n**Pipeline (sequential)** — the simplest pattern: Agent A → Agent B → Agent C. IRIS researches → Ignite scores → Zylo drafts. Each step is blocked on the previous. Use when output from one agent is required input for the next and there are no opportunities for parallelization.\n\n**Fan-out / fan-in (parallel)** — an orchestrator triggers multiple agents simultaneously and waits for all to complete before proceeding. Example: IRIS researches 50 prospects in parallel, then Zylo drafts for all 50. Use when agents can work independently and latency matters.\n\n**Router (conditional)** — an orchestrator decides which agent handles a given input based on its characteristics. Example: if a prospect has fewer than 5 employees, route to the SMB-optimized Zylo variant; if 50–200 employees, route to the mid-market variant. Use when different inputs require meaningfully different handling.\n\n**Human-in-the-loop gates** — a deliberate pause where a human must approve before the next agent runs. Example: after Zylo drafts outreach, a rep reviews and approves before Zylo sends. Use for high-stakes or irreversible actions.\n\nBuzzBoard's B2SMB use case involves all four patterns. As PM, you need to specify which pattern applies to each workflow and why — especially around human gates (which actions require approval vs. which can be fully autonomous).`,
        },
        {
          heading: "Designing agent handoffs",
          body: `The most common failure in multi-agent systems isn't within an individual agent — it's at the handoff between agents. What does one agent pass to the next, and what gets lost in translation?\n\n**Context propagation** — when IRIS passes a prospect profile to Zylo, what's in the payload? The full raw research? A structured summary? Key-value facts? The format and completeness of the handoff payload determines Zylo's output quality.\n\n**Schema contracts** — agent A's output schema should be explicitly defined and version-controlled. Agent B's input spec should be explicitly defined and version-controlled. The contract between them is a product artifact, not an implicit assumption.\n\n**Provenance tracking** — when Ember detects a churn risk, it should be able to cite which signal triggered the alert and trace it back to IRIS's original research. This requires a consistent prospect ID and metadata chain across all agents.\n\n**Error propagation** — if IRIS marks a prospect as \`low_data_quality: true\`, Zylo should either skip that prospect, use a more generic template, or flag it for human review. Error signals from one agent must be handled explicitly by the next — they can't just be silently ignored.\n\nFor the PM interview: when asked to design a feature that touches multiple agents, always articulate what the handoff looks like. Interviewers will probe this specifically — it demonstrates you understand multi-agent systems at a practical level, not just conceptually.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "BuzzBoard wants to add a new capability: after Zylo sends outreach, an agent should monitor email reply sentiment and auto-route positive replies to the rep's calendar for a meeting. Is this a new tool for Zylo or a new agent? Why?",
          options: [
            "A new tool for Zylo — it's an extension of the outreach workflow Zylo already owns",
            "A new agent — reply monitoring and calendar routing are specialized tasks with different latency, trigger, and failure characteristics than outreach drafting",
            "Neither — this should be handled by a rules-based automation, not an AI agent",
            "A new agent — because Zylo's context window can't handle the additional data",
          ],
          correct: 1,
          explanation:
            "Reply monitoring is event-driven (triggered by inbound email, not a user action), has different timing (could be hours or days later), and has different failure modes (email parsing errors, calendar API issues). Specializing it as a new agent keeps Zylo's surface area clean and allows independent testing and optimization.",
        },
        {
          type: "multiple-choice",
          question:
            "An agent pipeline produces wrong outputs for 5% of prospects. The orchestration log shows IRIS completing successfully, but Zylo's output doesn't reflect IRIS's research. What's the most likely cause?",
          options: [
            "IRIS is hallucinating 5% of the time due to a model quality issue",
            "The handoff schema between IRIS and Zylo has a field mismatch — IRIS outputs data in a format Zylo isn't correctly parsing",
            "Zylo's context window is overflowing on complex prospects",
            "The orchestrator has a race condition and sometimes sends Zylo the wrong prospect's data",
          ],
          correct: 1,
          explanation:
            "Schema mismatches at handoffs are the most common silent failure in multi-agent pipelines — IRIS succeeds by its own metrics, but its output isn't correctly consumed by Zylo. This shows up as Zylo 'ignoring' available research. Version-controlled schema contracts between agents prevent this.",
        },
        {
          type: "multiple-choice",
          question:
            "Which agent orchestration pattern should govern Zylo sending emails to prospects that have been qualified and approved by a rep?",
          options: [
            "Pipeline (sequential) — IRIS researches, then Zylo drafts, then Zylo sends automatically",
            "Fan-out / fan-in — send to all prospects simultaneously without waiting",
            "Human-in-the-loop gate — rep reviews and approves each draft before Zylo sends",
            "Router (conditional) — Zylo decides whether to send based on confidence score",
          ],
          correct: 2,
          explanation:
            "Email sending is irreversible and customer-facing. A human-in-the-loop gate is the correct pattern for high-stakes, irreversible actions. The rep reviews Zylo's draft and approves before any message is sent — this is a product requirement, not just a UX preference.",
        },
      ],
      resources: [
        {
          title: "Multi-Agent Architectures (LangGraph)",
          url: "https://langchain-ai.github.io/langgraph/concepts/multi_agent/",
          description: "Practical patterns for orchestrating multiple agents — directly applicable to BuzzBoard's product architecture.",
        },
        {
          title: "Anthropic: Multi-Agent Design Patterns",
          url: "https://www.anthropic.com/news/building-effective-agents#multi-agent-architectures",
          description: "Anthropic's guidance on when and how to use multi-agent systems.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "Which agent failure mode does the `flags.needs_human_review` field in an output schema primarily address?",
      options: [
        "Context overflow — signals that the context window is near capacity",
        "Goal drift — allows the PM to track when agents pursue the wrong objective",
        "Hallucination and low-confidence outputs — routes uncertain results to human review before they reach customers",
        "Cost explosion — flags when agent run cost exceeds budget thresholds",
      ],
      correct: 2,
      explanation:
        "The `needs_human_review` flag is a confidence-based routing mechanism: when the agent is uncertain or detects a quality issue, it escalates to a human rather than sending a potentially incorrect output to a prospect.",
    },
    {
      type: "multiple-choice",
      question: "You discover that Zylo's outreach quality degraded significantly after an engineer updated the system prompt without a review process. What process should you implement to prevent this in the future?",
      options: [
        "Lock the system prompt in a read-only config so only the PM can change it",
        "Run the new prompt against a regression test suite before production, then A/B test on live traffic with reply rate as the success metric",
        "Have the AI team review all prompt changes before deployment",
        "Require a full sprint cycle for any prompt modification to allow thorough review",
      ],
      correct: 1,
      explanation:
        "Prompt changes need the same deployment rigor as code changes: regression testing against known inputs/outputs, then A/B testing against real-world outcome metrics. Reviews without data are insufficient; you need evidence that the change actually improves results.",
    },
    {
      type: "multiple-choice",
      question: "What is the primary advantage of a 'fan-out / fan-in' orchestration pattern for IRIS processing 100 prospects?",
      options: [
        "It reduces cost by sharing context across all prospect research tasks",
        "It enables all 100 prospects to be researched in parallel, dramatically reducing total processing time vs. sequential execution",
        "It prevents hallucination by having multiple agents check each other's work",
        "It allows each prospect to be researched by the most appropriate specialized agent",
      ],
      correct: 1,
      explanation:
        "Fan-out/fan-in parallelizes independent tasks. If sequential IRIS research takes 5 seconds per prospect, 100 prospects would take ~8 minutes sequentially. With fan-out parallelization, all 100 run simultaneously — total time drops to ~5 seconds (network and compute overhead aside).",
    },
    {
      type: "multiple-choice",
      question: "Why is 'prompt ownership' a PM responsibility rather than an engineering responsibility?",
      options: [
        "PMs have better writing skills than engineers and produce higher quality prompts",
        "The system prompt defines agent behavior — it is a product decision about what the agent should do, which is distinct from the engineering decision of how to implement it",
        "Engineering teams lack access to the model APIs needed to test prompts",
        "Prompts require business domain knowledge that engineering teams don't have",
      ],
      correct: 1,
      explanation:
        "The system prompt is a spec for agent behavior. Defining what the agent does (goal, constraints, tone, output format) is a product decision. Engineering implements the integration; the AI team advises on model behavior; but the PM owns the definition of what 'good' looks like.",
    },
  ],
  quizXp: 35,
};
