"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function BlogPostPage() {
  return (
    <main className="bg-black min-h-screen pt-20">
      {/* Scroll to top component - specific to this article */}
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
            src="/images/squat-technique-2025.png"
            alt="Técnica de sentadilla en powerlifting"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        {/* Metadatos del artículo */}
        <div className="flex items-center text-sm text-gray-400 mb-6">
          <time dateTime="2025-06-08">8 de junio 2025</time>
          <span className="mx-2">•</span>
          <span>PRG Coaching</span>
          <span className="mx-2">•</span>
          <span className="bg-[#DBFF00]/20 text-[#DBFF00] px-2 py-1 rounded-full text-xs">Técnica</span>
        </div>

        {/* Título y subtítulo */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Sentadilla: Starter Pack 2025
        </h1>

        {/* Contenido principal */}
        <div className="prose prose-lg prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-[#DBFF00] mt-12 mb-6">
            Cosas que aprendí intentando ser más fuerte en sentadilla
          </h2>

          <p className="text-xl font-bold text-white mb-6">La técnica es la llave.</p>

          <p className="mb-6">
            Para abrir la puerta de los kilos sí o sí vas a tener que buscar un patrón técnico constante y repetirlo. Es
            decir, una concatenación de movimientos en un orden estricto.
          </p>

          <h3 className="text-2xl font-bold text-white mt-10 mb-4">
            Movimientos que componen una sentadilla con barra (Y DÓNDE HACER EL ÉNFASIS)
          </h3>

          {/* Video demostrativo de técnica de sentadilla - más pequeño */}
          <div className="flex justify-center">
            <div className="aspect-[9/16] w-full max-w-xs">
              <iframe
                src="https://www.youtube.com/embed/Ac4zCqo8HKM"
                title="Técnica de sentadilla en powerlifting"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-3">
            Técnica completa: unrack, walkout, bracing y ejecución
          </p>

          <h4 className="text-xl font-bold text-[#DBFF00] mt-8 mb-4 relative pl-4">
            <span className="absolute left-0 top-1/2 w-2 h-0.5 bg-[#DBFF00] -translate-y-1/2"></span>
            1. Unrack (ES EL MÁS IMPORTANTE)
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Poner tenso el core y la espalda alta</li>
            <li>Extender las rodillas</li>
            <li>
              <strong className="text-white">Quedarse ahí parado 2 SEGUNDOS</strong> antes de empezar a caminar
            </li>
            <li>Evitar salir caminando ni bien sientes contacto con el peso y lo tienes en la espalda</li>
            <li>Extender las rodillas y quedarte ahí 2 segundos sintiendo el peso con el bracing activado</li>
          </ul>
          <p className="mt-4 text-gray-300 mb-8">
            La posición de la barra tiene que ser justa, ni muy abajo para evitar dolores de codo/hombro ni muy arriba
            para no hacer barra alta (no sos bilbo_swaggins181). Si lo fueras, no estarías leyendo este blog. La
            posición de las manos suele ser cómoda ya que no se usan las manos mega pegadas a los hombros, un poco más
            de ancho de hombro va bien, mega abierto suele no ser óptimo.
          </p>

          <h4 className="text-xl font-bold text-[#DBFF00] mt-8 mb-4 relative pl-4">
            <span className="absolute left-0 top-1/2 w-2 h-0.5 bg-[#DBFF00] -translate-y-1/2"></span>
            2. Walkout
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Pasos cortos, coordinar los pasos perfectamente</li>
            <li>
              Hacer el primer paso <strong className="text-white">siempre con el mismo pie</strong> y repetirlo
            </li>
            <li>No cambiar una serie con un pie, otra con otro, etc.</li>
            <li>Siempre el mismo pie se mueve primero</li>
          </ul>
          <p className="mt-4 text-gray-300 mb-8"></p>

          <h4 className="text-xl font-bold text-[#DBFF00] mt-8 mb-4 relative pl-4">
            <span className="absolute left-0 top-1/2 w-2 h-0.5 bg-[#DBFF00] -translate-y-1/2"></span>
            3. Bracing (EL SEGUNDO MÁS IMPORTANTE)
          </h4>
          <p className="mb-4 text-gray-300">
            Una vez que termina el walkout y quedas con los pies paralelos,{" "}
            <strong className="text-white">PACIENCIA</strong>, nadie te corre. No bajes ni bien te quedaste quieto.
          </p>
          <p className="font-bold text-white mb-2">Pasos:</p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-300">
            <li>Termina el walkout</li>
            <li>2-3 segundos quieto sintiendo el peso</li>
            <li>Bracing 2 segundos más</li>
            <li>Recién ahí baja (entre 4-5 segundos)</li>
          </ol>
          <p className="mt-4 text-gray-300">
            Esto es fundamental para pre-coordinar el movimiento mentalmente, sentir la carga, buscar la estrategia de
            bajada y subida, sentir el peso en la espalda, conectar con toda esa mierda. Vas a estar mucho más seguro.
          </p>
          <p className="mt-4 text-gray-300 mb-8">
            Existe gente que walkoutea corriendo y baja desesperado y es fuerte, algunos más, otros menos, pero si ves
            powerlifters de élite, los segundos que se toman para walkout y bracing varían muy poco entre ellos. Pero sí
            existen gorditos fuertes que caminan así nomás y se tiran a la pileta y sobreviven (No lo hagas aunque seas
            ese gordito fuerte, evítalo).
          </p>

          <h4 className="text-xl font-bold text-[#DBFF00] mt-8 mb-4 relative pl-4">
            <span className="absolute left-0 top-1/2 w-2 h-0.5 bg-[#DBFF00] -translate-y-1/2"></span>
            4. Bajada
          </h4>
          <p className="mb-4 text-gray-300">Esto es mega personal, va a depender de tus proporciones:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Fémur largo = más buenos días</li>
            <li>Fémur corto = más vertical</li>
          </ul>
          <p className="mt-4 text-gray-300">
            De todas maneras hay que buscar <strong className="text-white">SIEMPRE activar los cuádriceps</strong> ya
            que es clave para una sentadilla fuerte. Si tienes dominancia de cadena posterior no vayas en contra de tu
            anatomía, pero ten en cuenta que los cuádriceps te van a impulsar más que la cadena posterior. La posición
            de los pies suele ser una rotación de 30°, lo que sí es CLAVE, la rodilla debe apuntar SIEMPRE para donde
            apunta la punta de los pies.
          </p>
          <p className="mt-4 text-gray-300 mb-8">
            En este{" "}
            <a
              href="https://bretcontreras.com/forward-lean-in-the-squat-is-knee-dominant-or-hip-dominant-better-for-moving-more-weight"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DBFF00] hover:underline"
            >
              artículo de Bret Contreras
            </a>{" "}
            se vio cómo los de dominancia de cuádriceps tienen más éxito en competencia a nivel sentadilla.
          </p>

          <h4 className="text-xl font-bold text-[#DBFF00] mt-8 mb-4 relative pl-4">
            <span className="absolute left-0 top-1/2 w-2 h-0.5 bg-[#DBFF00] -translate-y-1/2"></span>
            5. Hoyo
          </h4>
          <p className="text-gray-300 mb-8">
            La bajada termina cuando el movimiento se frena en la máxima profundidad posible y válida. La idea es
            mantener al máximo el bracing para expandir el diafragma y activar más los erectores de columna. Desde ya
            vas a necesitar una cintura pélvica fuerte, cuádriceps e isquios también, suelen ser los encargados de que
            no se sienta horrible ahí abajo y se mantenga todo estable, ya que vamos a experimentar un torque alto en la
            cadera y lumbares.
          </p>

          <h4 className="text-xl font-bold text-[#DBFF00] mt-8 mb-4 relative pl-4">
            <span className="absolute left-0 top-1/2 w-2 h-0.5 bg-[#DBFF00] -translate-y-1/2"></span>
            6. Subida
          </h4>
          <p className="text-gray-300">
            Si las rodillas no se te metieron para adentro, deberías tener el sticking point por 3/4 del movimiento si
            no te fuiste al carajo con el peso. Si te pasaste de madre con el peso, la vas a quedar en el hole o apenas
            empieces a subir (si la quedas bajando, te caíste a pedazos con la carga, ya no es tanta culpa de tu técnica
            o fuerza muscular, a no ser que seas mega novato y estés entrenando con guantes).
          </p>
          <p className="mt-4 text-gray-300 mb-8">
            Acá son clave los cuádriceps, lumbares, pero principalmente{" "}
            <strong className="text-white">glúteos para volver a la verticalidad</strong> (el glúteo te ayuda a meter un
            pijazo).
          </p>

          <h4 className="text-xl font-bold text-[#DBFF00] mt-8 mb-4 relative pl-4">
            <span className="absolute left-0 top-1/2 w-2 h-0.5 bg-[#DBFF00] -translate-y-1/2"></span>
            7. Dejar la barra (CRÍTICO PARA SEGURIDAD)
          </h4>
          <p className="text-white font-bold mb-4">
            <strong className="text-red-400">DEJARLA RECTA</strong> - Este es un punto de seguridad fundamental
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>
              <strong className="text-white">JAMÁS guardar un lado y luego el otro</strong>
            </li>
            <li>Bajar la barra recta, manteniendo ambos lados a la misma altura</li>
            <li>
              <strong className="text-white">Chocar contra el rack</strong> para asegurarte que estás por encima de los
              topes del rack
            </li>
            <li>Solo cuando sientes que la barra está bien apoyada en ambos topes, recién ahí soltar</li>
            <li>Mantener el control total hasta que la barra esté completamente segura</li>
          </ul>
          <div className="mt-4 p-4 bg-red-900/30 rounded-lg mb-8">
            <p className="text-gray-300 mt-2">
              Dejar la barra incorrectamente es una de las principales causas de lesiones en powerlifting. Siempre
              prioriza la seguridad sobre la velocidad al terminar la serie.
            </p>
          </div>

          <div className="bg-[#DBFF00]/10 border border-[#DBFF00]/30 rounded-xl p-6 mb-12">
            <h3 className="text-2xl font-bold text-[#DBFF00] mb-4">Conclusión clave</h3>
            <p className="text-white">
              Cada uno va a tener su propia técnica adaptada a su anatomía y no al revés. El stance de los pies, de las
              manos, la inclinación del torso va a ser decisión personal. Ir probando distintos stances es necesario, y
              una vez encontrado el stance de pies, mantenerlo en el tiempo. No lo cambies cada 2 x 3, sino nunca vas a
              saber qué te funciona.
            </p>
            <p className="mt-4 text-white">
              La posición de manos y altura de la barra en la espalda sí puede cambiarse un poco más seguido, ya que no
              cambia mucho la ecuación en la mayoría de los casos, más que nada para evitar dolores articulares (a no
              ser que tengas la squat de Corentin Clement).
            </p>
            <p className="mt-4 text-white font-bold">
              La clave va a ser repetir el gesto técnico a través del tiempo y nunca modificarlo arbitrariamente y mucho
              menos inconscientemente. Repetir, repetir y repetir los mismos pasos: unrack, walkout, bracing, squat y
              <span className="text-red-400"> dejar la barra de forma segura</span>. Con sus respectivos pasos, sin duda
              la clave del éxito para progresar y ser longevo en el deporte.
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
            <h3 className="text-2xl font-bold text-white mb-4">¿Quieres mejorar tu técnica de sentadilla?</h3>
            <p className="text-gray-300 mb-6">
              Contáctame para una evaluación personalizada de tu técnica y un plan de entrenamiento específico para
              aumentar tu fuerza en sentadilla de forma segura.
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
              <Link href="/blog" className="block p-4 bg-black/50 rounded-lg hover:bg-black/70 transition-colors">
                <h4 className="text-[#DBFF00] font-semibold mb-2">Técnica de Peso Muerto</h4>
                <p className="text-gray-300 text-sm">Próximamente: Guía completa para mejorar tu peso muerto</p>
              </Link>
              <Link href="/blog" className="block p-4 bg-black/50 rounded-lg hover:bg-black/70 transition-colors">
                <h4 className="text-[#DBFF00] font-semibold mb-2">Press de Banca Perfecto</h4>
                <p className="text-gray-300 text-sm">Próximamente: Cómo dominar el press de banca</p>
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
