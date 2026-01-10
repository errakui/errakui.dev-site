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

  const getCategoryColor = (category: Article['category']) => {
    switch (category) {
      case 'news': return 'bg-blue-500'
      case 'tutorial': return 'bg-green-500'
      case 'servizi': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getCategoryLabel = (category: Article['category']) => {
    switch (category) {
      case 'news': return 'NEWS'
      case 'tutorial': return 'TUTORIAL'
      case 'servizi': return 'SERVIZI'
      default: return category.toUpperCase()
    }
  }

  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] text-gray-500 mb-4">
            BLOG / INSIGHTS
          </p>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            BLOG<span className="text-red-500">.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            News tech, tutorial pratici e guide per digitalizzare il tuo business. 
            Articoli veloci da leggere, massimo valore.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-gray-200 pb-6">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 text-xs tracking-wider transition-all ${
                activeFilter === filter.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 border border-gray-200">
            <p className="text-4xl font-black">{articles.length}</p>
            <p className="text-xs tracking-wider text-gray-500 mt-1">ARTICOLI</p>
          </div>
          <div className="text-center p-6 border border-gray-200">
            <p className="text-4xl font-black text-blue-500">10</p>
            <p className="text-xs tracking-wider text-gray-500 mt-1">NEWS</p>
          </div>
          <div className="text-center p-6 border border-gray-200">
            <p className="text-4xl font-black text-green-500">10</p>
            <p className="text-xs tracking-wider text-gray-500 mt-1">TUTORIAL</p>
          </div>
          <div className="text-center p-6 border border-gray-200">
            <p className="text-4xl font-black text-red-500">20</p>
            <p className="text-xs tracking-wider text-gray-500 mt-1">GUIDE SERVIZI</p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <Link 
              key={article.slug} 
              href={`/blog/${article.slug}`}
              className="group block"
            >
              <article className="border border-gray-200 hover:border-black transition-all h-full">
                {/* Category & Date Bar */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <span className={`px-2 py-1 text-[10px] tracking-wider text-white ${getCategoryColor(article.category)}`}>
                    {getCategoryLabel(article.category)}
                  </span>
                  <span className="text-[10px] text-gray-400 tracking-wider">
                    {new Date(article.date).toLocaleDateString('it-IT', { 
                      day: '2-digit', 
                      month: 'short', 
                      year: 'numeric' 
                    }).toUpperCase()}
                  </span>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h2 className="text-lg font-bold mb-3 group-hover:text-red-500 transition-colors leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-1 bg-gray-100 text-gray-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Read time */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-[10px] tracking-wider text-gray-400">
                      {article.readTime} MIN LETTURA
                    </span>
                    <span className="text-xs font-bold group-hover:translate-x-1 transition-transform">
                      LEGGI →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">Nessun articolo trovato per questa categoria.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 p-12 bg-black text-white text-center">
          <h2 className="text-3xl font-black mb-4">
            HAI UN PROGETTO?<span className="text-red-500">.</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Trasformiamo le tue idee in soluzioni digitali concrete. 
            Contattaci per una consulenza gratuita.
          </p>
          <Link 
            href="/contatti"
            className="inline-block bg-red-500 text-white px-8 py-4 text-sm tracking-wider hover:bg-red-600 transition-colors"
          >
            CONTATTACI
          </Link>
        </div>
      </div>
    </div>
  )
}
