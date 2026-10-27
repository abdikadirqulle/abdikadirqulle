import { DATA } from "@/data/resume"

export function SiteFooter() {
  return (
    <footer className="mt-10 overflow-hidden rounded-3xl bg-neutral-950 px-4 pb-10 pt-12 sm:px-8 sm:pt-16">
      <p className="text-center text-xs font-medium tracking-[0.22em] text-neutral-500 uppercase">
        © {new Date().getFullYear()} · Based in Somalia
      </p>

      <div className="mt-6 overflow-hidden" aria-hidden="true">
        <p className="footer-name text-center text-[18vw] font-black leading-[0.85] tracking-tighter sm:text-[7.5rem] md:text-[9.5rem] lg:text-[11.5rem]">
          <span className="footer-name-accent">A</span>
          <span className="footer-name-rest">bdikadir</span>
        </p>
        <p className="footer-name -mt-1 text-center text-[18vw] font-black leading-[0.85] tracking-tighter sm:text-[7.5rem] md:text-[9.5rem] lg:text-[11.5rem]">
          <span className="footer-name-rest">Qulle</span>
        </p>
      </div>

      <p className="sr-only">{DATA.name}</p>
    </footer>
  )
}
