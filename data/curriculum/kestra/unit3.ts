import type { Unit } from "@/data/types";

export const kestraUnit3: Unit = {
  id: "unit3",
  title: "The Competitive Landscape",
  description:
    "Airflow, Prefect, Dagster, Temporal, n8n, Argo Workflows — how they work, what they're great at, where they break down, and where Kestra wins, loses, and overlaps. The honest competitive map a PM needs.",
  companySlug: "kestra",
  goTerm: "Haengma",
  goReading: "はえんま",
  goMeaning:
    "Direction of movement — the strategic orientation of a group of stones. A good competitive map is haengma: you need to know which direction each competitor is moving to understand where the board is going.",
  color: "ice",
  lessons: [
    {
      id: "3-1",
      unitId: "unit3",
      companySlug: "kestra",
      title: "Airflow: The Incumbent and Its Limits",
      tldr:
        "Apache Airflow is the market-defining orchestration platform. Understanding exactly where it's strong, where it struggles, and why teams migrate away from it is the foundation of Kestra's competitive positioning.",
      skills: ["Competitive analysis", "Airflow architecture", "Migration triggers"],
      xp: 25,
      content: [
        {
          heading: "Why Airflow won",
          body: `Apache Airflow, open-sourced by Airbnb in 2015, became the default data orchestration platform for two clear reasons:\n\n**1. Open source at the right time.** The data engineering function was scaling rapidly at tech companies from 2015–2019. Airflow arrived as free, production-ready software with an active community when teams needed to move fast.\n\n**2. The DAG mental model mapped well to data pipelines.** "Extract from source, transform, load to destination" maps cleanly onto a directed acyclic graph. Tasks depend on other tasks; the execution order is determined by dependency edges. For batch data pipelines, this model is intuitive.\n\n**The result:** Airflow became the category-defining platform. It has the largest community, the most operator ecosystem integrations, the most Stack Overflow answers, the most tutorials. New data engineers are taught Airflow as the default. This is a powerful moat — not technical, but social and educational.\n\n**Managed Airflow (Astronomer, Cloud Composer, MWAA):** the complexity of running Airflow operationally created a managed services market. Astronomer (the commercial Airflow company) runs managed Airflow. Google Cloud Composer and AWS MWAA are cloud-native managed Airflow. This tells you how painful self-hosted Airflow is — companies pay premium to not run it themselves.`,
          goAnalogy: {
            term: "Thickness",
            reading: "あつみ",
            meaning:
              "Accumulated influence from stones that don't score directly. Airflow's community size, tutorials, and Stack Overflow coverage are thickness — they influence conversations without being on the board in a specific position.",
          },
        },
        {
          heading: "Where Airflow struggles",
          body: `**Python-only by design:**\nAirflow DAGs are Python files. Every task is a Python object (an Operator). Running a Bash script or SQL query requires wrapping it in the BashOperator or SQLOperator — Python classes that call non-Python code. For teams whose workflows are heterogeneous (Python + Terraform + dbt + shell scripts), this creates friction: everything must be proxied through Python.\n\n**The scheduler as a single point of failure:**\nHistorically, Airflow's scheduler was a single process. In Airflow 2.0, this improved with HA scheduler support, but the architectural complexity of Airflow's components (scheduler + web server + executor + metadata database + workers) is significant. Production Airflow requires expertise to run reliably at scale.\n\n**DAG parsing overhead:**\nAirflow parses all DAG files on a schedule to discover changes. In large deployments with hundreds of DAGs, this parsing overhead becomes a real operational concern. DAG files that have errors can crash the scheduler.\n\n**Dynamic DAGs are complex:**\nBecause DAGs are defined as Python code that runs at import time, creating DAGs that adapt to runtime data (e.g., "create one task per item in this database table") requires workarounds that are fragile and hard to debug.\n\n**Non-engineers can't read or modify DAGs:**\nA Kestra YAML flow is readable by any engineer, including those without Python background. An Airflow DAG is Python code that requires understanding Python, Airflow's API, and often the specific version of operators being used. This is a real organizational constraint for teams with non-Python engineers.\n\n**Migration trigger signals to look for:**\n- Team is growing and adding non-Python engineers who struggle with DAGs\n- Operational cost of running Airflow is high (dedicated SRE time)\n- Need to orchestrate non-data workflows (infrastructure, DevOps) alongside data pipelines\n- Dynamic workflow patterns are required (iterate over a runtime list, branch on API response)`,
        },
        {
          heading: "Airflow 2/3 and the market transition",
          body: `**Airflow 2.0 (2020):** addressed some scaling issues, introduced HA scheduler, improved the UI and API. Still Python-centric.\n\n**Airflow 3.0 (in progress):** significant architectural changes being discussed in the community. The conversation around Airflow 3 has also surfaced questions about the future of some features that teams rely on — creating migration consideration windows.\n\n**What this means for Kestra:**\nAirflow 2→3 transitions are migration events. When teams evaluate upgrading, they also evaluate alternatives. Kestra's positioning during an Airflow major version transition: "if you're already re-evaluating your orchestration stack, consider whether YAML-first + universal workflows + AI capabilities is the right direction."\n\n**The managed Airflow displacement pattern:**\nAstronomer's managed Airflow is expensive. Teams paying significant monthly fees for managed Airflow are the most receptive to Kestra alternatives — the switching cost conversation is framed against the ongoing managed service cost, not just engineering migration effort.\n\n**Where Kestra explicitly positions against Airflow:**\nKestra publishes comparison posts (kestra vs. airflow, airflow migration guides) specifically targeting teams evaluating Airflow alternatives. These posts are keyword-targeted and SEO-driven — they capture teams actively searching for Airflow migration paths.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A data engineering team uses Airflow and is happy with it for their Python-based ETL pipelines. The DevOps team at the same company wants to use Kestra for infrastructure automation. Should Kestra compete with Airflow in this account, or coexist?",
          options: [
            "Compete and try to replace Airflow across the entire organization",
            "Coexist in the short term: Kestra lands with DevOps for infrastructure automation (use cases Airflow is bad at), establishes internal credibility, then expands when the data team has a reason to migrate (Airflow version upgrade, team growth, new AI use case)",
            "Don't enter accounts that use Airflow — the switching cost is too high",
            "Replace Airflow immediately — the YAML model is superior and the team will appreciate it",
          ],
          correct: 1,
          explanation:
            "The land-and-expand pattern is the right go-to-market for Kestra in Airflow accounts. DevOps automation is a use case Airflow is genuinely bad at (Python-only, data-centric). Landing there with clear value creates a foothold without requiring a migration conversation. Once Kestra is an internal success story, data engineers who are evaluating Airflow alternatives (during an upgrade, when the team grows) have an internal champion. Trying to rip-and-replace happy Airflow users is a long, expensive sale.",
        },
        {
          type: "multiple-choice",
          question:
            "An Airflow user says: 'I have 200 DAGs that work fine. Why would I spend 6 months migrating to Kestra?' What's the honest response?",
          options: [
            "'Kestra is technically superior and worth the migration effort'",
            "'If your 200 DAGs work fine for your current use cases and you're not paying too much in engineering overhead, you probably shouldn't migrate yet. Kestra is worth evaluating when: you need to add non-Python workflows, you're scaling to the point where Airflow's operational complexity is costly, or you want AI workflow capabilities that Airflow's ecosystem doesn't support natively'",
            "'Managed Airflow costs make migration economically obvious'",
            "'Kestra's YAML model will make your team more productive immediately'",
          ],
          correct: 1,
          explanation:
            "Intellectual honesty is the right competitive posture here. A PM who understands the product knows when a migration is and isn't warranted. Pushing migration when the customer doesn't have a real problem is bad for trust and bad for long-term relationships. The honest answer also sets up the right timing: the customer knows exactly when to come back to Kestra (when the circumstances change).",
        },
      ],
      resources: [
        {
          title: "Kestra Docs: Migration from Airflow",
          url: "https://kestra.io/docs/migration-guide/airflow",
          description: "Kestra's official migration guide — shows how they position the technical migration.",
        },
      ],
    },
    {
      id: "3-2",
      unitId: "unit3",
      companySlug: "kestra",
      title: "Prefect, Dagster, Temporal & n8n",
      tldr:
        "The modern alternatives: Prefect's Python-first DX, Dagster's asset model, Temporal's durable execution, and n8n's no-code approach. What each is genuinely great at, where they stop, and how Kestra relates to each.",
      skills: ["Competitive analysis", "Alternative platforms", "Market segmentation"],
      xp: 25,
      content: [
        {
          heading: "Prefect: modern Python orchestration",
          body: `**What Prefect is:**\nA Python-native workflow orchestration platform with a cleaner developer experience than Airflow. Workflows are defined using Python decorators (\`@flow\`, \`@task\`) — any Python function can become a task.\n\n**What Prefect does well:**\n- Dramatically lower Airflow DX friction: no DAG files, no import-time evaluation, no scheduler parsing issues\n- Strong local development story: flows run locally the same way they run in production\n- Cloud-hosted control plane: Prefect Cloud manages the UI, API, and execution history; customers run workers themselves\n- Python-first is a genuine strength for ML and data science teams who live in Python\n\n**Where Prefect stops:**\n- Still Python-only — the same fundamental limitation as Airflow for non-Python use cases\n- Less mature enterprise features than Kestra (RBAC, multi-tenant namespaces, SLAs)\n- Less native support for non-data use cases (DevOps, infrastructure automation)\n\n**Competitive relationship with Kestra:**\nPrefect and Kestra compete most directly for Python-heavy data engineering teams evaluating Airflow alternatives. Kestra's win: YAML readability for non-Python teams, broader use case coverage, AI agent native support. Prefect's win: Python teams who want a native Python API and don't need YAML accessibility.\n\n**The one thing Prefect has over Kestra:** the Python decorator model means zero friction for Python engineers. \`@flow\` on a function is truly frictionless. YAML, even simple YAML, is still a context switch.`,
          goAnalogy: {
            term: "Ko",
            reading: "こう",
            meaning:
              "A repeated position — a fight that neither player can win unilaterally. The Kestra vs. Prefect battle for Python-heavy data teams is ko: neither can definitively win without the other making mistakes, because both serve the Python DX need adequately.",
          },
        },
        {
          heading: "Dagster: asset-centric orchestration",
          body: `**What Dagster is:**\nOrchestration centered on data assets rather than tasks. Instead of defining "run task A, then task B," Dagster defines "the Snowflake users table depends on the raw events table, which depends on the Kafka consumer flow." The execution plan is derived from the asset dependency graph.\n\n**What Dagster genuinely does better than Kestra:**\n- **Data lineage**: which upstream assets did this output depend on? If the raw events table had bad data, which downstream tables were affected? Dagster answers this natively; Kestra doesn't.\n- **Data quality and freshness tracking**: assets have freshness policies; Dagster knows which assets are stale and needs to be materialized\n- **Partitioned assets**: an asset can be partitioned by date, region, or any other dimension, and Dagster tracks materialization status per partition\n- **Cross-repository lineage**: in large data platforms, assets span multiple teams and repositories. Dagster's asset catalog provides a unified view.\n\n**Where Dagster stops:**\n- The asset model is genuinely harder to apply outside data pipelines. "What's the asset here?" is an awkward question for an infrastructure automation workflow or an AI agent loop.\n- Less plugin breadth than Kestra — Dagster is more focused on the data engineering + ML use case\n- Steeper learning curve for the asset model vs. Kestra's YAML flow model\n\n**Competitive relationship:** Dagster and Kestra have limited direct overlap. Dagster is the right choice for data platform teams who need lineage and asset-centric data quality. Kestra is the right choice for teams who need broader workflow automation beyond data pipelines.`,
        },
        {
          heading: "Temporal and n8n: the edge cases",
          body: `**Temporal: durable application workflow execution**\n\nTemporal is not an orchestration platform in the Airflow/Kestra sense — it's a durable workflow execution engine for application code. Workflows are written in SDKs (Go, Java, TypeScript, Python) as ordinary code; Temporal makes them durable (survive process restarts, deployments, crashes).\n\n*What Temporal is great for:* long-running stateful processes in application codebases — order fulfillment, loan approval, multi-step user onboarding flows, payment processing. These workflows run for minutes to days and must survive infrastructure failures.\n\n*Where it stops:* Temporal workflows require writing application code in a Temporal SDK. There's no YAML, no UI-based flow builder, no scheduling UI for non-engineers. It's not a tool for data engineers or operations teams — it's an application infrastructure layer for backend engineers.\n\n*Competitive relationship:* Temporal overlaps with Kestra's human-in-the-loop and long-running workflow use cases. For application engineers who need durable workflows inside their codebase, Temporal wins. For operations/data teams who need observable, scheduled workflows without writing application code, Kestra wins.\n\n**n8n: no-code/low-code automation**\n\nn8n is a visual workflow automation tool (like Zapier or Make, but self-hostable) that connects SaaS apps and triggers actions. It targets business users and operations teams who need workflow automation without engineering.\n\n*Competitive relationship:* minimal direct overlap with Kestra. n8n is point-and-click for business workflows. Kestra is YAML-defined for engineering teams. They serve different buyers in adjacent markets. The intersection: some technical business users who outgrow n8n look at Kestra for more powerful automation.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A startup with a 5-person data team (all Python engineers) is building their first data platform. They're choosing between Prefect and Kestra. What's the honest assessment?",
          options: [
            "Kestra is always the right choice because it's more universal",
            "For a Python-only team with no current need for non-Python workflows or enterprise multi-tenancy, Prefect's Python-native DX may be a better fit. Kestra's YAML model is a meaningful advantage for non-Python teams but an additional layer of abstraction for Python teams who want frictionless workflow definition",
            "Prefect is always better for small teams",
            "They should use both — Prefect for Python pipelines, Kestra for everything else",
          ],
          correct: 1,
          explanation:
            "Intellectual honesty about competitive positioning is a PM skill. For a Python-only team, Prefect's zero-friction Python decorator model is genuinely easier. Kestra's YAML accessibility is most valuable when the team includes non-Python engineers, when workflows span multiple languages, or when GitOps YAML governance matters. A PM who understands this can have honest conversations with customers rather than overselling.",
        },
        {
          type: "multiple-choice",
          question:
            "An e-commerce company wants to build a 'returns processing' workflow: customer submits return → fraud check (external API) → warehouse notification → refund processing (financial system) → customer confirmation email. The workflow can take 3 days and must survive server deployments. Which platform is the best fit?",
          options: [
            "Kestra — it has human-in-the-loop and webhook support",
            "Airflow — it handles multi-step dependencies",
            "Temporal — the workflow lives in an application codebase, must survive deployments and crashes, and is a business-critical durable process that maps directly to Temporal's core value proposition",
            "Prefect — it has a clean Python API for complex workflows",
          ],
          correct: 2,
          explanation:
            "This is a textbook Temporal use case: application-level durable workflow, 3-day duration, must survive infrastructure events, business-critical. The refund processing and fraud check are calls to internal services — this is application code, not data pipeline orchestration. Kestra could handle parts of this, but Temporal's SDK model with its durability guarantees is the purpose-built solution. A Kestra PM should recognize when Temporal is the right answer — it defines where Kestra should focus its differentiation.",
        },
        {
          type: "scenario",
          prompt:
            "A VP of Engineering asks you: 'We use Temporal for our application workflows and Airflow for our data pipelines. Does Kestra give us a reason to add a third orchestration tool?' How do you answer?",
          sampleAnswer:
            "Honestly, probably not in the short term — and that's the right answer to give them. Temporal is the right tool for durable application workflows; Airflow is an established data pipeline tool. Adding a third orchestration platform has real costs: team training, operational overhead, cross-tool observability gaps. The cases where Kestra justifies joining this stack are specific: (1) your team is adding AI agent workflows that don't fit cleanly into Airflow's Python DAG model, (2) your DevOps team needs infrastructure automation that neither Temporal nor Airflow handles well, (3) Airflow's operational overhead is becoming expensive and you're evaluating alternatives. I'd rather understand your pain points with Temporal and Airflow than sell you a platform you don't need. If you're in an Airflow migration window or starting to build AI workflows, that's when Kestra's value is clearest.",
          keyPoints: [
            "Honest answer: if Temporal and Airflow are working, don't add Kestra for its own sake",
            "AI agent workflows and DevOps automation are the specific gaps where Kestra adds value",
            "The Airflow migration window and new AI use cases are the right entry points",
            "A PM who understands competitive boundaries earns more trust than one who oversells",
          ],
        },
      ],
      resources: [],
    },
    {
      id: "3-3",
      unitId: "unit3",
      companySlug: "kestra",
      title: "Where Kestra Wins, Loses, and the AI Differentiation",
      tldr:
        "The honest competitive matrix: where Kestra clearly wins, where competitors are stronger, where the AI angle changes the calculation, and what the PM should know about defending Kestra's position.",
      skills: ["Competitive positioning", "Win/loss analysis", "AI differentiation"],
      xp: 20,
      content: [
        {
          heading: "Where Kestra wins today",
          body: `**1. Multi-persona orchestration (data + DevOps + business ops)**\nNo competitor handles all three as a single platform with a single workflow model. Airflow and Prefect are data-only; Temporal is application-dev; n8n is business-user. Kestra's YAML model is readable and usable across all three personas. For organizations that want a single orchestration platform for multiple teams, Kestra has no direct competition.\n\n**2. Language-agnostic task execution**\nKestra runs Python, Bash, Go, SQL, Node.js, R, and more as native first-class task types without subprocess wrappers. For DevOps and infrastructure teams with heterogeneous toolsets, this is a genuine advantage.\n\n**3. YAML-first governance and GitOps**\nFor organizations that want workflows to be code-reviewed, version-controlled, and deployed via CI/CD pipelines, Kestra's YAML model is the most natural fit. Python DAG code can go through code review, but YAML diffs are more readable and less error-prone for reviewers without deep Airflow expertise.\n\n**4. AI native — a window that won't stay open long**\nKestra has shipped first-party AI capabilities in 1.0: AI Copilot, AI Agents (io.kestra.plugin.ai.agent.AIAgent), MCP Resources, Agent Skills. No other orchestration platform has a coherent first-party AI story yet. This window will close as Airflow's ecosystem adds AI plugins and Prefect ships native AI support — the PM's job is to widen this window by building AI capabilities that are harder to replicate.`,
          goAnalogy: {
            term: "Seki",
            reading: "せき",
            meaning:
              "Mutual life — a position where neither player can attack without dying. The Kestra vs. Airflow dynamic in Python data engineering accounts is seki: Kestra can't easily displace happy Airflow users, and Airflow can't extend to the DevOps and AI use cases where Kestra wins.",
          },
        },
        {
          heading: "Where competitors are stronger",
          body: `**Data lineage and asset tracking (Dagster wins)**\nKestra has no native concept of data assets, freshness tracking, or partitioned materialization. For data platforms where "which downstream tables broke when the upstream data was corrupted?" is a critical question, Dagster's asset model is genuinely better.\n\n**Python engineering DX (Prefect wins)**\nFor Python-only teams, the zero-friction decorator model is faster to adopt than YAML. Kestra's editor and AI Copilot help, but Python engineers generally prefer writing Python to writing YAML.\n\n**Application workflow durability (Temporal wins)**\nFor long-running, stateful workflows that live in application code and must survive deployments, Temporal's durability model is purpose-built. Kestra's Pause task and human-in-the-loop support are good but not Temporal-grade for this specific use case.\n\n**Community and ecosystem size (Airflow wins)**\nAirflow's community is still far larger than Kestra's. More tutorials, more Stack Overflow coverage, more operational knowledge in the market. For teams evaluating risk and wanting to hire engineers who already know the tool, Airflow's community size is a real advantage.\n\n**The honest implication:** Kestra should not try to win data lineage deals against Dagster, Python DX deals against Prefect, or application durability deals against Temporal. These are positions of weakness. The PM's job is to find the scenarios where Kestra's strengths are the deciding factor.`,
        },
        {
          heading: "How AI changes the competitive calculation",
          body: `The AI workflow opportunity genuinely reshapes the competitive map:\n\n**Why AI agent workflows are different from data pipelines:**\n- Agent loops are not DAGs — they're iterative, adaptive, non-deterministic. Airflow's DAG model struggles with "run until the agent decides it's done."\n- LLM API calls fail differently than database queries: rate limits (429), context length limits, inconsistent output structure, cost surprises. These need first-class handling.\n- Observability for AI is different: token usage, cost per run, model accuracy over time, per-step agent reasoning — none of these are in Airflow's or Prefect's standard observability model.\n- Human-in-the-loop for AI agents (a human approves a critical action before the agent proceeds) maps directly to Kestra's Pause task — something no competitor has as a first-class concept.\n\n**Kestra's AI differentiation vector:**\nThe platform that ships coherent, production-grade AI workflow infrastructure first captures the AI engineering mindshare. Kestra's 1.0 AI features (AI Agents, AI Copilot) are the opening moves. The defensible position requires: first-party LLM task types that handle failure modes gracefully, native agent loop support with per-step observability, cost tracking as a first-class execution metric, and human-in-the-loop as a native flow pattern.\n\n**The window:** Airflow and Prefect are community-driven in this area — their AI task types come from the plugin ecosystem, not from the core team. Kestra's first-party approach should produce higher quality, better documented, and more integrated solutions. This window is 12–18 months.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A prospect says: 'Airflow has an LLM provider ecosystem through its plugin community. Why should we use Kestra's first-party AI agent support instead?' What's the strongest response?",
          options: [
            "'Kestra has more LLM provider integrations than Airflow'",
            "'Community plugins are built and maintained by third parties with varying quality, documentation, and update cadence. Kestra's first-party AI Agent is built, documented, tested, and updated by the Kestra team — it's part of the platform, not an addon. It also integrates natively with Kestra's execution model: retry, observability, cost tracking, and the human-in-the-loop Pause task are built-in, not bolted on'",
            "'Airflow's Python model is harder to use with AI than Kestra's YAML model'",
            "'Kestra has a dedicated AI team that Airflow does not'",
          ],
          correct: 1,
          explanation:
            "The first-party vs. community plugin distinction is the real argument. Community plugins have real quality variance: some are well-maintained, others are abandoned when the author moves on. First-party integration means the AI task types are tested against every Kestra release, documented to the same standard as core features, and designed to work with the full platform (retry, observability, cost tracking) rather than being isolated adapters. This is a genuine, sustainable differentiator.",
        },
        {
          type: "multiple-choice",
          question:
            "What is the single most important product investment Kestra should make in the next 12 months to widen the AI differentiation window before competitors close it?",
          options: [
            "Add more LLM provider integrations (more than the current Anthropic, OpenAI, Google AI coverage)",
            "Build per-step AI agent observability: every LLM call, tool invocation, and agent decision logged as a sub-execution with inputs, outputs, token cost, and latency — the audit trail that makes agents trustworthy in enterprise production",
            "Improve the AI Copilot to generate more complex multi-task flows",
            "Build a dedicated AI agent marketplace where users can share agent workflows",
          ],
          correct: 1,
          explanation:
            "Provider coverage (more LLMs) is table stakes — competitors will match it quickly. AI Copilot improvements are useful but not defensible. A marketplace requires community scale. Per-step agent observability is defensible because it requires deep integration with Kestra's execution engine — it's not something a plugin can bolt on. Enterprise AI workflows fail without it: when an agent run takes 3 hours and costs $40 and produces wrong output, 'what did the agent actually do at each step?' is the first question operations teams ask. Answering it natively is the enterprise trust signal.",
        },
      ],
      resources: [],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "Which scenario best describes Kestra's ideal competitive win — where its strengths most clearly dominate?",
      options: [
        "A fintech company with 10 Python data engineers replacing their Airflow data pipelines",
        "A mid-size SaaS company where data engineering (currently on Airflow), DevOps, and ML teams all want a single orchestration platform and are willing to adopt YAML-based workflows — and the ML team is starting to build AI agent workflows",
        "A startup building their first data pipeline with 3 engineers",
        "An enterprise looking to migrate from Control-M for their application workflow automation",
      ],
      correct: 1,
      explanation:
        "The ideal Kestra win is a multi-persona, multi-use-case account where no single-purpose competitor can serve all needs. Data + DevOps + ML with AI workflows is the scenario where 'universal orchestration' has the clearest value proposition. A small startup doesn't need universal orchestration; they need simple. A Python-only data team is Prefect's sweet spot. The multi-team, multi-use-case scenario with an AI workflow component is specifically Kestra's strongest position.",
    },
    {
      type: "multiple-choice",
      question: "What is Kestra's most defensible competitive advantage over the next 18 months?",
      options: [
        "The open-source community size (growing faster than competitors)",
        "The YAML-first model (competitors can't easily add YAML without breaking existing users)",
        "First-party AI workflow infrastructure deeply integrated with Kestra's execution model — retry, observability, cost tracking, human-in-the-loop — built before competitors have coordinated their community plugin approaches",
        "The plugin ecosystem breadth (1300+ plugins is more than any competitor)",
      ],
      correct: 2,
      explanation:
        "YAML is defensible but not unique — other tools could add YAML-based workflow definitions. Plugin ecosystem breadth requires sustained community investment. Community size takes time to build. First-party AI infrastructure integrated with the core execution model is the most defensible: it requires deep engineering investment to replicate, it's designed to work seamlessly with Kestra's unique execution model (not just bolted on), and the 12–18 month window before competitors have comparable first-party solutions is the competitive moat while it exists.",
    },
  ],
  quizXp: 30,
};
