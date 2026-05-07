import type { Unit } from "@/data/types";

export const unit2: Unit = {
  id: "unit2",
  companySlug: "boostdraft",
  title: "Taking Initiative with Language Tech",
  description: "Understand NLP, document intelligence, and why GhostDraft's multilingual parser is a bigger deal than it sounds.",
  goTerm: "Sente",
  goReading: "せんて",
  goMeaning: "Taking the initiative — your opponent must respond to you. NLP-powered features can put you in sente: proactively surfacing the right suggestion before the user even knows they need it.",
  color: "ice",
  lessons: [
    {
      id: "2-1",
      unitId: "unit2",
      companySlug: "boostdraft",
      title: "NLP vs. LLMs — GhostDraft's Deliberate Choice",
      tldr: "NLP and LLMs are both language AI — but they operate very differently. GhostDraft chose NLP because it's deterministic, auditable, and safe for legal use.",
      skills: ["NLP literacy", "LLM tradeoffs", "Technology selection reasoning"],
      xp: 20,
      content: [
        {
          heading: "What NLP actually means",
          body: "**Natural Language Processing (NLP)** is a broad field of AI that deals with understanding and manipulating text. It includes tasks like:\n\n- **Tokenization** — splitting text into words or subwords\n- **Named entity recognition (NER)** — identifying 'Acme Corp' as a company, '$5 million' as a monetary value\n- **Part-of-speech tagging** — knowing that 'shall' is a modal verb with legal significance\n- **Text classification** — categorizing a clause as an indemnification clause vs. a liability limitation\n- **Grammar checking** — detecting inconsistencies in numbering, cross-references, or defined terms\n\nGhostDraft uses these NLP techniques to power features like definition popups, smart formatting, and proofreading.",
          goAnalogy: {
            term: "Sente",
            reading: "せんて",
            meaning: "NLP operates in sente: it proactively scans the document, identifies issues, and presents solutions before the user goes looking. The user is always responding to the AI's moves, not the other way around.",
          },
        },
        {
          heading: "What LLMs are and why they're different",
          body: "**Large Language Models (LLMs)** like GPT-4 are trained on enormous text corpora and can generate fluent, contextually-aware text. They're remarkable — but they have fundamental characteristics that make them risky for legal documents:\n\n**1. Hallucination** — LLMs confidently generate plausible-sounding but factually wrong content. In a contract, a hallucinated clause could create unintended legal obligations.\n\n**2. Non-determinism** — The same prompt can produce different outputs each time. This is great for creative tasks but catastrophic for a legal document where every word matters.\n\n**3. Opacity** — You cannot explain exactly why an LLM produced a specific output. An NLP rule-based system can: 'the cross-reference in paragraph 4.2(b) points to a deleted section'.\n\n**4. Privacy risk** — Cloud-based LLMs require sending your document to an external server. GhostDraft's product runs locally; an LLM integration would break this.",
        },
        {
          heading: "The product PM insight: deliberate restraint",
          body: "Here's the key insight for your interview: **GhostDraft's decision not to use LLMs is not a technical limitation — it's a product strategy**.\n\nBy choosing NLP, they can honestly tell enterprise legal customers: 'Our AI never hallucinates. It will catch errors, but it will never invent new ones. Every suggestion is auditable.'\n\nThis is a **trust moat**. Generative AI competitors might offer more impressive demos, but GhostDraft's reliability guarantee is worth more in a legal context.\n\nAn AI PM here needs to protect this moat: evaluating any future feature proposal against the question 'does this compromise our reliability promise?'",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "A junior PM proposes adding an LLM-powered 'auto-draft' feature to GhostDraft that suggests full clause replacements. What's the strongest argument AGAINST this from a product strategy perspective?",
          options: [
            "LLMs are too expensive to run",
            "It would require too much training data from legal documents",
            "It would compromise GhostDraft's core trust proposition — that the AI never introduces new errors into legal documents",
            "The feature would be too hard to implement in a Word add-in",
          ],
          correct: 2,
          explanation: "The strongest argument isn't technical cost — it's the product strategy risk. GhostDraft's differentiation is trustworthiness and reliability. An LLM that could hallucinate a contract clause would undermine the entire value proposition. The PM's job is to protect the trust moat, not just ship features.",
        },
        {
          type: "fill-blank",
          prompt: "NLP systems are ___ — they produce the same output given the same input every time — while LLMs are probabilistic.",
          blank: "deterministic",
          hint: "Same input always equals same output...",
        },
        {
          type: "scenario",
          prompt: "GhostDraft's CEO asks you: 'Should we add an LLM-powered summary feature that summarizes contracts in plain English? Competitors are doing it.' How do you structure your response?",
          sampleAnswer: "I'd use a feasibility + risk framework: First, acknowledge the competitive pressure is real and the user need is valid — lawyers do spend time summarizing contracts. Then assess: 1) Does this require sending documents to a cloud LLM? If so, it breaks our local-first security model — a dealbreaker for enterprise customers. 2) What are the failure modes? A hallucinated summary could cause a lawyer to miss a key obligation. 3) Is there a safer path? A rule-based extractive summary (pulling actual sentences from the document, not generating new ones) might solve 80% of the need with 0% hallucination risk. I'd propose a pilot of the extractive approach first, with clear quality metrics before considering an LLM path.",
          keyPoints: [
            "Validates the user need without immediately agreeing with the solution",
            "Identifies the security constraint (local-first) immediately",
            "Distinguishes between extractive (safe) and generative (risky) summarization",
            "Proposes a path forward rather than just saying no",
            "Frames the decision around user trust and failure modes",
          ],
        },
      ],
      resources: [
        {
          title: "NLP vs. LLMs: A Practical Comparison",
          url: "https://huggingface.co/learn/nlp-course/chapter1/1",
          description: "Hugging Face's intro to NLP — free, practical, and covers the spectrum from rules to transformers.",
        },
        {
          title: "Why LLMs Hallucinate",
          url: "https://www.anthropic.com/research/model-card",
          description: "Understanding the fundamental reasons LLMs generate confident but wrong outputs.",
        },
      ],
    },
    {
      id: "2-2",
      unitId: "unit2",
      companySlug: "boostdraft",
      title: "Document Understanding: How GhostDraft Reads a Contract",
      tldr: "Document understanding is about extracting structured meaning from unstructured text. GhostDraft uses this to power every feature — from definition popups to proofreading.",
      skills: ["Document AI concepts", "Feature-to-technology mapping", "NLP pipeline thinking"],
      xp: 20,
      content: [
        {
          heading: "What 'understanding' a document really means",
          body: "When we say GhostDraft 'understands' a contract, we mean it can extract specific kinds of structured information from unstructured text:\n\n- **Defined terms**: identifying 'Company' as a defined term that appears throughout the document\n- **Cross-references**: detecting 'as defined in Section 4.2(b)' and verifying the reference exists\n- **Clause structure**: knowing that a numbered paragraph is a sub-clause of the one above it\n- **Inconsistencies**: finding that 'Effective Date' is defined differently in two places\n\nEach of these requires a different NLP technique, and the PM needs to understand which technique powers which feature.",
        },
        {
          heading: "The core NLP pipeline",
          body: "GhostDraft's document processing pipeline likely works roughly like this:\n\n1. **Ingestion** — read the Word document structure (paragraphs, tables, footnotes)\n2. **Tokenization** — split text into tokens (words, punctuation, legal shorthand)\n3. **Linguistic analysis** — tag each token with its part of speech, detect sentence boundaries\n4. **Entity extraction** — identify defined terms, party names, dates, monetary values\n5. **Structural analysis** — map the clause hierarchy, detect cross-references\n6. **Consistency checking** — compare extracted entities across the full document\n7. **Suggestion generation** — surface actionable corrections or shortcuts to the user\n\nAs PM, you don't build this pipeline — but you define what goes into step 7. What suggestions are shown? With what confidence? In what UI?",
          goAnalogy: {
            term: "Reading",
            reading: "よみ",
            meaning: "Advanced Go players 'read' many moves ahead — they visualize the full sequence before playing. NLP document understanding is similar: the model reads the full document before surfacing any suggestion, building a complete map of the text's structure.",
          },
        },
        {
          heading: "What the PM owns in the pipeline",
          body: "The PM at GhostDraft owns the **quality thresholds** and **UX decisions** at the output stage:\n\n- At what confidence score does a suggestion get shown vs. suppressed?\n- How is an inconsistency surfaced — inline, in a sidebar, as a modal?\n- What's the copy on a false-positive suggestion? How does the user dismiss it without feeling annoyed?\n- What feedback signal do we capture when a user accepts or rejects a suggestion?\n\nThese decisions directly impact model quality over time, because user feedback becomes training signal.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "GhostDraft's 'optimized input prediction' feature (cross-reference insertion while typing) relies primarily on which NLP capability?",
          options: [
            "Sentiment analysis of the contract tone",
            "Structural analysis that maps the document's clause hierarchy and defined terms in real time",
            "Translation between Japanese, English, and Korean",
            "Grammar correction using grammar rules",
          ],
          correct: 1,
          explanation: "Cross-reference suggestions require the system to know what sections and defined terms exist in the document — which requires structural analysis and entity extraction. When you type 'as defined in', the system queries its internal document map to suggest the most relevant reference.",
        },
        {
          type: "fill-blank",
          prompt: "When a user accepts or rejects an AI suggestion in GhostDraft, that action becomes a ___ signal that can improve the model over time.",
          blank: "training",
          hint: "User behavior on AI outputs feeds back into...",
        },
        {
          type: "scenario",
          prompt: "Engineering proposes a new feature: real-time 'clause risk scoring' that highlights clauses likely to be negotiated or rejected by the counterparty. What product questions would you investigate before writing the PRD?",
          sampleAnswer: "Key questions: 1) Data: what training data exists for 'likely to be negotiated' — is this based on historical redlines from GhostDraft's customer base? Do we have rights to use that data? 2) Ground truth: who defines what makes a clause 'risky'? Legal experts? Could vary by industry, counterparty type, jurisdiction. 3) Failure modes: what happens when the model flags a clause as risky that's actually standard? False positives could undermine lawyer confidence. 4) Privacy: does real-time risk scoring require document content to leave the local machine? 5) User mental model: will lawyers trust this score, or will it create liability if they relied on it incorrectly?",
          keyPoints: [
            "Asks about data sourcing and training data rights",
            "Identifies the subjectivity of 'risk' as a definition problem",
            "Raises false positive rate as a user trust issue",
            "Considers the privacy/security constraint (local model)",
            "Raises liability risk from over-reliance",
          ],
        },
      ],
      resources: [
        {
          title: "Document AI Overview — Google Cloud",
          url: "https://cloud.google.com/document-ai/docs/overview",
          description: "Good conceptual overview of document understanding pipelines, even if you're not using Google's product.",
        },
      ],
    },
    {
      id: "2-3",
      unitId: "unit2",
      companySlug: "boostdraft",
      title: "The Hallucination Problem in Legal Context",
      tldr: "AI hallucination is especially dangerous in legal documents. Understanding why it happens makes you a better AI PM — and helps you explain GhostDraft's strategy in interviews.",
      skills: ["AI failure mode literacy", "Risk communication", "Domain-specific AI design"],
      xp: 25,
      content: [
        {
          heading: "What is hallucination and why does it happen",
          body: "An **AI hallucination** is when a language model generates output that sounds confident and plausible but is factually incorrect or fabricated.\n\nLLMs hallucinate because they're trained to predict the next token based on statistical patterns — not to retrieve facts. They learn to produce text that *sounds like* the training distribution, which means they can produce grammatically perfect, legally-formatted nonsense.\n\nExample: Ask an LLM to summarize a contract's termination clause. It might return: 'The contract may be terminated by either party with 30 days written notice.' The real clause says 90 days. The LLM averaged across similar contracts it was trained on.",
          goAnalogy: {
            term: "Atari",
            reading: "あたり",
            meaning: "In Go, atari means your group is one move away from being captured. A hallucinating AI puts the user in atari: one accepted suggestion away from a serious legal error. The PM's job is to design features that keep the user out of atari.",
          },
        },
        {
          heading: "The specific risks in legal documents",
          body: "Legal documents are uniquely vulnerable to hallucination because:\n\n**1. Precision matters absolutely** — 'shall not exceed $5 million' vs. 'shall not exceed $50 million' is a catastrophic difference, but both are plausible tokens after the preceding text.\n\n**2. Confidentiality is default** — legal teams can't share real contracts for training data, which means LLMs are often trained on synthetic or public contracts that don't reflect the nuances of the actual documents being drafted.\n\n**3. Liability transfers** — if a lawyer accepts an AI suggestion that contains an error, who is responsible? The lawyer, GhostDraft, or the LLM provider? This is an unresolved legal question that makes enterprise buyers very cautious.\n\n**4. Defined terms are local** — in any given contract, 'the Company' means a specific entity. An LLM might confuse it with another party based on training patterns.",
        },
        {
          heading: "How GhostDraft's NLP approach sidesteps this",
          body: "GhostDraft's rule-based and statistical NLP approach is **grounded in the document itself**. It doesn't generate new content — it extracts and cross-references what's already there.\n\nWhen GhostDraft flags an inconsistency in a defined term, it can show exactly *where* the inconsistency is and *what* the conflicting text says. There's nothing invented — the evidence is in the document.\n\nThis is the PM angle: **the absence of hallucination is a feature, not a limitation**. It allows GhostDraft to make a reliability guarantee that no LLM-based legal tool can match.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Why can't a company simply fine-tune an LLM on their customers' legal contracts to eliminate hallucinations?",
          options: [
            "Fine-tuning is too expensive for a startup",
            "Legal contracts are confidential — using customer documents for training raises serious privacy and consent issues",
            "LLMs cannot learn from legal language",
            "Fine-tuning doesn't improve factual accuracy",
          ],
          correct: 1,
          explanation: "Legal contracts are confidential by nature. Using a customer's contracts as fine-tuning data without explicit consent (and likely without their knowledge) would be a serious privacy violation and potential breach of confidentiality. This is a key reason why legal tech AI is hard to build — the best training data is the least accessible.",
        },
        {
          type: "fill-blank",
          prompt: "GhostDraft's NLP approach avoids hallucination because it ___ content from the document rather than generating new content.",
          blank: "extracts",
          hint: "It finds what's already there vs. creating something new...",
        },
        {
          type: "scenario",
          prompt: "A potential enterprise customer asks you: 'We've heard AI tools hallucinate in legal documents. How does GhostDraft prevent this?' Give your answer as if you were in a sales / product demo meeting.",
          sampleAnswer: "Great question — this is actually central to how we designed GhostDraft. We made a deliberate choice not to use generative AI. Every suggestion GhostDraft makes is grounded in what's already in your document. When we flag an inconsistency in a defined term, we can show you exactly the two lines in conflict — we're not inferring or generating anything. Your document never leaves your machine, and our AI never writes new language into your contract. Think of it as a very precise, very fast legal editor that can read your entire 200-page agreement in seconds — but only ever points at what's already there.",
          keyPoints: [
            "Leads with the deliberate design choice, not an apology",
            "Explains extractive vs. generative distinction in plain terms",
            "Uses concrete example (inconsistent defined terms)",
            "Mentions local processing as supporting evidence",
            "Ends with a clear, memorable analogy",
          ],
        },
      ],
      resources: [
        {
          title: "AI Hallucination: A Technical Overview",
          url: "https://arxiv.org/abs/2309.01219",
          description: "Academic survey of hallucination types in LLMs — good background for understanding the problem deeply.",
        },
      ],
    },
    {
      id: "2-4",
      unitId: "unit2",
      companySlug: "boostdraft",
      title: "Multilingual NLP — One Model, Three Languages",
      tldr: "GhostDraft's new multilingual parser supports Japanese, English, and Korean in a single model. This is technically hard and strategically significant.",
      skills: ["Multilingual AI concepts", "Product expansion thinking", "Technical complexity communication"],
      xp: 25,
      content: [
        {
          heading: "Why multilingual NLP is hard",
          body: "Building an NLP system that works across multiple languages is genuinely difficult:\n\n**Different writing systems**: Japanese uses hiragana, katakana, and kanji — no spaces between words. Tokenization (splitting text into units) requires completely different logic than English.\n\n**Different legal conventions**: Japanese contracts use different clause structures and formalities than English or Korean ones. A model trained on English legal text doesn't understand Japanese legal discourse patterns.\n\n**Alignment**: The same legal concept — say, 'force majeure' — appears differently across languages and jurisdictions. The model needs to understand these are the same concept.\n\n**Code-switching**: Contracts in Japan or Korea often mix languages — English defined terms in a predominantly Japanese document. The parser must handle this gracefully.",
          goAnalogy: {
            term: "Fuseki",
            reading: "ふせき",
            meaning: "Fuseki is the opening strategy in Go — setting up stones across the whole board at once rather than focusing locally. Multilingual NLP requires a fuseki mindset: you architect the model to cover the entire language board from the start, not as an afterthought.",
          },
        },
        {
          heading: "Why one model for three languages is a big deal",
          body: "The naive approach is to build three separate models — one per language. But GhostDraft built **a single multilingual parser** that handles Japanese, English, and Korean in one model. Why does this matter?\n\n**Shared representations**: A multilingual model learns that legal concepts are related across languages. It can transfer knowledge — patterns learned from English contracts improve Japanese performance and vice versa.\n\n**Maintenance efficiency**: One model to train, one to deploy, one to monitor. Three separate models would triple the engineering and QA burden.\n\n**Code-switching**: Documents that mix languages (common in Japanese corporate contracts) can be processed without switching models mid-document.\n\nFrom a PM perspective, this is a **platform asset** — not just a feature. It's the foundation for expanding into any new language market.",
        },
        {
          heading: "The product opportunity for an AI PM",
          body: "Understanding the multilingual parser opens up product strategy conversations:\n\n- Adding a new language (e.g., Chinese or German) now requires training data for that language and fine-tuning, not building a new system from scratch\n- The parser enables expansion beyond law firms to multinational corporations that work in multiple languages\n- GhostDraft's stated plan to expand beyond legal documents (to other industries) is enabled by this architecture — the same parser can be adapted for medical records, financial contracts, or HR documents\n\nAs an AI PM, you'd own the roadmap for which languages and document types to prioritize next — and that decision is fundamentally a product/market fit question, not a technical one.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "GhostDraft built one multilingual model instead of three separate models. Which of the following is NOT a benefit of this architectural choice?",
          options: [
            "Knowledge learned from one language can transfer to others (cross-lingual transfer)",
            "One model to maintain, monitor, and deploy instead of three",
            "The model is guaranteed to perform equally well in all three languages",
            "Documents that mix languages can be processed without switching models",
          ],
          correct: 2,
          explanation: "Cross-lingual models do not perform equally across languages — they're typically better in higher-resource languages (more training data) than lower-resource ones. The other three benefits are real advantages of a multilingual model. As a PM, it's important to be realistic about performance parity claims.",
        },
        {
          type: "fill-blank",
          prompt: "GhostDraft's multilingual parser is a ___ asset — it's the foundation for expanding into new languages and document types, not just a product feature.",
          blank: "platform",
          hint: "Something that enables many future things built on top of it...",
        },
        {
          type: "scenario",
          prompt: "GhostDraft's CEO asks you to recommend which language to add to the parser next: Mandarin Chinese, French, or German. How do you approach this decision as an AI PM?",
          sampleAnswer: "I'd frame this as a market opportunity × technical feasibility × strategic alignment decision. First, market: which language market has the highest concentration of legal teams that fit our ICP (in-house counsel at corporations, law firms)? I'd look at deal flow, inbound interest, and the competitive landscape in each market. Second, technical: how much labeled legal data exists in each language for fine-tuning? Mandarin has a large legal market but limited publicly available training data; German and French have well-developed legal corpora. Third, strategic alignment: which market is most adjacent to our existing customer base? If we have enterprise customers in Japan with European subsidiaries, German/French may unlock expansion within existing accounts. I'd propose Mandarin only if market evidence strongly outweighs the data challenge.",
          keyPoints: [
            "Uses a clear decision framework (market × technical × strategic)",
            "Acknowledges training data availability as a real constraint",
            "Connects language choice to existing customer expansion (not just new customers)",
            "Doesn't pick a 'correct' answer — shows the reasoning process",
          ],
        },
      ],
      resources: [
        {
          title: "mBERT and Multilingual Language Models",
          url: "https://huggingface.co/bert-base-multilingual-cased",
          description: "Hugging Face overview of multilingual BERT — the architecture underlying most cross-lingual NLP systems.",
        },
        {
          title: "Cross-lingual Transfer Learning Explained",
          url: "https://ruder.io/cross-lingual-transfer-learning/",
          description: "Sebastian Ruder's accessible explanation of how multilingual models share knowledge across languages.",
        },
      ],
    },
  ],
};
