'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Swiss Graphic Design Puro */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Rigid Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, black 1px, transparent 1px),
              linear-gradient(to bottom, black 1px, transparent 1px)
            `,
            backgroundSize: '8px 8px'
          }} />
        </div>

        {/* Swiss Grid Overlay - 12 Column System */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="max-w-[1800px] mx-auto h-full grid grid-cols-12 gap-0">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-swiss-gray-200 last:border-r-0" />
            ))}
          </div>
        </div>

        <div className="max-w-[1800px] mx-auto w-full px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-12 gap-0 items-center">
            {/* Left Column - Col 1-7 */}
            <div className="col-span-12 lg:col-span-7">
              {/* Swiss Red Line Accent */}
              <div className="w-1 h-24 bg-swiss-red mb-8" />
              
              {/* Large Number - Swiss Style */}
              <div className="mb-12">
                <span className="text-[20rem] md:text-[28rem] font-mono font-bold text-swiss-gray-100 leading-none tracking-tighter">
                  01
                </span>
              </div>

              {/* Title - Helvetica Bold, Tight Tracking */}
              <h1 className="text-7xl md:text-9xl font-helvetica font-bold leading-[0.9] tracking-[-0.05em] mb-8 text-swiss-black">
                SOFTWARE
                <br />
                <span className="text-swiss-red">HOUSE</span>
                <br />
                LUGANO
              </h1>

              {/* Subtitle - Minimal */}
              <div className="mb-16">
                <p className="text-sm tracking-[0.4em] text-swiss-gray-500 font-bold uppercase mb-4">
                  SWISS QUALITY
                </p>
                <p className="text-2xl md:text-3xl font-helvetica leading-tight text-swiss-gray-600 max-w-2xl">
                  Precisione svizzera nello sviluppo software.
                  <br />
                  Design impeccabile. Qualità garantita.
                </p>
              </div>

              {/* CTA Buttons - Swiss Minimal */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contatti"
                  className="group relative w-full sm:w-auto px-16 py-6 bg-swiss-red text-white font-bold text-lg tracking-wide hover:bg-swiss-black transition-colors"
                >
                  CONTATTI
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto px-16 py-6 border-2 border-swiss-black text-swiss-black font-bold text-lg tracking-wide hover:bg-swiss-black hover:text-white transition-all"
                >
                  PORTFOLIO
                </Link>
              </div>
            </div>

            {/* Right Column - Col 8-12 */}
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 mt-20 lg:mt-0">
              {/* Swiss Grid of Squares */}
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square border-2 ${
                      i === 0 || i === 5 || i === 10 || i === 15
                        ? 'bg-swiss-red border-swiss-red'
                        : 'border-swiss-gray-300 hover:border-swiss-red transition-colors'
                    }`}
                  />
                ))}
              </div>

              {/* Stats - Swiss Typography */}
              <div className="mt-16 space-y-8">
                <div className="flex items-baseline gap-4">
                  <span className="text-8xl font-mono font-bold text-swiss-red">150+</span>
                  <span className="text-sm tracking-[0.3em] text-swiss-gray-500 uppercase">PROGETTI</span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-8xl font-mono font-bold text-swiss-black">50+</span>
                  <span className="text-sm tracking-[0.3em] text-swiss-gray-500 uppercase">CLIENTI</span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-8xl font-mono font-bold text-swiss-red">12+</span>
                  <span className="text-sm tracking-[0.3em] text-swiss-gray-500 uppercase">ANNI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Red Line - Swiss Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-swiss-red" />
      </section>

      {/* Services Section - Swiss Grid Complex */}
      <section className="py-32 px-6 md:px-12 bg-swiss-gray-50">
        <div className="max-w-[1800px] mx-auto">
          {/* Section Header - Swiss Style */}
          <div className="grid grid-cols-12 gap-0 mb-24">
            <div className="col-span-12 lg:col-span-3">
              <div className="w-1 h-24 bg-swiss-red mb-6" />
              <span className="text-[12rem] font-mono font-bold text-swiss-gray-200 leading-none block">
                02
              </span>
            </div>
            <div className="col-span-12 lg:col-span-9 lg:col-start-4">
              <h2 className="text-6xl md:text-8xl font-helvetica font-bold leading-[0.9] tracking-tight mb-6 text-swiss-black">
                SERVIZI
              </h2>
              <p className="text-sm tracking-[0.4em] text-swiss-gray-500 uppercase font-bold">
                SOLUZIONI DIGITALI COMPLETE
              </p>
            </div>
          </div>

          {/* Services Grid - Swiss Black Border System */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-swiss-black">
            {[
              {
                number: '01',
                title: 'WEB',
                subtitle: 'DEVELOPMENT',
                description: 'Siti web e applicazioni web moderne con tecnologie all\'avanguardia',
                tags: ['Next.js', 'React', 'TypeScript'],
              },
              {
                number: '02',
                title: 'MOBILE',
                subtitle: 'APPS',
                description: 'Applicazioni mobile native e cross-platform per iOS e Android',
                tags: ['React Native', 'Flutter', 'Swift'],
              },
              {
                number: '03',
                title: 'SOFTWARE',
                subtitle: 'GESTIONALI',
                description: 'Sistemi gestionali personalizzati per ottimizzare i processi aziendali',
                tags: ['ERP', 'CRM', 'Cloud'],
              },
              {
                number: '04',
                title: 'CUSTOM',
                subtitle: 'SOFTWARE',
                description: 'Soluzioni software personalizzate per esigenze specifiche',
                tags: ['API', 'Integration', 'Microservices'],
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`group bg-white p-12 border-r-2 border-b-2 border-swiss-black last:border-r-0 hover:bg-swiss-red transition-all duration-300 cursor-pointer ${
                  index === 1 || index === 3 ? 'border-r-0 md:border-r-2' : ''
                }`}
              >
                {/* Number - Swiss Large */}
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[8rem] font-mono font-bold text-swiss-gray-100 group-hover:text-white/30 transition-colors leading-none">
                    {service.number}
                  </span>
                  <div className="w-16 h-16 border-2 border-swiss-black group-hover:border-white group-hover:rotate-45 transition-all duration-500" />
                </div>

                {/* Title - Helvetica Bold */}
                <h3 className="text-4xl md:text-5xl font-helvetica font-bold mb-2 group-hover:text-white transition-colors leading-tight tracking-tight">
                  {service.title}
                  <br />
                  {service.subtitle}
                </h3>

                {/* Description */}
                <p className="text-lg text-swiss-gray-600 group-hover:text-white/90 mb-8 leading-relaxed transition-colors">
                  {service.description}
                </p>

                {/* Tags - Swiss Mono */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 border border-swiss-gray-300 group-hover:border-white group-hover:text-white text-sm font-mono transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Swiss Typography Heavy */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-12 gap-0">
            {/* Left - Number */}
            <div className="col-span-12 lg:col-span-4 mb-16 lg:mb-0">
              <div className="w-1 h-24 bg-swiss-red mb-6" />
              <span className="text-[12rem] font-mono font-bold text-swiss-gray-200 leading-none block">
                03
              </span>
            </div>

            {/* Right - Content */}
            <div className="col-span-12 lg:col-span-8 lg:col-start-5">
              <h2 className="text-6xl md:text-8xl font-helvetica font-bold leading-[0.9] tracking-tight mb-12 text-swiss-black">
                PROCESSO
              </h2>

              {/* Process Steps - Swiss Minimal List */}
              <div className="space-y-1 border-l-4 border-swiss-red pl-8">
                {[
                  { phase: '01', title: 'DISCOVERY', desc: 'Analisi esigenze e obiettivi' },
                  { phase: '02', title: 'STRATEGY', desc: 'Definizione strategia e architettura' },
                  { phase: '03', title: 'DESIGN', desc: 'Interfacce eleganti e UX ottimale' },
                  { phase: '04', title: 'DEVELOPMENT', desc: 'Sviluppo tecnologie moderne' },
                  { phase: '05', title: 'TESTING', desc: 'Test rigorosi qualità e affidabilità' },
                  { phase: '06', title: 'LAUNCH', desc: 'Deployment e supporto continuo' },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="group py-6 border-b border-swiss-gray-200 last:border-b-0 hover:bg-swiss-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-8">
                      <span className="text-5xl font-mono font-bold text-swiss-gray-300 group-hover:text-swiss-red transition-colors w-20">
                        {step.phase}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-2xl font-helvetica font-bold mb-2 text-swiss-black">
                          {step.title}
                        </h3>
                        <p className="text-swiss-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Swiss Black Background */}
      <section className="bg-swiss-black text-white py-20">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-t border-b border-swiss-gray-600">
            {[
              { number: '150+', label: 'PROGETTI' },
              { number: '50+', label: 'CLIENTI' },
              { number: '12+', label: 'ANNI' },
              { number: '100%', label: 'QUALITÀ' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center py-12 border-r border-swiss-gray-600 last:border-r-0 group cursor-pointer hover:bg-swiss-red transition-colors`}
              >
                <div className="text-7xl md:text-9xl font-mono font-bold mb-4 group-hover:scale-110 transition-transform leading-none">
                  {stat.number}
                </div>
                <div className="text-xs tracking-[0.4em] text-swiss-gray-400 uppercase font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Swiss Red Background */}
      <section className="bg-swiss-red text-white py-32 px-6 md:px-12 relative">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '8px 8px'
          }} />
        </div>

        <div className="max-w-[1800px] mx-auto relative z-10">
          <div className="grid grid-cols-12 gap-0 items-center">
            <div className="col-span-12 lg:col-span-8">
              <div className="w-1 h-24 bg-white mb-8" />
              <h2 className="text-6xl md:text-9xl font-helvetica font-bold leading-[0.9] tracking-tight mb-8">
                INIZIA
                <br />
                IL TUO
                <br />
                PROGETTO
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl">
                Contattaci oggi e trasformiamo la tua visione in realtà digitale.
              </p>
              <Link
                href="/contatti"
                className="inline-block px-16 py-6 bg-white text-swiss-red font-bold text-lg tracking-wide hover:bg-swiss-black hover:text-white transition-colors"
              >
                CONTATTI →
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 mt-12 lg:mt-0">
              {/* Swiss Cross Pattern */}
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square ${
                      i === 5 || i === 6 || i === 9 || i === 10
                        ? 'bg-white'
                        : 'border-2 border-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
