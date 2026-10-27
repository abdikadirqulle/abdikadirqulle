import { PERSON } from "@/data/person"
import { PORTFOLIOS } from "@/data/portfolios"
import type { PortfolioId } from "@/data/types"
import Link from "next/link"

interface Props {
  portfolio: PortfolioId
  className?: string
  mutedClassName?: string
  linkClassName?: string
  wordmark?: string
  wordmarkClassName?: string
  disclaimer?: string
}

export function PortfolioFooter({
  portfolio,
  className,
  mutedClassName = "text-sm text-slate-500",
  linkClassName = "text-sm text-slate-600 underline-offset-4 hover:underline",
  wordmark,
  wordmarkClassName,
  disclaimer,
}: Props) {
  const siblings = (["se", "ict", "public"] as const).filter(
    (id) => id !== portfolio
  )

  return (
    <footer className={className}>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-4 px-6 pb-10 pt-10 sm:px-8 sm:pb-12 sm:pt-12">
        {disclaimer ? (
          <p className={mutedClassName}>{disclaimer}</p>
        ) : null}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className={mutedClassName}>
            © {new Date().getFullYear()} {PERSON.name}. All rights reserved.
          </p>
          <p className={mutedClassName}>{PERSON.location}</p>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2">
          {siblings.map((id) => (
            <Link
              key={id}
              href={PORTFOLIOS[id].url}
              className={linkClassName}
            >
              {PORTFOLIOS[id].siblingLabel}
            </Link>
          ))}
        </nav>
      </div>
      {wordmark ? (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none overflow-hidden"
          aria-hidden="true"
        >
          <p className={wordmarkClassName}>{wordmark}</p>
        </div>
      ) : null}
    </footer>
  )
}
