"use client"

import { useEffect } from "react"

interface ScrollToTopProps {
  offset?: number
}

export function ScrollToTop({ offset = 80 }: ScrollToTopProps) {
  useEffect(() => {
    // Scroll to top immediately when component mounts, accounting for fixed header
    const scrollToPosition = () => {
      window.scrollTo({
        top: offset,
        behavior: "instant", // Use instant for immediate positioning
      })
    }

    // Execute immediately
    scrollToPosition()

    // Also execute after a small delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(scrollToPosition, 100)

    return () => clearTimeout(timeoutId)
  }, [offset])

  return null
}
