"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { cancelFrame, frame } from "motion/react";
import { useEffect } from "react";

import { smoothScroll } from "@/lib/smooth-scroll-instance";

export function SmoothScroll() {
  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;
    let update: ((frameData: { timestamp: number }) => void) | null = null;

    const syncWithPreference = () => {
      if (reducedMotionQuery.matches && lenis && update) {
        cancelFrame(update);
        lenis.destroy();
        lenis = null;
        smoothScroll.lenis = null;
      }
      if (!reducedMotionQuery.matches && !lenis) {
        const created = new Lenis({ autoRaf: false });
        update = ({ timestamp }) => created.raf(timestamp);
        frame.update(update, true);
        lenis = created;
        smoothScroll.lenis = created;
      }
    };

    const handleAnchorClick = (event: MouseEvent) => {
      if (!lenis || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = (event.target as Element).closest<HTMLAnchorElement>("a[href^='#']");
      const hash = link?.getAttribute("href");
      if (!hash || hash.length < 2) return;

      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return;

      event.preventDefault();
      if (hash === "#top") {
        lenis.scrollTo(0, { force: true });
      } else {
        const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
        const scrollMarginTop = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
        lenis.scrollTo(target, { offset: scrollMarginTop - headerHeight, force: true });
      }

      history.pushState(null, "", hash);
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    };

    syncWithPreference();
    reducedMotionQuery.addEventListener("change", syncWithPreference);
    document.addEventListener("click", handleAnchorClick);

    return () => {
      reducedMotionQuery.removeEventListener("change", syncWithPreference);
      document.removeEventListener("click", handleAnchorClick);
      if (lenis && update) {
        cancelFrame(update);
        lenis.destroy();
      }
      smoothScroll.lenis = null;
    };
  }, []);

  return null;
}
