import { cookies } from "next/headers"
import { verify } from "jsonwebtoken"
import { prisma } from "./prisma"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export async function getCurrentUser() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get("token")?.value

    if (!token) {
      return null
    }

    const decoded = verify(token, JWT_SECRET) as { userId: string }

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        bio: true,
        specialties: true,
        certifications: true,
        location: true,
      },
    })

    return user
  } catch (error) {
    return null
  }
}

export async function requireAuth() {
  const user = await getCurrentUser()

  if (!user) {
    throw new Error("Not authenticated")
  }

  return user
} 