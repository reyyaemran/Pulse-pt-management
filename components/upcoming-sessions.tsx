import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function UpcomingSessions() {
  const sessions = [
    {
      id: "1",
      client: {
        id: "1",
        name: "Sarah Johnson",
        avatar: "/diverse-woman-portrait.png",
      },
      date: "Today",
      time: "9:00 AM - 10:00 AM",
      type: "Strength Training",
      status: "Confirmed",
    },
    {
      id: "2",
      client: {
        id: "2",
        name: "Mike Peterson",
        avatar: "/thoughtful-man.png",
      },
      date: "Today",
      time: "11:30 AM - 12:30 PM",
      type: "Cardio",
      status: "Confirmed",
    },
    {
      id: "3",
      client: {
        id: "3",
        name: "Emma Wilson",
        avatar: "/blonde-woman-portrait.png",
      },
      date: "Tomorrow",
      time: "10:00 AM - 11:00 AM",
      type: "Flexibility",
      status: "Pending",
    },
    {
      id: "4",
      client: {
        id: "4",
        name: "David Lee",
        avatar: "/thoughtful-asian-man.png",
      },
      date: "Tomorrow",
      time: "2:00 PM - 3:00 PM",
      type: "HIIT",
      status: "Confirmed",
    },
  ]

  return (
    <div className="space-y-4">
      {sessions.map((session) => (
        <div key={session.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
          <Link
            href={`/clients/${session.client.id}`}
            className="flex items-center space-x-4 hover:bg-secondary/50 p-2 rounded-md transition-colors"
          >
            <Avatar className="h-9 w-9">
              <AvatarImage src={session.client.avatar || undefined} alt={session.client.name} />
              <AvatarFallback>{session.client.name.split(" ").map(n => n[0]).join("").toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{session.client.name}</p>
              <p className="text-sm text-muted-foreground">{session.type}</p>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium">{session.date}</p>
              <p className="text-sm text-muted-foreground">{session.time}</p>
            </div>
            <Badge variant={session.status === "Confirmed" ? "default" : "outline"}>{session.status}</Badge>
          </div>
        </div>
      ))}
      <div className="pt-2">
        <Button variant="outline" size="sm" className="w-full">
          View All Sessions
        </Button>
      </div>
    </div>
  )
}
