import { motion } from "framer-motion";
import { experience } from "../data/content";
import { SectionHeader } from "./SectionHeader";
import { Briefcase, Calendar, CheckSquare } from "lucide-react";

export function Experience() {
  // Map company names to monograms and color accents
  const companyMeta: { [key: string]: { char: string; color: string } } = {
    "Vyapar": { char: "V", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
    "Podtech": { char: "P", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
    "1Stop AI": { char: "1", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" }
  };

  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden border-t border-zinc-900 bg-black/20">
      
      {/* Decorative vertical gradient line background */}
      <div className="absolute left-[39px] md:left-[55px] lg:left-1/2 top-48 bottom-24 w-[1px] bg-gradient-to-b from-zinc-800 via-accent/30 to-zinc-900/10 pointer-events-none" />

      <div className="mx-auto max-w-[76rem] px-6 lg:px-12 relative z-10">
        <SectionHeader index="04" title="Experience" />

        <div className="space-y-12 relative">
          {experience.map(({ company, role, period, bullets }, idx) => {
            const isEven = idx % 2 === 0;
            const meta = companyMeta[company] || { char: "C", color: "bg-zinc-800/10 text-zinc-400 border-zinc-700/20" };

            return (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col lg:flex-row items-start ${
                  isEven ? "" : "lg:flex-row-reverse"
                } relative gap-8 lg:gap-16`}
              >
                {/* Timeline node icon */}
                <div className="absolute left-[-5px] md:left-[11px] lg:left-1/2 lg:translate-x-[-50%] top-1 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 shadow-xl">
                  <Briefcase className="h-4.5 w-4.5 text-accent" />
                </div>

                {/* Left/Right Card column spacer */}
                <div className={`w-full lg:w-1/2 ${
                  isEven ? "lg:text-right lg:pr-8" : "lg:text-left lg:pl-8"
                } pl-12 lg:pl-0 pt-0.5`}
                >
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-mono font-semibold uppercase ${meta.color} mb-3.5`}>
                    <span className="font-bold">{meta.char}</span>
                    <span>{company}</span>
                  </span>
                  
                  <h3 className="font-serif text-2xl font-bold text-white tracking-tight">{role}</h3>
                  <div className={`flex items-center gap-2 text-xs text-zinc-500 font-mono mt-1.5 ${
                    isEven ? "lg:justify-end" : "lg:justify-start"
                  }`}>
                    <Calendar className="h-3.5 w-3.5 text-zinc-650" />
                    <span>{period}</span>
                  </div>
                </div>

                {/* Bullet Info Card column */}
                <div className="w-full lg:w-1/2 pl-12 lg:pl-0">
                  <div className="glass-card spotlight-card rounded-2xl p-6 border border-zinc-800/80 bg-zinc-950/20">
                    <ul className="space-y-4">
                      {bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex gap-3 text-xs md:text-sm text-zinc-400 leading-relaxed">
                          <CheckSquare className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}