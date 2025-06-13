import { DashboardShell } from "@/components/dashboard-shell"
import { Skeleton } from "@/components/ui/skeleton"

export default function CalendarLoading() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between space-y-2">
        <Skeleton className="h-8 w-36" />
        <Skeleton className="h-10 w-28" />
      </div>
      <Skeleton className="h-10 w-full max-w-xs mb-4" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="col-span-1 h-[350px] w-full" />
        <Skeleton className="col-span-1 lg:col-span-2 h-[350px] w-full" />
      </div>
    </DashboardShell>
  )
}
