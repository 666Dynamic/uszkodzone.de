# UszkodzoneZNiemiec.pl 🚗

Platforma dostępu do zamkniętych niemieckich giełd ubezpieczeniowych (Restwertbörsen) dla polskich klientów. Kup powypadkowe auto bezpośrednio z ubezpieczalni w Niemczech.

## 🎯 O projekcie

UszkodzoneZNiemiec.pl to profesjonalna platforma umożliwiająca zakup powypadkowych samochodów z niemieckich giełd ubezpieczeniowych (Restwertbörsen) takich jak:
- Car.casion
- Autoonline
- Car.tv
- Winvalue

### Kluczowe funkcjonalności:
- 🔍 Dostęp do 8.000+ aut dziennie ze wszystkich platform
- 📊 Szczegółowe raporty szkód i kalkulacje napraw
- 🎯 Licytacja kopertowa (anonimowa)
- 🚚 Transport do Polski (€300-€1.000)
- 💰 Zwrotne wadium
- 📝 Pełna dokumentacja i wsparcie
- ✅ SEO-optimized
- 📱 Fully responsive (mobile-first)

## 🛠 Stack technologiczny

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animacje**: Framer Motion
- **Język**: TypeScript
- **Icons**: React Icons (Feather)
- **Deployment**: Vercel (zalecane)

## 📁 Struktura projektu

```
uszkodzonezniemiec.pl/
├── app/
│   ├── layout.tsx              # Root layout z SEO
│   ├── page.tsx                # Strona główna
│   ├── globals.css             # Globalne style
│   ├── not-found.tsx           # 404 page
│   ├── aukcje/                 # Strona aukcji (integracja z car.casion)
│   ├── jak-to-dziala/          # Proces krok po kroku
│   ├── kalkulator/             # Kalkulator kosztów
│   ├── koszty/                 # Przejrzystość kosztów
│   ├── o-nas/                  # O firmie Miami Autocenter
│   ├── wiedza/                 # Baza wiedzy
│   │   ├── czym-jest-130-regelung/
│   │   └── oferta-wiazaca/
│   ├── blog/                   # Blog
│   ├── kontakt/                # Formularz kontaktowy
│   ├── polityka-prywatnosci/   # RODO
│   └── regulamin/              # Regulamin
├── components/
│   ├── Header.tsx              # Nawigacja (sticky, responsive)
│   ├── Footer.tsx              # Stopka z linkami
│   └── home/                   # Komponenty strony głównej
│       ├── Hero.tsx            # Sekcja hero z CTA
│       ├── Stats.tsx           # Statystyki
│       ├── Restwertborsen.tsx  # Wyjaśnienie Restwertbörsen
│       ├── HowItWorks.tsx      # Proces w 4 krokach
│       ├── FeaturedCars.tsx    # Przykładowe auta
│       ├── WhyGermany.tsx      # Porównanie DE/CH/USA
│       ├── FAQ.tsx             # FAQ Accordion
│       └── FinalCTA.tsx        # Ending CTA
├── lib/
│   ├── api.ts                  # Mock API + car.casion integration
│   ├── config.ts               # Konfiguracja aplikacji
│   └── utils.ts                # Utility functions
├── types/
│   └── index.ts                # TypeScript types
├── public/
│   ├── robots.txt              # SEO robots
│   ├── sitemap.xml             # XML sitemap
│   ├── manifest.json           # PWA manifest
│   └── og-image.jpg            # OG image (do dodania)
├── .env.example                # Environment variables template
├── tailwind.config.ts          # Tailwind CSS config
├── tsconfig.json               # TypeScript config
├── next.config.js              # Next.js config
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🚀 Instalacja i uruchomienie

### Wymagania:
- Node.js 18+ 
- npm, yarn, lub pnpm

### Kroki:

1. **Zainstaluj zależności:**
```bash
npm install
# lub
yarn install
# lub
pnpm install
```

2. **Uruchom serwer deweloperski:**
```bash
npm run dev
# lub
yarn dev
# lub
pnpm dev
```

3. **Otwórz w przeglądarce:**
```
http://localhost:3000
```

## 🎨 Design System

### Kolory:
- **Primary (Czerwony)**: `primary-600` (#dc2626) - główny kolor akcji
- **White**: Tło sekcji
- **Gray**: Teksty i tła alternatywne

### Komponenty:
- `.btn-primary` - Główny przycisk CTA
- `.btn-secondary` - Przycisk alternatywny
- `.card` - Karta z cieniem
- `.container-custom` - Max-width container
- `.section-padding` - Standardowy padding sekcji

### Responsive breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🔗 Integracja car.casion

W folderze `/app/aukcje/` przygotowano miejsce na integrację z API car.casion. Dane pojazdu powinny zawierać:

```typescript
{
  insurer: string          // Ubezpieczalnia
  make: string            // Marka (Ford, VW, BMW)
  model: string           // Model
  restwert: string        // Wartość rezydualna
  repairCost: string      // Koszt naprawy
  marketValue: string     // Wartość rynkowa (WBW)
  year: string            // Pierwsza rejestracja
  fuel: string            // Rodzaj paliwa
  transmission: string    // Skrzynia biegów
  power: string           // Moc (kW)
  mileage: string         // Przebieg
  location: string        // Lokalizacja
  timeLeft: string        // Czas pozostały do końca aukcji
  vin: string             // VIN
  images: string[]        // Zdjęcia
}
```

## 📱 Mobile First

Cała strona jest zaprojektowana z podejściem mobile-first:
- Responsywny layout na wszystkich urządzeniach
- Touch-friendly przyciski (min 44x44px)
- Zoptymalizowane obrazy
- Hamburger menu na mobile
- Karuzele i gridy dostosowane do małych ekranów

## 🔍 SEO

Każda strona ma zoptymalizowane:
- Meta tagi (title, description, keywords)
- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Structured data (JSON-LD) - do dodania
- Sitemap.xml - do wygenerowania
- Robots.txt - do stworzenia

## 📊 Do zrobienia (TODO)

### Wysokiy priorytet:
- [ ] Integracja z car.casion API
- [ ] Panel użytkownika (rejestracja, logowanie)
- [ ] System płatności (wadium, finalna płatność)
- [ ] Dashboard użytkownika (moje licytacje)

### Średni priorytet:
- [ ] Interaktywny kalkulator kosztów
- [ ] System powiadomień email
- [ ] Blog z CMS (np. Contentful, Sanity)
- [ ] Wielojęzyczność (PL, DE, EN)

### Niski priorytet:
- [ ] System recenzji użytkowników
- [ ] Chat na żywo
- [ ] Aplikacja mobilna (React Native)
- [ ] Program partnerski

## 🚀 Deployment

### Vercel (ZALECANE - 0 konfiguracji):
```bash
# 1. Zainstaluj Vercel CLI
npm i -g vercel

# 2. Deploy (automatycznie wypushuje na GitHub)
vercel

# 3. Ustawienia środowiska (w Vercel Dashboard):
# - Ustaw NODE_ENV=production
# - Dodaj CAR_CASION_API_KEY, itp.
```

### Railway / Fly.io:
```bash
# Railway:
npm install -g @railway/cli
railway link  # Wybierz projekt
railway deploy

# Fly.io:
npm install -g @flydotio/flyctl
fly launch
fly deploy
```

### Docker (własny serwer):
```bash
# Build
docker build -t uszkodzone-de .

# Run
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_API_URL=https://uszkodzonezniemiec.pl \
  -e CAR_CASION_API_KEY=xxx \
  uszkodzonezniemiec-pl
```

### Environment variables (konfiguracja w Vercel/Railway):
```
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://uszkodzonezniemiec.pl
CAR_CASION_API_KEY=your_key_here
CAR_CASION_API_URL=https://api.car.casion/v1
CAR_CASION_WEBHOOK_SECRET=your_secret_here
```

## ✅ Pre-deployment Checklist

- [x] Wszystkie strony loadują bez błędów
- [x] SEO metadata complete (title, description, OG)
- [x] Responsive design (mobile, tablet, desktop)
- [x] Navigation complete (Header, Footer, Sitemap)
- [x] 404 page
- [ ] favicon.ico
- [ ] og-image.jpg (1200x630px)
- [ ] Google Search Console verification
- [ ] Analytics setup (Google Analytics, Hotjar)
- [ ] Email forma do testowania
- [ ] Production environment variables

## 📊 TO-DO List

### Phase 1: MVP (Launch Ready):
- [x] Landing page
- [x] Navigation & routing
- [x] SEO optimization
- [x] Responsive design
- [ ] Favicon + OG image
- [ ] Error tracking (Sentry)

### Phase 2: Integration:
- [ ] Car.casion API integration
- [ ] Real-time auction data
- [ ] User authentication
- [ ] Payment integration (Stripe)

### Phase 3: Enhancement:
- [ ] Interactive calculator
- [ ] User dashboard
- [ ] Bid management
- [ ] Email notifications

### Phase 4: Scale:
- [ ] Multi-language support
- [ ] Blog with CMS
- [ ] Mobile app
- [ ] Affiliate program

## 📞 Support & Contact

- **Email**: kontakt@uszkodzonezniemiec.pl
- **GitHub**: https://github.com/666Dynamic/uszkodzone.de
- **Docs**: /wiedza /jak-to-dziala

## 📄 License

MIT License - See LICENSE file

## 🙏 Acknowledgments

- Inspired by Apple, Stripe, Revolut design principles
- Built with Next.js, Tailwind CSS, Framer Motion
- Hosted on Vercel

---

**Built with ❤️ for Polish car importers**

# Build
npm run build

# Start
npm start
```

## 📧 Kontakt

**Miami Autocenter GmbH**
- Email: kontakt@uszkodzonezniemiec.pl
- Website: https://uszkodzonezniemiec.pl
- Tel: +49 XXX XXX XXX

## 📄 Licencja

© 2026 Miami Autocenter GmbH. Wszelkie prawa zastrzeżone.

---

**Uwaga**: Projekt przygotowany zgodnie z najlepszymi praktykami Stripe, Revolut i innych liderów branży fintech. Mobile-first, SEO-optimized, RODO compliant.
