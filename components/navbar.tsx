"use client"

import { Dock, DockIcon } from "@/components/magicui/dock"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { DATA } from "@/data/resume"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Navbar() {
  const socials = Object.entries(DATA.contact.social).filter(
    ([, social]) => social.navbar
  )
  const primarySocials = socials.filter(([name]) =>
    ["GitHub", "LinkedIn", "email"].includes(name)
  )
  const secondarySocials = socials.filter(
    ([name]) => !["GitHub", "LinkedIn", "email"].includes(name)
  )

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto flex h-full max-h-14 origin-bottom"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="fixed inset-x-0 bottom-0 h-20 w-full bg-gradient-to-t from-white via-white/90 to-transparent" />
      <Dock
        className={cn(
          "pointer-events-auto relative z-50 mx-auto mb-3 flex h-full min-h-full items-center px-2 sm:mb-4",
          "rounded-full border border-black/[0.06] bg-white/75 backdrop-blur-2xl",
          "shadow-[0_8px_30px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.02)]"
        )}
      >
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-11 sm:size-12"
                  )}
                  aria-label={item.label}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-6 bg-black/10" />
        {primarySocials.map(([name, social]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-11 sm:size-12"
                  )}
                  aria-label={name}
                  target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  <social.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        {secondarySocials.map(([name, social]) => (
          <DockIcon key={name} className="hidden sm:flex">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-11 sm:size-12"
                  )}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </div>
  )
}
