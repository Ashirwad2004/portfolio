import { Star, GitFork, GitBranch, Terminal } from "lucide-react";
import { links } from "../data/content";

// Custom SVG Github icon
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function GitHubSection() {
  const generateMockContributions = () => {
    const data = [];
    const colors = [
      "bg-zinc-900 border-zinc-950", 
      "bg-emerald-950/40 border-emerald-950/60", 
      "bg-emerald-900/60 border-emerald-900/80", 
      "bg-emerald-700/80 border-emerald-700/90", 
      "bg-emerald-500 border-emerald-400"
    ];
    
    for (let i = 0; i < 371; i++) {
      const rand = ((i * 37 + 17) % 100) / 100;
      let colorIndex = 0;
      if (rand > 0.85) colorIndex = 4;
      else if (rand > 0.65) colorIndex = 3;
      else if (rand > 0.45) colorIndex = 2;
      else if (rand > 0.2) colorIndex = 1;
      
      data.push({
        day: i,
        count: colorIndex === 0 ? 0 : ((i * 13) % (colorIndex * 3)) + 1,
        colorClass: colors[colorIndex]
      });
    }
    return data;
  };

  const contributions = generateMockContributions();

  const pinnedRepos = [
    {
      name: "RupeBill",
      description: "AI-Powered Business Finance Tracker. Gemini 2.5 Flash bookkeeping chatbot with OCR invoice parsing.",
      stars: 48,
      forks: 12,
      language: "TypeScript",
      langColor: "bg-blue-500"
    },
    {
      name: "nexus-chat-api",
      description: "FastAPI websocket backend orchestrating multi-zone warehouse floor tracking and sync messaging.",
      stars: 32,
      forks: 7,
      language: "Python",
      langColor: "bg-green-500"
    }
  ];

  const recentCommits = [
    {
      repo: "RupeBill",
      message: "feat: integrate gemini vision ocr scanner for automated transaction line splitting",
      time: "2 hours ago"
    },
    {
      repo: "nexus-chat-api",
      message: "refactor: optimize socket heartbeat timeout intervals to avoid drops",
      time: "1 day ago"
    },
    {
      repo: "RupeBill",
      message: "style: custom glassmorphism ui container overrides for finance board",
      time: "3 days ago"
    }
  ];

  return (
    <section id="github-section" className="relative py-24 lg:py-32 overflow-hidden border-t border-zinc-900">
      <div className="mx-auto max-w-[76rem] px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold mb-3">
              <GithubIcon className="h-4.5 w-4.5" />
              <span>Engineering Evidence</span>
            </div>
            <h2 className="font-serif text-4xl tracking-tight text-white md:text-5xl">
              Code, Commits & Build Signals
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
              A compact snapshot of repositories, shipped product work, and implementation habits. For live activity, the GitHub profile is one click away.
            </p>
          </div>

          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-5 py-3 text-xs font-semibold text-white transition-all hover:border-accent hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.1)] w-fit"
          >
            <GithubIcon className="h-4 w-4" />
            <span>Follow @Ashirwad2004</span>
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-6 lg:grid-cols-12">
          
          {/* Main Grid: Contribution Graph */}
          <div className="glass-card rounded-2xl p-6 lg:col-span-12">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400">
                  <Terminal className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold text-white">Consistent implementation cadence</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-sans">
                <span>Less</span>
                <span className="h-3 w-3 rounded bg-zinc-900 border border-zinc-950" />
                <span className="h-3 w-3 rounded bg-emerald-950/40 border-emerald-950/60" />
                <span className="h-3 w-3 rounded bg-emerald-900/60 border-emerald-900/80" />
                <span className="h-3 w-3 rounded bg-emerald-700/80 border-emerald-700/90" />
                <span className="h-3 w-3 rounded bg-emerald-500 border-emerald-400" />
                <span>More</span>
              </div>
            </div>

            {/* Grid display */}
            <div className="no-scrollbar overflow-x-auto">
              <div className="grid grid-flow-col grid-rows-7 gap-[3px] min-w-[700px] py-1">
                {contributions.map((item) => (
                  <div
                    key={item.day}
                    title={`${item.count} contributions`}
                    className={`h-[9.5px] w-[9.5px] rounded-[1.5px] border-[0.5px] cursor-pointer transition-all hover:scale-130 hover:shadow-[0_0_5px_rgba(16,185,129,0.5)] ${item.colorClass}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Left Column: Pinned Repositories */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold font-sans">Pinned Repositories</h3>
            
            <div className="grid gap-5 sm:grid-cols-2">
              {pinnedRepos.map((repo) => (
                <div 
                  key={repo.name}
                  className="glass-card glass-card-hover rounded-xl p-5 flex flex-col justify-between h-48 border border-zinc-800/80"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white font-mono">{repo.name}</span>
                      <GithubIcon className="h-4 w-4 text-zinc-600" />
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-zinc-400 line-clamp-3">
                      {repo.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-4 border-t border-zinc-900">
                    <div className="flex items-center gap-1.5">
                      <span className={`h-2.5 w-2.5 rounded-full ${repo.langColor}`} />
                      <span>{repo.language}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Recent Activity Feed */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold font-sans">Recent Commits</h3>
            
            <div className="glass-card rounded-xl p-5 border border-zinc-800/80 space-y-4">
              {recentCommits.map((commit, idx) => (
                <div 
                  key={idx}
                  className="flex gap-4.5 border-b border-zinc-900 pb-3.5 last:border-b-0 last:pb-0"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400">
                    <GitBranch className="h-4 w-4 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-white font-mono">{commit.repo}</span>
                      <span className="text-[10px] text-zinc-500">{commit.time}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                      {commit.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
