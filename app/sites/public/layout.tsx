import { PUBLIC_PORTFOLIO } from "@/data/portfolios/public"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(PUBLIC_PORTFOLIO.url),
  title: {
    default: PUBLIC_PORTFOLIO.title,
    template: `%s | Abdikadir Qulle`,
  },
  description: PUBLIC_PORTFOLIO.description,
  openGraph: {
    title: PUBLIC_PORTFOLIO.title,
    description: PUBLIC_PORTFOLIO.description,
    url: PUBLIC_PORTFOLIO.url,
    siteName: "Abdikadir Qulle — Public Sector",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: PUBLIC_PORTFOLIO.title,
    card: "summary_large_image",
  },
}

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
