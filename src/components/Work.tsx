import { useState } from "react";
import { secondaryProject } from "../data/content";
import { FeaturedProject } from "./FeaturedProject";
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
    subtitle: "Warehouse Zone Stock Synchronizer",
    description: "Warehouse management app for tracking inventory movement, zone assignments, and stock levels.",
    problem: "Warehouse floor staff lose time checking stock levels across different zones, leading to delivery delays and paper trail errors.",
    stack: "React, TypeScript, Python, FastAPI, WebSockets, PostgreSQL",
    architecture: [
      "Interactive stock ledger board showing zone assignments and stocks.",
      "Python FastAPI server managing active WebSocket connection pools.",
      "PostgreSQL storage using transaction isolation blocks to prevent inventory collision.",
      "Custom connection fallback strategies on device disconnects."
    ],
    challenges: [
      "Synchronizing rapid stock movement data across 40+ concurrent floor workers.",
      "Establishing WebSocket connection recovery when moving between low-coverage cellular zones."
    ],
    results: [
      "Reduced warehouse stocking errors by 40% in simulated logistics deployment.",
      "Live sub-second sync across floor devices (<200ms message round-trip).",
      "Saved supervisors hours of daily paper log compilation reviews."
    ],
    metrics: [
      { label: "Sync Speed", value: "<200ms" },
      { label: "Stock Errors", value: "-40%" },
      { label: "Floor Staff", value: "40+" },
      { label: "Log Paper", value: "0 Sheets" }
    ],
    href: "https://finflow-tracker-00.vercel.app/"
  };

  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[76rem] px-6 lg:px-12">
        <SectionHeader
          index="01"
          title="Selected work"
          description="Production apps shipped end to end — UI, backend integration, and deployment."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Flagship featured project */}
          <div className="lg:col-span-12">
            <FeaturedProject onOpenCaseStudy={() => setSelectedCaseStudy(rupeBillCaseStudy)} />
          </div>
          
          {/* Secondary project card */}
          <div className="lg:col-span-6 lg:col-start-7 w-full">
            <ProjectCard
              name={secondaryProject.name}
              problem={secondaryProject.problem}
              description={secondaryProject.description}
              stack={secondaryProject.stack}
              href={secondaryProject.href}
              onOpenCaseStudy={() => setSelectedCaseStudy(nexusChatCaseStudy)}
              className="h-full"
            />
          </div>
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