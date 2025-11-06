"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Juan Yanik",
    location: "Buenos Aires, Argentina",
    achievement: "Superó estancamiento de años",
    rating: 5,
    text: "Empecé con PRG después de ya estar entrenando hace años. Venía estancado hace mucho tiempo, con varios dolores, agotamiento mental y miedo a tirar pesado. Con Facu pude empezar a romper mis récords, corregir varias cosas, y volver a estar enfocado. Destaco el seguimiento constante y flexibilidad a la hora de armar y adaptar todo.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z6mymZTDRDSdgpmpOUeHyxlhwvZw3C.png",
    beforeAfter: "605kg → 625kg total",
  },
  {
    id: 2,
    name: "Brian Marco Borgia",
    location: "Argentina",
    achievement: "Transformación Total",
    rating: 5,
    text: "Antes de PRG amaba mi vida. Hoy la odio.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Gz2Ur3xgrQ9Pr28yxmoChYvVJ40nFJ.png",
    beforeAfter: "500kg → 665kg total",
  },
  {
    id: 3,
    name: "Nahuel Terzano",
    location: "Buenos Aires, Argentina",
    achievement: "Progreso Acelerado",
    rating: 5,
    text: "Sin él no hubiese llegado a donde estoy ahora o hubiese tardado mucho más.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0EOB6xvXdmQn2xCDKHPp5gaRdM0M9a.png",
    beforeAfter: "571kg → 680kg total",
  },
  {
    id: 4,
    name: "Carolina Campo",
    location: "Argentina",
    achievement: "Especialista en Peso Muerto",
    rating: 5,
    text: "No soy puto, solo hago sumo.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aScubHr8sdifJtUEFeUybLKgsPuNPg.png",
    beforeAfter: "185kg → 317.5kg peso muerto",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#DBFF00] mb-6">Testimonios de Atletas</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conoce las experiencias de powerlifters que han alcanzado sus objetivos con PRG Coaching en Argentina
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-black/50 rounded-lg p-8 border border-white/10 hover:border-[#DBFF00]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`${testimonial.name} - Cliente de PRG Coaching`}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.location}</p>
                  <p className="text-[#DBFF00] font-semibold">{testimonial.achievement}</p>
                </div>
                <Quote className="w-8 h-8 text-[#DBFF00]/30" />
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#DBFF00] fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-300 mb-4 italic">"{testimonial.text}"</blockquote>

              <div className="bg-black/50 rounded-lg p-4 border border-[#DBFF00]/20">
                <p className="text-sm text-[#DBFF00] font-semibold">Progreso:</p>
                <p className="text-white">{testimonial.beforeAfter}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-black/50 rounded-lg p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#DBFF00] mb-4">¿Quieres ser el próximo testimonio de éxito?</h3>
            <p className="text-gray-300 mb-6">
              Únete a los atletas que han transformado su powerlifting con PRG Coaching
            </p>
            <a
              href="https://docs.google.com/forms/d/1uCIyOEzSIqDyh0EsNSx85PEEZuSafF9PvApNuG0jgR8/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#DBFF00] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#DBFF00]/90 transition-colors"
            >
              Comenzar mi Transformación
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
