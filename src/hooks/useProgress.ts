import type { UserProgress } from "@/lib/types";
import { getDayKey } from "@/lib/utils";

const STORAGE_KEY = "nobi_progress";

export function defaultProgress(): UserProgress {
  return {
    completedLessons: [],
    lessonScores: {},
    skillScores: {},
    stones: 0,
    streak: 0,
    lastActiveDate: getDayKey(),
    reviewQueue: [],
  };
}

export function loadProgress(): UserProgress {
  if (typeof window === "undefined") return defaultProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const parsed = JSON.parse(raw) as Partial<UserProgress>;
    // Merge with defaults to handle missing fields from old versions
    return { ...defaultProgress(), ...parsed };
  } catch {
    return defaultProgress();
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // localStorage might be unavailable (private browsing, storage full, etc.)
  }
}

export function resetProgress(): UserProgress {
  const fresh = defaultProgress();
  saveProgress(fresh);
  return fresh;
}

export function useProgress() {
  return {
    loadProgress,
    saveProgress,
    resetProgress,
    defaultProgress,
  };
}
