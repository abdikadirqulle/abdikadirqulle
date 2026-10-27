import { DATA } from "@/data/resume"
import { Icons } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"

const navColumns = [
  {
    title: "Navigate",
    links: [
      { label: "Work", href: "/#projects" },
      { label: "About", href: "/#about" },
      { label: "Experience", href: "/#experience" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Projects",
    links: [
      { label: "Casritek", href: "https://casritek.vercel.app" },
      { label: "E-xisaabi", href: "https://exisaabi.app" },
      { label: "MaragCloud", href: "https://casritek.vercel.app/work/maragcloud" },
      { label: "e-safar", href: "https://esafar.app" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", href: DATA.contact.social.GitHub.url },
      { label: "LinkedIn", href: DATA.contact.social.LinkedIn.url },
      { label: "X", href: DATA.contact.social.X.url },
      { label: "Email", href: `mailto:${DATA.contact.email}` },
    ],
  },
]

const socials = [
  { name: "GitHub", href: DATA.contact.social.GitHub.url, icon: Icons.github },
  { name: "LinkedIn", href: DATA.contact.social.LinkedIn.url, icon: Icons.linkedin },
  { name: "X", href: DATA.contact.social.X.url, icon: Icons.x },
  { name: "Email", href: `mailto:${DATA.contact.email}`, icon: Icons.email },
]

export function SiteFooter() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-neutral-200/80 bg-[#f5f5f5]">
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-10 pt-14 sm:px-8 sm:pt-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-8">
          <div className="max-w-sm space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/logo.jpg"
                alt={DATA.name}
                width={36}
                height={36}
                className="size-9 rounded-full"
              />
              <span className="text-base font-semibold tracking-tight text-neutral-950">
                {DATA.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-neutral-600">
              <span className="font-medium text-neutral-900">
                Full-stack developer and founder.
              </span>{" "}
              Building websites, software, and systems that help organisations
              work better.
            </p>
            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="inline-flex size-9 items-center justify-center rounded-full bg-neutral-200/80 text-neutral-600 transition hover:bg-neutral-300 hover:text-neutral-950"
                >
                  <social.icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          {navColumns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold text-neutral-950">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-500 transition hover:text-neutral-950"
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-neutral-200/90 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} {DATA.name}. All rights reserved.
          </p>
          <p className="text-sm text-neutral-500">Proudly built in Somalia</p>
        </div>
      </div>

      {/* Large readable watermark name */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <p className="translate-y-[28%] whitespace-nowrap text-center text-[16vw] font-bold leading-none tracking-tighter text-neutral-900/[0.06] sm:text-[7.5rem] md:text-[9rem] lg:text-[11rem]">
          Abdikadir
        </p>
      </div>
    </footer>
  )
}
