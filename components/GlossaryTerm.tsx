"use client";

import { useState, useCallback, useEffect, useRef } from "react";

export default function GlossaryTerm({
  term,
  definition,
}: {
  term: string;
  definition: string;
}) {
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const triggerRef = useRef<HTMLSpanElement>(null);

  const calcStyle = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const tooltipW = 240;
    const spaceAbove = rect.top;
    const showBelow = spaceAbove < 130;

    // Centre on the trigger, clamped to viewport edges
    const centreX = rect.left + rect.width / 2;
    const left = Math.max(8, Math.min(centreX - tooltipW / 2, window.innerWidth - tooltipW - 8));

    setStyle(
      showBelow
        ? { position: "fixed", top: rect.bottom + 8, left, width: tooltipW, zIndex: 9999 }
        : { position: "fixed", bottom: window.innerHeight - rect.top + 8, left, width: tooltipW, zIndex: 9999 }
    );
  }, []);

  // Desktop: open on hover
  const onMouseEnter = useCallback(() => { calcStyle(); setOpen(true); }, [calcStyle]);
  const onMouseLeave = useCallback(() => setOpen(false), []);

  // Mobile: toggle on tap
  const onTap = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (open) { setOpen(false); return; }
    calcStyle();
    setOpen(true);
  }, [open, calcStyle]);

  // Close on outside click or scroll
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener("click", close);
    window.addEventListener("scroll", close, { passive: true });
    return () => {
      document.removeEventListener("click", close);
      window.removeEventListener("scroll", close);
    };
  }, [open]);

  const arrowUp = typeof style.bottom !== "undefined";

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onTap}
        className="cursor-help border-b border-dotted border-amber-500/70 hover:border-amber-500 transition-colors"
      >
        {term}
      </span>

      {open && (
        <span
          style={style}
          className="rounded-xl px-3 py-2.5 shadow-xl pointer-events-none whitespace-normal text-left animate-fade-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* inner bg via inline style to avoid Tailwind purge issue in lib/ */}
          <span
            className="block rounded-xl px-3 py-2.5"
            style={{ background: "#1a1610" }}
          >
            <span className="block font-semibold text-[11px] mb-1 leading-tight" style={{ color: "#fbbf24" }}>
              {term}
            </span>
            <span className="block text-[11px] leading-relaxed" style={{ color: "#c8c4b8" }}>
              {definition}
            </span>
          </span>
          {/* Arrow */}
          <span
            className="absolute left-1/2 -translate-x-1/2 w-0 h-0"
            style={
              arrowUp
                ? { top: -5, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderBottom: "5px solid #1a1610" }
                : { bottom: -5, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "5px solid #1a1610" }
            }
          />
        </span>
      )}
    </>
  );
}
