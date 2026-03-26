import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { UserProgress, Lesson } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calcXPForLesson(score: number, estimatedMinutes: number): number {
  // Base XP = lesson minutes * 2, multiplied by score accuracy
  const base = estimatedMinutes * 2;
  const accuracy = score / 100;
  return Math.round(base * (0.5 + 0.5 * accuracy));
}

export function isLessonLocked(
  lesson: Lesson,
  allLessons: Lesson[],
  progress: UserProgress
): boolean {
  const lessonIndex = allLessons.findIndex((l) => l.id === lesson.id);
  if (lessonIndex === 0) return false;
  // A lesson is locked if the previous lesson in the overall list isn't completed
  const prev = allLessons[lessonIndex - 1];
  return !progress.completedLessons.includes(prev.id);
}

export function getLessonStatus(
  lessonId: string,
  progress: UserProgress
): "completed" | "available" | "locked" {
  if (progress.completedLessons.includes(lessonId)) return "completed";
  return "available"; // simplified — lock logic handled per map
}

export function formatMinutes(mins: number): string {
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

export function getDayKey(date: Date = new Date()): string {
  return date.toISOString().split("T")[0];
}

export function shouldShowReview(
  lessonId: string,
  lastSeen: Record<string, string>
): boolean {
  const seen = lastSeen[lessonId];
  if (!seen) return false;
  const daysSince =
    (Date.now() - new Date(seen).getTime()) / (1000 * 60 * 60 * 24);
  return daysSince >= 7;
}

export function getSkillLevel(score: number): string {
  if (score >= 80) return "Sente"; // initiative in Go
  if (score >= 60) return "Joseki"; // established pattern
  if (score >= 40) return "Nobi"; // extending
  if (score >= 20) return "Oki"; // placing
  return "Beginner";
}
