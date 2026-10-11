import type { CompanyModule } from "@/data/types";
import { agencyfundUnit1 } from "@/data/curriculum/agencyfund/unit1";
import { agencyfundUnit2 } from "@/data/curriculum/agencyfund/unit2";
import { agencyfundUnit3 } from "@/data/curriculum/agencyfund/unit3";
import { agencyfundUnit4 } from "@/data/curriculum/agencyfund/unit4";

export const agencyfund: CompanyModule = {
  slug: "agencyfund",
  name: "The Agency Fund",
  tagline: "AI for human agency in global development",
  industry: "Funder-Doer / AI for Global Development",
  techStack: ["Airbyte", "BigQuery", "dbt", "Langfuse", "OpenRouter", "Evidential", "SQL", "Kobo / ODK / DHIS2", "WhatsApp bots"],
  why: "Prep for the Agency Fund's Technical Product Manager role: senior, hands-on, embedded with 3–4 NGO partners, roughly half partner-facing and half engineering execution, with SQL, data pipelines, AI evals and A/B tests named in the posting. Built from the actual job posting and the fund's public eval playbook, behav-sci-skills and Evidential repos. The Substack stack post could not be fetched, so verify its tool picks yourself.",
  units: [agencyfundUnit1, agencyfundUnit2, agencyfundUnit3, agencyfundUnit4],
};
