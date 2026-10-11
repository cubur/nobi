import type { Unit } from "@/data/types";

// Research note: the job posting and Substack posts could not be fetched
// (network policy blocked those hosts). The eval playbook, behav-sci-skills and
// Evidential docs were read directly from their public GitHub repos. Stack-post
// details and role-specific points are from search summaries or inferred.

export const agencyfundUnit1: Unit = {
  id: "unit1",
  title: "Know the Agency Fund",
  description:
    "How the fund operates, who its grantees are, the constraints they live under, and what a product person embedded in that world is likely to be asked in a live exercise.",
  companySlug: "agencyfund",
  goTerm: "Fuseki",
  goReading: "ふゆき",
  goMeaning:
    "The opening — reading the whole board before committing stones. Every later answer is placed relative to this framework: who they fund, how they work, and what they value.",
  color: "neon",
  lessons: [
    {
      id: "1-1",
      unitId: "unit1",
      companySlug: "agencyfund",
      title: "How the Agency Fund Operates",
      tldr:
        "The Agency Fund funds AI work for human agency in global development, and its accelerator embeds engineers, behavioral scientists and product managers directly into grantee teams on two-week sprints. The product role is inside the work.",
      skills: ["Operating model", "Funder vs. partner", "Sprint cadence"],
      xp: 20,
      content: [
        {
          heading: "What they are",
          body: `The Agency Fund is a philanthropic fund focused on **human agency**: people's capacity to make and act on choices that matter in their lives. Its AI work centers on the **AI for Global Development Accelerator**, run with **OpenAI** and the **Center for Global Development (CGD)**.\n\n- Launched January 2025 with **eight organizations** across health, agriculture and education\n- A **second cohort** is running in 2026 (a third is in planning, per their posts)\n- Earlier: a December 2023 call allocating roughly $2–4M to projects using AI for human agency; first program run with South Park Commons\n- Edmund Korley leads the AI for Global Development accelerator; Temina Madon co-authors much of the public writing\n\n**Caveat:** I could not read the job posting itself. Re-read it tonight and underline every verb. Those verbs are your likely live-exercise tasks.`,
          goAnalogy: {
            term: "Fuseki",
            reading: "ふゆき",
            meaning:
              "The opening. You do not fight yet. You learn where the strong corners are. Learn the fund's model before proposing anything.",
          },
        },
        {
          heading: "The distinctive part: embedded product development",
          body: `Most funders write a check and ask for reports. The accelerator **embeds expertise** into grantee teams: engineers, behavioral scientists and product managers, working in **two-week sprints**. The Agency Fund writes about this as **product development partnerships**.\n\n**What this implies for a product person:**\n- You work inside someone else's team and priorities, so **influence without authority** is the core skill\n- Sprints are short, so **scoping and sequencing** decide everything\n- Everything is held to evidence: does this help users, not just ship?\n- The fund wants **reusable patterns** (a default tech stack, an eval playbook, open-source tools), not one-off builds\n\n**Likely frame for the interview:** you are a force multiplier for small grantee teams and a source of patterns the whole cohort can reuse.`,
        },
        {
          heading: "Why a systems-minded PM fits",
          body: `Notice what the fund publishes: a **default tech stack**, an **AI evaluation playbook**, **Evidential** (an open-source experiment engine), and a unified evaluation platform in development with Project Tech4Dev. These are *infrastructure for many organizations*.\n\nA PM here is partly product manager for the grantee's tool and partly product manager for the **shared playbook and tooling**. In answers, move between both: "for this grantee I would X, and the reusable lesson for the cohort is Y."`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "What most distinguishes the Agency Fund's accelerator from a standard grant program?",
          options: [
            "It only funds organizations in a single country",
            "It embeds engineers, behavioral scientists and PMs in grantee teams on short sprints",
            "It builds one shared chatbot for all grantees",
            "It requires grantees to use proprietary software",
          ],
          correct: 1,
          explanation:
            "The embedded, sprint-based model is the defining feature and it determines what a product person there actually does: hands-on work inside grantee teams, not arm's-length oversight.",
        },
        {
          type: "scenario",
          prompt:
            "A grantee's director asks you to build a custom feature for a donor demo next week. You are mid-sprint with a different goal. What is your first move?",
          sampleAnswer:
            "I'd ask what user behavior or outcome the feature is meant to change and how we'd know it worked, then size it against the sprint goal. If it genuinely serves the donor milestone, I'd make the trade-off explicit: what we drop to fit it, and whether a thin demo version (mocked or scripted) meets the need without derailing the sprint. The director owns priorities, so I'm not refusing; I'm making the cost visible and offering the smallest thing that satisfies the real need. If it becomes a pattern, I'd raise it as a planning issue, not fight it feature by feature.",
          keyPoints: [
            "Anchor on a user outcome and a way to measure it",
            "Respect the grantee's ownership; make trade-offs visible rather than saying no",
            "Offer the smallest version that meets the real need",
            "Separate a one-off request from a recurring planning problem",
          ],
        },
        {
          type: "fill-blank",
          prompt: "The accelerator runs in two-week ____ with embedded engineers, behavioral scientists and PMs.",
          blank: "sprints",
          hint: "Agile cadence",
        },
      ],
      resources: [
        {
          title: "Product Development Partnerships (Agency Fund)",
          url: "https://theagencyfund.substack.com/p/product-development-partnerships",
          description: "The fund's own description of embedding expertise in grantee teams.",
        },
        {
          title: "Agency Fund Accelerator: Year One Update",
          url: "https://theagencyfund.substack.com/p/agency-fund-accelerator-year-one",
          description: "What the first cohort built and learned.",
        },
      ],
    },
    {
      id: "1-2",
      unitId: "unit1",
      companySlug: "agencyfund",
      title: "The Grantee Reality",
      tldr:
        "Grantees are small technical teams serving users on WhatsApp, SMS and voice with weak connectivity and tight budgets. The fund's own stack criteria: reliability in low-connectivity settings, sustainability, and real cost at scale. Your proposals must pass that test.",
      skills: ["Grantee constraints", "Context-fit design", "Sustainability"],
      xp: 20,
      content: [
        {
          heading: "Names to have ready",
          body: `All public. Mention one or two naturally, never as name-dropping:\n\n- **Rocket Learning (India):** Shiksha Saathi, a WhatsApp chatbot supporting Anganwadi (early-childhood) workers; co-built the open-source experiment tool Evidential\n- **Youth Impact:** embeds AI in ConnectEd, a low-tech phone-tutoring program for primary-school learners\n- **Jacaranda Health:** maternal health; UlizaLlama work on Swahili language models\n- **IDinsight:** Ask-A-Question and Ask-A-Metric tools; co-author of the stack and playbook\n- **Adalat AI:** AI for court processes in India\n\nThe cohort serves pregnant women and new parents, daycare providers, teachers and students, and smallholder farmers.`,
        },
        {
          heading: "Typical startup vs. typical grantee",
          body: `**Typical startup:** large engineering team, cloud spend is fine, fast broadband users, optimizes growth.\n\n**Typical grantee:** 1–3 technical staff, nonprofit budget where **cost at scale** matters, users on WhatsApp/SMS/voice with poor connectivity, optimizes **outcomes and trust**.\n\nThe fund's own criteria for tools were **reliability in low-connectivity settings, long-term sustainability, and real cost at scale**. A heavy custom pipeline for a two-person team fails all three. Prefer boring, hosted, open-source, maintainable.`,
          goAnalogy: {
            term: "Katachi",
            reading: "かたち",
            meaning:
              "Good shape. The same move is good shape in one position and heavy in another. The same tool is right or wrong depending on the team that has to run it.",
          },
        },
        {
          heading: "What happens after the grant",
          body: `A recurring theme in the fund's writing is that many social-sector organizations assume they must build custom AI infrastructure. The fund pushes the other way: use shared, maintained components so the team is not left owning a bespoke system when the grant ends.\n\nYour reflex in any design question: **who maintains this in 12 months, and what does it cost then?**`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "A 2-person technical team asks for a real-time streaming data platform. What is the best response?",
          options: [
            "Agree; streaming is the modern standard",
            "Ask which decision needs sub-day freshness; if none, propose a daily batch load into a warehouse",
            "Tell them to hire more engineers first",
            "Defer all data work",
          ],
          correct: 1,
          explanation:
            "Match the pipeline to the decision and to what the team can maintain. Daily batch is usually enough, far cheaper to run, and fits a tiny team.",
        },
        {
          type: "multiple-choice",
          question: "Why does the fund favor open-source or generous-free-tier tools for grantees?",
          options: [
            "They are always technically superior",
            "Cost at scale and sustainability after grant funding ends",
            "Proprietary tools cannot handle chat data",
            "OpenAI requires it",
          ],
          correct: 1,
          explanation:
            "What happens after the grant is the recurring concern. Tools must be affordable and maintainable by a small team.",
        },
        {
          type: "fill-blank",
          prompt: "The fund's stack criteria: reliability in ____ connectivity settings, long-term sustainability, and real cost at scale.",
          blank: "low",
          hint: "The opposite of high",
        },
      ],
      resources: [
        {
          title: "Agency Fund investments",
          url: "https://www.agency.fund/investments",
          description: "Grantees and focus areas.",
        },
      ],
    },
    {
      id: "1-3",
      unitId: "unit1",
      companySlug: "agencyfund",
      title: "Decoding the Role and the Live Exercise",
      tldr:
        "Your two weak areas, pipelines and evals, are exactly what the fund publishes the most about, so they are the most probable exercise territory. Know the likely shapes and how to use AI openly without looking dependent on it.",
      skills: ["Role decoding", "Exercise anticipation", "Using AI credibly"],
      xp: 25,
      content: [
        {
          heading: "Why pipelines and evals are the likely territory",
          body: `The fund's flagship public work: a **default tech stack** (ingest, warehouse, transform, dashboard, LLM observability) and an **AI evaluation playbook** with step-by-step guides "from user funnels to ETL pipelines." A product role supporting grantees will likely be tested on whether you can reason about these.\n\nThe playbook (read directly from its repo) confirms this: its "Repeatable Motions" are literally (1) build a user funnel, (2) build metrics through ETL pipelines, (3) diagnose weak links with hypotheses, (4) run experiments, and its Roles page makes the **Product Manager directly responsible for Level 2 product metrics and the cross-functional lead for evaluation**. Still treat the exercise shape as a hypothesis; the posting is the source of truth.`,
        },
        {
          heading: "Likely live-exercise shapes",
          body: `Practice each of these in Unit 4:\n\n1. **Design the data model and funnel.** Given raw chatbot events, define tables and a user funnel, and say what you'd measure first\n2. **Pick an eval level.** Given a vague goal ("is our bot helping farmers?"), choose among the four eval levels and defend it\n3. **Critique a flawed eval.** LLM judge never validated against humans, tiny sample, no baseline\n4. **Debug a number.** A funnel or pipeline output doesn't reconcile: duplicates, a missing day, bot traffic\n5. **Prioritize under constraints.** Limited sprint capacity across needs; defend trade-offs\n\nMost of these reward **structure and judgment** more than syntax.`,
        },
        {
          heading: "Your AI-assist edge, stated openly",
          body: `You said you can manage the rest with AI. Say so, and show you verify.\n\n**Weak:** "I'd just ask ChatGPT to write the pipeline."\n\n**Strong:** "I'd have an assistant draft the dbt model, then check the grain, null handling, and reconcile row counts against the source before trusting any dashboard."\n\nThe second shows you know what correct looks like, which is the actual skill. Interviewers probe for exactly the gap between *generating* and *verifying*.\n\nIf they name a tool you don't know, say what the concept does, name the gap, and describe how you'd check the output. Never bluff.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Midway through the exercise they mention dbt, which you haven't used. What do you do?",
          options: [
            "Use generic terms and hope it passes",
            "Say what you know (SQL transformations as versioned, tested models), name your gap, and describe how you'd verify the output",
            "Stay silent and move on",
            "Ask to skip that section",
          ],
          correct: 1,
          explanation:
            "Honest scope plus a verification plan reads as senior. Bluffing is the failure mode interviewers probe for.",
        },
        {
          type: "scenario",
          prompt:
            "In three or four sentences, how would you describe your experience gaps in pipelines and evals and how you close them on the job?",
          sampleAnswer:
            "Hands-on ETL and eval design is my least-practiced area, so I prepared specifically on your default stack and eval playbook. I learn fastest by building a small end-to-end version, so in the first sprint I'd pair with a data engineer to build a funnel from real events. I use AI to draft queries and models, but I always verify grain, tests and row-count reconciliation against the source rather than trusting output. And I'm strong on the product side: deciding which metric matters, which eval level to run, and what decision it informs.",
          keyPoints: [
            "Name the gap plainly without apologizing",
            "Show a concrete learning loop, not a vague 'I learn fast'",
            "State your verification habit when using AI",
            "Anchor on the strength you bring: judgment about what to measure and decide",
          ],
        },
      ],
      resources: [
        {
          title: "AI Eval Playbook (living playbook, GitHub)",
          url: "https://github.com/agency-fund/taf-ai-eval-playbook",
          description: "The playbook repo; skim the structure tonight.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "A grantee proposes a custom-built analytics platform. Which question best reflects the fund's criteria?",
      options: [
        "Which cloud provider is cheapest this month?",
        "Who will maintain this in a year, what will it cost at our scale, and does it work in low-connectivity settings?",
        "Can we add more dashboards?",
        "Is it written in the newest framework?",
      ],
      correct: 1,
      explanation: "Sustainability, real cost at scale and connectivity are the fund's stated tool criteria.",
    },
    {
      type: "multiple-choice",
      question: "Which framing best fits the PM role inside an accelerator sprint?",
      options: [
        "Gatekeeper who approves or rejects grantee ideas",
        "Embedded partner who scopes work to a user outcome, makes trade-offs visible, and extracts reusable patterns",
        "Project manager who reports status to the funder",
        "Engineer who builds whatever is requested",
      ],
      correct: 1,
      explanation: "Embedded, outcome-oriented, trade-off-visible, pattern-producing.",
    },
  ],
  quizXp: 30,
};
