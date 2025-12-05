'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    acceptPrivacy: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validazione
    const newErrors: { [key: string]: string } = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome obbligatorio'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email obbligatoria'
    }
    if (!formData.service) {
      newErrors.service = 'Seleziona un servizio'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Messaggio obbligatorio'
    }
    if (!formData.acceptPrivacy) {
      newErrors.acceptPrivacy = 'Devi accettare Privacy Policy e Termini e Condizioni'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      // Scroll al primo errore
      const firstError = document.querySelector('.error-message')
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }
    
    setErrors({})
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('✅ Grazie per averci contattato! Ti risponderemo entro 24 ore.')
    setIsSubmitting(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: '',
      acceptPrivacy: false,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
    
    // Rimuovi errore quando l'utente inizia a scrivere
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      })
    }
  }

  const contactInfo = [
    {
      icon: '📱',
      title: 'TELEFONO / WHATSAPP',
      detail: '+41 77 218 69 71',
      link: 'tel:+41772186971',
      whatsapp: 'https://wa.me/41772186971',
    },
    {
      icon: '📧',
      title: 'EMAIL',
      detail: 'info@errakui.dev',
      link: 'mailto:info@errakui.dev',
    },
    {
      icon: '📍',
      title: 'SEDE',
      detail: 'Lugano, Schweiz',
      link: null,
    },
    {
      icon: '🏢',
      title: 'P.IVA',
      detail: 'CHE-478.305.574',
      link: null,
    },
  ]

  const offices = [
    {
      city: 'LUGANO',
      piva: 'CHE-478.305.574',
      country: 'Schweiz',
      isPrimary: true,
    },
  ]

  const faqs = [
    {
      question: 'Quanto tempo richiede un progetto?',
      answer: 'I tempi variano da 4-6 settimane per progetti semplici a 6-12 mesi per soluzioni enterprise complesse.',
    },
    {
      question: 'Quali sono i costi?',
      answer: 'Ogni progetto è unico. Offriamo preventivi personalizzati dopo un\'analisi dettagliata delle esigenze.',
    },
    {
      question: 'Offrite supporto post-lancio?',
      answer: 'Sì, offriamo pacchetti di manutenzione e supporto continuo per tutti i nostri clienti.',
    },
    {
      question: 'Lavorate con startup?',
      answer: 'Assolutamente! Lavoriamo con aziende di tutte le dimensioni, dalle startup alle enterprise.',
    },
  ]

  return (
    <div className="bg-white pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-1 bg-swiss-red" />
                <span className="text-sm tracking-[0.3em] text-swiss-gray-500 font-bold">
                  CONTATTACI
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none">
                INIZIAMO
                <br />
                <span className="text-swiss-red">UN NUOVO</span>
                <br />
                PROGETTO
              </h1>
              <p className="text-xl text-swiss-gray-600 leading-relaxed mb-12">
                Trasformiamo la tua visione in realtà. Contattaci oggi per una 
                consulenza gratuita e scopri come possiamo aiutarti.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center p-6 border border-swiss-gray-300 hover:border-swiss-red hover:bg-swiss-gray-100 transition-all group"
                  >
                    <div className="text-4xl mr-6 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs tracking-[0.3em] text-swiss-gray-500 mb-1">
                        {info.title}
                      </div>
                      {info.link ? (
                        <div className="space-y-1">
                          <a
                            href={info.link}
                            className="text-lg font-bold hover:text-swiss-red transition-colors block"
                          >
                            {info.detail}
                          </a>
                          {info.whatsapp && (
                            <a
                              href={info.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                              </svg>
                              Chat WhatsApp
                            </a>
                          )}
                        </div>
                      ) : (
                        <div className="text-lg font-bold">{info.detail}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                {[
                  { value: '<24h', label: 'TEMPO DI RISPOSTA' },
                  { value: '100%', label: 'CONSULENZA GRATUITA' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-swiss-black text-white p-8 text-center hover:bg-swiss-red transition-colors cursor-pointer group"
                  >
                    <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    <div className="text-xs tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-swiss-gray-100 p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">RICHIEDI INFORMAZIONI</h2>
                <p className="text-swiss-gray-600">
                  Compila il form e ti ricontatteremo entro 24 ore
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-xs tracking-[0.2em] font-bold mb-2">
                    NOME COMPLETO *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 border-2 ${
                      errors.name ? 'border-swiss-red' : 'border-swiss-gray-300'
                    } focus:border-swiss-red focus:outline-none transition-colors bg-white`}
                    placeholder="Mario Rossi"
                  />
                  {errors.name && (
                    <p className="error-message text-swiss-red text-sm mt-2">⚠️ {errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs tracking-[0.2em] font-bold mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 border-2 ${
                      errors.email ? 'border-swiss-red' : 'border-swiss-gray-300'
                    } focus:border-swiss-red focus:outline-none transition-colors bg-white`}
                    placeholder="mario.rossi@email.com"
                  />
                  {errors.email && (
                    <p className="error-message text-swiss-red text-sm mt-2">⚠️ {errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs tracking-[0.2em] font-bold mb-2">
                    TELEFONO
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-swiss-gray-300 focus:border-swiss-red focus:outline-none transition-colors bg-white"
                    placeholder="+41 00 000 00 00"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-xs tracking-[0.2em] font-bold mb-2">
                    AZIENDA
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-swiss-gray-300 focus:border-swiss-red focus:outline-none transition-colors bg-white"
                    placeholder="Nome azienda"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs tracking-[0.2em] font-bold mb-2">
                    SERVIZIO DI INTERESSE *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 border-2 ${
                      errors.service ? 'border-swiss-red' : 'border-swiss-gray-300'
                    } focus:border-swiss-red focus:outline-none transition-colors bg-white`}
                  >
                    <option value="">Seleziona un servizio</option>
                    <option value="web">Sviluppo Web</option>
                    <option value="mobile">App Mobile</option>
                    <option value="gestionale">Software Gestionale</option>
                    <option value="custom">Software Personalizzato</option>
                    <option value="consulting">Consulenza</option>
                  </select>
                  {errors.service && (
                    <p className="error-message text-swiss-red text-sm mt-2">⚠️ {errors.service}</p>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs tracking-[0.2em] font-bold mb-2">
                    BUDGET INDICATIVO
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-swiss-gray-300 focus:border-swiss-red focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Seleziona un range</option>
                    <option value="10-25k">CHF 10'000 - 25'000</option>
                    <option value="25-50k">CHF 25'000 - 50'000</option>
                    <option value="50-100k">CHF 50'000 - 100'000</option>
                    <option value="100k+">CHF 100'000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs tracking-[0.2em] font-bold mb-2">
                    MESSAGGIO *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-6 py-4 border-2 ${
                      errors.message ? 'border-swiss-red' : 'border-swiss-gray-300'
                    } focus:border-swiss-red focus:outline-none transition-colors bg-white resize-none`}
                    placeholder="Raccontaci del tuo progetto..."
                  />
                  {errors.message && (
                    <p className="error-message text-swiss-red text-sm mt-2">⚠️ {errors.message}</p>
                  )}
                </div>

                {/* Privacy Acceptance */}
                <div className={`border-2 ${
                  errors.acceptPrivacy ? 'border-swiss-red bg-red-50' : 'border-swiss-gray-300 bg-swiss-gray-100'
                } p-6`}>
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      name="acceptPrivacy"
                      checked={formData.acceptPrivacy}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 border-2 border-swiss-gray-400 checked:bg-swiss-red checked:border-swiss-red focus:ring-swiss-red cursor-pointer"
                    />
                    <span className="ml-4 text-sm text-swiss-gray-700 leading-relaxed">
                      <strong className="text-swiss-black">Accetto la Privacy Policy e i Termini e Condizioni *</strong>
                      <br />
                      <span className="text-xs">
                        Ho letto e accetto la{' '}
                        <a href="/privacy-policy" target="_blank" className="text-swiss-red hover:underline font-bold">
                          Privacy Policy
                        </a>
                        {' '}e i{' '}
                        <a href="/termini-condizioni" target="_blank" className="text-swiss-red hover:underline font-bold">
                          Termini e Condizioni
                        </a>
                        {' '}di ERRAKUI.DEV. Autorizzo il trattamento dei miei dati personali per la gestione della richiesta.
                      </span>
                    </span>
                  </label>
                  {errors.acceptPrivacy && (
                    <p className="error-message text-swiss-red text-sm mt-3 ml-9">
                      ⚠️ {errors.acceptPrivacy}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-swiss-red text-white py-6 font-bold text-lg hover:bg-swiss-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'INVIO IN CORSO...' : 'INVIA RICHIESTA →'}
                </button>

                <div className="bg-swiss-gray-100 p-4 text-center">
                  <p className="text-xs text-swiss-gray-600">
                    🔒 I tuoi dati sono protetti secondo la{' '}
                    <strong>nLPD</strong> (Legge svizzera protezione dati)
                    <br />
                    Non condividiamo mai i dati con terze parti
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="py-20 px-6 md:px-12 bg-swiss-black text-white">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              LA NOSTRA SEDE
              <br />
              <span className="text-swiss-red">IN SVIZZERA</span>
            </h2>
            <p className="text-xl text-swiss-gray-400">
              Operativi da Lugano per servire clienti in tutto il mondo
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {offices.map((office, index) => (
              <div
                key={index}
                className="p-16 border-2 border-swiss-red bg-swiss-red"
              >
                <div className="flex items-start justify-between mb-12">
                  <div className="text-8xl font-mono font-bold text-white/30">
                    01
                  </div>
                  <span className="text-xs tracking-wider bg-white text-swiss-red px-4 py-2 font-bold">
                    SEDE OPERATIVA
                  </span>
                </div>

                <h3 className="text-5xl font-bold mb-8">{office.city}</h3>

                <div className="space-y-6 text-xl">
                  <div>
                    <div className="text-sm text-white/70 mb-2 tracking-wider">PAESE</div>
                    <div className="font-bold">{office.country}</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-2 tracking-wider">P.IVA</div>
                    <div className="font-bold font-mono text-2xl">{office.piva}</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-2 tracking-wider">TELEFONO</div>
                    <a href="tel:+41772186971" className="font-bold hover:underline block mb-2">
                      +41 77 218 69 71
                    </a>
                    <a 
                      href="https://wa.me/41772186971" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-2 tracking-wider">EMAIL</div>
                    <a href="mailto:info@errakui.dev" className="font-bold hover:underline">
                      info@errakui.dev
                    </a>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/30">
                  <p className="text-lg opacity-90 leading-relaxed">
                    La nostra sede a Lugano ci permette di combinare l'eccellenza svizzera 
                    con la flessibilità moderna, servendo clienti in tutta Europa e oltre.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              DOMANDE
              <span className="text-swiss-red"> FREQUENTI</span>
            </h2>
            <p className="text-xl text-swiss-gray-600">
              Risposte alle domande più comuni
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group border-2 border-swiss-gray-300 hover:border-swiss-red transition-all"
              >
                <summary className="p-8 cursor-pointer list-none flex items-center justify-between font-bold text-xl">
                  <span className="flex-1">{faq.question}</span>
                  <span className="text-3xl text-swiss-red group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-8 pb-8 text-lg text-swiss-gray-600 leading-relaxed border-t border-swiss-gray-300 pt-6">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center p-12 bg-swiss-gray-100">
            <h3 className="text-2xl font-bold mb-4">
              Non trovi la risposta che cerchi?
            </h3>
            <p className="text-swiss-gray-600 mb-6">
              Contattaci direttamente e saremo felici di aiutarti
            </p>
            <a
              href="mailto:info@errakui.dev"
              className="inline-block px-12 py-4 bg-swiss-red text-white font-bold hover:bg-swiss-black transition-colors"
            >
              CONTATTACI ORA
            </a>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-[600px] bg-swiss-gray-300 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl mb-6">📍</div>
            <h3 className="text-4xl font-bold mb-4">VIENI A TROVARCI</h3>
            <p className="text-xl text-swiss-gray-600 mb-8">
              Le nostre sedi sono facilmente raggiungibili
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-swiss-red text-white font-bold hover:bg-swiss-black transition-colors"
            >
              APRI IN GOOGLE MAPS
            </a>
          </div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, black 1px, transparent 1px),
              linear-gradient(to bottom, black 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 px-6 md:px-12 bg-swiss-red text-white">
        <div className="max-w-[1800px] mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">SEGUICI SUI SOCIAL</h2>
          <p className="text-xl mb-12 opacity-90">
            Resta aggiornato su progetti, insights e novità
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'LINKEDIN', followers: '5K+' },
              { name: 'GITHUB', followers: '2K+' },
              { name: 'TWITTER', followers: '8K+' },
              { name: 'DRIBBBLE', followers: '3K+' },
              { name: 'INSTAGRAM', followers: '10K+' },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="group flex flex-col items-center justify-center w-48 h-48 border-2 border-white hover:bg-white hover:text-swiss-red transition-all"
              >
                <span className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                  {social.followers}
                </span>
                <span className="text-sm tracking-wider">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

