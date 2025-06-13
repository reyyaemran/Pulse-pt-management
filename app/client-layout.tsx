"use client"

import type React from "react"

import { ThemeProvider } from "next-themes"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardShell } from "@/components/dashboard-shell"
import { Toaster } from "@/components/ui/toaster"
import { usePathname } from "next/navigation"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAuthPage = pathname === "/login" || pathname === "/register" || pathname === "/"

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex min-h-screen">
        {!isAuthPage && <AppSidebar />}
        <div className="flex-1 flex flex-col">
          <DashboardShell>{children}</DashboardShell>
        </div>
      </div>
      <Toaster />
    </ThemeProvider>
  )
}
