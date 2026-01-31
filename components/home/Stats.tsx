'use client'

import { motion } from 'framer-motion'
import { FiTruck, FiClock, FiShield, FiPackage } from 'react-icons/fi'

const stats = [
  {
    icon: FiPackage,
    value: '12.000+',
    label: 'Aut dostępnych dziennie',
    description: 'Na wszystkich niemieckich platformach',
  },
  {
    icon: FiClock,
    value: '2-3 tyg.',
    label: 'Średni czas realizacji',
    description: 'Od licytacji do odbioru w Polsce',
  },
  {
    icon: FiTruck,
    value: 'od 1.300 zł',
    label: 'Transport do Polski',
    description: 'Laweta + ubezpieczenie + dokumenty',
  },
  {
    icon: FiShield,
    value: '30 dni',
    label: 'Ważność oferty',
    description: 'Oferta wiążąca - musisz kupić',
  },
]

export default function Stats() {
  return (
    <section className="section-padding bg-white border-b">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {stat.description}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
