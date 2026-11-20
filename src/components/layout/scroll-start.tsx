"use client";

import { useEffect } from "react";

export function ScrollStart() {
  useEffect(() => {
    history.scrollRestoration = "manual";
    const initialTarget = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (initialTarget) {
      initialTarget.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
