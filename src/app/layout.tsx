import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { DATA } from "@/data/resume"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import { StarsBackground } from "@/components/ui/stars-background"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <TooltipProvider delayDuration={0}>
            <StarsBackground>
              <div
                className={cn(
                  "min-h-screen font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
                  fontSans.variable
                )}
              >
                {children}
                <Analytics />
                <Navbar />
              </div>
            </StarsBackground>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
