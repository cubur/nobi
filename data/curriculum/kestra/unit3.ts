import type { Unit } from "@/data/types";

export const kestraUnit3: Unit = {
  id: "unit3",
  title: "Customer Discovery for AI Workflows",
  description:
    "How to run customer interviews that surface real AI workflow pain — not aspirational requests. How to validate use cases before building. How to turn raw customer insights into product specs and reusable blueprints.",
  companySlug: "kestra",
  goTerm: "Haengma",
  goReading: "はえんま",
  goMeaning:
    "Direction of movement — stones played to advance a group's strategic direction, not just react locally. Customer discovery is haengma: every interview should advance your understanding of the strategic direction, not just collect local feature requests.",
  color: "ice",
  lessons: [
    {
      id: "3-1",
      unitId: "unit3",
      companySlug: "kestra",
      title: "Running AI Workflow Customer Interviews",
      tldr:
        "Customer interviews for AI products are harder than standard discovery interviews because customers conflate what they think they want (the AI solution) with what they actually need (reliable automation of a painful process). Here's how to get past the surface request.",
      skills: ["Customer discovery", "Interview technique", "AI workflow research"],
      xp: 20,
      content: [
        {
          heading: "The AI discovery problem",
          body: `Standard product discovery interviews focus on understanding the job-to-be-done: what problem are you trying to solve, how do you solve it today, what's frustrating about the current approach?\n\nAI discovery has an extra layer of complexity: **customers often arrive with a solution in mind.** They've seen a demo, read a blog post, or heard from a vendor. They come to the interview saying "we want AI to do X" — and your job is to understand whether X is the right answer to the actual problem.\n\n**The bias to watch for:** customers in 2025-2026 are under pressure to "do AI" from leadership. Some requests are genuinely motivated by pain; others are motivated by the desire to have an AI story for the board deck. Your job is to distinguish them.\n\n**The core technique:** redirect from solution to problem. When a customer says "we want AI to do X," your follow-up is: "Tell me about a time X caused you a problem. What happened, what did you do, what was the cost?" This grounds the conversation in specific experience, not hypothetical desire.`,
          goAnalogy: {
            term: "Kikashi",
            reading: "きかし",
            meaning:
              "A forcing move that the opponent must respond to. The best interview questions are kikashi: they force the customer to respond with specifics, not generalities. 'Tell me about the last time this happened' is a kikashi.",
          },
        },
        {
          heading: "The AI workflow interview script",
          body: `**Opening (5 min)**\n"Tell me about the workflows your team runs that involve AI today — or that you've been thinking about automating with AI."\n\nLet them describe. Don't interrupt with product questions. Note: what they lead with is usually their most pressing pain or most exciting aspiration.\n\n**Problem depth (15 min)**\nFor each workflow they mention:\n- "Walk me through how that workflow works today, step by step."\n- "Where does it break down or slow you down?"\n- "Tell me about the last time it went wrong. What happened?"\n- "What did you do to fix it? How long did it take?"\n- "What would happen if you could do this 10x faster / without manual steps?"\n\n**AI-specific questions (10 min)**\n- "If you imagine this workflow with AI assistance, what would the AI be doing specifically? What inputs would it see, what would it return?"\n- "How would you know if the AI was doing it right? What does 'right' look like?"\n- "What would happen if the AI was wrong 5% of the time? 20% of the time? Is there a failure rate you couldn't tolerate?"\n- "Who would need to trust this before it could run without a human checking it?"\n\n**Current tools (5 min)**\n- "What tools do you use today for orchestration, automation, or AI?"\n- "What's missing from those tools that you'd want to solve?"\n\n**Closing**\n"If you could change one thing about how this workflow runs today, what would it be?"`,
        },
        {
          heading: "Reading the signals in interview responses",
          body: `**Signals of a real, buildable pain:**\n- Customer can describe the problem in specific, concrete terms ("every Monday morning, an analyst spends 2 hours pulling these three reports and combining them")\n- Customer has tried to solve it and knows why the current solution fails\n- Customer knows what "good" looks like and can describe it precisely\n- The pain has an economic or operational consequence they can quantify\n- Multiple stakeholders are affected (not just the person you're talking to)\n\n**Signals of an aspirational request, not a real pain:**\n- Customer describes the desired AI feature in detail but struggles to articulate the current problem\n- "It would be cool if..." rather than "this is costing us..."\n- When you ask about the last time it went wrong, they can't give you a specific example\n- The request changes significantly when you probe the failure modes ("well, in that case a human would check it anyway...")\n- Only one person has this problem; nobody else in the company would care\n\n**The most important signal:** does the customer know what they'd do if the AI was wrong? Customers with real pain have already thought about the failure mode. Customers with aspirational requests usually haven't.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "During a discovery interview, a customer says: 'We want to use AI to automatically generate weekly status reports for our data pipelines.' Your best follow-up question is:",
          options: [
            "'What format do you want the status reports in?'",
            "'Have you looked at any existing tools for this?'",
            "'Tell me about the last time someone asked for a status report that wasn't ready. What happened and what was the cost?'",
            "'How many pipelines do you have and how often do you report on them?'",
          ],
          correct: 2,
          explanation:
            "This is the 'redirect to problem' technique. The customer has described a solution (AI-generated reports). Your job is to understand the underlying pain. 'Tell me about the last time...' forces a specific, concrete answer that reveals whether the pain is real and significant. Format questions (Option A) and volume questions (Option D) assume the feature is already being built. Option B is useful but doesn't probe the pain specifically.",
        },
        {
          type: "multiple-choice",
          question:
            "After 8 customer interviews, you've found: 4 customers mention wanting AI to help debug failing workflows; 2 customers mention AI-generated flows; 1 customer wants AI-powered cost optimization; 1 customer wants AI anomaly detection. What does this tell you about the roadmap?",
          options: [
            "Build AI-generated flows first because it's the most innovative feature",
            "AI workflow debugging has the strongest signal — 4 independent customers citing the same pain without prompting is the strongest pattern in the data",
            "All four are equally important and should be scheduled in parallel",
            "Build the cost optimization feature first since it has the clearest ROI story",
          ],
          correct: 1,
          explanation:
            "In discovery research, pattern strength is determined by how many independent customers arrive at the same pain without prompting. 4/8 customers mentioning debugging is a clear signal — that's 50% unprompted mention rate. The others (2, 1, 1) are data points, not patterns. Debugging pain should be the lead for the next spec. This doesn't mean ignoring the others — it means starting where the signal is strongest.",
        },
        {
          type: "scenario",
          prompt:
            "A customer says: 'We want Kestra to have an AI copilot that can answer questions about our workflows.' You suspect this is more aspirational than real. How do you probe to find out?",
          sampleAnswer:
            "I'd shift from the solution to the underlying behavior: 'When your team has questions about how a workflow works or why it failed — what do they do today?' If the answer is 'they look at the YAML, check the logs, ask whoever wrote it' — then there's a real discovery flow I can understand. Then I'd follow up: 'Tell me about the last time someone spent more than 30 minutes trying to understand a failing workflow. What were they trying to figure out?' This grounds us in a real incident. Then the AI copilot question becomes: would natural language answers have been faster than the actual process they followed? If their real process was reading logs in Kibana and the question was 'which task failed and why' — that's a structured query problem, not a copilot problem. If the question was 'why is this workflow designed this way, what are its dependencies, and is it safe to modify this task' — that's a genuine knowledge retrieval problem where an AI-powered answer over the workflow's history and documentation could help. The interview helps me understand which problem they actually have, not which solution they think sounds cool.",
          keyPoints: [
            "Redirect from the solution ('AI copilot') to the actual behavior ('what do they do today when they have questions?')",
            "Probe with a specific incident — 'last time someone spent 30+ minutes on this'",
            "The specific incident reveals what the actual question was, which determines whether AI is the right solution",
            "Not all 'copilot' requests are the same pain — diagnose which type before speccing a solution",
          ],
        },
      ],
      resources: [],
    },
    {
      id: "3-2",
      unitId: "unit3",
      companySlug: "kestra",
      title: "From Customer Insight to Product Spec",
      tldr:
        "The Kestra posting mentions 'transforming validated concepts into product specifications and reusable blueprints.' This lesson covers what a good AI feature spec looks like and how to write the blueprints that give customers a starting point.",
      skills: ["Spec writing", "Feature definition", "Blueprint design"],
      xp: 30,
      content: [
        {
          heading: "The anatomy of an AI feature spec",
          body: `An AI feature spec for an orchestration platform has a different structure than a standard feature spec. Here's what to include:\n\n**1. Problem statement (1 paragraph)**\nWhat customer pain does this solve? Quote specific customer language from interviews. Include what customers do today and why it's insufficient.\n\n**2. User stories (3-5)**\n"As a [persona], I want to [action], so that [outcome]." For AI features, include: what the AI does, what the human controls, and what happens when the AI is wrong.\n\n**3. AI behavior definition**\n- What inputs does the AI receive?\n- What output does it produce? (Format, schema, confidence indicators)\n- What happens when the AI's confidence is low?\n- What's the human override path?\n- What errors does the AI handle vs. surface to the user?\n\n**4. Quality requirements**\n- What accuracy threshold must the AI meet before launch?\n- How will accuracy be measured?\n- What's the eval dataset and how is it maintained?\n- What triggers a quality review or rollback?\n\n**5. Cost and latency requirements**\n- Maximum acceptable cost per run at target volume\n- Maximum acceptable latency for synchronous interactions\n- Can runs be batched or must they be real-time?\n\n**6. Non-goals**\nExplicitly list what this feature does NOT do. This prevents scope creep and manages customer expectations.\n\n**7. Launch criteria**\nWhat must be true before this ships? (Accuracy threshold, test coverage, documentation complete, etc.)`,
          goAnalogy: {
            term: "Jōseki",
            reading: "じょうせき",
            meaning:
              "A studied pattern of play considered optimal for a local situation. A good AI feature spec is jōseki: a proven pattern that both teams and customers can trust, not an improvised response to local pressure.",
          },
        },
        {
          heading: "Reusable blueprints",
          body: `The Kestra posting mentions "reusable blueprints alongside engineering." In the context of orchestration, a blueprint is a pre-built workflow template that demonstrates how to use a feature or solve a common use case.\n\n**What makes a good blueprint:**\n- Solves a specific, named use case (not "AI workflow example")\n- Is production-ready: includes error handling, retry logic, cost logging, human review gates\n- Is configurable: customers can fork it and customize for their specifics\n- Is documented: explains every design decision, not just how to run it\n- Is testable: includes example inputs and expected outputs\n\n**Blueprint examples for Kestra AI:**\n- "LLM-powered document classification pipeline" — ingests documents, classifies into categories, routes to downstream systems, with confidence thresholds and human review queue\n- "AI agent for data quality monitoring" — runs on schedule, queries your data warehouse, uses LLM to identify anomalies in natural language, sends alerts with plain-English explanations\n- "Contract review workflow with human-in-the-loop" — extracts clauses, flags risks, pauses for lawyer approval before proceeding\n\n**Why blueprints matter as a PM deliverable:**\nBlueprints do two things: (1) they show customers how to actually use the product in a real context — reducing time-to-value; and (2) they encode the PM's opinion about what good usage looks like, which shapes the market's perception of what Kestra is for.`,
        },
        {
          heading: "Validating before building",
          body: `The posting says "validated concepts" — the validation step happens before engineering commits to building.\n\n**Lightweight validation methods for AI features:**\n\n**Prototype walk-through:** Build a non-functional mockup of the UI flow and walk 3-5 customers through it. "If Kestra worked like this, would this solve your problem? What's missing? What would you not use?" This reveals UX issues without writing code.\n\n**Wizard of Oz:** Run the AI manually behind the scenes while customers think it's automated. Useful for validating whether the AI's output format is actually useful before building the infrastructure.\n\n**Concierge MVP:** Offer the workflow as a manual service ("send us your contracts and we'll classify them for you") to validate that customers actually want this enough to change their process. If they don't use the manual version, they won't use the automated version.\n\n**The validation bar for Kestra AI features:**\n- At least 3 customers have confirmed the use case solves a real pain (not just "that sounds useful")\n- At least 1 customer is willing to be a design partner and test an early version\n- You have defined how you'll measure success post-launch\n- Engineering has reviewed the spec and agreed on the scope`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "You're writing a spec for 'AI-assisted workflow debugging.' A colleague suggests the non-goals section is unnecessary — 'it just says what we're not building, which is obvious.' Why is the non-goals section critical?",
          options: [
            "It's required by Kestra's spec template",
            "Non-goals prevent scope creep during engineering and set explicit expectations with customers — 'AI-assisted debugging' could mean anything from 'show me the error message clearly' to 'automatically fix the failing task.' Without non-goals, different stakeholders will assume different scopes",
            "It helps engineers estimate the work more accurately",
            "It demonstrates thorough thinking to reviewers of the spec",
          ],
          correct: 1,
          explanation:
            "Non-goals are one of the most valuable parts of a spec because they resolve ambiguity before it becomes a conflict. 'AI-assisted debugging' is genuinely ambiguous — it could mean root cause analysis, suggested fixes, automated remediation, or just better error formatting. Without explicitly stating 'this feature will not automatically fix or retry failed tasks,' an engineering team might build auto-remediation, a customer might expect it, and the PM will spend weeks managing misaligned expectations.",
        },
        {
          type: "multiple-choice",
          question:
            "You've written a spec for a new AI workflow feature. Before sending it to engineering, what's the minimum validation bar it should meet?",
          options: [
            "At least one customer has asked for something like this",
            "At least 3 customers have confirmed the underlying pain is real, at least 1 is willing to design-partner, and you've defined how you'll measure success post-launch",
            "The engineering team has reviewed it and agreed it's technically feasible",
            "The feature appears in a competitor's product in some form",
          ],
          correct: 1,
          explanation:
            "One customer request is anecdote, not signal. Technical feasibility matters but it's not validation — you can build the wrong thing in a technically excellent way. Competitive parity ('they have it, we should too') is reactive, not validated. The minimum bar is: real customer pain confirmed by multiple independent sources, a design partner willing to test early, and a success definition so you know post-launch whether to continue investing.",
        },
      ],
      resources: [],
    },
    {
      id: "3-3",
      unitId: "unit3",
      companySlug: "kestra",
      title: "The AI PM's Relationship with Engineering",
      tldr:
        "Kestra's job posting specifies 'strong product discernment' and 'technical fluency.' This lesson covers what 'technical fluency without coding' means for an AI PM, and how to work effectively with engineering on AI features specifically.",
      skills: ["Cross-functional collaboration", "Technical fluency", "AI PM-engineering dynamics"],
      xp: 25,
      content: [
        {
          heading: "What 'technical fluency' means for an AI PM",
          body: `The posting says "technical fluency in agents, orchestration, and integrations — not coding required, but deep understanding needed." Let's be precise about what that means:\n\n**What you need to understand (not implement):**\n- How LLM API calls work: request structure, token counting, streaming vs. batch, rate limits, error types\n- What a workflow execution looks like in Kestra: how tasks chain, how failures propagate, how retry works\n- What a RAG pipeline does: what retrieval means, why chunking matters, what embedding is\n- What an agent loop is: perceive → reason → act → observe, tool calls, state management\n- What "structured output" means and why it matters for reliability\n- What eval means: offline eval vs. online eval, what makes a good eval dataset\n- What token cost means: input tokens vs. output tokens, how pricing works, what batch API means\n\n**What you do NOT need to implement:**\n- The API calls themselves\n- The plugin code\n- The embedding or retrieval logic\n- The model fine-tuning process\n\n**The practical test:** can you have a conversation with a senior engineer about trade-offs in an AI feature design without the engineer having to explain basic concepts to you? If yes, you have sufficient technical fluency. If the engineer spends half the meeting on prerequisites, you need to go deeper.`,
          goAnalogy: {
            term: "Tsuke",
            reading: "つけ",
            meaning:
              "Contact play — a stone placed directly adjacent to an opponent's stone to provoke a response. Good PM-engineering conversations are tsuke: direct engagement with the engineer's thinking, not waiting at a distance for specs to be implemented.",
          },
        },
        {
          heading: "Where AI PMs and engineering commonly misalign",
          body: `**Misalignment 1: Quality expectations**\nPMs often spec an accuracy requirement ("95% accuracy") without understanding what that means to implement. Engineering ships a model that achieves 95% on the eval set but 88% in production (distribution shift). Who owns the gap? Clear specs need to define both the eval methodology and the production monitoring plan.\n\n**Misalignment 2: Latency expectations**\nPMs spec "results in under 2 seconds" without knowing that the chosen LLM API has P99 latency of 4 seconds. Engineers build to the spec; the feature fails the spec at launch. The PM should ask for P95/P99 latency estimates from engineering during spec review, not after launch.\n\n**Misalignment 3: Iteration vs. launch**\nAI features often need post-launch iteration as the model is tuned. Engineers see "done" as code shipped; PMs see "done" as the feature meeting its quality threshold. Agree on the definition of done before engineering starts, not when the code is in review.\n\n**Misalignment 4: Cost surprises**\nEngineering uses a test dataset of 100 examples; the feature ships and costs 10x the estimate because production volume is 100,000 examples. Cost modeling should be part of the spec review, with engineering providing a cost estimate at target volume before build.\n\n**The fix:** explicit decision logs. For every AI feature, document: the quality bar and how it's measured, the latency requirement and how it's tested, the definition of "done," and the cost estimate at launch volume. Review these with engineering before build starts, not at launch.`,
        },
        {
          heading: "The spec review conversation",
          body: `Before an AI feature goes to engineering, the PM should run a structured spec review. The goal is to surface misalignments before they become bugs or delays.\n\n**Spec review questions to ask engineering:**\n\n1. "Does the AI behavior section have any ambiguity? Where would you make a judgment call if you built this today?"\n\n2. "What's your estimate for achieving the quality threshold on the eval set? What's your confidence interval?"\n\n3. "What's the P95 latency estimate for the LLM call at our chosen model tier? Does this meet the requirement?"\n\n4. "What happens when the API returns an error? Walk me through the failure path in the spec — does it match your implementation plan?"\n\n5. "At our target volume ([N] runs/day), what's the estimated monthly cost? Does that fit our cost requirement?"\n\n6. "Is there anything in the non-goals list that you'd implement anyway because it's natural to include? Let's make sure we're aligned."\n\n**The output of the spec review:**\nA revised spec that incorporates engineering's feedback, a shared definition of done, and explicit estimates for quality, latency, and cost. This becomes the baseline for the feature's launch criteria.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "During spec review, an engineer tells you: 'The AI output schema you've specified has 15 fields, but the LLM reliably populates only 10 of them — the other 5 are inconsistently present.' What's the right PM response?",
          options: [
            "Keep all 15 fields in the spec and let engineering figure out how to make the model produce them consistently",
            "Ask engineering which 5 fields are inconsistent, evaluate whether those fields are necessary for the core user story, and either reduce the scope to 10 fields or adjust the quality bar to treat missing fields as acceptable if they're supplementary",
            "Switch to a more capable model that can reliably produce all 15 fields",
            "Launch with 10 reliable fields and add the others as a v2",
          ],
          correct: 1,
          explanation:
            "The PM's job is to make the right product decision, not to force engineering to solve an AI reliability problem that may not be worth solving. First understand what the 5 inconsistent fields are and whether they're essential. If they're 'nice to have' — reduce scope. If they're essential — then Option C (better model) or a different output approach needs to be evaluated with engineering. Option D ('v2') without actually knowing whether v2 is worth doing is a common PM trap.",
        },
        {
          type: "multiple-choice",
          question:
            "An engineer says: 'I can build this feature in 2 weeks, but achieving 95% accuracy will require 4 more weeks of prompt tuning and evaluation work.' How should the PM structure the launch plan?",
          options: [
            "Launch in 2 weeks at whatever accuracy the model achieves",
            "Wait the full 6 weeks for the 95% accuracy threshold",
            "Launch in 2 weeks to a closed beta group (design partner customers), use beta feedback and production data to drive the 4-week improvement phase, then launch broadly at 95%",
            "Reduce the accuracy requirement to 85% to enable the 2-week launch",
          ],
          correct: 2,
          explanation:
            "The closed beta approach is usually the right answer for AI features: it gets the feature to design partners early (real signal, real usage patterns, real eval data), while protecting broad customers from a below-threshold experience. The production data from the beta is often more valuable than the 4 extra weeks of prompt tuning in isolation. Option A (launch at unknown accuracy) risks a bad first impression with a large customer base. Option D (reduce the bar) is only right if 85% is genuinely sufficient — don't drop the bar just to ship faster.",
        },
      ],
      resources: [],
    },
  ],
  quiz: [
    {
      type: "multiple-choice",
      question: "A customer interview reveals: 'We want AI to automatically escalate support tickets that are likely to churn a customer.' What's the most important thing to validate before writing a spec?",
      options: [
        "Whether the AI can predict churn signals accurately from ticket text",
        "Whether the customer has a clear definition of 'churn-risk ticket' that they could label consistently — without a clear definition, there's no way to build an eval set or know if the AI is working",
        "Whether the customer's support team would act on the AI's recommendations",
        "Whether there's a large enough dataset of historical tickets to train the model",
      ],
      correct: 1,
      explanation:
        "Before evaluating technical feasibility, validate the problem definition. 'Churn-risk ticket' is vague — different support agents may label the same ticket differently. If the customer can't define what a churn-risk ticket is precisely enough to label examples consistently, there's no ground truth to evaluate against. This is the PM's job to surface during discovery: can you show me 5 tickets that would definitely trigger an escalation, and 5 that definitely wouldn't? If they can't, the use case isn't ready.",
    },
    {
      type: "multiple-choice",
      question: "What's the difference between a product spec and a blueprint at Kestra?",
      options: [
        "Specs are internal documents; blueprints are customer-facing marketing materials",
        "Specs define what the platform capability is and how it behaves; blueprints are pre-built, production-ready workflow templates that show customers how to use the capability for a specific use case",
        "Blueprints are specs for complex features; simple features only need a spec",
        "Specs are written by PMs; blueprints are written by engineers",
      ],
      correct: 1,
      explanation:
        "Specs define platform behavior (the 'what'). Blueprints are customer-facing templates that demonstrate real-world usage of platform capabilities (the 'how'). A spec for 'LLM task type' defines the API, parameters, error handling, and cost behavior. A blueprint titled 'Document Classification Pipeline' shows a production-ready YAML flow that uses the LLM task type to classify documents, with error handling, confidence thresholds, and human review gates included.",
    },
  ],
  quizXp: 30,
};
