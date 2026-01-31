# Uszkodzone.de 🚗

Platforma dostępu do zamkniętych niemieckich giełd ubezpieczeniowych (Restwertbörsen) dla polskich klientów. Kup powypadkowe auto bezpośrednio z ubezpieczalni w Niemczech.

## 🎯 O projekcie

Uszkodzone.de to profesjonalna platforma umożliwiająca zakup powypadkowych samochodów z niemieckich giełd ubezpieczeniowych (Restwertbörsen) takich jak:
- Car.casion
- Autoonline
- Car.tv
- Winvalue

### Kluczowe funkcjonalności:
- 🔍 Dostęp do ponad 4500 aut dziennie
- 📊 Szczegółowe raporty szkód i kalkulacje napraw
- 🎯 System licytacji kopertowej (w ciemno)
- 🚚 Transport pod dom
- 💰 Zwrotne wadium
- 📝 Pełna dokumentacja

## 🛠 Stack technologiczny

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animacje**: Framer Motion
- **Język**: TypeScript
- **Icons**: React Icons (Feather)
- **Deployment**: Vercel (zalecane)

## 📁 Struktura projektu

```
uszkodzone.de/
├── app/
│   ├── layout.tsx              # Root layout z SEO
│   ├── page.tsx                # Strona główna
│   ├── globals.css             # Globalne style
│   ├── aukcje/                 # Strona aukcji (integracja z car.casion)
│   ├── jak-to-dziala/          # Proces krok po kroku
│   ├── kalkulator/             # Kalkulator kosztów
│   ├── wiedza/                 # Baza wiedzy
│   ├── blog/                   # Blog
│   ├── kontakt/                # Formularz kontaktowy
│   ├── polityka-prywatnosci/   # RODO
│   └── regulamin/              # Regulamin
├── components/
│   ├── Header.tsx              # Nawigacja (sticky, responsive)
│   ├── Footer.tsx              # Stopka z linkami
│   └── home/                   # Komponenty strony głównej
│       ├── Hero.tsx            # Sekcja hero z CTA
│       ├── Stats.tsx           # Statystyki (4500+, 30 dni, itp.)
│       ├── Restwertborsen.tsx  # Wyjaśnienie Restwertbörsen
│       ├── HowItWorks.tsx      # Proces w 4 krokach
│       ├── FeaturedCars.tsx    # Przykładowe auta
│       ├── WhyGermany.tsx      # Porównanie DE/CH/USA
│       ├── FAQ.tsx             # Accordion z FAQ
│       └── FinalCTA.tsx        # Końcowe wezwanie do działania
├── public/                     # Statyczne pliki (obrazy, favicon)
├── tailwind.config.ts          # Konfiguracja Tailwind (kolory primary)
└── next.config.js              # Konfiguracja Next.js
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

### Vercel (zalecane):
```bash
# Zainstaluj Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Własny serwer:
```bash
# Build
npm run build

# Start
npm start
```

## 📧 Kontakt

**Miami Autocenter GmbH**
- Email: kontakt@uszkodzone.de
- Website: https://uszkodzone.de
- Tel: +49 XXX XXX XXX

## 📄 Licencja

© 2026 Miami Autocenter GmbH. Wszelkie prawa zastrzeżone.

---

**Uwaga**: Projekt przygotowany zgodnie z najlepszymi praktykami Stripe, Revolut i innych liderów branży fintech. Mobile-first, SEO-optimized, RODO compliant.
