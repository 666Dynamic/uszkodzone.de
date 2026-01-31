import type { Metadata } from 'next'
import { FiSearch, FiFileText, FiCheckCircle, FiTruck, FiCreditCard, FiShield } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Jak to działa - Kup auto powypadkowe z Niemiec | Uszkodzone.de',
  description: 'Poznaj prosty proces zakupu powypadkowych aut z niemieckich giełd ubezpieczeniowych. Od licytacji do transportu pod dom w 4 prostych krokach.',
}

const detailedSteps = [
  {
    icon: FiSearch,
    number: '01',
    title: 'Wyszukaj i wybierz pojazd',
    description: 'Przeglądaj naszą bazę ponad 4500 aut dziennie z niemieckich giełd ubezpieczeniowych.',
    details: [
      'Szczegółowe zdjęcia z każdego kąta pojazdu',
      'Raport szkód z ubezpieczalni',
      'Kalkulacja kosztów naprawy (Rep.-Kosten)',
      'Historia serwisowa (jeśli dostępna)',
      'Informacje techniczne i wyposażenie',
      'Lokalizacja pojazdu w Niemczech',
    ],
  },
  {
    icon: FiFileText,
    number: '02',
    title: 'Złóż ofertę i wpłać wadium',
    description: 'System licytacji kopertowej - składasz ofertę nie widząc innych propozycji.',
    details: [
      'Wpłać zwrotne wadium (10-20% wartości)',
      'Określ swoją maksymalną ofertę',
      'Twoja oferta jest ukryta przed innymi',
      'Możesz licytować wiele aut jednocześnie',
      'Wadium zwracane, jeśli nie wygrasz',
      'Otrzymujesz potwierdzenie e-mail',
    ],
  },
  {
    icon: FiCheckCircle,
    number: '03',
    title: 'Poczekaj na decyzję ubezpieczalni',
    description: 'Ubezpieczalnia rozpatruje wszystkie oferty i wybiera najwyższą.',
    details: [
      'Czas oczekiwania: zazwyczaj 3-7 dni roboczych',
      'Otrzymujesz powiadomienie o wyniku',
      'Jeśli wygrasz - przechodzisz do płatności',
      'Jeśli przegrasz - wadium wraca automatycznie',
      'Możesz śledzić status w panelu',
      'Dostęp do historii wszystkich licytacji',
    ],
  },
  {
    icon: FiTruck,
    number: '04',
    title: 'Opłać i odbierz pojazd',
    description: 'Po wygraniu masz 7-14 dni na finalizację transakcji i odbiór.',
    details: [
      'Zapłać pozostałą kwotę (minus wadium)',
      'Przelew SEPA lub gotówka przy odbiorze',
      'Odbierz osobiście w Niemczech lub...',
      'Skorzystaj z naszego transportu pod dom',
      'Otrzymujesz pełną dokumentację pojazdu',
      'Pomagamy w rejestracji w Polsce',
    ],
  },
]

const paymentMethods = [
  {
    icon: FiCreditCard,
    title: 'Przelew SEPA',
    description: 'Szybki i bezpieczny przelew bankowy w Euro',
    pros: ['Najszybsza opcja', 'Bez dodatkowych opłat', 'Potwierdzone 1-2 dni'],
  },
  {
    icon: FiCreditCard,
    title: 'Gotówka przy odbiorze',
    description: 'Możliwe przy osobistym odbiorze w Niemczech',
    pros: ['Bezpośrednia płatność', 'Sprawdzasz auto przed zapłatą', 'Euro lub PLN'],
  },
]

const transportOptions = [
  {
    title: 'Odbiór osobisty',
    description: 'Przyjedź do Niemiec i odbierz auto samodzielnie',
    price: '0 €',
    features: ['Oszczędzasz na transporcie', 'Sprawdzasz auto na miejscu', 'Dokumenty od razu'],
  },
  {
    title: 'Transport lawetą',
    description: 'Dostarczymy auto pod Twój adres w Polsce',
    price: 'od 300 €',
    features: ['Wygodna dostawa', 'Ubezpieczony transport', '3-5 dni roboczych'],
    recommended: true,
  },
]

export default function JakToDzialaPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-gray-50 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Jak to <span className="text-primary-600">działa?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prosty i przejrzysty proces zakupu powypadkowych aut z niemieckich giełd 
            ubezpieczeniowych. Krok po kroku do Twojego wymarzonego auta.
          </p>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {detailedSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 items-center`}
                >
                  {/* Icon & Number */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon className="w-16 h-16 text-primary-600" />
                      </div>
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {step.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Metody <span className="text-primary-600">płatności</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {paymentMethods.map((method) => {
              const Icon = method.icon
              return (
                <div key={method.title} className="card p-8">
                  <Icon className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <ul className="space-y-2">
                    {method.pros.map((pro, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <FiCheckCircle className="w-4 h-4 text-primary-600" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Transport Options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Opcje <span className="text-primary-600">transportu</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {transportOptions.map((option) => (
              <div
                key={option.title}
                className={`card p-8 ${
                  option.recommended ? 'ring-2 ring-primary-600 relative' : ''
                }`}
              >
                {option.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Polecane
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="text-3xl font-bold text-primary-600 mb-6">
                  {option.price}
                </div>
                <ul className="space-y-2">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <FiCheckCircle className="w-4 h-4 text-primary-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Info */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <FiShield className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              Bezpieczeństwo i zaufanie
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Miami Autocenter GmbH to oficjalnie zarejestrowana firma w Niemczech 
              z pełnym dostępem do zamkniętych giełd ubezpieczeniowych.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                'Zwrotne wadium',
                'Pełna dokumentacja',
                'Wsparcie prawne',
              ].map((item) => (
                <div key={item} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <FiCheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-semibold">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
