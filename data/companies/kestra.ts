import type { CompanyModule } from "@/data/types";
import { kestraUnit1 } from "@/data/curriculum/kestra/unit1";
import { kestraUnit2 } from "@/data/curriculum/kestra/unit2";
import { kestraUnit3 } from "@/data/curriculum/kestra/unit3";
import { kestraUnit4 } from "@/data/curriculum/kestra/unit4";
import { kestraUnit5 } from "@/data/curriculum/kestra/unit5";

export const kestra: CompanyModule = {
  slug: "kestra",
  name: "Kestra",
  tagline: "Workflow Orchestration for the AI Era",
  industry: "Developer Infrastructure / Workflow Orchestration",
  techStack: ["AI Workflows", "Orchestration", "LLM Agents", "YAML-first", "Open Source"],
  why: "Kestra is hiring a Product Manager, AI to define the roadmap for AI workflow features on their universal orchestration platform. This course covers the product context, AI product judgment, customer discovery, roadmap planning, and exactly how to ace their 4-stage interview — including the async homework exercise.",
  units: [kestraUnit1, kestraUnit2, kestraUnit3, kestraUnit4, kestraUnit5],
};
