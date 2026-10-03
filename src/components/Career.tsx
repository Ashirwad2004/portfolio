import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Check, Copy, MapPin } from "lucide-react";
import { about, achievements, education, experience, featuredProject, links, skillGroups } from "../data/content";
import "./career.css";

const skillRows = [
  { label: "AI & language models", items: skillGroups[5].items },
  { label: "Python & APIs", items: ["Python", "FastAPI", "Django", "Flask", "Node.js"] },
  { label: "Interfaces", items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Redux Toolkit"] },
  { label: "Data & real time", items: ["PostgreSQL", "Supabase", "SQL", "WebSockets", "Recharts"] },
];

function HackathonSketch() {
  const reducedMotion = useReducedMotion();
  const draw = {
    initial: { pathLength: reducedMotion ? 1 : 0 },
    whileInView: { pathLength: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: reducedMotion ? 0 : 1.15, ease: "easeInOut" as const },
  };
  return (
    <aside className="about-field-note" aria-label="Hackathon achievement">
      <div className="field-note-heading"><span>FROM THE NOTEBOOK</span><span>Aug '23</span></div>
      <svg className="field-note-sketch" viewBox="0 0 330 180" fill="none" aria-hidden="true">
        <g stroke="#c5523a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <motion.path d="M38 84c21-31 55-31 77 0-22 32-56 32-77 0Z" {...draw} />
          <motion.circle cx="76" cy="84" r="14" {...draw} />
          <motion.circle cx="78" cy="81" r="4" fill="#c5523a" stroke="none" initial={{ opacity: reducedMotion ? 1 : 0 }} whileInView={{ opacity: 1, x: reducedMotion ? 0 : [0, 5, -3, 0] }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: reducedMotion ? 0 : 1.8, delay: reducedMotion ? 0 : 0.7 }} />
          <motion.path d="m76 42 1-9m-27 17-6-7m58 7 6-7M127 84h25m-5-4 5 4-5 4" {...draw} transition={{ ...draw.transition, delay: reducedMotion ? 0 : 0.15 }} />
          <motion.path d="M182 49h94c5 0 8 3 8 8v62h-110V57c0-5 3-8 8-8Z" {...draw} transition={{ ...draw.transition, delay: reducedMotion ? 0 : 0.2 }} />
          <motion.path d="M174 107h110m-63 12-3 12h24l-3-12m-29 15h41" {...draw} transition={{ ...draw.transition, delay: reducedMotion ? 0 : 0.25 }} />
          <motion.path d="m211 71 2 28 8-9 10 4-20-23Z" initial={{ opacity: reducedMotion ? 1 : 0 }} whileInView={{ opacity: 1, x: reducedMotion ? 0 : [-5, 8, -3, 0], y: reducedMotion ? 0 : [2, -5, 2, 0] }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: reducedMotion ? 0 : 1.8, delay: reducedMotion ? 0 : 0.7 }} />
          <motion.path d="m270 29 7-7m8 14 9-2m-9 15 9 3" {...draw} transition={{ ...draw.transition, delay: reducedMotion ? 0 : 0.6 }} />
        </g>
        <g fill="#77726a" fontSize="12" fontFamily="var(--font-serif), serif" fontStyle="italic"><text x="44" y="139">eye movement</text><text x="192" y="157">a hands-free mouse</text></g>
        <path d="M88 114c0 8-4 12-9 15m142 9-2 7" stroke="#77726a" strokeWidth="1" strokeLinecap="round" />
      </svg>
      <div className="field-note-caption"><span className="field-note-mark" aria-hidden="true">1st</span><div><h3>{achievements[0].title}</h3><p>A team of four. An eye-tracking mouse.<br />30 hours to make it work.</p></div></div>
      <p className="field-note-bottom">Winner among 30+ teams</p>
    </aside>
  );
}

export function Career() {
  const reducedMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 80%", "end 40%"] });
  const timelineProgress = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.25 });
  const reveal = {
    initial: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <section className="section career-section" id="experience" aria-labelledby="experience-heading">
        <div className="shell">
          <motion.div className="career-heading" {...reveal}>
            <p className="eyebrow">02 / EXPERIENCE</p>
            <div className="career-heading-grid"><h2 className="section-heading" id="experience-heading">Where I've worked.</h2><p className="section-description">Learning from real users, real deadlines,<br className="career-desktop-break" /> and the teams behind the product.</p></div>
          </motion.div>
          <div className="career-timeline" ref={timelineRef}>
            <motion.span className="career-timeline-progress" aria-hidden="true" style={{ scaleX: reducedMotion ? 1 : timelineProgress }} />
            {experience.map((job, index) => (
              <motion.article className="career-row" key={job.company} {...reveal}>
                <div className="career-date"><span>0{index + 1}</span><p>{job.period}</p></div>
                <div className="career-job"><h3>{job.company}</h3><p>{job.role}</p></div>
                <div className="career-impact"><ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section className="section about-section" id="about" aria-labelledby="about-heading">
        <div className="shell">
          <motion.div className="about-layout" {...reveal}>
            <div className="about-story">
              <p className="eyebrow">03 / THE PERSON BEHIND THE WORK</p>
              <h2 className="section-heading" id="about-heading">A little about me.</h2>
              <p className="about-intro">I'm Ashirwad, a developer who likes turning complicated workflows into things people can actually use.</p>
              <p className="about-paragraph">{about[0].replace("I'm a fullstack developer based in Bangalore,", "Based in Bangalore, I work across the full stack,")}</p>
              <p className="about-paragraph">{about[2].replace("Outside client work, I built FinFlow", `Outside client work, I built ${featuredProject.name}`)}</p>
              <div className="about-education"><span className="education-pencil" aria-hidden="true"><svg viewBox="0 0 30 30" fill="none"><path d="m8 20 13-13 3 3-13 13-5 1 2-4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="m18 10 3 3M8 20l3 3" stroke="currentColor" strokeWidth="1.4" /></svg></span><div><h3>{education.degree}</h3><p>{education.school}<span>{education.period.replace("-", "–")}</span></p></div></div>
              <p className="about-location"><MapPin size={13} aria-hidden="true" />Bangalore, India</p>
            </div>
            <HackathonSketch />
          </motion.div>
          <motion.div className="about-toolkit" {...reveal}>
            <div className="toolkit-heading"><h3>Tools I work with</h3><p>Picked to suit the problem.</p></div>
            <dl className="toolkit-rows">{skillRows.map((row) => <div className="toolkit-row" key={row.label}><dt>{row.label}</dt><dd>{row.items.map((item) => <span key={item}>{item}</span>)}</dd></div>)}</dl>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function BrandIcon({ brand }: { brand: "github" | "linkedin" }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {brand === "github" ? <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.94.1-.73.4-1.23.71-1.51-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.15-3.02-.11-.29-.5-1.43.11-2.98 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.55.22 2.69.11 2.98.72.79 1.15 1.79 1.15 3.02 0 4.33-2.63 5.28-5.14 5.56.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" /> : <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.53v16.94c0 .85.69 1.53 1.55 1.53h16.9c.86 0 1.55-.68 1.55-1.53V3.53c0-.85-.69-1.53-1.55-1.53ZM7.93 18.75H4.97V9.2h2.96v9.55ZM6.45 7.9a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.3 10.85h-2.96V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.49V9.2h2.84v1.3h.04c.4-.76 1.36-1.56 2.8-1.56 3 0 3.58 1.97 3.58 4.53v5.28Z" />}
    </svg>
  );
}

export function Contact() {
  const reducedMotion = useReducedMotion();
  const [copyState, setCopyState] = useState<"idle" | "copied" | "manual">("idle");
  const manualEmailRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (copyState === "manual") {
      manualEmailRef.current?.focus();
      manualEmailRef.current?.select();
    }
    if (copyState === "copied") {
      const timeout = window.setTimeout(() => setCopyState("idle"), 2400);
      return () => window.clearTimeout(timeout);
    }
  }, [copyState]);

  async function copyEmail() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(links.email);
      setCopyState("copied");
    } catch {
      const field = document.createElement("textarea");
      field.value = links.email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      let copied = false;
      try { copied = document.execCommand("copy"); } catch { /* Manual selection remains available below. */ }
      field.remove();
      setCopyState(copied ? "copied" : "manual");
    }
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="shell">
        <motion.div className="contact-content" initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }}>
          <p className="eyebrow">04 / SAY HELLO</p>
          <div className="contact-heading-row"><h2 id="contact-heading">Let's make<br />something <em>useful.</em></h2><svg className="contact-drawn-arrow" viewBox="0 0 170 170" fill="none" aria-hidden="true"><motion.path d="M25 146C37 110 103 135 126 45m-33 18 36-24 15 41" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: reducedMotion ? 1 : 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: reducedMotion ? 0 : 1.3, delay: reducedMotion ? 0 : 0.25, ease: "easeInOut" }} /></svg></div>
          <div className="contact-details">
            <p className="contact-description">Have an AI engineering role or a product in mind?<br />I'd love to hear about it.</p>
            <div className="contact-links">
              <div className="contact-email-row"><a className="contact-email" href={`mailto:${links.email}`}>{links.email}<ArrowUpRight aria-hidden="true" /></a><button className="contact-copy" onClick={copyEmail} type="button" aria-label={copyState === "copied" ? "Email copied" : "Copy email address"} title="Copy email address">{copyState === "copied" ? <Check size={17} /> : <Copy size={17} />}</button></div>
              <p className="contact-copy-status" role="status" aria-live="polite">{copyState === "copied" ? "Email copied." : copyState === "manual" ? "Select and copy the email below." : ""}</p>
              {copyState === "manual" && <input className="contact-manual-email" ref={manualEmailRef} aria-label="Email address to copy" value={links.email} readOnly onFocus={(event) => event.target.select()} />}
              <div className="contact-socials"><a href={links.linkedin} target="_blank" rel="noopener noreferrer"><BrandIcon brand="linkedin" />LinkedIn<ArrowUpRight size={14} aria-hidden="true" /></a><a href={links.github} target="_blank" rel="noopener noreferrer"><BrandIcon brand="github" />GitHub<ArrowUpRight size={14} aria-hidden="true" /></a></div>
            </div>
          </div>
        </motion.div>
        <footer className="career-footer"><p>Ashirwad Jha <span>AI & full-stack engineering</span></p><a href="#home">Back to top <span aria-hidden="true">↑</span></a></footer>
      </div>
    </section>
  );
}
