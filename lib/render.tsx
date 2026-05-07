import type { ReactNode } from "react";
import type { Highlight } from "./highlight-context";
import { GLOSSARY_SORTED } from "./glossary";
import GlossaryTerm from "../components/GlossaryTerm";

/**
 * Block-level markdown renderer.
 * Supports: headings (#/##/###), **bold**, `code`, _italic_,
 * bullet lists, numbered lists, markdown tables,
 * bookmark highlights, and glossary term tooltips.
 */
export function renderBody(text: string, highlights: Highlight[] = []): ReactNode {
  const blocks = text.split(/\n\n+/).map((b) => b.trim()).filter(Boolean);
  return <>{blocks.map((block, i) => renderBlock(block, i, highlights))}</>;
}

// ── Clean markdown for highlight matching ─────────────────────────────────────

function stripMarkdown(s: string): string {
  return s
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/_(.+?)_/g, "$1")
    .replace(/^#{1,3}\s+/gm, "")
    .replace(/^[-*]\s/gm, "")
    .replace(/^\d+\.\s/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}

function matchingHighlight(block: string, highlights: Highlight[]): Highlight | null {
  if (!highlights.length) return null;
  const clean = stripMarkdown(block).toLowerCase();
  for (const h of highlights) {
    const key = h.text.replace(/\s+/g, " ").trim().toLowerCase();
    const prefix = key.slice(0, Math.min(40, key.length));
    if (prefix.length > 8 && clean.includes(prefix)) return h;
    if (clean.length > 8 && key.includes(clean.slice(0, 30))) return h;
  }
  return null;
}

// ── Block-level renderer ──────────────────────────────────────────────────────

function renderBlock(block: string, key: number, highlights: Highlight[]): ReactNode {
  const lines = block.split("\n");
  const hlMatch = matchingHighlight(block, highlights);
  const highlightCls = hlMatch
    ? hlMatch.kind === "note"
      ? "bg-[#fef08a]/60 rounded px-0.5 -mx-0.5 box-decoration-clone"
      : "bg-[#bbf7d0]/60 rounded px-0.5 -mx-0.5 box-decoration-clone"
    : "";

  // ── Heading
  const headingMatch = lines[0].match(/^(#{1,3})\s+(.+)/);
  if (headingMatch) {
    const level = headingMatch[1].length;
    const content = parseInline(headingMatch[2], highlights);
    if (level === 1)
      return <h2 key={key} className={`font-display font-bold text-redpen text-xl mt-6 mb-2 ${highlightCls}`}>{content}</h2>;
    if (level === 2)
      return <h3 key={key} className={`font-display font-semibold text-redpen text-base mt-5 mb-1.5 ${highlightCls}`}>{content}</h3>;
    return <h4 key={key} className={`font-display font-semibold text-redpen text-sm mt-4 mb-1 ${highlightCls}`}>{content}</h4>;
  }

  // ── Table
  const isSepLine = (l: string) => /^\|[\s|:=-]+\|$/.test(l.trim());
  if (lines.length > 1 && lines.every((l) => l.trim().startsWith("|"))) {
    const nonSep = lines.filter((l) => !isSepLine(l));
    if (nonSep.length >= 1) {
      const [headerLine, ...bodyLines] = nonSep;
      const headers = parseCells(headerLine);
      const rows = bodyLines.map(parseCells);
      return (
        <div key={key} className={`overflow-x-auto my-4 rounded-lg border border-paper-300 ${highlightCls}`}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-paper-300 bg-paper-200">
                {headers.map((h, hi) => (
                  <th key={hi} className="text-left px-3 py-2 font-display font-semibold text-redpen text-xs uppercase tracking-wide whitespace-nowrap">
                    {parseInline(h, highlights)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={`border-b border-paper-200 last:border-0 ${ri % 2 === 0 ? "bg-white" : "bg-paper-100"}`}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 text-pencil-dim text-xs leading-relaxed">
                      {parseInline(cell, highlights)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }

  // ── Unordered list
  if (lines.length > 0 && lines.every((l) => /^[-*]\s/.test(l.trim()))) {
    return (
      <ul key={key} className={`space-y-1.5 my-3 ml-1 ${highlightCls}`}>
        {lines.map((l, li) => (
          <li key={li} className="flex items-start gap-2 text-pencil-dim text-sm leading-relaxed">
            <span className="shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full bg-redpen opacity-50" />
            <span>{parseInline(l.trim().replace(/^[-*]\s/, ""), highlights)}</span>
          </li>
        ))}
      </ul>
    );
  }

  // ── Ordered list
  if (lines.length > 0 && lines.every((l) => /^\d+\.\s/.test(l.trim()))) {
    return (
      <ol key={key} className={`space-y-1.5 my-3 ml-1 ${highlightCls}`}>
        {lines.map((l, li) => (
          <li key={li} className="flex items-start gap-2.5 text-pencil-dim text-sm leading-relaxed">
            <span className="shrink-0 font-mono text-redpen text-xs font-semibold mt-0.5 w-4">{li + 1}.</span>
            <span>{parseInline(l.trim().replace(/^\d+\.\s/, ""), highlights)}</span>
          </li>
        ))}
      </ol>
    );
  }

  // ── Paragraph
  return (
    <p key={key} className={`text-pencil-dim text-sm leading-relaxed mb-3 last:mb-0 ${highlightCls}`}>
      {lines.flatMap((line, li) =>
        li === 0
          ? [parseInline(line, highlights)]
          : [<br key={`br-${key}-${li}`} />, parseInline(line, highlights)]
      )}
    </p>
  );
}

// ── Table cell parser ─────────────────────────────────────────────────────────

function parseCells(line: string): string[] {
  return line
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((c) => c.trim());
}

// ── Inline renderer ───────────────────────────────────────────────────────────

function parseInline(text: string, highlights: Highlight[] = []): ReactNode {
  const nodes: ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*|`([^`]+)`|_(.+?)_)/g;
  let last = 0;
  let m;

  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) {
      nodes.push(applyTextTransforms(text.slice(last, m.index), highlights, `${last}`));
    }
    if (m[0].startsWith("**")) {
      nodes.push(
        <strong key={m.index} className="font-semibold text-pencil">
          {applyTextTransforms(m[2], highlights, `b${m.index}`)}
        </strong>
      );
    } else if (m[0].startsWith("`")) {
      nodes.push(<code key={m.index}>{m[3]}</code>);
    } else {
      nodes.push(
        <em key={m.index} className="italic">
          {applyTextTransforms(m[4], highlights, `i${m.index}`)}
        </em>
      );
    }
    last = m.index + m[0].length;
  }

  if (last < text.length) {
    nodes.push(applyTextTransforms(text.slice(last), highlights, `${last}-end`));
  }

  return nodes.length === 1 ? nodes[0] : <>{nodes}</>;
}

// ── Combined bookmark + glossary transforms ───────────────────────────────────

/**
 * Applies bookmark highlights first (user-specific), then glossary terms
 * to the remaining plain text.
 */
function applyTextTransforms(text: string, highlights: Highlight[], keyPrefix: string): ReactNode {
  if (!text) return null;

  // 1. Bookmark highlights take priority
  for (const h of highlights) {
    const needle = h.text.replace(/\s+/g, " ").trim();
    if (needle.length < 5) continue;

    let idx = text.indexOf(needle);
    let matchLen = needle.length;
    if (idx < 0) {
      const prefix = needle.slice(0, Math.min(40, needle.length));
      idx = text.indexOf(prefix);
      matchLen = prefix.length;
    }

    if (idx >= 0) {
      const before = text.slice(0, idx);
      const matched = text.slice(idx, idx + matchLen);
      const after = text.slice(idx + matchLen);
      const cls = h.kind === "note" ? "highlight-note" : "highlight-thought";
      return (
        <span key={keyPrefix}>
          {before && applyGlossaryTerms(before, `${keyPrefix}-pre`)}
          <mark className={cls}>{matched}</mark>
          {after && applyTextTransforms(after, highlights, `${keyPrefix}-r`)}
        </span>
      );
    }
  }

  // 2. No bookmark match — apply glossary terms
  return applyGlossaryTerms(text, keyPrefix);
}

// ── Glossary term detection and wrapping ──────────────────────────────────────

// Escape special regex characters in a term string
function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Build a single regex that matches ALL glossary terms (longest first)
let _glossaryRegex: RegExp | null = null;
function getGlossaryRegex(): RegExp {
  if (_glossaryRegex) return _glossaryRegex;
  const allTerms: string[] = [];
  for (const entry of GLOSSARY_SORTED) {
    allTerms.push(escapeRe(entry.term));
    for (const alias of entry.aliases ?? []) {
      allTerms.push(escapeRe(alias));
    }
  }
  // Case-insensitive, word-boundary aware
  _glossaryRegex = new RegExp(`(?<![\\w/])(?:${allTerms.join("|")})(?![\\w])`, "gi");
  return _glossaryRegex;
}

import { GLOSSARY_MAP } from "./glossary";

function applyGlossaryTerms(text: string, keyPrefix: string): ReactNode {
  if (!text) return null;
  const regex = getGlossaryRegex();
  // Reset lastIndex since the regex is reused
  regex.lastIndex = 0;

  const nodes: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;

  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) {
      nodes.push(text.slice(last, m.index));
    }
    const matched = m[0];
    const entry = GLOSSARY_MAP.get(matched.toLowerCase());
    if (entry) {
      nodes.push(
        <GlossaryTerm
          key={`${keyPrefix}-g${m.index}`}
          term={matched}
          definition={entry.definition}
        />
      );
    } else {
      nodes.push(matched);
    }
    last = m.index + matched.length;
  }

  if (last < text.length) {
    nodes.push(text.slice(last));
  }

  if (nodes.length === 0) return text;
  if (nodes.length === 1 && typeof nodes[0] === "string") return nodes[0];
  return <span key={keyPrefix}>{nodes}</span>;
}
