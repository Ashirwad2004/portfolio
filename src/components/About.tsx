import { skillGroups } from "../data/content";

export function About() {
  return (
    <section id="about" className="border-b border-border py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <div className="lg:col-span-5">
          <h2 className="font-serif text-3xl tracking-tight text-ink lg:text-4xl">
            About
          </h2>
        </div>

        <div className="space-y-5 text-[15px] leading-relaxed text-ink/85 lg:col-span-7">
          <p>
            I started on the frontend because that's where you see whether
            something actually works. Over the past year I've picked up Python
            and FastAPI so I could ship features without waiting on someone
            else's API.
          </p>
          <p>
            I care about UI that stays clear under load and logic that holds up
            in production — not demos that only look good in a screenshot.
          </p>
          <p>
            I'm currently looking for developer roles and spending time with
            n8n to automate the repetitive parts of building and deploying.
          </p>
        </div>

        <div className="lg:col-span-12 lg:mt-4">
          <div className="grid gap-10 border-t border-border pt-12 sm:grid-cols-3">
            {skillGroups.map(({ label, items }) => (
              <div key={label}>
                <h3 className="text-xs uppercase tracking-widest text-muted">
                  {label}
                </h3>
                <ul className="mt-4 space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-[15px] text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
