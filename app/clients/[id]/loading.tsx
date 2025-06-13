import { DashboardShell } from "@/components/dashboard-shell"
import { Skeleton } from "@/components/ui/skeleton"

export default function ClientDetailLoading() {
  return (
    <DashboardShell>
      <div className="flex items-center space-x-2 mb-6">
        <Skeleton className="h-9 w-24" />
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
        <Skeleton className="h-[400px] w-full" />
        <div className="space-y-6">
          <Skeleton className="h-[200px] w-full" />
          <Skeleton className="h-10 w-full max-w-xs" />
          <Skeleton className="h-[300px] w-full" />
        </div>
      </div>
    </DashboardShell>
  )
}
