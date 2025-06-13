"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { format, addDays, addWeeks } from "date-fns"
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
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, CreditCard, Plus, CircleDot, CheckCircle, MoreHorizontal } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { DatePicker } from "@/components/date-picker"
import { Switch } from "@/components/ui/switch"

interface ClientPackage {
  id: string
  type: string
  sessions: number
  sessionsUsed: number
  startDate: string
  expirationDate: string
  paymentStatus: "paid" | "pending" | "partial"
  packageNumber: string
}

interface ClientPackagesProps {
  clientId: string
  clientName: string
  packages: ClientPackage[]
  onPackageAdded?: () => void
}

export function ClientPackages({ clientId, clientName, packages, onPackageAdded }: ClientPackagesProps) {
  const [startDate, setStartDate] = useState<Date>()
  const [expirationDate, setExpirationDate] = useState<Date>()
  const [sessionPackage, setSessionPackage] = useState<string>("")
  const [paymentStatus, setPaymentStatus] = useState<"paid" | "pending" | "partial">("pending")
  const [amount, setAmount] = useState<string>("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()
  const [editDialogOpen, setEditDialogOpen] = useState<string | null>(null)
  const [editForm, setEditForm] = useState<any>({})
  const [deletedPackages, setDeletedPackages] = useState<string[]>([])

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
    if (date && sessionPackage) {
      setExpirationDate(calculateExpirationDate(sessionPackage, date))
    }
  }

  const handleAddPackage = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!startDate || !sessionPackage) {
      toast({
        title: "Missing information",
        description: "Please select a package and start date",
        variant: "destructive",
      })
      return
    }

    try {
      const res = await fetch(`/api/clients/${clientId}/packages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: sessionPackage,
          sessions: parseInt(sessionPackage),
          sessionsUsed: 0,
          startDate: startDate.toISOString(),
          expirationDate: expirationDate?.toISOString(),
          paymentStatus,
          amount: amount ? parseFloat(amount) : undefined,
        }),
      })

      if (!res.ok) throw new Error("Failed to add package")

      toast({
        title: "Package Added",
        description: `A new ${sessionPackage}-session package has been added for ${clientName}.`,
      })

      // Reset form
      setStartDate(undefined)
      setExpirationDate(undefined)
      setSessionPackage("")
      setPaymentStatus("pending")
      setAmount("")

      // Close dialog
      setIsDialogOpen(false)

      // Notify parent component to reload packages
      onPackageAdded?.()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add package. Please try again.",
        variant: "destructive",
      })
    }
  }

  const openEditDialog = (pkg: any) => {
    setEditForm({ ...pkg })
    setEditDialogOpen(pkg.id)
  }

  const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setEditForm((prev: any) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleEditDateChange = (date: Date | undefined, field: string) => {
    setEditForm((prev: any) => ({
      ...prev,
      [field]: date ? date.toISOString() : undefined,
    }))
  }

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch(`/api/clients/${clientId}/packages`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageId: editForm.id,
          sessions: Number(editForm.sessions),
          sessionsUsed: Number(editForm.sessionsUsed),
          startDate: editForm.startDate,
          expirationDate: editForm.expirationDate,
          paymentStatus: editForm.paymentStatus,
          amount: editForm.amount ? Number(editForm.amount) : null,
          voided: !!editForm.voided,
        }),
      })
      if (!res.ok) throw new Error("Failed to update package")
      toast({ title: "Package updated", description: "Package details updated successfully." })
      setEditDialogOpen(null)
      onPackageAdded?.()
    } catch (err) {
      toast({ title: "Error", description: (err as Error).message, variant: "destructive" })
    }
  }

  const handleDeletePackage = (id: string) => {
    setDeletedPackages((prev) => [...prev, id])
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Session Packages</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Package
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Package</DialogTitle>
              <DialogDescription>Create a new session package for {clientName}.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddPackage}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="package-type" className="text-right">
                    Package
                  </Label>
                  <div className="col-span-3">
                    <Select value={sessionPackage} onValueChange={handlePackageChange} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select package" />
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
                    Payment
                  </Label>
                  <div className="col-span-3">
                    <Select value={paymentStatus} onValueChange={(value: "paid" | "pending" | "partial") => setPaymentStatus(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Payment status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="paid">Paid in Full</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="partial">Partial Payment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="amount" className="text-right">
                    Amount
                  </Label>
                  <div className="col-span-3 relative">
                    <CreditCard className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="amount" 
                      type="number" 
                      step="0.01" 
                      className="pl-8" 
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Add Package</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {packages.length > 0 ? (
        <div className="max-h-96 overflow-y-auto grid gap-4 md:grid-cols-2">
          {packages.filter(pkg => !deletedPackages.includes(pkg.id)).map((pkg) => (
            <Card key={pkg.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>{pkg.sessions} Session Package</CardTitle>
                  {pkg.sessionsUsed < pkg.sessions ? (
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-semibold text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300">
                      <CircleDot className="mr-1 h-3 w-3" /> In progress
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-900/20 dark:text-green-300">
                      <CheckCircle className="mr-1 h-3 w-3" /> Done
                    </span>
                  )}
                </div>
                <CardDescription>
                  {format(new Date(pkg.startDate), "MMM d, yyyy")} -{" "}
                  {format(new Date(pkg.expirationDate), "MMM d, yyyy")}
                  <br />
                  <span className="text-xs text-muted-foreground font-mono">#{pkg.packageNumber}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2">
                  <div className="flex justify-end text-sm">
                    <span className="font-medium">
                      {pkg.sessionsUsed} of {pkg.sessions}
                    </span>
                  </div>
                  <Progress value={(pkg.sessionsUsed / pkg.sessions) * 100} className="h-2" />
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 mt-4">
                <Dialog open={editDialogOpen === pkg.id} onOpenChange={open => !open && setEditDialogOpen(null)}>
                  <Button variant="outline" size="icon" className="rounded-full h-7 w-7 p-0" onClick={() => openEditDialog(pkg)} title="Manage Package">
                    <span className="sr-only">Manage Package</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Manage Package</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleEditSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="sessions">Sessions</Label>
                          <Input id="sessions" name="sessions" type="number" min={1} value={editForm.sessions || ""} onChange={handleEditFormChange} required />
                        </div>
                        <div>
                          <Label htmlFor="sessionsUsed">Sessions Used</Label>
                          <Input id="sessionsUsed" name="sessionsUsed" type="number" min={0} value={editForm.sessionsUsed || ""} onChange={handleEditFormChange} required />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="startDate">Start Date</Label>
                          <DatePicker date={editForm.startDate ? new Date(editForm.startDate) : undefined} onDateChange={date => handleEditDateChange(date, "startDate")} />
                        </div>
                        <div>
                          <Label htmlFor="expirationDate">Expiration Date</Label>
                          <DatePicker date={editForm.expirationDate ? new Date(editForm.expirationDate) : undefined} onDateChange={date => handleEditDateChange(date, "expirationDate")} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="paymentStatus">Payment Status</Label>
                          <Select value={editForm.paymentStatus || ""} onValueChange={value => setEditForm((prev: any) => ({ ...prev, paymentStatus: value }))}>
                            <SelectTrigger>
                              <SelectValue placeholder="Payment status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="paid">Paid in Full</SelectItem>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="partial">Partial Payment</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="amount">Amount</Label>
                          <Input id="amount" name="amount" type="number" step="0.01" value={editForm.amount || ""} onChange={handleEditFormChange} />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit" className="w-full">Save Changes</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
                <Button variant="destructive" size="icon" className="rounded-full h-7 w-7 p-0" onClick={() => handleDeletePackage(pkg.id)} title="Delete Package">
                  <span className="sr-only">Delete</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m5 6v6m4-6v6" /></svg>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-8">
            <p className="text-muted-foreground">No active packages found</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
