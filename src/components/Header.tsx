'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'HOME', number: '01' },
    { href: '/servizi', label: 'SERVIZI', number: '02' },
    { href: '/about', label: 'ABOUT', number: '03' },
    { href: '/portfolio', label: 'PORTFOLIO', number: '04' },
    { href: '/blog', label: 'BLOG', number: '05' },
    { href: '/contatti', label: 'CONTATTI', number: '06' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-24 md:h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-swiss-red flex items-center justify-center transition-transform group-hover:rotate-90 duration-500">
              <span className="text-white font-bold text-xl md:text-2xl">E</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl md:text-3xl font-bold tracking-tight">ERRAKUI</span>
              <span className="text-xs md:text-sm tracking-[0.3em] text-swiss-gray-500">.DEV</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center px-6 py-4 transition-all duration-300 ${
                  pathname === item.href
                    ? 'bg-swiss-red text-white'
                    : 'hover:bg-swiss-gray-100'
                }`}
              >
                <span className="text-xs font-mono mr-3 opacity-60">{item.number}</span>
                <span className="text-sm font-bold tracking-wide">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-12 h-12 flex flex-col items-center justify-center space-y-1.5 group"
            aria-label="Menu"
          >
            <span
              className={`w-8 h-0.5 bg-swiss-black transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-8 h-0.5 bg-swiss-black transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-8 h-0.5 bg-swiss-black transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-24 bg-white transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-2">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center p-6 border-l-4 transition-all duration-300 ${
                pathname === item.href
                  ? 'border-swiss-red bg-swiss-gray-100'
                  : 'border-transparent hover:border-swiss-red hover:bg-swiss-gray-100'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: menuOpen ? 'slide-in 0.5s ease-out forwards' : 'none'
              }}
            >
              <span className="text-4xl font-mono mr-6 text-swiss-gray-400">
                {item.number}
              </span>
              <span className="text-2xl font-bold tracking-tight">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

