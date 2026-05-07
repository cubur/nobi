import type { Unit } from "@/data/types";
import type { ProgressStore } from "@/data/types";

export function getTotalXP(companySlug: string, progress: ProgressStore): number {
  return progress[companySlug]?.xp ?? 0;
}

export function getUnitProgress(
  unit: Unit,
  companySlug: string,
  progress: ProgressStore
): { completed: number; total: number; percent: number } {
  const completed = progress[companySlug]?.completedLessons ?? [];
  const unitLessons = unit.lessons.map((l) => l.id);
  const completedInUnit = unitLessons.filter((id) => completed.includes(id)).length;
  const total = unitLessons.length;
  return {
    completed: completedInUnit,
    total,
    percent: total > 0 ? Math.round((completedInUnit / total) * 100) : 0,
  };
}

export function getLevel(xp: number): { level: number; title: string; nextXP: number } {
  const thresholds = [
    { xp: 0, title: "Stone" },
    { xp: 50, title: "Novice" },
    { xp: 150, title: "Player" },
    { xp: 300, title: "Tactician" },
    { xp: 500, title: "Strategist" },
    { xp: 800, title: "Dan" },
  ];
  let level = 0;
  for (let i = 0; i < thresholds.length; i++) {
    if (xp >= thresholds[i].xp) level = i;
  }
  const next = thresholds[level + 1];
  return {
    level: level + 1,
    title: thresholds[level].title,
    nextXP: next ? next.xp : thresholds[thresholds.length - 1].xp,
  };
}
