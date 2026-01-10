'use client'

import { useState } from 'react'
import Link from 'next/link'
import { articles, Article } from './articles'

type CategoryFilter = 'all' | 'news' | 'tutorial' | 'servizi'

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all')
  
  const filteredArticles = activeFilter === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeFilter)
  
  const filters: { id: CategoryFilter; label: string; count: number }[] = [
    { id: 'all', label: 'TUTTI', count: articles.length },
    { id: 'news', label: 'NEWS', count: articles.filter(a => a.category === 'news').length },
    { id: 'tutorial', label: 'TUTORIAL', count: articles.filter(a => a.category === 'tutorial').length },
    { id: 'servizi', label: 'SERVIZI', count: articles.filter(a => a.category === 'servizi').length },
  ]

  const getCategoryColor = (category: Article['category']): string => {
    switch (category) {
      case 'news': return 'bg-swiss-black'
      case 'tutorial': return 'bg-swiss-red'
      case 'servizi': return 'bg-swiss-gray-600'
    }
  }

  const getCategoryLabel = (category: Article['category']): string => {
    switch (category) {
      case 'news': return 'NEWS'
      case 'tutorial': return 'TUTORIAL'
      case 'servizi': return 'SERVIZI'
    }
  }

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
                  INSIGHTS & RISORSE
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none">
                BLOG
                <span className="text-swiss-red">.</span>
              </h1>
              <p className="text-xl text-swiss-gray-400 leading-relaxed">
                Approfondimenti sul mondo tech, guide pratiche e strategie 
                per la trasformazione digitale del tuo business.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: articles.length.toString(), label: 'ARTICOLI', desc: 'PUBBLICATI' },
                { value: '10', label: 'NEWS', desc: 'TECH' },
                { value: '10', label: 'TUTORIAL', desc: 'PRATICI' },
                { value: '20', label: 'GUIDE', desc: 'BUSINESS' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="aspect-square border-2 border-swiss-gray-600 hover:border-swiss-red hover:bg-swiss-red group cursor-pointer transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
                    {item.value}
                  </div>
                  <div className="text-xs tracking-wider opacity-70">
                    {item.label}
                  </div>
                  <div className="text-xs tracking-wider opacity-50">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 md:px-12 border-b border-swiss-gray-300">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter, index) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-8 py-4 font-bold transition-all flex items-center ${
                  activeFilter === filter.id
                    ? 'bg-swiss-red text-white'
                    : 'bg-swiss-gray-100 hover:bg-swiss-gray-200'
                }`}
              >
                <span className="text-xs font-mono mr-3 opacity-60">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                {filter.label}
                <span className="ml-2 text-xs opacity-60">({filter.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-swiss-black">
            {filteredArticles.map((article, index) => (
              <Link 
                key={article.slug} 
                href={`/blog/${article.slug}`}
                className="bg-white p-8 hover:bg-swiss-red hover:text-white group transition-all duration-500 cursor-pointer"
              >
                {/* Category & Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 text-xs tracking-wider text-white ${getCategoryColor(article.category)}`}>
                    {getCategoryLabel(article.category)}
                  </span>
                  <span className="text-4xl font-mono text-swiss-gray-300 group-hover:text-white/30 transition-colors">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>
                
                {/* Title */}
                <h2 className="text-xl font-bold mb-4 leading-tight group-hover:text-white transition-colors">
                  {article.title}
                </h2>
                
                {/* Excerpt */}
                <p className="text-swiss-gray-600 group-hover:text-white/80 mb-6 line-clamp-3 transition-colors">
                  {article.excerpt}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-swiss-gray-200 group-hover:border-white/30 transition-colors">
                  <span className="text-xs tracking-wider text-swiss-gray-500 group-hover:text-white/60 transition-colors">
                    {new Date(article.date).toLocaleDateString('it-IT', { 
                      day: '2-digit', 
                      month: 'short', 
                      year: 'numeric' 
                    }).toUpperCase()}
                  </span>
                  <span className="text-xs tracking-wider text-swiss-gray-500 group-hover:text-white/60 transition-colors">
                    {article.readTime} MIN
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Empty State */}
      {filteredArticles.length === 0 && (
        <div className="text-center py-20">
          <p className="text-swiss-gray-500">Nessun articolo trovato per questa categoria.</p>
        </div>
      )}

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

        <div className="max-w-[1800px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                HAI UN PROGETTO
                <br />
                IN MENTE?
              </h2>
              <p className="text-2xl mb-8 opacity-90">
                Parliamone insieme e troviamo la soluzione perfetta per le tue esigenze
              </p>
              <Link
                href="/contatti"
                className="inline-block px-12 py-6 bg-white text-swiss-red font-bold text-lg hover:bg-swiss-black hover:text-white transition-colors"
              >
                CONTATTACI ORA
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'CONSULENZA', desc: 'GRATUITA' },
                { label: 'PREVENTIVO', desc: 'IN 24H' },
                { label: 'QUALITÀ', desc: '100%' },
                { label: 'SUPPORTO', desc: '24/7' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="aspect-square border-2 border-white/30 hover:border-white hover:bg-white hover:text-swiss-red flex flex-col items-center justify-center text-center p-6 transition-all group cursor-pointer"
                >
                  <div className="text-4xl font-bold mb-2">{item.desc}</div>
                  <div className="text-sm tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
