import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import Certification from "./Certification";

export default function CertificationsPage() {
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      certifications
        .filter(c =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q]
  );

  return (
    <section className="grid gap-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Certifications
        </h2>
        <input
          placeholder="Filtrer (ex: AWS, Kubernetes)"
          value={q}
          onChange={(e)=>setQ(e.target.value)}
          className="border-2 border-border rounded-xl px-4 py-3 w-full sm:w-80 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background text-foreground placeholder:text-muted-foreground"
          aria-label="Filtrer les certifications"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((c, idx) => (
          <div 
            key={c.title + c.issueDate}
            style={{ animationDelay: `${idx * 0.1}s` }}
            className="animate-fade-in-up"
          >
            <Certification c={c} />
          </div>
        ))}
      </div>
    </section>
  );
}