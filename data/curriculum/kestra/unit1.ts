import type { Unit } from "@/data/types";

export const kestraUnit1: Unit = {
  id: "unit1",
  title: "The Orchestration Problem Space",
  description:
    "Why workflow orchestration exists, who has this pain, how the market evolved from cron scripts to agentic platforms, and where Kestra is playing. Domain context every PM needs before touching the roadmap.",
  companySlug: "kestra",
  goTerm: "Fuseki",
  goReading: "ふせき",
  goMeaning:
    "Opening strategy — the early moves that shape the entire game. Understanding the problem space is fuseki: the territory you claim here determines how you think about every product decision later.",
  color: "neon",
  lessons: [
    {
      id: "1-1",
      unitId: "unit1",
      companySlug: "kestra",
      title: "What Orchestration Actually Solves",
      tldr:
        "Orchestration exists because automated multi-step processes that span systems are fundamentally hard to make reliable. The JTBD is not 'run jobs' — it's 'run jobs reliably, observably, and recoverably at scale.' Understanding that gap is the foundation of understanding Kestra.",
      skills: ["Problem framing", "Jobs-to-be-done", "Orchestration fundamentals"],
      xp: 20,
      content: [
        {
          heading: "The problem before orchestration",
          body: `Before dedicated orchestration tools, teams automated workflows with cron jobs and custom scripts. This works until it doesn't:\n\n**The cron + Bash failure modes:**\n- A job fails silently at 3am — nobody knows until a downstream system produces bad data\n- Job B depends on Job A finishing, but cron has no native concept of dependencies\n- A job runs for 6 hours instead of 45 minutes — no alert, no timeout, nobody notices\n- To retry a failed step, you run the whole script from the beginning\n- You have 40 cron jobs across 12 servers and nobody knows which ones are still needed\n- A new engineer joins and asks "how does this work?" — the answer is scattered across a dozen shell scripts and a Confluence page last updated in 2019\n\n**What this actually costs:**\n- Engineering time debugging silent failures\n- Data quality issues that surface hours or days after the root cause\n- Toil from manual retries and monitoring\n- Lost trust in automated systems ("just check it manually to be sure")\n\n**The JTBD:** engineers don't want an orchestration platform — they want their multi-step automated processes to run reliably without babysitting, be observable when they fail, and recover without manual intervention. Orchestration is how they get that.`,
          goAnalogy: {
            term: "Atari",
            reading: "あたり",
            meaning:
              "A stone in immediate danger of capture. A cron job with no monitoring is always in atari — the failure exists; nobody sees it until the capture is complete.",
          },
        },
        {
          heading: "The jobs-to-be-done across personas",
          body: `Orchestration isn't one market — it's multiple personas with adjacent but distinct JTBDs:\n\n**Data engineers**\n- JTBD: schedule and monitor ETL/ELT pipelines that move data between systems (Postgres → Snowflake, S3 → BigQuery), backfill historical data, run dbt transformations on a schedule\n- Pain without it: Airflow DAGs that break on Python environment changes, pipelines that start regardless of whether their dependencies completed, no easy way to see what failed and why\n- Their bar: if a pipeline fails, I want to know within 5 minutes and retry from the failed task — not from the start\n\n**Platform / DevOps engineers**\n- JTBD: automate infrastructure provisioning, deployment pipelines, configuration management, incident response runbooks, and scheduled maintenance jobs across a heterogeneous environment (VMs, containers, cloud services)\n- Pain without it: Jenkins pipelines that only the person who wrote them can maintain; no reuse across teams; every team reinvents the monitoring wheel\n- Their bar: any engineer on any team should be able to read and modify a workflow; it should work across cloud providers and on-prem\n\n**ML / AI engineers**\n- JTBD: orchestrate model training, evaluation, feature engineering, and deployment pipelines; run agents reliably in production with observability\n- Pain without it: Jupyter notebooks that "work on my machine," model retraining that breaks when the data schema changes, agents that fail at step 7 of a 10-step loop with no recovery path\n- Their bar: if an agent run fails mid-loop, resume from the last successful step, not from scratch\n\n**Business operations teams**\n- JTBD: automate approval workflows, report generation, data reconciliation, and notifications that span business systems (Salesforce, ERP, email)\n- Pain without it: spreadsheets + manual steps + someone remembering to run the report every Monday\n- Their bar: non-engineers should be able to understand and maintain these workflows`,
        },
        {
          heading: "Why 'reliability + observability + recoverability' is the real product",
          body: `Every orchestration platform sells the same surface features: scheduling, dependencies, retries. What actually differentiates them is how well they solve the three underlying requirements:\n\n**Reliability:** the workflow runs when it's supposed to, even when individual tasks fail or external APIs are slow. This requires: dependency management, retry logic with backoff, timeout enforcement, concurrency controls, and handling of partial failures.\n\n**Observability:** when something goes wrong, you can find out quickly and understand why. This requires: execution state tracking (running, failed, paused, succeeded), task-level logs, execution history search, alerting, and — increasingly — distributed tracing. "The job ran for 6 hours instead of 45 minutes and nobody knew" is an observability failure.\n\n**Recoverability:** when something goes wrong, you can fix it without starting over. This requires: resuming from the failed task (not the beginning), replaying specific tasks with different inputs, backfilling historical runs, and the ability to modify and redeploy without breaking in-flight executions.\n\nThese three properties are why Kestra calls itself an orchestration platform, not a scheduler. A scheduler tells jobs when to start. An orchestration platform makes sure they complete correctly and recovers when they don't.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A data engineering team runs 30 cron jobs that move data from operational databases to their data warehouse. They're evaluating Kestra. What's the primary JTBD they're trying to solve?",
          options: [
            "Replace cron with a more modern scheduling system",
            "Get visibility into which jobs are running, which have failed, and resume failed jobs from the failed task — not from the start — so they stop waking up at 3am to manually restart pipelines",
            "Run jobs faster by parallelizing them",
            "Move away from Bash scripts to a more maintainable language",
          ],
          correct: 1,
          explanation:
            "The scheduling is the surface request; reliability + observability + recoverability is the actual JTBD. 30 cron jobs that work perfectly don't motivate a platform migration. 30 cron jobs that silently fail, require manual babysitting, and restart from scratch on failure — that's the pain that creates urgency. The specific JTBD is 'stop waking up at 3am to restart failed pipelines manually.'",
        },
        {
          type: "multiple-choice",
          question:
            "Which persona cares most about 'language-agnostic' workflow definition — the ability to run Python, Bash, Go, Java, and SQL tasks in the same workflow?",
          options: [
            "Data engineers (they primarily use Python and SQL)",
            "Platform / DevOps engineers (their environment is inherently heterogeneous — they run shell scripts, Terraform, Ansible, Python, and cloud CLIs in the same automation context)",
            "ML engineers (they need Python for model code)",
            "Business operations teams (they want no-code tools)",
          ],
          correct: 1,
          explanation:
            "Platform and DevOps engineers work across the most heterogeneous toolsets. Their infrastructure automation touches Bash, Python, Terraform, Ansible, Docker, cloud CLIs, and SQL in the same workflow. A Python-only tool (Airflow, Prefect) forces them to wrap non-Python tools in Python subprocess calls. Language-agnostic orchestration — where a Bash task, a Terraform apply, and a Python script are all native first-class task types — is the most valuable for this persona.",
        },
        {
          type: "scenario",
          prompt:
            "A potential customer says: 'We already use Airflow. We're happy with it for our data pipelines. Why would we look at Kestra?' What's the conversation you'd have — what pain points are worth probing?",
          sampleAnswer:
            "Start by understanding where 'happy' is actually holding. Probe: What happens when a DAG breaks because of a Python dependency conflict? How long does it take to onboard a new engineer to write or modify a DAG? Are your DevOps and platform teams using Airflow too, or do they have separate automation tools? Do you run any workflows that aren't pure Python — like shell scripts, Terraform, or Kubernetes jobs? And what's your experience been with the Airflow scheduler when you scale up — do you run multiple schedulers? The common answers reveal the real pain: Airflow is great for Python-centric data pipelines owned by data engineers, but it struggles when workflows span teams, languages, or infrastructure automation use cases. 'Happy with it' often means 'it does what we need it to do today,' not 'it has no friction.' The question is whether Kestra's YAML model, language-agnostic tasks, or the AI features are solving problems they're working around right now.",
          keyPoints: [
            "Probe where 'happy' breaks down: dependency conflicts, onboarding, cross-team workflows",
            "Language-agnosticism is the wedge for DevOps/platform teams who don't live in Python",
            "The Airflow scheduler's scaling limitations are a known technical pain for larger deployments",
            "The question is whether Kestra's differentiators solve pain they currently work around",
          ],
        },
      ],
      resources: [
        {
          title: "Kestra Documentation: Core Concepts",
          url: "https://kestra.io/docs/concepts",
          description: "Kestra's own explanation of the core abstractions — flows, tasks, executions, namespaces.",
        },
      ],
    },
    {
      id: "1-2",
      unitId: "unit1",
      companySlug: "kestra",
      title: "How the Market Evolved: From Cron to Agentic",
      tldr:
        "The orchestration market went through distinct phases: cron/scripts → first-generation schedulers → modern Python-native platforms → language-agnostic YAML-first platforms → agentic orchestration. Kestra is playing at the YAML-first to agentic boundary.",
      skills: ["Market evolution", "Technology generations", "Platform positioning"],
      xp: 25,
      content: [
        {
          heading: "Generation 1: Cron and custom schedulers (pre-2015)",
          body: `**What it was:** OS-level cron, proprietary enterprise schedulers (Control-M, AutoSys, Tivoli), and custom-built job runners.\n\n**Who used it:** operations teams at enterprises, sysadmins, early data teams.\n\n**What it solved:** basic scheduling. Run this at midnight. Run this every hour. Alert me if it fails.\n\n**Where it broke:** dependency management (A must finish before B starts), cross-system visibility, anything beyond simple scheduling, and observability. When a Control-M job failed, tracking down the root cause was a manual investigation.\n\n**Legacy relevance:** Control-M still has significant enterprise market share in industries that haven't modernized (banking, insurance, government). Kestra explicitly competes here for enterprise IT automation workflows — the positioning is "modern replacement for Control-M and similar legacy schedulers."`,
          goAnalogy: {
            term: "Hoshi",
            reading: "ほし",
            meaning:
              "Star points — the four corners of the board. Cron was the opening move that claimed territory without sophistication. The star points mark where things started, not where they end.",
          },
        },
        {
          heading: "Generation 2: Airflow and the DAG era (2015–2020)",
          body: `**What happened:** Airbnb open-sourced Apache Airflow in 2015. It became the dominant data orchestration platform within 3 years.\n\n**What Airflow introduced:**\n- Directed Acyclic Graphs (DAGs) as the abstraction: workflows are graphs with defined task dependencies\n- Python as the workflow definition language: workflows are Python files, tasks are Python objects\n- A web UI for monitoring and triggering workflows\n- An operator ecosystem: pre-built connectors for Spark, Hive, S3, and dozens of others\n\n**Why it won:** it was open-source, had a simple mental model (DAGs), had a massive community, and arrived right when the data engineering function was scaling rapidly at tech companies.\n\n**What Airflow doesn't do well:**\n- Python-only: if you're not writing Python, you're a second-class citizen\n- Scheduler as single point of failure: historically, scaling Airflow required significant infrastructure work\n- Complex setup: production Airflow is famously hard to run and maintain\n- Dynamic workflows are awkward: workflows are static DAGs defined at import time, not at runtime\n- Everything lives in Python files in a Git repo that only Python engineers can read\n\n**The result:** Airflow is the dominant legacy platform, but its weaknesses created the opportunity for everything that came after.`,
        },
        {
          heading: "Generation 3: Modern orchestration (2020–2024) and Kestra's entry",
          body: `**The challengers:** Prefect, Dagster, Temporal, and Kestra all launched or reached mainstream adoption in this window. Each picked a different angle on Airflow's weaknesses.\n\n**Prefect (2020+):** Cleaner Python API, better local development experience, cloud-hosted option. Still Python-centric, but much more ergonomic than Airflow. Targets Python-native teams who want a modern Airflow replacement.\n\n**Dagster (2019+):** Asset-centric rather than task-centric. Instead of "run these tasks," you define "these are the data assets you care about (a Snowflake table, a dbt model, an ML feature store)" and Dagster figures out what to run. Excellent for data pipeline lineage and data quality.\n\n**Temporal (2019+):** Not a data platform at all — a durable workflow execution engine for application code. Workflows are written in SDK code (Go, Java, TypeScript). Excels at long-running, stateful processes: order fulfillment, multi-step approval flows, anything that survives process restarts. Significant overlap with Kestra's human-in-the-loop use case.\n\n**Kestra's angle:** YAML-first, language-agnostic, universal. Where Airflow and Prefect require Python and target data teams, Kestra's bet is that workflows should be readable and modifiable by anyone (DevOps, data engineers, business ops), and that the abstraction should work for any workflow type — not just data pipelines.\n\n**Generation 4: Agentic orchestration (2024+):** AI agents need infrastructure. The next evolution is orchestration platforms that natively support agent loops, LLM task types, memory between executions, and human-in-the-loop approval gates. Kestra 1.0 and its AI Agent plugin are a direct bet on this direction.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "Dagster uses an asset-centric model instead of a task-centric model. What does this mean in practice, and when is it a better fit than Kestra?",
          options: [
            "Dagster focuses on digital assets like files; Kestra focuses on tasks like API calls",
            "Dagster models workflows as 'these are the data artifacts I care about (tables, models, feature sets) and their dependencies' — ideal for data platform teams who need lineage, data quality tracking, and understanding the upstream/downstream impact of a pipeline failure. Kestra is a better fit when workflows span beyond data artifacts to infrastructure actions, API calls, or agent loops",
            "Dagster is better for small teams; Kestra scales to larger organizations",
            "Dagster and Kestra have the same model with different UIs",
          ],
          correct: 1,
          explanation:
            "The asset model is genuinely different: Dagster tracks 'what data exists and what produced it' as the primary abstraction. A Dagster user asks 'is my Snowflake table up to date and what's the freshness?' — the answer is in the asset graph. A Kestra user asks 'did my workflow run successfully?' — the answer is in the execution history. For teams building data catalogs and data quality pipelines, Dagster's model is a better fit. For teams with heterogeneous automation needs (data pipelines + DevOps + AI agents in the same platform), Kestra's universal model wins.",
        },
        {
          type: "multiple-choice",
          question:
            "A fintech company runs complex multi-step loan approval workflows: customer submits → credit check → fraud check → underwriting review (human) → approval notification → document generation. Which platform is most naturally suited to this use case?",
          options: [
            "Airflow — it handles sequential task dependencies",
            "Dagster — it has a strong data model",
            "Temporal — it's built for long-running, stateful processes with human steps that must survive process restarts, and has native durable execution guarantees",
            "Kestra — it has native human-in-the-loop support",
          ],
          correct: 2,
          explanation:
            "Temporal is the natural fit here because the workflow is application-level (not data pipeline) and durability is the primary requirement. A loan approval can take days; the workflow must survive server restarts, schema changes, and deployment updates. Temporal's SDK model and durable execution guarantees are purpose-built for this. Kestra's human-in-the-loop is a reasonable alternative but Temporal's durability story is stronger for application-critical workflows. Understanding when Temporal wins is important for a Kestra PM — it defines where Kestra should and shouldn't compete.",
        },
      ],
      resources: [
        {
          title: "Kestra Blog: Orchestration Evolution",
          url: "https://kestra.io/blogs",
          description: "Check the competitive analysis posts comparing Kestra to Airflow, Prefect, and Temporal.",
        },
      ],
    },
    {
      id: "1-3",
      unitId: "unit1",
      companySlug: "kestra",
      title: "Kestra's Market Position and Strategic Bet",
      tldr:
        "Kestra's bet is 'universal orchestration': one platform for data, infrastructure, and AI workflows, accessible to any engineer regardless of language background, with AI as the next expansion vector. Understanding this bet — and its tradeoffs — is the foundation of the PM role.",
      skills: ["Strategic positioning", "Market bet analysis", "Open-source model"],
      xp: 25,
      content: [
        {
          heading: "The 'universal orchestration' bet",
          body: `Kestra's core positioning is explicitly universal — not a data orchestration tool, not an MLOps tool, not an IT automation tool. All three, for any team, with a single YAML model.\n\n**What 'universal' requires technically:**\n- Language-agnostic task execution: Python, Bash, Go, SQL, Java, Node.js all run as native task types without subprocess wrappers\n- 1300+ plugins covering every integration a data team, DevOps team, or ML team might need\n- A workflow definition language (YAML) that's readable without knowing any specific programming language\n- Infrastructure that scales from a single-node developer setup to a distributed cluster handling 37M+ monthly executions\n\n**The open-source + enterprise model:**\nKestra is Apache 2.0 open source for the core platform. Enterprise features (SSO, role-based access control, audit logs, enterprise plugins, SLAs) are behind a commercial license. This is the standard open-core model: build the community with free software, monetize at enterprise scale.\n\n**What the nearly 30,000 GitHub stars mean:** significant developer community adoption before the Series A. The community validates that the product works at the technical level; the $25M Series A is funding the go-to-market motion to convert community users into paying enterprise customers.\n\n**The risk of 'universal':** being good at everything is harder than being great at one thing. Airflow owns data engineering mindshare. Temporal owns application workflow durability. Kestra's universal positioning means it fights for attention in every category without dominating any. The AI angle is potentially how Kestra carves out a category it can actually own first.`,
          goAnalogy: {
            term: "Moyo",
            reading: "もよ",
            meaning:
              "A framework or potential territory — not yet secure but exerting influence across a large area. Kestra's universal positioning is moyo: broad influence but not yet definitively secured territory in any single segment.",
          },
        },
        {
          heading: "Why YAML-first is a genuine differentiator",
          body: `The choice of YAML as the primary workflow definition language is not an aesthetic preference — it's a strategic product decision with real consequences:\n\n**Who can read YAML but not Python:**\n- DevOps engineers who primarily work with Kubernetes YAML, Terraform HCL, and Ansible YAML\n- Infrastructure engineers who manage systems but don't write application code\n- Operations and business users who need to understand and modify workflows\n- Any engineer who isn't a Python expert but needs to maintain a workflow\n\n**What YAML enables that Python code doesn't:**\n- GitOps workflows: YAML diffs are human-readable, so code review of workflow changes is meaningful\n- UI-based editing: Kestra's embedded editor can generate and modify YAML without losing fidelity — you can't do this with Python DAG code\n- AI generation: Kestra's AI Copilot generates YAML from natural language — much more tractable than generating correct Python DAG code\n- No Python environment management: YAML workflows don't depend on a Python version, virtual environment, or package requirements\n\n**The constraint of YAML:** complex programming logic (conditional branches, list comprehensions, custom algorithms) requires the Pebble templating engine or wrapping logic in script tasks. YAML is excellent for defining what to run and in what order; it's less natural for expressing complex conditional logic. This is a known limitation Kestra addresses through expressions and script tasks.`,
        },
        {
          heading: "Kestra 1.0 as a market signal",
          body: `Kestra reaching version 1.0 with LTS (Long-Term Support) designation is a deliberate signal to enterprise buyers:\n\n**What 1.0 communicates:**\n- API stability: production deployments won't break on version upgrades within the 1.x line\n- Enterprise readiness: LTS means a predictable support window, not a rolling release\n- Foundation for enterprise sales: "1.0 LTS" is a category of answer to procurement and security teams asking "is this production-ready?"\n\n**What 1.0 delivered (product signals):**\n- **AI Copilot + AI Agents**: AI is not a future roadmap item — it shipped in 1.0. This is the product direction, not a concept.\n- **Plugin versioning**: multiple plugin versions can run simultaneously — critical for large enterprises with complex dependencies who can't do big-bang upgrades\n- **Flow-level SLAs**: automatic enforcement actions when workflows miss their targets — enterprise operations requirement\n- **Unit tests with UI integration**: quality gates built into the platform, not bolted on\n- **Production Helm Charts**: Kubernetes deployment that's officially supported and production-ready\n\n**What this means for the PM role:** the PM is joining after the foundation is set. The 1.0 question ("can enterprises trust this?") is answered. The PM's job is the next question: "what AI features on top of this foundation drive the next wave of adoption and enterprise value?"`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "Kestra's 'universal orchestration' positioning creates a specific go-to-market challenge. What is it?",
          options: [
            "Universal tools require more engineering resources to maintain",
            "'We do everything' is harder to communicate than 'we're the best for X' — Airflow wins data engineering conversations by default because data engineers think of Airflow first. Kestra has to win conversations by expanding the use case scope beyond what a single-purpose tool addresses",
            "Universal tools are harder to price because they serve multiple personas",
            "Enterprise buyers prefer single-purpose tools because they're easier to evaluate",
          ],
          correct: 1,
          explanation:
            "The go-to-market challenge of universal positioning is word-of-mouth and category ownership. When a data engineer evaluates tools, they start with Airflow because it's the category default. Kestra wins when the conversation expands: 'we need orchestration that works for both data pipelines AND DevOps automation AND AI agents without three separate tools.' The PM's job is to build the features and the narrative that make that expanded conversation happen.",
        },
        {
          type: "multiple-choice",
          question:
            "Why does the AI Copilot feature (generate YAML from natural language) work better for Kestra than it would for Airflow?",
          options: [
            "Kestra has a better AI team than Airflow",
            "YAML is a more constrained and regular output format than Python code — LLMs generate valid, correct YAML far more reliably than they generate valid, syntactically correct Python DAG code that follows Airflow's specific patterns",
            "Kestra has a larger training dataset from its community",
            "Airflow's Python DAG format changes more frequently than Kestra's YAML format",
          ],
          correct: 1,
          explanation:
            "This is a genuine structural advantage: YAML's regularity and constraint makes it more tractable for LLM generation. Airflow's Python DAGs require understanding Python syntax, Airflow's specific operator APIs, decorator patterns, and task dependency syntax — all expressed in free-form code. Kestra's YAML has a defined schema with known fields and values. This makes the AI Copilot feature much more likely to produce correct output, which is why it's a stronger product bet for Kestra than it would be for a code-first competitor.",
        },
      ],
      resources: [
        {
          title: "Kestra 1.0 Release",
          url: "https://kestra.io/blogs/release-1-0",
          description: "Read the full 1.0 release post — it's the clearest statement of Kestra's product direction and AI strategy.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "A DevOps team is evaluating Kestra vs. Jenkins for automating their infrastructure provisioning workflows. What is Kestra's strongest argument for this persona?",
      options: [
        "Kestra has better performance than Jenkins for parallel job execution",
        "Kestra's YAML model means infrastructure workflows can be read and maintained by anyone on the team, not just the engineer who knows the Jenkins DSL — and Kestra natively handles the orchestration concerns (dependencies, retries, observability) that Jenkins pipelines require custom plugins to address",
        "Kestra has more plugins than Jenkins",
        "Kestra is open source while Jenkins is not",
      ],
      correct: 1,
      explanation:
        "The Jenkins argument is YAML readability + native orchestration primitives. Jenkins is powerful but its Groovy-based pipeline DSL requires specialist knowledge, its plugin ecosystem is inconsistent in quality, and orchestration concerns (retries, timeout handling, dependency between jobs) require significant custom configuration. Kestra's YAML model with native retry, dependency, and observability primitives out of the box is a genuine improvement for the DevOps automation use case.",
    },
    {
      type: "multiple-choice",
      question: "What is the primary reason Kestra's AI Copilot (YAML from natural language) is feasible now when it wasn't 3 years ago?",
      options: [
        "Kestra's YAML schema became more standardized in recent versions",
        "LLM capability crossed a threshold where structured output generation is reliable enough for production use — generating valid YAML from a well-defined schema is now tractable, while 3 years ago the hallucination rate made it unusable",
        "Natural language processing for YAML specifically improved significantly",
        "The Kestra community contributed training data that improved AI quality",
      ],
      correct: 1,
      explanation:
        "The enabling factor is LLM structured output capability, not Kestra-specific changes. GPT-4 and Claude's ability to generate valid, schema-conforming YAML reliably opened a product category that didn't exist before. This is why AI Copilot features are launching across developer tools simultaneously in 2024-2025 — the underlying capability finally crossed the threshold where it's useful rather than embarrassing.",
    },
    {
      type: "multiple-choice",
      question: "Kestra describes its 1.0 as 'LTS (Long-Term Support).' Which buyer segment does this designation most directly address?",
      options: [
        "Startup engineering teams who need stability during rapid growth",
        "Enterprise procurement and operations teams who need a predictable support window and API stability guarantee before approving a production deployment",
        "Open-source contributors who want a stable base to build plugins on",
        "Cloud providers who want to offer Kestra as a managed service",
      ],
      correct: 1,
      explanation:
            "LTS is an enterprise sales signal. Startup teams don't care about LTS designations — they'll upgrade as needed. Enterprise procurement and IT ops teams care deeply: they need to know that a production deployment won't require a breaking upgrade in 6 months, that there's a defined support window, and that the vendor is committed to this version for a multi-year horizon. LTS is a direct response to enterprise objections like 'this software isn't mature enough for production.'",
    },
  ],
  quizXp: 30,
};
