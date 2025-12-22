# 🚀 SETUP GOOGLE - CHECKLIST PRATICA

## ✅ QUESTO LAVORO FA BENISSIMO ALLA SEO!

### Perché:
- ✅ **42 pagine città** = 42 opportunità di ranking
- ✅ **Contenuto unico** per ogni città (Google ama!)
- ✅ **Keywords locali** specifiche (Verona, Rovigo, Venezia, Zurigo, ecc.)
- ✅ **URL puliti** (`/citta/verona`, `/citta/zurigo`)
- ✅ **Metadata ottimizzati** per ogni città
- ✅ **Sitemap automatica** con tutte le pagine

---

## 📋 CHECKLIST GOOGLE (FALLA ORA!)

### 1️⃣ GOOGLE SEARCH CONSOLE (PRIORITÀ MASSIMA!) ⭐⭐⭐⭐⭐

**COSA FA**: Google indicizza il tuo sito e ti mostra come appare nei risultati

**PASSI**:

1. **Vai su**: https://search.google.com/search-console
2. **Login** con il tuo account Google
3. **Aggiungi proprietà** → Inserisci: `errakui.dev`
4. **Verifica dominio** (scegli uno dei metodi):
   - **Metodo DNS** (consigliato): Aggiungi record TXT nel tuo registrar
   - **Metodo HTML**: Scarica file HTML e caricalo in `public/`
   - **Metodo Google Analytics**: Se hai già GA configurato
5. **Invia sitemap**: 
   - Vai su "Sitemap" nel menu
   - Inserisci: `https://errakui.dev/sitemap.xml`
   - Click "Invia"
6. **Attendi 2-7 giorni** per l'indicizzazione

**RISULTATO**: Google inizia a indicizzare tutte le 42 pagine città!

---

### 2️⃣ GOOGLE ANALYTICS 4 (IMPORTANTE!) ⭐⭐⭐⭐

**COSA FA**: Traccia visitatori, conversioni, pagine più viste

**PASSI**:

1. **Vai su**: https://analytics.google.com
2. **Crea account** (se non ce l'hai)
3. **Crea proprietà**:
   - Nome: "ERRAKUI.DEV"
   - URL: `https://errakui.dev`
   - Fuso orario: Europe/Zurich
   - Valuta: CHF
4. **Ottieni ID**: Ti darà un ID tipo `G-XXXXXXXXXX`
5. **Configura nel sito**:
   - Apri: `src/context/CookieConsentContext.tsx`
   - Linea 116: Sostituisci `// const GA_ID = 'G-XXXXXXXXXX'` con `const GA_ID = 'G-XXXXXXXXXX'` (il tuo ID)
   - Linee 119-134: Togli i commenti `//` da tutte le righe
6. **Commit e push**:
   ```bash
   git add src/context/CookieConsentContext.tsx
   git commit -m "Aggiunto Google Analytics"
   git push
   ```
7. **Verifica**: Dopo il deploy, vai su Analytics → Realtime → Dovresti vedere visite

**RISULTATO**: Vedi chi visita il sito, da dove, quali pagine, conversioni!

---

### 3️⃣ GOOGLE MY BUSINESS (FONDAMENTALE PER SEO LOCALE!) ⭐⭐⭐⭐⭐

**COSA FA**: Ti fa apparire nelle ricerche locali tipo "software house Lugano"

**PASSI**:

1. **Vai su**: https://business.google.com
2. **Crea profilo business**:
   - Nome: **ERRAKUI.DEV**
   - Categoria: **Software house** / **Agenzia web** / **Sviluppatore software**
   - Indirizzo: **Lugano, Ticino, Svizzera**
   - Telefono: **+41 77 218 69 71**
   - Sito web: **https://errakui.dev**
   - Email: **info@errakui.dev**
   - P.IVA: **CHE-478.305.574**
3. **Verifica business** (Google ti invierà una cartolina per posta o verifica telefonica)
4. **Completa profilo**:
   - Aggiungi foto ufficio/team
   - Orari: Lun-Ven 09:00-18:00
   - Descrizione: "Software house svizzera a Lugano. Sviluppo siti web, app mobile e software gestionali."
   - Servizi: Sviluppo Web, App Mobile, Software Gestionali, Consulenza IT
5. **CHIEDI RECENSIONI AI CLIENTI!** (20+ recensioni in 30 giorni = ranking top!)
   - Invia link recensioni ai clienti soddisfatti
   - Rispondi sempre alle recensioni

**RISULTATO**: Appari nelle ricerche locali "software house Lugano"!

---

### 4️⃣ GOOGLE TAG MANAGER (Opzionale ma utile) ⭐⭐⭐

**COSA FA**: Gestisci tutti i tag (Analytics, Facebook Pixel, ecc.) da un unico posto

**PASSI**:

1. **Vai su**: https://tagmanager.google.com
2. **Crea container** per `errakui.dev`
3. **Ottieni ID**: Tipo `GTM-XXXXXXX`
4. **Aggiungi nel sito** (se vuoi, posso farlo io)

---

## 📊 COSA VEDRAI DOPO IL SETUP

### Google Search Console (dopo 7-14 giorni):
- ✅ Quante pagine sono indicizzate (dovresti vedere ~42 pagine città)
- ✅ Query di ricerca che portano traffico
- ✅ Click-through rate (CTR)
- ✅ Errori da sistemare
- ✅ Performance per ogni pagina

### Google Analytics (immediato):
- ✅ Visitatori in tempo reale
- ✅ Pagine più viste
- ✅ Provenienza traffico (Google, social, diretto)
- ✅ Conversioni (contatti, preventivi)
- ✅ Device (mobile, desktop, tablet)

### Google My Business (dopo verifica):
- ✅ Appari nelle ricerche locali
- ✅ Recensioni visibili
- ✅ Click su "Sito web" e "Chiama"
- ✅ Visualizzazioni profilo

---

## 🎯 PRIORITÀ (ORDINE DI ESECUZIONE)

### OGGI (30 minuti):
1. ✅ Google Search Console → Aggiungi proprietà e sitemap
2. ✅ Google Analytics → Crea proprietà e ottieni ID

### QUESTA SETTIMANA:
3. ✅ Google My Business → Crea profilo e verifica
4. ✅ Configura Google Analytics nel sito (modifica CookieConsentContext.tsx)

### PROSSIME 2 SETTIMANE:
5. ✅ Chiedi 10+ recensioni Google My Business
6. ✅ Monitora Search Console per errori
7. ✅ Verifica che tutte le pagine siano indicizzate

---

## 🔍 COME VERIFICARE CHE FUNZIONA

### Search Console:
- Vai su: https://search.google.com/search-console
- Menu "Copertura" → Dovresti vedere pagine indicizzate
- Menu "Sitemap" → Dovresti vedere "Inviata" con 42+ URL

### Analytics:
- Vai su: https://analytics.google.com
- Menu "Realtime" → Visita il sito → Dovresti vedere te stesso
- Menu "Rapporti" → Dopo 24h vedi statistiche

### My Business:
- Cerca su Google: "software house Lugano"
- Dovresti vedere il tuo profilo nella mappa (dopo verifica)

---

## ⚠️ COSE IMPORTANTI

1. **NON aspettare**: Fai Search Console OGGI, è gratuito e fondamentale
2. **Sitemap**: Inviata una volta, Google la aggiorna automaticamente
3. **Tempo**: Google impiega 2-7 giorni per indicizzare (normale!)
4. **Recensioni**: Chiedile ai clienti, sono oro per SEO locale
5. **Monitora**: Controlla Search Console ogni settimana

---

## 📞 SE HAI PROBLEMI

- **Verifica dominio non funziona?** → Prova metodo HTML o DNS
- **Analytics non traccia?** → Verifica che il cookie banner permetta analytics
- **My Business non verifica?** → Attendi cartolina postale (5-7 giorni)

---

## ✅ DOPO IL SETUP

Dopo aver fatto tutto questo, il tuo sito:
- ✅ È indicizzato su Google
- ✅ Traccia visitatori e conversioni
- ✅ Appare nelle ricerche locali
- ✅ Ha 42 pagine città ottimizzate per SEO

**Risultato atteso in 30-60 giorni**: Ranking TOP 10 per "software house [città]"!

---

**🚀 FALLO ORA! È GRATIS E CI VUOLE 30 MINUTI!**
