import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  const user = await getCurrentUser()
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
  }

  const data = await request.json()
  console.log("Request data:", data)
  const { name, email, phone, bio, specialties, certifications, location, avatar } = data

  // Only include fields that are provided
  const updateData: any = {}
  if (name !== undefined) updateData.name = name
  if (email !== undefined) updateData.email = email
  if (phone !== undefined) updateData.phone = phone
  if (bio !== undefined) updateData.bio = bio
  if (specialties !== undefined) updateData.specialties = specialties
  if (certifications !== undefined) updateData.certifications = certifications
  if (location !== undefined) updateData.location = location
  if (avatar !== undefined) updateData.avatar = avatar

  console.log("Update data:", updateData)

  try {
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: updateData,
    })
    return NextResponse.json(updatedUser)
  } catch (error) {
    console.error("Failed to update profile:", error)
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 })
  }
} 