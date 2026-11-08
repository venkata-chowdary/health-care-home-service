import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-content pr-[max(1.25rem,env(safe-area-inset-right,0px))] pl-[max(1.25rem,env(safe-area-inset-left,0px))] md:pr-[max(2.5rem,env(safe-area-inset-right,0px))] md:pl-[max(2.5rem,env(safe-area-inset-left,0px))]",
        className,
      )}
      {...props}
    />
  );
}
