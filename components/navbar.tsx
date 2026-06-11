"use client";

import * as React from "react";
import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = React.useState("hero");

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset slightly to account for the floating navbar height
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: id === "hero" ? 0 : y, behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Focus on the middle-upper part of the screen
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex h-12 items-center gap-1 md:gap-2 rounded-full border border-border/40 bg-background/60 dark:bg-background/40 backdrop-blur-md px-3 md:px-4 shadow-lg shadow-black/5 dark:shadow-black/20 max-w-full">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="mr-2 md:mr-4 flex items-center font-heading font-bold text-sm text-foreground select-none hover:opacity-85 transition-opacity"
        >
          DP
        </a>

        <div className="flex items-center gap-0.5 md:gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-2.5 py-1 text-xs md:text-sm font-medium rounded-full transition-colors cursor-pointer select-none outline-none ${activeSection === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {activeSection === item.id && (
                <motion.span
                  layoutId="active-nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-secondary/80 dark:bg-zinc-800/80 border border-border/50"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </button>
          ))}
        </div>

        <div className="ml-1 pl-2 border-l border-border/30 flex items-center">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}

