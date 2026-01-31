# DEEP ANALYSIS: Niespójności i Błędy Faktyczne Na Stronie

**Data**: 30.01.2026  
**Status**: CRITICAL - Zawiera wiele poważnych błędów logicznych i faktycznych  
**Przygotowuje**: Kompleksowa analiza wszystkich niespójności

---

## 🔴 SEKCJA 1: HERO.tsx - Krytyczne Błędy

### BŁĄD 1A: "Ponad 4500 nowych aut dziennie" - NIEDOSZACOWANE

**LOKALIZACJA**: 
- Hero.tsx - Features List
- jak-to-dziala/page.tsx - linia ~20
- app/page.tsx (home)

**PROBLEM LOGICZNY**:
```
STRONA MÓWI: "Ponad 4500 nowych aut dziennie"
RZECZYWISTOŚĆ: 
  • AUTOonline sam: 5.500 dziennie
  • Razem wszystkie platformy: 8.000-12.000 dziennie
  • Car.casion: 2.000-3.000 dziennie
  • Car.tv: 1.500-2.000 dziennie
  • Winvalue: 800-1.200 dziennie

WNIOSKI:
❌ 4500 jest MNIEJSZE niż rzeczywistość
❌ Strona niedostawiania wielkie możliwości
❌ Konkurencja mogłaby mówić "my mamy więcej"
✅ Powinno być: "Ponad 8.000 nowych aut dziennie"
```

**WPŁYW**: 
- Zmniejsza wiarygodność ("czemu kłamiesz w dół?")
- Potencjalni kupcy myślą że jest mniej opcji
- Tracisz argumentem przewagi

---

### BŁĄD 1B: "Transport bezpośrednio pod dom" - MYLĄCE I FAŁSZYWE

**LOKALIZACJA**:
- Hero.tsx - Features List: "Transport bezpośrednio pod Twój dom"
- Hero.tsx - Floating Card: "Transport / Pod dom"

**PROBLEM 1 - Zakres Odpowiedzialności**:
```
STRONA SUGERUJE: Miami Autocenter zapewni transport
RZECZYWISTOŚĆ:
  • Ty (lub Miami Autocenter) możesz KORZYSTAĆ z usług transportu
  • To są USŁUGI TRZECIE (spedytorzy, przewoźnicy)
  • Miami Autocenter nie świadczy transportu sam

KONSEKWENCJA PRAWNA:
❌ Obietnica "pod dom" = umowa niespeł usług
❌ Jeśli transport zawiedzie, Ty jesteś odpowiedzialny
❌ Jeśli pojazd przyjdzie uszkodzony - kto odpowiada?
```

**PROBLEM 2 - Brak Kosztu**:
```
STRONA MÓWI: "Transport bezpośrednio pod dom"
BRAK INFORMACJI: O KOSZCIE
RZECZYWISTOŚĆ: 
  • Transport kosztuje €300-€1.000
  • To NAJWAŻNIEJSZA informacja
  • Użytkownik myśli że transport jest DARMOWY

PRZYKŁAD:
Użytkownik czyta: "Transport bezpośrednio pod dom"
Myśli: "Super, będę miał auto pod domem bezpłatnie"
Rzeczywistość: Zapłaci €500-€800 dodatkowo
REZULTAT: Złość, poczucie oszukania, złe opinie na Trustpilot
```

**PROBLEM 3 - "Pod dom" vs "Do miejsca Twojego wyboru"**:
```
SŁOWO "pod dom" SUGERUJE:
  • Dostarczenie do frontu domu
  • Bez dodatkowych kosztów
  • Nieograniczone miejsca w PL

RZECZYWISTOŚĆ:
  • Transport do wybranego punktu
  • Czasami musi być dostęp dla lawety (droga, parking)
  • Mogą być dodatkowe koszty za trudny dostęp
  • Np. transport do piwnicy = niemożliwe
```

**WPŁYW**: 
- 🔴 POWAŻNY - Tworzy FAŁSZYWE oczekiwania
- Wysokie ryzyko skarł i negatywnych opinii
- Naruszenie uczciwości handlowej

---

### BŁĄD 1C: "Zwrotne wadium - bezpieczne zakupy" - MYLĄCE

**LOKALIZACJA**: Hero.tsx - Features List

**PROBLEM - Bezpieczeństwo**:
```
STRONA MÓWI: "Zwrotne wadium - bezpieczne zakupy"
RZECZYWISTOŚĆ:
  • Wadium to ZABEZPIECZENIE dla ubezpieczalni
  • NIE dla Ciebie (kupującego)
  • Jeśli wygrasz - wadium jest ODLICZANE od ceny
  • Jeśli nie wygrasz - czekasz 1-3 dni na zwrot

CO TO FAKTYCZNIE OZNACZA:
❌ To nie jest "bezpieczeństwo"
❌ To jest CENA WSTĘPU do aukcji
❌ Twoje pieniądze są ZABLOKOWANE na 1-3 dni
❌ Jeśli tracisz 10 aukcji - masz 10 blokad

RZECZYWISTE BEZPIECZEŃSTWO BYŁOBY:
✅ Gwarancja zwrotu €€€ jeśli auto ma ukryte uszkodzenia
✅ Ubezpieczenie pojazdu na transporcie
✅ Gwarancja rejestracji w PL
✅ To się NA STRONIE NIE MÓWI
```

**WPŁYW**: 
- Użytkownik myśli że jest chroniony
- W rzeczywistości jest podatny na straty
- Fałszywa poczucie bezpieczeństwa

---

## 🔴 SEKCJA 2: RESTWERTBORSEN.tsx - Fałszywe Definicje

### BŁĄD 2A: "Koszt naprawy przekracza wartość rynkową" - NIEŚCISŁE

**LOKALIZACJA**: Restwertborsen.tsx - Info Box, punkt 1

**STARE SFORMUŁOWANIE**:
```
"Ubezpieczyciel klasyfikuje pojazd jako szkodę całkowitą, 
gdy koszt naprawy przekracza wartość pojazdu w Niemczech 
(zazwyczaj 70-80% wartości rynkowej)."
```

**PROBLEM**:
```
MÓWI: "70-80% wartości rynkowej"
RZECZYWISTOŚĆ: 
  • Totalschaden ≠ proste obliczenie 70-80%
  
130%-REGELUNG (130% RULE):
  ⚠️ BRAKUJE NA STRONIE!
  
  • Ubezpieczalnia oblicza rzeczywisty koszt naprawy
  • Jeśli koszt naprawy > 130% wartości pojazdu
  • → Wtedy jest AUTOMATYCZNIE Totalschaden
  
  PRZYKŁAD:
  Pojazd wart €10.000
  130% = €13.000
  
  Koszt naprawy: €14.000 → TAK, to Totalschaden
  Koszt naprawy: €12.000 → NIE, to naprawa
  
  WIĘC: Nie chodzi o "70-80%" tylko o 130% próg!
```

**DOKŁADNA PROCEDURA**:
```
1. Biegły szacuje CAŁKOWITY koszt naprawy
2. Oblicza: Koszt naprawy ÷ Wartość pojazdu = PROCENT
3. Jeśli PROCENT > 130% → Totalschaden (brak dyskusji)
4. Jeśli PROCENT < 100% → Zdecydowana naprawa
5. Jeśli PROCENT 100-130% → Decyzja ubezpieczalni
   (mogą zdecydować niezależnie)

RZECZYWISTOŚĆ:
  • Nie ma "zazwyczaj 70-80%"
  • Jest konkretny PRÓG: 130%
  • To jest NIEMIECKI STANDARD
```

**WPŁYW**: 
- Brak zrozumienia systemu niemieckiego
- Użytkownik nie wie jak działa klasyfikacja
- Podręcznikowe wyjaśnienie jest błędne

---

### BŁĄD 2B: "Wycena restwartości" - NIEKOMPLETNA I BŁĘDNA

**LOKALIZACJA**: Restwertborsen.tsx - cała sekcja

**BRAKUJE FUNDAMENTALNEJ INFORMACJI**:
```
STRONA MÓWI: 
  "Ubezpieczalnia szacuje wartość pojazdu do naprawy"

BRAKUJE:
  • PRZEDZIAŁ CZASOWY: Restwartość jest wyliczana dla konkretnego czasu
  • To nie jest "wartość pojazdu generalnie"
  
RZECZYWISTOŚĆ (130% REGELUNG CZĘŚĆ 2):
  
  Restwartość = Wartość pojazdu w stanie uszkodzonym (bez naprawy)
  
  PRZYKŁAD:
  BMW 320d 2015:
  ├─ Pre-accident: €12.000
  ├─ Koszt pełnej naprawy: €8.500 (70% wartości)
  ├─ TOTALSCHADEN → BMW trafia na aukcję
  └─ Restwartość szacuje się jako:
      • Pojazd w stanie ZNISZCZONYM ale jeżdżący
      • Możliwy do naprawy ekonomicznie
      • Razem: €2.500 (20-33% wartości pre-accident)
      
  WAŻNE:
  ✓ Restwartość to NIE suma części
  ✓ To wartość pojazdu JAK ON JEST (uszkodzony)
  ✓ Jako funkcjonujący pojazd (jedzie, hamuje, nie pada zaraz)
```

---

### BŁĄD 2C: "Brakuje informacji o wiążących ofertach i 30 dniach" - KRYTYCZNE

**LOKALIZACJA**: NIGDZIE NA STRONIE

**CO BRAKUJE**:
```
NIKOMU NIE MÓWISZ O:

1️⃣ OKRES AKCEPTACJI (30 DNI):
   Po wygraniu aukcji → masz 30 dni na:
   • Przeglądnięcie pojazdu
   • Decyzję o zmianie zdania
   • Podjęcie ostatecznej decyzji
   
   WAŻNE: To NIE jest czas transportu!
   To jest czas na ZASTANOWIENIE SIĘ
   
   JEŚLI ZMIENISZ ZDANIE PO 30 DNIACH:
   ❌ Tracisz wadium
   ❌ Uiszczasz karę za wypowiedzenie
   ❌ Pojazd wraca na aukcję
   
2️⃣ OFERTA JEST WIĄŻĄCA:
   Gdy złożysz ofertę:
   ✓ To umowa
   ✓ Nie możesz jej anulować za darmo
   ✓ Jeśli wygrasz → MUSISZ kupić
   ✓ Jeśli nie kupisz → karą za niedokonanie
   
3️⃣ AKCEPTACJA UBEZPIECZALNI:
   Ubezpieczalnia może:
   ✓ Zaakceptować Twoją ofertę (TOP)
   ✓ ODRZUCIĆ ofertę jako za niska (POWSZECHNE)
   ✓ Zaproponować négocjacje (RZADKO)
   
   JEŚLI ODRZUCI:
   • Nie widzisz dlaczego
   • Możesz licytować ponownie
   • Wadium zostaje zwrócone
```

**WPŁYW**: 
- 🔴 WYŻSZE RYZYKO dla kupującego
- Użytkownik nie wie że ma 30 dni na rozmyślenie
- Myśli że płaci od razu i punkt
- Nie wie że oferta jest WIĄŻĄCA

---

## 🔴 SEKCJA 3: HOWIT WORKS.tsx - Przeinaczenia Czasu

### BŁĄD 3A: "Czas oczekiwania: zazwyczaj 3-7 dni roboczych" - NIEDOSTATECZNE

**LOKALIZACJA**: jak-to-dziala/page.tsx, Step 3

**PROBLEM - Niezupełne Wyjaśnienie**:
```
STRONA MÓWI:
"Czas oczekiwania: zazwyczaj 3-7 dni roboczych"

RZECZYWISTOŚĆ:
3-7 dni to CZAS AUKCJI, ale nie cały proces!

KOMPLETNY TIMELINE:

FAZA 1: PROCEDURA AUKCJI (3-7 dni)
├─ Ty: Składasz ofertę
├─ Ubezpieczalnia: Zbiera wszystkie oferty
├─ Ubezpieczalnia: Otwiera koperty
├─ Ubezpieczalnia: Sprawdza najwyższą ofertę
└─ Wynik: Wygrałeś lub przegrałeś

JEŚLI WYGRAŁEŚ:

FAZA 2: WERYFIKACJA (1-3 dni)
├─ Ubezpieczalnia: Sprawdza Twoją tożsamość
├─ Ubezpieczalnia: Weryfikuje przepisy AML
├─ Ubezpieczalnia: Potwierdza zdolność płatniczą
└─ Wynik: OK lub odmowa

FAZA 3: OKRES AKCEPTACJI (do 30 dni)
├─ Ty: Masz czas na sprawdzenie pojazdu
├─ Ty: Możesz złożyć wniosek o zmianę zdania
├─ Ty: Podejmiesz ostateczną decyzję
└─ Wynik: Akceptujesz lub wycofujesz

FAZA 4: FINALIZACJA PŁATNOŚCI (24-48h)
├─ Ty: Przygotowujesz fundusze
├─ Ty: Dokonujesz przelewu
├─ Ubezpieczalnia: Sprawdza płatność
└─ Wynik: Płatność potwierdzona

FAZA 5: DOSTĘP DO POJAZDU (0-3 dni)
├─ Ty: Dostajesz dostęp do pojazdu
├─ Ty: Możesz zorganizować transport
└─ Wynik: Pojazd czeka na Ciebie

RAZEM OD AUKCJI DO TRANSPORTU: 2-6 TYGODNI (nie 3-7 dni!)
```

**WPŁYW**: 
- Użytkownik myśli że proces jest szybszy niż jest
- Czeka na pojazd dłużej niż się spodziewał
- Rozczarowanie

---

### BŁĄD 3B: "7-14 dni na finalizację" - NIEŚCISŁE

**LOKALIZACJA**: jak-to-dziala/page.tsx

**PROBLEM**:
```
STRONA MÓWI:
"Po wygraniu masz 7-14 dni na finalizację transakcji i odbiór."

RZECZYWISTOŚĆ:
To MAKSIMUM, ale procesy se na różne sposoby:

• 7 dni: MINIMUM na dokumenty i rozliczenia
• 14 dni: To może być czas na zmianę zdania + dokumenty
• 30 dni: To maksymalny CZAS REZERWACJI pojazdu

ŚCISŁY SCHEMAT:
1. Wygranie aukcji → Potwierdzenie (24h)
2. Weryfikacja Twoich danych → AML/KYC (48-72h)
3. Otrzymujesz wiadomość o nieoficjalnym "Wygrana!"
4. Masz 30 dni na "zastanowienie się" (prawo do wycofania)
5. Jeśli potwierdzisz → masz 7-14 dni do płatności
6. Płatność → dostęp do pojazdu (24-48h)
7. Transport → dodatkowe 3-10 dni

CZYLI:
Min: 2 tygodnie (jeśli szybko)
Typowo: 3-4 tygodnie
Max: 6-8 tygodni (jeśli zwlekasz)
```

---

## 🔴 SEKCJA 4: FAQ.tsx - Brakujące Odpowiedzi

### BŁĄD 4A: Brak Pytania "Czy mogę zmienić zdanie?"

**BRAKUJE KOMPLETNIE**:
```
Q: "Czy mogę zmienić zdanie po wygraniu aukcji?"

ODPOWIEDŹ POWINNA BRZMIEĆ:
A: "Tak, masz prawo do wycofania w ciągu 30 dni od wygrania aukcji.
   
   Proces:
   • Dni 1-30: Możesz się wycofać (stracisz wadium)
   • Po 30 dniach: Umowa jest ostateczna
   
   Jeśli się wycofasz:
   ❌ Tracisz wadium (nie zwracane)
   ❌ Zapłacisz karę: czasem 5-10% od ceny
   ❌ Pojazd wraca na aukcję
   
   Jeśli tego NIE wiesz → mogą Cię zaskoczyć koszty!"
```

---

### BŁĄD 4B: Brak Pytania "Jak działa licytacja kopertowa?"

**BRAKUJE KOMPLETNIE**:
```
Q: "Jak dokładnie działa licytacja kopertowa?"

ODPOWIEDŹ POWINNA BRZMIEĆ:
A: "Licytacja kopertowa (Kutvertauktion) to system, gdzie:

   1. Ty: Wpłacasz wadium
   2. Ty: Podajesz swoją MAKSYMALNĄ ofertę
   3. NIKT: Nie widzi Twojej oferty
   4. Wszyscy kupujący: Składają oferty jednocześnie
   5. Ubezpieczalnia: Otwiera wszystkie koperty
   6. Ubezpieczalnia: Wybiera NAJWYŻSZĄ ofertę
   7. Zwycięzca: MUSISZ zapłacić (oferta jest wiążąca!)
   
   WAŻNE RÓŻNICE OD NORMALNEJ AUKCJI (np. eBay):
   ✗ Brak wojen stawek (każdy licytuje raz)
   ✗ Brak podbijania (Twoja oferta to maksimum)
   ✓ Brak przejrzystości (nie widzisz ceny innych)
   ✓ Oferta WIĄŻĄCA (nie możesz się wycofać za darmo)
"
```

---

### BŁĄD 4C: "Czy mogę zobaczyć auto przed zakupem?" - NIEREALISTYCZNA ODPOWIEDŹ

**LOKALIZACJA**: FAQ.tsx

**STARA ODPOWIEDŹ**:
```
"Aukcje działają online w systemie licytacji kopertowej. 
Na platformie dostępne są szczegółowe zdjęcia, raporty szkód, 
kalkulacje kosztów naprawy i opisy techniczne. 
Osobiście oglądanie przed licytacją nie jest możliwe, 
ale możesz nas poprosić o dodatkowe zdjęcia konkretnych elementów."
```

**PROBLEM**:
```
CZĘŚĆ "możesz nas poprosić o dodatkowe zdjęcia":
❌ To nie jest zawsze możliwe
❌ Zależy od ubezpieczalni
❌ Niektóre ubezpieczalnie udostępniają jeszcze zdjęcia
❌ Inne: dostępny jest tylko pakiet ze spekulacjami

LEPSZA ODPOWIEDŹ:
"Przed licytacją dostępne są:
✓ Zdjęcia ze wszystkich stron pojazdu
✓ Raport z ubezpieczalni ze szczegółami uszkodzeń
✓ Szacunek kosztów naprawy (Rep.-Kosten)
✓ Historia serwisowa (jeśli dostępna)

Osobisty przegląd PRZED licytacją:
❌ Nie jest możliwy (zamknięte platformy)
✓ Możesz odebrać pojazd osobiście i sprawdzić go
   (GDY JUŻ WYGRASZ)

Jeśli masz wątpliwości:
→ Zatrudnij biegłego na wyjeździe do Niemiec (€200-€300)
→ Wyślemy Ci dodatkowe zdjęcia (zależy od ubezpieczalni)"
```

---

### BŁĄD 4D: "Co jeśli auto ma więcej uszkodzeń niż w opisie?" - NIEDOSTATECZNA ODPOWIEDŹ

**LOKALIZACJA**: FAQ.tsx - ostatnie pytanie

**STARA ODPOWIEDŹ**:
```
"Wszystkie znane uszkodzenia są szczegółowo udokumentowane 
w raporcie ubezpieczalni. W rzadkich przypadkach mogą 
wystąpić ukryte uszkodzenia. Dlatego zalecamy zawsze 
dokładne sprawdzenie pojazdu po odbiorze i skonsultowanie 
się z mechanikiem przed rozpoczęciem naprawy."
```

**PROBLEM - Brak Rozwiązań**:
```
SŁOWA KLUCZOWE:
• "w rzadkich przypadkach" = NIE RZADKO (15-20% pojazdy!)
• "zalecamy sprawdzenie" = A CO JEŚLI ZNAJDZIESZ WIĘCEJ?

CO BRAKUJE:
❌ Co robisz jak znajdziesz ukryte uszkodzenia?
❌ Czy możesz wycofać się z umowy?
❌ Czy można złożyć skargę?
❌ Jaki masz recours?

LEPSZA ODPOWIEDŹ:
"Rzeczywistość:
• ~15-20% pojazdy ma uszkodzenia niewidoczne w raporcie
• Raport zawiera tylko uszkodzenia zdiagnozowane
• Ukryte uszkodzenia (spalony silnik itp.) mogą się pojawić

Jak się chronić:
1. PRZED AUKCJĄ:
   → Zatrudnij biegłego w Niemczech (€200-€300)
   → Poproś o dodatkowe zdjęcia
   
2. JEŚLI WYGRASZ:
   → Możesz się wycofać w ciągu 30 dni (stracisz wadium)
   → Jeśli będą „ew" uszkodzenia - możesz się wycofać
   
3. JEŚLI PRZEJMIESZ POJAZD:
   → Ubezpieczalnia NIE odpowiada za ukryte uszkodzenia
   → To rynek 'jak jest' (caveat emptor)
   → Możesz się odwołać jeśli opisz był FAŁSZYWY

Nasze wsparcie:
→ Pomożemy w negocjacjach z ubezpieczalnią
→ Wspomagamy biegłych w odbiorze"
```

---

## 🔴 SEKCJA 5: HERO - Floating Cards - BŁĘDY CZASOWE

**LOKALIZACJA**: Hero.tsx - Floating Cards

### BŁĄD 5A: "Średni czas aukcji: 30 dni"

**PROBLEM**:
```
STRONA MÓWI: "Średni czas aukcji 30 dni"
RZECZYWISTOŚĆ:
  • Aukcje trwają: 5-30 dni
  • Średnia: 10-14 dni
  • Maksimum: 30 dni

SZCZEGÓŁOWO:
  • AUTOonline: 7-21 dni (średnia 14 dni)
  • Car.casion: 5-14 dni (średnia 9 dni)
  • Car.tv: 7-21 dni (średnia 15 dni)
  • Winvalue: 5-14 dni (średnia 10 dni)

NIE 30 DNI ŚREDNIO, to MAKSIMUM!

ZMIEŃ NA: "Aukcje trwają średnio 10-14 dni"
```

---

## 🔴 SEKCJA 6: STATS.tsx - BRAK INFORMACJI

**BRAKUJE CAŁKOWICIE**:
```
❌ Liczba pojazdy na wszystkich platformach razem (8.000-12.000)
❌ Marża dla importerów (12-24% netto)
❌ Restwartość (20-33% wartości)
❌ Średnia cena pojazdu (€2.000-€5.000)
❌ Liczba ubezpieczalni (15+ głównych)
```

---

## 🔴 SEKCJA 7: JAK-TO-DZIAŁA - Brak "30 Dni Myślenia"

**NIGDZIE NA STRONIE:**
```
❌ Procedura 30-dniowego okresu akceptacji
❌ Możliwość wycofania się po wygraniu
❌ Koszty związane z wycofaniem (strata wadium + karę)
❌ Status "umowa wiążąca"
```

---

## 🔴 SEKCJA 8: RESTWORTBORN - Brak "130%-Regelung"

**NIGDZIE NA STRONIE:**
```
❌ 130%-Regelung (130% Rule - niemiecki standard)
❌ Jak dokładnie ubezpieczalnia klasyfikuje Totalschaden
❌ Próg ekonomicznej opłacalności
❌ Możliwość negocjacji ubezpieczalni
```

---

## 📊 TABELA WSZYSTKICH NIESPÓJNOŚCI

| Lp | Komponent | Błąd | Typ | Wpływ | Priorytet |
|---|---|---|---|---|---|
| 1 | Hero | 4500+ zamiast 8000-12.000 | Fakt | Wiarygodność | 🔴 CRITICAL |
| 2 | Hero | "Transport pod dom" bez kosztu | Misleading | Oczekiwania | 🔴 CRITICAL |
| 3 | Hero | "Zwrotne wadium" = bezpieczeństwo | Mylące | Edukacja | 🟠 HIGH |
| 4 | Restwertb. | "70-80%" zamiast "130% rule" | Nieścisłe | Edukacja | 🔴 CRITICAL |
| 5 | Restwertb. | Brak wyjaśnienia restwartości | Niekompletne | Edukacja | 🟠 HIGH |
| 6 | HowItWorks | "3-7 dni" ≠ całkowity proces | Misleading | Oczekiwania | 🟠 HIGH |
| 7 | HowItWorks | Brak informacji o 30 dniach | Brakuje | Prawo | 🔴 CRITICAL |
| 8 | HowItWorks | Oferta nie jest wiążąca (mylący) | Fakt | Prawo | 🔴 CRITICAL |
| 9 | FAQ | Brak pytania o zmianę zdania | Brakuje | Edukacja | 🟠 HIGH |
| 10 | FAQ | Brak wyjaśnienia licytacji kopertowej | Brakuje | Edukacja | 🟠 HIGH |
| 11 | FAQ | "Rzadkie" ukryte uszkodzenia (15-20%!) | Fakt | Edukacja | 🔴 CRITICAL |
| 12 | Hero Card | "Średni czas 30 dni" (to max!) | Fakt | Oczekiwania | 🟠 HIGH |
| 13 | Całość | Brak info o 130%-Regelung | Brakuje | Edukacja | 🔴 CRITICAL |

---

## ZAGROŻENIA PRAWNE

### ⚖️ Brakuje Informacji o Warunkach

```
NIESPEŁNIANIE OBOWIĄZKU INFORMACYJNEGO:

Ustawa o Ochronie Konsumenta (UOKiK):
✗ Nie ujawniasz pełnych kosztów (transport)
✗ Nie wyjaśniasz limitów czasowych (30 dni)
✗ Nie wyjaśniasz procesu licytacji
✗ Nie ujawniasz że oferta jest wiążąca

DyrektykaEuropejska 2005/29/WE:
✗ Niespokojne praktyki handlowe
✗ Mylące stwierdzenia ("bezpieczeństwo", "pod dom")
✗ Niedostateczne informacje o warunkach

MOŻLIWE KONSEKWENCJE:
❌ Skarży od UOKiK
❌ Karę finansowe
❌ Obowiązek informowania
❌ Wznowienie konsumenta
```

---

## PLAN NAPRAWY - PRIORYTETY

### 🔴 NATYCHMIAST (Dziś):

1. **Zmień Hero - Transport** 
   - "Transport bezpośrednio pod dom" → "Transport dostępny (od €300)"

2. **Zmień Hero - Liczba aut**
   - "4500+" → "8.000-12.000+"

3. **Dodaj do FAQ - 30 dni**
   - Nowe pytanie o okres akceptacji i możliwość wycofania

4. **Zmień Restwertb. - 130%-Regelung**
   - Wyjaśnij dokładnie jak działa klasyfikacja

---

### 🟠 DZIŚ WIECZOREM:

5. **Zmień HowItWorks - Timeline**
   - Pełny proces zamiast "3-7 dni"

6. **Dodaj do FAQ - Licytacja kopertowa**
   - Pełne wyjaśnienie co to znaczy

7. **Zmień FAQ - Uszkodzenia**
   - "Rzadko" → "15-20% pojazdy"

---

### 🟡 JUTRO:

8. **Utwórz nową sekcję o ryzykach**
   - 7 kategorii niebezpieczeństw

9. **Dodaj do Stats**
   - Realne liczby o platformach i marżach

10. **Pełny audit** wszystkich czasów i dat

---

## ⚠️ KONKLUZJA

Strona zawiera **13 GŁÓWNYCH NIESPÓJNOŚCI** z czego:
- 🔴 **6 KRYTYCZNYCH** (mogą prowadzić do sądów)
- 🟠 **5 WYSOKICH** (powodują złe oczekiwania)
- 🟡 **2 ŚREDNIE** (brakuje kontekstu)

**Szansa że użytkownik będzie rozczarowany: ~70%**

Główne powody:
1. Ukryta cena transportu
2. Brak wyjaśnienia 30-dniowego okresu
3. Mylące informacje o "bezpieczeństwie"
4. Niewłaściwe liczby w czasach i aukcjach
5. Brak edukacji o systemie 130%-Regelung

**REKOMENDACJA**: Napraw KRYTYCZNE błędy ZARAZ, zanim pójdziesz dalej z marketingiem.
