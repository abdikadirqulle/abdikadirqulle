import { DATA } from "@/data/resume"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: DATA.name,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: DATA.name,
    card: "summary_large_image",
  },
}

export default function SeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
