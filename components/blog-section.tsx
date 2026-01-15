"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"
import React, { useRef } from "react"

const blogPosts = [
  {
    id: 1,
    title: "Sentadilla: Starter pack 2025",
    excerpt: "Abordaje correcto de la tecnica de sentadilla.",
    image: "/images/squat-technique-2025.png",
    date: "2025-06-07",
    author: "PRG Coaching",
    category: "Técnica",
    slug: "como-mejorar-sentadilla-powerlifting-guia-completa",
    keywords: ["sentadilla powerlifting", "técnica sentadilla", "mejorar sentadilla", "powerlifting Argentina"],
  },
  {
    id: 2,
    title: "¿Entrenar el 1RM Todos los Días? La Brutal Verdad",
    excerpt: "Analizamos el estudio de Cox et al. (2025): +29% de fuerza en 34 días entrenando 1RM diario, pero a qué costo.",
    image: "/images/blog/entrenar-1rm-todos-los-dias-34-dias/1rm-daily-2.png",
    date: "2025-02-15",
    author: "PRG Coaching",
    category: "Investigación",
    slug: "entrenar-1rm-todos-los-dias-34-dias",
    keywords: ["1RM diario", "press banca", "Cox 2025", "frecuencia"],
  },
]

export function BlogSection() {
  const autoplay = useRef(Autoplay({ delay: 4500, stopOnInteraction: false }))
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false }, [autoplay.current])

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-16 md:py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#DBFF00] mb-3">Blog</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estrategias de competencia, periodización, nutrición, variantes, evidencia, Etc.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 justify-center">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_33.333%] min-w-0"
                >
                  <motion.article
                    className="bg-black/50 rounded-lg overflow-hidden border border-white/10 hover:border-[#DBFF00]/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative h-48">
                      <Image src={post.image || "/placeholder.svg?height=192&width=384"} alt={post.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#DBFF00] text-black px-3 py-1 rounded-full text-sm font-semibold">{post.category}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-400 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" })}</time>
                        <User className="w-4 h-4 ml-4 mr-2" />
                        <span>{post.author}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>

                      <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-[#DBFF00] hover:text-[#DBFF00]/80 transition-colors">
                        Leer más
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.article>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={scrollPrev}
            className="absolute left-2 md:-left-8 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 shadow-lg z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={scrollNext}
            className="absolute right-2 md:-right-8 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 shadow-lg z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <motion.div className="text-center mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
          <Link href="/blog" className="inline-flex items-center bg-[#DBFF00] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#DBFF00]/90 transition-colors">
            Ver todos los artículos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
