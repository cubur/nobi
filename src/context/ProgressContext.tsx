"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import type { UserProgress, SkillCategory } from "@/lib/types";
import { getDayKey } from "@/lib/utils";
import { loadProgress, saveProgress, defaultProgress } from "@/hooks/useProgress";

interface ProgressContextValue {
  progress: UserProgress;
  completeLesson: (lessonId: string, score: number) => void;
  updateSkills: (skills: string[], deltas: number[]) => void;
  addToReviewQueue: (lessonId: string) => void;
  getSkillScore: (category: SkillCategory) => number;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);

  // Hydrate from localStorage on mount (client only)
  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  // Sync to localStorage whenever progress changes
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const completeLesson = useCallback((lessonId: string, score: number) => {
    setProgress((prev) => {
      const today = getDayKey();
      const alreadyCompleted = prev.completedLessons.includes(lessonId);

      // Update streak
      let { streak } = prev;
      if (prev.lastActiveDate !== today) {
        const yesterday = getDayKey(
          new Date(Date.now() - 24 * 60 * 60 * 1000)
        );
        streak = prev.lastActiveDate === yesterday ? streak + 1 : 1;
      }

      // Add stones only on first completion
      const stonesEarned = alreadyCompleted ? 0 : Math.round(score / 10);

      return {
        ...prev,
        completedLessons: alreadyCompleted
          ? prev.completedLessons
          : [...prev.completedLessons, lessonId],
        lessonScores: {
          ...prev.lessonScores,
          [lessonId]: Math.max(prev.lessonScores[lessonId] ?? 0, score),
        },
        stones: prev.stones + stonesEarned,
        streak,
        lastActiveDate: today,
      };
    });
  }, []);

  const updateSkills = useCallback(
    (skills: string[], deltas: number[]) => {
      setProgress((prev) => {
        const updated = { ...prev.skillScores };
        skills.forEach((skill, i) => {
          const delta = deltas[i] ?? 0;
          updated[skill] = Math.min(100, (updated[skill] ?? 0) + delta);
        });
        return { ...prev, skillScores: updated };
      });
    },
    []
  );

  const addToReviewQueue = useCallback((lessonId: string) => {
    setProgress((prev) => {
      if (prev.reviewQueue.includes(lessonId)) return prev;
      return { ...prev, reviewQueue: [...prev.reviewQueue, lessonId] };
    });
  }, []);

  const getSkillScore = useCallback(
    (category: SkillCategory): number => {
      return progress.skillScores[category] ?? 0;
    },
    [progress.skillScores]
  );

  return (
    <ProgressContext.Provider
      value={{
        progress,
        completeLesson,
        updateSkills,
        addToReviewQueue,
        getSkillScore,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgressContext(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error("useProgressContext must be used within a ProgressProvider");
  }
  return ctx;
}
