# 🚀 QUICK START GUIDE

## Opcja 1: Deploy na Vercel (2 minuty) ⚡

```bash
# 1. Upewnij się że kod jest na GitHub
git push origin main

# 2. Przejdź na vercel.com
# 3. Kliknij "New Project"
# 4. Import: 666Dynamic/uszkodzone.de
# 5. Kliknij "Deploy"
# ✅ GOTOWE! Strona live!
```

**URL**: https://uszkodzone.vercel.app  
**Custom domain**: Dodaj w Vercel Settings

---

## Opcja 2: Lokalne testowanie (5 minut)

```bash
# 1. Zainstaluj zależności
npm install

# 2. Uruchom serwer deweloperski
npm run dev

# 3. Otwórz
http://localhost:3000

# 4. Testuj wszystkie strony:
# - / (home)
# - /aukcje
# - /jak-to-dziala
# - /kalkulator
# - /koszty
# - /o-nas

# 5. Ctrl+C aby wyłączyć serwer
```

---

## Opcja 3: Build produkcyjny (test before deploy)

```bash
# Testuj build lokalnie
npm run build

# Uruchom produkcję lokalnie
npm start

# Powinno działać na http://localhost:3000
```

---

## ✅ Critical Before Deploy

```bash
# 1. Sprawdź kód
npm run lint

# 2. Sprawdź build
npm run build

# 3. Jeśli oba OK → push na GitHub
git add .
git commit -m "Ready for production"
git push origin main

# 4. Deploy na Vercel!
```

---

## 📋 Checklist Uruchomienia

- [x] Kod na GitHub
- [ ] Lokalne testy (`npm run dev`)
- [ ] Build test (`npm run build`)
- [ ] Lint check (`npm run lint`)
- [ ] Vercel deployment
- [ ] Domain setup
- [ ] Google Search Console verification
- [ ] Analytics setup

---

## 🆘 Problemy?

| Problem | Rozwiązanie |
|---------|-------------|
| `npm install` nie działa | `rm -rf node_modules` → `npm install` |
| `npm run dev` zwraca błędy | Sprawdź czy masz Node 18+ (`node -v`) |
| Build fails | Sprawdź logs, zwykle to zmienna env |
| Strona zaś slow | Sprawdź Core Web Vitals w Vercel Analytics |
| Domain nie działa | Czekaj 30 minut na DNS propagation |

---

## 📞 Help

- Docs: /README.md
- Deploy guide: /DEPLOYMENT.md
- GitHub: https://github.com/666Dynamic/uszkodzone.de
- Vercel docs: https://vercel.com/docs/nextjs

---

**Gotowy? Let's go! 🎉**
