import type { PortfolioId } from "@/data/types"

export const PORTFOLIO_IDS = ["se", "ict", "public"] as const

export function isPortfolioId(value: string | null | undefined): value is PortfolioId {
  return value === "se" || value === "ict" || value === "public"
}

/**
 * Resolve portfolio from query, header, path prefix, then Host.
 * Apex / unknown hosts default to Software Engineering.
 */
export function resolvePortfolio(input: {
  host: string | null
  headerPortfolio?: string | null
  queryPortfolio?: string | null
  pathname?: string | null
}): PortfolioId {
  if (isPortfolioId(input.queryPortfolio)) {
    return input.queryPortfolio
  }
  if (isPortfolioId(input.headerPortfolio)) {
    return input.headerPortfolio
  }

  const pathname = input.pathname ?? ""
  if (pathname.startsWith("/sites/ict")) return "ict"
  if (pathname.startsWith("/sites/public")) return "public"

  const host = (input.host ?? "").toLowerCase().split(":")[0]

  if (
    host.startsWith("ict.") ||
    host === "ict.localhost" ||
    host === "ict.abdikadirqulle.com"
  ) {
    return "ict"
  }

  if (
    host.startsWith("public.") ||
    host === "public.localhost" ||
    host === "public.abdikadirqulle.com"
  ) {
    return "public"
  }

  return "se"
}

export function portfolioRewritePath(
  portfolio: PortfolioId,
  pathname: string
): string | null {
  if (portfolio === "se") return null
  if (pathname.startsWith("/sites/")) return null

  const base = portfolio === "ict" ? "/sites/ict" : "/sites/public"
  if (pathname === "/" || pathname === "") return base
  return `${base}${pathname}`
}
