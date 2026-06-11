import { Mail, GitBranch, Briefcase, MessageCircle } from "lucide-react";

export const personalInfo = {
  name: "Jhon Doe",
  role: "Full Stack Engineer",
  tagline: "I build fast, accessible, and beautiful web applications.",
  bio: "With over 2 years of experience in web development, I specialize in creating intuitive user interfaces and robust backend systems. I am passionate about modern web technologies and user-centric design.",
  email: process.env.NEXT_PUBLIC_EMAIL || "hello@janedoe.com",
  socials: [
    { name: "GitHub", url: "https://github.com", icon: GitBranch },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Briefcase },
    { name: "Twitter", url: "https://twitter.com", icon: MessageCircle },
    { name: "Email", url: `mailto:${process.env.NEXT_PUBLIC_EMAIL || "hello@janedoe.com"}`, icon: Mail },
  ],
};

export const experience = [
  {
    id: 1,
    role: "Associate (SDE II)",
    company: "Deutsche Bank",
    duration: "2019 - Present",
    description: "Worked on the Avaya Aura Platform and maintained multiple client projects using React, Node.js, and Tailwind CSS. Implemented a custom CMS for content management.",
  },
  {
    id: 2,
    role: "Intern",
    company: "Avaya",
    duration: "6 months",
    description: "Led the frontend team in migrating a legacy monolith to a modern Next.js architecture, improving performance by 40% and developer velocity.",
  },
];

export const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "GraphQL"],
  tools: ["Git", "Docker", "Figma", "Jest", "CI/CD"],
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution built with Next.js App Router, Stripe for payments, and a headless CMS. Features server-side rendering for optimal SEO.",
    image: "/placeholder-project-1.jpg",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Sanity"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates using WebSockets, drag-and-drop functionality, and comprehensive analytics.",
    image: "/placeholder-project-2.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Portfolio Template",
    description: "A minimalist, open-source developer portfolio template. Highly customizable and built with performance and accessibility in mind.",
    image: "/placeholder-project-3.jpg",
    tags: ["Next.js", "shadcn/ui", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];
