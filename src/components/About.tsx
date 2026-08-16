import { motion } from "framer-motion";
import { about } from "../data/content";
import { SectionHeader } from "./SectionHeader";
import { Users, Clock, ShieldCheck, Trophy, MapPin } from "lucide-react";

export function About() {
  const [lead, ...rest] = about;

  const stats = [
    {
      value: "1M+",
      label: "Business users served",
      description: "Vyapar platform B2B accounting scale",
      icon: Users,
      color: "text-blue-400 border-blue-500/10"
    },
    {
      value: "30%",
      label: "Team dev time saved",
      description: "Building reusable Podtech component library",
      icon: Clock,
      color: "text-purple-400 border-purple-500/10"
    },
    {
      value: "25%",
      label: "Platform UI errors cut",
      description: "Re-architecting form validations",
      icon: ShieldCheck,
      color: "text-emerald-400 border-emerald-500/10"
    },
    {
      value: "1st",
      label: "Hackathon Winner",
      description: "Eye-tracking mouse interface concept",
      icon: Trophy,
      color: "text-amber-400 border-amber-500/10"
    }
  ];

  return (
    <section id="about" className="section-y relative border-y border-zinc-900 bg-black/40">
      <div className="page-shell relative z-10">
        <SectionHeader index="02" title="About" />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Core story */}
          <div className="lg:col-span-5 space-y-6">
            <blockquote className="font-serif text-[clamp(1.25rem,2.2vw,1.65rem)] leading-snug tracking-tight text-white font-semibold">
              {lead}
            </blockquote>
            
            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed font-sans pt-4 border-t border-zinc-900">
              {rest.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono pt-4">
              <MapPin className="h-4 w-4 text-accent" />
              <span>Based in Bangalore, India (Tech Capital)</span>
            </div>
          </div>

          {/* Right Column: Bento Stats Grid */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat, idx) => {
                const StatIcon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="glass-card spotlight-card glass-card-hover rounded-xl p-5 border border-zinc-800/80 flex min-h-44 flex-col justify-between"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400">
                        <StatIcon className="h-4.5 w-4.5 text-zinc-500" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-600 uppercase">Impact</span>
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold font-mono tracking-tight text-white sm:text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-zinc-200">
                        {stat.label}
                      </p>
                      <p className="mt-0.5 text-[10px] text-zinc-500">
                        {stat.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
