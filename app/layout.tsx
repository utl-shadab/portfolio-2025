import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { AppShell } from "@/components/AppShell"


export const metadata: Metadata = {
  metadataBase: new URL("https://arrowedge.in/"),
  title: "Arrow Edge: UI/UX, Web Design, & Scalable Digital Solutions",
  description:
    "Arrow Edge is a digital studio specializing in UI/UX design, modern SPA & SSR development, cross-platform apps, and performance tuning. We help businesses build fast, scalable, and intuitive digital experiences.",
  keywords: [
    "UI/UX design",
    "web design agency",
    "single-page applications",
    "Next.js development",
    "React development",
    "cross-platform apps",
    "mobile app development",
    "website performance optimization",
    "headless CMS",
    "API integration",
    "digital solutions",
    "modern web apps",
    "Arrow Edge Studio",
    "digital studio"
  ],

  authors: [{ name: "Arrow Edge" }],
  openGraph: {
    title: "Arrow Edge: UI/UX, Web Design, & Scalable Digital Solutions",
    description:
      "From user-centered design to cross-platform development, Arrow Edge delivers modern, scalable, and high-performing digital experiences for businesses.",
    type: "website",
    url: "https://arrowedge.in/",
    images: [
      {
        url: "/Meta/home.png",
        width: 1200,
        height: 630,
        alt: "Arrow Edge Studio – Digital Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arrow Edge – UI/UX, Web Design, and Scalable Digital Solutions",
    description:
      "We deliver premium UI/UX, SPA & SSR apps, cross-platform mobile solutions, and performance-first websites with headless CMS integrations.",
    images: ["/Meta/home.png"],

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
        <link rel="canonical" href="https://arrowedge.in/" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Arrow Studio" />
        <meta name="google-site-verification" content="XVhUrt2a-6hJO0Bh17jvlKmIv7JbIkHNHhfsJWL_c5o" />
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
