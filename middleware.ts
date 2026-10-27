import {
  isPortfolioId,
  portfolioRewritePath,
  resolvePortfolio,
} from "@/lib/portfolio"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl
  const queryPortfolio = searchParams.get("portfolio")
  const headerPortfolio = request.headers.get("x-portfolio")

  const portfolio = resolvePortfolio({
    host: request.headers.get("host"),
    headerPortfolio,
    queryPortfolio,
    pathname,
  })

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-portfolio", portfolio)

  const rewriteTo = portfolioRewritePath(portfolio, pathname)

  if (rewriteTo) {
    const url = request.nextUrl.clone()
    url.pathname = rewriteTo
    // Drop portfolio query so internal pages stay clean; host/header still apply.
    if (isPortfolioId(queryPortfolio)) {
      url.searchParams.delete("portfolio")
    }
    return NextResponse.rewrite(url, {
      request: { headers: requestHeaders },
    })
  }

  return NextResponse.next({
    request: { headers: requestHeaders },
  })
}

export const config = {
  matcher: [
    /*
     * Match all paths except static assets and Next internals.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
}
