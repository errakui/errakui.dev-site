import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles, getArticleBySlug, getRelatedArticles, Article } from '../articles'

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  
  if (!article) {
    return { title: 'Articolo non trovato' }
  }

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      tags: article.tags,
    },
  }
}

function getCategoryColor(category: Article['category']): string {
  switch (category) {
    case 'news': return 'bg-swiss-black'
    case 'tutorial': return 'bg-swiss-red'
    case 'servizi': return 'bg-swiss-gray-600'
  }
}

function getCategoryLabel(category: Article['category']): string {
  switch (category) {
    case 'news': return 'NEWS'
    case 'tutorial': return 'TUTORIAL'
    case 'servizi': return 'SERVIZI'
  }
}

export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  
  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(slug, 3)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: 'ERRAKUI.DEV',
      url: 'https://errakui.dev',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ERRAKUI.DEV',
    },
    mainEntityOfPage: `https://errakui.dev/blog/${article.slug}`,
    keywords: article.tags.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="bg-white pt-32">
        {/* Hero */}
        <section className="px-6 md:px-12 py-16 bg-swiss-black text-white">
          <div className="max-w-[1200px] mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-xs tracking-wider text-swiss-gray-400">
                <li><Link href="/" className="hover:text-white">HOME</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-white">BLOG</Link></li>
                <li>/</li>
                <li className="text-swiss-red">{getCategoryLabel(article.category)}</li>
              </ol>
            </nav>

            {/* Meta */}
            <div className="flex items-center gap-4 mb-8">
              <span className={`px-4 py-2 text-xs tracking-wider text-white ${getCategoryColor(article.category)}`}>
                {getCategoryLabel(article.category)}
              </span>
              <span className="text-swiss-gray-400 text-sm">
                {new Date(article.date).toLocaleDateString('it-IT', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
              <span className="text-swiss-gray-400 text-sm">
                {article.readTime} min di lettura
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              {article.title}
              <span className="text-swiss-red">.</span>
            </h1>
            
            {/* Excerpt */}
            <p className="text-xl text-swiss-gray-400 leading-relaxed max-w-3xl">
              {article.excerpt}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-[800px] mx-auto">
            <article 
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-swiss-black
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-swiss-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-swiss-red prose-a:no-underline hover:prose-a:underline
                prose-strong:text-swiss-black prose-strong:font-bold
                prose-li:text-swiss-gray-700
                prose-blockquote:border-l-4 prose-blockquote:border-swiss-red prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-swiss-gray-600
              "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            <div className="mt-16 pt-8 border-t border-swiss-gray-200">
              <p className="text-xs tracking-wider text-swiss-gray-500 mb-4">ARGOMENTI</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-swiss-gray-100 text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author */}
            <div className="mt-12 p-8 bg-swiss-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-swiss-red flex items-center justify-center text-white font-black text-2xl shrink-0">
                  E
                </div>
                <div>
                  <p className="font-bold text-lg">ERRAKUI.DEV</p>
                  <p className="text-sm text-swiss-gray-500 mb-3">Software House — Lugano, Svizzera</p>
                  <p className="text-swiss-gray-600">
                    Sviluppiamo soluzioni digitali per aziende che vogliono crescere. 
                    Qualità svizzera, tecnologie moderne.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-20 px-6 md:px-12 bg-swiss-gray-100">
            <div className="max-w-[1800px] mx-auto">
              <div className="flex items-center space-x-4 mb-12">
                <div className="w-16 h-1 bg-swiss-red" />
                <span className="text-sm tracking-[0.3em] text-swiss-gray-500 font-bold">
                  CONTINUA A LEGGERE
                </span>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((related, index) => (
                  <Link 
                    key={related.slug} 
                    href={`/blog/${related.slug}`}
                    className="group bg-white p-8 border-l-4 border-transparent hover:border-swiss-red transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2 py-1 text-[10px] tracking-wider text-white ${getCategoryColor(related.category)}`}>
                        {getCategoryLabel(related.category)}
                      </span>
                      <span className="text-3xl font-mono text-swiss-gray-300">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-3 group-hover:text-swiss-red transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-swiss-gray-600 line-clamp-2 mb-4">
                      {related.excerpt}
                    </p>
                    <span className="text-xs tracking-wider text-swiss-gray-400">
                      {related.readTime} MIN →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 px-6 md:px-12 bg-swiss-black text-white">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              VUOI APPROFONDIRE<span className="text-swiss-red">?</span>
            </h2>
            <p className="text-xl text-swiss-gray-400 mb-8 max-w-2xl mx-auto">
              Parliamo del tuo progetto. Consulenza gratuita, zero impegno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contatti"
                className="px-12 py-4 bg-swiss-red hover:bg-white hover:text-swiss-red font-bold transition-colors"
              >
                CONTATTACI
              </Link>
              <Link 
                href="/blog"
                className="px-12 py-4 border-2 border-swiss-gray-600 hover:border-white font-bold transition-colors"
              >
                ALTRI ARTICOLI
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
