import { PortfolioShell } from "@/components/portfolio-shell"
import { resolvePortfolio } from "@/lib/portfolio"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import {
  Geist,
  IBM_Plex_Sans,
  Source_Sans_3,
  Source_Serif_4,
} from "next/font/google"
import { headers } from "next/headers"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ict",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-public-sans",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-public-serif",
})

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headerStore = await headers()
  const portfolio = resolvePortfolio({
    host: headerStore.get("host"),
    headerPortfolio: headerStore.get("x-portfolio"),
  })

  return (
    <html
      lang="en"
      data-portfolio={portfolio}
      className={cn(
        geistSans.variable,
        ibmPlexSans.variable,
        sourceSans.variable,
        sourceSerif.variable
      )}
    >
      <body
        className={cn(
          "min-h-screen antialiased",
          portfolio === "se" && "bg-[#fafafa] font-sans text-neutral-950",
          portfolio === "ict" &&
            "bg-slate-50 font-[family-name:var(--font-ict)] text-slate-900",
          portfolio === "public" &&
            "bg-[#f7f5f0] font-[family-name:var(--font-public-sans)] text-slate-900"
        )}
      >
        <PortfolioShell portfolio={portfolio}>{children}</PortfolioShell>
        <Analytics />
      </body>
    </html>
  )
}
