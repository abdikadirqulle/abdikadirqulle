import { PROJECTS, projectsFor } from "@/data/projects"
import { WORK } from "@/data/work"
import type { PortfolioId, WorkEntry } from "@/data/types"

export { projectsFor }

export function workFor(portfolio: PortfolioId): Array<{
  company: string
  href: string
  title: string
  logoUrl: string
  start: string
  end: string
  description: string
}> {
  return WORK.filter((w) => w.portfolios.includes(portfolio)).map(
    (w: WorkEntry) => ({
      company: w.company,
      href: w.href,
      title: w.title,
      logoUrl: w.logoUrl,
      start: w.start,
      end: w.end,
      description: w.presentations?.[portfolio] ?? w.description,
    })
  )
}

/** SE-compatible project shape (includes active/video for DATA parity). */
export function seProjectsFromShared() {
  return PROJECTS.filter((p) => p.portfolios.includes("se")).map((p) => ({
    title: p.title,
    href: p.href,
    dates: p.dates,
    active: p.active,
    description: p.description,
    links: p.links,
    image: p.image,
    video: p.video,
  }))
}

export function seWorkFromShared() {
  return WORK.filter((w) => w.portfolios.includes("se")).map((w) => ({
    company: w.company,
    badges: w.badges,
    href: w.href,
    location: w.location,
    title: w.title,
    logoUrl: w.logoUrl,
    start: w.start,
    end: w.end,
    description: w.description,
  }))
}
