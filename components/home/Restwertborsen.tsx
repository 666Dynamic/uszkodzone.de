'use client'

import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

export default function Restwertborsen() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Czym są<br />
            <span className="text-primary-600">Restwertbörsen?</span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            To zamknięte niemieckie giełdy, gdzie ubezpieczalnie sprzedają pojazdy uznane za szkodę całkowitą. 
            Dzięki zasadzie 130%-Regelung w Niemczech auta są nieopłacalne do naprawy, ale w Polsce można je 
            tanio przywrócić. Pracujemy w Twoim imieniu jako licencjonowany dealer.
          </p>

          <Link href="/wiedza/restwertborsen">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Dowiedz się więcej
              <FiArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
