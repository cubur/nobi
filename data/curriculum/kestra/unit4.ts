import type { Unit } from "@/data/types";

export const kestraUnit4: Unit = {
  id: "unit4",
  title: "The Product Engineer Role",
  description:
    "What 'Product Engineer' actually means at an early-stage startup, how it differs from pure SWE and PM, and what shipping AI features full-stack looks like day to day.",
  companySlug: "kestra",
  goTerm: "Amashi",
  goReading: "あまし",
  goMeaning:
    "Remaining — the stones still to be played. A Product Engineer's job is to see what's left to build on the board and play it without waiting for permission.",
  color: "crimson",
  lessons: [
    {
      id: "4-1",
      unitId: "unit4",
      companySlug: "kestra",
      title: "Product Engineer vs. PM vs. SWE",
      tldr:
        "A Product Engineer is a full-stack engineer with product judgment — they can spec, build, and ship a feature end-to-end without a PM writing requirements or a separate frontend/backend engineer. At Kestra's stage and size, this is the most efficient model for shipping AI features.",
      skills: ["Role framing", "Startup engineering", "Scope ownership"],
      xp: 20,
      content: [
        {
          heading: "What a Product Engineer actually does",
          body: `The Product Engineer title means different things at different companies. At an early-stage startup like Kestra (post-Series A, growing fast), it typically means:\n\n**You write the code.** Unlike a PM, you don't hand off to engineers — you are the engineer. You implement the feature you design.\n\n**You own the product judgment.** Unlike a pure SWE, you don't wait for a PM to tell you what to build. You talk to users, read support tickets, watch usage data, and form opinions about what matters. Then you build it.\n\n**You work across the stack.** A backend engineer who needs a frontend colleague to add a button is a bottleneck. A Product Engineer ships the backend change AND the frontend change in the same PR.\n\n**You ship to production.** The job posting says "production-level experience, not prototype portfolios." This is the most important phrase in the entire description. They've been burned by candidates who demo well but can't operate their code at scale, handle edge cases, write tests, or think about performance and reliability.\n\n**The day-to-day at Kestra:** read a user request or identify a gap in the AI features. Write a brief spec (often a GitHub issue or internal doc). Implement the backend (Java + Micronaut): new task plugin, new API endpoint, new DB migration. Implement the frontend (Vue.js): new UI component, new dashboard view. Write tests. Code review with a colleague. Ship. Iterate based on user feedback.`,
          goAnalogy: {
            term: "Kodawari",
            reading: "こだわり",
            meaning:
              "Attachment — the tendency to over-invest in a local fight. A Product Engineer must avoid kodawari: don't perfect a feature in isolation, ship it, learn from real users, and iterate.",
          },
        },
        {
          heading: "Why this role exists at Kestra's stage",
          body: `Kestra has 25M in Series A funding and is growing. They need to ship fast — particularly AI features, which are the current market priority.\n\n**The alternative staffing model:** hire a PM to spec features + a backend engineer + a frontend engineer. Three people, lots of handoffs, slower cycles, higher cost.\n\n**The Product Engineer model:** one person who understands the product, writes backend code, writes frontend code, and ships end-to-end. Faster cycles, lower overhead, more ownership.\n\n**Why it works at this stage:** Kestra's product surface isn't so complex that it requires deep specialization everywhere. A Product Engineer who can write solid Java plugins AND basic Vue.js UI covers 80% of AI feature development without needing a separate frontend engineer for every PR.\n\n**What this means for you as a candidate:**\n- Don't pitch yourself as "primarily backend" or "primarily product" — pitch as full-stack with product judgment\n- Show you can move from idea → spec → implementation → ship independently\n- Show you've done this with AI/LLM features specifically — not just designed them\n- "Production-level experience" means: your code runs at scale, you've dealt with real failures, you've had to optimize, you've written the tests\n\n**The risk they're hiring against:** someone who's great at prototyping but writes fragile code that breaks in production, or someone with good product instincts but too slow to implement without a team doing the work.`,
        },
        {
          heading: "The collaboration model",
          body: `Even though a Product Engineer works more autonomously than a typical engineer, collaboration is constant:\n\n**With product/design:** Kestra likely has a product function even at this size. The Product Engineer collaborates on roadmap and priorities, gets design direction on major features, and flags product trade-offs. But they don't wait for a requirements document — they shape the spec themselves.\n\n**With backend engineers:** for features that require deep architectural changes (new Kafka topic, new Elasticsearch index mapping, changes to the execution model), the Product Engineer works closely with Kestra's backend engineers. They don't work in isolation on infrastructure changes.\n\n**With the AI team:** Kestra likely has an AI-focused engineering function (or this role IS that function). Prompt design, model selection, eval frameworks — these are collaborative decisions even if the Product Engineer implements them.\n\n**With users:** the job posting says "collaborate closely with product and backend teams on rapid feature releases" and "create product interfaces and documentation making AI workflows accessible." This implies user-facing communication — you may write documentation, run user calls, or engage with the open-source community on GitHub/Discord.\n\n**The founder chat (4th interview stage):** the final round is a founder discussion. This tells you Kestra's founders care personally about AI direction. Be ready to discuss AI product strategy — what you'd build, why, and in what order. Show you think like a founder, not just a feature implementer.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "Kestra's job posting says 'production-level experience, not prototype portfolios.' What specific evidence would demonstrate production-level experience with AI features?",
          options: [
            "A GitHub repo with a well-documented LLM demo app that got stars",
            "Evidence of shipping an LLM-powered feature to real users: handling rate limits, writing retry logic, adding latency monitoring, dealing with model version changes, and measuring real-world quality",
            "Fine-tuning a language model and publishing the results",
            "Completing the Anthropic API quickstart tutorial and building a chatbot",
          ],
          correct: 1,
          explanation:
            "Production experience means your code ran with real users, at real scale, with real failure modes. Prototype experience ends at the demo. The difference shows in whether you've written retry logic for rate limits, added latency P95 monitoring, handled context window overflows gracefully, or dealt with model deprecations mid-service.",
        },
        {
          type: "multiple-choice",
          question:
            "You've identified that Kestra's existing AI task plugin for calling LLMs doesn't support streaming output. Users want to see partial responses in the execution log viewer. Who do you talk to first?",
          options: [
            "The product manager — to get it prioritized on the roadmap",
            "The frontend engineer — streaming requires UI changes before the backend matters",
            "Check if streaming is architecturally feasible in Kestra's task execution model, then raise it with backend engineers if the plugin architecture needs changes and with the product function if it needs roadmap prioritization",
            "File a GitHub issue and wait for community feedback before investing time",
          ],
          correct: 2,
          explanation:
            "Product Engineering is sequenced: architecture first (can we do it?), then technical scoping (what needs to change?), then product alignment (is it worth the investment now?). Starting with the PM assumes someone else will make the feasibility call — a Product Engineer owns that judgment.",
        },
        {
          type: "multiple-choice",
          question:
            "The founder interview (stage 4) asks: 'What would you build first if you started next Monday?' What's the strongest framing?",
          options: [
            "Say you'd spend the first week learning the codebase before committing to any direction",
            "Name a specific AI feature, explain why it's the highest-leverage first move based on user needs and Kestra's strategic position, and outline the implementation approach",
            "Ask what the founders think is most important, then align your answer to their answer",
            "Describe a general framework for prioritization rather than committing to a specific feature",
          ],
          correct: 1,
          explanation:
            "Founders hire Product Engineers for judgment and initiative. 'I'd spend the first week learning' signals execution-first thinking; founders want someone who comes with opinions. Aligning your answer to theirs is sycophancy, not strategy. A frameworks answer is generic — the right answer is specific, opinionated, and shows you've thought about their product deeply.",
        },
      ],
      resources: [
        {
          title: "What Is a Product Engineer? (Posthog Blog)",
          url: "https://posthog.com/blog/what-is-a-product-engineer",
          description: "PostHog's definition of the product engineer role — highly applicable to Kestra's model.",
        },
        {
          title: "Kestra GitHub Repository",
          url: "https://github.com/kestra-io/kestra",
          description: "Read the codebase. Issues and PRs show you what's being built and what's needed.",
        },
      ],
    },
    {
      id: "4-2",
      unitId: "unit4",
      companySlug: "kestra",
      title: "Shipping AI Features: From Prototype to Production",
      tldr:
        "The gap between a working prototype and a production AI feature is where most engineers fail. Reliability, observability, security, performance, and testability are what separate hobby projects from code Kestra can ship to enterprise customers.",
      skills: ["Production engineering", "AI reliability", "Security basics"],
      xp: 30,
      content: [
        {
          heading: "The production checklist for AI features",
          body: `Before an AI feature is production-ready at Kestra, it should satisfy:\n\n**Reliability**\n- Retry logic for transient LLM API errors (429, 503, 500) with exponential backoff\n- Configurable timeout — no LLM call runs indefinitely\n- Circuit breaker — if the LLM API is consistently failing, fail fast instead of hammering it\n- Graceful degradation — if the AI feature fails, what does the user see? An error? A fallback response? The non-AI version of the same feature?\n\n**Observability**\n- Every LLM call logs: model, token count, latency, success/failure\n- Cost tracking per call and aggregated per namespace\n- Error rate and latency metrics exported to Kestra's metrics system\n- Execution-level traces: for debugging, you can see exactly what the LLM was sent and what it returned\n\n**Security**\n- API keys stored in Kestra's secret management, never in code or YAML\n- LLM responses validated before being used downstream — don't trust raw model output as safe input to other systems\n- Prompt injection protection — user-supplied inputs that reach LLM prompts should be escaped or sandboxed\n- PII handling — if user data flows through an LLM API, what are the privacy implications? Is this in the ToS?\n\n**Performance**\n- P50 and P95 latency targets defined and monitored\n- Caching for repeated identical requests (same flow + same input = same LLM call — cache the result)\n- Async where user-blocking latency is unacceptable\n\n**Testability**\n- Unit tests mock the LLM API — don't make real API calls in tests\n- Integration tests validate the full plugin against a real or stub LLM endpoint\n- An eval suite for prompt quality — regression testing that output quality doesn't degrade with changes`,
          goAnalogy: {
            term: "Shikatanai",
            reading: "しかたない",
            meaning:
              "It cannot be helped — accepting an unavoidable loss to fight better elsewhere. Some production complexity is shikatanai: retry logic, timeout handling, and security checks are non-negotiable costs of shipping AI features reliably.",
          },
        },
        {
          heading: "Writing testable Java AI plugins",
          body: `Testing AI plugins in Java requires a specific approach because you can't (and shouldn't) make real LLM API calls in unit tests.\n\n**The dependency injection pattern:** design your plugin's LLM client as an injected dependency, not a static instance. In production, inject the real client. In tests, inject a mock.\n\n\`\`\`java\npublic class LlmChat extends Task implements RunnableTask<Output> {\n    // ...\n    \n    // Package-private for test injection\n    LlmClient client;\n    \n    @Override\n    public Output run(RunContext runContext) throws Exception {\n        if (client == null) {\n            client = LlmClient.fromSecret(\n                runContext.render(this.apiKeySecret));\n        }\n        // Use client...\n    }\n}\n\`\`\`\n\n**Mocking strategy:** use Mockito to mock the LlmClient. Define expected inputs, set up mock responses for the happy path and error paths, and verify behavior without network calls.\n\n**Testing failure modes:** write explicit tests for:\n- 429 rate limit response → expect retry with backoff\n- 503 server error → expect retry up to maxRetries, then throw\n- Empty response body → expect fallback behavior or error\n- Response exceeds maxTokens → expect truncation handling\n- Malformed JSON in structured output → expect validation error\n\n**Integration tests:** run against a stub server (WireMock is excellent for this) that simulates the LLM API. Test the full HTTP interaction without real API costs. Include tests that simulate slow responses (to validate timeout behavior) and intermittent failures (to validate retry behavior).`,
        },
        {
          heading: "Security: what Kestra enterprise customers require",
          body: `Kestra sells to enterprise customers. Enterprise AI security requirements are specific and non-negotiable:\n\n**Secret management:** LLM API keys must be stored in Kestra's secret management system (which integrates with AWS Secrets Manager, GCP Secret Manager, HashiCorp Vault). A plugin that accepts an API key as a plaintext field in YAML will fail a security review. The correct pattern: accept a \`secretKey\` field that names a secret, resolve the actual key value at runtime via \`runContext.decryptSecret()\`.\n\n**Data residency:** enterprise customers may require that no data leaves their region. Kestra's AI features should support routing LLM calls through enterprise-contracted endpoints (AWS Bedrock, Azure OpenAI Service) rather than only supporting public API endpoints. The plugin should accept an endpoint URL as a configuration option.\n\n**Prompt injection:** if user-controlled data (a file name, a database value, a user message) is inserted into an LLM prompt, a malicious input could change the prompt's instructions. Mitigations: treat user data as data (not instructions), use structured input formats, and validate that outputs match expected schemas before using them downstream.\n\n**PII and data privacy:** if a Kestra flow passes customer data through an LLM API, does the API provider's ToS allow this? Is this data used for training? For enterprise customers with GDPR obligations, using a public LLM API for customer data may be a legal issue. The feature design should expose data privacy controls and support private deployment options.\n\n**Audit logging:** enterprise customers need to know what data was sent to which LLM, when, from which execution. Kestra's execution history provides this if LLM call metadata (model, token count, timestamp) is included in the task output — design for this from day one.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "A Kestra AI plugin makes an LLM API call that returns a 429 (rate limit) error. What is the correct production behavior?",
          options: [
            "Immediately fail the task with a FAILED status and notify the user",
            "Retry with exponential backoff (wait 1s, then 2s, then 4s), up to a configurable max retry count, then fail if all retries are exhausted",
            "Retry immediately in a tight loop until the rate limit clears",
            "Switch to a different LLM provider automatically",
          ],
          correct: 1,
          explanation:
            "429s are transient — the API is asking you to slow down, not stop. Exponential backoff gives the rate limit window time to clear while not hammering the API. Tight loops make rate limits worse. Failing immediately on first 429 is too aggressive for transient errors. Configurable max retries lets users tune the behavior per task.",
        },
        {
          type: "multiple-choice",
          question:
            "An enterprise customer says their GDPR policy prohibits sending any customer data to third-party LLM APIs. What plugin design feature addresses this requirement?",
          options: [
            "Add a 'gdpr_mode: true' flag that strips all data from the LLM call",
            "Support configurable endpoint URLs — the customer can point the plugin at Azure OpenAI Service or AWS Bedrock (their own contracted, region-locked deployment) instead of the public API",
            "Encrypt the data before sending it to the LLM API",
            "Add a PII detection step that redacts sensitive fields before the LLM call",
          ],
          correct: 1,
          explanation:
            "Configurable endpoints let enterprise customers route LLM calls through their own contracted deployments (Azure OpenAI, AWS Bedrock) where data stays in their cloud tenant under their data processing agreements. Encryption doesn't solve the 'data leaves our control' concern; PII redaction is a partial measure that may not satisfy legal requirements.",
        },
        {
          type: "multiple-choice",
          question:
            "You're testing a new Kestra LLM task plugin. Why should unit tests NOT make real API calls to OpenAI or Anthropic?",
          options: [
            "Real API calls are too slow for unit tests and create non-deterministic results that make tests flaky — use mocks that return controlled responses to test behavior reliably",
            "LLM API providers prohibit API usage in automated test environments",
            "Java test frameworks can't handle async HTTP responses from LLM APIs",
            "API calls in tests would consume the team's production API quota",
          ],
          correct: 0,
          explanation:
            "Real API calls in unit tests create two problems: (1) they're non-deterministic — the model's response changes between runs, making test assertions unreliable; (2) they're slow and flaky due to network latency and potential API outages. Mock the LLM client, define exact mock responses for each test case, and test behavior against those deterministic inputs.",
        },
      ],
      resources: [
        {
          title: "WireMock: API Stubbing for Java Tests",
          url: "https://wiremock.org/docs/getting-started/",
          description: "The standard tool for stubbing HTTP APIs in Java integration tests — essential for LLM plugin testing.",
        },
        {
          title: "OWASP LLM Top 10",
          url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
          description: "Security risks specific to LLM applications — prompt injection, data leakage, and more.",
        },
      ],
    },
    {
      id: "4-3",
      unitId: "unit4",
      companySlug: "kestra",
      title: "Full-Stack Feature Development: End-to-End",
      tldr:
        "Walking through a complete AI feature from backend plugin to frontend UI to documentation — the full cycle of what a Kestra Product Engineer ships in a single sprint.",
      skills: ["End-to-end feature development", "API design", "Documentation"],
      xp: 25,
      content: [
        {
          heading: "A complete feature: the LLM Summarize task",
          body: `Let's walk through building a real feature: a \`LlmSummarize\` task that takes a long text input and returns a structured summary with key points and a word count. This demonstrates the full Product Engineer workflow.\n\n**Step 1: Spec the feature**\n- User need: Kestra flows that process long documents (PDFs, web pages, logs) need a way to summarize them before downstream tasks. Today users write custom Python scripts; we want a first-class plugin.\n- Input: text (dynamic, from previous task output), maxWords (int, default 200), outputLanguage (string, default "en")\n- Output: summary (string), keyPoints (string[]), wordCount (int), inputTokens (int), outputTokens (int)\n- Failure modes: text too long for context window → truncate with warning; LLM API failure → retry 3× then fail\n- Security: API key via secret reference, never plaintext\n\n**Step 2: Java backend — the plugin**\n- Create a new Java class in the \`plugin-ai\` module extending \`Task\`\n- Annotate fields with \`@Schema\` and \`@PluginProperty\`\n- Implement \`run(RunContext)\`: render dynamic properties, build the LLM client, make the API call with a structured output schema, parse the JSON response, return the Output object\n- Write unit tests: happy path, context overflow, API failure, structured output parsing\n- Write integration test against WireMock stub\n\n**Step 3: API exposure (if needed)**\nFor this feature, no new API endpoint is needed — the plugin is invoked by the task execution engine. If you were building a flow generation feature, you'd add a new REST endpoint here.\n\n**Step 4: Frontend — Vue.js UI**\nFor a task plugin, the frontend work is in the flow editor's auto-complete and the execution detail view. The plugin's \`@Schema\` annotations are consumed by Kestra's UI to generate form inputs in the flow editor. No manual Vue work needed for basic plugin UI — Kestra generates it. Custom UI work is needed for features like a dedicated summarization panel or a streaming output viewer.`,
          goAnalogy: {
            term: "Yose",
            reading: "よせ",
            meaning:
              "Endgame — where accumulated advantage converts to concrete points. Shipping a complete feature is yose: every prior step (design, backend, frontend, tests, docs) converts to user value.",
          },
        },
        {
          heading: "Writing documentation that converts",
          body: `The job posting says "create product interfaces and documentation making AI workflows accessible." Documentation is not an afterthought at Kestra — it's part of the product.\n\nKestra's users include:\n- Experienced engineers who want reference docs (parameter names, types, defaults)\n- New users who need tutorials (step-by-step examples with real YAML)\n- Decision-makers evaluating Kestra who read blog posts (use case narratives)\n\n**For a new AI plugin, documentation includes:**\n\n**Reference docs** — every parameter, its type, whether it's required, its default, and a one-line description. Generated from \`@Schema\` annotations but needs a human editing pass for clarity.\n\n**Example flows** — 2–3 complete YAML flow examples showing the plugin in realistic contexts:\n- "Summarize a web page" — fetch URL → extract text → summarize → store result\n- "Summarize all new documents in S3" — S3 event trigger → for each file: read → summarize → store\n- "Summarize with custom prompt" — using systemPrompt override for domain-specific summarization\n\n**Quickstart guide** — a tutorial that takes a new user from zero to a working summarization flow in under 10 minutes. Clear prerequisites (what secrets you need, what namespace to create), exact YAML to copy-paste, how to run it, how to read the output.\n\n**Blog post** — for new AI capabilities, a blog post that explains the use case, shows the YAML, and demonstrates the output. Drives SEO and community adoption.\n\nAs a Product Engineer, you write all of this. Documentation is part of the definition of done.`,
        },
        {
          heading: "The prototype-to-production timeline",
          body: `The job posting says "prototype agent use cases quickly." Understanding the timeline from quick prototype to shippable production feature is important for planning:\n\n**Day 1–2: Prototype**\nA Python script (or rough Java main method) that calls the LLM API and returns the result. Good enough to demo to the team and validate the concept. No error handling, no tests, no documentation. Goal: does the AI approach work at all?\n\n**Day 3–5: Plugin implementation**\nConvert the prototype into a proper Kestra plugin: annotations, proper input/output classes, secret management, basic error handling. Write happy-path unit tests. Internally reviewable.\n\n**Day 5–7: Production hardening**\nAdd retry logic, timeout, context overflow handling, cost tracking outputs. Write failure-case unit tests. Write integration test against WireMock stub. Code review with a backend engineer. Address review feedback.\n\n**Day 7–9: Documentation**\nWrite reference docs (mostly from annotations), 2 example flows, quickstart guide. Have a colleague follow the quickstart cold to verify it works.\n\n**Day 9–10: Ship**\nMerge, deploy, announce in changelog/Discord/blog. Monitor error rate and latency for the first 48 hours. Fix any production issues immediately.\n\n**Total: ~2 weeks for a solid new AI task plugin.** The prototype takes 2 days; production-readiness takes the remaining 8. This is the ratio to internalize: prototyping is fast, production is the real work.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "Kestra's LlmSummarize plugin needs to handle text inputs up to 100,000 tokens, but the chosen model has a 200K context window including the system prompt (2,000 tokens) and output (1,000 tokens). What's the effective maximum input text length?",
          options: [
            "100,000 tokens — the full model context window",
            "197,000 tokens — the context window minus system prompt and output",
            "Approximately 197,000 tokens, but the plugin should warn users when input text is over 150,000 tokens to leave comfortable headroom for prompt + output",
            "The plugin should reject any input over 50,000 tokens to guarantee quality",
          ],
          correct: 2,
          explanation:
            "Effective input limit = context window - system prompt - expected output - safety margin. At 200K total, system prompt 2K, output 1K, leaving ~197K for input text. But recommending a ~150K practical limit with a warning for longer inputs gives a safety margin for variable output length and prompt overhead. Hard rejecting at 50K is too conservative and frustrates users.",
        },
        {
          type: "multiple-choice",
          question:
            "Why is the prototype phase (Day 1–2) intentionally rough and without error handling?",
          options: [
            "Error handling is the backend engineer's responsibility, not the Product Engineer's",
            "The prototype's goal is to validate whether the AI approach works — adding production concerns before validating the concept wastes time if the concept doesn't work",
            "Kestra's CI/CD pipeline adds error handling automatically during deployment",
            "Prototypes run in a sandbox environment where errors are handled by the platform",
          ],
          correct: 1,
          explanation:
            "Prototype = concept validation, not production code. If the LLM approach doesn't produce useful summaries, all the error handling you wrote is waste. Validate first, harden second. The 2-day prototype gets you an answer; the remaining 8 days make it shippable.",
        },
        {
          type: "scenario",
          prompt:
            "The Kestra team asks you to prototype a 'flow explainer' feature: given a Kestra flow YAML, the AI explains what it does in plain English. You have 2 days. What do you build and how?",
          sampleAnswer:
            "Day 1: I'd write a simple Python script (or Java main) that reads a YAML string, constructs a prompt ('Here is a Kestra flow definition. Explain what this flow does in plain English, including: when it runs, what each task does, what data it reads and writes, and what happens if a task fails. Flow: [YAML]'), calls the Anthropic or OpenAI API, and prints the response. I'd test it against 5–10 real Kestra flows from the public examples repo to see if the explanations are accurate and readable. If they are, the concept is validated. Day 2: I'd test edge cases — a very complex multi-task flow, a flow with custom plugins the model doesn't know about, a flow with many dynamic template references. I'd note the failure modes: the model sometimes hallucinates plugin behavior it doesn't know about; dynamic templates like {{ inputs.x }} confuse it if not explained. I'd document these failure modes in a brief internal writeup: 'The concept works for standard flows. Known gaps: custom/uncommon plugins produce generic explanations; recommend including plugin documentation in the prompt context via RAG in the production version.' Ship the prototype finding, not the prototype code.",
          keyPoints: [
            "2 days = validation, not implementation. Build the minimum that proves the concept works.",
            "Test against real examples from the existing repo — don't use toy examples",
            "Document failure modes explicitly — they define what production work is needed",
            "The deliverable is the finding, not the code: 'does this approach work and what are the limits?'",
          ],
        },
      ],
      resources: [
        {
          title: "Kestra Plugin Examples (GitHub)",
          url: "https://github.com/kestra-io/plugin-ai",
          description: "Real Kestra plugin code — study the patterns before building your own.",
        },
        {
          title: "Kestra Documentation Style Guide",
          url: "https://kestra.io/docs/contributing",
          description: "How Kestra writes docs — follow this style for any documentation you write.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "What distinguishes a Product Engineer from a traditional SWE at a startup like Kestra?",
      options: [
        "Product Engineers earn more equity and have more say in company strategy",
        "Product Engineers own the full cycle — from identifying the problem to designing the solution to implementing it to shipping — without requiring a separate PM to write requirements",
        "Product Engineers only work on user-facing features; SWEs work on infrastructure",
        "Product Engineers manage other engineers; SWEs are individual contributors",
      ],
      correct: 1,
      explanation:
        "The defining characteristic is ownership scope. A SWE implements what's specified; a Product Engineer specs, implements, and ships autonomously. This is efficient at Kestra's stage because it eliminates handoff overhead and puts product judgment in the same person as implementation judgment.",
    },
    {
      type: "multiple-choice",
      question: "Kestra's job posting says 'production-level experience, not prototype portfolios.' What are they screening against?",
      options: [
        "Candidates who have only done academic projects, not commercial work",
        "Candidates who can build impressive demos but whose code breaks under real load, edge cases, or operational conditions — missing retry logic, observability, security, and tests",
        "Candidates who have built AI prototypes but haven't used Kestra specifically",
        "Candidates from startups rather than established companies",
      ],
      correct: 1,
      explanation:
        "Prototype code looks good in demos but fails in production: no retry logic, no timeout handling, no tests, no observability, hardcoded credentials, no edge case handling. Kestra's enterprise customers can't use prototype-quality plugins. The screening is for candidates who've shipped code that ran at scale and dealt with real failures.",
    },
    {
      type: "multiple-choice",
      question: "The prototype-to-production timeline is approximately 2 days (prototype) + 8 days (hardening). What's the most important thing to validate in the 2-day prototype phase?",
      options: [
        "That the Java plugin compiles correctly in Kestra's build system",
        "That the AI approach produces useful, accurate output for the target use case — before investing in production hardening",
        "That the feature can be implemented within the sprint timeline",
        "That the feature design has been approved by the product function",
      ],
      correct: 1,
      explanation:
        "The prototype validates the concept. If the AI approach doesn't produce good results (bad summaries, wrong flow explanations, unreliable classifications), the 8-day hardening is wasted. Validate first: does the LLM approach work at all? Only then invest in making it production-ready.",
    },
  ],
  quizXp: 30,
};
