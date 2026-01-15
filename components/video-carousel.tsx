"use client"

import React, { useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const videos = [
  {
    id: "OWZ8-2yBAw8",
    title: "Descargo Gyms Mal Diseñados y Mi Pasado en CrossFit",
  },
  {
    id: "g43NL5TUYAg",
    title: "One Man vs Sunday Night - 230 Raw - 160 Bench",
  },
  {
    id: "mgNcAy5UBOc",
    title: "Video de Entrenamiento PRG",
  },
  {
    id: "JQlti6uOxZg",
    title: "Contenido de Powerlifting PRG",
  },
  {
    id: "SstiLyPvj3E",
    title: "Peso Muerto y Banco, Sin Glamour",
  },
  {
    id: "99FCtA-kFz8",
    title: "El tapering se pierde post compe ??",
  },
  {
    id: "qbq0xHOrqhY",
    title: "SQUATING YOUR MOM",
  },
  {
    id: "Zde7WQ297h8",
    title: "Julio - Fin de bloque con mas 66kg",
  },
  {
    id: "mcJBnFg8Qok",
    title: "Bench Session - 1RM Daily Study Clips",
  },
  {
    id: "R4S761hrLZY",
    title: "Press Banca - Técnica y Puntos Clave",
  },
  {
    id: "00djplFZejc",
    title: "Entrenamiento - Serie de Banca",
  },
  {
    id: "j5yzLPbr79k",
    title: "Spotting y Seguridad en Press Banca",
  },
]

export function VideoCarousel() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }))

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 640px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 3 },
      },
    },
    [autoplay.current],
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
