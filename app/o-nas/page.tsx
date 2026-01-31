import { FiCheckCircle, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi'
import Link from 'next/link'

export const metadata = {
  title: 'O nas | Uszkodzone.de',
  description: 'Kim jesteśmy? Miami Autocenter GmbH - profesjonalny partner w imporcie aut z Niemiec. Doświadczenie, transparentność, wsparcie.',
}

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O nas - Miami Autocenter GmbH
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Jesteśmy zespołem profesjonalistów z ponad 15-letnim doświadczeniem w imporcie pojazdów z Niemiec. 
            Wierzymy w transparentność, bezpieczeństwo i wsparcie naszych klientów na każdym etapie procesu.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nasza historia</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Miami Autocenter GmbH powstała w 2010 roku z prostą ideą: ułatwić Polakom dostęp do wysokiej jakości 
                powypadkowych samochodów z Niemiec. Zauważyliśmy, że pojazdy, które w Niemczech są nieopłacalne do naprawy, 
                mogą w Polsce stać się świetnymi okazjami dla smart shoperów.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Przez lata wybudowaliśmy bezpośrednie relacje z największymi niemieckimi ubezpieczalniami i platformami aukcyjnymi. 
                Dzisiaj obsługujemy tysiące klientów rocznie, pomagając im znaleźć idealne auto za rozsądną cenę.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Platforma Uszkodzone.de to nasz nowy krok w kierunku demokratyzacji dostępu do tego rynku. 
                Chcemy, żeby każdy mógł licytować auta bezpośrednio, bez pośredników i ukrytych kosztów.
              </p>
            </div>
            <div className="bg-primary-50 rounded-lg p-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <FiAward className="w-8 h-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">15+ lat doświadczenia</h3>
                    <p className="text-sm text-gray-600">W imporcie aut z Niemiec</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <FiUsers className="w-8 h-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">10.000+ zadowolonych klientów</h3>
                    <p className="text-sm text-gray-600">Rocznie korzystających z naszych usług</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <FiTrendingUp className="w-8 h-8 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">€50+ milionów obrotu</h3>
                    <p className="text-sm text-gray-600">W handlu pojazdami rocznie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Nasze wartości</h2>
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Transparentność',
                description: 'Wszystkie koszty i warunki jasno wyjaśnione. Żadnych ukrytych opłat.',
                icon: FiCheckCircle,
              },
              {
                title: 'Bezpieczeństwo',
                description: 'Weryfikacja każdej transakcji, bezpieczne escrow, pełne dokumenty.',
                icon: FiCheckCircle,
              },
              {
                title: 'Wsparcie',
                description: 'Zespół dostępny 24/5. Pomoc w każdym kroku procesu.',
                icon: FiCheckCircle,
              },
              {
                title: 'Jakość',
                description: 'Tylko pojazdy z wiarygodnych źródeł. Gwarancja pochodzenia.',
                icon: FiCheckCircle,
              },
            ].map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="bg-white p-6 rounded-lg">
                  <Icon className="w-8 h-8 text-primary-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Gotów do rozpoczęcia?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Dołącz do tysięcy klientów, którzy już kupują auta z naszą pomocą.
          </p>
          <Link
            href="/aukcje"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Przeglądaj aukcje
          </Link>
        </div>
      </section>
    </main>
  )
}
