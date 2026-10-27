import type { PortfolioConfig } from "@/data/types"

export const PUBLIC_PORTFOLIO: PortfolioConfig = {
  id: "public",
  url: "https://public.abdikadirqulle.com",
  title: "Abdikadir Qulle — Government & Public Sector",
  description:
    "Personal professional portfolio focused on government ICT, institutional information systems, and public-sector digital projects.",
  summary:
    "I'm Abdikadir Qulle — a software developer and founder based in Somalia. Through Casritek I build websites and custom systems for NGOs and public institutions, including institutional planning and custodial information systems. This site highlights that public-sector work; it is a personal professional portfolio, not an official government website.",
  headline: "Government ICT & public-sector systems",
  nav: [
    { href: "/#profile", label: "Profile" },
    { href: "/#experience", label: "Experience" },
    { href: "/#systems", label: "Systems" },
    { href: "/#contact", label: "Contact" },
  ],
  skills: {
    systems: [
      "System Design",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Node.js",
      "TypeScript",
      "Next.js",
    ],
    delivery: [
      "Communication",
      "Client Relations",
      "Problem Solving",
      "Leadership",
      "Team Collaboration",
    ],
  },
  projectsHeading: "Institutional systems",
  projectsIntro:
    "Information systems and digital platforms built for institutional and public-sector contexts.",
  contactHeading: "Start a conversation",
  contactBody:
    "For institutional systems, public-sector digital projects, or related professional enquiries.",
  ctaLabel: "Email me",
  siblingLabel: "Government & public sector",
}
