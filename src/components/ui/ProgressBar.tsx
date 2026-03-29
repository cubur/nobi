import { cn } from "@/lib/utils";

type ProgressColor = "moss" | "liberty" | "board";

interface ProgressBarProps {
  value: number; // 0–100
  color?: ProgressColor;
  label?: string;
  showPercent?: boolean;
  className?: string;
}

const colorStyles: Record<ProgressColor, string> = {
  moss: "bg-moss",
  liberty: "bg-[#6366f1]",
  board: "bg-board",
};

const trackStyles: Record<ProgressColor, string> = {
  moss: "bg-moss/15",
  liberty: "bg-[#6366f1]/15",
  board: "bg-board/40",
};

export function ProgressBar({
  value,
  color = "moss",
  label,
  showPercent = false,
  className,
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("w-full", className)}>
      {(label || showPercent) && (
        <div className="flex items-center justify-between mb-1">
          {label && (
            <span className="text-xs text-ink/70 font-medium">{label}</span>
          )}
          {showPercent && (
            <span className="text-xs text-ink/60 tabular-nums ml-auto">
              {clamped}%
            </span>
          )}
        </div>
      )}
      <div
        className={cn(
          "w-full h-2 rounded-full overflow-hidden",
          trackStyles[color]
        )}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500 ease-out",
            colorStyles[color]
          )}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
