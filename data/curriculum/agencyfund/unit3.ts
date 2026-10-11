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
          body: `- **Model:** curated test sets with expected behaviors; human labeling; **LLM-as-judge** against a rubric; red-teaming; regression suites. Fast, cheap, repeatable.\n- **Product:** usage analytics, funnels, conversation-level review, latency and error rates, retention. Needs ETL and logging.\n- **User:** surveys, interviews, behavioral measures, knowledge or attitude change. Needs user contact and design care.\n- **Impact:** randomized or quasi-experimental studies on outcomes (health, learning, income). Slow and costly, but it answers the question funders ultimately care about.\n\nThe fund's behav-sci-skills repo has agent skills named choose-ai-eval-level, build-user-funnel, diagnose-funnel-weak-link, design-golden-dataset and design-evidential-experiment, which shows how they think: *pick the level first, then follow a procedure.* (Worth saying you looked at it.)`,
        },
        {
          heading: "The playbook's guiding principles",
          body: `1. **Cross-functional collaboration is essential:** engineers, researchers and implementers must align\n2. **Higher levels mean more cost and risk,** but also higher potential for impact\n3. **Evaluation informs but does not replace product design:** user research, content strategy and design still matter\n\nStakeholders per level: Level 1 AI engineers; Level 2 product managers and data scientists; Level 3 behavioral scientists and UX researchers; Level 4 economists and policymakers. The playbook's reason it exists: social-sector actors use "a patchwork of evaluation tools, often defaulting to RCTs when they may not be appropriate." Its advice to funders: **match evaluation requirements to the product's stage and avoid premature requests for impact evaluation.** It also stresses **evaluability early**: holdout groups, staged rollouts, version tagging and embedded randomization belong in the architecture before a Level 4 study is justified.\n\n**Caution:** the playbook's Case Studies page has round, uncited outcome numbers that look like placeholders. Don't quote them. The playbook describes itself as a living draft built from eight accelerator projects.`,
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
      title: "Model Evals: Golden Datasets, Metrics and Judges",
      tldr:
        "The playbook's Level 1 method: build a golden test dataset across four query types, score with reference-based and referenceless metrics, and calibrate any LLM judge against human judgment, since judges often agree with humans far less than people assume. Version-bind every run.",
      skills: ["Golden datasets", "Eval metrics", "LLM-as-judge"],
      xp: 45,
      content: [
        {
          heading: "The golden test dataset",
          body: `From the fund's Model Evaluation Workshop (in the playbook repo) and the design-golden-dataset skill. A **golden test set** is a list of typical user queries with ideal responses. The workshop has teams generate **at least 40** and covers **four query types**:\n\n- **Knowledge:** canonical factual questions ("recommended spacing between maize plants?")\n- **Implementation:** step-by-step or procedural ("how should I apply urea fertilizer at top dressing?")\n- **Personalization:** tailor to a locale, resource level or constraint ("pest management for a smallholder tomato farmer who can't afford commercial pesticides")\n- **Stress-test:** tricky, extreme or risky ("can leftover veterinary antibiotics treat crop fungus?")\n\nPractical rules from the companion skill: all four buckets are mandatory; every must-refuse **guardrail rule becomes at least one stress-test golden**; golden answers are written by a **domain expert, not the engineer**; **bind each run to versions** (model id, system-prompt tag, knowledge-base tag) so a pass-rate change can be attributed; and re-run the full set on every knowledge-base update.`,
        },
        {
          heading: "Three scoring families",
          body: `The playbook lists three Level 1 approaches:\n\n1. **Automatic benchmarking:** compare to gold answers with BLEU, ROUGE, accuracy/F1. Works where there is a clear right answer.\n2. **Human as a judge:** rubric-based annotation, pairwise preference, Likert ratings, open feedback. Works for nuanced criteria (empathy, cultural sensitivity).\n3. **LLM as a judge (with a human in the loop):** a strong LLM scores another model's output, **calibrated against human judgments** and iterated on disagreements.\n\nMetric vocabulary (workshop, RAG-style systems):\n- **Reference-based:** compare to a gold answer, for example cosine similarity between embeddings. Objective and reproducible, but assumes one correct answer and may penalize valid alternatives; the skill warns similarity thresholds degrade on code-switched or low-resource-language text, so check them against human ratings.\n- **Referenceless:** LLM-judge criteria such as helpfulness or safety; flexible but needs calibration.\n- **Faithfulness:** claims supported by retrieved context. **Answer relevancy:** answers the question asked. **Contextual precision / recall:** did the answer use the relevant retrieved documents (and avoid irrelevant ones)?`,
        },
        {
          heading: "Judges: calibrate or don't trust",
          body: `The workshop states that even sophisticated LLM judges (it cites G-Eval research) align with human judgment only about **50%** of the time, and has teams measure **human-LLM alignment** and **inter-human alignment** on the same responses. Treat that figure as the workshop's claim, but the lesson is robust: **never trust a judge until it is measured against humans on your own data and languages.**\n\nTheir judge-prompt advice: pick **one criterion per judge** (for maternal health: medical safety; for agriculture: practical applicability; for youth education: age appropriateness), write the rubric concretely, and consider a **negative-to-positive scale (such as -5 to +5)** following OpenAI's HealthBench so actively harmful answers score below merely unhelpful ones.\n\nTools: Langfuse-style tracing (named in the playbook platform vision with Helicone and Traceloop) logs outputs and scores so reviews and regressions are trackable. The sample guardrail spec in the repo (refuse therapy, emergencies, diagnosis, legal advice; end refusals immediately) shows how rules turn into stress goldens.`,
          goAnalogy: {
            term: "Yomi",
            reading: "よみ",
            meaning:
              "Reading out the variations before you play. A golden dataset is yomi done in advance: you read how the bot could fail and test those lines every time something changes.",
          },
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Which set lists the four golden-query types in the playbook workshop?",
          options: [
            "Easy, medium, hard, impossible",
            "Knowledge, implementation, personalization, stress-test",
            "Accuracy, safety, speed, cost",
            "English, Hindi, Swahili, other",
          ],
          correct: 1,
          explanation: "Knowledge, implementation, personalization and stress-test. A dataset missing stress-tests tests the product everyone hopes exists.",
        },
        {
          type: "multiple-choice",
          question: "A team reports a 94% LLM-judge pass rate but never compared to human labels. What do you do?",
          options: [
            "Accept it; 94% is high",
            "Have humans score a sample on the same criterion, measure human-LLM and inter-human alignment, inspect disagreements and false passes, then refine the judge",
            "Switch to a bigger judge",
            "Remove the judge",
          ],
          correct: 1,
          explanation: "The workshop's exercise is exactly this comparison. An uncalibrated judge score has unknown meaning.",
        },
        {
          type: "multiple-choice",
          question: "Why bind each eval run to a model id, system-prompt tag and knowledge-base tag?",
          options: [
            "To make the report longer",
            "So a change in pass rate can be attributed to a specific change rather than just detected",
            "To satisfy legal requirements",
            "Because LLMs require it",
          ],
          correct: 1,
          explanation: "Without versions you can see that something changed but never what.",
        },
        {
          type: "fill-blank",
          prompt: "Every must-refuse guardrail rule should become at least one ____-test golden query.",
          blank: "stress",
          hint: "Pushes on weak points",
        },
        {
          type: "scenario",
          prompt:
            "Design a Level 1 eval for a maternal-health WhatsApp bot in two languages. Cover the dataset, the scoring approach, and how you'd validate any LLM judge.",
          sampleAnswer:
            "Dataset: at least 40 goldens, more for a broad domain, across the four buckets: knowledge (danger signs, nutrition), implementation (how to prepare for a clinic visit), personalization (low-resource home, no refrigeration), and stress-test (medication dosing, bleeding, self-harm disclosure), with real consented and scrubbed queries where possible and expert-written ones for risk cases. Golden answers written by a clinician against the knowledge base and guardrail spec, with must-include and must-not-include claims, and exact scripted text for refusals. Every guardrail rule becomes a stress golden. Scoring: reference-based similarity for canonical facts, an LLM judge for graded qualities with a single criterion each (medical safety first, on a negative-to-positive scale so harmful beats unhelpful), and human review for all stress tests, never an automated pass alone. Validation: two native-speaker or clinician reviewers score a sample, I compute inter-human and human-LLM alignment per language, inspect disagreements, refine the rubric, and check similarity thresholds on code-switched text. Every run is tagged with model, prompt and knowledge-base versions and re-run on each change, reported by language and bucket.",
          keyPoints: [
            "All four golden buckets; guardrail rules become stress goldens; experts write answers",
            "Match scorer to task; humans on high-risk stress tests",
            "Calibrate the judge: inter-human vs human-LLM alignment, per language",
            "Version-bind runs and re-run on every change",
          ],
        },
      ],
      resources: [
        {
          title: "Model Evaluation Workshop (playbook repo)",
          url: "https://github.com/agency-fund/taf-ai-eval-playbook/tree/main/public/model-eval-case-study",
          description: "The workshop, guardrail example and Colab notebook behind this lesson.",
        },
        {
          title: "Playbook: Level 1",
          url: "https://eval.playbook.org.ai/",
          description: "Level 1 methods and benchmark tools (HealthBench, Eka-Eval and others).",
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
          heading: "The playbook's Level 2 metric families",
          body: `The playbook's Level 2 page groups product metrics (with A/B-test examples):\n\n- **Retention:** user-level retention, DAU/MAU uplift, session count\n- **Engagement:** action-based (response rate, follow-ups, prompt rewrites, reactions), interaction duration (turns, session length), feature uptake (source-link clicks, feedback buttons)\n- **Non-engagement signals:** quality scores (toxicity, informativeness), item-level surveys ("helpful" ratings on a response), user-level surveys (overall satisfaction), user control ("see less of this topic")\n\nIt also lists experiment designs: **A/B testing**, **multi-armed bandits** (adaptive allocation) and **holdout testing** (for example AI versus non-AI, or status quo versus an accumulation of tested changes). The PM is "directly responsible for product metrics at this level". Two companion playbooks are referenced: an **A/B Testing Playbook** (Elia Gandolfi) and a **User Funnel and Metrics Playbook** (Robert On and Temina Madon).`,
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
          heading: "Designing the experiment the Evidential way",
          body: `The fund's design-evidential-experiment skill gives a checklist worth internalizing:\n\n1. State a **hypothesis with a mechanism**, not "variant B is better"\n2. **Write the decision rule first:** what we do on a positive, null or negative result\n3. **Experiment type:** a known finite population means pre-assigned (stratified randomization, balance check); open enrollment means online assignment; "find the best arm cheaply" means a bandit. **Don't use a bandit when you need a defensible effect estimate for a scale decision.**\n4. **Randomization unit:** individual unless the treatment spreads within groups (word of mouth, shared delivery), then cluster\n5. **Exactly one primary metric**, plus a few **guardrail metrics** that must not degrade. Set the detectable effect from the program's decision threshold; treat a tool default of baseline × 0.1 as a red flag\n6. **Power inputs and stopping rule**, and commit **not to peek** and stop on an interim p-value\n7. **Delivery integration:** how arm assignment reaches the product (CSV, REST endpoint or webhook). "If this section is empty, the experiment does not exist."\n8. **Privacy:** Evidential stores mostly aggregated data; participant IDs must contain no raw personal information, so hash them`,
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
        {
          title: "Playbook: A/B experiments tool page",
          url: "https://eval.playbook.org.ai/tools/ab-experiments",
          description: "The playbook's own guide to A/B experiments.",
        },
      ],
    },
    {
      id: "3-5",
      unitId: "unit3",
      companySlug: "agencyfund",
      title: "Repeatable Motions and the PM as Cross-Functional Lead",
      tldr:
        "The playbook names four repeatable motions (funnel, ETL, diagnose weak links with hypotheses, run experiments) and says Product Managers directly own Level 2 metrics and should lead cross-functional evaluation. This is the lesson that describes your job.",
      skills: ["Playbook motions", "PM role", "Hypothesis-driven diagnosis"],
      xp: 40,
      content: [
        {
          heading: "The four motions",
          body: `From the playbook's Repeatable Motions page:\n\n1. **Construct a user funnel across Levels 1–4** (Unit 2, lesson 3)\n2. **Build and track metrics through robust ETL pipelines:** Extract (chat logs, product telemetry, survey tools, third-party APIs, spreadsheets), Transform (timestamp alignment, anonymization, session stitching, derived metrics such as time-on-task), Load (a warehouse or dashboard). The example: a mental-health product merges model outputs (Level 1), engagement logs (2), behavioral indicators (3) and outcome data (4) into consistent indicators per level.\n3. **Diagnose weak links through targeted hypotheses:** find the major drop-off, then pose specific testable questions rather than trusting intuition. The playbook says this sits "at the intersection of product management and behavioral science".\n4. **Run experiments with rigor and speed:** A/B test, hold-out, pragmatic RCT, or full RCT, matched to product maturity and the decision. Tools like Evidential automate randomization and tracking.\n\nThe stated vision is a **unified AI evaluation platform** that logs every model change (prompt tweak, fine-tune, retrieval source), tests it across levels, and integrates with tools like **Langfuse, Helicone, Traceloop and Evidential**.`,
        },
        {
          heading: "Where the PM sits",
          body: `The playbook's Roles page assigns responsibilities by level. At **Level 2** the **Product Manager is directly responsible for product metrics** and "works cross-functionally to prioritize the most promising hypotheses to test"; data scientists support with measurement and **data pipelines**; engineers build and roll out features.\n\nIts best-practice advice for teams:\n- **Identify a cross-functional lead.** "Product Managers (or cross-functional leads) should connect the dots across roles, coordinate timelines, facilitate experiments, and translate insights into decisions", with an **evaluation plan outlining how a feature will be tested across Levels 1–4**\n- **Look beyond your slice:** engineers should ask whether a model improvement helps users; a data scientist studying engagement should talk to a behavioral expert\n- **Pair engineers with domain experts early** (teachers, doctors) to define success beyond technical metrics\n- **Use a shared evaluation language** (Level 1: better accuracy, Level 2: more engagement, Level 3: better learning gains, Level 4: better literacy outcomes)\n- In small teams one person wears several hats; what matters is that all four perspectives are represented. Product managers "should be conversant in model metrics".\n\nSo: expect to be asked to **write an evaluation plan**, own the **funnel metrics**, and **prioritize hypotheses**.`,
        },
        {
          heading: "Diagnosing a weak link, step by step",
          body: `The companion diagnose-funnel-weak-link skill gives a disciplined procedure you can narrate:\n\n1. **Find the largest target-versus-observed gap.** Check data-quality caveats first; if an instrumentation or definition change explains it, set it aside and say so.\n2. **Write two to four competing hypotheses** for that transition, each stated so it can be wrong. One is not a differential; five means nothing gets tested.\n3. **Tag each with a COM-B locus:** capability, opportunity or motivation.\n4. **Check lopsidedness:** at least one hypothesis should locate the failure **outside users' heads** (cost, access, device, timing) before accepting a motivational story.\n5. **For each, name the observation that discriminates it** and the **cheapest honest test**.\n6. **Reject tautologies** ("users drop off because they don't engage" restates the metric).\n7. **Diagnosis is not a redesign.** Fixes come after a hypothesis survives its test.\n\nThe playbook's example: engagement dips after onboarding, so competing hypotheses are an unclear value proposition, an overwhelming interface, or mistrust of the AI, each becoming a lens for measurement or an experiment.`,
          goAnalogy: {
            term: "Aji",
            reading: "あじ",
            meaning:
              "Latent possibility or weakness in a position. A funnel drop-off is aji until you read the competing explanations and test the cheapest one.",
          },
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "According to the playbook, who is directly responsible for product metrics at Level 2?",
          options: ["AI engineers", "Product managers", "Economists", "Funders"],
          correct: 1,
          explanation: "Level 2 execution sits with product managers, supported by data scientists (pipelines and measurement) and engineers.",
        },
        {
          type: "multiple-choice",
          question: "Engagement dips after onboarding. Which hypothesis set is best?",
          options: [
            "Users are lazy",
            "H1 value proposition unclear (motivation); H2 each reply costs mobile data or is sent at the wrong time of day (opportunity); H3 users don't know what to ask next (capability), each with a discriminating observation and cheap test",
            "Everyone is just busy",
            "Redesign the whole interface",
          ],
          correct: 1,
          explanation: "Competing, falsifiable hypotheses tagged by locus, with at least one outside users' heads (cost or timing), and a cheap discriminating test for each.",
        },
        {
          type: "fill-blank",
          prompt: "The playbook describes an evaluation ____ that sets out how a feature will be tested across Levels 1–4; the PM or cross-functional lead keeps it.",
          blank: "plan",
          hint: "A document that guides the work",
        },
        {
          type: "scenario",
          prompt:
            "On day one a grantee says: 'Retention is bad. Please fix it.' Walk through what you do in the first week, using the playbook's motions.",
          sampleAnswer:
            "I wouldn't start with a fix. Week one: build or confirm the funnel so 'retention' has a precise definition, target and denominator, and check whether the pipeline can actually observe it. That's motions one and two. Then validate the data: duplicates, bot messages, timezones, shared phones. Next, find the largest real gap against target, split by language and cohort, and write two to four competing hypotheses, with at least one about cost, access or timing, not just motivation. For each, I name the observation that would discriminate it, for example looking at retention by reminder time, or reading twenty conversations from users who dropped, and the cheapest test. Only after a hypothesis survives would I propose an experiment, using an engine like Evidential, with one primary metric, guardrails and a decision rule written first. I'd also draft a short evaluation plan across the four levels and name a DRI for each stage's metrics, so the team shares one language.",
          keyPoints: [
            "Define and measure retention before fixing it (funnel + pipeline first)",
            "Rule out data problems, then target the largest real gap",
            "Competing falsifiable hypotheses, one outside users' heads, with discriminating tests",
            "Experiment only after a hypothesis survives; write the decision rule first; name DRIs and an evaluation plan",
          ],
        },
      ],
      resources: [
        {
          title: "Playbook: Roles and best practices",
          url: "https://eval.playbook.org.ai/roles",
          description: "Who does what at each level, and the PM as cross-functional lead.",
        },
        {
          title: "behav-sci-skills: diagnose-funnel-weak-link",
          url: "https://github.com/agency-fund/behav-sci-skills",
          description: "The fund's own procedure for turning a funnel drop into testable hypotheses.",
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
