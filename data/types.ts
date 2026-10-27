export type PortfolioId = "se" | "ict" | "public"

export interface ProjectLink {
  type: string
  href: string
}

export interface Project {
  id: string
  title: string
  href: string
  dates: string
  active: boolean
  description: string
  links: readonly ProjectLink[]
  image: string
  video: string
  portfolios: readonly PortfolioId[]
  /** Portfolio-specific framing; falls back to `description`. */
  presentations?: Partial<Record<PortfolioId, string>>
}

export interface WorkEntry {
  id: string
  company: string
  badges: readonly string[]
  href: string
  location: string
  title: string
  logoUrl: string
  start: string
  end: string
  description: string
  portfolios: readonly PortfolioId[]
  presentations?: Partial<Record<PortfolioId, string>>
}

export interface EducationEntry {
  school: string
  href: string
  degree: string
  logoUrl: string
  start: string
  end: string
}

export interface PortfolioNavLink {
  href: string
  label: string
}

export interface PortfolioConfig {
  id: PortfolioId
  url: string
  title: string
  description: string
  summary: string
  headline: string
  nav: readonly PortfolioNavLink[]
  skills: Record<string, readonly string[]>
  projectsHeading: string
  projectsIntro: string
  contactHeading: string
  contactBody: string
  ctaLabel: string
  siblingLabel: string
}
