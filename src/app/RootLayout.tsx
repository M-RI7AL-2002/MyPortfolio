/*import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 border-b backdrop-blur">
     <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
      <NavigationMenu>
      <NavigationMenuList>


        <NavigationMenuItem>
          <NavigationMenuLink>
            <Link to="/">RIHAL Portfolio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
<div className="flex items-center gap-4">
        <NavigationMenuItem>
          <NavigationMenuLink>
            <Link to="/experience">Exprience</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink>
            <Link to="/education">Formation</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
       <NavigationMenuItem>
          <NavigationMenuLink>
            <Link to="/certifications">Certifications</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

          <NavigationMenuItem>
          <NavigationMenuLink>
            <Link to="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
<div/>
      </NavigationMenuList>



      </NavigationMenu>
     </nav>
     </header>
      <main className="mx-auto max-w-6xl p-6">
        <Outlet />
      </main>
      <footer className="border-t py-6 text-center text-sm">
        © {new Date().getFullYear()} • RIHAL
      </footer>

     
    </div>
  );
}*/

import { Profile } from "@/data/profile";
import { Outlet, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./NavBar";
import { Github, Linkedin } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout() {
  const location = useLocation();

  return (
    <div className="min-h-dvh bg-background text-foreground relative overflow-x-hidden">
      <ScrollToTop />

      {/* HEADER */}
      <Navbar/>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 md:py-12 min-h-[800px]">
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={location.key || location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border/40 bg-background/95 backdrop-blur-md py-8 sm:py-12 px-4 sm:px-6 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">

          {/* About */}
          <div className="text-center md:text-left space-y-2 sm:space-y-3">
            <h2 className="font-bold text-lg sm:text-xl text-foreground">{Profile.name}</h2>
            <h3 className="text-foreground/80 text-sm sm:text-base">{Profile.role}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              📍 {Profile.location}
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mt-2">
              {Profile.about}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-2 sm:space-y-3">
            <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-center md:text-left">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base py-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base py-1"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/certifications"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base py-1"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base py-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-end space-y-2 sm:space-y-3">
            <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1">Follow Me</h3>
            <div className="flex gap-3 sm:gap-4">
              <a
                href={Profile.socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1 inline-block p-2 sm:p-2.5 rounded-lg hover:bg-accent/50"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href={Profile.socials[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1 inline-block p-2 sm:p-2.5 rounded-lg hover:bg-accent/50"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/40 text-center text-muted-foreground text-xs sm:text-sm">
          © {new Date().getFullYear()} • {Profile.name}
        </div>
      </footer>

    </div>
  );
}
