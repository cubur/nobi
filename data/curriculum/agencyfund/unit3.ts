import type { Unit } from "@/data/types";

export const agencyfundUnit3: Unit = {
  id: "unit3",
  title: "AI Evals & Experimentation",
  description:
    "The fund's four-level evaluation framework (model, product, user, impact), how to build and validate model evals, how to evaluate engagement and user outcomes, and when to run an A/B test or RCT.",
  companySlug: "agencyfund",
  goTerm: "Tesuji",
  goReading: "てすじ",
  goMeaning:
    "A skillful tactical move that wins a local fight. Good evals are tesuji: the right measurement at the right level that settles a question instead of generating noise.",
  color: "ice",
  lessons: [
    {
      id: "3-1",
      unitId: "unit3",
      companySlug: "agencyfund",
      title: "The Four-Level Evaluation Framework",
      tldr:
        "The fund's playbook organizes AI evaluation into four levels, model, product, user and impact. Each level asks a different question, needs different methods, and builds on the one before. Choosing the right level for the question is the core skill.",
      skills: ["Eval framework", "Choosing an eval level", "Evidence ladder"],
      xp: 35,
      content: [
        {
          heading: "The four levels",
          body: `From the fund's AI evaluation playbook (developed with IDinsight and CGD and tested with eight nonprofits in the accelerator). Each level is a question:\n\n1. **Model:** does the model produce the desired responses?\n2. **Product:** does the product support meaningful interactions?\n3. **User:** does the product positively support users' thoughts, feelings and actions?\n4. **Impact:** does access to the product improve human development outcomes?\n\nThe levels are **iterative but follow a natural progression** and need distinct methods, skills and trade-offs. Cheap, fast evidence sits at level 1; expensive, slow, decisive evidence sits at level 4.`,
          goAnalogy: {
            term: "Tenuki",
            reading: "てぬき",
            meaning:
              "Playing elsewhere. A mature team doesn't keep polishing model accuracy when the real question is whether users come back. Choosing the right level, and leaving the wrong one, is tenuki.",
          },
        },
        {
          heading: "Methods by level",
          body: `- **Model:** curated test sets with expected behaviors; human labeling; **LLM-as-judge** against a rubric; red-teaming; regression suites. Fast, cheap, repeatable.\n- **Product:** usage analytics, funnels, conversation-level review, latency and error rates, retention. Needs ETL and logging.\n- **User:** surveys, interviews, behavioral measures, knowledge or attitude change. Needs user contact and design care.\n- **Impact:** randomized or quasi-experimental studies on outcomes (health, learning, income). Slow and costly, but it answers the question funders ultimately care about.\n\nThe repo also contains skills named something like choose-ai-eval-level and build-user-funnel (from the fund's behav-sci-skills repo), which signals how they think: *pick the level first.*`,
        },
        {
          heading: "How to choose the level",
          body: `Ask three questions:\n\n1. **What decision will this evidence change?** (ship, fix, scale, fund, stop)\n2. **What would be wrong if the lower level looks fine but the higher level fails?** (a bot gives accurate answers nobody reads)\n3. **What can we afford and how soon do we need to know?**\n\nA pilot with 200 users usually starts at levels 1–2 and sets up the logging that makes level 3 and 4 possible later. Scaling to 100,000 users or asking a funder for more money raises the bar toward 3–4.\n\n**Common mistake:** claiming impact from level 1–2 evidence ("our bot scores 92% so it improves outcomes"). Say explicitly which level your evidence supports.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "A team says: 'Our chatbot scores 92% on our answer-quality test set, so it improves farmers' yields.' What is wrong?",
          options: [
            "Nothing; high accuracy implies impact",
            "It claims level-4 impact from level-1 model evidence; accuracy says nothing about whether farmers use the advice or whether yields change",
            "The test set is too large",
            "92% is too low to matter",
          ],
          correct: 1,
          explanation:
            "Each level answers a different question. Model quality is necessary but not sufficient. Impact requires evidence at the outcome level.",
        },
        {
          type: "multiple-choice",
          question: "Which question belongs to the 'user' level?",
          options: [
            "Does the model produce the desired responses?",
            "Does the product support meaningful interactions?",
            "Does the product positively support users' thoughts, feelings and actions?",
            "Does access improve human development outcomes?",
          ],
          correct: 2,
          explanation: "Model: responses. Product: interactions. User: thoughts, feelings, actions. Impact: development outcomes.",
        },
        {
          type: "fill-blank",
          prompt: "Claiming impact from only model-quality evidence confuses ____ level 1 with level 4.",
          blank: "evidence",
          hint: "What each level provides",
        },
        {
          type: "scenario",
          prompt:
            "A new grantee with a 3-month-old pilot (300 users) asks, 'How should we evaluate our AI tutor?' What do you recommend, and how do you decide?",
          sampleAnswer:
            "I'd start by asking what decision they need to make in the next quarter: improve the product, convince a funder, or decide whether to scale. For a 300-user pilot the realistic start is model and product evals. First, a small set of real or realistic student questions with expected behaviors, graded by humans and later by a validated LLM judge, to catch harmful or wrong answers. Second, instrument the funnel: who starts, who returns, which lessons complete. Those are cheap and give a fast learning loop. I'd also make sure logging supports a later user-level study (a short learner survey or a knowledge check). I'd explicitly say we are not yet measuring learning outcomes, and propose an impact study only if they plan to scale or need that evidence for funding.",
          keyPoints: [
            "Start from the decision, not the method",
            "Right-size to stage: pilot means levels 1–2 plus logging for later",
            "State clearly what the evidence does and does not support",
            "Reserve level 4 for when scale or funding justifies the cost",
          ],
        },
      ],
      resources: [
        {
          title: "Rethinking AI Evaluation for the Social Sector",
          url: "https://theagencyfund.substack.com/p/rethinking-ai-evaluation-for-the",
          description: "The post introducing the four levels. Read tonight.",
        },
        {
          title: "AI Eval Playbook (GitHub)",
          url: "https://github.com/agency-fund/taf-ai-eval-playbook",
          description: "The living playbook.",
        },
        {
          title: "An AI Evaluation Framework for the Development Sector (CGD)",
          url: "https://www.cgdev.org/blog/ai-evaluation-framework-for-the-development-sector",
          description: "CGD's write-up of the framework.",
        },
      ],
    },
    {
      id: "3-2",
      unitId: "unit3",
      companySlug: "agencyfund",
      title: "Model Evals: Test Sets, Judges and Error Analysis",
      tldr:
        "A model eval is a repeatable test: representative inputs, expected behaviors, and a grader you trust. The common failure is an LLM judge that was never validated against human labels. Error analysis of real conversations should drive what you test.",
      skills: ["Test set design", "LLM-as-judge", "Error analysis"],
      xp: 40,
      content: [
        {
          heading: "Anatomy of a model eval",
          body: `Four parts:\n\n1. **Inputs:** representative user messages. Best source: real (consented, scrubbed) conversations; supplement with synthetic cases for rare risks\n2. **Expected behavior:** a reference answer, or a rubric ("must not give dosage advice", "must recommend visiting a clinic for danger signs")\n3. **Grader:** code (exact match, regex, schema check), human reviewers, or an **LLM judge**\n4. **Aggregation and thresholds:** pass rate overall and by slice (language, topic, risk category), compared with a baseline\n\nGeneral good practice (from the wider eval community, not specific to the fund): prefer **binary pass/fail** criteria over 1–10 scales, split vague quality into specific checks, and track results **by slice** since an average can hide a failing language.`,
        },
        {
          heading: "LLM-as-judge, done responsibly",
          body: `An LLM judge scores outputs at scale. It's useful but easy to misuse. Before trusting one:\n\n1. Have humans label a sample (say 50–100) using the same rubric\n2. Run the judge on the same sample\n3. Compare agreement, and look at the **disagreements** (false passes are the dangerous ones)\n4. Refine the rubric or prompt; repeat\n5. Re-check periodically, since models and data drift\n\nKnown biases: favors longer answers, favors its own model family's style, sensitive to answer order in pairwise comparisons. Mitigate with clear rubrics, different model families for generation and judging where possible, and randomized order.\n\n**Most important line for the interview:** "I wouldn't trust a judge score until it's been calibrated against human labels on our own data, in our languages."`,
        },
        {
          heading: "Error analysis first, metrics second",
          body: `Practitioners who build evals well usually start by **reading real conversations** and writing down how the bot fails, then grouping failures into categories, then turning the frequent or dangerous ones into tests. This beats guessing metrics upfront.\n\nFor grantees this is also a **multi-lingual and cultural** issue: a bot strong in English may fail in Swahili or Hindi code-mixed text. Include low-resource languages and local context in the test set, and use native-speaker reviewers.\n\nTools: Langfuse (from the default stack) can log traces and attach scores and annotations, making review and regression tracking practical for a small team.`,
          goAnalogy: {
            term: "Yomi",
            reading: "よみ",
            meaning:
              "Reading out the variations before you play. Error analysis is yomi: you read real failures first, and the tests fall out of what you see rather than from guesswork.",
          },
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "A team reports an LLM-judge pass rate of 94% but never compared it to human labels. What is the right reaction?",
          options: [
            "Celebrate; 94% is high",
            "Ask for a human-labeled sample to measure judge agreement and review false passes before trusting the number",
            "Switch to a bigger judge model",
            "Remove the judge",
          ],
          correct: 1,
          explanation:
            "An uncalibrated judge is a number with unknown meaning. Validate against human labels, especially for false passes.",
        },
        {
          type: "multiple-choice",
          question: "Which is the best way to decide what a model eval should test?",
          options: [
            "Copy a public benchmark",
            "Read real conversations, categorize failures, and turn frequent or dangerous ones into tests",
            "Test only the happy path",
            "Use only synthetic prompts",
          ],
          correct: 1,
          explanation:
            "Error analysis grounds the eval in actual failure modes. Public benchmarks rarely match your users, languages or risks.",
        },
        {
          type: "fill-blank",
          prompt: "Report eval results by ____ (for example language or topic), because an average can hide a failing subgroup.",
          blank: "slice",
          hint: "A subset of the data",
        },
        {
          type: "scenario",
          prompt:
            "Design a model eval for a maternal-health WhatsApp bot in two languages. State inputs, expected behavior, grader, and how you'd validate the grader.",
          sampleAnswer:
            "Inputs: a few hundred real, consented and scrubbed user questions in both languages, grouped by topic (nutrition, danger signs, appointments, mental health), plus synthetic edge cases for high-risk situations such as bleeding or severe headache. Expected behavior: a rubric of binary checks: gives accurate, non-dangerous guidance; recommends urgent care for danger signs; doesn't give medication dosages; stays in the user's language; admits uncertainty and refers on. Grader: code checks for language and format, an LLM judge for the rubric items, and clinician review for the high-risk slice. Validation: have two clinicians or native-speaker reviewers label 100 items, measure judge agreement per rubric item and per language, review every false pass, and refine. Report pass rate by language and topic against a baseline model, and keep the set as a regression suite whenever the prompt or model changes.",
          keyPoints: [
            "Real, scrubbed data plus synthetic high-risk cases",
            "Binary rubric items tied to harm and usefulness",
            "Mixed graders; humans on the highest-risk slice",
            "Validate the judge against human labels; report by language and topic; keep as regression suite",
          ],
        },
      ],
      resources: [
        {
          title: "Langfuse docs: evaluation",
          url: "https://langfuse.com/docs/evaluation/overview",
          description: "How traces, scores and datasets fit together.",
        },
      ],
    },
    {
      id: "3-3",
      unitId: "unit3",
      companySlug: "agencyfund",
      title: "Product and User Evals",
      tldr:
        "Product evals ask whether interactions are meaningful: engagement, retention, conversation quality. User evals ask whether people's thoughts, feelings and actions improve. Both depend on the logging and funnel work from Unit 2.",
      skills: ["Engagement metrics", "User-level measurement", "Proxy vs. outcome"],
      xp: 35,
      content: [
        {
          heading: "Product-level evaluation",
          body: `Questions: do people use it, come back, and have conversations that go somewhere?\n\n**Metrics:**\n- Funnel conversion (Unit 2), retention at day 7/30, sessions per user\n- Conversation-level: completion of the intended task, number of turns, fallbacks ("I didn't understand"), escalation to human\n- Operational: latency, error rate, cost per conversation\n- Quality at scale: sample real conversations weekly for human or calibrated-judge review\n\n**Trap:** engagement is a **proxy**. A chatbot can have high usage because it's confusing and users keep re-asking. Pair usage metrics with a quality or task-completion signal.`,
        },
        {
          heading: "User-level evaluation",
          body: `Questions: do people's **knowledge, attitudes, intentions or behaviors** change in the intended direction?\n\n**Methods:** short in-chat surveys or knowledge checks, follow-up calls, interviews, behavioral logs (did they attend the appointment?), comparison with similar users who didn't use the product.\n\n**Design care:**\n- Response bias: people who answer surveys differ from those who don't\n- Social desirability: users tell you what sounds good\n- Over-surveying fatigues users in low-bandwidth channels, so keep it to a question or two\n- Behavior beats stated intent when you can get it`,
        },
        {
          heading: "Proxy versus outcome",
          body: `Write down, for any product, the chain: **activity → quality → user change → development outcome**. Then mark what you can measure now and what is a proxy for what.\n\nExample (early-childhood bot): messages sent → worker finds answers useful → worker uses the activity with children → child development improves. Early on you can credibly measure the first two; the third needs a user-level study; the last needs an impact study.\n\nA PM's contribution: pushing the team to name the **leading indicator** they will watch now and the **outcome** they are ultimately accountable for.`,
          goAnalogy: {
            term: "Sente",
            reading: "せんて",
            meaning:
              "Initiative. Leading indicators give you sente: they tell you early whether to adjust, instead of waiting for the slow outcome to confirm you were off course.",
          },
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "A bot shows rising messages per user. Why might this be a bad sign?",
          options: [
            "It never is",
            "Users may be re-asking because answers are confusing; usage is a proxy and needs a quality or task-completion signal alongside it",
            "Messages are free",
            "It means retention is perfect",
          ],
          correct: 1,
          explanation: "Engagement metrics are proxies. Pair them with whether the conversation achieved something.",
        },
        {
          type: "multiple-choice",
          question: "Which is the strongest user-level evidence of behavior change?",
          options: [
            "Users say they intend to attend the clinic",
            "Logged or confirmed clinic attendance compared with similar users who didn't receive the intervention",
            "The bot answered 90% of questions",
            "High thumbs-up rate",
          ],
          correct: 1,
          explanation: "Observed behavior with a comparison group beats stated intent or satisfaction.",
        },
        {
          type: "fill-blank",
          prompt: "Engagement is a ____ metric: it stands in for value but doesn't prove it.",
          blank: "proxy",
          hint: "Stand-in",
        },
        {
          type: "scenario",
          prompt:
            "A grantee celebrates 80% thumbs-up on bot answers. What would you say, and what would you add?",
          sampleAnswer:
            "That's a good signal and worth tracking, but thumbs-up is a weak proxy: only some users rate, they skew toward the satisfied, and a pleasant answer isn't necessarily a correct or useful one. I'd check the response rate and compare thumbs-up with a human review of a random sample, to see whether it predicts quality. Then I'd add a task-completion signal (did the user get what they came for or return with the same question?) and, at the user level, a one-question follow-up about whether they acted on the advice. I'd keep thumbs-up as a leading indicator and make explicit what outcome it's meant to predict.",
          keyPoints: [
            "Acknowledge the signal, then name its limits (selection, proxy)",
            "Validate the proxy against a human-reviewed sample",
            "Add task-completion and behavior signals",
            "Tie the leading indicator to the outcome it should predict",
          ],
        },
      ],
      resources: [
        {
          title: "Evaluating AI Agents at the Run, Trace, and Thread Level (LangChain)",
          url: "https://www.langchain.com/resources/agent-evals",
          description: "General guidance on evaluating at conversation and trace level.",
        },
      ],
    },
    {
      id: "3-4",
      unitId: "unit3",
      companySlug: "agencyfund",
      title: "Experiments and Impact: A/B Tests and RCTs",
      tldr:
        "A/B tests answer 'which version works better' by randomizing users. Know the vocabulary (randomization unit, MDE, power, guardrails) and when a full RCT is warranted. The fund built Evidential, an open-source experiment engine, so expect this to come up.",
      skills: ["A/B test design", "Power and MDE", "When to run an RCT"],
      xp: 40,
      content: [
        {
          heading: "A/B testing essentials",
          body: `An A/B test randomly assigns users to versions and compares an outcome.\n\n- **Randomization unit:** usually the user (not message or session) so one person doesn't see both versions. For group settings (a classroom, a health worker), randomize at the **cluster** level to avoid contamination\n- **Primary metric:** pick one in advance; **guardrail metrics** (safety, complaints, cost) to ensure you don't win by harming something\n- **Power and MDE:** the smallest effect you can reliably detect depends on sample size and baseline rate. Small pilots can only detect big effects, which is fine if you say so\n- **Pre-register** the hypothesis, metric and stopping rule; don't peek and stop on a good day\n- **Duration:** long enough to cover weekly cycles and any novelty effect`,
        },
        {
          heading: "Evidential and why the fund builds it",
          body: `**Evidential** is a free, open-source experiment engine built by and for nonprofits, co-developed with Rocket Learning and IDinsight (the repos are public under agency-fund on GitHub). It exists because small teams otherwise lack the tooling to randomize users and analyze results properly.\n\nPM takeaway: you can say, "For a quick prompt or message experiment I'd use an engine like Evidential to handle assignment and analysis consistently, rather than ad hoc comparisons of before and after."\n\nCaveat: sources I found disagree on whether it is released or still in beta. Don't state its maturity as fact.`,
        },
        {
          heading: "When is an RCT worth it?",
          body: `A full randomized controlled trial measuring real-world outcomes is expensive and slow. It is worth it when:\n\n- A **big decision** hangs on it (scaling to a government program, major funding)\n- The **effect is uncertain** and plausible harm or waste is high\n- You can **randomize ethically** (or use a delayed-rollout design so everyone eventually benefits)\n\nOtherwise prefer cheaper levels. Also name ethical points: informed consent, not withholding clearly beneficial help, protecting data.\n\nThe usual PM move: "Let's run cheap A/B tests for product decisions and reserve a rigorous study for the claim we need a funder or government to believe."`,
          goAnalogy: {
            term: "Kikashi",
            reading: "きかし",
            meaning:
              "A forcing move played to gain information or advantage before the main fight. Cheap A/B tests are kikashi: they settle product questions so the costly RCT, if you run one, tests a well-formed intervention.",
          },
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "You test two message templates on WhatsApp. What is the best randomization unit?",
          options: [
            "Each message, regardless of user",
            "The user, so each person consistently sees one version",
            "The day of week",
            "Whoever replies first",
          ],
          correct: 1,
          explanation: "Randomize by user to avoid exposure to both versions. Use clusters if users influence each other.",
        },
        {
          type: "multiple-choice",
          question: "A pilot has 400 users. What is the honest framing of an A/B test result?",
          options: [
            "It can detect any small effect",
            "It is only powered to detect large effects; a null result means 'no large effect', not 'no effect'",
            "Sample size doesn't matter",
            "Only RCTs have power",
          ],
          correct: 1,
          explanation: "State the minimum detectable effect. Small samples can't rule out small effects.",
        },
        {
          type: "fill-blank",
          prompt: "Besides a primary metric, define ____ metrics (such as complaints or safety flags) so you don't win by causing harm.",
          blank: "guardrail",
          hint: "Protective",
        },
        {
          type: "scenario",
          prompt:
            "A grantee wants to know whether adding a daily reminder improves day-7 retention. Design the experiment in under a minute of talking.",
          sampleAnswer:
            "Hypothesis: a daily reminder increases day-7 retention versus the current weekly reminder. Randomize at the user level, 50/50, at signup, using an experiment engine so assignment is consistent and logged. Primary metric: day-7 retention, defined as at least one user-initiated message on days 7–9, with the denominator being users who were assigned and delivered a first message. Guardrails: opt-out or block rate, complaints, delivery cost. Check power first: with the baseline retention and our weekly signups, what minimum effect can we detect and how long do we need to run? Run at least two full weeks, no early peeking, then analyze with the pre-specified method and look at results by language cohort. If the effect is positive and guardrails are clean, roll out; if opt-outs rise, reconsider cadence.",
          keyPoints: [
            "Clear hypothesis, user-level randomization, consistent assignment",
            "Primary metric with an exact definition and denominator",
            "Guardrail metrics such as opt-outs and cost",
            "Power check, minimum run length, no peeking, cohort breakdown",
          ],
        },
      ],
      resources: [
        {
          title: "Evidential documentation",
          url: "https://github.com/agency-fund/evidential-docs",
          description: "How the experiment engine works.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "A funder asks whether your tutoring bot 'works'. Your evidence is a funnel and a 90% model-eval pass rate. What do you say?",
      options: [
        "Yes, it works",
        "We have strong level 1–2 evidence (quality and engagement); we haven't measured learning outcomes, and here's the study or user-level measure we'd need to claim that",
        "No evidence is possible",
        "Ask them to trust the pass rate",
      ],
      correct: 1,
      explanation: "State precisely which levels your evidence covers and what would be needed to claim more.",
    },
    {
      type: "multiple-choice",
      question: "Which sequence best reflects a responsible approach to an LLM judge?",
      options: [
        "Deploy it and track pass rate",
        "Label a human sample, measure agreement, inspect false passes, refine rubric, then use at scale with periodic re-checks",
        "Use the largest model and skip checks",
        "Only use human reviewers forever",
      ],
      correct: 1,
      explanation: "Calibrate against humans first and keep re-checking.",
    },
  ],
  quizXp: 30,
};
