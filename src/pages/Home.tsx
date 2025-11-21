import { Profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Card3D } from "@/components/ui/card-3d";

export default function Home() {
  const colors = [
    "bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500",
    "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-teal-500"
  ];

  const half = Math.ceil(Profile.skills.length / 2);
  const leftSkills = Profile.skills.slice(0, half);
  const rightSkills = Profile.skills.slice(half);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-8 md:gap-12 md:grid-cols-[1fr_1.5fr_1fr] items-center text-center min-h-[80vh] py-8"
    >
      <Helmet>
        <title>{Profile.name} — Portfolio</title>
        <meta name="description" content="Portfolio ." />
      </Helmet>

      {/* LEFT SKILLS */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap justify-center gap-3"
      >
        {leftSkills.map((skill, idx) => {
          const randomColor = colors[idx % colors.length];
          return (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: idx * 0.05,
                duration: 0.4,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                className={`${randomColor} text-white dark:text-white transition-all duration-300 hover:shadow-xl px-4 py-2 text-sm font-medium cursor-default`}
              >
                <BadgeCheckIcon className="w-4 h-4 mr-1.5" />
                {skill}
              </Badge>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CENTER INFO (with image) */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center space-y-6 z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground/70 bg-clip-text text-transparent leading-tight"
        >
          {Profile.name}
        </motion.h1>

        <Card3D intensity={10} className="w-fit">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
          >
            <Avatar className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 border-4 border-primary/30 shadow-2xl ring-4 ring-primary/20 transition-all duration-500">
              <AvatarImage src="/profile.jpg" alt="Profile" className="object-cover" />
              <AvatarFallback className="text-4xl font-bold bg-primary/10">{Profile.name[0]}</AvatarFallback>
            </Avatar>
          </motion.div>
        </Card3D>

        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold text-foreground"
        >
          {Profile.role}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground max-w-lg text-base md:text-lg leading-relaxed"
        >
          {Profile.about}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed"
        >
          {Profile.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mt-6"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl rounded-xl"
            >
              <Link to="/projects">
                Voir les projets <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2 px-8 py-6 text-base font-semibold rounded-xl"
            >
              <Link to="/contact">
                Contact <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* RIGHT SKILLS */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap justify-center gap-3"
      >
        {rightSkills.map((skill, idx) => {
          const randomColor = colors[(idx + leftSkills.length) % colors.length];
          return (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: idx * 0.05,
                duration: 0.4,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                className={`${randomColor} text-white dark:text-white transition-all duration-300 hover:shadow-xl px-4 py-2 text-sm font-medium cursor-default`}
              >
                <BadgeCheckIcon className="w-4 h-4 mr-1.5" />
                {skill}
              </Badge>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
