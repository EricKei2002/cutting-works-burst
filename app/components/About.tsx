import Image from "next/image";
import { Reveal } from "../components/Reveal";

export function About() {
  return (
    <section id="about" className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 px-8 py-10 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.6)] backdrop-blur-md transition-all duration-700 dark:border-white/10 dark:bg-slate-900/65">
            <span className="block h-[1px] w-16 bg-gradient-to-r from-sky-400 via-indigo-400 to-orange-400" />
            <h2 className="mt-5 text-[clamp(28px,4vw,36px)] font-semibold tracking-tight text-slate-900 dark:text-white">
              Service
            </h2>
            <ul className="mt-6 space-y-4 text-[15px] text-slate-600 dark:text-slate-300">
              <li>・切り文字ステッカー制作（車・看板・店舗・バイクなど）</li>
              <li>・オリジナルデザイン作成</li>
              <li>・データ持ち込み・入稿対応</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 px-8 py-10 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.6)] backdrop-blur-md transition-all duration-700 dark:border-white/10 dark:bg-slate-900/65">
            <p className="text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
              店舗のウィンドウサインや車両用ステッカー、イベント装飾など、幅広い用途に対応。
              既存デザインからの制作はもちろん、ゼロからのオリジナルデザインにも対応しています。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
