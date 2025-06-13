"use client"
import Link from "next/link"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

import { usePathname } from "next/navigation"
import { CalendarDays, Dumbbell, Home, Users, LogOut, User, ChevronLeft, ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export function AppSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUser() {
      setLoading(true)
      try {
        const res = await fetch("/api/auth/me")
        if (res.ok) {
          const data = await res.json()
          setUser({ name: data.name, email: data.email })
        } else {
          setUser(null)
        }
      } catch {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  const mainNavItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "Calendar",
      href: "/calendar",
      icon: CalendarDays,
    },
    {
      title: "Clients",
      href: "/clients",
      icon: Users,
    },
    {
      title: "Exercises",
      href: "/exercises",
      icon: Dumbbell,
    },
  ]

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <div
      className={cn(
        "hidden md:flex h-screen flex-col border-r bg-background transition-all duration-300 sticky top-0",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex h-14 items-center border-b px-4 justify-between">
        <div className={cn("flex items-center gap-2", collapsed && "justify-center w-full")}>
          <span
            className="font-medium text-sm whitespace-nowrap overflow-hidden transition-all duration-300"
            style={{
              maxWidth: collapsed ? "2rem" : "10rem",
              textOverflow: collapsed ? "clip" : "ellipsis",
            }}
          >
            {loading ? "Hi..." : `Hi${!collapsed && user ? ` ${user.name}` : ""}`}
          </span>
        </div>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <div className="flex-1 overflow-auto py-2">
        <div className="px-3 py-2">
          {!collapsed && <h3 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">Navigation</h3>}
          <nav className="space-y-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex h-10 items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href ? "bg-accent text-accent-foreground" : "text-foreground",
                  collapsed ? "justify-center" : "gap-3",
                )}
                title={collapsed ? item.title : undefined}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-auto border-t p-4">
        <div className="flex items-center justify-start mb-4">
          <Switch
            className="scale-75 data-[state=checked]:bg-primary"
            checked={resolvedTheme === "dark"}
            onCheckedChange={toggleTheme}
            aria-label="Toggle dark mode"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={cn("w-full justify-start px-2", collapsed && "justify-center px-0")}>
              <Avatar className={cn("h-6 w-6", !collapsed && "mr-2")}>
                <AvatarImage src={undefined} alt="@username" />
                <AvatarFallback className="font-bold text-xs flex items-center justify-center w-full h-full">
                  {user && user.name ? user.name.split(" ").map(n => n[0]).join("").toUpperCase() : "U"}
                </AvatarFallback>
              </Avatar>
              {!collapsed && (
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">{loading ? "..." : user ? user.name : "Unknown"}</span>
                  <span className="text-xs text-muted-foreground">{loading ? "..." : user ? user.email : ""}</span>
                </div>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem asChild>
              <Link href="/settings/profile">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/login">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
