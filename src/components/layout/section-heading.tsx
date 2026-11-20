import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "on-dark";
  as?: "h1" | "h2" | "h3";
  headingId?: string;
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({ title, lead, align = "left", tone = "light", as: Heading = "h2", headingId, className, children }: SectionHeadingProps) {
  const dark = tone === "on-dark";

  return (
    <Reveal className={cn("grid max-w-[640px] gap-3.5", align === "center" ? "mx-auto justify-items-center text-center" : "justify-items-start", className)}>
      <Heading id={headingId} className={cn("text-h2 font-medium tracking-heading text-balance", dark && "text-white")}>{title}</Heading>
      {lead && <p className={cn("text-body-lg", dark ? "text-slate-on-dark" : "text-muted-foreground")}>{lead}</p>}
      {children}
    </Reveal>
  );
}
