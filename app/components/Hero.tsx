// cspell:ignore fafc
import { buttonClasses } from "@/lib/button";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../components/Reveal";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden pb-48 pt-16 md:pb-56 md:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(140deg,#f8fafc_0%,#e0f2fe_40%,#f5e7ff_80%,#ffffff_100%)] dark:bg-[linear-gradient(145deg,#020617_0%,#0b1224_55%,#111827_100%)]"
      />
      <div aria-hidden className="hero-aurora pointer-events-none absolute inset-0 -z-[15]">
        <span className="hero-aurora__item hero-aurora__item--one" />
        <span className="hero-aurora__item hero-aurora__item--two" />
        <span className="hero-aurora__item hero-aurora__item--three" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,0.32),transparent_58%),radial-gradient(circle_at_82%_12%,rgba(249,115,22,0.16),transparent_55%),radial-gradient(circle_at_12%_75%,rgba(59,130,246,0.18),transparent_55%)] opacity-90 mix-blend-screen dark:bg-[radial-gradient(circle_at_18%_24%,rgba(56,189,248,0.48),transparent_60%),radial-gradient(circle_at_78%_18%,rgba(249,115,22,0.35),transparent_58%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.32),transparent_62%)] dark:mix-blend-normal"
      />
      <div className="mx-auto grid min-h-[60vh] max-w-6xl items-center gap-10 px-6 text-foreground md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <Reveal delay={0.05}>
          <div className="order-1 w-full md:order-2">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[440px] overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white via-white/95 to-sky-50/80 shadow-[0_35px_80px_-40px_rgba(15,23,42,0.28)] backdrop-blur-[20px] transition dark:border-white/15 dark:bg-slate-900/40 dark:from-slate-900/60 dark:via-slate-900/60 dark:to-slate-950/60 dark:shadow-[0_40px_120px_-50px_rgba(0,0,0,0.6)] md:mx-0 md:max-w-[600px]">
              <Image
                src="/bg cwb.png"
                alt="制作風景"
                fill
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 45vw"
                className="object-cover object-[50%_40%] scale-[1.2] transition-transform duration-700 md:scale-[1.08]"
              />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="order-2 flex flex-col items-center gap-8 text-center md:order-1 md:items-start md:text-left">
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-[clamp(40px,6vw,76px)] font-semibold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-sky-600 bg-clip-text text-transparent drop-shadow-[0_15px_35px_rgba(79,126,181,0.35)] dark:bg-gradient-to-r dark:from-slate-50 dark:via-white dark:to-sky-200 dark:text-transparent dark:drop-shadow-[0_16px_40px_rgba(0,0,0,0.65)]">
                cutting works burst
              </h1>
              <p className="text-[clamp(18px,3vw,26px)] font-medium text-slate-600 drop-shadow-[0_12px_28px_rgba(148,163,184,0.28)] dark:text-slate-200 dark:drop-shadow-[0_8px_26px_rgba(0,0,0,0.55)] lg:mt-4">
                切り文字ステッカー&デザイン制作スタジオ。
              </p>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-500 drop-shadow-[0_10px_24px_rgba(148,163,184,0.22)] dark:text-slate-200/90 dark:drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)] md:mx-0">
                お店看板、クルマやバイクのドレスアップなど、多彩なカッティングワークを1枚から丁寧に仕上げます。
              </p>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <Link
                href="#about"
                className={buttonClasses(
                  "ghost",
                  "default",
                  "border border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-800 to-sky-700 text-white shadow-[0_18px_45px_-20px_rgba(15,23,42,0.65)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-20px_rgba(15,23,42,0.55)] dark:border-white/20 dark:bg-white/10 dark:bg-none dark:text-white dark:hover:bg-white/15",
                )}
              >
                About Us
              </Link>
              <Link
                href="#works"
                className={buttonClasses(
                  "ghost",
                  "default",
                  "border border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-800 to-sky-700 text-white shadow-[0_18px_45px_-20px_rgba(15,23,42,0.65)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-20px_rgba(15,23,42,0.55)] dark:border-white/20 dark:bg-white/10 dark:bg-none dark:text-white dark:hover:bg-white/15",
                )}
              >
                作品を見る
              </Link>
              <Link
                href="#pricing"
                className={buttonClasses(
                  "ghost",
                  "default",
                  "border border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-800 to-sky-700 text-white shadow-[0_18px_45px_-20px_rgba(15,23,42,0.65)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-20px_rgba(15,23,42,0.55)] dark:border-white/20 dark:bg-white/10 dark:bg-none dark:text-white dark:hover:bg-white/15",
                )}
              >
                料金表を見る
              </Link>
              <Link
                href="#contact"
                className={buttonClasses(
                  "ghost",
                  "default",
                  "border border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-800 to-sky-700 text-white shadow-[0_18px_45px_-20px_rgba(15,23,42,0.65)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-20px_rgba(15,23,42,0.55)] dark:border-white/20 dark:bg-white/10 dark:bg-none dark:text-white dark:hover:bg-white/15",
                )}
              >
                問い合わせる
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
