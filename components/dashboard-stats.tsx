export function DashboardStats() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="text-sm font-medium">New Clients</p>
            <p className="text-xs text-muted-foreground">This month</p>
          </div>
          <div className="font-bold">+12</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="text-sm font-medium">Retention Rate</p>
            <p className="text-xs text-muted-foreground">Last 3 months</p>
          </div>
          <div className="font-bold">85%</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="text-sm font-medium">Session Completion</p>
            <p className="text-xs text-muted-foreground">This week</p>
          </div>
          <div className="font-bold">92%</div>
        </div>
      </div>
    </div>
  )
}
