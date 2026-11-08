import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

const variants = {
  default: "bg-accent text-accent-foreground",
  white: "bg-background text-accent-foreground",
  "on-dark": "bg-white/8 text-blue-200 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.16)]",
};

type EyebrowProps = ComponentProps<"span"> & {
  variant?: keyof typeof variants;
};

export function Eyebrow({ variant = "default", className, children, ...props }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-button px-3 py-1.5 text-caption leading-[1.2] font-medium before:size-[5px] before:rounded-full before:bg-current",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
