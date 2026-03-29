"use client";

import { cn } from "@/lib/utils";
import { useProgressContext } from "@/context/ProgressContext";
import { StonesCollected } from "@/components/progress/StonesCollected";
import { StreakBadge } from "@/components/progress/StreakBadge";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const { progress } = useProgressContext();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full",
        "bg-board/90 backdrop-blur-sm",
        "border-b border-grid",
        className
      )}
    >
      <div className="mx-auto max-w-md px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <span className="font-serif text-2xl font-bold text-ink tracking-tight select-none">
          nobi
        </span>

        {/* Right side: stones + streak */}
        <div className="flex items-center gap-3">
          <StonesCollected count={progress.stones} />
          {progress.streak > 0 && (
            <StreakBadge streak={progress.streak} />
          )}
        </div>
      </div>
    </header>
  );
}
