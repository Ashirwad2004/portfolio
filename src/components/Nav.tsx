import { useState, useEffect } from "react";
import { Command, Menu, Moon, Sun, X } from "lucide-react";

interface NavProps {
  appearance: "dark" | "light";
  onToggleAppearance: () => void;
  onOpenPalette: () => void;
}

const sections = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "blog", label: "Journal" },
  { id: "contact", label: "Contact" },
] as const;

export function Nav({ appearance, onToggleAppearance, onOpenPalette }: NavProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll progress & scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Hide on scroll down, show on scroll up
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Track active section in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" } // trigger when section occupies main view
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-zinc-900/60 bg-black/65 backdrop-blur-md transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav
          className="page-shell flex items-center justify-between py-3.5 sm:py-4"
          aria-label="Primary Navigation"
        >
          {/* Logo monogram */}
          <a
            href="#"
            className="flex min-w-0 items-center gap-2 font-serif text-base tracking-tight text-white font-bold group sm:text-lg"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-sm font-semibold text-accent group-hover:border-accent/40 transition-colors">
              A
            </span>
            <span className="hidden sm:block">Ashirwad Jha</span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-6 text-xs text-zinc-400">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`transition-colors py-1 relative hover:text-white ${
                    activeSection === id ? "text-white font-semibold" : ""
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Action Tools */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
            <button
              onClick={onToggleAppearance}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-900 bg-zinc-950 text-zinc-400 transition-colors hover:border-zinc-800 hover:text-white clickable-element"
              title={appearance === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              aria-label={appearance === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {appearance === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Ctrl+K Command palette shortcut info */}
            <button
              onClick={onOpenPalette}
              className="hidden md:flex items-center gap-2 rounded-lg border border-zinc-900 bg-zinc-950 px-2.5 py-1.5 text-[11px] text-zinc-400 hover:border-zinc-800 hover:text-white transition-colors clickable-element"
              title="Open Command Palette"
            >
              <Command className="h-3.5 w-3.5" />
              <span>Search</span>
              <kbd className="rounded bg-zinc-900 px-1 text-[9px] font-mono border border-zinc-800">
                Ctrl K
              </kbd>
            </button>

            {/* Quick theme dot toggles */}
            <div className="hidden lg:flex items-center gap-1.5 border border-zinc-900 bg-zinc-950/40 p-1.5 rounded-lg">
              <button 
                onClick={() => document.documentElement.setAttribute("data-theme", "blue")}
                className="h-2.5 w-2.5 rounded-full bg-blue-500 hover:scale-120 transition-transform cursor-pointer"
                title="Cyber Blue Theme"
              />
              <button 
                onClick={() => document.documentElement.setAttribute("data-theme", "purple")}
                className="h-2.5 w-2.5 rounded-full bg-purple-500 hover:scale-120 transition-transform cursor-pointer"
                title="Midnight Purple Theme"
              />
              <button 
                onClick={() => document.documentElement.setAttribute("data-theme", "cyan")}
                className="h-2.5 w-2.5 rounded-full bg-cyan-500 hover:scale-120 transition-transform cursor-pointer"
                title="Stripe Cyan Theme"
              />
            </div>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Thin Scroll Progress Bar */}
        <div className="h-[2px] w-full bg-zinc-950">
          <div
            className="h-full bg-accent transition-all duration-75"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Mobile nav overlay menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 px-4 pt-20 md:hidden flex flex-col justify-between pb-[max(2rem,env(safe-area-inset-bottom))]">
          <ul className="space-y-5 pt-6 text-lg font-serif">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg py-2 text-zinc-400 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="space-y-6 border-t border-zinc-900 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPalette();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 border border-zinc-800 py-3.5 text-sm text-zinc-300"
            >
              <Command className="h-4.5 w-4.5" />
              <span>Open Command Palette</span>
            </button>

            <div className="flex justify-center gap-6">
              <button 
                onClick={() => changeThemeInMobile("blue")}
                className="h-5 w-5 rounded-full bg-blue-500 border border-white/20"
              />
              <button 
                onClick={() => changeThemeInMobile("purple")}
                className="h-5 w-5 rounded-full bg-purple-500 border border-white/20"
              />
              <button 
                onClick={() => changeThemeInMobile("cyan")}
                className="h-5 w-5 rounded-full bg-cyan-500 border border-white/20"
              />
            </div>

            <button
              onClick={() => {
                onToggleAppearance();
                setMobileMenuOpen(false);
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 border border-zinc-800 py-3.5 text-sm text-zinc-300"
            >
              {appearance === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
              <span>{appearance === "dark" ? "Use Light Mode" : "Use Dark Mode"}</span>
            </button>
          </div>
        </div>
      )}
    </>
  );

  function changeThemeInMobile(theme: string) {
    document.documentElement.setAttribute("data-theme", theme);
    setMobileMenuOpen(false);
  }
}
