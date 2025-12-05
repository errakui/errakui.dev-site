'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useCookieConsent } from '@/context/CookieConsentContext'

export default function CookieBanner() {
  const { showBanner, acceptAll, rejectAll } = useCookieConsent()
  const [showDetails, setShowDetails] = useState(false)

  if (!showBanner) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]" />

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-auto md:max-w-lg z-[101] animate-slide-in">
        <div className="bg-white border-4 border-swiss-black shadow-2xl">
          {/* Header */}
          <div className="bg-swiss-black text-white p-6">
            <div className="flex items-center space-x-3">
              <div className="text-4xl">🍪</div>
              <div>
                <h3 className="text-2xl font-bold">Cookie & Privacy</h3>
                <p className="text-sm text-swiss-gray-400">Gestisci le tue preferenze</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {!showDetails ? (
              <>
                <p className="text-swiss-gray-600 leading-relaxed mb-6">
                  Utilizziamo cookie tecnici essenziali per il funzionamento del sito e, 
                  con il tuo consenso, cookie analitici per migliorare i nostri servizi.
                </p>

                <div className="bg-swiss-gray-100 p-4 rounded mb-6 text-sm">
                  <p className="text-swiss-gray-600">
                    <strong className="text-swiss-black">✓ Cookie tecnici:</strong> Sempre attivi (necessari)
                    <br />
                    <strong className="text-swiss-black">✓ Cookie analitici:</strong> Solo con consenso
                  </p>
                </div>

                <p className="text-xs text-swiss-gray-500 mb-6">
                  Cliccando "Accetta tutto" acconsenti all'uso di tutti i cookie. 
                  Puoi rifiutare i cookie non essenziali cliccando "Solo necessari".
                  <br />
                  <Link href="/privacy-policy" className="text-swiss-red hover:underline">
                    Privacy Policy
                  </Link>
                  {' • '}
                  <Link href="/cookie-policy" className="text-swiss-red hover:underline">
                    Cookie Policy
                  </Link>
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptAll}
                    className="flex-1 bg-swiss-red hover:bg-swiss-black text-white py-4 font-bold transition-colors"
                  >
                    ✓ Accetta Tutto
                  </button>
                  <button
                    onClick={rejectAll}
                    className="flex-1 border-2 border-swiss-black hover:bg-swiss-gray-100 py-4 font-bold transition-colors"
                  >
                    Solo Necessari
                  </button>
                </div>

                <button
                  onClick={() => setShowDetails(true)}
                  className="w-full mt-3 text-sm text-swiss-gray-500 hover:text-swiss-red transition-colors underline"
                >
                  Personalizza preferenze
                </button>
              </>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {/* Cookie Tecnici */}
                  <div className="border-2 border-swiss-gray-300 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-swiss-black">Cookie Tecnici</h4>
                        <p className="text-xs text-swiss-gray-500">Necessari per il funzionamento</p>
                      </div>
                      <div className="bg-swiss-gray-300 px-3 py-1 text-xs font-bold">
                        SEMPRE ATTIVI
                      </div>
                    </div>
                    <p className="text-sm text-swiss-gray-600">
                      Gestione sessione, preferenze, sicurezza
                    </p>
                  </div>

                  {/* Cookie Analitici */}
                  <div className="border-2 border-swiss-gray-300 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-bold text-swiss-black">Cookie Analitici</h4>
                        <p className="text-xs text-swiss-gray-500">Statistiche anonime</p>
                      </div>
                      <label className="relative inline-block w-12 h-6">
                        <input type="checkbox" className="peer sr-only" defaultChecked />
                        <span className="absolute inset-0 bg-swiss-gray-300 peer-checked:bg-swiss-red transition-colors cursor-pointer"></span>
                        <span className="absolute left-1 top-1 w-4 h-4 bg-white peer-checked:left-7 transition-all"></span>
                      </label>
                    </div>
                    <p className="text-sm text-swiss-gray-600">
                      Ci aiutano a migliorare il sito
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptAll}
                    className="flex-1 bg-swiss-red hover:bg-swiss-black text-white py-4 font-bold transition-colors"
                  >
                    Conferma Scelte
                  </button>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="flex-1 border-2 border-swiss-black hover:bg-swiss-gray-100 py-4 font-bold transition-colors"
                  >
                    Indietro
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="bg-swiss-gray-100 px-6 py-3 text-xs text-swiss-gray-500 text-center">
            🇨🇭 Conforme a nLPD (Legge svizzera protezione dati)
          </div>
        </div>
      </div>
    </>
  )
}

