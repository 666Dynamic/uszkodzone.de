'use client'

import { motion } from 'framer-motion'
import { FiSearch, FiFileText, FiCheckCircle, FiTruck } from 'react-icons/fi'

const steps = [
  {
    icon: FiSearch,
    number: '01',
    title: 'Wybierasz pojazd',
    description: 'Przeglądasz naszą bazę ponad 8.000 aut dziennie. Otrzymujesz dostęp do szczegółowych zdjęć, raportów szkód i kalkulacji napraw. Pomagamy w ocenie stanu technicznego.',
  },
  {
    icon: FiFileText,
    number: '02',
    title: 'Licytujemy w Twoim imieniu',
    description: 'Wpłacasz wadium (zwrotne, 10-20% wartości) i podajesz maksymalną kwotę. My licytujemy za Ciebie na zamkniętych platformach. Twoja oferta jest wiążąca - po wygranej musisz kupić.',
  },
  {
    icon: FiCheckCircle,
    number: '03',
    title: 'Czekasz na decyzję ubezpieczalni',
    description: 'Twoja oferta jest wiążąca przez 30 dni. Ubezpieczalnia może zaakceptować (musisz kupić) lub odrzucić jako za niską (wadium wracane). Oczekiwanie: 5-30 dni.',
  },
  {
    icon: FiTruck,
    number: '04',
    title: 'Organizujemy transport',
    description: 'Po zapłacie organizujemy transport do Polski (1.300-4.000 zł). Otrzymujesz pojazd z pełną dokumentacją. Pomagamy w rejestracji w Polsce. Średni czas: 2-3 tygodnie.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Jak to <span className="text-primary-600">działa?</span>
          </h2>
          <p className="text-lg text-gray-600">
            Prosty proces w 4 krokach - od przeglądania aut do odbioru pod dom
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent" />
                )}

                <div className="relative bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-primary-200 transition-colors">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Payment Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-50 rounded-xl p-6 sm:p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Koszty i rozliczenia
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Wadium (zwrotne):</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>10-20% szacunkowej wartości pojazdu</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>Zwracane w 1-3 dni jeśli przegrasz</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>Wliczane w cenę jeśli wygrasz</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Transport do Polski:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>Laweta: 1.300-2.500 zł</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>Ubezpieczenie transportu: 200-400 zł</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>Dokumenty i obsługa: 300-800 zł</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Rejestracja w PL:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>Przegląd techniczny: 200-300 zł</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>Opłaty CEPiK: 500-700 zł</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>Pomoc w rejestracji: opcjonalnie</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
