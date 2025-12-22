import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import SwissGrid from '@/components/SwissGrid'
import WhatsAppButton from '@/components/WhatsAppButton'
import CookieBanner from '@/components/CookieBanner'
import { CookieConsentProvider } from '@/context/CookieConsentContext'

export const metadata: Metadata = {
  metadataBase: new URL('https://errakui.dev'),
  title: {
    default: 'ERRAKUI.DEV — Software House Lugano | Sviluppo Software Svizzera',
    template: '%s | ERRAKUI.DEV — Software House Lugano'
  },
  description: 'Software house a Lugano, Svizzera. Sviluppo siti web, app mobile, software gestionali e soluzioni personalizzate. Qualità svizzera, P.IVA CHE-478.305.574.',
  keywords: [
    // ========== LUGANO E QUARTIERI (MASSIMA PRIORITÀ) ==========
    'software house Lugano', 'sviluppo software Lugano', 'agenzia web Lugano',
    'sviluppatore Lugano', 'programmatore Lugano', 'app mobile Lugano',
    'siti web Lugano', 'creazione siti Lugano', 'web developer Lugano',
    'sviluppo app Lugano', 'software gestionale Lugano', 'e-commerce Lugano',
    'consulenza IT Lugano', 'web agency Lugano', 'digital agency Lugano',
    
    // Quartieri Lugano
    'software house Paradiso', 'sviluppo software Paradiso Lugano',
    'software house Castagnola', 'sviluppatore Castagnola',
    'software house Breganzona', 'agenzia web Breganzona',
    'software house Pregassona', 'sviluppo app Pregassona',
    'software house Viganello', 'programmatore Viganello',
    'software house Molino Nuovo', 'web developer Molino Nuovo',
    'software house Besso', 'sviluppo software Besso',
    'software house Loreto', 'agenzia web Loreto',
    'software house Davesco', 'sviluppatore Davesco',
    'software house Pazzallo', 'app mobile Pazzallo',
    
    // ========== BELLINZONA E ZONA ==========
    'software house Bellinzona', 'sviluppo software Bellinzona',
    'agenzia web Bellinzona', 'sviluppatore Bellinzona',
    'app mobile Bellinzona', 'siti web Bellinzona',
    'programmatore Bellinzona', 'web agency Bellinzona',
    'software gestionale Bellinzona', 'e-commerce Bellinzona',
    'consulenza IT Bellinzona', 'digital agency Bellinzona',
    
    // ========== LOCARNO E ASCONA ==========
    'software house Locarno', 'sviluppo software Locarno',
    'agenzia web Locarno', 'sviluppatore Locarno',
    'app mobile Locarno', 'siti web Locarno',
    'programmatore Locarno', 'web developer Locarno',
    'software house Ascona', 'sviluppo software Ascona',
    'agenzia web Ascona', 'sviluppatore Ascona',
    'software house Muralto', 'web agency Muralto',
    'software house Minusio', 'sviluppatore Minusio',
    
    // ========== MENDRISIO E MENDRISIOTTO ==========
    'software house Mendrisio', 'sviluppo software Mendrisio',
    'agenzia web Mendrisio', 'sviluppatore Mendrisio',
    'app mobile Mendrisio', 'siti web Mendrisio',
    'programmatore Mendrisio', 'web agency Mendrisio',
    'software house Chiasso', 'sviluppo software Chiasso',
    'agenzia web Chiasso', 'sviluppatore Chiasso',
    'software house Stabio', 'web developer Stabio',
    'software house Balerna', 'sviluppatore Balerna',
    'software house Novazzano', 'agenzia web Novazzano',
    
    // ========== ALTRE CITTÀ TICINO ==========
    'software house Biasca', 'sviluppo software Biasca',
    'software house Airolo', 'sviluppatore Airolo',
    'software house Giubiasco', 'agenzia web Giubiasco',
    'software house Cadenazzo', 'web developer Cadenazzo',
    'software house Lamone', 'sviluppatore Lamone',
    'software house Manno', 'sviluppo software Manno',
    'software house Agno', 'agenzia web Agno',
    'software house Massagno', 'sviluppatore Massagno',
    'software house Grancia', 'app mobile Grancia',
    'software house Magadino', 'sviluppo software Magadino',
    'software house Gordola', 'agenzia web Gordola',
    'software house Losone', 'sviluppatore Losone',
    'software house Tenero', 'web agency Tenero',
    'software house Brissago', 'sviluppo software Brissago',
    'software house Bissone', 'sviluppatore Bissone',
    'software house Melide', 'agenzia web Melide',
    'software house Morcote', 'web developer Morcote',
    'software house Rovio', 'sviluppatore Rovio',
    'software house Arogno', 'app mobile Arogno',
    'software house Caslano', 'sviluppo software Caslano',
    'software house Ponte Tresa', 'agenzia web Ponte Tresa',
    'software house Tesserete', 'sviluppatore Tesserete',
    'software house Canobbio', 'web agency Canobbio',
    'software house Comano', 'sviluppo software Comano',
    'software house Gravesano', 'sviluppatore Gravesano',
    'software house Torricella', 'agenzia web Torricella',
    
    // ========== GENERALE TICINO ==========
    'software house Ticino', 'sviluppo software Ticino',
    'agenzia web Ticino', 'sviluppatore Ticino',
    'programmatore Ticino', 'app mobile Ticino',
    'siti web Ticino', 'web developer Ticino',
    'software gestionale Ticino', 'e-commerce Ticino',
    'web agency Ticino', 'digital agency Ticino',
    'consulenza IT Ticino', 'trasformazione digitale Ticino',
    
    // ========== SVIZZERA ITALIANA ==========
    'software house Svizzera italiana', 'sviluppo software Svizzera italiana',
    'agenzia web Svizzera italiana', 'sviluppatore Svizzera italiana',
    'software house Canton Ticino', 'sviluppo app Canton Ticino',
    
    // ========== SERVIZI SPECIFICI PER OGNI CITTÀ ==========
    // Lugano servizi
    'creazione siti web Lugano', 'sviluppo e-commerce Lugano',
    'realizzazione app Lugano', 'software su misura Lugano',
    'sviluppo ERP Lugano', 'sviluppo CRM Lugano',
    'web design Lugano', 'UX UI design Lugano',
    'app iOS Lugano', 'app Android Lugano',
    'React developer Lugano', 'Next.js developer Lugano',
    'Flutter developer Lugano', 'Node.js developer Lugano',
    
    // Bellinzona servizi
    'creazione siti web Bellinzona', 'sviluppo e-commerce Bellinzona',
    'realizzazione app Bellinzona', 'software su misura Bellinzona',
    'web design Bellinzona', 'app mobile Bellinzona',
    
    // Locarno servizi
    'creazione siti web Locarno', 'sviluppo e-commerce Locarno',
    'realizzazione app Locarno', 'software su misura Locarno',
    'web design Locarno', 'app mobile Locarno',
    
    // Mendrisio servizi
    'creazione siti web Mendrisio', 'sviluppo e-commerce Mendrisio',
    'realizzazione app Mendrisio', 'software su misura Mendrisio',
    
    // Chiasso servizi
    'creazione siti web Chiasso', 'sviluppo e-commerce Chiasso',
    'realizzazione app Chiasso', 'software gestionale Chiasso',
    
    // ========== LONG-TAIL KEYWORDS LOCALI ==========
    'miglior software house Lugano', 'preventivo sito web Lugano',
    'quanto costa app mobile Lugano', 'sviluppatore freelance Lugano',
    'agenzia sviluppo software Lugano', 'società informatica Lugano',
    'miglior web agency Ticino', 'preventivo e-commerce Ticino',
    'quanto costa sito web Lugano', 'costo app mobile Ticino',
    'sviluppo software personalizzato Lugano', 'software aziendale Ticino',
    'miglior programmatore Lugano', 'esperto sviluppo app Lugano',
    'agenzia digitale Lugano', 'consulente IT Lugano',
    
    // ========== TECNOLOGIE + LOCALITÀ ==========
    'Next.js Lugano', 'React Lugano', 'Node.js Lugano',
    'Flutter Lugano', 'Swift Lugano', 'Kotlin Lugano',
    'TypeScript Lugano', 'JavaScript Lugano', 'Python Lugano',
    'PHP Lugano', 'Laravel Lugano', 'WordPress Lugano',
    'Shopify Lugano', 'WooCommerce Lugano', 'Magento Lugano',
    
    // ========== SETTORI + LOCALITÀ ==========
    'sviluppo software medicale Lugano', 'software finanziario Ticino',
    'software turistico Lugano', 'software hotel Ticino',
    'software ristoranti Lugano', 'software retail Ticino',
    'software immobiliare Lugano', 'software logistica Ticino',
    
    // ========== SVIZZERA GENERALE ==========
    'software house Svizzera', 'sviluppo software Svizzera',
    'Swiss software house', 'Swiss software development',
    'software house Schweiz', 'softwareentwicklung Schweiz',
    'agenzia web Svizzera', 'web agency Switzerland',
    'app development Switzerland', 'mobile app Schweiz',
    
    // ========== ZURIGO ==========
    'software house Zürich', 'software house Zurigo',
    'sviluppo software Zürich', 'sviluppo software Zurigo',
    'agenzia web Zürich', 'web agency Zürich',
    'sviluppatore Zürich', 'programmatore Zurigo',
    'app mobile Zürich', 'siti web Zürich',
    'software development Zürich', 'web developer Zürich',
    'software house Winterthur', 'sviluppo software Winterthur',
    
    // ========== BERNA ==========
    'software house Bern', 'software house Berna',
    'sviluppo software Bern', 'sviluppo software Berna',
    'agenzia web Bern', 'web agency Bern',
    'sviluppatore Bern', 'programmatore Berna',
    'app mobile Bern', 'siti web Bern',
    'software development Bern', 'web developer Bern',
    'software house Biel', 'software house Bienne',
    'software house Thun', 'sviluppo software Thun',
    
    // ========== GINEVRA ==========
    'software house Genève', 'software house Ginevra',
    'sviluppo software Genève', 'sviluppo software Ginevra',
    'agenzia web Genève', 'web agency Genève',
    'sviluppatore Genève', 'programmatore Ginevra',
    'app mobile Genève', 'siti web Genève',
    'software development Genève', 'web developer Genève',
    
    // ========== BASILEA ==========
    'software house Basel', 'software house Basilea',
    'sviluppo software Basel', 'sviluppo software Basilea',
    'agenzia web Basel', 'web agency Basel',
    'sviluppatore Basel', 'programmatore Basilea',
    'app mobile Basel', 'siti web Basel',
    'software development Basel', 'web developer Basel',
    
    // ========== LOSANNA ==========
    'software house Lausanne', 'software house Losanna',
    'sviluppo software Lausanne', 'sviluppo software Losanna',
    'agenzia web Lausanne', 'web agency Lausanne',
    'sviluppatore Lausanne', 'programmatore Losanna',
    'app mobile Lausanne', 'siti web Lausanne',
    'software development Lausanne', 'web developer Lausanne',
    'software house Vevey', 'sviluppo software Vevey',
    
    // ========== LUCERNA ==========
    'software house Luzern', 'software house Lucerna',
    'sviluppo software Luzern', 'sviluppo software Lucerna',
    'agenzia web Luzern', 'web agency Luzern',
    'sviluppatore Luzern', 'programmatore Lucerna',
    'app mobile Luzern', 'siti web Luzern',
    
    // ========== SAN GALLO ==========
    'software house St. Gallen', 'software house San Gallo',
    'sviluppo software St. Gallen', 'sviluppo software San Gallo',
    'agenzia web St. Gallen', 'web agency St. Gallen',
    'sviluppatore St. Gallen', 'programmatore San Gallo',
    
    // ========== ALTRE CITTÀ SVIZZERE ==========
    'software house Zug', 'software house Zugo',
    'software house Fribourg', 'software house Friburgo',
    'software house Schaffhausen',
    'software house Chur', 'software house Coira',
    'software house Neuchâtel',
    'software house La Chaux-de-Fonds',
    'software house Köniz',
    
    // ========== QUALITÀ E DIFFERENZIATORI ==========
    'software house premium Lugano', 'sviluppo software professionale Ticino',
    'software house affidabile Lugano', 'agenzia web certificata Ticino',
    'software house swiss quality', 'sviluppo software qualità svizzera',
    'software house esperienza Lugano', 'web agency top Ticino',
    
    // ========== SERVIZI BUSINESS ==========
    'trasformazione digitale Lugano', 'consulenza digitale Ticino',
    'digitalizzazione aziende Lugano', 'innovazione digitale Ticino',
    'strategia digitale Lugano', 'consulenza IT Ticino',
    'outsourcing IT Lugano', 'team development Ticino',
    
    // ========== INDUSTRIE SPECIFICHE ==========
    'software banche Lugano', 'software assicurazioni Ticino',
    'software commercio Lugano', 'software industria Ticino',
    'software healthcare Lugano', 'software education Ticino',
    'software fintech Lugano', 'software startup Ticino',
    
    // ========== EXTRA LUNGO RAGGIO ==========
    'dove sviluppare sito web Lugano', 'chi sviluppa app Ticino',
    'cerco sviluppatore Lugano', 'cerco programmatore Ticino',
    'assumere sviluppatore Lugano', 'collaborazione IT Ticino',
    'partner tecnologico Lugano', 'fornitore software Ticino',
  ],
  authors: [{ name: 'ERRAKUI.DEV', url: 'https://errakui.dev' }],
  creator: 'ERRAKUI.DEV',
  publisher: 'ERRAKUI.DEV',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'it_CH',
    url: 'https://errakui.dev',
    siteName: 'ERRAKUI.DEV',
    title: 'Software House a Lugano | Sviluppo Software Premium',
    description: 'Software house svizzera a Lugano. Sviluppo siti web, app mobile e software gestionali di alta qualità. P.IVA CHE-478.305.574.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ERRAKUI.DEV - Software House Lugano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERRAKUI.DEV — Software House Lugano',
    description: 'Software house svizzera specializzata in soluzioni digitali premium. Lugano, Ticino.',
    images: ['/og-image.jpg'],
    creator: '@errakuidev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://errakui.dev',
    languages: {
      'it-CH': 'https://errakui.dev',
      'de-CH': 'https://errakui.dev/de',
      'en': 'https://errakui.dev/en',
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // Aggiungi dopo la registrazione su Google Search Console
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Structured Data - Organization & LocalBusiness
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://errakui.dev/#organization',
    name: 'ERRAKUI.DEV',
    alternateName: 'Errakui Software House',
    description: 'Software house a Lugano specializzata in sviluppo siti web, app mobile, software gestionali e soluzioni personalizzate',
    url: 'https://errakui.dev',
    telephone: '+41772186971',
    email: 'info@errakui.dev',
    taxID: 'CHE-478.305.574',
    vatID: 'CHE-478.305.574',
    priceRange: 'CHF 5000 - CHF 100000',
    image: 'https://errakui.dev/logo.png',
    logo: {
      '@type': 'ImageObject',
      url: 'https://errakui.dev/logo.png',
      width: 512,
      height: 512,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lugano',
      addressRegion: 'TI',
      addressCountry: 'CH',
      postalCode: '6900',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '46.0037',
      longitude: '8.9511',
    },
    areaServed: [
      // Lugano e quartieri
      { '@type': 'City', name: 'Lugano' },
      { '@type': 'City', name: 'Paradiso' },
      { '@type': 'City', name: 'Castagnola' },
      { '@type': 'City', name: 'Breganzona' },
      { '@type': 'City', name: 'Pregassona' },
      { '@type': 'City', name: 'Viganello' },
      { '@type': 'City', name: 'Molino Nuovo' },
      { '@type': 'City', name: 'Besso' },
      { '@type': 'City', name: 'Loreto' },
      { '@type': 'City', name: 'Davesco' },
      { '@type': 'City', name: 'Pazzallo' },
      { '@type': 'City', name: 'Massagno' },
      { '@type': 'City', name: 'Cadro' },
      { '@type': 'City', name: 'Sonvico' },
      { '@type': 'City', name: 'Canobbio' },
      { '@type': 'City', name: 'Comano' },
      { '@type': 'City', name: 'Tesserete' },
      { '@type': 'City', name: 'Sorengo' },
      { '@type': 'City', name: 'Grancia' },
      { '@type': 'City', name: 'Bioggio' },
      { '@type': 'City', name: 'Agno' },
      { '@type': 'City', name: 'Manno' },
      { '@type': 'City', name: 'Lamone' },
      { '@type': 'City', name: 'Cadempino' },
      { '@type': 'City', name: 'Gravesano' },
      { '@type': 'City', name: 'Muzzano' },
      { '@type': 'City', name: 'Cureglia' },
      { '@type': 'City', name: 'Vezia' },
      { '@type': 'City', name: 'Porza' },
      { '@type': 'City', name: 'Torricella' },
      { '@type': 'City', name: 'Taverne' },
      
      // Bellinzona e zona
      { '@type': 'City', name: 'Bellinzona' },
      { '@type': 'City', name: 'Giubiasco' },
      { '@type': 'City', name: 'Cadenazzo' },
      { '@type': 'City', name: 'Arbedo-Castione' },
      { '@type': 'City', name: 'Sant\'Antonino' },
      { '@type': 'City', name: 'Claro' },
      { '@type': 'City', name: 'Sementina' },
      { '@type': 'City', name: 'Monte Carasso' },
      { '@type': 'City', name: 'Gnosca' },
      { '@type': 'City', name: 'Preonzo' },
      { '@type': 'City', name: 'Moleno' },
      { '@type': 'City', name: 'Biasca' },
      { '@type': 'City', name: 'Bodio' },
      { '@type': 'City', name: 'Airolo' },
      { '@type': 'City', name: 'Faido' },
      { '@type': 'City', name: 'Quinto' },
      { '@type': 'City', name: 'Acquarossa' },
      
      // Locarno e Ascona
      { '@type': 'City', name: 'Locarno' },
      { '@type': 'City', name: 'Ascona' },
      { '@type': 'City', name: 'Muralto' },
      { '@type': 'City', name: 'Minusio' },
      { '@type': 'City', name: 'Orselina' },
      { '@type': 'City', name: 'Losone' },
      { '@type': 'City', name: 'Gordola' },
      { '@type': 'City', name: 'Tenero' },
      { '@type': 'City', name: 'Contra' },
      { '@type': 'City', name: 'Magadino' },
      { '@type': 'City', name: 'Gambarogno' },
      { '@type': 'City', name: 'Brissago' },
      { '@type': 'City', name: 'Ronco sopra Ascona' },
      { '@type': 'City', name: 'Porto Ronco' },
      
      // Mendrisio e Mendrisiotto
      { '@type': 'City', name: 'Mendrisio' },
      { '@type': 'City', name: 'Chiasso' },
      { '@type': 'City', name: 'Stabio' },
      { '@type': 'City', name: 'Balerna' },
      { '@type': 'City', name: 'Novazzano' },
      { '@type': 'City', name: 'Morbio Inferiore' },
      { '@type': 'City', name: 'Coldrerio' },
      { '@type': 'City', name: 'Castel San Pietro' },
      { '@type': 'City', name: 'Riva San Vitale' },
      { '@type': 'City', name: 'Capolago' },
      { '@type': 'City', name: 'Melano' },
      { '@type': 'City', name: 'Rancate' },
      { '@type': 'City', name: 'Arzo' },
      { '@type': 'City', name: 'Tremona' },
      { '@type': 'City', name: 'Besazio' },
      { '@type': 'City', name: 'Meride' },
      { '@type': 'City', name: 'Brusino Arsizio' },
      
      // Malcantone
      { '@type': 'City', name: 'Caslano' },
      { '@type': 'City', name: 'Ponte Tresa' },
      { '@type': 'City', name: 'Magliaso' },
      { '@type': 'City', name: 'Novaggio' },
      { '@type': 'City', name: 'Curio' },
      { '@type': 'City', name: 'Ponte Capriasca' },
      { '@type': 'City', name: 'Lamone-Cadempino' },
      
      // Ceresio
      { '@type': 'City', name: 'Morcote' },
      { '@type': 'City', name: 'Melide' },
      { '@type': 'City', name: 'Bissone' },
      { '@type': 'City', name: 'Maroggia' },
      { '@type': 'City', name: 'Rovio' },
      { '@type': 'City', name: 'Arogno' },
      { '@type': 'City', name: 'Brusimpiano' },
      { '@type': 'City', name: 'Campione d\'Italia' },
      
      // Livello regionale
      { '@type': 'State', name: 'Ticino' },
      { '@type': 'State', name: 'Canton Ticino' },
      { '@type': 'AdministrativeArea', name: 'Svizzera italiana' },
      { '@type': 'AdministrativeArea', name: 'Luganese' },
      { '@type': 'AdministrativeArea', name: 'Mendrisiotto' },
      { '@type': 'AdministrativeArea', name: 'Locarnese' },
      { '@type': 'AdministrativeArea', name: 'Bellinzonese' },
      { '@type': 'AdministrativeArea', name: 'Tre Valli' },
      { '@type': 'AdministrativeArea', name: 'Malcantone' },
      { '@type': 'Country', name: 'Switzerland' },
      { '@type': 'Country', name: 'Schweiz' },
      { '@type': 'Country', name: 'Svizzera' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/errakui-dev',
      'https://github.com/errakui-dev',
      'https://twitter.com/errakuidev',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servizi di Sviluppo Software',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sviluppo Siti Web',
            description: 'Creazione di siti web professionali e responsive',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sviluppo App Mobile',
            description: 'Applicazioni mobile iOS e Android native e cross-platform',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Software Gestionali',
            description: 'ERP e CRM personalizzati per aziende',
          },
        },
      ],
    },
  }

  return (
    <html lang="it-CH">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href="https://errakui.dev" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FF0000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="geo.region" content="CH-TI" />
        <meta name="geo.placename" content="Lugano" />
        <meta name="geo.position" content="46.0037;8.9511" />
        <meta name="ICBM" content="46.0037, 8.9511" />
      </head>
      <body>
        <CookieConsentProvider>
          <ScrollProgress />
          <SwissGrid />
          <WhatsAppButton />
          <CookieBanner />
          <Header />
          <main className="min-h-screen relative z-10 mb-20 md:mb-0">
            {children}
          </main>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  )
}

