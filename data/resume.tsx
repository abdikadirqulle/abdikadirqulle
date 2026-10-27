import { Icons } from "@/components/icons"

export const DATA = {
  name: "Abdikadir Qulle",
  initials: "AQ",
  url: "https://abdikadirqulle.com",
  location: "Based in Somalia",
  locationLink: "https://www.google.com/maps/place/somalia",
  description:
    "Full-stack developer and founder. I design and build websites, software, and systems that help organisations work better.",
  summary:
    "I'm Abdikadir Qulle — a software developer and founder based in Somalia. Through Casritek I build websites and custom systems for businesses, NGOs, and institutions. I also co-founded E-xisaabi, financial software for small businesses. I care about clear product thinking, solid engineering, and work that lasts after launch.",
  avatarUrl: "/abdikadirqulle.jpeg",
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
  contact: {
    /** Primary inbox for CTAs (Start a project, mailto buttons). */
    email: "abdikadirqulle@gmail.com",
    emails: [
      "abdikadirqulle@gmail.com",
      "hello@abdikadirqulle.com",
    ],
    tel: "+252 61 7797802",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abdikadirqulle",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/abdikadirqulle",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/abdikadirqulle",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/abdikadirqulle",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:abdikadirqulle@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
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
    },
    {
      company: "Casritek",
      href: "https://casritek.com",
      badges: [],
      location: "Somalia",
      title: "Founder & CEO",
      logoUrl: "/casritek-logo.jpg",
      start: "Nov 2024",
      end: "Present",
      description:
        "Digital and software agency building websites, custom systems, and digital platforms for businesses, NGOs, and public institutions. Lead discovery, design, engineering, and post-launch support end to end.",
    },
    {
      company: "MaragCloud",
      href: "https://maragcloud.vercel.app/",
      badges: [],
      location: "Somalia",
      title: "Founder",
      logoUrl: "/maragcloud-mark.png",
      start: "2025",
      end: "Present",
      description:
        "Cloud notary management system for notary offices — document preparation, digital register with reference numbers, clients, payments, staff permissions, and a secure archive, in English and Somali.",
    },
    {
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
    },
  ],
  education: [
    {
      school: "Kismayo University",
      href: "https://ku.edu.so/",
      degree: "Bachelor's Degree of Information Technology (IT)",
      logoUrl: "/KU-logo.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "E-xisaabi",
      href: "https://exisaabi.app",
      dates: "2024 – Present",
      active: true,
      description:
        "Financial management software for small businesses — accounting, bookkeeping, and clearer day-to-day money operations.",
      links: [
        {
          type: "Preview",
          href: "https://exisaabi.app",
        },
      ],
      image: "/projects/exisaabi-cover.jpg",
      video: "",
    },
    {
      title: "MaragCloud",
      href: "https://maragcloud.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Notary management system that digitises and organises notary office operations.",
      links: [
        {
          type: "Preview",
          href: "https://maragcloud.vercel.app/",
        },
      ],
      image: "/projects/maragcloud.jpg",
      video: "",
    },
    {
      title: "Trackly AI",
      href: "https://personal-performance-app-api.vercel.app/",
      dates: "2025 – Present",
      active: true,
      description:
        "AI-powered personal performance mobile OS — habits, nutrition, workouts, recovery, and coaching in one system.",
      links: [
        {
          type: "Preview",
          href: "https://personal-performance-app-api.vercel.app/",
        },
      ],
      image: "/projects/trackly-ai.jpg",
      video: "",
    },
    {
      title: "SomScholarships",
      href: "https://som-scholarships.vercel.app/",
      dates: "2025 – Present",
      active: true,
      description:
        "Scholarship discovery for Somali students — verified eligibility, real deadlines, and links to official sources.",
      links: [
        {
          type: "Preview",
          href: "https://som-scholarships.vercel.app/",
        },
      ],
      image: "/projects/som-scholarships.jpg",
      video: "",
    },
    {
      title: "Annual Planning and Activities Management System",
      href: "https://casritek.vercel.app/work/apams",
      dates: "2025",
      active: true,
      description:
        "APAMS — a digital management information system supporting institutional annual planning and activity tracking.",
      links: [
        {
          type: "Preview",
          href: "https://casritek.vercel.app/work/apams",
        },
      ],
      image: "/projects/apams.jpg",
      video: "",
    },
    {
      title: "Prison Management System",
      href: "https://casritek.vercel.app/work/kismayo-prison",
      dates: "2025",
      active: true,
      description:
        "Custodial information system for Central Prison Kismayo — prisoner records and administrative workflows under the Ministry of Justice.",
      links: [
        {
          type: "Preview",
          href: "https://casritek.vercel.app/work/kismayo-prison",
        },
      ],
      image: "/projects/prison-system.jpg",
      video: "",
    },
    {
      title: "Casritek",
      href: "https://casritek.vercel.app",
      dates: "2024 – Present",
      active: true,
      description:
        "Agency site for Casritek — ICT solutions, software, and digital services with a calm, conversion-focused layout.",
      links: [
        {
          type: "Preview",
          href: "https://casritek.vercel.app",
        },
      ],
      image: "/projects/casritek.png",
      video: "",
    },
    {
      title: "Noya SPA",
      href: "http://noyaspa.so/",
      dates: "2025",
      active: true,
      description:
        "Bilingual booking website for a Mogadishu beauty and wellness studio, built around appointments and WhatsApp enquiries.",
      links: [
        {
          type: "Preview",
          href: "http://noyaspa.so/",
        },
      ],
      image: "/projects/noya-spa.jpg",
      video: "",
    },
    {
      title: "Blue Plastic Center",
      href: "https://casritek.vercel.app/work/blue-plastic",
      dates: "2025",
      active: true,
      description:
        "Website and business platform for a plastics supply company — public storefront out front, accounting and stock system behind it.",
      links: [
        {
          type: "Preview",
          href: "https://casritek.vercel.app/work/blue-plastic",
        },
      ],
      image: "/projects/blue-plastic.jpg",
      video: "",
    },
    {
      title: "BBC Materials",
      href: "https://casritek.vercel.app/work/bbs-company",
      dates: "2025",
      active: true,
      description:
        "Business website for a Kismayo wholesale supplier of plumbing, building materials, and construction supplies.",
      links: [
        {
          type: "Preview",
          href: "https://casritek.vercel.app/work/bbs-company",
        },
      ],
      image: "/projects/bbc-materials.jpg",
      video: "",
    },
    {
      title: "Agan Place Hotel",
      href: "https://agan-hotel.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Hospitality website covering rooms, events, and enquiries, with booking as the primary call to action.",
      links: [
        {
          type: "Preview",
          href: "https://agan-hotel.vercel.app/",
        },
      ],
      image: "/projects/agan-hotel.jpg",
      video: "",
    },
    {
      title: "e-safar",
      href: "https://esafar.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Flight booking platform streamlining travel planning with secure payments and a clean booking flow.",
      links: [
        {
          type: "Preview",
          href: "https://esafar.vercel.app",
        },
      ],
      image: "/projects/esafar.png",
      video: "",
    },
  ],
  hackathons: [],
} as const
