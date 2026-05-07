import type { Unit } from "@/data/types";

export const tightlyUnit6: Unit = {
  id: "tightly-unit6",
  companySlug: "tightly",
  title: "Building at Tightly",
  description:
    "The craft of building an AI-powered supply chain product: how the forecasting engine works and should be evaluated, what a principled 12-month roadmap looks like, and the PM methods that actually fit a team of under 30 people building software where mistakes have real financial consequences.",
  goTerm: "Tesuji",
  goReading: "てすじ",
  goMeaning:
    "Tesuji is the clever local move that solves a tactical problem — the unexpected sequence that captures stones, creates territory, or turns a losing position around. In product development, tesuji is the specific technical or methodological choice that makes the product distinctively good: not just 'we use AI' but the precise evaluation method or design pattern that makes the forecast 12% more accurate than the next tool.",
  color: "crimson",
  lessons: [
    // ─── Lesson 6-1 ────────────────────────────────────────────────────────────
    {
      id: "tightly-6-1",
      unitId: "tightly-unit6",
      companySlug: "tightly",
      title: "How AI Forecasting Products Are Built & Evaluated",
      tldr:
        "Demand forecasting is a fundamentally different AI problem than chatbots or classifiers. Here's what the PM needs to understand about how it works, how it fails, and how to evaluate whether the model is actually getting better.",
      skills: ["AI/ML Fundamentals", "Model Evaluation", "Forecasting"],
      xp: 25,
      content: [
        {
          body: "# How AI Forecasting Products Are Built & Evaluated\n\nMost PM advice about working with AI teams assumes you're dealing with classifiers, recommendation systems, or generative models. Demand forecasting is different — structurally, operationally, and in how you evaluate it. A PM who understands these differences earns trust from the data science team and makes better prioritization calls.",
        },
        {
          heading: "Why Demand Forecasting Is a Different AI Problem",
          body: "**Time-series structure**: Demand data is sequential. What happened last week predicts this week in ways that random data doesn't. Models must respect time ordering — you can't train on future data and test on past data (look-ahead bias). This is why naive off-the-shelf ML classifiers don't work well for forecasting.\n\n**Sparse data and the cold-start problem**: A new SKU has zero historical sales data. What does the model forecast? Most tools fall back to category averages or product attribute-based priors. Tightly's approach (using Shopify tags, variant attributes, and similar SKU performance) is exactly right — but getting cold-start wrong is the most common cause of early-life forecast errors.\n\n**Distribution shift**: The demand distribution is not stationary. Promotions, seasonality, viral social media moments, and supply chain disruptions all shift the underlying pattern. A model trained on 18 months of data during COVID has learned a very different demand distribution than pre-2020. Models need mechanisms to detect and adapt to distribution shift, not just assume the future looks like the past.\n\n**The sparse/lumpy demand problem**: Many DTC SKUs don't sell every day. An item that sells 0-0-0-12-0-0-3-0-0 units across nine days is structurally different from one that sells 2-3-1-2-4-1-3-2-2. Most simple forecasting models perform poorly on intermittent demand. The sophisticated approach (croston's method, or neural forecasting with intermittency handling) matters for accessories, limited-edition products, and B2B-adjacent SKUs.",
        },
        {
          heading: "Model Evaluation Metrics: What to Use and When",
          body: "The choice of evaluation metric is a product decision as much as a technical one — it determines what the data science team optimizes for.\n\n**MAPE (Mean Absolute Percentage Error)**\n`|Actual - Forecast| ÷ Actual × 100`, averaged across SKUs.\nMAPE is intuitive (\"we're off by 18% on average\") and easy to explain to customers. But it has a critical flaw: it explodes on low-volume SKUs. If a SKU sells 1 unit and you forecast 2, MAPE is 100%. If it sells 100 and you forecast 80, MAPE is 20% — but the second error is a much bigger business problem. MAPE penalizes low-volume SKUs disproportionately and makes aggregate accuracy look worse than it is.\n\n**WMAPE (Weighted Mean Absolute Percentage Error)**\nWeights the error by the SKU's actual volume: `Σ|Actual - Forecast| ÷ Σ Actual`. This naturally reduces the influence of low-volume SKUs and gives you a revenue-weighted view of accuracy. WMAPE is the better production metric — it tells you how accurate you are on the SKUs that actually drive the business. When Tightly says \"we target <15% MAPE on high-velocity SKUs,\" they're really talking about a WMAPE for the top revenue-contributing SKUs.\n\n**MAE (Mean Absolute Error)**\n`Σ|Actual - Forecast| ÷ n`. Measures error in units, not percentage. Useful for comparing across time periods without the percentage distortion, but not intuitive for customers who think in percentages.\n\n**Bias**\n`Σ(Forecast - Actual) ÷ n`. Bias tells you the direction of your errors — are you consistently over-forecasting (positive bias → overstock risk) or under-forecasting (negative bias → stockout risk)? A model with low MAPE but high positive bias is systematically bullish and will cause overstock. Bias should be tracked alongside accuracy metrics.",
        },
        {
          heading: "How to Run Evals for a Forecasting Product",
          body: "**Holdout set methodology (leave-last-N-weeks out)**\nThe standard eval approach: train the model on all data up to week W, then test it on weeks W+1 through W+N. Never expose the test period to the training data. The PM implication: when the data science team says \"our model improved,\" ask \"what was the holdout window?\" A 4-week holdout catches short-term improvements; a 12-week holdout catches seasonal generalization. For a DTC brand, 12-week holdouts that include a promotional period are the most realistic test.\n\n**Cohort-based eval: new SKUs vs. mature SKUs**\nDon't evaluate forecasting performance in aggregate — it hides the cold-start problem. Split the evaluation into two cohorts: SKUs with >90 days of history (mature) and SKUs with <90 days of history (new). The model likely performs much better on mature SKUs. The gap between cohorts tells you how much cold-start is costing you. Closing that gap — through better feature engineering on new SKUs — is often the highest-leverage model improvement available.\n\n**Eval against naive baselines**\nBefore celebrating a WMAPE of 18%, check it against naive baselines: a simple moving average (last 4-week average) and a seasonal naive (same-week-last-year). If your model is barely beating a moving average on the majority of SKUs, the sophistication isn't adding value. If it consistently beats seasonal naive on seasonal brands, that's a meaningful result worth communicating to customers.",
        },
        {
          heading: "Tightly's Composite Scoring Matrix",
          body: "Tightly's replenishment model generates a composite score for each SKU by blending four inputs. As PM, you need to understand what each dimension contributes and when to weight them differently — because these weighting decisions should be driven by customer type, product category, and business context.\n\n**Velocity Score**: Based on the SKU's recent sell-through rate, normalized for product age. High weight for stable, mature SKUs where the trend is stationary.\n\n**Trend Score**: Rate of change in the velocity — is this SKU accelerating or decelerating? High weight for new product launches or products in a growth phase. Low weight for mature, stable SKUs where trend noise can mislead.\n\n**Seasonality Score**: Captures repeating seasonal patterns (weekly, monthly, annual). The key technical question is: does the seasonality score generalize to a new season it hasn't seen yet, or does it only replay last year? For brands with year-over-year growth, last year's seasonality curve should be adjusted for the growth trend before being applied.\n\n**Supplier Reliability Score**: A newer dimension that attempts to model the probability that a PO will arrive on time, given historical supplier performance. A supplier with 60% on-time delivery should generate earlier POs with larger safety stock than one with 95% on-time delivery.\n\n**The PM decision point**: When a customer switches from footwear (high seasonality, volatile trend) to supplements (stable velocity, predictable reorder), the weighting should shift — more velocity and supplier weight, less trend and seasonality. Customers who can configure these weights (or who have them auto-tuned) will have higher PO acceptance rates.",
        },
        {
          heading: "A/B Testing in Supply Chain Software",
          body: "You cannot A/B test a replenishment algorithm the way you test a button color. The unit of randomization is a purchase decision, and purchase decisions happen monthly, not hourly. Interference effects are severe: if you show model A to some SKUs and model B to others within the same brand, the inventory decisions interact (a stockout on a model-A SKU affects demand for a model-B SKU that's a substitute).\n\n**Holdout brand methodology**: The cleanest approach is to randomly assign entire brands to model A or model B and measure outcomes (WMAPE, stockout rate, PO acceptance rate) over a 12-16 week window. This eliminates interference but requires a large enough brand base to achieve statistical power — typically 50+ brands per arm.\n\n**Holdout SKU methodology (within-brand)**: Assign a random subset of SKUs within a brand to each model. Faster results but vulnerable to interference. Better suited for testing UI changes (e.g., does showing confidence intervals change PO acceptance rate?) than for testing algorithm changes.\n\n**The PM implication**: When a data scientist proposes an algorithm change, ask: \"How will we validate this in production?\" If the answer is \"we'll see if MAPE improves\" without a controlled holdout, the measurement is unreliable. Push for a holdout brand experiment with pre-registered success metrics — even if the window is 12 weeks, it's worth the patience.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "Tightly's data science team reports: 'We improved MAPE from 24% to 19% on our test set.' Before celebrating, what is the most important follow-up question for the PM to ask?",
          options: [
            "\"What was the holdout window, and does it include a seasonally representative period?\"",
            "\"Did we also improve MAE, or just MAPE?\"",
            "\"Should we move from MAPE to WMAPE as our primary metric?\"",
            "\"Which specific SKU categories drove the improvement?\"",
          ],
          correct: 0,
          explanation:
            "A MAPE improvement on a test set is only meaningful if the test set is a fair representation of real-world conditions. The key questions are: what was the holdout window (4 weeks vs. 12 weeks), and does it include a promotional period or seasonal peak? A model that improves MAPE on a 4-week non-promotional window may still fail badly in Q4. Holdout validity is the single most important evaluation question. The other questions are also useful but secondary — they assume the test methodology is sound.",
        },
        {
          type: "multiple-choice",
          question:
            "Tightly's forecasting model shows WMAPE of 14% on SKUs with >90 days of history, but 38% WMAPE on SKUs with <90 days of history. What does this tell you as a PM, and what's the right product response?",
          options: [
            "The model is performing well; 38% on new SKUs is within acceptable range for cold-start forecasting",
            "The cold-start problem is costing significant accuracy on new SKUs — investing in better feature engineering for new products (Shopify tags, category priors, similar-SKU matching) is a high-leverage model improvement",
            "New SKUs should be excluded from accuracy reporting since they don't have enough data",
            "The solution is to require customers to wait 90 days before generating PO recommendations for new SKUs",
          ],
          correct: 1,
          explanation:
            "A 14% vs. 38% WMAPE gap between mature and new SKUs is a significant cold-start problem. For DTC brands that regularly launch new products, this gap has real financial consequences — bad early-life forecasts cause early stockouts on new launches or expensive overstock on flops. The product response is to improve cold-start handling: using Shopify tag similarity to find analogous SKUs, applying category-level priors, and incorporating early-life velocity signals more aggressively. Excluding new SKUs from reporting hides the problem. Waiting 90 days to generate recommendations would make the product unusable for launch-heavy brands.",
        },
        {
          type: "multiple-choice",
          question:
            "Tightly's data science team wants to test a new seasonality model. They propose showing the new model to half the SKUs within each customer brand. What is the main problem with this experimental design?",
          options: [
            "The sample size per SKU cohort will be too small to achieve statistical significance",
            "Splitting SKUs within a brand creates interference effects — inventory decisions on model-A SKUs affect demand for model-B SKUs that are substitutes",
            "The holdout period isn't long enough to capture seasonal variation",
            "It's unethical to show different models to different SKUs without customer consent",
          ],
          correct: 1,
          explanation:
            "Within-brand SKU-level splits are vulnerable to interference: if a model-A SKU runs out of stock, customers may substitute to a model-B SKU, distorting the demand signal for the model-B group. This is the fundamental supply chain A/B testing problem. For algorithm changes with significant business impact, the holdout brand methodology (assigning entire brands to each model) is the right approach — it eliminates interference at the cost of needing more brands and a longer measurement window.",
        },
      ],
      resources: [
        {
          title: "Forecasting: Principles and Practice (3rd ed.) — Hyndman & Athanasopoulos",
          url: "https://otexts.com/fpp3/",
          description:
            "The canonical open-access textbook on forecasting methods. Chapters 5 (time series decomposition) and 13 (forecasting accuracy evaluation) are directly relevant to understanding Tightly's model.",
        },
        {
          title: "MAPE vs. WMAPE: Why Your Forecasting Metric Matters — Stitch Fix Tech Blog",
          url: "https://multithreaded.stitchfix.com/blog/",
          description:
            "Stitch Fix has published extensively on demand forecasting at scale. Search their tech blog for WMAPE and hold-out evaluation methodology.",
        },
        {
          title: "A/B Testing in Supply Chain — MIT Supply Chain Management",
          url: "https://scm.mit.edu/research/",
          description:
            "Academic and practitioner research on experimental design for supply chain interventions — relevant for understanding why standard A/B test methodology doesn't transfer directly.",
        },
      ],
    },

    // ─── Lesson 6-2 ────────────────────────────────────────────────────────────
    {
      id: "tightly-6-2",
      unitId: "tightly-unit6",
      companySlug: "tightly",
      title: "A Hypothetical Tightly Roadmap",
      tldr:
        "What a principled 12-month Tightly product roadmap might look like — organized into strategic themes with the retention logic and customer segment rationale behind each one.",
      skills: ["Product Roadmap", "Strategic Themes", "Retention Strategy"],
      xp: 25,
      content: [
        {
          body: "# A Hypothetical Tightly Roadmap\n\nA roadmap is a communication tool as much as a planning tool. The best roadmaps don't list features — they explain the bets the team is making and why. This lesson walks through a hypothetical 12-month Tightly roadmap organized into four strategic themes, with the customer segment logic and retention metric behind each one.\n\nThis isn't the actual Tightly roadmap (you'll discover that in your first weeks). It's a structured example of how to think about sequencing, rationale, and internal alignment — so you can evaluate the real roadmap against this kind of thinking.",
        },
        {
          heading: "Theme 1: Trust & Transparency (Q1–Q2)",
          body: "**The bet**: PO acceptance rate is the most important early retention metric. If buyers don't accept the recommendations, they're not getting value from the product. The fastest path to improving acceptance rate is not improving the model — it's showing buyers why the model made its recommendation.\n\n**What gets built**:\n- *Recommendation explanation cards*: Every PO recommendation surfaces the top 3 contributing factors (e.g., \"Seasonality +40%, 14-day supplier lead time, DoS drops to 6 in 11 days\"). Written in plain language, not model parameters.\n- *Confidence intervals on forecasts*: Show a range, not a point estimate. \"We expect 180-240 units sold in the next 30 days\" is more honest and more useful than \"208 units.\" Buyers who see uncertainty make better override decisions.\n- *Override tracking and learning loop*: Log every time a buyer adjusts a Tightly recommendation, and track whether their override or the original suggestion turned out to be more accurate. This data feeds model retraining and gives buyers a scorecard that builds trust in the system over time.\n\n**Why this comes first**: Trust is the prerequisite for everything else. A buyer who doesn't understand the recommendation will override it (lowering acceptance rate), ignore it (making the product unused), or churn. Transparency features don't require new model investment — they expose what the model already knows. The ratio of customer value to engineering effort is the highest of any theme on this roadmap.\n\n**Customer segment it serves**: All segments, but most directly the ops manager persona who approves POs and needs to understand the recommendation before signing off.",
        },
        {
          heading: "Theme 2: Supplier Intelligence (Q2–Q3)",
          body: "**The bet**: The biggest source of bad PO recommendations isn't the demand forecast — it's incorrect supplier data. If the tool thinks a supplier delivers in 14 days and they're actually delivering in 22 days, every replenishment suggestion will be late. Fixing the input quality problem fixes the output quality problem.\n\n**What gets built**:\n- *Lead time actuals tracking*: Log the actual delivery date against the expected delivery date for every PO processed through Tightly. Build a rolling average of actual lead time per supplier.\n- *Lead time drift alerts*: Surface a notification when a supplier's actual lead time has increased more than 20% from their configured baseline. \"This supplier's average delivery time has increased from 14 to 22 days over the last 3 months.\"\n- *Automatic lead time adjustment in replenishment model*: After sufficient data (e.g., 5+ completed POs per supplier), automatically adjust the lead time used in replenishment calculations to match observed actuals — with user confirmation before applying.\n- *Supplier scorecards*: A simple view per supplier showing on-time delivery rate, average lead time variance, and MOQ compliance history. Makes supplier performance conversations with reps data-driven.\n\n**Why this comes second**: Trust & Transparency (Theme 1) establishes why the model recommended something. Supplier Intelligence fixes the cases where the recommendation is wrong because the inputs are wrong. Together they address the two biggest drivers of low PO acceptance rate.\n\n**Customer segment it serves**: Primarily the ops manager with multiple active suppliers. Brands with 3+ suppliers and variable lead times get the most value. This feature is part of the pitch to larger, more complex brands — it's a differentiation point against Prediko, which has no supplier intelligence capabilities.",
        },
        {
          heading: "Theme 3: Cash Flow Layer (Q3–Q4)",
          body: "**The bet**: The decision to approve a $180K purchase order is not made by the ops manager — it's made by the founder. Founders think in cash, not units. A feature set that translates inventory decisions into cash impact language opens a new retention lever: CEO-level buy-in.\n\n**What gets built**:\n- *Cash impact calculator on every PO*: \"Approving this PO ties up approximately $22,000 in working capital for ~38 days, based on your current DoS for this SKU.\" Shown alongside the PO recommendation, not buried in a report.\n- *Inventory value at risk dashboard*: A single-screen view of total working capital tied up in inventory, segmented by DoS cohort — what's healthy (30-60 days), what's overstocked (90+ days), and what's at stockout risk (<14 days).\n- *Optional: Bank balance integration*: Pull cash balance from Shopify Payments, Mercury, or another connected account to show \"you have $X available; these approved POs will require $Y over the next 30 days.\" This is a significant integration build — may be Phase 2 of the theme.\n\n**Why this comes third**: The first two themes build trust with the ops manager persona. The Cash Flow Layer brings the founder into the product experience. Founder engagement is the strongest predictor of renewal — if the CEO sees Tightly as a cash management tool, not just an inventory tool, the renewal conversation is about business outcomes, not feature comparisons.\n\n**Customer segment it serves**: Primarily the founder/CEO persona at $1M-$10M brands. Also relevant to CFOs at brands that have hired finance staff. This feature opens a natural expansion motion — from inventory planning to working capital intelligence.",
        },
        {
          heading: "Theme 4: Collaborative Planning (Q4)",
          body: "**The bet**: As Tightly customers grow from $3M to $15M, they add team members. A single-user tool becomes a bottleneck. Building multi-user workflows retains customers who would otherwise outgrow the product and switch to something with role-based access.\n\n**What gets built**:\n- *Multi-user workflows*: Role-based access (Viewer, Buyer, Admin). Buyers can create and submit POs; Admins approve them. Viewer role for executives who need visibility without edit access.\n- *Buyer notes on POs*: A comment field on PO recommendations where team members can leave context — \"held this PO because supplier confirmed they're out of material until March 15.\" This reduces the workaround of emailing context outside the tool.\n- *Approval workflows for larger brands*: POs above a configurable dollar threshold require a second approval. Simple, not enterprise-complex.\n- *S&OP meeting export*: A one-click export of the current inventory health summary (DoS by category, upcoming POs, flagged SKUs) formatted for a weekly ops meeting. Not a full S&OP module — just the data most ops teams screenshot and paste into a slide.\n\n**Why this comes fourth**: Collaborative features require a user base that's large enough to have multi-person ops teams — and those customers need the core trust and intelligence features to already be working before collaboration layers help. Shipping collaboration first, before explainability and supplier intelligence, builds a better experience for larger teams onto a foundation that smaller teams don't yet need.\n\n**Customer segment it serves**: Primarily brands at the upper end of Tightly's ICP — $10M-$30M with 2-5 people involved in procurement decisions. This is the feature set that makes retention sticky as customers grow, and that makes Tightly competitive against Netstock for teams that need some S&OP capability without full enterprise complexity.",
        },
        {
          heading: "Writing Theme Explanations for Internal Alignment",
          body: "Every theme in a well-structured roadmap should be explainable in one paragraph that connects: (1) the customer segment and persona, (2) the retention metric it moves, and (3) why it's sequenced here rather than earlier or later.\n\nA template:\n\n> **[Theme Name]** serves [persona] at [customer segment] by [what it does]. The primary retention metric it moves is [metric] because [causal logic]. We're building this in [Q] rather than earlier because [dependency or sequencing logic] and rather than later because [urgency or opportunity cost].\n\nUsing this template in quarterly planning docs forces clear thinking and makes roadmap trade-offs explicit — which is what prevents the roadmap from becoming a feature list with no strategic coherence.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "Why does the hypothetical Tightly roadmap put Trust & Transparency (explainability) in Q1-Q2, before Supplier Intelligence in Q2-Q3?",
          options: [
            "Explainability is technically easier to build than supplier intelligence features",
            "Explainability directly improves PO acceptance rate — the key trust metric — and requires no new data infrastructure, making it the highest-impact, fastest-to-deliver investment",
            "Supplier intelligence features depend on having enough PO history, which takes time to accumulate",
            "Customer research showed explainability was the most-requested feature",
          ],
          correct: 1,
          explanation:
            "The sequencing logic is: trust is the prerequisite for value. Explainability improves PO acceptance rate without requiring new data pipelines — it exposes what the model already knows, presented in buyer-readable language. That makes the effort-to-value ratio the highest of any theme. Supplier intelligence requires accumulating actual vs. promised delivery data, which takes time — but the primary reason it comes second is that fixing input quality addresses the root cause of the cases where explainability reveals the recommendation was wrong.",
        },
        {
          type: "multiple-choice",
          question:
            "The Cash Flow Layer theme is positioned as a CEO-retention feature. What is the underlying product strategy logic?",
          options: [
            "CEOs are more likely to renew a SaaS subscription than ops managers, so targeting them improves net revenue retention",
            "Translating inventory decisions into cash language opens a new retention lever: if the CEO sees Tightly as a cash management tool, the renewal conversation becomes about business outcomes, not feature comparisons",
            "Cash flow integration requires Shopify Payments API access, which only founders can authorize",
            "Most B2B SaaS tools are underutilized by executives; a dashboard designed for the CEO increases daily active users",
          ],
          correct: 1,
          explanation:
            "The strategic logic is about expanding the product's stakeholder surface. When only the ops manager uses the product, the renewal decision is made by someone one step removed from daily value. When the founder sees cash impact of inventory decisions in Tightly's dashboard, the renewal decision is made by someone who viscerally feels the product's value. This shifts Tightly from an operational tool (evaluated on features) to a financial management tool (evaluated on ROI) — which is a much more defensible renewal position.",
        },
        {
          type: "multiple-choice",
          question:
            "A PM wants to move Collaborative Planning (Theme 4) to Q1 because \"a large enterprise prospect is asking for it.\" What is the strongest argument against this re-sequencing?",
          options: [
            "Enterprise features are always lower priority than SMB features at an early-stage startup",
            "Collaborative features built on top of a product that doesn't yet have explainability or good supplier intelligence give large teams a worse experience than smaller teams have today",
            "Moving Theme 4 to Q1 would require hiring additional engineers",
            "The enterprise prospect may not close, making the investment speculative",
          ],
          correct: 1,
          explanation:
            "The strongest sequencing argument is about product quality, not resource allocation. If Tightly ships multi-user approval workflows before fixing explainability and supplier intelligence, enterprise customers will have multiple people approving recommendations they don't understand or trust — and the approval workflow amplifies the confusion rather than resolving it. The value of collaborative features depends entirely on the underlying product being trustworthy. The prospect argument matters (it may accelerate the theme) but the right question is: can we build a minimal version of Themes 1 and 2 in Q1 so that when collaborative planning ships, it works on a reliable foundation?",
        },
      ],
      resources: [
        {
          title: "Now/Next/Later Roadmapping — Janna Bastow",
          url: "https://www.prodpad.com/blog/now-next-later-roadmap/",
          description:
            "A theme-based roadmap format that avoids false date precision — particularly relevant for an early-stage team like Tightly where quarterly plans will shift.",
        },
        {
          title: "Outcomes Over Outputs — Josh Seiden",
          url: "https://joshuaseiden.com/books/outcomes-over-outputs/",
          description:
            "The core argument for tying roadmap themes to retention metrics rather than feature lists. Short read, high relevance for connecting Tightly's roadmap to churn and expansion goals.",
        },
        {
          title: "Product Roadmaps Relaunched — Lombardo, McCarthy, Ryan, Connors",
          url: "https://www.oreilly.com/library/view/product-roadmaps-relaunched/9781491971710/",
          description:
            "Comprehensive guide to building roadmaps that communicate strategy — covers the internal alignment use case directly.",
        },
      ],
    },

    // ─── Lesson 6-3 ────────────────────────────────────────────────────────────
    {
      id: "tightly-6-3",
      unitId: "tightly-unit6",
      companySlug: "tightly",
      title: "PM Methods for Supply Chain Software",
      tldr:
        "Supply chain PM is different from consumer PM and from growth SaaS PM. The decision loop is slow, the user base is small and expert, and mistakes have real financial consequences. Here's the method set that works.",
      skills: ["PRD Writing", "Instrumentation", "Stakeholder Management", "Data Quality"],
      xp: 25,
      content: [
        {
          body: "# PM Methods for Supply Chain Software\n\nThe craft of product management at Tightly is different from building a consumer app, a growth SaaS dashboard, or an AI chatbot. The decision loop is slower. The user base is smaller, more expert, and higher-stakes. And a bad feature shipped at the wrong moment can cost a customer thousands of dollars in a single inventory cycle.\n\nThese differences require specific adaptations to standard PM methods.",
        },
        {
          heading: "Why Supply Chain PM Is Different",
          body: "**The decision loop is slow**: Most product improvements are validated through usage — do users engage with the feature? In supply chain software, the meaningful decision happens monthly (when a PO is placed) or quarterly (when a buying plan is reviewed). A feature you ship in January may not have meaningful outcome data until March. This means:\n- Build leading indicators (did the user engage with the feature?) alongside lagging outcomes (did PO accuracy improve?)\n- Don't declare a feature successful at 30 days. Use 90-day outcome windows.\n\n**The user base is small and expert**: Tightly may have 200-500 active customers. Discovery requires talking to the actual users — you cannot rely on statistical significance in usage data the way a consumer PM might. Each customer relationship matters. A churned customer at this scale is a significant revenue event and a meaningful signal.\n\n**Mistakes have real financial consequences**: A bug that generates incorrect reorder quantities can cost a customer $10,000-$50,000 in bad inventory decisions before they catch it. This means:\n- Edge case specification must be done in PRDs, not discovered in production\n- Rollout strategy matters — new models and calculation changes should roll out to a limited cohort first\n- Error states must be designed as carefully as happy paths",
        },
        {
          heading: "The Monday Morning Test",
          body: "For every feature you're considering shipping, ask: **would an ops manager use this the first Monday of every month?**\n\nThe first Monday of the month is when operations teams review inventory health, generate POs for the upcoming cycle, and plan supplier orders. It's the highest-intensity workflow moment in the supply chain calendar. If a feature would genuinely improve that morning for your most active user, it's worth building. If it would go unnoticed, reconsider.\n\nApplied practically:\n- *Daily active users dashboard*: Would an ops manager open this on the first Monday? Probably not — they already know what they're doing. Medium priority.\n- *Recommended POs with confidence intervals*: Would an ops manager use this when reviewing reorder suggestions? Yes, directly. High priority.\n- *Supplier lead time drift alert*: Would an ops manager care if their primary supplier's lead time increased 8 days since last month? Absolutely — it changes every PO they need to place today. High priority.\n- *Gamification / streak features*: Would an ops manager engage with this on the most important ops morning of the month? No. Table stakes for consumer; irrelevant here.\n\nThis test doesn't override JTBD or discovery — it's a fast sanity check when you're evaluating the relative urgency of features already in the backlog.",
        },
        {
          heading: "Writing PRDs for Inventory Features",
          body: "Standard PRD templates assume happy path and a few error states. Inventory features require up-front specification of edge cases that will definitely occur in production — and where the wrong handling has financial consequences.\n\n**Required edge case specification for any replenishment feature**:\n\n`Zero-demand SKUs`: A SKU that has sold 0 units in the past 60 days. Should Tightly recommend a reorder? Usually no — but there are valid reasons a brand may want to maintain safety stock on a zero-demand SKU (it's a component of a bundle, it's out of stock as the reason for zero demand). The PRD must define the behavior.\n\n`New product launches`: A SKU with zero historical data. What does Tightly recommend? The PRD must define the cold-start behavior: use category average? Use similar SKU data? Surface a \"not enough data\" state rather than a potentially wrong recommendation?\n\n`Clearance items`: A SKU the brand is actively trying to sell through and doesn't want to reorder. Does Tightly know this? How? Does the brand mark it in Tightly, or does the system infer it from a price drop signal? The PRD must define the signal and the behavior change.\n\n`Bundle components`: A SKU that's also a component of a bundle. The demand signal is a mix of standalone and bundled sales. Blending them naively produces wrong forecasts. The PRD must define how bundle demand is decomposed.\n\n**The rule**: if a supply chain PM says \"we'll handle edge cases in a follow-up sprint,\" they're shipping a product that will silently generate wrong recommendations for a meaningful subset of customers. Edge cases in supply chain are not edge cases — they're standard operating conditions for brands with complex catalogs.",
        },
        {
          heading: "The Role of Data Quality in Supply Chain Products",
          body: "In supply chain software, the product is only as good as the data feeding it. An ops manager who has misconfigured a supplier's lead time will get wrong recommendations. A brand that hasn't tagged their seasonal products will get inaccurate seasonality modeling. Data quality is not an onboarding problem — it's a retention problem.\n\n**Building a data health score for customers**:\nTightly should surface a customer-facing data quality score across key dimensions:\n- *Supplier completeness*: % of suppliers with configured lead times and MOQs\n- *SKU tagging coverage*: % of active SKUs with category/seasonality tags\n- *Historical data depth*: How many months of Shopify order history are loaded?\n- *Location configuration*: For multi-warehouse brands, % of inventory assigned to a location\n\nA customer with a data health score of 40% will have significantly worse forecast accuracy than one at 85%. Surfacing this score — and showing which specific gaps to fix — converts a frustrating product experience into a guided improvement path.\n\n**Why onboarding data quality predicts retention**: The first 30 days of a Tightly customer's experience are disproportionately important. If the first PO recommendations are widely wrong (because supplier data wasn't configured), the brand will lose trust before the model ever has a chance to demonstrate accuracy. The PM implication: data health completion should be a first-week activation requirement, not a \"nice to have\" in a setup wizard.",
        },
        {
          heading: "Instrumentation and Stakeholder Management at Sub-30 People",
          body: "**Instrumentation strategy — what to track in a replenishment product**:\n\n| Event | Why It Matters |\n|---|---|\n| PO acceptance rate (% approved without modification) | Primary trust signal |\n| Time-to-first-PO-approval (days from activation) | Activation quality signal |\n| Override frequency by SKU type | Which product categories need model attention |\n| Feature adoption by persona | Who is using what — founder vs. ops vs. buyer |\n| Data health score at Day 1, 7, 30 | Onboarding data quality predictor |\n| Session frequency on first-Monday-of-month | Is the tool becoming part of the ops routine? |\n\nBeyond tracking, instrumentation is about building a closed feedback loop: model makes recommendation → buyer accepts or overrides → outcome is observed (actual vs. forecast demand) → model retrains on the error. A PM who doesn't ensure this loop is instrumented is flying blind on model quality.\n\n**Stakeholder management at <30 people**:\nAt a small team, formal stakeholder management rituals (weekly steering committees, RACI charts) are overhead. What works instead:\n\n- *Engineering*: Write PRDs that include edge case specification, so engineers don't have to interrupt you mid-sprint with \"what do we do if the SKU has zero demand?\" Attend sprint reviews, not just planning.\n- *Data science*: Frame model improvements as retention metrics, not technical achievements. \"This model change is expected to improve PO acceptance rate by 8 points for seasonal brands\" is a more useful framing than \"we improved MAPE from 22% to 18%.\"\n- *Customer success*: CS is your discovery partner. Train them to log specific workflow moments in their customer calls, not just satisfaction signals. A monthly 30-minute review of CS call notes is worth more than a quarterly NPS survey.\n- *Founders*: At an early-stage company, the founders will want to weigh in on roadmap. The way to earn prioritization authority is to make your reasoning legible — show your data, your customer evidence, and your trade-off logic. PMs who present roadmap decisions as mandates lose alignment; PMs who show their work earn trust.",
        },
      ],
      exercises: [
        {
          type: "multiple-choice",
          question:
            "You're writing a PRD for a new 'Smart Reorder Alerts' feature that notifies ops managers when a SKU is approaching a reorder point. Which edge case specification is MOST critical to include?",
          options: [
            "What happens when the ops manager is on vacation and doesn't see the alert",
            "What happens when a SKU has sold zero units in the past 60 days — should an alert still fire?",
            "What the alert notification email subject line should read",
            "How many alerts can a user receive per day before they opt out",
          ],
          correct: 1,
          explanation:
            "Zero-demand SKUs are a standard condition in DTC catalogs — seasonal items between seasons, out-of-stock items showing zero demand, discontinued products, or bundle components. If the PRD doesn't specify what happens when a zero-demand SKU approaches its reorder point (which may have been configured when the SKU was active), the feature will generate alerts that ops managers find wrong and dismissive — eroding trust in the alert system. The other items are UX and design decisions that can be resolved later; the zero-demand edge case determines whether the core logic is correct.",
        },
        {
          type: "multiple-choice",
          question:
            "Tightly ships a new Supplier Scorecard feature. 30 days later, product analytics show that only 12% of customers have opened the Supplier Scorecard page. What is the most PM-correct interpretation of this data?",
          options: [
            "The feature is a failure and should be deprioritized or removed",
            "The notification strategy is wrong — customers need in-app prompts or email to discover the feature",
            "30 days is not long enough to evaluate a supply chain feature; wait for the end of the next monthly PO cycle and check first-Monday-of-month usage",
            "12% adoption is typical for a new feature in B2B SaaS and doesn't require action",
          ],
          correct: 2,
          explanation:
            "Supply chain software is evaluated on a monthly decision cycle. 30 days of data may not include the high-intensity first-Monday-of-month usage moment that drives most PO-related feature adoption. Before drawing conclusions, check whether the 12% adoption figure includes any first-Monday sessions — if not, the data is incomplete. If 60-day data still shows 12%, then it's a signal worth investigating (discovery, notification strategy, onboarding placement). The core PM judgment here is that supply chain feature adoption timelines are longer than typical SaaS — a 30-day read is premature for a PO-cycle feature.",
        },
        {
          type: "multiple-choice",
          question:
            "A Tightly customer in their first week says: 'The reorder recommendations look completely wrong — it's suggesting we order 800 units on a SKU we only sell 50 of per month.' What should the PM investigate first?",
          options: [
            "The demand forecasting model — there may be a bug in the seasonality calculation",
            "The customer's supplier lead time configuration — a lead time of 180 days would cause the system to recommend much larger orders than expected",
            "Whether the customer's Shopify sync is complete and pulling accurate order history",
            "The customer's DoS target setting — if it's set to 365 days, any velocity would produce large PO suggestions",
          ],
          correct: 1,
          explanation:
            "In the first week of onboarding, the most common cause of wrong PO recommendations is misconfigured supplier data, not model failure. A supplier lead time set to 180 days (perhaps entered as 180 instead of 18) would cause the replenishment model to recommend orders sized to cover 6 months of demand — producing exactly this symptom. Before escalating to data science, the PM should check the three most common onboarding data errors: supplier lead time values, DoS targets, and Shopify sync completeness. Data quality investigation should always precede model investigation for new customers.",
        },
      ],
      resources: [
        {
          title: "The Lean Startup — Eric Ries",
          url: "https://theleanstartup.com/",
          description:
            "The validated learning framework — adapted for supply chain context, the 'build-measure-learn' cycle applies to model changes and feature releases, but with a 90-day measurement window instead of 2 weeks.",
        },
        {
          title: "Inspired: How to Create Tech Products Customers Love — Marty Cagan",
          url: "https://svpg.com/inspired-how-to-create-tech-products-customers-love/",
          description:
            "The foundational PM text on empowered product teams. Chapter on discovery and validation directly applies to Tightly's small-team, high-stakes environment.",
        },
        {
          title: "Mixpanel for B2B SaaS Instrumentation Guide",
          url: "https://mixpanel.com/blog/b2b-product-analytics/",
          description:
            "Practical guide to setting up event tracking for B2B SaaS products — relevant for instrumenting the PO acceptance rate funnel and feature adoption by persona.",
        },
      ],
    },
  ],

  // ── Unit Quiz ────────────────────────────────────────────────────────────────
  quizXp: 35,
  quiz: [
    {
      type: "multiple-choice",
      question:
        "Tightly's data science team says: 'We improved MAPE by 6 points on our test set.' A PM asks: 'Was this evaluated against a naive seasonal baseline?' Why is that the right question?",
      options: [
        "Naive baselines are required by enterprise customers in procurement evaluations",
        "A model that improves MAPE but still underperforms a simple same-week-last-year baseline isn't actually adding AI value — the PM needs to know whether the sophistication is paying off",
        "Naive baselines help the data science team avoid overfitting during training",
        "MAPE comparisons against baselines are required for ISO compliance in supply chain software",
      ],
      correct: 1,
      explanation:
        "If Tightly's model improves from 28% to 22% MAPE but a same-week-last-year naive model achieves 20% MAPE, the sophisticated model isn't winning on the most important SKUs — seasonal ones. The PM needs to know whether the AI is adding value over simpler baselines, because that's the claim being made to customers. Beats-naive is the minimum bar for 'AI adds value here.' Failing to beat a naive baseline on seasonal SKUs would be a significant product and sales story problem.",
    },
    {
      type: "multiple-choice",
      question:
        "A PM is writing a PRD for a 'Bundle Forecasting' feature that adjusts demand forecasts when a SKU is sold as part of a bundle. Which part of the PRD should be written first?",
      options: [
        "The UI mockups for how bundle relationships are displayed in the SKU catalog",
        "The success metrics — what improvement in MAPE is expected after the feature ships",
        "The edge case specification — what happens when a SKU is in multiple bundles, when a bundle component is out of stock, and when the bundle itself has no historical data",
        "The engineering requirements for the Shopify API integration that identifies bundle products",
      ],
      correct: 2,
      explanation:
        "Bundle forecasting is exactly the kind of inventory feature where edge cases are normal operating conditions, not exceptions. A SKU in multiple bundles (with different bundle velocities) is common. A bundle where one component is a new product launch with no history is common. A bundle that's been discontinued but components remain active is common. Writing edge case specification first prevents the feature from shipping with silent failures on these conditions. UI, metrics, and API requirements are all important but depend on first resolving what the correct behavior is in every operating state.",
    },
    {
      type: "multiple-choice",
      question:
        "Tightly is considering two Q1 features: (A) A cash flow impact calculator on PO recommendations, and (B) An explanation card showing why each PO was recommended. Both have similar engineering effort. Which should be prioritized first, and why?",
      options: [
        "Feature A (cash flow), because it opens the CEO persona and drives renewal decisions",
        "Feature B (explanation cards), because PO acceptance rate is the prerequisite trust metric — without it, even a correct cash flow calculation won't be believed",
        "Both should be shipped together since they're both transparency features",
        "Feature A, because financial metrics are more objective and easier to validate than qualitative explanations",
      ],
      correct: 1,
      explanation:
        "The sequencing logic is about trust prerequisites. If an ops manager doesn't trust the PO recommendation (because they don't understand where it came from), they won't be moved by knowing its cash impact — they'll just distrust the cash impact number too. Explanation cards build the foundation of trust that makes the cash flow calculation valuable. Once the buyer understands and trusts the recommendation, the cash impact layer helps them communicate it upward to the founder. This is the same logic as the roadmap theme sequencing: Trust & Transparency before Cash Flow Layer.",
    },
    {
      type: "multiple-choice",
      question:
        "After 60 days, a Tightly customer's PO acceptance rate is 45%. The ops manager says: 'The suggestions are usually in the right ballpark, but I always change the quantity before approving.' What does this tell you?",
      options: [
        "The demand forecast model needs retraining on this customer's data",
        "The PO quantity calculation is likely using incorrect inputs — supplier MOQs, safety stock targets, or lead times that don't match the customer's actual operating parameters",
        "A 45% acceptance rate is normal for new customers in the first 60 days",
        "The customer's ops manager is too conservative and needs training to trust the system",
      ],
      correct: 1,
      explanation:
        "When the direction is right but the quantity is wrong, the problem is almost always in the quantity-calculation inputs, not the demand forecast. The demand forecast tells you when to order; the quantity calculation uses supplier MOQs, safety stock configuration, and lead times to determine how much. If the ops manager is systematically adjusting quantities (not rejecting recommendations entirely), the reorder timing logic is working but the quantity parameters are wrong — typically a misconfigured MOQ, an incorrect safety stock day target, or a lead time that doesn't match reality. The PM investigation should start with those three inputs.",
    },
    {
      type: "multiple-choice",
      question:
        "Tightly's data health score shows that a new customer has configured supplier data for only 3 of their 12 active suppliers in their first week. What is the most PM-correct action?",
      options: [
        "Wait until the customer has used the product for 30 days before intervening — they may complete setup on their own",
        "Trigger an onboarding intervention (in-app prompt, CS outreach, or both) to help them complete supplier configuration before the first PO recommendations are generated",
        "Generate PO recommendations for the 3 configured suppliers and suppress recommendations for the other 9",
        "Send a data quality warning email at the 30-day mark if they still haven't completed setup",
      ],
      correct: 1,
      explanation:
        "Onboarding data quality is the biggest predictor of retention. A customer who generates their first PO recommendations with 9 of 12 suppliers unconfigured will receive recommendations that are wrong for those 9 suppliers — and will form a negative first impression of the product before the model ever has a chance to demonstrate its value. The correct PM action is to intervene proactively during the onboarding window, before the first PO cycle, to ensure supplier data completeness. Waiting 30 days means the first impression has already been set. Suppressing recommendations is better than wrong ones, but it reduces the product's apparent value. Early intervention is the retention-protecting move.",
    },
  ],
};
