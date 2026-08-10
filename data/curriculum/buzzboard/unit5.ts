import type { Unit } from "@/data/types";

export const buzzboardUnit5: Unit = {
  id: "unit5",
  title: "The BuzzBoard PM Interview",
  description:
    "Spec writing, prototype thinking, roadmap ownership, and the STAR stories that close an AI PM interview — everything you need to walk in ready.",
  companySlug: "buzzboard",
  goTerm: "Yose",
  goReading: "よせ",
  goMeaning:
    "The endgame — where the result is determined by precise, methodical play. The interview is yose: you've built the understanding over the whole course; now you convert it to a result.",
  color: "snow",
  lessons: [
    {
      id: "5-1",
      unitId: "unit5",
      companySlug: "buzzboard",
      title: "Writing Specs for AI Features",
      tldr:
        "BuzzBoard's job posting explicitly requires 'creating comprehensive specification sets for engineering teams.' An AI feature spec has different sections than a traditional product spec — here's exactly what to include.",
      skills: ["AI feature specs", "Technical writing", "Engineering collaboration"],
      xp: 25,
      content: [
        {
          heading: "What's different about AI feature specs",
          body: `A traditional feature spec defines: user stories, acceptance criteria, edge cases, and success metrics. An AI feature spec needs all of that plus:\n\n**Agent behavior definition** — what does the agent do, step by step? What data does it consume? What actions can it take? What does it produce? This is essentially a prompt spec in prose form, before a single line of code is written.\n\n**Model and architecture decisions** — which model? RAG, fine-tuning, or prompting? If RAG, what data sources? If multi-agent, what's the orchestration pattern? These are product decisions, not just engineering decisions.\n\n**Output schema** — the exact JSON (or other format) the agent produces. Field names, types, and constraints. This is the API contract between the model and the application layer.\n\n**Quality requirements** — what's the quality bar the feature must meet before shipping? Minimum LLM-judge score? Minimum task success rate? Human review of a random sample?\n\n**Latency and cost requirements** — P50 and P95 latency targets. Maximum cost per run. These are shipping criteria, not afterthoughts.\n\n**Failure modes and fallbacks** — explicitly document what happens when the agent fails. Returns partial output? Falls back to a static template? Shows a human-review flag? Silent failures in AI products are the norm, not the exception — spec the fallback explicitly.\n\n**Eval plan** — how will this feature be evaluated? What's the test set? What does a successful eval run look like? When will the first eval run before launch?`,
          goAnalogy: {
            term: "Tsumego",
            reading: "つめご",
            meaning:
              "A life-and-death problem — a local position where you must find the correct sequence to survive or kill. A complete spec is the tsumego solution: every variation accounted for, every failure path resolved before the stones are placed.",
          },
        },
        {
          heading: "Spec template: Zylo outreach personalization feature",
          body: `**Feature:** Zylo Outreach Draft Generation\n\n**User story:** As a sales rep at a B2SMB vendor, I want Zylo to generate a personalized outreach email for a prospect in under 3 seconds, so that I can send high-quality messages at scale without spending 10 minutes per prospect.\n\n**Agent behavior:**\n1. Receive prospect_id from the rep's queue\n2. Retrieve IRIS profile for prospect_id (tool call: IRIS API)\n3. Extract top 2 challenges from the IRIS profile (reasoning step)\n4. Select the most relevant BuzzBoard value prop for each challenge (reference internal value prop library)\n5. Generate 2 outreach variants: one short (under 100 words), one detailed (100–150 words)\n6. Return structured output\n\n**Output schema:**\n\`{ prospect_id, research_confidence, outreach_variants: [{variant_id, subject, body, tone, word_count}], flags: {low_data_quality, needs_human_review} }\`\n\n**Quality requirements:** LLM-judge personalization score ≥ 4.0/5; value prop clarity score ≥ 4.0/5; length compliance: 100% pass\n\n**Latency:** P50 < 2.5s, P95 < 5s (measured from API request to first token streamed)\n\n**Cost:** < $0.025 per run at current Claude Sonnet pricing\n\n**Fallback:** If IRIS returns low_data_quality: true, generate a vertical-generic template using prospect's industry only; set needs_human_review: true\n\n**Eval plan:** Run against 150-example prospect eval set before launch. Minimum pass rate: 85% of examples meet quality thresholds. Run again after each prompt change in production.`,
        },
        {
          heading: "Writing for an engineering audience",
          body: `The best AI feature specs are written to eliminate ambiguity for engineers, not to demonstrate PM thoroughness. A spec that requires 10 back-and-forth clarification questions is a failed spec.\n\n**Be specific about data flows:** "The agent receives a prospect_id" is better than "the agent knows about the prospect." Specify the exact API endpoint, the expected payload format, and what to do if the API is unavailable.\n\n**Use concrete examples:** Don't say "the agent should generate personalized outreach." Show a mock input (a sample IRIS profile) and a mock output (a sample draft). This eliminates ambiguity about what "personalized" means more effectively than any description.\n\n**Separate what from how:** A spec defines *what* the feature does and what success looks like. How the engineering team implements it (which orchestration library, which vector DB, which caching strategy) is their decision. Over-speccing implementation details disrespects engineering expertise and makes specs harder to maintain.\n\n**Include the non-obvious constraints:** The constraints that aren't obvious from the user story are the ones engineers will miss. "Never mention competitor names" won't be in any API spec — it has to be in the system prompt design and the output validation. Spell it out.\n\n**Version your specs:** Specs change as implementation proceeds. Version the document and track changes so engineers know whether they're working from the latest spec or an outdated one.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "An engineer reads your spec for a new Ember feature and asks: 'What happens if the account health score API returns an error?' Your spec doesn't address this. What does this indicate?",
          options: [
            "Engineers should handle error cases independently without requiring spec guidance",
            "The spec is incomplete — fallback behavior for API failures is a product decision (not just an engineering decision) and must be specified",
            "This is a minor edge case that doesn't need to be specced until after launch",
            "The engineer should file a bug ticket for the API team to fix their reliability issues",
          ],
          correct: 1,
          explanation:
            "API errors are expected, not exceptional. What happens when they occur is a product decision: does Ember skip the account? Use cached data? Flag it for manual review? These behaviors have user-facing implications and must be specified by the PM, not decided ad-hoc by engineers.",
        },
        {
          type: "multiple-choice",
          question:
            "Why should a PM spec include mock input and output examples rather than just descriptive text?",
          options: [
            "Engineers prefer visual examples to prose",
            "Concrete examples eliminate ambiguity more effectively than descriptions — they show exactly what 'personalized outreach' looks like, which 5 engineers would interpret 5 different ways from prose alone",
            "Mock examples help the LLM understand the feature during fine-tuning",
            "Examples are required by Agile spec methodology for AI features",
          ],
          correct: 1,
          explanation:
            "Concrete examples compress ambiguity. Two engineers reading 'generate personalized outreach' will build two different things. Two engineers looking at the same mock output will build something much closer to each other — and to your intent.",
        },
        {
          type: "multiple-choice",
          question:
            "Which of these items should a PM include in an AI feature spec that would NOT be in a traditional software feature spec?",
          options: [
            "User stories and acceptance criteria",
            "The model selection decision, output schema, eval plan, cost per run target, and explicit fallback behavior for AI failures",
            "Design mockups and user flow diagrams",
            "Engineering estimates and sprint assignment",
          ],
          correct: 1,
          explanation:
            "Traditional specs cover user stories, acceptance criteria, and success metrics. AI specs additionally require: model choice, output schema (the contract between model and app), eval plan (how quality is verified), cost targets (part of definition of done), and fallback behavior (what happens when the AI fails, which it will).",
        },
      ],
      resources: [
        {
          title: "AI Product Spec Template (Reforge)",
          url: "https://www.reforge.com/blog/ai-product-spec",
          description: "Reforge's framework for writing specs for AI features — useful reference for the interview.",
        },
        {
          title: "Lenny's Newsletter: How to spec AI features",
          url: "https://www.lennysnewsletter.com/p/how-to-build-ai-products-that-work",
          description: "PM-focused guide on what makes AI feature specs different and better.",
        },
      ],
    },
    {
      id: "5-2",
      unitId: "unit5",
      companySlug: "buzzboard",
      title: "Building Working Prototypes",
      tldr:
        "BuzzBoard explicitly requires PMs to 'develop working prototypes with live model integration.' This is a non-negotiable signal — they want a PM who can build, not just specify. Here's how to prototype an LLM feature without being an engineer.",
      skills: ["Prototype development", "LLM API usage", "Technical PM skills"],
      xp: 30,
      content: [
        {
          heading: "What 'working prototype' means at BuzzBoard",
          body: `BuzzBoard's job posting says "develop working prototypes with live model integration." This doesn't mean building production code — it means demonstrating that you can make an LLM API call, see what the model produces, and iterate on the prompt until it works.\n\nA working prototype for BuzzBoard's PM interview might be:\n\n- A Python script that takes a company URL, calls the Anthropic or OpenAI API with a system prompt you wrote, and returns a structured SMB analysis\n- A Google Colab notebook that tests 3 prompt variants for outreach generation and compares output quality\n- A simple Next.js page (using Cursor or v0) that demos a Zylo-like outreach generation flow with a real API call behind it\n\nThe bar is: you can make the model do something real, you can show the output, and you can explain what you changed and why. It doesn't need to be production-ready — it needs to demonstrate hands-on understanding.\n\nWhy does BuzzBoard care? Because a PM who has never made an API call can't meaningfully spec prompt architecture, can't credibly evaluate AI output quality, and can't pair with engineers on agent behavior. The prototype requirement is a signal filter: they want to hire someone who is dangerous enough with the tools to be a real technical partner.`,
          goAnalogy: {
            term: "Reading",
            reading: "よみ",
            meaning:
              "The ability to calculate sequences mentally before placing a stone. Prototyping is reading: you calculate what the agent will do before committing to a spec, so you're not surprised in production.",
          },
        },
        {
          heading: "Building an IRIS-like prototype",
          body: `Here's a concrete example of a working prototype that demonstrates the key skills BuzzBoard is looking for:\n\n**The task:** given a company website URL, generate a structured SMB profile with: top 3 business challenges, digital presence score (1–10), and 2 personalized outreach angles.\n\n**The prototype (Python, ~50 lines):**\n\n\`\`\`python\nimport anthropic\nimport httpx\nfrom bs4 import BeautifulSoup\n\ndef analyze_smb(url: str) -> dict:\n    # Fetch website content\n    html = httpx.get(url, timeout=10).text\n    soup = BeautifulSoup(html, "html.parser")\n    text = soup.get_text(separator=" ", strip=True)[:3000]\n    \n    client = anthropic.Anthropic()\n    response = client.messages.create(\n        model="claude-sonnet-4-5",\n        max_tokens=1024,\n        system=\"\"\"You are an AI business analyst. Given a small business website, \nanalyze their digital presence and identify sales opportunities. \nReturn ONLY valid JSON with this schema:\n{\n  "business_name": str,\n  "industry": str,\n  "challenges": [str, str, str],\n  "digital_presence_score": int (1-10),\n  "outreach_angles": [str, str]\n}\"\"\",\n        messages=[{\"role\": \"user\", \n                   \"content\": f\"Analyze this business website content:\\n{text}\"}]\n    )\n    import json\n    return json.loads(response.content[0].text)\n\n# Test it\nresult = analyze_smb("https://example-plumbing.com")\nprint(result)\n\`\`\`\n\nThis prototype demonstrates: API call with structured output, basic RAG (fetching web content as context), JSON schema adherence, and prompt design. It's the building block of IRIS.\n\nYou don't need to memorize this — you need to understand what each part does well enough to build something similar, debug it when it breaks, and explain your prompt choices.`,
        },
        {
          heading: "Tools that make prototyping faster",
          body: `You don't have to write every prototype from scratch. The PM toolkit for rapid AI prototyping in 2025:\n\n**Cursor / GitHub Copilot** — AI code editors that let you describe what you want in English and get working code. "Write a Python function that calls the Anthropic API with this system prompt and returns structured JSON" → working code in 30 seconds. You still need to understand what it produces and iterate on the prompt.\n\n**Google Colab** — free browser-based Python environment. No local setup. Install anthropic or openai in the first cell, run your prototype, share a link. Ideal for interview demos.\n\n**v0.dev (Vercel)** — generate a working React frontend from a description. "Build a form that takes a company URL and displays a BuzzBoard-style SMB analysis with structured cards." Then wire an API route behind it for the actual LLM call.\n\n**Claude claude.ai with Projects** — for prompt iteration without code: paste web content directly, iterate on your system prompt, test variants. Not a "prototype" in the code sense but useful for prompt design before you write the integration.\n\n**Anthropic / OpenAI Playgrounds** — web-based prompt testing environments with token counting, system prompt fields, and conversation simulation. Free to use within API usage tiers. Great for testing prompt variants quickly.\n\n**For the interview:** have 1–2 working notebooks or scripts you can actually run and show. Not a slide deck about what you would build — something that actually works with a live API call. If the interviewer says "can you show me?", you want to be able to say yes and open a browser.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "BuzzBoard's job posting requires 'developing working prototypes with live model integration.' A candidate prepares detailed wireframes showing what an IRIS-like feature would look like. Is this sufficient?",
          options: [
            "Yes — wireframes demonstrate product thinking and vision, which is more important than technical implementation",
            "No — wireframes show what you would build, not that you can build it. BuzzBoard wants evidence of hands-on LLM integration: an actual script or notebook that calls a model API and produces real output",
            "It depends on whether the candidate has a technical co-founder who can build it",
            "Yes, as long as the wireframes include technical architecture diagrams",
          ],
          correct: 1,
          explanation:
            "BuzzBoard explicitly filters for PMs who can prototype with live model integration. Wireframes are valuable but don't demonstrate this. The bar is: can you open a Python file or Colab notebook and show a working LLM call that produces meaningful output?",
        },
        {
          type: "multiple-choice",
          question:
            "When prototyping Zylo's outreach generation, your first draft produces verbose, formal messages. Which tool is fastest for iterating on the system prompt to fix this?",
          options: [
            "Rewrite the entire Python script with the new prompt and re-run",
            "Use the Anthropic Playground or Claude.ai to test prompt variants interactively — then copy the winning prompt back into your code",
            "Ask an engineer to update the prompt in the production system",
            "Fine-tune the model on examples of the tone you want",
          ],
          correct: 1,
          explanation:
            "The Playground is purpose-built for rapid prompt iteration without code changes. Test a new constraint ('write in a conversational, direct tone, max 100 words') immediately, see the output, iterate in seconds. Only once you have a winning prompt should you update the code.",
        },
        {
          type: "scenario",
          prompt:
            "You're asked in the BuzzBoard interview: 'Walk me through a prototype you built.' You built a Python script that takes a business URL, fetches the website, calls Claude claude-sonnet-4-5 with a structured output prompt, and returns a JSON SMB profile with challenges and outreach angles. Walk through your explanation.",
          sampleAnswer:
            "I built a prototype that demonstrates IRIS's core value prop: turn a URL into actionable sales intelligence in seconds. Here's what it does: first, it fetches the business's website content using httpx and strips it down to the most relevant 3,000 characters of text. Second, it calls Claude Sonnet with a system prompt I designed that instructs the model to return structured JSON — specifically a list of the top 3 business challenges, a digital presence score from 1 to 10, and 2 outreach angles specific to this business. Third, it parses the JSON output and returns it as a Python dict that downstream code can consume. What I learned from building it: the biggest quality lever is how I frame the 'challenges' instruction — vague prompts return generic challenges, but when I added 'focus on challenges visible from their digital footprint: reviews, website quality, missing capabilities versus competitors', the quality jumped significantly. I also learned that website content needs to be trimmed before injection — early versions hit context limits on content-heavy sites. I'd next add Google Reviews as a second retrieval source and test whether the profile quality improves enough to justify the added API cost.",
          keyPoints: [
            "Show you actually built it — specific technical choices (httpx, BeautifulSoup, Claude Sonnet) demonstrate hands-on experience",
            "Explain what you learned from building it — prompt iteration, data quality lessons, context limits",
            "Articulate what you'd do next — shows you're thinking about production, not just the demo",
            "Connect it to BuzzBoard's actual product (IRIS) — don't just describe the code, explain why it's relevant to their problem",
          ],
        },
      ],
      resources: [
        {
          title: "Anthropic API Quickstart",
          url: "https://docs.anthropic.com/en/docs/quickstart",
          description: "5-minute guide to making your first Claude API call — start here if you haven't prototyped before.",
        },
        {
          title: "Google Colab",
          url: "https://colab.research.google.com/",
          description: "Free browser-based Python environment — ideal for interview-ready LLM prototypes.",
        },
      ],
    },
    {
      id: "5-3",
      unitId: "unit5",
      companySlug: "buzzboard",
      title: "STAR Stories & Interview Prep",
      tldr:
        "The BuzzBoard interview will test your AI product depth, your ownership instinct, and your ability to operate with ambiguity. Here are the STAR stories you need and the questions you should prepare for.",
      skills: ["STAR storytelling", "Interview preparation", "AI PM positioning"],
      xp: 30,
      content: [
        {
          heading: "The questions BuzzBoard will ask",
          body: `Based on the job posting, prepare for four categories of questions:\n\n**1. Technical depth on AI agents**\n- "Walk me through how you'd design the agent behavior for [one of our products]."\n- "How would you decide which model to use for [specific task]?"\n- "What does a good eval framework look like for an outreach agent?"\n- "We're seeing quality degradation in [product]. How would you diagnose it?"\n\n**2. Product ownership and roadmap**\n- "Tell me about a product you owned end-to-end. What was the hardest tradeoff you made?"\n- "How do you prioritize when quality, cost, and latency are all constrained?"\n- "A customer requests a feature that's technically feasible but doesn't fit the roadmap. How do you handle it?"\n\n**3. Hands-on building**\n- "Walk me through a prototype you built with an LLM API."\n- "Show me a spec you wrote for an AI feature."\n- "How did you measure whether your AI product was working?"\n\n**4. Ambiguity and judgment**\n- "BuzzBoard ships fast. Tell me about a time you shipped with incomplete information."\n- "How do you decide when an AI feature is good enough to ship?"\n- "Tell me about a feature you shipped that failed. What did you do?"\n\nFor each category, you need at least one strong, specific STAR story from your actual experience — plus the ability to reason through the BuzzBoard-specific scenarios from the knowledge you've built in this course.`,
          goAnalogy: {
            term: "Endgame",
            reading: "ヨセ",
            meaning:
              "The final phase where accumulated advantage converts to a decisive result. The interview is endgame: you've built the board position across this entire course. Now play precisely to convert it.",
          },
        },
        {
          heading: "STAR story: AI product ownership",
          body: `**The story format:** Situation → Task → Action → Result\n\n**Story template for 'AI product with measurable quality improvement':**\n\nSituation: "We were building [AI feature] for [product]. Initial outputs were inconsistent — sometimes excellent, sometimes completely off-target. The team had shipped v1 but customers were complaining that [specific quality problem]."\n\nTask: "I was responsible for [owned specific scope — the agent behavior, the eval framework, the model selection]. My target was to improve [specific metric — outreach reply rate, classification accuracy, CSAT] by [target] within [timeframe]."\n\nAction: "I started by building an eval dataset — I pulled 100 real production examples, had 3 team members score them on a [personalization / accuracy / relevance] rubric, and identified the top failure modes. I found that [specific insight — e.g., 60% of low-quality outputs came from prospects with low IRIS data quality]. I then redesigned the [prompt / retrieval / fallback behavior] to handle this case explicitly: [specific change you made]. I validated with the eval set before shipping."\n\nResult: "[Metric] improved from [X] to [Y] over [timeframe]. [Business impact — churn decreased, reply rate increased, customer satisfaction improved]. We also had a reusable eval framework that let us ship subsequent prompt changes with confidence."\n\nAdapt this template to your actual experience. The key elements: you owned the quality outcome, you used data to diagnose the problem, you made a specific change, and you measured the result.`,
        },
        {
          heading: "Positioning yourself for this role",
          body: `The BuzzBoard PM role is not a generalist PM role with AI exposure — it's a technical AI PM role that requires hands-on agent design experience. Frame yourself accordingly.\n\n**What to emphasize:**\n\n**Hands-on LLM work** — if you've made API calls, designed prompts, run evals, or shipped an LLM-powered feature, lead with this. Specificity wins: "I used Claude Sonnet with structured JSON output for [specific use case]" beats "I've worked with AI tools."\n\n**Ownership mentality** — BuzzBoard says "full ownership of outcomes and roadmaps." Show you've held P&L responsibility or equivalent, made roadmap tradeoffs, and been accountable for results (not just shipped features).\n\n**Speed and ambiguity comfort** — they want someone who ships fast and handles incomplete information. Tell a story about a decision you made with 60% of the information you wanted, and why it was the right call.\n\n**B2B/enterprise context** — if you have B2B SaaS experience, tie it to understanding enterprise customer needs, sales cycles, and account-based workflows. If not, make the SMB market knowledge you've built in this course explicit.\n\n**What NOT to do:**\n- Don't describe AI as "something you've been exploring" — describe it as something you've built with\n- Don't give generic PM answers to agent-specific questions — use the vocabulary you've learned (prompt architecture, eval framework, RAG, output schema)\n- Don't say "I would [do something]" when they ask what you've done — redirect to what you've actually built, even if it's a side project or prototype\n- Don't skip the prototype step — if you don't have one before the interview, build something this week`,
        },
      ],
      exercises: [
        {
          type: "scenario",
          prompt:
            "BuzzBoard asks: 'Describe how you would approach designing the agent behavior for Ignite's prospect scoring — specifically, how you'd define what a high-quality prospect looks like for a customer selling HR software to SMBs.' Walk through your answer.",
          sampleAnswer:
            "I'd start by working backwards from business outcomes, not forward from data. A 'high-quality prospect' should be defined as: an SMB that's likely to buy, likely to get value, and likely to retain. Those are three separate criteria and I'd weight them differently depending on the customer's sales motion. For an HR software vendor, I'd start by interviewing their best customers: what signals were present before they bought? Common ones in SMB HR software: company size (5–50 employees, past the founder-only stage), industry (services businesses where labor cost is high), recent hiring events (LinkedIn job posts signal growth and pain), and weak tech stack signals (no existing HRIS visible in their digital footprint). I'd translate these into IRIS-retrievable signals: firmographic data (size, industry), job posting signals (via LinkedIn or Indeed scraping), and tech stack detection. The Ignite scoring model would be a weighted sum of these signals, calibrated to the customer's historical conversion data. The prompt architecture would specify: 'Given these signals for [SMB], score prospect quality 1–10 with explanation. High scores require: signal for company size in range, at least one hiring signal, no competitor product detected. Return JSON with score, confidence, and top 3 reasons.' I'd validate this with an eval set built from the customer's historical won/lost data — closed deals should score high, lost deals should score low.",
          keyPoints: [
            "Define 'quality prospect' from business outcomes, not available data — work backwards",
            "Translate qualitative criteria (likely to buy, likely to retain) into IRIS-retrievable signals",
            "The scoring prompt needs explicit criteria, not just 'rate this prospect'",
            "Validate with historical data: won deals should score high, lost deals should score low — this is your ground truth eval",
          ],
        },
        {
          type: "scenario",
          prompt:
            "BuzzBoard asks: 'How do you decide when an AI feature is good enough to ship?' Give your answer.",
          sampleAnswer:
            "I think about it in three gates, not a single threshold. Gate 1: technical bar — does the feature meet its quality floor (defined in the spec before we built it)? For a Zylo draft, that's a minimum LLM-judge score of 4.0/5 on our eval set, >95% task success rate, and <5 second P95 latency. If it doesn't clear these, it doesn't ship regardless of deadlines. Gate 2: user experience bar — does the fallback behavior work correctly when the AI fails? Does the edge case handling make sense? I do a structured review of the 20% lowest-scoring eval examples and make sure the product handles those gracefully, not just the average case. Gate 3: business context — what's the cost of delay vs. the cost of a quality issue? For a customer-facing agent like Zylo, one badly generated message reaching a prospect is a reputational risk that's worth delaying to prevent. For an internal tooling feature, I'd ship at a lower quality bar with a clear feedback loop. The answer isn't a single number — it's a structured decision that weighs the quality evidence you have against the risk of the quality issues you don't.",
          keyPoints: [
            "Pre-defined quality bars (from the spec) are the first gate — not negotiable",
            "Edge case review (the 20% hardest examples) is the second gate — average quality can hide catastrophic tail behavior",
            "Business context shapes the risk tolerance — customer-facing vs. internal, reputational risk vs. convenience",
            "Frame it as a decision structure, not a fixed threshold — demonstrates judgment over checklist-following",
          ],
        },
        {
          type: "multiple-choice",
          question:
            "BuzzBoard asks: 'Tell me about a time you made a model selection decision.' You used GPT-4o-mini for a classification task after testing 3 models. What's the strongest version of this answer?",
          options: [
            "\"I chose GPT-4o-mini because it's a good balance of cost and quality for classification tasks.\"",
            "\"I evaluated GPT-4o, GPT-4o-mini, and Claude Haiku on our 150-example eval set. GPT-4o scored 91% accuracy but at $0.025/call. Claude Haiku scored 87% but at $0.002/call. GPT-4o-mini hit 89% at $0.003/call — meeting our 85% quality threshold at 88% lower cost than GPT-4o. We shipped GPT-4o-mini and saved $8,400/month.\"",
            "\"I worked with the AI team to evaluate our options and we landed on GPT-4o-mini based on their recommendation.\"",
            "\"I chose GPT-4o-mini because it's OpenAI's most cost-effective model for our use case.\"",
          ],
          correct: 1,
          explanation:
            "Specificity wins in PM interviews. Answer B demonstrates exactly the BuzzBoard PM profile: you ran a structured eval, you quantified the tradeoff (accuracy vs. cost), you made a data-driven decision, and you measured the business result. The other answers are generic — any PM could say them without having actually done the work.",
        },
      ],
      resources: [
        {
          title: "Lenny's Newsletter: How to interview for AI PM roles",
          url: "https://www.lennysnewsletter.com/p/how-to-interview-for-ai-product-manager",
          description: "The questions, the signals, and the preparation that top AI PM candidates use.",
        },
        {
          title: "Reforge: AI PM Skills Framework",
          url: "https://www.reforge.com/blog/product-management-for-ai",
          description: "How the PM role is evolving for AI products — directly applicable to BuzzBoard's expectations.",
        },
      ],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "Which of the following is a required section in an AI feature spec that is NOT typically in a traditional product spec?",
      options: [
        "User stories and acceptance criteria",
        "Agent behavior definition, output schema, model selection, eval plan, and cost per run target",
        "Design mockups and user flow diagrams",
        "Engineering estimates and sprint assignments",
      ],
      correct: 1,
      explanation:
        "Traditional specs define what to build and how to measure success. AI specs additionally require: how the agent behaves step-by-step, the exact output format (schema), which model and why, how quality will be validated (eval plan), and what the feature costs to run at scale.",
    },
    {
      type: "multiple-choice",
      question: "BuzzBoard asks you to 'walk through a working prototype you built.' You have a Google Colab notebook that calls Claude claude-sonnet-4-5 with a URL input and returns a structured JSON SMB profile. What additional detail makes this answer strongest?",
      options: [
        "Mentioning the exact number of lines of code in the prototype",
        "Explaining what you learned from iterating on the prompt — what changed, why, and what the quality improvement was",
        "Listing every Python library you used in the implementation",
        "Explaining that the prototype is production-ready and could be deployed immediately",
      ],
      correct: 1,
      explanation:
        "What makes a prototype answer compelling is the learning — what the initial version got wrong, what specific prompt change improved it, and what you measured. This demonstrates the iterative, data-driven approach BuzzBoard's PM role requires. Listing libraries or claiming production-readiness doesn't differentiate.",
    },
    {
      type: "multiple-choice",
      question: "BuzzBoard's job description emphasizes 'comfort with ambiguity and rapid cycles.' Which STAR story element best demonstrates this?",
      options: [
        "Situation: describing the complexity of the product environment you worked in",
        "Action: making a specific decision with incomplete information, explaining what you knew, what you didn't, and why the decision was still the right call",
        "Result: quantifying the success of a feature you shipped",
        "Task: describing the scope of your ownership responsibility",
      ],
      correct: 1,
      explanation:
        "Ambiguity comfort is demonstrated in the Action section — specifically in how you reason under uncertainty. 'I had 60% of the data I wanted, but I knew [X constraint] and [Y signal], so I decided to [specific action] and structured it to be reversible if I was wrong.' That reasoning process is what BuzzBoard is screening for.",
    },
    {
      type: "multiple-choice",
      question: "You're asked: 'What's the hardest tradeoff you've made as a PM on an AI product?' Which answer best fits the BuzzBoard PM profile?",
      options: [
        "\"The hardest tradeoff was between speed and quality — we always want to ship fast but maintain high standards.\"",
        "\"We had to choose between a faster, cheaper model and our quality bar. I built the eval framework to quantify exactly what quality we'd lose at 10× lower cost, then took that tradeoff analysis to leadership with a recommendation. We accepted 3% quality degradation for 87% cost reduction — a decision I'd make again given the data.\"",
        "\"I had to balance customer requests against the engineering team's bandwidth and technical debt.\"",
        "\"The hardest tradeoff was deciding which features to cut from the roadmap to hit our deadline.\"",
      ],
      correct: 1,
      explanation:
        "BuzzBoard wants a PM who makes model, quality, and cost tradeoffs with data — not one who talks in generalities about 'balancing' speed and quality. Answer B demonstrates: quantified tradeoff analysis, a structured decision process, ownership of the outcome, and confidence in the data-driven call.",
    },
  ],
  quizXp: 40,
};
