'use client'

import { ReactNode, useRef } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'
import { PWAInstaller } from '@/components/pwa-installer'
import { CustomCursor } from "@/components/custom-cursor"

export function AppShell({ children }: { children: ReactNode }) {
  const stickyRef = useRef<HTMLDivElement>(null)

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <SmoothScrollProvider>
        <CustomCursor/>
        <PWAInstaller />
        {children}
      </SmoothScrollProvider>
    </ThemeProvider>
  )
}
