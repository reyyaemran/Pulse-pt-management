"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface ScheduleDatePickerProps {
  date: Date | undefined
  onDateChange: (date: Date | undefined) => void
  selectedTime?: string
  onTimeChange?: (time: string) => void
}

export function ScheduleDatePicker({ 
  date, 
  onDateChange,
  selectedTime,
  onTimeChange 
}: ScheduleDatePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [time, setTime] = React.useState<string | null>(selectedTime || null)

  const timeSlots = Array.from({ length: 16 }, (_, i) => {
    const hour = i + 6 // Start from 6 AM
    return `${hour.toString().padStart(2, "0")}:00`
  }).filter(time => {
    const [hours] = time.split(':').map(Number)
    return hours < 21 // End at 9 PM (21:00)
  })

  const handleTimeSelect = (selectedTime: string) => {
    setTime(selectedTime)
    onTimeChange?.(selectedTime)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
          {time && <span className="ml-2">at {time}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-auto p-0" 
        align="start"
        style={{ zIndex: 9999 }}
      >
        <Card className="gap-0 p-0">
          <CardContent className="relative p-0 md:pr-40">
            <div className="p-3">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(date) => {
                  onDateChange(date)
                  if (!date) setOpen(false)
                }}
                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                initialFocus
                buttonVariant="ghost"
                captionLayout="dropdown"
                fromYear={new Date().getFullYear()}
                toYear={new Date().getFullYear() + 1}
                className="bg-transparent p-0 [--cell-size:2rem] md:[--cell-size:2.5rem]"
                formatters={{
                  formatWeekdayName: (date) => {
                    return date.toLocaleString("en-US", { weekday: "short" })
                  },
                }}
              />
            </div>
            <div className="absolute inset-y-0 right-0 w-40 border-l">
              <div className="relative h-full">
                <div className="absolute inset-0 overflow-y-auto">
                  <div className="grid gap-1 p-3">
                    {timeSlots.map((timeSlot) => (
                      <Button
                        key={timeSlot}
                        variant={time === timeSlot ? "default" : "outline"}
                        onClick={() => handleTimeSelect(timeSlot)}
                        className="w-full h-8 text-sm shadow-none"
                      >
                        {timeSlot}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 border-t !py-3 px-3 md:flex-row">
            <div className="text-xs">
              {date && time ? (
                <>
                  Your session is scheduled for{" "}
                  <span className="font-medium">
                    {date?.toLocaleDateString("en-US", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                    })}
                  </span>
                  {" at "}
                  <span className="font-medium">{time}</span>
                </>
              ) : (
                <>Select a date and time for your session.</>
              )}
            </div>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  )
} 