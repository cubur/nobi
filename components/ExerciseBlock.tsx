"use client";

import { useReducer } from "react";
import type { Exercise } from "@/data/types";
import { markLessonComplete } from "@/lib/progress";
import GoStone from "./GoStone";

type State = {
  currentIndex: number;
  selected: number | null;
  inputValue: string;
  submitted: boolean;
  correct: boolean | null;
  completed: boolean;
  xpAwarded: boolean;
};

type Action =
  | { type: "SELECT"; index: number }
  | { type: "INPUT"; value: string }
  | { type: "SUBMIT" }
  | { type: "NEXT" }
  | { type: "AWARD_XP" };

function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i-1] === b[j-1]
        ? dp[i-1][j-1]
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
  return dp[m][n];
}

function gradeExercise(exercise: Exercise, state: State): boolean {
  if (exercise.type === "multiple-choice") {
    return state.selected === exercise.correct;
  }
  if (exercise.type === "fill-blank") {
    const input = state.inputValue.trim().toLowerCase();
    const answer = exercise.blank.toLowerCase();
    const maxTypos = answer.length <= 5 ? 1 : 2;
    return levenshtein(input, answer) <= maxTypos;
  }
  return true; // scenario always passes
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SELECT":
      if (state.submitted) return state;
      return { ...state, selected: action.index };
    case "INPUT":
      if (state.submitted) return state;
      return { ...state, inputValue: action.value };
    case "SUBMIT":
      return { ...state, submitted: true, correct: null }; // correct set by render
    case "NEXT":
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        selected: null,
        inputValue: "",
        submitted: false,
        correct: null,
      };
    case "AWARD_XP":
      return { ...state, completed: true, xpAwarded: true };
    default:
      return state;
  }
}

const initialState: State = {
  currentIndex: 0,
  selected: null,
  inputValue: "",
  submitted: false,
  correct: null,
  completed: false,
  xpAwarded: false,
};

export default function ExerciseBlock({
  exercises,
  lessonId,
  companySlug,
  xp,
  nextHref,
}: {
  exercises: Exercise[];
  lessonId: string;
  companySlug: string;
  xp: number;
  nextHref: string | null;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (!exercises.length) return null;

  if (state.completed) {
    return (
      <div className="card-neon animate-xp-flash mt-8">
        <div className="flex items-center gap-3 mb-4">
          <GoStone variant="neon" size={32} />
          <div>
            <div className="font-display font-bold text-neon text-lg">Lesson complete!</div>
            <div className="font-mono text-golden text-sm">+{xp} XP earned</div>
          </div>
        </div>
        <p className="text-snow-dim text-sm mb-4">
          You finished all {exercises.length} exercise{exercises.length !== 1 ? "s" : ""}.
          The stone is played. Keep extending.
        </p>
        {nextHref ? (
          <a href={nextHref} className="btn-primary">
            Next lesson →
          </a>
        ) : (
          <a href={`/${companySlug}`} className="btn-primary">
            Back to curriculum →
          </a>
        )}
      </div>
    );
  }

  const exercise = exercises[state.currentIndex];
  const isLast = state.currentIndex === exercises.length - 1;

  const handleSubmit = () => {
    const correct = gradeExercise(exercise, state);
    dispatch({ type: "SUBMIT" });
    // We compute correct inline; trigger XP after the last exercise
    if (state.submitted) return; // guard
    // Use a timeout to allow state to settle before transitioning
    setTimeout(() => {}, 0);
    // Attach correctness to state via a trick: just re-render
    // Actually, we compute it from state in render and pass it down
    void correct; // used in render
  };

  const isCorrect = state.submitted ? gradeExercise(exercise, state) : null;

  const canSubmit =
    !state.submitted &&
    (exercise.type === "multiple-choice"
      ? state.selected !== null
      : exercise.type === "fill-blank"
      ? state.inputValue.trim().length > 0
      : true);

  const handleNext = () => {
    if (isLast) {
      markLessonComplete(companySlug, lessonId, xp);
      dispatch({ type: "AWARD_XP" });
    } else {
      dispatch({ type: "NEXT" });
    }
  };

  return (
    <div className="mt-8">
      <div className="divider" />
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="section-tag">Practice</span>
          <span className="font-mono text-snow-dim text-xs">
            {state.currentIndex + 1} / {exercises.length}
          </span>
        </div>
        <div className="flex gap-1">
          {exercises.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i < state.currentIndex
                  ? "bg-neon"
                  : i === state.currentIndex
                  ? "bg-snow"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="card animate-slide-up">
        {exercise.type === "multiple-choice" && (
          <MultipleChoice
            exercise={exercise}
            state={state}
            isCorrect={isCorrect}
            dispatch={dispatch}
          />
        )}
        {exercise.type === "fill-blank" && (
          <FillBlank
            exercise={exercise}
            state={state}
            isCorrect={isCorrect}
            dispatch={dispatch}
          />
        )}
        {exercise.type === "scenario" && (
          <Scenario exercise={exercise} state={state} dispatch={dispatch} />
        )}

        {/* Explanation / feedback */}
        {state.submitted && exercise.type === "multiple-choice" && (
          <div
            className={`mt-4 p-3 rounded-lg text-sm border ${
              isCorrect
                ? "bg-neon-faint border-neon text-neon"
                : "bg-crimson-faint border-crimson text-crimson"
            }`}
          >
            <span className="font-semibold">{isCorrect ? "Correct. " : "Not quite. "}</span>
            {exercise.explanation}
          </div>
        )}
        {state.submitted && exercise.type === "fill-blank" && (
          <div
            className={`mt-4 p-3 rounded-lg text-sm border ${
              isCorrect
                ? "bg-neon-faint border-neon text-neon"
                : "bg-crimson-faint border-crimson text-crimson"
            }`}
          >
            {isCorrect ? (
              <span>Correct! The answer is <strong>{exercise.blank}</strong>.</span>
            ) : (
              <span>
                The answer is <strong className="text-neon">{exercise.blank}</strong>.
                {exercise.hint && <span className="text-snow-dim"> Hint: {exercise.hint}</span>}
              </span>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="mt-5 flex items-center gap-3">
          {!state.submitted ? (
            <button
              className={canSubmit ? "btn-primary" : "btn-secondary opacity-50 cursor-not-allowed"}
              onClick={canSubmit ? handleSubmit : undefined}
              disabled={!canSubmit}
            >
              Check answer
            </button>
          ) : (
            <button className="btn-primary" onClick={handleNext}>
              {isLast ? "Complete lesson →" : "Next →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function MultipleChoice({
  exercise,
  state,
  isCorrect,
  dispatch,
}: {
  exercise: Extract<Exercise, { type: "multiple-choice" }>;
  state: State;
  isCorrect: boolean | null;
  dispatch: React.Dispatch<Action>;
}) {
  return (
    <div>
      <p className="font-body text-snow text-sm font-medium mb-4 leading-relaxed">
        {exercise.question}
      </p>
      <div className="space-y-2">
        {exercise.options.map((opt, i) => {
          let cls = "exercise-option";
          if (state.submitted) {
            if (i === exercise.correct) cls = "exercise-option-correct";
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
    </div>
  );
}

function FillBlank({
  exercise,
  state,
  isCorrect,
  dispatch,
}: {
  exercise: Extract<Exercise, { type: "fill-blank" }>;
  state: State;
  isCorrect: boolean | null;
  dispatch: React.Dispatch<Action>;
}) {
  // Split prompt on ___ to render inline blank
  const parts = exercise.prompt.split("___");

  return (
    <div>
      <p className="font-body text-snow text-sm font-medium mb-4 leading-relaxed">
        {parts[0]}
        <span
          className={`inline-block border-b-2 px-1 min-w-[80px] mx-1 text-center transition-colors ${
            state.submitted
              ? isCorrect
                ? "border-neon text-neon"
                : "border-crimson text-crimson"
              : "border-snow-dim"
          }`}
        >
          {state.inputValue || <span className="opacity-30">___</span>}
        </span>
        {parts[1]}
      </p>
      <input
        type="text"
        className="input"
        placeholder="Type your answer…"
        value={state.inputValue}
        onChange={(e) => dispatch({ type: "INPUT", value: e.target.value })}
        onKeyDown={(e) => {
          if (e.key === "Enter" && state.inputValue.trim() && !state.submitted) {
            dispatch({ type: "SUBMIT" });
          }
        }}
        disabled={state.submitted}
        autoComplete="off"
      />
      {exercise.hint && !state.submitted && (
        <p className="text-snow-dim text-xs mt-2">Hint: {exercise.hint}</p>
      )}
    </div>
  );
}

function Scenario({
  exercise,
  state,
  dispatch,
}: {
  exercise: Extract<Exercise, { type: "scenario" }>;
  state: State;
  dispatch: React.Dispatch<Action>;
}) {
  return (
    <div>
      <div className="badge-ice mb-3">Interview scenario</div>
      <p className="font-body text-snow text-sm font-medium mb-4 leading-relaxed">
        {exercise.prompt}
      </p>

      {!state.submitted ? (
        <textarea
          className="textarea"
          placeholder="Write your answer here — think it through before checking the sample…"
          value={state.inputValue}
          onChange={(e) => dispatch({ type: "INPUT", value: e.target.value })}
          rows={5}
        />
      ) : (
        <div className="space-y-4 animate-fade-in">
          <div className="p-3 rounded-lg bg-neon-faint border border-neon">
            <div className="font-mono text-neon text-xs uppercase tracking-wider mb-2">
              Sample answer
            </div>
            <p className="text-snow text-sm leading-relaxed">{exercise.sampleAnswer}</p>
          </div>
          <div className="p-3 rounded-lg bg-void-300 border border-gray-300">
            <div className="font-mono text-snow-dim text-xs uppercase tracking-wider mb-2">
              Key points to hit
            </div>
            <ul className="space-y-1.5">
              {exercise.keyPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-neon mt-0.5 shrink-0">✓</span>
                  <span className="text-snow-dim">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
