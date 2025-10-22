import type { Metadata } from "next";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { homeDescription } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata: Metadata = {
  description: homeDescription,
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
