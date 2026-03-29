import { cn } from "@/lib/utils";

interface BoardGridProps {
  className?: string;
  children?: React.ReactNode;
}

export function BoardGrid({ className, children }: BoardGridProps) {
  return (
    <div
      className={cn(
        "relative bg-board bg-board-grid bg-[length:40px_40px]",
        className
      )}
    >
      {children}
    </div>
  );
}
