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

  const sectors = [
    {
      id: 1,
      name: 'FINTECH & BANKING',
      category: 'enterprise',
      projects: ['Online Banking', 'Payment Gateway', 'Trading Platform', 'Crypto Wallet', 'Credit Scoring'],
      count: 23,
    },
    {
      id: 2,
      name: 'E-COMMERCE & RETAIL',
      category: 'web',
      projects: ['Shop Online', 'Marketplace', 'POS System', 'Inventory Management', 'Loyalty App'],
      count: 35,
    },
    {
      id: 3,
      name: 'HEALTHCARE & PHARMA',
      category: 'enterprise',
      projects: ['Gestionale Cliniche', 'Telemedicina', 'ERP Farmaceutico', 'App Pazienti', 'Lab Management'],
      count: 18,
    },
    {
      id: 4,
      name: 'RISTORAZIONE & FOOD',
      category: 'mobile',
      projects: ['App Delivery', 'Prenotazioni Online', 'Menu Digitale', 'Kitchen Display', 'Gestione Ordini'],
      count: 28,
    },
    {
      id: 5,
      name: 'FITNESS & WELLNESS',
      category: 'mobile',
      projects: ['App Fitness', 'Booking Palestre', 'Personal Training', 'Nutrition Tracker', 'Wearable Integration'],
      count: 15,
    },
    {
      id: 6,
      name: 'IMMOBILIARE',
      category: 'web',
      projects: ['Portali Immobiliari', 'Virtual Tour', 'CRM Agenzie', 'Property Management', 'Valutazioni AI'],
      count: 12,
    },
    {
      id: 7,
      name: 'TURISMO & HOSPITALITY',
      category: 'web',
      projects: ['Booking Engine', 'App Hotel', 'Tour Operator', 'Concierge Digitale', 'Revenue Management'],
      count: 20,
    },
    {
      id: 8,
      name: 'AUTOMOTIVE & MOBILITY',
      category: 'mobile',
      projects: ['Fleet Management', 'Car Sharing', 'Concessionarie', 'Service Booking', 'Connected Car'],
      count: 14,
    },
  ]

  const filteredSectors = activeFilter === 'all' 
    ? sectors 
    : sectors.filter(s => s.category === activeFilter)

  const totalProjects = sectors.reduce((acc, s) => acc + s.count, 0)

  return (
    <div className="bg-white pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20 bg-swiss-black text-white">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-1 bg-swiss-red" />
            <span className="text-sm tracking-[0.3em] text-swiss-gray-400 font-bold">
              PORTFOLIO
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none">
            {totalProjects}+
            <br />
            <span className="text-swiss-red">PROGETTI</span>
            <br />
            COMPLETATI
          </h1>
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
            {filteredSectors.length} SETTORI
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-2 gap-1 bg-swiss-black">
            {filteredSectors.map((sector, index) => (
              <div
                key={sector.id}
                className="bg-white p-10 hover:bg-swiss-red hover:text-white group transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl font-mono font-bold text-swiss-gray-200 group-hover:text-white/30">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{sector.count}</div>
                    <div className="text-xs text-swiss-gray-500 group-hover:text-white/70">PROGETTI</div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-6">{sector.name}</h2>
                
                <div className="flex flex-wrap gap-2">
                  {sector.projects.map((project, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm border border-swiss-gray-300 group-hover:border-white/50 transition-colors"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-swiss-black text-white">
        <div className="max-w-[1800px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            HAI UN PROGETTO?
          </h2>
          <Link
            href="/contatti"
            className="inline-block px-12 py-5 bg-swiss-red text-white font-bold text-lg hover:bg-white hover:text-swiss-black transition-colors"
          >
            PARLIAMONE →
          </Link>
        </div>
      </section>
    </div>
  )
}
