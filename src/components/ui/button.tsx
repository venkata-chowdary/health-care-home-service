import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/cn";

import { Icon, type IconName } from "./icon";

const variants = {
  primary: "border-transparent bg-primary text-primary-foreground hovered:bg-primary-hover",
  secondary: "border-border bg-secondary text-secondary-foreground hovered:border-blue-200 hovered:bg-accent",
  outline: "border-primary bg-transparent text-primary hovered:bg-accent",
  white: "border-transparent bg-background text-foreground hovered:bg-accent",
  "ghost-light": "border-white/45 bg-transparent text-white hovered:border-white hovered:bg-white/8",
  glass: "border-white/20 bg-white/8 text-white hovered:border-white/45 hovered:bg-white/12",
  navy: "border-transparent bg-navy-950 text-white hovered:bg-navy-800",
};

const sizes = {
  default: "h-12 px-6 text-button",
  sm: "touch-target h-10 px-[18px] text-body-sm",
  compact: "h-11 px-3 text-button",
};

type ButtonOptions = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  iconOnly?: boolean;
  loading?: boolean;
  disabled?: boolean;
  iconBefore?: IconName;
  iconAfter?: IconName;
  leadIcon?: IconName;
  children?: ReactNode;
};

type ButtonAsButton = ButtonOptions & Omit<ComponentProps<"button">, keyof ButtonOptions> & { href?: undefined };
type ButtonAsLink = ButtonOptions & Omit<ComponentProps<"a">, keyof ButtonOptions> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant = "primary", size = "default", iconOnly = false, loading = false, disabled: disabledByProp = false, iconBefore, iconAfter, leadIcon, className, children, ...props }: ButtonProps) {
  const disabled = loading || disabledByProp;

  const classes = cn(
    "group/button inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-button border font-medium no-underline",
    "transition-[background-color,border-color,color] duration-180 ease-standard",
    "pressed:scale-[0.98] focused:outline-2 focused:outline-offset-3 focused:outline-focus",
    "aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    variants[variant],
    iconOnly ? "size-11 p-0" : sizes[size],
    leadIcon && !iconOnly && "pl-1.5",
    className,
  );

  const content = (
    <>
      {loading && <span aria-hidden="true" className="size-4 animate-[spin_700ms_linear_infinite] rounded-full border-2 border-current/35 border-t-current motion-reduce:animate-none" />}
      {!loading && leadIcon && !iconOnly && (
        <span className="grid size-9 place-items-center rounded-full bg-background text-primary">
          <Icon name={leadIcon} size={17} strokeWidth={2} />
        </span>
      )}
      {!loading && iconBefore && <Icon name={iconBefore} size={17} strokeWidth={2} />}
      {children}
      {!loading && iconAfter && (
        <Icon name={iconAfter} size={17} strokeWidth={2} className={cn(iconAfter === "arrow-right" && "transition-transform duration-200 ease-standard group-hover/button:translate-x-0.75")} />
      )}
    </>
  );

  if (props.href !== undefined) {
    const { href, onClick, target, rel, ...linkProps } = props as ButtonAsLink;
    const linkRel = target === "_blank" ? (rel ?? "noopener") : rel;
    const linkAttributes = { ...linkProps, target, rel: linkRel, onClick, className: classes, "aria-disabled": disabled || undefined, "aria-busy": loading || undefined, tabIndex: disabled ? -1 : linkProps.tabIndex };

    if (disabled) {
      return (
        <a role="link" {...linkAttributes}>
          {content}
        </a>
      );
    }

    if (href.startsWith("/")) {
      return (
        <Link href={href} {...linkAttributes}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} {...linkAttributes}>
        {content}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;
  return (
    <button type={type} {...buttonProps} disabled={disabled} aria-busy={loading || undefined} className={classes}>
      {content}
    </button>
  );
}
