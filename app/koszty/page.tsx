import Link from 'next/link'
import { FiAlertCircle, FiDollarSign } from 'react-icons/fi'

export const metadata = {
  title: 'Koszty i prowizje | Uszkodzone.de',
  description: 'Pełna przejrzystość kosztów. Sprawdź ile będzie Cię kosztować import auta z Niemiec.',
}

export default function CostsPage() {
  return (
    <main className="pt-32 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pełna przejrzystość kosztów
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Nie ma ukrytych opłat. Poniżej znajdziesz dokładny rozkład wszystkich kosztów importu auta z Niemiec.
          </p>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Koszty importu auta z Niemiec</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Example 1 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Przykład 1: Opel Astra</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between pb-2 border-b">
                  <span className="text-gray-600">Cena na aukcji (€)</span>
                  <span className="font-semibold text-gray-900">€2.500</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="text-gray-600">Transport do PL</span>
                  <span className="font-semibold text-gray-900">€450</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="text-gray-600">Ubezpieczenie transportu</span>
                  <span className="font-semibold text-gray-900">€80</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="text-gray-600">Naprawy w DE</span>
                  <span className="font-semibold text-gray-900">€300</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="text-gray-600">Dokumenty (COC, tłumaczenia)</span>
                  <span className="font-semibold text-gray-900">€80</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="text-gray-600">Rejestracja w PL</span>
                  <span className="font-semibold text-gray-900">~500 zł</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="text-gray-600">Ubezpieczenie OC (1 rok)</span>
                  <span className="font-semibold text-gray-900">~400 zł</span>
                </div>
                <div className="flex justify-between pt-4 text-base font-bold bg-primary-50 p-3 rounded">
                  <span>RAZEM KOSZT</span>
                  <span className="text-primary-600">€4.200 (~18.000 zł)</span>
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Przykład 2: BMW 320d</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between pb-2 border-b">
                  <span className="text-gray-600">Cena na aukcji (€)</span>
                  <span className="font-semibold text-gray-900">€5.000</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="text-gray-600">Transport do PL</span>
                  <span className="font-semibold text-gray-900">€600</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="text-gray-600">Ubezpieczenie transportu</span>
                  <span className="font-semibold text-gray-900">€120</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="text-gray-600">Naprawy w DE</span>
                  <span className="font-semibold text-gray-900">€1.200</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="text-gray-600">Dokumenty (COC, tłumaczenia)</span>
                  <span className="font-semibold text-gray-900">€150</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="text-gray-600">Rejestracja w PL</span>
                  <span className="font-semibold text-gray-900">~600 zł</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="text-gray-600">Ubezpieczenie OC (1 rok)</span>
                  <span className="font-semibold text-gray-900">~600 zł</span>
                </div>
                <div className="flex justify-between pt-4 text-base font-bold bg-primary-50 p-3 rounded">
                  <span>RAZEM KOSZT</span>
                  <span className="text-primary-600">€8.000 (~34.000 zł)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Struktura opłat - Uszkodzone.de</h2>
          
          <div className="space-y-6">
            {[
              {
                title: 'Prowizja platformy',
                description: 'Pobieramy prowizję bezpośrednio od platformy aukcyjnej (nie dodawamy do Twojej ceny)',
                amount: 'Zawarta w cenie',
              },
              {
                title: 'Opłata rejestracyjna',
                description: 'Brak opłaty za rejestrację w naszym serwisie',
                amount: 'Bezpłatnie',
              },
              {
                title: 'Porada/Wsparcie',
                description: 'Pełne wsparcie w procesie licytacji i imporcie',
                amount: 'Bezpłatnie',
              },
              {
                title: 'Dokumenty COC',
                description: 'Jeśli będzie potrzebny nowy COC (Certificate of Conformity)',
                amount: '€150-€300',
              },
              {
                title: 'Transport',
                description: 'Zależy od odległości i metody (laweta, samochód transportowy)',
                amount: '€300-€1.000',
              },
            ].map((fee, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900">{fee.title}</h3>
                  <span className="text-primary-600 font-bold">{fee.amount}</span>
                </div>
                <p className="text-gray-600 text-sm">{fee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VAT Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-12">
            <div className="flex gap-4">
              <FiDollarSign className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">VAT - Margin Scheme (§25a UStG)</h3>
                <p className="text-gray-600 text-sm">
                  W Niemczech stosuje się specjalny system VAT dla pojazdów używanych (Margin Scheme). 
                  Oznacza to, że płacisz VAT tylko od marży, a nie od całej ceny. To oszczędza ~€400-€800 na każdym imporcie.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
            <div className="flex gap-4">
              <FiAlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Dodatkowe koszty do przygotowania</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Naprawy (części, robocizna) - zależy od stanu pojazdu</li>
                  <li>• Biegły do oceny przed licytacją (opcjonalnie) - €200-€300</li>
                  <li>• Magazynowanie w DE (jeśli pojazd czeka) - €20-€50/dzień</li>
                  <li>• Problemy celne (rzadko) - zależy od przypadku</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Chcesz obliczyć dokładne koszty?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Użyj naszego interaktywnego kalkulatora, aby zobaczyć realistyczne koszty dla konkretnego pojazdu.
          </p>
          <Link
            href="/kalkulator"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Otwórz kalkulator
          </Link>
        </div>
      </section>
    </main>
  )
}
