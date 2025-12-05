# 🚀 ERRAKUI.DEV — Swiss Software House Website

![Swiss Made Software](https://img.shields.io/badge/Swiss-Made%20Software-red?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)

Sito web premium con **Swiss Graphic Design al 100%** per software house svizzera a Lugano, Ticino.

## 🇨🇭 Caratteristiche

- ✅ **5 Pagine Complete** (Home, Servizi, About, Portfolio, Contatti)
- ✅ **Swiss Design Autentico** (Helvetica, Grid system, Rosso svizzero)
- ✅ **SEO Ottimizzato** (240+ keywords, Schema.org, Sitemap dinamico)
- ✅ **Cookie Banner Compliant** (nLPD + GDPR)
- ✅ **WhatsApp Integration** (+41 77 218 69 71)
- ✅ **Fully Responsive** (Mobile, Tablet, Desktop)
- ✅ **Performance 95+** (Lighthouse score)
- ✅ **Privacy Policy, Termini, Cookie Policy**

## 🚀 Quick Start

```bash
# Installa dipendenze
npm install

# Avvia development server
npm run dev

# Build per produzione
npm run build

# Avvia produzione
npm start
```

Apri [http://localhost:3000](http://localhost:3000)

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Emoji native
- **Fonts**: Helvetica Neue, Courier New

## 🎯 SEO Features

### Keywords Target
- 240+ keywords strategiche
- Copertura totale Ticino (Lugano, Bellinzona, Locarno, Mendrisio, +90 località)
- Long-tail keywords locali
- Tecnologie + località

### Technical SEO
- ✅ Sitemap.xml dinamico
- ✅ Robots.txt ottimizzato
- ✅ Schema.org LocalBusiness
- ✅ Open Graph + Twitter Cards
- ✅ Canonical URLs
- ✅ Geo-targeting (Lugano)
- ✅ 120+ località in structured data

## 📄 Pagine

1. **Home** (`/`) - Hero, servizi, processo, CTA
2. **Servizi** (`/servizi`) - Dettagli servizi con tab
3. **About** (`/about`) - Timeline, valori, team
4. **Portfolio** (`/portfolio`) - Case studies con filtri
5. **Contatti** (`/contatti`) - Form, sede, FAQ
6. **Privacy Policy** (`/privacy-policy`) - Conforme nLPD
7. **Termini e Condizioni** (`/termini-condizioni`) - Legge svizzera
8. **Cookie Policy** (`/cookie-policy`) - GDPR compliant

## 🏢 Informazioni Azienda

- **Nome**: ERRAKUI.DEV
- **P.IVA**: CHE-478.305.574
- **Sede**: Lugano, Ticino, Schweiz
- **Email**: info@errakui.dev
- **Tel/WhatsApp**: +41 77 218 69 71

## 🎨 Design System

### Colori
```css
--swiss-red: #FF0000
--swiss-black: #000000
--swiss-white: #FFFFFF
--swiss-gray-*: varie tonalità
```

### Tipografia
- **Primary**: Helvetica Neue
- **Mono**: Courier New

### Grid System
- 12 colonne
- Gap: 2rem
- Breakpoints: Mobile, Tablet, Desktop

## 📱 Features

### Cookie Consent
- Banner automatico
- Tracking condizionale
- Salvataggio preferenze localStorage
- Conforme nLPD + GDPR

### Form Contatti
- Validazione completa
- Checkbox privacy obbligatorio
- Link a policy
- Messaggi errore user-friendly

### WhatsApp
- Pulsante floating desktop
- Sticky bar mobile
- Link diretto chat

### Animazioni
- Fade in/out
- Slide in
- Scale transitions
- Stagger animations
- Scroll progress

## 🚀 Deploy su Vercel

### Metodo 1: Dashboard Vercel (Consigliato)

1. Vai su [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connetti repository GitHub
4. Vercel rileva Next.js automaticamente
5. Click "Deploy"

### Metodo 2: Vercel CLI

```bash
# Installa Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy produzione
vercel --prod
```

### Configurazione Dominio

1. Vercel Dashboard → Settings → Domains
2. Aggiungi `errakui.dev`
3. Configura DNS:
```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

## 📊 Post-Deploy Checklist

- [ ] Google Search Console
  - Aggiungi proprietà errakui.dev
  - Invia sitemap: `https://errakui.dev/sitemap.xml`
  
- [ ] Google My Business
  - Crea profilo Lugano
  - Aggiungi P.IVA e contatti
  - Chiedi recensioni
  
- [ ] Google Analytics 4
  - Crea account
  - Aggiungi ID in `CookieConsentContext.tsx`
  
- [ ] Directory Svizzere
  - local.ch
  - search.ch
  - ilocal.ch
  - localsearch.ch

## 📈 SEO Strategy

Leggi i file completi:
- `SEO-STRATEGY.md` - Strategia SEO completa
- `KEYWORD-STRATEGY.md` - 240+ keywords implementate

### Obiettivi 90 Giorni
- **Mese 1**: TOP 10 "software house Lugano"
- **Mese 2**: TOP 5 "software house Lugano"
- **Mese 3**: TOP 3 "software house Lugano"

## 🔧 Configurazione

### Environment Variables (Optional)

Se usi Google Analytics:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Modifica Contatti

Cerca e sostituisci:
- `info@errakui.dev` → tua email
- `+41 77 218 69 71` → tuo numero
- `CHE-478.305.574` → tua P.IVA

## 📝 Personalizzazione

### Contenuti
Modifica i file in `src/app/`:
- `page.tsx` - Home
- `servizi/page.tsx` - Servizi
- `about/page.tsx` - About
- `portfolio/page.tsx` - Portfolio
- `contatti/page.tsx` - Contatti

### Stili
- `src/app/globals.css` - Stili globali
- `tailwind.config.js` - Config Tailwind

### Componenti
- `src/components/Header.tsx` - Header
- `src/components/Footer.tsx` - Footer
- `src/components/CookieBanner.tsx` - Cookie banner
- `src/components/WhatsAppButton.tsx` - WhatsApp

## 🐛 Troubleshooting

### Build fallisce?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Errori TypeScript?
Verifica i types nei componenti modificati

### Stili non applicati?
```bash
# Ricostruisci Tailwind
npm run dev
```

## 📞 Supporto

- **Email**: info@errakui.dev
- **WhatsApp**: +41 77 218 69 71
- **Sede**: Lugano, Ticino, Schweiz

## 📄 Licenza

© 2024 ERRAKUI.DEV — P.IVA CHE-478.305.574  
All rights reserved

---

**Made with 🇨🇭 Swiss precision and ❤️ passion**

**🚀 Pronto per dominare Lugano e tutto il Ticino!**
