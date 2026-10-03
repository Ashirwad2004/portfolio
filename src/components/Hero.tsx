import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { links } from "../data/content";
import { HeroWorkflow } from "./HeroWorkflow";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const entrance = (delay = 0) => ({
    initial: reducedMotion ? false as const : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: .8, delay: reducedMotion ? 0 : delay, ease: [.22, 1, .36, 1] as const },
  });

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="shell">
        <div className="hero-layout">
          <div className="hero-copy">
            <motion.p className="hero-role" {...entrance()}><span />AI engineer & full-stack developer</motion.p>
            <motion.h1 id="hero-title" aria-label="Ashirwad Jha" {...entrance(.08)}><span className="hero-first-name" aria-hidden="true">𐌀𐌔𐋅𐌉𐌓Ꮤ𐌀𐌃</span><br /><span className="hero-surname">Jha<span className="name-dot">.</span><svg viewBox="0 0 240 24" aria-hidden="true"><motion.path d="M6 16 C58 5 141 5 231 10 M35 22 C111 13 168 14 208 17" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .75, delay: .6 }} /></svg></span></motion.h1>
            <motion.p className="hero-lead" {...entrance(.17)}>I make complicated things<br /><em>feel a little simpler.</em></motion.p>
            <motion.p className="hero-description" {...entrance(.25)}>From reading receipts with AI to keeping a fleet moving, I build the interfaces and systems that make a product work.</motion.p>
            <motion.div className="hero-actions" {...entrance(.32)}>
              <a className="button button-primary" href="#work">See my projects <ArrowDown size={17} /></a>
              <a className="hero-contact-link" href={"mailto:" + links.email}>Get in touch <ArrowUpRight size={17} /></a>
            </motion.div>
            <motion.p className="hero-location" {...entrance(.4)}>Python <span>·</span> React <span>·</span> Gemini <span>·</span> Built from interface to API.</motion.p>
          </div>
          <motion.div className="hero-visual" {...entrance(.2)}><HeroWorkflow /></motion.div>
        </div>
        <motion.div className="hero-experience-strip" {...entrance(.43)}>
          <p>Previously building at</p><div><span className="company-vyapar">vyapar<span>↗</span></span><span className="company-podtech">podtech<span>.</span></span><span className="company-onestop">1Stop<span> AI</span></span></div><a href="#experience">A little about my experience <ArrowUpRight size={14} /></a>
        </motion.div>
      </div>
    </section>
  );
}
