"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import { getSavedItems, deleteItem, type SavedItem } from "@/lib/notes";

export default function ThoughtsPage() {
  const [items, setItems] = useState<SavedItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    setItems(getSavedItems("thought"));
  }, []);

  const handleDelete = (id: string) => {
    deleteItem(id, "thought");
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const goToLesson = (item: SavedItem) => {
    router.push(`/${item.companySlug}/unit/${item.unitId}/lesson/${item.lessonId}`);
  };

  return (
    <div className="min-h-screen">
      <NavBar breadcrumbs={[{ label: "Nobi", href: "/" }, { label: "Thoughts" }]} />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="font-display font-bold text-redpen text-2xl mb-2">My Thoughts</h1>
          <p className="text-pencil-dim text-sm">
            Your annotations on lesson passages. Click any entry to jump to the lesson.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="card text-center py-12">
            <div className="text-4xl mb-3">✏️</div>
            <p className="text-pencil-dim text-sm">No thoughts added yet.</p>
            <p className="text-pencil-faint text-xs mt-1">
              Select text in a lesson, click <strong>Thought</strong>, and write your reaction to save it here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="card group cursor-pointer hover:border-bluepen transition-all"
                onClick={() => goToLesson(item)}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="badge-ice text-[10px]">{item.unitTitle}</span>
                    <span className="font-mono text-pencil-faint text-[10px]">{item.lessonTitle}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-mono text-pencil-ghost text-[10px]">
                      {new Date(item.savedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </span>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}
                      className="opacity-0 group-hover:opacity-100 text-pencil-ghost hover:text-redpen transition-all p-0.5 rounded"
                      aria-label="Delete thought"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>

                <blockquote className="border-l-2 border-bluepen/30 pl-3 mb-3">
                  <p className="text-pencil-dim text-xs leading-relaxed italic line-clamp-3">{item.text}</p>
                </blockquote>

                {item.thought && (
                  <div className="sticky-note p-3 inline-block w-full" style={{ transform: "rotate(-0.5deg)" }}>
                    <p className="font-handwritten text-sm text-bluepen-dim leading-relaxed">{item.thought}</p>
                  </div>
                )}

                <div className="mt-2 text-[10px] font-mono text-bluepen opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to open lesson →
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8">
          <Link href="/" className="btn-ghost text-xs">← Back to modules</Link>
        </div>
      </main>
    </div>
  );
}
