"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { VideoCarousel } from "@/components/video-carousel"
import { MobileMenu } from "@/components/mobile-menu"
import { GlowButton } from "@/components/GlowButton"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/Footer"
import { TShirtStore } from "@/components/TShirtStore"
import { ServicesSection } from "@/components/ServicesSection"
import { Navigation } from "@/components/Navigation"
import { SEOContent } from "@/components/seo-content"
import { LocalSEOContent } from "@/components/local-seo-content"
import { BlogSection } from "@/components/blog-section"
import { FAQSection } from "@/components/faq-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { InternalLinksSection } from "@/components/internal-links"

const MotionWrapper = dynamic(() => import("@/components/MotionWrapper"), {
  ssr: false,
})

const navigationItems = [
  { href: "#sobre-mi", label: "Sobre Mi" },
  { href: "#servicios", label: "Servicios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#blog", label: "Blog" },
  { href: "#videos", label: "Videos" },
  { href: "#faq", label: "FAQ" },
  { href: "#tienda", label: "Tienda" },
  { href: "#contacto", label: "Contacto" },
]

export function ClientPageWrapper() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* SEO Content - Hidden but crawlable */}
      <SEOContent />
      <LocalSEOContent />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-[#DBFF00]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prg%20logo%20verde-kT7ktxPRR3QYoppiTDkxTkv5U6qEnW.png"
                alt="PRG Coaching - Logo del Coach de Powerlifting Online en Argentina"
                width={80}
                height={50}
                className="h-8 w-auto"
              />
            </div>
            <Navigation items={navigationItems} />
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pb-8">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PRG%20SOMBRA-UbIM971gA3xHOoWcFHCQcocP85LIuX.png"
            alt="PRG Coaching - Entrenador de Powerlifting Online en Argentina especializado en sentadilla, peso muerto y press de banca"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
            style={{ objectPosition: "center -180px" }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-20 flex flex-col items-center justify-center text-center">
          <MotionWrapper>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4">
              Coaching <span className="text-[#DBFF00]">online</span> de Powerlifting
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
              Mejora tu fuerza y técnica en powerlifting con entrenamiento personalizado en Argentina. Planes de
              coaching online para sentadilla, peso muerto y press de banca.
            </h2>
            <div className="flex justify-center w-full">
              <GlowButton
                href="https://docs.google.com/forms/d/1uCIyOEzSIqDyh0EsNSx85PEEZuSafF9PvApNuG0jgR8/edit"
                className="mx-auto"
              >
                Solicitar Coaching de Powerlifting
              </GlowButton>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi">
        <AboutSection />
      </section>

      {/* Services Section */}
      <section id="servicios">
        <ServicesSection />
      </section>

      {/* Testimonials Section */}
      <section id="testimonios">
        <TestimonialsSection />
      </section>

      {/* Blog Section */}
      <section id="blog">
        <BlogSection />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* Video Carousel Section */}
      <section id="videos" className="bg-[#0A0A0A] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <VideoCarousel />
        </div>
      </section>

      {/* T-Shirt Store Section */}
      <section id="tienda">
        <TShirtStore />
      </section>

      {/* Internal Links Section */}
      <InternalLinksSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
