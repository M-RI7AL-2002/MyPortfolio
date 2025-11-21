import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import Certification from "./Certification";
import { motion, type Variants } from "framer-motion";

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid gap-8"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground/70 bg-clip-text text-transparent">
          Certifications
        </h2>
        <motion.input
          whileFocus={{ scale: 1.02 }}
          placeholder="Filtrer (ex: AWS, Kubernetes)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="border-2 border-border rounded-xl px-4 py-3 w-full sm:w-80 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background text-foreground placeholder:text-muted-foreground"
          aria-label="Filtrer les certifications"
        />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((c) => (
          <motion.div
            key={c.title + c.issueDate}
            variants={itemVariants}
            className="h-full"
          >
            <Certification c={c} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}