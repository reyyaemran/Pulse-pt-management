"use client"

import * as React from "react"
import { Clock } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface TimePickerProps {
  date?: Date
  setDate: (date: Date) => void
  label?: string
  className?: string
}

export function TimePicker({ date, setDate, label, className }: TimePickerProps) {
  const minuteRef = React.useRef<HTMLInputElement>(null)
  const hourRef = React.useRef<HTMLInputElement>(null)
  const [hour, setHour] = React.useState<number>(date ? date.getHours() : 0)
  const [minute, setMinute] = React.useState<number>(date ? date.getMinutes() : 0)
  const [isPM, setIsPM] = React.useState<boolean>(date ? date.getHours() >= 12 : false)

  React.useEffect(() => {
    if (!date) return

    setHour(date.getHours() % 12 || 12)
    setMinute(date.getMinutes())
    setIsPM(date.getHours() >= 12)
  }, [date])

  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value, 10)
    if (isNaN(value)) {
      setHour(0)
      return
    }

    if (value > 12) {
      setHour(12)
    } else if (value < 0) {
      setHour(0)
    } else {
      setHour(value)
    }

    if (value.toString().length >= 2) {
      minuteRef.current?.focus()
    }
  }

  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value, 10)
    if (isNaN(value)) {
      setMinute(0)
      return
    }

    if (value > 59) {
      setMinute(59)
    } else if (value < 0) {
      setMinute(0)
    } else {
      setMinute(value)
    }
  }

  const handleAMPMToggle = () => {
    setIsPM(!isPM)
  }

  React.useEffect(() => {
    const newDate = new Date()
    if (date) {
      newDate.setTime(date.getTime())
    }

    const h = isPM ? (hour === 12 ? 12 : hour + 12) : hour === 12 ? 0 : hour
    newDate.setHours(h)
    newDate.setMinutes(minute)
    newDate.setSeconds(0)
    newDate.setMilliseconds(0)

    setDate(newDate)
  }, [hour, minute, isPM, setDate, date])

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && <Label>{label}</Label>}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 border rounded-md px-3 py-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <Input
            ref={hourRef}
            value={hour}
            onChange={handleHourChange}
            className="w-8 border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="12"
          />
          <span className="text-muted-foreground">:</span>
          <Input
            ref={minuteRef}
            value={minute.toString().padStart(2, "0")}
            onChange={handleMinuteChange}
            className="w-8 border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="00"
          />
          <button
            type="button"
            onClick={handleAMPMToggle}
            className="ml-1 rounded px-1.5 py-0.5 text-xs font-medium hover:bg-accent"
          >
            {isPM ? "PM" : "AM"}
          </button>
        </div>
      </div>
    </div>
  )
}
