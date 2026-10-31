import { Icons } from "@/components/icons"

export const PERSON = {
  name: "Abdikadir Qulle",
  initials: "AQ",
  location: "Based in Somalia",
  locationLink: "https://www.google.com/maps/place/somalia",
  avatarUrl: "/abdikadirqulle.jpeg",
  contact: {
    /** Primary inbox for CTAs (Start a project, mailto buttons). */
    email: "abdikadirqulle@gmail.com",
    emails: ["abdikadirqulle@gmail.com", "hello@abdikadirqulle.com"],
    tel: "+252 61 7797802",
    /** Digits only for wa.me links. */
    whatsapp: "252617797802",
    whatsappUrl: `https://wa.me/252617797802?text=${encodeURIComponent(
      "Hi Abdikadir — hope you're doing well. I found your website and would like to connect."
    )}`,
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
} as const
