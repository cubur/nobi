import type { Unit } from "@/data/types";

export const kestraUnit2: Unit = {
  id: "unit2",
  title: "The Technical Stack",
  description:
    "Java + Micronaut backend, Vue.js frontend, Kafka, Elasticsearch, PostgreSQL — the Kestra stack decoded for a Product Engineer who needs to contribute across it.",
  companySlug: "kestra",
  goTerm: "Katachi",
  goReading: "かたち",
  goMeaning:
    "Shape — the structural form that determines strength. Your technical fluency in this stack is katachi: the shape of your candidacy determines how every interview exchange resolves.",
  color: "golden",
  lessons: [
    {
      id: "2-1",
      unitId: "unit2",
      companySlug: "kestra",
      title: "Java + Micronaut: The Backend Foundation",
      tldr:
        "Kestra's backend is Java with Micronaut — not Spring Boot. Micronaut's ahead-of-time compilation, dependency injection, and cloud-native design are deliberate choices for an orchestration platform that needs fast startup and low memory overhead at scale.",
      skills: ["Java ecosystem", "Micronaut vs. Spring Boot", "Cloud-native Java"],
      xp: 25,
      content: [
        {
          heading: "Why Java for an orchestration platform",
          body: `Orchestration platforms have specific runtime requirements that influence language choice:\n\n**Long-running processes** — Kestra's server and worker processes run continuously. The JVM's JIT compilation means Java code gets faster over time as the JIT warms up — a benefit for long-running services that's irrelevant to short-lived scripts.\n\n**Concurrency at scale** — coordinating thousands of concurrent task executions requires robust concurrency primitives. Java's threading model, virtual threads (Project Loom, Java 21+), and the rich concurrency library ecosystem (java.util.concurrent) are mature and battle-tested for this use case.\n\n**Strong typing** — an orchestration platform's correctness matters a lot. Mishandling a task state transition or a retry boundary can cause data loss or double-processing. Java's type system and compile-time checks reduce an entire class of bugs.\n\n**Plugin system** — Kestra's plugin architecture is JAR-based. Every plugin is compiled Java (or Kotlin/Groovy via JVM interop). This gives plugins access to the full JVM ecosystem and enables sandboxed class loading — plugins can't interfere with each other's dependencies.\n\n**Ecosystem compatibility** — Kafka clients, Elasticsearch clients, cloud SDKs — all have first-class Java support. For a platform that integrates with many systems, this matters.`,
          goAnalogy: {
            term: "Thickness",
            reading: "あつみ",
            meaning:
              "Stones with influence across the board — not immediately profitable but strategically dominant. Java's ecosystem is thickness: not flashy, not fast to prototype in, but dominant in enterprise infrastructure.",
          },
        },
        {
          heading: "Micronaut vs. Spring Boot: why it matters",
          body: `Most Java developers default to Spring Boot. Kestra chose Micronaut. This is not arbitrary — and the interviewer may ask about it.\n\n**Spring Boot's model:** reflection-based dependency injection at runtime. Spring scans your classpath, finds beans, and wires them together when the application starts. Convenient, but:\n- Slow startup (seconds to tens of seconds for large apps)\n- High memory overhead (reflection metadata stays in memory)\n- Hard to optimize for GraalVM native compilation\n\n**Micronaut's model:** AOT (ahead-of-time) compilation. Dependency injection is resolved at compile time, not runtime. The application starts in milliseconds, uses significantly less memory, and compiles cleanly to GraalVM native images.\n\n**Why this matters for Kestra:**\n- Workers need to start fast — in Kubernetes environments, pods spin up and down; slow startup = poor elasticity\n- Low memory workers = you can run more workers per node = better cost efficiency\n- Testability — Micronaut's AOT model makes unit testing faster and more predictable\n- GraalVM native compilation enables Kestra to ship native binaries with even faster startup and smaller footprint\n\n**For the interview:** you don't need to be a Micronaut expert, but you should understand the tradeoff: Micronaut trades Spring Boot's vast community and ecosystem familiarity for startup speed, memory efficiency, and native compilation support. For a cloud-native orchestration platform, that's the right tradeoff.`,
        },
        {
          heading: "Java in the Kestra codebase: what you'll touch",
          body: `As a Product Engineer at Kestra, your Java work will span several areas:\n\n**Plugin development** — most new integrations are plugins. A Kestra plugin is a Java class that extends the \`Task\` abstract class, declares its inputs/outputs as annotated fields, and implements the \`run()\` method. Writing a plugin for a new AI provider, a new database, or a new trigger type is the most common engineering task for expanding Kestra's capabilities.\n\n**Core task types** — AI agent task types (the primary focus of this role) likely live in the core or a dedicated AI plugin package. You'll be adding new Task implementations and designing their input/output schemas.\n\n**API endpoints** — Kestra's REST API is built with Micronaut. New features often require new API endpoints (e.g., an endpoint to preview a flow's expected resource usage, or to run a flow with AI-generated parameters).\n\n**Worker thread model** — if you're building long-running task types (like an agent loop), you need to understand how Kestra manages threads and when to use async patterns vs. blocking execution.\n\n**Testing** — Kestra uses JUnit 5 and Micronaut Test. Plugins are tested by running them against a real or mocked execution context. Understanding how to write integration tests for task plugins is a practical skill you'll need quickly.\n\nThe job posting says "Java is essential; Python-only backgrounds are not suitable." This is the clearest signal in the JD: they need someone who can contribute to the plugin and core systems, not just write Python scripts that run inside tasks.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "Why does Kestra use Micronaut instead of Spring Boot for its backend?",
          options: [
            "Spring Boot doesn't support Kafka integration, which Kestra requires",
            "Micronaut's AOT compilation produces faster startup, lower memory overhead, and cleaner GraalVM native compilation — critical for cloud-native workers that scale elastically",
            "Micronaut has a larger plugin ecosystem that complements Kestra's plugin architecture",
            "Spring Boot is licensed under terms incompatible with Kestra's open-source model",
          ],
          correct: 1,
          explanation:
            "AOT vs. runtime reflection is the core difference. Micronaut resolves dependency injection at compile time: workers start in milliseconds, use less memory, and support native compilation. For a platform that runs workers as ephemeral Kubernetes pods, these properties matter directly.",
        },
        {
          type: "multiple-choice",
          question:
            "You're writing a new Kestra plugin that calls an AI API with a potentially 5-minute response time. The API supports streaming (SSE). What Java concurrency concern should you design around?",
          options: [
            "Java doesn't support streaming responses from HTTP APIs",
            "A blocking call that holds a thread for 5 minutes reduces worker throughput — use non-blocking async I/O (CompletableFuture or virtual threads) and stream the response back incrementally",
            "Micronaut's AOT model doesn't support async operations in plugin code",
            "Streaming responses exceed Kafka's message size limit when stored as task outputs",
          ],
          correct: 1,
          explanation:
            "A synchronous 5-minute block per task means one worker thread can only run 12 such tasks per hour. Non-blocking async I/O or Java 21 virtual threads let one worker thread serve many concurrent long-running tasks. For an AI task plugin, this is a first-order design concern.",
        },
        {
          type: "multiple-choice",
          question:
            "A Kestra plugin is a Java class that extends the Task abstract class. What does this architectural choice imply about how plugins are isolated from each other?",
          options: [
            "Plugins run in separate JVM processes with no shared memory",
            "Plugins are JAR files loaded via separate classloaders — they can't interfere with each other's dependency versions, enabling plugin authors to use whatever library versions they need",
            "Plugins run in Docker containers that Kestra spins up per task execution",
            "Plugins share a single classloader but are sandboxed by a Java SecurityManager",
          ],
          correct: 1,
          explanation:
            "JAR-based plugins with separate classloaders solve the diamond dependency problem: Plugin A can use library version 1.0 while Plugin B uses version 2.0 without conflict. This is essential for an extensible platform where plugin authors control their own dependencies.",
        },
      ],
      resources: [
        {
          title: "Micronaut Documentation",
          url: "https://docs.micronaut.io/latest/guide/",
          description: "Official Micronaut guide — AOT, dependency injection, HTTP, and testing.",
        },
        {
          title: "Kestra Plugin Developer Guide",
          url: "https://kestra.io/docs/plugin-developer-guide",
          description: "How to build a Kestra plugin — the primary engineering task for this role.",
        },
      ],
    },
    {
      id: "2-2",
      unitId: "unit2",
      companySlug: "kestra",
      title: "Vue.js Frontend & the Kestra UI",
      tldr:
        "Kestra's UI is built with Vue.js and Bootstrap. As a Product Engineer, you'll be adding UI surfaces for new AI features — understanding Vue's component model, reactivity system, and how the UI talks to Kestra's REST API is the minimum bar.",
      skills: ["Vue.js fundamentals", "Component architecture", "API integration"],
      xp: 20,
      content: [
        {
          heading: "Vue.js: the essentials",
          body: `Vue.js is a progressive JavaScript framework for building user interfaces. It's designed to be incrementally adoptable — you can use it as a simple script tag enhancement or build a full SPA (single-page application).\n\n**Core concepts you need:**\n\n**Options API vs. Composition API** — Vue 2 used the Options API (data, methods, computed, mounted as object keys). Vue 3 introduced the Composition API (\`setup()\` function with \`ref()\`, \`computed()\`, \`watch()\`). Kestra's UI likely uses a mix — check their GitHub for the predominant pattern and match it.\n\n**Reactivity** — Vue's reactive system automatically tracks when data changes and updates the DOM. When a task execution status changes (RUNNING → SUCCESS), the UI re-renders the execution badge automatically because the underlying reactive data changed. You don't manually update the DOM.\n\n**Components** — Vue UIs are composed of components: reusable, self-contained pieces of UI with their own template, script, and style. A task execution card is a component. The flow editor is a component. The execution log viewer is a component.\n\n**Props and events** — components communicate via props (data down, from parent to child) and events (messages up, from child to parent). A task status badge component receives a \`status\` prop from its parent and emits a \`retry\` event when the retry button is clicked.\n\n**Vuex / Pinia** — state management for data that's shared across multiple components (the current user, the active namespace, the list of running executions). Kestra likely uses Pinia (the modern Vue 3 state manager) or Vuex.`,
          goAnalogy: {
            term: "Tenuki",
            reading: "てぬき",
            meaning:
              "Playing elsewhere — ignoring a local threat to make a bigger move on the board. Vue's reactivity lets you tenuki from manual DOM management: declare your data, and Vue handles the rest while you focus on product logic.",
          },
        },
        {
          heading: "The Kestra UI architecture",
          body: `Kestra's frontend is a Vue.js SPA that communicates with the Kestra REST API. The UI includes:\n\n**Flow editor** — a YAML editor with syntax highlighting, validation, and auto-complete for Kestra flow syntax. This is likely built on Monaco Editor (the VS Code editor engine) embedded in a Vue component.\n\n**Execution dashboard** — shows all running and historical executions, filterable by namespace, flow, status, and date. Powered by Elasticsearch queries via the API.\n\n**Execution detail view** — shows the DAG visualization of a specific execution, with task states rendered in real-time. Uses WebSocket or polling to get live execution updates.\n\n**Log viewer** — scrollable, filterable logs for each task in an execution. Streaming logs require a live connection (SSE or WebSocket) to the Kestra backend.\n\n**Namespace and flow management** — CRUD interfaces for flows, secrets, variables, and namespace settings.\n\n**For AI features (what you'll build):** new UI surfaces might include:\n- An AI chat interface embedded in the flow editor (ask in natural language, get a flow generated)\n- An execution anomaly detection dashboard (AI-flagged unusual patterns)\n- An agent monitoring view (for flows that run AI agent loops)\n- A prompt/agent configuration UI (for AI tasks that need system prompts and model selection)\n\nUnderstanding how these would integrate into the existing Vue component tree — and how they'd consume the REST API — is what the frontend part of the role requires.`,
        },
        {
          heading: "Bootstrap and the design system",
          body: `Kestra uses **Bootstrap** as its CSS framework, which means utility classes and component library rather than a custom design system.\n\nBootstrap in Vue context typically means either:\n- **Bootstrap-Vue** or **BootstrapVue-Next** — Vue wrappers around Bootstrap components (\`<b-button>\`, \`<b-modal>\`, \`<b-table>\`) that handle ARIA, events, and slot-based customization\n- **Bootstrap CSS + custom components** — using Bootstrap's grid and utility classes directly in Vue templates\n\n**For the Product Engineer role:** you're expected to build UI features that match the existing design system — not redesign it. The practical skill is:\n- Reading existing Vue components to understand conventions\n- Adding new views or modifying existing ones using the same Bootstrap patterns\n- Writing component tests (Vitest + Vue Test Utils is the modern standard)\n- Handling async state correctly (loading states, error states, empty states) — the Kestra UI has many async data-fetching patterns\n\n**What you won't be expected to do:** redesign the UI from scratch, make pixel-perfect design decisions (that's the product/design function), or architect the frontend from the ground up. Your job is feature development within an established system.\n\n**Practical preparation:** clone the Kestra UI repo (it's open source), run it locally, read 3–4 components end to end, and understand how they fetch data from the API. That level of familiarity is enough to start contributing.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "You're adding a new UI component to display real-time AI agent task progress (steps completed, current step, estimated remaining time). The data updates every 2 seconds. What Vue pattern should you use?",
          options: [
            "A computed property that recalculates from the static task output",
            "A reactive ref updated via polling or WebSocket, with the template automatically re-rendering whenever the ref changes",
            "Direct DOM manipulation on a setInterval to update the progress display",
            "A Vuex mutation dispatched every 2 seconds that triggers a full page re-render",
          ],
          correct: 1,
          explanation:
            "Vue's reactivity system is exactly built for this: store the progress data in a reactive ref, update it when new data arrives (via polling or WebSocket), and the template automatically reflects changes without manual DOM updates. This is Vue's core value proposition.",
        },
        {
          type: "multiple-choice",
          question:
            "A senior Kestra engineer says 'we use the Composition API with <script setup>.' What does this mean for how you'll write Vue components?",
          options: [
            "Components are written as class-based TypeScript with decorators",
            "Components use the setup() function syntax with ref(), computed(), and watch() — the modern Vue 3 approach — rather than the Options API object structure from Vue 2",
            "Components are defined in separate setup files that are imported into the template",
            "The Composition API is only used for state management, not component logic",
          ],
          correct: 1,
          explanation:
            "The Composition API with <script setup> is Vue 3's modern pattern: reactive state with ref() and reactive(), computed properties with computed(), lifecycle hooks with onMounted() etc. It's more flexible than Options API and enables better TypeScript integration. Matching the team's existing style is a must.",
        },
        {
          type: "multiple-choice",
          question:
            "What's the most important first step before adding a new view to Kestra's Vue frontend?",
          options: [
            "Design the UI in Figma before writing any code",
            "Read 3–4 existing components end to end — understand how they fetch data, handle loading/error states, and structure templates before writing a line of new code",
            "Write the Vue component from scratch and then adapt it to match Kestra's conventions",
            "Ask the design team for specifications before touching the codebase",
          ],
          correct: 1,
          explanation:
            "Reading existing code before writing new code is non-negotiable in any established codebase. Kestra's Vue components will have consistent patterns for API calls, loading states, error handling, and component structure. Match those patterns — don't invent new ones.",
        },
      ],
      resources: [
        {
          title: "Vue.js Documentation",
          url: "https://vuejs.org/guide/introduction.html",
          description: "Official Vue 3 guide — start with Composition API and reactivity.",
        },
        {
          title: "Kestra UI GitHub",
          url: "https://github.com/kestra-io/ui",
          description: "Kestra's open-source frontend — read actual components before the interview.",
        },
      ],
    },
    {
      id: "2-3",
      unitId: "unit2",
      companySlug: "kestra",
      title: "Kafka, Elasticsearch & the Data Layer",
      tldr:
        "Kafka is Kestra's execution bus; Elasticsearch is its history and search engine; PostgreSQL/MySQL is its config store. Understanding what each layer does — and doesn't do — helps you reason about feature design, debugging, and scalability.",
      skills: ["Kafka fundamentals", "Elasticsearch basics", "Data layer design"],
      xp: 20,
      content: [
        {
          heading: "Kafka in Kestra's execution pipeline",
          body: `Kafka's role in Kestra is message bus for execution events — not a general-purpose data pipeline.\n\n**What flows through Kafka:**\n- Task queue messages: "execute task X in flow Y, execution Z, with these inputs"\n- Task completion events: "task X completed with status SUCCESS, output is [reference to object storage]"\n- Execution state transitions: "execution Z is now RUNNING"\n- Trigger evaluations: "a file arrived at this S3 path — check if any trigger matches"\n\n**Why Kafka and not something simpler:**\n- **Consumer groups:** multiple worker instances can consume from the same topic, with Kafka ensuring each message is processed by exactly one consumer — horizontal scaling without coordination logic in Kestra itself\n- **Durability:** messages are persisted to disk. A crashed worker doesn't lose the task assignment\n- **Partitioning:** Kestra can partition tasks by namespace or flow, ensuring tasks from the same namespace are processed in order while other namespaces proceed in parallel\n- **Log compaction:** Kafka's topic compaction means Kestra can reconstruct the state of any execution by replaying its event log — useful for debugging and recovery\n\n**What Kafka is NOT doing here:** it's not the primary storage for execution history (that's Elasticsearch), and it's not used for user-facing query (nobody directly queries Kafka topics for execution search). Kafka is infrastructure plumbing, not product surface.`,
          goAnalogy: {
            term: "Ko",
            reading: "こう",
            meaning:
              "A recurring capture-and-recapture fight. Kafka's consumer group model is ko resolution — it defines who gets to act, prevents double-acting, and ensures the fight resolves cleanly.",
          },
        },
        {
          heading: "Elasticsearch: search and execution history",
          body: `Elasticsearch is Kestra's queryable execution store — it's what powers the execution dashboard, log search, and analytics features.\n\n**What's stored in Elasticsearch:**\n- Every execution: its flow, namespace, trigger, start time, end time, status, and custom labels\n- Every task execution within a flow: its status, inputs, outputs, timing, and log lines\n- Log lines themselves: structured and full-text searchable\n\n**Why Elasticsearch:**\n- **Full-text search** — "find all executions that logged the string 'customer_id not found'" requires full-text indexing, which relational databases handle poorly at scale\n- **Aggregations** — "show me failure rate by namespace, by flow, by day" are Elasticsearch aggregation queries — fast on billions of records\n- **Time-series queries** — execution history is inherently time-series data. Elasticsearch's date histograms and range queries on timestamps are highly optimized\n- **Schema flexibility** — task outputs and inputs are arbitrary JSON. Elasticsearch handles heterogeneous document shapes without schema migrations\n\n**What Elasticsearch is NOT for:** storing flow definitions (too structured, requires transactional guarantees), secrets (wrong security model), or real-time execution state during a run (Kafka handles that).\n\n**For feature design:** when you add a new AI feature that generates structured outputs (e.g., an agent's research results), think about whether those outputs should be indexed in Elasticsearch for searchability. "Find all executions where the AI agent identified 'churn risk'" is a product feature that requires Elasticsearch indexing of the agent output.`,
        },
        {
          heading: "PostgreSQL / MySQL: the config plane",
          body: `While Kafka handles execution events and Elasticsearch handles execution history, PostgreSQL (or MySQL) is Kestra's source of truth for configuration — the things that define what should happen, not what has happened.\n\n**What's in the relational database:**\n- Flow definitions: the YAML source of each flow version\n- Namespace configurations: settings, variables, service accounts per namespace\n- Trigger state: the last-evaluated state of each trigger (when did this cron last fire? what's the current offset of this Kafka trigger?)\n- User and team management (in Kestra Enterprise): users, roles, permissions\n- Secret references: pointers to secrets in external vaults (the actual secrets are NOT in the DB)\n\n**Why relational for this layer:**\n- **ACID transactions** — flow deployments need to be atomic: either the new version deploys or the old version stays. You can't have a partially-deployed flow\n- **Referential integrity** — a trigger that references a flow that doesn't exist is a data integrity problem. Foreign key constraints catch this\n- **Familiar tooling** — migrations (Flyway/Liquibase), backups, and disaster recovery are well-understood for relational databases\n\n**For the Product Engineer role:** when you're designing a new feature that needs persistent configuration (e.g., "store the AI model selection per namespace"), the relational database is where that config belongs. You'll write a database migration, add a JPA entity, and expose it via a REST endpoint — a complete backend feature cycle.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A new AI agent task type generates a structured JSON output with 10 fields (sentiment, confidence, extracted_entities, etc.). A PM wants to build a dashboard filtering executions by extracted_entity values. Which data layer change is required?",
          options: [
            "Add a new column to the PostgreSQL executions table for each output field",
            "Index the agent task's JSON output in Elasticsearch with field mappings for each key — enabling aggregation and filtering queries on the dashboard",
            "Store the output in Kafka for real-time dashboard access",
            "Write the output to object storage and add a batch job to sync to the dashboard",
          ],
          correct: 1,
          explanation:
            "Dashboard filtering on arbitrary structured fields requires Elasticsearch indexing. PostgreSQL could work for a small number of fixed fields, but Elasticsearch's document model handles arbitrary JSON outputs and enables the aggregation queries ('group by extracted_entity, count executions') that dashboards need.",
        },
        {
          type: "multiple-choice",
          question:
            "A Kestra operator wants to limit AI task executions to a maximum of 10 concurrent runs per namespace to control API costs. Where should this configuration live?",
          options: [
            "Kafka topic configuration — set a partition limit per namespace",
            "Elasticsearch index settings — restrict documents per namespace",
            "PostgreSQL — the namespace configuration table, with a new concurrency_limit field added via database migration",
            "Object storage — write a JSON config file per namespace",
          ],
          correct: 2,
          explanation:
            "Namespace configuration is relational database territory: it's structured, requires transactional guarantees (you don't want partial updates to namespace limits), and needs CRUD semantics via the API. A Flyway migration adds the column; a JPA entity exposes it; a REST endpoint lets operators configure it.",
        },
        {
          type: "multiple-choice",
          question:
            "What happens to in-flight Kafka task messages if the Kafka broker goes down temporarily?",
          options: [
            "Messages are lost — Kafka requires persistence to be explicitly configured per topic",
            "Messages are durably stored on disk — when the broker recovers, consumers pick up where they left off because Kafka is a persistent log, not an in-memory queue",
            "Kestra Server buffers the messages in memory and replays them when Kafka reconnects",
            "Workers time out their current tasks and the executions are marked FAILED",
          ],
          correct: 1,
          explanation:
            "Kafka is a durable log — messages are written to disk immediately and retained until consumers acknowledge them. A broker restart doesn't lose unconsumed messages. This durability is a core reason Kestra chose Kafka over in-memory queues for task coordination.",
        },
      ],
      resources: [
        {
          title: "Apache Kafka Introduction",
          url: "https://kafka.apache.org/intro",
          description: "Kafka's official intro — topics, partitions, consumer groups, durability.",
        },
        {
          title: "Elasticsearch: The Basics",
          url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html",
          description: "Elasticsearch fundamentals — documents, indices, queries, aggregations.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "A candidate says 'I've only done Java with Spring Boot, not Micronaut.' What's the accurate framing of how hard it is to transition?",
      options: [
        "Micronaut is completely different — Spring Boot knowledge doesn't transfer",
        "Core Java knowledge transfers fully; the main adjustment is AOT-style dependency injection (annotations are similar, resolution timing is different) and unlearning some Spring-specific patterns",
        "Micronaut is a Spring Boot wrapper, so the transition is trivial",
        "Spring Boot and Micronaut are interchangeable — Kestra could use either",
      ],
      correct: 1,
      explanation:
        "Java itself transfers completely. Micronaut's DI annotations look similar to Spring's but resolve at compile time. The practical adjustment is: don't rely on Spring's runtime magic (reflection-based proxies, lazy bean initialization) and embrace Micronaut's explicit, compile-time model. 1–2 weeks of focused learning bridges the gap.",
    },
    {
      type: "multiple-choice",
      question: "Which three data layers does Kestra use and what is each responsible for?",
      options: [
        "Kafka (config), Elasticsearch (execution), PostgreSQL (logs)",
        "Kafka (execution events/queueing), Elasticsearch (execution history/search), PostgreSQL (flow definitions/configuration)",
        "Kafka (triggers), PostgreSQL (executions), Elasticsearch (plugins)",
        "Elasticsearch (all data), Kafka (transport), PostgreSQL (cache)",
      ],
      correct: 1,
      explanation:
        "Each layer has a distinct responsibility: Kafka handles real-time execution events and task queueing (the live plane); Elasticsearch stores execution history, logs, and enables search/analytics (the query plane); PostgreSQL holds configuration, flow definitions, and namespace settings (the config plane).",
    },
    {
      type: "multiple-choice",
      question: "Why is the Vue.js Composition API preferred over the Options API for a Product Engineer joining Kestra?",
      options: [
        "The Composition API is required for Vue 3, which Kestra uses exclusively",
        "The Composition API provides better TypeScript integration, more flexible code organization, and is the modern Vue 3 standard — matching the team's existing patterns is mandatory",
        "The Options API has performance issues with the reactive data volumes in Kestra's UI",
        "Bootstrap-Vue only works with the Composition API",
      ],
      correct: 1,
      explanation:
        "Vue 3 supports both APIs, but the Composition API is the modern standard with better TypeScript support. More importantly: whatever pattern Kestra's existing codebase uses, you match it. Reading the codebase before the interview tells you which pattern they use — and that's the pattern you demonstrate fluency in.",
    },
  ],
  quizXp: 30,
};
