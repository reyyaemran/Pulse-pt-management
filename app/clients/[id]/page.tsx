"use client";

import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, ChevronLeft, Edit, MessageSquare, Phone, BarChartIcon as ChartBarIcon } from "lucide-react"
import Link from "next/link"
import { ClientPackages } from "@/components/client-packages"
import { ClientPrograms } from "@/components/client-programs"
import { useState, useEffect, use } from "react"
import React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

interface Session {
  date: string;
  time: string;
  type: string;
  notes?: string;
}

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  joinDate: string;
  lastSession: string;
  avatar: string;
  goals: string;
  notes: string;
  address: string;
  dateOfBirth: string;
  medicalHistory: string;
  injuries: string;
  sessionPackage: string;
  sessionsRemaining: number;
  upcomingSessions: Session[];
  pastSessions: Session[];
}

export default function ClientDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params)
  const [client, setClient] = useState<Client | null>(null)
  const [packages, setPackages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editForm, setEditForm] = useState({
    firstName: client?.name?.split(" ")[0] || "",
    lastName: client?.name?.split(" ")[1] || "",
    email: client?.email || "",
    phone: client?.phone || "",
    address: client?.address || "",
    medicalHistory: client?.medicalHistory || "",
    injuries: client?.injuries || "",
    goals: client?.goals || "",
    notes: client?.notes || "",
  })
  const { toast } = useToast()

  const fetchClientData = async () => {
    try {
      const res = await fetch(`/api/clients/${id}`)
      if (!res.ok) throw new Error("Failed to fetch client data")
      const data = await res.json()
      setClient(data)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const fetchPackages = async () => {
    try {
      const res = await fetch(`/api/clients/${id}/packages`)
      if (!res.ok) throw new Error("Failed to fetch packages")
      const data = await res.json()
      setPackages(data)
    } catch (err) {
      console.error("Failed to fetch packages:", err)
    }
  }

  useEffect(() => {
    fetchClientData()
    fetchPackages()
  }, [id])

  useEffect(() => {
    if (client) {
      setEditForm({
        firstName: client.name?.split(" ")[0] || "",
        lastName: client.name?.split(" ")[1] || "",
        email: client.email || "",
        phone: client.phone || "",
        address: client.address || "",
        medicalHistory: client.medicalHistory || "",
        injuries: client.injuries || "",
        goals: client.goals || "",
        notes: client.notes || "",
      })
    }
  }, [client])

  const handlePackageAdded = async () => {
    // Reload both client data and packages
    await Promise.all([
      fetchClientData(),
      fetchPackages()
    ])
  }

  const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch(`/api/clients/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      })
      if (!res.ok) throw new Error("Failed to update client")
      toast({ title: "Client updated", description: "Client information updated successfully." })
      setIsEditDialogOpen(false)
      fetchClientData()
    } catch (err) {
      toast({ title: "Error", description: (err as Error).message, variant: "destructive" })
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!client) return <div>Client not found</div>

  return (
    <DashboardShell>
      <div className="flex items-center space-x-2 mb-6">
        <Link href="/clients">
          <Button variant="outline" size="sm">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Clients
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
        <Card>
          <CardHeader>
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={client.avatar || undefined} alt={client.name} />
                <AvatarFallback className="font-bold text-4xl flex items-center justify-center w-full h-full">
                  {client.name ? client.name.split(" ").map(n => n[0]).join("").toUpperCase() : "U"}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-center">
                <h2 className="text-2xl font-bold">{client.name}</h2>
                <Badge variant={client.status === "active" ? "default" : "outline"}>
                  {client.status === "active" ? "Active" : "Inactive"}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{client.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{client.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Client since {client.joinDate}</span>
              </div>
              <div className="pt-2">
                <div>
                  <h3 className="text-lg font-medium">Goals</h3>
                  <p className="text-sm text-muted-foreground">{client.goals}</p>
                </div>
                <div className="mt-2">
                  <h3 className="text-lg font-medium">Notes</h3>
                  <p className="text-sm text-muted-foreground">{client.notes}</p>
                </div>
              </div>
              <div className="pt-4">
                <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Edit Client Information</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleEditSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" name="firstName" value={editForm.firstName} onChange={handleEditFormChange} required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" name="lastName" value={editForm.lastName} onChange={handleEditFormChange} required className="mt-1" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" name="email" value={editForm.email} onChange={handleEditFormChange} required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" name="phone" value={editForm.phone} onChange={handleEditFormChange} required className="mt-1" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" name="address" value={editForm.address} onChange={handleEditFormChange} className="mt-1" />
                      </div>
                      <div className="pt-2 pb-1 font-semibold text-sm text-muted-foreground">Health & Goals</div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="medicalHistory">Medical History</Label>
                          <Textarea id="medicalHistory" name="medicalHistory" value={editForm.medicalHistory} onChange={handleEditFormChange} className="mt-1 min-h-[48px]" />
                        </div>
                        <div>
                          <Label htmlFor="injuries">Injuries</Label>
                          <Textarea id="injuries" name="injuries" value={editForm.injuries} onChange={handleEditFormChange} className="mt-1 min-h-[48px]" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="goals">Goals</Label>
                          <Textarea id="goals" name="goals" value={editForm.goals} onChange={handleEditFormChange} className="mt-1 min-h-[48px]" />
                        </div>
                        <div>
                          <Label htmlFor="notes">Notes</Label>
                          <Textarea id="notes" name="notes" value={editForm.notes} onChange={handleEditFormChange} className="mt-1 min-h-[48px]" />
                        </div>
                      </div>
                      <DialogFooter className="pt-2">
                        <Button type="submit" className="w-full">Save Changes</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="pt-2">
                <Link href={`/clients/${client.id}/progress`}>
                  <Button className="w-full" variant="outline">
                    <ChartBarIcon className="mr-2 h-4 w-4" />
                    View Progress
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Tabs defaultValue="past" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="past" className="font-medium">
                Past Sessions
              </TabsTrigger>
              <TabsTrigger value="programs" className="font-medium">
                Programs
              </TabsTrigger>
            </TabsList>
            <TabsContent value="past" className="space-y-4">
              <div className="h-[420px] overflow-y-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Past Sessions</CardTitle>
                    <CardDescription>All session history for {client.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {client.pastSessions.length > 0 ? (
                      <div className="space-y-4">
                        {client.pastSessions.map((session, index) => (
                          <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="font-medium">{session.type}</p>
                                <p className="text-sm text-muted-foreground">{session.date}</p>
                                <p className="text-sm">{session.time}</p>
                              </div>
                            </div>
                            {session.notes && (
                              <p className="text-sm text-muted-foreground mt-2">Notes: {session.notes}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No past sessions recorded.</p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="programs" className="space-y-4">
              <div className="h-[420px] overflow-y-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Training Programs</CardTitle>
                    <CardDescription>Programs assigned to {client.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ClientPrograms clientId={client.id} clientName={client.name} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="mt-6">
        <ClientPackages
          clientId={client.id}
          clientName={client.name}
          packages={packages}
          onPackageAdded={handlePackageAdded}
        />
      </div>
    </DashboardShell>
  )
}
