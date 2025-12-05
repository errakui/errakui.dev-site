'use client'

import { useEffect, useState } from 'react'

export default function SwissGrid() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
      <div
        className="w-full h-full transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translate(${mousePos.x * 0.005}px, ${mousePos.y * 0.005}px)`,
        }}
      />
    </div>
  )
}

