import type { Unit } from "@/data/types";

export const kestraUnit5: Unit = {
  id: "unit5",
  title: "The Kestra PM Interview",
  description:
    "The 4-stage process decoded — what each stage tests, how to pass the async homework, what the team discussion looks for, and how to make the co-founder conversation memorable.",
  companySlug: "kestra",
  goTerm: "Yose",
  goReading: "よせ",
  goMeaning:
    "Endgame — converting board position into decisive results. The interview is yose: every piece of knowledge you've built across this course converts into a specific answer. Precision matters now more than creativity.",
  color: "snow",
  lessons: [
    {
      id: "5-1",
      unitId: "unit5",
      companySlug: "kestra",
      title: "The 4-Stage Process, Stage by Stage",
      tldr:
        "Kestra's 4-stage process takes 2–3 weeks. Each stage has a different purpose and is run by different people. Know what they're evaluating at each step and what makes you fail before you get to the next stage.",
      skills: ["Interview process", "Stage-by-stage prep", "Failure mode awareness"],
      xp: 20,
      content: [
        {
          heading: "Stage 1: 30-minute intro call with hiring manager",
          body: `**Purpose:** Mutual screening. They're checking if you're worth the next 3 stages. You're checking if the role is what the posting described.\n\n**What they're evaluating:**\n- Do you understand what Kestra does and why the AI PM role exists?\n- Is your background actually relevant? (Shipped AI products, not demos)\n- Do you communicate clearly? (PMs who can't explain themselves can't write good specs)\n- Are you genuinely excited about orchestration + AI, not just "startup PM"?\n\n**Your 90-second opener when asked "tell me about yourself":**\n"I've been a PM focused on AI products for [X] years, most recently at [company] where I owned [specific AI feature or product]. I'm interested in Kestra specifically because [concrete reason: YAML-first orchestration for agents, the gap in production AI infrastructure, the intersection of developer tools and AI workflows — pick the one that's genuinely true]. I've been following the space since [event/release] and I think the orchestration layer is the underappreciated foundation of production AI."\n\n**The failure mode:** being vague about Kestra ("I think it's an interesting company in an interesting space") or vague about your AI experience ("I've worked on several AI initiatives"). Specificity is credibility in stage 1.\n\n**Your questions for them:**\n- "What's the most common AI use case Kestra customers are asking for today that you don't yet have a good answer for?"\n- "Where does the AI PM sit in the org — is this primarily an external-facing product role, an internal roadmap role, or both?"\n- "What would make someone succeed or fail in the first 90 days?"`,
          goAnalogy: {
            term: "Komi",
            reading: "こみ",
            meaning:
              "Compensation points given to the second player. Stage 1 is your komi negotiation: establish enough credibility early that you enter stage 2 with a positive position to defend.",
          },
        },
        {
          heading: "Stage 2: Asynchronous homework",
          body: `**Purpose:** Assess your product thinking quality without the social dynamics of a live interview.\n\n**Likely format:** A product analysis or product design exercise. "Here is a specific customer use case / part of the Kestra product / market situation. What would you build and why?"\n\n**Time:** Likely 2–4 hours. Some companies say "take as long as you need" as a test of how much time you think is appropriate. 4–6 hours of focused work producing a tight 3-page document is better than 12 hours producing a 15-page one.\n\n**What they're evaluating:**\n- Quality of problem identification (did you find the real problem?)\n- Decisiveness of the recommendation (did you make a clear call?)\n- Technical fluency (did you propose something implementable, not just exciting?)\n- Scope discipline (did you explicitly say what you're not building?)\n- Communication quality (is the document clear and organized?)\n\n**The single most common failure:** writing a list of possible features instead of a recommendation. Every homework evaluator skims for "what would you build first and why?" — if they can't find a clear answer, you've failed regardless of the quality of everything else.\n\n**Before submitting:**\n- Read it as if you're the evaluator. Can you identify the recommendation in 30 seconds?\n- Cut anything that doesn't serve the recommendation\n- Add one sentence at the end: "I'd validate this by [X]" — shows you know it's a hypothesis`,
        },
        {
          heading: "Stage 3: 30-minute team discussion & Stage 4: Co-founder conversation",
          body: `**Stage 3: Team discussion with two colleagues**\n- Who: likely 1 engineer + 1 PM or product lead from the AI team\n- What they test: depth of your AI product knowledge, how you work cross-functionally, whether your product opinions are grounded in customer understanding\n- Expect: deep technical follow-up on your homework response + "tell me about a time you [made a hard prioritization call / pushed back on a feature request / shipped something you had doubts about]"\n- Failure mode: surface-level answers. "I prioritize by impact and effort" is not an answer — "I prioritized the eval framework over 3 customer feature requests because without measurement infrastructure, every feature ship was a quality gamble I couldn't defend to stakeholders" is an answer\n\n**Stage 4: 30-minute co-founder conversation**\n- Who: a Kestra co-founder\n- What they test: strategic alignment, genuine curiosity about the problem, whether you'd be a strong early-team addition at a Series A company\n- What founders are actually asking:\n  - Would I trust this person to make product calls autonomously?\n  - Do they have the taste to know what matters vs. what's noise?\n  - Are they genuinely interested in the problem, not just the job?\n- What you should bring: a specific point of view on Kestra's AI strategy. Not "I'd need to learn more before having an opinion" — a hypothesis you're willing to defend and update.\n- Failure mode: vague enthusiasm. "I'm excited about AI and orchestration" is forgettable. "I think the agent execution observability gap is the most important thing to solve right now because enterprise customers will churn the first time an agent run fails and they can't explain why" is memorable.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "In Stage 1, the hiring manager asks: 'What do you know about Kestra?' What's the strongest answer?",
          options: [
            "'I know it's a workflow orchestration platform with a strong open-source community and a recent Series A.'",
            "'It's a universal orchestration platform — YAML-based, works for data pipelines, IT automation, and AI agent workflows. Almost 30,000 GitHub stars, 10,000+ organizations, $25M Series A in March 2026. What I find most interesting is the bet on YAML as the workflow definition language — it means non-Python engineers can read and maintain workflows, which matters a lot for the DevOps and platform teams that are now inheriting AI workflow ownership.'",
            "'I've been exploring your docs and the product looks impressive. I'd love to learn more about the AI direction.'",
            "'I know you're competing with Airflow and Prefect in the data orchestration space.'",
          ],
          correct: 1,
          explanation:
            "Option B demonstrates depth (specific numbers, specific architectural choice), understanding (why YAML matters for the non-Python audience), and genuine curiosity (a specific product bet you find interesting). Option A is accurate but shallow. Option C signals you didn't do research. Option D reduces Kestra to a narrow competitive framing that misses the universal positioning.",
        },
        {
          type: "multiple-choice",
          question:
            "The co-founder asks: 'What's the most important AI feature Kestra doesn't have yet?' You have 2 minutes. What structure works best?",
          options: [
            "List 3 candidate features and explain the trade-offs of each",
            "'It depends on which customer segment you're prioritizing' — then ask a clarifying question",
            "Lead with your recommendation: '[Feature] because [reason tied to customer pain]. Here's what I'd measure to know it's working: [metric].' Then invite pushback: 'My assumption is [X] — is that consistent with what you're hearing?'",
            "Reference what competitors have shipped and propose Kestra match it",
          ],
          correct: 2,
          explanation:
            "Co-founders want conviction backed by reasoning, not hedging. Option A (listing trade-offs) delays the recommendation until it's too late. Option B (asking for clarification) signals inability to operate under ambiguity — founders live in ambiguity. Option D (competitive parity) is reactive. Option C is decisive, specific, and ends with an invitation for dialogue that shows intellectual humility without sacrificing conviction.",
        },
        {
          type: "scenario",
          prompt:
            "Stage 3: An engineer on the Kestra team asks, 'How do you decide when an AI feature is ready to ship without a human review gate?' Walk through your answer.",
          sampleAnswer:
            "The decision hinges on three things: accuracy threshold, failure cost, and detection speed. First, accuracy threshold: before removing a human gate, I need the AI's accuracy on a representative eval set to be above a threshold the stakeholder team has pre-agreed to accept. For high-stakes decisions (routing to a premium support queue, escalating a potential churn signal), I'd require higher accuracy and might never fully remove the gate. For lower-stakes decisions (pre-filling a form field, categorizing a low-priority ticket), I'd accept a lower bar and faster graduation. Second, failure cost: what happens if the AI is wrong and there's no human to catch it? Is the failure recoverable (wrong category that gets fixed next review cycle) or unrecoverable (wrong action taken on a customer's account)? The higher the failure cost, the longer the human gate stays. Third, detection speed: even after removing the human gate, I need a monitoring system that catches accuracy degradation before customers notice. 'Removing the gate' doesn't mean 'stopping measurement' — it means switching from human-in-the-loop review to automated quality monitoring. If those three conditions are met — agreed accuracy threshold crossed, acceptable failure cost, monitoring in place — I'd propose removing the gate and revisit if the production accuracy deviates from the eval set baseline.",
          keyPoints: [
            "Three clear criteria: accuracy threshold, failure cost, detection speed",
            "Stakeholder alignment on the threshold before launch, not after",
            "Removing the gate ≠ stopping measurement — monitoring replaces the human review",
            "Failure cost asymmetry: high-stakes decisions keep gates longer",
          ],
        },
      ],
      resources: [
        {
          title: "Kestra GitHub Issues",
          url: "https://github.com/kestra-io/kestra/issues",
          description: "Read 20–30 recent issues before Stage 3 — understanding what users are asking for shows you've done real research beyond the docs.",
        },
        {
          title: "Kestra Discord / Community Slack",
          url: "https://kestra.io/slack",
          description: "Join the Kestra community and read the AI-related conversations — the co-founder likely participates here.",
        },
      ],
    },
    {
      id: "5-2",
      unitId: "unit5",
      companySlug: "kestra",
      title: "Your AI Strategy Pitch for Kestra",
      tldr:
        "The co-founder will ask you what you'd build. This is not a trap — it's an invitation to show strategic thinking. Here's how to construct a defensible, specific AI strategy pitch for Kestra.",
      skills: ["Strategic thinking", "Pitch construction", "Co-founder conversation"],
      xp: 25,
      content: [
        {
          heading: "The structure of a good AI strategy pitch",
          body: `A 3-minute response to "what would you build for Kestra's AI strategy?"\n\n**1. The most important problem (1 sentence)**\n"The biggest gap in Kestra's AI story right now is [X]."\n\n**2. Why it's the right priority (2–3 sentences)**\n- What customer pain does it address?\n- Why is now the right time (market timing, competitive window)?\n- What does solving it unlock?\n\n**3. What you'd build (2–3 sentences)**\n- Specific feature or capability\n- How it's different from what already exists\n- Why Kestra is the right place to build it (vs. a standalone tool)\n\n**4. How you'd measure success (1 sentence)**\n"Success looks like: [specific metric] within [timeframe]."\n\n**5. The assumption (1 sentence)**\n"My assumption is [X] — which I'd validate by [Y]."\n\nThis structure is decisive without being arrogant. The assumption line is important: it shows intellectual humility and invites the founder into a real conversation.`,
        },
        {
          heading: "Three defensible AI strategy pitches for Kestra",
          body: `**Pitch 1: Agent execution observability**\n"The biggest gap is that AI agent workflows running in Kestra look like black boxes — you see the start and end of the execution but not what the agent did at each step, what it decided, or why it chose a particular tool. Enterprise customers won't trust production agents they can't inspect. I'd build per-step agent traces: every LLM call, tool invocation, and decision logged as a sub-execution in the DAG. This gives Kestra something no other orchestration platform does well for agents — full auditability with no additional instrumentation. Success metric: 60% of active agent flow users enable the trace view within 60 days of launch."\n\n**Pitch 2: First-party AI task library with production defaults**\n"Most Kestra users building AI workflows today use a generic HTTP task to call LLM APIs — they're implementing their own retry logic, cost logging, and output parsing, inconsistently. I'd build a first-party AI task library for the top 3 providers (Anthropic, OpenAI, Bedrock) that ships with production-grade defaults: structured retry, cost logging to execution metadata, output schema validation. This isn't glamorous, but it's the foundation every future AI feature depends on, and it closes the gap that currently makes Kestra feel like a generic orchestration tool rather than an AI-native platform. Success metric: 30% adoption among existing users within 90 days."\n\n**Pitch 3: Human-in-the-loop as a first-class citizen**\n"The agent use case that's ready to buy right now isn't fully autonomous agents — it's agents with human checkpoints. Contract review, content approval, compliance flagging, fraud investigation. These workflows need a durable pause-and-wait primitive that survives process restarts, sends the right notification, and has configurable timeout and escalation. Kestra already has task dependencies and triggers, but there's no native 'wait for human approval' task type that enterprise teams would trust in a high-stakes workflow. This is achievable in one quarter and it directly addresses the use case that large-format enterprise customers are buying for today. Success metric: 5 design partner customers running a production human-in-the-loop workflow within 60 days of beta."\n\n**All three are defensible.** Pick the one you believe in most based on your research into Kestra's current product and community discussions.`,
          goAnalogy: {
            term: "Kikashi",
            reading: "きかし",
            meaning:
              "A forcing move that demands a response. A specific, confident AI strategy pitch is kikashi: it forces the co-founder to engage with your reasoning, not just evaluate your enthusiasm.",
          },
        },
        {
          heading: "Handling pushback in the co-founder conversation",
          body: `After you give your pitch, the co-founder will likely push back. This is the real evaluation — how you respond to disagreement under pressure.\n\n**Types of pushback and how to handle them:**\n\n**"We've already tried that and it didn't work."**\nResponse: "That's really useful to know. What was the blocker — customer adoption, technical complexity, or something else? That context would change my thinking about whether to revisit it or deprioritize it."\nSignal: curiosity, not defensiveness. You want to understand, not argue.\n\n**"That's not our biggest customer ask right now."**\nResponse: "What is the biggest ask? I made my recommendation based on [specific signals: GitHub issues, community threads, competitive gap] — I might have the wrong signal. What are you hearing?"\nSignal: you have a basis for your view, and you're willing to update it with better information.\n\n**"That's what [Competitor X] is building too."**\nResponse: "Exactly — which means there's validated demand. The question is whether Kestra can do it better by [specific differentiation: YAML integration, cross-flow observability, enterprise security model]. Do you think that differentiation is defensible?"\nSignal: competitive awareness + product conviction.\n\n**"It's more complex than you think."**\nResponse: "Walk me through the complexity — is this an architectural constraint, a user education problem, or something else? I'd rather understand the constraint before doubling down on the recommendation."\nSignal: genuine curiosity, not covering your bases.`,
        },
      ],
      exercises: [
        {
          type: "scenario",
          prompt:
            "Construct your personal AI strategy pitch for Kestra. Pick one of the three pitches above (or a different one if you have a stronger view), and adapt it with specific language that reflects your actual perspective. Write the 5-component version.",
          sampleAnswer:
            "**The biggest gap:** Kestra doesn't have a production-ready way to run AI agents as first-class workflows — the platform can orchestrate them, but the agent loop pattern (perceive → reason → act → observe → repeat) isn't a native abstraction. Teams building agents in Kestra today assemble the loop manually from generic task types. **Why it's the right priority:** Agent adoption is accelerating in enterprise, but production failures are common and invisible. Kestra's competitive advantage is observability and durability — exactly what agent loops need and what standalone frameworks like LangGraph don't provide. There's a 6–12 month window before Temporal or a specialized agent platform adds YAML-based workflow support. **What I'd build:** An AgentLoop task type: configure the LLM, the tool set, the termination conditions, and the max iterations. Each iteration is a sub-execution — observable, logged, resumable. Failed iterations surface as failed tasks with the agent's reasoning visible. Human gates are native: an approval task type that pauses the loop. **Success metric:** 3 enterprise customers running production agent workflows with >1,000 executions/month within 90 days of GA. **My assumption:** the primary adoption blocker for enterprise agent workflows is observability, not capability — they can build the agents, they can't trust them in production. I'd validate this in 10 customer interviews before committing to the spec.",
          keyPoints: [
            "All 5 components are present: problem, priority rationale, specific build, success metric, assumption",
            "The assumption shows intellectual humility without weakening the recommendation",
            "The success metric is specific and measurable, not vague",
            "The competitive window is specific (6–12 months) with named competitors",
          ],
        },
        {
          type: "multiple-choice",
          question:
            "The co-founder says: 'That feature you proposed — we started building it 6 months ago and deprioritized it because adoption was low in beta.' What's your best response?",
          options: [
            "'Oh, that changes things — maybe it's not the right priority after all.'",
            "'Interesting — what was the beta population, and was the adoption metric you tracked the right one? Sometimes low beta adoption signals a UX or activation problem, not a value problem.'",
            "'I still think it's the right priority — the market has changed significantly in the last 6 months.'",
            "'What were the other factors that led to deprioritization?'",
          ],
          correct: 1,
          explanation:
            "Option B probes the claim with precision without being defensive or dismissive. 'Low adoption in beta' is ambiguous — it could mean users tried it and didn't find value (signal to deprioritize), or users never reached the feature because of onboarding gaps (signal to fix activation, not deprioritize). Asking about the beta population and the metric shows product sophistication. Option A capitulates without learning anything. Option C is defensively doubling down. Option D is too broad — get to the specific data first.",
        },
      ],
      resources: [],
    },
    {
      id: "5-3",
      unitId: "unit5",
      companySlug: "kestra",
      title: "Positioning Your Background for Kestra",
      tldr:
        "How to frame your experience for this specific role — what to lead with, what to background, and how to present your AI product portfolio in a way that passes Kestra's explicit bar.",
      skills: ["Self-positioning", "Interview storytelling", "Role alignment"],
      xp: 30,
      content: [
        {
          heading: "What to lead with",
          body: `The Kestra PM, AI role has a specific profile. Frame your background to match it:\n\n**Lead with shipped AI products**\nNot "I've worked with AI" — "I owned [specific feature] that used [LLM/agent approach] to [specific outcome], ran in production for [duration], serving [scale]." If you have two AI products to talk about, lead with the one with the stronger production story.\n\n**Technical fluency signal**\nMention something that shows you understand AI systems, not just AI demos. "I made the model selection decision — we started with GPT-4 but moved to Claude Sonnet for [cost/latency/accuracy reason]" is a technical fluency signal. "I worked closely with the AI team on the feature" is not.\n\n**Developer product experience**\nKestra's users are developers and engineers. If you've worked on developer tools or APIs, surface it. If not, frame your AI products in terms of technical users: "my primary users were data engineers who ran this workflow on their pipeline data."\n\n**Orchestration or workflow context**\nIf you have any background in data pipelines, automation workflows, DevOps tooling, or scheduled jobs, surface it. It doesn't need to be orchestration-specific — any experience in the "automate repeated processes" problem space is relevant context.\n\n**What to background:**\n- Consumer-facing AI features where the user never sees the orchestration (a chatbot on a website)\n- AI features you contributed to but didn't own the roadmap for\n- Prototype or internal tool AI projects without production metrics\n- General PM experience without AI-specific technical depth`,
          goAnalogy: {
            term: "Sente",
            reading: "せんて",
            meaning:
              "Having the initiative. Frame your background proactively rather than waiting to respond to questions — take sente in the narrative rather than letting the interviewer construct their own story about you.",
          },
        },
        {
          heading: "Common positioning mistakes",
          body: `**Mistake 1: Over-crediting adjacent work**\n"I was the PM for a product that had an AI recommendation engine" — if the recommendation engine was built by a different team and you interfaced with it at the API level, that's not AI PM experience. Kestra will probe, and the story falls apart under scrutiny.\n\n**Mistake 2: Generalizing the wrong metric**\n"The feature was very successful" without a number. What was it? User adoption? Accuracy? Cost reduction? The absence of a number signals you didn't measure it.\n\n**Mistake 3: Prototype-to-PM framing**\n"I built a prototype of an AI feature and then handed it to engineering to productionize." This is valuable — but it's not PM experience. A PM's job is to own the feature through production, measure it, iterate on it, and make the hard calls post-launch.\n\n**Mistake 4: Avoiding the failure stories**\nCandidates often only share success stories. But Kestra is specifically looking for people who've navigated real AI production challenges. A story about a quality degradation you caught and fixed is more impressive than a story about a feature that shipped perfectly.\n\n**Mistake 5: Generic enthusiasm without specifics about Kestra**\n"I'm really excited about the orchestration + AI intersection" sounds the same coming from every candidate. "I think the pause/resume human-in-the-loop pattern is the most underbuilt primitive in the current orchestration stack, and I've seen enterprise customers work around it with clunky external approval systems three times in the last year" is specific, credible, and memorable.`,
        },
        {
          heading: "Questions to ask across the 4 stages",
          body: `Good questions signal genuine interest, demonstrate research, and give you information you actually need to make your own decision. Here's a question for each stage:\n\n**Stage 1 (Hiring manager):** "What does success look like for this PM in the first 90 days — and what would make someone fail in that same period?"\n\n**Stage 2:** No questions — it's asynchronous. But include a line at the end of your homework: "I'd want to validate [X] before committing to this recommendation — who would be the right person to talk to about [specific question]?" This shows you're thinking about the next steps.\n\n**Stage 3 (Team discussion):** "When you've disagreed with a PM recommendation on an AI feature — what was the disagreement and how did you resolve it?"\n\n**Stage 4 (Co-founder):** "What's the AI use case you're most uncertain about — the one where you're not sure if customers actually need it yet?"\n\n**Why these questions:** each one is non-obvious, requires actual knowledge to answer, and tells you something you genuinely care about. "What does your culture look like?" is a wasted question. "Where do you most commonly disagree with PM recommendations?" reveals how the team operates under real conditions.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "You're asked: 'What's your biggest limitation for this role?' What's the strongest honest answer for a PM with strong AI product experience but limited orchestration background?",
          options: [
            "'My greatest weakness is that I'm too detail-oriented sometimes.'",
            "'I don't have deep orchestration-specific PM experience — my AI work has been in [context]. I understand the concepts from a user and architect's perspective, and I've spent the last [period] going deep on Kestra's product and the orchestration competitive landscape, but the orchestration domain nuances I'll need to build in context. What I'm confident in is the AI product judgment and customer discovery, and I think that's the harder skill to teach.'",
            "'I haven't used Kestra in production, though I've explored the docs and built a test flow.'",
            "'I'd need to get up to speed on the technical details of Kestra's architecture before I could be effective.'",
          ],
          correct: 1,
          explanation:
            "Option B is honest, specific, and well-framed. It acknowledges the gap, describes what you've done to close it, expresses confidence in the skills that ARE relevant, and implicitly makes the case that those skills are more important for this role. It's not defensive and it doesn't deflect. Options A and D are either generic (A) or undersell your preparation (D). Option C is too narrow — the limitation they care about is the PM experience dimension, not just product familiarity.",
        },
        {
          type: "scenario",
          prompt:
            "You have 3 AI product experiences to choose from for the interview. Experience A: a fully autonomous AI feature with no human review, 3M users, 91% accuracy, that you shipped 2 years ago and no longer own. Experience B: a small-scale internal AI tool you built and maintained for 6 months, 200 users, 87% accuracy, that you still own and have iterated on 4 times. Experience C: a high-profile AI feature that launched at 78% accuracy, was rolled back, and relaunched at 89% 3 months later — 500K users, you own it. Which do you lead with in the Kestra interview and why?",
          sampleAnswer:
            "I lead with Experience C. Here's why: Kestra is explicitly looking for candidates who've navigated real AI production challenges, not candidates who've shipped flawless demos. Experience C is the richest story for this interview because it has: (1) a quality failure and recovery — demonstrates production judgment; (2) a rollback decision — demonstrates the courage to make the hard call; (3) a relaunch — demonstrates iteration discipline and a clear quality threshold; (4) meaningful scale (500K users). Experience A is valuable (scale, accuracy) but I no longer own it, which limits how deep I can go on the ongoing decisions. Experience B is honest but small-scale — 200 users and 87% accuracy is less compelling, though the ongoing ownership and 4 iterations is a quality signal. For the intro call, I'd open with C. For follow-up questions about ongoing ownership and iteration, I'd bring in B as a parallel example of a smaller-scale but more continuously maintained product. A becomes supporting evidence of scale.",
          keyPoints: [
            "Lead with the story that best matches what the interviewer is looking for, not the most impressive-sounding one",
            "Rollback + relaunch stories are powerful signals of production experience — don't hide them",
            "Ongoing ownership is a proxy for having faced the long-tail challenges that appear post-launch",
            "It's fine to draw on multiple experiences across different interview moments",
          ],
        },
      ],
      resources: [
        {
          title: "Kestra Blog: AI Posts",
          url: "https://kestra.io/blogs",
          description: "Read the last 6 months of Kestra blog posts — the co-founder often references their own recent thinking in the final conversation.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "What single element most differentiates a passing from a failing Stage 2 homework submission at Kestra?",
      options: [
        "Comprehensive coverage of all possible AI features and their trade-offs",
        "A clear, decisive recommendation for what to build first, with specific reasoning and explicit non-goals — rather than a list of options or hedged 'it depends' framing",
        "Demonstrating familiarity with Kestra's existing features and documentation",
        "A polished format with clear headers, visuals, and a professional design",
      ],
      correct: 1,
      explanation:
        "The posting explicitly calls out 'decisive calls about what not to build' as a key requirement. The homework is designed to evaluate exactly this. A comprehensive options list fails because it avoids the decision. An 'it depends' conclusion fails because it avoids conviction. A decisive recommendation with explicit non-goals demonstrates the product judgment Kestra is hiring for.",
    },
    {
      type: "multiple-choice",
      question: "The co-founder pushes back on your AI strategy pitch. You're not sure they're right, but their point has some merit. What's the right response?",
      options: [
        "Hold your position — conviction is a signal of strong product thinking",
        "Immediately update your recommendation to align with their view",
        "Acknowledge the merit, describe what would change your view ('if X is true, then I'd prioritize Y instead'), and ask the question that resolves the uncertainty",
        "Ask them to elaborate so you can gather more data before responding",
      ],
      correct: 2,
      explanation:
        "Option C is the PM skill: update conditionally, not reflexively. 'If X is true, then Y' shows you've integrated their point without abandoning your reasoning. Then asking the question that would resolve the uncertainty ('what's the actual data on customer adoption of Z?') keeps the conversation productive and shows you operate on evidence, not just conviction or deference.",
    },
    {
      type: "multiple-choice",
      question: "You have 60 seconds to answer: 'Why do you want this specific role at Kestra vs. a PM role at a larger company with more AI investment?' What's the strongest answer?",
      options: [
        "'I prefer smaller companies where I can have more ownership and autonomy.'",
        "'I think the orchestration + AI intersection is the most underbuilt infrastructure in the current stack, and I want to define what it looks like before it becomes obvious — which is only possible at Kestra right now because no one else is building this specifically.'",
        "'I'm excited about the growth stage and the learning opportunity that comes with a Series A company.'",
        "'The team here seems exceptional and I've been impressed by the product vision.'",
      ],
      correct: 1,
      explanation:
        "Option B is specific to Kestra (not a generic startup preference), makes a strategic claim (the space is underbuilt), and explains why timing matters (the window closes as the space matures). Options A, C, and D could apply to any Series A startup. A co-founder asking this question is looking for 'why us' specificity — the answer should only be true for Kestra, not for 20 other companies.",
    },
  ],
  quizXp: 40,
};
