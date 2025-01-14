'use client'

import { Dumbbell, MessageCircle, Calendar, Video } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    title: "Entrenamientos Personalizados",
    description: "Planificaciones semanales adaptadas a objetivos.",
    icon: Dumbbell,
    details: [
      "Programas de entrenamiento personalizados",
      "Ajustes semanales basados en tu progreso",
      "Enfoque en tus metas individuales de powerlifting"
    ]
  },
  {
    title: "Feedback Detallado",
    description: "Análisis técnico y correcciones por WhatsApp y revisiones de video.",
    icon: MessageCircle,
    details: [
      "Análisis técnico de tus levantamientos",
      "Correcciones detalladas vía WhatsApp",
      "Revisiones de video para mejorar tu forma",
      "Comunicación constante para resolver dudas y ajustar tu entrenamiento"
    ]
  },
  {
    title: "Revisiones de Video",
    description: "Análisis detallado de tu técnica mediante videos.",
    icon: Video,
    details: [
      "Revisiones exhaustivas de tus videos de entrenamiento",
      "Feedback visual con anotaciones y comentarios",
      "Análisis profundo de tu técnica y forma",
      "Recomendaciones específicas para mejorar tu rendimiento"
    ]
  },
  {
    title: "Opciones de Suscripción",
    description: "Plan mensual, trimestral, etc.",
    icon: Calendar,
    details: [
      "Plan mensual para flexibilidad",
      "Plan trimestral para un compromiso a medio plazo",
      "Descuentos disponibles en planes de mayor duración"
    ]
  }
]

export function ServicesSection() {
  return (
    <section className="relative py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-[#DBFF00]">
            Servicios Ofrecidos
          </h2>
          <div className="h-1 w-20 bg-[#DBFF00] mx-auto opacity-50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-6 bg-black/80 rounded-xl border border-white/5 hover:border-[#DBFF00]/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent rounded-xl" />
                
                <div className="relative">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-black border border-white/10 group-hover:border-[#DBFF00]/30 transition-colors">
                      <service.icon 
                        size={24} 
                        className="text-[#DBFF00] opacity-80 group-hover:opacity-100 transition-opacity" 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#DBFF00] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.details.map((detail, detailIndex) => (
                          <li 
                            key={detailIndex}
                            className="flex items-start space-x-2 text-sm text-gray-500"
                          >
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-[#DBFF00]/50 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

