import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const currentUser = await getCurrentUser()
    if (!currentUser) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await request.json()
    const { type, sessions, sessionsUsed, startDate, expirationDate, paymentStatus, amount } = body

    // Verify the client exists and belongs to the current user
    const client = await prisma.client.findFirst({
      where: {
        id: params.id,
        userId: currentUser.id,
      },
    })

    if (!client) {
      return new NextResponse("Client not found", { status: 404 })
    }

    // Defensive: ensure sessionsUsed is a number and amount is null if not a number
    const safeSessionsUsed = typeof sessionsUsed === 'number' && !isNaN(sessionsUsed) ? sessionsUsed : 0
    const safeAmount = typeof amount === 'number' && !isNaN(amount) ? amount : null

    // Generate a unique 6-digit packageNumber
    let packageNumber: string
    while (true) {
      const randomNum = Math.floor(Math.random() * 1000000)
      packageNumber = randomNum.toString().padStart(6, '0')
      const existing = await prisma.package.findFirst({ where: { packageNumber } })
      if (!existing) break
    }

    // Create the package
    const newPackage = await prisma.package.create({
      data: {
        packageNumber,
        type,
        sessions,
        sessionsUsed: safeSessionsUsed,
        startDate: new Date(startDate),
        expirationDate: new Date(expirationDate),
        paymentStatus,
        amount: safeAmount,
        clientId: params.id,
      },
    })

    // Update client's session package info
    await prisma.client.update({
      where: { id: params.id },
      data: {
        sessionPackage: type,
        sessionsRemaining: sessions - sessionsUsed,
        startDate: new Date(startDate),
        expirationDate: new Date(expirationDate),
      },
    })

    return NextResponse.json(newPackage)
  } catch (error) {
    // Improved error logging
    console.error("[PACKAGE_POST]", error)
    if (error instanceof Error) {
      console.error(error.stack)
    }
    // Prisma error details
    if (error && typeof error === 'object' && 'code' in error) {
      console.error('Prisma error code:', (error as any).code)
      console.error('Prisma error meta:', (error as any).meta)
    }
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const currentUser = await getCurrentUser()
    if (!currentUser) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    // Verify the client exists and belongs to the current user
    const client = await prisma.client.findFirst({
      where: {
        id: params.id,
        userId: currentUser.id,
      },
    })

    if (!client) {
      return new NextResponse("Client not found", { status: 404 })
    }

    // Get all packages for the client
    const packages = await prisma.package.findMany({
      where: {
        clientId: params.id,
      },
      orderBy: {
        startDate: "desc",
      },
    })

    return NextResponse.json(packages)
  } catch (error) {
    console.error("[PACKAGE_GET]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const currentUser = await getCurrentUser()
    if (!currentUser) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await request.json()
    const { packageId, sessions, sessionsUsed, startDate, expirationDate, paymentStatus, amount } = body

    // Verify the client exists and belongs to the current user
    const client = await prisma.client.findFirst({
      where: {
        id: params.id,
        userId: currentUser.id,
      },
    })
    if (!client) {
      return new NextResponse("Client not found", { status: 404 })
    }

    // Update the package
    const updatedPackage = await prisma.package.update({
      where: { id: packageId },
      data: {
        sessions,
        sessionsUsed,
        startDate: startDate ? new Date(startDate) : undefined,
        expirationDate: expirationDate ? new Date(expirationDate) : undefined,
        paymentStatus,
        amount,
      },
    })

    return NextResponse.json(updatedPackage)
  } catch (error) {
    console.error("[PACKAGE_PUT]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
} 