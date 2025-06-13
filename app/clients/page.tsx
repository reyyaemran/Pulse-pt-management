"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, CalendarIcon, Phone, User, Mail } from "lucide-react"
import { ClientsTable } from "@/components/clients-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format, addDays, addWeeks } from "date-fns"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { useToast } from "@/hooks/use-toast"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { DatePicker } from "@/components/date-picker"
import { BirthdayDatePicker } from "@/components/birthday-date-picker"

export default function ClientsPage() {
  const [startDate, setStartDate] = useState<Date>()
  const [expirationDate, setExpirationDate] = useState<Date>()
  const [sessionPackage, setSessionPackage] = useState<string>("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [birthdayOpen, setBirthdayOpen] = useState(false)
  const { toast } = useToast()
  const [refreshCounter, setRefreshCounter] = useState(0)
  const [birthday, setBirthday] = useState<Date>()
  const [activeTab, setActiveTab] = useState("personal")
  const [clients, setClients] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    medicalHistory: "",
    injuries: "",
    goals: "",
    notes: "",
  })

  // Calculate expiration date based on package and start date
  const calculateExpirationDate = (packageType: string, start: Date | undefined) => {
    if (!start) return undefined

    switch (packageType) {
      case "5":
        return addDays(start, 10) // 5 sessions valid for 10 days
      case "10":
        return addWeeks(start, 5) // 10 sessions valid for 5 weeks
      case "20":
        return addWeeks(start, 10) // 20 sessions valid for 10 weeks
      case "30":
        return addWeeks(start, 15) // 30 sessions valid for 15 weeks
      case "40":
        return addWeeks(start, 20) // 40 sessions valid for 20 weeks
      default:
        return undefined
    }
  }

  // Handle package selection
  const handlePackageChange = (value: string) => {
    setSessionPackage(value)
    setExpirationDate(calculateExpirationDate(value, startDate))
  }

  // Handle start date selection
  const handleStartDateChange = (date: Date | undefined) => {
    setStartDate(date)
    setCalendarOpen(false)
    if (date && sessionPackage) {
      setExpirationDate(calculateExpirationDate(sessionPackage, date))
    }
  }

  // Handle birthday selection
  const handleBirthdayChange = (date: Date | undefined) => {
    setBirthday(date)
    setBirthdayOpen(false)
  }

  // Handle form change
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { firstName, lastName, email, phone, address, medicalHistory, injuries, goals, notes } = form;
    const dateOfBirth = birthday ? birthday.toISOString() : undefined

    if (!firstName || !lastName || !email || !phone) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    try {
      const res = await fetch("/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          dateOfBirth,
          address,
          medicalHistory,
          injuries,
          goals,
          notes,
          startDate: startDate ? startDate.toISOString() : undefined,
          expirationDate: expirationDate ? expirationDate.toISOString() : undefined,
          sessionPackage: sessionPackage || undefined,
          sessionsRemaining: sessionPackage ? Number.parseInt(sessionPackage) : undefined,
        }),
      })
      if (!res.ok) throw new Error("Failed to add client")
      toast({
        title: "Client added successfully",
        description: `${firstName} ${lastName} has been added with ${sessionPackage} sessions`,
      })
      setIsDialogOpen(false)
      setStartDate(undefined)
      setExpirationDate(undefined)
      setSessionPackage("")
      setBirthday(undefined)
      setActiveTab("personal")
      setRefreshCounter((prev) => prev + 1)
    } catch (err) {
      console.log(err)
      toast({
        title: "Error",
        description: (err as Error).message,
        variant: "destructive",
      })
    }
  }

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true)
      try {
        const res = await fetch("/api/clients")
        if (!res.ok) throw new Error("Failed to fetch clients")
        const data = await res.json()
        // Transform data to match table expectations
        const transformed = data.map((client: any) => ({
          id: client.id,
          clientNumber: client.clientNumber,
          name: `${client.firstName} ${client.lastName}`,
          email: client.email,
          phone: client.phone || "",
          status: "active", // You can adjust this if you have a status field
          joinDate: client.startDate ? new Date(client.startDate).toLocaleDateString() : "",
          lastSession: "-", // You can enhance this with real session data if needed
          avatar: client.avatar || null,
        }))
        setClients(transformed)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }
    fetchClients()
  }, [refreshCounter])

  return (
    <DashboardShell>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Clients</h2>
        <div className="flex items-center">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Client
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New Client</DialogTitle>
                <DialogDescription>Enter client details and select a session package.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-2">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="personal">Personal Info</TabsTrigger>
                    <TabsTrigger value="medical">Medical</TabsTrigger>
                    <TabsTrigger value="package">Package</TabsTrigger>
                  </TabsList>
                  <TabsContent value="personal" className="space-y-4 pt-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="firstName" className="text-right">First Name</Label>
                      <div className="col-span-3 relative">
                        <User className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input id="firstName" name="firstName" value={form.firstName} onChange={handleFormChange} placeholder="John" className="pl-8" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="lastName" className="text-right">Last Name</Label>
                      <div className="col-span-3 relative">
                        <User className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input id="lastName" name="lastName" value={form.lastName} onChange={handleFormChange} placeholder="Doe" className="pl-8" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="phone" className="text-right">
                        Phone
                      </Label>
                      <div className="col-span-3 relative">
                        <Phone className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input id="phone" name="phone" value={form.phone} onChange={handleFormChange} placeholder="(555) 123-4567" className="pl-8" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <div className="col-span-3 relative">
                        <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input id="email" name="email" value={form.email} onChange={handleFormChange} type="email" placeholder="client@example.com" className="pl-8" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="birthday" className="text-right">
                        Birthday
                      </Label>
                      <div className="col-span-3">
                        <BirthdayDatePicker
                          date={birthday}
                          onDateChange={handleBirthdayChange}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-start gap-4">
                      <Label htmlFor="goals" className="text-right pt-2">
                        Goals
                      </Label>
                      <div className="col-span-3">
                        <Textarea id="goals" name="goals" value={form.goals} onChange={handleFormChange} placeholder="Client's fitness goals and objectives" className="min-h-[100px]" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="medical" className="space-y-4 pt-4">
                    <div className="grid grid-cols-4 items-start gap-4">
                      <Label htmlFor="medical-history" className="text-right pt-2">
                        Medical History
                      </Label>
                      <div className="col-span-3">
                        <Textarea id="medical-history" name="medicalHistory" value={form.medicalHistory} onChange={handleFormChange} placeholder="Any relevant medical history or conditions" className="min-h-[100px]" />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-start gap-4">
                      <Label htmlFor="injuries" className="text-right pt-2">
                        Injuries
                      </Label>
                      <div className="col-span-3">
                        <Textarea id="injuries" name="injuries" value={form.injuries} onChange={handleFormChange} placeholder="Any past or current injuries" className="min-h-[100px]" />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label className="text-right">PAR-Q</Label>
                      <div className="col-span-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="parq" name="parq" />
                          <label
                            htmlFor="parq"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Client has completed PAR-Q form
                          </label>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="package" className="space-y-4 pt-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="startDate" className="text-right">
                        Start Date
                      </Label>
                      <div className="col-span-3">
                        <DatePicker
                          date={startDate}
                          onDateChange={handleStartDateChange}
                          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="sessions" className="text-right">
                        Sessions
                      </Label>
                      <div className="col-span-3">
                        <Select value={sessionPackage} onValueChange={handlePackageChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select package (optional)" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 Sessions (10 days)</SelectItem>
                            <SelectItem value="10">10 Sessions (5 weeks)</SelectItem>
                            <SelectItem value="20">20 Sessions (10 weeks)</SelectItem>
                            <SelectItem value="30">30 Sessions (15 weeks)</SelectItem>
                            <SelectItem value="40">40 Sessions (20 weeks)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="expirationDate" className="text-right">
                        Expiration Date
                      </Label>
                      <div className="col-span-3">
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !expirationDate && "text-muted-foreground",
                          )}
                          disabled
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {expirationDate ? format(expirationDate, "PPP") : "Auto-calculated"}
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="payment" className="text-right">
                        Payment Status
                      </Label>
                      <div className="col-span-3">
                        <Select defaultValue="pending">
                          <SelectTrigger>
                            <SelectValue placeholder="Payment status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="paid">Paid</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="partial">Partial Payment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                <DialogFooter className="mt-6">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Save Client</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="overflow-x-auto pb-2">
          <TabsList>
            <TabsTrigger value="all" className="font-medium">
              All Clients
            </TabsTrigger>
            <TabsTrigger value="active" className="font-medium">
              Active
            </TabsTrigger>
            <TabsTrigger value="inactive" className="font-medium">
              Inactive
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="font-bold">Client Management</CardTitle>
              <CardDescription>Manage your clients and their training programs</CardDescription>
              <div className="flex items-center gap-2 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search clients..." className="pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              {loading ? (
                <div className="p-8 text-center">Loading clients...</div>
              ) : error ? (
                <div className="p-8 text-center text-red-500">{error}</div>
              ) : (
                <ClientsTable clients={clients} refreshClients={refreshCounter} />
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
