import type { Metadata } from "next";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export const dynamic = "force-static";

export const metadata: Metadata = {
  description:
    "カッティングシートや看板制作の実績を一覧できる Cutting Works Burst の公式サイト。料金プランやお問い合わせ方法もこちらから。",
};

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Works />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
