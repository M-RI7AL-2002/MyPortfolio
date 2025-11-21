import { education } from "@/data/education";
import { motion, type Variants } from "framer-motion";
import { GraduationCap } from "lucide-react";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function Education() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
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
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground/70 bg-clip-text text-transparent"
      >
        Formations
      </motion.h2>
      <ol className="relative border-l-2 border-primary/30 ml-4 md:ml-8">
        {education.map((e, idx) => (
          <motion.li
            key={e.school + e.start}
            variants={itemVariants}
            className="mb-8 ml-8 md:ml-12 relative"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: idx * 0.2 + 0.3, type: "spring", stiffness: 200 }}
              className="absolute -left-[2.125rem] md:-left-[3.125rem] mt-2 h-4 w-4 rounded-full bg-primary border-4 border-background shadow-lg ring-2 ring-primary/20 z-10"
            />
            <motion.div
              whileHover={{ x: 5, scale: 1.01 }}
              className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-2">
                  <GraduationCap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {e.degree}
                    {e.field ? ` — ${e.field}` : ""}
                    <span className="text-base font-medium text-muted-foreground block mt-1">
                      @ {e.school}
                    </span>
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3 ml-8">
                  {fmt(e.start)} — {fmt(e.end)}{" "}
                  {e.location ? `• ${e.location}` : ""}{" "}
                  {e.gpa ? `• GPA ${e.gpa}` : ""}
                </p>
                {e.courses?.length ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ delay: idx * 0.1 + 0.5 }}
                    className="mt-4 p-3 bg-accent/50 rounded-lg ml-8"
                  >
                    <p className="text-sm font-semibold text-foreground mb-2">Cours:</p>
                    <p className="text-sm text-muted-foreground">
                      {e.courses.slice(0, 5).join(", ")}
                    </p>
                  </motion.div>
                ) : null}
                {e.highlights?.length ? (
                  <ul className="list-disc ms-5 mt-4 space-y-1 text-sm text-muted-foreground ml-8">
                    {e.highlights.map((h, highlightIdx) => (
                      <motion.li
                        key={h}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 + highlightIdx * 0.05 + 0.6 }}
                        className="leading-relaxed"
                      >
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </motion.div>
          </motion.li>
        ))}
      </ol>
    </motion.section>
  );
}