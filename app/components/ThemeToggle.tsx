"use client";

import { useMemo } from "react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4V2m0 20v-2m8-8h2M2 12h2m14.95 6.95 1.41 1.41M5.64 5.64 4.22 4.22m0 15.56 1.42-1.42m12.72-12.72 1.42-1.42"
      />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"
      />
    </svg>
  );
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme, isReady } = useTheme();

  const label = useMemo(() => {
    if (!isReady) {
      return "テーマモードを切り替える";
    }
    return theme === "dark" ? "ライトモードに切り替える" : "ダークモードに切り替える";
  }, [isReady, theme]);

  const sunClasses = useMemo(() => {
    if (!isReady) {
      return "h-5 w-5 transition-opacity duration-300 opacity-100";
    }
    return cn("h-5 w-5 transition-opacity duration-300", theme === "dark" ? "opacity-0" : "opacity-100");
  }, [isReady, theme]);

  const moonClasses = useMemo(() => {
    if (!isReady) {
      return "absolute h-5 w-5 transition-opacity duration-300 opacity-0";
    }
    return cn(
      "absolute h-5 w-5 transition-opacity duration-300",
      theme === "dark" ? "opacity-100" : "opacity-0",
    );
  }, [isReady, theme]);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 bg-background/95 text-foreground shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 backdrop-blur-md",
        "hover:-translate-y-0.5 hover:shadow-lg",
        "dark:border-white/15 dark:bg-black/60 dark:text-white dark:hover:bg-black/70",
        className,
      )}
      aria-label={label}
      title={label}
      disabled={!isReady}
    >
      <SunIcon className={sunClasses} />
      <MoonIcon className={moonClasses} />
    </button>
  );
}
