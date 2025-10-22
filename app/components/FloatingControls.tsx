"use client";

import dynamic from "next/dynamic";

const ThemeToggle = dynamic(
  () => import("./ThemeToggle").then((mod) => mod.ThemeToggle),
  { ssr: false },
);

const BackToTop = dynamic(
  () => import("./BackToTop").then((mod) => mod.BackToTop),
  { ssr: false, loading: () => null },
);

export function FloatingControls() {
  return (
    <>
      <ThemeToggle className="fixed right-5 top-5 z-[60]" />
      <BackToTop className="fixed left-5 bottom-8 z-[60]" />
    </>
  );
}

