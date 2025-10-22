"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  initiallyVisible?: boolean;
}

type ElementHandler = (visible: boolean) => void;

const revealHandlers = new WeakMap<Element, ElementHandler>();
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver() {
  if (typeof window === "undefined") {
    return null;
  }

  if (sharedObserver) {
    return sharedObserver;
  }

  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const handler = revealHandlers.get(entry.target);
        if (handler) {
          handler(true);
          sharedObserver?.unobserve(entry.target);
        }
      });
    },
    {
      threshold: [0, 0.35, 0.6],
      rootMargin: "0px 0px -10% 0px",
    },
  );

  return sharedObserver;
}

export function Reveal({
  children,
  className,
  delay = 0,
  initiallyVisible = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(initiallyVisible);

  useEffect(() => {
    if (initiallyVisible) return;

    const element = ref.current;
    if (!element) return;

    const observer = getSharedObserver();
    if (!observer) return;

    revealHandlers.set(element, setIsVisible);
    observer.observe(element);
    return () => {
      revealHandlers.delete(element);
      observer.unobserve(element);
    };
  }, [initiallyVisible]);

  return (
    <div
      ref={ref}
      data-visible={isVisible}
      className={cn("reveal-element", className)}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
