import { DashboardShell } from "@/components/dashboard-shell"
import { Skeleton } from "@/components/ui/skeleton"

export default function ExerciseDetailLoading() {
  return (
    <DashboardShell>
      <div className="flex items-center space-x-2 mb-6">
        <Skeleton className="h-9 w-24" />
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <Skeleton className="h-[600px] w-full" />
        <div className="space-y-6">
          <Skeleton className="h-[200px] w-full" />
          <Skeleton className="h-[100px] w-full" />
        </div>
      </div>
    </DashboardShell>
  )
}
