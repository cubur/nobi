import type { CompanyModule } from "@/data/types";
import { kestraUnit1 } from "@/data/curriculum/kestra/unit1";
import { kestraUnit2 } from "@/data/curriculum/kestra/unit2";
import { kestraUnit3 } from "@/data/curriculum/kestra/unit3";
import { kestraUnit4 } from "@/data/curriculum/kestra/unit4";
import { kestraUnit5 } from "@/data/curriculum/kestra/unit5";

export const kestra: CompanyModule = {
  slug: "kestra",
  name: "Kestra",
  tagline: "Universal Orchestration for Data, AI, and Infrastructure",
  industry: "Developer Infrastructure / Workflow Orchestration",
  techStack: ["YAML-first Workflows", "AI Agents", "LLM Orchestration", "Event-Driven", "Open Source"],
  why: "Kestra is hiring a Product Manager, AI to define the roadmap for AI workflow features on their universal orchestration platform. This course goes deep on the orchestration problem space, Kestra's architecture and core concepts, the competitive landscape (Airflow, Prefect, Dagster, Temporal), Kestra's AI strategy (AI Agents, Copilot, MCP Resources), and how to position for the 4-stage interview.",
  units: [kestraUnit1, kestraUnit2, kestraUnit3, kestraUnit4, kestraUnit5],
};
