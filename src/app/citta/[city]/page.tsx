import { Metadata } from 'next'
import Link from 'next/link'
import { getCityBySlug, swissCities } from '@/data/cities'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    city: string
  }
}

export async function generateStaticParams() {
  return swissCities.map((city) => ({
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  
  if (!city) {
    return {
      title: 'Città non trovata',
    }
  }

  const cityName = city.nameLocal || city.name
  const cityNameIt = city.name
  const description = city.descriptionLocal && city.language !== 'it' ? city.descriptionLocal : city.description
  
  // Determina locale in base alla lingua
  let locale = 'it_CH'
  if (city.language === 'de') locale = 'de_CH'
  if (city.language === 'fr') locale = 'fr_CH'
  if (city.country === 'IT') locale = 'it_IT'

  const locationLabel = city.canton || city.province || city.region

  return {
    title: `Software House ${cityNameIt} | Sviluppo Software ${locationLabel}`,
    description: description,
    keywords: [
      ...city.keywords,
      `software house ${cityName}`,
      `sviluppo software ${cityName}`,
      `agenzia web ${cityName}`,
      `sviluppatore ${cityName}`,
      `programmatore ${cityName}`,
      `app mobile ${cityName}`,
      `siti web ${cityName}`,
      `web developer ${cityName}`,
      `software gestionale ${cityName}`,
      `e-commerce ${cityName}`,
      `consulenza IT ${cityName}`,
      `web agency ${cityName}`,
      `digital agency ${cityName}`,
      locationLabel ? `software house ${locationLabel}` : '',
      locationLabel ? `sviluppo software ${locationLabel}` : '',
      `software house ${city.region}`,
    ].filter(Boolean),
    openGraph: {
      title: `Software House ${cityNameIt} | ERRAKUI.DEV`,
      description: description,
      url: `https://errakui.dev/citta/${city.slug}`,
      siteName: 'ERRAKUI.DEV',
      locale: locale,
      type: 'website',
    },
    alternates: {
      canonical: `https://errakui.dev/citta/${city.slug}`,
    },
  }
}

export default function CityPage({ params }: PageProps) {
  const city = getCityBySlug(params.city)

  if (!city) {
    notFound()
  }

  const cityName = city.nameLocal || city.name
  const cityNameIt = city.name
  // Usa descriptionLocal se disponibile e la lingua non è italiano, altrimenti usa description
  const description = city.descriptionLocal && city.language !== 'it' ? city.descriptionLocal : city.description
  const locationLabel = city.canton || city.province || city.region

  // Testi multilingua
  const texts = {
    it: {
      heroLabel: 'SOFTWARE HOUSE',
      heroTitle1: 'SVILUPPO SOFTWARE',
      heroTitle2: 'A',
      servicesTitle: 'SERVIZI PER',
      servicesSubtitle: 'Offriamo soluzioni software complete per aziende di',
      whyTitle: 'PERCHÉ SCEGLIERE ERRAKUI.DEV',
      whyTitle2: 'A',
      contactTitle: 'CONTATTA CI',
      requestQuote: 'RICHIEDI PREVENTIVO',
      ourServices: 'I NOSTRI SERVIZI',
      relatedCities: 'SERVIZI ANCHE IN ALTRE CITTÀ',
      notFoundCity: 'NON TROVI LA TUA CITTÀ?',
      notFoundText: 'Offriamo servizi in tutta la Svizzera. Contattaci per scoprire come possiamo aiutarti, indipendentemente dalla tua ubicazione.',
      contactUs: 'CONTATTACI',
      webSites: 'SITI WEB',
      webSitesDesc: 'Siti web professionali e responsive per aziende di',
      mobileApps: 'APP MOBILE',
      mobileAppsDesc: 'Applicazioni mobile iOS e Android per il mercato svizzero',
      managementSoftware: 'SOFTWARE GESTIONALI',
      managementSoftwareDesc: 'ERP e CRM personalizzati per aziende di',
      discoverMore: 'Scopri di più →',
      swissExperience: 'Esperienza Svizzera',
      swissExperienceDesc: 'Qualità svizzera, precisione e affidabilità in ogni progetto',
      localKnowledge: 'Conoscenza Locale',
      localKnowledgeDesc: 'Comprensione del mercato svizzero e delle esigenze locali',
      multilingualSupport: 'Supporto Multilingue',
      multilingualSupportDesc: 'Servizi in italiano, tedesco, francese e inglese',
      swissCompliance: 'Conformità Svizzera',
      swissComplianceDesc: 'Rispetto di nLPD, GDPR e normative svizzere',
    },
    de: {
      heroLabel: 'SOFTWARE-ENTWICKLUNG',
      heroTitle1: 'SOFTWARE-ENTWICKLUNG',
      heroTitle2: 'IN',
      servicesTitle: 'DIENSTLEISTUNGEN FÜR',
      servicesSubtitle: 'Wir bieten umfassende Softwarelösungen für Unternehmen in',
      whyTitle: 'WARUM ERRAKUI.DEV WÄHLEN',
      whyTitle2: 'IN',
      contactTitle: 'KONTAKTIEREN SIE UNS',
      requestQuote: 'ANGEBOT ANFORDERN',
      ourServices: 'UNSERE DIENSTLEISTUNGEN',
      relatedCities: 'DIENSTLEISTUNGEN AUCH IN ANDEREN STÄDTEN',
      notFoundCity: 'FINDEN SIE IHRE STADT NICHT?',
      notFoundText: 'Wir bieten Dienstleistungen in der gesamten Schweiz an. Kontaktieren Sie uns, um herauszufinden, wie wir Ihnen helfen können, unabhängig von Ihrem Standort.',
      contactUs: 'KONTAKTIEREN SIE UNS',
      webSites: 'WEBSITES',
      webSitesDesc: 'Professionelle und responsive Websites für Unternehmen in',
      mobileApps: 'MOBILE APPS',
      mobileAppsDesc: 'Mobile Anwendungen für iOS und Android für den Schweizer Markt',
      managementSoftware: 'VERWALTUNGSSOFTWARE',
      managementSoftwareDesc: 'Maßgeschneiderte ERP- und CRM-Systeme für Unternehmen in',
      discoverMore: 'Mehr erfahren →',
      swissExperience: 'Schweizer Erfahrung',
      swissExperienceDesc: 'Schweizer Qualität, Präzision und Zuverlässigkeit in jedem Projekt',
      localKnowledge: 'Lokales Wissen',
      localKnowledgeDesc: 'Verständnis des Schweizer Marktes und der lokalen Bedürfnisse',
      multilingualSupport: 'Mehrsprachiger Support',
      multilingualSupportDesc: 'Dienstleistungen auf Deutsch, Französisch, Italienisch und Englisch',
      swissCompliance: 'Schweizer Konformität',
      swissComplianceDesc: 'Einhaltung von nLPD, DSGVO und Schweizer Vorschriften',
    },
    fr: {
      heroLabel: 'DÉVELOPPEMENT DE LOGICIELS',
      heroTitle1: 'DÉVELOPPEMENT DE LOGICIELS',
      heroTitle2: 'À',
      servicesTitle: 'SERVICES POUR',
      servicesSubtitle: 'Nous offrons des solutions logicielles complètes pour les entreprises de',
      whyTitle: 'POURQUOI CHOISIR ERRAKUI.DEV',
      whyTitle2: 'À',
      contactTitle: 'CONTACTEZ-NOUS',
      requestQuote: 'DEMANDER UN DEVIS',
      ourServices: 'NOS SERVICES',
      relatedCities: 'SERVICES ÉGALEMENT DANS D\'AUTRES VILLES',
      notFoundCity: 'VOUS NE TROUVEZ PAS VOTRE VILLE?',
      notFoundText: 'Nous offrons des services dans toute la Suisse. Contactez-nous pour découvrir comment nous pouvons vous aider, quel que soit votre emplacement.',
      contactUs: 'CONTACTEZ-NOUS',
      webSites: 'SITES WEB',
      webSitesDesc: 'Sites web professionnels et responsives pour les entreprises de',
      mobileApps: 'APPLICATIONS MOBILES',
      mobileAppsDesc: 'Applications mobiles iOS et Android pour le marché suisse',
      managementSoftware: 'LOGICIELS DE GESTION',
      managementSoftwareDesc: 'ERP et CRM personnalisés pour les entreprises de',
      discoverMore: 'En savoir plus →',
      swissExperience: 'Expérience Suisse',
      swissExperienceDesc: 'Qualité suisse, précision et fiabilité dans chaque projet',
      localKnowledge: 'Connaissance Locale',
      localKnowledgeDesc: 'Compréhension du marché suisse et des besoins locaux',
      multilingualSupport: 'Support Multilingue',
      multilingualSupportDesc: 'Services en français, allemand, italien et anglais',
      swissCompliance: 'Conformité Suisse',
      swissComplianceDesc: 'Respect de la nLPD, du RGPD et des normes suisses',
    },
  }

  const t = texts[city.language] || texts.it

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
                  {t.heroLabel} {cityName.toUpperCase()}
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none">
                {t.heroTitle1}
                <br />
                <span className="text-swiss-red">{t.heroTitle2} {cityNameIt.toUpperCase()}</span>
                <br />
                {locationLabel}
              </h1>
              <p className="text-xl text-swiss-gray-400 leading-relaxed mb-8">
                {description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contatti"
                  className="bg-swiss-red px-8 py-4 font-bold hover:bg-white hover:text-swiss-red transition-colors"
                >
                  {t.requestQuote}
                </Link>
                <Link
                  href="/servizi"
                  className="border-2 border-white px-8 py-4 font-bold hover:bg-white hover:text-swiss-black transition-colors"
                >
                  {t.ourServices}
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square border-2 border-swiss-gray-600 hover:border-swiss-red hover:bg-swiss-red flex flex-col items-center justify-center transition-all cursor-pointer group">
                <div className="text-5xl font-mono font-bold mb-2 group-hover:scale-110 transition-transform">
                  {city.population ? (city.population / 1000).toFixed(0) + 'K' : '—'}
                </div>
                <div className="text-xs tracking-wider text-center px-4">ABITANTI</div>
              </div>
              <div className="aspect-square border-2 border-swiss-gray-600 hover:border-swiss-red hover:bg-swiss-red flex flex-col items-center justify-center transition-all cursor-pointer group">
                <div className="text-5xl font-mono font-bold mb-2 group-hover:scale-110 transition-transform">
                  {city.canton}
                </div>
                <div className="text-xs tracking-wider text-center px-4">CANTONE</div>
              </div>
              <div className="aspect-square border-2 border-swiss-gray-600 hover:border-swiss-red hover:bg-swiss-red flex flex-col items-center justify-center transition-all cursor-pointer group">
                <div className="text-5xl font-mono font-bold mb-2 group-hover:scale-110 transition-transform">
                  100%
                </div>
                <div className="text-xs tracking-wider text-center px-4">SWISS MADE</div>
              </div>
              <div className="aspect-square border-2 border-swiss-gray-600 hover:border-swiss-red hover:bg-swiss-red flex flex-col items-center justify-center transition-all cursor-pointer group">
                <div className="text-5xl font-mono font-bold mb-2 group-hover:scale-110 transition-transform">
                  24/7
                </div>
                <div className="text-xs tracking-wider text-center px-4">SUPPORTO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {t.servicesTitle} {cityNameIt.toUpperCase()}
            </h2>
            <p className="text-xl text-swiss-gray-600 max-w-3xl mx-auto">
              {t.servicesSubtitle} {cityNameIt} {city.region && `e ${city.region}`}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-swiss-gray-300 p-8 hover:border-swiss-red transition-colors">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-4">{t.webSites}</h3>
              <p className="text-swiss-gray-600 mb-6">
                {t.webSitesDesc} {cityNameIt}
              </p>
              <Link
                href="/servizi"
                className="text-swiss-red font-bold hover:underline"
              >
                {t.discoverMore}
              </Link>
            </div>

            <div className="border-2 border-swiss-gray-300 p-8 hover:border-swiss-red transition-colors">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-4">{t.mobileApps}</h3>
              <p className="text-swiss-gray-600 mb-6">
                {t.mobileAppsDesc}
              </p>
              <Link
                href="/servizi"
                className="text-swiss-red font-bold hover:underline"
              >
                {t.discoverMore}
              </Link>
            </div>

            <div className="border-2 border-swiss-gray-300 p-8 hover:border-swiss-red transition-colors">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-4">{t.managementSoftware}</h3>
              <p className="text-swiss-gray-600 mb-6">
                {t.managementSoftwareDesc} {cityNameIt}
              </p>
              <Link
                href="/servizi"
                className="text-swiss-red font-bold hover:underline"
              >
                {t.discoverMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 md:px-12 bg-swiss-gray-100">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                {t.whyTitle}
                <br />
                <span className="text-swiss-red">{t.whyTitle2} {cityNameIt.toUpperCase()}</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-swiss-red flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.swissExperience}</h3>
                    <p className="text-swiss-gray-600">
                      {t.swissExperienceDesc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-swiss-red flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.localKnowledge}</h3>
                    <p className="text-swiss-gray-600">
                      {t.localKnowledgeDesc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-swiss-red flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.multilingualSupport}</h3>
                    <p className="text-swiss-gray-600">
                      {t.multilingualSupportDesc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-swiss-red flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.swissCompliance}</h3>
                    <p className="text-swiss-gray-600">
                      {t.swissComplianceDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-2 border-swiss-gray-300">
              <h3 className="text-2xl font-bold mb-6">{t.contactTitle}</h3>
              <div className="space-y-4 mb-8">
                <div>
                  <div className="text-xs text-swiss-gray-500 mb-1">TELEFONO / WHATSAPP</div>
                  <a
                    href="tel:+41772186971"
                    className="text-swiss-black hover:text-swiss-red transition-colors font-bold"
                  >
                    +41 77 218 69 71
                  </a>
                </div>
                <div>
                  <div className="text-xs text-swiss-gray-500 mb-1">EMAIL</div>
                  <a
                    href="mailto:info@errakui.dev"
                    className="text-swiss-black hover:text-swiss-red transition-colors font-bold"
                  >
                    info@errakui.dev
                  </a>
                </div>
                <div>
                  <div className="text-xs text-swiss-gray-500 mb-1">SEDE</div>
                  <div className="text-swiss-black font-bold">
                    Lugano, Schweiz
                  </div>
                </div>
              </div>
              <Link
                href="/contatti"
                className="block w-full bg-swiss-red text-white text-center py-4 font-bold hover:bg-white hover:text-swiss-red transition-colors"
              >
                {t.requestQuote}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Cities Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            {t.relatedCities}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {swissCities
              .filter(c => c.slug !== city.slug)
              .slice(0, 12)
              .map((relatedCity) => (
                <Link
                  key={relatedCity.slug}
                  href={`/citta/${relatedCity.slug}`}
                  className="border-2 border-swiss-gray-300 p-4 text-center hover:border-swiss-red hover:bg-swiss-red hover:text-white transition-all"
                >
                  <div className="font-bold">{relatedCity.name}</div>
                  <div className="text-xs text-swiss-gray-500 mt-1">{relatedCity.canton || relatedCity.province}</div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
