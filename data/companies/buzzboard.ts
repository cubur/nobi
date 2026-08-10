import type { CompanyModule } from "@/data/types";
import { buzzboardUnit1 } from "@/data/curriculum/buzzboard/unit1";
import { buzzboardUnit2 } from "@/data/curriculum/buzzboard/unit2";
import { buzzboardUnit3 } from "@/data/curriculum/buzzboard/unit3";
import { buzzboardUnit4 } from "@/data/curriculum/buzzboard/unit4";
import { buzzboardUnit5 } from "@/data/curriculum/buzzboard/unit5";

export const buzzboard: CompanyModule = {
  slug: "buzzboard",
  name: "BuzzBoard",
  tagline: "AI Agents for B2SMB Sales",
  industry: "B2SMB Sales Intelligence",
  techStack: ["LLM Agents", "RAG", "OpenAI", "Anthropic/Claude", "AWS Bedrock", "LangChain"],
  why: "BuzzBoard is hiring a PM to own AI agent products end-to-end — designing agent behaviors, building prototypes with live model integration, and shipping eval frameworks. This course gives you the B2SMB market context, agent architecture vocabulary, LLM fundamentals, eval methodology, and interview prep to walk in ready.",
  units: [buzzboardUnit1, buzzboardUnit2, buzzboardUnit3, buzzboardUnit4, buzzboardUnit5],
};
