import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Overview } from "./components/Overview";
import { Features } from "./components/Features";
import { Stats } from "./components/Stats";
import { Beta } from "./components/Beta";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "#FAF8F3", color: "#1C1915" }}
    >
      <Navbar />
      <Hero />
      <Overview />
      <Features />
      <Stats />
      <Beta />
      <Footer />
    </div>
  );
}
