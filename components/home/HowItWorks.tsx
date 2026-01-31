'use client'

import { motion } from 'framer-motion'
import { FiSearch, FiFileText, FiCheckCircle, FiTruck, FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

const steps = [
  {
    icon: FiSearch,
    number: '01',
    title: 'Wybierasz pojazd',
    description: 'Przeglądasz naszą bazę ponad 4.500 aut dziennie. Otrzymujesz dostęp do szczegółowych zdjęć, raportów szkód i kalkulacji napraw.',
  },
  {
    icon: FiFileText,
    number: '02',
    title: 'Składasz ofertę',
    description: 'Wpłacasz wadium 2.500 zł (zwrotne przy przegranej). Podajesz maksymalną kwotę, którą jesteś gotów zapłacić. Twoja oferta trafia bezpośrednio do ubezpieczalni.',
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
    description: 'Po wygranej organizujemy transport do Polski lub możesz odebrać osobiście. Zapłata przy odbiorze (gotówka/przelew). Otrzymujesz pojazd z pełną dokumentacją.',
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
            Prosty proces w 4 krokach
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

                <div className="relative bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-primary-200 transition-colors h-full min-h-[280px] flex flex-col">
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/jak-to-dziala"
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>Dowiedz się więcej</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
