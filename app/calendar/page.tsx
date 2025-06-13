"use client"

import type React from "react"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { DailySchedule } from "@/components/daily-schedule"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { format } from "date-fns"
import { ScheduleDatePicker } from "@/components/schedule-date-picker"
import { AvailabilitySettings, WorkingHours } from "@/components/availability-settings"
import { Input } from "@/components/ui/input"

// Mock active clients
const activeClients = [
  { id: "1", name: "Sarah Johnson" },
  { id: "2", name: "Mike Peterson" },
  { id: "3", name: "Emma Wilson" },
  { id: "4", name: "David Lee" },
  { id: "7", name: "Jennifer Garcia" },
  { id: "8", name: "Robert Martinez" },
]

export default function CalendarPage() {
  const { toast } = useToast()
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>()
  const [workingHours, setWorkingHours] = useState<WorkingHours>({
    monday: { enabled: true, start: "09:00", end: "17:00" },
    tuesday: { enabled: true, start: "09:00", end: "17:00" },
    wednesday: { enabled: true, start: "09:00", end: "17:00" },
    thursday: { enabled: true, start: "09:00", end: "17:00" },
    friday: { enabled: true, start: "09:00", end: "17:00" },
    saturday: { enabled: false, start: "10:00", end: "15:00" },
    sunday: { enabled: false, start: "10:00", end: "15:00" },
  })
  // Sessions state
  const [sessions, setSessions] = useState([
    // Example session
    {
      id: 1,
      client: "Sarah Johnson",
      type: "Strength Training",
      status: "Confirmed",
      day: 0, // Monday
      start: "09:00",
      end: "10:00",
    },
    {
      id: 2,
      client: "Mike Peterson",
      type: "Cardio",
      status: "Confirmed",
      day: 1, // Tuesday
      start: "11:30",
      end: "12:30",
    },
  ])
  const [selectedClient, setSelectedClient] = useState<string>("")
  const [customClientName, setCustomClientName] = useState("")
  const [showAddClient, setShowAddClient] = useState(false)
  const [newClientName, setNewClientName] = useState("")

  // Helper: get day index (0=Sunday, 1=Monday, ...)
  function getDayIndex(date: Date) {
    return date.getDay()
  }

  // Helper: get time slots for a day based on working hours (1-hour slots only)
  function getTimeSlots(dayKey: string) {
    const wh = workingHours[dayKey]
    if (!wh.enabled) return []
    const startHour = parseInt(wh.start.split(":")[0])
    const endHour = parseInt(wh.end.split(":")[0])
    const slots = []
    for (let h = startHour; h < endHour; h++) {
      slots.push(`${h.toString().padStart(2, "0")}:00`)
    }
    return slots
  }

  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate)
  }

  const handleTimeChange = (newTime: string) => {
    setTime(newTime)
  }

  const handleSaveAvailability = (newWorkingHours: WorkingHours) => {
    setWorkingHours(newWorkingHours)
  }

  // Add session on schedule
  const handleScheduleSession = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!date || !time || (!selectedClient && !customClientName)) {
      toast({
        title: "Error",
        description: "Please select a client or enter a name, and select a date and time for the session.",
        variant: "destructive",
      })
      return
    }
    const dayIdx = getDayIndex(date)
    const dayKey = date.toLocaleDateString("en-US", { weekday: "long" }).toLowerCase()
    const wh = workingHours[dayKey]
    if (!wh.enabled) {
      toast({
        title: "Error",
        description: "The selected day is not available for scheduling.",
        variant: "destructive",
      })
      return
    }
    // Check if time is within working hours
    const [selectedHour] = time.split(":")
    const [startHour] = wh.start.split(":")
    const [endHour] = wh.end.split(":")
    if (parseInt(selectedHour) < parseInt(startHour) || parseInt(selectedHour) >= parseInt(endHour)) {
      toast({
        title: "Error",
        description: "The selected time is outside of working hours.",
        variant: "destructive",
      })
      return
    }
    // Add session
    setSessions((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        client: customClientName.trim() ? customClientName : (activeClients.find(c => c.id === selectedClient)?.name || "New Client"),
        type: "Session",
        status: "Confirmed",
        day: dayIdx,
        start: time,
        end: `${(parseInt(time.split(":")[0]) + 1).toString().padStart(2, "0")}:00`,
      },
    ])
    toast({
      title: "Session scheduled",
      description: `Your session has been scheduled for ${date.toLocaleDateString()} at ${time}.`,
    })
  }

  return (
    <DashboardShell>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Calendar</h2>
        <div className="flex items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Client Schedule
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle>Add Client Schedule</DialogTitle>
                <DialogDescription>Schedule a new session for a client.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleScheduleSession}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="client" className="text-right">
                      Client
                    </Label>
                    <div className="col-span-3 flex gap-2 items-center">
                      <Select
                        name="client"
                        value={selectedClient}
                        onValueChange={setSelectedClient}
                        required
                        disabled={showAddClient}
                      >
                        <SelectTrigger id="client">
                          <SelectValue placeholder="Select client" />
                        </SelectTrigger>
                        <SelectContent style={{ maxHeight: 200, overflowY: 'auto' }}>
                          {activeClients.map((client) => (
                            <SelectItem key={client.id} value={client.id}>
                              {client.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {!showAddClient && (
                        <Button type="button" variant="outline" size="sm" onClick={() => setShowAddClient(true)}>
                          Add +
                        </Button>
                      )}
                      {showAddClient && (
                        <div className="flex gap-2 items-center">
                          <Input
                            type="text"
                            placeholder="New client name"
                            value={newClientName}
                            onChange={e => setNewClientName(e.target.value)}
                            className="min-w-[120px]"
                          />
                          <Button
                            type="button"
                            size="sm"
                            onClick={() => {
                              if (newClientName.trim()) {
                                const newId = (Math.max(...activeClients.map(c => parseInt(c.id)), 0) + 1).toString()
                                activeClients.push({ id: newId, name: newClientName.trim() })
                                setSelectedClient(newId)
                                setNewClientName("")
                                setShowAddClient(false)
                              }
                            }}
                          >
                            Save
                          </Button>
                          <Button type="button" size="sm" variant="ghost" onClick={() => { setShowAddClient(false); setNewClientName("") }}>Cancel</Button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="date" className="text-right">
                      Date & Time
                    </Label>
                    <div className="col-span-3">
                      <ScheduleDatePicker
                        date={date}
                        onDateChange={handleDateChange}
                        selectedTime={time}
                        onTimeChange={handleTimeChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="exercise" className="text-right">
                      Exercise Type
                    </Label>
                    <div className="col-span-3">
                      <Select name="exercise">
                        <SelectTrigger id="exercise">
                          <SelectValue placeholder="Select exercise type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="strength">Strength Training</SelectItem>
                          <SelectItem value="cardio">Cardio</SelectItem>
                          <SelectItem value="flexibility">Flexibility</SelectItem>
                          <SelectItem value="hiit">HIIT</SelectItem>
                          <SelectItem value="core">Core</SelectItem>
                          <SelectItem value="recovery">Recovery</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-start gap-4">
                    <Label htmlFor="notes" className="text-right pt-2">
                      Notes
                    </Label>
                    <div className="col-span-3">
                      <Textarea
                        id="notes"
                        name="notes"
                        placeholder="Session notes or instructions"
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">Recurring</Label>
                    <div className="col-span-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="recurring" name="recurring" />
                        <label
                          htmlFor="recurring"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Make this a recurring session
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">Notify Client</Label>
                    <div className="col-span-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="notify" name="notify" defaultChecked />
                        <label
                          htmlFor="notify"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Send notification to client
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Schedule Session</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Tabs defaultValue="day" className="space-y-4">
        <div className="overflow-x-auto pb-2">
          <TabsList>
            <TabsTrigger value="day" className="font-medium">
              Day
            </TabsTrigger>
            <TabsTrigger value="week" className="font-medium">
              Week
            </TabsTrigger>
            <TabsTrigger value="month" className="font-medium">
              Month
            </TabsTrigger>
            <TabsTrigger value="availability" className="font-medium">
              Availability
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="day" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle className="font-bold">Daily Schedule</CardTitle>
                <CardDescription>
                  {date?.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </CardDescription>
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sessions</SelectItem>
                  <SelectItem value="confirmed">Confirmed Only</SelectItem>
                  <SelectItem value="pending">Pending Only</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <DailySchedule date={date} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="week" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle className="font-bold">Weekly Schedule</CardTitle>
                <CardDescription>
                  Week of{" "}
                  {date &&
                    new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay()).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                      },
                    )}{" "}
                  -{" "}
                  {date &&
                    new Date(
                      date.getFullYear(),
                      date.getMonth(),
                      date.getDate() - date.getDay() + 6,
                    ).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                </CardDescription>
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sessions</SelectItem>
                  <SelectItem value="confirmed">Confirmed Only</SelectItem>
                  <SelectItem value="pending">Pending Only</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <div className="flex">
                {/* Sticky time column */}
                <div className="sticky left-0 z-10 bg-muted/30 border-r border-border min-w-[70px]">
                  <div className="h-[60px] flex items-center justify-center font-medium bg-muted/30 text-center border-b border-border">
                    Time
                  </div>
                  <div className="flex flex-col">
                    {getTimeSlots("monday").map((slot) => (
                      <div key={slot} className="h-[60px] flex items-center justify-center text-xs font-medium border-b border-border min-w-[70px]">
                        {slot}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Days grid */}
                <div className="flex-1 overflow-x-auto">
                  <div className="grid grid-cols-7 min-w-[700px]">
                    {Array.from({ length: 7 }).map((_, dayIdx) => {
                      const day = new Date(date || new Date())
                      day.setDate(day.getDate() - day.getDay() + dayIdx)
                      const isToday = new Date().toDateString() === day.toDateString()
                      const dayKey = day.toLocaleDateString("en-US", { weekday: "long" }).toLowerCase()
                      const slots = getTimeSlots(dayKey)
                      return (
                        <div key={dayIdx} className="border-r border-border last:border-r-0">
                          <div className={`h-[60px] flex flex-col justify-center items-center font-medium border-b border-border ${isToday ? "bg-primary/10" : "bg-muted/30"}`}>
                            {day.toLocaleDateString("en-US", { weekday: "short" })}
                            <div className="text-sm">{day.getDate()}</div>
                          </div>
                          <div className="flex flex-col">
                            {slots.map((slot, slotIdx) => {
                              // Find session for this day/slot
                              const session = sessions.find(
                                (s) => s.day === dayIdx && s.start === slot
                              )
                              return (
                                <div key={slotIdx} className="h-[60px] border-b border-border relative">
                                  {session ? (
                                    <Popover>
                                      <PopoverTrigger asChild>
                                        <div
                                          className="text-xs bg-emerald-500/10 border-l-2 border-emerald-500 p-2 rounded h-full flex flex-col justify-center cursor-pointer"
                                        >
                                          <div className="font-medium">{session.start} - {session.end}</div>
                                          <div className="flex items-center gap-1">
                                            <span className="flex-1">{session.client}</span>
                                            <span className={`h-2 w-2 rounded-full ${session.status === "Confirmed" ? "bg-emerald-500" : "bg-amber-500"}`} title={session.status}></span>
                                          </div>
                                          <div className="text-muted-foreground">{session.type}</div>
                                        </div>
                                      </PopoverTrigger>
                                      <PopoverContent align="center" className="w-64">
                                        <div className="font-bold mb-2">Session Details</div>
                                        <div><b>Client:</b> {session.client}</div>
                                        <div><b>Type:</b> {session.type}</div>
                                        <div><b>Status:</b> {session.status}</div>
                                        <div><b>Time:</b> {session.start} - {session.end}</div>
                                        <div><b>Day:</b> {day.toLocaleDateString("en-US", { weekday: "long" })}</div>
                                      </PopoverContent>
                                    </Popover>
                                  ) : null}
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="month" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle className="font-bold">Monthly Overview</CardTitle>
                <CardDescription>
                  {date?.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </CardDescription>
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sessions</SelectItem>
                  <SelectItem value="confirmed">Confirmed Only</SelectItem>
                  <SelectItem value="pending">Pending Only</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <div className="grid grid-cols-7 gap-1 text-center min-w-[700px]">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="font-medium text-sm py-1">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 35 }).map((_, index) => {
                  const currentDate = new Date(date || new Date())
                  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
                  const startOffset = firstDay.getDay()
                  const day = index - startOffset + 1
                  const isCurrentMonth =
                    day > 0 && day <= new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()

                  return (
                    <div
                      key={index}
                      className={`border rounded-md p-2 min-h-[80px] ${isCurrentMonth ? "bg-card" : "bg-muted/30 text-muted-foreground"} ${day === currentDate.getDate() && isCurrentMonth ? "ring-2 ring-primary" : ""}`}
                    >
                      <div className="text-right font-medium mb-1">{isCurrentMonth ? day : ""}</div>
                      {isCurrentMonth && (
                        <div className="space-y-1">
                          {day % 3 === 0 && (
                            <div className="text-xs bg-emerald-500/10 border-l-2 border-emerald-500 p-1 rounded truncate">
                              9:00 - Sarah J.
                            </div>
                          )}
                          {day % 5 === 0 && (
                            <div className="text-xs bg-emerald-500/10 border-l-2 border-emerald-500 p-1 rounded truncate">
                              11:30 - Mike P.
                            </div>
                          )}
                          {day % 7 === 0 && (
                            <div className="text-xs bg-amber-500/10 border-l-2 border-amber-500 p-1 rounded truncate">
                              2:00 - Emma W.
                            </div>
                          )}
                          {day % 4 === 0 && day % 2 === 0 && (
                            <div className="text-xs bg-emerald-500/10 border-l-2 border-emerald-500 p-1 rounded truncate">
                              4:30 - David L.
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="availability" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-bold">Availability Settings</CardTitle>
              <CardDescription>Configure your working hours and availability.</CardDescription>
            </CardHeader>
            <CardContent>
              <AvailabilitySettings
                initialWorkingHours={workingHours}
                onSave={handleSaveAvailability}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
