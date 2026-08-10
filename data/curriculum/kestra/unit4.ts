import type { Unit } from "@/data/types";

export const kestraUnit4: Unit = {
  id: "unit4",
  title: "Kestra's AI Strategy",
  description:
    "The four AI tools Kestra shipped in 1.0, how AI Agents work in depth, the vision from static workflows to agentic systems, multi-agent patterns, human-in-the-loop, and what's still missing — the product frontier.",
  companySlug: "kestra",
  goTerm: "Amashi",
  goReading: "あまし",
  goMeaning:
    "Thickness — influence that constrains future moves without directly scoring. Kestra's AI infrastructure is amashi: it doesn't win customers immediately, but it constrains competitors from entering the agentic orchestration space without replicating what Kestra has already built.",
  color: "crimson",
  lessons: [
    {
      id: "4-1",
      unitId: "unit4",
      companySlug: "kestra",
      title: "The Four AI Tools: What Kestra Built",
      tldr:
        "Kestra 1.0 shipped four AI capabilities that operate at different layers: MCP Resources (connect AI tools to live Kestra docs), AI Copilot (YAML generation in the UI), AI Agents (autonomous orchestration at runtime), and Agent Skills (extend Kestra expertise into dev environments). Each solves a different problem.",
      skills: ["AI product inventory", "Feature differentiation", "AI tooling landscape"],
      xp: 20,
      content: [
        {
          heading: "The four layers of Kestra's AI strategy",
          body: `Kestra's AI capabilities operate at four distinct layers, solving different problems for different users:\n\n**Layer 1: MCP Resources — AI coding tools get live Kestra knowledge**\nKestra exposes its documentation and live instance state via the Model Context Protocol (MCP). AI coding assistants like Claude Code and Cursor connect to this MCP server and query live documentation at runtime rather than relying on training data that may be months out of date.\n\n*Who benefits:* developers writing Kestra flows inside AI-assisted coding environments\n*What it solves:* LLM hallucinations about Kestra's plugin API (outdated task parameters, deprecated options, wrong configuration syntax)\n*The product insight:* this is an infrastructure play, not a feature play. It makes all AI assistance for Kestra more accurate — a rising tide for every other AI tool.\n\n**Layer 2: AI Copilot — YAML from natural language in the UI**\nBuilt into the Kestra UI, Copilot generates and refines flow definitions from natural language prompts. Describe what the flow should do; Copilot generates the YAML. Then iterate: "now add a retry on the HTTP task" or "add a Slack notification on failure."\n\n*Who benefits:* new Kestra users who haven't memorized plugin syntax; experienced users who want to scaffold quickly\n*What it solves:* the blank canvas problem — starting a new flow from scratch is slow; Copilot gives a working starting point\n*The product insight:* YAML is dramatically easier to generate correctly than Python code. This is why Copilot is a stronger product bet for Kestra than for Airflow or Prefect.\n\n**Layer 3: AI Agents — autonomous orchestration at runtime**\nA first-party plugin (\`io.kestra.plugin.ai.agent.AIAgent\`) that runs an autonomous agent inside a Kestra flow. The agent has an LLM, a system message (its role and constraints), tools (web search, task execution, calling other flows), and optional memory. It runs in a loop, deciding which tool to call next, until the objective is met or a termination condition is reached.\n\n*Who benefits:* engineering teams building AI-powered automation that adapts based on what it finds\n*What it solves:* the gap between "static workflow" (predetermined steps) and "adaptive workflow" (agent decides what to do next based on context)\n\n**Layer 4: Agent Skills — Kestra expertise in dev environments**\nStructured knowledge files (similar in concept to CLAUDE.md) that teach external AI coding agents how to generate valid Kestra flows, use \`kestractl\`, and operate in Kestra environments. These are distributed to developer tools so any AI coding assistant can "know" Kestra even if it wasn't in the training data.`,
          goAnalogy: {
            term: "Tesuji",
            reading: "てすじ",
            meaning:
              "A clever tactical move that accomplishes more than it appears. The MCP Resources tool is tesuji: it seems like infrastructure work but it improves the quality of every other AI capability built on top of it.",
          },
        },
        {
          heading: "The AI Copilot in depth",
          body: `**How Copilot actually works:**\nThe user types a natural language description in the Kestra UI editor: "Create a flow that reads a CSV from S3, processes each row, calls the OpenAI API to classify the content, and writes the results back to S3." Copilot calls an LLM with the description + Kestra's YAML schema + relevant plugin documentation, and returns a valid YAML flow.\n\n**Iterative refinement:**\nCopilot isn't just generation — it supports incremental editing. "Add exponential retry to the OpenAI task" or "add a Slack alert if any tasks fail" are follow-up prompts that modify the existing flow rather than regenerating from scratch. This is how the UX stays productive: generate a base, refine iteratively.\n\n**The quality constraint:**\nCopilot output requires review. For simple flows with well-documented plugins, output quality is high. For complex flows with less common plugins or nuanced configuration, the output may need correction. The Copilot is a scaffold, not a finished product.\n\n**What enables Copilot at Kestra that's harder elsewhere:**\n- YAML has a defined schema — Kestra validates Copilot output against the schema before presenting it\n- Plugin documentation is structured — each plugin has defined properties, types, and examples that can be included in the LLM context\n- The Kestra UI can validate YAML in real-time and show errors before the user runs the flow\n\n**What it doesn't do yet:**\nCopilot doesn't generate flows that require complex conditional logic, multi-namespace coordination, or custom plugin configurations. It's strongest for standard integration flows and weakest for novel orchestration patterns.`,
        },
        {
          heading: "The strategic coherence of the four tools",
          body: `The four tools are not independent features — they're a deliberate stack:\n\n1. **MCP Resources** make the underlying knowledge accurate for all AI tools\n2. **Agent Skills** bring that accurate knowledge into developer environments (Claude Code, Cursor)\n3. **AI Copilot** uses that knowledge to generate flows in the UI\n4. **AI Agents** use the platform as runtime infrastructure for autonomous workflows\n\nThe insight: Kestra is not just adding AI features to an orchestration product. They're positioning the orchestration product as the platform for AI development — both as the tool developers use to build AI workflows (Copilot, Skills, MCP) and as the runtime infrastructure for AI agents (AI Agents task type).\n\n**The 1.0 announcement framing:**\nKestra described its strategic direction as moving on two axes:\n- *From manual YAML to natural language:* users describe what they want rather than writing every YAML property by hand (AI Copilot direction)\n- *From static to autonomous:* workflows evolve from predetermined task sequences to self-directing agents that determine their own execution paths (AI Agents direction)\n\nThis dual-axis framing is the product vision. The PM role is to advance both axes.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A developer is building Kestra flows inside VS Code using Claude Code. Why does the MCP Resource integration matter for their experience?",
          options: [
            "It lets Claude Code run Kestra flows directly from VS Code",
            "Claude Code's training data about Kestra's plugin API may be 6+ months old — properties changed, new plugins added, some deprecated. The MCP resource lets Claude Code query the live Kestra documentation at the moment the developer asks a question, so the suggestion reflects the actual current plugin API rather than outdated training data",
            "It allows Claude Code to see the developer's Kestra execution history",
            "It gives Claude Code access to Kestra's plugin source code for better suggestions",
          ],
          correct: 1,
          explanation:
            "Training data staleness is the root problem. Kestra ships new plugin versions frequently. A developer asking 'how do I configure the Anthropic Claude task?' will get wrong answers from an LLM working from 6-month-old training data. The MCP integration makes the answer current because the LLM fetches it from the live documentation rather than recalling it from training data.",
        },
        {
          type: "multiple-choice",
          question:
            "The AI Copilot and Blueprints both help users create flows faster. What's the key functional difference between them?",
          options: [
            "Copilot generates code; Blueprints are visual templates",
            "Blueprints are curated, quality-controlled templates for specific named use cases. Copilot generates custom flows from natural language for any described use case. Blueprints are 'I know what I want, show me a proven example.' Copilot is 'let me describe it and generate something custom.'",
            "Copilot is for enterprise users; Blueprints are for open-source users",
            "Blueprints require programming knowledge; Copilot does not",
          ],
          correct: 1,
          explanation:
            "The distinction is curation vs. generation. A Blueprint for 'S3 to Snowflake sync' is a tested, documented, error-handled template that Kestra's team has verified works correctly. Copilot generates a custom flow for your specific description — it may be correct, may need review. Both reduce time-to-value; they're complementary. A user who finds a Blueprint that matches their need should use the Blueprint (higher confidence). A user with a non-standard use case should use Copilot.",
        },
      ],
      resources: [
        {
          title: "Kestra Docs: AI Tools Overview",
          url: "https://kestra.io/docs/ai-tools",
          description: "The authoritative overview of all four AI capabilities: MCP Resources, AI Copilot, AI Agents, Agent Skills.",
        },
      ],
    },
    {
      id: "4-2",
      unitId: "unit4",
      companySlug: "kestra",
      title: "AI Agents in Depth",
      tldr:
        "How Kestra's AIAgent task type works: system messages, prompts, tools, memory, and the agent loop. How to compose multi-agent systems in Kestra. How human-in-the-loop integrates with agent workflows. The production constraints and what's still hard.",
      skills: ["AI agent architecture", "Agentic patterns", "Human-in-the-loop"],
      xp: 30,
      content: [
        {
          heading: "The AIAgent task type",
          body: `Kestra's AI Agent plugin (\`io.kestra.plugin.ai.agent.AIAgent\`) provides autonomous orchestration capabilities within a flow. The core configuration:\n\n\`\`\`yaml\ntasks:\n  - id: research_agent\n    type: io.kestra.plugin.ai.agent.AIAgent\n    systemMessage: |\n      You are a research assistant. Your job is to answer questions\n      about companies using publicly available information.\n      Always cite your sources. If you cannot find reliable information,\n      say so rather than speculating.\n    prompt: "{{ inputs.research_query }}"\n\`\`\`\n\n**System message:** defines the agent's role, behavioral constraints, and operating guidelines. This is the "character" of the agent — what it's supposed to do and what it must not do. Well-crafted system messages are the primary quality lever for agent behavior.\n\n**Prompt:** the specific input for this agent execution. Often dynamically rendered from Pebble expressions, allowing the same agent definition to serve different queries.\n\n**Provider configuration via Plugin Defaults:**\nTo avoid repeating LLM provider configuration in every agent task, Kestra recommends using plugin defaults at the namespace level:\n\n\`\`\`yaml\npluginDefaults:\n  - type: io.kestra.plugin.ai\n    values:\n      provider:\n        type: ANTHROPIC\n        apiKey: "{{ secret('ANTHROPIC_API_KEY') }}"\n        modelName: claude-sonnet-4-5\n\`\`\`\n\nThis sets the provider for all AI plugin tasks in the namespace — change the model once to affect all agents.`,
          goAnalogy: {
            term: "Jōseki",
            reading: "じょうせき",
            meaning:
              "A studied pattern of play — a proven sequence for a local situation. A well-defined AIAgent system message is jōseki: a proven behavioral pattern that produces reliable results in the local context.",
          },
        },
        {
          heading: "Tools, memory, and the agent loop",
          body: `**Tools the agent can use:**\nKestra's AI Agent has access to built-in tools that extend what the agent can do beyond reasoning:\n\n- **Web search:** the agent can query the web for current information\n- **Task execution:** the agent can trigger other Kestra tasks (run a Python script, call an API, query a database) as part of its decision-making\n- **Flow calling:** the agent can trigger other Kestra flows as subflows, enabling multi-agent systems where specialized agents are invoked on demand\n\n**The agent loop:**\nThe agent runs an iterative perceive → reason → act → observe cycle:\n1. Receive the prompt (perceive)\n2. Call the LLM to decide what to do next (reason)\n3. Execute a tool if the LLM decides to use one (act)\n4. Observe the tool's output\n5. Pass the output back to the LLM with updated context (perceive again)\n6. Repeat until the LLM produces a final answer or a termination condition is met\n\n**Memory:**\nKestra's AI Agent supports memory — context that persists across agent steps within a single execution. The memory allows the agent to build on earlier steps: "I found X in step 2, so in step 5 I should check Y." Without memory, each LLM call starts fresh and the agent can't reason across steps.\n\n**What controls the loop:**\n- **Max iterations:** prevent runaway agent loops that consume tokens indefinitely\n- **Termination conditions:** the agent signals completion by producing a final answer in a defined format\n- **Kestra's flow-level timeout:** the entire agent task is subject to Kestra's task timeout, providing a hard cost/time ceiling`,
        },
        {
          heading: "Multi-agent systems and human-in-the-loop",
          body: `**Multi-agent patterns in Kestra:**\nBecause an agent can trigger other flows as subflows, multi-agent systems emerge naturally:\n\n*Sequential:* Agent A runs a research task, its output flows into Agent B which runs an analysis task, Agent C writes the report. Each is a separate AIAgent task in the same flow.\n\n*Fan-out:* A coordinator agent receives a complex request, breaks it into subtasks, and uses EachParallel to run specialized agents in parallel — each one a separate AIAgent in a separate subflow. The coordinator waits for all to complete and aggregates results.\n\n*Router pattern:* a lightweight classification step (or a simple AIAgent) determines which specialized agent to invoke based on the nature of the request — a Switch flowable task routes to the appropriate agent.\n\n**Human-in-the-loop with AI agents:**\nKestra's Pause task integrates naturally with agent workflows:\n\n\`\`\`yaml\ntasks:\n  - id: agent_draft\n    type: io.kestra.plugin.ai.agent.AIAgent\n    prompt: "Draft a response to this customer complaint: {{ inputs.complaint }}"\n\n  - id: human_review\n    type: io.kestra.core.tasks.flows.Pause\n    timeout: PT24H\n    onTimeout: FAIL\n    inputs:\n      - id: approved\n        type: BOOLEAN\n      - id: edited_response\n        type: STRING\n        required: false\n\n  - id: send_response\n    type: io.kestra.plugin.smtp.Email\n    to: "{{ inputs.customer_email }}"\n    body: "{{ outputs.human_review.edited_response ?? outputs.agent_draft.output }}"\n\`\`\`\n\nThe Pause task blocks the flow execution, sends a notification (email, Slack), and waits up to 24 hours for a human to review the agent's draft and either approve it or submit an edited version. The flow then uses whichever response is available. If no human responds within 24 hours, the flow fails (or an alternative path can be defined).`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "An agent runs a 30-step research loop and fails at step 28 because the web search tool returns an error. What happens in Kestra, and what would need to change to make this recoverable?",
          options: [
            "Kestra restarts the agent from step 1 automatically",
            "The AIAgent task fails; the agent state and the 28 steps of work are lost. Recovery requires: either retry logic on the web search tool (not the whole agent), or breaking the agent into smaller subflows with checkpoints so that step 28's failure triggers a subflow retry from step 27's checkpoint — not from step 1",
            "Kestra pauses the agent at step 28 and waits for the tool error to resolve",
            "The agent saves its state automatically and resumes from step 28 on the next execution",
          ],
          correct: 1,
          explanation:
            "This is a real production limitation of current AI agent orchestration. The agent's internal state (the 28 steps of reasoning) isn't automatically checkpointed in a way that enables resumption from an arbitrary step. Recovery strategies: retry at the tool level (for transient errors), or architect the agent as a series of smaller agents with Kestra subflows between them (each subflow is independently resumable). The checkpoint hybrid pattern — smaller agents with observable handoffs — is the production answer for long-running agentic workflows.",
        },
        {
          type: "multiple-choice",
          question:
            "A team wants to build: 'An agent that researches a company, drafts an outreach email, pauses for a human to review and optionally edit it, then sends the approved version.' Which Kestra components are needed?",
          options: [
            "One AIAgent task with web search and email tools",
            "Two AIAgent tasks (research, draft) + a Pause task (human review) + an email Runnable task — all connected in a sequential flow. The Pause task blocks between draft and send, collects the human's approval and optional edit, and the email task uses the final version",
            "A single AIAgent task with memory and a built-in pause mechanism",
            "An AIAgent task and a webhook trigger that resumes the flow after approval",
          ],
          correct: 1,
          explanation:
            "The correct architecture uses Kestra's composability: the research and drafting are AIAgent tasks, the human review is a first-class Pause task (not a feature of the AIAgent), and the email sending is a separate Runnable task. This separation means each component is independently observable, retryable, and testable. The Pause task is the right abstraction for human-in-the-loop — it's designed for exactly this pattern, with timeout handling and input collection built in.",
        },
        {
          type: "scenario",
          prompt:
            "A customer wants to run 1,000 customer support tickets through an AI agent that classifies them, drafts responses, and for tickets classified as 'high-risk,' pauses for human review before sending. Design the Kestra flow architecture.",
          sampleAnswer:
            "The architecture has three stages: (1) Classification agent — an AIAgent task that classifies each ticket as 'standard' or 'high-risk.' Run this with EachParallel over all 1,000 tickets with a concurrency limit (e.g., 50 concurrent) to respect the LLM API rate limits. Each classification produces a typed output with the category and a confidence score. (2) Branching — a Switch flowable task routes each ticket: standard tickets go to an auto-response path (AIAgent drafts response → email task sends it); high-risk tickets go to a human-review path. (3) Human-review path — AIAgent drafts the response, then a Pause task blocks with a 48-hour timeout, notifying the responsible support agent via Slack or email. The support agent reviews the draft, optionally edits it, and approves. The email task then sends the final version. Key production considerations: the classification agent needs retry logic for API failures; the Pause task needs timeout handling (what happens if no human responds in 48 hours — fail, auto-escalate, or use the draft as-is?); cost tracking via execution metadata should be set up to monitor total token spend across all 1,000 tickets; and an execution-level failure handler should alert if more than 5% of tickets fail the classification step.",
          keyPoints: [
            "EachParallel with concurrency limits for the fan-out step — prevents API rate limit exhaustion",
            "Switch flowable task for branching between standard and high-risk paths",
            "Pause task is the right abstraction for human review — not an AI feature, a workflow feature",
            "Production considerations: retry, timeout handling, cost tracking, failure alerting",
          ],
        },
      ],
      resources: [
        {
          title: "Kestra Docs: AI Agents",
          url: "https://kestra.io/docs/ai-tools/ai-agents",
          description: "Full documentation for the AIAgent task type: configuration, tools, memory, and examples.",
        },
      ],
    },
    {
      id: "4-3",
      unitId: "unit4",
      companySlug: "kestra",
      title: "From Static Workflows to Agentic — and What's Still Missing",
      tldr:
        "The product vision Kestra articulated in 1.0: moving from 'manual YAML → natural language' and 'static → autonomous.' What's been built, what the frontier looks like, and what a PM would identify as the gaps between the current product and the full vision.",
      skills: ["Product vision", "Gap analysis", "Roadmap thinking"],
      xp: 25,
      content: [
        {
          heading: "The 1.0 vision: two axes",
          body: `Kestra explicitly described their strategic direction in the 1.0 release as movement on two axes:\n\n**Axis 1: From manual YAML → natural language**\nThe direction: users should be able to describe what they want in plain language rather than writing every YAML property manually. The progression:\n- Current: AI Copilot generates YAML from natural language descriptions in the UI\n- Near-term: iterative refinement becomes more capable, handling complex multi-task flows accurately\n- Long-term: users describe complete automation strategies in natural language and Kestra generates, validates, and deploys the flows\n\n**Axis 2: From static workflows → autonomous agents**\nThe direction: workflows evolve from predetermined task sequences (the flow always does A then B then C) to self-directing agents that determine their own execution paths based on what they find.\n- Current: AI Agent task type (single agent with tools and memory running within a flow)\n- Near-term: first-class multi-agent coordination patterns, better agent observability, production-grade agent error handling\n- Long-term: an "agentic orchestration" layer where agents dynamically compose flows based on objectives rather than following predefined workflows\n\n**The tension between axes:**\nAxis 1 (natural language to YAML) targets simplicity and accessibility. Axis 2 (agentic autonomy) targets power and adaptability. As agents become more autonomous, the YAML model becomes less relevant — a fully autonomous agent doesn't need a user to write its workflow. The PM question: how do these axes intersect? At what point does "an agent that orchestrates other agents" replace "a human who writes a flow that calls agents"?`,
          goAnalogy: {
            term: "Shicho",
            reading: "しちょう",
            meaning:
              "A ladder sequence — the outcome is determined by distant board conditions. The two-axis strategy is shicho: the outcome of each direction is determined by how LLM capability evolves — conditions that Kestra doesn't control but must anticipate.",
          },
        },
        {
          heading: "What's been built vs. what the vision requires",
          body: `**Built in 1.0 (the foundation):**\n- AIAgent task type with tools (web search, task execution, flow calling) and memory\n- AI Copilot for YAML generation in the UI\n- MCP Resources for live documentation access\n- Agent Skills for external coding assistant integration\n- Human-in-the-loop via Pause task (existing feature, but now central to AI workflow patterns)\n\n**The gap between current state and full vision:**\n\n**Observability for AI runs:**\nKestra's execution model tracks task-level state. But for an agent that makes 20 LLM calls across a 30-minute execution, the current observability shows: "the AIAgent task ran for 30 minutes and produced this output." What it doesn't show natively: each LLM call, which tool was called at which step, what the agent's reasoning was at each decision point, what each step cost in tokens. Per-step agent traces require deeper instrumentation than currently exists.\n\n**Cost tracking as a first-class metric:**\nAI runs have a direct financial cost that standard workflow executions don't. Token usage × price per token = execution cost. This should be a first-class metric in Kestra's execution UI — visible alongside duration and status. Currently, cost tracking requires custom logging within the flow.\n\n**Agent eval and quality gates:**\nKestra has unit tests for flows (introduced in 1.0). But testing AI agent behavior is fundamentally different from testing deterministic tasks — the same prompt can produce different outputs. An eval framework that tests agent behavior against a representative set of scenarios, with human-rated quality scores, doesn't exist in Kestra today.\n\n**Long-running agent durability:**\nFor agent loops that run for hours (research tasks, document processing at scale), the current architecture doesn't provide Temporal-grade durability. If the worker process restarts mid-agent-loop, the loop starts from the beginning.`,
        },
        {
          heading: "The PM's frontier: what to build next",
          body: `Given the gap analysis, the most valuable next investments for the AI PM to evaluate:\n\n**High value, moderate effort:**\n1. **Per-step agent execution traces** — log each LLM call, tool invocation, and agent reasoning step as a sub-execution in Kestra's execution DAG. This gives operators visibility into what the agent did and makes debugging possible without custom logging.\n\n2. **Cost tracking as a native execution metric** — add token usage and estimated cost to the execution metadata for every AI Agent run. Display in the UI alongside duration. Alert when cost exceeds a threshold.\n\n3. **Confidence thresholds and escalation paths** — native configuration on AIAgent tasks to route to human review (Pause task) when the agent's confidence score falls below a threshold. This operationalizes the human-in-the-loop pattern without requiring users to implement it manually.\n\n**High value, high effort:**\n4. **Eval framework for AI workflows** — a native way to define test scenarios for agent tasks, run them, and track agent quality over time. This is the production AI quality story.\n\n5. **Agent checkpoint durability** — for long-running agents, periodic state checkpointing so that a worker failure mid-loop resumes from the last checkpoint rather than from the beginning.\n\n**The PM's decision:** which of these to sequence first depends on which customer pain is most acute — a choice that comes from customer discovery, not theory.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A customer runs AI agent workflows in Kestra and says: 'When an agent run fails, we can't tell what it was doing before it failed — it's a black box.' Which product gap does this describe, and what's the solution direction?",
          options: [
            "This is an agent quality problem — better system messages would prevent failures",
            "This is an observability gap — per-step agent execution traces logged as sub-executions in the Kestra DAG would let operators see exactly which LLM call, tool invocation, or reasoning step preceded the failure",
            "This is a logging problem — agents should write more verbose logs to their task output",
            "This is a retry problem — better retry configuration would prevent the failure from mattering",
          ],
          correct: 1,
          explanation:
            "The customer is describing the observability gap: the current AIAgent task is a black box from the execution perspective — Kestra sees it as a single task that either succeeds or fails. Per-step traces would expose the internal agent loop as observable sub-executions: step 1 was an LLM call with these inputs/outputs, step 2 was a web search that returned this, step 3 was another LLM call that failed. This makes post-failure debugging possible and changes the agent from 'opaque' to 'auditable.'",
        },
        {
          type: "multiple-choice",
          question:
            "Kestra's Pause task enables human-in-the-loop for AI workflows. What's the most important configuration to get right for production use, and why?",
          options: [
            "The notification type (Slack vs. email) — humans need to see the review request",
            "The timeout and onTimeout behavior — if no human responds, the flow must do something defined: fail, use the AI's draft, or escalate to a backup reviewer. An undefined timeout that hangs indefinitely is a production incident waiting to happen",
            "The input validation — the human's response must be the right data type",
            "The maximum number of concurrent Pause tasks — too many simultaneous reviews overwhelm the team",
          ],
          correct: 1,
          explanation:
            "Timeout handling is the most critical production configuration because it's the failure mode that happens silently and at scale. A reviewer who's on vacation, sick, or simply missed the notification will leave flows paused indefinitely without a timeout. The onTimeout behavior should be a deliberate product decision for each use case: for a critical approval (a financial transaction), onTimeout should fail and alert. For a lower-stakes review (a marketing email draft), onTimeout might auto-approve the AI's draft. Both are valid; neither should be left undefined.",
        },
      ],
      resources: [
        {
          title: "Kestra 1.0 Release Post",
          url: "https://kestra.io/blogs/release-1-0",
          description: "The strategic framing of the two-axis vision: manual-to-natural-language and static-to-autonomous.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "Why does Kestra use Plugin Defaults for LLM provider configuration rather than requiring it on each AIAgent task?",
      options: [
        "Security: API keys should never appear in task configurations",
        "Consistency and change management: setting the model once at the namespace level means all agent tasks in that namespace use the same provider configuration, and changing the model (e.g., upgrading from claude-sonnet-4-5 to claude-opus-5) requires updating one place, not every individual task definition",
        "Performance: plugin defaults are cached and reduce configuration overhead",
        "Compliance: enterprise customers require centralized API key management",
      ],
      correct: 1,
      explanation:
        "Plugin Defaults are primarily a consistency and change management feature. When a namespace has 20 flows each with AIAgent tasks, hardcoding the model name in every task means a model upgrade requires 20 changes. Plugin Defaults make it one change. This also enables A/B testing: set the default to one model for the staging namespace and another for production, and flows inherit the right model without changes. Security (API keys via secrets) is handled separately.",
    },
    {
      type: "multiple-choice",
      question: "What is the most significant architectural limitation of Kestra's current AIAgent implementation for production AI workflows?",
      options: [
        "It only supports a limited number of LLM providers",
        "Agent state isn't checkpointed during execution — if the worker process fails mid-loop, the entire agent loop restarts from the beginning, making long-running agents unreliable for multi-hour tasks",
        "The web search tool isn't available in all regions",
        "Agents can only be used in sequential flows, not parallel ones",
      ],
      correct: 1,
      explanation:
        "State durability is the core production limitation for long-running agents. A 3-hour research agent that fails at hour 2.5 due to a worker restart restarts from hour 0 — all the work is lost. This is acceptable for short agent runs (under 30 minutes) where restarting is cheap, but unacceptable for long-running tasks where the agent's accumulated context (what it found, what it decided) is the primary value. This is where Temporal's durable execution model has a structural advantage for the most demanding agentic use cases.",
    },
    {
      type: "multiple-choice",
      question: "A customer asks: 'Can Kestra's AI Copilot generate an agent that monitors our Snowflake warehouse costs and automatically pauses expensive queries?' Is this in Copilot's current capability range?",
      options: [
        "Yes — Copilot can generate any flow that can be expressed in Kestra YAML",
        "Partially — Copilot can generate the YAML structure of the monitoring flow (Snowflake query + alerting tasks + schedule trigger) but the autonomous decision-making (detect expensive query → decide whether to pause it → take action) requires an AIAgent task that Copilot can scaffold but not fully configure without user customization of the system message and tool definitions",
        "No — Copilot doesn't support flows with AIAgent tasks",
        "Yes — Copilot has pre-built templates for Snowflake cost monitoring",
      ],
      correct: 1,
      explanation:
        "Copilot's capability boundary is 'scaffold, not fully configure.' For a flow with standard Kestra tasks (Snowflake query, Slack alert, schedule trigger), Copilot can generate high-quality YAML that works with minimal editing. For an AIAgent task, Copilot can generate the task structure but the system message — which defines exactly how the agent should reason about query costs and what actions it should take — requires domain-specific configuration that Copilot can draft but the user must validate and refine. This is the right mental model: Copilot is a scaffold, not a one-click production generator.",
    },
  ],
  quizXp: 30,
};
