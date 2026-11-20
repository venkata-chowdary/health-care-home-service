"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

import { duration, easing, revealOnce } from "@/design-system/motion";

type CountUpProps = {
  value: number;
  suffix?: string;
  className?: string;
};

export function CountUp({ value, suffix = "", className }: CountUpProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(numberRef, { once: true, amount: revealOnce.viewport.amount });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || prefersReducedMotion || !numberRef.current) return;

    const numberElement = numberRef.current;
    numberElement.textContent = "0";

    const controls = animate(0, value, {
      duration: duration.count,
      ease: easing.standard,
      onUpdate: (latest) => {
        numberElement.textContent = Math.round(latest).toString();
      },
    });

    return () => controls.stop();
  }, [isInView, prefersReducedMotion, value]);

  return (
    <span className={className}>
      <span ref={numberRef} className="tabular-nums">
        {value}
      </span>
      {suffix}
    </span>
  );
}
