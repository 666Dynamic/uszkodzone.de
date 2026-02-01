'use client'

import { motion } from 'framer-motion'
import { FiCheck, FiX } from 'react-icons/fi'

const comparisons = [
  {
    feature: 'Dostępność części',
    germany: 'Natychmiastowa (24-48h)',
    switzerland: 'Trudna, długi czas',
    usa: 'Bardzo trudna (tygodnie)',
  },
  {
    feature: 'Koszt części',
    germany: 'Średnie',
    switzerland: 'Bardzo wysokie',
    usa: 'Średnie + cło + shipping',
  },
  {
    feature: 'Transport auta',
    germany: '~600-1000 km (laweta)',
    switzerland: '~1200-1500 km',
    usa: '~7000+ km (kontener)',
  },
  {
    feature: 'Homologacja EU',
    germany: '✅ Pełna zgodność',
    switzerland: '⚠️ Częściowa',
    usa: '❌ Wymaga przeróbek',
  },
  {
    feature: 'Rejestracja',
    germany: 'Prosta',
    switzerland: 'Złożona (VAT)',
    usa: 'Bardzo złożona (cło + VAT + EPA/DOT)',
  },
  {
    feature: 'Wybór aut',
    germany: 'Ogromny rynek',
    switzerland: 'Średni',
    usa: 'Ogromny (inny segment)',
  },
]

export default function WhyGermany() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Dlaczego <span className="text-primary-600">Niemcy?</span>
          </h2>
          <p className="text-lg text-gray-600">
            Porównanie importu samochodów powypadkowych z różnych krajów
          </p>
        </motion.div>

        {/* Comparison Table - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden lg:block overflow-hidden rounded-xl shadow-lg border border-gray-200"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Kryterium
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600 bg-primary-50">
                  🇩🇪 Niemcy
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                  🇨🇭 Szwajcaria
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                  🇺🇸 USA
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {comparisons.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-sm text-center bg-primary-50/50">
                    <div className="flex items-center justify-center gap-2">
                      <FiCheck className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      <span className="text-gray-900 font-medium">{row.germany}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-gray-600">
                    {row.switzerland}
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-gray-600">
                    {row.usa}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Comparison Cards - Mobile */}
        <div className="lg:hidden space-y-6">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="card p-5"
            >
              <h3 className="font-bold text-gray-900 mb-4">{item.feature}</h3>
              <div className="space-y-3">
                <div className="bg-primary-50 rounded-lg p-3 border-l-4 border-primary-600">
                  <div className="text-xs text-gray-600 mb-1">🇩🇪 Niemcy</div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-900">{item.germany}</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-600 mb-1">🇨🇭 Szwajcaria</div>
                  <div className="text-sm text-gray-700">{item.switzerland}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-600 mb-1">🇺🇸 USA</div>
                  <div className="text-sm text-gray-700">{item.usa}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Podsumowanie</h3>
          <p className="text-primary-100 mb-6 text-lg">
            Niemcy to najbardziej opłacalny wybór dla polskich kupujących ze względu na:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Bliską odległość i niskie koszty transportu',
              'Pełną zgodność z normami EU',
              'Łatwą dostępność części zamiennych',
              'Prostą procedurę rejestracji',
              'Duży wybór - ponad 4500 aut dziennie',
              'Niższe koszty naprawy w Polsce',
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <FiCheck className="w-6 h-6 flex-shrink-0 mt-0.5 text-white" />
                <span className="text-sm leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
