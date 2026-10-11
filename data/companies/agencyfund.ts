import type { CompanyModule } from "@/data/types";
import { agencyfundUnit1 } from "@/data/curriculum/agencyfund/unit1";
import { agencyfundUnit2 } from "@/data/curriculum/agencyfund/unit2";
import { agencyfundUnit3 } from "@/data/curriculum/agencyfund/unit3";
import { agencyfundUnit4 } from "@/data/curriculum/agencyfund/unit4";

export const agencyfund: CompanyModule = {
  slug: "agencyfund",
  name: "The Agency Fund",
  tagline: "AI for human agency in global development",
  industry: "Philanthropy / AI for Social Good",
  techStack: ["Airbyte", "BigQuery", "dbt", "Langfuse", "OpenRouter", "Evidential", "WhatsApp bots"],
  why: "Technical / live-exercise prep for a product role at the Agency Fund. Focused on your weak spots: data pipelines and ETL, and AI evals (the fund's four-level framework), plus how the fund and its grantees operate, two mock exercises, and tough questions. The eval playbook, behav-sci-skills and Evidential docs were read directly from GitHub; the job posting and Substack posts could not be fetched, so verify those tonight.",
  units: [agencyfundUnit1, agencyfundUnit2, agencyfundUnit3, agencyfundUnit4],
};
