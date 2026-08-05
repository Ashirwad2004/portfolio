import { useState, useEffect } from "react";
import Lenis from "lenis";

// Existing refactored components
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";

// Newly implemented support & section components
import { LoadingScreen } from "./components/LoadingScreen";
import { CustomCursor } from "./components/CustomCursor";
import { CommandPalette } from "./components/CommandPalette";
import { EasterEgg } from "./components/EasterEgg";
import { ResumeModal } from "./components/ResumeModal";
import { GitHubSection } from "./components/GitHubSection";
import { Blog } from "./components/Blog";
import { Testimonials } from "./components/Testimonials";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (isLoading) return; // Wait until loading screen is finished

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      prevent: (node) => node.classList.contains("no-lenis"), // Exclude overlays
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <>
      {/* Premium Loading Screen Reveal */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="relative bg-black min-h-screen text-zinc-100 selection:bg-accent/30 selection:text-white">
          
          {/* Subtle noise grid texture overlay */}
          <div className="noise-overlay" />

          {/* Mouse Trailing Cursor */}
          <CustomCursor />

          {/* Floating Command Spotlight Search */}
          <CommandPalette 
            onOpenTerminal={() => setTerminalOpen(true)} 
            onOpenResume={() => setResumeOpen(true)}
          />

          {/* Secret Developer Console modal */}
          <EasterEgg 
            isOpen={terminalOpen} 
            onClose={() => setTerminalOpen(false)} 
          />

          {/* Printable Resume Reader Desk */}
          <ResumeModal 
            isOpen={resumeOpen} 
            onClose={() => setResumeOpen(false)} 
          />

          {/* Floating Navbar */}
          <Nav onOpenPalette={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))} />
          
          {/* Sections assembly */}
          <main className="relative z-10">
            <Hero />
            <Work />
            <About />
            <Skills />
            <Experience />
            <GitHubSection />
            <Testimonials />
            <Blog />
            <Achievements />
            <Contact />
          </main>
          
        </div>
      )}
    </>
  );
}

export default App;
