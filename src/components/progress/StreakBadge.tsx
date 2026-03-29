import { cn } from "@/lib/utils";

interface StreakBadgeProps {
  streak: number;
  className?: string;
}

export function StreakBadge({ streak, className }: StreakBadgeProps) {
  const label = streak === 1 ? "1 day" : `${streak} days`;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full",
        "bg-amber-50 border border-amber-200 text-amber-700",
        "text-sm font-semibold",
        className
      )}
      title={`${label} streak`}
    >
      <span aria-hidden="true">🔥</span>
      <span className="tabular-nums">{label}</span>
    </div>
  );
}
