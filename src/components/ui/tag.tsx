import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

const variants = {
  default: "border-border bg-background text-muted-foreground",
  sample: "border-warning-border bg-warning-surface font-medium text-warning",
};

type TagProps = ComponentProps<"span"> & {
  variant?: keyof typeof variants;
};

export function Tag({ variant = "default", className, ...props }: TagProps) {
  return <span className={cn("inline-flex h-[26px] items-center whitespace-nowrap rounded-button border px-[11px] text-[12.5px]", variants[variant], className)} {...props} />;
}
