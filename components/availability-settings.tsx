"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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

export interface WorkingHours {
  [key: string]: {
    enabled: boolean
    start: string
    end: string
  }
}

interface AvailabilitySettingsProps {
  onSave?: (workingHours: WorkingHours) => void
  initialWorkingHours?: WorkingHours
}

export function AvailabilitySettings({ onSave, initialWorkingHours }: AvailabilitySettingsProps) {
  const { toast } = useToast()
  const [workingHours, setWorkingHours] = useState<WorkingHours>(
    initialWorkingHours || {
      monday: { enabled: true, start: "09:00", end: "17:00" },
      tuesday: { enabled: true, start: "09:00", end: "17:00" },
      wednesday: { enabled: true, start: "09:00", end: "17:00" },
      thursday: { enabled: true, start: "09:00", end: "17:00" },
      friday: { enabled: true, start: "09:00", end: "17:00" },
      saturday: { enabled: false, start: "10:00", end: "15:00" },
      sunday: { enabled: false, start: "10:00", end: "15:00" },
    }
  )

  const handleDayToggle = (day: string, enabled: boolean) => {
    setWorkingHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        enabled,
      },
    }))
  }

  const handleTimeChange = (day: string, type: "start" | "end", time: string) => {
    setWorkingHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [type]: time,
      },
    }))
  }

  const handleSaveAvailability = () => {
    onSave?.(workingHours)
    toast({
      title: "Availability updated",
      description: "Your availability settings have been saved successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Availability</h3>
        <p className="text-sm text-muted-foreground">Set your working hours and availability for client sessions.</p>
      </div>
      <Separator />

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
                    checked={workingHours[day.id].enabled}
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
                        disabled={!workingHours[day.id].enabled}
                        value={workingHours[day.id].start}
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
                        disabled={!workingHours[day.id].enabled}
                        value={workingHours[day.id].end}
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

      <Button onClick={handleSaveAvailability}>Save availability</Button>
    </div>
  )
} 