import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, MessageSquare, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarChar: string;
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote: "Improved payment ledger flows and validation behavior on a B2B accounting surface, reducing repeated user-facing UI issues by 25%.",
      author: "Vyapar",
      role: "Internship impact",
      company: "Vyapar",
      avatarChar: "V"
    },
    {
      quote: "Built reusable TypeScript and Tailwind components that gave the team a faster path for repeated product screens and reduced implementation time.",
      author: "Podtech",
      role: "Frontend systems work",
      company: "Podtech",
      avatarChar: "P"
    },
    {
      quote: "Mentored students in web fundamentals and shipped polished prototypes under hackathon pressure, including a winning eye-tracking interface concept.",
      author: "KLIC / Veltech",
      role: "Mentoring and hackathon work",
      company: "Veltech University",
      avatarChar: "K"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 lg:py-32 border-t border-zinc-900 overflow-hidden">
      <div className="mx-auto max-w-[76rem] px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold mb-3">
              <MessageSquare className="h-4.5 w-4.5" />
              <span>Work Signals</span>
            </div>
            <h2 className="font-serif text-4xl tracking-tight text-white md:text-5xl">
              Impact Notes
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
              Practical signals from internships, product work, and mentoring that show how Ashirwad contributes on real teams.
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-2.5 self-start">
            <button
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-white hover:text-white transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-white hover:text-white transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-8 md:p-12 border border-zinc-850 w-full max-w-3xl flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  {/* Five Star rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <Quote className="h-10 w-10 text-zinc-800" />
                </div>
                
                <p className="font-serif text-lg md:text-xl text-zinc-200 leading-relaxed italic">
                  "{testimonials[activeIndex].quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 text-white font-bold text-lg font-mono uppercase">
                  {testimonials[activeIndex].avatarChar}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{testimonials[activeIndex].author}</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {testimonials[activeIndex].role} at <span className="text-accent">{testimonials[activeIndex].company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}