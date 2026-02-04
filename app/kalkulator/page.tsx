import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kalkulator kosztów naprawy | Samochody powypadkowe | UszkodzoneZNiemiec.pl',
  description: 'Oblicz potencjalne koszty naprawy i zysk z zakupu powypadkowego auta z Niemiec.',
}

export default function KalkulatorPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Kalkulator <span className="text-primary-600">kosztów</span>
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Oblicz potencjalne koszty i opłacalność zakupu
        </p>
        
        <div className="bg-white rounded-xl p-12 text-center shadow-lg">
          <div className="text-6xl mb-4">🧮</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Wkrótce dostępne
          </h2>
          <p className="text-gray-600">
            Interaktywny kalkulator kosztów naprawy w przygotowaniu
          </p>
        </div>
      </div>
    </div>
  )
}
