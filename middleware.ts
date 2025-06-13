import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verify } from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

// Add paths that should be protected (require authentication)
const protectedPaths = [
  "/dashboard",
  "/clients",
  "/calendar",
  "/exercises",
  "/settings",
]

// Add paths that should be accessible only to non-authenticated users
const authPaths = ["/login", "/register"]

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value
  const { pathname } = request.nextUrl

  // Check if the path is protected
  const isProtectedPath = protectedPaths.some((path) => pathname.startsWith(path))
  const isAuthPath = authPaths.some((path) => pathname === path)

  // If the path is protected and there's no token, redirect to login
  if (isProtectedPath && !token) {
    const url = new URL("/login", request.url)
    url.searchParams.set("from", pathname)
    return NextResponse.redirect(url)
  }

  // If the path is an auth path and there's a token, redirect to dashboard
  if (isAuthPath && token) {
    try {
      // Verify the token
      verify(token, JWT_SECRET)
      return NextResponse.redirect(new URL("/dashboard", request.url))
    } catch (error) {
      // If token is invalid, remove it and continue
      const response = NextResponse.next()
      response.cookies.delete("token")
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [...protectedPaths, ...authPaths],
} 