import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function RecentClients() {
  const clients = [
    {
      id: "1",
      name: "Sarah Johnson",
      phone: "(555) 123-4567",
      email: "sarah@example.com",
      lastSession: "Today",
      avatar: "/diverse-woman-portrait.png",
      status: "active",
      sessions: { used: 8, total: 12 },
    },
    {
      id: "2",
      name: "Mike Peterson",
      phone: "(555) 234-5678",
      email: "mike@example.com",
      lastSession: "Yesterday",
      avatar: "/thoughtful-man.png",
      status: "active",
      sessions: { used: 5, total: 10 },
    },
    {
      id: "3",
      name: "Emma Wilson",
      phone: "(555) 345-6789",
      email: "emma@example.com",
      lastSession: "2 days ago",
      avatar: "/blonde-woman-portrait.png",
      status: "active",
      sessions: { used: 12, total: 20 },
    },
    {
      id: "4",
      name: "David Lee",
      phone: "(555) 456-7890",
      email: "david@example.com",
      lastSession: "3 days ago",
      avatar: "/thoughtful-asian-man.png",
      status: "active",
      sessions: { used: 3, total: 10 },
    },
    {
      id: "5",
      name: "Lisa Brown",
      phone: "(555) 567-8901",
      email: "lisa@example.com",
      lastSession: "1 week ago",
      avatar: "/woman-brown-hair.png",
      status: "inactive",
      sessions: { used: 10, total: 10 },
    },
  ]

  return (
    <div className="space-y-8">
      {clients.map((client) => (
        <Link
          href={`/clients/${client.id}`}
          key={client.id}
          className="flex items-center justify-between hover:bg-secondary/50 p-2 rounded-md transition-colors"
        >
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src={client.avatar || undefined} alt={client.name} />
              <AvatarFallback>{client.name.split(" ").map(n => n[0]).join("").toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{client.name}</p>
              <p className="text-sm text-muted-foreground">{client.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm text-muted-foreground">
              {client.sessions.total - client.sessions.used} / {client.sessions.total} sessions
            </div>
            <Badge variant={client.status === "active" ? "default" : "outline"}>
              {client.status === "active" ? "Active" : "Inactive"}
            </Badge>
          </div>
        </Link>
      ))}
    </div>
  )
}
