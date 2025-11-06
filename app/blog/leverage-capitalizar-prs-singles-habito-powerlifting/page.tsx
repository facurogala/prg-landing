"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function LeverageBlogPostPage() {
  return (
    <main className="bg-black min-h-screen pt-20">
      <ScrollToTop offset={0} />

      {/* Header con navegación de regreso */}
      <div className="bg-black/80 backdrop-blur-sm border-b border-[#DBFF00]/10 py-4 fixed top-0 w-full z-40">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-[#DBFF00] hover:text-[#DBFF00]/80 transition-colors">
            ← Volver a inicio
          </Link>
        </div>
      </div>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Imagen destacada */}
        <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
          <Image
            src="/images/design-mode/image.png"
            alt="Leverage en powerlifting - Singles pesados como hábito"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        {/* Metadatos del artículo */}
        <div className="flex items-center text-sm text-gray-400 mb-6">
          <time dateTime="2025-01-15">15 de enero 2025</time>
          <span className="mx-2">•</span>
          <span>PRG Coaching</span>
          <span className="mx-2">•</span>
          <span className="bg-[#DBFF00]/20 text-[#DBFF00] px-2 py-1 rounded-full text-xs">Entrenamiento</span>
        </div>

        {/* Título y subtítulo */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Leverage: Capitalizar PRs y Hacer Singles un Hábito
        </h1>

        {/* Contenido principal */}
        <div className="prose prose-lg prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-[#DBFF00] mt-12 mb-6">El concepto de leverage en powerlifting</h2>

          <p className="text-xl font-bold text-white mb-6">No sobrepensar ni sobre festejar kg nuevos.</p>

          <p className="mb-6">
            A la hora de pensar un PR tendemos a prepararnos mentalmente semanas, quizá meses. Y ahí está el problema en
            perseguir puntualidades cuando en realidad el powerlifting es un proceso enorme largo e ininterrumpido,
            quédense con esta palabra: <strong className="text-[#DBFF00]">ininterrumpida</strong> de picos y bajadas de
            rendimiento.
          </p>

          <p className="mb-6">
            El punto acá es cuanto antes lo hagas cotidiano mejor. Subir a un pedestal al evento es una franca manera de
            sentenciar que no es un evento repetible fácilmente o al corto plazo, y ese es justamente el objetivo:
            debería ser tocado lo antes posible de manera controlada.
          </p>

          {/* Video demostrativo */}
          <div className="flex justify-center my-8">
            <div className="aspect-[9/16] w-full max-w-xs">
              <iframe
                src="https://www.youtube.com/embed/oB0U4s65ffg"
                title="Leverage en powerlifting - Singles pesados"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-3 mb-8">Ejemplo práctico de leverage en entrenamiento</p>

          <h3 className="text-2xl font-bold text-white mt-10 mb-4">El problema común</h3>

          <p className="mb-6">
            Veo cotidianamente juventud que vuela y repea kilos submáximos y a la hora de acercarse a kilos 90% o más el
            rendimiento cae en picada y ni hablar de la velocidad. Quizá hasta no se mueve.
          </p>

          <p className="mb-6">
            De ahí viene el concepto de capitalizar el PR y no hacerlo evento anual como la navidad.{" "}
            <strong className="text-white">
              Cuando se te hace hábito cada salto de mejora es menos ponderado pero más frecuente.
            </strong>
          </p>

          <div className="bg-[#DBFF00]/10 border border-[#DBFF00]/30 rounded-xl p-6 my-8">
            <h4 className="text-xl font-bold text-[#DBFF00] mb-4">Key Point</h4>
            <p className="text-white text-lg">Estar preparado para un SBD a singles todo el año.</p>
          </div>

          <h3 className="text-2xl font-bold text-white mt-10 mb-4">Estrategias según tu fase de rendimiento</h3>

          <h4 className="text-xl font-bold text-[#DBFF00] mt-8 mb-4 relative pl-4">
            <span className="absolute left-0 top-1/2 w-2 h-0.5 bg-[#DBFF00] -translate-y-1/2"></span>
            En meseta o bajada de rendimiento
          </h4>

          <p className="mb-4">
            La clave es capitalizar esos picos mencionados. ¿Estás en una meseta o a la baja? Aquí algunas estrategias:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
            <li>Volar kg antiguos sin equipo</li>
            <li>Hacer una pausa larguísima con tu 70%</li>
            <li>Hacer un volumen absurdo con tu 65%</li>
            <li>Sobrarlo de alguna manera</li>
          </ul>

          <p className="mb-6">
            Más allá de las adaptaciones nos va a dar un refresh al SNC, articulaciones y al estado de lucha en pausa ya
            que vamos a estar en calma porque son "kg de mierda" y se puede trabajar en paz. A lo sumo saldrá un poco
            más lenta la subida en squat de una pausa de 8 segundos pero no nos vamos a morir con 60% del 1RM.
          </p>

          <div className="bg-black/50 border border-white/10 rounded-xl p-6 my-8">
            <p className="text-gray-300">
              <strong className="text-white">Este periodo de trabajo "sobrado" con variantes</strong> viene bien para la
              baja y mesetas de rendimiento.
            </p>
          </div>

          <h4 className="text-xl font-bold text-[#DBFF00] mt-8 mb-4 relative pl-4">
            <span className="absolute left-0 top-1/2 w-2 h-0.5 bg-[#DBFF00] -translate-y-1/2"></span>
            En pico de rendimiento sostenido
          </h4>

          <p className="mb-4">
            Por otro lado, si estamos en un buen pico de rendimiento sostenido en el tiempo:{" "}
            <strong className="text-white">PRIORIZAR SINGLES</strong>
          </p>

          <p className="mb-6">
            No hay cosa más preciada para el powerlifting que tocar un PR antiguo y hacerlo constantemente en la medida
            que la técnica esté perfecta y el grind moderado/bajo.{" "}
            <strong className="text-[#DBFF00]">YA TIENES TU OPENER con surplus.</strong> Qué mejor que convertir tu PR
            en tu opener.
          </p>

          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-8">
            <h5 className="text-lg font-bold text-white mb-3">❌ NO hacer:</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>AMRAP a más de 6 repes</li>
              <li>AMRAP con tu 90%</li>
              <li>Acumulación de volumen sin propósito</li>
            </ul>
          </div>

          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 my-8">
            <h5 className="text-lg font-bold text-white mb-3">✓ SÍ hacer:</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Prioriza singles</li>
              <li>Vas a competir a una repetición</li>
              <li>Deja AMRAPs pesados para el cierre de un bloque de volumen planificado para una competencia</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-white mt-10 mb-4">La calculadora vs. la realidad de los singles</h3>

          <div className="bg-[#DBFF00]/10 border border-[#DBFF00]/30 rounded-xl p-6 my-8">
            <h4 className="text-xl font-bold text-white mb-4">Anécdota real</h4>
            <p className="text-gray-300">
              Un atleta hizo 24 repes con 100kg en frío de banco y a la otra semana falló un 4x5 con 130kg…
            </p>
          </div>

          <p className="mb-6">
            <strong className="text-white">
              Jamás la calculadora va a reemplazar el poder de un single a velocidad confort.
            </strong>{" "}
            Y mucho menos si es a más de 5 repes.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
            <li>Si bien en banco la calculadora es más fiel a repes altas</li>
            <li>En squat menos</li>
            <li>
              <strong className="text-white">En DL ni se te ocurra calcular tu 1RM con 3 repes…</strong>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-white mt-10 mb-4">Por qué los singles son superiores</h3>

          <p className="mb-6">
            En mi caso siempre fui bueno a repes porque en mi cabeza siempre single fue sinónimo de buscar PR o peor aún
            hacer repes con un casi máximo, y ahí está otro error clave.
          </p>

          <div className="bg-black/50 border border-white/10 rounded-xl p-6 my-8">
            <h4 className="text-xl font-bold text-[#DBFF00] mb-4">Ventajas de los singles</h4>
            <ul className="list-disc pl-6 space-y-3 text-gray-300">
              <li>
                <strong className="text-white">Máxima concentración:</strong> Los singles te dejan concentrarte al
                máximo en un solo movimiento
              </li>
              <li>
                <strong className="text-white">Mayor eficiencia:</strong> Es muy difícil que seas igual de eficiente en
                una serie a 2 repes que en una serie a 1 repe
              </li>
              <li>
                <strong className="text-white">Sin anticipación:</strong> El cerebro está diseñado para anticiparse a
                eventos. Si tenemos que hacer más de 1 repetición, es imposible no concentrarse en las repes que vienen
                después de la primera aun cuando ni siquiera hicimos la primera
              </li>
            </ul>
          </div>

          <p className="mb-6">
            En gran parte por eso la máxima eficiencia está en singles y son buenas noticias porque{" "}
            <strong className="text-[#DBFF00]">no es un deporte de resistencia.</strong>
          </p>

          <h3 className="text-2xl font-bold text-white mt-10 mb-4">Adaptación progresiva</h3>

          <p className="mb-6">
            Las articulaciones, los mecanismos de percepción de la presión tienen que estar expuestos a esa intensidad.
          </p>

          <div className="bg-red-900/30 border border-red-500/40 rounded-xl p-6 my-8">
            <p className="text-white font-bold mb-3">⚠️ ADVERTENCIA IMPORTANTE</p>
            <p className="text-gray-300">
              OJO no se te ocurra hacer singles pesados similares a tu 1RM si todo se siente como la mierda. Tienes que
              lograr la madurez de a poco. Quizá lleve años y así es como entrena la élite de todas las federaciones.
            </p>
          </div>

          <div className="bg-[#DBFF00]/10 border border-[#DBFF00]/30 rounded-xl p-6 mb-12">
            <h3 className="text-2xl font-bold text-[#DBFF00] mb-4">Conclusión clave</h3>
            <p className="text-white mb-4">
              El leverage en powerlifting se trata de no ponderar los PRs, sino tomar una marca similar como un hábito cotidiano en lugar de un evento infrecuente.
              Capitaliza tus picos de rendimiento con singles frecuentes y controlados.
            </p>
            <p className="text-white mb-4">
              Cuando estés en meseta, trabaja con variantes y porcentajes más bajos. Cuando estés en pico, prioriza
              singles pesados con buena técnica.
            </p>
            <p className="text-white font-bold">
              La clave está en la exposición constante y progresiva a intensidades altas, construyendo la madurez
              necesaria para manejar cargas máximas de forma habitual.
            </p>
          </div>

          {/* Autor */}
          <div className="flex items-center space-x-4 border-t border-white/10 pt-8 mt-12">
            <div className="w-16 h-16 relative flex items-center justify-center">
              <Image
                src="/images/calavera-pulida-prg-logo.png"
                alt="PRG Coaching - Logo con calavera pulida y barras"
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

          {/* CTA */}
          <div className="bg-[#DBFF00]/10 border border-[#DBFF00]/30 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Quieres aprender a capitalizar tus PRs y hacer singles un hábito?
            </h3>
            <p className="text-gray-300 mb-6">
              Contáctame para un plan de entrenamiento personalizado que te ayude a desarrollar la madurez necesaria
              para manejar cargas pesadas de forma constante y segura.
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

          {/* Artículos relacionados */}
          <div className="bg-[#DBFF00]/10 border border-[#DBFF00]/30 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Artículos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/blog/como-mejorar-sentadilla-powerlifting-guia-completa"
                className="block p-4 bg-black/50 rounded-lg hover:bg-black/70 transition-colors"
              >
                <h4 className="text-[#DBFF00] font-semibold mb-2">Sentadilla: Starter Pack 2025</h4>
                <p className="text-gray-300 text-sm">Guía completa para mejorar tu técnica de sentadilla</p>
              </Link>
              <Link href="/blog" className="block p-4 bg-black/50 rounded-lg hover:bg-black/70 transition-colors">
                <h4 className="text-[#DBFF00] font-semibold mb-2">Más artículos de entrenamiento</h4>
                <p className="text-gray-300 text-sm">Explora más contenido sobre powerlifting</p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Footer simple */}
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
