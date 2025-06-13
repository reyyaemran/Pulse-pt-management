import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client = await prisma.client.findUnique({
      where: {
        id: params.id,
      },
      include: {
        appointments: {
          where: {
            startTime: {
              gte: new Date(),
            },
          },
          orderBy: {
            startTime: 'asc',
          },
          take: 2,
        },
      },
    })

    if (!client) {
      return new NextResponse("Client not found", { status: 404 })
    }

    // Get all past appointments (session history)
    const pastAppointments = await prisma.appointment.findMany({
      where: {
        clientId: client.id,
        startTime: {
          lt: new Date(),
        },
      },
      orderBy: {
        startTime: 'desc',
      },
    })

    // Get all packages added for the client
    const packages = await prisma.package.findMany({
      where: { clientId: client.id },
      orderBy: { createdAt: 'desc' },
    })

    // Combine session logs and package additions into a single history array
    const sessionHistory = [
      ...pastAppointments.map(apt => ({
        date: apt.startTime.toLocaleDateString(),
        time: `${apt.startTime.toLocaleTimeString()} - ${apt.endTime.toLocaleTimeString()}`,
        type: apt.type || "General",
        notes: apt.notes || "",
        createdAt: apt.startTime,
      })),
      ...packages.map(pkg => ({
        date: pkg.createdAt.toLocaleDateString(),
        time: pkg.createdAt.toLocaleTimeString(),
        type: `Package Added`,
        notes: `Sessions: ${pkg.sessions}, Type: ${pkg.type}, Payment: ${pkg.paymentStatus}`,
        createdAt: pkg.createdAt,
      })),
    ].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

    // Transform the data to match the frontend structure
    const transformedClient = {
      id: client.id,
      name: `${client.firstName} ${client.lastName}`,
      email: client.email,
      phone: client.phone || "",
      status: "active", // You might want to add this field to your schema
      joinDate: client.startDate?.toLocaleDateString() || "Unknown",
      lastSession: sessionHistory[0]?.date || "No sessions yet",
      avatar: null, // Show initials by default
      goals: client.goals || "",
      notes: client.notes || "",
      address: client.address || "",
      dateOfBirth: client.dateOfBirth?.toLocaleDateString() || "",
      medicalHistory: client.medicalHistory || "",
      injuries: client.injuries || "",
      sessionPackage: client.sessionPackage || "",
      sessionsRemaining: client.sessionsRemaining || 0,
      pastSessions: sessionHistory.map(({ createdAt, ...rest }) => rest),
    }

    return NextResponse.json(transformedClient)
  } catch (error) {
    console.error("[CLIENT_GET]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      dateOfBirth,
      medicalHistory,
      injuries,
      goals,
      notes,
      startDate,
      expirationDate,
      sessionPackage,
      sessionsRemaining,
    } = body

    const updatedClient = await prisma.client.update({
      where: { id: params.id },
      data: {
        firstName,
        lastName,
        email,
        phone,
        address,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
        medicalHistory,
        injuries,
        goals,
        notes,
        startDate: startDate ? new Date(startDate) : undefined,
        expirationDate: expirationDate ? new Date(expirationDate) : undefined,
        sessionPackage,
        sessionsRemaining,
      },
    })

    return NextResponse.json(updatedClient)
  } catch (error) {
    console.error("[CLIENT_PUT]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
} 