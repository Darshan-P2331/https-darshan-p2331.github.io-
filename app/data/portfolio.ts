import { Briefcase, GitBranch, Mail } from "lucide-react";

export const personalInfo = {
  name: "Darshan P",
  role: "Full Stack Developer & AI Integrator",
  tagline: "I build fast, accessible, and beautiful web applications.",
  bio: "Software Engineer with 3+ years of experience architecting AI-powered Python ETL pipelines and scalable full-stack JavaScript applications.",
  email: process.env.NEXT_PUBLIC_EMAIL || "hello@janedoe.com",
  socials: [
    { name: "GitHub", url: "https://github.com/", icon: GitBranch },
    { name: "LinkedIn", url: "https://linkedin.com/", icon: Briefcase },
    { name: "Email", url: `mailto:${process.env.NEXT_PUBLIC_EMAIL || "hello@janedoe.com"}`, icon: Mail },
  ],
};

export const experience = [
  {
    id: 1,
    role: "Associate (SDE II)",
    company: "Deutsche Bank",
    duration: "2019 - Present",
    description: [
      {
        section: "AI & Machine Learning",
        points: [
          "Built high-impact automation tools using **Google Document AI** and **Gemini** to revolutionize document processing workflows in Tax Operations.",
          "Architected a unified, hybrid document processing pipeline enabling users to dynamically combine **DocAI** and **Gemini** processors for splitting, classifying, and extracting data in a single stream.",
          "Trained and fine-tuned machine learning models to accurately extract data and insights from complex structured and unstructured documents.",
        ],
      },
      {
        section: "Data Engineering & Big Data",
        points: [
          "Engineered a robust **Spark-based ETL** tool to consolidate massive, multi-source datasets into a centralized repository, streamlining tax reporting.",
          "Developed a configuration-driven file system utility for Linux and Hadoop that supports dynamic, partial data loading from various sources.",
          `**Slashed ETL** job times by architecting a fail-safe "resume" mechanism that restarts tasks from the exact stage of failure rather than from scratch.`
        ],
      },
    ],
  },
  {
    id: 2,
    role: "Intern",
    company: "Avaya",
    duration: "6 months",
    description: [
      {
        section: "Key Contributions",
        points: [
      "Contributed to the development of ASCI, a server health monitoring application that translates raw system logs into an intuitive, readable dashboard.",
      "Expanded backend data collection by writing and enhancing **Shell scripts** to extract additional critical system health metrics and package them into tar files for downstream processing.",
      "Refactored **Angular** components and updated **Kendo UI** configurations, improving code reusability and rendering complex system health data more accessible to end-users."
        ],
      },
    ],
  },
];

export const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express", "Python", "PostgreSQL", "Oracle", "MongoDB", "Asyncio", "Pandas", "Numpy", "Gemini", "Google Document AI"],
  tools: ["Git", "Control-M", "Jira", "GCP", "Confluence", "Hadoop"],
};

export const projects = [
  {
    id: 1,
    title: "Resto.",
    description: "A modern food ordering platform build with React.js, Node.js, Express.js, and MongoDB. It features a sleek UI, real-time order tracking, and seamless payment integration with PayPal.",
    image: "/placeholder-project-1.jpg",
    tags: ["React.js", "Express.js", "PayPal", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Darshan-P2331/resto",
  },
  {
    id: 2,
    title: "Homelab",
    description: "A small set of ansible tasks to automate the setup of a homelab server. It includes tasks for installing and configuring Docker, setting up a reverse proxy with Nginx, and deploying a few sample applications.",
    image: "/placeholder-project-2.jpg",
    tags: ["Ansible", "Docker", "Raspberry Pi", "Linux"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Darshan-P2331/homelab",
  },
];
