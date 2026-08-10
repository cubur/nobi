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
  techStack: ["Java", "Micronaut", "Vue.js", "Kafka", "Elasticsearch", "PostgreSQL"],
  why: "Kestra is hiring a Product Engineer for AI — a full-stack role that owns the entire spec-to-ship lifecycle for AI features on their orchestration platform. This course covers Kestra's architecture, the Java + Micronaut plugin system, how AI agents map to orchestration primitives, and exactly how to position for and ace their 4-stage interview process.",
  units: [kestraUnit1, kestraUnit2, kestraUnit3, kestraUnit4, kestraUnit5],
};
