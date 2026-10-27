import type { PortfolioConfig } from "@/data/types"

export const SE_PORTFOLIO: PortfolioConfig = {
  id: "se",
  url: "https://abdikadirqulle.com",
  title: "Abdikadir Qulle",
  description:
    "Full-stack developer and founder. I design and build websites, software, and systems that help organisations work better.",
  summary:
    "I'm Abdikadir Qulle — a software developer and founder based in Somalia. Through Casritek I build websites and custom systems for businesses, NGOs, and institutions. I also co-founded E-xisaabi, financial software for small businesses. I care about clear product thinking, solid engineering, and work that lasts after launch.",
  headline: "Full stack software engineer",
  nav: [
    { href: "/#projects", label: "Work" },
    { href: "/blog", label: "Blog" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ],
  skills: {
    development: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "Go",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Tailwind CSS",
      "REST APIs",
      "System Design",
    ],
    devops: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "Linux",
      "AWS",
      "Vercel",
      "Cloudflare",
      "Monitoring",
    ],
    soft: [
      "Leadership",
      "Communication",
      "Problem Solving",
      "Client Relations",
      "Mentoring",
      "Product Thinking",
      "Team Collaboration",
    ],
  },
  projectsHeading: "Selected work",
  projectsIntro:
    "Websites and systems for businesses, hotels, and institutions.",
  contactHeading: "Let's build something.",
  contactBody:
    "A new website, software for your team, or something you're still working out.",
  ctaLabel: "Start a project",
  siblingLabel: "Software engineering",
}
