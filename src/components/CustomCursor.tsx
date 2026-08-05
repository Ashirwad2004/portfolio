import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Mouse coords
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring physics for trailing effect
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable custom cursor on desktop screens with a mouse
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;
    
    setEnabled(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") || 
        target.closest('[role="button"]') ||
        target.classList.contains("clickable-element");
        
      setHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      {/* Outer glow aura */}
      <motion.div
        className="custom-cursor-glow"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Central pointer */}
      <motion.div
        className={`custom-cursor ${hovered ? "cursor-hover-active" : ""}`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
    </>
  );
}
