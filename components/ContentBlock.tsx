"use client";

import type { ContentSection } from "@/data/types";
import { renderBody } from "@/lib/render";
import { useHighlights } from "@/lib/highlight-context";

export default function ContentBlock({ sections }: { sections: ContentSection[] }) {
  const highlights = useHighlights();

  return (
    <div className="space-y-6 mb-8">
      {sections.map((section, i) => (
        <div key={i}>
          {section.heading && (
            <h3 className="font-display font-semibold text-redpen text-lg mb-3">
              {section.heading}
            </h3>
          )}
          <div className="font-body text-sm">{renderBody(section.body, highlights)}</div>

          {section.goAnalogy && (
            <div className="go-callout mt-4">
              <div className="shrink-0 mt-0.5">
                <div className="w-8 h-8 rounded-full bg-paper-300 border border-paper-400 flex items-center justify-center">
                  <span className="text-bluepen text-xs font-mono font-bold">囲</span>
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display font-semibold text-bluepen text-sm">
                    {section.goAnalogy.term}
                  </span>
                  <span className="font-mono text-pencil-dim text-xs">
                    {section.goAnalogy.reading}
                  </span>
                  <span className="section-tag text-[10px]">Go analogy</span>
                </div>
                <p className="text-pencil-dim text-xs leading-relaxed">{section.goAnalogy.meaning}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
