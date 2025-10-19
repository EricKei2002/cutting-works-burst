import Link from "next/link";
import { Reveal } from "../components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="w-full bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-[22px] md:text-[28px] font-semibold tracking-tight text-foreground">
            Contact
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 rounded-3xl border border-foreground/10 bg-surface p-8 text-center shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10">
            <p className="text-sm text-foreground/70">メールでのお問い合わせはこちら</p>
            <Link
              href="mailto:cutting.works.burst@gmail.com"
              className="mt-3 inline-block text-[20px] font-semibold tracking-wide text-foreground hover:underline hover:underline-offset-4"
            >
              cutting.works.burst@gmail.com
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
