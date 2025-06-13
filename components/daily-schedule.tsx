import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Edit2, MoreHorizontal, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface DailyScheduleProps {
  date?: Date
}

export function DailySchedule({ date }: DailyScheduleProps) {
  // This would be fetched based on the selected date
  const sessions = [
    {
      id: "1",
      time: "9:00 AM - 10:00 AM",
      client: {
        name: "Sarah Johnson",
        avatar: "/diverse-woman-portrait.png",
      },
      type: "Strength Training",
      status: "Confirmed",
      location: "Main Gym",
    },
    {
      id: "2",
      time: "11:30 AM - 12:30 PM",
      client: {
        name: "Mike Peterson",
        avatar: "/thoughtful-man.png",
      },
      type: "Cardio",
      status: "Confirmed",
      location: "Cardio Room",
    },
    {
      id: "3",
      time: "2:00 PM - 3:00 PM",
      client: {
        name: "Emma Wilson",
        avatar: "/blonde-woman-portrait.png",
      },
      type: "Flexibility",
      status: "Pending",
      location: "Studio 3",
    },
    {
      id: "4",
      time: "4:30 PM - 5:30 PM",
      client: {
        name: "David Lee",
        avatar: "/thoughtful-asian-man.png",
      },
      type: "HIIT",
      status: "Confirmed",
      location: "Functional Area",
    },
  ]

  if (sessions.length === 0) {
    return (
      <div className="flex h-[300px] items-center justify-center rounded-md border border-dashed">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">No sessions scheduled for this day</p>
          <Button variant="outline" className="mt-4">
            Add Session
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {sessions.map((session) => (
        <Card key={session.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div
              className={`flex items-center border-l-4 ${
                session.status === "Confirmed" ? "border-emerald-500" : "border-amber-500"
              } p-4`}
            >
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">{session.time}</p>
                  <Badge
                    variant={session.status === "Confirmed" ? "success" : "outline"}
                    className={
                      session.status === "Confirmed"
                        ? "bg-emerald-500 hover:bg-emerald-500"
                        : "border-amber-500 text-amber-500"
                    }
                  >
                    {session.status}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session.client.avatar || "/placeholder.svg"} alt={session.client.name} />
                    <AvatarFallback>{session.client.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">{session.client.name}</p>
                    <p className="text-xs text-muted-foreground">{session.type}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Location: {session.location}</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Edit2 className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Cancel
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
