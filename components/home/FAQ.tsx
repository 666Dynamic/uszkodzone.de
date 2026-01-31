'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    question: 'Czy mogę kupić auto jako osoba prywatna?',
    answer: 'Tak! Chociaż niemieckie giełdy ubezpieczeniowe są zamknięte dla osób prywatnych, my mamy licencjonowany dostęp do tych platform. Działamy w Twoim imieniu – licytujemy za Ciebie na zamkniętych aukcjach, organizujemy transport i dokumentację. Ty po prostu wybierasz auto i decydujesz o maksymalnej cenie.',
  },
  {
    question: 'Co oznacza że oferta jest wiążąca przez 30 dni?',
    answer: 'Twoja oferta jest WIĄŻĄCA przez 30 dni - oznacza to że jak wygrasz aukcję, MUSISZ kupić pojazd. Nie możesz się po prostu wycofać. W ciągu 30 dni ubezpieczalnia może zaakceptować Twoją ofertę (wtedy musisz zapłacić pełną kwotę w 7-14 dni) albo odrzucić jako za niską. Jeśli ubezpieczalnia zaakceptuje a Ty nie zapłacisz – tracisz wadium + dodatkowe kary umowne. Dlatego NIGDY nie licytuj auta którego nie chcesz kupić!',
  },
  {
    question: 'Ile faktycznie kosztuje transport i pozostałe opłaty?',
    answer: 'Transport lawetą z Niemiec: 1.300-2.500 zł. Ubezpieczenie transportu: 200-400 zł. Obsługa dokumentów i nasza prowizja: 300-800 zł. Razem transport: 1.800-3.700 zł. Dodatkowo po przyjeździe: przegląd techniczny (200-300 zł), rejestracja CEPiK (500-700 zł), polisa OC (800-1.500 zł rocznie). Łącznie opłaty dodatkowe to ok. 3.300-6.200 zł poza ceną aukcyjną pojazdu.',
  },
  {
    question: 'Jak działa wadium i czy je stracę?',
    answer: 'Wadium (10-20% szacunkowej wartości pojazdu) to zabezpieczenie twojej wiążącej oferty. Wpłacasz je przed licytacją. Jeśli PRZEGRASZ aukcję – wadium wraca w całości w 1-3 dni. Jeśli WYGRASZ – wadium jest wliczane w cenę końcową pojazdu. Jeśli WYGRASZ ale nie zapłacisz reszty w terminie (7-14 dni) – wadium przepada + możliwe dodatkowe kary. Dlatego: licytuj TYLKO te auta, które na pewno chcesz i możesz kupić!',
  },
  {
    question: 'Czy pojazd może mieć ukryte uszkodzenia?',
    answer: 'Tak – około 15-20% pojazdów ma uszkodzenia niewidoczne w raporcie (np. problemy z silnikiem, skrzynią biegów, elektroniką). Raport ubezpieczalni zawiera tylko widoczne szkody z wyceny. UWAGA: Po wygraniu aukcji i zaakceptowaniu oferty przez ubezpieczalnię MUSISZ kupić pojazd - nie możesz się wycofać nawet jeśli znajdziesz ukryte uszkodzenia! Dlatego KRYTYCZNE: (1) Przed licytacją dokładnie analizuj WSZYSTKIE zdjęcia. (2) Licytuj TYLKO auta gdzie akceptujesz ryzyko. (3) Planuj zawsze bufor 20-30% na nieprzewidziane naprawy.',
  },
  {
    question: 'Ile czasu trwa cały proces?',
    answer: 'Timeline: (1) Wybór auta i licytacja: 1-3 dni składania oferty. (2) Oczekiwanie na decyzję ubezpieczalni: 5-30 dni (Twoja oferta jest wiążąca przez ten czas). (3) Jeśli zaakceptują - płatność pełnej kwoty: 7-14 dni. (4) Transport do Polski: 5-10 dni. (5) Rejestracja w Polsce: 3-5 dni. RAZEM: od 3 tygodni (szybko) do 8 tygodni (normalnie). Średnio: 4-6 tygodni od złożenia oferty do rejestracji.',
  },
  {
    question: 'Czy mogę sprawdzić auto przed zakupem?',
    answer: 'PRZED licytacją: NIE - aukcje są online wyłącznie na podstawie zdjęć i raportów. Dostajesz 30-150 zdjęć + raport biegłego ubezpieczalni. PO WYGRANEJ: NIE ma już opcji sprawdzenia przed zakupem - oferta jest wiążąca. Teoretycznie możesz pojechać do Niemiec ale to nic nie zmieni - jeśli ubezpieczalnia zaakceptuje twoją ofertę w ciągu 30 dni, MUSISZ kupić. Dlatego KRYTYCZNE: dokładnie analizuj każde zdjęcie PRZED licytacją! Lepiej przegapić okazję niż kupić kota w worku.',
  },
  {
    question: 'Co jeśli auto nie da się zarejestrować w Polsce?',
    answer: 'Wszystkie pojazdy z niemieckich giełd spełniają normy EU i MOGĄ być zarejestrowane w Polsce. Potrzebujesz: (1) Fahrzeugbrief (dowód rejestracyjny) - otrzymujesz od nas. (2) COC (certyfikat zgodności EU) - jeśli brakuje, zamawiamy u producenta (400-1.200 zł). (3) Przegląd techniczny w Polsce. (4) Polisa OC. Pomagamy w całym procesie rejestracji. Problem może być tylko jeśli pojazd ma ZASTAWĘ (Pfandrecht) - ale to sprawdzamy PRZED licytacją.',
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
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Nie znalazłeś odpowiedzi na swoje pytanie?
          </p>
          <a
            href="/kontakt"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Skontaktuj się z nami
          </a>
        </motion.div>
      </div>
    </section>
  )
}
