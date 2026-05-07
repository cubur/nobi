"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import type { CompanyModule } from "@/data/types";

export default function CurriculumPopover({
  company,
  currentLessonId,
  currentUnitId,
  trigger,
}: {
  company: CompanyModule;
  currentLessonId?: string;
  currentUnitId?: string;
  trigger: React.ReactNode;
}) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  const show = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPos({ top: rect.bottom + 6, left: rect.left });
    }
    setOpen(true);
  }, []);

  const hide = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }, []);

  const cancelHide = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  // Close on scroll / resize
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("scroll", close);
      window.removeEventListener("resize", close);
    };
  }, [open]);

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        className="inline-flex items-center"
      >
        {trigger}
      </div>

      {open && (
        <div
          ref={popoverRef}
          onMouseEnter={cancelHide}
          onMouseLeave={hide}
          style={{
            position: "fixed",
            top: pos.top,
            left: pos.left,
            zIndex: 9999,
          }}
          className="w-72 max-h-[70vh] overflow-y-auto
                     bg-paper-100 border border-paper-300 rounded-xl
                     shadow-lg shadow-black/15 animate-fade-in py-2"
        >
          <div className="px-3 py-1.5 mb-1 border-b border-paper-200">
            <span className="font-display font-bold text-redpen text-xs uppercase tracking-wider">
              {company.name} — Curriculum
            </span>
          </div>

          {company.units.map((unit, ui) => (
            <div key={unit.id} className="px-2 py-1">
              <Link
                href={`/${company.slug}/unit/${unit.id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-display font-semibold no-underline transition-colors
                  ${currentUnitId === unit.id
                    ? "text-redpen bg-redpen-faint"
                    : "text-pencil-dim hover:text-redpen hover:bg-paper-200"
                  }`}
              >
                <span className="font-mono text-pencil-ghost text-[10px] w-4 shrink-0">
                  {ui + 1}.
                </span>
                {unit.title}
              </Link>

              <div className="ml-4 mt-0.5 space-y-0.5">
                {unit.lessons.map((lesson, li) => {
                  const isCurrent = lesson.id === currentLessonId;
                  return (
                    <Link
                      key={lesson.id}
                      href={`/${company.slug}/unit/${unit.id}/lesson/${lesson.id}`}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-2 px-2 py-1 rounded-md text-[11px] no-underline transition-colors
                        ${isCurrent
                          ? "text-bluepen font-semibold bg-bluepen-faint"
                          : "text-pencil-dim hover:text-bluepen hover:bg-paper-200"
                        }`}
                    >
                      <span className="font-mono text-pencil-ghost text-[10px] shrink-0">
                        {li + 1}
                      </span>
                      <span className="truncate">{lesson.title}</span>
                      {isCurrent && (
                        <span className="ml-auto shrink-0 w-1.5 h-1.5 rounded-full bg-bluepen" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
