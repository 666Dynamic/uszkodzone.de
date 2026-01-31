import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Regulamin | Uszkodzone.de',
  description: 'Regulamin korzystania z platformy Uszkodzone.de',
}

export default function RegulaminPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 lg:p-12 shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            <span className="text-primary-600">Regulamin</span>
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Postanowienia ogólne
            </h2>
            <p className="text-gray-600 mb-4">
              Niniejszy regulamin określa zasady korzystania z platformy Uszkodzone.de 
              prowadzonej przez Miami Autocenter GmbH.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Definicje
            </h2>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li><strong>Platforma</strong> - serwis internetowy Uszkodzone.de</li>
              <li><strong>Operator</strong> - Miami Autocenter GmbH</li>
              <li><strong>Użytkownik</strong> - osoba korzystająca z platformy</li>
              <li><strong>Restwertbörsen</strong> - niemieckie giełdy ubezpieczeniowe</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Zasady korzystania
            </h2>
            <p className="text-gray-600 mb-4">
              Użytkownik zobowiązuje się do:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Podawania prawdziwych danych</li>
              <li>Przestrzegania przepisów prawa</li>
              <li>Terminowego regulowania zobowiązań</li>
              <li>Nieużywania platformy w sposób niezgodny z przeznaczeniem</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Proces licytacji
            </h2>
            <p className="text-gray-600 mb-4">
              Licytacja odbywa się w systemie kopertowym (w ciemno). Złożenie oferty 
              jest wiążące. Wadium jest zwrotne w przypadku przegranej licytacji.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Płatności
            </h2>
            <p className="text-gray-600 mb-4">
              Akceptowane formy płatności: przelew SEPA, gotówka przy odbiorze osobistym. 
              Płatność musi być dokonana w terminie wskazanym przez Operatora.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Odpowiedzialność
            </h2>
            <p className="text-gray-600 mb-4">
              Operator nie ponosi odpowiedzialności za ukryte wady pojazdu nieujawnione 
              w dokumentacji ubezpieczalni. Użytkownik kupuje pojazd w stanie „jak jest".
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. Reklamacje
            </h2>
            <p className="text-gray-600 mb-4">
              Reklamacje należy zgłaszać na adres: kontakt@uszkodzone.de w terminie 
              14 dni od zaistnienia zdarzenia.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              8. Postanowienia końcowe
            </h2>
            <p className="text-gray-600">
              Operator zastrzega sobie prawo do zmiany regulaminu. W sprawach spornych 
              właściwe jest prawo niemieckie.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
