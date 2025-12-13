"use client"

import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Sentadilla: Starter pack 2025",
    excerpt:
      "Perfeccionar tu sentadilla, corregir errores comunes y aumentar la fuerza máxima en powerlifting.",
    image: "/images/squat-technique-2025.png",
    date: "2025-06-08",
    author: "PRG Coaching",
    category: "Técnica",
    slug: "como-mejorar-sentadilla-powerlifting-guia-completa",
    keywords: ["sentadilla powerlifting", "técnica sentadilla", "mejorar sentadilla", "powerlifting Argentina"],
  },
]

export default function BlogClientPage() {
  return (
    <main className="bg-black min-h-screen pt-20">
      {/* Header con navegación de regreso */}
      <div className="bg-black/80 backdrop-blur-sm border-b border-[#DBFF00]/10 py-4 fixed top-0 w-full z-40">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-[#DBFF00] hover:text-[#DBFF00]/80 transition-colors">
            ← Volver a inicio
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blog</h1>
          <p className="text-xl text-gray-300 mb-12">
            Estrategias de competencia, periodización, nutrición, variantes, evidencia, Etc.
          </p>

          {/* Categorías */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/blog"
              className="bg-[#DBFF00] text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#DBFF00]/90 transition-colors"
            >
              Todos
            </Link>
            <Link
              href="/blog?categoria=tecnica"
              className="bg-black/50 border border-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold hover:border-[#DBFF00]/30 hover:text-[#DBFF00] transition-colors"
            >
              Técnica
            </Link>
            <Link
              href="/blog?categoria=nutricion"
              className="bg-black/50 border border-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold hover:border-[#DBFF00]/30 hover:text-[#DBFF00] transition-colors"
            >
              Nutrición
            </Link>
            <Link
              href="/blog?categoria=competencia"
              className="bg-black/50 border border-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold hover:border-[#DBFF00]/30 hover:text-[#DBFF00] transition-colors"
            >
              Competencia
            </Link>
            <Link
              href="/blog?categoria=entrenamiento"
              className="bg-black/50 border border-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold hover:border-[#DBFF00]/30 hover:text-[#DBFF00] transition-colors"
            >
              Entrenamiento
            </Link>
          </div>

          {/* Artículos */}
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="border-b border-white/10 pb-12 last:border-0">
                <Link href={`/blog/${post.slug}`} className="group">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative h-60 md:h-full rounded-xl overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg?height=240&width=320"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#DBFF00] text-black px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex items-center text-sm text-gray-400 mb-3">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("es-AR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <span className="mx-2">•</span>
                        <span>{post.author}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#DBFF00] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-300 mb-6">{post.excerpt}</p>
                      <span className="text-[#DBFF00] group-hover:underline">Leer más →</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Mensaje para futuros artículos */}
          <div className="bg-[#DBFF00]/10 border border-[#DBFF00]/30 rounded-xl p-8 mt-16">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Más Contenido Próximamente</h3>
              <p className="text-gray-300 mb-6">
                Estamos trabajando en más artículos sobre técnica, nutrición y estrategias de competencia en
                powerlifting.
              </p>
              <Link
                href="https://docs.google.com/forms/d/1uCIyOEzSIqDyh0EsNSx85PEEZuSafF9PvApNuG0jgR8/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#DBFF00] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#DBFF00]/90 transition-colors"
              >
                Solicitar Coaching Personalizado
              </Link>
            </div>
          </div>

          {/* Suscripción al newsletter */}
          <div className="bg-[#DBFF00]/10 border border-[#DBFF00]/30 rounded-xl p-8 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Suscríbete al Newsletter de Powerlifting</h3>
                <p className="text-gray-300">
                  Recibe artículos exclusivos, consejos técnicos y noticias sobre powerlifting en Argentina directamente
                  en tu email.
                </p>
              </div>
              <div>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#DBFF00]"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#DBFF00] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#DBFF00]/90 transition-colors"
                  >
                    Suscribirme
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer simple */}
      <footer className="bg-black/80 border-t border-white/10 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} PRG Coaching. Todos los derechos reservados.
          </p>
          <div className="mt-4">
            <Link href="/" className="text-[#DBFF00] hover:text-[#DBFF00]/80 transition-colors">
              Volver a inicio
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
