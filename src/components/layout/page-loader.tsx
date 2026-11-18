"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { hospital } from "@/data/hospital-content";

const minimumVisibleMs = 900;
const pulsePath = "M0 46H520l12-7 10 7h20l12-40 16 70 12-44 10 14h22q12-14 24 0H1200";

export function PageLoader() {
  const [phase, setPhase] = useState("visible");

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minimumWait = reducedMotion ? 0 : minimumVisibleMs;
    const startedAt = performance.now();
    let fadeTimer = 0;

    const startFade = () => {
      const remaining = Math.max(0, minimumWait - (performance.now() - startedAt));
      fadeTimer = window.setTimeout(() => setPhase("fading"), remaining);
    };

    if (document.readyState === "complete") {
      startFade();
    } else {
      window.addEventListener("load", startFade, { once: true });
    }

    return () => {
      window.clearTimeout(fadeTimer);
      window.removeEventListener("load", startFade);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      data-page-loader
      role="status"
      aria-label="Loading"
      onTransitionEnd={() => setPhase("gone")}
      className={`fixed inset-0 z-100 grid place-items-center bg-background transition-opacity duration-300 ease-standard ${phase === "fading" ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <div className="grid justify-items-center gap-1">
        <Image src="/images/brand/logo.png" alt={hospital.name.value} width={1080} height={238} sizes="300px" preload className="h-16 w-auto max-sm:h-12" />
        <svg viewBox="360 0 480 80" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-16 w-72 overflow-visible">
          <path d={pulsePath} pathLength={100} vectorEffect="non-scaling-stroke" className="stroke-blue-100" />
          <path d={pulsePath} pathLength={100} className="page-loader-glow stroke-primary opacity-55 blur-xs" />
          <path d={pulsePath} pathLength={100} vectorEffect="non-scaling-stroke" className="page-loader-line stroke-primary" />
        </svg>
      </div>
    </div>
  );
}
