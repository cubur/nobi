import { useState, useCallback } from "react";
import type { Lesson, Concept, Exercise } from "@/lib/types";

type LessonPhase = "preview" | "concept" | "exercise" | "complete";

interface LessonState {
  phase: LessonPhase;
  conceptIndex: number;
  exerciseIndex: number;
  answers: Record<string, string>;
  score: number;
  isCorrect: boolean | null;
  lastAnswer: string | null;
}

interface UseLessonReturn {
  phase: LessonPhase;
  currentConcept: Concept | null;
  currentExercise: Exercise | null;
  score: number;
  isCorrect: boolean | null;
  lastAnswer: string | null;
  startLesson: () => void;
  nextConcept: () => void;
  submitAnswer: (answer: string) => void;
  nextExercise: () => void;
  finishLesson: () => void;
}

function normalizeAnswer(answer: string | string[]): string {
  if (Array.isArray(answer)) return answer.map((a) => a.trim().toLowerCase()).sort().join("|");
  return answer.trim().toLowerCase();
}

function checkAnswer(exercise: Exercise, userAnswer: string): boolean {
  const correct = exercise.correctAnswer;
  if (Array.isArray(correct)) {
    const normalizedUser = userAnswer.trim().toLowerCase();
    return correct.some((c) => c.trim().toLowerCase() === normalizedUser);
  }
  return userAnswer.trim().toLowerCase() === correct.trim().toLowerCase();
}

export function useLesson(lesson: Lesson): UseLessonReturn {
  const [state, setState] = useState<LessonState>({
    phase: "preview",
    conceptIndex: 0,
    exerciseIndex: 0,
    answers: {},
    score: 0,
    isCorrect: null,
    lastAnswer: null,
  });

  const startLesson = useCallback(() => {
    setState((prev) => ({
      ...prev,
      phase: lesson.concepts.length > 0 ? "concept" : "exercise",
      conceptIndex: 0,
      exerciseIndex: 0,
      answers: {},
      score: 0,
      isCorrect: null,
      lastAnswer: null,
    }));
  }, [lesson.concepts.length]);

  const nextConcept = useCallback(() => {
    setState((prev) => {
      const nextIndex = prev.conceptIndex + 1;
      if (nextIndex >= lesson.concepts.length) {
        // Move to exercises if any, otherwise complete
        return {
          ...prev,
          phase: lesson.exercises.length > 0 ? "exercise" : "complete",
          exerciseIndex: 0,
          isCorrect: null,
          lastAnswer: null,
        };
      }
      return {
        ...prev,
        conceptIndex: nextIndex,
        isCorrect: null,
        lastAnswer: null,
      };
    });
  }, [lesson.concepts.length, lesson.exercises.length]);

  const submitAnswer = useCallback(
    (answer: string) => {
      setState((prev) => {
        const exercise = lesson.exercises[prev.exerciseIndex];
        if (!exercise) return prev;

        const correct = checkAnswer(exercise, answer);
        const updatedAnswers = { ...prev.answers, [exercise.id]: answer };

        // Score: count correct answers so far as percentage
        const totalAnswered = Object.keys(updatedAnswers).length;
        const correctCount =
          Object.entries(updatedAnswers).filter(([id, ans]) => {
            const ex = lesson.exercises.find((e) => e.id === id);
            return ex ? checkAnswer(ex, ans) : false;
          }).length;

        const newScore =
          lesson.exercises.length > 0
            ? Math.round((correctCount / lesson.exercises.length) * 100)
            : 100;

        return {
          ...prev,
          answers: updatedAnswers,
          isCorrect: correct,
          lastAnswer: answer,
          score: newScore,
        };
      });
    },
    [lesson.exercises]
  );

  const nextExercise = useCallback(() => {
    setState((prev) => {
      const nextIndex = prev.exerciseIndex + 1;
      if (nextIndex >= lesson.exercises.length) {
        return {
          ...prev,
          phase: "complete",
          isCorrect: null,
          lastAnswer: null,
        };
      }
      return {
        ...prev,
        exerciseIndex: nextIndex,
        isCorrect: null,
        lastAnswer: null,
      };
    });
  }, [lesson.exercises.length]);

  const finishLesson = useCallback(() => {
    setState((prev) => ({ ...prev, phase: "complete" }));
  }, []);

  const currentConcept = lesson.concepts[state.conceptIndex] ?? null;
  const currentExercise = lesson.exercises[state.exerciseIndex] ?? null;

  return {
    phase: state.phase,
    currentConcept,
    currentExercise,
    score: state.score,
    isCorrect: state.isCorrect,
    lastAnswer: state.lastAnswer,
    startLesson,
    nextConcept,
    submitAnswer,
    nextExercise,
    finishLesson,
  };
}
