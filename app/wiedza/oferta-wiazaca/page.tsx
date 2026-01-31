import type { Metadata } from 'next'
import Link from 'next/link'
import { FiArrowLeft, FiAlertTriangle, FiCheckCircle, FiX } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Oferta wiążąca - Co to znaczy i jakie są konsekwencje? | Uszkodzone.de',
  description: 'Oferta na niemieckich aukcjach Restwertbörse jest wiążąca przez 30 dni. Dowiedz się co to oznacza i dlaczego NIE możesz się wycofać bez konsekwencji.',
}

export default function ArticleBindingOffer() {
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
            Oferta wiążąca: Co to znaczy i dlaczego to krytyczne?
          </h1>
          
          <div className="text-sm text-gray-500 mb-8">
            Ostatnia aktualizacja: Styczeń 2026 • Czas czytania: 5 min
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <h2 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
                <FiAlertTriangle /> NAJWAŻNIEJSZE: Przeczytaj to PRZED pierwszą licytacją!
              </h2>
              <p className="text-red-800 text-lg">
                Gdy składasz ofertę na niemieckich aukcjach Restwertbörse, <strong>nie możesz się po prostu wycofać</strong>. 
                Oferta jest <strong>prawnie wiążąca przez 30 dni</strong>. Jeśli wygrasz i ubezpieczalnia zaakceptuje - 
                <strong>MUSISZ kupić</strong> pojazd lub ponieść kary finansowe.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Co to znaczy "oferta wiążąca"?</h2>
            
            <p className="mb-6">
              W polskim e-commerce jesteśmy przyzwyczajeni że "dodaję do koszyka" nie zobowiązuje do niczego. 
              Możemy anulować zamówienie, zrezygnować, zwrócić towar (14 dni). 
              <strong>Na niemieckich Restwertbörsen działa to CAŁKOWICIE INACZEJ.</strong>
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <FiCheckCircle className="text-green-600" /> Zakupy online (Polska)
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Możesz anulować zamówienie</li>
                  <li>✓ 14 dni na zwrot towaru</li>
                  <li>✓ Reklamacja w 2 lata</li>
                  <li>✓ Brak konsekwencji za rezygnację</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <FiX className="text-red-600" /> Restwertbörse (Niemcy)
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>✗ NIE możesz anulować oferty</li>
                  <li>✗ BRAK prawa do zwrotu</li>
                  <li>✗ Sprzedaż "jak widzisz" (as-is)</li>
                  <li>✗ Kary za wycofanie się</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Jak działa proces? Krok po kroku</h2>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-blue-500 pl-6 py-3">
                <h3 className="font-bold mb-2">KROK 1: Składasz ofertę + wadium</h3>
                <p className="text-gray-700">
                  Wpłacasz wadium (10-20% wartości pojazdu) i podajesz maksymalną kwotę którą oferujesz. 
                  <strong className="text-red-600"> W tym momencie składasz prawnie wiążące oświadczenie woli.</strong>
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-3">
                <h3 className="font-bold mb-2">KROK 2: Okres ważności oferty (do 30 dni)</h3>
                <p className="text-gray-700">
                  Twoja oferta jest <strong>wiążąca przez 30 dni</strong>. Ubezpieczalnia analizuje wszystkie oferty 
                  i może zaakceptować twoją w dowolnym momencie (nawet ostatniego dnia).
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6 py-3">
                <h3 className="font-bold mb-2">KROK 3A: Ubezpieczalnia ODRZUCA (najczęściej)</h3>
                <p className="text-gray-700">
                  Jeśli twoja oferta jest za niska - dostaje odrzucenie. <strong>Wadium wraca w 100%</strong> w 1-3 dni.
                  Możesz licytować ponownie z wyższą kwotą.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6 py-3">
                <h3 className="font-bold mb-2">KROK 3B: Ubezpieczalnia AKCEPTUJE</h3>
                <p className="text-gray-700">
                  <strong className="text-red-600">UWAGA: Od tego momentu MUSISZ kupić!</strong> Masz 7-14 dni na 
                  zapłatę pozostałej kwoty. Wadium jest wliczane w cenę. Nie ma już drogi odwrotu.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Co się stanie jeśli się wycofasz?</h2>

            <div className="bg-red-50 border border-red-300 p-6 rounded-lg mb-6">
              <h3 className="font-bold text-lg mb-3 text-red-900">Scenariusz: Wygrałeś aukcję ale zmieniłeś zdanie</h3>
              
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold">1.</span>
                  <div>
                    <p className="font-bold">Tracisz wadium (10-20% wartości)</p>
                    <p className="text-sm text-gray-700">Przykład: Auto za 20.000 EUR → tracisz 2.000-4.000 EUR</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-red-600 font-bold">2.</span>
                  <div>
                    <p className="font-bold">Dodatkowe kary umowne</p>
                    <p className="text-sm text-gray-700">Ubezpieczalnia może żądać pokrycia różnicy jeśli sprzeda taniej</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-red-600 font-bold">3.</span>
                  <div>
                    <p className="font-bold">Ban na platformie</p>
                    <p className="text-sm text-gray-700">Możesz zostać zablokowany i nie licytować więcej</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-red-600 font-bold">4.</span>
                  <div>
                    <p className="font-bold">Możliwe postępowanie sądowe</p>
                    <p className="text-sm text-gray-700">W skrajnych przypadkach ubezpieczalnia może pozwać o odszkodowanie</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Przykład rzeczywisty</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-bold mb-3">Pan Kowalski licytuje BMW 320d (2020):</p>
              
              <ul className="space-y-2 mb-4">
                <li>📍 Wartość szacunkowa: 25.000 EUR</li>
                <li>💰 Wadium wpłacone: 3.000 EUR (12%)</li>
                <li>🎯 Maksymalna oferta: 18.000 EUR</li>
              </ul>

              <div className="border-t pt-4 mb-4">
                <p className="font-bold text-green-700 mb-2">✓ Dzień 8: Ubezpieczalnia akceptuje ofertę!</p>
                <p className="text-sm">Pan Kowalski dostaje email: "Gratulacje, Twoja oferta została zaakceptowana"</p>
              </div>

              <div className="border-t pt-4 bg-white p-4 rounded">
                <p className="font-bold text-red-700 mb-3">❌ Problem: Pan Kowalski zmienił zdanie</p>
                <p className="mb-2">Znalazł tańsze auto na innej platformie. Chce się wycofać.</p>
                
                <div className="bg-red-50 p-4 rounded mt-3">
                  <p className="font-bold mb-2">Konsekwencje:</p>
                  <ul className="space-y-1 text-sm">
                    <li>💸 Strata wadium: -3.000 EUR</li>
                    <li>📉 Auto sprzedane ponownie za 16.500 EUR (różnica 1.500 EUR)</li>
                    <li>⚖️ Dodatkowa kara: -1.500 EUR</li>
                    <li className="font-bold text-lg text-red-700 pt-2 border-t">RAZEM STRATA: 4.500 EUR</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Jak się zabezpieczyć?</h2>

            <div className="grid gap-4 mb-8">
              <div className="bg-primary-50 p-5 rounded-lg">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">1️⃣</span> Analizuj BARDZO dokładnie PRZED licytacją
                </h3>
                <p className="text-sm text-gray-700">
                  Wszystkie 50-150 zdjęć. Raport biegłego. Kalkulację naprawy. Nie śpiesz się!
                </p>
              </div>

              <div className="bg-primary-50 p-5 rounded-lg">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">2️⃣</span> Licytuj TYLKO auta które NA PEWNO chcesz
                </h3>
                <p className="text-sm text-gray-700">
                  Nie licytuj "na próbę" ani "żeby zobaczyć". Każda oferta = prawne zobowiązanie.
                </p>
              </div>

              <div className="bg-primary-50 p-5 rounded-lg">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">3️⃣</span> Planuj bufor 20-30% na nieprzewidziane koszty
                </h3>
                <p className="text-sm text-gray-700">
                  Ukryte uszkodzenia, dodatkowe części, transport - zawsze kosztuje więcej niż plan.
                </p>
              </div>

              <div className="bg-primary-50 p-5 rounded-lg">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">4️⃣</span> Upewnij się że masz płynność finansową
                </h3>
                <p className="text-sm text-gray-700">
                  Jeśli wygrasz, masz 7-14 dni na płatność. Pożyczka "po fakcie" może się nie udać.
                </p>
              </div>

              <div className="bg-primary-50 p-5 rounded-lg">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">5️⃣</span> Współpracuj z profesjonalistami
                </h3>
                <p className="text-sm text-gray-700">
                  Jesteśmy pośrednikami - pomożemy ocenić auto PRZED licytacją. Lepiej przegapić niż kupić kota w worku.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Podsumowanie</h2>

            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <span className="text-red-600 font-bold text-xl">❗</span>
                <span><strong>Oferta jest prawnie wiążąca</strong> przez 30 dni</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold text-xl">❗</span>
                <span>Jeśli ubezpieczalnia zaakceptuje - <strong>MUSISZ kupić</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold text-xl">❗</span>
                <span>Wycofanie = <strong>strata wadium + dodatkowe kary</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span>Licytuj <strong>tylko to co na pewno chcesz</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span>Analizuj <strong>BARDZO dokładnie PRZED</strong> złożeniem oferty</span>
              </li>
            </ul>

            <div className="bg-primary-600 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Potrzebujesz pomocy w ocenie pojazdu?</h3>
              <p className="mb-4">
                Pomożemy przeanalizować auto PRZED licytacją, żebyś podejmował świadome decyzje.
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
