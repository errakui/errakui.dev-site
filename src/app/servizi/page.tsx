'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ServiziPage() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 'web',
      number: '01',
      title: 'WEB DEVELOPMENT',
      subtitle: 'Siti Web & Applicazioni Web',
      description: 'Creiamo esperienze web moderne e performanti utilizzando le tecnologie più avanzate. Ogni progetto è costruito con attenzione ai dettagli, performance ottimali e design impeccabile.',
      features: [
        'Siti Web Istituzionali di Lusso',
        'E-commerce Avanzati',
        'Web Applications (SaaS)',
        'Progressive Web Apps (PWA)',
        'Portali Complessi',
        'Landing Pages Ad Alto Tasso di Conversione',
      ],
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'Node.js',
        'GraphQL',
        'Tailwind CSS',
        'PostgreSQL',
        'MongoDB',
      ],
      process: [
        'Analisi UX/UI e wireframing',
        'Design system e prototipazione',
        'Sviluppo frontend e backend',
        'Testing e quality assurance',
        'Deploy e ottimizzazione',
        'Manutenzione e supporto',
      ],
    },
    {
      id: 'mobile',
      number: '02',
      title: 'MOBILE DEVELOPMENT',
      subtitle: 'App iOS & Android',
      description: 'Sviluppiamo applicazioni mobile native e cross-platform che offrono prestazioni eccellenti e un\'esperienza utente superiore su tutti i dispositivi.',
      features: [
        'App Native iOS & Android',
        'App Cross-Platform',
        'App per Wearables',
        'Integrazione Backend',
        'Push Notifications',
        'In-App Purchases & Subscriptions',
      ],
      technologies: [
        'React Native',
        'Flutter',
        'Swift',
        'Kotlin',
        'Firebase',
        'AWS Amplify',
        'REST APIs',
        'WebSockets',
      ],
      process: [
        'Studio di mercato e competitor',
        'Prototipazione e design',
        'Sviluppo nativo/cross-platform',
        'Testing su dispositivi reali',
        'Pubblicazione su App Store',
        'Monitoraggio e aggiornamenti',
      ],
    },
    {
      id: 'gestionale',
      number: '03',
      title: 'SOFTWARE GESTIONALI',
      subtitle: 'ERP, CRM & Business Software',
      description: 'Realizziamo software gestionali su misura che ottimizzano i processi aziendali, aumentano la produttività e forniscono insights preziosi per il business.',
      features: [
        'ERP Personalizzati',
        'CRM & Sales Management',
        'Sistema di Warehouse Management',
        'Gestione Documentale',
        'Business Intelligence & Analytics',
        'Integrazione con Sistemi Esistenti',
      ],
      technologies: [
        'Java',
        'C#/.NET',
        'Python',
        'SAP Integration',
        'Oracle',
        'Microsoft SQL Server',
        'Power BI',
        'Tableau',
      ],
      process: [
        'Analisi dei processi aziendali',
        'Mappatura requisiti funzionali',
        'Architettura del sistema',
        'Sviluppo modulare iterativo',
        'Training del personale',
        'Supporto e manutenzione continua',
      ],
    },
    {
      id: 'custom',
      number: '04',
      title: 'SOFTWARE PERSONALIZZATO',
      subtitle: 'Soluzioni Su Misura',
      description: 'Ogni azienda ha esigenze uniche. Creiamo software personalizzati che si adattano perfettamente ai tuoi processi, obiettivi e visione aziendale.',
      features: [
        'Analisi e Consulenza IT',
        'Architettura Software',
        'API Development & Integration',
        'Microservices Architecture',
        'Cloud Solutions (AWS, Azure, GCP)',
        'DevOps & CI/CD',
      ],
      technologies: [
        'Go',
        'Rust',
        'Python',
        'Docker',
        'Kubernetes',
        'Terraform',
        'GitHub Actions',
        'Jenkins',
      ],
      process: [
        'Workshop di discovery',
        'Proof of Concept (PoC)',
        'Architettura e design',
        'Sviluppo agile',
        'Code review e refactoring',
        'Documentazione tecnica completa',
      ],
    },
  ]

  const whyUs = [
    {
      icon: '🇨🇭',
      title: 'QUALITÀ SVIZZERA',
      description: 'Precisione, affidabilità e attenzione ai dettagli in ogni progetto',
    },
    {
      icon: '⚡',
      title: 'TECNOLOGIE MODERNE',
      description: 'Utilizziamo sempre le tecnologie più avanzate e performanti',
    },
    {
      icon: '🎯',
      title: 'APPROCCIO SU MISURA',
      description: 'Ogni soluzione è progettata specificamente per le tue esigenze',
    },
    {
      icon: '🔒',
      title: 'SICUREZZA & PRIVACY',
      description: 'Standard di sicurezza elevati e conformità GDPR garantita',
    },
    {
      icon: '📈',
      title: 'SCALABILITÀ',
      description: 'Architetture progettate per crescere con il tuo business',
    },
    {
      icon: '🤝',
      title: 'SUPPORTO CONTINUO',
      description: 'Assistenza dedicata e manutenzione a lungo termine',
    },
  ]

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
                  I NOSTRI SERVIZI
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-none">
                SOLUZIONI
                <br />
                <span className="text-swiss-red">DIGITALI</span>
                <br />
                COMPLETE
              </h1>
              <p className="text-xl text-swiss-gray-400 leading-relaxed">
                Dalla strategia al deployment, offriamo servizi completi per trasformare 
                le tue idee in software di successo.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="aspect-square border-2 border-swiss-gray-600 hover:border-swiss-red hover:bg-swiss-red group cursor-pointer transition-all duration-300 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-5xl font-mono font-bold mb-2 group-hover:scale-110 transition-transform">
                      {service.number}
                    </div>
                    <div className="text-xs tracking-wider px-4">
                      {service.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          {/* Service Tabs */}
          <div className="flex flex-wrap gap-2 mb-16 border-b border-swiss-gray-300">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`px-8 py-6 font-bold transition-all ${
                  activeService === index
                    ? 'bg-swiss-red text-white'
                    : 'bg-swiss-gray-100 hover:bg-swiss-gray-200'
                }`}
              >
                <span className="text-xs font-mono mr-2">{service.number}</span>
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          {services.map((service, index) => (
            <div
              key={index}
              className={`${activeService === index ? 'block' : 'hidden'}`}
            >
              <div className="grid lg:grid-cols-12 gap-16">
                {/* Left Column */}
                <div className="lg:col-span-7">
                  <div className="mb-12">
                    <h2 className="text-5xl font-bold mb-4">{service.subtitle}</h2>
                    <p className="text-xl text-swiss-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                      <span className="w-8 h-8 bg-swiss-red text-white flex items-center justify-center mr-4 text-sm">
                        ✓
                      </span>
                      COSA OFFRIAMO
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start p-4 border border-swiss-gray-300 hover:border-swiss-red hover:bg-swiss-gray-100 transition-all group"
                        >
                          <span className="text-swiss-red mr-3 text-xl">→</span>
                          <span className="flex-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                      <span className="w-8 h-8 bg-swiss-black text-white flex items-center justify-center mr-4 text-sm">
                        ⚡
                      </span>
                      IL NOSTRO PROCESSO
                    </h3>
                    <div className="space-y-4">
                      {service.process.map((step, i) => (
                        <div
                          key={i}
                          className="flex items-center p-6 border-l-4 border-swiss-gray-300 hover:border-swiss-red hover:bg-swiss-gray-100 transition-all"
                        >
                          <span className="text-4xl font-mono text-swiss-gray-300 mr-6 w-16">
                            {(i + 1).toString().padStart(2, '0')}
                          </span>
                          <span className="text-lg">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Technologies */}
                <div className="lg:col-span-5">
                  <div className="sticky top-32">
                    <div className="bg-swiss-black text-white p-12">
                      <h3 className="text-2xl font-bold mb-8">
                        TECNOLOGIE
                        <br />
                        UTILIZZATE
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {service.technologies.map((tech, i) => (
                          <div
                            key={i}
                            className="aspect-square border border-swiss-gray-600 hover:border-swiss-red hover:bg-swiss-red flex items-center justify-center text-center p-4 transition-all cursor-pointer group"
                          >
                            <span className="text-sm font-bold group-hover:scale-110 transition-transform">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-12 pt-8 border-t border-swiss-gray-600">
                        <Link
                          href="/contatti"
                          className="block w-full bg-swiss-red hover:bg-white hover:text-swiss-red text-center py-4 font-bold transition-colors"
                        >
                          RICHIEDI UN PREVENTIVO →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-12 bg-swiss-gray-100">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              PERCHÉ SCEGLIERE
              <span className="text-swiss-red"> ERRAKUI.DEV</span>
            </h2>
            <p className="text-xl text-swiss-gray-600 max-w-3xl mx-auto">
              Combinamo eccellenza tecnica, design impeccabile e precisione svizzera
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-swiss-black">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-12 hover:bg-swiss-red hover:text-white group transition-all duration-500 cursor-pointer"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-swiss-gray-600 group-hover:text-white transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

