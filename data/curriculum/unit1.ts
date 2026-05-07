import type { Unit } from "@/data/types";

export const unit1: Unit = {
  id: "unit1",
  companySlug: "boostdraft",
  title: "Extending Your Stone",
  description: "Understand what makes an AI PM different — and how your PM skills are already a strong foundation to build on.",
  goTerm: "Nobi",
  goReading: "のび",
  goMeaning: "A move played directly next to your own stone to extend it. You already have a stone on the board — this unit helps you extend it into AI territory.",
  color: "neon",
  lessons: [
    {
      id: "1-1",
      unitId: "unit1",
      companySlug: "boostdraft",
      title: "What Makes an AI PM Different",
      tldr: "An AI PM does everything a traditional PM does — plus owns the model, data, and uncertainty layers that traditional software doesn't have.",
      skills: ["AI product thinking", "Role clarity", "PM self-assessment"],
      xp: 20,
      content: [
        {
          heading: "You're not starting over",
          body: "Being a PM already gives you the most critical AI PM skill: **user empathy**. You know how to translate user pain into product requirements. The delta between PM and AI PM is not as large as it looks from the outside.\n\nThe difference is that AI products have **three extra layers** that traditional software doesn't: a model layer (what algorithm or model runs?), a data layer (what training data shapes behavior?), and an **uncertainty layer** (what happens when the model is wrong?).\n\nAt GhostDraft, these layers are all NLP-based. There's no LLM involved — the product works with rule-based and statistical language models that are highly predictable. That's actually a **deliberate product decision**, not a gap.",
          goAnalogy: {
            term: "Nobi",
            reading: "のび",
            meaning: "In Go, a nobi is the most natural extension move — you play adjacent to your own stone. As a PM, your existing stones (user empathy, roadmapping, stakeholder management) are already on the board. AI PM is just your nobi.",
          },
        },
        {
          heading: "The 5 extra muscles AI PMs need",
          body: "Traditional PM skills transfer directly. But there are 5 new muscles to develop:\n\n**1. Model literacy** — You don't need to code, but you need to understand what a model can and can't do, and why it fails.\n\n**2. Data intuition** — Where does the training data come from? What biases does it carry? How does it affect output quality?\n\n**3. Failure mode thinking** — AI fails differently than software. A crash is obvious. A hallucination or biased output is subtle and often goes undetected.\n\n**4. Evaluation design** — How do you measure if the AI got better? You need metrics beyond traditional conversion or NPS.\n\n**5. Human-in-the-loop (HITL) design** — When should the human override the AI? How do you design that handoff gracefully?",
        },
        {
          heading: "Why GhostDraft cares about all five",
          body: "GhostDraft's JD explicitly asks for experience with **human-in-the-loop design**, **failure modes**, **evaluation/QA**, and **AI feasibility assessment**. These aren't buzzwords — they're the actual daily work of an AI PM in a legal document context.\n\nLegal documents have **zero tolerance for hallucination**. A contract clause that's subtly wrong can cost millions. GhostDraft chose NLP over LLMs precisely because the failure modes of LLMs are too unpredictable for legal use. Understanding this tradeoff is core to the role.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "GhostDraft's product uses NLP instead of LLMs. What is the PRIMARY reason stated for this choice?",
          options: [
            "NLP models are cheaper to run at scale",
            "LLMs have unpredictable failure modes including hallucinations, which are unacceptable in legal documents",
            "LLMs require too much training data",
            "NLP is faster to ship as a Word add-in",
          ],
          correct: 1,
          explanation: "GhostDraft explicitly states on their website: 'We don't integrate generative AI at this point due to security concerns and the risk of AI hallucinations.' In legal documents, a subtle error can have severe consequences — making predictability more valuable than capability.",
        },
        {
          type: "fill-blank",
          prompt: "The three extra layers an AI product has that traditional software doesn't are: model, data, and ___.",
          blank: "uncertainty",
          hint: "Think about what's unique about AI output vs. deterministic code...",
        },
        {
          type: "scenario",
          prompt: "A GhostDraft interviewer asks: 'Tell me about a time you made a product decision under uncertainty.' How would you frame this to highlight AI PM readiness, even if your example is from a non-AI product?",
          sampleAnswer: "I'd frame it around the HITL principle: I made a decision where user trust was at stake, and I designed a way for the human to stay in control of the outcome. For example: [your example] — then connect it to AI: 'This same instinct applies to AI features. I'd design confidence thresholds and clear override paths so users always feel in control, especially in high-stakes domains like legal documents.'",
          keyPoints: [
            "Acknowledges uncertainty as a product design challenge, not just a technical one",
            "Shows user trust and safety as the core concern",
            "Bridges non-AI experience to AI context explicitly",
            "Mentions human oversight / ability to override",
          ],
        },
      ],
      resources: [
        {
          title: "AI PM vs. PM: What's Actually Different",
          url: "https://lenny.substack.com/p/ai-product-management",
          description: "Lenny Rachitsky's breakdown of what changes when you add AI to the PM role.",
        },
        {
          title: "GhostDraft — Why No Generative AI",
          url: "https://boostdraft.com",
          description: "GhostDraft's own explanation of their NLP-over-LLM choice — read their product page directly.",
        },
      ],
    },
    {
      id: "1-2",
      unitId: "unit1",
      companySlug: "boostdraft",
      title: "The AI Product Lifecycle",
      tldr: "AI products have a different build → ship → improve loop. Data and model quality are never 'done' — they iterate continuously, and the PM owns that loop.",
      skills: ["AI lifecycle ownership", "Iteration frameworks", "Roadmap thinking for AI"],
      xp: 20,
      content: [
        {
          heading: "The traditional PM loop doesn't fully apply",
          body: "Traditional product development: define → design → build → ship → measure → iterate. Clean and linear.\n\nAI products break this loop in two ways:\n\n**1. You ship a model, not just a feature.** The model is continuously retrained on new data. The product behavior can change between releases without any code change.\n\n**2. Measurement is harder.** How do you measure whether a smart autocomplete got 'better'? You need specialized evaluation pipelines, not just A/B tests.",
          goAnalogy: {
            term: "Ko",
            reading: "コウ",
            meaning: "In Go, a Ko is a situation that repeats — the same position keeps recurring. AI products can feel like Ko: you keep revisiting the same data quality problems, the same model edge cases. The PM's job is to break the cycle by improving the training data or evaluation process.",
          },
        },
        {
          heading: "The AI PM loop",
          body: "**Define** → **Data** → **Model** → **Evaluate** → **Ship** → **Monitor** → **Feedback** → back to **Data**.\n\nThe key additions vs. traditional PM:\n\n- **Data** step: Before you can build a model, you need labeled training data. The PM often has to define what 'correct' looks like — writing annotation guidelines, working with legal experts to label contract clauses.\n\n- **Evaluate** step: Does the model meet the quality bar for launch? What's the precision/recall? Who reviews model outputs before users see them?\n\n- **Monitor** step: After launch, the model encounters real-world inputs it was never trained on. The PM sets up monitoring for failure modes and degradation.\n\n- **Feedback** loop: User corrections, rejections, and edge cases flow back into the training pipeline. The PM decides what gets prioritized.",
        },
        {
          heading: "What this means at GhostDraft",
          body: "GhostDraft's proofreading and autocomplete features run on models that need to understand legal language patterns. The PM role involves:\n\n- Working with legal domain experts to define what 'correct' contract language looks like\n- Defining quality thresholds (e.g., minimum precision before enabling a suggestion)\n- Designing how user feedback (accepting/rejecting suggestions) feeds back into model improvement\n- Partnering with engineering to evaluate when NLP is the right tool vs. a simpler rule-based approach\n\nThis is what the JD means by **'evaluate AI vs. non-AI feasibility'** — not every problem needs a model.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "In the AI product lifecycle, what is the PRIMARY role of the 'Monitor' step after launch?",
          options: [
            "Measure DAU and retention metrics",
            "Detect when the model encounters real-world inputs it wasn't trained on, and catch quality degradation",
            "Write sprint retrospectives for the engineering team",
            "Run A/B tests on UI variations",
          ],
          correct: 1,
          explanation: "Post-launch monitoring for AI products focuses on model behavior in the wild — finding edge cases, distribution shifts, and quality degradation that weren't visible in offline evaluation. DAU/retention matter too, but they're secondary to catching when the AI goes wrong.",
        },
        {
          type: "fill-blank",
          prompt: "In the AI PM lifecycle, user corrections and rejected suggestions flow back into the ___ pipeline to improve the model over time.",
          blank: "training",
          hint: "Where does a model learn from examples?",
        },
        {
          type: "scenario",
          prompt: "GhostDraft's proofreading model starts showing a higher error rate on Japanese contracts after a model update. As the AI PM, what are the first three steps you take?",
          sampleAnswer: "1. Immediately check whether the issue is isolated to Japanese or affects all languages — use monitoring dashboards to scope the blast radius. 2. Work with engineering to determine if this is a data distribution shift (new Japanese contract styles not in training data) or a regression from the model update. 3. If confirmed regression, coordinate a rollback decision with engineering while a fix is prepared. Don't wait for a full root cause before communicating to stakeholders.",
          keyPoints: [
            "Scopes the impact before escalating",
            "Distinguishes between data issues and model regressions",
            "Considers rollback as a valid option",
            "Balances speed of response with accuracy of diagnosis",
          ],
        },
      ],
      resources: [
        {
          title: "The ML Product Lifecycle — Google",
          url: "https://developers.google.com/machine-learning/guides/rules-of-ml",
          description: "Google's Rules of ML: practical guidance on the ML development lifecycle from people who've shipped at scale.",
        },
        {
          title: "AI Product Evaluation Frameworks",
          url: "https://www.honeycomb.io/blog/how-to-evaluate-ai-features",
          description: "How teams design evaluation frameworks for AI features in production.",
        },
      ],
    },
    {
      id: "1-3",
      unitId: "unit1",
      companySlug: "boostdraft",
      title: "Reading a JD Like an AI PM",
      tldr: "Every AI PM job description hides a product strategy inside it. Learn to decode what GhostDraft's JD is really asking for.",
      skills: ["JD analysis", "Signal detection", "Interview positioning"],
      xp: 25,
      content: [
        {
          heading: "JDs are product documents in disguise",
          body: "A job description is a requirements document. The hiring manager wrote it to describe their biggest problems — and they're looking for someone who can solve them. An AI PM reads a JD the same way they read user research: what's the underlying need beneath the surface request?\n\nGhostDraft's JD has five high-signal phrases that reveal exactly what they're struggling with.",
        },
        {
          heading: "Signal 1: 'Human-in-the-loop design'",
          body: "This phrase means they've shipped AI features that users don't fully trust yet, or they're about to. They need someone who designs **graceful handoffs** between AI suggestions and human judgment.\n\nIn legal documents, this is critical: a lawyer cannot blindly accept an AI's clause suggestion. The UX must make it easy to review, modify, or reject AI output. The PM defines the confidence thresholds, the review UI, and how feedback is captured.",
        },
        {
          heading: "Signal 2: 'Evaluation/QA and iteration based on user feedback'",
          body: "This tells you they **don't have a mature eval pipeline yet** — or they need someone to own it as the product scales. They need a PM who can define what 'good' looks like for AI outputs, build feedback loops from real users, and turn that signal into model improvements.\n\nThis is distinct from traditional QA. You're not testing for bugs — you're testing for model quality and failure modes.",
        },
        {
          heading: "Signal 3: 'Evaluate AI vs. non-AI feasibility'",
          body: "This is one of the most important AI PM skills: **knowing when NOT to use AI**. It's a signal that GhostDraft has felt the pull of over-engineering — adding AI where a simpler rule would work better, or vice versa.\n\nThe PM who can walk into a sprint planning session and say 'this feature doesn't need a model, let's use a regex' is incredibly valuable. It saves engineering time and produces more reliable features.",
          goAnalogy: {
            term: "Tenuki",
            reading: "てぬき",
            meaning: "In Go, tenuki means playing somewhere else entirely — ignoring a local threat because there's a bigger opportunity elsewhere. Knowing when to NOT use AI is the product version of tenuki: sometimes the board-wide position (simplicity, reliability) matters more than the local move (adding AI).",
          },
        },
        {
          heading: "Signal 4: 'Privacy, security, and reliability'",
          body: "Legal documents are extremely sensitive. Contracts contain trade secrets, financial terms, and confidential negotiations. GhostDraft's product running **locally without internet** is a deliberate security feature, not a limitation.\n\nThe PM needs to understand how AI model updates are deployed without exposing user data, how the training pipeline avoids using customer documents, and how to communicate security posture to enterprise buyers.",
        },
        {
          heading: "Signal 5: 'System design collaboration with engineers'",
          body: "This means they want a PM who **speaks enough engineering** to be a real partner in technical tradeoffs — not a ticket-writer who hands off requirements and waits. You need to understand model latency, the cost of retraining, and how a new feature might degrade model performance.\n\nYou don't need to code. You need to understand the system well enough to ask the right questions.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "GhostDraft's product runs locally without an internet connection. From an AI PM perspective, what does this primarily signal?",
          options: [
            "The engineering team hasn't built cloud infrastructure yet",
            "It's a deliberate security feature for enterprise legal customers who cannot send sensitive documents to external servers",
            "The NLP models are too large to run in the cloud",
            "It's a cost-saving measure to avoid server expenses",
          ],
          correct: 1,
          explanation: "Enterprise legal customers — law firms and in-house counsel — work with highly sensitive documents. Sending contract data to an external server is a non-starter for many legal departments. Local operation is a product feature, not a technical limitation. An AI PM at GhostDraft needs to understand this constraint deeply when evaluating any future feature that requires cloud processing.",
        },
        {
          type: "fill-blank",
          prompt: "The JD phrase 'evaluate AI vs. non-AI feasibility' signals that GhostDraft needs a PM who knows when ___ to use AI, not just when to use it.",
          blank: "not",
          hint: "Sometimes the best tool is the simplest one...",
        },
        {
          type: "scenario",
          prompt: "In your GhostDraft interview, you're asked: 'What's an example of a product decision where you chose a simpler solution over an AI-powered one?' How do you answer this, and what principles does your answer demonstrate?",
          sampleAnswer: "I'd describe a situation where I pushed back on adding an ML model to something that could be solved with a rule or a simple heuristic — for example, validating document formatting with regex instead of training a classifier. The key principles to demonstrate: 1) I understand the cost of AI (training data, latency, maintenance) vs. rules (deterministic, fast, no data needed). 2) I used a feasibility framework: precision requirement, data availability, latency budget, and failure mode tolerance. 3) I made the call in collaboration with engineering, not unilaterally.",
          keyPoints: [
            "Shows awareness that AI has real costs: data, latency, maintenance",
            "Demonstrates a framework for the AI vs. non-AI decision",
            "Proves comfort with 'no AI' as a valid PM recommendation",
            "Shows collaborative decision-making with engineering",
          ],
        },
      ],
      resources: [
        {
          title: "How to Read a PM Job Description",
          url: "https://www.lennysnewsletter.com/p/how-to-get-a-product-management-job",
          description: "Lenny's guide to decoding what a JD really asks for beneath the surface.",
        },
        {
          title: "GhostDraft Product Page",
          url: "https://boostdraft.com",
          description: "Read the product description yourself — every feature maps to a JD requirement.",
        },
      ],
    },
  ],
};
