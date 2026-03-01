import type { Metadata } from 'next'
import Link from 'next/link'
import { FiArrowLeft, FiInfo, FiLock, FiGlobe, FiAlertTriangle } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Czym są Restwertbörsen? | Niemieckie giełdy pozostałości | UszkodzoneZNiemiec.pl',
  description: 'Wszystko o niemieckich giełdach pozostałości ubezpieczeniowych (Restwertbörsen). Jak działają, zasada 130%-Regelung, dostęp tylko dla licencjonowanych firm.',
  keywords: 'Restwertbörsen, giełdy pozostałości, Totalschaden, 130%-Regelung, niemieckie ubezpieczalnie, szkoda całkowita',
}

export default function RestwertborsenPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        {/* Back Link */}
        <Link
          href="/wiedza"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span>Powrót do bazy wiedzy</span>
        </Link>

        {/* Header */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 lg:p-12 shadow-lg mb-8">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FiInfo className="w-4 h-4" />
            <span>Kompletny przewodnik</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Czym są <span className="text-primary-600">Restwertbörsen</span>?
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Niemieckie giełdy pozostałości ubezpieczeniowych (Restwertbörsen) to zamknięte platformy aukcyjne,
            na których ubezpieczalnie sprzedają pojazdy po szkodach całkowitych. Dostęp mają tylko licencjonowane
            firmy motoryzacyjne.
          </p>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Co to jest Totalschaden?</h2>

            <p className="text-gray-600 mb-6">
              <strong>Totalschaden</strong> (szkoda całkowita) w niemieckim prawie ubezpieczeniowym oznacza pojazd,
              którego naprawa jest ekonomicznie nieopłacalna według zasady <strong>130%-Regelung</strong>.
            </p>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <FiAlertTriangle className="text-primary-600" />
                Zasada 130%-Regelung
              </h3>
              <p className="mb-4">
                W Niemczech obowiązuje specjalna zasada prawna: gdy <strong>(koszt naprawy + wartość rezydualna pojazdu)</strong> przekracza
                <strong> 130% wartości pojazdu przed szkodą</strong>, ubezpieczyciel MUSI sklasyfikować pojazd jako szkodę całkowitą.
              </p>

              <div className="bg-white p-4 rounded mt-4">
                <p className="font-bold mb-2">Przykład:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• BMW 320d warte przed szkodą: <strong>€20.000</strong></li>
                  <li>• Koszt naprawy w Niemczech: <strong>€18.000</strong></li>
                  <li>• Wartość rezydualna (wrak): <strong>€8.000</strong></li>
                  <li>• Razem: €18.000 + €8.000 = <strong>€26.000</strong></li>
                  <li>• 130% z €20.000 = <strong>€26.000</strong></li>
                  <li className="text-red-600 font-bold pt-2 border-t">→ AUTO = TOTALSCHADEN (szkoda całkowita)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Jak pojazdy trafiają na Restwertbörsen?</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Krok 1: Wypadek i wycena</h3>
                <p className="text-gray-600">
                  Po wypadku ubezpieczalnia wysyła rzeczoznawcę, który sporządza szczegółowy raport szkód.
                  Jeśli koszt naprawy + wartość rezydualna &gt; 130% wartości pojazdu → pojazd zostaje sklasyfikowany
                  jako Totalschaden.
                </p>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Krok 2: Wykup przez ubezpieczyciela</h3>
                <p className="text-gray-600">
                  Ubezpieczalnia wypłaca właścicielowi odszkodowanie: <strong>(wartość pojazdu przed szkodą - wartość rezydualna)</strong>.
                  Właściciel oddaje pojazd ubezpieczalni, która przejmuje go na własność.
                </p>
                <div className="bg-gray-50 p-4 rounded mt-3">
                  <p className="text-sm text-gray-700">
                    <strong>Przykład:</strong> BMW warte €20.000, wartość rezydualna €8.000 → właściciel dostaje €12.000
                    i oddaje auto ubezpieczalni.
                  </p>
                </div>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Krok 3: Wystawienie na Restwertbörse</h3>
                <p className="text-gray-600">
                  Ubezpieczalnia umieszcza pojazd na zamkniętej giełdzie pozostałości (tzw. Restwertbörse).
                  Tylko zweryfikowane firmy motoryzacyjne z licencją mogą składać oferty.
                </p>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Krok 4: Licytacja kopertowa</h3>
                <p className="text-gray-600">
                  Dealerzy składają oferty &quot;w ciemno&quot; (nie widząc ofert innych). Po zakończeniu okresu licytacji
                  ubezpieczalnia wybiera najwyższą ofertę. Oferent ma obowiązek kupić pojazd, jeśli jego oferta zostanie zaakceptowana.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Dlaczego to opłacalne dla Polski?</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-red-50 to-white border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-700 mb-3">🇩🇪 W Niemczech</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Robocizna: <strong>€50-100/h</strong></li>
                  <li>• Części oryginalne: <strong>bardzo drogie</strong></li>
                  <li>• Naprawa BMW: <strong>€18.000</strong></li>
                  <li className="text-red-600 font-bold pt-2 border-t">→ Nieopłacalne</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-3">🇵🇱 W Polsce</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Robocizna: <strong>€20-40/h</strong></li>
                  <li>• Części zamienniki: <strong>tańsze o 30-50%</strong></li>
                  <li>• Naprawa BMW: <strong>€8.000-10.000</strong></li>
                  <li className="text-green-600 font-bold pt-2 border-t">→ Bardzo opłacalne!</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Jak działają wewnętrzne ekosystemy aukcyjne?</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-white border rounded-lg p-5 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiLock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Bezpośrednie połączenia z ubezpieczalniami</h3>
                  <p className="text-gray-600">
                    Platformy te agregują pojazdy od największych towarzystw ubezpieczeniowych w Niemczech (m.in. AXA, Allianz, HUK-COBURG).
                    Stanowią wydzielony, zamknięty obieg B2B, niedostępny dla szerokiego rynku.
                  </p>
                </div>
              </div>

              <div className="bg-white border rounded-lg p-5 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiGlobe className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Skala 4500+ pojazdów dziennie</h3>
                  <p className="text-gray-600">
                    Dzięki dostępowi do wielu odrębnych systemów licytacyjnych, licencjonowani pośrednicy
                    mają dostęp do tysięcy aut dziennie z pełnymi, udokumentowanymi raportami od niezależnych rzeczoznawców.
                  </p>
                </div>
              </div>

              <div className="bg-white border rounded-lg p-5 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiAlertTriangle className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Wyłączenie rękojmi (B2B)</h3>
                  <p className="text-gray-600">
                    Licytacje kopertowe na szczeblu hurtowym wyłączają prawa konsumenckie i chronią zbywcę przed roszczeniami potransakcyjnymi.
                    Dlatego ubezpieczalnie preferują zbycie wraku właśnie na tych platformach.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <FiAlertTriangle className="text-yellow-600" />
                Ważne: Dostęp tylko dla licencjonowanych firm
              </h3>
              <p className="text-gray-700 mb-3">
                Prywatne osoby <strong>nie mogą</strong> kupować bezpośrednio na Restwertbörsen. Wymagana jest:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Zarejestrowana firma motoryzacyjna</li>
                <li>• Numer VAT UE</li>
                <li>• Weryfikacja tożsamości i adresu</li>
                <li>• W niektórych przypadkach: licencja dealerska</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>UszkodzoneZNiemiec.pl</strong> posiada wszystkie wymagane licencje i dostęp do głównych platform.
                Działamy jako pośrednik, kupując pojazdy w Twoim imieniu.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-primary-600 text-white rounded-xl p-8 mt-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Chcesz kupić auto z Restwertbörse?</h2>
              <p className="text-lg mb-6 opacity-90">
                Mamy dostęp do 4.500+ aut dziennie ze wszystkich głównych niemieckich platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/aukcje"
                  className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
                >
                  Zobacz dostępne auta
                </Link>
                <Link
                  href="/kalkulator"
                  className="btn-primary bg-primary-700 hover:bg-primary-800"
                >
                  Kalkulator kosztów
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
