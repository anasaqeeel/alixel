"use client"

import { useEffect, useState } from "react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function PageTransition() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="text-center">
        <div className="mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 mx-auto animate-pulse-glow">
            <span className="text-white font-bold text-2xl">A</span>
          </div>
        </div>
        <LoadingSpinner size="lg" />
        <p className="text-muted-foreground mt-4 animate-pulse">Loading amazing experience...</p>
      </div>
    </div>
  )
}
