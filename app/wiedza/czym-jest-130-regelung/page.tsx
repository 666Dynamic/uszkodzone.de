import type { Metadata } from 'next'
import Link from 'next/link'
import { FiArrowLeft, FiAlertCircle, FiCheckCircle } from 'react-icons/fi'

export const metadata: Metadata = {
  title: '130%-Regelung - Niemiecka zasada szkody całkowitej | UszkodzoneZNiemiec.pl',
  description: 'Co to jest 130%-Regelung i dlaczego determinuje czy auto trafia na aukcję Restwertbörse? Kompleksowy przewodnik po niemieckim prawie ubezpieczeniowym.',
}

export default function Article130Regelung() {
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
            130%-Regelung: Dlaczego to jest najważniejsza zasada?
          </h1>
          
          <div className="text-sm text-gray-500 mb-8">
            Ostatnia aktualizacja: Styczeń 2026 • Czas czytania: 6 min
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 font-medium mb-8">
              130%-Regelung to niemiecka zasada ubezpieczeniowa, która automatycznie decyduje 
              czy uszkodzony pojazd zostaje naprawiony czy uznany za szkodę całkowitą i 
              trafia na aukcję Restwertbörse.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Jak działa 130%-Regelung?</h2>
            
            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 my-6">
              <div className="font-bold text-lg mb-3">Formuła matematyczna:</div>
              <div className="font-mono text-lg">
                <strong>(Koszt naprawy + Wartość resztkowa)</strong> {'>'} <strong>130% × Wartość rynkowa</strong>
              </div>
              <div className="mt-4 text-sm text-gray-700">
                Jeśli ta nierówność jest spełniona = <strong>Wirtschaftlicher Totalschaden</strong> (ekonomiczna szkoda całkowita)
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Przykład praktyczny:</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-bold mb-3">BMW X5 (2020), wartość rynkowa: 40.000 EUR</p>
              
              <ul className="space-y-2 mb-4">
                <li>🔧 Koszt naprawy wg biegłego: 35.000 EUR</li>
                <li>🚗 Wartość resztkowa (uszkodzone): 12.000 EUR</li>
                <li>📊 130% wartości: 52.000 EUR</li>
              </ul>

              <div className="border-t pt-4">
                <p className="font-bold">Obliczenie:</p>
                <p className="font-mono">(35.000 + 12.000) = 47.000 EUR</p>
                <p className="font-mono">47.000 {'<'} 52.000 EUR</p>
                <p className="mt-3 text-green-700 font-bold flex items-center gap-2">
                  <FiCheckCircle /> Nie spełnia 130% - ubezpieczyciel naprawi auto
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-bold mb-3">Mercedes C-Klasse (2019), wartość rynkowa: 30.000 EUR</p>
              
              <ul className="space-y-2 mb-4">
                <li>🔧 Koszt naprawy wg biegłego: 28.000 EUR</li>
                <li>🚗 Wartość resztkowa (uszkodzone): 14.000 EUR</li>
                <li>📊 130% wartości: 39.000 EUR</li>
              </ul>

              <div className="border-t pt-4">
                <p className="font-bold">Obliczenie:</p>
                <p className="font-mono">(28.000 + 14.000) = 42.000 EUR</p>
                <p className="font-mono">42.000 {'>'} 39.000 EUR</p>
                <p className="mt-3 text-primary-600 font-bold flex items-center gap-2">
                  <FiAlertCircle /> Spełnia 130% - Totalschaden! → Restwertbörse
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Dlaczego 130% a nie 100%?</h2>
            
            <p className="mb-4">
              Niemieckie prawo daje <strong>30% marginesu</strong> na sytuacje gdy naprawa jest droższa 
              niż wartość auta, ale nadal ekonomicznie uzasadniona:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold">•</span>
                <span><strong>Wartość emocjonalna</strong> - właściciel może chcieć zachować swoje auto</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold">•</span>
                <span><strong>Brak alternatywy</strong> - trudno znaleźć identyczny model</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold">•</span>
                <span><strong>Wartość użytkowa</strong> - naprawione auto nadal sprawne przez lata</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Co się dzieje po przekroczeniu 130%?</h2>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-bold">1. Ubezpieczyciel wypłaca właścicielowi:</p>
                <p className="text-gray-700">Wartość rynkowa - Wartość resztkowa = Odszkodowanie</p>
                <p className="text-sm text-gray-600">Przykład: 30.000 - 14.000 = 16.000 EUR</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold">2. Ubezpieczyciel przejmuje wrak:</p>
                <p className="text-gray-700">Auto staje się własnością ubezpieczalni</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-bold">3. Pojazd trafia na Restwertbörse:</p>
                <p className="text-gray-700">Licytacja kopertowa, minimalna cena = szacowana wartość resztkowa</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Dlaczego to ważne dla Ciebie?</h2>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <FiAlertCircle className="text-yellow-600" />
                Kluczowe zrozumienie:
              </h3>
              <ul className="space-y-2">
                <li>✓ Auto na Restwertbörse <strong>przekroczyło 130%</strong> = ubezpieczyciel uznał że naprawa nieopłacalna</li>
                <li>✓ To <strong>NIE znaczy</strong> że nie da się go naprawić</li>
                <li>✓ To znaczy że <strong>w Niemczech</strong> (robocizna 50-100 EUR/h) naprawa nieopłacalna</li>
                <li>✓ Ale <strong>w Polsce</strong> (robocizna 20-40 EUR/h) może być bardzo opłacalne!</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Przykład praktyczny - Twoja korzyść:</h2>

            <div className="bg-green-50 p-6 rounded-lg">
              <p className="font-bold mb-3">Audi A6 (2021) na Restwertbörse:</p>
              
              <div className="space-y-2 mb-4">
                <p>📍 Wartość rynkowa (Niemcy): 35.000 EUR</p>
                <p>🔧 Koszt naprawy (Niemcy): 32.000 EUR</p>
                <p>🚗 Wartość resztkowa: 14.000 EUR</p>
                <p className="font-bold text-primary-600">(32.000 + 14.000) = 46.000 {'>'} 45.500 → Totalschaden!</p>
              </div>

              <div className="border-t pt-4">
                <p className="font-bold text-green-700 mb-2">Kupujesz na aukcji za: 15.500 EUR</p>
                <p>🔧 Naprawa w Polsce: 14.000 EUR (2,5x taniej robocizna!)</p>
                <p>🚗 Wartość po naprawie w Polsce: 32.000 EUR</p>
                <p className="font-bold text-lg text-green-700 mt-3">
                  Twój zysk: ~2.500 EUR 🎉
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Podsumowanie</h2>

            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold text-xl">✓</span>
                <span><strong>130%-Regelung</strong> to zasada która decyduje czy auto trafi na Restwertbörse</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold text-xl">✓</span>
                <span>Pozwala Ci kupić auta które <strong>w Niemczech</strong> są nieopłacalne do naprawy</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold text-xl">✓</span>
                <span>Ale <strong>w Polsce</strong> możesz naprawić 2-3x taniej</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold text-xl">✓</span>
                <span>To fundamentalna zasada całego biznesu import/naprawa aut z Niemiec</span>
              </li>
            </ul>

            <div className="bg-primary-600 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Gotowy do znalezienia swojej okazji?</h3>
              <p className="mb-4">
                Pomożemy Ci znaleźć i kupić auto z niemieckich Restwertbörsen.
              </p>
              <Link 
                href="/kontakt" 
                className="inline-block bg-white text-primary-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Skontaktuj się z nami
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
