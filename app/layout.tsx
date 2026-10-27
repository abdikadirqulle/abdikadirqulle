import Navbar from "@/components/navbar"
import { DATA } from "@/data/resume"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
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
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: DATA.name,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.name,
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
    title: DATA.name,
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-[#fafafa] font-sans text-neutral-950 antialiased",
          geistSans.variable
        )}
      >
        <Navbar />
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-10 sm:px-8 sm:pt-14">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
