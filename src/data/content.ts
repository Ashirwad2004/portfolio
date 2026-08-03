export const links = {
  github: "https://github.com/Ashirwad2004",
  linkedin: "https://linkedin.com/in/ashiwadjha2004",
  email: "ashirwad.jha2004@gmail.com",
} as const;

export const projects = [
  {
    name: "LogiFlow",
    problem:
      "Warehouse teams lose time reconciling stock across zones with paper logs and spreadsheets.",
    description:
      "A warehouse management app for tracking inventory movement, zone assignments, and stock levels in one place.",
    stack: "React, TypeScript, Python, FastAPI",
    detail: "Role-based views for floor staff and supervisors",
    href: "#",
  },
  {
    name: "RupeeBill",
    problem:
      "Small businesses juggle separate tools for invoicing, GST filing, and customer notifications.",
    description:
      "SaaS billing platform with GSTR-1 filing, Supabase-backed auth, and WhatsApp order alerts through Meta's Cloud API.",
    stack: "React, FastAPI, Supabase",
    detail: "GST-compliant GSTR-1 export and real-time WhatsApp notifications",
    href: "#",
  },
  {
    name: "FinFlow",
    problem:
      "Teams need a single view of cash movement — not scattered bank exports and manual spreadsheets.",
    description:
      "Cash-flow tracker for inflows, outflows, and recurring expenses with category-level breakdowns.",
    stack: "React, TypeScript, Supabase",
    detail: "Recurring expense tracking with category breakdowns",
    href: "#",
  },
] as const;

export const experience = [
  {
    company: "Vyapar",
    role: "Frontend Intern",
    period: "2024",
    description:
      "Built UI for merchant-facing features on Vyapar's billing platform.",
  },
  {
    company: "Podtech",
    role: "Developer Intern",
    period: "2024",
    description:
      "Developed client web features and integrated external APIs.",
  },
  {
    company: "1Stop AI",
    role: "Intern",
    period: "2025",
    description:
      "Worked on web interfaces for AI workflow and automation tools.",
  },
] as const;

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "TypeScript"],
  },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "Supabase"],
  },
  {
    label: "Automation & Tools",
    items: ["n8n", "Git", "GitHub"],
  },
] as const;
