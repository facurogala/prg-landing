"use client"

import { useReportWebVitals } from "next/web-vitals"

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Send to Vercel Analytics
    if (typeof window !== "undefined" && window.va) {
      window.va("track", metric.name, {
        value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
        label: metric.id,
      })
    }

    // Send to Vercel Speed Insights (automatically handled by SpeedInsights component)
    // The SpeedInsights component will automatically collect these metrics

    // Also log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("Web Vital:", metric)
      console.log(`${metric.name}: ${metric.value}`)
    }
  })

  return null
}
