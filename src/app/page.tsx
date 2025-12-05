'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const services = [
    {
      number: '01',
      title: 'WEB DEVELOPMENT',
      description: 'Siti web e applicazioni web di alta qualità con tecnologie moderne',
      tags: ['Next.js', 'React', 'TypeScript'],
    },
    {
      number: '02',
      title: 'MOBILE APPS',
      description: 'Applicazioni mobile native e cross-platform per iOS e Android',
      tags: ['React Native', 'Flutter', 'Swift'],
    },
    {
      number: '03',
      title: 'SOFTWARE GESTIONALI',
      description: 'Sistemi gestionali personalizzati per ottimizzare i processi aziendali',
      tags: ['ERP', 'CRM', 'Cloud'],
    },
    {
      number: '04',
      title: 'SOFTWARE SU MISURA',
      description: 'Soluzioni software personalizzate per esigenze specifiche',
      tags: ['Custom', 'API', 'Integration'],
    },
  ]

  const stats = [
    { number: '150+', label: 'PROGETTI COMPLETATI' },
    { number: '50+', label: 'CLIENTI SODDISFATTI' },
    { number: '12+', label: 'ANNI DI ESPERIENZA' },
    { number: '100%', label: 'SWISS QUALITY' },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-6 md:px-12"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, black 1px, transparent 1px),
              linear-gradient(to bottom, black 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }} />
        </div>

        {/* Floating Red Square */}
        <div
          className="absolute w-96 h-96 bg-swiss-red opacity-20 blur-3xl"
          style={{
            left: `${mousePosition.x * 0.03}px`,
            top: `${mousePosition.y * 0.03}px`,
            transition: 'left 0.3s ease-out, top 0.3s ease-out'
          }}
        />

        <div className="max-w-[1800px] mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center space-x-4 animate-fade-in">
                <div className="w-16 h-1 bg-swiss-red" />
                <span className="text-sm tracking-[0.3em] text-swiss-gray-500 font-bold">
                  SWISS SOFTWARE HOUSE
                </span>
              </div>

              <h1 className="swiss-title font-bold animate-slide-in">
                CREIAMO
                <br />
                <span className="text-swiss-red">SOFTWARE</span>
                <br />
                ECCEZIONALE
              </h1>

              <p className="text-xl md:text-2xl text-swiss-gray-600 max-w-2xl leading-relaxed animate-slide-in" style={{ animationDelay: '0.2s' }}>
                Trasformiamo idee complesse in soluzioni digitali eleganti. 
                Con precisione svizzera e design impeccabile.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-slide-in" style={{ animationDelay: '0.4s' }}>
                <Link
                  href="/contatti"
                  className="group relative px-12 py-6 bg-swiss-red text-white font-bold text-lg overflow-hidden transition-all hover:scale-105"
                >
                  <span className="relative z-10">INIZIA UN PROGETTO</span>
                  <div className="absolute inset-0 bg-swiss-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    INIZIA UN PROGETTO →
                  </span>
                </Link>

                <Link
                  href="/portfolio"
                  className="px-12 py-6 border-2 border-swiss-black text-swiss-black font-bold text-lg hover:bg-swiss-black hover:text-white transition-all"
                >
                  VEDI IL PORTFOLIO
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-square">
                {/* Large Number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="swiss-number text-swiss-gray-100 select-none">
                    01
                  </span>
                </div>

                {/* Animated Squares */}
                <div className="absolute inset-0 grid grid-cols-3 gap-4 p-12">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="border-2 border-swiss-gray-300 hover:border-swiss-red hover:bg-swiss-red transition-all duration-500 cursor-pointer"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        animation: 'fade-in 1s ease-out forwards'
                      }}
                    />
                  ))}
                </div>

                {/* Red Accent Box */}
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-swiss-red flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl font-bold mb-2">12+</div>
                    <div className="text-sm tracking-[0.3em]">ANNI</div>
                    <div className="text-sm tracking-[0.3em]">ESPERIENZA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-swiss-black text-white py-12">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:text-swiss-red transition-colors">
                  {stat.number}
                </div>
                <div className="text-xs tracking-[0.3em] text-swiss-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 md:px-12 bg-swiss-gray-100">
        <div className="max-w-[1800px] mx-auto">
          <div className="mb-20">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-6xl md:text-8xl font-mono text-swiss-red font-bold">02</span>
              <div>
                <h2 className="text-4xl md:text-6xl font-bold">I NOSTRI SERVIZI</h2>
                <p className="text-swiss-gray-600 text-xl mt-2">
                  Soluzioni complete per ogni esigenza digitale
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-1 bg-swiss-black">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-12 hover:bg-swiss-red transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="text-6xl font-mono text-swiss-gray-300 group-hover:text-white/50 transition-colors">
                    {service.number}
                  </span>
                  <div className="w-12 h-12 border-2 border-swiss-black group-hover:border-white group-hover:rotate-45 transition-all duration-500" />
                </div>

                <h3 className="text-3xl font-bold mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-swiss-gray-600 group-hover:text-white/90 mb-8 text-lg leading-relaxed transition-colors">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 border border-swiss-gray-300 group-hover:border-white group-hover:text-white text-sm font-mono transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/servizi"
              className="inline-block px-16 py-6 bg-swiss-black text-white font-bold text-lg hover:bg-swiss-red transition-colors"
            >
              SCOPRI TUTTI I SERVIZI →
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-6xl md:text-8xl font-mono text-swiss-red font-bold">03</span>
                <h2 className="text-4xl md:text-6xl font-bold">
                  IL NOSTRO
                  <br />
                  PROCESSO
                </h2>
              </div>
              <p className="text-xl text-swiss-gray-600 leading-relaxed">
                Un approccio strutturato e trasparente che garantisce risultati eccellenti. 
                Dalla concezione al lancio, ti accompagniamo in ogni fase del progetto.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  phase: '01',
                  title: 'DISCOVERY',
                  desc: 'Analisi approfondita delle esigenze e degli obiettivi',
                },
                {
                  phase: '02',
                  title: 'STRATEGY',
                  desc: 'Definizione della strategia e architettura della soluzione',
                },
                {
                  phase: '03',
                  title: 'DESIGN',
                  desc: 'Creazione di interfacce eleganti e user experience ottimale',
                },
                {
                  phase: '04',
                  title: 'DEVELOPMENT',
                  desc: 'Sviluppo con tecnologie moderne e best practices',
                },
                {
                  phase: '05',
                  title: 'TESTING',
                  desc: 'Test rigorosi per garantire qualità e affidabilità',
                },
                {
                  phase: '06',
                  title: 'LAUNCH',
                  desc: 'Deployment e supporto continuo post-lancio',
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-6 p-6 border-l-4 border-transparent hover:border-swiss-red hover:bg-swiss-gray-100 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-4xl font-mono text-swiss-gray-300 group-hover:text-swiss-red transition-colors">
                    {step.phase}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-swiss-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-swiss-red text-white py-32 px-6 md:px-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="max-w-[1800px] mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            PRONTO A INIZIARE
            <br />
            IL TUO PROGETTO?
          </h2>
          <p className="text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
            Contattaci oggi e trasformiamo la tua visione in realtà
          </p>
          <Link
            href="/contatti"
            className="inline-block px-16 py-6 bg-white text-swiss-red font-bold text-xl hover:bg-swiss-black hover:text-white transition-colors"
          >
            CONTATTACI ORA
          </Link>
        </div>
      </section>
    </div>
  )
}

