import type { CompanyModule } from "@/data/types";
import { enginyUnit1 } from "@/data/curriculum/enginy/unit1";
import { enginyUnit2 } from "@/data/curriculum/enginy/unit2";
import { enginyUnit3 } from "@/data/curriculum/enginy/unit3";
import { enginyUnit4 } from "@/data/curriculum/enginy/unit4";
import { enginyUnit5 } from "@/data/curriculum/enginy/unit5";

export const enginy: CompanyModule = {
  slug: "enginy",
  name: "Enginy",
  tagline: "The GTM Brain for Modern Revenue Teams",
  industry: "GTM AI / Sales Intelligence",
  techStack: ["LLM Personalization", "B2B Data Enrichment", "Multi-channel Outreach", "CRM Integration"],
  why: "Enginy (formerly Genesy) is building an AI-native GTM platform that unifies prospect discovery, enrichment, and personalized outreach. A fascinating AI product strategy case with real tradeoffs between data quality, personalization, and deliverability.",
  units: [enginyUnit1, enginyUnit2, enginyUnit3, enginyUnit4, enginyUnit5],
  hidden: true,
};
