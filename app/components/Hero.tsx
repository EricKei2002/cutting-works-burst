// cspell:ignore fafc
import { buttonClasses } from "@/lib/button";
import Link from "next/link";
import { Reveal } from "../components/Reveal";

export function Hero() {
  return (
    <section className="flex w-full flex-col items-center justify-center overflow-hidden bg-background px-6 pb-32 pt-24">
      <div className="flex max-w-5xl flex-col items-center text-center">
        <Reveal>
          <div className="space-y-6 uppercase text-foreground">
            <div className="space-y-4">
              <span className="hero-word hero-shimmer bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-[clamp(48px,10vw,120px)] tracking-[-0.06em] text-transparent drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]">
                cutting
              </span>
              <span className="hero-word hero-shimmer hero-shimmer--delay-1 block bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-500 bg-clip-text text-[clamp(40px,8vw,96px)] tracking-[-0.05em] text-transparent drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]">
                works
              </span>
              <span className="hero-word hero-shimmer hero-shimmer--delay-2 block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-[clamp(56px,12vw,150px)] tracking-[-0.08em] text-transparent drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]">
                burst
              </span>
            </div>
            <div className="flex items-center justify-center gap-4 pt-8 text-foreground/50">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-fuchsia-400/60" />
              <span className="h-1 w-1 rounded-full bg-fuchsia-400/80 animate-pulse" />
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-sky-400/60" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-3xl text-[22px] md:text-[28px] font-semibold tracking-tight text-foreground">
            切り文字とヴィジュアルの力で、街に映えるサインを仕立てる。コンセプト設計から施工まで
            ワンストップで走り抜けることで、スピードとクオリティを両立させます。
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold">
            <Link
              href="#about"
              className={buttonClasses(
                "ghost",
                "default",
                "border border-foreground/15 bg-foreground text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-foreground/90 dark:border-white/20 dark:bg-white/10 dark:text-background",)}
            >
              サービス内容
            </Link>
            <Link
              href="#works"
              className={buttonClasses(
                "ghost",
                "default",
                "border border-foreground/15 bg-foreground text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-foreground/90 dark:border-white/20 dark:bg-white/10 dark:text-background",
              )}
            >
              作品を見る
            </Link>
            <Link
              href="#pricing"
              className={buttonClasses(
                "ghost",
                "default",
                "border border-foreground/15 bg-foreground text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-foreground/90 dark:border-white/20 dark:bg-white/10 dark:text-background",
              )}
            >
              料金表を見る
            </Link>
            <Link
              href="#contact"
              className={buttonClasses(
                "ghost",
                "default",
                "border border-foreground/15 bg-foreground text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-foreground/90 dark:border-white/20 dark:bg-white/10 dark:text-background",
              )}
            >
              問い合わせる
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
