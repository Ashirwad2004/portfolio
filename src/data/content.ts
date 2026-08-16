export const links = {
  github: "https://github.com/Ashirwad2004",
  linkedin: "https://linkedin.com/in/ashiwadjha2004",
  email: "ashirwassatyam@gmail.com",
  phone: "+91 8102545007",
  resume: ""

} as const;

export const hero = {
  headline:
    "Full-stack developer building production-grade, AI-integrated web apps.",
  subheadline:
    "I turn messy business workflows into fast, reliable products with React, Next.js, TypeScript, Supabase, and AI features that are useful in the real world, from finance automation to logistics dashboards.",
} as const;

export const proofMetrics = [
  {
    value: "1M+",
    label: "users impacted",
    detail: "B2B accounting platform experience at Vyapar",
  },
  {
    value: "25%",
    label: "fewer UI errors",
    detail: "form validation and payment-ledger fixes",
  },
  {
    value: "30%",
    label: "dev time saved",
    detail: "reusable TypeScript component library",
  },
  {
    value: "4",
    label: "shipped products",
    detail: "AI finance, chat, logistics, and banking BI",
  },
] as const;

export const operatingPrinciples = [
  "Product-minded engineering",
  "Clean TypeScript interfaces",
  "Fast, responsive UI systems",
  "AI only where it improves the workflow",
] as const;

export const about = [
  "I'm a fullstack developer based in Bangalore, working mainly in React, Next.js, and TypeScript, with backend range in Python (FastAPI, Django, Flask) when a project needs it.",
  "Over the past year I've worked inside fintech and SaaS teams, cutting user-reported errors 25% at Vyapar, building a component library that saved the team 30% of dev time at Podtech, and shipping real-time analytics dashboards at 1Stop AI.",
  "Outside client work, I built FinFlow, a full-stack finance tracker that uses Gemini to read receipts and answer accounting questions in natural language.",
] as const;

export const featuredProject = {
  name: "RupeBill",
  subtitle: "AI-Powered Business Finance Tracker",
  description:
    "A full-stack virtual accountant covering expense tracking, debt management, sales ledger, inventory, purchase orders, and invoices in one platform.",
  features: [
    {
      title: "AI Chat Accountant",
      description:
        "Gemini 2.5 Flash answers cash-flow questions and forecasts using live financial context, in natural language",
    },
    {
      title: "Smart Fill",
      description:
        'Parses input like "Rs 1200 electricity bill" straight into structured expense fields, no manual entry',
    },
    {
      title: "Magic Add",
      description:
        'Splits compound entries ("spent Rs 400 on cab, Rahul owes Rs 500") into multiple dated transactions in one step',
    },
    {
      title: "Bill Scanner",
      description:
        "Gemini Vision OCR pulls merchant, total, date, and category from a photographed receipt",
    },
  ],
  stack:
    "React, TypeScript, TailwindCSS, ShadCN UI, Supabase, Gemini 2.5 Flash",

  href: "https://finflow-tracker-00.vercel.app/",
} as const;

//second project details 
export const secondaryProject = {
  name: "NexusChat",
  problem: "There is no proper platform for real-time secure chat application for personal and community messaging",
  features: [
    {
      title: "Real-time Messaging",
      description: "Real-time messaging using WebSockets and Node.js.",
    },
    {
      title: "Secure Authentication",
      description: "Secure authentication using JWT authentication.",
    },
    {
      title: "Modern UI",
      description: "Modern, responsive UI for both personal and community conversations.",
    },
  ],
  subtitle: "Real-time secure chat application for personal and community messaging",
  description: 
    "NexusChat is a next-generation messaging platform built with React, TypeScript, Node.js, and WebSockets. It provides real-time messaging, secure authentication, and a modern, responsive UI for both personal and community conversations.",
  stack: "React, TypeScript, Node.js, WebSockets, JWT Authentication",
  detail: "Role-based views for floor staff and supervisors",
  href: "https://persional-chat-website.vercel.app/",
} as const;

export const logiFlowProject = {
  name: "LogiFlow",
  problem: "Manual fleet logs and delayed hub capacity synchronizations result in supply chain inefficiencies and delivery drops.",
  features: [
    {
      title: "Real-time Fleet Tracking",
      description: "Live tracking of transit trucks and routes with sub-second WebSocket updates."
    },
    {
      title: "Capacity Analytics Dashboard",
      description: "Visual charts charting hub occupancies and bottlenecks dynamically."
    },
    {
      title: "Redis Queue Alerting",
      description: "Instant dispatch push notifications backed by robust queue channels."
    }
  ],
  subtitle: "Enterprise Logistics & Fleet Capacity Management System",
  description: "LogiFlow is a high-throughput logistics tracker optimizing delivery networks, vehicle routes, and hub capacity analytics dynamically.",
  stack: "Next.js, Tailwind CSS, TypeScript, FastAPI, Redis, PostgreSQL",
  href: "https://logiflow-tracker.vercel.app/"
} as const;

export const bankBiProject = {
  name: "BankBI",
  problem: "Financial officers lose days reconciling transaction sheets and ledger data dumps into compliance reports manually.",
  features: [
    {
      title: "Ledger Parsing Engine",
      description: "Ingests database dumps and maps financial items into structured balance sheets instantly."
    },
    {
      title: "Banking KPI Charts",
      description: "Displays real-time liquidity indicators and loan-to-deposit margin trends."
    },
    {
      title: "Compliance Report Generator",
      description: "Generates exportable compliance auditing drafts with zero thread blocking."
    }
  ],
  subtitle: "Automated Banking Intelligence & Compliance Ledger BI System",
  description: "BankBI is a business intelligence dashboard transforming core banking ledger logs into structured cashflow indicators, risk metrics, and compliance spreadsheets.",
  stack: "React, TypeScript, Redux Toolkit, Django REST Framework, PostgreSQL",
  href: "https://bank-bi-dashboard.vercel.app/"
} as const;

export const experience = [
  {
    company: "Vyapar",
    role: "Full Stack Developer Intern",
    period: "Dec 2025 - Mar 2026",
    bullets: [
      "Fixed critical UI bugs and improved form-validation logic on Vyapar's B2B accounting platform (1M+ SMB users), cutting user-reported errors 25% in 2 months",
      "Built internal Next.js admin dashboards that replaced manual onboarding and config processes",
    ],
  },
  {
    company: "Podtech",
    role: "Full Stack Developer Intern",
    period: "Apr - Jun 2025",
    bullets: [
      "Built a reusable component library in TypeScript + TailwindCSS, cutting team dev time 30%",
      "Implemented Redux Toolkit across multi-step workflows, eliminating race conditions",
    ],
  },
  {
    company: "1Stop AI",
    role: "Full Stack Developer AI Engineer",
    period: "Jan - Mar 2025",
    bullets: [
      "Built responsive React interfaces for AI-powered SaaS products",
      "Integrated REST APIs and WebSocket streams for sub-second live updates; improved Lighthouse scores via code-splitting, lazy loading, and tree-shaking",
    ],
  },
] as const;

export const skillGroups = [
  {
    label: "Languages",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Python",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TailwindCSS",
      "ShadCN UI",
      "Redux Toolkit",
      "Zustand",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "Django", "Flask", "FastAPI"],
  },
  {
    label: "Data & Realtime",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "REST",
      "WebSocket",
      "GraphQL (basic)",
    ],
  },
  {
    label: "Data Viz",
    items: ["Recharts", "Chart.js", "D3.js"],
  },
  {
    label: "AI / LLM",
    items: [
      "Gemini API (Vision + Text)",
      "Prompt engineering",
      "NLP feature development",
    ],
  },
] as const;

export const achievements = [
  {
    title: "HackAIthon Winner",
    period: "Aug 2023",
    description:
      "Led a 4-person team building an eye-tracking mouse interface, beating 30+ teams in a 30-hour hackathon",
  },
  {
    title: "5th place, NIT Bhopal",
    period: "National hackathon",
    description: "100+ teams",
  },
  {
    title: "KLIC Incubation Center bootcamp",
    period: "Mentor",
    description:
      "Mentored first-year students in web fundamentals (HTML/CSS/JS)",
  },
] as const;

export const education = {
  degree: "B.Tech, Computer Science",
  school: "Veltech University, Chennai",
  period: "2021-2025",
} as const;