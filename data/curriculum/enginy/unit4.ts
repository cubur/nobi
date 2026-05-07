import type { Unit } from "@/data/types";

export const enginyUnit4: Unit = {
  id: "unit4",
  title: "The Role — Senior PM at Enginy",
  description: "What the job actually requires: owning the roadmap, Enginy's 6 values in practice, and the competitive context you'll be operating in.",
  companySlug: "enginy",
  goTerm: "Sente",
  goReading: "せんて",
  goMeaning: "Having the initiative — forcing your opponent to respond. A Senior PM at Enginy must maintain sente: always driving the agenda, not reacting to noise.",
  color: "crimson",
  lessons: [
    {
      id: "4-1",
      unitId: "unit4",
      companySlug: "enginy",
      title: "What 'Own the Product' Means at Seed Stage",
      tldr: "Owning the product at a €5M seed startup means full ownership with high autonomy — but also high ambiguity, constant context-switching, and direct accountability to founders. This is different from 'owning a feature area' at a Series B.",
      skills: ["Product ownership", "Seed-stage PM", "Autonomy and accountability"],
      xp: 20,
      content: [
        {
          heading: "The scope of ownership at Enginy",
          body: `The job description says: "Own product strategy and execution — driving initiatives from discovery to delivery." At a seed-stage company with ~95 people, this is genuinely broad:\n\n**Strategy**: Setting the roadmap direction, sequencing major bets, deciding where the product goes next quarter and next year.\n\n**Discovery**: Running your own user research — not waiting for a dedicated UX researcher (there may not be one).\n\n**Execution**: Writing specs, unblocking engineering, reviewing shipped features, driving QA on critical paths.\n\n**Measurement**: Defining success metrics, building dashboards, analyzing outcomes post-launch.\n\nThis is 4 jobs at a larger company. The expectation is that you move fluidly between all of them in a single day.`,
          goAnalogy: {
            term: "Shicho",
            reading: "しちょう",
            meaning: "A ladder sequence where a stone is pursued across the board — if you start it wrong, you lose everywhere. Owning product at seed stage is shicho: the decisions you make in month 1 set up sequences that play out for years. Get the initial direction wrong and you're chasing losses.",
          },
        },
        {
          heading: "High autonomy, high accountability",
          body: `The job description emphasizes "proven end-to-end product ownership with high autonomy." At Enginy, this means:\n\n**No hand-holding on process** — You define your own discovery approach, your own spec format, your own launch checklist. There's no established PM playbook to follow.\n\n**Direct access to founders** — Kai Brandt (CEO) and Jaume Puig (CTO) are close. Your roadmap decisions are visible to them. Good for speed; challenging for political navigation.\n\n**Fast feedback cycles** — Features ship faster than at a larger company. You'll know in 2 weeks if something worked. This is energizing but also means you're constantly re-evaluating.\n\n**Accountability without excuses** — If the personalization engine underperforms, you own that. Not engineering, not design, not data. The PM owns outcomes.`,
        },
        {
          heading: "The 30-60-90 day expectation",
          body: `What does a strong first 90 days look like at Enginy?\n\n**Days 1-30**: Listen and map. Understand the full product, every integration, every customer complaint. Don't propose solutions yet. Build relationships with engineering, design, CS, and the founders.\n\n**Days 31-60**: Diagnose and propose. Identify the top 3 product gaps. Present a prioritized view of "what's broken, what's missing, what's next" with evidence. Get alignment.\n\n**Days 61-90**: Ship something. Own one initiative end-to-end — discovery, spec, launch, measurement. Establish your operating rhythm with engineering and design. Start building the metric framework.\n\nThe JD specifically says "identify risks, remove blockers, keep teams moving" — that starts in week 1, not day 90.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "At a seed-stage company like Enginy, 'PM with high autonomy' most likely means:",
          options: [
            "You can work from home whenever you want",
            "You define your own research process, spec format, and launch approach without an established PM playbook",
            "You don't need to align with the founder on decisions",
            "You have a dedicated UX researcher and data analyst to support you",
          ],
          correct: 1,
          explanation: "High autonomy at seed stage means building your own process from scratch — there's no established playbook. This is both the opportunity and the challenge.",
        },
        {
          type: "fill-blank",
          prompt: "In the first 30 days, the most important PM behavior is to ________ — not propose solutions.",
          blank: "listen",
          hint: "Gather before you create",
        },
        {
          type: "scenario",
          prompt: `The CTO at Enginy asks you in week 2: "What do you think we should build next?" How do you respond?`,
          sampleAnswer: "I'd be honest: 'I'm still building my understanding — I've done X customer calls, reviewed the support ticket backlog, and mapped the current roadmap. I have early hypotheses but I want to validate them before recommending. Can we schedule 30 minutes at the end of week 3? I'll come with a prioritized view and the reasoning behind it.' This shows I'm moving fast, thinking rigorously, and not shooting from the hip. I wouldn't dodge the question entirely — I'd share what I've observed so far and what questions I'm actively trying to answer. If pressed for an immediate answer, I'd give my top hypothesis but explicitly label it as early-stage and subject to change.",
          keyPoints: ["Honest about timeline without being evasive", "Show what you've done in 2 weeks (calls, tickets, roadmap review)", "Give a concrete next step (week 3 meeting)", "If pressed, share hypothesis with appropriate uncertainty"],
        },
      ],
      resources: [
        {
          title: "Lenny's Newsletter: First 90 Days as PM",
          url: "https://www.lennysnewsletter.com/p/first-90-days-product-manager",
          description: "Recommended reading for this lesson.",
        },
        {
          title: "SVPG: The PM Role at Startups",
          url: "https://www.svpg.com/product-management-at-startups/",
          description: "Recommended reading for this lesson.",
        },
      ],
    },
    {
      id: "4-2",
      unitId: "unit4",
      companySlug: "enginy",
      title: "Enginy's 6 Values — What They Actually Test For",
      tldr: "Enginy's 6 company values aren't decoration. They're interview criteria. Understand what each value looks like in a PM context and prepare examples that demonstrate them.",
      skills: ["Company culture fit", "Values alignment", "Interview preparation"],
      xp: 20,
      content: [
        {
          heading: "Be Humble + Customer-Obsessed",
          body: `**Be Humble** — "Everyone contributes and learns; no ego."\n\nFor a PM this means: you don't have all the answers. You actively solicit input from engineering, CS, and customers. You change your mind when you see evidence. You give credit publicly.\n\nRed flags they're watching for: PMs who present their roadmap as unchallengeable, who talk about "my product" without acknowledging team input, or who dismiss CS feedback as noise.\n\n**Customer-Obsessed** — "All decisions start with customer needs."\n\nFor a PM this means: you can cite specific customer conversations to back every roadmap decision. You've done the calls. You track customer feedback systematically. You don't build from assumptions when you can validate.\n\nThey'll test this by asking: "Tell me about a time you changed the roadmap because of a customer conversation." Have a specific, detailed story ready.`,
          goAnalogy: {
            term: "Hoshi",
            reading: "ほし",
            meaning: "Star point — the balanced, influential positions on a Go board. Humility and customer obsession are the hoshi of Enginy's culture: they anchor everything else and create balance between internal intuition and external reality.",
          },
        },
        {
          heading: "Go Beyond the Product + Always Excel",
          body: `**Go Beyond the Product** — "Curiosity, emerging tech exploration."\n\nFor a PM at an AI-native company, this means staying ahead of the AI capability curve. What new models, APIs, or data sources could Enginy use? What are competitors building? You're expected to bring in external ideas proactively, not just optimize the current product.\n\nIn practice: follow AI GTM developments (Clay, Apollo, Outreach, Salesloft), test competitive tools personally, read research on LLM personalization quality, and bring a "what if we tried X" idea to the team regularly.\n\n**Always Excel** — "Commitment to industry-leading standards."\n\nFor a PM: you don't ship things that are "good enough." You have a high bar for quality — especially in AI outputs. This maps directly to the personalization engine: Enginy claims the highest reply rates in the category. Maintaining that claim requires the PM to push the model quality bar constantly.`,
        },
        {
          heading: "Teamwork + Work Hard Your Way",
          body: `**Teamwork Makes the Dream Work** — "Collaboration drives results."\n\nFor a PM: you're the connective tissue between engineering, design, GTM, and CS. The JD mentions "communicate clearly and build stakeholder trust." This is tested with behavioral questions: "Tell me about a time you had to align multiple teams with conflicting priorities." Prepare 2-3 examples.\n\n**Work Hard, Your Way** — "Individual flexibility in how work gets done."\n\nThis signals that Enginy doesn't micromanage process. They want someone who's self-directed and gets results without needing a prescribed workflow. The downside: no structure means you need to bring your own. They're testing for self-organization, not just productivity.\n\nNote the reality check: "5 days/week in Barcelona" in the job description. The work-from-home flexibility (48 days/year) is a benefit, but this is primarily an in-person culture. Embracing that is part of the cultural fit signal.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Enginy's value 'Go Beyond the Product' most likely means they want a PM who:",
          options: [
            "Works outside normal business hours",
            "Proactively explores emerging AI capabilities and competitive tools, bringing new ideas to the team without being asked",
            "Manages more than one product area",
            "Has a technical background in ML engineering",
          ],
          correct: 1,
          explanation: "At an AI-native company, 'going beyond the product' means staying ahead of the AI capability curve and proactively identifying opportunities before customers ask.",
        },
        {
          type: "fill-blank",
          prompt: "To demonstrate 'Customer-Obsessed' in an interview, you need a specific story about a time you changed the ________ because of a customer conversation.",
          blank: "roadmap",
          hint: "The PM's most important artifact",
        },
        {
          type: "scenario",
          prompt: `Enginy asks: "Give me an example of going beyond the product — a time you brought an external idea into your team that changed how you built something."\n\nStructure your answer using the STAR format with an AI-relevant example.`,
          sampleAnswer: "Situation: At [company], we were building a customer support AI that struggled with complex multi-step queries. Task: I was the PM responsible for improving resolution rate. Action: I was reading about chain-of-thought prompting in a research paper (not part of my job) and realized it might apply to our use case. I brought the paper to the team, ran a 2-week experiment applying CoT prompting to our most complex query categories. Result: Resolution rate on complex queries improved 22% without any model retraining. The broader impact: it changed how our team thought about prompting as a product lever, not just engineering config. Apply to Enginy: I'd bring the same mindset — regularly reading AI research, testing competitive tools, and bridging external developments to internal product decisions.",
          keyPoints: ["External source (not asked to look)", "Connected to a real product problem", "Ran an experiment (didn't just suggest)", "Quantified result", "Reflects on broader team impact"],
        },
      ],
      resources: [
        {
          title: "Enginy: About Us",
          url: "https://www.enginy.ai/resources/about-us",
          description: "Recommended reading for this lesson.",
        },
        {
          title: "First Round: The Values Interview",
          url: "https://review.firstround.com/the-values-interview",
          description: "Recommended reading for this lesson.",
        },
      ],
    },
    {
      id: "4-3",
      unitId: "unit4",
      companySlug: "enginy",
      title: "The Competitive Landscape",
      tldr: "Enginy competes with Apollo, Clay, Outreach, Salesloft, and Instantly. Know where Enginy wins, where it's behind, and how to talk about competitors without bashing them.",
      skills: ["Competitive analysis", "Product positioning", "Market awareness"],
      xp: 20,
      content: [
        {
          heading: "The competitive map",
          body: `The GTM AI space is crowded. Key competitors and how they compare to Enginy:\n\n**Apollo.io** — The closest full-stack competitor. Data + sequencing + CRM lite. Much larger (public, ~1000 employees). Enginy's edge: AI personalization quality and intent signal depth. Apollo is a database with outreach bolted on; Enginy is built as a unified intelligence platform.\n\n**Clay** — The hot prospecting/enrichment tool. Extremely flexible, developer-friendly waterfall enrichment. Loved by growth hackers. Not a sequencing tool — no Engage equivalent. Enginy is more all-in-one; Clay requires more technical setup.\n\n**Outreach / Salesloft** — Enterprise sales engagement platforms. Well-established, expensive, complex. Enginy targets SMB/mid-market and can win on simplicity, AI quality, and price. Enterprise sales requires features Enginy may not have yet.\n\n**Instantly / Lemlist** — Email-only sequencing tools. Cheaper, simpler, less data. Enginy has richer data and AI. If a customer says "I just need to send cold emails," these are alternatives.`,
          goAnalogy: {
            term: "Atari",
            reading: "アタリ",
            meaning: "A stone or group with only one liberty — one move from capture. Ignoring competitive moves that put you in atari is how you lose the game. Know which competitor is one move away from capturing your positioning.",
          },
        },
        {
          heading: "Where Enginy wins",
          body: `Enginy's differentiated positioning (based on their own claims and product analysis):\n\n**AI-native personalization** — Generating outreach from real intent signals, not templates. Reply rates of 45% vs. industry average of 8-10% is a bold claim but directionally right if signal quality is high.\n\n**Unified platform** — One tool for find + enrich + engage + CRM sync. Reduces the stack, reduces integration tax, reduces training time.\n\n**Speed to value** — A rep can go from ICP description to first email in under an hour. This is genuinely different from stitching together Clay + Apollo + Instantly + HubSpot.\n\n**Founder-led product quality** — At seed stage with two technical founders and a VP of Product, product quality tends to be high. This is a culture signal, not a feature.`,
        },
        {
          heading: "Talking about competitors in interviews",
          body: `A common interview question: "How does Enginy compare to Apollo?" Best practices:\n\n**Don't bash** — "Apollo's data is terrible" is unprofessional and inaccurate. Apollo has strong data.\n\n**Be specific** — "Apollo is a large database with outreach features. Enginy is an intelligence platform that uses AI to connect signals to action. Different jobs to be done for different maturity levels."\n\n**Show you've used them** — "I signed up for a Clay trial and tested the enrichment waterfall. Here's what I noticed…" This demonstrates the 'Go Beyond the Product' value and signals genuine curiosity.\n\n**Acknowledge gaps honestly** — "Enginy is earlier stage, so there are features Apollo has had for years that Enginy is still building. But the personalization quality and platform vision are differentiated in a way that matters for the next generation of GTM teams."`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "How does Enginy's positioning differ from Clay's?",
          options: [
            "Enginy is cheaper than Clay",
            "Clay is an all-in-one platform; Enginy is an enrichment-only tool",
            "Clay is a flexible enrichment tool without a sequencing layer; Enginy is an all-in-one platform with Find, Engage, and CRM sync",
            "Enginy targets enterprise; Clay targets SMB",
          ],
          correct: 2,
          explanation: "Clay is powerful for enrichment but requires separate tools for outreach. Enginy packages the full workflow — that's the positioning difference.",
        },
        {
          type: "fill-blank",
          prompt: "When asked about competitors in an interview, the best approach is to be ________ about where each tool excels rather than dismissing them.",
          blank: "specific",
          hint: "The opposite of vague or dismissive",
        },
        {
          type: "scenario",
          prompt: `An interviewer asks: "What do you think Enginy's biggest competitive risk is over the next 12 months?" How do you answer?`,
          sampleAnswer: "The biggest risk is Apollo closing the AI personalization gap. Apollo has 10x the data and significant R&D resources. If they invest in LLM-based personalization at scale, Enginy's core differentiation narrows. A second risk is Clay expanding into sequencing — if Clay launches an Engage-equivalent, their developer-beloved enrichment reputation combined with outreach could be a strong competitor at the prosumer/growth-hacker segment. My take on mitigation: Enginy's advantage is the closed data loop — the more customer outcome data they accumulate, the better the model gets in ways that Apollo can't replicate without the same GTM-specific training data. That moat compounds if the team invests in it now. I'd prioritize the feedback loop and CRM integration depth as defensive investments.",
          keyPoints: ["Apollo is the main threat (resources to close AI gap)", "Clay expansion into sequencing as second risk", "Closed data loop as the defensible moat", "Feedback loop investment as the answer"],
        },
      ],
      resources: [
        {
          title: "G2: Sales Intelligence Software Comparison",
          url: "https://www.g2.com/categories/sales-intelligence",
          description: "Recommended reading for this lesson.",
        },
        {
          title: "Clay vs. Apollo: A Practical Comparison",
          url: "https://www.clay.com/blog/clay-vs-apollo",
          description: "Recommended reading for this lesson.",
        },
      ],
    },
  ],
};
