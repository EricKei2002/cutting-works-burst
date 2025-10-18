import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}
