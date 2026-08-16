import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldAlert, Cpu, Award } from "lucide-react";

interface CaseStudy {
  name: string;
  subtitle: string;
  description: string;
  problem: string;
  stack: string;
  architecture: string[];
  challenges: string[];
  results: string[];
  metrics?: { label: string; value: string }[];
  href: string;
}

interface CaseStudyModalProps {
  project: CaseStudy | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[9995] flex items-center justify-center p-4 md:p-6 lg:p-10">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Close button inside background */}
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 z-10 rounded-full border border-zinc-800 bg-zinc-950 p-2 text-zinc-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Main Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl"
          >
            {/* Header image banner mock */}
            <div className="relative h-44 w-full bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-purple-900/40 flex items-end p-6 border-b border-zinc-900 md:h-52">
              {/* Mesh blur overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15)_0%,transparent_60%)]" />
              <div className="relative">
                <span className="rounded-full bg-accent/20 px-3 py-1 text-[11px] font-semibold tracking-wider text-accent uppercase border border-accent/20">
                  Case Study
                </span>
                <h3 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">{project.subtitle}</p>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="no-scrollbar flex-1 overflow-y-auto p-6 md:p-10 space-y-10">
              {/* Intro section */}
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-4">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold">Overview</h4>
                  <p className="text-zinc-300 text-sm leading-relaxed">{project.description}</p>
                </div>
                <div className="space-y-4 rounded-xl border border-zinc-900 bg-zinc-950/50 p-5">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold font-sans">Technology Stack</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-mono">{project.stack}</p>
                </div>
              </div>

              {/* Metrics Grid */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-xl border border-zinc-900 bg-zinc-900/30 p-5 text-center">
                      <p className="text-2xl font-bold tracking-tight text-white font-mono">{metric.value}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">{metric.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Detail Blocks */}
              <div className="grid gap-8 md:grid-cols-2">
                {/* Problem Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/5 text-red-400">
                      <ShieldAlert className="h-4 w-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-white">The Problem & Context</h4>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{project.problem}</p>
                </div>

                {/* Architecture Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/5 text-blue-400">
                      <Cpu className="h-4 w-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-white">Architecture & Solutions</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    {project.architecture.map((layer, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <span className="text-accent font-semibold font-mono">0{idx+1}.</span>
                        <span>{layer}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Challenges and Results */}
              <div className="grid gap-8 md:grid-cols-2 border-t border-zinc-900 pt-8">
                {/* Engineering Challenges */}
                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold">Engineering Challenges</h4>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="relative pl-5">
                        <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-zinc-800" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Deliverables & Outcomes */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/5 text-emerald-400">
                      <Award className="h-4 w-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-white">Key Outcomes & Results</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    {project.results.map((outcome, idx) => (
                      <li key={idx} className="relative pl-5">
                        <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer with links */}
            <div className="flex items-center justify-between border-t border-zinc-900 bg-zinc-950/80 px-6 py-4 md:px-10">
              <span className="text-xs text-zinc-500">Case Study — Ashirwad Jha</span>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black transition-colors hover:bg-zinc-200"
              >
                <span>Launch Application</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}