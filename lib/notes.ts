export type SavedItem = {
  id: string;
  text: string;
  lessonTitle: string;
  unitTitle: string;
  unitId: string;
  lessonId: string;
  companySlug: string;
  savedAt: string; // ISO date string
  kind: "note" | "thought";
  thought?: string; // only for kind="thought"
};

const KEY_NOTES = "nobi_notes";
const KEY_THOUGHTS = "nobi_thoughts";

function storageKey(kind: "note" | "thought"): string {
  return kind === "note" ? KEY_NOTES : KEY_THOUGHTS;
}

export function getSavedItems(kind: "note" | "thought"): SavedItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(storageKey(kind));
    return raw ? (JSON.parse(raw) as SavedItem[]) : [];
  } catch {
    return [];
  }
}

export function saveItem(item: Omit<SavedItem, "id" | "savedAt">): SavedItem {
  const full: SavedItem = {
    ...item,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    savedAt: new Date().toISOString(),
  };
  const existing = getSavedItems(item.kind);
  localStorage.setItem(storageKey(item.kind), JSON.stringify([full, ...existing]));
  return full;
}

export function deleteItem(id: string, kind: "note" | "thought"): void {
  const items = getSavedItems(kind).filter((i) => i.id !== id);
  localStorage.setItem(storageKey(kind), JSON.stringify(items));
}
