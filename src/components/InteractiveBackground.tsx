import { useEffect, useRef } from "react";

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with easing spring physics
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, radius: 180 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Grid config
    const cols = Math.ceil(width / 50) + 1;
    const rows = Math.ceil(height / 50) + 1;
    const points: { x: number; y: number; baseX: number; baseY: number }[] = [];

    // Initialize grid points
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const x = c * 50;
        const y = r * 50;
        points.push({ x, y, baseX: x, baseY: y });
      }
    }

    const draw = () => {
      const isLight = document.documentElement.getAttribute("data-appearance") === "light";

      // Clear with subtle alpha trail for motion blur
      ctx.fillStyle = isLight ? "rgba(255, 255, 255, 1)" : "rgba(5, 5, 10, 1)";
      ctx.fillRect(0, 0, width, height);

      // Spring physics for mouse cursor trailing
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Draw background ambient color glows (Aurora lights)
      const grad1 = ctx.createRadialGradient(width * 0.2, height * 0.2, 0, width * 0.2, height * 0.2, width * 0.4);
      grad1.addColorStop(0, isLight ? "rgba(59, 130, 246, 0.07)" : "rgba(99, 102, 241, 0.08)");
      grad1.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(width * 0.8, height * 0.7, 0, width * 0.8, height * 0.7, width * 0.5);
      grad2.addColorStop(0, isLight ? "rgba(6, 182, 212, 0.045)" : "rgba(168, 85, 247, 0.05)");
      grad2.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Draw interactive warped mesh grid
      ctx.strokeStyle = isLight ? "rgba(0, 0, 0, 0.045)" : "rgba(99, 102, 241, 0.07)";
      ctx.lineWidth = 0.5;

      points.forEach((p) => {
        // Calculate distance from cursor
        const dx = mouse.x - p.baseX;
        const dy = mouse.y - p.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && mouse.x > 0) {
          // Warp point coordinate (gravity well repulsion/attraction)
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          const warp = force * 15; // displacement strength
          p.x = p.baseX - Math.cos(angle) * warp;
          p.y = p.baseY - Math.sin(angle) * warp;
        } else {
          // Smooth return to base
          p.x += (p.baseX - p.x) * 0.1;
          p.y += (p.baseY - p.y) * 0.1;
        }
      });

      // Draw mesh connection lines
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const idx = c * rows + r;
          const p = points[idx];

          if (!p) continue;

          // Connect right
          if (c < cols - 1) {
            const rightIdx = (c + 1) * rows + r;
            const pr = points[rightIdx];
            if (pr) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(pr.x, pr.y);
              ctx.stroke();
            }
          }

          // Connect down
          if (r < rows - 1) {
            const downIdx = c * rows + (r + 1);
            const pd = points[downIdx];
            if (pd) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(pd.x, pd.y);
              ctx.stroke();
            }
          }
        }
      }

      // Draw faint glowing grid nodes close to the cursor
      if (mouse.x > 0) {
        points.forEach((p) => {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.35;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = isLight ? `rgba(0, 0, 0, ${alpha * 0.42})` : `rgba(59, 130, 246, ${alpha})`;
            ctx.fill();
          }
        });
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none w-full h-full"
    />
  );
}