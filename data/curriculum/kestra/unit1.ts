import type { Unit } from "@/data/types";

export const kestraUnit1: Unit = {
  id: "unit1",
  title: "Kestra & The Orchestration Market",
  description:
    "What workflow orchestration actually is, why it matters, where Kestra fits, and how the competitive landscape breaks down — the domain context every Kestra interview candidate needs.",
  companySlug: "kestra",
  goTerm: "Fuseki",
  goReading: "ふせき",
  goMeaning:
    "Opening strategy that shapes the entire game. Understanding the orchestration market is your fuseki — every technical decision at Kestra flows from this market position.",
  color: "neon",
  lessons: [
    {
      id: "1-1",
      unitId: "unit1",
      companySlug: "kestra",
      title: "What Is Workflow Orchestration?",
      tldr:
        "Orchestration is the coordination layer that makes complex, multi-step processes reliable at scale. Without it, pipelines break silently, retries are manual, and debugging is guesswork. Kestra is the infrastructure that makes workflows observable, recoverable, and manageable.",
      skills: ["Orchestration fundamentals", "Pipeline thinking", "Domain framing"],
      xp: 20,
      content: [
        {
          heading: "The problem orchestration solves",
          body: `Every non-trivial software system eventually needs to coordinate work across multiple steps, services, and time windows. Some examples:\n\n- An analytics pipeline: extract data from 5 sources → transform and validate → load to a warehouse → trigger a downstream report\n- An ML training job: pull new training data → preprocess → train → evaluate → if accuracy threshold met, deploy\n- A business process: customer submits order → validate payment → reserve inventory → notify warehouse → send confirmation email\n\nEach step can fail. Steps can be slow. Steps can depend on each other. Steps may need to run on schedules, in response to events, or in parallel. Without an orchestration layer, teams handle this with:\n\n- **Cron jobs** — fragile, no dependency management, no observability, silent failures\n- **Shell scripts glued together** — impossible to retry individual steps, no audit trail\n- **Custom application logic** — orchestration code mixed with business logic, hard to maintain\n- **Message queues alone** — handles async decoupling but not dependency graphs, scheduling, or failure recovery\n\nOrchestration platforms replace all of this with a dedicated layer that: defines workflow logic declaratively, handles scheduling and triggering, manages retries and error handling, provides observability into every run, and stores execution history.`,
          goAnalogy: {
            term: "Shicho",
            reading: "しちょう",
            meaning:
              "A ladder — a sequence of forced moves where each step leads inevitably to the next. Orchestration makes pipelines shicho: each step follows from the previous in a controlled, recoverable sequence.",
          },
        },
        {
          heading: "Key orchestration concepts",
          body: `To speak fluently in a Kestra interview, you need these terms cold:\n\n**Flow** — Kestra's term for a workflow definition. A flow describes the steps to execute, when to trigger them, and how they connect. Flows are defined in YAML.\n\n**Task** — a single unit of work within a flow. Tasks are the leaves of the execution graph: run a script, make an API call, query a database, send a notification.\n\n**Trigger** — what starts a flow. Can be a schedule (cron), an event (a file arrives in S3, a Kafka message appears), a webhook, or another flow completing.\n\n**Execution** — a single run of a flow. Kestra tracks every execution with its state, logs, inputs, outputs, and timing.\n\n**DAG (Directed Acyclic Graph)** — the dependency structure of tasks within a flow. Task B only starts after Task A completes; Task C and D can run in parallel after B. The graph must be acyclic — no circular dependencies.\n\n**Namespace** — Kestra's organizational unit. Flows, secrets, and variables can be scoped to a namespace. Supports multi-tenant and multi-team configurations.\n\n**Plugin** — Kestra's extensibility mechanism. Every integration (S3, Kafka, dbt, Spark, HTTP) is a plugin. This is architecturally important: Kestra is a platform, and its plugin ecosystem is a major competitive differentiator.\n\n**Subflow** — a flow that calls another flow. Enables modular, reusable workflow components — the equivalent of function calls in code.`,
        },
        {
          heading: "Why orchestration is hot right now",
          body: `Three trends are driving orchestration market growth:\n\n**Data stack explosion** — the modern data stack has fragmented into 10–15 specialized tools (dbt, Snowflake, Fivetran, Hightouch, etc.). Each handoff between tools is an orchestration problem. Someone has to coordinate them.\n\n**AI/ML workflows** — AI pipelines are complex orchestration problems: data ingestion → training → evaluation → deployment → monitoring → retraining. As AI adoption accelerates, orchestration demand accelerates with it. This is core to Kestra's AI product roadmap.\n\n**Platform engineering** — engineering teams are building internal developer platforms (IDPs). Orchestration is often the core capability of an IDP — it's how platform teams offer "run any workload reliably" to their internal customers.\n\nKestra's $25M Series A (March 2026, led by RTP Global with Datadog/dbt Labs/Hugging Face founders backing) reflects this momentum. The backers aren't random — Datadog means observability DNA, dbt Labs means data pipeline DNA, Hugging Face means AI-native workflows. That's the Venn diagram Kestra is positioning inside.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A data team's pipeline fails silently every Friday night because a cron job times out before the downstream job starts. Which orchestration concept, if implemented, would have prevented this?",
          options: [
            "Namespaces — scoping the job to the data team's namespace",
            "Dependency management (DAG execution) + failure handling — the downstream job would only start after the upstream confirms success, with explicit failure state and alerting",
            "Subflows — breaking the pipeline into reusable components",
            "Triggers — adding a webhook trigger to the downstream job",
          ],
          correct: 1,
          explanation:
            "Cron jobs have no dependency awareness — they fire at a time regardless of whether upstream work is done. Orchestration enforces the dependency: downstream tasks wait for upstream success, and failures are tracked, alerted, and recoverable rather than silent.",
        },
        {
          type: "multiple-choice",
          question:
            "Kestra received backing from founders at Datadog, dbt Labs, and Hugging Face. What does this tell you about Kestra's strategic positioning?",
          options: [
            "Kestra is targeting observability, data pipelines, and AI workflows — the three fastest-growing orchestration use cases",
            "Kestra plans to compete directly with Datadog, dbt, and Hugging Face",
            "These investors provide capital but have no strategic relevance to Kestra's roadmap",
            "Kestra is primarily an enterprise monitoring tool with workflow features",
          ],
          correct: 0,
          explanation:
            "Investor composition is strategic signal. Datadog = observability expertise (Kestra's execution tracking). dbt Labs = data pipeline expertise (Kestra's analytics orchestration use case). Hugging Face = AI/ML workflows (Kestra's AI product direction). The backing tells you exactly where Kestra is betting.",
        },
        {
          type: "multiple-choice",
          question:
            "What makes Kestra's plugin architecture a competitive differentiator?",
          options: [
            "Plugins allow Kestra to run faster than competitors that don't use plugins",
            "Plugins let users extend Kestra with any integration without modifying the core platform — making it an ecosystem play, not just a point solution",
            "Plugins reduce Kestra's infrastructure costs by offloading compute to plugin providers",
            "Plugins enable multi-cloud deployment across GCP, AWS, and Azure simultaneously",
          ],
          correct: 1,
          explanation:
            "Every tool a customer uses (dbt, Spark, Kafka, S3, Slack) can be a Kestra plugin. This turns Kestra into a platform that grows with the ecosystem — the more integrations exist, the more workflows it can replace. An orchestrator with 200 plugins has network effects that a point solution can't match.",
        },
      ],
      resources: [
        {
          title: "Kestra Documentation: Core Concepts",
          url: "https://kestra.io/docs/concepts",
          description: "Official Kestra docs — flows, tasks, triggers, executions, namespaces.",
        },
        {
          title: "Kestra $25M Series A Announcement",
          url: "https://kestra.io/blogs/2024-09-19-series-a",
          description: "Kestra's funding announcement — strategic framing and product vision.",
        },
      ],
    },
    {
      id: "1-2",
      unitId: "unit1",
      companySlug: "kestra",
      title: "Kestra's Architecture: How It Actually Works",
      tldr:
        "Kestra's architecture is built for scale and extensibility: a Java/Micronaut backend, Kafka for execution queuing, Elasticsearch for search and history, and a YAML-first workflow definition model. Understanding this stack is the foundation of the technical interview.",
      skills: ["System architecture", "Kestra internals", "Java ecosystem"],
      xp: 25,
      content: [
        {
          heading: "The architecture overview",
          body: `Kestra's backend is built in **Java** with the **Micronaut** framework — a modern, cloud-native JVM framework designed for low startup time and low memory footprint (unlike Spring Boot's heavy runtime).\n\nThe key architectural components:\n\n**Kestra Server** — the core API and scheduler process. Manages flow definitions, trigger evaluation, execution scheduling, and the REST API that the UI and CLI consume.\n\n**Kestra Worker** — the execution engine. Workers pick tasks off a queue and execute them. Workers are horizontally scalable — add more workers to process more tasks in parallel. Workers are stateless; all state is in external storage.\n\n**Kafka** — the internal message bus. Execution events, task state changes, and worker communications flow through Kafka. This is what makes Kestra resilient: if a worker crashes mid-execution, the task can be retried from a different worker because the state is in Kafka, not in memory.\n\n**Elasticsearch** — stores execution history, logs, and provides full-text search across executions. When you search "show me all failed executions last week that touched the customer table," that's Elasticsearch.\n\n**Object Storage (GCS/S3/Azure Blob)** — stores execution artifacts: task inputs, outputs, and intermediate files that flow between tasks.\n\n**PostgreSQL / MySQL** — stores configuration: flow definitions, namespace settings, secrets references. The source of truth for "what should run" as opposed to "what has run" (Elasticsearch).`,
          goAnalogy: {
            term: "Aji",
            reading: "アジ",
            meaning:
              "Latent potential — stones that aren't immediately useful but hold future value. Kestra's plugin system and Kafka backbone are aji: they enable capabilities that aren't fully exercised today but compound over time as workflows grow.",
          },
        },
        {
          heading: "YAML-first workflow definition",
          body: `Kestra flows are defined in YAML, not code. This is a deliberate product choice that separates Kestra from code-first orchestrators like Prefect, Dagster, or Temporal.\n\nA simple Kestra flow looks like:\n\n\`\`\`yaml\nid: my-first-flow\nnamespace: company.data\n\ntriggers:\n  - id: schedule\n    type: io.kestra.plugin.core.trigger.Schedule\n    cron: "0 9 * * 1-5"\n\ntasks:\n  - id: extract\n    type: io.kestra.plugin.scripts.python.Script\n    script: |\n      import pandas as pd\n      df = pd.read_csv("{{ inputs.source_url }}")\n      return df.to_json()\n\n  - id: transform\n    type: io.kestra.plugin.scripts.python.Script\n    dependsOn:\n      - extract\n    script: |\n      data = json.loads("{{ outputs.extract.value }}")\n      # transform logic\n\`\`\`\n\n**Why YAML matters:** it makes workflows readable by non-engineers (data analysts, DevOps, ML engineers) without requiring them to write Python or Java code. This broadens Kestra's ICP beyond pure engineering teams — a data analyst can understand and modify a YAML flow without touching the codebase.\n\n**The tradeoff:** YAML has limits for complex logic. Kestra addresses this with scripting tasks (run arbitrary Python, JavaScript, Bash, or Java inline) and by allowing full programming language scripts to be embedded. The orchestration logic stays in YAML; the business logic runs in whatever language is appropriate.\n\n**For the interview:** understand the YAML-first philosophy and be ready to articulate why it matters for product adoption — not just as an implementation detail, but as a product and GTM decision.`,
        },
        {
          heading: "The execution model",
          body: `Understanding exactly how Kestra runs a flow is important for the technical interview — especially if you're asked to design features or debug issues.\n\n**Execution lifecycle:**\n1. A trigger fires (schedule, event, webhook, manual)\n2. Kestra Server creates an Execution record with state RUNNING\n3. Tasks in the flow's DAG that have no dependencies are queued to Kafka immediately\n4. Workers consume tasks from Kafka and execute them\n5. As each task completes, its output is stored and its state (SUCCESS or FAILED) is published back to Kafka\n6. Kestra Server listens to task completion events and enqueues newly unblocked tasks\n7. When all tasks are terminal (succeeded or failed), the Execution state is set to SUCCESS or FAILED\n\n**Parallelism:** Tasks with no dependency relationship between them run in parallel automatically — different workers pick them up simultaneously.\n\n**Retry logic:** Each task can define retry behavior (max attempts, backoff strategy). On failure, the task re-enters the Kafka queue for retry without restarting the entire flow.\n\n**Failure handling:** Kestra supports error tasks — tasks that run only when another task fails. This is where you send alerts, clean up resources, or trigger compensating actions.\n\nFor a Product Engineer, understanding this model deeply lets you reason about: how new AI agent task types would integrate, what new trigger types need to do, how long-running tasks (like an agent loop) affect worker resource management, and where latency or memory pressure would appear at scale.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A Kestra worker crashes in the middle of executing a 20-step flow. Why doesn't this cause the execution to be permanently lost?",
          options: [
            "Kestra checkpoints execution state to PostgreSQL at every task boundary",
            "Task state and events flow through Kafka — the crashed worker's in-progress task is re-queued and picked up by another worker",
            "Kestra workers run in stateful Kubernetes pods with persistent volumes",
            "The Kestra Server keeps an in-memory copy of all active executions",
          ],
          correct: 1,
          explanation:
            "Kafka is the state backbone — task state transitions are events in Kafka, not in-memory on the worker. When a worker crashes, the task it was running is either re-queued (if the crash happened before completion) or the completion event is missing (and Kestra handles it as a failure for retry). Workers are stateless by design.",
        },
        {
          type: "multiple-choice",
          question:
            "Why does Kestra use YAML for flow definitions rather than a Python DSL like Prefect or Dagster?",
          options: [
            "YAML is faster to parse than Python at runtime, reducing execution latency",
            "YAML definitions are readable and modifiable by non-engineers (data analysts, DevOps, ML engineers), broadening the ICP beyond pure developer teams",
            "Python DSLs require more memory, which conflicts with Micronaut's low-memory design goals",
            "YAML enables Kestra to run on the JVM without requiring Python to be installed on worker nodes",
          ],
          correct: 1,
          explanation:
            "The YAML-first choice is a product and GTM decision, not just a technical one. It makes workflows accessible to the full data and engineering team — not just developers who know Python. This is a key competitive positioning choice that the Product Engineer role should be able to articulate.",
        },
        {
          type: "multiple-choice",
          question:
            "A new task type is being designed that calls an external AI API and can take up to 10 minutes to complete. What architectural concern should a Kestra Product Engineer flag?",
          options: [
            "Elasticsearch may not store 10-minute execution logs efficiently",
            "Long-running tasks hold a worker thread for the full 10 minutes, reducing worker throughput — async execution or a polling pattern should be considered",
            "YAML cannot express 10-minute timeouts — a code-based flow would be required",
            "Kafka has a message size limit that long AI API responses might exceed",
          ],
          correct: 1,
          explanation:
            "Kestra workers are threaded — a long-running synchronous task blocks that thread for its duration. For tasks with external waits (API calls that take minutes), the correct pattern is async: fire the request, release the worker thread, and use a callback or polling trigger to resume the execution when the result is ready.",
        },
      ],
      resources: [
        {
          title: "Kestra Architecture Docs",
          url: "https://kestra.io/docs/architecture",
          description: "Official architecture documentation — server, worker, Kafka, storage.",
        },
        {
          title: "Micronaut Framework",
          url: "https://micronaut.io/",
          description: "The Java framework powering Kestra's backend — cloud-native, low startup time.",
        },
      ],
    },
    {
      id: "1-3",
      unitId: "unit1",
      companySlug: "kestra",
      title: "The Orchestration Competitive Landscape",
      tldr:
        "Kestra competes with Airflow, Prefect, Dagster, Temporal, and Argo Workflows — each with a different philosophy, ICP, and technical approach. Knowing how Kestra differentiates will sharpen every answer you give about product decisions.",
      skills: ["Competitive analysis", "Positioning", "ICP comparison"],
      xp: 25,
      content: [
        {
          heading: "Apache Airflow: the incumbent",
          body: `Airflow is the 800-lb gorilla of data orchestration — built at Airbnb, open-sourced in 2015, now managed by Apache. It's the default choice for data engineering teams building ETL/ELT pipelines.\n\n**Strengths:** massive community, enormous plugin ecosystem, deeply familiar to data engineers, strong Managed Airflow offerings (AWS MWAA, Google Cloud Composer, Astronomer).\n\n**Weaknesses:** Python-only DAG definitions (you write Python classes to define workflows — not ideal for non-engineers), complex local setup, poor support for event-driven triggers, scheduler is a single point of failure in self-hosted deployments, UI is notoriously bad, upgrading is painful.\n\n**Kestra's wedge against Airflow:**\n- YAML-first (vs. Python-only) — accessible to more personas\n- Event-driven triggers natively (vs. polling-based Airflow sensors)\n- Better UI and developer experience\n- Micronaut + Kafka architecture scales more cleanly than Airflow's Celery/KubernetesExecutor setup\n- Open-source with an enterprise tier, vs. Airflow's dependence on managed service vendors\n\n**Who uses Airflow:** data engineering teams doing batch ETL. Heavy Python shops. Teams already invested in the ecosystem.\n\n**Who chooses Kestra instead:** teams that want modern DX, YAML-first accessibility, real-time triggers, or a platform that spans data + engineering workflows.`,
          goAnalogy: {
            term: "Sabaki",
            reading: "さばき",
            meaning:
              "Nimble, light play that avoids direct confrontation with a stronger group. Kestra practices sabaki against Airflow — not attacking head-on, but moving to terrain where Airflow is weak: developer experience, event-driven use cases, non-engineer accessibility.",
          },
        },
        {
          heading: "Prefect, Dagster, Temporal: the modern challengers",
          body: `**Prefect** — Python-native orchestration with a strong developer experience focus. Flows are Python functions decorated with \`@flow\` and \`@task\`. Prefect Cloud handles scheduling, monitoring, and runs. Strong for Python-heavy ML/data teams. Weakness: Python-only, less accessible to non-engineers, opinionated about how code is structured.\n\n**Dagster** — asset-centric orchestration. Instead of thinking about tasks and DAGs, you define "data assets" (tables, ML models, files) and Dagster figures out the dependencies between them. Excellent for data teams that think in terms of datasets rather than pipelines. Weakness: steeper learning curve, very opinionated model, less general-purpose.\n\n**Temporal** — workflow orchestration for microservices and application workflows (not just data pipelines). Supports Java, Go, Python, TypeScript. Used for long-running business processes: order fulfillment, user onboarding, payment flows. Very different use case from Airflow/Kestra — Temporal is application infrastructure, not data infrastructure. Strength: durability guarantees, strongly typed SDK. Weakness: more complex, requires writing code in their SDK model.\n\n**Where Kestra differentiates from all three:**\n- Multi-language (Python, Java, Bash, JS, Go — via scripting tasks) vs. single-language DSLs\n- YAML-first makes it accessible to infra/DevOps/platform teams, not just data engineers\n- General-purpose: data pipelines AND application workflows AND infrastructure automation in one platform\n- Stronger on event-driven triggers than Prefect/Dagster\n- Native UI designed for non-engineering stakeholders`,
        },
        {
          heading: "Argo Workflows and the Kubernetes-native angle",
          body: `**Argo Workflows** is Kubernetes-native workflow orchestration — every task runs in a Kubernetes pod. Extremely popular in MLOps (Kubeflow pipelines use Argo under the hood) and with platform engineering teams that are already all-in on Kubernetes.\n\n**Strengths:** native Kubernetes resource model, excellent for containerized workloads, massive CNCF ecosystem, GPU scheduling for ML training.\n\n**Weaknesses:** requires deep Kubernetes expertise to operate, YAML-heavy in a way that's painful for non-Kubernetes users, poor developer experience for data engineers, no managed cloud offering.\n\n**Kestra vs. Argo:** Kestra runs on Kubernetes (and other environments), but doesn't require Kubernetes knowledge to use it. Kestra abstracts the infrastructure; Argo exposes it. For platform engineering teams, this is a significant DX win.\n\n**The strategic picture:** Kestra's positioning is "general-purpose orchestration with excellent DX" — it can do what Airflow does (data pipelines), what Temporal does (application workflows), and what Argo does (infrastructure automation), from a single YAML-first platform. The bet: teams don't want three orchestrators; they want one that works everywhere.\n\n**For the interview:** know that Kestra's answer to "why not just use Airflow?" is DX, YAML accessibility, and event-driven triggers — not a fundamental architectural objection. And its answer to "why not use Temporal?" is that Kestra is designed for the full data + engineering stack, not just application workflows.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A prospect's team includes 3 data engineers (Python-fluent), 2 DevOps engineers (YAML/Terraform), and 1 ML engineer. They're evaluating Kestra vs. Prefect. What's Kestra's strongest argument?",
          options: [
            "Kestra has more data plugins than Prefect",
            "Kestra's YAML-first model means the DevOps and ML engineers can contribute to workflow definitions without writing Python — Prefect would require everyone to work in Python",
            "Kestra runs on Micronaut which is faster than Prefect's Python runtime",
            "Kestra has better Kubernetes support than Prefect",
          ],
          correct: 1,
          explanation:
            "Prefect is Python-only — non-Python engineers are second-class citizens in the workflow. Kestra's YAML-first model means the DevOps and ML engineers on this team can read, modify, and own workflow definitions. That's a team collaboration advantage, not just a DX preference.",
        },
        {
          type: "multiple-choice",
          question:
            "A company running Airflow says their biggest pain point is that when a task fails at 3am, nobody knows until a stakeholder notices missing data the next morning. Which Kestra capability directly addresses this?",
          options: [
            "Kestra's YAML syntax is easier to read so bugs are spotted earlier",
            "Kestra's event-driven execution model runs faster so failures happen earlier in the day",
            "Kestra's execution model tracks all task states and supports failure notification tasks — Slack/email alerts fire immediately on task failure, not after a human notices the downstream impact",
            "Kestra's Elasticsearch integration makes it easier to search for failures after the fact",
          ],
          correct: 2,
          explanation:
            "Airflow has alerting but it's historically been clunky to configure. Kestra's error tasks and trigger-based notifications are first-class — you define what happens on failure as part of the flow definition. Immediate alerting is table-stakes for operational workflows, and it's a concrete pain point Kestra solves better.",
        },
        {
          type: "scenario",
          prompt:
            "A Kestra interviewer asks: 'Why would someone choose Kestra over Temporal?' Walk through your answer — be specific, not generic.",
          sampleAnswer:
            "Temporal and Kestra are solving adjacent but different problems. Temporal is purpose-built for application workflow durability — long-running business processes like order fulfillment or user onboarding that live inside your microservices architecture. Its SDK model is code-first and opinionated. Kestra is general-purpose orchestration for the data and platform engineering layer — data pipelines, ML workflows, infrastructure automation, and increasingly AI agent workflows. If I'm a backend team building a payment processing service with complex saga patterns, Temporal. If I'm a data or platform team orchestrating work across dbt, Spark, Python scripts, and AI APIs from a YAML-first interface that non-engineers can read and modify, Kestra. The other dimension: Temporal requires writing workflows in their SDK (Java, Go, Python, TypeScript) — everything has to follow their workflow + activity model. Kestra uses YAML with embedded scripts — you don't rewrite your logic in a new framework, you call your existing scripts from a flow definition. For teams with existing code that they want to orchestrate without refactoring, Kestra has a lower adoption cost.",
          keyPoints: [
            "Temporal is application workflow infrastructure; Kestra is data + platform orchestration",
            "Temporal requires SDK adoption; Kestra orchestrates existing scripts and tools",
            "Kestra's YAML-first model has lower adoption cost for teams with existing code",
            "Not a head-to-head competition — different primary buyers and use cases",
          ],
        },
      ],
      resources: [
        {
          title: "Kestra vs. Airflow (Kestra Blog)",
          url: "https://kestra.io/blogs/2023-07-05-kestra-vs-airflow",
          description: "Kestra's own comparison — useful for understanding their positioning narrative.",
        },
        {
          title: "Temporal vs. Other Orchestration Tools",
          url: "https://temporal.io/vs",
          description: "Temporal's comparison page — useful for understanding where Kestra and Temporal diverge.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "What is the difference between a Flow, a Task, and an Execution in Kestra?",
      options: [
        "Flow = the YAML definition; Task = a step within the flow; Execution = a single run of a flow with all its state and outputs",
        "Flow = a running instance; Task = the YAML definition; Execution = the final result",
        "Flow = the trigger; Task = the scheduled job; Execution = the output artifact",
        "These are synonymous terms for the same concept in different Kestra versions",
      ],
      correct: 0,
      explanation:
        "Flow is the definition (what should happen), Task is a unit of work within the definition, Execution is a live run of that definition — with state, logs, timing, inputs, and outputs captured per run.",
    },
    {
      type: "multiple-choice",
      question: "Why does Kestra use Kafka as its internal message bus rather than a simpler queue (like RabbitMQ or Redis)?",
      options: [
        "Kafka is required by the Micronaut framework",
        "Kafka's durability guarantees, partitioning, and consumer group semantics enable horizontally scalable workers, exactly-once task processing, and resilience to worker crashes",
        "Kafka is cheaper to run than alternatives at Kestra's scale",
        "Kafka provides the real-time streaming capabilities needed for Kestra's event-driven triggers",
      ],
      correct: 1,
      explanation:
        "Kafka's durability (messages persist until consumed) means a worker crash doesn't lose task state. Its partitioning allows parallel workers to consume different task queues. Consumer group semantics ensure each task is processed exactly once. These are orchestration-critical properties that lightweight queues don't guarantee.",
    },
    {
      type: "multiple-choice",
      question: "Which orchestration tool would you recommend to a team building long-running business process workflows inside their Java microservices — and why is it not Kestra?",
      options: [
        "Airflow — it has the largest plugin ecosystem for business process integration",
        "Temporal — its durable execution SDK is purpose-built for long-running application workflows within microservices, with Java support and saga pattern primitives",
        "Argo Workflows — Kubernetes-native execution is best for microservice environments",
        "Dagster — asset-centric orchestration models business entities naturally",
      ],
      correct: 1,
      explanation:
        "Temporal's SDK model (workflows as durable code, activities as individual steps) is specifically designed for long-running business processes with complex failure handling — order sagas, multi-step approval flows, delayed actions. Kestra is better for data/platform orchestration across external tools. Recommending the right tool for the use case (including competitors) builds credibility in the interview.",
    },
  ],
  quizXp: 30,
};
