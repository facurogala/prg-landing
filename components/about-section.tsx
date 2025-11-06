"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  return (
    <div className="relative bg-[#0A0A0A]">
      {/* Sección Sobre mí */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Imagen a la izquierda */}
            <motion.div
              className="relative w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[600px] mb-4 lg:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/design-mode/prg%20out.png"
                alt="PRG Coaching - Powerlifting training"
                fill
                className="object-cover object-center rounded-lg"
                sizes="(max-width: 1023px) 100vw, 50vw"
                priority
              />
            </motion.div>
            {/* Contenido a la derecha */}
            <motion.div
              className="w-full lg:w-1/2 lg:pl-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#DBFF00] mb-6">SOBRE MI</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-base">
                  Soy powerlifter, coach y estudiante avanzado de educación física y kinesiología. Mi pasión por el
                  deporte y el rendimiento humano me ha llevado a dedicar mi vida al powerlifting.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">LOGROS PERSONALES</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#DBFF00] rounded-full mr-2"></span>
                      Campeón Nacional 2021
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#DBFF00] rounded-full mr-2"></span>
                      Objetivos actuales: 700kg de total
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#DBFF00] rounded-full mr-2"></span>
                      Metas: 180kg de banco y 300kg de despegue
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">LOGROS COMO COACH</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#DBFF00] rounded-full mr-2"></span>
                      Campeón Sudamericano equipado
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#DBFF00] rounded-full mr-2"></span>
                      Múltiples campeones nacionales y metropolitanos classic
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#DBFF00] rounded-full mr-2"></span>
                      Varios récords nacionales y metropolitanos classic
                    </li>
                  </ul>
                </div>
                <p className="text-base">
                  Cada tanto jugando CS y ocasionalmente hago streams, conectando con la comunidad del powerlifting y
                  más allá.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
