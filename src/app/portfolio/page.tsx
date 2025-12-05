'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'TUTTI' },
    { id: 'web', label: 'WEB' },
    { id: 'mobile', label: 'MOBILE' },
    { id: 'enterprise', label: 'ENTERPRISE' },
  ]

  const projects = [
    {
      id: 1,
      category: 'web',
      number: '01',
      title: 'SWISS LUXURY BANK',
      subtitle: 'Piattaforma Banking Online',
      description: 'Ridisegnato completamente l\'esperienza digitale di una delle più prestigiose banche private svizzere.',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
      results: [
        '+250% conversioni',
        '-60% tempi di caricamento',
        '99.99% uptime',
      ],
      year: '2024',
      client: 'Confidenziale',
      color: 'bg-swiss-black',
    },
    {
      id: 2,
      category: 'mobile',
      number: '02',
      title: 'ALPINE FITNESS',
      subtitle: 'App Fitness & Wellness',
      description: 'App mobile completa per coaching fitness personalizzato con AI e tracking avanzato.',
      technologies: ['React Native', 'TensorFlow', 'Firebase', 'AWS'],
      results: [
        '50K+ downloads',
        '4.8★ rating',
        '85% retention',
      ],
      year: '2023',
      client: 'Alpine Fitness AG',
      color: 'bg-swiss-red',
    },
    {
      id: 3,
      category: 'enterprise',
      number: '03',
      title: 'SWISS PHARMA ERP',
      subtitle: 'Sistema Gestionale Enterprise',
      description: 'ERP completo per azienda farmaceutica con gestione produzione, logistica e conformità normative.',
      technologies: ['Java', 'Spring Boot', 'Oracle', 'Kubernetes'],
      results: [
        '+40% efficienza',
        '-70% errori',
        'ISO compliant',
      ],
      year: '2023',
      client: 'SwissPharma International',
      color: 'bg-swiss-black',
    },
    {
      id: 4,
      category: 'web',
      number: '04',
      title: 'LUXURY WATCH E-COMMERCE',
      subtitle: 'E-commerce di Lusso',
      description: 'Piattaforma e-commerce premium per orologi di lusso con configuratore 3D interattivo.',
      technologies: ['Next.js', 'Three.js', 'Stripe', 'Contentful'],
      results: [
        '€5M+ revenue',
        '+180% conversioni',
        '320ms avg load',
      ],
      year: '2024',
      client: 'Swiss Timepieces',
      color: 'bg-swiss-red',
    },
    {
      id: 5,
      category: 'mobile',
      number: '05',
      title: 'EASYMOVE',
      subtitle: 'App Trasporti Pubblici',
      description: 'Sistema completo per gestione e pianificazione dei trasporti pubblici cittadini.',
      technologies: ['Flutter', 'Go', 'MongoDB', 'Google Maps API'],
      results: [
        '200K+ utenti',
        '4.7★ rating',
        'Real-time tracking',
      ],
      year: '2023',
      client: 'Città di Lugano',
      color: 'bg-swiss-black',
    },
    {
      id: 6,
      category: 'enterprise',
      number: '06',
      title: 'SWISS AGRO PLATFORM',
      subtitle: 'AgriTech Platform',
      description: 'Piattaforma IoT per agricoltura di precisione con analisi predittive e automazione.',
      technologies: ['Python', 'TensorFlow', 'IoT', 'Azure'],
      results: [
        '+35% produttività',
        '-25% costi',
        'AI-powered insights',
      ],
      year: '2024',
      client: 'Swiss Agriculture Co.',
      color: 'bg-swiss-red',
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  const stats = [
    { number: '150+', label: 'PROGETTI' },
    { number: '€50M+', label: 'VALORE GENERATO' },
    { number: '98%', label: 'SODDISFAZIONE' },
    { number: '24', label: 'PREMI VINTI' },
  ]

  return (
    <div className="bg-white pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20 bg-swiss-black text-white">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-1 bg-swiss-red" />
                <span className="text-sm tracking-[0.3em] text-swiss-gray-400 font-bold">
                  PORTFOLIO
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none">
                PROGETTI
                <br />
                <span className="text-swiss-red">CHE FANNO</span>
                <br />
                LA DIFFERENZA
              </h1>
              <p className="text-xl text-swiss-gray-400 leading-relaxed">
                Ogni progetto è un capolavoro di ingegneria software, design impeccabile 
                e attenzione maniacale ai dettagli.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="aspect-square border-2 border-swiss-gray-600 hover:border-swiss-red hover:bg-swiss-red flex flex-col items-center justify-center transition-all cursor-pointer group"
                >
                  <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-xs tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-32 z-40 bg-white border-b border-swiss-gray-300 py-6 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-8 py-3 font-bold transition-all ${
                  activeFilter === filter.id
                    ? 'bg-swiss-red text-white'
                    : 'bg-swiss-gray-100 hover:bg-swiss-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="text-sm text-swiss-gray-500 font-mono">
            {filteredProjects.length} PROGETTI
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto space-y-32">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-12 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Visual Side */}
              <div
                className={`lg:col-span-7 ${
                  index % 2 === 1 ? 'lg:col-start-6' : ''
                }`}
              >
                <div className="relative group cursor-pointer">
                  {/* Main Visual Block */}
                  <div className={`${project.color} text-white p-16 aspect-video flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full" style={{
                        backgroundImage: `
                          linear-gradient(to right, white 1px, transparent 1px),
                          linear-gradient(to bottom, white 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                      }} />
                    </div>

                    {/* Project Number */}
                    <span className="text-9xl font-mono font-bold opacity-20 group-hover:opacity-40 transition-opacity">
                      {project.number}
                    </span>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-swiss-red opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center">
                      <span className="text-2xl font-bold">VISUALIZZA DETTAGLI →</span>
                    </div>
                  </div>

                  {/* Corner Label */}
                  <div className="absolute -bottom-6 -right-6 bg-swiss-red text-white px-8 py-4 font-bold">
                    {project.year}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              >
                <div className="space-y-6">
                  {/* Category Badge */}
                  <div className="inline-block px-4 py-2 bg-swiss-gray-100 text-xs tracking-[0.3em] font-bold">
                    {project.category.toUpperCase()}
                  </div>

                  {/* Title */}
                  <div>
                    <h2 className="text-5xl font-bold mb-2 leading-none">
                      {project.title}
                    </h2>
                    <p className="text-xl text-swiss-red font-bold">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-swiss-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xs tracking-[0.3em] text-swiss-gray-500 mb-3 font-bold">
                      TECNOLOGIE
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 border border-swiss-gray-300 text-sm font-mono hover:border-swiss-red hover:bg-swiss-red hover:text-white transition-all cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="border-t border-swiss-gray-300 pt-6">
                    <h3 className="text-xs tracking-[0.3em] text-swiss-gray-500 mb-4 font-bold">
                      RISULTATI
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      {project.results.map((result, i) => (
                        <div
                          key={i}
                          className="text-center p-4 bg-swiss-gray-100 hover:bg-swiss-red hover:text-white transition-colors cursor-pointer group"
                        >
                          <div className="text-2xl font-bold mb-1 group-hover:scale-110 transition-transform">
                            {result.split(' ')[0]}
                          </div>
                          <div className="text-xs">
                            {result.split(' ').slice(1).join(' ')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Client */}
                  <div className="flex items-center justify-between pt-6 border-t border-swiss-gray-300">
                    <div>
                      <div className="text-xs text-swiss-gray-500 mb-1">CLIENTE</div>
                      <div className="font-bold">{project.client}</div>
                    </div>
                    <button className="px-8 py-3 bg-swiss-black text-white hover:bg-swiss-red transition-colors font-bold">
                      CASE STUDY →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Showcase */}
      <section className="py-20 px-6 md:px-12 bg-swiss-gray-100">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              IL NOSTRO APPROCCIO
              <br />
              <span className="text-swiss-red">AI PROGETTI</span>
            </h2>
            <p className="text-xl text-swiss-gray-600 max-w-3xl mx-auto">
              Metodologia strutturata che garantisce risultati eccezionali ogni volta
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-1 bg-swiss-black">
            {[
              {
                phase: 'DISCOVERY',
                items: ['Workshop strategico', 'Analisi competitor', 'User research', 'Definizione obiettivi'],
              },
              {
                phase: 'DESIGN & DEV',
                items: ['UX/UI Design', 'Prototipazione', 'Sviluppo agile', 'Quality assurance'],
              },
              {
                phase: 'LAUNCH & GROW',
                items: ['Deployment', 'Monitoraggio', 'Ottimizzazione', 'Supporto continuo'],
              },
            ].map((stage, index) => (
              <div key={index} className="bg-white p-12 hover:bg-swiss-red hover:text-white group transition-all duration-500">
                <div className="text-6xl font-mono font-bold mb-6 text-swiss-gray-200 group-hover:text-white/50 transition-colors">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-2xl font-bold mb-8">{stage.phase}</h3>
                <ul className="space-y-3">
                  {stage.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-swiss-red group-hover:text-white mr-3">→</span>
                      <span className="text-swiss-gray-600 group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              COSA DICONO
              <br />
              <span className="text-swiss-red">I NOSTRI CLIENTI</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                quote: 'Professionalità svizzera al massimo livello. Hanno trasformato completamente la nostra presenza digitale.',
                author: 'Marco Bernasconi',
                role: 'CEO, Swiss Luxury Bank',
                rating: 5,
              },
              {
                quote: 'Team eccezionale, tecnologie all\'avanguardia e risultati oltre le aspettative. Consigliatissimi!',
                author: 'Laura Müller',
                role: 'CTO, SwissPharma International',
                rating: 5,
              },
              {
                quote: 'Partner ideale per progetti complessi. Competenza tecnica e attenzione ai dettagli straordinarie.',
                author: 'Alessandro Rossi',
                role: 'Dir. Digitale, Swiss Timepieces',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-swiss-black text-white p-10 hover:bg-swiss-red transition-colors duration-500 cursor-pointer group"
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
                <p className="text-lg mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-swiss-gray-600 pt-6">
                  <div className="font-bold mb-1">{testimonial.author}</div>
                  <div className="text-sm text-swiss-gray-400 group-hover:text-white transition-colors">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12 bg-swiss-red text-white relative overflow-hidden">
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
            CREA IL TUO
            <br />
            PROSSIMO PROGETTO
            <br />
            DI SUCCESSO
          </h2>
          <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Unisciti alle aziende leader che si affidano a noi per le loro soluzioni digitali
          </p>
          <Link
            href="/contatti"
            className="inline-block px-16 py-6 bg-white text-swiss-red font-bold text-xl hover:bg-swiss-black hover:text-white transition-colors"
          >
            INIZIA ORA →
          </Link>
        </div>
      </section>
    </div>
  )
}

