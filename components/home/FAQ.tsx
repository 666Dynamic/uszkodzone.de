'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    question: 'Czy mogę kupić auto jako osoba prywatna?',
    answer: 'Tak! Dzięki naszemu licencjonowanemu dostępowi możesz kupować pojazdy bezpośrednio z niemieckich ubezpieczalni:\n\n• Ty wybierasz auto i analizujesz zdjęcia oraz raporty\n• Składasz ofertę i decydujesz o maksymalnej cenie\n• Nasza stała prowizja: 2.500 PLN (dostęp + obsługa transakcji)',
  },
  {
    question: 'Co oznacza że oferta jest wiążąca przez 30 dni?',
    answer: 'Twoja oferta jest WIĄŻĄCA — po akceptacji MUSISZ kupić pojazd:\n\n• Ubezpieczalnia ma 30 dni na decyzję (akceptuje lub odrzuca)\n• Po akceptacji: 5 dni na zapłatę i odbiór pojazdu\n• Płatność: gotówka przy odbiorze LUB przelew SWIFT\n• Brak realizacji = utrata wadium + kary umowne\n\n⚠️ NIGDY nie składaj oferty na auto którego nie chcesz kupić!',
  },
  {
    question: 'Jakie są opłaty?',
    answer: 'Przejrzysta struktura kosztów:\n\n• Prowizja: 2.500 PLN (stała kwota)\n• Opłaty aukcyjne: 50-100 EUR\n• Handling dokumentów: według cennika',
  },
  {
    question: 'Ile wynosi wadium i jak działa?',
    answer: 'Wysokość wadium zależy od wartości oferty:\n\n• Standardowo: 2.500 PLN\n• Oferta > 10.000 EUR: wadium 4.000 PLN\n• Oferta > 20.000 EUR: wadium 8.000 PLN\n\n**Rozliczenie:**\n• Wygrana: wadium zaliczone na poczet prowizji\n• Przegrana: pełny zwrot w 3-5 dni\n• Brak realizacji: przepadek wadium',
  },
  
  {
    question: 'Ile czasu trwa cały proces?',
    answer: 'Od złożenia oferty do rejestracji w Polsce: **2-4 tygodnie**\n\nNajwiększym czynnikiem jest czas decyzji ubezpieczalni (do 30 dni).',
  },
  {
    question: 'Czy mogę sprawdzić auto przed zakupem?',
    answer: '**NIE** — przed złożeniem oferty dostępne są tylko:\n\n• 10-20 zdjęć wysokiej jakości\n• Raport ubezpieczalni ze szkodami\n• Kalkulacja kosztów naprawy\n\n⚠️ Brak możliwości oglądu = **dokładnie analizuj dokumentację!**',
  },
  {
    question: 'Jak zarejestrować uszkodzone auto z Niemiec?',
    answer: 'Krok po kroku:\n\n1. **Dokumenty** — otrzymujesz komplet od nas\n2. **Akcyza** — 14 dni na deklarację, wezwij rzeczoznawcę PRZED naprawą\n3. **Naprawa** pojazdu\n4. **Badanie techniczne** w SKP\n5. **Rejestracja** w Wydziale Komunikacji (~160 zł)\n\nCzas: 1-5 dni roboczych po naprawie',
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
