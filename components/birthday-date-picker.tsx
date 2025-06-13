"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface BirthdayDatePickerProps {
  date: Date | undefined
  onDateChange: (date: Date | undefined) => void
}

export function BirthdayDatePicker({ date, onDateChange }: BirthdayDatePickerProps) {
  const [open, setOpen] = React.useState(false)

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
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => {
            onDateChange(date)
            setOpen(false)
          }}
          disabled={(date) => date > new Date()}
          initialFocus
          buttonVariant="ghost"
          captionLayout="dropdown"
          fromYear={1900}
          toYear={new Date().getFullYear()}
        />
      </PopoverContent>
    </Popover>
  )
} 