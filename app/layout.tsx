import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ContentProvider } from "@/components/content-provider"

export const metadata: Metadata = {
  title: "AI Engineer — Portfolio",
  description: "Personal portfolio showcasing AI engineering projects and expertise",
  generator: "v0.dev",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ContentProvider>{children}</ContentProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
