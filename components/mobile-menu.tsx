'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const id = target.getAttribute('href')?.slice(1)
        const element = document.getElementById(id || '')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          setIsOpen(false)
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
      </Button>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black/95 p-4 z-50">
          <nav className="flex flex-col space-y-4">
            <a href="#sobre-mi" className="text-gray-300 hover:text-white">Sobre Mi</a>
            <a href="#servicios" className="text-gray-300 hover:text-white">Servicios</a>
            <a href="#videos" className="text-gray-300 hover:text-white">Videos</a>
            <a href="#tienda" className="text-gray-300 hover:text-white">Tienda</a>
            <a href="#contacto" className="text-gray-300 hover:text-white">Contacto</a>
          </nav>
        </div>
      )}
    </div>
  )
}
