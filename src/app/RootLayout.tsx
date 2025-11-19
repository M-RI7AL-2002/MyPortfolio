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
import { Outlet, Link } from "react-router-dom";

import Navbar from "./NavBar";
import { Github, Linkedin } from "lucide-react";
export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground">

      {/* HEADER */}
      <Navbar/>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-7xl px-6 py-8 min-h-[800px]">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border/40 bg-background/95 backdrop-blur-sm py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* About */}
          <div className="text-center md:text-left space-y-3">
            <h2 className="font-bold text-xl text-foreground">{Profile.name}</h2>
            <h3> {Profile.role}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
             
             Location : {Profile.location}
             
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="font-semibold text-base text-foreground mb-1">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/projects"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <h3 className="font-semibold text-base text-foreground mb-1">Follow Me</h3>
            <ul className="space-y-2">
              <li>
                
                  <a
                    href={Profile.socials[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
            </li>
            <li>
               
                  <a
                    href={Profile.socials[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    <Github className="w-5 h-5" />
                  </a>
            </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 pt-6 border-t border-border/40 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} • {Profile.name}
        </div>
      </footer>

    </div>
  );
}
