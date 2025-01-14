import Image from 'next/image'

const socialLinks = [
  {
    name: 'Steam',
    url: 'https://steamcommunity.com/profiles/76561198082904943',
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/steam-79DVkuGHhwHFM7cZaJxlKghGnniKbw.png'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/faccugram_gordogoodlifter/',
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ig-h5tlSh82NQWoY9iwlAoPw9Zc2YRmPD.png'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@prgenerator',
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yt-k8lF40Z5krGK4a4DC6Zba8vIEjP4sM.png'
  },
  {
    name: 'Open Powerlifting',
    url: 'https://www.openpowerlifting.org/u/facundocataldorogala',
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-45sTwIboZar3oHFKpTrSRsFo9a2NiB.png'
  }
]

export function Footer() {
  return (
    <footer id="contacto" className="relative bg-black text-white py-12 sm:py-16 w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div id="redes" className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Seguime en Redes
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#06080C] rounded-xl hover:bg-[#06080C]/80 transition-colors"
                aria-label={`Visitar ${link.name}`}
              >
                <Image
                  src={link.icon}
                  alt={`${link.name} icon`}
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-16 md:h-16"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} PRG Coaching. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

