import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Blog | Técnica, Nutrición y Entrenamiento | PRG Coaching",
  description: "Estrategias de competencia, periodización, nutrición, variantes, evidencia, Etc.",
  keywords:
    "blog powerlifting, técnica powerlifting, nutrición powerlifting, entrenamiento fuerza, sentadilla, peso muerto, press banca, powerlifting Argentina",
}

export default function BlogPage() {
  return <BlogClientPage />
}
