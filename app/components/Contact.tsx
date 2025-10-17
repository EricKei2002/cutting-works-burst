"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="w-full py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-[22px] md:text-[28px] font-semibold tracking-tight">
            Contact
          </h2>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-[240px_1fr] gap-8 items-start">
          <Reveal>
            <div className="relative w-[200px] h-[200px] rounded-lg overflow-hidden border border-foreground/10 bg-white">
              <Image
                src="/file.svg"
                alt="QR Code"
                fill
                className="object-contain p-6"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-foreground hover:underline hover:underline-offset-4"
                >
                  X / Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground hover:underline hover:underline-offset-4"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground hover:underline hover:underline-offset-4"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
