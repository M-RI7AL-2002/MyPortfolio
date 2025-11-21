import type { Certification } from "@/data/certifications";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Card3D } from "@/components/ui/card-3d";
import { Award, ExternalLink } from "lucide-react";
import { useState } from "react";
import CertificateModal from "@/components/CertificateModal";

function mmYYYY(s: string) {
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function Certification({ c }: { c: Certification }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isExpired = c.status === "expired" || (c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <Card3D intensity={6} className="h-full">
      <article
        className={clsx(
          "border-2 border-border rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300 bg-card group h-full flex flex-col",
          isExpired && "opacity-75"
        )}
        aria-label={`Certification ${c.title}`}
      >
        {c.image && (
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="mb-4 p-4 bg-accent/30 rounded-xl inline-block group-hover:bg-accent/50 transition-colors duration-300 cursor-pointer"
          >
            <img
              src={c.image}
              alt={c.imageAlt ?? c.title}
              width={256}
              height={256}
              loading="lazy"
              className="w-20 h-20 object-contain"
            />
          </motion.div>
        )}
        
        {c.image && (
          <CertificateModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            imageUrl={c.image}
            title={c.title}
            alt={c.imageAlt ?? c.title}
          />
        )}

        <div className="flex items-start gap-2 mb-3">
          <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <h3 className="font-bold text-lg leading-snug text-foreground group-hover:text-primary transition-colors duration-300">
            {c.title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground mb-3 leading-relaxed ml-7">
          <span className="font-semibold text-foreground">{c.issuer}</span> • {mmYYYY(c.issueDate)}
          {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
          {c.credentialId ? ` • ID ${c.credentialId}` : ""}
        </p>

        {c.skills?.length ? (
          <div className="mt-4 p-3 bg-accent/30 rounded-lg ml-7">
            <p className="text-xs font-semibold text-foreground mb-1">Compétences:</p>
            <p className="text-xs text-muted-foreground">{c.skills.join(", ")}</p>
          </div>
        ) : null}

        <div className="mt-4 flex items-center gap-4 text-sm ml-7 mt-auto">
          {c.credentialUrl && (
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="text-primary hover:text-primary/80 transition-all duration-300 font-medium flex items-center gap-1"
              href={c.credentialUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Voir le certificat ${c.title}`}
            >
              Voir le certificat <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
          {isExpired && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-amber-600 dark:text-amber-400 font-medium px-2 py-1 bg-amber-600/10 rounded-full text-xs"
            >
              Expirée
            </motion.span>
          )}
          {c.status === "revoked" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-red-600 dark:text-red-400 font-medium px-2 py-1 bg-red-600/10 rounded-full text-xs"
            >
              Révoquée
            </motion.span>
          )}
        </div>
      </article>
    </Card3D>
  );
}