"use client"

import { DATA } from "@/data/resume"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/#projects", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-black/[0.04] bg-[#fafafa]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:h-[4.25rem] sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.jpg"
            alt={DATA.name}
            width={32}
            height={32}
            className="size-8 rounded-full"
            priority
          />
          <span className="text-sm font-medium tracking-tight text-neutral-950">
            {DATA.name}
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {links.map((link) => {
            const isActive =
              link.href === "/blog" ? pathname.startsWith("/blog") : false

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-2.5 py-1.5 text-sm transition-colors sm:px-3.5",
                  isActive
                    ? "font-medium text-neutral-950"
                    : "text-neutral-500 hover:text-neutral-950"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
