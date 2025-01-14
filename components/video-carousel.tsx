'use client'

import React, { useRef, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const videos = [
  {
    id: "SstiLyPvj3E",
    title: "Peso Muerto y Banco, Sin Glamour"
  },
  {
    id: "99FCtA-kFz8",
    title: "El tapering se pierde post compe ??"
  },
  {
    id: "IN3zLUQN49E",
    title: "Video 3"
  },
  {
    id: "4DKV3JaVNpk",
    title: "Video 4"
  },
  {
    id: "qbq0xHOrqhY",
    title: "SQUATING YOUR MOM"
  },
  {
    id: "Zde7WQ297h8",
    title: "Julio - Fin de bloque con mas 66kg"
  },
  {
    id: "b1G99elvYAk",
    title: "Video 7"
  },
  {
    id: "2HDsbK3PeD8",
    title: "Video 8"
  },
  {
    id: "A3_nggpSymE",
    title: "Video 9"
  },
  {
    id: "-igXOwXrITo",
    title: "Video 10"
  }
]

export function VideoCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 640px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 }
      }
    }, 
    [autoplay.current]
  )

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 pt-8 pb-16 relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {videos.map((video) => (
            <div key={video.id} className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg aspect-video"
              />
            </div>
          ))}
        </div>
      </div>
      <Button 
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full p-2 z-10"
        aria-label="Previous video"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button 
        onClick={scrollNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full p-2 z-10"
        aria-label="Next video"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  )
}

