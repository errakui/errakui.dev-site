export default function TerminiCondizioniPage() {
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
            TERMINI E CONDIZIONI
          </h1>
          <p className="text-xl text-swiss-gray-600">
            Condizioni generali di utilizzo del sito e di fornitura dei servizi
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
              Informazioni Generali
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                <strong>ERRAKUI.DEV</strong><br />
                P.IVA: CHE-478.305.574<br />
                Sede: Lugano, Schweiz<br />
                Email: info@errakui.dev<br />
                Tel/WhatsApp: +41 77 218 69 71
              </p>
              <p className="text-swiss-gray-600 leading-relaxed">
                I presenti Termini e Condizioni regolano l'utilizzo del sito web errakui.dev 
                e la fornitura dei servizi offerti da ERRAKUI.DEV.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">02</span>
              Accettazione dei Termini
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                L'accesso e l'utilizzo del sito costituiscono accettazione integrale e incondizionata 
                dei presenti Termini e Condizioni. Se non accetti questi termini, ti preghiamo di 
                non utilizzare il sito.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">03</span>
              Servizi Offerti
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                ERRAKUI.DEV offre servizi di sviluppo software, tra cui:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-2">
                <li>Sviluppo di siti web e applicazioni web</li>
                <li>Sviluppo di applicazioni mobile (iOS e Android)</li>
                <li>Sviluppo di software gestionali e ERP</li>
                <li>Sviluppo di software personalizzati</li>
                <li>Consulenza IT e architettura software</li>
                <li>Manutenzione e supporto tecnico</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">04</span>
              Richieste di Preventivo e Ordini
            </h2>
            <div className="pl-12 space-y-4">
              <h3 className="text-xl font-bold mb-3 text-swiss-black">4.1 Richieste di Preventivo</h3>
              <p className="text-swiss-gray-600 leading-relaxed">
                Le richieste di preventivo possono essere inviate tramite:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-1">
                <li>Form di contatto sul sito</li>
                <li>Email: info@errakui.dev</li>
                <li>WhatsApp: +41 77 218 69 71</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 text-swiss-black mt-6">4.2 Preventivi</h3>
              <p className="text-swiss-gray-600 leading-relaxed">
                I preventivi sono:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-1">
                <li>Gratuiti e senza impegno</li>
                <li>Validi per 30 giorni dalla data di emissione</li>
                <li>Personalizzati in base alle specifiche esigenze</li>
                <li>Vincolanti solo dopo accettazione scritta da parte del cliente</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 text-swiss-black mt-6">4.3 Contratto</h3>
              <p className="text-swiss-gray-600 leading-relaxed">
                Il contratto si perfeziona con:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-1">
                <li>Accettazione scritta del preventivo</li>
                <li>Firma del contratto di servizio</li>
                <li>Pagamento dell'acconto (se previsto)</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">05</span>
              Prezzi e Pagamenti
            </h2>
            <div className="pl-12 space-y-4">
              <h3 className="text-xl font-bold mb-3 text-swiss-black">5.1 Prezzi</h3>
              <p className="text-swiss-gray-600 leading-relaxed">
                I prezzi sono:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-1">
                <li>Espressi in Franchi Svizzeri (CHF) o Euro (EUR)</li>
                <li>IVA esclusa (se applicabile)</li>
                <li>Basati su preventivi personalizzati</li>
                <li>Soggetti a variazione in caso di modifiche al progetto</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 text-swiss-black mt-6">5.2 Modalità di Pagamento</h3>
              <p className="text-swiss-gray-600 leading-relaxed">
                I pagamenti possono essere effettuati tramite:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-1">
                <li>Bonifico bancario</li>
                <li>Carta di credito/debito</li>
                <li>PayPal (commissioni a carico del cliente)</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 text-swiss-black mt-6">5.3 Termini di Pagamento</h3>
              <p className="text-swiss-gray-600 leading-relaxed">
                Salvo diversa indicazione nel contratto:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-1">
                <li>Acconto del 30-50% all'inizio del progetto</li>
                <li>Saldo alla consegna o in rate concordate</li>
                <li>Scadenza fatture: 30 giorni data fattura</li>
                <li>Interessi di mora: 5% annuo sui ritardi oltre 30 giorni</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">06</span>
              Esecuzione dei Servizi
            </h2>
            <div className="pl-12 space-y-4">
              <h3 className="text-xl font-bold mb-3 text-swiss-black">6.1 Tempi di Consegna</h3>
              <p className="text-swiss-gray-600 leading-relaxed">
                I tempi di consegna sono indicativi e possono variare in base a:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-1">
                <li>Complessità del progetto</li>
                <li>Tempestività delle informazioni fornite dal cliente</li>
                <li>Approvazioni e feedback</li>
                <li>Eventi di forza maggiore</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 text-swiss-black mt-6">6.2 Collaborazione del Cliente</h3>
              <p className="text-swiss-gray-600 leading-relaxed">
                Il cliente si impegna a:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-1">
                <li>Fornire tutte le informazioni necessarie</li>
                <li>Rispondere tempestivamente alle richieste</li>
                <li>Fornire materiali (testi, immagini, loghi)</li>
                <li>Approvare le milestone nei tempi concordati</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 text-swiss-black mt-6">6.3 Modifiche al Progetto</h3>
              <p className="text-swiss-gray-600 leading-relaxed">
                Modifiche sostanziali rispetto al preventivo possono comportare:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-1">
                <li>Variazione dei costi</li>
                <li>Estensione dei tempi di consegna</li>
                <li>Emissione di preventivo supplementare</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">07</span>
              Proprietà Intellettuale
            </h2>
            <div className="pl-12 space-y-4">
              <h3 className="text-xl font-bold mb-3 text-swiss-black">7.1 Diritti d'Autore</h3>
              <p className="text-swiss-gray-600 leading-relaxed">
                Il software e i materiali sviluppati rimangono di proprietà di ERRAKUI.DEV fino al 
                saldo completo del corrispettivo. Al pagamento finale, i diritti d'uso vengono 
                trasferiti al cliente secondo quanto concordato.
              </p>

              <h3 className="text-xl font-bold mb-3 text-swiss-black mt-6">7.2 Licenza d'Uso</h3>
              <p className="text-swiss-gray-600 leading-relaxed">
                Salvo diverso accordo, il cliente riceve una licenza:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-1">
                <li>Non esclusiva</li>
                <li>Perpetua</li>
                <li>Non trasferibile</li>
                <li>Limitata all'uso concordato</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 text-swiss-black mt-6">7.3 Materiali del Cliente</h3>
              <p className="text-swiss-gray-600 leading-relaxed">
                Il cliente garantisce di possedere tutti i diritti sui materiali forniti e solleva 
                ERRAKUI.DEV da qualsiasi responsabilità per violazioni di diritti di terzi.
              </p>

              <h3 className="text-xl font-bold mb-3 text-swiss-black mt-6">7.4 Portfolio e Referenze</h3>
              <p className="text-swiss-gray-600 leading-relaxed">
                ERRAKUI.DEV si riserva il diritto di utilizzare i progetti realizzati nel proprio 
                portfolio e materiale promozionale, salvo diverso accordo scritto.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">08</span>
              Garanzie e Responsabilità
            </h2>
            <div className="pl-12 space-y-4">
              <h3 className="text-xl font-bold mb-3 text-swiss-black">8.1 Garanzia Software</h3>
              <p className="text-swiss-gray-600 leading-relaxed">
                Garantiamo il corretto funzionamento del software secondo le specifiche concordate per:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-1">
                <li>3 mesi dalla consegna (bug fixing gratuito)</li>
                <li>Esclusivamente per difetti di programmazione</li>
                <li>Non copre modifiche richieste dal cliente</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 text-swiss-black mt-6">8.2 Limitazione di Responsabilità</h3>
              <p className="text-swiss-gray-600 leading-relaxed">
                ERRAKUI.DEV non è responsabile per:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-1">
                <li>Danni indiretti o perdite di profitto</li>
                <li>Interruzioni di servizio dovute a terze parti</li>
                <li>Perdite di dati non dovute a nostra negligenza</li>
                <li>Uso improprio del software da parte del cliente</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 text-swiss-black mt-6">8.3 Massimale di Responsabilità</h3>
              <p className="text-swiss-gray-600 leading-relaxed">
                La responsabilità massima di ERRAKUI.DEV è limitata all'importo pagato dal cliente 
                per il servizio specifico che ha causato il danno.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">09</span>
              Recesso e Risoluzione
            </h2>
            <div className="pl-12 space-y-4">
              <h3 className="text-xl font-bold mb-3 text-swiss-black">9.1 Recesso del Cliente</h3>
              <p className="text-swiss-gray-600 leading-relaxed">
                Il cliente può recedere dal contratto con preavviso scritto di 15 giorni, salvo:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-1">
                <li>Pagamento del lavoro già svolto</li>
                <li>Rimborso delle spese sostenute</li>
                <li>Penale del 20% sull'importo residuo (se applicabile)</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 text-swiss-black mt-6">9.2 Risoluzione per Inadempimento</h3>
              <p className="text-swiss-gray-600 leading-relaxed">
                In caso di inadempimento grave, la parte adempiente può risolvere il contratto con 
                preavviso scritto di 7 giorni, salvo diritto al risarcimento danni.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">10</span>
              Riservatezza
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                Entrambe le parti si impegnano a mantenere la riservatezza su:
              </p>
              <ul className="list-disc pl-6 text-swiss-gray-600 space-y-1">
                <li>Informazioni tecniche e commerciali</li>
                <li>Dati sensibili scambiati</li>
                <li>Dettagli dei progetti</li>
              </ul>
              <p className="text-swiss-gray-600 leading-relaxed mt-4">
                L'obbligo di riservatezza permane anche dopo la conclusione del contratto.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">11</span>
              Legge Applicabile e Foro Competente
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                I presenti Termini e Condizioni sono regolati dalla legge svizzera.
              </p>
              <p className="text-swiss-gray-600 leading-relaxed">
                Per qualsiasi controversia è competente esclusivamente il Foro di Lugano, Svizzera.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-swiss-red mr-4">12</span>
              Modifiche ai Termini
            </h2>
            <div className="pl-12 space-y-4">
              <p className="text-swiss-gray-600 leading-relaxed">
                ERRAKUI.DEV si riserva il diritto di modificare i presenti Termini e Condizioni in 
                qualsiasi momento. Le modifiche saranno pubblicate su questa pagina e entreranno in 
                vigore dalla data di pubblicazione.
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
                Per domande o chiarimenti sui Termini e Condizioni:
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
            Hai domande sui Termini e Condizioni?
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

