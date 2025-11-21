import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/data/Exprience";
import { motion, type Variants } from "framer-motion";
import { Card3D } from "@/components/ui/card-3d";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      className="max-w-5xl mx-auto p-4 sm:p-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-foreground via-primary to-foreground/70 bg-clip-text text-transparent"
      >
        Parcours
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="w-full"
          >
            <Card3D intensity={5} className="w-full">
              <Card className="border-2 border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 bg-card group">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {exp.role}
                        </h3>
                      </div>
                      <Badge className="bg-red-500 font-semibold text-white hover:bg-red-600 transition-colors">
                        {exp.company}
                      </Badge>
                    </div>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-500 text-sm font-medium text-white px-4 py-2 rounded-full whitespace-nowrap shadow-md"
                    >
                      {exp.period}
                    </motion.span>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed mt-4 pl-8">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            </Card3D>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}