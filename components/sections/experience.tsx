"use client";

import { experience } from "@/app/data/portfolio";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden bg-muted/10 dark:bg-muted/5">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-heading font-bold mb-12"
        >
          Experience
        </motion.h2>

        <div className="relative border-l border-border/70 ml-4 md:ml-6 pl-6 md:pl-10 space-y-12">
          {/* Animated vertical timeline bar overlay */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute left-0 top-0 w-[1px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent origin-top"
          />

          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="relative group"
            >
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-6 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-background border border-indigo-500 flex items-center justify-center z-10">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.25, type: "spring" }}
                    className="h-2 w-2 rounded-full bg-indigo-500 group-hover:bg-pink-500 transition-colors duration-300" 
                  />
                </div>
                {/* Glow ring */}
                <div className="absolute h-8 w-8 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              <Card className="border-border/40 bg-background/40 backdrop-blur-sm hover:border-indigo-500/30 hover:shadow-lg dark:hover:shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-xl font-heading font-semibold group-hover:text-primary transition-colors duration-300">
                      {item.role}
                    </CardTitle>
                    <CardDescription className="font-semibold text-indigo-500 dark:text-indigo-400">
                      {item.duration}
                    </CardDescription>
                  </div>
                  <div className="text-lg font-medium text-muted-foreground">{item.company}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

