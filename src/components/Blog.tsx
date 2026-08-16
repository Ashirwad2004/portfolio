import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BookOpen,
  Clock,
  Calendar,
  Mail,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";

interface Article {
  id: string;
  title: string;
  category: string;
  summary: string;
  date: string;
  readTime: string;
  slug: string;
  href: string;
}

export function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const categories = ["All", "AI", "Engineering", "Architecture"];

  const articles: Article[] = [
    {
      id: "art-1",
      title: "Architecting AI Accountants with React and Gemini 2.5 Flash",
      category: "AI",
      summary:
        "How to orchestrate natural language financial trackers. Covering real-time receipt scanning pipelines using OCR, LLM structured outputs, and caching strategies.",
      date: "Jul 28, 2026",
      readTime: "6 min read",
      slug: "architecting-ai-accountants-react-gemini",
      href: "/blog/architecting-ai-accountants-react-gemini",
    },
    {
      id: "art-2",
      title: "Component Optimization & Dev Time Reduction in Tailwind CSS v4",
      category: "Engineering",
      summary:
        "Leveraging custom theme directives, CSS custom properties, and compilation features of Tailwind v4 to save up to 30% development time on design assets.",
      date: "Jun 14, 2026",
      readTime: "4 min read",
      slug: "component-optimization-tailwind-v4",
      href: "/blog/component-optimization-tailwind-v4",
    },
    {
      id: "art-3",
      title: "WebSockets & Redux Toolkit for High-Frequency Warehouse Dashboards",
      category: "Architecture",
      summary:
        "Avoiding race conditions and socket dropouts when synchronizing multi-zone logistics data. A deep dive into FastAPI backends and Redux state management.",
      date: "May 02, 2026",
      readTime: "8 min read",
      slug: "websockets-redux-warehouse-dashboards",
      href: "/blog/websockets-redux-warehouse-dashboards",
    },
  ];

  // Filtering logic
  const filteredArticles = articles.filter((art) => {
    const query = searchQuery.toLowerCase().trim();

    const matchesSearch =
      art.title.toLowerCase().includes(query) ||
      art.summary.toLowerCase().includes(query) ||
      art.category.toLowerCase().includes(query);

    const matchesCategory =
      selectedCategory === "All" ||
      art.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim()) {
      setIsSubscribed(true);

      setTimeout(() => {
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section
      id="blog"
      className="border-t border-zinc-900 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[76rem] px-6 lg:px-12">

        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            <BookOpen className="h-4 w-4" />
            <span>Articles & Insights</span>
          </div>

          <h2 className="font-serif text-4xl tracking-tight text-white md:text-5xl">
            From the Journal
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
            Writing about front-end engineering, design systems,
            performance, and orchestrating full-stack AI integrations.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-center">

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg border px-4 py-2 text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "border-white bg-white text-black"
                    : "border-zinc-900 bg-zinc-950 text-zinc-400 hover:border-zinc-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-3.5 h-4 w-4 text-zinc-500" />

            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-zinc-900 bg-zinc-950/80 py-3 pl-9 pr-4 text-xs text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-accent"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">

            {filteredArticles.map((art) => (
              <motion.a
                layout
                key={art.id}
                href={art.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card glass-card-hover spotlight-card group relative flex h-[340px] flex-col justify-between rounded-2xl border border-zinc-800/80 p-6 no-underline"
                aria-label={`Read article: ${art.title}`}
              >
                {/* Article Content */}
                <div className="relative z-10 space-y-4">

                  {/* Category + Read Time */}
                  <div className="flex items-center justify-between text-[10px] font-semibold uppercase text-zinc-500">
                    <span className="rounded border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-zinc-400">
                      {art.category}
                    </span>

                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {art.readTime}
                    </span>
                  </div>

                  {/* Article Title */}
                  <h3 className="font-serif text-xl font-bold leading-tight text-white transition-colors group-hover:text-accent">
                    {art.title}
                  </h3>

                  {/* Summary */}
                  <p className="line-clamp-4 text-xs leading-relaxed text-zinc-400">
                    {art.summary}
                  </p>
                </div>

                {/* Article Footer */}
                <div className="relative z-10 flex items-center justify-between border-t border-zinc-900 pt-5 text-[11px] text-zinc-500">

                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {art.date}
                  </span>

                  <span className="flex items-center gap-1 font-semibold text-white transition-all group-hover:gap-2">
                    Read Article

                    <ArrowUpRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </motion.a>
            ))}

          </AnimatePresence>

          {/* Empty Search State */}
          {filteredArticles.length === 0 && (
            <div className="col-span-full flex min-h-[220px] items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950/50">
              <div className="text-center">
                <Search className="mx-auto mb-3 h-6 w-6 text-zinc-600" />

                <p className="text-sm font-semibold text-zinc-300">
                  No articles found
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Try a different search term or category.
                </p>
              </div>
            </div>
          )}

          {/* Newsletter Box */}
          <div className="glass-card flex h-[340px] flex-col justify-between rounded-2xl border border-zinc-800/80 bg-gradient-to-br from-zinc-950 via-zinc-950 to-accent/5 p-6 lg:col-span-1">

            <div className="space-y-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                <Mail className="h-5 w-5" />
              </div>

              <h3 className="font-serif text-xl font-bold leading-tight text-white">
                Engineering Newsletter
              </h3>

              <p className="text-xs leading-relaxed text-zinc-400">
                Join 1,200+ engineers reading monthly tips on building
                clean codebases, web performance, and software design
                systems.
              </p>
            </div>

            {/* Newsletter Form */}
            <form
              onSubmit={handleSubscribe}
              className="space-y-3 pt-5"
            >
              <AnimatePresence mode="wait">

                {!isSubscribed ? (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-2"
                  >
                    <input
                      type="email"
                      required
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-zinc-900 bg-zinc-950 px-4 py-3.5 text-xs text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-accent"
                    />

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-white py-3.5 text-xs font-semibold text-black transition-colors hover:bg-zinc-200"
                    >
                      Subscribe
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{
                      scale: 0.9,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    className="flex flex-col items-center justify-center py-6 text-center"
                  >
                    <CheckCircle className="mb-2 h-10 w-10 text-emerald-400" />

                    <p className="text-xs font-semibold text-white">
                      Subscription Successful!
                    </p>

                    <p className="mt-1 text-[10px] text-zinc-500">
                      Check your inbox for updates.
                    </p>
                  </motion.div>
                )}

              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}