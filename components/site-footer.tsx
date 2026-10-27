import { DATA } from "@/data/resume"
import { ICT_PORTFOLIO } from "@/data/portfolios/ict"
import { PUBLIC_PORTFOLIO } from "@/data/portfolios/public"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-neutral-200/80 bg-[#f5f5f5]">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-4 px-6 pb-10 pt-10 sm:px-8 sm:pb-12 sm:pt-12">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} {DATA.name}. All rights reserved.
          </p>
          <p className="text-sm text-neutral-500">Based in Somalia</p>
        </div>
        <p className="text-sm text-neutral-500">
          Also:{" "}
          <Link
            href={ICT_PORTFOLIO.url}
            className="text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-900"
          >
            {ICT_PORTFOLIO.siblingLabel}
          </Link>
          {" · "}
          <Link
            href={PUBLIC_PORTFOLIO.url}
            className="text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-900"
          >
            {PUBLIC_PORTFOLIO.siblingLabel}
          </Link>
        </p>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <p className="translate-y-[32%] whitespace-nowrap text-center text-[18vw] font-bold leading-none tracking-tighter text-neutral-900/[0.07] sm:text-[8rem] md:text-[10rem] lg:text-[12rem]">
          Abdikadir
        </p>
      </div>
    </footer>
  )
}
