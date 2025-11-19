import { Profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
export default function Home() {
  const colors = [
    "bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500",
    "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-teal-500"
  ];

  const half = Math.ceil(Profile.skills.length / 2);
  const leftSkills = Profile.skills.slice(0, half);
  const rightSkills = Profile.skills.slice(half);

  return (
    <section className="grid gap-12 md:grid-cols-[1fr_1.5fr_1fr] items-center text-center animate-fade-in-up">
      <Helmet>
        <title>{Profile.name} — Portfolio</title>
        <meta name="description" content="Portfolio ." />
      </Helmet>

      {/* LEFT SKILLS */}
      <div className="flex flex-wrap justify-center gap-3 animate-slide-in-right">
        {leftSkills.map((skill, idx) => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <Badge
              key={skill}
              className={`${randomColor} text-white dark:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg px-4 py-2 text-sm font-medium`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <BadgeCheckIcon className="w-4 h-4 mr-1.5" />
              {skill}
            </Badge>
          );
        })}
      </div>

      {/* CENTER INFO (with image) */}
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
          {Profile.name}
        </h1>
        <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-primary/20 shadow-2xl ring-4 ring-primary/10 transition-all duration-500 hover:scale-105 hover:shadow-primary/20 hover:ring-primary/30">
          <AvatarImage src="/profile.jpg" alt="Profile" className="object-cover" />
          <AvatarFallback className="text-4xl font-bold bg-primary/10">{Profile.name[0]}</AvatarFallback>
        </Avatar>
        <p className="text-2xl md:text-3xl font-semibold text-foreground">{Profile.role}</p>
        <p className="text-muted-foreground max-w-lg text-base md:text-lg leading-relaxed">{Profile.about}</p>


        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <p>{Profile.description}</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 rounded-xl"
          >
            <Link to="/projects">
              Voir les projets <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2 px-8 py-6 text-base font-semibold hover:scale-105 rounded-xl"
          >
            <Link to="/contact">
              Contact <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        

       
      </div>

      {/* RIGHT SKILLS */}
      <div className="flex flex-wrap justify-center gap-3 animate-slide-in-right">
        {rightSkills.map((skill, idx) => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <Badge
              key={skill}
              className={`${randomColor} text-white dark:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg px-4 py-2 text-sm font-medium`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <BadgeCheckIcon className="w-4 h-4 mr-1.5" />
              {skill}
            </Badge>
          );
        })}
      </div>
    </section>
  );
}
