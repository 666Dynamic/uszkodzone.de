'use client'

import Link from 'next/link'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-gray-50 -z-10" />
      
      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <FiCheckCircle className="w-4 h-4" />
              <span>Licencjonowany dostęp do niemieckich giełd ubezpieczeniowych</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Kup powypadkowe auto{' '}
              <span className="text-primary-600">z niemieckiej ubezpieczalni</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Dajemy Ci dostęp do zamkniętych niemieckich giełd ubezpieczeniowych. 
              Licytujesz auta, które w Niemczech są nieopłacalne do naprawy (130%-Regelung), 
              ale w Polsce można je tanio przywrócić do idealnego stanu.
            </p>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {[
                'Dostęp do 8.000+ aut dziennie ze wszystkich platform',
                'Licytacja kopertowa - gwarantowana anonimowość',
                'Transport do Polski (€300-€1000) + dokumenty',
                'Wsparcie prawne i rejestracja w Polsce',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/aukcje" className="btn-primary inline-flex items-center justify-center gap-2">
                Zobacz dostępne aukcje
                <FiArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/jak-to-dziala" className="btn-secondary inline-flex items-center justify-center gap-2">
                Jak to działa?
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder - replace with actual car auction dashboard image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl font-bold mb-2">4500+</div>
                  <div className="text-xl">Aut dziennie</div>
                  <div className="mt-8 text-sm opacity-90">
                    Dashboard preview<br />
                    (Add actual car.casion screenshot)
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl"
            >
              <div className="text-sm text-gray-600">Średni czas realizacji</div>
              <div className="text-2xl font-bold text-primary-600">2-3 tyg.</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl"
            >
              <div className="text-sm text-gray-600">Transport do PL</div>
              <div className="text-lg font-bold text-primary-600">od 1.300 zł</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
