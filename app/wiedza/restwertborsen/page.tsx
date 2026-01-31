import { Metadata } from 'next'
import { FiLock, FiGlobe, FiCheckCircle } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Czym są Restwertbörsen? | Uszkodzone.de',
  description: 'Restwertbörsen to niemieckie aukcje pojazdy. Jak działają, jak trafiają tam pojazdy, zasada 130%-Regelung. Pełne wyjaśnienie dla polskich importerów.',
  keywords: 'Restwertbörsen, 130%-Regelung, niemieckie aukcje, ubezpieczalnia, pojazdy, import'
}

export default function RestwertborsenPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Czym są<br />
              <span className="text-primary-600">Restwertbörsen?</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Restwertbörsen to zamknięte niemieckie platformy aukcyjne, gdzie ubezpieczalnie sprzedają pojazdy 
              uznane za szkodę całkowitą. To kluczowe źródło tanich, wysokiej jakości aut dla polskich importerów.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FiLock className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Zamknięte platformy</h3>
              <p className="text-gray-600">
                Dostęp mają tylko zweryfikowani dealerzy i firmy z licencjami. Prywatne osoby nie mogą kupować bezpośrednio.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FiGlobe className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Główne giełdy</h3>
              <p className="text-gray-600">
                Mamy dostęp do największych platform, na których ubezpieczalnie AXA, Allianz, HUK-COBURG sprzedają pojazdy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FiCheckCircle className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Licytacja kopertowa</h3>
              <p className="text-gray-600">
                Dajesz swoją maksymalną ofertę, nie widząc ofert innych. Ubezpieczalnia wybiera najwyższą.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Jak pojazdy trafiają na Restwertbörsen?</h2>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-600 text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Zasada 130%-Regelung</h3>
                  <p className="text-gray-600 leading-relaxed">
                    W Niemczech obowiązuje specjalna zasada prawna. Gdy (koszt naprawy + wartość rezydualna pojazdu) 
                    przekracza 130% wartości pojazdu przed szkodą, ubezpieczyciel MUSI sklasyfikować pojazd jako 
                    nieopłacalny do naprawy.
                  </p>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    <strong>Przykład:</strong> BMW warte 50.000 zł z naprawą za 45.000 zł to w Niemczech &quot;ekonomiczna 
                    szkoda całkowita&quot;, bo razem to 95.000 zł, co przekracza 130% z 50.000 zł (= 65.000 zł).
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-600 text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Odkup przez ubezpieczalnię</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ubezpieczalnia wypłaca odszkodowanie właścicielowi (wartość pojazdu minus wartość rezydualna) 
                    i przejmuje pojazd na własność. Właściciel oddaje auto i dostaje pieniądze - dla niego sprawa załatwiona.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-600 text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Wystawienie na aukcję</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pojazd trafia na zamkniętą platformę (Restwertbörse), gdzie licytują tylko zweryfikowani dealerzy 
                    i firmy z licencjami. My jako licencjonowana firma mamy dostęp i działamy w Twoim imieniu.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-600 text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Opłacalna naprawa w Polsce</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To co w Niemczech jest nieopłacalne (koszty pracy 50-100€/h), w Polsce jest opłacalne dzięki 
                    niższym kosztom robocizny (20-40€/h) i taniej dostępnym częściom zamiennym.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-600 text-white font-bold">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Realne marże dla dealera</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Po uwzględnieniu wszystkich kosztów (zakup na aukcji, transport ~2-4K zł, naprawy, rejestracja), 
                    realistyczna marża wynosi 15-25% wartości końcowej. Auto warte 50.000 zł na polskim rynku 
                    możesz kupić za ok. 35.000-40.000 zł z wszystkimi kosztami.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Points */}
          <div className="bg-primary-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ważne informacje o licytacji</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">✓ Oferta wiążąca przez 30 dni</h4>
                <p className="text-gray-700 text-sm">Po wygraniu aukcji ubezpieczalnia ma 30 dni na decyzję. Jeśli akceptuje - musisz kupić.</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">✓ Brak możliwości wycofania</h4>
                <p className="text-gray-700 text-sm">Jeśli przegrasz i ubezpieczalnia zaakceptuje inną ofertę, tracisz. To poważna zobowiązanie.</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">✓ Analiza przed licytacją</h4>
                <p className="text-gray-700 text-sm">Każdy pojazd ma 50-150 zdjęć, raport biegłego, historię napraw. Musisz wszystko sprawdzić.</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">✓ Transport i dokumenty</h4>
                <p className="text-gray-700 text-sm">My organizujemy transport z Niemiec, ubezpieczenie, odpowiednie dokumenty do Polski.</p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Gotowy do licytacji?</h2>
            <p className="mb-6 text-primary-100">
              Sprawdź aktualnie dostępne pojazdy i zacznij swoją przygodę z importem aut z Niemiec.
            </p>
            <a 
              href="/aukcje"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Przejdź do aukcji
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
