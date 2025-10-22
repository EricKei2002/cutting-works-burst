"use client";
import Image from "next/image";
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

function WorkImage({ src, alt, className = "", sizes, priority = false }: WorkImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      src={hasError ? "/file.svg" : src}
      alt={alt}
      fill
      sizes={sizes}
      className={`transition-opacity duration-200 ${className}`.trim()}
      onError={() => setHasError(true)}
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

    const closeButton = closeButtonRef.current;
    if (closeButton && window.matchMedia("(min-width: 1024px)").matches) {
      closeButton.focus();
    }

    if (!window.matchMedia("(min-width: 768px)").matches) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      style.overflow = previousOverflow;
    };
  }, [activeWork]);

  return (
    <section id="works" className="w-full py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <h2 className="text-[22px] md:text-[28px] font-semibold tracking-tight text-foreground">
            Works
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {worksItems.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.05}>
              <button
                type="button"
                onClick={(event) => {
                  if (typeof window !== "undefined" && !window.matchMedia("(min-width: 768px)").matches) {
                    return;
                  }

                  lastTriggerRef.current = event.currentTarget;
                  setActiveWork(item);
                }}
                className="group relative w-full overflow-hidden rounded-xl border border-foreground/10 bg-background text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
              >
                <div className="relative aspect-square sm:aspect-[4/3]">
                  <WorkImage
                    src={item.previewSrc ?? item.src}
                    alt={item.alt}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1400px) 20vw, 15vw"
                    className={`transition-transform duration-200 group-hover:scale-[1.02] group-hover:opacity-95 ${
                      item.id === 4 || item.id === 5 || item.id === 6
                        ? "object-contain bg-neutral-200/40 dark:bg-neutral-800/40"
                        : "object-cover"
                    }`}
                  />
                </div>
                <span className="sr-only">{item.alt} を拡大表示</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {activeWork && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeWork.alt}
          aria-describedby={captionId}
          className="fixed inset-0 z-50 flex items中心 justify中心 px-4 py-10"
          onClick={() => setActiveWork(null)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden />
          <div
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/18 bg-white/92 p-6 text-neutral-900 shadow-[0_40px_120px_-30px_rgba(10,10,10,0.55)] dark:border-white/12 dark:bg-neutral-900/85 dark:text-neutral-100"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setActiveWork(null)}
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-neutral-200/70 bg-white/90 text-[17px] font-semibold text-neutral-800 shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/70 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg白/20 dark:focus-visible:ring-white/40 lg:absolute lg:right-6 lg:top-6 lg:flex"
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
                  className={
                    activeWork.id === 4 || activeWork.id === 5 || activeWork.id === 6
                      ? "object-contain"
                      : "object-cover"
                  }
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
                <p id={captionId} className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {activeWork.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
