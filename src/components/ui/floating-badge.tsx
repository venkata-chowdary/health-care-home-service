import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

import { Icon, type IconName } from "./icon";

type FloatingBadgeProps = ComponentProps<"span"> & {
  icon?: IconName;
};

export function FloatingBadge({ icon = "check", className, children, ...props }: FloatingBadgeProps) {
  return (
    <span className={cn("inline-flex h-[38px] items-center gap-2 whitespace-nowrap rounded-button bg-background pr-3.5 pl-2 text-caption font-medium text-foreground shadow-pill", className)} {...props}>
      <span className="grid size-[22px] place-items-center rounded-full bg-primary text-primary-foreground">
        <Icon name={icon} size={12} strokeWidth={3} />
      </span>
      {children}
    </span>
  );
}
