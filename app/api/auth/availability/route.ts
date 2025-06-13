import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const user = await getCurrentUser()
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
  }
  const userWithHours = await prisma.user.findUnique({
    where: { id: user.id },
    select: { workingHours: true },
  })
  return NextResponse.json({ workingHours: userWithHours?.workingHours })
}

export async function POST(request: Request) {
  const user = await getCurrentUser()
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
  }
  const { workingHours } = await request.json()
  try {
    // Find the workingHours record for this user
    const existing = await prisma.workingHours.findUnique({ where: { userId: user.id } })
    if (!existing) {
      return NextResponse.json({ error: "Working hours not found" }, { status: 404 })
    }
    const updated = await prisma.workingHours.update({
      where: { id: existing.id },
      data: {
        monday: JSON.stringify(workingHours.monday),
        tuesday: JSON.stringify(workingHours.tuesday),
        wednesday: JSON.stringify(workingHours.wednesday),
        thursday: JSON.stringify(workingHours.thursday),
        friday: JSON.stringify(workingHours.friday),
        saturday: JSON.stringify(workingHours.saturday),
        sunday: JSON.stringify(workingHours.sunday),
      },
    })
    return NextResponse.json({ workingHours: updated })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update availability" }, { status: 500 })
  }
} 