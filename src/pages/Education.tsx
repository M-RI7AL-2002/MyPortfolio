import { education } from "@/data/education";
function fmt(s?: string){ if(!s) return "Présent"; const [y,m]=s.split("-"); return `${m}/${y}`; }

export default function Education() {
  return (
    <section className="grid gap-8 animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
        Formations
      </h2>
      <ol className="relative border-l-2 border-primary/30 ml-4 md:ml-8">
        {education.map((e, idx) => (
          <li 
            key={e.school+e.start} 
            className="mb-8 ml-8 md:ml-12 relative animate-fade-in-up"
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            <span className="absolute -left-[2.125rem] md:-left-[3.125rem] mt-2 h-4 w-4 rounded-full bg-primary border-4 border-background shadow-lg ring-2 ring-primary/20" />
            <div className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-xl mb-2 text-foreground">
                {e.degree}{e.field ? ` — ${e.field}` : ""}
                <span className="text-base font-medium text-muted-foreground block mt-1">@ {e.school}</span>
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {fmt(e.start)} — {fmt(e.end)} {e.location ? `• ${e.location}` : ""} {e.gpa ? `• GPA ${e.gpa}` : ""}
              </p>
              {e.courses?.length ? (
                <div className="mt-4 p-3 bg-accent/50 rounded-lg">
                  <p className="text-sm font-semibold text-foreground mb-2">Cours:</p>
                  <p className="text-sm text-muted-foreground">{e.courses.slice(0,5).join(", ")}</p>
                </div>
              ) : null}
              {e.highlights?.length ? (
                <ul className="list-disc ms-5 mt-4 space-y-1 text-sm text-muted-foreground">
                  {e.highlights.map(h => (
                    <li key={h} className="leading-relaxed">{h}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}