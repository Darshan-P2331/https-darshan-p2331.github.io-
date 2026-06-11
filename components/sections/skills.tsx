"use client";

import { skills } from "@/app/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";

export function SkillsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };


  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-heading font-bold mb-12"
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Frontend */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 p-6 rounded-2xl border border-border/40 bg-background/30 dark:bg-background/20 backdrop-blur-sm hover:border-indigo-500/20 hover:shadow-lg dark:hover:shadow-indigo-500/5 transition-all duration-300"
          >
            <h3 className="text-xl font-heading font-semibold text-indigo-500 dark:text-indigo-400">Frontend</h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {skills.frontend.map((skill) => (
                <motion.div key={skill} variants={itemVariants} whileHover={{ scale: 1.06 }} className="cursor-default">
                  <Badge variant="secondary" className="px-3 py-1 text-sm rounded-full bg-secondary/70 hover:bg-indigo-500 hover:text-white transition-colors duration-200">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Backend */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 p-6 rounded-2xl border border-border/40 bg-background/30 dark:bg-background/20 backdrop-blur-sm hover:border-indigo-500/20 hover:shadow-lg dark:hover:shadow-indigo-500/5 transition-all duration-300"
          >
            <h3 className="text-xl font-heading font-semibold text-indigo-500 dark:text-indigo-400">Backend</h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {skills.backend.map((skill) => (
                <motion.div key={skill} variants={itemVariants} whileHover={{ scale: 1.06 }} className="cursor-default">
                  <Badge variant="secondary" className="px-3 py-1 text-sm rounded-full bg-secondary/70 hover:bg-indigo-500 hover:text-white transition-colors duration-200">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Tools */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 p-6 rounded-2xl border border-border/40 bg-background/30 dark:bg-background/20 backdrop-blur-sm hover:border-indigo-500/20 hover:shadow-lg dark:hover:shadow-indigo-500/5 transition-all duration-300"
          >
            <h3 className="text-xl font-heading font-semibold text-indigo-500 dark:text-indigo-400">Tools</h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {skills.tools.map((skill) => (
                <motion.div key={skill} variants={itemVariants} whileHover={{ scale: 1.06 }} className="cursor-default">
                  <Badge variant="secondary" className="px-3 py-1 text-sm rounded-full bg-secondary/70 hover:bg-indigo-500 hover:text-white transition-colors duration-200">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

