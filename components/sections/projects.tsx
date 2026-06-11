"use client";

import { projects } from "@/app/data/portfolio";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code } from "lucide-react";
import { motion } from "framer-motion";

function ProjectMockup({ id }: { id: number }) {
  if (id === 1) {
    // E-Commerce wireframe
    return (
      <svg className="w-full h-full text-indigo-500/30 dark:text-indigo-400/20 stroke-current" viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="225" fill="none" />
        <circle cx="200" cy="112" r="45" strokeWidth="1.5" strokeDasharray="4 4" />
        <rect x="120" y="87" width="160" height="50" rx="8" strokeWidth="2" fill="currentColor" fillOpacity="0.03" />
        <path d="M150 112H250M180 97V127" strokeWidth="2" strokeLinecap="round" />
        <circle cx="250" cy="97" r="3" fill="currentColor" />
        <path d="M40 40H360M40 185H360" strokeWidth="1" strokeOpacity="0.5" />
      </svg>
    );
  }
  if (id === 2) {
    // Task App wireframe
    return (
      <svg className="w-full h-full text-indigo-500/30 dark:text-indigo-400/20 stroke-current" viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="225" fill="none" />
        <rect x="50" y="45" width="85" height="135" rx="6" strokeWidth="1.5" fill="currentColor" fillOpacity="0.03" />
        <rect x="157" y="45" width="85" height="135" rx="6" strokeWidth="1.5" fill="currentColor" fillOpacity="0.03" />
        <rect x="265" y="45" width="85" height="135" rx="6" strokeWidth="1.5" fill="currentColor" fillOpacity="0.03" />
        <line x1="60" y1="65" x2="125" y2="65" strokeWidth="1.5" />
        <line x1="167" y1="65" x2="232" y2="65" strokeWidth="1.5" />
        <line x1="275" y1="65" x2="340" y2="65" strokeWidth="1.5" />
        <rect x="60" y="80" width="65" height="20" rx="4" fill="currentColor" fillOpacity="0.1" strokeWidth="1" />
        <rect x="167" y="80" width="65" height="35" rx="4" fill="currentColor" fillOpacity="0.1" strokeWidth="1" />
        <rect x="275" y="80" width="65" height="25" rx="4" fill="currentColor" fillOpacity="0.1" strokeWidth="1" />
      </svg>
    );
  }
  // Portfolio template wireframe
  return (
    <svg className="w-full h-full text-indigo-500/30 dark:text-indigo-400/20 stroke-current" viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="225" fill="none" />
      <rect x="60" y="35" width="280" height="155" rx="8" strokeWidth="1.5" fill="currentColor" fillOpacity="0.03" />
      <circle cx="85" cy="50" r="3" fill="currentColor" />
      <circle cx="95" cy="50" r="3" fill="currentColor" />
      <circle cx="105" cy="50" r="3" fill="currentColor" />
      <line x1="60" y1="65" x2="340" y2="65" strokeWidth="1" />
      <path d="M130 100L110 120L130 140M270 100L290 120L270 140" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="180" y1="145" x2="220" y2="95" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/10 dark:bg-muted/5 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-heading font-bold mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="flex"
            >
              <Card className="group flex flex-col border-border/40 bg-background/40 backdrop-blur-sm overflow-hidden hover:border-indigo-500/30 hover:shadow-xl dark:hover:shadow-indigo-500/5 transition-all duration-300 w-full">
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 border-b border-border/40 flex items-center justify-center">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-[0.05]" />
                  <div className="w-full h-full transform group-hover:scale-[1.04] transition-transform duration-500 ease-out flex items-center justify-center">
                    <ProjectMockup id={project.id} />
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs bg-background/50 border-border/50 select-none">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 pb-6">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardContent>
                
                <CardFooter className="flex gap-4 pt-4 border-t border-border/30 bg-muted/10 dark:bg-muted/5">
                  <Button variant="default" size="sm" className="rounded-full cursor-pointer" render={<a href={project.liveUrl} target="_blank" rel="noreferrer" />} nativeButton={false}>
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full cursor-pointer backdrop-blur-sm bg-background/30" render={<a href={project.githubUrl} target="_blank" rel="noreferrer" />} nativeButton={false}>
                    <Code className="mr-2 h-4 w-4" /> Source
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

