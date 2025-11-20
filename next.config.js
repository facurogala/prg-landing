/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración básica
  reactStrictMode: true,
  swcMinify: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Configuración del compilador
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Configuración de imágenes
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    unoptimized: true,
  },

  // Configuración de headers para políticas de seguridad
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ]
  },

  // Configuración adicional de webpack (si es necesario)
  webpack: (config, { dev, isServer }) => {
    // Aquí puedes agregar configuraciones personalizadas de webpack si las necesitas
    return config
  },
}

module.exports = nextConfig
