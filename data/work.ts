import type { WorkEntry } from "@/data/types"

export const WORK: readonly WorkEntry[] = [
  {
    id: "exisaabi",
    company: "E-xisaabi",
    badges: [],
    href: "https://exisaabi.app",
    location: "Somalia",
    title: "Co-founder & CTO",
    logoUrl: "/exisaabi.jpeg",
    start: "March 2024",
    end: "Present",
    description:
      "Co-founded financial management software for small businesses. As CTO, lead product architecture, engineering, core accounting features, UX, performance, and client onboarding.",
    portfolios: ["se"],
  },
  {
    id: "casritek",
    company: "Casritek",
    badges: [],
    href: "https://casritek.com",
    location: "Somalia",
    title: "Founder & CEO",
    logoUrl: "/casritek-logo.jpg",
    start: "Nov 2024",
    end: "Present",
    description:
      "Digital and software agency building websites, custom systems, and digital platforms for businesses, NGOs, and public institutions. Lead discovery, design, engineering, and post-launch support end to end.",
    portfolios: ["se", "ict", "public"],
    presentations: {
      ict: "Through Casritek I deliver ICT solutions, digital platforms, and post-launch support for businesses, NGOs, and public institutions — covering discovery, design, engineering, and ongoing operations.",
      public:
        "Through Casritek I work with NGOs and public institutions on websites, custom information systems, and digital platforms — from discovery through delivery and post-launch support.",
    },
  },
  {
    id: "maragcloud",
    company: "MaragCloud",
    badges: [],
    href: "https://maragcloud.vercel.app/",
    location: "Somalia",
    title: "Founder",
    logoUrl: "/maragcloud-mark.png",
    start: "2025",
    end: "Present",
    description:
      "Cloud notary management system for notary offices — document preparation, digital register with reference numbers, clients, payments, staff permissions, and a secure archive, in English and Somali.",
    portfolios: ["se"],
  },
  {
    id: "trackly-ai",
    company: "Trackly AI",
    badges: [],
    href: "https://personal-performance-app-api.vercel.app/",
    location: "Somalia",
    title: "Founder",
    logoUrl: "/trackly-logo.png",
    start: "2025",
    end: "Present",
    description:
      "Building an AI-powered personal performance mobile OS — habits, nutrition, workouts, recovery, and coaching in one offline-first product.",
    portfolios: ["se"],
  },
]
