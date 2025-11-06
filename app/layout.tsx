import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Roboto } from "next/font/google"
import { Toaster } from "react-hot-toast"
import "./globals.css"
import { WebVitals } from "@/components/web-vitals"
import { AnalyticsProvider } from "@/components/analytics-provider"
import { Suspense } from "react"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
})

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "PRG Coaching | Coach Online de Powerlifting en Argentina | Planes Personalizados",
  description:
    "Transforma tu fuerza y técnica con PRG Coaching. Entrenador de powerlifting online en Argentina. Planes personalizados de entrenamiento y nutrición para sentadilla, peso muerto y banca. ¡Alcanza tus récords!",
  keywords: [
    "coach powerlifting online Argentina",
    "entrenador powerlifting a distancia",
    "preparador físico powerlifting Buenos Aires",
    "planes entrenamiento powerlifting personalizados",
    "coaching powerlifting online",
    "entrenador fuerza powerlifting",
    "asesoría competencia powerlifting",
    "rutinas powerlifting personalizadas",
    "técnica sentadilla peso muerto banca",
    "PRG coaching powerlifting",
  ].join(", "),
  authors: [{ name: "PRG Coaching" }],
  creator: "PRG Coaching",
  publisher: "PRG Coaching",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://prg-coaching.vercel.app",
    siteName: "PRG Coaching",
    title: "PRG Coaching | Coach Online de Powerlifting en Argentina",
    description:
      "Transforma tu fuerza y técnica con PRG Coaching. Entrenador de powerlifting online en Argentina. Planes personalizados para alcanzar tus récords.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "PRG Coaching - Entrenador de Powerlifting Online en Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRG Coaching | Coach Online de Powerlifting en Argentina",
    description: "Transforma tu fuerza y técnica con PRG Coaching. Planes personalizados de powerlifting online.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  alternates: {
    canonical: "https://prg-coaching.vercel.app",
  },
  verification: {
    google: "google-site-verification-code", // Reemplaza con tu código real de Google Search Console
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${bebasNeue.variable} ${roboto.variable}`}>
      <head>
        <link rel="canonical" href="https://prg-coaching.vercel.app" />
        <meta name="geo.region" content="AR" />
        <meta name="geo.placename" content="Argentina" />
        <meta name="ICBM" content="-34.6118,-58.3960" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "PRG Coaching",
              description:
                "Coach online de powerlifting en Argentina. Planes personalizados de entrenamiento y nutrición.",
              url: "https://prg-coaching.vercel.app",
              telephone: "+54-11-3932-4671",
              address: {
                "@type": "PostalAddress",
                addressCountry: "AR",
                addressRegion: "Buenos Aires",
                addressLocality: "Argentina",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-34.6118",
                longitude: "-58.3960",
              },
              openingHours: "Mo-Su 09:00-21:00",
              serviceArea: {
                "@type": "Country",
                name: "Argentina",
              },
              priceRange: "$$",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PRG%20SOMBRA-UbIM971gA3xHOoWcFHCQcocP85LIuX.png",
              sameAs: ["https://www.instagram.com/faccugram_gordogoodlifter/", "https://www.youtube.com/@prgenerator"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Coaching de Powerlifting",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Coaching Online de Powerlifting",
                      description: "Entrenamiento personalizado de powerlifting con seguimiento online",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={roboto.className}>
        <WebVitals />
        <Suspense fallback={null}>{children}</Suspense>
        <Toaster />
        <AnalyticsProvider />
      </body>
    </html>
  )
}
