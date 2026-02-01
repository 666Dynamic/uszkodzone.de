'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    question: 'Czy mogę kupić auto jako osoba prywatna?',
    answer: 'Tak! Chociaż niemieckie giełdy ubezpieczeniowe (Restwertbörsen) są zamknięte dla osób prywatnych, dzięki naszemu licencjonowanemu dostępowi możesz kupować pojazdy bezpośrednio z niemieckich ubezpieczalni. Ty wybierasz auto, analizujesz zdjęcia i raporty, składasz ofertę i decydujesz o maksymalnej cenie. Nasza prowizja: 2.500 PLN (stała kwota za dostęp i obsługę transakcji).',
  },
  {
    question: 'Co oznacza że oferta jest wiążąca przez 30 dni?',
    answer: 'Twoja oferta jest WIĄŻĄCA przez 30 dni - oznacza to, że jak ubezpieczalnia ją zaakceptuje, MUSISZ kupić pojazd. Nie możesz się wycofać. W ciągu 30 dni ubezpieczalnia decyduje: akceptuje (wtedy masz 5 dni na odbiór pojazdu) albo odrzuca jako za niską. Płatność: gotówka u właściciela pojazdu przy odbiorze LUB przelew SWIFT przed odbiorem. Jeśli ubezpieczalnia zaakceptuje ofertę a Ty nie odbierzesz/nie zapłacisz w terminie 5 dni – tracisz wadium + dodatkowe kary umowne. Dlatego NIGDY nie składaj oferty na auto którego nie chcesz lub nie możesz kupić!',
  },
  {
    question: 'Jakie są nasze opłaty?',
    answer: 'Prowizja: 2.500 PLN (stała). Dodatkowo pobieramy opłaty aukcyjne (50-100 EUR) oraz opłatę za handling dokumentów.',
  },
  {
    question: 'Ile wynosi wadium i jak działa?',
    answer:
      'Standardowe wadium: 2 500 PLN. Dla większych ofert wymagamy wyższego zabezpieczenia: deklarowana maks. oferta > 10 000 EUR — wadium 4 000 PLN; deklarowana maks. oferta > 20 000 EUR — wadium 8 000 PLN.\n\nDlaczego pobieramy wadium: (1) odcina osoby, które tylko „oglądają”, (2) zabezpiecza nas przed opłatami aukcyjnymi i kosztami administracyjnymi w razie wycofania się po wygranej, (3) pomaga pokryć ewentualne koszty przy ponownej sprzedaży pojazdu.\n\nRozliczenie wadium po wygranej: wadium zostanie zaliczone na poczet naszej stałej prowizji (2 500 PLN). Jeżeli wpłacone wadium jest wyższe niż prowizja, nadwyżka zostanie zwrócona klientowi lub (za jego zgodą) może zostać zaliczona na poczet kosztów transportu/handlingu. Proszę nie mylić wysokości wadium z prowizją — wadium to zabezpieczenie, nie dodatkowa opłata dla firmy.\n\nZwroty: jeśli nie wygrasz żadnej aukcji — wadium zwracamy w całości (zwykle w ciągu 3–5 dni roboczych). Jeśli wygrasz i nie zapłacisz/nie odbierzesz pojazdu w wymaganym terminie — wadium przepada zgodnie z regulaminem.',
  },
  
  {
    question: 'Ile czasu trwa cały proces?',
    answer: 'Szybka ścieżka: od złożenia oferty do rejestracji w Polsce w około 2–4 tygodnie. Największy czynnik wpływający na czas to decyzja ubezpieczalni.',
  },
  {
    question: 'Czy mogę sprawdzić auto przed zakupem?',
    answer: 'NIE — przed złożeniem oferty możesz zobaczyć tylko zdjęcia i dokumentację (zwykle 10–20 zdjęć + raport ubezpieczalni). Lokalizacja i możliwość osobistego oglądu nie są udostępniane przed wygraną. Po zaakceptowaniu oferty nie ma możliwości wycofania się — oferta jest wiążąca. Dlatego KLUCZOWE: dokładnie analizuj zdjęcia, raport i kalkulację PRZED złożeniem oferty.',
  },
  {
    question: 'Co jeśli auto nie da się zarejestrować w Polsce?',
    answer: 'Wszystkie pojazdy z niemieckich giełd spełniają normy EU i MOGĄ być zarejestrowane w Polsce. Potrzebujesz: (1) Fahrzeugbrief (dowód rejestracyjny) - otrzymujesz przy odbiorze. (2) COC (certyfikat zgodności EU) - jeśli brakuje, można zamówić u producenta (400-1.200 zł). (3) Przegląd techniczny w Polsce. (4) Polisa OC. W razie potrzeby pomagamy w procesie rejestracji. Problem może być tylko jeśli pojazd ma ZASTAWĘ (Pfandrecht) - ale weryfikujemy to PRZED złożeniem oferty.',
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
