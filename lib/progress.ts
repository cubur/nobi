"use client";

import type { ProgressStore } from "@/data/types";

const STORAGE_KEY = "nobi_progress";

export function getProgress(): ProgressStore {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function markLessonComplete(
  companySlug: string,
  lessonId: string,
  xp: number
): void {
  const progress = getProgress();
  const company = progress[companySlug] ?? {
    completedLessons: [],
    xp: 0,
    currentLesson: lessonId,
  };

  if (!company.completedLessons.includes(lessonId)) {
    company.completedLessons = [...company.completedLessons, lessonId];
    company.xp = company.xp + xp;
  }
  company.currentLesson = lessonId;

  progress[companySlug] = company;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // storage full or unavailable
  }
}

export function resetProgress(companySlug: string): void {
  const progress = getProgress();
  delete progress[companySlug];
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {}
}

export function isLessonComplete(companySlug: string, lessonId: string): boolean {
  const progress = getProgress();
  return progress[companySlug]?.completedLessons?.includes(lessonId) ?? false;
}

export function markUnitQuizComplete(
  companySlug: string,
  unitId: string,
  xp: number
): void {
  const quizKey = `__quiz__${unitId}`;
  markLessonComplete(companySlug, quizKey, xp);
}

export function isUnitQuizComplete(companySlug: string, unitId: string): boolean {
  return isLessonComplete(companySlug, `__quiz__${unitId}`);
}
