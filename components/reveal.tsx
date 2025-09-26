"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type Direction = "up" | "down" | "left" | "right" | "fade" | "scale"

export function Reveal({
  as,
  children,
  className,
  delay = 0,
  once = true,
  direction = "up",
  threshold = 0.15,
  margin = "0px 0px -10% 0px",
}: {
  as?: keyof JSX.IntrinsicElements
  children: React.ReactNode
  className?: string
  delay?: number
  once?: boolean
  direction?: Direction
  threshold?: number
  margin?: string
}) {
  const As = as ?? "div"
  const ref = useRef<HTMLElement | null>(null as any)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { root: null, rootMargin: margin, threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, margin, threshold])

  const baseHidden =
    direction === "up"
      ? "opacity-0 translate-y-4"
      : direction === "down"
      ? "opacity-0 -translate-y-4"
      : direction === "left"
      ? "opacity-0 -translate-x-4"
      : direction === "right"
      ? "opacity-0 translate-x-4"
      : direction === "scale"
      ? "opacity-0 scale-[0.98]"
      : "opacity-0"

  const baseShown = "opacity-100 translate-x-0 translate-y-0 scale-100"

  return (
    <As
      ref={ref as any}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        visible ? baseShown : baseHidden,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </As>
  )
}
