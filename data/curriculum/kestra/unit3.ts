import type { Unit } from "@/data/types";

export const kestraUnit3: Unit = {
  id: "unit3",
  title: "AI Agents in Orchestration",
  description:
    "Why orchestration platforms are the natural home for AI agents — and how to design, build, and ship agent workflows in Kestra specifically.",
  companySlug: "kestra",
  goTerm: "Haengma",
  goReading: "はえんま",
  goMeaning:
    "Stone movement — the efficiency and direction of stones developing across the board. AI agent design is haengma: each agent step should move purposefully toward the goal, not spin in place.",
  color: "ice",
  lessons: [
    {
      id: "3-1",
      unitId: "unit3",
      companySlug: "kestra",
      title: "Why Orchestration + AI Agents Is a Natural Fit",
      tldr:
        "AI agents are fundamentally workflow problems: they perceive state, take actions, observe results, and loop. Kestra's execution model — DAGs, retries, state tracking, triggers, parallelism — maps almost perfectly onto what agents need.",
      skills: ["Agent architecture", "Orchestration mapping", "AI product framing"],
      xp: 20,
      content: [
        {
          heading: "Agents as workflows",
          body: `An AI agent, at its core, is a control loop:\n\n1. **Perceive** — read the current state (a user message, a tool result, a database record)\n2. **Reason** — call an LLM to decide what to do next\n3. **Act** — execute a tool call (web search, API call, code execution, database write)\n4. **Observe** — read the result of the action\n5. **Loop** — back to step 1, until a goal is reached or a stopping condition is met\n\nThis is a workflow. A DAG with a loop edge. And Kestra is a workflow platform.\n\nThe overlap between what agents need and what Kestra provides is striking:\n\n| Agent requirement | Kestra capability |\n|---|---|\n| Execute tools (API calls, DB queries) | Plugin system — every tool is a task |\n| Retry failed tool calls | Native retry logic per task |\n| Run tools in parallel | DAG parallelism |\n| Track what happened | Execution history in Elasticsearch |\n| Resume from failure | Re-run from failed task |\n| Schedule recurring agents | Cron and event triggers |\n| Pass data between steps | Task inputs/outputs |\n| Human approval gates | Pause execution + resume trigger |\n\nThis is Kestra's strategic bet on AI: they're not adding AI as a feature — they're positioning their platform as the infrastructure layer that makes complex, multi-step AI workflows reliable, observable, and scalable.`,
          goAnalogy: {
            term: "Sente",
            reading: "せんて",
            meaning:
              "The initiative — forcing the opponent to respond. Kestra seizes sente in the AI infrastructure market by arguing that agents need orchestration: you don't build agentic AI on top of Kestra, Kestra is what makes agentic AI production-ready.",
          },
        },
        {
          heading: "The production gap in agentic AI",
          body: `Every AI team that builds an agent prototype faces the same gap when moving to production:\n\n**Prototype:** call OpenAI API in a while loop with some tool functions. Works in a notebook. Demos well.\n\n**Production reality:**\n- The agent sometimes loops forever — you need max iterations and token budget limits\n- Sometimes a tool call fails — you need retry logic with backoff\n- You need to see what the agent did on each run — logging and observability\n- You need to run 100 agents in parallel — concurrency management\n- You need to pause for human approval mid-run — checkpointing\n- You need to trigger agents on schedules or events — trigger management\n- You need to audit what ran, when, with what inputs — execution history\n- When something goes wrong, you need to re-run from the failed step — partial re-execution\n\nNone of these are AI problems. They're all orchestration problems. This is the gap Kestra fills.\n\n**The Product Engineer's role:** you're building the features that close this gap — task types that run agent loops reliably, UI that shows agent execution state clearly, and triggers that kick off agents on the right events. Your job is to make "AI agent in production" a first-class Kestra use case, not a workaround.`,
        },
        {
          heading: "Kestra's AI product vision",
          body: `Kestra's AI strategy has two directions, both of which the Product Engineer role will touch:\n\n**Direction 1: AI within Kestra** — using AI to make Kestra itself better. Examples:\n- Flow generation from natural language: "create a flow that syncs Salesforce contacts to Snowflake every hour"\n- Flow debugging assistance: "this execution failed — what likely caused it and how do I fix it?"\n- Documentation generation: auto-generate flow documentation from the YAML definition\n- Anomaly detection: flag unusual execution patterns automatically\n\n**Direction 2: Kestra for AI workflows** — making Kestra the best platform to run AI and agent workflows. Examples:\n- First-class LLM task types (call Claude, call GPT-4o, call Gemini — with streaming, retry, cost tracking)\n- Agent loop task type (run an agent control loop with configurable max iterations, tool definitions, and stopping conditions)\n- Human-in-the-loop pause/resume (an execution that pauses for human approval and resumes when approved via UI or API)\n- AI workflow templates (pre-built flows for common agent patterns)\n\n**Your interview answer when asked about Kestra's AI direction:** lead with Direction 2 (Kestra as AI infrastructure) because it's the deeper product bet — AI features within Kestra are table stakes, but making Kestra the platform that every AI team runs their agents on is the long game.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A user wants to build an agent that researches a company, extracts key facts, and drafts an email — with a human review step before the email is sent. Which Kestra execution pattern handles the human approval step?",
          options: [
            "A conditional task that checks a config file for approval status",
            "An execution pause with a resume trigger — the flow pauses after drafting, an approval webhook resumes it, and the send task runs after approval",
            "A separate flow is triggered when the draft is ready and runs the send task independently",
            "A cron trigger that polls an approval queue every 5 minutes",
          ],
          correct: 1,
          explanation:
            "Kestra supports execution pause and resume — a flow can wait indefinitely for an external signal (an API call, a webhook, a UI button click). This is the correct pattern for human-in-the-loop gates: the execution holds state, the human reviews and approves, and Kestra resumes from exactly where it paused.",
        },
        {
          type: "multiple-choice",
          question:
            "Which aspect of production AI agents is NOT solved by orchestration platforms like Kestra?",
          options: [
            "Retry logic for failed tool calls",
            "Parallel execution of independent agent tasks",
            "The quality of the LLM's reasoning and output",
            "Execution history and audit trail",
          ],
          correct: 2,
          explanation:
            "Orchestration solves operational reliability (retries, parallelism, observability, scheduling). It doesn't improve the underlying LLM's reasoning quality — that's a model selection and prompt engineering problem. Kestra makes your agent reliable; it doesn't make it smarter.",
        },
        {
          type: "multiple-choice",
          question:
            "Kestra's 'AI within Kestra' direction (flow generation from natural language) and 'Kestra for AI workflows' direction (agent execution platform) serve different goals. Which is the more strategically important long-term bet?",
          options: [
            "AI within Kestra — it directly improves the product experience for all users",
            "Kestra for AI workflows — it positions Kestra as infrastructure for the AI market, which is a much larger and faster-growing opportunity than internal productivity features",
            "They're equally important and should receive equal investment",
            "AI within Kestra — it's faster to ship and shows immediate ROI to investors",
          ],
          correct: 1,
          explanation:
            "AI within Kestra improves retention and NPS. Kestra for AI workflows expands the TAM to every team building with LLMs — a multi-billion dollar market. Platform bets compound; productivity features are table stakes. Being the orchestration layer for AI agents is a category-defining position if Kestra executes on it.",
        },
      ],
      resources: [
        {
          title: "Kestra: AI Workflows Blog",
          url: "https://kestra.io/blogs",
          description: "Kestra's latest posts on AI orchestration — read these before the interview.",
        },
        {
          title: "Anthropic: Building Effective Agents",
          url: "https://www.anthropic.com/news/building-effective-agents",
          description: "The canonical reference on agent design patterns — directly relevant to what Kestra needs to support.",
        },
      ],
    },
    {
      id: "3-2",
      unitId: "unit3",
      companySlug: "kestra",
      title: "Designing AI Task Types for Kestra",
      tldr:
        "A Kestra task type is a Java class with inputs, outputs, and a run() method. Designing AI task types — LLM calls, agent loops, embeddings, tool calls — requires thinking carefully about inputs/outputs, streaming, cost tracking, and failure modes.",
      skills: ["Task plugin design", "LLM integration", "API cost management"],
      xp: 30,
      content: [
        {
          heading: "Anatomy of a Kestra AI task plugin",
          body: `Every Kestra task is a Java class. An AI task plugin for calling an LLM would look like:\n\n\`\`\`java\n@Plugin(examples = {...})\n@Schema(title = "Call an LLM API")\npublic class LlmChat extends Task implements RunnableTask<LlmChat.Output> {\n\n    @Schema(title = "Model ID (e.g. claude-sonnet-4-5, gpt-4o)")\n    @PluginProperty(dynamic = true)\n    private String model;\n\n    @Schema(title = "System prompt")\n    @PluginProperty(dynamic = true)\n    private String systemPrompt;\n\n    @Schema(title = "User message")\n    @PluginProperty(dynamic = true)\n    private String userMessage;\n\n    @Schema(title = "Max tokens")\n    @PluginProperty\n    private Integer maxTokens = 1024;\n\n    @Override\n    public Output run(RunContext runContext) throws Exception {\n        var client = buildClient(runContext);\n        var response = client.chat(model, systemPrompt,\n            runContext.render(userMessage));\n        return Output.builder()\n            .content(response.content())\n            .inputTokens(response.usage().inputTokens())\n            .outputTokens(response.usage().outputTokens())\n            .build();\n    }\n\n    @Builder @Getter\n    public static class Output implements io.kestra.core.models.tasks.Output {\n        private String content;\n        private int inputTokens;\n        private int outputTokens;\n    }\n}\n\`\`\`\n\nThe \`@PluginProperty(dynamic = true)\` annotation means the field supports Kestra's templating syntax — users can pass \`{{ inputs.userMessage }}\` or \`{{ outputs.previousTask.data }}\` as dynamic values, resolved at execution time. This is essential for AI tasks that consume dynamic context.`,
          goAnalogy: {
            term: "Tesuji",
            reading: "てすじ",
            meaning:
              "A brilliant local tactic. A well-designed plugin is tesuji: it solves one problem precisely, with clean inputs and outputs that integrate naturally into the larger flow.",
          },
        },
        {
          heading: "Key design decisions for AI task types",
          body: `When designing an AI task plugin, six decisions determine whether it's production-quality or a prototype:\n\n**1. Streaming vs. synchronous output**\nFor long-running LLM calls, streaming returns partial output progressively. For Kestra, this means either: accumulate the full stream and return it when done (simpler, loses progress visibility), or write progress to Kestra's internal storage incrementally (complex, but enables live log viewing). For most task types, accumulate-and-return is correct — unless the response is very long or the user needs real-time feedback.\n\n**2. Cost tracking as first-class output**\nEvery AI task should output token usage: \`inputTokens\`, \`outputTokens\`, \`estimatedCostUsd\`. Downstream tasks can aggregate these. A namespace-level cost dashboard becomes possible if every AI task emits cost data. Design this from day one — retrofitting it is painful.\n\n**3. Retry behavior**\nLLM APIs return transient errors (429 rate limits, 503 overloads, 500 server errors). AI tasks should declare sensible defaults: retry up to 3 times, with exponential backoff starting at 1 second. Rate limit errors (429) warrant longer backoff. This should be configurable per task in the YAML flow definition.\n\n**4. Timeout**\nLLM calls can hang. Every AI task should have a configurable timeout with a sensible default (60 seconds for most tasks, configurable for long-context tasks). A hanging task that blocks a worker thread for 10 minutes is a reliability problem.\n\n**5. API key management**\nAPI keys must never appear in YAML flow definitions in plaintext. The plugin should accept a \`secretKey\` field that references a Kestra secret (resolved at runtime from the namespace's secret store). The output and logs should never expose the key value.\n\n**6. Output schema design**\nStructured JSON outputs (not just a text blob) make downstream tasks composable. A summarization task that returns \`{ summary: string, keyPoints: string[], wordCount: int }\` is far more useful than one that returns raw text.`,
        },
        {
          heading: "The agent loop task pattern",
          body: `The hardest AI task type to design in Kestra is the agent loop — a task that runs an iterative reasoning-and-action cycle until a goal is reached or a stopping condition is met.\n\n**The challenge:** a Kestra task is expected to be finite — it runs and returns a result. An agent loop is by nature indefinite — it could make 3 tool calls or 30, depending on what it encounters.\n\n**Option A: Self-contained agent task**\nThe entire agent loop runs inside a single task's \`run()\` method. The task manages its own loop, tool calls, and state internally, and returns the final result. Simple to implement; the loop is invisible to Kestra's execution model (no per-step observability).\n\n**Option B: Agent as a Kestra subflow**\nEach agent step is a separate task in a dynamically-generated subflow. The orchestration layer can see each step, retry individual steps, and provide per-step observability. More complex to implement (requires dynamic flow generation); much better for production use.\n\n**Option C: Hybrid — agent task with internal state checkpointing**\nThe agent loop runs inside a task, but checkpoints its state to Kestra's internal storage after each step. If the task fails or is restarted, it resumes from the last checkpoint. Best of both worlds but requires careful implementation.\n\nFor the Kestra Product Engineer role, this is the kind of architectural question you should be ready to discuss — not just "can Kestra run agents" but "how should agent execution be modeled to give operators the observability and reliability they need."`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "Why should every Kestra AI task output include inputTokens, outputTokens, and estimatedCostUsd fields?",
          options: [
            "LLM API providers require this metadata to be forwarded in subsequent requests",
            "It enables namespace-level cost dashboards and budget alerts — teams need to see AI cost per workflow, per namespace, and per time period in production",
            "Kestra's retry logic uses token counts to determine whether a response was truncated",
            "These fields are required by Kestra's plugin registry for LLM-type tasks",
          ],
          correct: 1,
          explanation:
            "Token cost is invisible unless you surface it. By including cost metadata in every AI task output, downstream tasks and dashboards can aggregate: 'this workflow cost $0.14 to run, this namespace spent $450 this month.' This is a production operational requirement — teams cannot manage AI costs without visibility into where they're being incurred.",
        },
        {
          type: "multiple-choice",
          question:
            "A @PluginProperty(dynamic = true) annotation on an AI task's userMessage field means what for flow authors?",
          options: [
            "The field accepts only static string values hardcoded in the flow YAML",
            "The field supports Kestra's templating syntax — flow authors can pass {{ inputs.userQuery }} or {{ outputs.previousTask.content }}, resolved at execution time",
            "The field is optional and defaults to null if not specified",
            "The field value can be updated dynamically after the flow has started running",
          ],
          correct: 1,
          explanation:
            "Dynamic properties enable composition: the user message can reference flow inputs, previous task outputs, or namespace variables. Without this, every AI task would need a hardcoded prompt — useless for dynamic, data-driven agent workflows.",
        },
        {
          type: "scenario",
          prompt:
            "You're designing a Kestra task plugin called AgentLoop that runs an AI research agent. The agent can make up to 20 tool calls and may take 3–8 minutes. A PM wants per-step observability (which tools were called, in what order, with what results) visible in the Kestra UI. How do you design this?",
          sampleAnswer:
            "I'd use Option B from the agent loop patterns — model the agent as a Kestra subflow rather than a single opaque task. Here's the approach: the AgentLoop task generates a dynamic subflow at startup, where each tool call becomes a separate Kestra task. After the LLM decides to call Tool X with args Y, AgentLoop creates a task entry for that call, executes it, and the result feeds back into the LLM's context. Each generated task appears in Kestra's execution DAG with its inputs, outputs, timing, and status. The PM gets full per-step visibility in the existing execution detail UI without any new UI work. The tradeoff: generating dynamic subflows is more complex to implement (Kestra needs an API for dynamic task injection mid-execution, or I architect it as a pre-planned DAG with conditional task execution). If dynamic subflow generation isn't supported, Option C (checkpoint to internal storage after each step with a custom progress reporting mechanism) gets per-step visibility through a custom UI component showing the checkpoint log. I'd ship Option A first to get agent execution working end-to-end, then migrate to B once the core works.",
          keyPoints: [
            "Per-step observability requires modeling agent steps as Kestra tasks — a single opaque task is a black box",
            "Dynamic subflow generation enables existing Kestra UI to show agent steps with no new UI work",
            "Checkpointing to internal storage is the fallback for observability if dynamic subflows aren't architecturally feasible",
            "Ship Option A first — working > observable. Add observability in iteration 2.",
          ],
        },
      ],
      resources: [
        {
          title: "Kestra Plugin Developer Guide",
          url: "https://kestra.io/docs/plugin-developer-guide",
          description: "How to build Kestra plugins — the architecture your AI task types will follow.",
        },
        {
          title: "Kestra AI Plugin (GitHub)",
          url: "https://github.com/kestra-io/plugin-ai",
          description: "Kestra's existing AI plugin — read this before the interview to understand what's already built.",
        },
      ],
    },
    {
      id: "3-3",
      unitId: "unit3",
      companySlug: "kestra",
      title: "AI Features That Make Kestra Better",
      tldr:
        "Beyond running AI workflows, Kestra wants AI to improve the product itself — flow generation, debugging assistance, documentation, anomaly detection. These are the internal AI features the Product Engineer role will build.",
      skills: ["Internal AI features", "Natural language interfaces", "LLM product design"],
      xp: 25,
      content: [
        {
          heading: "Flow generation from natural language",
          body: `The highest-value internal AI feature Kestra can ship: "describe what you want in plain English, get a valid Kestra flow YAML back."\n\nThis is hard to do well. Here's why:\n\n**The input problem:** "sync my Salesforce data to Snowflake every hour" is ambiguous. Which Salesforce objects? Which Snowflake tables? Incremental or full load? What if the sync fails — alert who? A good flow generation feature either asks clarifying questions or makes sensible defaults explicit in the generated YAML so the user can see and modify them.\n\n**The output problem:** generating syntactically valid Kestra YAML is a constrained generation problem. The LLM needs to know: which plugins exist, what their input schemas are, how YAML templating works, and what valid trigger/task combinations look like. This is a RAG problem — the model needs access to Kestra's plugin documentation and schema definitions at generation time.\n\n**The validation problem:** generated YAML that looks plausible but fails validation (a wrong plugin type, a missing required field) is worse than no generation — it erodes trust. The generation pipeline should: generate → validate against Kestra's schema → if invalid, re-generate with the validation error as feedback → surface to the user only if valid.\n\n**The design approach:** embed the flow editor with a chat panel. The user describes the flow, the AI generates a YAML candidate, the editor validates it and shows a diff from the current state, and the user accepts or modifies. Make the AI a collaborator, not an autonomous actor.`,
          goAnalogy: {
            term: "Miai",
            reading: "みあい",
            meaning:
              "Two equivalent options where taking one secures against the other. Flow generation and flow debugging assistance are miai: together, they cover the creation and recovery halves of the workflow lifecycle.",
          },
        },
        {
          heading: "Execution debugging assistance",
          body: `A flow fails. The user sees a red execution in the dashboard. They click in and see a stack trace from a Python script that ran inside a task. What went wrong?\n\nToday: the user reads the logs, checks the error message, Googles the error, checks their YAML, finds the issue.\n\nWith AI debugging assistance:\n1. User clicks "Debug with AI" on the failed execution\n2. Kestra assembles context: the flow YAML, the failed task's logs, the task's inputs, the error message, the plugin documentation\n3. The LLM analyzes this context and responds: "The failure is in the extract task. The script is trying to connect to PostgreSQL on port 5432 but the error 'Connection refused' suggests either the database host is wrong or the network isn't reachable from the worker. Check that the DB_HOST secret is set correctly in this namespace and that port 5432 is accessible from Kestra's worker network."\n4. The user gets a specific, actionable answer in 5 seconds instead of 20 minutes of debugging\n\n**What makes this hard:** assembling the right context without overwhelming the LLM's context window. A large flow with many tasks produces a lot of logs. The AI feature needs to intelligently select the most relevant context — the failed task's logs, not every task's logs.\n\n**What makes this valuable:** it dramatically lowers the time-to-resolution for execution failures — one of the highest-friction moments in an orchestration user's life.`,
        },
        {
          heading: "Anomaly detection and operational intelligence",
          body: `As Kestra accumulates execution history in Elasticsearch, it can power proactive AI features:\n\n**Execution anomaly detection** — "this flow normally completes in 45 minutes. Today's execution is at 2 hours and still running. Likely cause: upstream data source is slow." Alert the user proactively, before they notice a downstream impact.\n\n**Failure pattern recognition** — "this flow has failed 3 times this week, always on Tuesday nights. Common factor: the external API you're calling returns errors between 11pm–1am UTC. Consider adding a retry with backoff or shifting the trigger time."\n\n**Cost anomaly alerts** — "your AI workflow namespace spent 3× its typical daily cost today. The new summarization flow you deployed at 2pm appears to be the source — it's using a more expensive model than expected."\n\n**Documentation generation** — given a flow's YAML definition, generate human-readable documentation: what it does, when it runs, what it requires (secrets, permissions, upstream dependencies), and what it produces. Auto-generate and version-control as the flow evolves.\n\n**For the Product Engineer interview:** when asked about what AI features you'd prioritize for Kestra, this is a strong answer framework:\n1. Flow generation (lowers barrier to creating workflows — acquisition/activation impact)\n2. Debugging assistance (reduces time-to-resolution — retention impact)\n3. Anomaly detection (prevents incidents before they happen — operational value)\nAnywhere in that order is defensible; be prepared to explain the prioritization logic.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "The flow generation feature generates a valid YAML flow but the user says 'it got the Salesforce credentials wrong — it used a hardcoded API key instead of referencing my namespace secret.' What product design change prevents this?",
          options: [
            "Tell users to manually replace hardcoded values with secret references after generation",
            "Include Kestra's secret reference syntax and the user's namespace secret names in the generation prompt context — the model should use {{ secret('MY_SALESFORCE_KEY') }} syntax, not fabricate credentials",
            "Disable credential fields from generation entirely — users must fill those in manually",
            "Validate the generated YAML against a regex that checks for hardcoded secrets",
          ],
          correct: 1,
          explanation:
            "The model needs to know: (1) how Kestra references secrets (the template syntax), and (2) what secrets exist in the user's namespace. With this context in the prompt, the model generates flows that reference secrets correctly rather than fabricating values. RAG over the user's namespace context is the solution.",
        },
        {
          type: "multiple-choice",
          question:
            "When assembling context for 'Debug with AI,' a flow execution has 50 tasks with logs totaling 200,000 tokens. Claude Sonnet's context window is 200K tokens. What's the correct approach?",
          options: [
            "Use a model with a larger context window to include all logs",
            "Selectively include only the failed task's logs, its direct upstream tasks' outputs, and the flow YAML — not all 50 tasks' logs. Most failures are local to the failed task and its immediate context",
            "Summarize all 50 tasks' logs into 2,000 tokens before passing to the LLM",
            "Split the debugging request across multiple LLM calls, one per task",
          ],
          correct: 1,
          explanation:
            "Precision over completeness for debugging context: the failed task's logs and its direct dependencies contain ~95% of the diagnostic information. Including all 50 tasks' logs adds noise, cost, and latency. Intelligent context selection is a product design decision — the AI feature decides what context is relevant, not the user.",
        },
        {
          type: "multiple-choice",
          question:
            "Which Kestra AI feature has the highest impact on user activation (converting new users to active users)?",
          options: [
            "Anomaly detection — because it prevents the production incidents that cause users to churn",
            "Flow generation from natural language — because the first workflow is the highest-friction moment; lowering this barrier converts more sign-ups to first working flows",
            "Debugging assistance — because failure resolution is the most painful moment in the user journey",
            "Documentation generation — because teams can't adopt Kestra if they can't understand existing flows",
          ],
          correct: 1,
          explanation:
            "Activation is the moment a new user creates their first working workflow. That's the hardest step — blank canvas paralysis, YAML syntax learning, plugin discovery. Flow generation from natural language eliminates this friction: describe what you want, get a working starting point. This is the highest-leverage AI feature for converting sign-ups to active users.",
        },
      ],
      resources: [
        {
          title: "Kestra: AI Features Overview",
          url: "https://kestra.io/docs/enterprise/ai",
          description: "Kestra's existing AI features — understand what's already shipped before proposing new ones.",
        },
        {
          title: "Building AI Coding Assistants (Cursor Blog)",
          url: "https://cursor.sh/blog",
          description: "Design patterns for code generation AI features — applicable to Kestra's flow generation.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "What is the core argument for why orchestration platforms are the natural home for AI agents in production?",
      options: [
        "Orchestration platforms have better LLM integrations than standalone agent frameworks",
        "Agent loops are workflows — they need retries, observability, parallelism, scheduling, and state tracking, which are exactly what orchestration platforms provide",
        "Orchestration platforms are cheaper to run than agent-specific infrastructure",
        "YAML flow definitions are easier for LLMs to generate than Python agent code",
      ],
      correct: 1,
      explanation:
        "The argument is structural: every production agent need (retries, observability, parallelism, scheduling, human gates) is an orchestration problem already solved by platforms like Kestra. You don't add orchestration to agents — you run agents on an orchestration platform.",
    },
    {
      type: "multiple-choice",
      question: "Which of the three agent loop implementation options (self-contained task, subflow, checkpoint hybrid) should you ship first for a Kestra AI agent feature?",
      options: [
        "Subflow — maximum observability from day one is non-negotiable",
        "Checkpoint hybrid — it balances observability and implementation complexity",
        "Self-contained task — get it working end-to-end first, add observability in iteration 2",
        "None — prototype in Python first before committing to a Kestra implementation",
      ],
      correct: 2,
      explanation:
        "Ship working before ship observable. A self-contained agent task gets the full agent execution loop working reliably — that's the hardest problem. Once the execution model is proven, add per-step observability (subflow or checkpoint approach) as a follow-on. The alternative is spending 3× the time on Option B before validating that the agent actually works.",
    },
    {
      type: "multiple-choice",
      question: "If you had to prioritize ONE internal AI feature for Kestra in the next quarter, which has the broadest user impact?",
      options: [
        "Execution anomaly detection",
        "Flow documentation generation",
        "Flow generation from natural language — it reduces the highest-friction moment (first workflow creation) for the largest user segment (new users)",
        "AI-powered cost forecasting for namespace budgets",
      ],
      correct: 2,
      explanation:
        "The first workflow is the activation moment — the hardest step for every new user. Lowering that friction with natural language flow generation has the broadest reach (every new user faces this barrier) and the highest impact on the metric that matters most: activation rate.",
    },
  ],
  quizXp: 30,
};
