import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail,  Linkedin, Github } from "lucide-react";
import { Profile } from "@/data/profile";

export default function Contact() {
 const contacts = [
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: Profile.email },
 
  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: Profile.socials[1].href },
  { icon: <Github className="w-5 h-5" />, label: "GitHub", value: Profile.socials[0].href },
];


  return (
    <section className="max-w-7xl mx-auto p-6 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Contact Me
        </h1>
        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Have a project or just want to say hi? Fill out the form or reach me through the contacts below!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* LEFT COLUMN: Contact info */}
        <div className="space-y-6">
          {contacts.map((c, idx) => (
            <div 
              key={c.label} 
              className="flex items-start gap-4 p-6 rounded-xl border-2 border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-primary p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                {c.icon}
              </div>
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
          ))}
        </div>

        {/* RIGHT COLUMN: Form */}
        <form className="grid gap-6">
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="name" className="text-base font-semibold text-foreground">
              Name
            </Label>
            <Input 
              id="name" 
              placeholder="Your name" 
              className="h-12 border-2 border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="email" className="text-base font-semibold text-foreground">
              Email
            </Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="you@example.com" 
              className="h-12 border-2 border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="message" className="text-base font-semibold text-foreground">
              Message
            </Label>
            <Textarea 
              id="message" 
              placeholder="Your message..." 
              className="min-h-[150px] border-2 border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 border-0 transition-all duration-300 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
