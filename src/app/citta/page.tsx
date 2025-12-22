import { Metadata } from 'next'
import Link from 'next/link'
import { swissCities, getCitiesByCanton } from '@/data/cities'

export const metadata: Metadata = {
  title: 'Città',
  description: 'ERRAKUI.DEV offre servizi di sviluppo software in tutte le principali città svizzere. Software house a Zurigo, Berna, Ginevra, Basilea, Losanna e in tutto il Ticino.',
  keywords: [
    'software house Svizzera',
    'sviluppo software Svizzera',
    'software house tutte le città',
    'agenzia web Svizzera',
    'sviluppatore Svizzera',
  ],
}

export default function CitiesPage() {
  // Raggruppa città per cantone/provincia/regione
  const citiesByLocation = swissCities.reduce((acc, city) => {
    const location = city.canton || city.province || city.region
    if (!acc[location]) {
      acc[location] = []
    }
    acc[location].push(city)
    return acc
  }, {} as Record<string, typeof swissCities>)

  const locations = Object.keys(citiesByLocation).sort()

  return (
    <div className="bg-white pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20 bg-swiss-black text-white">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-1 bg-swiss-red" />
              <span className="text-sm tracking-[0.3em] text-swiss-gray-400 font-bold">
                COPERTURA NAZIONALE
              </span>
              <div className="w-16 h-1 bg-swiss-red" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none">
              SERVIZI IN TUTTA
              <br />
              <span className="text-swiss-red">LA SVIZZERA</span>
            </h1>
            <p className="text-xl text-swiss-gray-400 leading-relaxed max-w-3xl mx-auto">
              ERRAKUI.DEV offre servizi di sviluppo software in tutte le principali città svizzere.
              <br />
              Dalla Svizzera italiana a Zurigo, da Ginevra a Basilea.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid by Canton */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          {locations.map((location) => {
            const locationType = swissCities.find(c => (c.canton || c.province || c.region) === location)?.canton 
              ? 'CANTONE' 
              : swissCities.find(c => (c.canton || c.province || c.region) === location)?.province 
                ? 'PROVINCIA' 
                : 'REGIONE'
            
            return (
              <div key={location} className="mb-16">
                <h2 className="text-4xl font-bold mb-8 flex items-center">
                  <span className="w-12 h-1 bg-swiss-red mr-4" />
                  {locationType} {location}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {citiesByLocation[location].map((city) => (
                    <Link
                      key={city.slug}
                      href={`/citta/${city.slug}`}
                      className="group border-2 border-swiss-gray-300 p-6 hover:border-swiss-red hover:bg-swiss-red hover:text-white transition-all"
                    >
                      <div className="font-bold text-lg mb-2 group-hover:text-white">
                        {city.name}
                      </div>
                      {city.nameLocal && city.nameLocal !== city.name && (
                        <div className="text-sm text-swiss-gray-500 group-hover:text-swiss-gray-200 mb-2">
                          {city.nameLocal}
                        </div>
                      )}
                      <div className="text-xs text-swiss-gray-500 group-hover:text-swiss-gray-200">
                        {city.region}
                        {city.population && (
                          <span className="ml-2">• {city.population.toLocaleString()} ab.</span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-swiss-gray-100">
        <div className="max-w-[1800px] mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            NON TROVI LA TUA CITTÀ?
          </h2>
          <p className="text-xl text-swiss-gray-600 mb-8 max-w-2xl mx-auto">
            Offriamo servizi in tutta la Svizzera. Contattaci per scoprire come possiamo aiutarti,
            indipendentemente dalla tua ubicazione.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contatti"
              className="bg-swiss-red px-8 py-4 font-bold text-white hover:bg-white hover:text-swiss-red transition-colors"
            >
              CONTATTACI
            </Link>
            <Link
              href="/servizi"
              className="border-2 border-swiss-black px-8 py-4 font-bold hover:bg-swiss-black hover:text-white transition-colors"
            >
              I NOSTRI SERVIZI
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
