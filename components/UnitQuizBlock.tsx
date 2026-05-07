"use client";

import { useReducer } from "react";
import type { ExerciseMultipleChoice } from "@/data/types";
import { markUnitQuizComplete, isUnitQuizComplete } from "@/lib/progress";
import GoStone from "./GoStone";

type State = {
  currentIndex: number;
  selected: number | null;
  submitted: boolean;
  score: number;
  completed: boolean;
};

type Action =
  | { type: "SELECT"; index: number }
  | { type: "SUBMIT" }
  | { type: "NEXT" }
  | { type: "FINISH"; xp: number; companySlug: string; unitId: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SELECT":
      if (state.submitted) return state;
      return { ...state, selected: action.index };
    case "SUBMIT":
      return { ...state, submitted: true };
    case "NEXT":
      return { ...state, currentIndex: state.currentIndex + 1, selected: null, submitted: false };
    case "FINISH":
      markUnitQuizComplete(action.companySlug, action.unitId, action.xp);
      return { ...state, completed: true };
    default:
      return state;
  }
}

export default function UnitQuizBlock({
  questions,
  companySlug,
  unitId,
  unitTitle,
  xp = 30,
}: {
  questions: ExerciseMultipleChoice[];
  companySlug: string;
  unitId: string;
  unitTitle: string;
  xp?: number;
}) {
  const alreadyDone =
    typeof window !== "undefined" && isUnitQuizComplete(companySlug, unitId);

  const [state, dispatch] = useReducer(reducer, {
    currentIndex: 0,
    selected: null,
    submitted: false,
    score: 0,
    completed: alreadyDone,
  });

  if (!questions.length) return null;

  // ── Completed state ──────────────────────────────────────────────────────
  if (state.completed) {
    return (
      <div className="mt-10">
        <div className="divider" />
        <div className="card-golden animate-xp-flash">
          <div className="flex items-center gap-3 mb-3">
            <GoStone variant="neon" size={32} />
            <div>
              <div className="font-display font-bold text-golden text-lg">Unit quiz complete!</div>
              <div className="font-mono text-neon text-sm">+{xp} XP earned</div>
            </div>
          </div>
          <p className="text-snow-dim text-sm">
            You've completed the unit quiz for <span className="text-snow font-semibold">{unitTitle}</span>.
          </p>
        </div>
      </div>
    );
  }

  const question = questions[state.currentIndex];
  const isLast = state.currentIndex === questions.length - 1;
  const isCorrect = state.submitted ? state.selected === question.correct : null;

  return (
    <div className="mt-10">
      <div className="divider" />

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="section-tag text-golden border-golden-faint">Unit Quiz</span>
          <span className="font-mono text-snow-dim text-xs">
            {state.currentIndex + 1} / {questions.length}
          </span>
        </div>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i < state.currentIndex
                  ? "bg-golden"
                  : i === state.currentIndex
                  ? "bg-snow"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="card-golden animate-slide-up">
        <p className="font-body text-snow text-sm font-medium mb-4 leading-relaxed">
          {question.question}
        </p>

        <div className="space-y-2">
          {question.options.map((opt, i) => {
            let cls = "exercise-option";
            if (state.submitted) {
              if (i === question.correct) cls = "exercise-option-correct";
              else if (i === state.selected && !isCorrect) cls = "exercise-option-wrong";
              else cls = "exercise-option opacity-50 cursor-default";
            } else if (state.selected === i) {
              cls = "exercise-option-selected";
            }
            return (
              <button
                key={i}
                className={cls}
                onClick={() => !state.submitted && dispatch({ type: "SELECT", index: i })}
              >
                <span className="font-mono text-xs mr-2 opacity-60">
                  {String.fromCharCode(65 + i)}.
                </span>
                {opt}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {state.submitted && (
          <div
            className={`mt-4 p-3 rounded-lg text-sm border ${
              isCorrect
                ? "bg-neon-faint border-neon text-neon"
                : "bg-crimson-faint border-crimson text-crimson"
            }`}
          >
            <span className="font-semibold">{isCorrect ? "Correct. " : "Not quite. "}</span>
            {question.explanation}
          </div>
        )}

        {/* Actions */}
        <div className="mt-5">
          {!state.submitted ? (
            <button
              className={
                state.selected !== null
                  ? "btn-golden"
                  : "btn-secondary opacity-50 cursor-not-allowed"
              }
              onClick={() => state.selected !== null && dispatch({ type: "SUBMIT" })}
              disabled={state.selected === null}
            >
              Check answer
            </button>
          ) : (
            <button
              className="btn-golden"
              onClick={() => {
                if (isLast) {
                  dispatch({ type: "FINISH", xp, companySlug, unitId });
                } else {
                  dispatch({ type: "NEXT" });
                }
              }}
            >
              {isLast ? `Finish unit quiz +${xp} XP →` : "Next →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
