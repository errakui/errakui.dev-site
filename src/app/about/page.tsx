'use client'

export default function AboutPage() {
  const timeline = [
    {
      year: '2012',
      title: 'FONDAZIONE',
      description: 'Nasce ERRAKUI.DEV a Zurigo con la missione di portare eccellenza svizzera nel mondo del software.',
      milestone: 'Primi 5 clienti',
    },
    {
      year: '2015',
      title: 'ESPANSIONE',
      description: 'Apertura della seconda sede e ampliamento del team con specialisti internazionali.',
      milestone: '20+ progetti completati',
    },
    {
      year: '2018',
      title: 'INNOVAZIONE',
      description: 'Lancio del nostro framework proprietario per lo sviluppo rapido di applicazioni enterprise.',
      milestone: 'Premio Swiss Innovation',
    },
    {
      year: '2020',
      title: 'DIGITAL TRANSFORMATION',
      description: 'Diventiamo partner ufficiale per la digitalizzazione di importanti aziende svizzere.',
      milestone: '50+ clienti enterprise',
    },
    {
      year: '2023',
      title: 'LEADERSHIP',
      description: 'Riconoscimento come una delle top software house in Svizzera per qualità e innovazione.',
      milestone: '150+ progetti di successo',
    },
    {
      year: '2024',
      title: 'FUTURO',
      description: 'Continua espansione e investimenti in AI, Machine Learning e tecnologie emergenti.',
      milestone: 'Visione 2030',
    },
  ]

  const values = [
    {
      icon: '🎯',
      title: 'PRECISIONE',
      description: 'Come un orologio svizzero, ogni dettaglio conta. La precisione è nel nostro DNA.',
    },
    {
      icon: '💎',
      title: 'QUALITÀ',
      description: 'Non scendiamo mai a compromessi. Ogni progetto riceve la massima attenzione.',
    },
    {
      icon: '🚀',
      title: 'INNOVAZIONE',
      description: 'Sempre un passo avanti, utilizzando le tecnologie più moderne e performanti.',
    },
    {
      icon: '🤝',
      title: 'PARTNERSHIP',
      description: 'Non siamo solo fornitori, siamo partner strategici nel tuo percorso digitale.',
    },
    {
      icon: '🔒',
      title: 'SICUREZZA',
      description: 'La sicurezza dei dati e la privacy sono le nostre massime priorità.',
    },
    {
      icon: '🌍',
      title: 'SOSTENIBILITÀ',
      description: 'Impegnati per un futuro digitale sostenibile e responsabile.',
    },
  ]

  const team = [
    {
      role: 'CEO & FOUNDER',
      name: 'Marco Bernasconi',
      description: 'Visionario con 15+ anni di esperienza in enterprise software',
      number: '01',
    },
    {
      role: 'CTO',
      name: 'Laura Müller',
      description: 'Esperta in architetture scalabili e cloud computing',
      number: '02',
    },
    {
      role: 'HEAD OF DESIGN',
      name: 'Alessandro Rossi',
      description: 'Designer pluripremiato specializzato in UX/UI',
      number: '03',
    },
    {
      role: 'LEAD DEVELOPER',
      name: 'Sophie Dubois',
      description: 'Full-stack developer con passione per il clean code',
      number: '04',
    },
  ]

  const numbers = [
    { value: '150+', label: 'PROGETTI', desc: 'COMPLETATI' },
    { value: '50+', label: 'CLIENTI', desc: 'SODDISFATTI' },
    { value: '25+', label: 'TEAM', desc: 'MEMBERS' },
    { value: '12+', label: 'ANNI', desc: 'ESPERIENZA' },
  ]


  return (
    <div className="bg-white pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-1 bg-swiss-red" />
                <span className="text-sm tracking-[0.3em] text-swiss-gray-500 font-bold">
                  CHI SIAMO
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none">
                ECCELLENZA
                <br />
                <span className="text-swiss-red">SVIZZERA</span>
                <br />
                NEL SOFTWARE
              </h1>
              <p className="text-2xl text-swiss-gray-600 leading-relaxed mb-8">
                Siamo una software house svizzera che combina tradizione artigianale, 
                precisione e innovazione tecnologica per creare soluzioni digitali eccezionali.
              </p>
              <div className="flex items-start space-x-8 p-8 bg-swiss-gray-100">
                <div className="text-6xl">🇨🇭</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">SWISS MADE SOFTWARE</h3>
                  <p className="text-swiss-gray-600">
                    Ogni riga di codice riflette i valori svizzeri di qualità, 
                    affidabilità e precisione.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4 h-full">
                {numbers.map((item, index) => (
                  <div
                    key={index}
                    className="bg-swiss-black text-white p-8 flex flex-col justify-center hover:bg-swiss-red transition-colors duration-300 cursor-pointer group"
                  >
                    <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
                      {item.value}
                    </div>
                    <div className="text-xs tracking-[0.3em] opacity-70">{item.label}</div>
                    <div className="text-xs tracking-[0.3em] opacity-70">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 md:px-12 bg-swiss-gray-100">
        <div className="max-w-[1800px] mx-auto">
          <div className="mb-16 text-center">
            <span className="text-8xl font-mono text-swiss-red font-bold block mb-4">
              01
            </span>
            <h2 className="text-5xl md:text-6xl font-bold">LA NOSTRA STORIA</h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-swiss-red hidden lg:block" />

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'
                    }`}
                  >
                    <div className="bg-white p-10 border-l-4 border-swiss-red hover:shadow-2xl transition-shadow group">
                      <div className="text-sm tracking-[0.3em] text-swiss-gray-500 mb-2">
                        {item.milestone}
                      </div>
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-swiss-red transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-swiss-gray-600 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Year */}
                  <div
                    className={`${
                      index % 2 === 0 ? 'lg:col-start-2' : ''
                    } flex justify-center lg:justify-start`}
                  >
                    <div className="w-48 h-48 bg-swiss-black text-white flex items-center justify-center group cursor-pointer hover:bg-swiss-red transition-colors">
                      <span className="text-6xl font-bold group-hover:scale-110 transition-transform">
                        {item.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="mb-16 text-center">
            <span className="text-8xl font-mono text-swiss-red font-bold block mb-4">
              02
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">I NOSTRI VALORI</h2>
            <p className="text-xl text-swiss-gray-600 max-w-3xl mx-auto">
              Principi fondamentali che guidano ogni nostro progetto e decisione
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-swiss-black">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-12 hover:bg-swiss-red hover:text-white group transition-all duration-500 cursor-pointer"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-swiss-gray-600 group-hover:text-white leading-relaxed transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-12 bg-swiss-black text-white">
        <div className="max-w-[1800px] mx-auto">
          <div className="mb-16">
            <span className="text-8xl font-mono text-swiss-red font-bold block mb-4">
              03
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">IL NOSTRO TEAM</h2>
            <p className="text-xl text-swiss-gray-400 max-w-3xl">
              Un team multidisciplinare di esperti appassionati, 
              uniti dalla passione per l'eccellenza nel software
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group border-2 border-swiss-gray-600 hover:border-swiss-red p-10 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-xs tracking-[0.3em] text-swiss-gray-500">
                    {member.role}
                  </div>
                  <div className="text-5xl font-mono text-swiss-gray-600 group-hover:text-swiss-red transition-colors">
                    {member.number}
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-swiss-red transition-colors">
                  {member.name}
                </h3>
                <p className="text-swiss-gray-400 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center p-12 border-2 border-swiss-gray-600">
            <h3 className="text-3xl font-bold mb-4">UNISCITI AL NOSTRO TEAM</h3>
            <p className="text-swiss-gray-400 mb-8 text-lg">
              Cerchiamo sempre talenti eccezionali da aggiungere al nostro team
            </p>
            <a
              href="mailto:careers@errakui.dev"
              className="inline-block px-12 py-4 bg-swiss-red hover:bg-white hover:text-swiss-red font-bold transition-colors"
            >
              VEDI POSIZIONI APERTE →
            </a>
          </div>
        </div>
      </section>

      {/* Recent Projects Showcase */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="mb-16 text-center">
            <span className="text-8xl font-mono text-swiss-red font-bold block mb-4">
              04
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              PROGETTI RECENTI
            </h2>
            <p className="text-xl text-swiss-gray-600">
              Alcuni dei nostri ultimi lavori di successo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 - E-commerce */}
            <div className="group cursor-pointer">
              <div className="bg-swiss-black aspect-video mb-4 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 grid grid-cols-4 gap-2 p-8">
                  <div className="bg-swiss-red/20 border border-swiss-red/50"></div>
                  <div className="bg-swiss-red/20 border border-swiss-red/50"></div>
                  <div className="bg-swiss-red/10 border border-swiss-red/30 col-span-2"></div>
                  <div className="bg-swiss-red/30 border border-swiss-red/70 col-span-2 row-span-2"></div>
                  <div className="bg-swiss-red/20 border border-swiss-red/50"></div>
                  <div className="bg-swiss-red/20 border border-swiss-red/50"></div>
                </div>
                <div className="relative z-10 text-white text-6xl">🛒</div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-swiss-red transition-colors">
                E-commerce Luxury
              </h3>
              <p className="text-swiss-gray-600">Piattaforma vendita online premium</p>
            </div>

            {/* Project 2 - Mobile App */}
            <div className="group cursor-pointer">
              <div className="bg-swiss-red aspect-video mb-4 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-56 bg-swiss-black/80 border-4 border-white/20 rounded-lg"></div>
                </div>
                <div className="relative z-10 text-white text-6xl">📱</div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-swiss-red transition-colors">
                App Mobile iOS/Android
              </h3>
              <p className="text-swiss-gray-600">Applicazione nativa cross-platform</p>
            </div>

            {/* Project 3 - Dashboard */}
            <div className="group cursor-pointer">
              <div className="bg-swiss-gray-100 aspect-video mb-4 relative overflow-hidden p-4">
                <div className="space-y-2">
                  <div className="h-3 bg-swiss-red w-3/4"></div>
                  <div className="h-3 bg-swiss-black w-1/2"></div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="h-16 bg-swiss-black/10 border-2 border-swiss-red"></div>
                    <div className="h-16 bg-swiss-black/10 border-2 border-swiss-black"></div>
                    <div className="h-16 bg-swiss-black/10 border-2 border-swiss-black"></div>
                  </div>
                  <div className="h-20 bg-swiss-red/20 border-2 border-swiss-red"></div>
                </div>
                <div className="absolute top-4 right-4 text-4xl">📊</div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-swiss-red transition-colors">
                Dashboard Gestionale
              </h3>
              <p className="text-swiss-gray-600">Sistema di analytics enterprise</p>
            </div>

            {/* Project 4 - Website */}
            <div className="group cursor-pointer">
              <div className="bg-white aspect-video mb-4 relative overflow-hidden border-2 border-swiss-gray-300">
                <div className="absolute top-0 left-0 right-0 h-12 bg-swiss-black flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-swiss-red"></div>
                    <div className="w-3 h-3 rounded-full bg-swiss-gray-400"></div>
                    <div className="w-3 h-3 rounded-full bg-swiss-gray-400"></div>
                  </div>
                </div>
                <div className="absolute top-12 left-0 right-0 bottom-0 p-6">
                  <div className="h-4 bg-swiss-red w-2/3 mb-4"></div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-20 bg-swiss-gray-200"></div>
                    <div className="h-20 bg-swiss-gray-200"></div>
                    <div className="h-20 bg-swiss-gray-200"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-4xl">🌐</div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-swiss-red transition-colors">
                Corporate Website
              </h3>
              <p className="text-swiss-gray-600">Sito istituzionale multilingua</p>
            </div>

            {/* Project 5 - SaaS */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-swiss-black to-swiss-red aspect-video mb-4 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(to right, white 1px, transparent 1px),
                      linear-gradient(to bottom, white 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }} />
                </div>
                <div className="relative z-10 text-white text-6xl">⚡</div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-swiss-red transition-colors">
                Piattaforma SaaS
              </h3>
              <p className="text-swiss-gray-600">Software as a Service B2B</p>
            </div>

            {/* Project 6 - API */}
            <div className="group cursor-pointer">
              <div className="bg-swiss-black aspect-video mb-4 relative overflow-hidden p-6 font-mono text-xs">
                <div className="text-swiss-red mb-2">{'{'}</div>
                <div className="text-white ml-4">"api": "v2.0",</div>
                <div className="text-white ml-4">"status": "active",</div>
                <div className="text-white ml-4">"requests": 1000000</div>
                <div className="text-swiss-red">{'}'}</div>
                <div className="absolute bottom-4 right-4 text-4xl">🔌</div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-swiss-red transition-colors">
                REST API Enterprise
              </h3>
              <p className="text-swiss-gray-600">Sistema di integrazione avanzato</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
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

        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
            "CREARE SOFTWARE CHE
            <br />
            FA LA DIFFERENZA"
          </h2>
          <p className="text-2xl leading-relaxed opacity-90 mb-12">
            La nostra missione è trasformare idee complesse in soluzioni software 
            eleganti, potenti e affidabili che aiutano le aziende a crescere e innovare.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-24 h-1 bg-white" />
            <span className="text-xl font-bold tracking-[0.3em]">ERRAKUI.DEV</span>
            <div className="w-24 h-1 bg-white" />
          </div>
        </div>
      </section>
    </div>
  )
}

