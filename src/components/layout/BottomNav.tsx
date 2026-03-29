"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Map, Target, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useProgressContext } from "@/context/ProgressContext";

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", icon: Map },
  { href: "/skills", label: "Skills", icon: Target },
  { href: "/progress", label: "Progress", icon: Trophy },
];

export function BottomNav() {
  const pathname = usePathname();
  const { progress } = useProgressContext();

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40",
        "bg-board/95 backdrop-blur-sm",
        "border-t border-grid",
        "pb-safe" // safe area inset for iOS home indicator
      )}
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-md flex items-stretch h-16">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === "/"
              ? pathname === "/"
              : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex-1 flex flex-col items-center justify-center gap-0.5",
                "text-xs font-medium transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss/60 focus-visible:ring-inset",
                isActive
                  ? "text-moss"
                  : "text-ink/50 hover:text-ink/80 active:text-ink"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <div className="relative">
                <Icon
                  className={cn(
                    "transition-transform duration-150",
                    isActive ? "w-6 h-6 scale-110" : "w-5 h-5"
                  )}
                />
                {/* stones count badge on Progress tab */}
                {label === "Progress" && progress.stones > 0 && (
                  <span
                    className={cn(
                      "absolute -top-1 -right-2",
                      "min-w-[16px] h-4 px-0.5",
                      "bg-moss text-white text-[10px] font-bold",
                      "rounded-full flex items-center justify-center tabular-nums",
                      "leading-none"
                    )}
                  >
                    {progress.stones > 99 ? "99+" : progress.stones}
                  </span>
                )}
              </div>
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
