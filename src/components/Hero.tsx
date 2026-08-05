import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { hero, links } from "../data/content";

// Local custom SVG components
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Move listener for lighting coordinates
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update custom properties for spotlight classes
      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // HTML5 Canvas Floating Particle Animation (60 FPS)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle class
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }

    const particles: Particle[] = [];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grids
      ctx.strokeStyle = "rgba(63, 63, 70, 0.04)";
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw floating spots
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 244, 245, ${p.opacity})`;
        ctx.fill();

        // Move
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      });

      // Animated radial mesh spot in the center
      const grad = ctx.createRadialGradient(
        width / 2,
        height / 3,
        0,
        width / 2,
        height / 3,
        width * 0.5
      );
      grad.addColorStop(0, "rgba(59, 130, 246, 0.03)"); // Cyan/Blue accent glow
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Text transition variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-transparent pt-32 pb-24 text-zinc-300 min-h-[95svh] flex items-center spotlight-card"
    >
      {/* Background Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Floating Ambient Aurora Glows */}
      <div className="aurora-bg">
        <div className="aurora-blob bg-blue-500/10 w-[450px] h-[450px] top-[10%] left-[5%]" />
        <div className="aurora-blob bg-purple-500/5 w-[500px] h-[500px] bottom-[15%] right-[10%]" />
      </div>

      <div className="relative mx-auto max-w-[76rem] px-6 lg:px-12 w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-16 lg:grid-cols-12 lg:gap-8"
        >
          {/* Main Info Columns */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Availability Badge */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-3.5 py-1.5 text-xs text-zinc-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold tracking-wide font-sans text-[10px] uppercase">
                Available for Full-time Roles
              </span>
            </motion.div>

            {/* Huge Serif Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-[clamp(2.75rem,6.5vw,4.75rem)] font-extrabold leading-[0.98] tracking-tight text-white"
            >
              Ashirwad Jha
              <span className="block mt-2 bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent font-sans text-[clamp(1.5rem,3.5vw,2.5rem)] font-light tracking-wide">
                Senior Frontend Developer
              </span>
            </motion.h1>

            {/* Description lines */}
            <div className="space-y-4 max-w-2xl pt-2">
              <motion.p
                variants={itemVariants}
                className="text-lg leading-snug text-zinc-200 font-sans"
              >
                {hero.headline}
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-sm leading-relaxed text-zinc-400 font-sans"
              >
                {hero.subheadline}
              </motion.p>
            </div>

            {/* Action buttons CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-6"
            >
              <a
                href="#work"
                className="group flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-xs font-semibold text-black transition-all hover:bg-zinc-200 clickable-element"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-5 py-3.5 text-xs font-semibold text-zinc-300 transition-all hover:border-zinc-700 hover:text-white clickable-element"
              >
                <span>Contact Me</span>
                <Mail className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Socials / Secondary Column */}
          <div className="flex flex-col justify-end lg:col-span-4 lg:items-end lg:pb-2">
            <motion.div
              variants={itemVariants}
              className="w-full border-t border-zinc-900 pt-6 lg:max-w-[240px] lg:border-t-0 lg:pt-0 lg:text-right"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-semibold mb-4 font-sans">
                Elsewhere
              </p>
              <ul className="space-y-3.5">
                <li>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-zinc-400 transition-colors hover:text-white lg:justify-end clickable-element"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span className="font-mono">GitHub</span>
                    <span className="text-[9px] text-zinc-600">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-zinc-400 transition-colors hover:text-white lg:justify-end clickable-element"
                  >
                    <LinkedinIcon className="h-4 w-4 text-blue-400" />
                    <span className="font-mono">LinkedIn</span>
                    <span className="text-[9px] text-zinc-600">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${links.email}`}
                    className="flex items-center gap-2 text-xs text-zinc-400 transition-colors hover:text-white lg:justify-end clickable-element"
                  >
                    <Mail className="h-4 w-4 text-accent" />
                    <span className="font-mono">Email</span>
                    <span className="text-[9px] text-zinc-600">↗</span>
                  </a>
                </li>
              </ul>

              {/* Cmd+K reminder */}
              <div className="hidden lg:block mt-12 text-[10px] text-zinc-500 font-sans leading-relaxed">
                Press <kbd className="rounded bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 font-mono text-[9px] text-zinc-400">⌘K</kbd> to launch the command menu.
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
