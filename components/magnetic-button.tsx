"use client"

import { useRef, type MouseEvent, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  onClick?: () => void
}

export function MagneticButton({
  children,
  className,
  variant = "default",
  size = "md",
  onClick,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    buttonRef.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`
  }

  const handleMouseLeave = () => {
    if (!buttonRef.current) return
    buttonRef.current.style.transform = "translate(0px, 0px)"
  }

  return (
    <Button
      ref={buttonRef}
      variant={variant}
      size={size}
      className={cn("btn-magnetic interactive-scale", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
