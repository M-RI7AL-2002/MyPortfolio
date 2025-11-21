import { projects } from "@/data/projects";
import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Card3D } from "@/components/ui/card-3d";
import { ExternalLink, Github } from "lucide-react";

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
          Projects
        </h2>
        <motion.input
          whileFocus={{ scale: 1.02 }}
          placeholder="Search (ex: AWS, Kubernetes)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="border-2 border-border rounded-xl px-4 py-3 w-full sm:w-80 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background text-foreground placeholder:text-muted-foreground"
          aria-label="Search on Projects"
        />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p, idx) => {
          return (
            <motion.div
              key={p.title}
              variants={itemVariants}
              className="h-full"
            >
              <Card3D intensity={8} className="h-full">
                <article className="group border-2 border-border rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300 bg-card h-full flex flex-col">
                  <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {p.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t, tagIdx) => {
                      const tagColor = colors[(idx + tagIdx) % colors.length];
                      return (
                        <motion.span
                          key={t}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className={`${tagColor} text-white dark:text-white px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-default`}
                        >
                          {t}
                        </motion.span>
                      );
                    })}
                  </div>
                  <div className="mt-6 flex gap-4 text-sm font-medium">
                    {p.link && (
                      <motion.a
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-primary hover:text-primary/80 transition-all duration-300 flex items-center gap-1 font-semibold"
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                    {p.repo && (
                      <motion.a
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-primary hover:text-primary/80 transition-all duration-300 flex items-center gap-1 font-semibold"
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Code <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </article>
              </Card3D>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
