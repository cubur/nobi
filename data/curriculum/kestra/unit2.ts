import type { Unit } from "@/data/types";

export const kestraUnit2: Unit = {
  id: "unit2",
  title: "Kestra's Architecture & Core Concepts",
  description:
    "How Kestra actually works: flows, tasks, triggers, executions, namespaces, the plugin system, data flow between tasks, and the execution lifecycle. The internal model you need to understand before making product decisions.",
  companySlug: "kestra",
  goTerm: "Katachi",
  goReading: "かたち",
  goMeaning:
    "Shape — the efficiency of a position's form. Kestra's architecture has good katachi: each component has a clear role, and the relationships between them are clean. Understanding the shape lets you recognize where it can be extended.",
  color: "golden",
  lessons: [
    {
      id: "2-1",
      unitId: "unit2",
      companySlug: "kestra",
      title: "Flows, Tasks, and the Execution Model",
      tldr:
        "A flow is Kestra's core abstraction: a YAML document that defines what to run, in what order, with what inputs. Tasks are the steps inside a flow. Executions are the runtime instances. Namespaces organize everything. These four concepts are the vocabulary for every product conversation.",
      skills: ["Core concepts", "YAML model", "Execution lifecycle"],
      xp: 25,
      content: [
        {
          heading: "Flows: the fundamental unit",
          body: `A **flow** in Kestra is a YAML document that defines:\n- What namespace it belongs to (organization and access control)\n- What triggers it (schedule, webhook, event, or manual)\n- What inputs it accepts (typed parameters validated at runtime)\n- What tasks it runs (in what order and with what dependencies)\n- What outputs it produces\n\nA minimal flow looks like this:\n\n\`\`\`yaml\nid: hello-world\nnamespace: my.team\n\ntasks:\n  - id: greet\n    type: io.kestra.plugin.core.log.Log\n    message: Hello, {{ inputs.name }}!\n\ninputs:\n  - id: name\n    type: STRING\n\ntriggers:\n  - id: daily\n    type: io.kestra.plugin.core.trigger.Schedule\n    cron: "0 9 * * *"\n\`\`\`\n\n**What this expresses declaratively:** every morning at 9am, run the \`greet\` task with the \`name\` input. No Python environment, no import statements, no dependency management — just the definition.\n\n**Flows are versioned.** Every time you save a flow, Kestra keeps the history. You can compare revisions, roll back to a previous version, and see exactly what changed. This is a first-class feature, not an afterthought — it enables GitOps workflows where flows are committed to a repository and synced into Kestra via the Git Sync plugin.`,
          goAnalogy: {
            term: "Goban",
            reading: "ごばん",
            meaning:
              "The board itself — the space where play happens. A flow is the goban: it defines the space where tasks execute, with its own rules (inputs, triggers, namespace) that govern the game played within it.",
          },
        },
        {
          heading: "Tasks: runnable vs. flowable",
          body: `Tasks come in two fundamental types:\n\n**Runnable tasks** perform actual work: call an API, run a SQL query, execute a Python script, send a Slack message, transfer a file. They have inputs, they do something, they produce outputs. Most of the 1300+ Kestra plugins are runnable tasks.\n\n**Flowable tasks** orchestrate other tasks — they define control flow logic rather than doing work themselves:\n- **Sequential** (default): run tasks one after another\n- **Parallel**: run multiple tasks concurrently, wait for all to complete\n- **Switch**: branch to different task sequences based on a value\n- **ForEachItem**: iterate over a list and run a task (or subflow) for each item\n- **If**: conditional execution based on an expression\n- **Pause**: stop and wait for human approval or a timeout\n- **EachParallel**: iterate in parallel\n\nThe distinction matters for product thinking: when users ask for "more control flow options," they're asking for new flowable task types. When they ask for "more integrations," they're asking for new runnable task types (plugins). These are very different engineering investments.\n\n**Task outputs and inputs are strongly typed.** A task that fetches data from an API produces a typed output object. The next task references that output with Pebble expression syntax: \`{{ outputs.previousTask.someField }}\`. This creates a data contract between tasks that Kestra validates at flow definition time, not just at runtime.`,
        },
        {
          heading: "Executions, namespaces, and the execution lifecycle",
          body: `**Executions** are runtime instances of a flow. Every time a flow runs — whether triggered by a schedule, webhook, manual start, or another flow — it creates an execution. Each execution has:\n- A unique ID\n- A state: CREATED → RUNNING → SUCCESS / FAILED / KILLED / PAUSED\n- Task run records: one per task, each with its own state, inputs, outputs, and logs\n- Execution labels: key-value pairs for filtering and searching\n\nThe execution lifecycle is what makes observability possible. You can filter all executions by flow, namespace, state, label, or time range. You can drill into a specific execution and see exactly which task failed, what its inputs were, and what error it produced. This is the core value of an orchestration platform over cron — every run is a first-class record, not a line in a log file.\n\n**Namespaces** are the organizational layer. They work hierarchically (\`prod.data.finance\`, \`prod.data.marketing\`) and define:\n- Access control: which teams can see and modify which flows\n- Plugin defaults: default configurations that apply to all flows in a namespace (e.g., always use this AWS region)\n- Secrets inheritance: secrets defined at the namespace level are available to all flows within it\n- Task defaults: per-task-type configuration that overrides the defaults for the entire namespace\n\nFor a PM, namespaces are the enterprise feature that enables multi-tenant deployments. A bank running Kestra across 20 different business units uses namespaces to ensure each unit's workflows are isolated from others.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A user asks: 'Can Kestra run 100 API calls in parallel and wait for all of them to finish before continuing?' Which task type addresses this?",
          options: [
            "A Runnable task with a parallel flag",
            "The EachParallel flowable task: iterate over a list of 100 items, run a task (or subflow) for each item in parallel, continue when all complete",
            "Multiple Sequential tasks with async configuration",
            "A custom plugin that handles parallelism internally",
          ],
          correct: 1,
          explanation:
            "EachParallel is the correct flowable task for this pattern. The user defines a list (the 100 items to call the API with), wraps the API call task in an EachParallel, and Kestra fans out to 100 concurrent task runs and fans back in when they complete. This is a flowable task — it doesn't do the work itself, it controls how the work is distributed. The API call is the runnable task inside it.",
        },
        {
          type: "multiple-choice",
          question:
            "A data engineering team wants to use Kestra but their security team is asking: 'How do we ensure the finance team's workflows can't access the marketing team's data or credentials?' What's the Kestra answer?",
          options: [
            "Each team runs a separate Kestra installation",
            "Namespaces with role-based access control: finance workflows live in the finance namespace with secrets scoped to that namespace, marketing workflows live in the marketing namespace. Enterprise RBAC controls which users can see, execute, or modify flows in each namespace",
            "Flows are isolated by default and can't share credentials",
            "API keys are managed outside Kestra and passed as environment variables",
          ],
          correct: 1,
          explanation:
            "Namespace-based isolation with RBAC is Kestra's answer to multi-tenant enterprise deployments. Secrets, task defaults, and plugin configurations scoped to a namespace aren't visible or accessible to flows in other namespaces. This is an enterprise feature — the open-source version has namespaces for organization, the enterprise version adds the RBAC controls that security teams require before approving a production deployment.",
        },
        {
          type: "scenario",
          prompt:
            "A customer says: 'We want to run a workflow that calls an LLM for each of 10,000 rows in a database table.' Walk through how this would work in Kestra and what product considerations arise.",
          sampleAnswer:
            "The basic structure is: (1) a Runnable task queries the database and produces a list of rows as output; (2) a ForEachItem or EachParallel flowable task iterates over the rows; (3) inside the loop, a Runnable task calls the LLM with each row's data and produces output. The product considerations: first, 10,000 concurrent LLM calls would exhaust any API rate limit — the customer needs Kestra's concurrency control to cap parallel executions (e.g., max 50 concurrent). Second, some of those 10,000 calls will fail due to rate limiting or timeouts — the retry configuration on the LLM task needs to be set with exponential backoff. Third, what happens if 50 of the 10,000 fail after retries? Does the flow fail entirely, or does it continue and report which rows failed? This is the error handling / allowedFailures configuration. Fourth, 10,000 LLM calls has a real cost — the customer should instrument this with Kestra's execution metrics to understand cost per run. These are all things that a cron script or a Python script would require custom engineering to handle; Kestra handles them natively. This is the product story.",
          keyPoints: [
            "Concurrency limits prevent API rate limit exhaustion — native Kestra feature",
            "Retry with backoff on LLM task types handles transient failures without restarting from row 1",
            "Error handling / allowedFailures determines whether partial failures fail the whole execution",
            "Kestra's execution metrics track cost and performance per run natively",
          ],
        },
      ],
      resources: [
        {
          title: "Kestra Docs: Workflow Components",
          url: "https://kestra.io/docs/workflow-components",
          description: "The authoritative reference for all workflow components — flows, tasks, triggers, inputs, outputs, and more.",
        },
      ],
    },
    {
      id: "2-2",
      unitId: "unit2",
      companySlug: "kestra",
      title: "Data Flow, Reliability Primitives & the Plugin System",
      tldr:
        "How data moves between tasks (outputs, inputs, the KV store), how Kestra handles failure (retries, timeouts, error handlers, SLAs), and how the plugin ecosystem works — 1300+ plugins, all JAR-based, versioned independently from the core platform.",
      skills: ["Data flow", "Reliability", "Plugin architecture"],
      xp: 25,
      content: [
        {
          heading: "Data flow between tasks",
          body: `**Task outputs and Pebble expressions:**\nWhen a task completes, its outputs are accessible to subsequent tasks via Pebble template expressions:\n\n\`\`\`yaml\ntasks:\n  - id: fetch_data\n    type: io.kestra.plugin.http.Request\n    uri: https://api.example.com/data\n\n  - id: process\n    type: io.kestra.plugin.core.log.Log\n    message: "Got {{ outputs.fetch_data.body }}"\n\`\`\`\n\nPebble is Kestra's templating engine — a Java implementation of Jinja2-style expressions. It evaluates \`{{ }}\` expressions at runtime, providing access to: task outputs, flow inputs, execution metadata, environment variables, secrets, and KV store values. Every dynamic value in a Kestra flow goes through Pebble.\n\n**Internal storage for large outputs:**\nWhen tasks produce large data (a CSV file, a JSON response with thousands of records), Kestra stores them in internal storage (backed by local filesystem, S3, GCS, or Azure Blob) rather than in memory. Subsequent tasks reference these stored artifacts by URI. This is what makes Kestra work for data-heavy workflows without running out of memory.\n\n**The KV Store:**\nKestra's built-in Key-Value store provides state persistence across multiple flow executions. A flow run on Monday can write a value to the KV store; a flow run on Tuesday can read it. This is how Kestra handles stateful orchestration patterns: "only process records created after the last successful run" or "track which items have been processed to avoid duplicates."`,
          goAnalogy: {
            term: "Aji",
            reading: "あじ",
            meaning:
              "Latent potential — possibilities that remain in a position even after it seems settled. Task outputs are aji: they create potential in the flow that can be activated by subsequent tasks in ways not determined at flow design time.",
          },
        },
        {
          heading: "Reliability primitives",
          body: `**Retries:**\nConfigured per task or at the flow level. Three strategies:\n- **Constant**: retry after a fixed delay (e.g., retry every 30 seconds, up to 5 times)\n- **Exponential**: retry with increasing delays (e.g., 1s → 2s → 4s → 8s) — appropriate for rate-limited APIs\n- **Random**: retry with a random delay within a range — useful for reducing thundering herd effects\n\n**Timeouts:**\nSet maximum execution duration at the task level (\`timeout: PT30M\`) or the flow level. A task that runs longer than its timeout is killed and fails. Combined with retries, timeouts prevent a single hung task from blocking the entire workflow indefinitely.\n\n**Error handling:**\nKestra has two error handling layers:\n- **Task-level**: an \`errors\` block inside a task defines what to run if that specific task fails\n- **Flow-level**: a global \`errors\` block defines what to run if any task in the flow fails (send an alert, log the failure, trigger a remediation flow)\n\n**SLAs (Service Level Agreements):**\nNew in Kestra 1.0. Define expected execution duration (\`maxDuration: PT2H\`) and Kestra automatically takes actions if the SLA is breached: kill the execution, send an alert, or trigger another flow. This turns "hope this runs in under 2 hours" into "automatically handle it if it doesn't."\n\n**Subflows:**\nA task that calls another flow as a step. Enables modularity: a complex workflow is broken into smaller, reusable flows that are composed via subflow tasks. Subflows run as separate executions, so they have their own observability and can be triggered independently for testing.`,
        },
        {
          heading: "The plugin system: 1300+ integrations",
          body: `**How plugins work:**\nEach Kestra plugin is a Java JAR file that implements the plugin API. Plugins define new task types (runnable and flowable), new trigger types, and new condition types. They're distributed via Maven repositories and installed into a Kestra instance without restarting the server.\n\n**Plugin versioning (new in 1.0):**\nBefore 1.0, all plugins had to be the same version as the Kestra server. This meant upgrading one plugin required upgrading all plugins — a risky operation for large deployments. Plugin versioning allows different plugin versions to coexist, enabling gradual migration: upgrade the Kafka plugin independently of the S3 plugin without touching the others.\n\n**What 1300+ plugins means:**\nThe plugin catalog covers:\n- **Cloud providers**: AWS (S3, Lambda, RDS, Glue, SageMaker, Redshift...), GCP (BigQuery, GCS, Dataflow...), Azure (Blob Storage, Data Factory...)\n- **Data systems**: Snowflake, Databricks, dbt, Fivetran, Kafka, Elasticsearch, MongoDB, PostgreSQL, MySQL...\n- **DevOps**: Docker, Kubernetes, Terraform, Ansible, Helm...\n- **Communication**: Slack, PagerDuty, email, GitHub, Jira...\n- **AI/LLM**: Anthropic (Claude), OpenAI, Google AI — and the AI Agent plugin\n- **Scripting**: Python, R, Node.js, Go, Bash, PowerShell\n\n**The open-source plugin contribution model:**\nMost plugins are open source and community-maintained. Kestra curates the official plugin library and maintains a core set of plugins. The breadth of the ecosystem is a network-effects moat: more plugins → more use cases covered → more users → more plugin contributions.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A data pipeline runs every night and needs to only process records created since the last successful run. How does Kestra support this stateful pattern?",
          options: [
            "Kestra automatically tracks which records were processed in each execution",
            "The KV store: the flow writes the last successful run timestamp to a KV key after completion; the next execution reads that key at the start to construct its query filter ('WHERE created_at > {{ kv('last_run_timestamp') }}')",
            "Execution history: the flow queries Kestra's API for the last successful execution time",
            "This pattern requires a database external to Kestra to maintain state",
          ],
          correct: 1,
          explanation:
            "The KV store is purpose-built for cross-execution state. The flow writes the timestamp after successfully processing; the next run reads it to filter. This keeps the state in Kestra rather than requiring an external database, and the KV key is namespaced (scoped to the flow's namespace), so different flows don't interfere with each other. Option C (querying the API) works but is more fragile and more complex to implement.",
        },
        {
          type: "multiple-choice",
          question:
            "A customer's data pipeline calls a third-party API that has a rate limit of 100 requests/minute and returns HTTP 429 when the limit is exceeded. Which Kestra configuration handles this?",
          options: [
            "Set maxRetries: 5 on the task",
            "Configure an exponential retry on the API task: 3 retries with a 30-second initial delay. When the task receives a 429, it waits 30s, then 60s, then 120s before each retry — respecting the rate limit window without manual intervention",
            "Set a 1-second delay between task executions in the flow",
            "Use a Parallel task to reduce individual request volume",
          ],
          correct: 1,
          explanation:
            "Exponential retry with appropriate initial delay is the correct solution for rate-limited APIs. The 30-60-120 second backoff gives the rate limit window time to reset. A constant retry (Option A with just maxRetries) would retry too quickly and continue hitting the limit. Adding a delay between ALL tasks (Option C) would slow the entire pipeline unnecessarily. The key is task-level exponential retry specifically on the API call task.",
        },
      ],
      resources: [
        {
          title: "Kestra Plugin Library",
          url: "https://kestra.io/plugins",
          description: "Browse the full plugin catalog — useful for understanding what integrations exist and identifying gaps.",
        },
        {
          title: "Kestra Docs: AI Tools",
          url: "https://kestra.io/docs/ai-tools",
          description: "The AI tools section covering Copilot, AI Agents, MCP Resources, and Agent Skills.",
        },
      ],
    },
    {
      id: "2-3",
      unitId: "unit2",
      companySlug: "kestra",
      title: "Blueprints, Triggers, and the Developer Experience",
      tldr:
        "How Kestra's trigger system works (schedule, webhook, flow-completion, polling), what Blueprints are and why they matter for adoption, and how the full developer experience — from the embedded editor to Git Sync — fits together.",
      skills: ["Triggers", "Developer experience", "Blueprints"],
      xp: 20,
      content: [
        {
          heading: "The trigger system",
          body: `Triggers define how a flow starts. Kestra supports four trigger categories:\n\n**Schedule triggers:** cron-based scheduling. Run at specific times, with timezone support, backfill for missed executions, and configurable catchup behavior. This is the simplest and most common trigger type for batch workflows.\n\n**Webhook triggers:** HTTP-based event triggers. An external system calls a Kestra-generated webhook URL → flow starts immediately. Used for: CI/CD integration (GitHub → Kestra), external event handling, and connecting to systems that push events rather than being polled.\n\n**Flow triggers (flow-completion events):** a flow starts when another flow completes — successfully, with a failure, or when a specific output condition is met. This enables event-driven pipeline compositions without central orchestration: Flow A completes, Flow B automatically starts. Multiple flows can listen to the same completion event.\n\n**Polling triggers:** periodically check an external source for new data or events. A Kafka trigger polls a topic for new messages; an S3 trigger watches a bucket for new files; a database trigger queries for new rows. When the condition is met, the flow executes. This is how Kestra handles event-driven patterns for systems that don't support webhooks.\n\n**For the PM:** the trigger system is what makes Kestra "event-driven" in its product positioning. Cron is the basic case. Webhooks, flow triggers, and polling triggers are what enable reactive, real-time workflows — including the "run the agent when new data arrives" pattern that's central to AI workflow use cases.`,
          goAnalogy: {
            term: "Sente",
            reading: "せんて",
            meaning:
              "Having the initiative — your move forces a response. A webhook trigger gives the workflow sente: an external event initiates the sequence, and Kestra responds rather than waiting for a scheduled moment.",
          },
        },
        {
          heading: "Blueprints: reducing time-to-value",
          body: `**What Blueprints are:**\nPre-built, ready-to-use flow templates covering common use cases. A Blueprint is a complete YAML flow that demonstrates a specific pattern: "sync data from Postgres to Snowflake," "run a dbt transformation after an S3 file arrives," "call an LLM to classify support tickets."\n\n**Why Blueprints matter for adoption:**\nNew users face a blank canvas problem. Even with 1300+ plugins and a clean YAML model, knowing how to compose them into a working flow for a specific use case requires expertise. Blueprints solve this: a user searches "LLM" in the Blueprint catalog, finds a template that does what they need, clicks to open it in the editor, customizes the namespace and credentials, and they're running in 10 minutes instead of 2 hours.\n\n**The AI Copilot and Blueprints:**\nThey serve related but distinct needs:\n- **Blueprint**: "I know what use case I want — show me a complete, working example"\n- **AI Copilot**: "I'll describe what I want in natural language — generate the YAML for me"\n\nBlueprints are curated and quality-controlled (they work, they have documentation, they handle errors). AI Copilot output is generated on-demand and requires review. Both reduce time-to-value; they're complementary not competitive.\n\n**The PM question for Blueprints:** which AI workflow patterns are common enough and generalizable enough to become official Blueprints? The "LLM-powered document classification" pattern is a Blueprint candidate. A highly customer-specific agent loop probably isn't. This curatorial decision is a product call.`,
        },
        {
          heading: "The developer experience ecosystem",
          body: `**The embedded editor:**\nKestra's UI includes a flow editor with syntax highlighting, auto-complete for task types and properties, inline documentation, and real-time validation. This is important because it means YAML editing is guided — users get error feedback before they run the flow, not after.\n\n**Git Sync:**\nNew plugin in 1.0. Bidirectional sync between Kestra and a Git repository: push changes from the UI → they're committed to Git; pull from Git → they're deployed to Kestra. This is how teams implement GitOps workflows: flows are the source of truth in Git, Kestra is the runtime. CI/CD pipelines can validate and deploy flow changes automatically.\n\n**The Playground:**\nA new 1.0 feature: an isolated execution environment for iteratively developing and testing flows without affecting production namespaces. Useful for developing new flows, testing edge cases, and demonstrating features.\n\n**MCP Resources:**\nKestra exposes its documentation and live instance state via the Model Context Protocol (MCP). This means AI coding assistants like Claude Code and Cursor can query Kestra's live documentation at runtime rather than relying on potentially stale training data. When a developer asks Claude Code "how do I configure the S3 trigger?", the MCP resource fetches the current documentation from the running Kestra instance.\n\n**Agent Skills:**\nStructured knowledge files (in the style of CLAUDE.md) that teach external AI coding agents how to generate valid Kestra flows and operate \`kestractl\`. This extends Kestra expertise into the developer's existing AI coding environment.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A machine learning team wants to automatically retrain their model when a new dataset file arrives in an S3 bucket. Which trigger type should they use?",
          options: [
            "Schedule trigger: check the S3 bucket every hour",
            "S3 polling trigger: watch the bucket for new files matching a pattern; when one arrives, start the retraining flow immediately with the file URI as an input",
            "Webhook trigger: the S3 bucket sends a notification to the Kestra webhook",
            "Flow trigger: another flow deposits the file and triggers the retraining flow on completion",
          ],
          correct: 1,
          explanation:
            "The S3 polling trigger is designed exactly for this: it watches a bucket for new objects matching a filter, and when one arrives, it triggers the flow with the file's URI as an input. This is reactive (starts as soon as the file arrives) without requiring the S3 bucket to support webhooks. Option A (hourly schedule) introduces up to 59 minutes of latency. Option C (S3 webhook) would work if S3 event notifications were configured to call Kestra's webhook URL — also a valid approach, but requires more infrastructure configuration.",
        },
        {
          type: "multiple-choice",
          question:
            "Why does Kestra's MCP Resource integration (connecting Claude Code and Cursor to live Kestra documentation) matter as a product feature?",
          options: [
            "It makes Kestra's documentation always available offline",
            "LLMs' training data about Kestra's API is always months out of date; the MCP resource enables AI coding assistants to fetch current task properties and configuration options from the live Kestra instance, reducing hallucinations and incorrect plugin usage",
            "It allows Kestra to track which developers are using AI coding assistants",
            "It's a marketing integration with Claude and Cursor to increase brand visibility",
          ],
          correct: 1,
          explanation:
            "The training data staleness problem is real and significant for rapidly evolving platforms like Kestra. Claude or Cursor trained on data from 6 months ago will suggest deprecated parameters or miss new plugin features. The MCP resource solves this by enabling the AI to fetch current documentation at query time from the live Kestra instance. This is a genuine product value: fewer incorrect plugin configurations, faster developer onboarding, and higher quality AI-assisted flow generation.",
        },
      ],
      resources: [
        {
          title: "Kestra Blueprint Gallery",
          url: "https://kestra.io/blueprints",
          description: "Browse the Blueprint catalog to understand what use cases Kestra considers important enough to provide as pre-built templates.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "A Kestra flow has 5 tasks. Task 3 fails. What does Kestra do by default, and what options exist?",
      options: [
        "The flow fails immediately; to continue, you must restart from task 1",
        "The flow marks task 3 as FAILED, marks the execution as FAILED, executes any flow-level error handler tasks, and preserves the execution record. A user can then replay the execution from task 3 (not task 1) after fixing the underlying issue",
        "Kestra automatically retries task 3 indefinitely until it succeeds",
        "The flow skips task 3 and continues with tasks 4 and 5",
      ],
      correct: 1,
      explanation:
        "The default Kestra behavior on task failure: the task fails, the execution fails, any flow-level error handlers run (alerts, cleanup tasks). The execution record is preserved with full context. Importantly, users can replay from the failed task — this is the recoverability property that separates orchestration from cron. Retry behavior is configurable per task; without explicit retry configuration, a task fails on its first error.",
    },
    {
      type: "multiple-choice",
      question: "What makes Kestra's plugin versioning (introduced in 1.0) significant for enterprise deployments?",
      options: [
        "It allows enterprise users to use plugins that are not open source",
        "Large enterprise deployments often can't do big-bang upgrades of all plugins simultaneously — plugin versioning allows upgrading the Kafka plugin to fix a bug without touching the S3, Snowflake, or dbt plugins, reducing risk and enabling incremental migration",
        "Plugin versioning enables rollback of specific plugin changes without rolling back the entire Kestra server",
        "It allows multiple teams to use different plugin versions for the same integration",
      ],
      correct: 1,
      explanation:
            "The enterprise deployment constraint is real: an organization with 200 production flows using 40 different plugins cannot safely upgrade all plugins simultaneously. Before plugin versioning, a bug fix in one plugin required a coordinated upgrade of all plugins and the Kestra server. Plugin versioning removes this coupling — each plugin can be upgraded independently and rolled back independently. This is a critical enterprise deployment requirement, not a developer convenience feature.",
    },
    {
      type: "multiple-choice",
      question: "Which component is most important for enabling Kestra to serve the 'event-driven' use case rather than just the 'scheduled batch' use case?",
      options: [
        "The KV Store (persistent state across executions)",
        "Flowable tasks (control flow logic)",
        "Polling triggers, webhook triggers, and flow-completion triggers — these enable flows to react to external events as they occur rather than waiting for a scheduled time",
        "Plugin versioning (safe independent plugin upgrades)",
      ],
      correct: 2,
      explanation:
        "The trigger system is what makes a workflow orchestrator event-driven. Without polling, webhook, and flow-completion triggers, Kestra would be a sophisticated cron replacement — scheduled batch processing only. With these triggers, Kestra can react to: a new file in S3 (polling trigger), a GitHub push (webhook trigger), or another flow completing (flow trigger). This is what enables AI agent workflows that react to incoming data rather than running on a fixed schedule.",
    },
  ],
  quizXp: 30,
};
