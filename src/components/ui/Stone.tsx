import { cn } from "@/lib/utils";

type StoneVariant = "black" | "white" | "empty" | "pulse";

interface StoneProps {
  variant?: StoneVariant;
  size?: number;
  className?: string;
}

export function Stone({ variant = "black", size = 40, className }: StoneProps) {
  const r = size / 2;
  const cx = r;
  const cy = r;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        variant === "pulse" && "animate-pulse-liberty",
        className
      )}
      aria-hidden="true"
    >
      <defs>
        {/* Black stone highlight gradient */}
        <radialGradient
          id={`black-highlight-${size}`}
          cx="35%"
          cy="30%"
          r="60%"
        >
          <stop offset="0%" stopColor="#6b7280" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#1c1917" stopOpacity="0" />
        </radialGradient>

        {/* White stone shadow gradient */}
        <radialGradient
          id={`white-shadow-${size}`}
          cx="50%"
          cy="50%"
          r="50%"
        >
          <stop offset="70%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#a8a29e" stopOpacity="0.5" />
        </radialGradient>

        {/* Pulse glow filter */}
        <filter id={`pulse-glow-${size}`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {variant === "black" && (
        <>
          {/* Base stone */}
          <circle cx={cx} cy={cy} r={r - 1} fill="#1c1917" />
          {/* Highlight */}
          <circle
            cx={cx}
            cy={cy}
            r={r - 1}
            fill={`url(#black-highlight-${size})`}
          />
        </>
      )}

      {variant === "white" && (
        <>
          {/* Base stone */}
          <circle cx={cx} cy={cy} r={r - 1} fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="0.5" />
          {/* Subtle inner shadow at edge */}
          <circle
            cx={cx}
            cy={cy}
            r={r - 1}
            fill={`url(#white-shadow-${size})`}
          />
          {/* Small highlight spot */}
          <circle
            cx={cx - r * 0.25}
            cy={cy - r * 0.25}
            r={r * 0.2}
            fill="white"
            opacity="0.7"
          />
        </>
      )}

      {variant === "empty" && (
        <circle
          cx={cx}
          cy={cy}
          r={r - 2}
          fill="none"
          stroke="#a8a29e"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
      )}

      {variant === "pulse" && (
        <>
          {/* Outer glow ring */}
          <circle
            cx={cx}
            cy={cy}
            r={r - 1}
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
            opacity="0.6"
            filter={`url(#pulse-glow-${size})`}
          />
          {/* Base stone */}
          <circle cx={cx} cy={cy} r={r - 3} fill="#1c1917" />
          {/* Highlight */}
          <circle
            cx={cx}
            cy={cy}
            r={r - 3}
            fill={`url(#black-highlight-${size})`}
          />
        </>
      )}
    </svg>
  );
}
