import Image from "next/image";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

import { Icon, type IconName } from "./icon";

type PhotoFrameProps = Omit<ComponentProps<"div">, "children"> & {
  alt: string;
  src?: string;
  focus?: string;
  sizes?: string;
  preload?: boolean;
  label?: string;
  labelIcon?: IconName | null;
  labelClassName?: string;
  labelSide?: "left" | "right";
  icon?: IconName | null;
  radius?: "none" | "lg" | "xl";
  floating?: boolean;
  tone?: "light" | "dark";
};

export function PhotoFrame({ alt, src, focus, sizes = "100vw", preload, label, labelIcon = "camera", labelSide = "left", labelClassName, icon = "user-round", radius = "lg", floating = false, tone = "light", className, ...props }: PhotoFrameProps) {
  const radiusClass = { none: "rounded-none", lg: "rounded-lg", xl: "rounded-xl" }[radius];

  if (src) {
    return (
      <div className={cn(floating ? "absolute" : "relative", "max-w-full overflow-hidden", radiusClass, className)} {...props}>
        <Image src={src} alt={alt} fill sizes={sizes} preload={preload} style={focus ? { objectPosition: focus } : undefined} className="object-cover" />
      </div>
    );
  }

  const dark = tone === "dark";

  return (
    <div role="img" aria-label={alt} className={cn(floating ? "absolute" : "relative", "max-w-full overflow-hidden", radiusClass, dark ? "bg-placeholder-dark" : "bg-placeholder", className)} {...props}>
      {icon && (
        <span className={cn("absolute inset-0 grid place-items-center", dark ? "text-placeholder-icon-dark" : "text-placeholder-icon")}>
          <Icon name={icon} size={40} strokeWidth={1.25} />
        </span>
      )}
      {label && (
        <span
          className={cn(
            "absolute bottom-3 inline-flex items-center gap-1.5 whitespace-nowrap rounded-button px-2.5 py-[5px] text-xs",
            labelSide === "left" ? "left-3" : "right-3",
            dark ? "bg-navy-950/70 text-slate-on-dark" : "bg-white/85 text-muted-foreground",
            labelClassName,
          )}
        >
          {labelIcon && <Icon name={labelIcon} size={13} />}
          {label}
        </span>
      )}
    </div>
  );
}
