type StoneVariant = "black" | "white" | "neon" | "golden" | "crimson" | "ice" | "snow";

const VARIANTS: Record<StoneVariant, { fill: string; stroke: string; glow?: string }> = {
  black: { fill: "#1a1a2e", stroke: "#3d3d5c" },
  white: { fill: "#e8e8ff", stroke: "#b0b0cc" },
  neon: { fill: "#00ff9f", stroke: "#00cc7f", glow: "rgba(0,255,159,0.5)" },
  golden: { fill: "#ff9800", stroke: "#cc7a00", glow: "rgba(255,152,0,0.5)" },
  crimson: { fill: "#ff2b4a", stroke: "#cc2238", glow: "rgba(255,43,74,0.5)" },
  ice: { fill: "#7dd3fc", stroke: "#38bdf8", glow: "rgba(125,211,252,0.4)" },
  snow: { fill: "#e8e8ff", stroke: "#9a9ab8" },
};

export default function GoStone({
  variant = "black",
  size = 24,
  className = "",
}: {
  variant?: StoneVariant;
  size?: number;
  className?: string;
}) {
  const v = VARIANTS[variant];
  const r = size / 2;
  const cx = r;
  const cy = r;
  const filterStr = v.glow ? `drop-shadow(0 0 4px ${v.glow})` : undefined;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      style={filterStr ? { filter: filterStr } : undefined}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`stone-grad-${variant}`} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="black" stopOpacity="0.15" />
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r={r - 1} fill={v.fill} stroke={v.stroke} strokeWidth="1" />
      <circle cx={cx} cy={cy} r={r - 1} fill={`url(#stone-grad-${variant})`} />
    </svg>
  );
}
