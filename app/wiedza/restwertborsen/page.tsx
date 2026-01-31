'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi'

export const metadata = {
  title: 'Restwertbörsen - Niemieckie giełdy ubezpieczeniowe | Uszkodzone.de',
  description: 'Czym są Restwertbörsen? Pełne wyjaśnienie niemieckich giełd ubezpieczeniowych, zasady 130%-Regelung i jak trafiają tam pojazdy.',
  keywords: 'Restwertbörsen, niemieckie giełdy ubezpieczeniowe, 130%-Regelung, aukcje powypadkowych aut, zakup aut z Niemiec',
}

export default function RestwertborsenPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"
        >
          <FiArrowLeft className="w-4 h-4" />
          Powrót do strony głównej
        </Link>

        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 lg:p-12 shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Co to są <span className="text-primary-600">Restwertbörsen?</span>
            </h1>
            <p className="text-xl text-gray-600">
              Pełne wyjaśnienie niemieckich giełd ubezpieczeniowych i jak trafiają tam pojazdy
            </p>
          </motion.div>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Definicja */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Definicja</h2>
              <p className="text-gray-600 leading-relaxed">
                <strong>Restwertbörsen</strong> to zamknięte, elektroniczne giełdy aukcyjne, na które 
                niemieckie ubezpieczalnie trafiają pojazdy sklasyfikowane jako tzw. <strong>Totalschaden</strong> 
                (szkoda całkowita). Te platformy dostępne są tylko dla licencjonowanych dealerów, firm 
                handlujących automobilami i autoryzowalnych pośredników handlowych — nigdy dla prywatnych osób.
              </p>
            </motion.section>

            {/* Główne giełdy */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Główne Restwertbörsen w Niemczech</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Car.casion</h3>
                  <p className="text-sm text-gray-600">
                    Największa platforma z dostoępem dla ponad 4.500 aut dziennie. Obsługiwana przez największe 
                    niemieckie ubezpieczalnie (AXA, Allianz, HUK-COBURG).
                  </p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">BVG/Copart</h3>
                  <p className="text-sm text-gray-600">
                    Druga największa platforma specjalizująca się w aukcjach online dla powypadkowych 
                    i zniszczonych pojazdów.
                  </p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Mannheim</h3>
                  <p className="text-sm text-gray-600">
                    Największa tradycyjna giełda samochodów używanych i poszkodzionych w Niemczech. 
                    Licytacje odbywają się też online.
                  </p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Andere Börsen</h3>
                  <p className="text-sm text-gray-600">
                    Numer jeden, Mobile.de auctions oraz inne platformy regionalne z dostępem 
                    do tysięcy pojazdy.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Jak pojazdy trafiają */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Jak pojazdy trafiają na Restwertbörsen?</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-600 text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Zasada 130%-Regelung</h3>
                    <p className="text-gray-600">
                      W Niemczech obowiązuje specjalna zasada prawna. Gdy <strong>(koszt naprawy + wartość rezydualna pojazdu) 
                      przekracza 130% wartości pojazdu przed szkodą</strong>, ubezpieczyciel <strong>MUSI</strong> sklasyfikować 
                      pojazd jako szkodę całkowitą. <br /><br />
                      <strong>Przykład:</strong> BMW warte 50.000 zł z szacowaną naprawą za 45.000 zł to w Niemczech 
                      &quot;ekonomiczna szkoda całkowita&quot;, ponieważ 45.000 + wartość pozostałości (np. 3.000) = 48.000 zł, 
                      co przekracza próg 130% (50.000 × 1,3 = 65.000 zł).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-600 text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Odszkodowanie dla właściciela</h3>
                    <p className="text-gray-600">
                      Ubezpieczalnia wypłaca odszkodowanie właścicielowi pojazdu = (szacunkowa wartość pojazdu - wartość rezydualna). 
                      Właściciel otrzymuje pieniądze i oddaje pojazd ubezpieczalni.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-600 text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Wystawienie na aukcję</h3>
                    <p className="text-gray-600">
                      Ubezpieczalnia przejmuje pojazd na własność i wystawia go na zamkniętą giełdę (Restwertbörsen), 
                      gdzie licytują tylko zweryfikowani dealerzy i firmy handlujące pojazdami z odpowiednią licencją.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-600 text-white font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Opłacalna naprawa w Polsce</h3>
                    <p className="text-gray-600">
                      Co w Niemczech jest &quot;ekonomiczną szkodą całkowitą&quot; (przez wysokie koszty pracy po 50-100€/h 
                      i części zamiennych), w Polsce może być opłacalne do naprawy dzięki niższym kosztom robocizny (20-40€/h) 
                      i dostępności tańszych części.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Jak działa licytacja */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Jak działa licytacja?</h2>
              
              <div className="bg-yellow-50 p-6 rounded-lg mb-6 border-l-4 border-yellow-400">
                <h3 className="font-bold text-gray-900 mb-3">Licytacja kopertowa (&quot;sealed bid&quot;)</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex gap-2">
                    <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Składasz jedną, maksymalną ofertę w &quot;ciemno&quot;</span>
                  </li>
                  <li className="flex gap-2">
                    <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Nie widzisz ofert innych uczestników</span>
                  </li>
                  <li className="flex gap-2">
                    <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Ubezpieczalnia akceptuje NAJWYŻSZĄ ofertę</span>
                  </li>
                  <li className="flex gap-2">
                    <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Twoja oferta jest WIĄŻĄCA przez 30 dni</span>
                  </li>
                  <li className="flex gap-2">
                    <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Jeśli wygrasz — MUSISZ kupić (brak prawa wycofania)</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-600 leading-relaxed">
                <strong>WAŻNE:</strong> Licytacja na Restwertbörsen to poważne zobowiązanie. Różni się fundamentalnie 
                od e-commerce, gdzie można anulować zamówienie. Tutaj każda oferta = prawnie wiążąca umowa kupna-sprzedaży. 
                Dlatego my dokładnie analizujemy każdy pojazd PRZED złożeniem oferty.
              </p>
            </motion.section>

            {/* Realne marże */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 p-8 rounded-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Realne marże dealera</h2>
              <p className="text-gray-600 mb-6">
                Po uwzględnieniu WSZYSTKICH kosztów (zakup, transport, naprawy, rejestracja, ubezpieczenie), 
                realistyczna marża dealera wynosi <strong>15-25%</strong> wartości końcowej pojazdu.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border-l-4 border-green-600">
                  <div className="font-bold text-gray-900 mb-2">Przykład: BMW 320d (rzeczywisty przypadek)</div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 mb-1"><strong>Koszt nabycia:</strong></p>
                      <p className="text-gray-900">€8.000</p>
                      <p className="text-xs text-gray-500 mt-1">Licytacja na car.casion</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1"><strong>Transport PL:</strong></p>
                      <p className="text-gray-900">€1.200</p>
                      <p className="text-xs text-gray-500 mt-1">Laweta + ubezpieczenie</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1"><strong>Naprawy:</strong></p>
                      <p className="text-gray-900">€6.000</p>
                      <p className="text-xs text-gray-500 mt-1">Części + robocizna (30-40€/h)</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1"><strong>Rejestracja/ubezp.:</strong></p>
                      <p className="text-gray-900">€800</p>
                      <p className="text-xs text-gray-500 mt-1">Przefakturowanie</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-300 mt-4 pt-4">
                    <p className="text-gray-600 mb-1"><strong>RAZEM KOSZT:</strong></p>
                    <p className="text-2xl font-bold text-gray-900">€16.000</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded mt-3">
                    <p className="text-gray-600 mb-1"><strong>Wartość na polskim rynku:</strong></p>
                    <p className="text-2xl font-bold text-green-700">€18.500 - €20.000</p>
                    <p className="text-xs text-gray-600 mt-1">Marża: 12-25% (realizm ekonomiczny)</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* CTA */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-primary-600 text-white p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Gotów kupić powypadkowe auto?</h2>
              <p className="mb-6 text-primary-100">
                My mamy dostęp do 4.500+ aut dziennie. Analizujemy każdy pojazd, licytujemy w Twoim imieniu 
                i zajmujemy się całym procesem.
              </p>
              <Link
                href="/aukcje"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Przeglądaj dostępne pojazdy
              </Link>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  )
}
