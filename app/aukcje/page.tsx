import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aukcje samochodów powypadkowych z Niemiec | Restwertbörsen | UszkodzoneZNiemiec.pl',
  description: 'Przeglądaj ponad 4500 samochodów powypadkowych dziennie z niemieckich giełd ubezpieczeniowych. Ford, VW, BMW, Audi i inne marki w atrakcyjnych cenach.',
}

export default function AukcjePage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Dostępne <span className="text-primary-600">aukcje</span>
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Tu będą wyświetlane pojazdy z car.casion API
        </p>
        
        <div className="bg-white rounded-xl p-12 text-center shadow-lg">
          <div className="text-6xl mb-4">🚗</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Wkrótce dostępne
          </h2>
          <p className="text-gray-600 mb-6">
            Integracja z car.casion API w trakcie realizacji
          </p>
          <div className="inline-block bg-primary-50 text-primary-700 px-6 py-3 rounded-lg">
            <div className="font-semibold">4500+ aut dziennie</div>
            <div className="text-sm">z niemieckich giełd ubezpieczeniowych</div>
          </div>
        </div>
      </div>
    </div>
  )
}
