"use client"

import { useState, useEffect } from "react"

interface YouTubeEmbedProps {
  videoId: string
  title?: string
}

export function YouTubeEmbed({ videoId, title = "YouTube video player" }: YouTubeEmbedProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="aspect-[9/16] w-full max-w-md mx-auto bg-black/50 flex items-center justify-center">
        <p className="text-gray-400">Cargando video...</p>
      </div>
    )
  }

  return (
    <div className="aspect-[9/16] w-full max-w-md mx-auto">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  )
}
