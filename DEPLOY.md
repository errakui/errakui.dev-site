# Guida al Deploy — ERRAKUI.DEV

## 🚀 Opzioni di Deploy

### 1. Vercel (Consigliato)

Vercel è la piattaforma ottimale per Next.js, creata dallo stesso team.

#### Deploy Automatico

1. Crea un account su [vercel.com](https://vercel.com)
2. Collega il repository GitHub
3. Vercel rileverà automaticamente Next.js
4. Click "Deploy"

#### Deploy da CLI

```bash
# Installa Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy in produzione
vercel --prod
```

**Variabili d'Ambiente (se necessarie):**
```env
NEXT_PUBLIC_SITE_URL=https://errakui.dev
```

---

### 2. Netlify

```bash
# Installa Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build locale
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

### 3. Server Linux (VPS/Dedicated)

#### Prerequisiti
- Node.js 18+
- PM2 (process manager)
- Nginx (reverse proxy)

#### Setup

```bash
# Clone il repository
git clone [repository-url]
cd errakui.dev-site

# Installa dipendenze
npm install

# Build
npm run build

# Installa PM2
npm install -g pm2

# Avvia con PM2
pm2 start npm --name "errakui-dev" -- start

# Salva configurazione PM2
pm2 save
pm2 startup
```

#### Configurazione Nginx

```nginx
server {
    listen 80;
    server_name errakui.dev www.errakui.dev;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### SSL con Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d errakui.dev -d www.errakui.dev
```

---

### 4. Docker

**Dockerfile:**

```dockerfile
FROM node:18-alpine AS base

# Dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

**docker-compose.yml:**

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

**Deploy:**

```bash
docker-compose up -d
```

---

## 🔧 Pre-Deploy Checklist

### Verifica Locale

```bash
# Build locale
npm run build

# Test build in produzione
npm start

# Linting
npm run lint
```

### Performance

- ✅ Lighthouse score > 90
- ✅ Images ottimizzate
- ✅ CSS minimizzato
- ✅ JavaScript ottimizzato

### SEO

- ✅ Meta tags configurati
- ✅ Sitemap.xml
- ✅ robots.txt
- ✅ Open Graph tags
- ✅ Schema.org markup

### Sicurezza

- ✅ HTTPS attivo
- ✅ Security headers
- ✅ CSP configurato
- ✅ No secrets nel codice

---

## 📊 Monitoraggio

### Analytics Consigliati

1. **Google Analytics 4**
2. **Vercel Analytics** (se su Vercel)
3. **Plausible** (privacy-friendly)

### Monitoring

1. **Uptime Robot** — monitoring uptime
2. **Sentry** — error tracking
3. **LogRocket** — session replay

---

## 🔄 CI/CD con GitHub Actions

**.github/workflows/deploy.yml:**

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Run tests
        run: npm run lint
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 🌐 Custom Domain

### Su Vercel

1. Settings → Domains
2. Aggiungi `errakui.dev`
3. Configura DNS:

```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

### SSL

SSL è automatico su Vercel e Netlify.

---

## 📈 Ottimizzazioni Post-Deploy

1. **CDN**: Cloudflare per caching globale
2. **Database**: Se necessario, PostgreSQL su Railway/Supabase
3. **Email**: SendGrid/Resend per form di contatto
4. **Backup**: Backup automatici settimanali

---

## 🆘 Troubleshooting

### Build Fallisce

```bash
# Pulisci cache
rm -rf .next node_modules
npm install
npm run build
```

### Errori Runtime

1. Verifica logs: `pm2 logs` o Vercel dashboard
2. Controlla variabili d'ambiente
3. Verifica versione Node.js

### Performance Issues

1. Abilita caching
2. Ottimizza immagini
3. Lazy loading componenti
4. Usa ISR (Incremental Static Regeneration)

---

**🇨🇭 Deploy con precisione svizzera!**

