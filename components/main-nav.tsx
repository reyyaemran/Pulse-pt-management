"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { CalendarDays, Dumbbell, Home, Users } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Dumbbell className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">PT Pro</span>
      </Link>
      <nav className="flex items-center space-x-6 lg:space-x-8">
        <Link
          href="/dashboard"
          className={cn(
            "flex items-center text-sm font-medium transition-colors hover:text-primary",
            pathname === "/dashboard" ? "text-primary font-bold" : "text-muted-foreground",
          )}
        >
          <Home className="mr-2 h-4 w-4" />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/calendar"
          className={cn(
            "flex items-center text-sm font-medium transition-colors hover:text-primary",
            pathname === "/calendar" ? "text-primary font-bold" : "text-muted-foreground",
          )}
        >
          <CalendarDays className="mr-2 h-4 w-4" />
          <span>Calendar</span>
        </Link>
        <Link
          href="/clients"
          className={cn(
            "flex items-center text-sm font-medium transition-colors hover:text-primary",
            pathname === "/clients" ? "text-primary font-bold" : "text-muted-foreground",
          )}
        >
          <Users className="mr-2 h-4 w-4" />
          <span>Clients</span>
        </Link>
        <Link
          href="/exercises"
          className={cn(
            "flex items-center text-sm font-medium transition-colors hover:text-primary",
            pathname === "/exercises" ? "text-primary font-bold" : "text-muted-foreground",
          )}
        >
          <Dumbbell className="mr-2 h-4 w-4" />
          <span>Exercises</span>
        </Link>
      </nav>
    </div>
  )
}
