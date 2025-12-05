'use client'

import { useEffect, useState } from 'react'

interface CursorProps {
  className?: string
}

export default function CustomCursor({ className = '' }: CursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
      
      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      )
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed w-8 h-8 border-2 border-swiss-red rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isPointer ? 'scale-150' : 'scale-100'} ${className}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Dot cursor */}
      <div
        className={`fixed w-1 h-1 bg-swiss-red rounded-full pointer-events-none z-[9999] mix-blend-difference ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  )
}

