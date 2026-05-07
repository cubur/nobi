import type { Unit } from "@/data/types";

export const unit5: Unit = {
  id: "unit5",
  companySlug: "boostdraft",
  title: "Owning the Product Strategy",
  description: "Understand GhostDraft's product strategy, evaluate the NLP→LLM migration question, and prepare your STAR stories for the AI PM interview.",
  goTerm: "Territory",
  goReading: "ち",
  goMeaning: "Territory is the secure area you control — where your stones are strong and the opponent cannot invade. GhostDraft's territory is legal NLP reliability. This unit teaches you to defend, expand, and articulate that territory.",
  color: "snow",
  lessons: [
    {
      id: "5-1",
      unitId: "unit5",
      companySlug: "boostdraft",
      title: "GhostDraft's Current Product — Deep Dive",
      tldr: "Every feature GhostDraft ships solves a specific, painful workflow problem for legal professionals. Understanding the product deeply is table stakes for the interview.",
      skills: ["Product analysis", "Feature-to-pain mapping", "Competitive positioning"],
      xp: 20,
      content: [
        {
          heading: "The product in one sentence",
          body: "GhostDraft is a **Microsoft Word add-in** that makes drafting and reviewing legal contracts faster and more accurate by catching errors, surfacing relevant information, and automating repetitive formatting tasks — all without the document leaving the user's machine.",
          goAnalogy: {
            term: "Hoshi",
            reading: "ほし",
            meaning: "Hoshi (star points) are the four strategic anchor points on a Go board. GhostDraft has four anchor features — definition lookup, smart formatting, cross-reference insertion, and proofreading — each occupying a star point in the legal document workflow.",
          },
        },
        {
          heading: "The four core features and the pain they solve",
          body: "**1. Definition/Reference Popup**\nPain: Lawyers spend enormous time scrolling back to find how a defined term was defined. 'Company' appears 200 times in a 100-page agreement — every time a junior associate needs to verify the definition, they scroll to page 3.\nSolution: Click any defined term → instant popup showing the definition. No scrolling. Saves minutes per review, hours per deal.\n\n**2. Smart Formatting**\nPain: After heavy redlining and clause reordering, numbering sequences get corrupted. Renumbering a 50-clause agreement manually is tedious and error-prone.\nSolution: One-click alignment of all numbering, indentation, and cross-references throughout the document.\n\n**3. Optimized Input Prediction (Cross-Reference Insertion)**\nPain: Typing cross-references manually is slow and error-prone. Writing 'as defined in Section 4.2(b) of the Master Services Agreement dated...' is tedious.\nSolution: As you type, the add-in suggests the correct cross-reference based on the document structure — one keystroke to insert.\n\n**4. Proofreading / Consistency Checking**\nPain: Defined terms used inconsistently, cross-references to deleted sections, capitalization errors — these are the kind of mistakes that slip through manual review and create ambiguity.\nSolution: Automated scan that flags inconsistencies with evidence (showing the two conflicting usages), not just 'possible error'.",
        },
        {
          heading: "What the Word add-in architecture means for PM",
          body: "Building inside Word has specific product implications you should understand for the interview:\n\n**Distribution**: Users install via the Office Add-in Store or enterprise deployment. No separate app to download. This reduces friction but means updates depend on Microsoft's deployment pipeline.\n\n**Permissions model**: The add-in requests access to the active document. It does not request cloud storage or network access — supporting the local-first security model.\n\n**UX constraints**: The add-in lives in a sidebar/task pane. You're working within Word's visual and interaction patterns. PM decisions about where to surface suggestions (inline vs. sidebar vs. modal) are heavily constrained by Word's extension API.\n\n**Platform risk**: Microsoft could theoretically build competing features into Word natively (they're already doing this with Copilot). The PM needs a product strategy that maintains differentiation as Microsoft's own AI features expand.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "GhostDraft's smart formatting feature (one-click numbering alignment) is best described as solving which type of user pain?",
          options: [
            "A discovery problem — users can't find relevant clauses",
            "A cognitive load problem — users must mentally track document structure during heavy editing",
            "A communication problem — users can't share documents efficiently",
            "A trust problem — users don't trust AI-generated content",
          ],
          correct: 1,
          explanation: "Smart formatting solves cognitive load and the mechanical tedium of maintaining document structure integrity during heavy editing. After 50 rounds of redlines, a lawyer's mental model of the document structure breaks down. Re-alignment automation removes the need to manually track what changed where — it's a cognitive load and error-reduction solution, not a discovery or communication one.",
        },
        {
          type: "fill-blank",
          prompt: "GhostDraft's add-in architecture creates a strategic risk: Microsoft could build ___ AI document features directly into Word, undermining GhostDraft's differentiation.",
          blank: "competing",
          hint: "What is Microsoft already doing with Copilot in Word?",
        },
        {
          type: "scenario",
          prompt: "A GhostDraft interviewer asks: 'Walk me through our product as if explaining it to a new user who just installed the add-in.' Give your answer.",
          sampleAnswer: "Welcome to GhostDraft — think of it as having a very detail-oriented colleague looking over your shoulder while you draft. You'll see the GhostDraft panel open in the Word sidebar. As you work through a contract, three things happen automatically: First, any defined term you click — 'Company', 'Effective Date', whatever — will show you a popup with the exact definition and where it was defined, so you never have to scroll back. Second, as you type cross-references, GhostDraft will suggest the correct section or definition to reference, so you stop manually typing 'as defined in Section 4.2(b)'. Third, when you run a full document scan, GhostDraft checks for inconsistent defined terms, broken cross-references, and formatting issues — and shows you exactly where each problem is with the evidence right there. Everything runs on your machine. Nothing leaves your Word environment. Your client's documents stay private.",
          keyPoints: [
            "Leads with the user mental model ('detail-oriented colleague'), not a feature list",
            "Covers all three core pain points concisely",
            "Ends with the security guarantee — important for legal audience",
            "Speaks in plain language, not technical jargon",
            "Flows in logical order: passive assistance → active assistance → validation",
          ],
        },
      ],
      resources: [
        {
          title: "GhostDraft Product Page",
          url: "https://boostdraft.com",
          description: "Read the official product description directly — every feature bullet is a pain point worth understanding.",
        },
        {
          title: "Office Add-in Platform Overview",
          url: "https://learn.microsoft.com/en-us/office/dev/add-ins/overview/office-add-ins",
          description: "Microsoft's developer docs on Office Add-ins — understand the platform constraints your PM decisions live within.",
        },
      ],
    },
    {
      id: "5-2",
      unitId: "unit5",
      companySlug: "boostdraft",
      title: "The NLP→LLM Migration Question",
      tldr: "Should GhostDraft ever add LLMs? If so, when and how? This is one of the most important strategic questions you'll face in the interview — and there's no simple answer.",
      skills: ["Technology roadmap", "Migration strategy", "Risk-benefit analysis"],
      xp: 25,
      content: [
        {
          heading: "Why the question matters",
          body: "The pressure to add LLMs to GhostDraft is real. Competitors are shipping LLM-powered legal tools. Customers ask about ChatGPT integration. Microsoft is adding Copilot to Word. The question isn't 'could we add LLMs?' (we could), but 'should we, when, and how?'\n\nAs the AI PM, you need a principled answer to this question — not 'we'll never use LLMs' (that's brittle) and not 'yes let's add ChatGPT!' (that ignores the product strategy). The right answer is somewhere between those extremes, and it depends on specific conditions being met.",
          goAnalogy: {
            term: "Semeai",
            reading: "せめあい",
            meaning: "A semeai is a capturing race — two groups try to capture each other. The NLP vs. LLM question is a semeai: GhostDraft has to decide whether to race toward LLM capabilities before competitors do, or hold their reliable NLP position. Racing blindly can be fatal. Waiting too long cedes territory.",
          },
        },
        {
          heading: "The case FOR eventually adding LLMs",
          body: "There are specific use cases where LLMs would genuinely add value that NLP can't deliver:\n\n**Clause drafting assistance**: 'Draft an indemnification clause that's balanced for a SaaS vendor.' NLP can't generate this. An LLM can, and lawyers spend enormous time drafting from scratch.\n\n**Plain-language summaries**: 'Explain what Section 12 means in simple terms.' Legal professionals often want to quickly understand a section's implications — extractive NLP can pull text, but it can't explain meaning.\n\n**Negotiation coaching**: 'This termination clause is unusual — here's why.' Requires understanding of market norms and the ability to compare against standards, which needs generative reasoning.\n\nThese are real user needs that NLP cannot address. If GhostDraft ignores them, a competitor that figures out how to deliver LLM capabilities safely in legal context will take that market.",
        },
        {
          heading: "The conditions that must be met before adding LLMs",
          body: "The question isn't whether to use LLMs — it's **what conditions must be true** before the product can responsibly add them:\n\n**1. A local LLM deployment path**: The moment documents need to go to an external LLM API, GhostDraft's security promise breaks. Models like Llama, Mistral, or a fine-tuned local model could run on-device. The question is whether they're good enough.\n\n**2. Clear feature scoping where hallucination is acceptable**: Clause drafting assistance is explicitly generative — the lawyer knows they're starting from an AI draft, not a fact. Proofreading is not generative — it claims to have found a real error. LLMs are safer in the former role than the latter.\n\n**3. Strong HITL guardrails**: Any LLM-generated text must be clearly labeled as AI-generated, must never auto-insert into the document, and must include a 'this is a starting point, not a finished clause' disclosure.\n\n**4. Enterprise customer buy-in**: For law firm customers, even a local LLM might require explicit consent and contract language. The PM needs to understand the buying process, not just the technology.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "GhostDraft is evaluating whether to add a 'clause explanation' feature using a local LLM that runs on-device. Which condition most directly addresses the core security concern?",
          options: [
            "The LLM must have at least 70B parameters for high quality",
            "Running locally means documents never leave the machine, preserving the core privacy guarantee",
            "The feature must have a 'report error' button for user feedback",
            "The LLM must be fine-tuned on legal documents before deployment",
          ],
          correct: 1,
          explanation: "The core security promise is 'your documents never leave your machine.' A local LLM deployment maintains this promise regardless of model size. Running locally is the necessary condition that unlocks LLM use without breaking the product's trust foundation. Fine-tuning improves quality but doesn't resolve the security constraint. The report error button is good HITL design but secondary.",
        },
        {
          type: "fill-blank",
          prompt: "LLM features at GhostDraft are safer in ___ roles (where users know they're starting from an AI draft) than in proofreading roles (where the AI claims to have found a real error).",
          blank: "generative",
          hint: "What type of role explicitly creates new content rather than checking existing content?",
        },
        {
          type: "scenario",
          prompt: "In your GhostDraft interview, you're asked: 'What's your recommendation on whether and how GhostDraft should incorporate LLMs into the product over the next 2 years?' Give a structured answer.",
          sampleAnswer: "I'd frame this as a conditional roadmap: yes to LLMs, but only when specific conditions are met, and only for the right use cases. In year 1, I'd recommend staying NLP-first while actively testing local LLM deployment (Llama/Mistral on-device). The goal isn't to ship LLM features yet — it's to determine whether local models can meet our quality bar for legal language. Simultaneously, I'd identify one low-risk LLM use case to pilot: plain-language clause explanation, which is explicitly generative (users know it's AI interpretation, not ground truth) and low-stakes (no one signs a contract based on the explanation, they sign based on the actual text). In year 2, if local LLM quality meets the bar and the pilot shows real user value, I'd expand to clause drafting assistance with strong HITL guardrails — never auto-inserting, always labeled as AI draft. I'd maintain a hard line: NLP for proofreading (reliability-critical), LLMs for drafting assistance (explicitly generative). This protects our trust moat while capturing new value.",
          keyPoints: [
            "Gives a conditional yes rather than a blanket yes or no",
            "Distinguishes between generative use cases (safer) and proofreading (stay NLP)",
            "Names specific models to show technical credibility",
            "Proposes a low-risk pilot use case with clear rationale",
            "References HITL guardrails as a non-negotiable condition",
            "Frames the strategy around protecting the trust moat, not chasing competitors",
          ],
        },
      ],
      resources: [
        {
          title: "Local LLMs for Enterprise — Overview",
          url: "https://ollama.com",
          description: "Ollama makes running local LLMs straightforward — the kind of deployment path GhostDraft would need to explore.",
        },
        {
          title: "LLMs in Legal Tech — Current Landscape",
          url: "https://arxiv.org/abs/2312.12507",
          description: "Academic survey of LLM applications in legal practice — useful for understanding the competitive and technical landscape.",
        },
      ],
    },
    {
      id: "5-3",
      unitId: "unit5",
      companySlug: "boostdraft",
      title: "Expanding Beyond Legal Documents",
      tldr: "GhostDraft plans to expand beyond law firms to other industries and document types. The multilingual parser makes this possible — the PM's job is to decide where and when.",
      skills: ["Market expansion", "Platform thinking", "ICP analysis"],
      xp: 25,
      content: [
        {
          heading: "The platform opportunity",
          body: "GhostDraft built something more valuable than a legal tool: they built a **document intelligence platform** that happens to be deployed in the legal vertical first. The NLP pipeline — tokenization, entity extraction, consistency checking, cross-reference analysis — is domain-agnostic at the architecture level. The domain-specific knowledge (legal clause types, defined term conventions, legal formatting standards) is a learned layer on top.\n\nThis means expanding to a new industry doesn't require rebuilding the platform. It requires:\n1. Collecting training data in the new domain\n2. Fine-tuning the models on domain-specific language patterns\n3. Defining what 'errors' and 'suggestions' mean in that domain\n4. Building a go-to-market motion for the new ICP\n\nThe multilingual parser (JA/EN/KO in one model) makes this even more powerful: a new domain can be launched across all three languages simultaneously.",
          goAnalogy: {
            term: "Moyo",
            reading: "もよう",
            meaning: "Moyo is a large framework of potential territory — stones placed to stake a claim on a large area before it's fully secured. GhostDraft's platform architecture is moyo: the stones are placed across the board (legal, multilingual, Word add-in), and now the company must decide which territory to convert into actual secured points.",
          },
        },
        {
          heading: "Evaluating expansion candidates",
          body: "Not all document-heavy industries are equally attractive. The ideal expansion target has:\n\n**High document volume + high error cost**: Medical records, financial contracts, compliance documentation, HR policies. These share legal documents' characteristic: mistakes are expensive.\n\n**Existing Word workflow**: If the target industry already uses Word, distribution is solved. GhostDraft doesn't need to convince them to change tools.\n\n**Domain expertise accessible**: You need legal experts to label legal documents. You need medical experts to label medical records. Accessibility and cost of domain expertise varies widely.\n\n**Adjacent language/structure**: Japanese employment contracts are more similar to Japanese commercial contracts than Japanese medical records are. Adjacency reduces data requirements.\n\nThree promising candidates: **financial services contracts** (loan agreements, derivatives documentation — high error cost, Word-native), **compliance documentation** (regulatory filings, policy documents — high precision required), **technical standards documents** (ISO standards, engineering specifications — heavy cross-referencing).",
        },
        {
          heading: "The PM's expansion checklist",
          body: "Before recommending an expansion into a new vertical, a GhostDraft PM should work through:\n\n**Market sizing**: How many professionals in this domain use Word and produce high-stakes documents at volume? Rough TAM/SAM estimate.\n\n**ICP definition**: Who specifically is the buyer and the user? In-house counsel was the GhostDraft ICP for legal — who is the equivalent in financial services? (General counsel, compliance officers, paralegals?)\n\n**Data moat**: Does GhostDraft have a training data advantage in this new domain, or is it starting from scratch? Can existing legal document learnings transfer?\n\n**Competitive landscape**: Are there well-funded competitors already in this space? What's GhostDraft's differentiator vs. incumbents?\n\n**Go-to-market motion**: Can the existing sales motion (enterprise contracts, IT procurement) work in the new vertical? Or does it require a completely different sales approach?\n\n**Build cost**: How much new training data and domain expert annotation is required? What's the MVP feature set for the new vertical?",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "GhostDraft is evaluating expanding into medical records documentation (clinical notes, discharge summaries). Which factor is the BIGGEST challenge compared to legal documents?",
          options: [
            "Medical documents use different file formats than Word",
            "Medical domain expertise for annotation is harder to access and more regulated than legal — HIPAA constraints apply to training data, and medical labeling requires licensed clinicians",
            "Medical documents are shorter than legal contracts",
            "Hospitals don't use Microsoft Word",
          ],
          correct: 1,
          explanation: "The annotation challenge is the critical blocker. Legal documents can be labeled by law students or junior associates under supervision. Medical records require licensed clinicians, are subject to HIPAA (limiting what data can be used for training), and contain PHI (Protected Health Information) that creates significant compliance overhead. The domain expertise barrier in healthcare is substantially higher than in legal.",
        },
        {
          type: "fill-blank",
          prompt: "GhostDraft's NLP platform is ___ agnostic at the architecture level — the domain-specific knowledge is a fine-tuned layer on top, which makes vertical expansion technically feasible.",
          blank: "domain",
          hint: "What type of specificity is built into the architecture vs. the fine-tuning?",
        },
        {
          type: "scenario",
          prompt: "GhostDraft's CEO asks you to recommend the single best vertical to expand into after legal. Walk through your reasoning and give a recommendation.",
          sampleAnswer: "I'd recommend financial services contracts — specifically loan documentation and credit agreements — as the first expansion. Here's why: 1) Market adjacency: financial contracts share legal contracts' characteristics — high document volume, expensive errors, heavy defined-term usage, complex cross-referencing. The platform needs minimal adaptation. 2) ICP overlap: many GhostDraft legal customers are in-house counsel at financial institutions. They already trust the product and can champion internal expansion to their banking/finance colleagues. 3) Word-native: financial services documentation is heavily Word-based, especially in traditional financial institutions. No distribution problem. 4) Competitive moat: the precision requirement for financial documents is as high as legal — LLM-based competitors have the same hallucination risk here. GhostDraft's reliability advantage transfers. 5) Data accessibility: financial contract annotation is easier than medical (no PHI, no licensing requirements). Junior analysts can label with supervision. I'd de-prioritize healthcare (PHI constraints, licensing costs) and consumer docs (low error cost, less willingness to pay) for now.",
          keyPoints: [
            "Gives a clear recommendation with ranked reasoning, not just a list of options",
            "Uses existing customer relationships as a distribution advantage",
            "Applies the 'high error cost + Word-native + accessible expertise' framework",
            "Explicitly de-prioritizes alternatives with reasoning",
            "Identifies that GhostDraft's core differentiator (reliability vs. LLM hallucination) transfers",
          ],
        },
      ],
      resources: [
        {
          title: "Platform Thinking for Product Managers",
          url: "https://www.reforge.com/blog/platform-product-strategy",
          description: "Reforge's framework for identifying when a product can become a platform — directly applicable to GhostDraft's expansion opportunity.",
        },
      ],
    },
    {
      id: "5-4",
      unitId: "unit5",
      companySlug: "boostdraft",
      title: "Interview Scenarios — STAR Stories for AI PM",
      tldr: "The STAR framework + AI PM context + GhostDraft specifics = a story that lands. This lesson gives you the templates and the practice.",
      skills: ["STAR framework", "Interview storytelling", "AI PM positioning"],
      xp: 30,
      content: [
        {
          heading: "Why STAR alone isn't enough for AI PM interviews",
          body: "The STAR framework (Situation, Task, Action, Result) is table stakes. Every PM candidate uses it. At an AI PM interview, you need STAR **plus** an AI lens on top — showing that your instincts about uncertainty, failure modes, HITL, and data quality are part of how you naturally think.\n\nThe goal is to make the interviewer think: 'This person has clearly worked through the nuances of AI products — they understand the tradeoffs, not just the buzzwords.'\n\nFive common GhostDraft interview questions — with the AI lens to apply to each.",
          goAnalogy: {
            term: "Tesuji",
            reading: "てすじ",
            meaning: "A tesuji is a clever local move — a tactical solution that solves a specific problem brilliantly. A perfectly crafted STAR story is tesuji: not a strategic masterpiece, but a precise, elegant move that wins the local battle.",
          },
        },
        {
          heading: "Q1: Tell me about a time you made a product decision under significant uncertainty",
          body: "**What they're really asking**: Can you ship when the data isn't perfect? Do you know how to make good decisions with incomplete information? Do you understand probabilistic thinking?\n\n**AI PM lens to add**: Frame the uncertainty explicitly as model-style uncertainty. You made a decision with incomplete signal — just like an AI operating below its confidence threshold — and you designed a feedback loop to learn from the outcome.\n\n**Template**: 'We had [X% signal / incomplete data / unclear user behavior]. I made a decision to [action] because [reasoning under uncertainty]. I built in [feedback mechanism] to validate the assumption. The result was [outcome], and the key learning was [what updated my model of the problem].'",
        },
        {
          heading: "Q2: Describe a feature where you had to evaluate AI vs. non-AI approaches",
          body: "**What they're really asking**: Do you have a principled framework? Can you push back on AI hype when a simpler solution is better?\n\n**AI PM lens to add**: Walk through the 5-question framework (training data, precision/recall requirements, latency, problem space change rate, cost of being wrong). Show that your decision was analytical, not vibes-based.\n\n**Template**: 'We were evaluating whether to use ML for [problem]. I ran it through a feasibility framework. [Training data: X. Precision requirement: Y. Cost of being wrong: Z.] The conclusion was [use AI / don't use AI] because [key deciding factor]. We shipped [approach] and the outcome was [result].'",
        },
        {
          heading: "Q3: Tell me about a time an AI feature you built didn't work as expected",
          body: "**What they're really asking**: Have you been close enough to AI products to experience failure? Can you diagnose model failures and iterate, not just throw them over the wall to engineering?\n\n**AI PM lens to add**: Name the specific failure mode (false positives, distribution shift, feedback loop issue). Show that you understand *why* it failed, not just that it failed. Describe the monitoring that caught it.\n\n**Template**: 'We launched [AI feature] and [metric] started dropping after [X weeks]. The root cause was [distribution shift / feedback loop issue / edge case cliff]. I [owned the diagnosis / worked with engineering to identify it]. We fixed it by [data fix / model retrain / threshold adjustment]. The post-mortem insight was [principle that now guides how I design AI features].'",
        },
        {
          heading: "Q4: How do you design AI features so users trust them?",
          body: "**What they're really asking**: Do you understand that AI trust is designed, not assumed? Have you thought about HITL, confidence communication, and automation bias?\n\n**AI PM lens to add**: Reference the three pillars: legibility (users understand what the AI did and why), low-friction override (dismissing AI output is always easy), calibrated confidence (the AI communicates its certainty).\n\n**Template**: 'Trust in AI features is designed, not given. I design for three things: [legibility — users can see the evidence for every AI suggestion]. [Low-friction override — dismiss is always one click and never buried]. [Calibrated confidence — the AI shows high/medium/low confidence signals, not raw numbers]. An example from my experience: [specific design decision you made that embedded one of these principles].'",
        },
        {
          heading: "Q5: Why GhostDraft?",
          body: "**What they're really asking**: Have you actually thought about our product? Do you understand what makes us different? Are you excited about this specific problem?\n\n**What to cover**: The deliberate NLP-over-LLM choice (shows you understand the product strategy), the reliability moat (shows you see the competitive advantage), the expansion opportunity (shows you see the growth potential), the specificity of the domain (shows genuine interest, not just 'AI PM role').\n\n**Template**: 'I'm drawn to GhostDraft because you made a deliberate product bet most companies wouldn't: you chose reliability over capability at a moment when everyone is racing to add LLMs. In legal tech, that's the right bet — and it requires a very different kind of AI PM than one who's just optimizing model metrics. I want to work on AI products where the stakes are real, the failure modes are serious, and the product strategy requires genuine tradeoffs. The multilingual expansion and the potential to move beyond legal into other high-stakes document workflows is the kind of platform opportunity I want to be part of building.'",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "In a GhostDraft AI PM interview, you're asked about a failed AI feature. The best response demonstrates which of the following?",
          options: [
            "That you successfully avoided all AI failures in your career",
            "That you can name the specific failure mode, explain why it happened, and articulate the principle you now apply as a result",
            "That you escalated the failure to your manager immediately",
            "That the failure wasn't really your fault — it was an engineering problem",
          ],
          correct: 1,
          explanation: "Interviewers asking about failure want to see pattern recognition and learning velocity, not a perfect record. The ideal answer names the failure mode precisely (distribution shift, feedback loop issue, false positive rate spike), explains the root cause mechanically, and distills a design principle that now guides your approach. Vague answers ('the model underperformed') signal shallow AI product experience.",
        },
        {
          type: "fill-blank",
          prompt: "The three pillars of AI user trust are: ___ (users understand what the AI did and why), low-friction override, and calibrated confidence.",
          blank: "legibility",
          hint: "Users should be able to read the AI's reasoning...",
        },
        {
          type: "scenario",
          prompt: "Practice the full 'Why GhostDraft?' answer. Write it as if you're in the room. Make it specific, make it personal, and make it show that you've done your homework.",
          sampleAnswer: "I've been studying GhostDraft seriously, and what stands out is how deliberate the product strategy is. Most AI companies right now are in a race to add generative AI everywhere — GhostDraft went the opposite direction and said 'not for legal documents, not yet.' That's a hard call to make when investors and customers are asking about ChatGPT integrations. But it's the right call, and it's the kind of call that requires an AI PM who understands the tradeoffs at a product level, not just a technical one. The specific thing I find exciting is the multilingual parser — one model for Japanese, English, and Korean is technically hard, and it opens up a platform play that most legal tech companies aren't positioned to make. Japan and Korea have significant legal markets, and the ability to serve multinational corporations drafting across those languages is a real wedge. I want to work on a product where AI has to earn user trust by being right, not by being impressive. GhostDraft is building that kind of product.",
          keyPoints: [
            "References the NLP-over-LLM decision as a strategic bet, showing product strategy comprehension",
            "Shows genuine engagement with the multilingual parser as a product differentiator",
            "Personalizes to 'what kind of AI PM I want to be' — authentic motivation",
            "Avoids generic 'I love legal tech' framing",
            "Shows awareness of the competitive pressure (investor/customer LLM questions) that makes the choice hard",
          ],
        },
      ],
      resources: [
        {
          title: "Cracking the AI PM Interview",
          url: "https://www.lennysnewsletter.com/p/cracking-the-pm-interview",
          description: "Lenny's guide to PM interviews — adapt the frameworks to AI PM context using the lessons from this course.",
        },
        {
          title: "STAR Method for Behavioral Questions",
          url: "https://www.themuse.com/advice/star-interview-method",
          description: "The Muse's clean STAR breakdown — the foundation for the storytelling techniques in this lesson.",
        },
        {
          title: "GhostDraft Careers Page",
          url: "https://boostdraft.com",
          description: "Read the current job description again after completing this course — you'll see it differently now.",
        },
      ],
    },
  ],
};
