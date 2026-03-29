import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "stone";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-moss text-white hover:bg-moss/90 active:bg-moss/80 shadow-sm disabled:bg-moss/50",
  secondary:
    "bg-transparent text-ink border border-ink hover:bg-ink/5 active:bg-ink/10 disabled:border-ink/40 disabled:text-ink/40",
  ghost:
    "bg-transparent text-ink hover:bg-mist/60 active:bg-mist disabled:text-ink/40",
  stone:
    "bg-board text-ink hover:bg-board/80 active:bg-board/70 shadow-sm border border-grid disabled:bg-board/50 disabled:text-ink/50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm rounded-lg gap-1.5",
  md: "h-10 px-5 text-base rounded-xl gap-2",
  lg: "h-12 px-6 text-lg rounded-xl gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  children,
  className,
  type = "button",
  onClick,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={cn(
        // Base styles
        "inline-flex items-center justify-center font-medium transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss/60 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...rest}
    >
      {loading && (
        <Loader2
          className={cn(
            "animate-spin shrink-0",
            size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"
          )}
        />
      )}
      {children}
    </button>
  );
}
