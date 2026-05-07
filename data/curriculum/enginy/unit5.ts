import type { Unit } from "@/data/types";

export const enginyUnit5: Unit = {
  id: "unit5",
  title: "Interview Prep",
  description: "Product sense questions, execution scenarios, STAR stories, and the questions you should ask them.",
  companySlug: "enginy",
  goTerm: "Nobi",
  goReading: "のび",
  goMeaning: "Extension — building on an existing strong position. Interview prep is nobi: you extend your existing PM strengths into new Enginy-specific territory.",
  color: "snow",
  lessons: [
    {
      id: "5-1",
      unitId: "unit5",
      companySlug: "enginy",
      title: "Product Sense Questions for GTM AI",
      tldr: "Product sense at Enginy means understanding AI GTM tradeoffs, not just UX. Expect questions about the personalization engine, enrichment quality, and what you'd build next.",
      skills: ["Product sense", "AI product thinking", "Structured problem solving"],
      xp: 25,
      content: [
        {
          heading: "How product sense questions work at Enginy",
          body: `Product sense interviews test whether you think like a PM who deeply understands the product space. At an AI GTM company, generic "how would you improve Spotify" answers won't land. Expect questions that probe:\n\n- How you think about AI quality tradeoffs (precision vs. recall, speed vs. accuracy)\n- How you'd improve a specific Enginy feature\n- How you'd prioritize between fixing a model issue vs. adding a new data source\n- What you'd build next if given unlimited engineering resources\n\nThe framework they want to see: **user problem first → constraints and tradeoffs → prioritized solution with metrics**.`,
          goAnalogy: {
            term: "Tenuki",
            reading: "てぬき",
            meaning: "Playing elsewhere — responding to a local threat by making a bigger move somewhere else. Great product sense means knowing when to ignore an obvious local fix and invest in a more strategic improvement instead.",
          },
        },
        {
          heading: "Sample question: Improve the personalization engine",
          body: `**"How would you improve Enginy's personalization engine?"**\n\nStrong answer structure:\n\n**1. Clarify the goal**: "Are we optimizing for reply rate, send volume, or quality at low confidence scores?"\n\n**2. Diagnose current state**: "I'd start by understanding where the engine underperforms — which prospect segments, which message types, which signal inputs correlate with poor outputs."\n\n**3. Identify root causes**: Signal quality (garbage in → garbage out), prompt design (the LLM isn't given the right context), tone calibration (messages sound AI-generated), or coverage gaps (some industries have sparse signal data).\n\n**4. Propose and prioritize**: "I'd focus first on signal quality — specifically, adding a confidence score to each signal so the engine can downweight stale or low-reliability inputs. This is upstream of everything else."\n\n**5. Define success metrics**: "Measure message edit rate before/after, and reply rate by signal confidence tier."`,
        },
        {
          heading: "Sample question: What would you build next?",
          body: `**"If you joined Enginy tomorrow and could build anything, what would it be?"**\n\nThis tests your product vision and understanding of the strategy. Strong answer elements:\n\n**Anchor to the moat**: "I'd build the closed-loop learning system — feeding CRM outcome data back into the ICP scoring and signal weighting model. Right now, Enginy generates leads and sends emails. But it doesn't know which leads actually converted into revenue. Adding that feedback loop would make the system smarter over time in a way no competitor can replicate without the same data."\n\n**Acknowledge the build cost**: "This is a significant engineering investment — it requires deep CRM integration, a training pipeline, and ongoing model evaluation. I'd sequence it as a 6-month project with a beta cohort of 10 enterprise customers."\n\n**Connect to the vision**: "Long-term, this is what makes Enginy a GTM brain, not just a GTM tool. The moat is the learning, not the features."`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "When answering a product sense question about Enginy's personalization engine, what should you clarify first?",
          options: [
            "How many engineers are available to work on it",
            "What the goal is — reply rate, send volume, or quality at low confidence scores",
            "Whether competitors have already built this",
            "What the CEO wants to prioritize",
          ],
          correct: 1,
          explanation: "Clarifying the optimization goal prevents you from solving the wrong problem. Different goals lead to different solutions.",
        },
        {
          type: "fill-blank",
          prompt: "The most strategically valuable thing to build next at Enginy is a ________ learning system that feeds CRM outcome data back into the model.",
          blank: "closed-loop",
          hint: "The data loop that closes when outcomes flow back to inputs",
        },
        {
          type: "scenario",
          prompt: `Enginy asks: "How would you decide whether to add a new enrichment data source vs. improving the quality of existing sources?" Structure a clear answer.`,
          sampleAnswer: "I'd frame it as a coverage vs. accuracy tradeoff. Adding a new source improves coverage — it helps us enrich more contacts we currently can't. Improving existing sources improves accuracy — it reduces bounce rates, bad phone numbers, and stale titles. To decide: First, measure the gap. What's our current data completeness rate by field and by segment? If we're missing email for 40% of our ICP, coverage is the problem — add a source. If email completeness is 90% but bounce rate is 20%, accuracy is the problem — improve verification. Second, consider downstream impact. Accuracy problems propagate to Engage (deliverability). Coverage problems prevent outreach entirely. Both matter but accuracy problems are more damaging to the core product experience. Third, look at strategic fit — is this new source a data we can own exclusively or uniquely? Defensible data sources are worth more than commoditized ones.",
          keyPoints: ["Coverage vs. accuracy framing", "Measure the gap first (completeness + bounce rate)", "Accuracy problems propagate downstream — more damaging", "Defensive value of data source uniqueness"],
        },
      ],
      resources: [
        {
          title: "Lenny's Newsletter: How to Ace Product Sense Interviews",
          url: "https://www.lennysnewsletter.com/p/product-sense-interviews",
          description: "Recommended reading for this lesson.",
        },
        {
          title: "Exponent: Product Manager Interview Prep",
          url: "https://www.tryexponent.com/courses/product-manager",
          description: "Recommended reading for this lesson.",
        },
      ],
    },
    {
      id: "5-2",
      unitId: "unit5",
      companySlug: "enginy",
      title: "Discovery & Execution Scenarios",
      tldr: "Enginy will test your discovery process and execution instincts with situational questions. They want to see how you think under ambiguity, not just that you know the right frameworks.",
      skills: ["Discovery process", "Execution instincts", "Problem solving under ambiguity"],
      xp: 25,
      content: [
        {
          heading: "Discovery scenario: low NPS",
          body: `**"Our NPS dropped from 52 to 38 in Q3. What do you do?"**\n\nStrong answer:\n\n**1. Don't panic or jump to solutions.** "First, I'd verify the data — is the sample size statistically meaningful? Was the survey methodology consistent with Q2?"\n\n**2. Segment the data.** "I'd break NPS by customer segment (size, use case, tenure), by product area (Find vs. Engage vs. Integrations), and by geography. A 14-point drop across all segments is a different problem than a drop concentrated in new customers or a specific feature."\n\n**3. Identify leading indicators.** "Has support ticket volume spiked? Have any large customers flagged concerns? Did we ship anything major in Q3 that could have degraded experience?"\n\n**4. Run rapid research.** "I'd call the 10 customers with the lowest scores directly. Not a survey — a conversation. In 48 hours I'd have a hypothesis."\n\n**5. Report back with evidence.** "Within a week, I'd have a root cause hypothesis and a proposed response, not just a list of things to investigate."`,
          goAnalogy: {
            term: "Komi",
            reading: "コミ",
            meaning: "The compensation points given to white for the disadvantage of moving second. NPS drops are a komi situation — you're starting from behind and must work systematically to compensate, not just react emotionally.",
          },
        },
        {
          heading: "Execution scenario: competing deadlines",
          body: `**"You have a commitment to ship the LinkedIn enrichment source by end of quarter, but mid-quarter you discover a critical CRM sync bug affecting 15 enterprise customers. What do you do?"**\n\nStrong answer:\n\n**1. Assess the bug first.** "How severe is 'critical'? Are customers losing data? Is sync failing silently? Is there a workaround?"\n\n**2. Don't make unilateral decisions.** "I'd loop in engineering lead and VP of Product within the hour. This is a scope change with cross-functional impact."\n\n**3. Be transparent with stakeholders.** "The 15 enterprise customers need communication — even if we don't have a fix. 'We're aware and working on it' buys goodwill that silence destroys."\n\n**4. Evaluate the tradeoff explicitly.** "Can we staff the bug fix without pulling LinkedIn enrichment off track? Can we scope down LinkedIn enrichment to ship a lighter version on time while fixing the bug? Or do we formally re-scope the LinkedIn commitment?"\n\n**5. Own the decision and communicate it.** "I'd recommend fixing the CRM bug first, delay LinkedIn enrichment by 2 weeks, communicate proactively to any internal stakeholder who made plans around the LinkedIn date."`,
        },
        {
          heading: "Ambiguity scenario: no data",
          body: `**"A customer says they're 'not getting value' from Enginy. You have no data beyond that. What do you do?"**\n\nThis tests whether you default to assumptions or to discovery:\n\n**Weak answer**: "I'd add more features to the enrichment layer and improve the onboarding flow."\n\n**Strong answer**: "First, I call them. 'Not getting value' means different things — they might be struggling with setup, targeting the wrong ICP, not using the personalization engine, or comparing to a competitor's specific feature. The conversation takes 20 minutes and reveals the real problem.\n\nIf the call reveals a product gap: I add it to the discovery backlog and assess frequency (is this one customer or many?). If it reveals a usage gap: I loop in CS for onboarding support. If it reveals a wrong expectation set during sales: I flag it to the sales team and consider what to add to the qualification process."\n\nThe pattern: don't assume. The answer is in the conversation.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "When Enginy's NPS drops, what should you do FIRST before proposing solutions?",
          options: [
            "Launch a new feature to distract customers",
            "Segment the data to identify if the drop is broad or concentrated in a specific area",
            "Send a survey to all customers asking why",
            "Escalate to the CEO",
          ],
          correct: 1,
          explanation: "Segmenting NPS data reveals whether the problem is systemic or specific — which completely changes the solution approach.",
        },
        {
          type: "fill-blank",
          prompt: "When a customer says they're 'not getting value,' the first PM action is to ________ them — not assume and build.",
          blank: "call",
          hint: "The fastest way to discover what's actually wrong",
        },
        {
          type: "scenario",
          prompt: `Enginy's Head of Engineering says: "We can ship the new intent signal feature in 2 weeks, but the data quality will be lower than our standard. Do we ship?" How do you decide?`,
          sampleAnswer: "I'd reframe the question: what does 'lower quality' mean specifically, and what's the cost of that lower quality to the customer? If 'lower quality' means the signal is less timely (e.g., 7-day lag vs. 3-day), that's probably acceptable for a v1. If it means the signal generates false positives that cause reps to chase wrong leads, that could hurt reply rates and damage trust in the product more than a 2-week delay would. I'd ask: can we ship to a limited beta cohort first? That lets us learn from real usage without exposing all customers to quality risk. And I'd set explicit quality gates: if false positive rate exceeds X% in beta, we don't expand. Speed is a feature at seed stage — but not at the cost of trust in a product that lives or dies on data quality.",
          keyPoints: ["Reframe: what does 'lower quality' actually mean?", "Different quality degradations have different cost/risk profiles", "Beta cohort as risk mitigation", "Quality gates before full rollout", "Speed is valuable but trust in data quality is the product's foundation"],
        },
      ],
      resources: [
        {
          title: "Gibson Biddle: How to Answer 'How Would You Improve X'",
          url: "https://gibsonbiddle.medium.com",
          description: "Recommended reading for this lesson.",
        },
        {
          title: "SVPG: Discovery vs. Delivery",
          url: "https://www.svpg.com/discovery-vs-delivery/",
          description: "Recommended reading for this lesson.",
        },
      ],
    },
    {
      id: "5-3",
      unitId: "unit5",
      companySlug: "enginy",
      title: "STAR Stories — Senior PM Edition",
      tldr: "Prepare 5 STAR stories that map to Enginy's values and the JD requirements. Each story should have a clear AI or data angle where possible.",
      skills: ["Behavioral interviews", "STAR framework", "Storytelling"],
      xp: 25,
      content: [
        {
          heading: "The 5 stories you need",
          body: `Based on the Enginy JD and values, prepare these five STAR stories:\n\n**Story 1: Owned a product end-to-end** (maps to "proven end-to-end product ownership")\nA product you took from discovery to launch to iteration with measurable outcome. Best if it involves AI or data.\n\n**Story 2: Changed the roadmap from customer insight** (maps to "customer-obsessed")\nA time a customer conversation directly changed what you built. Specific customer, specific insight, specific change.\n\n**Story 3: Navigated competing priorities** (maps to "teamwork" + "strong prioritization")\nA time you had to choose between two legitimate priorities and made a defensible call. Include how you communicated it.\n\n**Story 4: Used AI tools to improve your workflow** (maps to "use AI tools to improve workflows")\nThe JD explicitly mentions this. Have a real example of AI-assisted PM work — research synthesis, spec writing, data analysis, prototype testing.\n\n**Story 5: Shipped something despite uncertainty** (maps to "fast-paced environments" + "work hard your way")\nA time you didn't have perfect data but made a call and shipped. Include what you learned and how you iterated.`,
          goAnalogy: {
            term: "Nobi",
            reading: "のび",
            meaning: "Extension — building on an existing strong position to expand territory. Your STAR stories are nobi: each one extends your professional position into new territory, showing the interviewer where your strengths compound.",
          },
        },
        {
          heading: "Story 4 deep dive: AI in your PM workflow",
          body: `This story matters more at Enginy than at most companies. The JD says: "Use AI tools to improve workflows and execution speed." They're building an AI-native company and want PMs who practice what they preach.\n\nExamples of strong AI-workflow stories:\n\n**Synthesis at scale**: "I used Claude to synthesize 200+ user interviews into a structured problem map in 2 days instead of 2 weeks. This let us make a roadmap decision a month earlier than planned."\n\n**Spec generation**: "I used AI to generate a first-draft PRD from a structured brief, then iterated with engineering. Reduced spec-to-alignment time by 40%."\n\n**Competitive analysis**: "I built a prompt-based workflow to monitor competitor feature releases weekly, summarized into a 1-page digest for the team."\n\n**Prototype testing**: "I used AI to generate 10 variations of onboarding copy for an A/B test in 30 minutes instead of briefing a copywriter."\n\nThe story should show: problem → AI approach → time/quality saved → team impact. Not just "I use ChatGPT sometimes."`,
        },
        {
          heading: "Making your stories land",
          body: `Structural tips for Enginy specifically:\n\n**Be specific about numbers** — "Reply rate improved" is weak. "Reply rate improved from 12% to 31% over 6 weeks" is strong. If you don't have exact numbers, use ranges or relative comparisons.\n\n**Show the uncertainty** — At seed stage, decisions are made with imperfect data. Stories that show you made a good decision with incomplete information are more relevant than stories where everything was clear.\n\n**Mention team impact, not just your contribution** — The "teamwork" value means they want collaborative ownership stories. "I led a cross-functional team of 5 that shipped X" lands better than "I single-handedly built Y."\n\n**AI lens on every story** — Even if the story isn't AI-specific, connect it: "In hindsight, this is the kind of problem that today I'd approach with AI-assisted synthesis to move faster."\n\n**Practice out loud** — Stories that sound great in writing often run long or lose structure when spoken. Time yourself: aim for 2-3 minutes per story.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Why is the 'AI tools in your workflow' story especially important at Enginy compared to other companies?",
          options: [
            "Enginy is an AI company and would be concerned if a PM candidate doesn't use AI tools themselves",
            "The interviewer needs to learn how to use AI tools",
            "It's a requirement to pass the technical screening",
            "Enginy will ask you to train their AI model",
          ],
          correct: 0,
          explanation: "The JD explicitly mentions 'use AI tools to improve workflows.' Enginy is AI-native — a PM who doesn't use AI in their own work is a culture mismatch signal.",
        },
        {
          type: "fill-blank",
          prompt: "In a STAR story, stories that show you made a good decision with ________ information are most relevant to a seed-stage company.",
          blank: "incomplete",
          hint: "Seed stage means making calls without perfect data",
        },
        {
          type: "scenario",
          prompt: `Draft your STAR story for: "Tell me about a time you changed the roadmap based on a customer conversation." Use the structure: Situation → Task → Action → Result. Make it specific.`,
          sampleAnswer: "Situation: At [company], we had planned to launch a bulk export feature for Q2. It was on the roadmap, engineering had estimated it, and stakeholders expected it. Task: I was running regular customer calls — my standing practice of 3 calls per week. Action: In a call with a customer who was churning, I asked what we could have done differently. She said she wasn't using most of the features — she just needed to know which of her leads had recently changed jobs. This was a feature we'd never prioritized. I ran a quick survey to our top 20 customers. 14 of 20 said job change signals would be more valuable than any other feature on our roadmap. Result: I pushed back the bulk export by 6 weeks, added job change signal enrichment, and launched it to beta. Within 8 weeks, weekly active usage increased 34% among the beta cohort. The bulk export shipped in Q3 with no customer complaints about the delay.",
          keyPoints: ["Specific customer and specific insight", "Validated with broader survey before changing roadmap", "Quantified impact (34% WAU increase)", "Shows willingness to push back on existing plans with evidence"],
        },
      ],
      resources: [
        {
          title: "Lenny's Newsletter: Behavioral Interview Prep",
          url: "https://www.lennysnewsletter.com/p/behavioral-interview-questions-product-manager",
          description: "Recommended reading for this lesson.",
        },
        {
          title: "The PM Interview: STAR Method Guide",
          url: "https://thepminterview.com",
          description: "Recommended reading for this lesson.",
        },
      ],
    },
    {
      id: "5-4",
      unitId: "unit5",
      companySlug: "enginy",
      title: "Questions to Ask Them",
      tldr: "The questions you ask in an interview signal your level of preparation and strategic thinking as much as your answers do. These are the right questions for Enginy.",
      skills: ["Interview strategy", "Due diligence", "Strategic curiosity"],
      xp: 15,
      content: [
        {
          heading: "Questions about the product and strategy",
          body: `These questions show you've done deep homework and think like a strategic PM:\n\n**"What does the feedback loop between CRM outcome data and the ICP scoring model look like today — and where is it weakest?"**\nThis shows you understand the closed-loop strategy and are thinking about where the moat compounds.\n\n**"Which enrichment sources have you found most reliable for European prospects, given GDPR constraints?"**\nShows geographic awareness and operational PM thinking.\n\n**"How do you measure personalization quality today — and what does the improvement roadmap look like?"**\nProbes whether they have a rigorous model quality framework or are relying on lagging indicators like reply rate.\n\n**"What's the biggest product bet you're making in the next 6 months that isn't obviously right?"**\nTests whether leadership has genuine conviction or is just optimizing incrementally.`,
          goAnalogy: {
            term: "Aji",
            reading: "アジ",
            meaning: "Latent potential that hasn't been activated yet. Good interview questions reveal aji — hidden dimensions of the company, team, and role that weren't visible in the job description.",
          },
        },
        {
          heading: "Questions about the role and team",
          body: `These questions show you're thinking seriously about fit and growth:\n\n**"What does the PM team structure look like, and how does the Senior PM role collaborate with the VP of Product?"**\nClarifies reporting, autonomy, and decision rights.\n\n**"What's the biggest product decision you made in the last 6 months that you'd make differently now?"**\nReveals organizational learning culture and founder honesty.\n\n**"How does the product team work with the GTM team — specifically, how do you gather signal from sales and CS systematically?"**\nShows you've thought about the discovery process and customer proximity.\n\n**"What does success look like for this role in the first 6 months — and what would make you say 'that was the right hire'?"**\nSets clear expectations and shows you want to be held accountable.`,
        },
        {
          heading: "Questions to avoid",
          body: `Avoid questions that signal you haven't done your homework or are overly focused on compensation/logistics:\n\n**Don't ask**: "What does Enginy do?" — You should know this cold.\n\n**Don't ask**: "What are the main competitors?" — You should have a view on this, not be asking them.\n\n**Don't ask**: "What's the salary range?" — Save this for the recruiter/offer stage, not the PM interview.\n\n**Don't ask**: "Do you have good work-life balance?" — Too vague and signals the wrong priorities for a seed startup.\n\n**Good format**: End with 2-3 sharp questions, not 10. Prioritize the ones that genuinely inform your decision to take the role — not performance questions designed to impress. Interviewers can tell the difference.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Why is asking 'What's the biggest product bet you're making that isn't obviously right?' a strong interview question?",
          options: [
            "It makes the interviewer uncomfortable, which shows confidence",
            "It tests whether leadership has genuine strategic conviction or is only making safe, incremental bets",
            "It's a standard question from the PM interview prep playbook",
            "It signals that you've already identified problems with the roadmap",
          ],
          correct: 1,
          explanation: "This question reveals whether the company has a real strategic hypothesis or is just reacting to market noise — critical information for evaluating whether to join.",
        },
        {
          type: "fill-blank",
          prompt: "You should end an interview with ________ sharp questions, not ten — and prioritize those that genuinely inform your decision to join.",
          blank: "2-3",
          hint: "Quality over quantity — a specific small number",
        },
        {
          type: "scenario",
          prompt: `You're at the end of your final round interview at Enginy. You have 5 minutes for questions. Which 2 questions do you ask and why?`,
          sampleAnswer: "Question 1: 'What does the feedback loop between CRM outcome data and the personalization model look like today — and where do you see the biggest gap?' I ask this because it probes the core strategic moat I'd be working on. Their answer tells me how mature their thinking is, whether they've invested in the infrastructure, and where my leverage would be highest. Question 2: 'What would make you say in 6 months that this was the right hire?' I ask this because it sets explicit expectations upfront and signals I want to be held accountable. It also reveals what they actually value — if they say 'you shipped a lot of features,' that's different from 'you improved the personalization model quality by X' or 'you built the CS feedback loop we've been missing.' Both questions are strategic, show deep product thinking, and help me decide whether to accept an offer.",
          keyPoints: ["Both questions reveal strategic priorities, not just facts", "First question probes the moat they need to build", "Second question sets accountability expectations", "Explain your reasoning — shows meta-awareness about the interview process"],
        },
      ],
      resources: [
        {
          title: "Lenny's Newsletter: Questions to Ask in PM Interviews",
          url: "https://www.lennysnewsletter.com/p/questions-to-ask-pm-interview",
          description: "Recommended reading for this lesson.",
        },
        {
          title: "First Round Review: How to Interview Your Interviewers",
          url: "https://review.firstround.com/how-to-interview-your-interviewers/",
          description: "Recommended reading for this lesson.",
        },
      ],
    },
  ],
};
