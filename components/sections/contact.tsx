"use client";

import { personalInfo } from "@/app/data/portfolio";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Localized subtle glow just for Contact section */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none" aria-hidden="true">
        <div className="w-[300px] h-[300px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/10 blur-[80px]" />
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto p-8 md:p-12 rounded-3xl border border-border/40 bg-background/30 dark:bg-background/20 backdrop-blur-md hover:border-indigo-500/20 hover:shadow-2xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/2 transition-all duration-500"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold mb-6"
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-10 leading-relaxed"
          >
            I&apos;m currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="rounded-full shadow-md shadow-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 group cursor-pointer" 
              render={<a href={`mailto:${personalInfo.email}`} />} 
              nativeButton={false}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" /> Say Hello
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

