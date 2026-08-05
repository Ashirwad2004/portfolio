import { motion } from "framer-motion";
import { achievements, education } from "../data/content";
import { SectionHeader } from "./SectionHeader";
import { Award, Trophy, GraduationCap, Users, FileBadge } from "lucide-react";

export function Achievements() {
  const iconMap = [Trophy, Award, Users];

  return (
    <section className="py-24 lg:py-32 border-t border-zinc-900 bg-black/20">
      <div className="mx-auto max-w-[76rem] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* Left Side: Achievements List */}
          <div className="lg:col-span-7">
            <SectionHeader index="05" title="Achievements" className="mb-10" />

            <div className="grid gap-4.5 sm:grid-cols-2">
              {achievements.map(({ title, period, description }, idx) => {
                const IconComponent = iconMap[idx % iconMap.length] || Award;

                return (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                    className="glass-card spotlight-card glass-card-hover rounded-xl p-5 border border-zinc-800/80 flex flex-col justify-between h-[210px]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex h-8.5 w-8.5 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400">
                          <IconComponent className="h-4.5 w-4.5 text-accent" />
                        </div>
                        <span className="text-[10px] font-mono text-zinc-500">{period}</span>
                      </div>

                      <h4 className="text-sm font-semibold text-white leading-snug">{title}</h4>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-450 line-clamp-3">
                        {description}
                      </p>
                    </div>

                    <div className="text-[10px] font-mono text-zinc-650 uppercase tracking-wider mt-4">
                      Credentials Verified
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Education Bento Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <SectionHeader index="06" title="Education" className="mb-10" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card spotlight-card rounded-2xl p-6 md:p-8 border border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-950 to-accent/5 h-[340px] flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 text-accent mb-6">
                    <GraduationCap className="h-5.5 w-5.5" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white tracking-tight leading-tight">
                    {education.degree}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 font-semibold">{education.school}</p>
                  <p className="mt-1 text-xs text-zinc-500 font-mono tracking-wide">{education.period}</p>
                </div>

                <div className="border-t border-zinc-900 pt-5 flex items-center justify-between text-[11px] text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <FileBadge className="h-4 w-4 text-emerald-400" />
                    <span>Graduation GPA: First Class</span>
                  </div>
                  <span className="font-mono text-zinc-600">Veltech '25</span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}