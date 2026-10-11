import type { Unit } from "@/data/types";

export const agencyfundUnit2: Unit = {
  id: "unit2",
  title: "Data Pipelines & ETL",
  description:
    "Your weakest area, so the deepest unit. From chatbot events to a funnel you can trust: the ELT mental model, the fund's default stack, the chatbot data model, and data quality and privacy.",
  companySlug: "agencyfund",
  goTerm: "Katachi",
  goReading: "かたち",
  goMeaning:
    "Shape — the efficient, well-formed arrangement of stones. A good pipeline has good shape: raw layer, modeled layer, metrics layer, each connected and doing one job.",
  color: "golden",
  lessons: [
    {
      id: "2-1",
      unitId: "unit2",
      companySlug: "agencyfund",
      title: "ETL vs ELT: The Mental Model",
      tldr:
        "A pipeline moves data from where it is created to where people analyze it, reshaping it on the way. Modern small teams load raw data first (ELT) and transform with versioned SQL. Five properties make a pipeline defensible: incremental, idempotent, observable, schema-aware, documented grain.",
      skills: ["ETL/ELT", "Warehouse concepts", "Pipeline properties"],
      xp: 30,
      content: [
        {
          heading: "Extract, Load, Transform",
          body: `A pipeline has three verbs:\n\n- **Extract:** pull data from a source (a chatbot platform, a form tool, a survey)\n- **Load:** write it into the destination (a **warehouse** such as BigQuery)\n- **Transform:** clean, join and model it into tables people can query\n\n**ETL** transforms before loading; logic lives inside the pipeline tool and raw data is often discarded.\n**ELT** loads **raw** data first and transforms inside the warehouse with SQL. Storage is cheap, raw data is preserved, and the transformation logic is SQL in version control.\n\n**Why small teams choose ELT:** when you find a bug in a transformation, you fix the SQL and rebuild from raw. With ETL you may have already lost the data you needed.`,
          goAnalogy: {
            term: "Renzoku",
            reading: "れんぞく",
            meaning:
              "Connected play. Raw data you can always return to keeps your whole position connected: a bug becomes a rebuild, not a loss.",
          },
        },
        {
          heading: "How the playbook frames ETL (Motion 02)",
          body: `The Agency Fund's playbook calls "build and track metrics through robust ETL pipelines" its second repeatable motion. Its framing, which you can echo:\n\n- **Extract:** chat logs, product telemetry, survey tools, third-party APIs, even spreadsheets\n- **Transform:** clean, standardize and reshape: **timestamp alignment, anonymization, session stitching**, and derived metrics such as time-on-task or trust indicators\n- **Load:** a centralized warehouse or analytics dashboard that teams can access\n\nWhy it matters for AI products: generative models emit high volumes of messy, unstructured data (prompts, outputs, clicks, feedback). Their example is an adolescent mental-health product that must integrate **model outputs (Level 1), engagement logs (Level 2), behavioral indicators (Level 3) and outcome data (Level 4)** into consistent indicators per level. Note that the playbook uses the older ETL label for the whole idea; in practice the modern stack does the transform step after loading (ELT).`,
        },
        {
          heading: "Five properties you can defend in an interview",
          body: `1. **Incremental:** move only new or changed rows, not everything each run\n2. **Idempotent:** running twice gives the same result (no duplicates after a retry)\n3. **Observable:** you find out when it fails or data is stale (freshness checks, alerts)\n4. **Schema-aware:** a renamed source column should not silently break reports\n5. **Documented grain:** every table states what one row represents\n\n**Interview move:** when asked to design a pipeline, say the **grain** first ("one row per message"), then the **load strategy** (incremental on a timestamp or ID, with a dedupe key), then the **checks**. That order signals you understand the real failure modes.`,
        },
        {
          heading: "Grain is where most bugs live",
          body: `**Grain** = what one row represents. Most reporting errors are grain mistakes:\n\n- Joining users (one row each) to messages (many per user) and then counting users → inflated counts (a **fan-out**)\n- Counting messages when you meant conversations\n- Mixing daily and monthly rows in one table\n\nSanity check habit: after any join, ask "did my row count change the way I expect?" and compare to a known total.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Why do most modern small teams prefer ELT?",
          options: [
            "It is always faster at runtime",
            "Raw data is preserved and transformations are versioned SQL you can rerun after fixing a bug",
            "It avoids needing a warehouse",
            "It removes the need for data tests",
          ],
          correct: 1,
          explanation: "Keeping raw data means a transformation bug is a rebuild, not a data loss.",
        },
        {
          type: "multiple-choice",
          question: "A nightly job reloads the full chat log; after a retry the dashboard message count doubles. Which property was missing?",
          options: ["Observability", "Idempotency", "Schema awareness", "Documentation"],
          correct: 1,
          explanation: "A retry should not change the result. Dedupe on a stable message ID, or use upsert/merge semantics.",
        },
        {
          type: "fill-blank",
          prompt: "Before designing any table, state its ____: what one row represents.",
          blank: "grain",
          hint: "Level of detail",
        },
        {
          type: "scenario",
          prompt:
            "Someone asks you to 'build a pipeline for the chatbot data'. Walk through the first three questions you ask and why.",
          sampleAnswer:
            "First, what decision will this data inform and how fresh does it need to be? That tells me batch vs. near-real-time and keeps me from overbuilding for a two-person team. Second, what are the sources and what does one row look like in each: messages, users, events, surveys? That sets the grain of each raw table. Third, who consumes it and what are the three metrics they check weekly? Those define the modeled tables and the tests. Only then do I pick tools, and I'd default to ingestion into a warehouse, SQL transformations in version control, and a dashboard on top, with freshness and uniqueness checks.",
          keyPoints: [
            "Start from the decision and freshness need, not the tool",
            "Define sources and grain explicitly",
            "Work backward from the metrics people actually check",
            "Pick tools last, defaulting to the boring maintainable stack",
          ],
        },
      ],
      resources: [
        {
          title: "The Open Data Stack Distilled into Four Core Tools (Airbyte)",
          url: "https://airbyte.com/blog/modern-open-data-stack-four-core-tools",
          description: "A readable overview of ingest, warehouse, transform, BI.",
        },
      ],
    },
    {
      id: "2-2",
      unitId: "unit2",
      companySlug: "agencyfund",
      title: "The Agency Fund Default Stack",
      tldr:
        "The fund mapped 50+ tools across 30+ nonprofits to recommend defaults: roughly Airbyte into BigQuery with dbt, dashboards in Looker Studio or Metabase, and LLM tooling such as Langfuse, OpenRouter and n8n. Know each tool in one sentence and know when the default is overkill.",
      skills: ["Default stack", "Tool roles", "Right-sizing"],
      xp: 30,
      content: [
        {
          heading: "What they recommend",
          body: `From the fund's 'default tech stack for the social sector' work (with data.org, Fast Forward and IDinsight), based on a mapping of **50+ tools** and partnerships with **30+ nonprofits**. Based on published summaries (I could not read the post itself, so verify the exact picks):\n\n- **Ingestion:** Airbyte\n- **Warehouse:** BigQuery\n- **Transformation:** dbt\n- **Dashboards:** Looker Studio by default; Metabase for self-hosting or deeper drill-down\n- **Catalog:** dbt docs\n- **Ad-hoc analysis:** Colab notebooks\n- **LLM layer (as named in summaries):** OpenRouter for model flexibility, Langfuse for monitoring and evaluation, n8n for workflow automation\n\nSelection criteria were reliability in low-connectivity settings, long-term sustainability and real cost at scale. Tools are mostly open source or have generous free tiers and nonprofit discounts.`,
        },
        {
          heading: "What the playbook itself names (verified)",
          body: `In the playbook's vision for a unified evaluation platform it names **Langfuse, Helicone, Traceloop** (LLM observability) and **Evidential** (experiments) as tools to integrate, and lists "dashboards and data pipelines", an "experimentation platform" and "project and knowledge tools" as collaboration infrastructure. So Langfuse and Evidential are safe to mention confidently; for the Airbyte/BigQuery/dbt picks, check the stack post.`,
        },
        {
          heading: "One sentence per tool",
          body: `If you can say each in one sentence, you can discuss the stack:\n\n- **Airbyte:** connectors that copy data from source apps into the warehouse on a schedule\n- **BigQuery:** the warehouse; serverless, pay per query, generous free tier\n- **dbt:** turns raw tables into clean, tested, documented models using SQL files in git\n- **Looker Studio / Metabase:** dashboards on the modeled tables\n- **Langfuse:** logs each LLM call as a trace, with scores and review of conversations\n- **OpenRouter:** one API for many models so you can swap without rewriting\n- **n8n:** low-code automation that glues systems together`,
        },
        {
          heading: "The wider ecosystem and when the stack is overkill",
          body: `Project Tech4Dev built **Dalgo**, a low-cost managed data platform (ingestion, warehouse, transformation) serving about a dozen NGOs, and **Kaapi**, an API-first AI middleware layer for platforms such as Glific, Avni, Evidential and Dalgo. **Evidential** is the open-source experiment engine. A unified AI evaluation platform is in development with Tech4Dev. Mentioning these shows you know the ecosystem.\n\n**When the default is overkill:** a grantee with a Google Sheet and 200 users does not need Airbyte, BigQuery and dbt. A good PM names the **trigger** for upgrading: multiple sources, hundreds of thousands of messages, metrics that must be reproducible, or more than one person building reports.`,
          goAnalogy: {
            term: "Joseki",
            reading: "じょうせき",
            meaning:
              "A known-good local sequence. A default stack is joseki: not optimal everywhere, but safe, well understood, and a sensible starting point you only leave on purpose.",
          },
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Which pairing of tool and job is correct?",
          options: [
            "dbt: copies data from source apps into the warehouse",
            "Airbyte: copies data from source apps into the warehouse",
            "Langfuse: runs SQL transformations",
            "Looker Studio: stores raw data",
          ],
          correct: 1,
          explanation: "Airbyte ingests, dbt transforms, Langfuse observes LLM calls, Looker Studio visualizes.",
        },
        {
          type: "multiple-choice",
          question: "A grantee tracks 200 users in a Google Sheet. Do they need Airbyte plus dbt plus BigQuery?",
          options: [
            "Yes, always standardize on the stack",
            "Not yet; name the trigger (more sources, much higher volume, need for reproducible metrics) at which it earns its cost",
            "Never use a warehouse",
            "Only if a funder requires it",
          ],
          correct: 1,
          explanation:
            "A default is a starting point, not a mandate. A good PM right-sizes and names the upgrade trigger.",
        },
        {
          type: "fill-blank",
          prompt: "In the default stack, ____ turns raw warehouse tables into tested, documented models using SQL in git.",
          blank: "dbt",
          hint: "Transformation tool",
        },
        {
          type: "scenario",
          prompt:
            "A grantee asks why you recommend Langfuse and OpenRouter rather than calling one model provider directly from their code. Explain in plain language.",
          sampleAnswer:
            "Calling one provider directly works until it doesn't: prices change, a model degrades or a better one appears, and swapping means rewriting code. OpenRouter gives one interface to many models, so switching or A/B testing models is a config change. Langfuse records each LLM call as a trace with inputs, outputs, cost and latency, and lets you attach scores and review real conversations. Together they make the AI part observable and swappable, which matters for a small team that can't afford to be locked in or flying blind. I'd also flag the trade-off: an extra hop adds a dependency and some latency, so for a very small pilot a direct call plus basic logging may be enough.",
          keyPoints: [
            "Model flexibility reduces lock-in and enables model comparisons",
            "Traces make failures and costs visible for small teams",
            "Name the trade-off: added dependency and latency",
            "Right-size: a tiny pilot may not need it yet",
          ],
        },
      ],
      resources: [
        {
          title: "A Default Tech Stack for the Social Sector",
          url: "https://theagencyfund.substack.com/p/a-default-tech-stack-for-the-social",
          description: "The source post. Read it tonight, since I could only see summaries.",
        },
        {
          title: "Evidential backend (open-source experiment engine)",
          url: "https://github.com/agency-fund/evidential-be",
          description: "See what the fund actually builds.",
        },
      ],
    },
    {
      id: "2-3",
      unitId: "unit2",
      companySlug: "agencyfund",
      title: "The Playbook's User Funnel (Motion 01)",
      tldr:
        "The playbook's first 'repeatable motion' is a six-stage user funnel worked backward from the development outcome: recruitment, onboarding, engagement, retention, proximal outcome, development outcome. Each stage needs a user-action entry condition, a metric, a target, a cost and an owner. Expect this to be the center of the live exercise.",
      skills: ["Funnel design", "Data modeling", "Metric definition"],
      xp: 40,
      content: [
        {
          heading: "Six stages, worked backward from the outcome",
          body: `From the Agency Fund's AI evaluation playbook ("Repeatable Motions", Motion 01) and the matching build-user-funnel skill in their behav-sci-skills repo. Start with the **development outcome** you ultimately target (Level 4), then work backward:\n\n1. **Recruitment:** the beneficiary is identified and enters the program (Level 2)\n2. **Onboarding:** introduced to the AI product, completes initial setup (Level 2)\n3. **Engagement:** actively interacting with the product (Level 2)\n4. **Retention:** continues over time rather than dropping off (Level 2)\n5. **Proximal outcome:** near-term cognitive or behavioral change (Level 3)\n6. **Development outcome:** the long-term result (Level 4)\n\nLevel 1 (model-quality monitoring) runs **underneath every stage**. The playbook's example: a prompt change (Level 1) can be traced through to engagement (Level 2), behavior (Level 3) and outcomes (Level 4).`,
          goAnalogy: {
            term: "Ladder",
            reading: "しちょう",
            meaning:
              "A ladder either works or fails at one specific stone. A funnel is a ladder: find the single step where it breaks before you play elsewhere.",
          },
        },
        {
          heading: "What each stage must define",
          body: `For every stage the playbook says to define:\n\n- What **the program does** to bring users into the stage\n- What **the user must do** to count as having entered it\n- The **metric** that confirms entry (login rate, session length, quiz completion)\n- **Target values and transition rates** between stages\n- The **cost** of moving a user through the stage\n- The **DRI** (directly responsible individual) for metrics at that stage\n\nThis turns a theory of change into "a measurable, cost-aware program design tool" (the playbook's phrase).\n\n**Two rules the companion skill enforces (good things to say aloud):**\n- **Entry is a user action, not a program action.** "We sent 10,000 invitations" is program activity. "The farmer sends a first message" is stage entry.\n- **The proximal outcome is a real change, not more usage.** If it reads "asks 3+ questions", that is engagement again, and the funnel has no Level 3 rung.`,
        },
        {
          heading: "From funnel to tables",
          body: `A minimal data model to support it, always stating the grain:\n\n- **users:** one row per person; stable pseudonymous user_id (hashed phone number), first_seen_at, language, cohort\n- **conversations:** one row per run of related messages (new one after, say, 30 minutes idle) \n- **messages:** one row per message; message_id, user_id, direction in/out, timestamp, text, model/prompt version, latency, tokens, error flag\n- **events:** one row per product event (enrolled, completed_onboarding, completed_lesson)\n- **surveys / outcomes:** one row per response, keyed to user_id, for Level 3–4 stages\n\nReport conversion at each step by cohort and language. The biggest relative drop is the first place to look, weighed against how fixable it is.\n\n**Pitfalls:** denominator drift (retention measured against people never reached), duplicate users, timezones, bot messages counted as activity, delivery receipts mistaken for engagement, and **shared phones and channel switching**, which quietly break telemetry assumptions. Run an **instrumentation reality check**: for each stage, can we actually observe the metric today?`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Which is a valid stage-entry condition for 'Engagement' in the playbook's sense?",
          options: [
            "We broadcast the program on radio",
            "We sent 10,000 invitation messages",
            "The farmer sends a first message to the bot",
            "The team approved the launch",
          ],
          correct: 2,
          explanation: "Entry is something the user does. The other options are program activity.",
        },
        {
          type: "multiple-choice",
          question: "A funnel defines its proximal outcome as 'user asks 3 or more questions'. What is wrong?",
          options: [
            "Nothing; it is a good Level 3 outcome",
            "It is just engagement again; the proximal outcome should be a change in knowledge, decision or behavior that plausibly mediates the final outcome",
            "Three is too small",
            "It should be a Level 1 metric",
          ],
          correct: 1,
          explanation: "If the proximal outcome is more usage, the funnel has no Level 3 rung and can't support user evaluation later.",
        },
        {
          type: "multiple-choice",
          question: "Funnel counts: 10,000 recruited, 4,000 onboarded, 1,500 engaged, 300 retained at day 7. What are the step conversions?",
          options: ["40%, 37.5%, 20%", "40%, 15%, 3%", "60%, 62.5%, 80%", "4%, 1.5%, 0.3%"],
          correct: 0,
          explanation: "4,000/10,000 = 40%; 1,500/4,000 = 37.5%; 300/1,500 = 20%. Compute step-to-step conversion, not just cumulative.",
        },
        {
          type: "fill-blank",
          prompt: "Before trusting any stage metric, run an ____ reality check: can we actually observe it for this population today?",
          blank: "instrumentation",
          hint: "Measurement plumbing",
        },
        {
          type: "scenario",
          prompt:
            "A WhatsApp coaching bot for caregivers reports 'total messages' as its only metric. Build the funnel in about two minutes: outcome, stages, one entry action and metric each, and your first diagnostic move.",
          sampleAnswer:
            "I'd start from the outcome: say caregivers using a recommended early-learning activity with their child (Level 4 later: child development). Working backward: Development outcome, long-term, measured by a partner assessment. Proximal outcome (Level 3): the caregiver reports doing the activity this week, a behavior not a message count. Retention: still messaging after day 7 and 30. Engagement: completes a first activity conversation. Onboarding: replies to the welcome message and sets language. Recruitment: enrolled through the community worker. For each stage I'd write the user action that counts as entry, the confirming metric, a provisional target and transition rate, the cost, and an owner. I'd run an instrumentation check, since shared phones may break user-level counts and the Level 3 stage needs a survey or in-chat question that doesn't exist yet. First diagnostic move: compute step conversions by language and cohort, set aside any gap explained by a data issue, then take the largest real gap and write two to four competing hypotheses before touching the product.",
          keyPoints: [
            "Work backward from the outcome; six stages with Level 1 monitoring underneath",
            "Entry conditions are user actions; the proximal outcome is behavior change, not usage",
            "Per stage: metric, target/transition, cost, owner; flag unobservable metrics",
            "Diagnose from the largest real gap after ruling out data issues",
          ],
        },
      ],
      resources: [
        {
          title: "Playbook: Repeatable Motions",
          url: "https://eval.playbook.org.ai/motions",
          description: "Motion 01 (funnel) and Motion 02 (ETL). Read tonight.",
        },
        {
          title: "behav-sci-skills: build-user-funnel",
          url: "https://github.com/agency-fund/behav-sci-skills",
          description: "The fund's own skill spec for building a funnel, with a worked example.",
        },
      ],
    },
    {
      id: "2-4",
      unitId: "unit2",
      companySlug: "agencyfund",
      title: "Data Quality, PII and Trust",
      tldr:
        "A pipeline that quietly drops a day of data is worse than one that errors. Know the handful of tests that catch most problems, and treat PII and consent as first-order for users like pregnant women, farmers and children.",
      skills: ["Data quality tests", "Reconciliation", "Privacy"],
      xp: 30,
      content: [
        {
          heading: "Tests that catch most real problems",
          body: `dbt-style tests, in rough order of value:\n\n- **unique** and **not_null** on every primary key (message_id, user_id)\n- **relationships:** every message's user_id exists in users\n- **accepted_values** on enums (direction in 'in','out')\n- **freshness:** alert if the newest row is older than expected\n- **reconciliation:** warehouse counts roughly match the source system's own counts\n- **volume anomaly:** today's row count within a normal range of recent days\n\nA job that reports "success" does not mean the data is complete. Prefer freshness and volume checks over only checking the job ran.`,
        },
        {
          heading: "Debugging a surprising number",
          body: `When a number moves suddenly (say DAU drops 35% overnight):\n\n1. **Rule out a data problem before explaining behavior.** Check freshness and row counts for the affected date against the source\n2. Check for **schema changes** at the source (renamed field, new event name)\n3. Check **timezone or cutoff** boundaries\n4. Check **filters** that changed (a bot filter now excluding real users)\n5. Only then look for real behavior change, by segment\n\nSaying this order out loud is exactly what a live exercise rewards.`,
          goAnalogy: {
            term: "Aji",
            reading: "あじ",
            meaning:
              "Latent weakness in a position that has not yet been exploited. Silent pipeline failures are aji: nothing looks wrong until a decision gets made on bad numbers.",
          },
        },
        {
          heading: "PII, consent and responsible data use",
          body: `Users here include pregnant women, new parents, children and farmers. Free-text messages may contain health details.\n\n- **Minimize:** collect only what the program needs\n- **Pseudonymize:** hash identifiers; keep the mapping, if any, restricted\n- **Restrict access** to raw message text; most analysis needs aggregates\n- **Retention limits:** delete or archive on a schedule\n- **Be explicit** about what data is used for model evaluation or training, and confirm consent covers it\n- **Check local data-protection law with the grantee** rather than assuming\n\nReal conversations make the best eval sets, so the answer to "can we use real messages?" is "yes, safely," not "no."`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "A dashboard shows a 35% DAU drop overnight but the pipeline job reported success. What do you check first?",
          options: [
            "Rewrite the dashboard",
            "Freshness and row counts for the affected date against the source, before concluding behavior changed",
            "Announce a retention crisis",
            "Wait a week",
          ],
          correct: 1,
          explanation: "Rule out data problems before explaining behavior. Success status does not guarantee completeness.",
        },
        {
          type: "multiple-choice",
          question: "An evaluator wants raw message text from 500 users to build an eval set. What is the most responsible approach?",
          options: [
            "Export everything to a shared drive",
            "Sample minimally, remove identifiers, restrict access, confirm consent covers evaluation, and log access",
            "Refuse all sharing",
            "Use only synthetic data, never real",
          ],
          correct: 1,
          explanation:
            "Real data is valuable for evals, so the goal is to use it safely rather than to refuse. Minimize, scrub, restrict, confirm consent, log.",
        },
        {
          type: "fill-blank",
          prompt: "A pipeline can report success yet still be missing data, so add ____ checks that alert when the newest row is too old.",
          blank: "freshness",
          hint: "How recent",
        },
      ],
      resources: [
        {
          title: "dbt data tests",
          url: "https://docs.getdbt.com/docs/build/data-tests",
          description: "The standard set of tests: unique, not_null, relationships, accepted_values.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "After joining users to messages, your 'active users' count is much larger than the number of users. What is the most likely cause?",
      options: [
        "The warehouse is broken",
        "A fan-out from joining at different grains, counting users once per message instead of distinct users",
        "Timezone drift",
        "Too many dashboards",
      ],
      correct: 1,
      explanation: "Joining a one-row-per-user table to many-rows-per-user messages multiplies rows. Count distinct user_id or aggregate first.",
    },
    {
      type: "multiple-choice",
      question: "Which ordering best describes how to approach designing a pipeline in an interview?",
      options: [
        "Pick tools, then grain, then checks",
        "Decision and freshness need, sources and grain, load strategy, checks, and only then tools",
        "Dashboards first, then the warehouse",
        "Checks only; design is secondary",
      ],
      correct: 1,
      explanation: "Start from the decision and the grain; tools come last.",
    },
  ],
  quizXp: 30,
};
