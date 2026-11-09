import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

import { Icon } from "./icon";

type ArrowLinkProps = ComponentProps<"a"> & {
  tone?: "default" | "on-dark";
};

export function ArrowLink({ tone = "default", className, children, ...props }: ArrowLinkProps) {
  return (
    <a className={cn("group/arrow touch-target inline-flex min-h-6 items-center gap-1.5 text-body-sm font-medium no-underline", tone === "on-dark" ? "text-white" : "text-link", className)} {...props}>
      {children}
      <Icon name="arrow-right" size={15} className="transition-transform duration-200 ease-standard group-hover/arrow:translate-x-0.75 group-hover/card:translate-x-0.75" />
    </a>
  );
}
