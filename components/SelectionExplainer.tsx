"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { saveItem, getSavedItems } from "@/lib/notes";
import { HighlightContext, type Highlight } from "@/lib/highlight-context";

interface ExplainResource { title: string; url: string; description: string; }
interface ExplainResponse { explanation?: string; resources?: ExplainResource[]; error?: string; }
interface ToolbarPos { x: number; y: number; }

// ── Types ─────────────────────────────────────────────────────────────────────

type QuestionType = "explain" | "why";

interface PanelState {
  open: boolean;
  loading: boolean;
  selectedText: string;
  questionType: QuestionType;
  response: ExplainResponse | null;
}

type ToolbarMode = "buttons" | "thought-input" | "saved";

// ── Component ─────────────────────────────────────────────────────────────────

export default function SelectionExplainer({
  children,
  lessonTitle,
  unitTitle,
  unitId,
  lessonId,
  companySlug,
}: {
  children: React.ReactNode;
  lessonTitle: string;
  unitTitle: string;
  unitId: string;
  lessonId: string;
  companySlug: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const thoughtRef = useRef<HTMLTextAreaElement>(null);
  const [toolbar, setToolbar] = useState<ToolbarPos | null>(null);
  const [toolbarMode, setToolbarMode] = useState<ToolbarMode>("buttons");
  const [thoughtText, setThoughtText] = useState("");
  const [pendingText, setPendingText] = useState("");
  const [savedLabel, setSavedLabel] = useState("");
  const [highlights, setHighlights] = useState<{ text: string; kind: "note" | "thought" }[]>([]);
  const [panel, setPanel] = useState<PanelState>({
    open: false,
    loading: false,
    selectedText: "",
    questionType: "explain",
    response: null,
  });

  const handleMouseUp = useCallback(() => {
    // Skip toolbar on touch/mobile devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const selection = window.getSelection();
    const text = selection?.toString().trim() ?? "";

    if (!selection || text.length < 10 || !containerRef.current) {
      setToolbar(null);
      return;
    }

    const range = selection.getRangeAt(0);
    if (!containerRef.current.contains(range.commonAncestorContainer)) {
      setToolbar(null);
      return;
    }

    const rect = range.getBoundingClientRect();
    setPendingText(text);
    setToolbarMode("buttons");
    setThoughtText("");
    setToolbar({ x: rect.left + rect.width / 2, y: rect.top });
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    const target = e.target as Element;
    if (!target.closest("[data-explainer-toolbar]")) {
      setToolbar(null);
      setToolbarMode("buttons");
    }
  }, []);

  // Load existing highlights from localStorage on mount
  useEffect(() => {
    const notes = getSavedItems("note");
    const thoughts = getSavedItems("thought");
    const forThisLesson = [
      ...notes.filter((n) => n.lessonId === lessonId).map((n) => ({ text: n.text, kind: "note" as const })),
      ...thoughts.filter((t) => t.lessonId === lessonId).map((t) => ({ text: t.text, kind: "thought" as const })),
    ];
    setHighlights(forThisLesson);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId]);

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [handleMouseUp, handleMouseDown]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setToolbar(null);
        setPanel((p) => ({ ...p, open: false }));
        setToolbarMode("buttons");
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Focus textarea when switching to thought-input mode
  useEffect(() => {
    if (toolbarMode === "thought-input") {
      setTimeout(() => thoughtRef.current?.focus(), 50);
    }
  }, [toolbarMode]);

  const ask = useCallback(
    async (questionType: QuestionType) => {
      setToolbar(null);
      window.getSelection()?.removeAllRanges();

      setPanel({
        open: true,
        loading: true,
        selectedText: pendingText,
        questionType,
        response: null,
      });

      try {
        const res = await fetch("/api/explain", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ selectedText: pendingText, questionType, lessonTitle, unitTitle }),
        });
        const data: ExplainResponse = await res.json();
        setPanel((p) => ({ ...p, loading: false, response: data }));
      } catch {
        setPanel((p) => ({
          ...p,
          loading: false,
          response: {
            explanation: "Could not reach the explanation service. Check ANTHROPIC_API_KEY in Cloudflare Pages environment variables.",
            resources: [],
          },
        }));
      }
    },
    [pendingText, lessonTitle, unitTitle]
  );

  const handleSaveNote = useCallback(() => {
    saveItem({ text: pendingText, lessonTitle, unitTitle, unitId, lessonId, companySlug, kind: "note" });
    setHighlights((prev) => [...prev, { text: pendingText, kind: "note" }]);
    setSavedLabel("✓ Bookmarked");
    setToolbarMode("saved");
    setTimeout(() => {
      setToolbar(null);
      setToolbarMode("buttons");
    }, 1400);
  }, [pendingText, lessonTitle, unitTitle, unitId, lessonId, companySlug]);

  const handleSaveThought = useCallback(() => {
    if (!thoughtText.trim()) return;
    saveItem({ text: pendingText, lessonTitle, unitTitle, unitId, lessonId, companySlug, kind: "thought", thought: thoughtText.trim() });
    setHighlights((prev) => [...prev, { text: pendingText, kind: "thought" }]);
    setSavedLabel("✓ Saved to Thoughts");
    setToolbarMode("saved");
    setTimeout(() => {
      setToolbar(null);
      setToolbarMode("buttons");
    }, 1400);
  }, [pendingText, thoughtText, lessonTitle, unitTitle, companySlug]);



  const closePanel = () => setPanel((p) => ({ ...p, open: false }));

  return (
    <>
      <HighlightContext.Provider value={highlights}>
        <div ref={containerRef}>{children}</div>
      </HighlightContext.Provider>

      {/* Floating toolbar */}
      {toolbar && (
        <div
          data-explainer-toolbar
          style={{
            position: "fixed",
            top: toolbar.y - (toolbarMode === "thought-input" ? 120 : 52),
            left: toolbar.x,
            transform: "translateX(-50%)",
            zIndex: 60,
          }}
          className="bg-paper-100 border border-paper-300 rounded-xl p-2 shadow-xl shadow-black/20 animate-fade-in"
        >
          {toolbarMode === "buttons" && (
            <div className="flex items-center gap-0.5">
              <button
                onClick={() => ask("explain")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-bluepen hover:bg-bluepen-faint transition-colors whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Explain
              </button>
              <div className="w-px h-4 bg-paper-300 shrink-0" />
              <button
                onClick={() => ask("why")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-golden hover:bg-golden-faint transition-colors whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.347.346A3.001 3.001 0 0012 15a3.001 3.001 0 00-2.121.879l-.347-.346z" />
                </svg>
                Why?
              </button>
              <div className="w-px h-4 bg-paper-300 shrink-0" />
              <button
                onClick={handleSaveNote}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-pencil-dim hover:bg-paper-200 transition-colors whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Bookmark
              </button>
              <div className="w-px h-4 bg-paper-300 shrink-0" />
              <button
                onClick={() => setToolbarMode("thought-input")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-pencil-dim hover:bg-paper-200 transition-colors whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Thought
              </button>
            </div>
          )}

          {toolbarMode === "thought-input" && (
            <div className="w-64 space-y-2">
              <div className="text-[10px] font-mono text-pencil-faint">
                Add your thought about this passage:
              </div>
              <textarea
                ref={thoughtRef}
                value={thoughtText}
                onChange={(e) => setThoughtText(e.target.value)}
                placeholder="What does this remind you of?"
                className="w-full bg-white border border-paper-300 rounded-lg px-2.5 py-2 text-pencil text-xs
                           placeholder-pencil-ghost resize-none focus:outline-none focus:border-bluepen
                           focus:ring-1 focus:ring-bluepen"
                rows={3}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleSaveThought();
                }}
              />
              <div className="flex gap-2">
                <button
                  onClick={handleSaveThought}
                  className="flex-1 bg-bluepen text-white text-xs font-mono py-1.5 px-3 rounded-lg
                             hover:bg-bluepen-dim transition-colors disabled:opacity-40"
                  disabled={!thoughtText.trim()}
                >
                  Save thought ⌘↵
                </button>
                <button
                  onClick={() => setToolbarMode("buttons")}
                  className="text-pencil-faint text-xs px-2 hover:text-pencil transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {toolbarMode === "saved" && (
            <div className="px-3 py-2 text-xs font-mono text-inkgreen font-semibold">
              {savedLabel}
            </div>
          )}
        </div>
      )}

      {/* Slide-in explanation panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-[22rem] bg-paper-100 border-l border-paper-300 z-50 flex flex-col shadow-2xl shadow-black/15 transition-transform duration-300 ease-in-out ${
          panel.open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-paper-300 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-mono text-bluepen text-sm font-bold">Ask Nobi</span>
            {panel.questionType === "explain" ? (
              <span className="badge-ice text-[10px]">explain</span>
            ) : (
              <span className="badge-golden text-[10px]">why?</span>
            )}
          </div>
          <button
            onClick={closePanel}
            className="text-pencil-faint hover:text-pencil transition-colors p-1 rounded"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
          <blockquote className="border-l-2 border-bluepen/30 pl-3">
            <p className="text-pencil-dim text-xs leading-relaxed italic line-clamp-4">
              {panel.selectedText}
            </p>
          </blockquote>

          {panel.loading && (
            <div className="space-y-2.5 animate-pulse">
              {[1, 0.83, 0.67, 1, 0.75, 1, 0.58].map((w, i) => (
                <div key={i} className="h-2.5 bg-paper-300 rounded" style={{ width: `${w * 100}%` }} />
              ))}
            </div>
          )}

          {panel.response && !panel.loading && (
            <>
              {panel.response.error ? (
                <p className="text-redpen text-sm leading-relaxed">{panel.response.error}</p>
              ) : (
                <p className="text-pencil text-sm leading-relaxed whitespace-pre-wrap">
                  {panel.response.explanation}
                </p>
              )}

              {panel.response.resources && panel.response.resources.length > 0 && (
                <div>
                  <div className="font-mono text-pencil-ghost text-[10px] uppercase tracking-widest mb-2.5">
                    Further reading
                  </div>
                  <div className="space-y-2">
                    {panel.response.resources.map((r, i) => (
                      <a
                        key={i}
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block card hover:border-bluepen/40 transition-colors no-underline group"
                      >
                        <div className="font-display font-semibold text-pencil text-xs mb-0.5 group-hover:text-bluepen transition-colors">
                          {r.title} ↗
                        </div>
                        <p className="text-pencil-dim text-[11px] leading-relaxed">{r.description}</p>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2">
                <div className="font-mono text-pencil-ghost text-[10px] uppercase tracking-widest mb-2">
                  Ask differently
                </div>
                <div className="flex gap-2">
                  <button onClick={() => ask("explain")} className="btn-ghost text-xs py-1 px-2.5">Explain</button>
                  <button onClick={() => ask("why")} className="btn-ghost text-xs py-1 px-2.5">Why?</button>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="px-5 py-3 border-t border-paper-300 shrink-0">
          <p className="text-pencil-ghost text-[10px] font-mono">
            Select any text in the lesson to ask a question. Press Esc to close.
          </p>
        </div>
      </div>

      {panel.open && (
        <div className="fixed inset-0 bg-black/20 z-40 sm:hidden" onClick={closePanel} />
      )}
    </>
  );
}
