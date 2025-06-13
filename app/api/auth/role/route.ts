import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getCurrentUser } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    // Get the current user (must be an admin to update roles)
    const currentUser = await getCurrentUser()
    if (!currentUser) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await request.json()
    const { userId, role } = body

    if (!userId || !role) {
      return new NextResponse("Missing required fields", { status: 400 })
    }

    // Update the user's role
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { role },
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    console.error("[ROLE_UPDATE]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
} 