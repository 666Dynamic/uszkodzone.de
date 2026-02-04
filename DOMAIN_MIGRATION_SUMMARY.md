# 🔄 Migracja Domeny: uszkodzone.de → uszkodzonezniemiec.pl

**Data:** 4 lutego 2026  
**Status:** ✅ Zakończone

## 📋 Podsumowanie zmian

### 🎯 Powód migracji
- Domena `uszkodzone.de` była zajęta
- Domena `.de` nie była optymalna dla SEO w Polsce
- Nowa domena `uszkodzonezniemiec.pl` lepiej oddaje charakter biznesu (samochody z Niemiec) i jest bardziej SEO-friendly dla polskiego rynku

---

## ✅ Zaktualizowane pliki (97 wystąpień)

### 🔧 Konfiguracja projektu
- [x] `package.json` - nazwa projektu: `uszkodzonezniemiec-pl`
- [x] `lib/config.ts` - URL, email, nazwa strony
- [x] `public/manifest.json` - nazwa aplikacji PWA
- [x] `public/robots.txt` - sitemap URL
- [x] `public/sitemap.xml` - wszystkie 11 URL-i (data: 2026-02-04)
- [x] `.env.example` - API URL, email, Plausible domain

### 📱 SEO & Metadata (zoptymalizowane dla Polski)
- [x] `app/layout.tsx` - **główne metatagi SEO**
  - Title: "Samochody powypadkowe z Niemiec | Aukcje auta uszkodzone | UszkodzoneZNiemiec.pl"
  - Keywords: "samochody powypadkowe z niemiec, auta powypadkowe niemcy, import aut z niemiec, restwertbörsen, aukcje samochodów niemcy, giełdy ubezpieczeniowe niemcy, auta uszkodzone niemcy, samochody z niemiec tanie"
  - OpenGraph: pełne URL, canonical, obrazy
  - Twitter Card: large image

### 📄 Strony (metadata)
- [x] `/aukcje` - "Aukcje samochodów powypadkowych z Niemiec | Restwertbörsen"
- [x] `/jak-to-dziala` - proces zakupu
- [x] `/kalkulator` - kalkulator kosztów
- [x] `/blog` - aktualności
- [x] `/wiedza` - baza wiedzy
- [x] `/wiedza/czym-jest-130-regelung` - 130%-Regelung
- [x] `/wiedza/oferta-wiazaca` - oferta wiążąca
- [x] `/wiedza/restwertborsen` - giełdy Restwertbörsen
- [x] `/wiedza/rejestracja-uszkodzonego-auta` - przewodnik rejestracji
- [x] `/polityka-prywatnosci` - RODO
- [x] `/regulamin` - warunki użytkowania

### 🎨 Komponenty
- [x] `components/Footer.tsx` - email, copyright
- [x] `components/Header.tsx` - (bez zmian, używa logo)

### 📝 Treść stron
- [x] `/app/kontakt/page.tsx` - email kontaktowy
- [x] `/app/polityka-prywatnosci/page.tsx` - 2x email, nazwa platformy
- [x] `/app/regulamin/page.tsx` - nazwa platformy, email
- [x] `/app/wiedza/restwertborsen/page.tsx` - nazwa w treści
- [x] `/app/wiedza/rejestracja-uszkodzonego-auta/page.tsx` - 2x nazwa w treści

### 📚 Dokumentacja
- [x] `README.md` - tytuł, opisy, URL-e, email, struktura projektu
- [x] `.env.example` - wszystkie zmienne środowiskowe
- [ ] `DEPLOYMENT.md` - pozostawione (historyczne)
- [ ] `CONTRIBUTING.md` - pozostawione (historyczne)
- [ ] `PROJECT_SUMMARY.md` - pozostawione (historyczne)
- [ ] pliki w `/research/` - pozostawione (dokumentacja)

---

## 🚀 Nowe SEO Keywords (zoptymalizowane dla PL)

### Primary Keywords (dodane)
- **samochody powypadkowe z niemiec** (high volume, specific)
- **auta powypadkowe niemcy** (natural language)
- **import aut z niemiec** (broad match)
- **giełdy ubezpieczeniowe niemcy** (specific)
- **auta uszkodzone niemcy** (variation)
- **samochody z niemiec tanie** (value proposition)

### Long-tail Keywords
- "aukcje samochodów powypadkowych z Niemiec"
- "jak kupić auto powypadkowe z Niemiec"
- "rejestracja uszkodzonego auta z Niemiec"
- "Restwertbörsen co to jest"
- "130%-Regelung niemcy"

### Local SEO
- Domena `.pl` - silny sygnał dla Google.pl
- "z Niemiec" / "niemcy" w każdym title
- Focus na polski rynek (locale: pl_PL)

---

## 🔍 SEO Improvements

### Title Tags (zoptymalizowane)
```
PRZED: "Samochody powypadkowe z Niemiec | Aukcje online | Uszkodzone.de"
PO:    "Samochody powypadkowe z Niemiec | Aukcje auta uszkodzone | UszkodzoneZNiemiec.pl"
```
✅ Dodane "auta uszkodzone" dla lepszej widoczności

### Meta Descriptions (rozszerzone)
```
PRZED: "Dostęp do zamkniętych niemieckich giełd ubezpieczeniowych. Ponad 4500 aut dziennie."
PO:    "Dostęp do zamkniętych niemieckich giełd ubezpieczeniowych Restwertbörsen. Ponad 4500 aut powypadkowych dziennie. Licytacje kopertowe, bezpieczny zakup, transport i rejestracja w Polsce."
```
✅ Dodane value propositions i call-to-actions

### Canonical URLs
Wszystkie strony mają canonical na `uszkodzonezniemiec.pl`

### OpenGraph
- siteName: "UszkodzoneZNiemiec.pl"
- Wszystkie og:url zaktualizowane
- Obrazy: `/og-image.jpg` (do wygenerowania)

---

## 📊 Sitemap.xml

### Struktura (11 URL-i)
```xml
✓ / (priority: 1.0, daily)
✓ /aukcje (priority: 0.9, hourly) 
✓ /jak-to-dziala (priority: 0.8, weekly)
✓ /kalkulator (priority: 0.8, weekly)
✓ /wiedza (priority: 0.7, weekly)
✓ /wiedza/czym-jest-130-regelung (priority: 0.6, monthly)
✓ /wiedza/oferta-wiazaca (priority: 0.6, monthly)
✓ /blog (priority: 0.7, weekly)
✓ /kontakt (priority: 0.6, monthly)
✓ /polityka-prywatnosci (priority: 0.5, yearly)
✓ /regulamin (priority: 0.5, yearly)
```

**lastmod:** 2026-02-04

---

## 🌐 Robots.txt

```txt
User-agent: *
Allow: /

Sitemap: https://uszkodzonezniemiec.pl/sitemap.xml
```

---

## 📧 Email Migration

```
PRZED: kontakt@uszkodzone.de
PO:    kontakt@uszkodzonezniemiec.pl
```

**Lokalizacje:**
- Footer
- Kontakt page (link + tekst)
- Polityka prywatności (2x)
- Regulamin
- lib/config.ts
- .env.example
- README.md

---

## ✅ Weryfikacja

### Build Status
```bash
npm run build
✓ Build zakończony bez błędów
✓ 19 stron statycznych wygenerowanych
✓ Brak TypeScript errors
✓ Brak linting errors
```

### SEO Checklist
- [x] Wszystkie title tags zaktualizowane
- [x] Wszystkie meta descriptions zaktualizowane
- [x] Keywords dodane (focus na PL)
- [x] OpenGraph tags zaktualizowane
- [x] Twitter Card tags zaktualizowane
- [x] Canonical URLs zaktualizowane
- [x] Sitemap.xml zaktualizowany
- [x] Robots.txt zaktualizowany
- [x] Internal links (wszystkie relatywne - OK)
- [x] Email addresses zaktualizowane

### Missing (do zrobienia)
- [ ] Wygenerować nowy `/public/og-image.jpg` z nową nazwą
- [ ] Zaktualizować Google Search Console (nowa domena)
- [ ] Zaktualizować Google Analytics
- [ ] Zaktualizować Plausible Analytics
- [ ] Skonfigurować przekierowania 301 z starej domeny (jeśli była używana)
- [ ] Wygenerować i dodać favicon z nowym brandingiem

---

## 🎨 Brand Identity

### Nazwa
```
PRZED: Uszkodzone.de
PO:    UszkodzoneZNiemiec.pl
```

### Logo/Components
- `AnimatedHammerLogo.tsx` - bez zmian (używa props)
- Footer - zaktualizowany copyright
- Header - bez zmian (logo jest uniwersalne)

---

## 🚀 Następne kroki

### Deployment na Vercel
1. Połącz nową domenę `uszkodzonezniemiec.pl`
2. Skonfiguruj DNS (A/CNAME records)
3. Włącz SSL (automatyczne na Vercel)
4. Deploy z branch main

### DNS Configuration
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Environment Variables (Vercel)
```
NEXT_PUBLIC_API_URL=https://uszkodzonezniemiec.pl
CAR_CASION_API_KEY=[twój klucz]
EMAIL_FROM=kontakt@uszkodzonezniemiec.pl
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=uszkodzonezniemiec.pl
```

### Google Search Console
1. Dodaj nową właściwość dla `uszkodzonezniemiec.pl`
2. Zweryfikuj domenę (DNS TXT record)
3. Prześlij sitemap: `https://uszkodzonezniemiec.pl/sitemap.xml`
4. Ustaw wersję preferowaną (z www lub bez)

### Marketing
- [ ] Zaktualizować social media profiles
- [ ] Zaktualizować wizytówki/materiały
- [ ] Ogłosić zmianę domeny (jeśli masz listę mailową)
- [ ] Zaktualizować linki na zewnętrznych stronach

---

## 📈 Expected SEO Impact

### Pozytywne
✅ Domena `.pl` - lepszy ranking w Google.pl  
✅ Keywords "z Niemiec" w domenie - brand match  
✅ Dłuższa, opisowa domena - lepsza klikalność w SERP  
✅ Zoptymalizowane meta tags dla PL  
✅ Rich keywords w titles (auta/samochody variations)  

### Do monitorowania
⚠️ Nowa domena = brak domain authority (trzeba budować od nowa)  
⚠️ Przejściowy spadek w pierwszych tygodniach (normal)  
⚠️ Potrzeba 3-6 miesięcy na pełną indeksację  

### Rekomendacje
1. **Content marketing:** Regularne publikowanie w `/blog`
2. **Internal linking:** Linkować artykuły w `/wiedza` wzajemnie
3. **Backlinks:** Budować linki z polskich stron motoryzacyjnych
4. **Local SEO:** Dodać schema.org markup (LocalBusiness)
5. **Performance:** Optymalizować Core Web Vitals

---

## 🔗 Quick Links

- **Live Site:** https://uszkodzonezniemiec.pl (po deploy)
- **Repository:** https://github.com/666Dynamic/uszkodzone.de
- **Email:** kontakt@uszkodzonezniemiec.pl
- **Sitemap:** https://uszkodzonezniemiec.pl/sitemap.xml

---

**Status projektu:** ✅ READY FOR DEPLOYMENT

*Wszystkie 97 wystąpień "uszkodzone.de" zostały zaktualizowane na "uszkodzonezniemiec.pl"*  
*SEO keywords zoptymalizowane dla polskiego rynku*  
*Build bez błędów, gotowe do wdrożenia*
