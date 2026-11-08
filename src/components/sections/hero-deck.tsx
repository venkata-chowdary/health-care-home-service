"use client";

import { m, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { FloatingBadge } from "@/components/ui/floating-badge";
import { isIconName } from "@/components/ui/icon";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { duration, easing } from "@/design-system/motion";
import { cn } from "@/lib/cn";

type HeroDeckProps = {
  photos: { label: string; icon: string; src: string; alt: string }[];
  badges: string[];
  label: string;
};

export function HeroDeck({ photos, badges, label }: HeroDeckProps) {
  const [position, setPosition] = useState({ current: Math.floor(photos.length / 2), previous: Math.floor(photos.length / 2) });
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const count = photos.length;

  const offsetFor = (index: number, front: number) => {
    let offset = index - front;
    if (offset > count / 2) offset -= count;
    if (offset < -count / 2) offset += count;
    return offset;
  };

  const showPhoto = (index: number) => setPosition({ current: (index + count) % count, previous: position.current });

  const { current } = position;

  useEffect(() => {
    if (reducedMotion || paused) return;
    const timer = setInterval(() => {
      setPosition((existing) => ({ current: (existing.current + 1) % count, previous: existing.current }));
    }, 5000);
    return () => clearInterval(timer);
  }, [reducedMotion, paused, count, current]);

  return (
    <div role="group" aria-roledescription="carousel" aria-label={label} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onKeyDown={(event) => {
      if (event.key === "ArrowLeft") showPhoto(current - 1);
      if (event.key === "ArrowRight") showPhoto(current + 1);
    }}>
      <div className="relative h-[clamp(280px,40vw,540px)] [--deck-step:17%] max-md:h-[clamp(190px,52vw,340px)] max-md:[--deck-step:11%]">
        {photos.map((photo, index) => {
          const offset = offsetFor(index, current);
          const isCurrent = index === current;
          const travelled = Math.abs(offset - offsetFor(index, position.previous));
          const instant = reducedMotion || travelled > 2;
          const name = `${photo.label}, photo ${index + 1} of ${count}`;

          return (
            <m.button
              key={photo.label}
              type="button"
              initial={false}
              animate={{ "--offset": offset, "--distance": Math.abs(offset), opacity: reducedMotion && isCurrent ? [0.2, 1] : 1 }}
              transition={{
                default: instant ? { duration: 0 } : { duration: duration.reveal, ease: [...easing.standard] },
                opacity: { duration: duration.base },
              }}
              style={{
                zIndex: 10 - Math.abs(offset),
                transform: "translate(-50%, -50%) translateX(calc(var(--offset) * var(--deck-step))) scale(calc(1 - var(--distance) * 0.12))",
                filter: "brightness(calc(1 - var(--distance) * 0.06))",
              }}
              aria-label={isCurrent ? name : `Show ${name}`}
              aria-current={isCurrent}
              tabIndex={-1}
              onClick={() => showPhoto(index)}
              className={cn(
                "absolute top-1/2 left-1/2 aspect-[16/10] w-[min(780px,68%)] overflow-hidden rounded-[20px] border-0 p-0 shadow-deck will-change-transform max-md:w-[78%] max-md:rounded-lg",
                isCurrent ? "cursor-default" : "cursor-pointer",
              )}
            >
              <PhotoFrame
                alt={photo.alt}
                src={photo.src}
                preload={index === Math.floor(count / 2)}
                icon={isIconName(photo.icon) ? photo.icon : "camera"}
                label={photo.label}
                labelClassName={cn("transition-opacity duration-300", !isCurrent && "opacity-0")}
                sizes="(min-width: 1280px) 780px, 78vw"
                className="size-full"
              />
            </m.button>
          );
        })}

        <FloatingBadge className="absolute top-[16%] left-[12%] z-20 max-md:hidden">{badges[0]}</FloatingBadge>
        <FloatingBadge className="absolute right-[12%] bottom-[14%] z-20 max-md:hidden">{badges[1]}</FloatingBadge>
      </div>

      <p className="sr-only" aria-live="off">
        {`Photo ${current + 1} of ${count}: ${photos[current].label}`}
      </p>
    </div>
  );
}
