import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/data/Exprience";

export default function Experience() {
  return (
   <section className="max-w-5xl mx-auto p-6 animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
        Parcours
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <Card 
            key={idx} 
            className="border-2 border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-card group hover:-translate-y-1"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                    {exp.role}
                  </h3>
                  <Badge className="bg-red-500  font-semibold text-muted-foreground text-white">{exp.company}</Badge>
                </div>
                <span className="bg-blue-500 text-sm font-medium text-primary  px-4 py-2 rounded-full whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed mt-4">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}