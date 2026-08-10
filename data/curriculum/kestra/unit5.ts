import type { Unit } from "@/data/types";

export const kestraUnit5: Unit = {
  id: "unit5",
  title: "The Kestra Interview",
  description:
    "The 4-stage process decoded — what each round tests, how to position your AI and Java experience, what to build for the technical test, and how to close the founder conversation.",
  companySlug: "kestra",
  goTerm: "Yose",
  goReading: "よせ",
  goMeaning:
    "Endgame — converting your board position into a decisive result. The interview is yose: all the knowledge you've built across this course converts into a result here.",
  color: "snow",
  lessons: [
    {
      id: "5-1",
      unitId: "unit5",
      companySlug: "kestra",
      title: "The 4-Stage Process Decoded",
      tldr:
        "Kestra's interview process: intro call → technical test → team chat → founder discussion. Each stage has a distinct purpose and distinct failure modes. Know what they're looking for at each step.",
      skills: ["Interview process", "Stage-by-stage prep", "Failure mode awareness"],
      xp: 20,
      content: [
        {
          heading: "Stage 1: Intro call",
          body: `**What it is:** a 30–45 minute screening call, likely with a recruiter or product/engineering lead.\n\n**What they're testing:**\n- Do you understand what Kestra does? (Surprising how many candidates don't)\n- Is your background actually relevant? (Java + AI experience, not just Python AI)\n- Do you communicate clearly? (Product Engineers talk to users and write docs)\n- Are you genuinely interested in the problem space? (Orchestration + AI, not just "I want a startup job")\n\n**What to prepare:**\n- A 90-second answer to "tell me about yourself" that immediately highlights: Java experience, AI/LLM production work, and full-stack shipping ability\n- A clear answer to "what do you know about Kestra?" — mention the orchestration platform, YAML-first model, the $25M Series A, the AI direction, and why the intersection of orchestration + AI interests you specifically\n- 2–3 specific examples of AI features you've shipped to production (not demos, not prototypes — things that ran with real users)\n\n**The failure mode:** being a great engineer but sounding like you don't know Kestra, don't care about orchestration, or have only prototype AI experience. Screeners filter on surface signals — you need the right words in the first 5 minutes.`,
          goAnalogy: {
            term: "Komi",
            reading: "こみ",
            meaning:
              "The points given to compensate for going second. The intro call is your komi negotiation: establish enough credibility early that you enter the technical stage with a positive point balance.",
          },
        },
        {
          heading: "Stage 2: Technical test",
          body: `**What it is:** a take-home or timed technical assessment. Given Kestra's stack (Java + Vue.js) and role (Product Engineer, AI), the test likely involves:\n\n**Option A: Build a Kestra plugin**\n- Given a spec: implement a Java plugin for a new AI task type (call a specific API, handle errors, produce structured output)\n- Evaluated on: code quality, error handling, test coverage, adherence to Kestra's plugin patterns, production-readiness\n\n**Option B: Build an AI feature full-stack**\n- Given a Kestra local instance: add a backend endpoint + a Vue.js UI component for a new AI-assisted workflow feature\n- Evaluated on: same as above, plus Vue.js component quality and API design\n\n**Option C: Prototype a specific agent use case**\n- Design and prototype an AI workflow using Kestra: pick a use case (document processing, data enrichment, automated QA), build a working Kestra flow that demonstrates it\n- Evaluated on: use case insight, flow design quality, and how you handle the agent's failure modes\n\n**What to do regardless of the format:**\n- Read Kestra's existing plugin code before the test (the \`plugin-ai\` repo is open source)\n- Write tests — this is the single biggest signal of production-level experience\n- Handle errors explicitly — retry logic, timeout, null checks\n- Use proper secret management — no API keys in code or hardcoded strings\n- Include a brief README that explains your design decisions, not just instructions to run it`,
        },
        {
          heading: "Stage 3: Team chat & Stage 4: Founder discussion",
          body: `**Stage 3: Team chat**\n- Who: 1–2 engineers or PMs from the AI team\n- What they test: technical depth (can you go deep on your past AI work?), collaboration style (how do you work with engineers?), product thinking (do you have opinions about what to build and why?)\n- What to prepare: deep technical walk-throughs of your best AI project — model selection decisions, eval frameworks, production failures and how you handled them, architecture choices\n- Failure mode: surface-level answers. "I worked on an LLM feature" is not enough. "I built a RAG pipeline that retrieved from a Postgres store with pgvector, processed 5,000 docs/day, and had a P95 retrieval latency of 180ms — here's how I measured that" is what they want\n\n**Stage 4: Founder discussion**\n- Who: Kestra's founders\n- What they test: strategic thinking, cultural fit, and whether you'd make a strong early-team member for an AI-forward orchestration company\n- What to prepare:\n  - A clear point of view on Kestra's AI strategy: "I think the biggest opportunity is [X] because [Y]. Here's what I'd build first and why."\n  - A story about working autonomously under ambiguity\n  - Genuine enthusiasm for the intersection of orchestration and AI — founders can tell the difference between performed interest and real curiosity\n- Failure mode: being generic. "I'm excited about AI and orchestration" is not memorable. "I think the agent loop observability problem is the most important thing to solve right now because enterprise customers will churn the first time an agent run is undiagnosable" is memorable.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "In the Stage 2 technical test, what single element most clearly signals 'production-level experience' to Kestra's engineering team?",
          options: [
            "A working demo that runs end-to-end with no errors",
            "A complete test suite covering happy path, error cases (429, 503, timeout), and edge cases — with mocked LLM calls and WireMock stubs",
            "A detailed README with setup instructions and screenshots",
            "Using the latest Java 21 features and Micronaut version",
          ],
          correct: 1,
          explanation:
            "Tests are the clearest signal of production experience because prototype engineers don't write them. A test suite that covers retry behavior on 429, timeout handling, null response handling, and structured output parsing proves you've shipped code that had to handle real failures — not just happy-path demos.",
        },
        {
          type: "multiple-choice",
          question:
            "For the Stage 4 founder discussion, you're asked: 'What's the most important thing Kestra should build for AI in the next 6 months?' What makes the strongest answer?",
          options: [
            "'Agent execution observability — per-step visibility into what an agent did, why, and what it decided' — with a specific rationale tied to enterprise customer needs and competitive differentiation",
            "'Flow generation from natural language' — it's the most commonly requested feature in the community",
            "'Better model selection UI' — it's a quick win that improves the existing AI task experience",
            "'I'd want to learn more about current user needs before committing to a specific direction'",
          ],
          correct: 0,
          explanation:
            "Founders want conviction backed by reasoning, not hedging. Option A is strongest because it's specific, tied to a real customer pain (production agents are black boxes today), and defensible with competitive analysis (no orchestration platform does this well yet). Option D is the worst — founders at this stage don't hire people who need to 'learn more' before having an opinion.",
        },
        {
          type: "multiple-choice",
          question:
            "The Stage 3 team chat asks: 'Tell me about a time an AI feature you shipped failed in production.' What's the right approach?",
          options: [
            "Say you've been careful and haven't had major production failures",
            "Pick a real failure, explain what broke (model, prompt, infrastructure, or data), what the user impact was, how you diagnosed it, what you changed, and how you prevented recurrence",
            "Describe a failure from a project you observed but didn't directly own",
            "Keep it vague — specific failures might make you look incompetent",
          ],
          correct: 1,
          explanation:
            "Production failures are proof of production experience. Every engineer who ships AI features has had things break. The absence of a good failure story suggests you haven't shipped anything meaningful to production. Specificity (what broke, what you did, what you changed) shows operational maturity — which is exactly what 'production-level experience' means.",
        },
      ],
      resources: [
        {
          title: "Kestra Discord / Community",
          url: "https://kestra.io/slack",
          description: "Join the Kestra community — understanding the user conversations here is useful preparation for the founder discussion.",
        },
        {
          title: "Kestra GitHub Issues",
          url: "https://github.com/kestra-io/kestra/issues",
          description: "Real feature requests and bugs — what users actually want. Read 20 issues before the interview.",
        },
      ],
    },
    {
      id: "5-2",
      unitId: "unit5",
      companySlug: "kestra",
      title: "Technical Test Preparation",
      tldr:
        "Concrete preparation for Kestra's technical test: how to set up the environment, what to build, how to structure the code, and what the evaluator is looking at.",
      skills: ["Technical test prep", "Java plugin patterns", "Code quality"],
      xp: 30,
      content: [
        {
          heading: "Setting up your environment",
          body: `Before the technical test starts, have these ready:\n\n**Local Kestra instance:**\n- Clone the \`kestra-io/kestra\` repo and follow the local development setup\n- Alternatively, use Kestra's Docker Compose quickstart — this is faster and sufficient for plugin development\n- Verify you can run a simple YAML flow successfully before the test\n\n**Plugin development setup:**\n- Clone \`kestra-io/plugin-ai\` — this is the template for AI plugin development\n- Read at least 2 existing plugin implementations end-to-end: understand the \`@Schema\`, \`@PluginProperty\`, \`@Plugin\` annotation patterns, the \`RunContext\` API, and the \`Output\` inner class pattern\n- Run the existing plugin tests to verify your setup\n\n**API access:**\n- Have an Anthropic API key and an OpenAI API key ready — the test may require calling either\n- Store them as environment variables, not hardcoded strings\n- Test a basic API call in isolation before the test\n\n**Java tooling:**\n- Maven or Gradle (check which Kestra uses — it's Maven)\n- Java 21 (Kestra targets modern Java)\n- IntelliJ IDEA with the Micronaut plugin — not required but helpful for annotation processing\n\n**Vue.js tooling (if the test has frontend):**\n- Node.js 18+, npm/yarn\n- Understand how to run the Kestra UI locally from the \`kestra-io/ui\` repo\n- Have Vue DevTools browser extension installed`,
          goAnalogy: {
            term: "Nigiri",
            reading: "にぎり",
            meaning:
              "The handicap stones placed before a game — the preparation that sets your starting position. Environment setup is nigiri: done before the game starts, it determines whether you're playing from strength or scrambling.",
          },
        },
        {
          heading: "If the test is: build a Kestra AI plugin",
          body: `This is the most likely test format. Here's the exact structure to follow:\n\n**Plugin class structure:**\n\`\`\`java\n@Plugin(\n    examples = {\n        @Example(\n            title = "Summarize a document",\n            code = { "model: claude-sonnet-4-5", "text: \\"{{ outputs.readFile.content }}\\"" }\n        )\n    }\n)\n@Schema(title = "Summarize text using an LLM")\npublic class LlmSummarize extends Task\n    implements RunnableTask<LlmSummarize.Output> {\n\n    @NotNull\n    @Schema(title = "Text to summarize")\n    @PluginProperty(dynamic = true)\n    private String text;\n\n    @Schema(title = "Max words in summary", defaultValue = "200")\n    @PluginProperty\n    private Integer maxWords = 200;\n\n    @NotNull\n    @Schema(title = "Secret key name for LLM API key")\n    @PluginProperty(dynamic = true)\n    private String apiKeySecret;\n\n    @Schema(title = "Model ID", defaultValue = "claude-haiku-4-5-20251001")\n    @PluginProperty\n    private String model = "claude-haiku-4-5-20251001";\n\n    @Override\n    public Output run(RunContext runContext) throws Exception {\n        String apiKey = runContext.decryptSecret(\n            runContext.render(apiKeySecret));\n        String renderedText = runContext.render(text);\n        // Call LLM, parse response, return output\n    }\n\n    @Builder @Getter\n    public static class Output implements io.kestra.core.models.tasks.Output {\n        private String summary;\n        private List<String> keyPoints;\n        private int wordCount;\n        private int inputTokens;\n        private int outputTokens;\n    }\n}\n\`\`\`\n\n**Test structure:**\n\`\`\`java\nclass LlmSummarizeTest {\n    @Test void happyPath() { /* mock LLM → verify output fields */ }\n    @Test void rateLimitRetriesWithBackoff() { /* 429 → verify retry */ }\n    @Test void timeoutThrowsException() { /* hang → verify timeout */ }\n    @Test void apiKeyFromSecretNotPlaintext() { /* verify decryptSecret called */ }\n    @Test void emptyTextThrowsValidationError() { /* null/empty → verify */ }\n}\n\`\`\``,
        },
        {
          heading: "What the evaluator is looking for",
          body: `Kestra's engineering team will evaluate your technical test on these dimensions:\n\n**1. Does it work? (Necessary but not sufficient)**\nA working solution that fails all other criteria is not a passing score. But a failing solution that shows great patterns won't pass either. It must work.\n\n**2. Error handling (High weight)**\n- Is every LLM API error handled explicitly?\n- Is there retry logic for transient failures?\n- Is there a configurable timeout?\n- What happens when the API returns an unexpected response shape?\n\n**3. Test coverage (High weight)**\n- Do the tests cover failure paths, not just the happy path?\n- Are LLM calls mocked so tests are deterministic and don't require API access?\n- Are the tests actually testing behavior, not just asserting the code ran?\n\n**4. Security (Medium weight)**\n- API key via secret, not hardcoded\n- No credential logging\n- Input validation on user-supplied fields\n\n**5. Code quality (Medium weight)**\n- Follows Kestra's existing patterns (read the existing plugins)\n- Meaningful variable names, no unnecessary complexity\n- Appropriate use of Java idioms (not Java-as-Python)\n\n**6. README / documentation (Lower weight, but differentiating)**\n- Does the README explain design decisions, not just run instructions?\n- "I chose to accumulate the stream rather than stream incrementally because [reason]" shows product engineering thinking\n\n**The differentiator:** most candidates nail #1 and fail #2 and #3. If your test has thorough error handling and real test coverage, you're in the top quartile automatically.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "You're given 4 hours for Kestra's technical test. How should you allocate the time?",
          options: [
            "1h setup, 2h implementation, 1h polish",
            "30min reading existing Kestra plugins to match patterns, 90min implementing the plugin with error handling, 60min writing tests, 30min README and cleanup",
            "3h implementation, 1h tests",
            "2h implementation, 1h frontend UI, 1h tests",
          ],
          correct: 1,
          explanation:
            "Pattern-matching from existing code (30min) prevents the most common mistake: implementing in a style that differs from Kestra's conventions. Tests (60min) are the highest-weight evaluation signal and the most commonly skipped. README (30min) differentiates you. Over-indexing on implementation without tests is the most common failure pattern.",
        },
        {
          type: "multiple-choice",
          question:
            "Your technical test submission has a complete, working plugin but no tests. A competing candidate has a plugin with one minor bug but comprehensive test coverage. Who is more likely to advance?",
          options: [
            "You — a working solution is the primary requirement",
            "The competing candidate — tests are the clearest signal of production-level experience, and a minor bug in a well-tested codebase is easy to fix",
            "Neither — both need to pass a minimum bar on both dimensions",
            "It depends entirely on whether the minor bug affects core functionality",
          ],
          correct: 1,
          explanation:
            "Kestra explicitly screens for 'production-level experience, not prototype portfolios.' Tests are the single clearest signal of that. A well-tested codebase with a minor bug shows an engineer who understands production requirements and can fix bugs. A working-but-untested submission shows a prototype mindset.",
        },
        {
          type: "scenario",
          prompt:
            "The technical test asks you to build a Kestra plugin that calls an LLM to classify customer feedback into categories. Halfway through, you realize you won't have time to implement streaming support AND comprehensive tests. Which do you cut and why?",
          sampleAnswer:
            "Cut streaming, keep the tests. Here's my reasoning: streaming is a UX enhancement — the feature works without it, just without progressive rendering. Tests are a correctness guarantee — without them, the evaluator can't trust that the code behaves correctly in failure scenarios. The test instructions say 'production-level experience' — that maps directly to test coverage, not to every possible feature. I'd note in the README: 'Streaming output not implemented in this version — I prioritized full error handling and test coverage. Streaming would be added as a follow-up: accumulate partial chunks as they arrive and write to Kestra's internal storage progressively.' That explanation shows I understand the tradeoff and made a deliberate call, not that I ran out of time and gave up on features.",
          keyPoints: [
            "Tests signal production experience; streaming is a feature enhancement",
            "The README should explain the tradeoff explicitly — show you made a deliberate decision",
            "Kestra's evaluation criteria map directly to production requirements: correctness first, features second",
            "Communicating what you'd do next (streaming as follow-up) shows completeness of thinking",
          ],
        },
      ],
      resources: [
        {
          title: "Kestra Plugin AI (GitHub)",
          url: "https://github.com/kestra-io/plugin-ai",
          description: "Read this before the test — the code patterns here are exactly what they expect.",
        },
        {
          title: "WireMock Getting Started",
          url: "https://wiremock.org/docs/getting-started/",
          description: "How to mock HTTP APIs in Java integration tests — essential for LLM plugin testing.",
        },
      ],
    },
    {
      id: "5-3",
      unitId: "unit5",
      companySlug: "kestra",
      title: "Positioning & The Founder Conversation",
      tldr:
        "How to frame your background for the Kestra role, which experiences to lead with, which to background, and how to make the founder discussion memorable rather than generic.",
      skills: ["Self-positioning", "Founder conversation", "Strategic thinking"],
      xp: 30,
      content: [
        {
          heading: "How to frame your background",
          body: `The Kestra Product Engineer role has a specific profile. Here's how to map your experience to it:\n\n**Lead with Java, even if you have other languages**\nIf you have Java experience (even if it's not your strongest language), lead with it. Java is the single non-negotiable in the JD. "I've been working primarily in Java for [X years], and I've recently been building AI integrations in that context" is the right framing if it's true.\n\n**AI experience: specificity is credibility**\nDon't say "I've worked with LLMs." Say "I built a [specific feature] using [Claude Sonnet / GPT-4o], with a RAG pipeline over [data source], running in production at [scale], measuring [metric]." The more specific, the more credible.\n\n**Production emphasis**\nEvery time you mention an AI project, add a production signal: "this ran with real users," "I monitored P95 latency," "I wrote the retry logic when the API went down," "I built the eval pipeline to measure regression when I changed the prompt."\n\n**Full-stack framing**\nIf you have Vue.js or any frontend experience, mention it. If not, mention the closest equivalent (React? Angular?) and position it as "I'm comfortable with modern JavaScript frameworks — Vue.js is one I'd get up to speed on quickly." Don't pretend expertise you don't have; do show you're not afraid of the frontend.\n\n**Orchestration context**\nIf you have any workflow/pipeline/automation experience, surface it: CI/CD pipelines, data pipelines, job schedulers, async workflows. Even non-Kestra orchestration experience shows you understand the domain.`,
          goAnalogy: {
            term: "Kikashi",
            reading: "きかし",
            meaning:
              "A forcing move that leaves no aji — a spent resource. Don't use a weak story where a strong one exists. Every answer should be kikashi: decisive, specific, no wasted moves.",
          },
        },
        {
          heading: "The founder conversation",
          body: `Stage 4 is different from the other stages. You're not answering interview questions — you're having a strategic conversation with the people building the company.\n\n**What founders are really asking:**\n- Would I want this person deciding what to build next week?\n- Do they have the taste to know what matters?\n- Will they operate autonomously without a lot of oversight?\n- Are they genuinely excited about this problem, not just this job?\n\n**The format:** expect a mix of structured and unstructured conversation. There may be specific questions, but there will also be open-ended discussion. Lean into it — don't wait to be asked, contribute observations.\n\n**Strong founder conversation moves:**\n\n"I was using Kestra to prototype [X] before this interview and noticed [specific observation]. I'd think about solving that by [approach]." This shows you're already inside the product, not just reading about it.\n\n"I looked at your GitHub issues and noticed [specific pattern in user requests]. It seems like the biggest friction is [X]. Is that consistent with what you're hearing?" This shows you've done real research and have opinions.\n\n"I think the hardest product problem you have right now is [X]. Here's why it's hard and how I'd approach it." This shows strategic thinking and comfort with ambiguity.\n\n**What to avoid:** vague enthusiasm ("I'm really excited about orchestration!"), questions that show you haven't done research ("Can you tell me what Kestra does?"), and over-preparation that sounds rehearsed ("My greatest weakness is that I care too much...").`,
        },
        {
          heading: "Your AI strategy pitch for the founder conversation",
          body: `Be ready to give a 3-minute answer to: "What would you build for Kestra's AI strategy if you started Monday?"\n\n**The structure:**\n1. The most important problem (1 sentence): "The biggest gap in Kestra's AI story right now is [X]."\n2. Why it's the right priority (2–3 sentences): user pain, market opportunity, what it unlocks\n3. What you'd build (2–3 sentences): specific feature, how it works, how it's different from what exists\n4. How you'd measure success (1 sentence): the metric that tells you it worked\n\n**Example answer:**\n\n"The most important gap is agent execution observability. Today, if you run an AI agent loop in Kestra, the execution looks like a single black box task — you can't see which tool the agent called at step 7, why it made that decision, or where it got stuck. Enterprise customers won't trust production agents they can't inspect. I'd build a per-step agent trace: every LLM call, every tool invocation, every reasoning step tracked as a sub-task in the execution DAG, visible in the existing UI without any new UI work. This gives Kestra something no other orchestration platform has for agents — full auditability. I'd measure success as: what % of agent execution failures can a Kestra operator diagnose within 5 minutes of the failure? If that number goes from ~20% today to >80% with the new observability, we've solved the right problem."\n\nThis answer is: specific, opinionated, grounded in user pain, describes a concrete solution, and has a measurable outcome. That's the founder conversation target.`,
        },
      ],
      exercises: [
        {
          type: "scenario",
          prompt:
            "Kestra's founder asks: 'We've had candidates who look great on paper but struggle with the ambiguity of a fast-moving startup. How do you handle working without clear requirements?' Give your answer.",
          sampleAnswer:
            "I actually work best when I own the spec rather than receive it. My pattern when requirements are ambiguous: I talk to 2–3 users (or read the GitHub issues) to understand the actual pain, form a hypothesis about the right solution, write a one-page spec with the proposed behavior, key tradeoffs, and what I'm NOT building, get quick feedback from the team (a day, not a week), then build and ship the smallest version that validates the hypothesis. What I try to avoid is: waiting for clarity that isn't coming, or building for more than 2 weeks without user feedback. The biggest ambiguity risk in AI feature work is spending 3 weeks building something technically impressive that users don't actually want. I'd rather ship a rough version in week 1, see how users respond, and iterate than build the perfect version in week 4.",
          keyPoints: [
            "Own the spec — don't wait for requirements to be handed down",
            "User research first (GitHub issues, user conversations) to reduce ambiguity before building",
            "The one-page spec with clear tradeoffs and scope creates alignment fast",
            "Ship the smallest version that validates the hypothesis — don't over-build before feedback",
          ],
        },
        {
          type: "scenario",
          prompt:
            "In the Stage 3 team chat, an engineer asks: 'Walk me through the most complex AI feature you've built.' You've built an LLM-powered document classification system. Walk through your answer.",
          sampleAnswer:
            "I built a document classification system that categorized customer support tickets into 47 categories for routing to the right team. The core challenge was: 47 categories is too many for zero-shot classification (the model would conflate similar categories), and too many to fit all in a prompt as examples. My solution: a two-stage approach. Stage 1: a fast, cheap embedding-based retrieval — find the 5 most similar past tickets for each new ticket using pgvector. Stage 2: pass the new ticket + its 5 similar examples to GPT-4o with a few-shot prompt asking for classification from the reduced candidate set. This brought accuracy from 71% (zero-shot) to 89% (two-stage). I measured this with an offline eval set of 500 labeled tickets, running it after every prompt or retrieval change to catch regressions. In production, I ran into a real failure: our retrieval was biased toward recent tickets, so new categories with few historical examples classified poorly. I fixed this by adding explicit 'novel query' detection — if the top-5 retrieved tickets all had similarity scores below 0.7, flag for human review rather than auto-classify. The system runs at 3,000 tickets/day with P95 latency of 1.4 seconds and classification accuracy of 87% on production (slightly lower than eval — distribution shift from new ticket types).",
          keyPoints: [
            "Specifics: 47 categories, two-stage approach, exact accuracy numbers (71% → 89%)",
            "The offline eval set and regression testing demonstrate production-level rigor",
            "A real failure described (retrieval bias) with a concrete fix shows operational experience",
            "Production vs. eval accuracy difference shows you understand distribution shift",
          ],
        },
        {
          type: "multiple-choice",
          question:
            "The founder asks: 'What's Kestra's biggest competitive threat in the AI orchestration space?' What's the strongest answer?",
          options: [
            "'Apache Airflow — it has the largest community and most integrations'",
            "'LangGraph and similar agent frameworks — if they add scheduling and observability, they could become a full orchestration layer that competes with Kestra for AI-native teams'",
            "'Cloud providers — AWS Step Functions and GCP Workflows could add AI task types'",
            "'I don't want to speculate without more data on the competitive landscape'",
          ],
          correct: 1,
          explanation:
            "LangGraph (and similar agent-first frameworks) is the most asymmetric threat: they're already the framework of choice for AI teams building agents, and if they add production-grade scheduling, observability, and triggers, AI teams won't need a separate orchestration platform. Airflow is a legacy threat (not AI-native); cloud providers move slowly; Option D is a hedge that signals lack of conviction.",
        },
      ],
      resources: [
        {
          title: "Kestra Blog: AI Direction",
          url: "https://kestra.io/blogs",
          description: "Read the last 6 months of Kestra posts — founders will reference their own recent thinking.",
        },
        {
          title: "Lenny's Newsletter: Technical Founder Interviews",
          url: "https://www.lennysnewsletter.com",
          description: "Patterns from startup founder conversations — how technical founders think vs. PM/engineering interviewers.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "What single preparation step would most improve your Stage 2 technical test performance?",
      options: [
        "Reviewing Java syntax and common interview algorithms",
        "Reading Kestra's existing plugin-ai code on GitHub and running its tests locally before the test begins",
        "Building a full LLM application from scratch to demonstrate capability",
        "Preparing a list of questions to ask the evaluator during the test",
      ],
      correct: 1,
      explanation:
        "The test evaluates fit with Kestra's specific patterns, not generic Java ability. Reading existing plugins tells you exactly what annotation patterns to use, how to structure Output classes, how RunContext works, and what test patterns they prefer. Deviating from these patterns signals you didn't do the research — matching them signals you did.",
    },
    {
      type: "multiple-choice",
      question: "Why is 'I've worked on LLM projects' weaker than 'I built a RAG pipeline running at 5,000 queries/day with a P95 latency of 180ms' in the Kestra interview?",
      options: [
        "Scale numbers are the only thing technical interviewers care about",
        "Specificity is credibility — vague claims could apply to a weekend prototype; specific metrics and scale signal production experience",
        "Kestra processes 5,000+ queries/day so matching that scale is important",
        "Technical interviewers distrust candidates who don't cite specific numbers",
      ],
      correct: 1,
      explanation:
        "Specific details (query volume, latency, architecture choices) prove you shipped something real and measured it. Vague statements apply equally to a demo app and a production service — they provide no signal. Kestra is explicitly filtering for production experience; specific metrics are what prove you have it.",
    },
    {
      type: "multiple-choice",
      question: "The founder conversation is the final stage. What is the founders' primary question in this conversation?",
      options: [
        "Do they have the technical skills to pass our senior engineering bar?",
        "Would I want this person deciding what to build next week — do they have the judgment, initiative, and excitement to operate autonomously on Kestra's AI roadmap?",
        "Are they a culture fit with the rest of the engineering team?",
        "Can they pass a system design interview at the senior level?",
      ],
      correct: 1,
      explanation:
        "Founders in stage 4 are past technical screening (that was stage 2–3). They're evaluating judgment and fit: Can this person identify what matters? Will they work autonomously without much oversight? Do they genuinely care about the problem? Would they make the product better if given authority? That's the founder conversation.",
    },
  ],
  quizXp: 40,
};
