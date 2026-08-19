import { useEffect, useRef } from "react";
import { ExternalLink, Eye, Sparkles } from "lucide-react";

type ProjectCardProps = {
  name: string;
  problem: string;
  description: string;
  stack: string;
  href?: string;
  gitHref?: string;
  className?: string;
  image?: string;
  onOpenCaseStudy: () => void;
};

const projectOutcomes: Record<string, string> = {
  RupeBill: "AI bookkeeping workflow",
  NexusChat: "Realtime messaging system",
  LogiFlow: "Fleet operations console",
  BankBI: "Banking intelligence dashboard",
};

// Custom SVG Github icon to bypass lucide export differences
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function ProjectCard({
  name,
  problem,
  description,
  stack,
  href,
  gitHref,
  className = "",
  image,
  onOpenCaseStudy,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse coordinate tracker for card spotlight border effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty("--mouse-x", `${x}px`);
      cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    const cardEl = cardRef.current;
    if (cardEl) {
      cardEl.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (cardEl) {
        cardEl.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className={`group flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-950/40 p-6 md:p-8 spotlight-card glass-card glass-card-hover ${className}`}
    >
      <div>
        {image && (
          <div className="relative mb-6 overflow-hidden rounded-lg border border-zinc-900 bg-zinc-950 aspect-[16/10] flex items-center justify-center">
            <img 
              src={image} 
              alt={`${name} Screenshot`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur">
                <Sparkles className="h-3 w-3 text-accent" />
                {projectOutcomes[name] || "Production build"}
              </span>
            </div>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 text-[9px] font-mono text-zinc-400 uppercase">
             Case study
          </span>
          {gitHref && (
            <a 
              href={gitHref} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-650 hover:text-white transition-colors clickable-element"
              title="View GitHub Repository"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          )}
        </div>

        <h3 className="mt-4 font-serif text-2xl font-bold tracking-tight text-white">
          {name}
        </h3>
        
        <div className="mt-4 border-l border-accent/30 pl-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 font-sans">The Problem</p>
          <p className="mt-1 text-xs text-zinc-400 leading-normal">
            {problem}
          </p>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-zinc-300">
          {description}
        </p>
      </div>

      <div className="mt-8 pt-5 border-t border-zinc-900 flex flex-col gap-4">
        <div className="flex flex-wrap gap-1.5">
          {stack.split(",").map((tech) => (
            <span 
              key={tech} 
              className="rounded bg-zinc-950 px-2 py-0.5 text-[10px] font-mono text-zinc-500 border border-zinc-900"
            >
              {tech.trim()}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs mt-1.5">
          <button
            onClick={onOpenCaseStudy}
            className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors clickable-element"
          >
            <Eye className="h-3.5 w-3.5" />
            <span>View Decisions</span>
          </button>
          
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-semibold text-white hover:text-accent transition-colors clickable-element"
            >
              <span>Open Product</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            gitHref && (
              <a
                href={gitHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-semibold text-white hover:text-accent transition-colors clickable-element"
              >
                <span>View Repo</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )
          )}
        </div>
      </div>
    </article>
  );
}