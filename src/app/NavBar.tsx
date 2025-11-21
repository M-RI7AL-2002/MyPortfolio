import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/experience", label: "Experience" },
    { path: "/education", label: "Formation" },
    { path: "/projects", label: "Projects" },
    { path: "/certifications", label: "Certifications" },
    { path: "/galerie", label: "Galerie" },
    { path: "/contact", label: "Contact", isPrimary: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 border-b border-border/40 backdrop-blur-md bg-background/80 shadow-sm z-50"
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="font-bold text-2xl tracking-tight hover:text-primary transition-all duration-300"
          >
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/70 bg-clip-text text-transparent">
              RIHAL Portfolio
            </span>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <NavigationMenuLink asChild>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={item.path}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                          item.isPrimary
                            ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg"
                            : isActive(item.path)
                            ? "text-primary bg-accent"
                            : "text-foreground/80 hover:text-foreground hover:bg-accent"
                        }`}
                      >
                        {item.label}
                        {isActive(item.path) && !item.isPrimary && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                            initial={false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 rounded-lg hover:bg-accent transition-all duration-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X size={24} className="text-foreground" />
          ) : (
            <Menu size={24} className="text-foreground" />
          )}
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                      item.isPrimary
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : isActive(item.path)
                        ? "bg-accent text-primary"
                        : "hover:bg-accent"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
