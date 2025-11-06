"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, Home } from "lucide-react"
import Link from "next/link"

interface BlogNavigationProps {
  showBackButton?: boolean
  backToHome?: boolean
}

export function BlogNavigation({ showBackButton = true, backToHome = false }: BlogNavigationProps) {
  const router = useRouter()

  const handleBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      router.back()
    } else {
      // Fallback to blog page if no history
      router.push("/blog")
    }
  }

  return (
    <div className="bg-black/80 backdrop-blur-sm border-b border-[#DBFF00]/10 py-4 fixed top-0 w-full z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <button
                onClick={handleBack}
                className="flex items-center text-[#DBFF00] hover:text-[#DBFF00]/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </button>
            )}
            <span className="text-gray-400">|</span>
            <Link href="/blog" className="text-gray-300 hover:text-[#DBFF00] transition-colors">
              Blog
            </Link>
          </div>
          <Link href="/" className="flex items-center text-gray-300 hover:text-[#DBFF00] transition-colors">
            <Home className="w-4 h-4 mr-2" />
            Inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
