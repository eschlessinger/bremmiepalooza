"use client"
import type React from "react"
import { Rubik_Spray_Paint } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

// Load a festival-style Google Font
const festivalFont = Rubik_Spray_Paint({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${festivalFont.variable} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
