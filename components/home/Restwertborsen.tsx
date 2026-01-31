'use client'

import { motion } from 'framer-motion'
import { FiInfo, FiGlobe, FiLock } from 'react-icons/fi'

export default function Restwertborsen() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FiInfo className="w-4 h-4" />
            <span>Czym są Restwertbörsen?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Niemieckie giełdy<br />
            <span className="text-primary-600">pozostałości ubezpieczeniowych</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Restwertbörsen to zamknięte platformy aukcyjne, na które niemieckie ubezpieczalnie 
            trafiają pojazdy uznane za szkodę całkowitą (Totalschaden). Dzięki niemieckiej zasadzie 
            <strong> 130%-Regelung</strong>, gdy koszt naprawy + wartość rezydualna przekracza 130% 
            wartości pojazdu, jest on automatycznie klasyfikowany jako nieopłacalny do naprawy w Niemczech. 
            Dla Polski oznacza to doskonałą okazję – niższe koszty pracy i części sprawiają, że te same 
            naprawy są u nas ekonomicznie opłacalne.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card p-6"
          >
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <FiLock className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Zamknięte platformy
            </h3>
            <p className="text-gray-600">
              Dostęp mają tylko zweryfikowani dealerzy i firmy z odpowiednimi licencjami. 
              Prywatne osoby nie mogą kupować bezpośrednio.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card p-6"
          >
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <FiGlobe className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Główne giełdy
            </h3>
            <p className="text-gray-600">
              Mamy licencjonowany dostęp do największych platform w Niemczech, na których 
              ubezpieczalnie takie jak AXA, Allianz, HUK-COBURG sprzedają pojazdy po szkodach.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="card p-6"
          >
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <FiInfo className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Anonimowa licytacja
            </h3>
            <p className="text-gray-600">
              Składasz swoją maksymalną ofertę „w ciemno”, nie widząc ofert innych. 
              Ubezpieczalnia akceptuje najwyższą ofertę. Twoja oferta jest <strong>wiążąca przez 30 dni</strong>.
              Jeśli wygrasz i ubezpieczalnia zaakceptuje - <strong>musisz kupić</strong> (brak prawa wycofania).
            </p>
          </motion.div>
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-6 sm:p-8 border-l-4 border-primary-600"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Jak pojazdy trafiają na Restwertbörsen?
          </h3>
          <div className="space-y-3 text-gray-600">
            <p>
              <strong className="text-gray-900">1. Zasada 130%-Regelung:</strong> W Niemczech obowiązuje 
              specjalna zasada prawna. Gdy (koszt naprawy + wartość rezydualna pojazdu) przekracza 
              130% wartości przed szkodą, ubezpieczyciel MUSI sklasyfikować pojazd jako szkodę całkowitą. 
              Dla przykładu: BMW warte 50.000 zł z naprawą za 45.000 zł to w Niemczech "ekonomiczna 
              szkoda całkowita", gdyż przekracza próg 130%.
            </p>
            <p>
              <strong className="text-gray-900">2. Wykup przez ubezpieczyciela:</strong> 
              Ubezpieczalnia wypłaca odszkodowanie właścicielowi (wartość pojazdu minus wartość rezydualna) 
              i przejmuje pojazd na własność. Właściciel oddaje auto i dostaje pieniądze.
            </p>
            <p>
              <strong className="text-gray-900">3. Wystawienie na aukcję:</strong> Pojazd 
              trafia na zamkniętą giełdę, gdzie licytują tylko zweryfikowani dealerzy i firmy 
              z licencją. My jako licencjonowana firma mamy dostęp do tych platform i działamy 
              w Twoim imieniu.
            </p>
            <p>
              <strong className="text-gray-900">4. Opłacalna naprawa w Polsce:</strong> To 
              co w Niemczech jest „ekonomiczną szkodą całkowitą" (przez wysokie koszty pracy po 
              50-100€/h), w Polsce może być opłacalne do naprawy dzięki niższym kosztom robocizny 
              (20-40€/h) i części zamiennych.
            </p>
            <p>
              <strong className="text-gray-900">5. Realne marże:</strong> Po uwzględnieniu wszystkich 
              kosztów (zakup, transport 1.300-4.000 zł, naprawy, rejestracja), realistyczna marża dla 
              dealera wynosi 15-25% wartości końcowej. To oznacza, że auto warte na polskim rynku 
              50.000 zł możesz nabyć za ok. 35.000-40.000 zł łącznie z wszystkimi kosztami.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
