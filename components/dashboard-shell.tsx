import type React from "react"

export function DashboardShell({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="flex-1 space-y-4 p-6 md:p-8 max-w-[1600px] mx-auto w-full">{children}</div>
}
