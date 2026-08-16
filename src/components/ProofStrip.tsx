import { ArrowUpRight, CheckCircle2, Gauge, Layers, Users } from "lucide-react";
import { operatingPrinciples, proofMetrics } from "../data/content";

const icons = [Users, Gauge, Layers, ArrowUpRight] as const;

export function ProofStrip() {
  return (
    <section className="section-y-tight relative z-10 border-y border-zinc-900 bg-black/20">
      <div className="page-shell">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofMetrics.map((metric, index) => {
            const Icon = icons[index] || ArrowUpRight;

            return (
              <div
                key={metric.label}
                className="glass-card rounded-xl border border-zinc-800/80 p-5"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                    Proof
                  </span>
                </div>

                <p className="font-mono text-3xl font-bold tracking-tight text-white">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-300">
                  {metric.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                  {metric.detail}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {operatingPrinciples.map((principle) => (
            <span
              key={principle}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-900 bg-zinc-950/60 px-3 py-1.5 text-[11px] font-semibold text-zinc-400"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
              {principle}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
