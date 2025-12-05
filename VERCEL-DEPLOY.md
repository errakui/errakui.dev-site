# 🚀 DEPLOY SU VERCEL — GUIDA RAPIDA

## ✅ REPOSITORY CREATA!

**URL GitHub**: https://github.com/errakui/errakui.dev-site

---

## 🚀 DEPLOY SU VERCEL (5 MINUTI)

### Opzione 1: Dashboard Vercel (CONSIGLIATO - Facilissimo!) ⭐

1. **Vai su** https://vercel.com
2. **Login/Signup** con GitHub
3. **Click** "Import Project"
4. **Seleziona** la repository: `errakui/errakui.dev-site`
5. **Vercel rileva Next.js automaticamente!**
6. **Click** "Deploy"
7. **FATTO!** 🎉

**Il sito sarà live in ~2 minuti!**

---

### Opzione 2: Vercel CLI (Per Esperti)

```bash
# Installa Vercel CLI globalmente
npm i -g vercel

# Login a Vercel
vercel login

# Deploy (segui wizard)
vercel

# Deploy in produzione
vercel --prod
```

---

## 🌐 CONFIGURARE DOMINIO PERSONALIZZATO

### Dopo il primo deploy:

1. **Vercel Dashboard** → Tuo progetto → **Settings** → **Domains**
2. **Aggiungi**: `errakui.dev`
3. **Vercel ti darà i record DNS**:

```
# Configura questi record nel tuo registrar domini:

A Record:
Type: A
Name: @
Value: 76.76.21.21

CNAME Record:
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

4. **Attendi propagazione DNS** (5-30 minuti)
5. **SSL automatico** (gestito da Vercel)

---

## ⚙️ CONFIGURAZIONI VERCEL (Opzionali)

### Environment Variables

Se usi Google Analytics in futuro:

1. Settings → Environment Variables
2. Aggiungi:
   - Key: `NEXT_PUBLIC_GA_ID`
   - Value: `G-XXXXXXXXXX`

### Build Settings (Pre-configurate)

Vercel rileva automaticamente:
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

**Non serve modificare nulla!** ✅

---

## 📊 POST-DEPLOY CHECKLIST

### 1️⃣ GOOGLE SEARCH CONSOLE (IMPORTANTISSIMO!)

```bash
# Dopo che errakui.dev è live:

1. Vai su: https://search.google.com/search-console
2. Aggiungi proprietà: errakui.dev
3. Verifica dominio (DNS TXT record o HTML)
4. Invia sitemap: https://errakui.dev/sitemap.xml
5. Attendi indicizzazione (2-7 giorni)
```

### 2️⃣ GOOGLE MY BUSINESS (TOP PRIORITÀ!)

```bash
1. Vai su: https://business.google.com
2. Crea profilo business
   - Nome: ERRAKUI.DEV
   - Categoria: Software house
   - Indirizzo: Lugano, Ticino
   - P.IVA: CHE-478.305.574
   - Tel: +41 77 218 69 71
   - Sito: https://errakui.dev

3. CHIEDI 20+ RECENSIONI in 30 giorni!
   (Questo è il 50% del successo SEO locale!)
```

### 3️⃣ GOOGLE ANALYTICS 4 (Opzionale)

```bash
1. Vai su: https://analytics.google.com
2. Crea proprietà GA4
3. Ottieni ID: G-XXXXXXXXXX
4. Aggiungi in src/context/CookieConsentContext.tsx:
   - Linea 77: const GA_ID = 'G-XXXXXXXXXX'
   - Togli commenti linee 80-93
5. Commit e push su GitHub
6. Vercel auto-deploya!
```

### 4️⃣ DIRECTORY SVIZZERE

Registrati su (usa sempre P.IVA CHE-478.305.574):
- ✅ https://www.local.ch
- ✅ https://www.search.ch
- ✅ https://www.ilocal.ch
- ✅ https://www.localsearch.ch
- ✅ https://www.help.ch

---

## 🔧 COMANDI GIT UTILI

### Fare modifiche e aggiornare:

```bash
# Dopo aver modificato file localmente:

git add .
git commit -m "Descrizione modifiche"
git push

# Vercel auto-deploya in ~30 secondi!
```

### Vedere stato:

```bash
git status
git log --oneline
```

### Creare branch per test:

```bash
git checkout -b test
# fai modifiche
git push -u origin test

# Vercel crea preview automatica!
```

---

## 📈 MONITORAGGIO

### Vercel Dashboard

- **Analytics**: Traffico, performance
- **Logs**: Errori real-time
- **Deployments**: Storia deploy
- **Speed Insights**: Core Web Vitals

### URL Utili Post-Deploy

```
Sito live: https://errakui.dev
Sitemap: https://errakui.dev/sitemap.xml
Robots: https://errakui.dev/robots.txt
Privacy: https://errakui.dev/privacy-policy
Termini: https://errakui.dev/termini-condizioni
Cookie: https://errakui.dev/cookie-policy
```

---

## 🎯 PRIMI PASSI DOPO IL DEPLOY

### Week 1 (CRITICO!):
- [ ] Deploy su Vercel ✅
- [ ] Dominio errakui.dev configurato
- [ ] Google Search Console setup
- [ ] Google My Business creato
- [ ] Chiedi 5 prime recensioni
- [ ] Registra local.ch e search.ch

### Week 2:
- [ ] 10+ recensioni Google
- [ ] Scrivi articolo blog "Software House Lugano"
- [ ] 5+ directory listings
- [ ] LinkedIn Company Page

### Week 3:
- [ ] 20+ recensioni Google
- [ ] 2 articoli blog (Bellinzona, Locarno)
- [ ] 10+ directory listings
- [ ] Camera Commercio Ticino

### Week 4:
- [ ] Check posizioni Google (dovresti essere TOP 20!)
- [ ] Case study cliente
- [ ] Video tour ufficio
- [ ] Press release

---

## 🆘 TROUBLESHOOTING

### Build fallisce su Vercel?

```bash
# Testa localmente:
npm run build

# Se funziona locale ma non su Vercel:
# - Verifica node version (Vercel usa Node 18)
# - Check environment variables
# - Vedi logs su Vercel dashboard
```

### Dominio non funziona?

```bash
# Check DNS propagazione:
# https://dnschecker.org

# Attendi fino a 24h per propagazione completa
# Di solito funziona in 5-30 minuti
```

### Errore 404 su pagine?

```bash
# Vercel configura automaticamente Next.js routing
# Se problemi:
# - Vercel Dashboard → Settings → General
# - Framework Preset: Next.js
# - Redeploy
```

---

## 🎊 IL SITO È LIVE!

**Dopo il deploy hai:**
- ✅ Sito professionale Swiss Design
- ✅ SEO ottimizzato per Ticino
- ✅ HTTPS automatico
- ✅ CDN globale
- ✅ Auto-deploy da GitHub
- ✅ Analytics Vercel
- ✅ Preview URLs per ogni branch

---

## 📞 SUPPORTO

**Repository**: https://github.com/errakui/errakui.dev-site
**Vercel Docs**: https://vercel.com/docs
**Next.js Docs**: https://nextjs.org/docs

---

## 🚀 VAI SU VERCEL E DEPLOYA!

1. https://vercel.com
2. Import Project
3. Seleziona repository
4. Deploy
5. **FATTO!** 🎉

**Il tuo sito sarà live in 2 minuti!** 🇨🇭🔥

---

**Made with 🇨🇭 Swiss precision**

