import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

import { Container } from "./container";

type SectionProps = ComponentProps<"section"> & {
  surface?: boolean;
  flushTop?: boolean;
  band?: boolean;
  containerClassName?: string;
};

export function Section({ surface = false, flushTop = false, band = false, containerClassName, className, children, ...props }: SectionProps) {
  return (
    <section className={cn(band ? "py-band-mobile md:py-band" : "py-section-mobile md:py-section-tablet lg:py-section", surface && "bg-surface", flushTop && "pt-0 md:pt-0 lg:pt-0", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
