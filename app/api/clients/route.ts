import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function GET() {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const clients = await prisma.client.findMany({
      where: {
        userId: currentUser.id
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(clients);
  } catch (error) {
    console.error("[CLIENTS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    // Get the current logged-in user
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const {
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
      startDate,
      expirationDate,
      sessionPackage,
      sessionsRemaining,
    } = body;

    // Find the highest clientNumber and increment
    const lastClient = await prisma.client.findFirst({
      where: {
        userId: currentUser.id
      },
      orderBy: { clientNumber: "desc" },
      select: { clientNumber: true },
    });
    let nextNumber = 1;
    if (lastClient && lastClient.clientNumber) {
      nextNumber = parseInt(lastClient.clientNumber, 10) + 1;
    }
    const clientNumber = nextNumber.toString().padStart(6, "0");

    const client = await prisma.client.create({
      data: {
        clientNumber,
        firstName,
        lastName,
        email,
        phone,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
        address,
        medicalHistory,
        injuries,
        goals,
        notes,
        startDate: startDate ? new Date(startDate) : undefined,
        expirationDate: expirationDate ? new Date(expirationDate) : undefined,
        sessionPackage,
        sessionsRemaining,
        userId: currentUser.id // Use the current user's ID
      },
    });
    return NextResponse.json(client, { status: 201 });
  } catch (error) {
    console.error("[CLIENTS_POST]", error);
    if (error instanceof Error) {
      console.error(error.stack);
      return new NextResponse(error.stack || error.message, { status: 500 });
    }
    return new NextResponse("Internal error", { status: 500 });
  }
} 