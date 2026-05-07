import type { Unit } from "@/data/types";

export const enginyUnit2: Unit = {
  id: "unit2",
  title: "Enginy's Product Deep Dive",
  description: "Know the product cold: Find & Enrich, Engage, and the data layer that connects them.",
  companySlug: "enginy",
  goTerm: "Aji",
  goReading: "アジ",
  goMeaning: "Latent potential in a position. Enginy's product layers — Find, Enrich, Engage — are full of aji: each data point has activation potential waiting for the right signal.",
  color: "ice",
  lessons: [
    {
      id: "2-1",
      unitId: "unit2",
      companySlug: "enginy",
      title: "Find & Enrich — Prospect Intelligence",
      tldr: "Find & Enrich is Enginy's top-of-funnel layer: natural language ICP discovery + multi-source enrichment + intent signals. It turns a vague 'find me buyers' request into a scored, enriched lead list.",
      skills: ["Prospect intelligence", "ICP design", "Data enrichment"],
      xp: 25,
      content: [
        {
          heading: "Natural language ICP discovery",
          body: `Traditional prospecting tools require rigid boolean filters: industry = SaaS, headcount = 50-500, title = VP Sales. Enginy lets sales reps describe their ICP in plain language: "Fast-growing B2B SaaS companies in Europe that recently hired enterprise sales reps and are running on HubSpot."\n\nUnder the hood, this natural language query is translated into structured filters via an LLM, then executed against Enginy's multi-source database. The UX implication: lower learning curve for reps, higher quality inputs because natural language captures nuance that dropdown filters miss.`,
          goAnalogy: {
            term: "Moyo",
            reading: "もよう",
            meaning: "A large-scale framework or influence zone that hasn't been fully defined yet. A natural language ICP description is moyo — it sketches a large territory that needs to be refined into concrete prospects through enrichment and filtering.",
          },
        },
        {
          heading: "The enrichment layer",
          body: `Once prospects are identified, Enginy enriches them against 20+ tools in waterfall order. Key data fields:\n\n**Contact data**: Email (verified), LinkedIn URL, phone, direct dial\n**Company data**: Headcount, revenue estimate, tech stack, funding stage, recent hires\n**Intent signals**: Job changes, hiring patterns (what roles are they hiring?), tech stack changes (just added Salesforce?)\n\nThe waterfall logic is critical: Enginy claims 30+ verified B2B data sources. "Verified" matters — bounced emails damage sender reputation and hurt deliverability, which undermines the Engage product downstream. Data quality in Find & Enrich is directly correlated with deliverability in Engage.`,
        },
        {
          heading: "Key metrics for this feature",
          body: `As PM, you'd own success metrics for Find & Enrich. The important ones:\n\n**Data completeness rate** — What % of contacts have all required fields (email, name, company, title)?\n**Email verification accuracy** — What % of "verified" emails don't bounce?\n**ICP match rate** — How closely do returned prospects match the user's stated ICP? (Requires user feedback loop)\n**Time to list** — How long does it take to go from ICP description to enriched list?\n**Signal freshness** — What % of intent signals are <30 days old?\n\nThese aren't independent — trading off verification accuracy for speed, for example, affects bounce rates downstream.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "Why does poor data quality in Find & Enrich directly hurt the Engage product?",
          options: [
            "Bad data makes the ICP search slower",
            "Bounced emails from unverified contacts damage sender reputation and hurt email deliverability",
            "It increases the cost of enrichment sources",
            "It causes CRM sync errors",
          ],
          correct: 1,
          explanation: "Email deliverability depends on sender reputation. High bounce rates (from bad email data) signal spam and reduce inbox placement rates across all outreach.",
        },
        {
          type: "fill-blank",
          prompt: "Natural language ICP discovery lowers the ________ for reps compared to rigid boolean filter systems.",
          blank: "learning curve",
          hint: "Think: what makes a tool easier to adopt",
        },
        {
          type: "scenario",
          prompt: `You're reviewing Find & Enrich metrics. Data completeness is 82% but email verification accuracy is only 71% — meaning 29% of "verified" emails bounce. What's your priority and why?`,
          sampleAnswer: "Email verification accuracy is the critical fix. A 29% bounce rate is catastrophic for deliverability — most email providers flag senders with >5% bounce rates as spam. This directly undermines the Engage product and the company's core value prop. I'd halt growth of the verified email feature until accuracy is above 95%, investigate which enrichment sources are contributing the most bounces, remove or downweight low-quality sources, and possibly add a second-pass verification step (e.g., SMTP verification) before marking an email as verified. Data completeness at 82% is sub-optimal but not a crisis — it's a roadmap item, not a P0.",
          keyPoints: ["29% bounce rate is a deliverability crisis (threshold is ~5%)", "Fixes core product reliability, not just a feature metric", "Investigate which sources contribute most bounces", "Second-pass SMTP verification as tactical fix"],
        },
      ],
      resources: [
        {
          title: "Hunter.io: Email Verification Guide",
          url: "https://hunter.io/blog/email-verification",
          description: "Recommended reading for this lesson.",
        },
        {
          title: "Apollo.io: B2B Data Enrichment Best Practices",
          url: "https://www.apollo.io/blog/data-enrichment",
          description: "Recommended reading for this lesson.",
        },
      ],
    },
    {
      id: "2-2",
      unitId: "unit2",
      companySlug: "enginy",
      title: "Engage — Personalized Outreach at Scale",
      tldr: "Engage is Enginy's execution layer: AI-generated personalized messages, multi-channel sequences, domain warm-up, and a unified inbox. The quality of personalization is the product's main differentiator.",
      skills: ["Sales engagement", "AI personalization", "Deliverability"],
      xp: 25,
      content: [
        {
          heading: "The personalization engine",
          body: `Enginy's stated result: reply rates from 10% to 45%. The key driver is personalization quality — messages that reference real, timely signals rather than generic templates.\n\nThe personalization engine works like this:\n1. Pull enriched contact + company data from Find & Enrich\n2. Select relevant signals (e.g., recent funding, a new hire in the buyer's team, a job description mentioning the pain point)\n3. Generate a first-line or full email using an LLM prompted with these signals\n4. Apply tone + brand guidelines\n5. Human review option or auto-send based on confidence score\n\nThe product challenge: LLM outputs vary in quality. A great personalized line ("I saw you're hiring 3 enterprise AEs in EMEA — that usually means you're scaling outbound…") is high-value. A generic-sounding line ("I noticed your company is growing…") is noise.`,
          goAnalogy: {
            term: "Tesuji",
            reading: "てすじ",
            meaning: "A clever local move that's surprising but obviously correct in hindsight. A great personalized opening line is tesuji — it cuts through noise in a way that feels precise and earned.",
          },
        },
        {
          heading: "Multi-channel and deliverability",
          body: `Enginy supports email + LinkedIn from a unified inbox. This matters because:\n\n**LinkedIn** has lower noise than email for cold outreach — buyers are primed to receive professional messages there. But it's rate-limited by LinkedIn's API restrictions, so sequencing logic must account for daily send limits.\n\n**Email deliverability** is a product feature, not just an ops concern. Enginy includes domain warm-up — gradually increasing send volume from a new domain to build sender reputation before launching campaigns. Without this, emails land in spam regardless of message quality.\n\nThe unified inbox is the UX layer: all replies from both channels surface in one place, with AI-assisted reply drafting and automatic meeting booking when a prospect expresses interest.`,
        },
        {
          heading: "Conversation prioritization",
          body: `With high-volume outreach, the inbox fills fast. Enginy's prioritization AI ranks conversations by conversion likelihood — surfacing the hottest leads first.\n\nThis is a ranking model, not a rule. Key signals it likely uses: response speed (fast reply = hot lead), message sentiment (positive language), call-to-action engagement (clicked a link, asked a follow-up question), and recency.\n\nAs PM, the prioritization model is a first-class product — if it ranks poorly, reps miss hot leads buried in noise. Feedback loop design (how do reps signal "this was wrong"?) is a PM responsibility.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "What is domain warm-up and why is it a product feature rather than just an operational concern?",
          options: [
            "It's a marketing tactic to build brand awareness before launch",
            "It gradually increases email send volume from a new domain to build sender reputation — without it, emails land in spam regardless of message quality",
            "It's a technical setting managed by the engineering team",
            "It warms up the prospect database before running campaigns",
          ],
          correct: 1,
          explanation: "Domain warm-up directly affects whether emails reach inboxes at all. It's a product feature that Enginy owns and packages as part of the Engage offering.",
        },
        {
          type: "fill-blank",
          prompt: "Enginy's conversation prioritization ranks messages by ________ likelihood, surfacing the hottest leads first.",
          blank: "conversion",
          hint: "What is the ultimate goal of a sales conversation?",
        },
        {
          type: "scenario",
          prompt: `Enginy's reply rate for a customer drops from 40% to 18% over 6 weeks. The customer blames "the AI messages." How do you diagnose this?`,
          sampleAnswer: "I'd avoid assuming the AI is the culprit without data. My diagnostic steps: First, check deliverability metrics — has inbox placement rate dropped? Are emails landing in spam? This would explain a drop without any change to message quality. Second, check if the enrichment data quality degraded — if signals are staler or less accurate, personalization quality falls. Third, look at the sequence itself — did they change their ICP, target a new segment, or increase volume? Higher volume often means lower quality targeting. Fourth, sample the actual messages sent during the high vs. low period and evaluate quality. Only after ruling out the first three would I conclude it's an AI generation issue.",
          keyPoints: ["Check deliverability first (spam rate, inbox placement)", "Check signal/enrichment quality upstream", "Check if campaign parameters changed", "Sample actual messages before blaming AI"],
        },
      ],
      resources: [
        {
          title: "Mailgun: Email Deliverability Guide",
          url: "https://www.mailgun.com/blog/deliverability/email-deliverability-guide/",
          description: "Recommended reading for this lesson.",
        },
        {
          title: "Outreach.io: Multi-channel Sequencing Best Practices",
          url: "https://www.outreach.io/blog/multi-channel-sequences",
          description: "Recommended reading for this lesson.",
        },
      ],
    },
    {
      id: "2-3",
      unitId: "unit2",
      companySlug: "enginy",
      title: "The Data Layer — CRM Sync and the Closed Loop",
      tldr: "Enginy's CRM integrations with Salesforce, HubSpot, and Pipedrive close the data loop. Understanding bi-directional sync, field mapping, and de-duplication is critical PM knowledge for GTM AI.",
      skills: ["CRM integrations", "Data modeling", "B2B SaaS infrastructure"],
      xp: 20,
      content: [
        {
          heading: "Why CRM sync is the hardest part",
          body: `Integrating with a CRM is deceptively complex. The three core challenges:\n\n**De-duplication** — Enginy enriches a contact from LinkedIn. The CRM already has that person, created 2 years ago by a different rep, with slightly different spelling. Do you merge? Create a new record? Flag as duplicate? Bad de-dupe logic corrupts CRM data, which is expensive and political to fix.\n\n**Field mapping** — Enginy has its own data model (ICP score, intent signal type, enrichment source). The CRM has its own fields. Mapping these bidirectionally, with the right precedence rules ("Enginy wins for email, CRM wins for owner"), is a product decision with significant downstream impact.\n\n**Sync frequency vs. rate limits** — Salesforce has API rate limits. Real-time sync is expensive. Batch sync introduces lag. PM decision: what sync frequency is "good enough" for the use case?`,
          goAnalogy: {
            term: "Ko",
            reading: "コウ",
            meaning: "A cycle of captures that must be broken by playing elsewhere. CRM sync conflicts — where both systems claim to own the most recent version of a contact — are ko situations that need explicit resolution rules, not infinite loops.",
          },
        },
        {
          heading: "The value of the closed loop",
          body: `When CRM sync works well, it creates a closed data loop:\n\n1. Enginy discovers and enriches a prospect\n2. Enginy sends outreach and logs activity\n3. Prospect converts → opportunity created in CRM\n4. CRM outcome data (won/lost, deal size, cycle length) feeds back into Enginy\n5. Enginy uses this to improve ICP scoring and signal weighting\n\nThis feedback loop is what separates a tool from a platform. Without it, Enginy is a better email sender. With it, it's a learning system that improves over time — and creates switching costs as the model learns your specific customer base.`,
        },
        {
          heading: "Integration depth as a competitive moat",
          body: `CRM integrations aren't just a feature checkbox — they're a moat strategy. The deeper the integration:\n\n- The more Enginy owns the data of record (vs. just enriching it)\n- The higher the switching cost (migrating enrichment history and training data is painful)\n- The more Enginy can benchmark against outcomes (not just activity)\n\nCompetitors like Apollo, Outreach, and Salesloft also integrate with CRMs but with varying depth. The PM question: where does Enginy invest integration depth vs. breadth? Being deeply integrated with HubSpot and Pipedrive (SMB/mid-market CRMs) may be more valuable than shallow Salesforce support for Enginy's current customer base.`,
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: "What makes the CRM closed loop valuable beyond just syncing data?",
          options: [
            "It reduces the number of tools sales reps need to learn",
            "It allows outcome data (won/lost deals) to feed back into Enginy, improving ICP scoring over time",
            "It makes Enginy compliant with GDPR",
            "It enables real-time sync at zero API cost",
          ],
          correct: 1,
          explanation: "The closed loop creates a learning system — outcome data from the CRM improves upstream signal weighting and ICP scoring, turning Enginy from a tool into a platform.",
        },
        {
          type: "fill-blank",
          prompt: "When both the CRM and Enginy have conflicting versions of a contact record, the PM must define ________ rules to resolve the conflict.",
          blank: "precedence",
          hint: "Which system wins? You need rules for that decision.",
        },
        {
          type: "scenario",
          prompt: `A large enterprise customer on Salesforce says: "Your sync is creating duplicate contacts in our CRM. Our ops team spent 20 hours cleaning them up." How do you handle this?`,
          sampleAnswer: "This is a P0. Dirty CRM data is expensive and political — it damages trust with ops and the buying team. Immediate response: apologize and assign an engineer to audit the de-dupe logic for this customer's environment. Diagnose: what matching fields are we using? Email only? Email + name + company? Salesforce often has existing duplicates before Enginy arrives — are we creating new ones or surfacing pre-existing ones? Fix: implement stricter matching (email + domain + normalized name) before creating new records, add a 'dry run' mode for new customers to preview what would be created before live sync, and add a de-dupe review step for ambiguous cases. Long-term: build a CRM health audit tool as a value-add for enterprise customers.",
          keyPoints: ["P0 — trust damage with ops team", "Diagnose de-dupe matching logic", "Distinguish: Enginy-created vs. pre-existing duplicates", "Dry run mode as preventive feature"],
        },
      ],
      resources: [
        {
          title: "Salesforce: Integration Best Practices",
          url: "https://developer.salesforce.com/docs/atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/",
          description: "Recommended reading for this lesson.",
        },
        {
          title: "HubSpot: Contact De-duplication Guide",
          url: "https://knowledge.hubspot.com/contacts/how-does-hubspot-deduplicate-contacts",
          description: "Recommended reading for this lesson.",
        },
      ],
    },
  ],
};
