'use client'

import { useEffect } from 'react'

interface NavigationProps {
  items: Array<{ href: string; label: string }>
}

export function Navigation({ items }: NavigationProps) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const id = target.getAttribute('href')?.slice(1)
        const element = document.getElementById(id || '')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="hidden md:flex items-center space-x-8">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-gray-300 hover:text-[#DBFF00] transition-colors"
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}

