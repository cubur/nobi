import { cn } from "@/lib/utils";
import { getSkillLevel } from "@/lib/utils";
import { SKILL_LABELS, SKILL_DESCRIPTIONS, type SkillCategory } from "@/lib/types";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface SkillBarProps {
  category: SkillCategory;
  score: number; // 0–100
  className?: string;
}

export function SkillBar({ category, score, className }: SkillBarProps) {
  const label = SKILL_LABELS[category];
  const description = SKILL_DESCRIPTIONS[category];
  const level = getSkillLevel(score);

  return (
    <div className={cn("w-full space-y-1.5", className)}>
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0 mr-3">
          <p className="text-sm font-semibold text-ink truncate">{label}</p>
          <p className="text-xs text-ink/55 truncate">{description}</p>
        </div>
        <span
          className={cn(
            "shrink-0 text-xs font-bold px-2 py-0.5 rounded-full",
            score >= 80
              ? "bg-moss/15 text-moss"
              : score >= 60
              ? "bg-[#6366f1]/15 text-[#6366f1]"
              : score >= 40
              ? "bg-board/60 text-ink"
              : score >= 20
              ? "bg-mist text-ink/70"
              : "bg-mist text-ink/50"
          )}
        >
          {level}
        </span>
      </div>
      <ProgressBar
        value={score}
        color={score >= 80 ? "moss" : score >= 40 ? "liberty" : "board"}
        showPercent
      />
    </div>
  );
}
