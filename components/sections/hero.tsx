"use client";

import { personalInfo } from "@/app/data/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

export function HeroSection() {
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
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18,
      },
    },
  };


  return (
    <section id="hero" className="relative flex flex-col justify-center min-h-[calc(100vh-3.5rem)] py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 max-w-3xl"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-foreground leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 select-none">
              {personalInfo.name}
            </span>.
            <br />
            <span className="text-foreground/90">{personalInfo.role}</span>.
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            {personalInfo.tagline}
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="pt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="rounded-full group shadow-md shadow-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300" render={<a href="#projects" />} nativeButton={false}>
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full backdrop-blur-sm bg-background/20" render={<a href="#contact" />} nativeButton={false}>
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

