"use client"

export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PRG Coaching",
    description:
      "Coach online de powerlifting en Argentina. Planes personalizados.",
    url: "https://prg-coaching.vercel.app",
    telephone: "+54-11-3932-4671",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
      addressRegion: "Buenos Aires",
      addressLocality: "Argentina",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
