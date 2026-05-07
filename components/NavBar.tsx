"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getProgress } from "@/lib/progress";
import { getLevel, getTotalXP } from "@/lib/xp";
import type { CompanyModule } from "@/data/types";
import CurriculumPopover from "./CurriculumPopover";

export default function NavBar({
  companySlug,
  breadcrumbs,
  company,
  currentUnitId,
  currentLessonId,
}: {
  companySlug?: string;
  breadcrumbs?: { label: string; href?: string }[];
  company?: CompanyModule;
  currentUnitId?: string;
  currentLessonId?: string;
}) {
  const [xp, setXp] = useState(0);
  const [levelTitle, setLevelTitle] = useState("Stone");

  useEffect(() => {
    if (!companySlug) return;
    const progress = getProgress();
    const totalXp = getTotalXP(companySlug, progress);
    const { title } = getLevel(totalXp);
    setXp(totalXp);
    setLevelTitle(title);
  }, [companySlug]);

  return (
    <nav className="sticky top-0 z-50 border-b border-paper-300 bg-paper-100/90 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display font-bold text-redpen tracking-tight text-sm no-underline shrink-0"
        >
          NOBI
        </Link>
        <span className="text-paper-400 text-sm">·</span>

        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex items-center gap-1 flex-1 min-w-0 overflow-hidden">
            {breadcrumbs.map((crumb, i) => {
              const isFirst = i === 0;
              const isLast = i === breadcrumbs.length - 1;
              const isMiddle = !isFirst && !isLast;
              return (
                <span
                  key={i}
                  className={`flex items-center gap-1 min-w-0 ${
                    isMiddle ? "hidden sm:flex" : isFirst ? "shrink-0" : "min-w-0"
                  }`}
                >
                  {i > 0 && <span className="text-paper-400 text-xs shrink-0">/</span>}

                  {/* Company breadcrumb gets a CurriculumPopover if company data is available */}
                  {crumb.href && company && crumb.label === company.name ? (
                    <CurriculumPopover
                      company={company}
                      currentUnitId={currentUnitId}
                      currentLessonId={currentLessonId}
                      trigger={
                        <Link
                          href={crumb.href}
                          className="font-mono text-xs text-pencil-dim hover:text-redpen no-underline truncate transition-colors"
                        >
                          {crumb.label}
                        </Link>
                      }
                    />
                  ) : crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="font-mono text-xs text-pencil-dim hover:text-pencil no-underline truncate"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="font-mono text-xs text-pencil truncate">{crumb.label}</span>
                  )}
                </span>
              );
            })}
          </div>
        )}

        {/* XP badge */}
        {companySlug && xp > 0 && (
          <div className="ml-auto flex items-center gap-1.5 shrink-0">
            <span className="font-mono text-golden text-xs font-semibold">{xp} XP</span>
            <span className="font-mono text-pencil-faint text-xs">· {levelTitle}</span>
          </div>
        )}
      </div>
    </nav>
  );
}
