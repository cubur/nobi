import type { Unit } from "@/data/types";

export const unit3: Unit = {
  id: "unit3",
  companySlug: "boostdraft",
  title: "Designing Room to Maneuver",
  description: "Master human-in-the-loop design: how to build AI features that keep users in control, especially in high-stakes domains like legal documents.",
  goTerm: "Liberties",
  goReading: "め",
  goMeaning: "In Go, liberties are the open points adjacent to a stone — the more liberties, the safer the group. Good HITL design gives users liberties: clear paths to override, correct, or dismiss AI output.",
  color: "golden",
  lessons: [
    {
      id: "3-1",
      unitId: "unit3",
      companySlug: "boostdraft",
      title: "What Human-in-the-Loop (HITL) Means",
      tldr: "HITL design means building AI features where humans remain meaningfully in control of the outcome — not just technically able to override, but genuinely empowered to do so.",
      skills: ["HITL design principles", "AI UX patterns", "Trust calibration"],
      xp: 20,
      content: [
        {
          heading: "The spectrum of AI autonomy",
          body: "AI features exist on a spectrum of autonomy:\n\n**Fully automated**: AI acts without human review. (e.g., spam filter silently deletes email)\n\n**Human-on-the-loop**: AI acts, human can review after the fact. (e.g., fraud detection flags a transaction, human reviews log)\n\n**Human-in-the-loop**: AI suggests, human decides. (e.g., GhostDraft surfaces an inconsistency, lawyer decides whether to fix it)\n\n**AI-assisted**: Human acts, AI provides context. (e.g., search autocomplete, definition lookup on click)\n\nGhostDraft sits mostly in **human-in-the-loop** and **AI-assisted** territory. This is intentional for legal documents: a lawyer must always make the final call. The AI is a highly capable assistant, not a decision-maker.",
          goAnalogy: {
            term: "Me (Liberties)",
            reading: "め",
            meaning: "HITL design is about preserving the user's liberties — their ability to move freely, correct the AI, and stay in control. An AI with no override path is like a stone with no liberties: it gets captured.",
          },
        },
        {
          heading: "Why 'technically possible to override' isn't enough",
          body: "Many AI features claim to be 'human-in-the-loop' because there's technically a dismiss button. But real HITL requires:\n\n**Legibility**: The user understands what the AI did and why. Not just 'AI flagged this' but 'this cross-reference points to a deleted section'.\n\n**Low friction override**: Dismissing or correcting AI output should be easier than accepting it. If the dismiss action is buried, users rubber-stamp AI decisions.\n\n**Calibrated confidence**: The AI should communicate uncertainty. 'High confidence inconsistency' vs. 'possible inconsistency — review recommended' are very different signals.\n\n**No automation bias**: Design against the tendency to accept AI output without scrutiny just because it's convenient. In legal docs, this can be catastrophic.",
        },
        {
          heading: "GhostDraft's HITL design principles",
          body: "GhostDraft's features are designed around three core HITL principles:\n\n**1. Show, don't replace** — the AI highlights and annotates, but never replaces text without explicit user action. The original text is always visible.\n\n**2. Evidence-first** — every suggestion includes the evidence. 'Defined term inconsistency: Section 1.1 defines 'Company' as Acme Inc., Section 8.3 uses 'the Company' to refer to a different entity.' You see the evidence before you decide.\n\n**3. Easy exit** — every AI suggestion has a clear one-click dismiss that's at least as prominent as the accept action.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "GhostDraft's proofreading tool flags a clause as potentially problematic. The user reviews it and decides it's intentional and correct. What does good HITL design require at this point?",
          options: [
            "The AI re-flags the same clause on every document open, because it might be wrong",
            "The user's dismissal is captured as feedback and the AI learns not to flag similar intentional patterns for this user",
            "The feature is disabled for that document to avoid future distractions",
            "The user must provide a written explanation for the dismissal",
          ],
          correct: 1,
          explanation: "Good HITL design treats user overrides as high-quality feedback. When a legal expert dismisses a flag as intentional, that's valuable training signal. The AI should remember this preference at the user or document level, and the dismissal should ideally contribute to improving the model's precision over time.",
        },
        {
          type: "fill-blank",
          prompt: "The tendency to accept AI output without scrutiny simply because it's convenient is called ___ bias.",
          blank: "automation",
          hint: "Named after the technology that causes it...",
        },
        {
          type: "scenario",
          prompt: "You're designing the UX for a new GhostDraft feature: AI-suggested clause alternatives (e.g., 'here are 3 ways to strengthen this indemnification clause'). How do you design it to be truly human-in-the-loop?",
          sampleAnswer: "Key design decisions: 1) Never auto-insert — alternatives appear in a side panel, never replace text unless explicitly accepted. 2) Show provenance — each alternative includes context: 'commonly used in SaaS agreements' or 'more protective for licensee'. 3) Diff view — show exactly what would change highlighted in the document before accept. 4) Easy to ignore — the panel collapses easily and doesn't interrupt the flow of editing. 5) Capture feedback — when a user picks option 2 over option 1, or dismisses all three, log that as training signal. 6) Confidence indicator — distinguish between 'standard alternative' and 'experimental suggestion'. 7) No auto-learning bias risk: every accepted suggestion requires an explicit click, never a passive default.",
          keyPoints: [
            "Never auto-inserts content without explicit action",
            "Shows provenance/reasoning for each suggestion",
            "Includes a diff/preview before accepting",
            "Makes dismissal as easy as acceptance",
            "Captures user choices as feedback signal",
          ],
        },
      ],
      resources: [
        {
          title: "Human-in-the-Loop AI — Nielsen Norman Group",
          url: "https://www.nngroup.com/articles/human-in-the-loop/",
          description: "UX research on HITL design patterns — how to design AI interfaces that maintain human agency.",
        },
      ],
    },
    {
      id: "3-2",
      unitId: "unit3",
      companySlug: "boostdraft",
      title: "Designing for Uncertainty",
      tldr: "AI is never 100% confident. Good AI product design communicates uncertainty clearly — so users calibrate their trust appropriately and don't over-rely on AI output.",
      skills: ["Uncertainty UX", "Confidence communication", "AI trust calibration"],
      xp: 20,
      content: [
        {
          heading: "Confidence scores and what they mean",
          body: "Most AI models produce a **confidence score** alongside their output — a number between 0 and 1 representing how certain the model is. A cross-reference extraction model might return '0.94 confidence that this reference points to Section 4.2(b)'.\n\nBut confidence scores are tricky:\n- A model can be **overconfident** — high score on a wrong answer\n- Confidence is **domain-specific** — a model calibrated on English contracts may be systematically overconfident on Japanese ones\n- Raw numbers (0.94) mean nothing to a lawyer — they need to be translated into **actionable signals**\n\nThe PM's job is to define how raw confidence scores translate into user-facing signals.",
          goAnalogy: {
            term: "Aji",
            reading: "あじ",
            meaning: "Aji in Go means 'taste' — potential moves or complications that haven't materialized yet. Low-confidence AI suggestions are like aji: there's something there, but it hasn't been resolved. Good design acknowledges the aji without forcing a decision.",
          },
        },
        {
          heading: "Confidence tiers in product design",
          body: "Rather than showing raw numbers, convert confidence to actionable tiers:\n\n**High confidence (>0.90)**: Show prominently as a clear finding. User should act or explicitly dismiss.\n\n**Medium confidence (0.70–0.90)**: Show with a 'review recommended' label. Don't interrupt the workflow — surface in a sidebar.\n\n**Low confidence (<0.70)**: Don't show in the main UI. Either suppress entirely, or include in a 'possible issues' section the user can expand if they want.\n\nThese thresholds are a product decision, not a technical one. They balance the cost of false positives (user annoyance, automation bias risk) vs. false negatives (missing a real error).",
        },
        {
          heading: "Designing fallbacks and graceful degradation",
          body: "Every AI feature needs a **fallback** for when it can't produce a confident output:\n\n- **The 'I don't know' fallback**: If confidence is below threshold, don't surface anything. Better to surface nothing than a misleading low-confidence suggestion.\n\n- **The manual fallback**: If the AI can't parse a section correctly (e.g., unusual formatting), fall back to showing the raw text with a note: 'This section couldn't be analyzed — review manually.'\n\n- **The scope fallback**: If a feature doesn't work for a particular document type or language, disable it gracefully with an explanation, not a generic error.\n\nAt GhostDraft, graceful fallbacks are especially important because users are legal professionals who expect tools to be reliable. An AI feature that sometimes produces confusing output is worse than no AI feature.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "GhostDraft's model identifies a potential defined-term inconsistency with 0.65 confidence. According to a confidence-tier design approach, what should the product do?",
          options: [
            "Show it prominently in the main editing view with a red flag",
            "Suppress it entirely — below 0.70 is noise",
            "Include it in an expandable 'possible issues' section, not in the main alert queue",
            "Alert the user with a modal dialog requiring confirmation",
          ],
          correct: 2,
          explanation: "At 0.65 confidence, the finding is uncertain but not worthless. Hiding it entirely loses potentially real information. Showing it prominently risks automation bias and alert fatigue. The right design is a low-friction secondary surface — an expandable section the user can choose to review without being interrupted.",
        },
        {
          type: "fill-blank",
          prompt: "When an AI model cannot produce a confident output, the product should show a ___ — a clear, non-confusing fallback that explains what couldn't be analyzed.",
          blank: "fallback",
          hint: "What's the design pattern for handling AI 'I don't know' cases?",
        },
        {
          type: "scenario",
          prompt: "You're told that GhostDraft's proofreading model has a 94% precision rate on English contracts but only 78% on Japanese ones. How do you handle this discrepancy in the product?",
          sampleAnswer: "This is a calibration problem — I'd address it at both the model and product level. Product level: use separate confidence thresholds for Japanese vs. English documents. If the model is less precise on Japanese, I'd raise the display threshold for Japanese (e.g., only show suggestions above 0.85 in Japanese vs. 0.75 in English) to maintain a similar false-positive rate for users in both languages. Model level: work with engineering to understand why — is it training data volume, Japanese legal domain specificity, or tokenization issues? Prioritize more Japanese legal document training data. Communication: be transparent with Japanese customers about the beta status of Japanese proofreading and set appropriate expectations. Don't ship the Japanese feature if precision drops below an acceptable floor.",
          keyPoints: [
            "Uses language-specific confidence thresholds to equalize user experience",
            "Distinguishes product-level fix (thresholds) from model-level fix (more data)",
            "Doesn't hide the gap — proposes transparent communication",
            "Defines a minimum acceptable precision floor before shipping",
          ],
        },
      ],
      resources: [
        {
          title: "Calibration in Machine Learning",
          url: "https://scikit-learn.org/stable/modules/calibration.html",
          description: "Technical explanation of model calibration — when and why confidence scores don't match real accuracy.",
        },
      ],
    },
    {
      id: "3-3",
      unitId: "unit3",
      companySlug: "boostdraft",
      title: "Failure Mode Mapping for AI Features",
      tldr: "AI features fail differently than traditional software. Mapping failure modes before you build is one of the highest-leverage AI PM activities.",
      skills: ["Failure mode analysis", "Risk-based product design", "Pre-mortem thinking"],
      xp: 25,
      content: [
        {
          heading: "Why AI fails differently",
          body: "Traditional software fails loudly: a null pointer exception crashes the app. You know immediately something went wrong.\n\nAI fails quietly: the model returns a plausible-looking wrong answer. The user may not notice. The error propagates silently through their workflow.\n\nIn legal documents, this asymmetry is dangerous. A software crash in a document editor is annoying. An AI-suggested clause that subtly shifts liability is catastrophic — and it looks exactly like a correct suggestion.",
          goAnalogy: {
            term: "Shortage of Liberties",
            reading: "だめ",
            meaning: "In Go, 'dame' are neutral points — but running out of dame (shortage of liberties) can suddenly make a living group vulnerable. AI failure modes are like dame: individually harmless-looking, but they can combine into a serious vulnerability.",
          },
        },
        {
          heading: "A failure mode taxonomy for AI features",
          body: "Use this taxonomy to systematically map failure modes before writing the PRD:\n\n**False positives (wrong alert)**: The AI flags something that isn't actually a problem. Result: alert fatigue, user stops trusting the AI.\n\n**False negatives (missed problem)**: The AI misses a real problem. Result: user over-relies on AI and misses errors it should have caught.\n\n**Distribution shift**: The AI was trained on contract type A but is now used on contract type B. Result: degraded performance in ways that aren't obvious.\n\n**Adversarial inputs**: Unusual formatting, mixed languages, scanned PDFs, or non-standard clause structures confuse the parser. Result: incorrect or absent suggestions.\n\n**Model drift**: The model's accuracy degrades over time as the distribution of real documents drifts away from training data. Result: gradual quality decline.\n\n**Edge case cliffs**: The model works well on 95% of inputs but fails dramatically on a specific pattern. Result: a specific user segment has a terrible experience.",
        },
        {
          heading: "The pre-mortem technique",
          body: "Before launching any AI feature, run a **pre-mortem**: assume it's 6 months post-launch and the feature has failed badly. Work backwards: what happened?\n\nFor a GhostDraft proofreading feature, a pre-mortem might surface:\n- 'A major law firm disabled the feature because it flagged intentional non-standard formatting as errors 40% of the time' → need to train on more firm-specific styles\n- 'A Japanese in-house counsel team found the Japanese proofreading missed an entire class of errors common in Japanese corporate contracts' → need Japanese legal domain experts in the annotation process\n- 'A user sued claiming they relied on GhostDraft's AI and missed a critical clause' → need to review liability language in terms of service\n\nPremortem outputs feed directly into the PRD's risk section and acceptance criteria.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "GhostDraft is adding proofreading support for a new document type: merger agreements (M&A). These were not in the original training data. Which failure mode should the PM prioritize monitoring first?",
          options: [
            "Model drift",
            "False positives (wrong alerts)",
            "Distribution shift — the model was trained on commercial contracts, not M&A agreements",
            "Adversarial inputs",
          ],
          correct: 2,
          explanation: "Distribution shift is the primary risk when extending an NLP model to a new document type. M&A agreements have different clause structures, terminology, and legal conventions than the commercial contracts the model was trained on. The model's confidence in its outputs may be poorly calibrated for this new domain, leading to high error rates — both false positives and false negatives.",
        },
        {
          type: "fill-blank",
          prompt: "A ___ is a pre-launch exercise where you assume the feature has already failed, then work backwards to understand what likely went wrong.",
          blank: "pre-mortem",
          hint: "The opposite of a post-mortem...",
        },
        {
          type: "scenario",
          prompt: "Map the top 3 failure modes for a new GhostDraft feature: 'Smart cross-reference insertion' that automatically inserts cross-references to other sections as you type. Use the failure mode taxonomy.",
          sampleAnswer: "1. False positives (wrong suggestions): The model suggests 'Section 4.2(b)' when the user is actually drafting a new clause with no existing reference. If the model is too eager to suggest references, users get interrupted constantly with irrelevant suggestions — leads to alert fatigue and disabled feature. Mitigation: set a high confidence threshold for auto-suggesting; require at least 3-4 words of context before triggering. 2. Distribution shift (new contract types): The model trained on commercial contracts may not know the cross-reference patterns in employment agreements or IP agreements. Mitigation: label contract type on ingestion and apply type-specific models or confidence thresholds. 3. Adversarial input (non-standard formatting): Custom numbering systems (1.a.i vs. 1.1.1 vs. Article I, Section 1) can confuse the parser, causing it to suggest wrong or malformed cross-references. Mitigation: test against top 20 most common numbering conventions in your customer base before launch.",
          keyPoints: [
            "Correctly applies false positive, distribution shift, and adversarial input categories",
            "Provides specific, concrete examples for each failure mode",
            "Proposes a mitigation for each — not just diagnosis",
            "Uses real product context (contract types, numbering conventions)",
          ],
        },
      ],
      resources: [
        {
          title: "The Pre-mortem Technique — HBR",
          url: "https://hbr.org/2007/09/performing-a-project-premortem",
          description: "Gary Klein's original HBR piece on the pre-mortem — applicable directly to AI feature launches.",
        },
      ],
    },
    {
      id: "3-4",
      unitId: "unit3",
      companySlug: "boostdraft",
      title: "User Feedback Loops for AI Products",
      tldr: "How users interact with AI output is your best source of quality improvement signal. Designing feedback loops is an AI PM superpower.",
      skills: ["Feedback loop design", "Implicit vs. explicit feedback", "Model improvement cycles"],
      xp: 20,
      content: [
        {
          heading: "The two types of feedback",
          body: "AI products can collect feedback in two ways:\n\n**Explicit feedback**: The user actively tells the AI it was right or wrong. 'This suggestion is helpful' / 'Mark as incorrect' buttons.\n\n**Implicit feedback**: The AI infers from user behavior whether its output was useful. Did the user accept the suggestion? How quickly? Did they modify it after accepting? Did they delete it?\n\nAt GhostDraft, both apply. Explicit: the user clicks 'Dismiss' on a proofreading flag. Implicit: the user ignores a suggestion for 10 minutes, then manually fixes the same issue the AI flagged — a strong signal that the suggestion was not surfaced effectively.",
          goAnalogy: {
            term: "Kikashi",
            reading: "きかし",
            meaning: "A kikashi is a forcing move — it causes your opponent to respond in a way that benefits you. Good feedback loops work like kikashi: they force the AI to respond to user behavior, automatically steering it toward better performance.",
          },
        },
        {
          heading: "Designing the feedback loop at GhostDraft",
          body: "For each AI-powered feature in GhostDraft, the PM should design:\n\n**What signal do we capture?**\n- Accepted suggestions (strong positive signal)\n- Dismissed suggestions (negative signal — but also useful: which types get dismissed most?)\n- Modified-after-accept (signal that the suggestion was directionally right but not quite)\n- Time-to-action (fast accept = high trust; slow accept = friction or uncertainty)\n\n**How does signal flow into model improvement?**\n- Define how feedback data gets labeled and stored\n- Set a cadence for model retraining with new signal (weekly? per-release?)\n- Decide what volume of feedback triggers a retraining cycle\n\n**How do we close the loop with users?**\n- Do users know their feedback is improving the product? This increases feedback participation.\n- Do we surface 'improved since last time' to users who gave feedback? Closes the loop explicitly.",
        },
        {
          heading: "Feedback loop pitfalls",
          body: "Feedback loops can go wrong in specific ways:\n\n**Survivorship bias**: You only see feedback from users who kept using the product. Users who found the AI unhelpful and churned gave you no feedback — but they're the signal you needed most.\n\n**Reinforcing bad patterns**: If early users tend to accept a specific type of incorrect suggestion (because they trust the AI too much), the feedback loop reinforces the wrong behavior.\n\n**Data sparsity on edge cases**: The feedback loop improves common cases quickly, but rare edge cases never get enough signal to improve.\n\n**Label noise**: User dismissals aren't always quality signals. A user might dismiss a correct suggestion because they're in a hurry, or accept an incorrect one because they didn't read it carefully.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "A GhostDraft user accepts an AI-suggested cross-reference, then immediately deletes it 30 seconds later and writes a different one. What is this an example of?",
          options: [
            "A strong positive signal — the user accepted the suggestion",
            "An implicit negative signal — the suggestion was directionally wrong or needed significant modification",
            "No signal — the user may have made a mistake",
            "A false positive — the model shouldn't have made any suggestion",
          ],
          correct: 1,
          explanation: "Accepting-then-quickly-correcting is a strong implicit negative signal. The user found the AI's suggestion unhelpful enough to immediately replace it. This is more valuable feedback than a simple dismiss, because it tells you *what the right answer was* (what the user wrote instead), which can be used to improve training data.",
        },
        {
          type: "fill-blank",
          prompt: "The feedback loop pitfall where the model only improves on common cases because rare edge cases don't generate enough training signal is called data ___.",
          blank: "sparsity",
          hint: "When there's not enough of something...",
        },
        {
          type: "scenario",
          prompt: "You're designing the feedback collection system for GhostDraft's proofreading feature. How would you structure the data you collect to maximize model improvement value?",
          sampleAnswer: "I'd collect feedback at three levels: 1) Per-suggestion: for each flagged issue, log: flag ID, flag type (inconsistency/cross-ref/formatting), confidence score, user action (accepted/dismissed/modified), time from flag to action, and if modified — the final text after modification. 2) Per-session: overall document metrics — how many flags were shown, accepted, dismissed, and how many the user manually fixed without the AI prompting (implicit misses). 3) Per-user/firm: aggregate patterns by user segment — are certain firms consistently dismissing specific flag types? That's a signal the model isn't calibrated for their style. The feedback data should have a clear schema owned by the AI team, and a weekly review cadence where the PM and an ML engineer go through the top dismissed flag types to identify model improvement priorities.",
          keyPoints: [
            "Collects feedback at multiple granularities (suggestion, session, user/firm)",
            "Includes implicit signals (time to action, manual fixes) not just explicit",
            "Captures the post-modification text as training signal",
            "Establishes a review cadence — feedback without review is wasted",
            "Uses firm-level aggregation to surface calibration gaps",
          ],
        },
      ],
      resources: [
        {
          title: "Designing AI Feedback Loops",
          url: "https://pair.withgoogle.com/guidebook",
          description: "Google PAIR (People + AI Research) guidebook — practical patterns for designing AI feedback loops.",
        },
      ],
    },
  ],
};
