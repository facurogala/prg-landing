"use client"

import Link from "next/link"

export function InternalLinksSection() {
  return (
    <section className="py-8 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <h4 className="text-[#DBFF00] font-semibold mb-2">Servicios</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>
                <Link href="#servicios" className="hover:text-[#DBFF00]">
                  Coaching Online
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-[#DBFF00]">
                  Planes Personalizados
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-[#DBFF00]">
                  Análisis de Video
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#DBFF00] font-semibold mb-2">Técnicas</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>
                <Link href="/blog/como-mejorar-sentadilla-powerlifting-guia-completa" className="hover:text-[#DBFF00]">
                  Técnica Sentadilla
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#DBFF00]">
                  Técnica Peso Muerto
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#DBFF00]">
                  Técnica Press Banca
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#DBFF00] font-semibold mb-2">Recursos</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>
                <Link href="/blog" className="hover:text-[#DBFF00]">
                  Blog Powerlifting
                </Link>
              </li>
              <li>
                <Link href="#videos" className="hover:text-[#DBFF00]">
                  Videos Técnicos
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#DBFF00]">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#DBFF00] font-semibold mb-2">Contacto</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>
                <Link href="#contacto" className="hover:text-[#DBFF00]">
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-[#DBFF00]">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-[#DBFF00]">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
