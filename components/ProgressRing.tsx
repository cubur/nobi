"use client";

import { useEffect, useState } from "react";
import { getProgress } from "@/lib/progress";
import { getUnitProgress } from "@/lib/xp";
import type { Unit } from "@/data/types";

export default function ProgressRing({
  unit,
  companySlug,
  size = 44,
}: {
  unit: Unit;
  companySlug: string;
  size?: number;
}) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const progress = getProgress();
    const { percent: p } = getUnitProgress(unit, companySlug, progress);
    setPercent(p);
  }, [unit, companySlug]);

  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (percent / 100) * circ;

  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#2a2a40" strokeWidth={4} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="#00ff9f"
        strokeWidth={4}
        strokeDasharray={`${dash} ${circ - dash}`}
        strokeLinecap="round"
        className="transition-all duration-700"
      />
    </svg>
  );
}
