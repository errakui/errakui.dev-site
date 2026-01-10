import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles, getArticleBySlug, getRelatedArticles, Article } from '../articles'

// Generate static params for all articles
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

// Generate metadata for each article
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  
  if (!article) {
    return {
      title: 'Articolo non trovato',
    }
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
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
  }
}

function getCategoryColor(category: Article['category']): string {
  switch (category) {
    case 'news': return 'bg-blue-500'
    case 'tutorial': return 'bg-green-500'
    case 'servizi': return 'bg-red-500'
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

  // Convert markdown-like content to HTML-safe content
  const formattedContent = article.content
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-10 mb-4">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-8 mb-3">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 text-sm">$1</code>')
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-900 text-gray-100 p-4 overflow-x-auto text-sm my-6 rounded"><code>$2</code></pre>')
    .replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="list-disc space-y-1 my-4">$&</ul>')
    .replace(/^❌ (.*$)/gm, '<p class="flex items-start gap-2 my-1"><span>❌</span><span>$1</span></p>')
    .replace(/^✅ (.*$)/gm, '<p class="flex items-start gap-2 my-1"><span>✅</span><span>$1</span></p>')
    .replace(/^🚨 (.*$)/gm, '<p class="flex items-start gap-2 my-1 text-red-600"><span>🚨</span><span>$1</span></p>')
    .replace(/\n\n/g, '</p><p class="my-4">')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim())
      if (cells.some(c => c.includes('---'))) return ''
      return `<tr>${cells.map(c => `<td class="border border-gray-200 px-3 py-2">${c.trim()}</td>`).join('')}</tr>`
    })
    .replace(/---+/g, '<hr class="my-8 border-gray-200" />')

  // Structured Data for Article
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: 'ERRAKUI.DEV',
      url: 'https://errakui.dev',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ERRAKUI.DEV',
      logo: {
        '@type': 'ImageObject',
        url: 'https://errakui.dev/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://errakui.dev/blog/${article.slug}`,
    },
    keywords: article.tags.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-white text-black pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-xs tracking-wider text-gray-500">
              <li>
                <Link href="/" className="hover:text-black">HOME</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-black">BLOG</Link>
              </li>
              <li>/</li>
              <li className="text-black truncate max-w-[200px]">
                {article.title.toUpperCase()}
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className={`px-3 py-1 text-xs tracking-wider text-white ${getCategoryColor(article.category)}`}>
                {getCategoryLabel(article.category)}
              </span>
              <span className="text-xs text-gray-500">
                {new Date(article.date).toLocaleDateString('it-IT', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
              <span className="text-xs text-gray-500">
                {article.readTime} min lettura
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              {article.title}<span className="text-red-500">.</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {article.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-xs text-gray-600">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-black prose-headings:text-black
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-red-500 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-black
              prose-code:text-red-500 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:text-gray-100
              prose-li:text-gray-700
              prose-table:border-collapse prose-th:bg-gray-100
            "
            dangerouslySetInnerHTML={{ __html: formattedContent }}
          />

          {/* Author Box */}
          <div className="mt-16 p-8 bg-gray-50 border border-gray-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-red-500 flex items-center justify-center text-white font-black text-2xl shrink-0">
                E
              </div>
              <div>
                <p className="font-bold text-lg">ERRAKUI.DEV</p>
                <p className="text-sm text-gray-500 mb-3">Software House — Lugano, Svizzera</p>
                <p className="text-sm text-gray-600">
                  Sviluppiamo soluzioni digitali per aziende che vogliono crescere. 
                  Siti web, app mobile, software gestionali.
                </p>
              </div>
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-xs tracking-wider text-gray-500">CONDIVIDI:</span>
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://errakui.dev/blog/${article.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors"
            >
              Twitter
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://errakui.dev/blog/${article.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 mt-20">
            <h2 className="text-2xl font-black mb-8">
              ARTICOLI CORRELATI<span className="text-red-500">.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map(related => (
                <Link 
                  key={related.slug} 
                  href={`/blog/${related.slug}`}
                  className="group block border border-gray-200 hover:border-black transition-all"
                >
                  <div className="p-6">
                    <span className={`inline-block px-2 py-1 text-[10px] tracking-wider text-white mb-4 ${getCategoryColor(related.category)}`}>
                      {getCategoryLabel(related.category)}
                    </span>
                    <h3 className="font-bold mb-2 group-hover:text-red-500 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {related.excerpt}
                    </p>
                    <p className="text-xs text-gray-400 mt-4">
                      {related.readTime} min lettura
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 mt-20">
          <div className="p-12 bg-black text-white text-center">
            <h2 className="text-3xl font-black mb-4">
              VUOI APPROFONDIRE?<span className="text-red-500">.</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Parliamo del tuo progetto. Consulenza gratuita, zero impegno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contatti"
                className="bg-red-500 text-white px-8 py-4 text-sm tracking-wider hover:bg-red-600 transition-colors"
              >
                CONTATTACI
              </Link>
              <Link 
                href="/blog"
                className="border border-white text-white px-8 py-4 text-sm tracking-wider hover:bg-white hover:text-black transition-colors"
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
