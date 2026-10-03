import { useEffect, useRef } from "react";
import { Printer, X } from "lucide-react";
import { education, experience, featuredProject, links, skillGroups } from "../data/content";

export function ResumeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen || !dialogRef.current) return;
    const dialog = dialogRef.current;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} className="resume-dialog" aria-labelledby="resume-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const rect = event.currentTarget.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
    }}>
      <div className="resume-toolbar">
        <span className="mono">ASHIRWAD / RESUME</span>
        <button className="button button-secondary" onClick={() => window.print()}><Printer size={14} />Print / Save PDF</button>
        <button ref={closeRef} className="resume-close" onClick={onClose} aria-label="Close resume"><X size={17} /></button>
      </div>
      <div className="resume-sheet">
        <h2 id="resume-title">Ashirwad Kumar Jha</h2>
        <p className="resume-role">AI Engineer & Full-stack Developer · Bengaluru, India</p>
        <div className="resume-links"><a href={"mailto:" + links.email}>{links.email}</a><a href={links.linkedin}>LinkedIn / ashiwadjha2004</a><a href={links.github}>GitHub / Ashirwad2004</a></div>
        <section>
          <h3>Profile</h3>
          <p>Full-stack engineer building useful AI integrations with Gemini text and vision, Python APIs, and React / TypeScript. Experience across fintech and AI product teams, with a focus on reliable interfaces and practical automation.</p>
        </section>
        <section>
          <h3>Experience</h3>
          {experience.map(job => <article className="resume-job" key={job.company}><div className="resume-job-heading"><h4>{job.company} / {job.role}</h4><span>{job.period}</span></div><ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></article>)}
        </section>
        <section>
          <h3>Selected AI project</h3>
          <h4>{featuredProject.name} / {featuredProject.subtitle}</h4>
          <p>{featuredProject.description}</p>
          <ul><li>Gemini Vision extracts merchant, amount, date, and category from receipt photos.</li><li>Natural-language expense entry, compound transaction splitting, and accounting questions using financial context.</li></ul>
          <p className="mono" style={{ fontSize: 9, marginTop: 10 }}>{featuredProject.stack}</p>
        </section>
        <section>
          <h3>Technical skills</h3>
          <div className="resume-skill-grid">{[skillGroups[5], skillGroups[2], skillGroups[0], skillGroups[1], skillGroups[3], skillGroups[4]].map(group => <div key={group.label}><h4>{group.label}</h4><p>{group.items.join(", ")}</p></div>)}</div>
        </section>
        <section><h3>Education</h3><h4>{education.degree}</h4><p>{education.school} / {education.period}</p></section>
      </div>
      <p className="resume-note">Use Print / Save PDF to keep a copy of this resume.</p>
    </dialog>
  );
}
