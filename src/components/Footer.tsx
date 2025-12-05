'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    'Sviluppo Web',
    'App Mobile',
    'Software Gestionali',
    'Consulenza IT',
  ]

  const company = [
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Servizi', href: '/servizi' },
    { label: 'Contatti', href: '/contatti' },
  ]

  const social = [
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Dribbble', href: '#' },
  ]

  return (
    <footer className="bg-swiss-black text-white relative overflow-hidden">
      {/* Decorative Red Line */}
      <div className="h-1 bg-swiss-red w-full" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-swiss-red flex items-center justify-center">
                <span className="text-white font-bold text-2xl">E</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-3xl font-bold tracking-tight">ERRAKUI</span>
                <span className="text-sm tracking-[0.3em] text-swiss-gray-400">.DEV</span>
                <span className="text-xs tracking-wider text-swiss-gray-500 mt-1 font-mono">
                  CHE-478.305.574
                </span>
              </div>
            </div>
            <p className="text-swiss-gray-400 text-lg leading-relaxed max-w-md mb-8">
              Software house svizzera specializzata in soluzioni digitali di lusso. 
              Trasformiamo idee in software eccezionali.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 border-2 border-swiss-red flex items-center justify-center hover:bg-swiss-red transition-colors cursor-pointer group">
                <span className="text-swiss-red group-hover:text-white text-xl">🇨🇭</span>
              </div>
              <div>
                <div className="text-xs text-swiss-gray-500 tracking-wider">SWISS QUALITY</div>
                <div className="text-sm font-bold">100% MADE IN SWITZERLAND</div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xs tracking-[0.3em] text-swiss-gray-500 mb-6 font-bold">
              SERVIZI
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-center group cursor-pointer">
                  <span className="w-6 h-6 border border-swiss-gray-600 flex items-center justify-center mr-3 group-hover:border-swiss-red group-hover:bg-swiss-red transition-all">
                    <span className="text-xs text-swiss-gray-500 group-hover:text-white">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </span>
                  <span className="text-swiss-gray-400 group-hover:text-white transition-colors">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-xs tracking-[0.3em] text-swiss-gray-500 mb-6 font-bold">
              AZIENDA
            </h3>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-swiss-gray-400 hover:text-white transition-colors inline-block hover:translate-x-2 duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-xs tracking-[0.3em] text-swiss-gray-500 mb-6 font-bold">
              CONTATTI
            </h3>
            <div className="space-y-6">
              <div>
                <div className="text-xs text-swiss-gray-500 mb-1">TELEFONO / WHATSAPP</div>
                <a
                  href="tel:+41772186971"
                  className="text-white hover:text-swiss-red transition-colors block mb-2"
                >
                  +41 77 218 69 71
                </a>
                <a
                  href="https://wa.me/41772186971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat WhatsApp
                </a>
              </div>
              <div>
                <div className="text-xs text-swiss-gray-500 mb-1">EMAIL</div>
                <a
                  href="mailto:info@errakui.dev"
                  className="text-white hover:text-swiss-red transition-colors"
                >
                  info@errakui.dev
                </a>
              </div>
              <div>
                <div className="text-xs text-swiss-gray-500 mb-1">SEDE</div>
                <div className="text-white">
                  Lugano, Schweiz
                </div>
              </div>
              <div>
                <div className="text-xs text-swiss-gray-500 mb-1">P.IVA</div>
                <div className="text-white font-mono">
                  CHE-478.305.574
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-swiss-gray-600 pt-12 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Resta aggiornato
              </h3>
              <p className="text-swiss-gray-400">
                Ricevi le ultime novità e insights dal mondo dello sviluppo software
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 bg-transparent border border-swiss-gray-600 px-6 py-4 text-white placeholder:text-swiss-gray-600 focus:border-swiss-red focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-swiss-red px-8 py-4 font-bold hover:bg-white hover:text-swiss-red transition-colors"
              >
                ISCRIVITI
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-swiss-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <div className="text-swiss-gray-500 text-sm text-center md:text-left">
              © {currentYear} ERRAKUI.DEV — P.IVA CHE-478.305.574
              <br className="md:hidden" />
              <span className="hidden md:inline"> — </span>
              All rights reserved
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-swiss-gray-500 hover:text-swiss-red transition-colors text-sm font-bold tracking-wider"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Swiss Grid Pattern */}
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 border border-swiss-gray-600"
                  style={{
                    backgroundColor: i === 2 ? '#FF0000' : 'transparent',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs text-swiss-gray-500 pt-4 border-t border-swiss-gray-600">
            <Link href="/privacy-policy" className="hover:text-swiss-red transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/termini-condizioni" className="hover:text-swiss-red transition-colors">
              Termini e Condizioni
            </Link>
            <span>•</span>
            <Link href="/cookie-policy" className="hover:text-swiss-red transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>
    </footer>
  )
}

