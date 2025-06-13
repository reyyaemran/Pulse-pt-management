"use client"

import type React from "react"

import { DashboardShell } from "@/components/dashboard-shell"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">Manage your account settings and preferences.</p>
        </div>
        <Separator />
        <div className="flex flex-col space-y-6">
          <div className="w-full">
            <SettingsTabs />
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </DashboardShell>
  )
}

function SettingsTabs() {
  const pathname = usePathname()

  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-4 gap-2">
        <TabsTrigger value="profile" asChild>
          <Link href="/settings/profile" className={pathname === "/settings/profile" ? "bg-accent" : ""}>
            Profile
          </Link>
        </TabsTrigger>
        <TabsTrigger value="availability" asChild>
          <Link href="/settings/availability" className={pathname === "/settings/availability" ? "bg-accent" : ""}>
            Availability
          </Link>
        </TabsTrigger>
        <TabsTrigger value="notifications" asChild>
          <Link href="/settings/notifications" className={pathname === "/settings/notifications" ? "bg-accent" : ""}>
            Notifications
          </Link>
        </TabsTrigger>
        <TabsTrigger value="appearance" asChild>
          <Link href="/settings/appearance" className={pathname === "/settings/appearance" ? "bg-accent" : ""}>
            Appearance
          </Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
