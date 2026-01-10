import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Blog | ERRAKUI.DEV',
    template: '%s | Blog ERRAKUI.DEV',
  },
  description: 'News tech, tutorial pratici e guide per digitalizzare il tuo business. Articoli veloci da leggere su sviluppo web, app mobile e trasformazione digitale.',
  keywords: [
    'blog tech', 'tutorial sviluppo web', 'news tecnologia',
    'guida digitalizzazione', 'sviluppo software tutorial',
    'web development blog', 'app mobile guide',
    'SEO tutorial', 'Next.js guide', 'React tutorial',
    'blog Lugano', 'tech news Svizzera',
  ],
  openGraph: {
    title: 'Blog | ERRAKUI.DEV',
    description: 'News tech, tutorial pratici e guide per digitalizzare il tuo business.',
    type: 'website',
    url: 'https://errakui.dev/blog',
  },
  alternates: {
    canonical: 'https://errakui.dev/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
