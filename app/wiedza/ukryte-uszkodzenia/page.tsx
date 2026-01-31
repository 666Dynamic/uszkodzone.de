'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { FiArrowLeft, FiAlertCircle } from 'react-icons/fi'

export default function ArticleHiddenDamages() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container-custom py-12 max-w-4xl">
        <Link 
          href="/wiedza" 
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8"
        >
          <FiArrowLeft /> Powrót do bazy wiedzy
        </Link>

        <article className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ukryte uszkodzenia: Jak ich unikać?
          </h1>
          
          <div className="text-sm text-gray-500 mb-8">
            Ostatnia aktualizacja: Styczeń 2026 • Czas czytania: 8 min
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
              <h2 className="text-xl font-bold text-yellow-900 mb-3 flex items-center gap-2">
                <FiAlertCircle /> Statystyka: 15-20% pojazdów
              </h2>
              <p className="text-yellow-800 text-lg">
                Według naszego doświadczenia <strong>około 15-20% pojazdów</strong> z Restwertbörse ma 
                ukryte uszkodzenia niewidoczne w raporcie ubezpieczalni. To NIE są rzadkie przypadki - 
                to statystyczna norma którą musisz uwzględnić.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Co to są ukryte uszkodzenia?</h2>
            
            <p className="mb-6">
              Raport biegłego ubezpieczalni zawiera <strong>tylko widoczne szkody zewnętrzne</strong> 
              które można zobaczyć bez demontażu. Biegły nie rozkręca silnika, nie sprawdza skrzyni 
              biegów, nie testuje całej elektroniki.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Typowe ukryte uszkodzenia</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="border border-red-200 p-5 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-red-700">🔧 Uszkodzenia mechaniczne</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Silnik: Pęknięta głowica, uszkodzone tłoki</li>
                  <li>• Skrzynia: Zużyte łożyska, problemy z biegami</li>
                  <li>• Zawieszenie: Pogięte wahacze</li>
                  <li>• Układ wydechowy: Uszkodzony katalizator</li>
                </ul>
              </div>

              <div className="border border-orange-200 p-5 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-orange-700">⚡ Problemy elektryczne</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Uszkodzone ECU, BSI, BCM</li>
                  <li>• Przerwane wiązki, zwarcia</li>
                  <li>• Nieczynne ABS, ESP, airbag</li>
                  <li>• Zablokowane systemy multimedia</li>
                </ul>
              </div>

              <div className="border border-blue-200 p-5 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-blue-700">🏗️ Uszkodzenia konstrukcyjne</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Deformacje niewidoczne gołym okiem</li>
                  <li>• Pęknięcia pod wykładziną</li>
                  <li>• Mikropęknięcia w miejscach spawów</li>
                  <li>• Trwała deformacja nadwozia</li>
                </ul>
              </div>

              <div className="border border-purple-200 p-5 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-purple-700">💧 Uszkodzenia wodą</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Korozja pod wykładziną</li>
                  <li>• Utajone zwarcia elektroniki</li>
                  <li>• Pleśń w wentylacji</li>
                  <li>• Chroniczne problemy z wilgocią</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Jak się zabezpieczyć?</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-primary-50 p-5 rounded-lg">
                <h3 className="font-bold mb-2">1️⃣ Analizuj WSZYSTKIE zdjęcia</h3>
                <p className="text-sm text-gray-700">
                  Platformy dają 50-150 zdjęć. Przejrzyj każde! Szczególnie: podwozie, komora silnika, bagażnik.
                </p>
              </div>

              <div className="bg-primary-50 p-5 rounded-lg">
                <h3 className="font-bold mb-2">2️⃣ Sprawdź czy auto ODPALA</h3>
                <p className="text-sm text-gray-700">
                  Jeśli Motor läuft nicht (silnik nie odpala) - czerwona flaga. Może być drobny problem lub poważny.
                </p>
              </div>

              <div className="bg-primary-50 p-5 rounded-lg">
                <h3 className="font-bold mb-2">3️⃣ Planuj bufor 20-30% na ukryte koszty</h3>
                <p className="text-sm text-gray-700">
                  Cena aukcyjna + Transport + Naprawa + <strong>30% bufor</strong> = realna kalkulacja.
                </p>
              </div>

              <div className="bg-primary-50 p-5 rounded-lg">
                <h3 className="font-bold mb-2">4️⃣ Diagnostyka PRZED naprawą</h3>
                <p className="text-sm text-gray-700">
                  Po odbiorze: pełna diagnostyka komputerowa + oględziny mechanika (500-800 zł).
                </p>
              </div>
            </div>

            <div className="bg-primary-600 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Nie masz pewności czy auto jest OK?</h3>
              <p className="mb-4">
                Pomożemy przeanalizować raport i zdjęcia, wskazać potencjalne red flags.
              </p>
              <Link 
                href="/kontakt" 
                className="inline-block bg-white text-primary-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Zapytaj o ocenę pojazdu
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
