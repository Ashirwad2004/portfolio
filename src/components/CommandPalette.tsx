import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Briefcase, 
  User, 
  Cpu, 
  Mail, 
  Palette, 
  FileText, 
  Terminal, 
  BookOpen, 
  Sparkles,
  Command
} from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface CommandItem {
  id: string;
  title: string;
  category: string;
  icon: React.ComponentType<any>;
  shortcut?: string;
  action: () => void;
}

interface CommandPaletteProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export function CommandPalette({ onOpenTerminal, onOpenResume }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Switch themes function
  const changeTheme = (themeName: string) => {
    document.documentElement.setAttribute("data-theme", themeName);
    setIsOpen(false);
  };

  const commands: CommandItem[] = [
    {
      id: "nav-work",
      title: "Go to Work Showcase",
      category: "Navigation",
      icon: Briefcase,
      action: () => {
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    },
    {
      id: "nav-about",
      title: "Go to About Me",
      category: "Navigation",
      icon: User,
      action: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    },
    {
      id: "nav-skills",
      title: "Go to Skills Dashboard",
      category: "Navigation",
      icon: Cpu,
      action: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    },
    {
      id: "nav-contact",
      title: "Go to Contact",
      category: "Navigation",
      icon: Mail,
      action: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    },
    {
      id: "theme-blue",
      title: "Switch to Electric Blue Accent",
      category: "Themes",
      icon: Palette,
      action: () => changeTheme("blue")
    },
    {
      id: "theme-purple",
      title: "Switch to Royal Purple Accent",
      category: "Themes",
      icon: Palette,
      action: () => changeTheme("purple")
    },
    {
      id: "theme-cyan",
      title: "Switch to Stripe Cyan Accent",
      category: "Themes",
      icon: Palette,
      action: () => changeTheme("cyan")
    },
    {
      id: "theme-emerald",
      title: "Switch to Emerald Green Accent",
      category: "Themes",
      icon: Palette,
      action: () => changeTheme("emerald")
    },
    {
      id: "resume-view",
      title: "Open Interactive Resume Preview",
      category: "Document",
      icon: FileText,
      shortcut: "R",
      action: () => {
        onOpenResume();
        setIsOpen(false);
      }
    },
    {
      id: "easter-terminal",
      title: "Launch Secret Developer CLI Terminal",
      category: "Easter Eggs",
      icon: Terminal,
      shortcut: "T",
      action: () => {
        onOpenTerminal();
        setIsOpen(false);
      }
    },
    {
      id: "blog-view",
      title: "Go to Articles & Blog",
      category: "Content",
      icon: BookOpen,
      action: () => {
        document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    },
    {
      id: "github-view",
      title: "Go to GitHub Analytics",
      category: "Content",
      icon: GithubIcon,
      action: () => {
        document.getElementById("github-section")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  ];

  // Filter commands
  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle palette: Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
          break;
        case "Enter":
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
          }
          break;
        case "Escape":
          e.preventDefault();
          setIsOpen(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands]);

  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Group commands by category
  const categories: { [key: string]: CommandItem[] } = {};
  filteredCommands.forEach((cmd) => {
    if (!categories[cmd.category]) {
      categories[cmd.category] = [];
    }
    categories[cmd.category].push(cmd);
  });

  // Flat list index resolver helper
  const getFlatIndex = (categoryName: string, itemIdx: number) => {
    let index = 0;
    const catKeys = Object.keys(categories);
    for (const key of catKeys) {
      if (key === categoryName) {
        return index + itemIdx;
      }
      index += categories[key].length;
    }
    return index;
  };

  return (
    <>
      {/* Floating Spotlight Shortcut Trigger on Page */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-6 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/90 text-zinc-400 shadow-2xl transition-all hover:border-accent hover:text-white sm:h-10 sm:w-10 md:hidden lg:flex"
        title="Open Command Palette (Ctrl+K)"
      >
        <Command className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9990] flex items-start justify-center pt-[15vh] px-4">
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              ref={containerRef}
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl"
            >
              {/* Search Header */}
              <div className="flex items-center border-b border-zinc-900 px-4 py-3">
                <Search className="mr-3 h-5 w-5 text-zinc-500" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectedIndex(0);
                  }}
                  className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 outline-none"
                />
                <div className="rounded bg-zinc-900 px-1.5 py-0.5 text-[10px] text-zinc-400 font-mono border border-zinc-800">
                  ESC
                </div>
              </div>

              {/* Suggestions List */}
              <div className="no-scrollbar max-h-[350px] overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-8 text-zinc-500">
                    <Sparkles className="mb-2 h-6 w-6 text-zinc-600" />
                    <p className="text-xs">No matching commands found.</p>
                  </div>
                ) : (
                  Object.keys(categories).map((catName) => (
                    <div key={catName}>
                      <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-zinc-500 font-semibold font-sans">
                        {catName}
                      </div>
                      <div className="space-y-0.5">
                        {categories[catName].map((cmd, itemIdx) => {
                          const flatIdx = getFlatIndex(catName, itemIdx);
                          const isSelected = flatIdx === selectedIndex;
                          const CmdIcon = cmd.icon;

                          return (
                            <button
                              key={cmd.id}
                              onClick={cmd.action}
                              onMouseEnter={() => setSelectedIndex(flatIdx)}
                              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors ${
                                isSelected 
                                  ? "bg-accent/10 text-white border border-accent/20" 
                                  : "text-zinc-400 border border-transparent"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <CmdIcon className={`h-4.5 w-4.5 ${isSelected ? "text-accent" : "text-zinc-500"}`} />
                                <span className="text-sm font-medium">{cmd.title}</span>
                              </div>
                              {cmd.shortcut && (
                                <span className="rounded bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 font-mono text-[10px] text-zinc-400 uppercase">
                                  {cmd.shortcut}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Shortcut footer help */}
              <div className="flex items-center justify-between border-t border-zinc-900 bg-zinc-950/80 px-4 py-2 text-[10px] text-zinc-500 font-sans">
                <div className="flex gap-2">
                  <span>↑↓ to navigate</span>
                  <span>↵ to select</span>
                </div>
                <span>Ctrl + K to toggle anywhere</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
