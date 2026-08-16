import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 1200; // 1.2s total loading time
    const intervalTime = 15;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 600); // Wait for exit animation
          }, 300);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -100,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
        >
          {/* Decorative subtle gradient background in loader */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_60%)]" />

          <div className="relative flex flex-col items-center">
            {/* Monogram animation */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-zinc-800/80 bg-zinc-950/80 text-2xl font-semibold tracking-wider text-white shadow-2xl backdrop-blur-md"
            >
              <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">AJ</span>
            </motion.div>

            {/* Counter */}
            <div className="h-8 overflow-hidden">
              <motion.span 
                className="block text-4xl font-light tracking-tight tabular-nums"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {Math.round(progress)}%
              </motion.span>
            </div>

            {/* Progress line */}
            <div className="mt-4 h-[2px] w-48 overflow-hidden rounded-full bg-zinc-900">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-xs uppercase tracking-[0.25em] text-zinc-400"
            >
              Architecting Digital Experiences
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}