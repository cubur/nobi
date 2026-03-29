import { Stone } from "@/components/ui/Stone";
import { cn } from "@/lib/utils";

interface StonesCollectedProps {
  count: number;
  className?: string;
}

export function StonesCollected({ count, className }: StonesCollectedProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Stone variant="black" size={20} />
      <span className="text-sm font-semibold text-ink tabular-nums">
        {count.toLocaleString()}
      </span>
    </div>
  );
}
