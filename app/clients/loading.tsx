import { DashboardShell } from "@/components/dashboard-shell"
import { Skeleton } from "@/components/ui/skeleton"

export default function ClientsLoading() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between space-y-2">
        <Skeleton className="h-8 w-36" />
        <Skeleton className="h-10 w-28" />
      </div>
      <Skeleton className="h-10 w-full max-w-xs mb-4" />
      <Skeleton className="h-[500px] w-full" />
    </DashboardShell>
  )
}
