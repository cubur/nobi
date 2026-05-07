import type { CompanyModule } from "@/data/types";
import { tightlyUnit1 } from "@/data/curriculum/tightly/unit1";
import { tightlyUnit2 } from "@/data/curriculum/tightly/unit2";
import { tightlyUnit3 } from "@/data/curriculum/tightly/unit3";
import { tightlyUnit4 } from "@/data/curriculum/tightly/unit4";
import { tightlyUnit5 } from "@/data/curriculum/tightly/unit5";
import { tightlyUnit6 } from "@/data/curriculum/tightly/unit6";

export const tightly: CompanyModule = {
  slug: "tightly",
  name: "Tightly",
  tagline: "AI Inventory Planning for Shopify Brands",
  industry: "Supply Chain AI",
  techStack: ["Shopify", "Smart Replenishment", "PO Automation", "Multi-location Planning"],
  why: "Tightly is the AI-native inventory planning platform built specifically for Shopify brands. It replaces spreadsheet-driven replenishment with a composite scoring engine, automated PO workflows, and backorder management — helping DTC brands protect cash flow and prevent stockouts.",
  units: [tightlyUnit1, tightlyUnit2, tightlyUnit3, tightlyUnit4, tightlyUnit5, tightlyUnit6],
};
