import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Informativa sulla privacy di ERRAKUI.DEV. Trattamento dei dati personali secondo nLPD e GDPR.',
}

export default function PrivacyPolicyPage() {
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
            PRIVACY POLICY
          </h1>
          <p className="text-xl text-swiss-gray-600">
            Informativa sulla protezione dei dati personali ai sensi della nuova 
            Legge federale svizzera sulla protezione dei dati (nLPD)
          </p>
          <p className="text-sm text-swiss-gray-500 mt-4">
            Ultimo aggiornamento: 5 Dicembre 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">01</span>
              Titolare del Trattamento
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                <strong>ERRAKUI.DEV</strong><br />
                P.IVA: CHE-478.305.574<br />
                Sede: Lugano, Schweiz<br />
                Email: info@errakui.dev<br />
                Tel/WhatsApp: +41 77 218 69 71
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">02</span>
              Principi Generali
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                Conformemente alla nuova Legge federale sulla protezione dei dati (nLPD) in vigore dal 1° settembre 2023 
                e al Regolamento generale sulla protezione dei dati (GDPR) dell'Unione Europea, ci impegniamo a proteggere 
                i dati personali dei nostri clienti e utenti con la massima serietà e professionalità.
              </p>
              <p className="text-swiss-gray-600 leading-relaxed">
                Trattiamo i dati personali secondo i seguenti principi:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-2">
                <li><strong>Liceità e buona fede:</strong> Trattamento legittimo e trasparente</li>
                <li><strong>Finalità determinate:</strong> Dati raccolti per scopi specifici ed espliciti</li>
                <li><strong>Proporzionalità:</strong> Solo dati necessari agli scopi dichiarati</li>
                <li><strong>Esattezza:</strong> Dati aggiornati e corretti</li>
                <li><strong>Limitazione della conservazione:</strong> Conservazione per il tempo strettamente necessario</li>
                <li><strong>Sicurezza:</strong> Misure tecniche e organizzative adeguate</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">03</span>
              Dati Raccolti
            </h2>
            <div className="pl-12 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-swiss-black">3.1 Dati Forniti Volontariamente</h3>
                <p className="text-swiss-gray-600 leading-relaxed mb-2">
                  Quando ci contatti tramite form, email o WhatsApp, raccogliamo:
                </p>
                <ul className="list-disc pl-6 text-swiss-gray-600 space-y-1">
                  <li>Nome e cognome</li>
                  <li>Indirizzo email</li>
                  <li>Numero di telefono</li>
                  <li>Nome azienda (opzionale)</li>
                  <li>Messaggio e richieste specifiche</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-swiss-black">3.2 Dati di Navigazione</h3>
                <p className="text-swiss-gray-600 leading-relaxed mb-2">
                  Durante la navigazione sul sito raccogliamo automaticamente:
                </p>
                <ul className="list-disc pl-6 text-swiss-gray-600 space-y-1">
                  <li>Indirizzo IP</li>
                  <li>Tipo di browser e dispositivo</li>
                  <li>Sistema operativo</li>
                  <li>Pagine visitate e tempo di permanenza</li>
                  <li>Provenienza del traffico</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-swiss-black">3.3 Cookie e Tecnologie Simili</h3>
                <p className="text-swiss-gray-600 leading-relaxed">
                  Utilizziamo cookie tecnici essenziali per il funzionamento del sito. 
                  Per maggiori informazioni consulta la nostra <a href="/cookie-policy" className="text-swiss-red hover:underline">Cookie Policy</a>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">04</span>
              Finalità del Trattamento
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                I tuoi dati personali vengono trattati per le seguenti finalità:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-2">
                <li><strong>Risposta alle richieste:</strong> Gestire e rispondere alle tue richieste di contatto</li>
                <li><strong>Fornitura servizi:</strong> Esecuzione dei servizi richiesti e contratti stipulati</li>
                <li><strong>Comunicazioni commerciali:</strong> Invio di informazioni su servizi (solo con consenso)</li>
                <li><strong>Miglioramento servizi:</strong> Analisi statistiche per migliorare il sito e i servizi</li>
                <li><strong>Adempimenti legali:</strong> Rispetto degli obblighi di legge fiscali e contabili</li>
                <li><strong>Sicurezza:</strong> Prevenzione frodi e protezione dei sistemi</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">05</span>
              Base Giuridica del Trattamento
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                Il trattamento dei dati si basa su:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-2">
                <li><strong>Consenso:</strong> Quando fornito esplicitamente (art. 6 nLPD)</li>
                <li><strong>Esecuzione contrattuale:</strong> Per fornire i servizi richiesti</li>
                <li><strong>Interesse legittimo:</strong> Per migliorare i servizi e garantire la sicurezza</li>
                <li><strong>Obblighi legali:</strong> Per adempiere a obblighi fiscali e contabili</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">06</span>
              Condivisione dei Dati
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                I tuoi dati possono essere condivisi con:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-2">
                <li><strong>Fornitori di servizi:</strong> Partner tecnici per hosting, email e analytics</li>
                <li><strong>Autorità competenti:</strong> Quando richiesto dalla legge</li>
                <li><strong>Consulenti professionali:</strong> Commercialisti, avvocati (con obbligo di riservatezza)</li>
              </ul>
              <p className="text-swiss-gray-600 leading-relaxed mt-4">
                <strong>Non vendiamo mai i tuoi dati a terze parti.</strong>
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">07</span>
              Trasferimento Dati all'Estero
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                Alcuni fornitori di servizi potrebbero essere situati al di fuori della Svizzera. 
                In tal caso, ci assicuriamo che:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-2">
                <li>Il paese garantisca un livello adeguato di protezione dei dati</li>
                <li>Siano in vigore clausole contrattuali standard approvate</li>
                <li>Esistano garanzie adeguate secondo la nLPD e il GDPR</li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">08</span>
              Conservazione dei Dati
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                Conserviamo i dati personali per il tempo strettamente necessario:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-2">
                <li><strong>Richieste di contatto:</strong> 2 anni dalla risposta</li>
                <li><strong>Contratti e fatture:</strong> 10 anni (obbligo fiscale svizzero)</li>
                <li><strong>Newsletter:</strong> Fino alla disiscrizione</li>
                <li><strong>Dati di navigazione:</strong> 12 mesi</li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">09</span>
              I Tuoi Diritti
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                Secondo la nLPD e il GDPR, hai diritto a:
              </p>
              <div className="bg-swiss-gray-100 p-6 rounded-lg space-y-3">
                <div>
                  <strong className="text-swiss-black">✓ Diritto di accesso:</strong>
                  <p className="text-swiss-gray-600 text-sm">Ottenere copia dei tuoi dati personali</p>
                </div>
                <div>
                  <strong className="text-swiss-black">✓ Diritto di rettifica:</strong>
                  <p className="text-swiss-gray-600 text-sm">Correggere dati inesatti o incompleti</p>
                </div>
                <div>
                  <strong className="text-swiss-black">✓ Diritto di cancellazione:</strong>
                  <p className="text-swiss-gray-600 text-sm">Richiedere la cancellazione dei dati ("diritto all'oblio")</p>
                </div>
                <div>
                  <strong className="text-swiss-black">✓ Diritto di limitazione:</strong>
                  <p className="text-swiss-gray-600 text-sm">Limitare il trattamento in determinate circostanze</p>
                </div>
                <div>
                  <strong className="text-swiss-black">✓ Diritto di portabilità:</strong>
                  <p className="text-swiss-gray-600 text-sm">Ricevere i dati in formato strutturato</p>
                </div>
                <div>
                  <strong className="text-swiss-black">✓ Diritto di opposizione:</strong>
                  <p className="text-swiss-gray-600 text-sm">Opporti al trattamento per finalità di marketing</p>
                </div>
                <div>
                  <strong className="text-swiss-black">✓ Diritto di revoca consenso:</strong>
                  <p className="text-swiss-gray-600 text-sm">Revocare il consenso in qualsiasi momento</p>
                </div>
              </div>
              <p className="text-swiss-gray-600 leading-relaxed mt-6">
                Per esercitare i tuoi diritti, contattaci a: <strong>info@errakui.dev</strong>
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">10</span>
              Sicurezza dei Dati
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                Implementiamo misure tecniche e organizzative per proteggere i dati:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-2">
                <li>Crittografia SSL/TLS per la trasmissione dati</li>
                <li>Server sicuri con protezione firewall</li>
                <li>Backup regolari</li>
                <li>Accesso limitato solo a personale autorizzato</li>
                <li>Formazione continua del personale sulla protezione dati</li>
              </ul>
            </div>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">11</span>
              Reclami
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                In caso di controversie, puoi presentare reclamo all'autorità svizzera competente:
              </p>
              <div className="bg-swiss-gray-100 p-6 rounded-lg">
                <strong className="text-swiss-black">Incaricato federale della protezione dei dati e della trasparenza (IFPDT)</strong>
                <p className="text-swiss-gray-600 text-sm mt-2">
                  Feldeggweg 1<br />
                  CH-3003 Berna<br />
                  Tel: +41 58 462 43 95<br />
                  Email: info@edoeb.admin.ch<br />
                  Web: www.edoeb.admin.ch
                </p>
              </div>
            </div>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">12</span>
              Modifiche alla Privacy Policy
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                Ci riserviamo il diritto di modificare questa informativa in qualsiasi momento. 
                Le modifiche saranno pubblicate su questa pagina con la data di aggiornamento. 
                Ti invitiamo a consultare regolarmente questa pagina.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">13</span>
              Contatti
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                Per qualsiasi domanda o richiesta relativa al trattamento dei dati personali:
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
            Hai domande sulla nostra Privacy Policy?
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

