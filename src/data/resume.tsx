import { Icons } from "@/components/icons"
import { HomeIcon, NotebookIcon } from "lucide-react"

export const DATA = {
  name: "Abdikadir qulle",
  initials: "AQ",
  url: "https://abdikadirqulle.xyz",
  location: "Kismayo, Somalia",
  locationLink: "https://www.google.com/maps/place/kismayo",
  description:
    "Full-Stack Developer turned Tech Founder. Passionate about crafting scalable solutions and empowering communities through code. Active on LinkedIn/Twitter for tech insights and collaborations",
  summary:
    "Hello there! I'm Abdikadir Qulle, a passionate Software Developer based in Somalia. Welcome to my digital space, where creativity meets functionality, and lines of code transform into compelling solutions. I am a dedicated and passionate full stack developer committed to producing high-quality, efficient software. I am ready to leverage my vast skill set to contribute to your projects and drive success.",
  avatarUrl: "/abdikadirqulle.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
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
      company: "E-xisaabi",
      badges: [],
      href: "https://exisaabi.app",
      location: "Kismayo, Somalia",
      title: "Co-founder",
      logoUrl: "/exisaabi.jpeg",
      start: "March 2024",
      end: "Present",
      description:
        "Co-founded E-xisaabi, a financial management software platform. Led product development, team coordination, and implementation of core accounting and bookkeeping features tailored for small businesses. Oversaw user experience, performance optimization, and client onboarding."
    },
    {
      company: "Casritek",
      href: "https://casritek.com",
      badges: [],
      location: "Full-time",
      title: "Founder & CEO",
      logoUrl: "/casritek-logo.jpg",
      start: "Nov 2024",
      end: "Present",
      description:
        "Casritek is a modern web design and development agency focused on creating visually stunning, high-performing websites for businesses of all sizes. Contributed to building and launching responsive websites, collaborating closely with clients to refine branding and UX/UI. Led end-to-end project lifecycles from requirements gathering through deployment. Leveraged the latest web technologies to optimize performance, accessibility, and SEO. Assisted in designing scalable CMS solutions and integrating e-commerce functionality. Provided ongoing technical support and conducted training sessions for clients to ensure successful website adoption.",
    },
    {
      company: "e-safar app",
      badges: [],
      href: "https://esafar.app",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/esafar_app.jpg",
      start: "July 2024",
      end: "Sept 2024",
      description:
        "e-safar app is a digital electronic ticketing platform designed to modernize and streamline public transport payments and tracking. As a Software Engineer, contributed to building backend APIs, integrating secure payment gateways, and designing scalable cloud infrastructure for real-time data sync. Led the implementation of remote monitoring features and robust analytics dashboards, improving visibility and efficiency for operators and passengers.",
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
      title: "CasriTek",
      href: "https://casritek.vercel.app",
      dates: "nov 2024 - Present",
      active: true,
      description:
        "Modern web design and development agency platform. Built responsive websites with optimized performance, accessibility, and SEO. Integrated scalable CMS solutions and e-commerce functionality using Next.js and TypeScript.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
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
    // staff manager
    {
      title: "Staff Manager",
      href: "https://github.com/abdikadirqulle/hotel-staff-management",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "Hotel staff management system for tracking employee schedules, attendance, and performance. Built with Next.js and TypeScript, featuring role-based access control and real-time updates.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
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
    // esafar
    {
      title: "Online Flight Booking App",
      href: "https://esafar.vercel.app",
      dates: "July 2024 - Sept 2024",
      active: true,
      description:
        "Developing a secure and compliant flight booking platform that streamlines travel planning and booking.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Prisma",
        "TailwindCSS",
        "Redux",
        "Shadcn UI",
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
    // learnZone
    {
      title: "LearnZone",
      href: "https://learnzone-rho.vercel.app",
      dates: "Jan 2024 - March 2024",
      active: true,
      description: "Developing E-learning platform for publishing courses",
      technologies: [
        "React.js",
        "Javascript",
        "MongoDB",
        "Prisma",
        "TailwindCSS",
        "AWS",
        "Clerk",
      ],
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
    // j-tech
    {
      title: "J-tech",
      href: "https://jubba-tech.vercel.app",
      dates: "Sept 2023 - Dec 2023",
      active: true,
      description:
        "Technology company website showcasing services and portfolio. Built with React.js, featuring modern UI design and responsive layouts.",
      technologies: ["react.js", "Javascript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://jubba-tech.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abdikadirqulle/J-tech",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/j-tech.png",
      video: "",
    },
    // taskflow
    {
      title: "Taskflow",
      href: "https://github.com/abdikadirqulle/Taskflow",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Task management application for organizing and tracking projects. Built with PHP and MySQL, featuring user authentication, task creation, assignment, and progress tracking.",
      technologies: ["php", "html", "css", "mysql"],
      links: [
        {
          type: "Source",
          href: "https://github.com/abdikadirqulle/Taskflow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/taskflow.png",
      video: "",
    },
  ],
  hackathons: [],
} as const
