"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cómo funciona el coaching online de powerlifting?",
    answer:
      "El coaching online de PRG incluye planes de entrenamiento personalizados enviados semanalmente, análisis de videos de tus levantamientos, feedback constante por WhatsApp y ajustes según tu progreso. Todo desde la comodidad de tu gimnasio en Argentina.",
    keywords: ["coaching online powerlifting", "entrenamiento personalizado", "powerlifting Argentina"],
  },
  {
    question: "¿Qué incluye el plan de entrenamiento de powerlifting?",
    answer:
      "Cada plan incluye rutinas específicas para sentadilla, peso muerto y press de banca, periodización personalizada, ejercicios accesorios, recomendaciones de intensidad y volumen, plus asesoramiento nutricional básico para powerlifters.",
    keywords: ["plan entrenamiento powerlifting", "rutina powerlifting", "sentadilla peso muerto banca"],
  },
  {
    question: "¿Cuánto cuesta el coaching de powerlifting en Argentina?",
    answer:
      "Ofrecemos planes mensuales desde $35.000 ARS, trimestrales con descuento, y paquetes anuales. Incluye seguimiento completo, análisis de video y comunicación directa. Consulta por promociones especiales para estudiantes.",
    keywords: [
      "precio coaching powerlifting",
      "costo entrenador powerlifting",
      "coaching powerlifting Argentina precio",
    ],
  },
  {
    question: "¿Necesito experiencia previa en powerlifting?",
    answer:
      "No es necesario. Trabajo con atletas desde principiantes hasta competidores avanzados. Adapto los programas según tu nivel, experiencia y objetivos específicos en powerlifting.",
    keywords: ["powerlifting principiantes", "coaching powerlifting novatos", "entrenamiento powerlifting básico"],
  },
  {
    question: "¿Cómo mejoro mi técnica en sentadilla, peso muerto y banca?",
    answer:
      "A través de análisis detallado de videos, correcciones específicas, ejercicios correctivos personalizados y feedback constante. Mi experiencia como campeón nacional me permite identificar y corregir errores técnicos eficientemente.",
    keywords: ["técnica powerlifting", "mejorar sentadilla", "técnica peso muerto", "técnica press banca"],
  },
  {
    question: "¿Preparas para competencias de powerlifting en Argentina?",
    answer:
      "Sí, tengo experiencia preparando atletas para competencias nacionales, metropolitanas y sudamericanas. Incluye periodización específica, estrategia de competencia, manejo de nervios y selección de intentos.",
    keywords: ["preparación competencia powerlifting", "competencia powerlifting Argentina", "entrenador competencia"],
  },
  {
    question: "¿Qué diferencia a PRG Coaching de otros entrenadores?",
    answer:
      "Soy campeón nacional 2021, he entrenado múltiples campeones y récords nacionales, estudio educación física y kinesiología, y ofrezco seguimiento personalizado 24/7. Mi enfoque combina experiencia práctica con conocimiento científico.",
    keywords: ["mejor coach powerlifting Argentina", "entrenador campeón powerlifting", "PRG coaching diferencias"],
  },
  {
    question: "¿Incluye plan nutricional para powerlifters?",
    answer:
      "Sí, incluyo asesoramiento nutricional básico enfocado en rendimiento y fuerza. Para planes más detallados, trabajo en conjunto con nutricionistas especializados en deportes de fuerza.",
    keywords: ["nutrición powerlifting", "dieta powerlifter", "alimentación fuerza", "nutrición deportiva"],
  },
]

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#DBFF00] mb-6">Preguntas Frecuentes</h2>
          <p className="text-xl text-gray-300">
            Resuelve tus dudas sobre el coaching online de powerlifting en Argentina
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-black/50 border border-white/10 rounded-lg px-6 hover:border-[#DBFF00]/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-white hover:text-[#DBFF00] transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-6">¿Tienes más preguntas sobre el coaching de powerlifting?</p>
          <a
            href="https://wa.me/5491139324671?text=Hola%20PRG%2C%20tengo%20preguntas%20sobre%20el%20coaching%20de%20powerlifting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#DBFF00] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#DBFF00]/90 transition-colors"
          >
            Contactar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
