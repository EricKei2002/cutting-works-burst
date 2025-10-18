"use client";

import { useEffect } from "react";
import Swup from "swup";

let swupInstance: Swup | null = null;

export function SwupTransition() {
  useEffect(() => {
    if (swupInstance) {
      return;
    }

    swupInstance = new Swup({
      containers: ["#swup"],
      animateHistoryBrowsing: true,
      animationSelector: "[data-swup-transition]",
    });

    return () => {
      swupInstance?.destroy();
      swupInstance = null;
    };
  }, []);

  return null;
}
