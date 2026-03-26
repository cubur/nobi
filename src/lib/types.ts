export type SkillCategory =
  | "ai-fundamentals"
  | "product-strategy"
  | "collaboration"
  | "ai-design"
  | "boostdraft"
  | "go-basics";

export type ExerciseType =
  | "multiple-choice"
  | "fill-blank"
  | "matching"
  | "scenario"
  | "simulator";

export type ConceptType =
  | "paragraph"
  | "callout"
  | "list"
  | "comparison"
  | "quote";

export type ResourceType = "article" | "video" | "tool" | "paper";

export type GoPhase = "fuseki" | "chuban" | "yose";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  delta: number; // how much this lesson improves this skill (0-10)
}

export interface KeyTerm {
  term: string;
  definition: string;
}

export interface Concept {
  type: ConceptType;
  content: string;
  items?: string[]; // for list type
  keyTerms?: KeyTerm[];
  label?: string; // for callout/comparison
  side?: { left: string; leftItems: string[]; right: string; rightItems: string[] }; // for comparison
  author?: string; // for quote
}

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  context?: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  skillId: string;
  pairs?: { left: string; right: string }[]; // for matching
  blanks?: string[]; // for fill-blank (the answers for blanks in order)
  promptHint?: string; // for simulator
}

export interface GoTip {
  analogy: string;
  stoneCount?: number;
}

export interface BoostDraftExample {
  feature: string;
  description: string;
  pmTakeaway: string;
}

export interface Resource {
  title: string;
  url: string;
  type: ResourceType;
  estimatedMinutes: number;
}

export interface Lesson {
  id: string;
  unitId: string;
  order: number;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  skills: Skill[];
  concepts: Concept[];
  exercises: Exercise[];
  goTip: GoTip;
  boostdraftExample?: BoostDraftExample;
  resources: Resource[];
  reviewOf?: string[];
}

export interface Unit {
  id: string;
  phase: GoPhase;
  order: number;
  title: string;
  subtitle: string;
  description: string;
  goAnalogy: string;
  lessons: Lesson[];
}

export interface UserProgress {
  completedLessons: string[];
  lessonScores: Record<string, number>;
  skillScores: Record<string, number>;
  stones: number;
  streak: number;
  lastActiveDate: string;
  reviewQueue: string[];
}

export const SKILL_LABELS: Record<SkillCategory, string> = {
  "ai-fundamentals": "AI Foundations",
  "product-strategy": "Product Strategy",
  collaboration: "Team Collaboration",
  "ai-design": "AI Design",
  boostdraft: "BoostDraft Domain",
  "go-basics": "Go Basics",
};

export const SKILL_DESCRIPTIONS: Record<SkillCategory, string> = {
  "ai-fundamentals": "Understanding AI types, terminology, and tradeoffs",
  "product-strategy": "AI-era PRDs, prioritization, and roadmapping",
  collaboration: "Working with ML engineers and evaluating models",
  "ai-design": "Trust, failure modes, and augmentation principles",
  boostdraft: "Legal tech and BoostDraft's specific product approach",
  "go-basics": "Go board game concepts and strategic thinking",
};

export const PHASE_LABELS: Record<GoPhase, string> = {
  fuseki: "Fuseki — Opening",
  chuban: "Chuban — Middle Game",
  yose: "Yose — Endgame",
};

export const PHASE_DESCRIPTIONS: Record<GoPhase, string> = {
  fuseki:
    "In Go, the fuseki (opening) establishes the framework for the whole game. You place your first stones to claim broad territory. We do the same: lay the foundation for AI thinking.",
  chuban:
    "The middle game is where real strategy emerges. Concepts connect and compound. Battles begin. Your AI-native PM skills start to shape real product decisions.",
  yose:
    "The endgame is about precision and closing out. Every move counts. You refine your knowledge, practice scenarios, and prepare to secure the interview.",
};
