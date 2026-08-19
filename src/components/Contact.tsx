import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Phone } from "lucide-react";
import { links } from "../data/content";
import { SectionHeader } from "./SectionHeader";

// Local custom SVG components
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;

    const mailtoUrl = `mailto:${links.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl, "_blank");

    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 300);
  };

  return (
    <section
      id="contact"
      className="relative bg-transparent pt-24 pb-20 text-zinc-300 lg:pt-32 lg:pb-28 overflow-hidden border-t border-zinc-900 spotlight-card"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative mx-auto max-w-[76rem] px-6 lg:px-12 z-10">
        <SectionHeader
          index="07"
          title="Contact"
          description="Interested in collaborating? Drop a message for engineering queries, freelancing, or contract assignments."
          dark
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* Left Column: Direct Info & Social Blocks */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="rounded-full bg-accent/20 px-3 py-1 text-[9px] font-semibold tracking-wider text-accent uppercase border border-accent/20">
                Direct Channel
              </span>

              {/* Email */}
              <a
                href={`mailto:${links.email}`}
                className="block font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-white transition-colors hover:text-accent whitespace-nowrap leading-tight clickable-element"
              >
                {links.email}
              </a>

              {/* Phone Number */}
              <a
                href={`tel:${links.phone}`}
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-accent transition-colors clickable-element"
              >
                <Phone className="h-4 w-4" />
                <span>{links.phone}</span>
              </a>
            </div>

            {/* Availability Box */}
            <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-5 space-y-3 max-w-sm">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>

                <span className="text-xs font-semibold text-white">
                  Current Availability Status
                </span>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Open to discuss Fullstack contracts, or full-time
                opportunities.
              </p>
            </div>

            {/* Social Links */}
            <ul className="flex flex-wrap gap-4 text-xs font-sans">
              <li>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-zinc-900 bg-zinc-950/60 px-4 py-2.5 hover:border-zinc-800 hover:text-white transition-colors clickable-element"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </li>

              <li>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-zinc-900 bg-zinc-950/60 px-4 py-2.5 hover:border-zinc-800 hover:text-white transition-colors clickable-element"
                >
                  <LinkedinIcon className="h-4 w-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-zinc-850">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form state banners */}
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      className="rounded-xl bg-emerald-950/30 border border-emerald-500/20 p-4 flex gap-3 text-emerald-300 text-xs leading-relaxed"
                    >
                      <CheckCircle className="h-5 w-5 shrink-0 text-emerald-400" />

                      <div>
                        <p className="font-semibold text-white">
                          Message Shipped Successfully!
                        </p>

                        <p className="mt-0.5 text-zinc-400">
                          Thank you. I'll get back to you within 24 business
                          hours.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      className="rounded-xl bg-red-950/30 border border-red-500/20 p-4 flex gap-3 text-red-300 text-xs leading-relaxed"
                    >
                      <AlertCircle className="h-5 w-5 shrink-0 text-red-400" />

                      <div>
                        <p className="font-semibold text-white">
                          Validation Error
                        </p>

                        <p className="mt-0.5 text-zinc-400">
                          Please fill out all form inputs correctly before
                          submission.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Name Input */}
                <div className="relative">
                  <label
                    className={`absolute left-4 transition-all pointer-events-none text-zinc-550 ${
                      focusedField === "name" || formData.name
                        ? "top-1.5 text-[10px] text-accent uppercase font-bold"
                        : "top-4 text-xs"
                    }`}
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    required
                    value={formData.name}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-zinc-900 bg-zinc-950/80 px-4 pt-6 pb-2 text-xs text-zinc-100 placeholder-transparent outline-none focus:border-accent"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label
                    className={`absolute left-4 transition-all pointer-events-none text-zinc-550 ${
                      focusedField === "email" || formData.email
                        ? "top-1.5 text-[10px] text-accent uppercase font-bold"
                        : "top-4 text-xs"
                    }`}
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                    value={formData.email}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-zinc-900 bg-zinc-950/80 px-4 pt-6 pb-2 text-xs text-zinc-100 placeholder-transparent outline-none focus:border-accent"
                  />
                </div>

                {/* Message Input */}
                <div className="relative">
                  <label
                    className={`absolute left-4 transition-all pointer-events-none text-zinc-550 ${
                      focusedField === "message" || formData.message
                        ? "top-1.5 text-[10px] text-accent uppercase font-bold"
                        : "top-4 text-xs"
                    }`}
                  >
                    Your Message
                  </label>

                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-zinc-900 bg-zinc-950/80 px-4 pt-6 pb-2 text-xs text-zinc-100 placeholder-transparent outline-none focus:border-accent resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-xl bg-white hover:bg-zinc-200 disabled:bg-zinc-800 py-3.5 text-xs font-semibold text-black transition-colors flex items-center justify-center gap-2 clickable-element"
                >
                  <Send className="h-4 w-4" />

                  <span>
                    {status === "submitting"
                      ? "Transmission in Progress..."
                      : "Send Message"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Minimal Footer */}
        <footer className="mt-28 flex flex-col md:flex-row md:items-center justify-between border-t border-zinc-900 pt-8 text-[11px] text-zinc-550 font-mono gap-4">
          <p>
            © {new Date().getFullYear()} Ashirwad Kumar Jha. All Rights
            Reserved.
          </p>

          <div className="flex gap-4">
            <span></span>
            <span className="text-zinc-700">·</span>
          </div>
        </footer>
      </div>
    </section>
  );
}