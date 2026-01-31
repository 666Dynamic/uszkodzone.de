'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiGlobe, FiLock } from 'react-icons/fi'

export default function Restwertborsen() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Co to są <span className="text-primary-600">Restwertbörsen?</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Niemieckie giełdy ubezpieczeniowe, na których ubezpieczalnie sprzedają pojazdy 
              sklasyfikowane jako szkody całkowite (nierentowne do naprawy w Niemczech). 
              W Polsce te same naprawy są ekonomicznie opłacalne dzięki niższym kosztom.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6"
            >
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                <FiLock className="w-5 h-5 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Zamknięte platformy</h3>
              <p className="text-sm text-gray-600">
                Dostęp mają tylko licencjonowani dealerzy. My mamy dostęp i licytujemy w Twoim imieniu.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6"
            >
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                <FiGlobe className="w-5 h-5 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">130%-Regelung</h3>
              <p className="text-sm text-gray-600">
                Niemcy: gdy koszt naprawy przekracza 130% wartości pojazdu, to szkoda całkowita.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/wiedza/restwertborsen"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              Poznaj pełne wyjaśnienie
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
