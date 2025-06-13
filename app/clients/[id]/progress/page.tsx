"use client"

import type React from "react"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Upload, Plus } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"
import { ClientProgressChart } from "@/components/client-progress-chart"
import { ClientMeasurementsChart } from "@/components/client-measurements-chart"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

export default function ClientProgressPage({ params }: { params: { id: string } }) {
  const clientId = params.id
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("measurements")

  // Mock client data
  const clients = [
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      phone: "(555) 123-4567",
      status: "active",
      joinDate: "Jan 15, 2023",
      lastSession: "Today",
      avatar: "/diverse-woman-portrait.png",
      goals: "Lose 10 pounds, improve overall fitness",
      notes: "Prefers morning sessions. Has a minor knee injury to be mindful of.",
      measurements: [
        { date: "2023-01-15", weight: 68, bodyFat: 28, chest: 91, waist: 76, hips: 102 },
        { date: "2023-02-15", weight: 67, bodyFat: 27, chest: 90, waist: 74, hips: 100 },
        { date: "2023-03-15", weight: 66, bodyFat: 26, chest: 89, waist: 71, hips: 99 },
        { date: "2023-04-15", weight: 65, bodyFat: 25, chest: 88, waist: 70, hips: 98 },
        { date: "2023-05-15", weight: 64, bodyFat: 24, chest: 86, waist: 69, hips: 97 },
      ],
      progress: [
        { date: "2023-01-20", exercise: "Squat", weight: 43, reps: 8 },
        { date: "2023-02-05", exercise: "Squat", weight: 48, reps: 8 },
        { date: "2023-02-20", exercise: "Squat", weight: 52, reps: 8 },
        { date: "2023-03-05", exercise: "Squat", weight: 57, reps: 8 },
        { date: "2023-03-20", exercise: "Squat", weight: 61, reps: 8 },
        { date: "2023-04-05", exercise: "Squat", weight: 66, reps: 8 },
        { date: "2023-04-20", exercise: "Squat", weight: 70, reps: 8 },
        { date: "2023-05-05", exercise: "Squat", weight: 75, reps: 8 },
      ],
      photos: [
        { date: "2023-01-15", url: "/front-view.png" },
        { date: "2023-03-15", url: "/front-view-progress.png" },
        { date: "2023-05-15", url: "/placeholder.svg?height=300&width=200&query=front view more progress" },
      ],
    },
    // Other clients...
  ]

  const client = clients.find((c) => c.id === clientId)

  if (!client) {
    return (
      <DashboardShell>
        <div className="flex flex-col items-center justify-center h-[400px]">
          <h2 className="text-2xl font-bold">Client not found</h2>
          <p className="text-muted-foreground">The client you're looking for doesn't exist or has been removed.</p>
          <Link href="/clients">
            <Button className="mt-4">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Clients
            </Button>
          </Link>
        </div>
      </DashboardShell>
    )
  }

  const handleAddMeasurement = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Measurements Added",
      description: "New measurements have been recorded for this client.",
    })
  }

  const handleAddProgress = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Progress Added",
      description: "New progress data has been recorded for this client.",
    })
  }

  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Photo Added",
      description: "New progress photo has been uploaded for this client.",
    })
  }

  return (
    <DashboardShell>
      <div className="flex items-center space-x-2 mb-6">
        <Link href={`/clients/${clientId}`}>
          <Button variant="outline" size="sm">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Client Profile
          </Button>
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={client.avatar || undefined} alt={client.name} />
            <AvatarFallback>{client.name.split(" ").map(n => n[0]).join("").toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{client.name}'s Progress</h2>
            <p className="text-muted-foreground">Tracking fitness journey since {client.joinDate}</p>
          </div>
        </div>
        <Badge variant={client.status === "active" ? "default" : "outline"} className="ml-0 sm:ml-2">
          {client.status === "active" ? "Active" : "Inactive"}
        </Badge>
      </div>

      <Tabs defaultValue="measurements" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-3 sm:w-[400px]">
          <TabsTrigger value="measurements" className="font-medium">
            Measurements
          </TabsTrigger>
          <TabsTrigger value="strength" className="font-medium">
            Strength Progress
          </TabsTrigger>
          <TabsTrigger value="photos" className="font-medium">
            Progress Photos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="measurements" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Body Measurements</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Measurement
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Measurements</DialogTitle>
                  <DialogDescription>Record new body measurements for {client.name}.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddMeasurement}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="measure-date" className="text-right">
                        Date
                      </Label>
                      <div className="col-span-3">
                        <Input
                          id="measure-date"
                          type="date"
                          defaultValue={format(new Date(), "yyyy-MM-dd")}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="weight" className="text-right">
                        Weight (kg)
                      </Label>
                      <div className="col-span-3">
                        <Input id="weight" type="number" step="0.1" className="w-full" />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="bodyfat" className="text-right">
                        Body Fat %
                      </Label>
                      <div className="col-span-3">
                        <Input id="bodyfat" type="number" step="0.1" className="w-full" />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="chest" className="text-right">
                        Chest (cm)
                      </Label>
                      <div className="col-span-3">
                        <Input id="chest" type="number" step="0.1" className="w-full" />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="waist" className="text-right">
                        Waist (cm)
                      </Label>
                      <div className="col-span-3">
                        <Input id="waist" type="number" step="0.1" className="w-full" />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="hips" className="text-right">
                        Hips (cm)
                      </Label>
                      <div className="col-span-3">
                        <Input id="hips" type="number" step="0.1" className="w-full" />
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save Measurements</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Measurement Trends</CardTitle>
              <CardDescription>Tracking body composition changes over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ClientMeasurementsChart data={client.measurements} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Measurement History</CardTitle>
              <CardDescription>Detailed measurement records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-medium">Date</th>
                      <th className="text-left py-2 font-medium">Weight (kg)</th>
                      <th className="text-left py-2 font-medium">Body Fat %</th>
                      <th className="text-left py-2 font-medium">Chest (cm)</th>
                      <th className="text-left py-2 font-medium">Waist (cm)</th>
                      <th className="text-left py-2 font-medium">Hips (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {client.measurements.map((measurement, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2">{format(new Date(measurement.date), "MMM d, yyyy")}</td>
                        <td className="py-2">{measurement.weight}</td>
                        <td className="py-2">{measurement.bodyFat}%</td>
                        <td className="py-2">{measurement.chest}</td>
                        <td className="py-2">{measurement.waist}</td>
                        <td className="py-2">{measurement.hips}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strength" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Strength Progress</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Progress
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Strength Progress</DialogTitle>
                  <DialogDescription>Record new strength metrics for {client.name}.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddProgress}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="progress-date" className="text-right">
                        Date
                      </Label>
                      <div className="col-span-3">
                        <Input
                          id="progress-date"
                          type="date"
                          defaultValue={format(new Date(), "yyyy-MM-dd")}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="exercise" className="text-right">
                        Exercise
                      </Label>
                      <div className="col-span-3">
                        <Input id="exercise" className="w-full" placeholder="e.g., Squat, Bench Press" />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="weight" className="text-right">
                        Weight (kg)
                      </Label>
                      <div className="col-span-3">
                        <Input id="weight" type="number" className="w-full" />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="reps" className="text-right">
                        Reps
                      </Label>
                      <div className="col-span-3">
                        <Input id="reps" type="number" className="w-full" />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="sets" className="text-right">
                        Sets
                      </Label>
                      <div className="col-span-3">
                        <Input id="sets" type="number" className="w-full" />
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save Progress</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Strength Progression</CardTitle>
              <CardDescription>Tracking strength gains over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ClientProgressChart data={client.progress} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Exercise History</CardTitle>
              <CardDescription>Detailed strength records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-medium">Date</th>
                      <th className="text-left py-2 font-medium">Exercise</th>
                      <th className="text-left py-2 font-medium">Weight (kg)</th>
                      <th className="text-left py-2 font-medium">Reps</th>
                    </tr>
                  </thead>
                  <tbody>
                    {client.progress.map((progress, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2">{format(new Date(progress.date), "MMM d, yyyy")}</td>
                        <td className="py-2">{progress.exercise}</td>
                        <td className="py-2">{progress.weight}</td>
                        <td className="py-2">{progress.reps}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="photos" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Progress Photos</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Photo
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Upload Progress Photo</DialogTitle>
                  <DialogDescription>Add a new progress photo for {client.name}.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddPhoto}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="photo-date" className="text-right">
                        Date
                      </Label>
                      <div className="col-span-3">
                        <Input
                          id="photo-date"
                          type="date"
                          defaultValue={format(new Date(), "yyyy-MM-dd")}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="photo-type" className="text-right">
                        Photo Type
                      </Label>
                      <div className="col-span-3">
                        <select
                          id="photo-type"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="front">Front View</option>
                          <option value="side">Side View</option>
                          <option value="back">Back View</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="photo" className="text-right">
                        Photo
                      </Label>
                      <div className="col-span-3">
                        <Input id="photo" type="file" accept="image/*" className="w-full" />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="notes" className="text-right">
                        Notes
                      </Label>
                      <div className="col-span-3">
                        <Input id="notes" className="w-full" placeholder="Any notes about this photo" />
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Upload Photo</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Progress Gallery</CardTitle>
              <CardDescription>Visual progress over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {client.photos.map((photo, index) => (
                  <div key={index} className="space-y-2">
                    <div className="relative aspect-[2/3] overflow-hidden rounded-md border">
                      <img
                        src={photo.url || "/placeholder.svg"}
                        alt={`Progress photo from ${format(new Date(photo.date), "MMM d, yyyy")}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{format(new Date(photo.date), "MMM d, yyyy")}</p>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
