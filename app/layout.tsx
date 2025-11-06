import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Roboto } from "next/font/google"
import { Toaster } from "react-hot-toast"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
    "Transforma tu fuerza y técnica con PRG Coaching. Entrenador de powerlifting online en Argentina.",
  alternates: {
    canonical: "https://prg-coaching.vercel.app",
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
      <body className={roboto.className}>
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
