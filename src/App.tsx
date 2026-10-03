import { useState } from "react";
import { MotionConfig, motion, useScroll } from "framer-motion";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { Career, Contact } from "./components/Career";
import { ResumeModal } from "./components/ResumeModal";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">Skip to content</a>
      <motion.div className="reading-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      <Nav onOpenResume={() => setResumeOpen(true)} />
      <main id="main">
        <Hero />
        <SelectedWork />
        <Career />
        <Contact />
      </main>
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </MotionConfig>
  );
}
