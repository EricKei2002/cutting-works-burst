"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../components/Reveal";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-28 md:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/hero-bg.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/65 to-white dark:from-black/80 dark:via-black/70 dark:to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(255,255,255,0.65),transparent_55%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.4),transparent_45%),radial-gradient(circle_at_52%_88%,rgba(255,255,255,0.45),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_28%,rgba(10,10,10,0.55),transparent_60%),radial-gradient(circle_at_78%_20%,rgba(10,10,10,0.5),transparent_45%),radial-gradient(circle_at_50%_92%,rgba(10,10,10,0.55),transparent_55%)]" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Reveal>
          <h1 className="text-[clamp(32px,6vw,64px)] font-extrabold tracking-tight leading-[1.05] bg-clip-text text-transparent bg-[linear-gradient(180deg,rgba(0,0,0,0.92),rgba(0,0,0,0.6))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.6))]">
            Cutting Works Burst
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-[15px] md:text-base text-foreground/75 max-w-2xl">
            クリエイティブを切り拓く、ポートフォリオ＆ワークスギャラリー。
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-9">
            <Link
              href="#works"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium transition-transform duration-200 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
            >
              作品を見る
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
