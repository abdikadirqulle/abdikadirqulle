import { Icons } from "@/components/icons"
import { HomeIcon, NotebookIcon } from "lucide-react"

export const DATA = {
  name: "Abdikadir Qulle",
  initials: "AQ",
  url: "https://abdikadirqulle.com",
  location: "Kismayo, Somalia",
  locationLink: "https://www.google.com/maps/place/kismayo",
  description:
    "Full-stack developer and founder. I design and build websites, software, and systems that help organisations work better.",
  summary:
    "I'm Abdikadir Qulle — a software developer and founder based in Somalia. Through Casritek I build websites and custom systems for businesses, NGOs, and institutions. I also co-founded E-xisaabi, financial software for small businesses. I care about clear product thinking, solid engineering, and work that lasts after launch.",
  avatarUrl: "/abdikadirqulle.jpeg",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Go",
    "PostgreSQL",
    "Docker",
    "Prisma",
    "Tailwind CSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "abdikadirqulle@gmail.com",
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
        navbar: true,
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
      company: "Casritek",
      href: "https://casritek.com",
      badges: [],
      location: "Kismayo, Somalia",
      title: "Founder & CEO",
      logoUrl: "/casritek-logo.jpg",
      start: "Nov 2024",
      end: "Present",
      description:
        "Digital and software agency building websites, custom systems, and digital platforms for businesses, NGOs, and public institutions. Lead discovery, design, engineering, and post-launch support end to end.",
    },
    {
      company: "E-xisaabi",
      badges: [],
      href: "https://exisaabi.app",
      location: "Kismayo, Somalia",
      title: "Co-founder",
      logoUrl: "/exisaabi.jpeg",
      start: "March 2024",
      end: "Present",
      description:
        "Co-founded financial management software for small businesses. Led product development, core accounting features, UX, and client onboarding.",
    },
    {
      company: "e-safar",
      badges: [],
      href: "https://esafar.app",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/esafar_app.jpg",
      start: "July 2024",
      end: "Sept 2024",
      description:
        "Digital ticketing platform for public transport. Built backend APIs, payment integrations, and analytics for operators and passengers.",
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
      title: "Blue Plastic Center",
      href: "https://casritek.vercel.app",
      dates: "2025",
      active: true,
      description:
        "Website and business platform for a plastics supply company — public storefront out front, accounting and stock system behind it.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      links: [
        {
          type: "Agency",
          href: "https://casritek.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/casritek.png",
      video: "",
    },
    {
      title: "BBC Materials",
      href: "https://casritek.vercel.app",
      dates: "2025",
      active: true,
      description:
        "Business website for a Kismayo wholesale supplier of plumbing, building materials, and construction supplies.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: [
        {
          type: "Agency",
          href: "https://casritek.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/casritek.png",
      video: "",
    },
    {
      title: "Agan Place Hotel",
      href: "https://casritek.vercel.app",
      dates: "2025",
      active: true,
      description:
        "Hospitality website covering rooms, events, and enquiries, with booking as the primary call to action.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: [
        {
          type: "Agency",
          href: "https://casritek.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/casritek.png",
      video: "",
    },
    {
      title: "Noya SPA",
      href: "https://casritek.vercel.app",
      dates: "2025",
      active: true,
      description:
        "Bilingual booking website for a Mogadishu beauty and wellness studio, built around appointments and WhatsApp enquiries.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: [
        {
          type: "Agency",
          href: "https://casritek.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/casritek.png",
      video: "",
    },
    {
      title: "APAMS",
      href: "https://casritek.vercel.app",
      dates: "2025",
      active: true,
      description:
        "Annual Planning and Activities Management System — digital MIS supporting institutional planning and activity tracking.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      links: [
        {
          type: "Agency",
          href: "https://casritek.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/staff-manager.png",
      video: "",
    },
    {
      title: "MaragCloud",
      href: "https://casritek.vercel.app",
      dates: "2025",
      active: true,
      description:
        "Notary management system that digitises and organises notary office operations.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      links: [
        {
          type: "Agency",
          href: "https://casritek.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/hosbital-m-system.png",
      video: "",
    },
    {
      title: "Casritek",
      href: "https://casritek.vercel.app",
      dates: "2024 – Present",
      active: true,
      description:
        "Agency site for Casritek — ICT solutions, software, and digital services. Built with Next.js and a calm, conversion-focused layout.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://casritek.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/casritek.png",
      video: "",
    },
    {
      title: "Staff Manager",
      href: "https://github.com/abdikadirqulle/hotel-staff-management",
      dates: "2024 – 2025",
      active: true,
      description:
        "Hotel staff management for schedules, attendance, and performance — role-based access and real-time updates.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abdikadirqulle/hotel-staff-management",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/staff-manager.png",
      video: "",
    },
    {
      title: "e-safar",
      href: "https://esafar.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Flight booking platform streamlining travel planning with secure payments and a clean booking flow.",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Prisma",
        "Redux",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://esafar.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/esafar.png",
      video: "",
    },
    {
      title: "LearnZone",
      href: "https://learnzone-rho.vercel.app",
      dates: "2024",
      active: true,
      description:
        "E-learning platform for publishing and consuming courses.",
      technologies: ["React", "MongoDB", "Prisma", "AWS", "Clerk", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://learnzone-rho.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abdikadirqulle/Learnzone/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/learnZone.png",
      video: "",
    },
  ],
  hackathons: [],
} as const
