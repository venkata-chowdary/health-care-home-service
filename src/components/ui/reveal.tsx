"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

import { distance, duration, easing, revealOnce, stagger } from "@/design-system/motion";

const hidden = { opacity: 0, y: distance.reveal };
const shown = { opacity: 1, y: 0 };

type RevealProps = {
  children: ReactNode;
  className?: string;
  trigger?: "view" | "load";
  delay?: number;
};

export function Reveal({ children, className, trigger = "view", delay = 0 }: RevealProps) {
  const ease = easing.standard;

  if (trigger === "load") {
    return (
      <m.div data-reveal="" className={className} initial={hidden} animate={shown} transition={{ duration: duration.hero, ease, delay }}>
        {children}
      </m.div>
    );
  }

  return (
    <m.div data-reveal="" className={className} initial={hidden} whileInView={shown} viewport={revealOnce.viewport} transition={{ duration: duration.reveal, ease, delay }}>
      {children}
    </m.div>
  );
}

type RevealLettersProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function RevealLetters({ text, className, delay = 0 }: RevealLettersProps) {
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split("").map((letter, index) => (
          <m.span
            key={`${letter}-${index}`}
            data-reveal=""
            className="inline-block"
            initial={{ opacity: 0, y: "0.5em" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.hero, ease: easing.standard, delay: delay + index * stagger.letter }}
          >
            {letter}
          </m.span>
        ))}
      </span>
    </span>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
};

export function RevealGroup({ children, className }: RevealGroupProps) {
  return (
    <m.div className={className} initial="hidden" whileInView="shown" viewport={revealOnce.viewport}>
      {children}
    </m.div>
  );
}

type RevealItemProps = {
  children: ReactNode;
  index: number;
  className?: string;
  lift?: boolean;
};

export function RevealItem({ children, index, className = "", lift = false }: RevealItemProps) {
  const ease = easing.standard;
  const variants = {
    hidden,
    shown: { ...shown, transition: { duration: duration.reveal, ease, delay: Math.min(index, stagger.maxItems - 1) * stagger.interval } },
  };

  return (
    <m.div data-reveal="" className={`grid grid-cols-[minmax(0,1fr)] ${className}`} variants={variants} whileHover={lift ? { y: -distance.lift, transition: { duration: duration.base, ease } } : undefined}>
      {children}
    </m.div>
  );
}
