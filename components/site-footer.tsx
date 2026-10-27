import { DATA } from "@/data/resume"

export function SiteFooter() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-neutral-200/80 bg-[#f5f5f5]">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-2 px-6 pb-10 pt-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pb-12 sm:pt-12">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} {DATA.name}. All rights reserved.
        </p>
        <p className="text-sm text-neutral-500">Based in Somalia</p>
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
