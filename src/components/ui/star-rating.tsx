import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

import { Icon } from "./icon";

type StarRatingProps = Omit<ComponentProps<"span">, "children"> & {
  value: number;
  size?: number;
  decorative?: boolean;
};

export function StarRating({ value, size = 15, decorative = false, className, ...props }: StarRatingProps) {
  const filledStars = Math.min(5, Math.max(0, Math.round(value)));

  return (
    <span
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : `${value} out of 5 stars`}
      aria-hidden={decorative || undefined}
      className={cn("flex gap-0.5", className)}
      {...props}
    >
      {[1, 2, 3, 4, 5].map((position) => (
        <Icon key={position} name="star" size={size} strokeWidth={0} className={cn("fill-current", position <= filledStars ? "text-star" : "text-border")} />
      ))}
    </span>
  );
}
