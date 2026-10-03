import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowUpRight, Pause, Play } from "lucide-react";

// Projected torus topology, drawn without a 3D library or remote assets.
export function NeuralSculpture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(.28);
  const pointerRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const reducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = frameRef.current;
    if (!canvas || !container) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const ctx = context;
    let width = 480;
    let height = 460;
    let frame = 0;
    let resizeFrame = 0;
    let lastDraw = 0;
    let rotation = rotationRef.current;
    let visible = true;
    const pointer = pointerRef.current;
    const columns = 52;
    const rows = 18;
    const points = Array.from({ length: columns * rows }, (_, index) => {
      const u = Math.floor(index / rows) / columns * Math.PI * 2;
      const v = index % rows / rows * Math.PI * 2;
      const radius = 1.08 + .43 * Math.cos(v);
      return { x: radius * Math.cos(u), y: .43 * Math.sin(v), z: radius * Math.sin(u) };
    });

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const tilt = .72 + pointer.y * .16;
      const turn = rotation + pointer.x * .22;
      const roll = -.42;
      const scale = Math.min(width, height) * .28;
      const projected = points.map(point => {
        const x = point.x * Math.cos(turn) - point.z * Math.sin(turn);
        const z = point.x * Math.sin(turn) + point.z * Math.cos(turn);
        const y = point.y * Math.cos(tilt) - z * Math.sin(tilt);
        const depth = point.y * Math.sin(tilt) + z * Math.cos(tilt);
        const perspective = 4.8 / (4.8 + depth);
        return {
          x: (x * Math.cos(roll) - y * Math.sin(roll)) * scale * perspective + width * .5,
          y: (x * Math.sin(roll) + y * Math.cos(roll)) * scale * perspective + height * .5,
          depth,
        };
      });
      for (let column = 0; column < columns; column++) {
        for (let row = 0; row < rows; row++) {
          const current = projected[column * rows + row];
          const nextColumn = projected[((column + 1) % columns) * rows + row];
          const nextRow = projected[column * rows + (row + 1) % rows];
          const alpha = .12 + ((1.6 - current.depth) / 3.2) * .38;
          ctx.lineWidth = .65;
          ctx.strokeStyle = "rgba(197,243,107," + alpha + ")";
          ctx.beginPath();
          ctx.moveTo(current.x, current.y);
          ctx.lineTo(nextColumn.x, nextColumn.y);
          ctx.moveTo(current.x, current.y);
          ctx.lineTo(nextRow.x, nextRow.y);
          ctx.stroke();
          if (column % 4 === 0 && row % 3 === 0) {
            ctx.beginPath();
            ctx.arc(current.x, current.y, current.depth < 0 ? 1.7 : 1, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(226,255,178," + Math.min(alpha * 1.6, .9) + ")";
            ctx.fill();
          }
        }
      }
      const highlight = projected[Math.floor((rotation * 10) % columns) * rows + 3];
      ctx.shadowBlur = 18;
      ctx.shadowColor = "#c5f36b";
      ctx.beginPath();
      ctx.arc(highlight.x, highlight.y, 3.2, 0, Math.PI * 2);
      ctx.fillStyle = "#e2ffb2";
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    function tick(timestamp: number) {
      frame = 0;
      if (!visible || document.hidden || reducedMotion || paused) return;
      if (timestamp - lastDraw >= 32) {
        rotation += .0028;
        rotationRef.current = rotation;
        pointer.x += (pointer.targetX - pointer.x) * .08;
        pointer.y += (pointer.targetY - pointer.y) * .08;
        draw();
        lastDraw = timestamp;
      }
      frame = requestAnimationFrame(tick);
    }
    function resume() {
      if (!frame && visible && !document.hidden && !reducedMotion && !paused) frame = requestAnimationFrame(tick);
    }
    function stop() { cancelAnimationFrame(frame); frame = 0; }
    function resize() {
      const rect = container!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(width * ratio);
      canvas!.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
    }
    function move(event: PointerEvent) {
      if (event.pointerType === "touch") return;
      const rect = container!.getBoundingClientRect();
      pointer.targetX = ((event.clientX - rect.left) / rect.width - .5) * 2;
      pointer.targetY = ((event.clientY - rect.top) / rect.height - .5) * 2;
    }
    function leave() { pointer.targetX = 0; pointer.targetY = 0; }
    function visibilityChange() { if (document.hidden) stop(); else resume(); }
    const resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(resize);
    });
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) resume(); else stop();
    });
    resize();
    resizeObserver.observe(container);
    intersectionObserver.observe(container);
    container.addEventListener("pointermove", move);
    container.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", visibilityChange);
    resume();
    return () => {
      stop();
      cancelAnimationFrame(resizeFrame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      container.removeEventListener("pointermove", move);
      container.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", visibilityChange);
    };
  }, [paused, reducedMotion]);

  return (
    <figure className="neural-figure">
      <div className="visual-topline mono"><span><span className="tiny-cross">+</span> IDEAS, INTERCONNECTED</span><span>FIG. 01</span></div>
      <div className="neural-frame" ref={frameRef}>
        <div className="orbital-guide orbital-guide-one" aria-hidden="true" />
        <div className="orbital-guide orbital-guide-two" aria-hidden="true" />
        <div className="neural-glow" aria-hidden="true" />
        <canvas ref={canvasRef} className="neural-canvas" aria-hidden="true" />
        <span className="visual-coordinate coordinate-top mono" aria-hidden="true">Y +01.08</span>
        <span className="visual-coordinate coordinate-bottom mono" aria-hidden="true">X −00.43</span>
        <span className="neural-tag tag-vision"><span />Vision</span>
        <span className="neural-tag tag-language"><span />Language</span>
        <span className="neural-tag tag-product"><span />Product</span>
      </div>
      <figcaption className="visual-caption"><div><span className="mono">THE INTERSECTION I BUILD AT</span><p>AI capability. Human usability.<ArrowUpRight size={14} /></p></div>{!reducedMotion && <button className="visual-pause" onClick={() => setPaused(!paused)} aria-label={paused ? "Play visual animation" : "Pause visual animation"}>{paused ? <Play size={13} /> : <Pause size={13} />}</button>}</figcaption>
    </figure>
  );
}
