"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import { Reveal } from "../components/Reveal";
import { WorkItem, worksItems } from "../data/works";

type WorkImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

function WorkImage({
  src,
  alt,
  className = "",
  sizes,
  priority = false,
}: WorkImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      sizes={sizes}
      className={`transition-opacity duration-200 ${className}`.trim()}
      onError={() => setCurrentSrc("/file.svg")}
      priority={priority}
    />
  );
}

export function Works() {
  const [activeWork, setActiveWork] = useState<WorkItem | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const captionId = useId();

  useEffect(() => {
    if (!activeWork) {
      if (lastTriggerRef.current) {
        lastTriggerRef.current.focus();
      }
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveWork(null);
      }
    };

    const { style } = document.body;
    const previousOverflow = style.overflow;
    style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      style.overflow = previousOverflow;
    };
  }, [activeWork]);

  return (
    <section id="works" className="w-full py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-[22px] md:text-[28px] font-semibold tracking-tight">
            Works
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {worksItems.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.05}>
              <button
                type="button"
                onClick={(event) => {
                  lastTriggerRef.current = event.currentTarget;
                  setActiveWork(item);
                }}
                className="group relative w-full overflow-hidden rounded-xl border border-foreground/10 bg-background text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
              >
                <div className="relative aspect-[4/3]">
                  <WorkImage
                    src={item.src}
                    alt={item.alt}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover md:object-contain p-0 md:p-6 group-hover:opacity-95"
                  />
                </div>
                <span className="sr-only">{item.alt} を拡大表示</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {activeWork && (
          <motion.div
            key="work-modal"
            role="dialog"
            aria-modal="true"
            aria-label={activeWork.alt}
            aria-describedby={captionId}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10"
            onClick={() => setActiveWork(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,17,32,0.75),rgba(8,9,20,0.95))] backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/18 bg-white/80 p-6 text-neutral-900 shadow-[0_50px_140px_-40px_rgba(10,10,10,0.55)] backdrop-blur-xl dark:border-white/12 dark:bg-neutral-900/80 dark:text-neutral-100"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_-10%,rgba(255,255,255,0.65),transparent_55%),radial-gradient(circle_at_85%_0,rgba(255,255,255,0.4),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_-10%,rgba(20,20,30,0.5),transparent_60%),radial-gradient(circle_at_90%_10%,rgba(20,20,35,0.4),transparent_55%)]" />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setActiveWork(null)}
                className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200/70 bg-white/90 text-[17px] font-semibold text-neutral-800 shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/70 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:focus-visible:ring-white/40"
              >
                <span aria-hidden>×</span>
                <span className="sr-only">閉じる</span>
              </button>
              <div className="grid gap-6 sm:grid-cols-[1.1fr_minmax(0,0.9fr)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200/50 bg-neutral-900/5 dark:border-white/10 dark:bg-neutral-900/40">
                  <WorkImage
                    src={activeWork.src}
                    alt={activeWork.alt}
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 60vw, 960px"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-between gap-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
                      Featured Work
                    </p>
                    <h3 className="mt-3 text-lg font-semibold leading-tight sm:text-xl">
                      {activeWork.alt}
                    </h3>
                  </div>
                  <p
                    id={captionId}
                    className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
                  >
                    ハイライトを拡大表示しています。詳細情報や制作背景はご希望に応じて追加できます。
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
