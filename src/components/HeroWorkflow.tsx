import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";
import { ArrowUpRight, ArrowRight, Check, FileText, ScanLine, Split } from "lucide-react";

const samples = [
  { id: "text", label: "Text entry", icon: FileText, title: "Start with your own words.", input: "Rs 1200 electricity bill", kind: "Your words", result: "One expense. Ready to record.", entries: [{ label: "Electricity", detail: "Utilities · Expense", amount: "₹1,200" }] },
  { id: "receipt", label: "Receipt scan", icon: ScanLine, title: "Let the receipt do the typing.", input: "Electricity bill", kind: "Sample receipt", result: "The details, without the typing.", entries: [{ label: "Electricity", detail: "Utilities · Receipt", amount: "₹1,200" }] },
  { id: "split", label: "Split an expense", icon: Split, title: "Two entries. One sentence.", input: "Spent Rs 400 on cab, Rahul owes Rs 500", kind: "Your words", result: "Each entry in its right place.", entries: [{ label: "Cab ride", detail: "Travel · Expense", amount: "₹400" }, { label: "Rahul owes", detail: "Debt to collect", amount: "₹500" }] },
] as const;

export function HeroWorkflow() {
  const [selected, setSelected] = useState(0);
  const reducedMotion = useReducedMotion();
  const sample = samples[selected];
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 110, damping: 22 });
  const springY = useSpring(pointerY, { stiffness: 110, damping: 22 });
  const rotateX = useTransform(springY, [-1, 1], [3, -3]);
  const rotateY = useTransform(springX, [-1, 1], [-4, 4]);

  const moveScene = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1)));
    pointerY.set(Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1)));
  };
  const resetScene = () => { pointerX.set(0); pointerY.set(0); };
  return (
    <section className="workflow-preview" aria-label="Project workflow preview">
      <div className="workflow-heading"><span className="workflow-handwritten">A little less busywork.</span><span className="workflow-project">From RupeBill <ArrowUpRight size={12} /></span></div>
      <div className="workflow-stage" onPointerMove={moveScene} onPointerLeave={resetScene}>
        <motion.div className="workflow-scene" style={reducedMotion ? undefined : { rotateX, rotateY }}>
        <div className="workflow-color-field" aria-hidden="true" />
        <div className="workflow-grid" aria-hidden="true" />
        <svg className="workflow-connector" viewBox="0 0 550 480" fill="none" aria-hidden="true">
          <motion.path key={sample.id} d="M85 299 C30 364 99 415 173 359 C240 305 283 344 364 345" stroke="#c5523a" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 6" initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: .8, delay: .18 }} />
          <path d="M355 337 L366 345 L355 353" stroke="#c5523a" strokeWidth="2" strokeLinecap="round" />
          <path d="M454 89 C481 68 476 52 492 43 M491 54 L492 41 L478 43" stroke="#938977" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <motion.div className="workflow-source" initial={reducedMotion ? false : { opacity: 0, rotate: -12, y: 35 }} animate={{ opacity: 1, rotate: -7, y: 0 }} transition={{ type: "spring", stiffness: 80, damping: 17, delay: .3 }}>
          <div className="paper-fold" aria-hidden="true" />
          <div className="source-caption"><FileText size={15} strokeWidth={1.4} /><span>{sample.kind}</span></div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={sample.id} className="source-content" initial={reducedMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reducedMotion ? 0 : -6 }} transition={{ duration: .16 }}>
              {sample.id === "receipt" ? <div className="sample-receipt"><span className="receipt-word">ELECTRICITY</span><div className="receipt-rule" /><p>Monthly bill</p><div className="receipt-total"><span>TOTAL</span><strong>₹1,200</strong></div><div className="receipt-barcode" aria-hidden="true" /></div> : <p className="sample-words">“{sample.input}”</p>}
            </motion.div>
          </AnimatePresence>
          <div className="source-bottom"><span className="source-dashes" aria-hidden="true" /><span>No spreadsheet required.</span></div>
        </motion.div>
        <motion.div className="workflow-result" initial={reducedMotion ? false : { opacity: 0, rotate: 7, y: 40 }} animate={{ opacity: 1, rotate: 3, y: 0 }} transition={{ type: "spring", stiffness: 80, damping: 18, delay: .5 }}>
          <div className="result-heading"><span className="result-monogram">R</span><span>RupeBill</span><span className="result-check"><Check size={12} /></span></div>
          <div className="result-body" aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={sample.id} initial={reducedMotion ? false : { opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reducedMotion ? 0 : -6 }} transition={{ duration: .18 }}>
                <p className="result-label">{sample.result}</p>
                {sample.entries.map(entry => <div className="result-entry" key={entry.label}><span className="entry-mark">{entry.label === "Rahul owes" ? "↗" : "↙"}</span><div><strong>{entry.label}</strong><p>{entry.detail}</p></div><span className="entry-amount">{entry.amount}</span></div>)}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="result-footer"><span>AI-assisted bookkeeping</span><ArrowRight size={13} /></div>
        </motion.div>
        <motion.div className="workflow-engine" initial={reducedMotion ? false : { opacity: 0, scale: .85, rotate: -9 }} animate={{ opacity: 1, scale: 1, rotate: -4 }} transition={{ duration: .55, delay: .7 }} aria-hidden="true">
          <svg viewBox="0 0 28 28" fill="none"><path d="M14 2C14 9 9 14 2 14C9 14 14 19 14 26C14 19 19 14 26 14C19 14 14 9 14 2Z" fill="currentColor" /></svg>
          <span>Gemini<span>Text + vision</span></span>
        </motion.div>
        <span className="workflow-margin-note">Less admin,<br />more doing.</span>
        </motion.div>
      </div>
      <div className="workflow-controls" role="group" aria-label="Choose a RupeBill sample">
        {samples.map((item, index) => { const Icon = item.icon; return <button key={item.id} className={selected === index ? "sample-pick is-selected" : "sample-pick"} aria-pressed={selected === index} aria-label={item.label} onClick={() => setSelected(index)}><Icon size={14} strokeWidth={1.5} /><span>{item.label}</span></button>; })}
      </div>
      <div className="workflow-footnote"><span>Try a sample ↑</span><p>Interaction preview · sample data</p></div>
    </section>
  );
}
