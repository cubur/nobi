export type ExerciseMultipleChoice = {
  type: "multiple-choice";
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type ExerciseFillBlank = {
  type: "fill-blank";
  prompt: string;
  blank: string;
  hint?: string;
};

export type ExerciseScenario = {
  type: "scenario";
  prompt: string;
  sampleAnswer: string;
  keyPoints: string[];
};

export type Exercise = ExerciseMultipleChoice | ExerciseFillBlank | ExerciseScenario;

export type ContentSection = {
  heading?: string;
  body: string; // supports **bold**, `code`, \n\n for paragraphs
  goAnalogy?: {
    term: string;
    reading: string; // Japanese reading e.g. "のび"
    meaning: string;
  };
};

export type Lesson = {
  id: string;
  unitId: string;
  companySlug: string;
  title: string;
  tldr: string;
  skills: string[];
  xp: number;
  content: ContentSection[];
  exercises: Exercise[];
  resources: { title: string; url: string; description: string }[];
  referenceUrl?: string;
};

export type Unit = {
  id: string;
  companySlug: string;
  title: string;
  description: string;
  goTerm: string;
  goReading: string; // Japanese reading
  goMeaning: string;
  color: "neon" | "golden" | "ice" | "crimson" | "snow";
  lessons: Lesson[];
  quiz?: ExerciseMultipleChoice[]; // unit-level quiz shown after all lessons
  quizXp?: number; // XP awarded for completing the unit quiz (default 30)
};

export type CompanyModule = {
  slug: string;
  name: string;
  tagline: string;
  industry: string;
  techStack: string[];
  why: string; // why study this company
  units: Unit[];
  hidden?: boolean; // hides from homepage listing without deleting data
};

export type ProgressStore = {
  [companySlug: string]: {
    completedLessons: string[];
    xp: number;
    currentLesson: string;
  };
};
