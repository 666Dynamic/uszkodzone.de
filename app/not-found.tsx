'use client'

import Link from 'next/link'
import { FiHome, FiArrowRight } from 'react-icons/fi'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Strona nie znaleziona</h2>
          <p className="text-gray-600 text-lg mb-8">
            Przepraszamy, ta strona nie istnieje. Może wróć na stronę główną?
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            <FiHome className="w-5 h-5" />
            Strona główna
          </Link>
          <Link
            href="/aukcje"
            className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Przeglądaj aukcje
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="mt-16 pt-16 border-t">
          <p className="text-gray-500 mb-6">Popularne linki:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { href: '/jak-to-dziala', label: 'Jak to działa' },
              { href: '/kalkulator', label: 'Kalkulator' },
              { href: '/o-nas', label: 'O nas' },
              { href: '/kontakt', label: 'Kontakt' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
