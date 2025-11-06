import { ClientPageWrapper } from "@/components/client-page-wrapper"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PRG Coaching | Coach Online de Powerlifting en Argentina | Planes Personalizados",
  description:
    "Transforma tu fuerza y técnica con PRG Coaching. Entrenador de powerlifting online en Argentina. Planes personalizados de entrenamiento y nutrición para sentadilla, peso muerto y banca. ¡Alcanza tus récords!",
  alternates: {
    canonical: "https://prg-coaching.vercel.app",
  },
}

export default function Home() {
  return <ClientPageWrapper />
}
