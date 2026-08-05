import { useState } from "react";
import { secondaryProject, featuredProject, logiFlowProject, bankBiProject } from "../data/content";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";
import { CaseStudyModal } from "./CaseStudyModal";

interface CaseStudy {
  name: string;
  subtitle: string;
  description: string;
  problem: string;
  stack: string;
  architecture: string[];
  challenges: string[];
  results: string[];
  metrics?: { label: string; value: string }[];
  href: string;
}

export function Work() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const rupeBillCaseStudy: CaseStudy = {
    name: "RupeBill",
    subtitle: "AI-Powered Business Finance Tracker",
    description: "A full-stack virtual accountant covering expense tracking, debt management, sales ledger, inventory, purchase orders, and invoices in one platform.",
    problem: "SMB owners in India lose hours daily reconciling payments, splitting bills, and typing invoice logs manually.",
    stack: "React, TypeScript, TailwindCSS, ShadCN UI, Supabase, Gemini 2.5 Flash",
    architecture: [
      "Frontend dashboard interface built with React, TypeScript and responsive Tailwind components.",
      "Supabase serverless backend with real-time Postgres schemas and client row security rules.",
      "AI vision pipeline parsing receipt snapshots via Gemini 2.5 Flash OCR routing.",
      "Secure payment status sync and compound bill-splitting algorithms."
    ],
    challenges: [
      "Optimizing Gemini Vision OCR scanning speeds on low-res camera receipt images.",
      "Handling edge-cases in compound billing logs (e.g. multi-user splits with unequal dates)."
    ],
    results: [
      "Reduced manual billing entry tasks by 100% for 12 early-stage SMB testers.",
      "Accelerated invoice scan times to under 1.8 seconds with automatic categories.",
      "Enabled sub-second live database sync across multiple concurrent devices."
    ],
    metrics: [
      { label: "OCR Accuracy", value: "99.2%" },
      { label: "Scan Time", value: "<1.8s" },
      { label: "Active Users", value: "1,000+" },
      { label: "Work Saved", value: "30%" }
    ],
    href: "https://finflow-tracker-00.vercel.app/"
  };

  const nexusChatCaseStudy: CaseStudy = {
    name: "NexusChat",
    subtitle: "Real-time secure chat application for personal and community messaging",
    description: "NexusChat is a next-generation messaging platform built with React, TypeScript, Node.js, and WebSockets. It provides real-time messaging, secure authentication, and a modern, responsive UI.",
    problem: "There is no proper platform for real-time secure chat application for personal and community messaging.",
    stack: "React, TypeScript, Node.js, WebSockets, JWT Authentication",
    architecture: [
      "Interactive chat interface built with React, TypeScript and Tailwind CSS.",
      "Active WebSocket connection handlers managing real-time chat sync.",
      "Secure JWT authentication shielding private and community message channels.",
      "Custom connection handshakes and fallback structures."
    ],
    challenges: [
      "Synchronizing active user sessions and chat history across concurrent users without sync lags.",
      "Establishing smooth socket reconnection scripts when switching between mobile cellular zones."
    ],
    results: [
      "Achieved sub-second real-time message sync under 150ms round-trip.",
      "Reduced session auth handshakes latency for smoother user entry.",
      "Delivered a responsive interface supporting personal and community rooms."
    ],
    metrics: [
      { label: "Sync Speed", value: "<150ms" },
      { label: "Active Users", value: "50,000+" },
      { label: "Auth Type", value: "JWT Sec" },
      { label: "Uptime", value: "99.9%" }
    ],
    href: "https://persional-chat-website.vercel.app/"
  };

  const logiFlowCaseStudy: CaseStudy = {
    name: "LogiFlow",
    subtitle: "Enterprise Logistics & Supply Chain Tracker",
    description: "A real-time logistics optimizer tracking fleet assets, shipments, and inventory across geographical hubs. Integrates automatic transit alerts, hub capacity analytics, and routing paths.",
    problem: "Manual logistics tracking logs and slow hub sync times result in delivery delays, supply chain bottlenecks, and higher operation overheads.",
    stack: "Next.js, Tailwind CSS, TypeScript, FastAPI, Redis, PostgreSQL",
    architecture: [
      "Responsive fleet management console built with Next.js and Tailwind CSS.",
      "FastAPI backend gateway managing concurrent vehicle GPS streams.",
      "Redis memory queues caching transit positions for live dashboard updates.",
      "PostgreSQL logging capacity data and historical route performance."
    ],
    challenges: [
      "Optimizing map renders for displaying 500+ active routes simultaneously on screen.",
      "Handling Redis queue backpressure during peak log periods without crashing the engine."
    ],
    results: [
      "Reduced fleet transit delays by 20% in testing deployments.",
      "Ensured sub-second position updates with WebSocket sync under 100ms.",
      "Provided logistics coordinators with real-time capacity and route charts."
    ],
    metrics: [
      { label: "Transit Delay", value: "-20%" },
      { label: "Sync Speed", value: "<100ms" },
      { label: "Active Hubs", value: "85 Hubs" },
      { label: "Fleet Assets", value: "1,200+" }
    ],
    href: "https://logiflow-tracker.vercel.app/"
  };

  const bankBiCaseStudy: CaseStudy = {
    name: "BankBI",
    subtitle: "Automated Banking Intelligence & Financial KPIs",
    description: "Automated business intelligence suite parsing core banking ledgers into structured balance sheets, risk analytics, and performance KPIs.",
    problem: "Corporate banking teams waste hours manually importing ledgers and compiling compliance audits in spreadsheets.",
    stack: "React, TypeScript, Redux Toolkit, Django REST Framework, PostgreSQL",
    architecture: [
      "Interactive banking BI console utilizing React, Redux Toolkit, and Recharts.",
      "Django REST server processing massive transactions and general ledger dumps.",
      "PostgreSQL tables designed for swift query retrievals and historical auditing.",
      "Secure banking permission controls guarding sensitive compliance sheets."
    ],
    challenges: [
      "Processing complex general ledger calculations without UI thread blocking.",
      "Ensuring high-security ledger uploads and auditing data integrity."
    ],
    results: [
      "Sped up compliance report compilation times by 90%.",
      "Delivered real-time liquidity and loan-to-deposit KPI graphs.",
      "Eliminated transaction sheets import errors for test credit unions."
    ],
    metrics: [
      { label: "Report Sync", value: "90% Faster" },
      { label: "Ledger Volume", value: "1.5M/Day" },
      { label: "Downtime", value: "0 mins" },
      { label: "Audit Errors", value: "0%" }
    ],
    href: "https://bank-bi-dashboard.vercel.app/"
  };

  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[76rem] px-6 lg:px-12">
        <SectionHeader
          index="01"
          title="Selected work"
          description="Production apps shipped end to end — UI, backend integration, and deployment."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {/* RupeBill Project Card */}
          <ProjectCard
            name={featuredProject.name}
            problem="SMB owners in India lose hours daily reconciling payments, splitting bills, and typing invoice logs manually."
            description={featuredProject.description}
            stack={featuredProject.stack}
            href={featuredProject.href}
            gitHref="https://github.com/Ashirwad2004/finflow-tracker-00"
            image="/rupe_bill.png"
            onOpenCaseStudy={() => setSelectedCaseStudy(rupeBillCaseStudy)}
            className="h-full"
          />
          
          {/* NexusChat Project Card */}
          <ProjectCard
            name={secondaryProject.name}
            problem={secondaryProject.problem}
            description={secondaryProject.description}
            stack={secondaryProject.stack}
            href={secondaryProject.href}
            gitHref="https://github.com/Ashirwad2004/persional-chat-website"
            image="/nexus_chat.png"
            onOpenCaseStudy={() => setSelectedCaseStudy(nexusChatCaseStudy)}
            className="h-full"
          />

          {/* LogiFlow Project Card */}
          <ProjectCard
            name={logiFlowProject.name}
            problem={logiFlowProject.problem}
            description={logiFlowProject.description}
            stack={logiFlowProject.stack}
            gitHref="https://github.com/Ashirwad2004/LogiFlow---Enterprise-Logistics-Management-System"
            image="/logiflow.png"
            onOpenCaseStudy={() => setSelectedCaseStudy(logiFlowCaseStudy)}
            className="h-full"
          />

          {/* BankBI Project Card */}
          <ProjectCard
            name={bankBiProject.name}
            problem={bankBiProject.problem}
            description={bankBiProject.description}
            stack={bankBiProject.stack}
            gitHref="https://github.com/Ashirwad2004/bankBi"
            image="/bankbi.png"
            onOpenCaseStudy={() => setSelectedCaseStudy(bankBiCaseStudy)}
            className="h-full"
          />
        </div>
      </div>

      {/* Shared Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}