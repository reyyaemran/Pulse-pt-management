"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"

const daysOfWeek = [
  { id: "monday", label: "Monday" },
  { id: "tuesday", label: "Tuesday" },
  { id: "wednesday", label: "Wednesday" },
  { id: "thursday", label: "Thursday" },
  { id: "friday", label: "Friday" },
  { id: "saturday", label: "Saturday" },
  { id: "sunday", label: "Sunday" },
]

export default function AvailabilityPage() {
  const { toast } = useToast()
  const [availabilityType, setAvailabilityType] = useState("custom")
  const [workingHours, setWorkingHours] = useState({
    monday: { enabled: true, start: "09:00", end: "17:00" },
    tuesday: { enabled: true, start: "09:00", end: "17:00" },
    wednesday: { enabled: true, start: "09:00", end: "17:00" },
    thursday: { enabled: true, start: "09:00", end: "17:00" },
    friday: { enabled: true, start: "09:00", end: "17:00" },
    saturday: { enabled: false, start: "10:00", end: "15:00" },
    sunday: { enabled: false, start: "10:00", end: "15:00" },
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAvailability() {
      setLoading(true)
      try {
        const res = await fetch("/api/auth/availability")
        if (res.ok) {
          const data = await res.json()
          if (data && data.workingHours) {
            setWorkingHours({
              monday: data.workingHours.monday ? JSON.parse(data.workingHours.monday) : { enabled: true, start: "09:00", end: "17:00" },
              tuesday: data.workingHours.tuesday ? JSON.parse(data.workingHours.tuesday) : { enabled: true, start: "09:00", end: "17:00" },
              wednesday: data.workingHours.wednesday ? JSON.parse(data.workingHours.wednesday) : { enabled: true, start: "09:00", end: "17:00" },
              thursday: data.workingHours.thursday ? JSON.parse(data.workingHours.thursday) : { enabled: true, start: "09:00", end: "17:00" },
              friday: data.workingHours.friday ? JSON.parse(data.workingHours.friday) : { enabled: true, start: "09:00", end: "17:00" },
              saturday: data.workingHours.saturday ? JSON.parse(data.workingHours.saturday) : { enabled: false, start: "10:00", end: "15:00" },
              sunday: data.workingHours.sunday ? JSON.parse(data.workingHours.sunday) : { enabled: false, start: "10:00", end: "15:00" },
            })
          }
        }
      } catch (error) {
        toast({ title: "Error", description: "Failed to load availability.", variant: "destructive" })
      } finally {
        setLoading(false)
      }
    }
    fetchAvailability()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleShiftChange = (value: string) => {
    setAvailabilityType(value)

    // Update working hours based on selected shift
    if (value === "morning") {
      const morningShift = {
        start: "06:00",
        end: "14:00",
      }
      const updatedHours = { ...workingHours }
      daysOfWeek.forEach((day) => {
        if (updatedHours[day.id as keyof typeof workingHours].enabled) {
          updatedHours[day.id as keyof typeof workingHours] = {
            ...updatedHours[day.id as keyof typeof workingHours],
            ...morningShift,
          }
        }
      })
      setWorkingHours(updatedHours)
    } else if (value === "afternoon") {
      const afternoonShift = {
        start: "12:00",
        end: "20:00",
      }
      const updatedHours = { ...workingHours }
      daysOfWeek.forEach((day) => {
        if (updatedHours[day.id as keyof typeof workingHours].enabled) {
          updatedHours[day.id as keyof typeof workingHours] = {
            ...updatedHours[day.id as keyof typeof workingHours],
            ...afternoonShift,
          }
        }
      })
      setWorkingHours(updatedHours)
    } else if (value === "evening") {
      const eveningShift = {
        start: "16:00",
        end: "00:00",
      }
      const updatedHours = { ...workingHours }
      daysOfWeek.forEach((day) => {
        if (updatedHours[day.id as keyof typeof workingHours].enabled) {
          updatedHours[day.id as keyof typeof workingHours] = {
            ...updatedHours[day.id as keyof typeof workingHours],
            ...eveningShift,
          }
        }
      })
      setWorkingHours(updatedHours)
    }
  }

  const handleDayToggle = (day: string, enabled: boolean) => {
    setWorkingHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day as keyof typeof workingHours],
        enabled,
      },
    }))
  }

  const handleTimeChange = (day: string, type: "start" | "end", time: string) => {
    setWorkingHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day as keyof typeof workingHours],
        [type]: time,
      },
    }))
  }

  const handleSaveAvailability = async () => {
    try {
      const res = await fetch("/api/auth/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ workingHours }),
      })
      if (!res.ok) throw new Error("Failed to save availability")
      toast({ title: "Availability updated", description: "Your availability settings have been saved successfully." })
    } catch (error) {
      toast({ title: "Error", description: "Failed to save availability.", variant: "destructive" })
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Availability</h3>
        <p className="text-sm text-muted-foreground">Set your working hours and availability for client sessions.</p>
      </div>
      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Working Shift</CardTitle>
          <CardDescription>Select your preferred working shift or set custom hours.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={availabilityType} onValueChange={handleShiftChange} className="w-full">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="morning">Morning</TabsTrigger>
              <TabsTrigger value="afternoon">Afternoon</TabsTrigger>
              <TabsTrigger value="evening">Evening</TabsTrigger>
              <TabsTrigger value="custom">Custom</TabsTrigger>
            </TabsList>
            <TabsContent value="morning" className="space-y-4">
              <div className="text-sm">
                <p className="font-medium">Morning Shift</p>
                <p className="text-muted-foreground">6:00 AM - 2:00 PM, Monday to Friday</p>
              </div>
            </TabsContent>
            <TabsContent value="afternoon" className="space-y-4">
              <div className="text-sm">
                <p className="font-medium">Afternoon Shift</p>
                <p className="text-muted-foreground">12:00 PM - 8:00 PM, Monday to Friday</p>
              </div>
            </TabsContent>
            <TabsContent value="evening" className="space-y-4">
              <div className="text-sm">
                <p className="font-medium">Evening Shift</p>
                <p className="text-muted-foreground">4:00 PM - 12:00 AM, Monday to Friday</p>
              </div>
            </TabsContent>
            <TabsContent value="custom" className="space-y-4">
              <div className="text-sm">
                <p className="font-medium">Custom Hours</p>
                <p className="text-muted-foreground">Set your own working hours for each day</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Schedule</CardTitle>
          <CardDescription>Configure your availability for each day of the week.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {daysOfWeek.map((day) => (
              <div key={day.id} className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 w-32">
                  <Checkbox
                    id={`${day.id}-toggle`}
                    checked={workingHours[day.id as keyof typeof workingHours].enabled}
                    onCheckedChange={(checked) => handleDayToggle(day.id, checked as boolean)}
                  />
                  <Label htmlFor={`${day.id}-toggle`} className="font-medium">
                    {day.label}
                  </Label>
                </div>
                <div className="flex flex-1 items-center space-x-2">
                  <div className="grid grid-cols-2 gap-2 flex-1">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor={`${day.id}-start`} className="w-12 text-right text-sm">
                        From
                      </Label>
                      <Select
                        disabled={!workingHours[day.id as keyof typeof workingHours].enabled}
                        value={workingHours[day.id as keyof typeof workingHours].start}
                        onValueChange={(value) => handleTimeChange(day.id, "start", value)}
                      >
                        <SelectTrigger id={`${day.id}-start`}>
                          <SelectValue placeholder="Start time" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }).map((_, i) => {
                            const hour = i.toString().padStart(2, "0")
                            return (
                              <SelectItem key={`${hour}:00`} value={`${hour}:00`}>
                                {`${hour}:00`}
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor={`${day.id}-end`} className="w-12 text-right text-sm">
                        To
                      </Label>
                      <Select
                        disabled={!workingHours[day.id as keyof typeof workingHours].enabled}
                        value={workingHours[day.id as keyof typeof workingHours].end}
                        onValueChange={(value) => handleTimeChange(day.id, "end", value)}
                      >
                        <SelectTrigger id={`${day.id}-end`}>
                          <SelectValue placeholder="End time" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }).map((_, i) => {
                            const hour = i.toString().padStart(2, "0")
                            return (
                              <SelectItem key={`${hour}:00`} value={`${hour}:00`}>
                                {`${hour}:00`}
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Break Time</CardTitle>
          <CardDescription>Set your preferred break times between sessions.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Label htmlFor="break-time" className="min-w-32">
                Break between sessions
              </Label>
              <Select defaultValue="15">
                <SelectTrigger id="break-time" className="w-40">
                  <SelectValue placeholder="Select break time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">No break</SelectItem>
                  <SelectItem value="5">5 minutes</SelectItem>
                  <SelectItem value="10">10 minutes</SelectItem>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="lunch-break" className="min-w-32">
                Lunch break
              </Label>
              <div className="flex items-center space-x-2">
                <Switch id="lunch-break" defaultChecked />
                <span className="text-sm">Enable lunch break</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="lunch-time" className="min-w-32">
                Lunch time
              </Label>
              <Select defaultValue="12:00-13:00">
                <SelectTrigger id="lunch-time" className="w-40">
                  <SelectValue placeholder="Select lunch time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="11:00-12:00">11:00 - 12:00</SelectItem>
                  <SelectItem value="12:00-13:00">12:00 - 13:00</SelectItem>
                  <SelectItem value="13:00-14:00">13:00 - 14:00</SelectItem>
                  <SelectItem value="14:00-15:00">14:00 - 15:00</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSaveAvailability}>Save availability</Button>
    </div>
  )
}
