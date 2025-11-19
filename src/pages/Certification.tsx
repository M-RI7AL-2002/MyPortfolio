import type { Certification } from "@/data/certifications";
import clsx from "clsx";

function mmYYYY(s: string){ const [y,m]=s.split("-"); return `${m}/${y}`; }

export default function Certification({ c }: { c: Certification }) {
  const isExpired = c.status === "expired" || (c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <article
      className={clsx(
        "border-2 border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 bg-card group hover:-translate-y-1",
        isExpired && "opacity-75"
      )}
      aria-label={`Certification ${c.title}`}
    >
      {c.image && (
        <div className="mb-4 p-4 bg-accent/30 rounded-xl inline-block group-hover:bg-accent/50 transition-colors duration-300">
          <img
            src={c.image}
            alt={c.imageAlt ?? c.title}
            width={256}
            height={256}
            loading="lazy"
            className="w-20 h-20 object-contain"
          />
        </div>
      )}

      <h3 className="font-bold text-lg leading-snug mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
        {c.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
        <span className="font-semibold text-foreground">{c.issuer}</span> • {mmYYYY(c.issueDate)}
        {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
        {c.credentialId ? ` • ID ${c.credentialId}` : ""}
      </p>

      {c.skills?.length ? (
        <div className="mt-4 p-3 bg-accent/30 rounded-lg">
          <p className="text-xs font-semibold text-foreground mb-1">Compétences:</p>
          <p className="text-xs text-muted-foreground">{c.skills.join(", ")}</p>
        </div>
      ) : null}

      <div className="mt-4 flex items-center gap-4 text-sm">
        {c.credentialUrl && (
          <a 
            className="text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-all duration-300 font-medium flex items-center gap-1" 
            href={c.credentialUrl} 
            target="_blank" 
            rel="noreferrer"
            aria-label={`Voir le certificat ${c.title}`}
          >
            Voir le certificat →
          </a>
        )}
        {isExpired && (
          <span className="text-amber-600 dark:text-amber-400 font-medium px-2 py-1 bg-amber-600/10 rounded-full text-xs">
            Expirée
          </span>
        )}
        {c.status === "revoked" && (
          <span className="text-red-600 dark:text-red-400 font-medium px-2 py-1 bg-red-600/10 rounded-full text-xs">
            Révoquée
          </span>
        )}
      </div>
    </article>
  );
}