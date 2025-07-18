import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { AppShell } from "@/components/AppShell"


export const metadata: Metadata = {

  metadataBase: new URL("https://arrowedge.netlify.app"),
  title: "Arrow Edge – Build Digital Momentum",
  description:
    "We craft modern digital experiences and scalable solutions for brands ready to grow online.",
  keywords: "web design, branding, digital strategy, UI UX, Arrow Edge Studio",
  authors: [{ name: "Arrow Edge" }],
  openGraph: {
    title: "Arrow Edge – Build Digital Momentum",
    description:
      "We craft modern digital experiences and scalable solutions for brands ready to grow online.",
    type: "website",
    url: "https://arrowedge.netlify.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arrow Edge Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arrow Edge – Build Digital Momentum",
    description:
      "We craft modern digital experiences and scalable solutions for brands ready to grow online.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Arrow Edge",
  },
}

export const viewport = {
  themeColor: "#0a0a0a",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover",
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning >
      <head>
        <link rel="icon" href="/arrow.svg" sizes="any" />
        <link rel="icon" href="/arrow.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Arrow Studio" />
        <meta name="google-site-verification" content="YbIcnIK4ATyyMj_SIKzgtpnRVGpCVvZIuR357BBn9-E" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body >
        <AppShell>
          {children}
        </AppShell>

      </body>
    </html>
  )
}
