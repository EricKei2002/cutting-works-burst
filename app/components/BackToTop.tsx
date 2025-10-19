"use client";

import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type BackToTopProps = {
  className?: string;
};

export function BackToTop({ className }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsVisible(window.scrollY > 240);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = useCallback(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/95 px-5 py-3 text-sm font-semibold tracking-[0.28em] text-foreground shadow-lg backdrop-blur",
        "transition-transform duration-200 hover:-translate-y-1",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50",
        "dark:border-white/15 dark:bg-black/65 dark:text-white",
        isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        className,
      )}
      aria-label="ページの先頭に戻る"
      title="ページの先頭に戻る"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.9"
        className="h-4 w-4 text-current transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        <path d="M12 19V5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 11l6-6 6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-xs uppercase">Page Top</span>
    </button>
  );
}
