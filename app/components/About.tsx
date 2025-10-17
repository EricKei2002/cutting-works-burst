"use client";

import Image from "next/image";
import { Reveal } from "../components/Reveal";

export function About() {
  return (
    <section id="about" className="w-full py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              About
            </h2>
            <p className="mt-4 text-foreground/80">
              ビジョン、強み、提供価値を端的に紹介。モーションとレイアウトで印象的に伝えます。
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-foreground/10">
            <Image
              src="/window.svg"
              alt="About image"
              fill
              className="object-contain p-10 dark:invert"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
