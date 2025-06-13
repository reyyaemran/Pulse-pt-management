import { DashboardShell } from "@/components/dashboard-shell"
import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between space-y-2">
        <Skeleton className="h-8 w-36" />
        <Skeleton className="h-10 w-28" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Skeleton className="h-28 w-full" />
        <Skeleton className="h-28 w-full" />
        <Skeleton className="h-28 w-full" />
        <Skeleton className="h-28 w-full" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Skeleton className="col-span-4 h-[400px] w-full" />
        <Skeleton className="col-span-3 h-[400px] w-full" />
      </div>
    </DashboardShell>
  )
}
