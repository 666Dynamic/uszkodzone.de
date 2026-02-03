'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    question: 'Czy mogę kupić auto jako osoba prywatna?',
    answer: 'Tak! Chociaż niemieckie giełdy ubezpieczeniowe (Restwertbörsen) są zamknięte dla osób prywatnych, dzięki naszemu licencjonowanemu dostępowi możesz kupować pojazdy bezpośrednio z niemieckich ubezpieczalni.\n\n• Ty wybierasz auto i analizujesz zdjęcia oraz raporty szkód\n• Składasz ofertę i decydujesz o maksymalnej cenie\n• Nasza stała prowizja: 2.500 PLN za dostęp i obsługę całej transakcji',
  },
  {
    question: 'Co oznacza że oferta jest wiążąca przez 30 dni?',
    answer: 'Twoja oferta jest WIĄŻĄCA przez 30 dni - oznacza to, że jak ubezpieczalnia ją zaakceptuje, MUSISZ kupić pojazd. Nie możesz się wycofać.\n\n• W ciągu 30 dni ubezpieczalnia decyduje: akceptuje (wtedy masz 5 dni na odbiór) albo odrzuca jako za niską\n• Płatność: gotówka u właściciela pojazdu przy odbiorze LUB przelew SWIFT przed odbiorem\n• Jeśli nie odbierzesz/nie zapłacisz w terminie 5 dni – tracisz wadium + kary umowne\n\n⚠️ NIGDY nie składaj oferty na auto którego nie chcesz lub nie możesz kupić!',
  },
  {
    question: 'Jakie są opłaty?',
    answer: 'Przejrzysta struktura kosztów:\n\n• Prowizja: 2.500 PLN (stała kwota)\n• Opłaty aukcyjne: 50-100 EUR\n• Opłata za handling dokumentów',
  },
  {
    question: 'Ile wynosi wadium i jak działa?',
    answer: 'Wysokość wadium zależy od wartości oferty:\n\n• Standardowo: 2.500 PLN\n• Dla ofert > 10.000 EUR: wadium 4.000 PLN\n• Dla ofert > 20.000 EUR: wadium 8.000 PLN\n\nDlaczego pobieramy wadium? (1) odcina osoby, które tylko "oglądają", (2) zabezpiecza nas przed opłatami aukcyjnymi w razie wycofania się po wygranej, (3) pokrywa koszty przy ponownej sprzedaży pojazdu.\n\nRozliczenie wadium:\n• Wygrana aukcja: wadium zaliczone na poczet prowizji (2.500 PLN). Nadwyżka zwracana lub zaliczana na transport.\n• Przegrana: pełny zwrot wadium w 3-5 dni roboczych\n• Wycofanie po wygranej: przepadek wadium zgodnie z regulaminem',
  },
  
  {
    question: 'Ile czasu trwa cały proces?',
    answer: 'Szybka ścieżka: od złożenia oferty do rejestracji w Polsce około 2-4 tygodnie.\n\nNajwiększym czynnikiem wpływającym na czas jest decyzja ubezpieczalni (mają do 30 dni na odpowiedź).',
  },
  {
    question: 'Czy mogę sprawdzić auto przed zakupem?',
    answer: 'NIE — przed złożeniem oferty nie ma możliwości osobistego oglądu. Dostępne są tylko:\n\n• 10-20 zdjęć wysokiej jakości\n• Raport ubezpieczalni ze szczegółami szkód\n• Kalkulacja kosztów naprawy\n\nLokalizacja i możliwość oglądu nie są udostępniane przed wygraną. Po zaakceptowaniu oferty nie ma możliwości wycofania się — oferta jest wiążąca.\n\n⚠️ KLUCZOWE: dokładnie analizuj zdjęcia, raport i kalkulację PRZED złożeniem oferty!',
  },
  {
    question: 'Jak zarejestrować uszkodzone auto z Niemiec?',
    answer: 'Proces krok po kroku:\n\n1. Dokumenty — otrzymujesz od nas komplet (Zulassungsbescheinigung Teil I i II + umowa/faktura)\n2. Akcyza — masz 14 dni na złożenie deklaracji AKC-U/S i 30 dni na płatność. WAŻNE: wezwij rzeczoznawcę PRZED naprawą, by wycenił wartość w stanie uszkodzonym\n3. Naprawa pojazdu\n4. Badanie techniczne w Stacji Kontroli Pojazdów (SKP)\n5. Rejestracja w Wydziale Komunikacji (dowód własności, potwierdzenie opłaty akcyzy, zaświadczenie z badania, opłaty ~160 zł)\n\nCzas: 1-5 dni roboczych po naprawie',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Najczęściej zadawane <span className="text-primary-600">pytania</span>
          </h2>
          <p className="text-lg text-gray-600">
            Wszystko, co musisz wiedzieć o kupnie powypadkowych aut z Niemiec
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
