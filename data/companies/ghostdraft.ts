import type { CompanyModule } from "@/data/types";
import { unit1 } from "@/data/curriculum/unit1";
import { unit2 } from "@/data/curriculum/unit2";
import { unit3 } from "@/data/curriculum/unit3";
import { unit4 } from "@/data/curriculum/unit4";
import { unit5 } from "@/data/curriculum/unit5";

export const ghostdraft: CompanyModule = {
  slug: "ghostdraft",
  name: "GhostDraft",
  tagline: "The IDE for Legal Documents",
  industry: "Legal Tech / Document Intelligence",
  techStack: ["NLP", "Rule-based AI", "Microsoft Word Add-in", "Multilingual Parser (JA/EN/KO)"],
  why: "GhostDraft made a deliberate choice to use NLP instead of LLMs for legal documents — a fascinating product strategy that reveals everything about AI PM tradeoffs. Founded 2021, Tokyo + SF.",
  units: [unit1, unit2, unit3, unit4, unit5],
  hidden: true,
};
