"use client"

import { SpeedInsights } from "@vercel/speed-insights/next"
import { useEffect, useState } from "react"

export function SpeedInsightsWrapper() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <SpeedInsights />
}
