import type { PortfolioId, Project } from "@/data/types"

export const PROJECTS: readonly Project[] = [
  {
    id: "exisaabi",
    title: "E-xisaabi",
    href: "https://exisaabi.app",
    dates: "2024 – Present",
    active: true,
    description:
      "Financial management software for small businesses — accounting, bookkeeping, and clearer day-to-day money operations.",
    links: [{ type: "Preview", href: "https://exisaabi.app" }],
    image: "/projects/exisaabi-cover.jpg",
    video: "",
    portfolios: ["se"],
  },
  {
    id: "maragcloud",
    title: "MaragCloud",
    href: "https://maragcloud.vercel.app/",
    dates: "2025",
    active: true,
    description:
      "Notary management system that digitises and organises notary office operations.",
    links: [{ type: "Preview", href: "https://maragcloud.vercel.app/" }],
    image: "/projects/maragcloud.jpg",
    video: "",
    portfolios: ["se"],
  },
  {
    id: "trackly-ai",
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
    portfolios: ["se"],
  },
  {
    id: "som-scholarships",
    title: "SomScholarships",
    href: "https://som-scholarships.vercel.app/",
    dates: "2025 – Present",
    active: true,
    description:
      "Scholarship discovery for Somali students — verified eligibility, real deadlines, and links to official sources.",
    links: [
      { type: "Preview", href: "https://som-scholarships.vercel.app/" },
    ],
    image: "/projects/som-scholarships.jpg",
    video: "",
    portfolios: ["se"],
  },
  {
    id: "apams",
    title: "Annual Planning and Activities Management System",
    href: "https://casritek.vercel.app/work/apams",
    dates: "2025",
    active: true,
    description:
      "APAMS — a digital management information system supporting institutional annual planning and activity tracking.",
    links: [
      { type: "Preview", href: "https://casritek.vercel.app/work/apams" },
    ],
    image: "/projects/apams.jpg",
    video: "",
    portfolios: ["se", "ict", "public"],
    presentations: {
      ict: "APAMS — institutional information system for annual planning and activity tracking, supporting day-to-day digital operations for planning workflows.",
      public:
        "APAMS — a management information system built for institutional annual planning and activity tracking in a public-sector context.",
    },
  },
  {
    id: "prison-management",
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
    portfolios: ["se", "ict", "public"],
    presentations: {
      ict: "Custodial information system for Central Prison Kismayo — records and administrative workflows, with attention to reliable day-to-day system use.",
      public:
        "Custodial information system for Central Prison Kismayo — prisoner records and administrative workflows under the Ministry of Justice.",
    },
  },
  {
    id: "casritek",
    title: "Casritek",
    href: "https://casritek.vercel.app",
    dates: "2024 – Present",
    active: true,
    description:
      "Agency site for Casritek — ICT solutions, software, and digital services with a calm, conversion-focused layout.",
    links: [{ type: "Preview", href: "https://casritek.vercel.app" }],
    image: "/projects/casritek.png",
    video: "",
    portfolios: ["se", "ict", "public"],
    presentations: {
      ict: "Casritek — agency presence for ICT solutions, software, and digital services for organisations that need practical technology support.",
      public:
        "Casritek — digital and software services for businesses, NGOs, and public institutions.",
    },
  },
  {
    id: "noya-spa",
    title: "Noya SPA",
    href: "http://noyaspa.so/",
    dates: "2025",
    active: true,
    description:
      "Bilingual booking website for a Mogadishu beauty and wellness studio, built around appointments and WhatsApp enquiries.",
    links: [{ type: "Preview", href: "http://noyaspa.so/" }],
    image: "/projects/noya-spa.jpg",
    video: "",
    portfolios: ["se"],
  },
  {
    id: "blue-plastic",
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
    portfolios: ["se"],
  },
  {
    id: "bbc-materials",
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
    portfolios: ["se"],
  },
  {
    id: "agan-hotel",
    title: "Agan Place Hotel",
    href: "https://agan-hotel.vercel.app/",
    dates: "2025",
    active: true,
    description:
      "Hospitality website covering rooms, events, and enquiries, with booking as the primary call to action.",
    links: [{ type: "Preview", href: "https://agan-hotel.vercel.app/" }],
    image: "/projects/agan-hotel.jpg",
    video: "",
    portfolios: ["se"],
  },
  {
    id: "e-safar",
    title: "e-safar",
    href: "https://esafar.vercel.app",
    dates: "2024",
    active: true,
    description:
      "Flight booking platform streamlining travel planning with secure payments and a clean booking flow.",
    links: [{ type: "Preview", href: "https://esafar.vercel.app" }],
    image: "/projects/esafar.png",
    video: "",
    portfolios: ["se"],
  },
]

export function projectsFor(
  portfolio: PortfolioId
): Array<{
  title: string
  href: string
  dates: string
  description: string
  image: string
  links: readonly { type: string; href: string }[]
}> {
  return PROJECTS.filter((p) => p.portfolios.includes(portfolio)).map((p) => ({
    title: p.title,
    href: p.href,
    dates: p.dates,
    description: p.presentations?.[portfolio] ?? p.description,
    image: p.image,
    links: p.links,
  }))
}
