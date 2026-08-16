import { motion } from "framer-motion";
import { skillGroups } from "../data/content";
import { SectionHeader } from "./SectionHeader";
import { Code, Layout, Server, Database, BarChart3, Bot, Sparkles } from "lucide-react";

export function Skills() {
  // Map labels to icons & descriptive taglines
  const categoryMeta: { 
    [key: string]: { 
      icon: React.ComponentType<any>; 
      description: string;
      level: string;
    } 
  } = {
    "Languages": {
      icon: Code,
      description: "Modern scripting and data querying languages.",
      level: "Proficient"
    },
    "Frontend": {
      icon: Layout,
      description: "Building reactive, high-performance UI layouts.",
      level: "Advanced"
    },
    "Backend": {
      icon: Server,
      description: "RESTful API routes and robust backend scripts.",
      level: "Intermediate"
    },
    "Data & Realtime": {
      icon: Database,
      description: "Databases, live socket channels, and storage solutions.",
      level: "Intermediate"
    },
    "Data Viz": {
      icon: BarChart3,
      description: "Interactive chart components and SVG visualizations.",
      level: "Advanced"
    },
    "AI / LLM": {
      icon: Bot,
      description: "Large Language Model prompting and receipt scanning OCR.",
      level: "Intermediate"
    }
  };

  return (
    <section id="skills" className="section-y">
      <div className="page-shell">
        <SectionHeader 
          index="03" 
          title="Skills" 
          description="A detailed view of tech stacks and libraries utilized in creating production applications."
        />

        {/* Skill Card Bento Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ label, items }, idx) => {
            const meta = categoryMeta[label] || { icon: Sparkles, description: "Engineering capabilities", level: "Intermediate" };
            const IconComponent = meta.icon;

            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="glass-card glass-card-hover spotlight-card rounded-2xl p-5 sm:p-6 border border-zinc-800/80 flex min-h-[250px] flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 text-accent">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 text-[9px] font-mono text-zinc-400 uppercase">
                      {meta.level}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white mb-1.5">{label}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2 mb-4">
                    {meta.description}
                  </p>
                </div>

                <div className="border-t border-zinc-900 pt-4 flex flex-wrap gap-1.5 mt-auto">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded bg-zinc-950 px-2 py-1 text-[10px] font-medium text-zinc-300 border border-zinc-900 hover:border-zinc-800 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}