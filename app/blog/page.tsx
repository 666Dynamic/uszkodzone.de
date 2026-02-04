import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Aktualności i porady | Auta powypadkowe z Niemiec | UszkodzoneZNiemiec.pl',
  description: 'Najnowsze informacje, porady i artykuły o zakupie powypadkowych samochodów z Niemiec.',
}

export default function BlogPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          <span className="text-primary-600">Blog</span>
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Aktualności, porady i artykuły eksperckie
        </p>
        
        <div className="bg-white rounded-xl p-12 text-center shadow-lg">
          <div className="text-6xl mb-4">✍️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Wkrótce dostępne
          </h2>
          <p className="text-gray-600">
            Blog z aktualnościami i poradami w przygotowaniu
          </p>
        </div>
      </div>
    </div>
  )
}
