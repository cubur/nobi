import type { Unit } from "@/data/types";

export const unit4: Unit = {
  id: "unit4",
  companySlug: "boostdraft",
  title: "Recognizing Risk",
  description: "Evaluate when AI is the right tool — and when it isn't. Own the AI vs. non-AI decision framework and privacy/security tradeoffs at GhostDraft.",
  goTerm: "Atari",
  goReading: "あたり",
  goMeaning: "Atari means your group is one move away from capture — a warning state. Recognizing AI risk before it materializes is the AI PM's most valuable skill.",
  color: "crimson",
  lessons: [
    {
      id: "4-1",
      unitId: "unit4",
      companySlug: "boostdraft",
      title: "The AI vs. Non-AI Decision Framework",
      tldr: "Not every problem needs a model. The AI PM's most underrated skill is confidently saying 'a rule works better here' — and having the framework to prove it.",
      skills: ["Feasibility analysis", "AI cost-benefit", "Engineering collaboration"],
      xp: 25,
      content: [
        {
          heading: "The bias toward AI",
          body: "There's a strong pull in product teams to reach for AI whenever a problem involves language, pattern recognition, or prediction. It feels innovative. It impresses stakeholders. It generates better demo moments.\n\nBut this bias is expensive. AI solutions require training data, ongoing maintenance, monitoring, and a higher tolerance for failure modes. A rule-based solution with 95% accuracy and zero maintenance often beats an ML model with 97% accuracy and a full-time engineer keeping it alive.\n\nAt GhostDraft, this tension is literal: the company chose NLP and rule-based systems over LLMs. An AI PM here needs a principled framework for when to use AI and when to resist the pull.",
          goAnalogy: {
            term: "Tenuki",
            reading: "てぬき",
            meaning: "Tenuki means playing somewhere else — ignoring a local threat because there's a better move on the board. Choosing not to use AI for a feature is tenuki: you're playing the bigger-picture move of simplicity and reliability instead of the local flashy move.",
          },
        },
        {
          heading: "The 5-question decision framework",
          body: "Before committing to an AI-powered solution, answer these 5 questions:\n\n**1. Is there labeled training data?**\nAI needs examples. If you can't label 'correct' vs. 'incorrect' for your domain, you can't train a model. For legal documents, labeling often requires expensive domain experts.\n\n**2. What's the precision/recall requirement?**\nIf a false positive (wrong alert) destroys user trust, you need very high precision. If a false negative (missed error) is catastrophic, you need high recall. A rule-based system is often more controllable on these dimensions than a model.\n\n**3. What's the latency budget?**\nReal-time features in a Word add-in need sub-100ms responses. Some ML models can't meet this in a local deployment context without significant engineering investment.\n\n**4. How often does the problem space change?**\nIf legal language conventions change yearly, you'll need to retrain your model yearly. A regex or rule set can be updated in hours by a non-ML engineer.\n\n**5. What's the cost of being wrong?**\nLegal documents: catastrophic. The higher the cost of errors, the more you should bias toward deterministic, auditable systems over probabilistic ones.",
        },
        {
          heading: "Applying the framework at GhostDraft",
          body: "Let's apply it to a real GhostDraft feature proposal: **'AI-powered clause risk scoring'** — a feature that highlights clauses likely to be problematic before negotiation.\n\n- **Training data?** Hard to get. Risk depends on industry, counterparty, jurisdiction. Historical redlines exist but are confidential.\n- **Precision/recall?** High precision required — false risk flags undermine lawyer confidence. Hard to guarantee.\n- **Latency?** Could be async (background scan), so manageable.\n- **Problem space change?** Negotiation norms evolve; retraining required regularly.\n- **Cost of being wrong?** High — a missed risk flag could lead to a lawyer not flagging a problematic clause.\n\n**Verdict:** This feature is in atari — risky to build with AI right now. A better first version: rule-based detection of known high-risk clause patterns (e.g., uncapped liability clauses, auto-renewal without notice) with explicit sourcing from legal standards. Ship that first, gather user feedback, then evaluate if ML adds measurable value.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "GhostDraft is evaluating adding 'smart formatting' that auto-aligns numbering and indentation across a document. Which factor most strongly suggests a rule-based approach over ML?",
          options: [
            "Formatting rules are deterministic and exhaustively enumerable — there is no ambiguity to learn from data",
            "ML models can't handle document structure",
            "The engineering team doesn't have ML expertise",
            "Formatting features don't require training data",
          ],
          correct: 0,
          explanation: "Formatting rules — numbering sequences, indentation levels, heading hierarchies — are fully deterministic. There's no ambiguity: '1.1.1' always comes after '1.1'. ML adds complexity without adding value here. Rule-based systems handle this perfectly, are instantly debuggable, and never hallucinate a numbering style.",
        },
        {
          type: "fill-blank",
          prompt: "The AI vs. non-AI framework asks: what's the cost of being ___? The higher that cost, the more you should favor deterministic, auditable systems.",
          blank: "wrong",
          hint: "Think about what happens when the model makes a mistake...",
        },
        {
          type: "scenario",
          prompt: "A GhostDraft engineer proposes using an ML classifier to detect which document sections are 'definitions sections' vs. 'operative clauses'. Currently this is done with regex patterns on section headers. How do you evaluate whether to switch to ML?",
          sampleAnswer: "I'd apply the framework: 1) Training data — we probably have enough (document sections are easily labelable by legal domain structure, and our corpus grows with each customer). 2) Precision requirement — the definitions parser feeds into other features; if it misclassifies, downstream features break. Need >98% precision, which regex might already achieve. 3) Current performance — first question is: what's the regex's accuracy today? If it's already 97%+, ML needs to beat that with margin. 4) Maintenance cost — regex is maintained by any engineer; an ML model needs ML infrastructure. 5) Edge cases — ML might handle novel document structures (non-standard headers) better than regex. My recommendation: benchmark regex accuracy on a representative sample first. If it's above 95%, defer ML. If there are meaningful edge case failures, build a hybrid: regex as primary, ML fallback for low-confidence cases.",
          keyPoints: [
            "Starts by benchmarking the existing solution before proposing ML",
            "Applies precision requirement to the specific downstream dependency",
            "Acknowledges ML's advantage for edge cases without over-weighting it",
            "Proposes hybrid as a pragmatic middle path",
            "Frames the decision around measured performance, not gut feeling",
          ],
        },
      ],
      resources: [
        {
          title: "Rules of ML — Google",
          url: "https://developers.google.com/machine-learning/guides/rules-of-ml",
          description: "Rule #1: Don't be afraid to launch a product without machine learning. Essential reading for the AI vs. non-AI decision.",
        },
        {
          title: "When NOT to Use AI",
          url: "https://pair.withgoogle.com/guidebook",
          description: "Google PAIR's guidebook includes a section on when to avoid AI — rare but important perspective.",
        },
      ],
    },
    {
      id: "4-2",
      unitId: "unit4",
      companySlug: "boostdraft",
      title: "Privacy, Security, and Reliability in Legal Tech",
      tldr: "Legal documents are among the most sensitive data in existence. Privacy and security aren't compliance checkboxes at GhostDraft — they're product differentiators.",
      skills: ["Privacy by design", "Security tradeoffs", "Enterprise trust"],
      xp: 20,
      content: [
        {
          heading: "Why legal tech has the highest security bar",
          body: "Legal documents contain:\n- **Trade secrets** — M&A targets, unreleased product plans, competitive strategies\n- **Financial terms** — deal values, earn-out structures, liability caps\n- **Negotiating positions** — what a party is willing to accept vs. their opening position\n- **Confidential client information** — protected by attorney-client privilege in many jurisdictions\n\nA data breach involving a Fortune 500 company's acquisition contract isn't just embarrassing — it can move markets, destroy deals, and trigger regulatory investigations. This is why GhostDraft's architecture decision to run **fully locally without internet** is not a limitation: it's the product's core security guarantee.",
          goAnalogy: {
            term: "Shicho",
            reading: "しちょう",
            meaning: "A shicho (ladder) is a sequence of moves where a group is chased across the board. In security, one breach creates a cascade — the ladder of consequences. GhostDraft's local-first architecture prevents the ladder from ever starting.",
          },
        },
        {
          heading: "The three security dimensions an AI PM owns",
          body: "**1. Data privacy — where does the data go?**\nFor every AI feature, the PM must answer: does this require sending user data to an external service? GhostDraft's NLP runs locally, so the answer is no. Any future feature that requires cloud processing — even anonymized — changes this answer and requires a deliberate product decision, not just an engineering choice.\n\n**2. Model security — can the model be poisoned?**\nIf GhostDraft were to use customer documents as training data, a malicious actor could craft inputs designed to corrupt the model (data poisoning). The PM needs to understand this risk and ensure training pipelines are firewalled from production data.\n\n**3. Output security — can AI output be weaponized?**\nAn AI that generates text could, in theory, produce outputs that embed misleading information or that a user unknowingly accepts into a contract. The PM's HITL design must prevent automated acceptance of AI-generated contract language.",
        },
        {
          heading: "Reliability as a product feature",
          body: "Reliability in AI products means two things:\n\n**Consistency** — the same input produces the same output every time. Rule-based NLP passes this test; LLMs don't. For a proofreading tool, a lawyer who finds an inconsistency in the AI's behavior will stop trusting it.\n\n**Graceful degradation** — when the AI can't produce a confident output, it fails safely. GhostDraft's features should degrade to 'no suggestion' rather than 'low-confidence wrong suggestion'. The bar for showing output should be high.\n\nThe PM sets the reliability standards in the PRD: minimum precision thresholds, maximum latency budgets, and the fallback behavior when those thresholds aren't met.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "GhostDraft is considering a cloud-based feature that would allow real-time collaboration on contracts (multiple users editing simultaneously). Which privacy concern must be resolved FIRST before building this?",
          options: [
            "Whether the cloud servers have SOC 2 Type II certification",
            "Whether sending document contents to a cloud server to enable real-time sync breaks GhostDraft's core 'no data leaves your machine' security promise to enterprise customers",
            "Whether the latency of cloud sync would be too slow for real-time editing",
            "Whether competitors offer a similar feature",
          ],
          correct: 1,
          explanation: "The core product promise is local operation. Real-time cloud collaboration fundamentally requires documents to transit a server — this isn't a SOC 2 question, it's an architectural promise question. Before any technical work begins, the PM needs to decide whether this feature represents a strategic shift in GhostDraft's security model, and whether that shift would be acceptable to existing enterprise customers.",
        },
        {
          type: "fill-blank",
          prompt: "In AI security, ___ poisoning refers to crafting malicious training inputs designed to corrupt a model's behavior.",
          blank: "data",
          hint: "What do you corrupt to manipulate what a model learns?",
        },
        {
          type: "scenario",
          prompt: "A prospective enterprise customer (a large law firm) asks: 'How does GhostDraft ensure our confidential client documents are never used to train your AI?' How do you answer this in a sales meeting?",
          sampleAnswer: "Our NLP models run entirely on your machine — your documents never leave your environment, so there's nothing to train on. The model is pre-trained once by our team on publicly available legal documents and corpus data, then packaged into the add-in you install. When you use GhostDraft, you're using that pre-trained model locally. Your documents are the input to the model, but they never flow back to us. We couldn't train on your data even if we wanted to. If you'd like, I can connect you with our engineering team to walk through the architecture in detail — we have this conversation often with firms that have strict data governance requirements.",
          keyPoints: [
            "Leads with the architectural guarantee (local only), not a policy statement",
            "Explains the training pipeline is separate from production usage",
            "Doesn't say 'we would never' — says 'we architecturally cannot'",
            "Offers an engineering-level proof point for skeptical technical buyers",
            "Acknowledges this is a common and legitimate concern",
          ],
        },
      ],
      resources: [
        {
          title: "Privacy by Design — Ann Cavoukian",
          url: "https://www.ipc.on.ca/wp-content/uploads/resources/7foundationalprinciples.pdf",
          description: "The 7 foundational principles of Privacy by Design — the framework GhostDraft implicitly follows.",
        },
        {
          title: "SOC 2 for Product Managers",
          url: "https://www.vanta.com/resources/soc-2-compliance-guide",
          description: "What SOC 2 actually means and why enterprise customers ask about it — practical PM-level overview.",
        },
      ],
    },
    {
      id: "4-3",
      unitId: "unit4",
      companySlug: "boostdraft",
      title: "Evaluating AI Quality — Metrics That Matter",
      tldr: "Precision, recall, F1, latency — these aren't just engineering metrics. The AI PM owns the quality bar and must translate these numbers into product decisions.",
      skills: ["Precision/recall", "AI quality metrics", "Evaluation design"],
      xp: 25,
      content: [
        {
          heading: "The PM's guide to model metrics",
          body: "You don't need to implement evaluation pipelines. But you do need to understand what the numbers mean and set the quality bar for your product.\n\n**Precision** = of all the suggestions the AI surfaced, what fraction were correct?\n*Formula: True Positives / (True Positives + False Positives)*\n\nHigh precision means: when the AI says something, it's usually right. Users don't see many false alarms. **GhostDraft prioritizes this** — a proofreading tool that cries wolf loses user trust fast.\n\n**Recall** = of all the real problems in the document, what fraction did the AI catch?\n*Formula: True Positives / (True Positives + False Negatives)*\n\nHigh recall means: the AI catches most of the real problems. Low recall means the AI misses errors — dangerous in legal documents where missing a clause inconsistency can cost millions.\n\n**The precision-recall tradeoff**: raising one usually lowers the other. The confidence threshold you set determines where you sit on this curve. This is a **product decision**, not just a technical one.",
          goAnalogy: {
            term: "Komi",
            reading: "こみ",
            meaning: "Komi is the compensation points given to White to offset Black's first-move advantage. In AI metrics, precision and recall are like a komi negotiation — you balance them based on the specific stakes of your product context. For legal docs, precision gets the komi.",
          },
        },
        {
          heading: "Beyond precision and recall",
          body: "**F1 Score** = harmonic mean of precision and recall. A single number that balances both. Useful when you want a high-level quality score, but always unpack it — a 0.85 F1 could mean 0.95 precision / 0.76 recall or 0.76 / 0.95, which have very different product implications.\n\n**Latency** = how long the model takes to return results. For a real-time Word add-in, users notice latency above ~200ms on keystrokes. The PM sets a latency budget and holds engineering to it.\n\n**Coverage** = what fraction of documents/languages/clause types the model handles confidently (above threshold). A model with 95% precision but only 60% coverage (40% of documents get no suggestions) is a partial product.\n\n**Degradation rate** = how much does quality drop week-over-week as real-world document distributions drift from training data? This requires a monitoring dashboard. The PM should set an alert threshold — e.g., 'page me if precision drops more than 3 percentage points from baseline'.",
        },
        {
          heading: "Setting the quality bar in the PRD",
          body: "Every AI feature PRD should include an **acceptance criteria section** with explicit quality thresholds:\n\n- **Minimum precision at launch**: e.g., ≥92% on English commercial contracts\n- **Minimum recall at launch**: e.g., ≥85% (we accept some misses in exchange for high precision)\n- **Maximum latency**: e.g., <150ms for inline suggestions, <2s for full-document scan\n- **Coverage requirement**: e.g., ≥90% of documents get at least one actionable suggestion\n- **Monitoring threshold**: alert if precision drops below 88% in any 7-day rolling window\n\nThese numbers come from user research (how many false positives before lawyers stop trusting the tool?), competitive benchmarks, and domain expert input. They are product decisions with engineering consequences.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "GhostDraft's proofreading model has 96% precision and 72% recall. A lawyer using the product says 'I trust the flags it shows, but I feel like it misses things.' Which metric explains their experience?",
          options: [
            "Low precision — too many false alarms",
            "High precision — the flags it shows are trustworthy, confirming their confidence",
            "Low recall — the model misses 28% of real problems, so the lawyer senses errors slipping through",
            "High F1 score — overall quality is strong",
          ],
          correct: 2,
          explanation: "The lawyer's intuition is correct: 72% recall means the model only catches ~72% of real issues in the document. 28% of actual problems are missed (false negatives). High precision explains why they trust the flags they do see — those are almost always correct. The experience described is classic high precision / low recall: 'What it shows me is right, but I feel like there's more it's not catching.'",
        },
        {
          type: "fill-blank",
          prompt: "The ___ threshold — the minimum confidence score at which a suggestion is shown to users — directly controls the precision-recall tradeoff.",
          blank: "confidence",
          hint: "What do you adjust to change which suggestions get surfaced?",
        },
        {
          type: "scenario",
          prompt: "Engineering tells you the new Japanese proofreading model is ready for launch. It has 89% precision and 81% recall on English. They haven't evaluated it on Japanese yet. How do you respond?",
          sampleAnswer: "I'd pause the launch until we have Japanese evaluation results. Here's why: the model's English performance doesn't tell us much about Japanese — they're trained on different data distributions with different linguistic structures. We have no confidence threshold calibration for Japanese, which means we'd be launching with precision/recall numbers that are effectively unknown. Given that GhostDraft's reliability guarantee is core to the product, shipping a feature to Japanese customers without knowing its quality profile is a trust risk we can't accept. I'd ask engineering to run evaluation on a representative Japanese legal document corpus (even 100–200 documents is meaningful) before we set a go/no-go. In parallel, I'd work with a Japanese legal domain expert to define what 'correct' flagging looks like in Japanese contracts — that's the ground truth we need to evaluate against.",
          keyPoints: [
            "Correctly identifies that English metrics don't transfer to Japanese",
            "Connects reliability to product trust, not just engineering quality",
            "Proposes a minimum viable evaluation (100-200 documents) rather than blocking indefinitely",
            "Identifies the need for Japanese legal domain expertise for ground truth labeling",
            "Separates the 'evaluate' question from the 'launch' question",
          ],
        },
      ],
      resources: [
        {
          title: "Precision and Recall — Explained Visually",
          url: "https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall",
          description: "Google's ML crash course visual explainer — the clearest explanation of precision/recall for non-engineers.",
        },
        {
          title: "How to Set AI Quality Bars",
          url: "https://eugeneyan.com/writing/how-to-set-up-html-app-with-fastapi-jinja-forms-templates/",
          description: "Eugene Yan's writing on applied ML — practical guidance on setting and measuring AI quality thresholds.",
        },
      ],
    },
    {
      id: "4-4",
      unitId: "unit4",
      companySlug: "boostdraft",
      title: "AI Evals — Deep Dive",
      tldr: "A dedicated free course on AI evaluation and QA from AI Analyst Lab. Complete this alongside the Nobi curriculum.",
      skills: ["Eval design", "Model QA", "Benchmark construction"],
      xp: 30,
      content: [
        {
          heading: "Why evals deserve their own course",
          body: "AI evaluation is deep enough to warrant dedicated study. This lesson points you to the best free resource available: the AI Analyst Lab's AI Evals course.\n\nAfter completing Units 1–3 and the lessons above, you have the product context to get maximum value from the evals course. You understand why precision matters for GhostDraft, what HITL feedback loops look like, and how failure modes surface in real products. The evals course will give you the technical depth to complement that product intuition.",
        },
      ],
      exercises: [],
      resources: [
        {
          title: "AI Evals Course — AI Analyst Lab",
          url: "https://aianalystlab.ai/ai-evals-course/",
          description: "Free comprehensive course on AI evaluation design, benchmark construction, and QA for AI products. Complete this before your GhostDraft interview.",
        },
      ],
      referenceUrl: "https://aianalystlab.ai/ai-evals-course/",
    },
  ],
};
