import { useState } from "react";
import { Bot, ArrowRight, Eye } from "lucide-react";
import { featuredProject } from "../data/content";

interface FeaturedProjectProps {
  onOpenCaseStudy: () => void;
}

export function FeaturedProject({ onOpenCaseStudy }: FeaturedProjectProps) {
  const { name, subtitle, description, href } = featuredProject;

  // AI Chat simulation state
  const [chatMessages, setChatMessages] = useState<{ sender: "user" | "gemini"; text: string }[]>([
    { sender: "gemini", text: "Hi Ashirwad, I've scanned your recent receipts. What cash-flow metrics should I analyze?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const presetQuestions = [
    "Reconcile receipt #401",
    "Forecast August cashflow",
    "Split ₹2000 cab bill"
  ];

  const handleChatQuestion = (question: string) => {
    if (isTyping) return;
    setChatMessages((prev) => [...prev, { sender: "user", text: question }]);
    setIsTyping(true);

    let answer = "";
    if (question.includes("reconcile")) {
      answer = "Receipt #401 verified. Merchant: Flipkart (₹1,200), category: Office Utilities. Structured transaction logged successfully.";
    } else if (question.includes("Forecast")) {
      answer = "Based on ₹24,000 avg monthly spending and current inventory trends, August cashflow is forecasted positive (+₹18,500).";
    } else {
      answer = " Cab bill split: Ashirwad (₹1,000), Rahul (₹1,000). Dated entry added to Ledger.";
    }

    setTimeout(() => {
      setChatMessages((prev) => [...prev, { sender: "gemini", text: answer }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <article className="group grid overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40 lg:grid-cols-12">
      
      {/* Left side: Project Info */}
      <div className="flex flex-col justify-between p-8 text-zinc-300 lg:col-span-5 lg:p-10 relative z-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-[9px] font-semibold tracking-wider text-accent uppercase border border-accent/20">
              Flagship Project
            </span>
            <span className="text-[10px] text-zinc-500 font-mono">React + Supabase</span>
          </div>

          <h3 className="mt-5 font-serif text-3xl font-bold tracking-tight text-white lg:text-4xl">
            {name}
          </h3>
          <p className="mt-1 text-sm text-zinc-400 font-semibold">{subtitle}</p>
          
          <p className="mt-6 text-sm leading-relaxed text-zinc-400">
            {description}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 border-y border-zinc-900 py-5">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Gemini AI</p>
              <p className="mt-1 text-xs text-zinc-300 leading-normal">Smart scan receipts & split bills via OCR</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Scale</p>
              <p className="mt-1 text-xs text-zinc-300 leading-normal">Interactive Ledger built for 1M+ active SMBs</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={onOpenCaseStudy}
            className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-xs font-semibold text-white hover:border-zinc-700 clickable-element"
          >
            <Eye className="h-4 w-4 text-zinc-400" />
            <span>Case Study</span>
          </button>
          
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-white px-4 py-2.5 text-xs font-semibold text-black hover:bg-zinc-200 clickable-element"
          >
            <span>Live App</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Right side: Interactive Dashboard Mockup */}
      <div className="lg:col-span-7 bg-zinc-950 border-t lg:border-t-0 lg:border-l border-zinc-900 p-6 md:p-8 flex flex-col justify-between min-h-[380px] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.06)_0%,transparent_60%)] pointer-events-none" />

        {/* Ledger Header Mockup */}
        <div className="relative z-10 flex items-center justify-between border-b border-zinc-900 pb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs font-mono font-semibold text-white">Virtual Accountant Desk</span>
          </div>
          <span className="text-[10px] font-mono text-zinc-500">Gemini 2.5 Flash API</span>
        </div>

        {/* Mock Chat Console */}
        <div className="relative z-10 flex-1 my-5 overflow-y-auto space-y-3.5 max-h-[220px] no-scrollbar flex flex-col justify-end">
          {chatMessages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex items-start gap-3.5 text-xs max-w-[85%] ${
                msg.sender === "user" ? "ml-auto flex-row-reverse" : ""
              }`}
            >
              <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-white ${
                msg.sender === "user" ? "bg-zinc-900 border border-zinc-800" : "bg-accent/15 text-accent border border-accent/25"
              }`}>
                {msg.sender === "user" ? "U" : <Bot className="h-3.5 w-3.5" />}
              </div>
              <div className={`rounded-xl p-3 leading-relaxed border ${
                msg.sender === "user" 
                  ? "bg-zinc-900 border-zinc-800 text-zinc-200" 
                  : "bg-zinc-950 border-zinc-900 text-zinc-300"
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono pl-10">
              <Bot className="h-3 w-3 animate-pulse" />
              <span>Gemini is generating response...</span>
            </div>
          )}
        </div>

        {/* Preset Prompt Suggestions */}
        <div className="relative z-10 space-y-3">
          <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Suggested Prompts</p>
          <div className="flex flex-wrap gap-2">
            {presetQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleChatQuestion(q)}
                className="rounded-lg border border-zinc-900 hover:border-zinc-800 bg-zinc-950 px-3 py-1.5 text-[11px] text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}