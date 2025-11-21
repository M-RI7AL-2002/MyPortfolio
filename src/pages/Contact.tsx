import { Mail, Linkedin, Github, User } from "lucide-react";
import { Profile } from "@/data/profile";
import { motion, type Variants } from "framer-motion";
import { Card3D } from "@/components/ui/card-3d";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const contacts = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: Profile.email },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: Profile.socials[1].href },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", value: Profile.socials[0].href },
  ];

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
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto p-4 sm:p-6"
    >
      <motion.div
        variants={itemVariants}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground/70 bg-clip-text text-transparent">
          Contact Me
        </h1>
        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Have a project or just want to say hi? Reach me through the contacts below!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* LEFT COLUMN: About Me */}
        <motion.div
          variants={itemVariants}
        >
          <Card3D intensity={5} className="h-full">
            <Card className="border-2 border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-card h-full">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-3 mb-4">
                  <User className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <h2 className="text-2xl font-bold text-foreground">About Me</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {Profile.description}
                </p>
                <div className="mt-6">
                  <h3 className="font-semibold text-foreground mb-2">Expertise</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {Profile.about}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Card3D>
        </motion.div>

        {/* RIGHT COLUMN: Contact info */}
        <motion.div
          variants={itemVariants}
          className="space-y-6"
        >
          {contacts.map((c) => (
            <motion.div
              key={c.label}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <Card3D intensity={5} className="h-full">
                <div className="flex items-start gap-4 p-6 rounded-xl border-2 border-border bg-card hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group h-full">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                  >
                    {c.icon}
                  </motion.div>
                  <div className="flex-1">
                    <p className="font-semibold text-lg mb-1 text-foreground">{c.label}</p>
                    <a
                      href={c.label === "Email" ? `mailto:${c.value}` : c.value}
                      target={c.label !== "Email" ? "_blank" : undefined}
                      rel={c.label !== "Email" ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 break-all"
                    >
                      {c.value}
                    </a>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
