import Navbar from "@/components/navbar"
import { PortfolioFooter } from "@/components/portfolio-footer"
import { PortfolioNav } from "@/components/portfolio-nav"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ICT_PORTFOLIO } from "@/data/portfolios/ict"
import { PUBLIC_PORTFOLIO } from "@/data/portfolios/public"
import type { PortfolioId } from "@/data/types"

interface Props {
  portfolio: PortfolioId
  children: React.ReactNode
}

export function PortfolioShell({ portfolio, children }: Props) {
  if (portfolio === "ict") {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <div
          className="pointer-events-none fixed inset-0 -z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 100% -10%, rgba(14, 116, 144, 0.12), transparent), radial-gradient(ellipse 60% 40% at 0% 100%, rgba(51, 65, 85, 0.08), transparent)",
          }}
        />
        <PortfolioNav
          links={ICT_PORTFOLIO.nav}
          className="border-slate-200/80 bg-slate-50/85"
          brandClassName="text-slate-900"
          linkClassName="text-slate-500 hover:text-slate-900"
        />
        <div className="mx-auto max-w-6xl px-6 pb-8 pt-10 sm:px-8 sm:pt-14">
          {children}
        </div>
        <PortfolioFooter
          portfolio="ict"
          className="relative mt-16 overflow-hidden border-t border-slate-200 bg-slate-100/80"
          mutedClassName="text-sm text-slate-500"
          linkClassName="text-sm text-cyan-800 underline-offset-4 hover:underline"
          wordmark="ICT"
          wordmarkClassName="translate-y-[32%] whitespace-nowrap text-center text-[18vw] font-bold leading-none tracking-tighter text-slate-900/[0.06] sm:text-[8rem] md:text-[10rem]"
        />
        <WhatsAppFloat />
      </div>
    )
  }

  if (portfolio === "public") {
    return (
      <div className="min-h-screen bg-[#f7f5f0] text-slate-900">
        <div
          className="pointer-events-none fixed inset-0 -z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 45% at 0% 0%, rgba(30, 41, 59, 0.06), transparent), linear-gradient(180deg, #f7f5f0 0%, #f0ebe3 100%)",
          }}
        />
        <PortfolioNav
          links={PUBLIC_PORTFOLIO.nav}
          className="border-slate-800/10 bg-[#f7f5f0]/90"
          brandClassName="font-[family-name:var(--font-public-serif)] text-slate-900"
          linkClassName="text-slate-600 hover:text-slate-900"
        />
        <div className="mx-auto max-w-6xl px-6 pb-8 pt-10 sm:px-8 sm:pt-14">
          {children}
        </div>
        <PortfolioFooter
          portfolio="public"
          className="relative mt-16 overflow-hidden border-t border-slate-800/10 bg-[#efeae2]"
          mutedClassName="text-sm text-slate-600"
          linkClassName="text-sm text-slate-800 underline-offset-4 hover:underline"
          disclaimer="Personal professional portfolio — not an official government website."
          wordmark="Public"
          wordmarkClassName="translate-y-[32%] whitespace-nowrap text-center font-[family-name:var(--font-public-serif)] text-[16vw] font-semibold leading-none tracking-tighter text-slate-900/[0.05] sm:text-[7rem] md:text-[9rem]"
        />
        <WhatsAppFloat />
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-10 sm:px-8 sm:pt-14">
        {children}
      </div>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
