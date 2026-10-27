import { ICT_PORTFOLIO } from "@/data/portfolios/ict"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(ICT_PORTFOLIO.url),
  title: {
    default: ICT_PORTFOLIO.title,
    template: `%s | Abdikadir Qulle`,
  },
  description: ICT_PORTFOLIO.description,
  openGraph: {
    title: ICT_PORTFOLIO.title,
    description: ICT_PORTFOLIO.description,
    url: ICT_PORTFOLIO.url,
    siteName: "Abdikadir Qulle — ICT",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: ICT_PORTFOLIO.title,
    card: "summary_large_image",
  },
}

export default function IctLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
