import type React from "react"
import { Montserrat } from "next/font/google"
import type { Metadata } from "next"
import ClientLayout from "./client-layout"
import './globals.css'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "PT Pro - Personal Trainer Management System",
  description: "A comprehensive platform for personal trainers to manage clients and workouts",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased ${montserrat.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}