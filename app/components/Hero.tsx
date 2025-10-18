"use client";

import { buttonClasses } from "@/lib/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Reveal } from "../components/Reveal";

export function Hero() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsReady(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="swup" className="transition-fade">
      <section className="relative w-full overflow-hidden py-48 md:py-56">
        <div
          className={`absolute inset-0 -z-10 transition-opacity duration-1000 ${isReady ? "opacity-0" : "opacity-100"}`}
        >
          <Image
            src="/BG HERO.png"
            alt="バックグラウンド"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div
          className={`hero-entry relative z-10 mx-auto grid min-h-[60vh] max-w-6xl items-center gap-10 px-6 text-white md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] transition-all duration-1000 ease-out ${isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          data-active={isReady}
        >
          <Reveal delay={0.5}>
            <div className="order-1 w-full md:order-2">
              <div className="relative mx-auto aspect-[3/4] w-full overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.45)] md:mx-0 md:aspect-[4/3]">
                <Image
                  src="/bg cwb.png"
                  alt="制作風景"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 40vw"
                  className="object-cover object-[50%_40%] scale-[1.15] md:scale-100"
                />
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="order-2 flex flex-col items-center gap-8 text-center md:order-1 md:items-start md:text-left">
              <div className="space-y-6 md:space-y-8">
                <h1 className="text-[clamp(40px,6vw,76px)] font-semibold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.65)]">
                  cutting works burst
                </h1>
                <p className="text-[clamp(18px,3vw,26px)] font-medium text-white/85 drop-shadow-[0_6px_20px_rgba(0,0,0,0.55)] lg:mt-4">
                  切り文字ステッカー&デザイン制作スタジオ。
                </p>
                <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/80 drop-shadow-[0_6px_20px_rgba(0,0,0,0.55)] md:mx-0">
                  お店看板、クルマやバイクのドレスアップなど、多彩なカッティングワークを1枚から丁寧に仕上げます。
                </p>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                <Link
                  href="#about"
                  className={buttonClasses(
                    "ghost",
                    "default",
                    "bg-white/10 text-white/90 border border-white/30 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/15",
                  )}
                >
                  About Us
                </Link>
                <Link
                  href="#works"
                  className={buttonClasses(
                    "ghost",
                    "default",
                    "bg-white/10 text-white/90 border border-white/30 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/15",
                  )}
                >
                  作品を見る
                </Link>
                <Link
                  href="#pricing"
                  className={buttonClasses(
                    "ghost",
                    "default",
                    "bg-white/10 text-white/90 border border-white/30 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/15",
                  )}
                >
                  料金表を見る
                </Link>
                <Link
                  href="#contact"
                  className={buttonClasses(
                    "ghost",
                    "default",
                    "bg-white/10 text-white/90 border border-white/30 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/15",
                  )}
                >
                  問い合わせる
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
