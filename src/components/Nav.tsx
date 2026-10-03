import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, FileText, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const sections = [
  { id: "work", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
] as const;

export function Nav({ onOpenResume }: { onOpenResume: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActiveSection(entry.target.id);
    }, { rootMargin: "-15% 0px -60% 0px" });
    for (const id of ["home", ...sections.map(section => section.id), "contact"]) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOnOutside = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!menuRef.current?.contains(target) && !menuButton.current?.contains(target)) setMenuOpen(false);
    };
    const closeOnResize = () => { if (window.innerWidth >= 800) setMenuOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("pointerdown", closeOnOutside);
    window.addEventListener("resize", closeOnResize);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("pointerdown", closeOnOutside);
      window.removeEventListener("resize", closeOnResize);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="shell nav-inner" aria-label="Main navigation">
        <a href="#home" className="wordmark" aria-label="Ashirwad Jha, home">
          <span className="monogram" aria-hidden="true">a<span>j</span></span>
          <span className="wordmark-name">Ashirwad Jha<span>Bengaluru, India</span></span>
        </a>
        <div className="desktop-navigation">
          {sections.map(({ id, label }) => (
            <a key={id} className={activeSection === id ? "nav-link is-active" : "nav-link"} href={"#" + id} aria-current={activeSection === id ? "location" : undefined}>{label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <button className="resume-trigger" onClick={onOpenResume}><FileText size={14} /><span>Resume</span><ArrowUpRight size={13} /></button>
          <a className="nav-contact" href="#contact">Say hello <ArrowUpRight size={16} /></a>
          <button ref={menuButton} className="menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls={menuOpen ? "mobile-navigation" : undefined}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div ref={menuRef} id="mobile-navigation" className="mobile-navigation" initial={reducedMotion ? false : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reducedMotion ? 0 : -8 }} transition={{ duration: .18 }}>
            {[...sections, { id: "contact", label: "Let’s talk" }].map(({ id, label }, index) => <a key={id} href={"#" + id} onClick={() => setMenuOpen(false)}><span className="mono">0{index + 1}</span>{label}<ArrowUpRight size={20} /></a>)}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
