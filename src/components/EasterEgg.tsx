import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal } from "lucide-react";

interface TerminalLine {
  text: string;
  type: "input" | "output" | "error" | "success";
}

interface EasterEggProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EasterEgg({ isOpen, onClose }: EasterEggProps) {
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: "Ashirwad Jha Retro Terminal OS [v1.0.0]", type: "success" },
    { text: "Type 'help' to see list of available commands.", type: "output" },
    { text: "", type: "output" }
  ]);
  const [input, setInput] = useState("");
  const [isMatrixActive, setIsMatrixActive] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const newHistory = [...history, { text: `guest@ashirwad-jha:~$ ${trimmed}`, type: "input" as const }];
    const cmd = trimmed.toLowerCase();

    if (cmd === "help") {
      newHistory.push(
        { text: "Available commands:", type: "output" },
        { text: "  about   - Learn about my background in retro style", type: "output" },
        { text: "  skills  - Print core engineering capabilities", type: "output" },
        { text: "  matrix  - Trigger digital rain visual effect", type: "output" },
        { text: "  secret  - Read a secret easter egg message", type: "output" },
        { text: "  clear   - Clear terminal screen history", type: "output" },
        { text: "  exit    - Close terminal console session", type: "output" }
      );
    } else if (cmd === "about") {
      newHistory.push(
        { text: "Loading profile data...", type: "output" },
        { text: "Ashirwad Kumar Jha — Full Stack Developer AI Engineer based in Bangalore.", type: "success" },
        { text: "Specialized in building high-fidelity React dashboard platforms.", type: "output" },
        { text: "Has saved 30% dev times building custom component frameworks.", type: "output" },
        { text: "Current Status: Building AI financial agents and receipt scanner apps.", type: "output" }
      );
    } else if (cmd === "skills") {
      newHistory.push(
        { text: "Engineering Capabilities:", type: "output" },
        { text: "  [Frontend]  React, Next.js, TypeScript, TailwindCSS, Zustand", type: "success" },
        { text: "  [Backend]   FastAPI, Django, Flask, Node.js", type: "success" },
        { text: "  [Databases] Supabase, PostgreSQL, MongoDB", type: "success" },
        { text: "  [AI Models] Gemini 2.5 Flash, Vision OCR integration", type: "success" }
      );
    } else if (cmd === "matrix") {
      setIsMatrixActive(true);
      newHistory.push({ text: "Initializing matrix digital rain overlay...", type: "success" });
      setTimeout(() => {
        setIsMatrixActive(false);
      }, 5000);
    } else if (cmd === "secret") {
      newHistory.push(
        { text: "🤖 EASTER EGG INJECTED BY ANTIGRAVITY AGENT!", type: "success" },
        { text: "Why do programmers wear glasses?", type: "output" },
        { text: "Because they can't C#!", type: "success" }
      );
    } else if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else if (cmd === "exit") {
      onClose();
      return;
    } else {
      newHistory.push({ text: `Command not found: '${trimmed}'. Type 'help' for options.`, type: "error" });
    }

    setHistory(newHistory);
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  // Matrix falling letters effect
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9997] flex items-center justify-center p-4">
          {/* Blur backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Terminal Console Box */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative flex h-[50vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-emerald-500/35 bg-black font-mono text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.15)]"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-emerald-950 bg-neutral-950 px-4 py-2">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-emerald-500" />
                <span className="text-xs text-emerald-500">ashirwad@retro-os: ~</span>
              </div>
              <button 
                onClick={onClose}
                className="rounded p-0.5 text-zinc-500 hover:bg-neutral-900 hover:text-emerald-400"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* CRT overlay lines */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-15" />

            {/* Terminal Body */}
            <div 
              onClick={() => inputRef.current?.focus()}
              className="relative flex-1 overflow-y-auto p-4 space-y-1.5 text-sm no-scrollbar"
            >
              {isMatrixActive ? (
                <div className="absolute inset-0 bg-black text-center flex flex-col justify-center select-none overflow-hidden py-10 animate-pulse">
                  <div className="text-emerald-500 font-bold text-xl mb-4">CONNECTING TO THE MATRIX...</div>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="text-xs leading-none opacity-60 tracking-widest whitespace-nowrap overflow-hidden"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      {Array.from({ length: 45 }).map(() => String.fromCharCode(33 + Math.floor(Math.random() * 93))).join("")}
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {history.map((line, idx) => {
                    let color = "text-emerald-400";
                    if (line.type === "input") color = "text-white";
                    if (line.type === "error") color = "text-red-400";
                    if (line.type === "success") color = "text-cyan-400";

                    return (
                      <div key={idx} className={`${color} leading-relaxed break-all whitespace-pre-wrap`}>
                        {line.text}
                      </div>
                    );
                  })}
                  
                  {/* Active Prompt input */}
                  <div className="flex items-center text-white">
                    <span className="text-emerald-500 mr-2">guest@ashirwad-jha:~$</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyPress}
                      className="flex-1 bg-transparent text-white outline-none caret-emerald-400 border-none p-0 focus:ring-0 text-sm"
                      autoFocus
                    />
                  </div>
                  <div ref={bottomRef} />
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
