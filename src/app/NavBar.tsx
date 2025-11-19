import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 border-b border-border/40 backdrop-blur-md bg-background/80 shadow-sm z-50">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">

       
        <Link
          to="/"
          className="font-bold text-2xl tracking-tight hover:text-primary transition-all duration-300 hover:scale-105"
        >
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            RIHAL Portfolio
          </span>
        </Link>

   
        <div className="hidden md:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-2">

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/experience" 
                    className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all duration-300 hover:scale-105"
                  >
                    Experience
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/education" 
                    className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all duration-300 hover:scale-105"
                  >
                    Formation
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/projects" 
                    className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all duration-300 hover:scale-105"
                  >
                    Projects
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/certifications" 
                    className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all duration-300 hover:scale-105"
                  >
                    Certifications
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/galerie" 
                    className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all duration-300 hover:scale-105"
                  >
                    Galerie
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/contact" 
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

    
        <button
          className="md:hidden p-2 rounded-lg hover:bg-accent transition-all duration-300 active:scale-95"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
        </button>

      </nav>

    
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md px-6 py-4 space-y-2 animate-fade-in">
          <Link 
            to="/experience" 
            className="block px-4 py-3 rounded-lg hover:bg-accent transition-all duration-300 font-medium" 
            onClick={() => setOpen(false)}
          >
            Experience
          </Link>
          <Link 
            to="/education" 
            className="block px-4 py-3 rounded-lg hover:bg-accent transition-all duration-300 font-medium" 
            onClick={() => setOpen(false)}
          >
            Formation
          </Link>
          <Link 
            to="/projects" 
            className="block px-4 py-3 rounded-lg hover:bg-accent transition-all duration-300 font-medium" 
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link 
            to="/certifications" 
            className="block px-4 py-3 rounded-lg hover:bg-accent transition-all duration-300 font-medium" 
            onClick={() => setOpen(false)}
          >
            Certifications
          </Link>
          <Link 
            to="/galerie" 
            className="block px-4 py-3 rounded-lg hover:bg-accent transition-all duration-300 font-medium" 
            onClick={() => setOpen(false)}
          >
            Galerie
          </Link>
          <Link 
            to="/contact" 
            className="block px-4 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium" 
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
