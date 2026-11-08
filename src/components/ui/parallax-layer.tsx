"use client";

import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { distance } from "@/design-system/motion";

export function ParallaxLayer({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll();
  const drift = useTransform(scrollY, [0, 600], [0, distance.parallaxMax]);
  const reducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const syncDesktop = () => setIsDesktop(desktopQuery.matches);
    syncDesktop();
    desktopQuery.addEventListener("change", syncDesktop);
    return () => desktopQuery.removeEventListener("change", syncDesktop);
  }, []);

  return <m.div style={{ y: isDesktop && !reducedMotion ? drift : 0 }}>{children}</m.div>;
}
