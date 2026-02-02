'use client'

import { motion } from 'framer-motion'
import { FiTruck, FiClock, FiShield, FiPackage } from 'react-icons/fi'

const stats = [
  {
    icon: FiPackage,
    value: '4.500+',
    label: 'Aut dziennie',
    description: 'Z niemieckich ubezpieczalni',
  },
  {
    icon: FiClock,
    value: 'do 30 dni',
    label: 'Czas na akceptację',
    description: 'Ubezpieczalnia wybiera najwyższą ofertę',
  },
  {
    icon: FiTruck,
    value: 'Transport',
    label: 'do Polski',
    description: 'Odbiór samodzielny lub pomoc w transporcie',
  },
]

export default function Stats() {
  return (
    <section className="section-padding bg-white border-b">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center px-4"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-4">
                  <Icon className="w-10 h-10 text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 max-w-xs mx-auto">
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
