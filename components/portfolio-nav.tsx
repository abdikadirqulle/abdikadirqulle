import { PERSON } from "@/data/person"
import type { PortfolioNavLink } from "@/data/types"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface Props {
  name?: string
  links: readonly PortfolioNavLink[]
  className?: string
  brandClassName?: string
  linkClassName?: string
  activeClassName?: string
}

export function PortfolioNav({
  name = PERSON.name,
  links,
  className,
  brandClassName,
  linkClassName,
  activeClassName,
}: Props) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur-xl",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:h-[4.25rem] sm:px-8">
        <Link href="/" className={cn("flex items-center gap-2.5", brandClassName)}>
          <Image
            src="/logo.jpg"
            alt={name}
            width={32}
            height={32}
            className="size-8 rounded-full"
            priority
          />
          <span className="text-sm font-medium tracking-tight">{name}</span>
        </Link>

        <nav className="flex flex-wrap items-center justify-end gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-2.5 py-1.5 text-sm transition-colors sm:px-3.5",
                linkClassName,
                activeClassName
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
