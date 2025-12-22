import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Informativa sui cookie utilizzati da ERRAKUI.DEV. Gestione dei cookie secondo nLPD e GDPR.',
}

export default function CookiePolicyPage() {
  return (
    <div className="bg-white pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-1 bg-swiss-red" />
            <span className="text-sm tracking-[0.3em] text-swiss-gray-500 font-bold">
              INFORMATIVA LEGALE
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            COOKIE POLICY
          </h1>
          <p className="text-xl text-swiss-gray-600">
            Informativa sull'utilizzo dei cookie e tecnologie simili
          </p>
          <p className="text-sm text-swiss-gray-500 mt-4">
            Ultimo aggiornamento: 5 Dicembre 2024
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">01</span>
              Cosa sono i Cookie
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo 
                (computer, tablet, smartphone) quando visiti un sito web. Permettono al sito di 
                ricordare le tue azioni e preferenze per migliorare l'esperienza di navigazione.
              </p>
              <p className="text-swiss-gray-600 leading-relaxed">
                I cookie possono essere:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-2">
                <li><strong>Cookie di prima parte:</strong> Impostati direttamente dal nostro sito</li>
                <li><strong>Cookie di terze parti:</strong> Impostati da servizi esterni che utilizziamo</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">02</span>
              Tipologie di Cookie Utilizzati
            </h2>
            <div className="pl-12 space-y-6">
              <div className="bg-swiss-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-swiss-black">Cookie Tecnici (Necessari)</h3>
                <p className="text-swiss-gray-600 leading-relaxed mb-3">
                  Essenziali per il funzionamento del sito. Non richiedono consenso.
                </p>
                <ul className="list-disc pl-6 text-swiss-gray-600 space-y-1 text-sm">
                  <li><strong>Session cookie:</strong> Gestione della sessione utente</li>
                  <li><strong>Security cookie:</strong> Autenticazione e prevenzione frodi</li>
                  <li><strong>Functional cookie:</strong> Preferenze di navigazione</li>
                </ul>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-swiss-red mr-2">●</span>
                  <span className="text-swiss-gray-500">Durata: Sessione o 1 anno</span>
                </div>
              </div>

              <div className="bg-swiss-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-swiss-black">Cookie Analitici</h3>
                <p className="text-swiss-gray-600 leading-relaxed mb-3">
                  Ci aiutano a capire come i visitatori utilizzano il sito.
                </p>
                <ul className="list-disc pl-6 text-swiss-gray-600 space-y-1 text-sm">
                  <li><strong>Google Analytics (se utilizzato):</strong> Statistiche anonime sul traffico</li>
                  <li><strong>Heatmaps:</strong> Analisi del comportamento utente</li>
                </ul>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-swiss-red mr-2">●</span>
                  <span className="text-swiss-gray-500">Durata: 2 anni</span>
                </div>
                <p className="text-xs text-swiss-gray-500 mt-2 italic">
                  Nota: Attualmente non utilizziamo cookie analitici di terze parti
                </p>
              </div>

              <div className="bg-swiss-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-swiss-black">Cookie di Marketing</h3>
                <p className="text-swiss-gray-600 leading-relaxed mb-3">
                  Utilizzati per tracciare i visitatori attraverso i siti web.
                </p>
                <ul className="list-disc pl-6 text-swiss-gray-600 space-y-1 text-sm">
                  <li><strong>Remarketing:</strong> Pubblicità personalizzata</li>
                  <li><strong>Social media:</strong> Condivisione sui social network</li>
                </ul>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-swiss-red mr-2">●</span>
                  <span className="text-swiss-gray-500">Durata: Variabile (fino a 2 anni)</span>
                </div>
                <p className="text-xs text-swiss-gray-500 mt-2 italic">
                  Nota: Attualmente non utilizziamo cookie di marketing
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">03</span>
              Cookie Specifici Utilizzati
            </h2>
            <div className="pl-12 space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-swiss-gray-300">
                  <thead>
                    <tr className="bg-swiss-black text-white">
                      <th className="border border-swiss-gray-300 p-3 text-left">Nome</th>
                      <th className="border border-swiss-gray-300 p-3 text-left">Tipo</th>
                      <th className="border border-swiss-gray-300 p-3 text-left">Scopo</th>
                      <th className="border border-swiss-gray-300 p-3 text-left">Durata</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-swiss-gray-300 p-3 font-mono">session_id</td>
                      <td className="border border-swiss-gray-300 p-3">Tecnico</td>
                      <td className="border border-swiss-gray-300 p-3">Gestione sessione utente</td>
                      <td className="border border-swiss-gray-300 p-3">Sessione</td>
                    </tr>
                    <tr className="bg-swiss-gray-100">
                      <td className="border border-swiss-gray-300 p-3 font-mono">preferences</td>
                      <td className="border border-swiss-gray-300 p-3">Tecnico</td>
                      <td className="border border-swiss-gray-300 p-3">Salvataggio preferenze</td>
                      <td className="border border-swiss-gray-300 p-3">1 anno</td>
                    </tr>
                    <tr>
                      <td className="border border-swiss-gray-300 p-3 font-mono">cookie_consent</td>
                      <td className="border border-swiss-gray-300 p-3">Tecnico</td>
                      <td className="border border-swiss-gray-300 p-3">Memorizza consenso cookie</td>
                      <td className="border border-swiss-gray-300 p-3">1 anno</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">04</span>
              Base Giuridica
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                L'utilizzo dei cookie si basa su:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-2">
                <li><strong>Cookie tecnici:</strong> Interesse legittimo per il funzionamento del sito (art. 6 nLPD)</li>
                <li><strong>Cookie analitici/marketing:</strong> Consenso esplicito dell'utente (art. 6 nLPD)</li>
              </ul>
              <p className="text-swiss-gray-600 leading-relaxed mt-4">
                In conformità con la nuova Legge federale sulla protezione dei dati (nLPD) 
                e il GDPR europeo.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">05</span>
              Gestione dei Cookie
            </h2>
            <div className="pl-12 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-swiss-black">5.1 Impostazioni del Browser</h3>
                <p className="text-swiss-gray-600 leading-relaxed mb-3">
                  Puoi gestire i cookie attraverso le impostazioni del tuo browser:
                </p>
                <div className="space-y-3">
                  <div className="bg-swiss-gray-100 p-4 rounded">
                    <strong className="text-swiss-black">Google Chrome:</strong>
                    <p className="text-sm text-swiss-gray-600 mt-1">
                      Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti
                    </p>
                  </div>
                  <div className="bg-swiss-gray-100 p-4 rounded">
                    <strong className="text-swiss-black">Mozilla Firefox:</strong>
                    <p className="text-sm text-swiss-gray-600 mt-1">
                      Opzioni → Privacy e sicurezza → Cookie e dati dei siti web
                    </p>
                  </div>
                  <div className="bg-swiss-gray-100 p-4 rounded">
                    <strong className="text-swiss-black">Safari:</strong>
                    <p className="text-sm text-swiss-gray-600 mt-1">
                      Preferenze → Privacy → Gestisci dati siti web
                    </p>
                  </div>
                  <div className="bg-swiss-gray-100 p-4 rounded">
                    <strong className="text-swiss-black">Microsoft Edge:</strong>
                    <p className="text-sm text-swiss-gray-600 mt-1">
                      Impostazioni → Cookie e autorizzazioni sito → Gestisci ed elimina cookie
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-swiss-black">5.2 Disabilitazione Cookie</h3>
                <p className="text-swiss-gray-600 leading-relaxed">
                  Puoi disabilitare i cookie in qualsiasi momento. Nota che la disabilitazione 
                  dei cookie tecnici potrebbe limitare alcune funzionalità del sito.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-swiss-black">5.3 Revoca del Consenso</h3>
                <p className="text-swiss-gray-600 leading-relaxed">
                  Puoi revocare il consenso ai cookie analitici e di marketing in qualsiasi momento 
                  modificando le impostazioni del browser o contattandoci a: info@errakui.dev
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">06</span>
              Cookie di Terze Parti
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                Alcuni servizi di terze parti che potremmo utilizzare:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-swiss-red pl-4">
                  <strong className="text-swiss-black">Google Fonts</strong>
                  <p className="text-sm text-swiss-gray-600 mt-1">
                    Servizio di font web. Può installare cookie per misurare le prestazioni.
                    <br />
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="text-swiss-red hover:underline">
                      Privacy Policy Google
                    </a>
                  </p>
                </div>

                <div className="border-l-4 border-swiss-red pl-4">
                  <strong className="text-swiss-black">Vercel Analytics (Hosting)</strong>
                  <p className="text-sm text-swiss-gray-600 mt-1">
                    Analytics server-side senza cookie invasivi.
                    <br />
                    <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener" className="text-swiss-red hover:underline">
                      Privacy Policy Vercel
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">07</span>
              I Tuoi Diritti
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                In relazione ai cookie e ai dati raccolti, hai diritto a:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-2">
                <li>Accedere alle informazioni sui cookie utilizzati</li>
                <li>Revocare il consenso in qualsiasi momento</li>
                <li>Richiedere la cancellazione dei dati raccolti tramite cookie</li>
                <li>Presentare reclamo all'IFPDT (Incaricato federale protezione dati)</li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">08</span>
              Modifiche alla Cookie Policy
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                Ci riserviamo il diritto di modificare questa Cookie Policy in qualsiasi momento. 
                Le modifiche saranno pubblicate su questa pagina con la data di aggiornamento.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">09</span>
              Contatti
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                Per domande sulla Cookie Policy o per esercitare i tuoi diritti:
              </p>
              <div className="bg-swiss-red text-white p-8 rounded-lg">
                <strong className="text-2xl block mb-4">ERRAKUI.DEV</strong>
                <p className="mb-2">P.IVA: CHE-478.305.574</p>
                <p className="mb-2">Email: info@errakui.dev</p>
                <p className="mb-2">Tel/WhatsApp: +41 77 218 69 71</p>
                <p>Sede: Lugano, Schweiz</p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-swiss-gray-100 text-center">
          <p className="text-swiss-gray-600 mb-6">
            Hai domande sulla nostra Cookie Policy?
          </p>
          <a
            href="/contatti"
            className="inline-block px-12 py-4 bg-swiss-red text-white font-bold hover:bg-swiss-black transition-colors"
          >
            CONTATTACI
          </a>
        </div>
      </div>
    </div>
  )
}

