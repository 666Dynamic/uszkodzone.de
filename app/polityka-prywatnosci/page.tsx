import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Polityka prywatności | UszkodzoneZNiemiec.pl',
  description: 'Polityka prywatności i ochrona danych osobowych w UszkodzoneZNiemiec.pl',
}

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 lg:p-12 shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Polityka <span className="text-primary-600">prywatności</span>
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Informacje ogólne
            </h2>
            <p className="text-gray-600 mb-4">
              Miami Autocenter GmbH, operator platformy UszkodzoneZNiemiec.pl, szanuje prywatność 
              użytkowników i zobowiązuje się do ochrony danych osobowych zgodnie z RODO 
              i niemieckim prawem o ochronie danych.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Administrator danych
            </h2>
            <p className="text-gray-600 mb-4">
              Administratorem danych osobowych jest:<br />
              Miami Autocenter GmbH<br />
              Niemcy<br />
              Email: kontakt@uszkodzonezniemiec.pl
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Zakres zbieranych danych
            </h2>
            <p className="text-gray-600 mb-4">Zbieramy następujące dane:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Dane identyfikacyjne (imię, nazwisko)</li>
              <li>Dane kontaktowe (email, telefon)</li>
              <li>Dane dotyczące licytacji i transakcji</li>
              <li>Dane techniczne (adres IP, przeglądarka)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Cel przetwarzania danych
            </h2>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Obsługa procesu licytacji</li>
              <li>Komunikacja z użytkownikami</li>
              <li>Realizacja transakcji</li>
              <li>Marketing (za zgodą)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Twoje prawa
            </h2>
            <p className="text-gray-600 mb-4">
              Masz prawo do dostępu, sprostowania, usunięcia, ograniczenia przetwarzania, 
              przenoszenia danych oraz sprzeciwu wobec przetwarzania.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Cookies
            </h2>
            <p className="text-gray-600 mb-4">
              Strona używa plików cookie do zapewnienia prawidłowego działania 
              i analizy ruchu. Możesz zarządzać ustawieniami cookie w przeglądarce.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. Kontakt
            </h2>
            <p className="text-gray-600">
              W sprawach dotyczących ochrony danych skontaktuj się z nami:<br />
              Email: kontakt@uszkodzonezniemiec.pl
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
