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
    <section className="relative w-full overflow-hidden py-40 md:py-56 min-h-[90vh]">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src="/image.png"
          alt="スタジオ背景"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/35 to-black/10" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(249,115,22,0.25),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(255,255,255,0.05)_0%,transparent_40%,rgba(255,255,255,0.08)_100%)] mix-blend-screen" />
      <div className="hero-entry-overlay" data-active={isReady} aria-hidden />
      <div
        className="hero-entry relative z-10 mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12 text-white"
        data-active={isReady}
      >
        <Reveal>
          <div className="space-y-6 backdrop-blur-[2px]">
            <h1 className="text-[clamp(40px,6vw,76px)] font-semibold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.65)]">
              cutting works burst
            </h1>
            <p className="text-[clamp(18px,3vw,26px)] font-medium text-white/85 drop-shadow-[0_6px_20px_rgba(0,0,0,0.55)]">
              切り文字ステッカー&デザイン制作スタジオ。
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-white/80 drop-shadow-[0_6px_20px_rgba(0,0,0,0.55)]">
              お店看板、クルマやバイクのドレスアップなど、多彩なカッティングワークを1枚から丁寧に仕上げます。
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <Link
                href="#works"
                className={buttonClasses(
                  "default",
                  "default",
                  "bg-white/95 text-slate-900 shadow-lg shadow-black/25 transition-transform duration-300 hover:-translate-y-0.5",
                )}
              >
                作品を見る
              </Link>
              <Link
                href="#contact"
                className={buttonClasses(
                  "outline",
                  "default",
                  "border-white/70 text-white transition-transform duration-300 hover:-translate-y-0.5",
                )}
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-10 text-sm text-white/75">
            <div className="backdrop-blur-[2px]">
              <p className="text-xs uppercase tracking-[0.28em] text-white/55">Services</p>
              <p className="mt-2 text-base font-medium text-white/85">
                カッティングシート制作 / レタリングデザイン / 車両・店舗サイン施工
              </p>
            </div>
            <div className="backdrop-blur-[2px]">
              <p className="text-xs uppercase tracking-[0.28em] text-white/55">Based in</p>
              <p className="mt-2 text-base font-medium text-white/85">Nagano, Japan</p>
            </div>
            <div className="backdrop-blur-[2px]">
              <p className="text-xs uppercase tracking-[0.28em] text-white/55">Motto</p>
              <p className="mt-2 text-base font-medium text-white/85">
                コンパクトでも質感豊かで長く愛されるサインを。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
