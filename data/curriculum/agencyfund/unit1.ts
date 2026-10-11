import type { Unit } from "@/data/types";

// Research note: the job posting was read from a saved copy of the Ashby page.
// The eval playbook, behav-sci-skills and Evidential docs were read from public
// GitHub repos. The Substack stack post could not be fetched (network policy), so
// its details come from search summaries.

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
          body: `The Agency Fund is a philanthropic fund focused on **human agency**: people's capacity to make and act on choices that matter in their lives. Its AI work centers on the **AI for Global Development Accelerator**, run with **OpenAI** and the **Center for Global Development (CGD)**.\n\n- Launched January 2025 with **eight organizations** across health, agriculture and education\n- A **second cohort** is running in 2026 (a third is in planning, per their posts)\n- Earlier: a December 2023 call allocating roughly $2–4M to projects using AI for human agency; first program run with South Park Commons\n- Edmund Korley leads the AI for Global Development accelerator; Temina Madon co-authors much of the public writing\n\nFrom the job posting: TAF describes itself as a US non-profit **funder-doer** that builds projects to expand human agency at scale, embeds engineers and product managers inside evidence-based nonprofits across East Africa, South Asia and beyond, and has a community of **200+ partner organizations**. The team combines software, AI, social psychology and development economics, with minimal hierarchy.`,
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
      title: "Decoding the Actual Job Posting",
      tldr:
        "The role is a Technical Product Manager: senior, hands-on, embedded with 3–4 NGO partners, split roughly 50/50 between partner-facing and internal engineering work, with SQL, pipelines, AI evals and A/B tests named outright. Map every line of the posting to a likely exercise.",
      skills: ["Role decoding", "Exercise anticipation", "Using AI credibly"],
      xp: 30,
      content: [
        {
          heading: "What the posting says (read from the saved page)",
          body: `**Title:** Technical Product Manager, Engineering department, full-time, remote. The description says "Remote (Sub-Saharan African or South Asia)" with flexible time zone, while the board lists "Global". Confirm eligibility if that isn't already settled.\n\n**The role:** "a senior, delivery-focused role at the center of TAF's accelerator work", embedded with **3–4 NGO partners at a time**, leading product engagements end-to-end. Time split **roughly 50/50** partner-facing and internal-facing.\n\n**Hands-on, in their words:** "build dashboards, scoping data pipelines, designing A/B tests, and unblocking engineers. You are expected to be as comfortable in SQL query as you are in a partner discovery call."\n\n**Partner engagement (50%):** primary interface with partners; structured discovery; translate needs into roadmaps and technical advisory on product, data, evaluation and experimentation; report patterns across organizations into public goods for the sector.\n\n**Product and engineering (50%):** build dashboards, data pipelines, **AI evaluations** and production integrations; analyze data; run A/B tests and user research; define roadmaps across TAF's tools and run agile sprints with TAF's engineering team; own the loop from partner need to shipped product to feedback.\n\n**Team and talent:** coach partner staff and help them hire; mentor **Lighthouse Fellows**; contribute to TAF's internal playbook.\n\n**Success:** at **90 days** independent agency with at least two partners, own sprint cadence, one quick win (an experiment run, a feature shipped, a dashboard built). At **one year** led 3–4 engagements end-to-end, training others, contributed to a framework or playbook.`,
        },
        {
          heading: "Who they say they want",
          body: `- 5+ years in technical product management, solutions engineering or tech consulting, with client-facing and engineering-facing work\n- "shipped AI/LLM product features, data pipelines or warehouses, and production APIs, **not just managed people who did, but actually built alongside them**"\n- "can read and write **SQL**, navigate a codebase, build data pipelines and dashboards"\n- Quantitative and qualitative methods for problem statements and **causal inference (A/B tests etc.)**; "design a study, interpret the results, and present them to a non-technical program director"\n- **Agile fluency:** sprints, backlog grooming, estimation, retrospectives, run well in small teams\n- Managed **competing stakeholders across engineers, behavioral scientists and NGO program teams without formal authority**\n\n**Bonus:** global development data stacks (**ODK, DHIS2, Kobo, Metabase, dbt**), the evidence ecosystem (**J-PAL, IPA, IDinsight**), scaling products with data, GenAI product exposure (**evaluation frameworks, prompt engineering, LLM integrations**), low-resource or mission-driven track record.`,
        },
        {
          heading: "Posting line to likely exercise",
          body: `- "scoping data pipelines" and "dashboards" means: design a data model and pipeline for chatbot data; write or read SQL for a funnel (Unit 2)\n- "AI evaluations" means: choose an eval level, design a golden set and judge (Unit 3)\n- "A/B tests", "causal inference", "present to a program director" means: design an experiment and explain it to a non-technical person (Unit 3)\n- "structured discovery", "translate needs into roadmaps" means: run or critique a partner discovery call and produce a roadmap (Unit 4, Mock C)\n- "agile in a small team", "estimation" means: plan a two-week sprint with limited capacity (Unit 4)\n- "competing stakeholders without authority" means: a conflict scenario between engineer, behavioral scientist and program lead (Unit 4)\n- "coach partner staff", "mentor Fellows", "playbook" means: explain a concept simply, show how you'd document and teach it\n\nExpect a mix of **doing** (SQL, data model, funnel) and **judgment** (what to measure, what to build first, how to talk to a partner).`,
        },
        {
          heading: "Be truthful about 'actually built alongside'",
          body: `The posting wants someone who built, not only managed. You told me pipelines and evals are your weakest area, so do not overclaim.\n\n**Weak:** implying you've run production ETL when you haven't.\n\n**Strong:** "Here's what I've shipped and my role in it (real example). Pipelines are where I'm least experienced hands-on, so I prepared on your stack: I can model events at message grain, write funnel SQL, and I verify any AI-drafted query by checking grain, join type and reconciliation. In my first 90 days I'd pair with your engineers on a partner's pipeline to close the gap."\n\nIf they name a tool you don't know, say what the concept does, name the gap, and explain how you'd verify the output. Bluffing is the failure mode they'll probe for.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "What time split does the posting describe for the Technical PM?",
          options: [
            "100% partner-facing",
            "Roughly 50/50 between partner-facing work and internal engineering execution",
            "Mostly internal planning",
            "80% research, 20% delivery",
          ],
          correct: 1,
          explanation: "The role is explicitly split about evenly between partner engagement and product and engineering execution.",
        },
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
          explanation: "Honest scope plus a verification plan reads as senior. Bluffing is what interviewers probe for.",
        },
        {
          type: "scenario",
          prompt:
            "They say: 'The role needs someone who has actually built pipelines, not just managed people who did. Where are you on that?' Answer in three or four sentences.",
          sampleAnswer:
            "I'll be straightforward: hands-on pipeline engineering is my least-practiced area, and I don't want to oversell it. What I have done is [your real example of shipping an AI feature or working with data, and exactly what you built]. For this role I prepared specifically on your stack: I can model chatbot events at message grain, write funnel and retention SQL, and I check any AI-drafted query for grain, join type and reconciliation against source counts. In the first 90 days I'd pair with your engineers on a partner's pipeline, ship a dashboard as the quick win, and close the gap quickly.",
          keyPoints: [
            "Honest about the gap, no overclaiming",
            "Give one real example of what you did build",
            "Show concrete preparation and a verification habit",
            "Tie to the 90-day plan the posting itself describes",
          ],
        },
      ],
      resources: [
        {
          title: "Technical Product Manager posting (Agency Fund, Ashby)",
          url: "https://jobs.ashbyhq.com/The%20Agency%20Fund/c687cd01-229c-49a4-836f-b0551da8c279",
          description: "The source. Re-read tonight and underline every verb.",
        },
        {
          title: "AI Eval Playbook (living playbook, GitHub)",
          url: "https://github.com/agency-fund/taf-ai-eval-playbook",
          description: "The playbook repo behind Unit 3.",
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
