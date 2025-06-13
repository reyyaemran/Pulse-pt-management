"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Separator } from "@/components/ui/separator"
import { Camera, Loader2 } from "lucide-react"

const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  bio: z.string().max(500, {
    message: "Bio must not exceed 500 characters.",
  }),
  specialties: z.string().max(200, {
    message: "Specialties must not exceed 200 characters.",
  }),
  certifications: z.string().max(200, {
    message: "Certifications must not exceed 200 characters.",
  }),
  location: z.string().max(200, {
    message: "Location must not exceed 200 characters.",
  }),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export default function ProfilePage() {
  const { toast } = useToast()
  const [avatar, setAvatar] = useState<string>("")
  const [isUploading, setIsUploading] = useState(false)
  const [loading, setLoading] = useState(true)

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      bio: "",
      specialties: "",
      certifications: "",
      location: "",
    },
    mode: "onChange",
  })

  useEffect(() => {
    async function fetchUser() {
      setLoading(true)
      try {
        const res = await fetch("/api/auth/me")
        if (res.ok) {
          const data = await res.json()
          form.reset({
            name: data.name || "",
            email: data.email || "",
            phone: data.phone || "",
            bio: data.bio || "",
            specialties: data.specialties || "",
            certifications: data.certifications || "",
            location: data.location || "",
          })
        }
      } catch (error) {
        console.error("Failed to fetch user profile:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function onSubmit(data: ProfileFormValues) {
    try {
      const res = await fetch("/api/auth/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, avatar }),
      })
      if (!res.ok) {
        throw new Error("Failed to update profile")
      }
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setIsUploading(true)
      // Simulate upload delay
      setTimeout(() => {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (e.target?.result) {
            setAvatar(e.target.result as string)
          }
        }
        reader.readAsDataURL(file)
        setIsUploading(false)
      }, 1500)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
      </div>
      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Profile Picture</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <div className="relative">
            <label htmlFor="avatar-upload" className="cursor-pointer group">
              <Avatar className="h-32 w-32 border-2 border-border">
                <AvatarImage src={avatar || undefined} alt="Profile picture" />
                <AvatarFallback className="font-bold text-4xl flex items-center justify-center w-full h-full">
                  {form.getValues("name") ? form.getValues("name").split(" ").map(n => n[0]).join("").toUpperCase() : "U"}
                </AvatarFallback>
              </Avatar>
              {avatar && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 mt-2 z-10"
                  onClick={() => setAvatar("")}
                  disabled={isUploading}
                >
                  Remove
                </Button>
              )}
              {isUploading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
                  <Loader2 className="h-8 w-8 text-white animate-spin" />
                </div>
              )}
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
                disabled={isUploading}
              />
            </label>
          </div>
        </CardContent>
      </Card>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us a little bit about yourself" className="resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Your location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Professional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="specialties"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specialties</FormLabel>
                    <FormControl>
                      <Input placeholder="Your specialties" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="certifications"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Certifications</FormLabel>
                    <FormControl>
                      <Input placeholder="Your certifications" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Button type="submit">Update Profile</Button>
        </form>
      </Form>
    </div>
  )
}
