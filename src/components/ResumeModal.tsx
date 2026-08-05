import { motion, AnimatePresence } from "framer-motion";
import { X, Printer } from "lucide-react";
import { links, experience, education, skillGroups } from "../data/content";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9992] flex items-center justify-center p-4 md:p-6 lg:p-10 print:p-0">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md print:hidden"
          />

          {/* Close button inside background */}
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 z-10 rounded-full border border-zinc-800 bg-zinc-950 p-2 text-zinc-400 hover:text-white print:hidden"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Resume Frame Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl print:h-auto print:border-none print:bg-white print:text-black print:shadow-none"
          >
            {/* Header Toolbar */}
            <div className="flex items-center justify-between border-b border-zinc-900 bg-zinc-950 px-6 py-4 print:hidden">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-xs font-mono font-semibold text-white">Resume Desk — Ashirwad Jha</span>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2 text-xs text-zinc-300 hover:border-zinc-700 hover:text-white"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>Print / Save PDF</span>
                </button>
              </div>
            </div>

            {/* Resume Sheet (Scrollable) */}
            <div className="flex-1 overflow-y-auto bg-zinc-950 p-8 md:p-12 text-zinc-300 space-y-8 no-scrollbar print:overflow-visible print:bg-white print:p-0 print:text-black">
              
              {/* Header section */}
              <div className="border-b border-zinc-900 pb-6 print:border-black flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h1 className="font-serif text-3xl font-bold text-white print:text-black">Ashirwad Kumar Jha</h1>
                  <p className="text-sm text-accent font-semibold mt-1">Frontend Developer</p>
                  <p className="text-xs text-zinc-550 mt-1">Bangalore, Karnataka, India</p>
                </div>
                <div className="text-xs space-y-1 text-zinc-400 font-mono print:text-black">
                  <p>{links.email}</p>
                  <p>linkedin.com/in/ashiwadjha2004</p>
                  <p>github.com/Ashirwad2004</p>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h3 className="text-xs uppercase font-bold tracking-wider text-accent print:text-black">Professional Summary</h3>
                <p className="text-xs leading-relaxed text-zinc-400 print:text-black">
                  Frontend engineer with 1+ year experience shipping high-fidelity UI dashboards and scalable component libraries. Proficient in React, TypeScript, Next.js, and FastAPI. Specializes in receipt-scanning OCR models, AI accounting interfaces, and state-management optimizations.
                </p>
              </div>

              {/* Work History */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase font-bold tracking-wider text-accent border-b border-zinc-900 pb-2 print:text-black print:border-black">Professional Experience</h3>
                <div className="space-y-6">
                  {experience.map((exp) => (
                    <div key={exp.company} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold text-white print:text-black">
                        <h4>{exp.role} · <span className="text-accent">{exp.company}</span></h4>
                        <span className="font-mono text-zinc-555 text-[11px] print:text-black">{exp.period}</span>
                      </div>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-zinc-400 print:text-black">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx} className="leading-relaxed">{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase font-bold tracking-wider text-accent border-b border-zinc-900 pb-2 print:text-black print:border-black">Education</h3>
                <div className="flex items-center justify-between text-xs font-semibold text-white print:text-black">
                  <div>
                    <h4>{education.degree}</h4>
                    <p className="text-[11px] text-zinc-400 font-normal mt-0.5">{education.school}</p>
                  </div>
                  <span className="font-mono text-zinc-555 text-[11px] print:text-black">{education.period}</span>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase font-bold tracking-wider text-accent border-b border-zinc-900 pb-2 print:text-black print:border-black">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  {skillGroups.map((grp) => (
                    <div key={grp.label} className="space-y-1">
                      <h4 className="font-semibold text-zinc-200 print:text-black">{grp.label}</h4>
                      <p className="text-zinc-400 leading-normal print:text-black">{grp.items.join(", ")}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Print Notice Footer */}
            <div className="border-t border-zinc-900 bg-zinc-950/80 px-6 py-3 text-center text-[10px] text-zinc-650 print:hidden font-sans">
              System print layouts are optimized for standard US Letter and A4 PDF pages.
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
