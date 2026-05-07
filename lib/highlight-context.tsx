"use client";

import { createContext, useContext } from "react";

export type Highlight = { text: string; kind: "note" | "thought" };

export const HighlightContext = createContext<Highlight[]>([]);

export function useHighlights(): Highlight[] {
  return useContext(HighlightContext);
}
