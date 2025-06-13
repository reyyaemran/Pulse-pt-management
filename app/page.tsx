"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/login")
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold">PT Pro</h1>
        <p className="mt-2">Redirecting to login...</p>
      </div>
    </div>
  )
}
