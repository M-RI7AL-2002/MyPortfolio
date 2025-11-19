import { projects } from "@/data/projects";
import { useMemo, useState } from "react";
export default function Projects() {
  const colors = [
    "bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500",
    "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-teal-500"
  ];
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      projects
        .filter(c =>
          [c.title, c.period?.toString(), ...(c.tags ?? []), c.summary]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a, b) => (b.period || 0).toString().localeCompare((a.period || 0).toString())),
    [q]
  );

  return (
    <section className="grid gap-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Projects
        </h2>
        <input
          placeholder="Search (ex: AWS, Kubernetes)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="border-2 border-border rounded-xl px-4 py-3 w-full sm:w-80 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background text-foreground placeholder:text-muted-foreground"
          aria-label="Search on Projects"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p, idx) => (
          <article 
            key={p.title} 
            className="group border-2 border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 bg-card hover:-translate-y-1"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
              {p.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => {
                 const randomColor = colors[Math.floor(Math.random() * colors.length)];
                return (
                  <span 
                    key={t} 
                    className={`${randomColor} text-white dark:text-white px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:scale-110 hover:shadow-md`}
                  >
                    {t}
                  </span>
                );
              })}
            </div>
            <div className="mt-6 flex gap-4 text-sm font-medium">
              {p.link && (
                <a 
                  className="text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-all duration-300 flex items-center gap-1" 
                  href={p.link} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  Demo →
                </a>
              )}
              {p.repo && (
                <a 
                  className="text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-all duration-300 flex items-center gap-1" 
                  href={p.repo} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  Code →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
