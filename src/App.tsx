import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ShowreelModal from "./components/ShowreelModal";

export default function App() {
  const [reelOpen, setReelOpen] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#E5E5E5] antialiased">
      <Nav />
      <main>
        <Hero onPlayReel={() => setReelOpen(true)} />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ShowreelModal open={reelOpen} onClose={() => setReelOpen(false)} />
    </div>
  );
}
