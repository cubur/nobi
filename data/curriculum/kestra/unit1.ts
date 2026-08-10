import type { Unit } from "@/data/types";

export const kestraUnit1: Unit = {
  id: "unit1",
  title: "The Kestra Product Context",
  description:
    "What Kestra actually is, who uses it, why the $25M Series A happened now, and what the AI workflow opportunity looks like from a PM lens — not an architecture lens.",
  companySlug: "kestra",
  goTerm: "Fuseki",
  goReading: "ふせき",
  goMeaning:
    "Opening strategy — the early moves that shape the entire game. Understanding Kestra's product context is fuseki: the territory you claim here determines what you can build later.",
  color: "neon",
  lessons: [
    {
      id: "1-1",
      unitId: "unit1",
      companySlug: "kestra",
      title: "What Kestra Is (From a PM Lens)",
      tldr:
        "Kestra is a universal workflow orchestration platform. Not a data pipeline tool, not an MLOps tool — universal. Understanding what 'universal' means and why it's a strategic bet is the first thing a PM needs to internalize.",
      skills: ["Product context", "Market positioning", "Orchestration fundamentals"],
      xp: 20,
      content: [
        {
          heading: "The one-sentence pitch",
          body: `Kestra lets you build, schedule, and run any automated workflow — data pipelines, IT automation, business processes, AI agents — using a declarative YAML format with a plugin system that connects to anything.\n\nThat's the pitch. But for a PM, the more important question is: **what problem does that actually solve?**\n\n**The problem:** Every organization has workflows that span multiple systems. Data flows from Salesforce to Snowflake. Nightly jobs process transactions. Support tickets route to the right team. Models retrain on new data. These workflows live in different tools, break in different ways, and have no common observability. Kestra provides a single orchestration layer.\n\n**Why YAML?** Other orchestration tools (Prefect, Dagster, Airflow) define workflows in Python. Kestra's bet is that YAML is more accessible — non-engineers can read it, version it, and modify it. Workflows become artifacts, not code that only the ML team can touch.\n\n**Why "universal"?** Competitors specialize: Airflow owns data engineering, Temporal owns application workflows, Argo Workflows owns Kubernetes MLOps. Kestra's product bet is that customers don't want four orchestration tools — they want one. That's both the opportunity and the risk.`,
          goAnalogy: {
            term: "Influence",
            reading: "えいきょう",
            meaning:
              "Board positions that don't directly own territory but constrain future play. The 'universal' positioning is influence — it doesn't own a specific market yet, but it shapes how Kestra can expand.",
          },
        },
        {
          heading: "Who actually uses Kestra",
          body: `**The user base is more diverse than you'd expect for a developer tool:**\n\n**Data engineers** — run ETL/ELT pipelines, replace Airflow DAGs, schedule dbt models. This is the core early adopter segment.\n\n**DevOps / platform teams** — automate infrastructure provisioning, deployment pipelines, incident response workflows. Kestra's YAML model appeals here because it's closer to how they already work (Terraform, Ansible).\n\n**Data science / ML teams** — orchestrate model training, evaluation, and deployment. Less common, but growing.\n\n**Business operations teams** — at larger enterprises, business workflows (contract approval, expense routing, compliance checks) get orchestrated in Kestra. The YAML accessibility matters here.\n\n**The 10,000 organizations stat includes all of these.** JPMorgan Chase and Bloomberg are enterprise data pipeline users. The long tail is smaller teams doing DevOps automation.\n\n**Why this matters for a PM:** The AI PM role sits in the overlap between what these users already do and what they're starting to ask for: agentic workflows, LLM task types, AI-assisted flow generation. Your roadmap has to serve a heterogeneous user base, not just the ML team.`,
        },
        {
          heading: "The $25M Series A and what it means",
          body: `Kestra closed a $25M Series A in March 2026 — roughly 2 years after their seed round. The timing matters:\n\n**What the timing signals:**\n- The open-source traction (nearly 30,000 GitHub stars, 10,000+ organizations) validated the product before the raise\n- The enterprise motion is starting to work — you don't raise Series A on open-source stars alone\n- AI is the explicit growth vector — the timing aligns with enterprise demand for AI workflow infrastructure\n\n**What Series A money buys:**\n- Sales and customer success (the enterprise motion needs people)\n- Product investment in AI features (you, specifically)\n- More engineering bandwidth\n\n**What this means for the PM role:**\nYou're joining at the inflection point — after product-market fit in the open-source community, before enterprise-scale product-market fit. The AI PM role exists because Kestra's leadership believes AI workflow orchestration is the next expansion vector. Your job is to find the real AI use cases, not the demos.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "Kestra's 'universal orchestration' positioning is a strategic bet. What is the main risk of this positioning compared to a specialist tool like Airflow (data engineering) or Temporal (application workflows)?",
          options: [
            "Universal tools are harder to build technically",
            "Specialist tools have stronger word-of-mouth in their specific communities, and 'we do everything' is a harder message to land than 'we're the best for X'",
            "Universal tools require more plugins and integrations to be useful",
            "Enterprise buyers prefer specialized tools because they're easier to evaluate",
          ],
          correct: 1,
          explanation:
            "The positioning risk is marketing and word-of-mouth: specialist tools become the default recommendation in their community ('just use Airflow for data pipelines'). Universal tools have to fight for attention in every category without owning any. This shapes Kestra's go-to-market: they need strong community champions in each segment, and the AI story is a chance to own a new category before a specialist does.",
        },
        {
          type: "multiple-choice",
          question:
            "A data engineering team at a mid-sized company is evaluating Kestra vs. Prefect for their ML pipeline orchestration. What is Kestra's strongest differentiator for this specific buyer?",
          options: [
            "YAML-based workflow definition, which makes workflows readable by non-Python engineers and compatible with GitOps practices",
            "Better performance on large DAGs with many parallel tasks",
            "A larger plugin ecosystem for connecting to ML tools",
            "More active open-source community",
          ],
          correct: 0,
          explanation:
            "For data engineering teams, Kestra's strongest differentiator is the YAML model. Prefect workflows are Python code — they live in the ML team's Python codebase and require Python to read and modify. Kestra YAML workflows are language-agnostic, readable by DevOps and platform engineers without Python knowledge, and fit naturally into GitOps workflows. This is the wedge argument that resonates with this buyer.",
        },
      ],
      resources: [
        {
          title: "Kestra Documentation",
          url: "https://kestra.io/docs",
          description: "Read the core concepts section — flows, tasks, triggers, executions — from a user perspective, not a developer perspective.",
        },
      ],
    },
    {
      id: "1-2",
      unitId: "unit1",
      companySlug: "kestra",
      title: "The AI Workflow Opportunity",
      tldr:
        "What customers are actually trying to do with AI in their workflows today — and the gap that an orchestration platform is uniquely positioned to fill. This is the market thesis you need to be able to articulate.",
      skills: ["Market analysis", "AI workflow patterns", "Product opportunity framing"],
      xp: 25,
      content: [
        {
          heading: "What customers are actually asking for",
          body: `Kestra's customer base is asking for AI in three distinct ways. Understanding the difference is important because they're very different product problems:\n\n**1. AI features within workflows**\nCustomers want to use LLMs as steps in existing workflows: "summarize this document," "classify this ticket," "extract these fields," "generate this email." These are task-level integrations — the orchestration layer provides scheduling, retry, observability, and chaining. The AI is a plugin, not the workflow itself.\n\n**2. AI agent workflows**\nCustomers want to run AI agents as first-class workflows: a loop that perceives inputs, calls tools, makes decisions, and acts — with Kestra providing the infrastructure. This is a bigger bet: it requires new task types (LLM call, tool invocation, human gate, loop control) and new observability primitives (per-step agent traces, decision logging).\n\n**3. AI that helps build workflows**\nCustomers want AI to make Kestra easier to use: generate flows from natural language, debug failing executions, suggest optimizations. This is AI as the product surface, not AI as the workflow content.\n\nAll three are real opportunities. A PM's job is to decide which to prioritize and why.`,
          goAnalogy: {
            term: "Sente",
            reading: "せんて",
            meaning:
              "Having the initiative — forcing the opponent to respond. Choosing which AI opportunity to pursue is sente: own one direction decisively and competitors must respond to you, rather than you responding to them.",
          },
        },
        {
          heading: "Why orchestration is the right layer for AI agents",
          body: `There's a real product thesis here that a Kestra PM needs to be able to articulate:\n\n**The problem with agent frameworks alone (LangGraph, CrewAI, etc.):**\n- They're Python libraries — they live in a developer's local environment or a container with no native scheduling, observability, or retry infrastructure\n- When an agent run fails at step 7 after 40 minutes, you start over from step 1\n- There's no native concept of "pause and wait for a human to approve this" that survives process restarts\n- Audit logs are whatever you print to stdout\n- Parallel agent runs with shared state require custom synchronization\n\n**What orchestration provides natively:**\n- Durable execution: a workflow interrupted at step 7 resumes at step 7\n- Native scheduling: run this agent every hour, or trigger it on this webhook\n- Human-in-the-loop: a pause/resume task type that blocks until approval\n- Observability: every step is a tracked execution with inputs, outputs, and timing\n- Parallelism: fan-out to N parallel agent workers, fan-in when they complete\n- Retry with backoff: built into every task type\n\n**The PM thesis:** Agent framework users who try to run agents in production eventually reinvent all of this. Kestra provides it natively. The opportunity is to make Kestra the obvious platform for production AI agent workflows.`,
        },
        {
          heading: "What serious AI workflow use cases look like",
          body: `Kestra's job posting explicitly says: "We have seen too many AI candidates whose entire experience is one demo or one prototype." This is a hint about what they're looking for.\n\n**Demo/prototype AI use case signals:**\n- No error handling — assumes the LLM always returns valid output\n- No scale — works for 10 records, untested at 10,000\n- No monitoring — you don't know when it fails\n- No cost tracking — you don't know what it costs to run\n- One-shot — runs once manually, not reliably on a schedule\n\n**Serious AI workflow use case signals:**\n- Runs on a schedule or trigger, not manually\n- Has retry logic for LLM API failures (rate limits, timeouts)\n- Validates and handles malformed LLM output\n- Has observability: you can see what ran, when, what it returned\n- Has a cost you can predict and explain\n- Has a metric you track to know it's working\n\n**Examples of serious use cases in an orchestration context:**\n- Nightly customer churn risk scoring across 50,000 accounts (LLM-powered, with fallback to rule-based when API times out)\n- Real-time support ticket classification and routing, running at 1,000 tickets/hour, with accuracy tracked against human labels\n- Automated contract review workflow: extract fields, flag anomalies, route for human review — with the human-in-the-loop gate pausing the workflow until approval\n- Document ingestion pipeline that extracts, chunks, embeds, and indexes 10,000 documents per day for a RAG system`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A potential enterprise customer says: 'We want to use AI to summarize customer support tickets before they reach agents.' Is this a serious AI workflow use case or a demo? What's the key question to ask?",
          options: [
            "It's a serious use case if the customer has more than 1,000 tickets per day",
            "It's a demo until they've defined: what happens when the LLM summarizes incorrectly, how they'll track summary quality over time, and what the fallback is when the API is unavailable",
            "It's a serious use case because it has a clear business value (time saved per agent)",
            "It's a demo until they've tested it with their actual ticket data",
          ],
          correct: 1,
          explanation:
            "Volume is not the signal — a demo can process 10,000 tickets as long as nothing fails. The serious use case signal is: what happens when it goes wrong? Failure handling (what if the summary is wrong?), quality tracking (how do you know it's working?), and availability planning (what if the API is down?) are the questions that distinguish a production feature from a prototype.",
        },
        {
          type: "scenario",
          prompt:
            "A customer asks for 'AI-powered workflow generation — type a description and Kestra generates the YAML.' Should this be on your roadmap? Walk through your analysis.",
          sampleAnswer:
            "This is a real opportunity but a product complexity trap if you're not careful. The analysis: (1) **Demand signal** — this is the most commonly requested AI feature in developer tools right now. It's real demand. (2) **Value delivered** — for simple flows, LLM-generated YAML works well today (Kestra already has enough examples in its training data). For complex flows with custom plugins, it breaks down quickly. (3) **The actual bottleneck** — for most Kestra users, YAML authoring is not the main pain. Debugging, monitoring, and connecting the right plugins are. Generating incorrect YAML that silently fails is worse than writing your own. (4) **What to build instead** — 'generate a starting flow' is much safer than 'generate a production flow.' The right scope: an AI assistant that generates a template based on a description, which the user then customizes. Not a one-click 'generate and deploy.' (5) **Decision** — I'd put a scoped version (template generation) in the roadmap as a near-term win, and hold 'generate complex production flows' until the underlying model quality and evaluation infrastructure is ready.",
          keyPoints: [
            "High demand doesn't mean high priority — analyze what problem it actually solves and for whom",
            "The scope of 'template generation' vs 'full production flow generation' is a critical PM call",
            "Silent failures (wrong YAML that parses but does the wrong thing) are worse than obvious failures",
            "What's the fallback when the generated flow is wrong? That answer determines the product design",
          ],
        },
      ],
      resources: [
        {
          title: "Kestra Blog",
          url: "https://kestra.io/blogs",
          description: "Read recent posts on AI workflows and agent use cases — these reflect what Kestra's product team is thinking about.",
        },
      ],
    },
    {
      id: "1-3",
      unitId: "unit1",
      companySlug: "kestra",
      title: "The Competitive Landscape (PM View)",
      tldr:
        "How Kestra's competitors are approaching AI, where the gaps are, and how to position Kestra's AI PM roadmap against the market. Not a deep tech comparison — a strategic framing.",
      skills: ["Competitive analysis", "Market positioning", "Strategic framing"],
      xp: 25,
      content: [
        {
          heading: "The main competitors and their AI moves",
          body: `**Apache Airflow**\nThe incumbent. Massive community, most integrations. AI strategy: Airflow has LLM operator plugins (community-contributed) but no coherent AI story. Their strength is the existing user base and integrations; their weakness is the Python-only model and complex setup. AI-native teams often find Airflow heavyweight for agent workflows.\n\n**Prefect**\nPython-native, cleaner developer experience than Airflow. Has added AI-specific features (LLM task decorators). Strong in ML teams that already use Python. Weakness: Python-only limits reach outside ML/data teams.\n\n**Dagster**\nAsset-centric orchestration — workflows produce named assets (tables, models, features). Strong in data engineering teams with complex dependency graphs. AI strategy: the asset model works well for ML pipelines but less naturally for event-driven agent loops.\n\n**Temporal**\nDurable execution for application workflows. Strong for long-running, stateful processes (think: order fulfillment, multi-step approval workflows). AI strategy: increasingly used for agent durability, but requires writing workflow logic in an SDK (Go, Java, TypeScript) — higher barrier than YAML. The enterprise durability model is a direct overlap with Kestra's human-in-the-loop use case.\n\n**LangChain / LangGraph**\nNot orchestration platforms — agent frameworks. But they've become the default choice for teams building agents in Python. They solve the agent logic problem, not the infrastructure problem. Their users eventually need what Kestra provides (scheduling, observability, durability). This is a potential integration partner and a potential acquisition target for someone.`,
          goAnalogy: {
            term: "Shicho",
            reading: "しちょう",
            meaning:
              "A ladder sequence — a chain of forced moves where the outcome is determined by distant board conditions. The competitive landscape is a shicho: Kestra's AI moves are partially determined by what Airflow and Temporal do in corners of the board that seem unrelated right now.",
          },
        },
        {
          heading: "Kestra's AI PM positioning opportunity",
          body: `The competitive map reveals a genuine gap:\n\n**No orchestration platform has a coherent AI product story yet.** Airflow has community plugins. Prefect has Python decorators. Dagster has asset definitions. None of them have:\n- A clear first-party LLM task library (opinionated, documented, production-ready)\n- Native agent loop support (perceive → reason → act → observe, with durability)\n- AI-assisted workflow building that's actually integrated into the product (not a hackathon demo)\n- Observability designed for AI: cost per run, token usage, model accuracy over time\n\n**Kestra's PM opportunity:** Define what "AI-native orchestration" means before Airflow or Prefect does. The company that ships a coherent, production-grade AI story in the next 12 months wins the mindshare in a market that doesn't have a clear winner yet.\n\n**What that means for the roadmap:**\n- Build opinionated, first-party AI task types (not community plugins)\n- Instrument AI-specific metrics natively (cost, token usage, model latency per workflow run)\n- Make human-in-the-loop a first-class citizen (the pause/resume pattern that AI agent workflows need)\n- Build the eval and quality story — customers need to know when their AI workflow degrades`,
        },
        {
          heading: "Who you're competing for (the buyer profile)",
          body: `The AI PM role is targeting a specific buyer expansion:\n\n**Current Kestra buyers:** data engineers, platform/DevOps teams, some ML engineers. They evaluate tools based on: plugin ecosystem, scalability, observability, cost.\n\n**Target expansion buyers:** AI-forward engineering teams, ML platform teams, and — critically — the new "AI engineer" persona that doesn't have a clean legacy category. These buyers evaluate tools based on: how well it handles agent patterns, how observable AI runs are, whether they can ship agents without custom infrastructure.\n\n**The PM challenge:** The roadmap has to serve existing buyers (don't break what they have) while acquiring new AI buyers (build for patterns they need). This tension is the central product challenge of the role.\n\n**What it means in practice:** Don't build a separate "AI orchestration" product. Build AI features into the core Kestra experience, so existing users get them for free and new AI users discover Kestra through them.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "An enterprise customer currently uses Airflow for data pipelines and is now evaluating tools for running AI agent workflows. They've already invested heavily in Airflow's plugin ecosystem. What is Kestra's strongest argument to this buyer?",
          options: [
            "Kestra is easier to deploy and maintain than Airflow",
            "Kestra's YAML model and native AI task types let them run agent workflows without writing Python application code, and they can migrate incrementally — running both systems in parallel",
            "Kestra has better performance on large parallel workloads",
            "Kestra has a larger ecosystem of AI-specific integrations than Airflow",
          ],
          correct: 1,
          explanation:
            "The strongest argument addresses the actual objection ('we've already invested in Airflow') and reframes the choice: Airflow is strong for data pipelines; Kestra is the right tool for agent workflows that don't fit the Airflow Python model. Incremental migration (run Kestra for new AI workflows, keep Airflow for existing pipelines) removes the switching cost objection. This is a land-and-expand motion, not a rip-and-replace pitch.",
        },
        {
          type: "multiple-choice",
          question:
            "Temporal is increasingly used for AI agent durability. If Temporal adds YAML-based workflow definition, how does this change Kestra's competitive position?",
          options: [
            "It significantly weakens Kestra because Temporal's durability model is stronger",
            "It's not a major threat because Temporal's SDK model is deeply embedded and they're unlikely to pivot to YAML",
            "Kestra should immediately add SDK-based workflow definition to compete with Temporal's model",
            "This would force Kestra to specialize only in data engineering workflows",
          ],
          correct: 1,
          explanation:
            "Temporal's architecture is built around SDK-based, code-first workflow definitions. YAML is not a cosmetic layer — it requires fundamental changes to how workflows are defined and executed. A Temporal pivot to YAML is technically possible but strategically unlikely given their existing developer community and product identity. The more realistic threat from Temporal is in the durability/human-gate use case, which Kestra should prioritize with its own native implementation rather than waiting for Temporal to move.",
        },
      ],
      resources: [
        {
          title: "Kestra vs. Airflow (Kestra Blog)",
          url: "https://kestra.io/blogs/2023-07-05-kestra-vs-airflow",
          description: "Read Kestra's own competitive framing — useful context for how the company positions itself.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "What does Kestra's 'universal orchestration' positioning mean for the AI PM role specifically?",
      options: [
        "The AI PM should build AI features that appeal to all possible user types simultaneously",
        "The AI PM's roadmap must serve a heterogeneous user base (data engineers, DevOps, ML teams, business ops) — AI features need to be generic enough to be useful across verticals, not optimized only for one persona",
        "The AI PM should focus exclusively on enterprise use cases since universal tools need enterprise anchor customers",
        "The AI PM should prioritize integrations over features since universal tools win on connectivity",
      ],
      correct: 1,
      explanation:
        "Universal positioning creates a PM challenge: you can't build narrowly for one persona without risking relevance for others. The AI PM role at Kestra requires thinking about AI features that are valuable for data engineers AND DevOps teams AND ML practitioners — not building an ML-only or data-only AI story.",
    },
    {
      type: "multiple-choice",
      question: "Kestra closed a $25M Series A in March 2026. What does this timing suggest about the primary expectation for the AI PM hire?",
      options: [
        "Build and ship quickly to show investors the AI roadmap is moving",
        "Find real, validated AI workflow use cases before committing engineering resources — the Series A funds growth, but the AI PM needs to find the right growth vector, not just any growth vector",
        "Focus on enterprise sales support — Series A companies need PM help with pre-sales technical work",
        "Expand the open-source community by building AI features that attract new developer users",
      ],
      correct: 1,
      explanation:
        "Series A companies can afford to move fast but can't afford to move in the wrong direction. The AI PM hire is explicitly about avoiding the 'demo and prototype' trap — finding AI use cases with real enterprise value. The $25M gives runway to be deliberate; the PM's job is to use that deliberation well.",
    },
    {
      type: "multiple-choice",
      question: "A PM candidate asks: 'Should Kestra build a standalone AI agent product, separate from the core orchestration platform?' What's the strongest argument against this approach?",
      options: [
        "A standalone product would require too much engineering investment",
        "Kestra's existing users would not use a separate product — AI features must be in the core platform to get organic adoption from the established user base and to avoid fragmenting the product",
        "Standalone AI products have worse market fit than integrated features",
        "Competitors don't have standalone AI products, so Kestra shouldn't either",
      ],
      correct: 1,
      explanation:
        "The strongest argument against a standalone product is the existing user base. Kestra's 10,000+ organizations are already in the core product — AI features accessible from there get immediate distribution. A separate product requires a separate go-to-market, separate onboarding, separate positioning. The 'universal' strategy only works if AI is integrated, not siloed.",
    },
  ],
  quizXp: 30,
};
