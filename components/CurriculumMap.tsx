"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getProgress } from "@/lib/progress";
import { getLevel, getTotalXP } from "@/lib/xp";
import type { CompanyModule } from "@/data/types";
import GoStone from "./GoStone";
import ProgressRing from "./ProgressRing";

const UNIT_COLORS = {
  neon: { border: "border-neon-faint", text: "text-neon", badge: "badge-neon" },
  golden: { border: "border-golden-faint", text: "text-golden", badge: "badge-golden" },
  ice: { border: "border-ice-faint", text: "text-ice", badge: "badge-ice" },
  crimson: { border: "border-crimson-faint", text: "text-crimson", badge: "badge-crimson" },
  snow: { border: "border-gray-300", text: "text-snow-dim", badge: "badge-snow" },
};

export default function CurriculumMap({ company }: { company: CompanyModule }) {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [xp, setXp] = useState(0);

  useEffect(() => {
    const progress = getProgress();
    const co = progress[company.slug];
    if (co) {
      setCompletedLessons(co.completedLessons);
      setXp(co.xp);
    }
  }, [company.slug]);

  const { level, title, nextXP } = getLevel(xp);
  const totalLessons = company.units.reduce((sum, u) => sum + u.lessons.length, 0);
  const completedCount = completedLessons.length;

  return (
    <div>
      {/* Progress header */}
      <div className="card mb-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <GoStone variant="neon" size={36} />
            <div>
              <div className="font-display font-bold text-snow text-base">
                Lv.{level} — {title}
              </div>
              <div className="font-mono text-golden text-xs">{xp} XP total</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-snow-dim text-xs">
              {completedCount} / {totalLessons} lessons
            </div>
            <div className="font-mono text-neon text-xs">
              {Math.round((completedCount / totalLessons) * 100)}% complete
            </div>
          </div>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${Math.round((completedCount / totalLessons) * 100)}%` }}
          />
        </div>
        {xp < nextXP && (
          <div className="mt-1 font-mono text-snow-dim text-xs text-right">
            {nextXP - xp} XP to next level
          </div>
        )}
      </div>

      {/* Units */}
      <div className="space-y-6">
        {company.units.map((unit) => {
          const colors = UNIT_COLORS[unit.color];
          const unitComplete = unit.lessons.filter((l) => completedLessons.includes(l.id)).length;
          const isComingSoon = unit.lessons.every((l) => l.exercises.length === 0 && l.content.length <= 1);

          return (
            <div key={unit.id} className={`card border ${colors.border}`}>
              <div className="flex items-start gap-4 mb-4">
                <ProgressRing unit={unit} companySlug={company.slug} size={44} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`font-mono text-xs ${colors.text} font-semibold`}>
                      {unit.goTerm}
                    </span>
                    <span className="font-mono text-snow-faint text-xs">{unit.goReading}</span>
                    {isComingSoon && (
                      <span className="badge-snow text-[10px] ml-1">coming soon</span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-snow text-base leading-tight">
                    {unit.title}
                  </h3>
                  <p className="text-snow-dim text-xs mt-1 leading-relaxed">
                    {unit.description}
                  </p>
                </div>
                <div className="font-mono text-snow-dim text-xs shrink-0">
                  {unitComplete}/{unit.lessons.length}
                </div>
              </div>

              {/* Lesson list */}
              <div className="space-y-1.5">
                {unit.lessons.map((lesson, idx) => {
                  const done = completedLessons.includes(lesson.id);
                  const isStub = lesson.exercises.length === 0 && lesson.content.length <= 1;
                  const href = `/${company.slug}/unit/${unit.id}/lesson/${lesson.id}`;

                  return (
                    <Link
                      key={lesson.id}
                      href={isStub ? "#" : href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-150 group ${
                        isStub
                          ? "opacity-40 cursor-not-allowed pointer-events-none"
                          : "hover:bg-void-300 cursor-pointer"
                      }`}
                      onClick={isStub ? (e) => e.preventDefault() : undefined}
                    >
                      {/* Stone indicator */}
                      <div className="shrink-0">
                        {done ? (
                          <GoStone variant="neon" size={16} />
                        ) : isStub ? (
                          <GoStone variant="black" size={16} />
                        ) : (
                          <GoStone variant="white" size={16} />
                        )}
                      </div>
                      <span className="font-mono text-snow-dim text-xs shrink-0">
                        {idx + 1}.
                      </span>
                      <span
                        className={`font-body text-sm flex-1 ${
                          done
                            ? "text-neon"
                            : isStub
                            ? "text-snow-dim"
                            : "text-snow group-hover:text-neon"
                        } transition-colors`}
                      >
                        {lesson.title}
                      </span>
                      <span className="font-mono text-golden text-xs shrink-0">
                        {lesson.xp} XP
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
