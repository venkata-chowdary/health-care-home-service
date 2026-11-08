"use client";

import { animate } from "motion/mini";
import { useRef, useState } from "react";
import type { MouseEvent } from "react";

import { Icon } from "@/components/ui/icon";
import { duration, easing } from "@/design-system/motion";
import { cn } from "@/lib/cn";

type FaqItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export function FaqItem({ question, answer, defaultOpen = false }: FaqItemProps) {
  const [expanded, setExpanded] = useState(defaultOpen);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const runningAnimation = useRef<{ cancel: () => void } | null>(null);
  const closing = useRef(false);

  function handleSummaryClick(event: MouseEvent<HTMLElement>) {
    const details = detailsRef.current;
    const panel = panelRef.current;
    if (!details || !panel) return;

    event.preventDefault();
    runningAnimation.current?.cancel();
    panel.removeAttribute("style");

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const options = { duration: duration.base, ease: easing.standard };

    if (details.open && !closing.current) {
      closing.current = true;
      setExpanded(false);
      const closingAnimation = animate(panel, reducedMotion ? { opacity: [1, 0] } : { height: [`${panel.offsetHeight}px`, "0px"], opacity: [1, 0] }, options);
      runningAnimation.current = closingAnimation;
      closingAnimation.finished.then(() => {
        if (!closing.current) return;
        closing.current = false;
        details.open = false;
        panel.removeAttribute("style");
      });
      return;
    }

    closing.current = false;
    details.open = true;
    setExpanded(true);
    const openingAnimation = animate(panel, reducedMotion ? { opacity: [0, 1] } : { height: ["0px", `${panel.scrollHeight}px`], opacity: [0, 1] }, options);
    runningAnimation.current = openingAnimation;
    openingAnimation.finished.then(() => panel.removeAttribute("style"));
  }

  return (
    <details ref={detailsRef} open={defaultOpen} className="border-b border-border last:border-b-0">
      <summary onClick={handleSummaryClick} className="flex cursor-pointer list-none items-center justify-between gap-5 py-[22px] text-[17px] font-medium tracking-title marker:content-[''] [&::-webkit-details-marker]:hidden">
        {question}
        <Icon name="plus" size={22} className={cn("flex-none text-primary transition-transform duration-260 ease-standard", expanded && "rotate-45")} />
      </summary>
      <div ref={panelRef} className="overflow-hidden">
        <p className="max-w-[62ch] pr-10 pb-[22px] text-[15.5px] text-muted-foreground">{answer}</p>
      </div>
    </details>
  );
}
