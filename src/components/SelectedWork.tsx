import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { bankBiProject, featuredProject, logiFlowProject, secondaryProject } from "../data/content";
import { ProjectStudy } from "./ProjectStudy";
import "./selected-work.css";

function Github({ size = 20 }: { size?: number; "aria-hidden"?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.11.67-3.77-1.32-3.77-1.32-.5-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.62 1.22 3.26.93.1-.73.39-1.22.71-1.5-2.48-.28-5.1-1.24-5.1-5.54 0-1.22.43-2.22 1.15-3-.11-.29-.5-1.42.11-2.95 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.53.22 2.66.11 2.95.72.78 1.15 1.78 1.15 3 0 4.31-2.62 5.26-5.12 5.54.4.35.76 1.03.76 2.07v3.09c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
    </svg>
  );
}

interface ProjectDetails {
  name: string;
  subtitle: string;
  description: string;
  stack: string;
  href: string;
  github: string;
  image: string;
  category: string;
  summary: string;
  features: readonly { title: string; description: string }[];
  tone: string;
  note: string;
}

const rupeBill: ProjectDetails = {
  ...featuredProject,
  github: "https://github.com/Ashirwad2004/finflow-tracker-00",
  image: "/rupe_bill.png",
  category: "Finance & applied AI",
  summary: "A virtual accountant for the everyday work of running a business. Track expenses, scan a receipt, or ask a question about your cash flow in plain English.",
  tone: "lavender",
  note: "Less paperwork.\nMore clarity.",
};

const supportingProjects: ProjectDetails[] = [
  {
    ...secondaryProject,
    github: "https://github.com/Ashirwad2004/persional-chat-website",
    image: "/nexus_chat.png",
    category: "Real-time communication",
    summary: "A place for personal and community conversations. WebSockets keep messages moving in real time, with JWT authentication handling secure sign-in.",
    tone: "blue",
    note: "Keep the conversation going.",
  },
  {
    ...logiFlowProject,
    github: "https://github.com/Ashirwad2004/LogiFlow---Enterprise-Logistics-Management-System",
    image: "/logiflow.png",
    category: "Logistics & operations",
    summary: "A clearer view of a delivery network. Follow trucks, check hub capacity, and surface dispatch alerts so the next decision is easier to make.",
    tone: "sand",
    note: "A better view of what moves.",
  },
  {
    ...bankBiProject,
    github: "https://github.com/Ashirwad2004/bankBi",
    image: "/bankbi.png",
    category: "Data & banking intelligence",
    summary: "Turning dense banking ledgers into a readable picture of cash flow and risk. Structured balance sheets, useful charts, and exportable reports in one workspace.",
    tone: "sage",
    note: "Make the numbers make sense.",
  },
];

function ProjectDialog({ project, onClose }: { project: ProjectDetails; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, []);

  const trapFocus = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== "Tab") return;
    const elements = dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]');
    if (!elements?.length) return;
    const first = elements[0];
    const last = elements[elements.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const closeOnBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target !== dialogRef.current) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
  };

  return createPortal(
    <dialog ref={dialogRef} className="work-dialog no-lenis" data-lenis-prevent aria-labelledby="work-dialog-title" aria-describedby="work-dialog-description" onKeyDown={trapFocus} onClick={closeOnBackdrop} onCancel={(event) => { event.preventDefault(); onClose(); }}>
      <motion.div className="work-dialog-content" initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
        <header className="work-dialog-header">
          <div>
            <p className="work-kicker">Project details · {project.category}</p>
            <h2 id="work-dialog-title">{project.name}</h2>
            <p className="work-dialog-subtitle">{project.subtitle}</p>
          </div>
          <button ref={closeRef} className="work-close" onClick={onClose} aria-label="Close project details"><X size={20} aria-hidden="true" /></button>
        </header>
        <div className="work-dialog-body">
          <p id="work-dialog-description" className="work-dialog-description">{project.description}</p>
          <div className="work-dialog-features">
            {project.features.map((feature, index) => (
              <div className="work-dialog-feature" key={feature.title}>
                <span className="work-feature-index">0{index + 1}</span>
                <div><h3>{feature.title}</h3><p>{feature.description}</p></div>
              </div>
            ))}
          </div>
          <div className="work-dialog-stack">
            <span className="work-kicker">Built with</span>
            <div className="work-tags">{project.stack.split(", ").map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </div>
        <footer className="work-dialog-footer">
          <a className="button button-primary" href={project.href} target="_blank" rel="noreferrer">Visit product <ArrowUpRight size={17} aria-hidden="true" /></a>
          <a className="work-source-link" href={project.github} target="_blank" rel="noreferrer"><Github size={17} aria-hidden="true" /> Source code <ArrowUpRight size={14} aria-hidden="true" /></a>
        </footer>
      </motion.div>
    </dialog>,
    document.body,
  );
}

function ProjectCover({ project, featured = false, onOpen }: { project: ProjectDetails; featured?: boolean; onOpen: () => void }) {
  const coverRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: coverRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [14, -14]);

  return (
    <button ref={coverRef} className={`work-cover work-cover-${project.tone}${featured ? " work-cover-featured" : ""}`} onClick={onOpen} aria-label={`View ${project.name} project details`} aria-describedby={`study-disclosure-${project.name.toLowerCase()}`}>
      <span className="work-cover-caption" aria-hidden="true"><span>{project.name}</span><span>{project.category}</span></span>
      {featured && <span className="work-cover-statement" aria-hidden="true">{project.note}</span>}
      <motion.span className="work-cover-image" style={reduceMotion ? undefined : { y: imageY }}>
        <ProjectStudy kind={project.tone} />
      </motion.span>
      <span className="work-cover-open" aria-hidden="true"><ArrowUpRight size={23} /></span>
      <span id={`study-disclosure-${project.name.toLowerCase()}`} className="work-cover-footer">Interface study · sample data</span>
    </button>
  );
}

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const closeDialog = useCallback(() => setSelectedProject(null), []);
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 };

  return (
    <section className="section selected-work" id="work" aria-labelledby="selected-work-title">
      <div className="shell">
        <motion.div className="work-section-header" initial={reveal} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <div><p className="eyebrow">Selected projects</p><h2 id="selected-work-title" className="section-heading">A few things<br />I’ve <span className="work-heading-serif">built.</span></h2></div>
          <p className="section-description work-section-intro">From a photographed receipt to a live delivery network. Each project started with a workflow I wanted to make better.</p>
        </motion.div>

        <motion.article className="work-featured" initial={reveal} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65 }}>
          <ProjectCover project={rupeBill} featured onOpen={() => setSelectedProject(rupeBill)} />
          <div className="work-featured-info">
            <div className="work-featured-title">
              <p className="work-kicker"><span>01</span> {rupeBill.category}</p>
              <h3>{rupeBill.name}</h3>
              <p className="work-stack-text">React · TypeScript · Supabase · Gemini</p>
            </div>
            <div className="work-featured-copy">
              <p className="work-featured-description">{rupeBill.summary}</p>
              <p className="work-featured-detail">Gemini reads merchant, date, and total from receipt photos. Natural-language entries become structured transactions, ready to review.</p>
              <div className="work-project-links">
                <button onClick={() => setSelectedProject(rupeBill)}>About this project <ArrowRight size={17} aria-hidden="true" /></button>
                <a href={rupeBill.href} target="_blank" rel="noreferrer">Visit site <ArrowUpRight size={17} aria-hidden="true" /></a>
                <a href={rupeBill.github} target="_blank" rel="noreferrer" aria-label="RupeBill source code on GitHub"><Github size={17} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </motion.article>

        <div className="work-project-grid">
          {supportingProjects.map((project, index) => (
            <motion.article className={`work-project-card work-project-${project.tone}`} key={project.name} initial={reveal} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.6 }}>
              <ProjectCover project={project} onOpen={() => setSelectedProject(project)} />
              <div className="work-project-copy">
                <p className="work-kicker"><span>0{index + 2}</span> {project.category}</p>
                <div className="work-project-title"><h3>{project.name}</h3><a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} source code on GitHub`}><Github size={20} aria-hidden="true" /></a></div>
                <p className="work-project-description">{project.summary}</p>
                <p className="work-stack-text">{project.stack.split(", ").filter((item) => item !== "Tailwind CSS").slice(0, 3).join(" · ")}</p>
                <div className="work-project-links">
                  <button onClick={() => setSelectedProject(project)}>About this project <ArrowRight size={16} aria-hidden="true" /></button>
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name} site`}>Visit site <ArrowUpRight size={16} aria-hidden="true" /></a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      {selectedProject && <ProjectDialog project={selectedProject} onClose={closeDialog} />}
    </section>
  );
}

