import { ICT_PORTFOLIO } from "@/data/portfolios/ict"
import { PUBLIC_PORTFOLIO } from "@/data/portfolios/public"
import { SE_PORTFOLIO } from "@/data/portfolios/se"
import type { PortfolioConfig, PortfolioId } from "@/data/types"

export const PORTFOLIOS: Record<PortfolioId, PortfolioConfig> = {
  se: SE_PORTFOLIO,
  ict: ICT_PORTFOLIO,
  public: PUBLIC_PORTFOLIO,
}

export function getPortfolio(id: PortfolioId): PortfolioConfig {
  return PORTFOLIOS[id]
}

export { ICT_PORTFOLIO, PUBLIC_PORTFOLIO, SE_PORTFOLIO }
