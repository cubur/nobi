import type { Unit } from "@/data/types";

export const agencyfundUnit4: Unit = {
  id: "unit4",
  title: "Live Exercise Rehearsal",
  description:
    "A method for structuring and narrating a live exercise, two full mock exercises (eval and data plan, then a funnel-debugging case), and the hard questions plus the questions you should ask them.",
  companySlug: "agencyfund",
  goTerm: "Yose",
  goReading: "よせ",
  goMeaning:
    "The endgame — converting position into points with precise, efficient moves. The interview is yose: everything from Units 1–3 turns into specific answers under time pressure.",
  color: "crimson",
  lessons: [
    {
      id: "4-1",
      unitId: "unit4",
      companySlug: "agencyfund",
      title: "A Method for Any Live Exercise",
      tldr:
        "Interviewers watch how you structure ambiguity, not whether you remember syntax. Use one repeatable skeleton: clarify, frame, plan, risks, next step, and narrate your reasoning aloud, including how you would verify AI-generated work.",
      skills: ["Structuring ambiguity", "Thinking aloud", "Verification habits"],
      xp: 30,
      content: [
        {
          heading: "The skeleton",
          body: `Use this for every prompt, in this order:\n\n1. **Clarify (1–2 min):** goal, user, stage (pilot or scale), constraints (team size, budget, channel, language), what decision this informs\n2. **Frame:** restate the problem in one sentence and name your assumptions. If unsure, say "I'll assume X; tell me if wrong."\n3. **Plan:** the smallest sequence that answers the question. Pick **one** primary metric or eval level and say why\n4. **Risks and checks:** what could make the answer wrong (bad data, biased judge, small sample), and how you'd verify\n5. **Next step:** what you'd do in the first sprint, and what you would **not** do yet\n\nEnd with a one-sentence recommendation. Don't trail off.`,
        },
        {
          heading: "Thinking aloud, including with AI",
          body: `If the exercise is hands-on and AI tools are allowed or expected:\n\n- **Say what you're asking the assistant and why.** "I'll have it draft the SQL for the funnel, then I'll check grain and counts."\n- **Verify visibly.** Run a quick count, check for duplicates, compare to a known total\n- **Don't paste and move on.** The skill they want is knowing what a correct result looks like\n- If it produces something you can't explain, say so and simplify rather than defend it\n\nIf AI isn't allowed, narrate pseudocode and clearly mark where you'd check syntax.`,
        },
        {
          heading: "Recovering when stuck",
          body: `- Name where you're stuck: "I'm unsure how to compute X cleanly."\n- Offer two options and a recommendation\n- Simplify: solve the small version first, then extend\n- Ask a pointed question rather than a vague one: "Is a user's first message the start of the funnel, or the template delivery?"\n\nSilence reads as confusion; narrated uncertainty reads as engineering judgment.`,
          goAnalogy: {
            term: "Sabaki",
            reading: "さばき",
            meaning:
              "Light, efficient handling of a difficult position without overcommitting. When stuck, play sabaki: simplify, keep options open, and keep moving.",
          },
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "You're given a vague prompt: 'Evaluate our nutrition chatbot.' What do you do first?",
          options: [
            "Start listing metrics immediately",
            "Clarify the goal, stage, users, constraints and the decision the evaluation will inform",
            "Propose an RCT",
            "Ask for the codebase",
          ],
          correct: 1,
          explanation: "Clarify before proposing. The decision and stage determine the right eval level.",
        },
        {
          type: "multiple-choice",
          question: "An AI assistant generates SQL for your funnel. What best demonstrates competence?",
          options: [
            "Run it and present the result",
            "Check the grain, test for duplicate keys, compare totals to a known source count, then present",
            "Rewrite it by hand without looking",
            "Say AI isn't reliable",
          ],
          correct: 1,
          explanation: "Verification is the skill. Show the checks, not just the output.",
        },
        {
          type: "fill-blank",
          prompt: "When ambiguous, state your ____ aloud ('I'll assume this is a pilot with about 500 users') so the interviewer can correct you.",
          blank: "assumptions",
          hint: "What you take as given",
        },
      ],
      resources: [],
    },
    {
      id: "4-2",
      unitId: "unit4",
      companySlug: "agencyfund",
      title: "Mock Exercise A: Eval and Data Plan",
      tldr:
        "Full rehearsal: a grantee WhatsApp coaching bot needs an evaluation and data plan for a two-sprint engagement. Practice choosing a level, defining the data model and funnel, and prioritizing.",
      skills: ["Eval planning", "Data plan", "Prioritization"],
      xp: 45,
      content: [
        {
          heading: "The prompt",
          body: `**Setup.** A grantee runs a WhatsApp coaching bot for early-childhood caregivers in two languages. It launched 3 months ago with ~2,000 enrolled caregivers. They have raw chat logs exported weekly as CSV to a shared folder. They have one part-time analyst. They've been asked by their funder to "show evidence that it works" and the team also wants to improve answer quality.\n\n**Your task (suggested 20 minutes):**\n1. Which eval level(s) do you start with and why?\n2. What data do you need and how do you get it from CSV exports into something reliable?\n3. What do you do in the first two sprints?\n4. What do you tell the funder?\n\nTry answering aloud before opening the model answer in the exercise below.`,
        },
        {
          heading: "What a strong answer includes",
          body: `**Level choice.** 3 months and 2,000 users: start at **model and product** (levels 1–2) and set up **user-level** measurement. Be explicit that this does not yet show impact. If the funder needs an outcome claim, scope a user-level or quasi-experimental design.\n\n**Data.** Chat log CSV in a shared folder is fine for now. Load to a warehouse on a schedule (e.g. weekly or daily), keep raw, build messages/users/conversations tables, define the funnel, add tests (unique message_id, freshness, row-count reconciliation against the export). Pseudonymize phone numbers. Keep the analyst's workload realistic: managed or low-code tooling over custom code.\n\n**Sprint 1.** Write a short **evaluation plan across Levels 1–4** (the playbook's PM deliverable); build the six-stage funnel (recruitment, onboarding, engagement, retention, proximal outcome, development outcome) with entry actions, metrics, provisional targets and DRIs; error analysis on ~100 real conversations; start a golden dataset (knowledge, implementation, personalization, stress-test).\n**Sprint 2.** Calibrate an LLM judge on human labels (measure human-LLM and inter-human alignment); run the first model eval by language; add a short user-level check (one in-chat question for the proximal outcome); diagnose the biggest real funnel gap with 2–4 competing hypotheses; decide the first experiment, writing the decision rule first.\n\n**Funder message.** Honest framing: strong engagement and quality signals so far, learning/behavior outcomes next; here's the plan and timeline.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "The funder says 'show evidence that it works.' With 3 months of data, what is the best response?",
          options: [
            "Claim impact based on engagement",
            "Present level 1–2 evidence honestly, state what it does not show, and propose a user-level measure or study for outcome claims",
            "Refuse to share anything",
            "Wait a year before saying anything",
          ],
          correct: 1,
          explanation: "Honest framing of what each level supports builds credibility and sets up the next step.",
        },
        {
          type: "scenario",
          prompt:
            "Give your full answer to the mock prompt in about two minutes of speaking: level choice, data plan, the first two sprints, and what you tell the funder.",
          sampleAnswer:
            "With 3 months and 2,000 caregivers, I'd start at model and product evaluation and set up user-level measurement, and I'd say plainly that this won't yet show impact. Data first: keep the weekly CSV export as the raw layer, load it into a warehouse on a schedule, and model messages, users and conversations with message-level grain, hashed phone numbers, and tests for uniqueness, freshness and row-count reconciliation against the export. Sprint 1: read about 100 real conversations to find failure categories, draft a binary rubric, build the funnel and day-7/30 retention by language, and agree the metric definitions with the team. Sprint 2: have two native-speaker reviewers label a sample, calibrate an LLM judge against them and run the first model eval by language; add a one-question in-chat check on whether caregivers tried the suggested activity; choose a first A/B test, like reminder timing. For the funder: here is the engagement and quality evidence so far, here is what it doesn't show, and here's the user-level design and timeline for outcome evidence. I'd keep the tooling light because there's one part-time analyst.",
          keyPoints: [
            "Level 1–2 plus groundwork for level 3; explicit about not claiming impact",
            "Raw layer kept; message-level grain; pseudonymized IDs; tests and reconciliation",
            "Two concrete sprints with deliverables",
            "Honest funder message with next steps; tooling right-sized to one part-time analyst",
          ],
        },
        {
          type: "fill-blank",
          prompt: "In sprint 1, read about 100 real conversations to do error ____ before writing rubric items.",
          blank: "analysis",
          hint: "Categorizing failures",
        },
      ],
      resources: [],
    },
    {
      id: "4-3",
      unitId: "unit4",
      companySlug: "agencyfund",
      title: "Mock Exercise B: Debug the Numbers",
      tldr:
        "A funnel report doesn't add up. Practice the diagnostic order: validate the data, check definitions and grain, then interpret behavior. Includes a small worked dataset you can reason through.",
      skills: ["Data debugging", "Reconciliation", "Hypothesis ordering"],
      xp: 45,
      content: [
        {
          heading: "The prompt",
          body: `**Report from the weekly dashboard:**\n\n- Template messages delivered: 5,000\n- Users who replied: 3,100 (62%)\n- Users who completed activity 1: 1,400\n- Day-7 retained users: 1,550\n\nThe team is excited: 'retention is higher than activation!' You also notice that last week's reply count was 2,400 and the pipeline log shows two retries on Tuesday.\n\n**Your task:** what's wrong, how do you find out, and what do you tell the team?`,
        },
        {
          heading: "Diagnosis walk-through",
          body: `**Red flag 1: logical impossibility.** Retained users (1,550) exceed activated users (1,400). In a nested funnel that can't happen unless retention is measured against a different population or definition (e.g. any message, not just activated users) or there are duplicates.\n\n**Red flag 2: reply jump.** 2,400 to 3,100 replies is +29% in a week with the same template volume? Combined with two retries on Tuesday, suspect **duplicate loads** inflating counts (idempotency problem).\n\n**Order of checks:**\n1. Count distinct message_id vs rows for the week; check the Tuesday partition\n2. Reconcile against the source export count\n3. Check the **definition and denominator** of retained: is it a subset of activated users? Same timezone and window?\n4. Check for bot or system messages counted as user replies\n5. Only then interpret behavior\n\n**Message to the team:** "Don't share this yet. Two numbers are logically inconsistent and Tuesday had retries; I'm checking for duplicates and definition mismatch, and I'll have corrected numbers by X."`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Retained users (1,550) exceed activated users (1,400) in a nested funnel. What does this most strongly indicate?",
          options: [
            "Excellent retention",
            "A definition or denominator mismatch, or duplicated counts; the funnel is not properly nested",
            "A dashboard color problem",
            "Users love the bot",
          ],
          correct: 1,
          explanation: "In a nested funnel each stage is a subset of the previous one. Violating that signals a data or definition bug.",
        },
        {
          type: "multiple-choice",
          question: "Which check would most directly test the duplicate-load hypothesis after Tuesday's retries?",
          options: [
            "Compare count of rows to count of distinct message_id for the affected dates, and reconcile with source counts",
            "Ask users if they replied twice",
            "Rebuild the dashboard",
            "Wait for the next week",
          ],
          correct: 0,
          explanation: "Rows vs. distinct keys, plus source reconciliation, directly detects duplicates from non-idempotent loads.",
        },
        {
          type: "scenario",
          prompt:
            "Explain what you'd do in the next 15 minutes and what you'd say to a team that wants to present these numbers to the funder today.",
          sampleAnswer:
            "I'd ask them to hold the numbers, because two of them are logically inconsistent: retained exceeds activated, and replies jumped 29% on flat template volume after Tuesday retries. In the next 15 minutes: compare row counts to distinct message IDs for the week, especially Tuesday's partition, reconcile against the source export, then check how retained is defined and whether it's restricted to activated users in the same timezone window, and make sure bot or system messages aren't counted as replies. If duplicates are confirmed, fix by deduplicating on message_id in the transformation layer and make the load idempotent, then add a uniqueness test and a freshness/volume check so it alerts next time. I'd re-run the funnel and send corrected numbers with a one-line note on what changed. Presenting wrong numbers to a funder costs credibility we can't easily recover.",
          keyPoints: [
            "Spot the logical impossibility and the retry correlation",
            "Check order: duplicates, reconciliation, definitions, then behavior",
            "Fix root cause (idempotent load, dedupe) and add tests",
            "Protect credibility: hold the numbers, communicate clearly",
          ],
        },
      ],
      resources: [],
    },
    {
      id: "4-4",
      unitId: "unit4",
      companySlug: "agencyfund",
      title: "Hard Questions and Your Questions",
      tldr:
        "Prepare crisp answers to the questions that probe your known gaps, and bring sharp, curious questions that show you understand how the fund works. Both are heavily weighted in the final minutes.",
      skills: ["Interview Q&A", "Positioning", "Asking good questions"],
      xp: 35,
      content: [
        {
          heading: "Questions they may probe",
          body: `1. **'What's your experience with data pipelines and ETL?'** Honest, specific, forward-looking: what you understand (ELT, grain, idempotency, tests), what you'd build first, and how you verify AI-assisted work.\n2. **'How would you evaluate an AI product for a low-resource language?'** Native-speaker reviewers, real conversations, slice by language, calibrate judges, compare against baseline.\n3. **'A grantee disagrees with your recommendation. What do you do?'** Seek the evidence and the constraint behind their view; propose a cheap test to settle it; accept that they own the decision.\n4. **'How do you prioritize across three grantees in a sprint?'** By decision value, effort, risk, and reusability for the cohort; make trade-offs visible.\n5. **'What would you do in your first 30 days?'** Embed with one team, read the playbook and stack, build one end-to-end funnel from real data, write down what's reusable.\n6. **'Where can AI go wrong for these users?'** Wrong medical or agricultural advice, language and cultural mismatch, privacy, over-trust, access inequality.`,
        },
        {
          heading: "Questions you can ask",
          body: `Pick two or three that you genuinely want answered:\n\n- 'Which of the four evaluation levels do grantees most often get stuck on, and why?'\n- 'How much of a product person's time goes to grantee-specific work versus improving shared tools like the stack, playbook and Evidential?'\n- 'What does a good first sprint with a new grantee look like? What have you seen go wrong?'\n- 'How do you decide when a grantee is ready for an impact study versus continued product iteration?'\n- 'Where is the unified evaluation platform with Project Tech4Dev headed, and where would a product person help most?'\n- 'The playbook makes the PM the cross-functional lead for evaluation. How does that work when a grantee has no dedicated data scientist or behavioral researcher?'\n- 'I read the behav-sci-skills repo. How do you see agent skills fitting into how grantees run evaluations?'\n- 'What would make you say, a year from now, that this hire was a success?'\n\nAvoid questions answered on the homepage.`,
        },
        {
          heading: "Tonight's checklist",
          body: `- Re-read the job posting; underline every verb and map each to a lesson here\n- Skim the stack post and the playbook (read the sources, since this course draws on summaries)\n- Be able to say the four evaluation levels and one tool per stack layer without notes\n- Rehearse Mock A and B aloud with a timer\n- Prepare your 'gap' answer (Unit 1, lesson 3)\n- Prepare two grantee examples and two questions\n- Sleep`,
          goAnalogy: {
            term: "Kikashi",
            reading: "きかし",
            meaning:
              "A probing move that gains information and keeps initiative. Your questions to them are kikashi: they show how you think and tell you whether you want the job.",
          },
        },
      ],
      exercises: [
        {
          type: "scenario",
          prompt:
            "They ask: 'A grantee disagrees with your recommendation to run an A/B test before scaling. What do you do?'",
          sampleAnswer:
            "First I'd understand their reasoning, since they know their users and constraints better than I do. Maybe the test seems costly, delays a funder commitment, or they believe the effect is obvious. Then I'd restate what decision the test informs and what it would cost, and look for a cheaper version, such as a staged rollout that doubles as a comparison, or a smaller test on one cohort. If we still disagree, the grantee owns the decision, so I'd make the risk explicit in writing, agree what signals we'd watch instead, and make sure we capture data that lets us evaluate after the fact. The aim is to keep trust and still leave the evidence trail.",
          keyPoints: [
            "Listen for the constraint behind the disagreement",
            "Make decision and cost explicit; offer a cheaper design",
            "Respect that the grantee owns the decision",
            "Preserve the evidence trail and the relationship",
          ],
        },
        {
          type: "multiple-choice",
          question: "Which closing question best shows you understand how the fund works?",
          options: [
            "What is the salary range?",
            "How much of a product person's time goes to grantee-specific work versus improving shared tools like the stack, playbook and Evidential?",
            "How many holidays do you give?",
            "What does the company do?",
          ],
          correct: 1,
          explanation: "It shows you've grasped the dual role: embedded partner and builder of reusable infrastructure.",
        },
        {
          type: "fill-blank",
          prompt: "Your first 30 days: embed with one team, read the playbook and stack, and build one end-to-end ____ from real data.",
          blank: "funnel",
          hint: "Stages from reached to retained",
        },
      ],
      resources: [
        {
          title: "Agency Fund resources",
          url: "https://www.agency.fund/resources",
          description: "Skim titles tonight for anything newer than this course.",
        },
        {
          title: "Agency Fund Substack",
          url: "https://theagencyfund.substack.com/",
          description: "Latest posts; mention one you've read.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "What is the best way to start any open-ended live exercise prompt?",
      options: [
        "Begin building immediately to show speed",
        "Clarify goal, stage, constraints and the decision at stake; state assumptions; then plan",
        "Ask the interviewer to give the answer",
        "List every possible metric",
      ],
      correct: 1,
      explanation: "Clarify and frame before planning; it signals senior judgment.",
    },
    {
      type: "multiple-choice",
      question: "Your assistant-generated SQL gives a total that is 3x the source system's count. What is the best next step?",
      options: [
        "Report it; the SQL came from AI",
        "Suspect a join fan-out or duplicates; check grain and distinct keys, then fix and re-reconcile",
        "Divide by three",
        "Delete the table",
      ],
      correct: 1,
      explanation: "A multiple of the true count is a classic fan-out signature. Verify grain, find the cause, and re-reconcile.",
    },
  ],
  quizXp: 30,
};
