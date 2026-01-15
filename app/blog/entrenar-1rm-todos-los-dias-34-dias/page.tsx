"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function BlogPostPage() {
  return (
    <main className="bg-black min-h-screen pt-20">
      <ScrollToTop offset={0} />

      <div className="bg-black/80 backdrop-blur-sm border-b border-[#DBFF00]/10 py-4 fixed top-0 w-full z-40">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="text-[#DBFF00] hover:text-[#DBFF00]/80 transition-colors">
            ← Volver a blog
          </Link>
        </div>
      </div>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="relative w-full h-[420px] mb-8 rounded-xl overflow-hidden">
          <Image
            src="/images/blog/entrenar-1rm-todos-los-dias-34-dias/1rm-daily-2.png"
            alt="Press banca - estudio 1RM diario"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="flex items-center text-sm text-gray-400 mb-6">
          <time dateTime="2025-02-15">15 de febrero 2025</time>
          <span className="mx-2">•</span>
          <span>PRG Coaching</span>
          <span className="mx-2">•</span>
          <span className="bg-[#DBFF00]/20 text-[#DBFF00] px-2 py-1 rounded-full text-xs">Investigación</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          ¿Entrenar el 1RM Todos los Días? La desquiciada verdad del Estudio de los 34 Días (2025)
        </h1>

        <h2 className="text-xl text-gray-300 mb-8">
          Ganamos un 29.23% de fuerza en un mes en sujetos físicamente activos no especializados, pero a qué costo. Análisis profundo del estudio de Cox et al.
        </h2>

        <div className="prose prose-lg prose-invert max-w-none">
          <p>
            Es habitual escuchar que la práctica diaria conduce a la mejora (la "ley de la especificidad"). El estudio que
            analizamos evalúa qué ocurre cuando esa idea se aplica al extremo: un protocolo en el que los participantes
            intentaron su 1RM de press de banca cada día durante 34 días consecutivos.
          </p>

          <p>
            Publicado en febrero de 2025 en el <em>Journal of Exercise Physiology Online</em> (Cox et al.), este experimento
            es una réplica espiritual del famoso estudio de Zourdos (2016) sobre la sentadilla, pero aplicado a la banca y
            con una muestra de población distinta. A continuación desglosamos los hallazgos, la letra chica del protocolo y
            sus implicancias prácticas.
          </p>

 

          <h3 className="text-xl font-bold text-[#DBFF00] mt-8 mb-4">1. Resultados principales: Ganancias "de novato" aceleradas</h3>
          <p>
            Desde un punto de vista estrictamente de rendimiento, los efectos fueron notables: los participantes presentaron
              una mejora media de aproximadamente <strong>+29.23% en el 1RM</strong> tras el ciclo de 34 días (media de la muestra de 7 participantes; típica de sujetos no especializados).
          </p>

          <ul>
            <li>
              Magnitud: el aumento promedio fue significativo. Un participante (P5) llegó a sumar +31 kg (70 lbs) en poco más
              de un mes.
            </li>
            <li>
              Contexto de la muestra: a diferencia del estudio de 2016 con powerlifters de élite, estos sujetos eran "físicamente activos" pero no especializados, lo que explica en parte el alto porcentaje observado.
            </li>
            <li>
              Rapidez: los cambios se observaron en cuestión de semanas, lo que sugiere una contribución importante de la
              adaptación neuromuscular y el aprendizaje motor por sobre la hipertrofia.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-[#DBFF00] mt-8 mb-4">2. La "Letra Chica": El volumen oculto y los riesgos</h3>
          <p>
            Aquí reside un dato que muchos resúmenes omiten: el protocolo no se limitó a realizar un intento máximo diario.
            Tras el récord diario, los participantes ejecutaban series de volumen obligatorias.
          </p>

          <p>Opciones del protocolo accesorio:</p>
          <ul>
            <li>Opción A: 5 series x 3 repeticiones al 85% del 1RM diario.</li>
            <li>Opción B: 5 series x 2 repeticiones al 90% del 1RM diario.</li>
          </ul>

          <p>
            El costo real: realizar cinco triples al 85% después de un máximo, todos los días, probablemente fue el principal factor del
            desgaste estructural observado.
          </p>

          <ul>
            <li>Molestias articulares: el 43% de los sujetos reportó dolor significativo que obligó a modificar o saltar
              entrenamientos (hombros y tríceps principalmente).</li>
            <li>Fatiga sistémica: la acumulación de estrés hizo que el rendimiento fuese variable y la recuperación insuficiente.</li>
            <li>Insostenibilidad: la evidencia sugiere que, aunque el rendimiento neuromuscular toleró la frecuencia, los tendones y articulaciones no.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#DBFF00] mt-8 mb-4">3. Variables de confusión: Suplementación</h3>
          <p>
            Un elemento importante del diseño fue la administración diaria de creatina y cafeína (pre-workout) a todos los
            participantes durante los 34 días. Esto plantea la duda razonable sobre cuánto de la mejora se debe al protocolo
            y cuánto a la intervención nutricional; si bien creatina y cafeína no explican por sí solas un aumento de esta magnitud,
            probablemente amplificaron el rendimiento diario y la tolerancia al estrés.
          </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-8">
              <h4 className="font-bold text-[#DBFF00] mb-2">Limitaciones del estudio</h4>
              <ul className="text-sm text-gray-300 list-inside">
                <li>Muestra muy reducida: n = 7 (3 hombres, 4 mujeres), lo que limita la generalización de resultados.</li>
                <li>No hubo grupo control, por lo que es difícil atribuir cambios exclusivamente al protocolo.</li>
                <li>Todos los participantes consumieron creatina y cafeína durante el estudio.</li>
                <li>La mayoría reportó molestias/dolor, lo que cuestiona la sostenibilidad.</li>
              </ul>
            </div>

          <h3 className="text-xl font-bold text-[#DBFF00] mt-8 mb-4">4. Aplicación práctica para tu entrenamiento</h3>
          <p>
            No se trata de desechar la alta frecuencia; la recomendación es ajustar intensidad y volumen de forma inversa.
            La exposición frecuente al gesto técnico es valiosa, pero el trabajo accesorio pesado fue el factor que comprometió
            la sostenibilidad del protocolo.
          </p>

          <p>
            Lo que NO debes hacer: maxear a diario y seguir con trabajo de volumen al 85–90%.
          </p>

          <p>
            Alternativa sensata: frecuencias altas (3–5 sesiones/semana) con una sola serie pesada (RPE 7–8) o singles al
            90% sin trabajo accesorio que genere fatiga acumulada.
          </p>

          <h3 className="text-2xl font-bold text-[#DBFF00] mt-10 mb-4">Conclusión</h3>
          <p>
            El trabajo de Cox et al. (2025) confirma la capacidad del sistema neuromuscular para adaptarse rápidamente a una
            práctica intensa, pero recuerda que los tejidos conectivos tienen tiempos biológicos distintos. Para aumentar la
            fuerza de manera sostenible conviene combinar alta frecuencia con intensidad moderada y volumen reducido.
          </p>

          <div className="bg-[#DBFF00]/10 border border-[#DBFF00]/30 rounded-xl p-6 mb-12">
            <h4 className="text-2xl md:text-3xl font-bold text-[#DBFF00] mb-2">Fuentes</h4>
            <p>
              Cox, J., et al. "Efficacy of Daily One-Repetition Maximum Bench Press Training in Physically Active Males and
              Females." Journal of Exercise Physiology Online, February 2025.
            </p>

            <p className="mt-3">Referencia cruzada: Zourdos, M.C., et al. (2016) sobre Daily 1RM en sentadilla.</p>
          </div>

          <div className="flex items-center space-x-4 border-t border-white/10 pt-8 mt-12">
            <div className="w-16 h-16 relative flex items-center justify-center">
              <Image
                src="/images/calavera-pulida-prg-logo.png"
                alt="PRG Coaching - Logo"
                width={64}
                height={64}
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <p className="font-bold text-white">PRG Coaching</p>
              <p className="text-gray-400 text-sm">Argentina.</p>
            </div>
          </div>
        </div>
      </article>

      <footer className="bg-black/80 border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} PRG Coaching. Todos los derechos reservados.</p>
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
