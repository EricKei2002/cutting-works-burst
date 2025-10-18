import Image from "next/image";
import { Reveal } from "../components/Reveal";

export function About() {
  return (
    <section id="about" className="w-full py-20 md:py-28 bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 px-8 py-10 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.6)] backdrop-blur-md transition-all duration-700 dark:border-white/10 dark:bg-slate-900/65">
            <span className="block h-[1px] w-16 bg-gradient-to-r from-sky-400 via-indigo-400 to-orange-400" />
            <h2 className="mt-5 text-[clamp(28px,4vw,36px)] font-semibold tracking-tight text-slate-900 dark:text-white">
              About
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
              ビジョン、強み、提供価値を端的に紹介。モーションとレイアウトで印象的に伝えます。
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200/40 bg-gradient-to-br from-slate-50 to-white shadow-[0_25px_60px_-45px_rgba(15,23,42,0.45)] transition-all duration-700 dark:border-white/10 dark:from-slate-900/70 dark:to-slate-900">
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.18),transparent_50%)]" />
            <Image
              src="/893.jpg"
              alt="施工風景"
              fill
              className="relative object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
