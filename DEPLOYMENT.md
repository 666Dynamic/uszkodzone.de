# Deployment Guide - Uszkodzone.de

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel jest oficjalnym providerem dla Next.js i oferuje najlepszą integrację.

### Krok 1: Przygotowanie

1. Utwórz konto na [Vercel](https://vercel.com)
2. Zainstaluj Vercel CLI (opcjonalnie):
```bash
npm i -g vercel
```

### Krok 2: Deploy przez Vercel Dashboard

1. Zaloguj się na Vercel
2. Kliknij "Add New Project"
3. Importuj repozytorium z GitHub/GitLab/Bitbucket
4. Vercel automatycznie wykryje Next.js i ustawi konfigurację
5. Kliknij "Deploy"

### Krok 3: Deploy przez CLI (alternatywnie)

```bash
# Z katalogu projektu
cd /Users/lukas/Documents/Projects/uszkodzone.de

# Login do Vercel
vercel login

# Deploy
vercel

# Production deploy
vercel --prod
```

### Krok 4: Konfiguracja domeny

1. W Vercel Dashboard → Project Settings → Domains
2. Dodaj swoją domenę: `uszkodzone.de`
3. Skonfiguruj DNS zgodnie z instrukcjami Vercel:
   - A Record: `76.76.21.21`
   - CNAME: `cname.vercel-dns.com`

### Krok 5: Zmienne środowiskowe (Environment Variables)

W Vercel Dashboard → Project Settings → Environment Variables, dodaj:

```bash
# Car.casion API (gdy będzie gotowe)
CAR_CASION_API_KEY=your_api_key_here
CAR_CASION_API_URL=https://api.car.casion/v1

# Email (SendGrid, Mailgun, etc.)
EMAIL_API_KEY=your_email_api_key
EMAIL_FROM=kontakt@uszkodzone.de

# Database (gdy dodasz panel użytkownika)
DATABASE_URL=your_database_connection_string

# NextAuth (gdy dodasz logowanie)
NEXTAUTH_URL=https://uszkodzone.de
NEXTAUTH_SECRET=your_secret_here

# Analytics (opcjonalnie)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🐳 Deploy przez Docker (Alternative)

### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
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

### docker-compose.yml

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

### Build & Run

```bash
# Build
docker build -t uszkodzone-de .

# Run
docker run -p 3000:3000 uszkodzone-de

# Or with docker-compose
docker-compose up -d
```

## 🖥️ Deploy na VPS (DigitalOcean, Hetzner, etc.)

### Wymagania:
- Ubuntu 22.04 LTS
- Node.js 18+
- Nginx
- SSL Certificate (Let's Encrypt)

### Krok 1: Setup serwera

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx

# Install Certbot (SSL)
sudo apt install -y certbot python3-certbot-nginx
```

### Krok 2: Deploy aplikacji

```bash
# Clone repository
cd /var/www
git clone your-repo-url uszkodzone.de
cd uszkodzone.de

# Install dependencies
npm install

# Build
npm run build

# Start with PM2
pm2 start npm --name "uszkodzone" -- start
pm2 save
pm2 startup
```

### Krok 3: Configure Nginx

```nginx
# /etc/nginx/sites-available/uszkodzone.de
server {
    listen 80;
    server_name uszkodzone.de www.uszkodzone.de;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/uszkodzone.de /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Setup SSL
sudo certbot --nginx -d uszkodzone.de -d www.uszkodzone.de
```

## 📊 Post-Deployment Checklist

- [ ] Domena skonfigurowana i działa
- [ ] SSL certificate aktywny (HTTPS)
- [ ] Google Analytics / Plausible skonfigurowane
- [ ] Google Search Console dodana
- [ ] sitemap.xml wygenerowany i przesłany
- [ ] robots.txt poprawny
- [ ] Monitoring (Sentry, LogRocket)
- [ ] Email service (SendGrid, Mailgun)
- [ ] Backup strategy
- [ ] CDN (Cloudflare) opcjonalnie
- [ ] Performance test (Lighthouse, PageSpeed)

## 🔄 CI/CD (GitHub Actions)

`.github/workflows/deploy.yml`:

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
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

## 🐛 Troubleshooting

### Problem: Build fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Problem: Environment variables not working
```bash
# Make sure to restart after adding env vars
pm2 restart uszkodzone
# or on Vercel: redeploy
```

### Problem: 502 Bad Gateway
```bash
# Check if app is running
pm2 status
# Check logs
pm2 logs uszkodzone
# Restart
pm2 restart uszkodzone
```

## 📞 Support

Problemy z deployment? Skontaktuj się:
- Email: kontakt@uszkodzone.de
- Documentation: [Next.js Deployment](https://nextjs.org/docs/deployment)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
