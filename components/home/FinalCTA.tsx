'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

export default function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <FiCheckCircle className="w-4 h-4" />
            <span>Ponad 4500 aut dziennie czeka na Ciebie</span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Gotowy na zakup powypadkowego auta z Niemiec?
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-100 mb-10 leading-relaxed">
            Dołącz do setek zadowolonych klientów, którzy już kupili swoje wymarzone 
            auto w świetnej cenie dzięki dostępowi do zamkniętych giełd ubezpieczeniowych.
          </p>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'Bezpieczeństwo',
                description: 'Zwrotne wadium i pełna dokumentacja',
              },
              {
                title: 'Wygoda',
                description: 'Transport bezpośrednio pod dom',
              },
              {
                title: 'Oszczędności',
                description: 'Ceny znacznie niższe niż rynek polski',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-primary-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/aukcje"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 active:scale-95 inline-flex items-center gap-2 shadow-xl"
            >
              Zobacz aukcje teraz
              <FiArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/jak-to-dziala"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-200 active:scale-95 inline-flex items-center gap-2"
            >
              Dowiedz się więcej
            </Link>
          </motion.div>

          {/* Trust Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-sm text-primary-100">
              <strong className="text-white">Miami Autocenter GmbH</strong> - 
              Twój zaufany partner z oficjalnym dostępem do niemieckich giełd ubezpieczeniowych
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
