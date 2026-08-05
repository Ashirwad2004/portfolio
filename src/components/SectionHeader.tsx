type SectionHeaderProps = {
  index: string;
  title: string;
  description?: string;
  className?: string;
  dark?: boolean;
};

export function SectionHeader({
  index,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <header className={`mb-12 lg:mb-16 ${className}`}>
      <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
        {/* Index number */}
        <p className="font-mono text-xs text-accent tracking-widest lg:col-span-2">
          //{index}
        </p>
        
        {/* Title & details */}
        <div className="lg:col-span-10">
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-white">
            {title}
          </h2>
          {description && (
            <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-zinc-400">
              {description}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}