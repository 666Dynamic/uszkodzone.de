import type { Metadata } from 'next'
import Link from 'next/link'
import { FiFileText, FiAlertCircle, FiCheckCircle } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Rejestracja uszkodzonego auta z Niemiec: Przewodnik | UszkodzoneZNiemiec.pl',
  description: 'Kompletny przewodnik krok po kroku: akcyza, dokumenty, badanie techniczne, rzeczoznawca. Wszystko, co musisz wiedzieć o rejestracji powypadkowego auta z Niemiec.',
}

export default function RejestracjaUszkodzonegoAutaPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <article className="container-custom py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/wiedza" 
            className="text-primary-600 hover:text-primary-700 font-medium mb-4 inline-block"
          >
            ← Powrót do bazy wiedzy
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-semibold">
              Prawne
            </span>
            <span>•</span>
            <span>📚 12 min czytania</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Rejestracja uszkodzonego auta z Niemiec: Przewodnik po procedurach i opłatach
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Zakup samochodu powypadkowego lub uszkodzonego z niemieckiej ubezpieczalni to jedna z najskuteczniejszych metod na nabycie pojazdu wyższej klasy w atrakcyjnej cenie. Dzięki aukcjom kopertowym na UszkodzoneZNiemiec.pl, proces zakupu jest transparentny, jednak dopełnienie formalności w Polsce wymaga trzymania się określonego harmonogramu.
          </p>
        </div>

        {/* Alert box */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8 rounded-r-lg">
          <div className="flex gap-3">
            <FiAlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-amber-900 mb-2">Kluczowa zasada</h3>
              <p className="text-amber-800">
                Poniżej przedstawiamy szczegółowe kompendium wiedzy o tym, jak krok po kroku zarejestrować uszkodzony samochód z Niemiec.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="bg-primary-100 text-primary-600 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">1</span>
              Dokumentacja – co musisz odebrać po aukcji?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Podstawą każdej rejestracji są dokumenty własności i tożsamości pojazdu. Po wygranej licytacji na naszej platformie otrzymasz:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Dowód własności:</strong> Faktura VAT lub umowa kupna-sprzedaży.</span>
              </li>
              <li className="flex gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Zulassungsbescheinigung Teil I oraz Teil II:</strong> Niemiecki odpowiednik dowodu rejestracyjnego i karty pojazdu (tzw. mały i duży brief).</span>
              </li>
              <li className="flex gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Dokumentacja zdjęciowa z aukcji:</strong> Kluczowa przy wycenie wartości pojazdu dla urzędu celno-skarbowego.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="bg-primary-100 text-primary-600 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">2</span>
              Akcyza – zasady dla aut uszkodzonych
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              W przypadku aut uszkodzonych, wysokość akcyzy zależy od realnej wartości pojazdu w dniu jego przywozu do kraju. To tutaj generuje się największa oszczędność.
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex gap-3">
                <span className="font-bold text-primary-600 flex-shrink-0">Terminy:</span>
                <span>Masz <strong>14 dni</strong> na złożenie deklaracji AKC-U/S i <strong>30 dni</strong> na opłacenie podatku (liczone od dnia przekroczenia granicy).</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary-600 flex-shrink-0">Stawki:</span>
                <span>3,1% dla silników do 2000 ccm oraz 18,6% dla silników powyżej 2000 ccm.</span>
              </li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <div className="flex gap-3">
                <FiAlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Rola Rzeczoznawcy</h4>
                  <p className="text-blue-800">
                    Przy znacznych uszkodzeniach Urząd Skarbowy może zakwestionować niską cenę zakupu. <strong>Zalecamy sporządzenie opinii technicznej przez rzeczoznawcę samochodowego przed rozpoczęciem naprawy.</strong> Dokument ten stanowi oficjalne potwierdzenie, że niska cena wynikała ze stanu technicznego, a nie z próby zaniżenia podatku.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="bg-primary-100 text-primary-600 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">3</span>
              Tłumaczenia dokumentów
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Obecnie polskie Wydziały Komunikacji rzadko wymagają tłumaczeń standardowych dokumentów z krajów UE. Jeśli jednak w niemieckich dokumentach znajdują się niestandardowe adnotacje urzędowe lub ubezpieczeniowe dotyczące szkody, warto zlecić tłumaczenie przysięgłe (koszt ok. 150 zł).
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="bg-primary-100 text-primary-600 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">4</span>
              Naprawa i badanie techniczne
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Zanim auto zostanie dopuszczone do ruchu, musi przejść rozszerzone badanie techniczne.
            </p>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">1. Naprawa</h4>
                <p className="text-gray-700">
                  Możesz jej dokonać w dowolnym serwisie. Pamiętaj, aby auto spełniało wszystkie wymogi bezpieczeństwa (układ kierowniczy, hamulcowy, oświetlenie, poduszki powietrzne).
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">2. Badanie techniczne (pierwsze w kraju)</h4>
                <p className="text-gray-700">
                  Na stacji diagnostycznej zgłaszasz auto do pierwszego badania technicznego. Diagnosta sprawdzi poprawność naprawy i zweryfikuje dane techniczne pojazdu.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="bg-primary-100 text-primary-600 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">5</span>
              Finał: Wydział Komunikacji
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ostatnim krokiem jest wizyta w urzędzie właściwym dla Twojego miejsca zamieszkania. Do wniosku o rejestrację dołączasz:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Oryginały dokumentów niemieckich (Briefy)</span>
              </li>
              <li className="flex gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Dowód zakupu</span>
              </li>
              <li className="flex gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Potwierdzenie opłacenia akcyzy (pobierasz z portalu PUESC)</span>
              </li>
              <li className="flex gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Zaświadczenie o pozytywnym wyniku badania technicznego</span>
              </li>
              <li className="flex gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Tablice rejestracyjne z Niemiec (jeśli były) lub oświadczenie o ich braku</span>
              </li>
            </ul>
          </section>

          {/* Timeline Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Harmonogram działań
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary-600 text-white">
                    <th className="px-6 py-4 text-left font-bold">Etap</th>
                    <th className="px-6 py-4 text-left font-bold">Czas na realizację</th>
                    <th className="px-6 py-4 text-left font-bold">Uwagi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Transport do Polski</td>
                    <td className="px-6 py-4 text-gray-700">Natychmiast po zakupie</td>
                    <td className="px-6 py-4 text-gray-600">Zabezpiecz zdjęcia uszkodzeń.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Opinia rzeczoznawcy</td>
                    <td className="px-6 py-4 text-gray-700">Przed naprawą!</td>
                    <td className="px-6 py-4 text-blue-700 font-semibold">Kluczowe dla niskiej akcyzy.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Deklaracja AKC-U/S</td>
                    <td className="px-6 py-4 text-gray-700">Do 14 dni</td>
                    <td className="px-6 py-4 text-gray-600">Możesz złożyć online przez PUESC.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Naprawa auta</td>
                    <td className="px-6 py-4 text-gray-700">Elastycznie</td>
                    <td className="px-6 py-4 text-gray-600">Zbieraj dokumentację naprawy.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Badanie techniczne</td>
                    <td className="px-6 py-4 text-gray-700">Po naprawie</td>
                    <td className="px-6 py-4 text-gray-600">Pierwszy przegląd w kraju.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Rejestracja</td>
                    <td className="px-6 py-4 text-gray-700">Po zebraniu kompletu</td>
                    <td className="px-6 py-4 text-gray-600">Koszt stały: ok. 160 zł.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Why UszkodzoneZNiemiec.pl */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-xl border border-primary-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Dlaczego licytacje kopertowe na UszkodzoneZNiemiec.pl to bezpieczny wybór?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Aukcje ubezpieczeniowe w Niemczech charakteryzują się rzetelnymi opisami. Kupując przez naszą platformę, masz pewność co do pochodzenia auta i stanu faktycznego uszkodzeń. To eliminuje ryzyko zakupu auta z wadami ukrytymi, o których nie wiedziałbyś podczas przygotowywania dokumentacji do akcyzy.
              </p>
              <Link 
                href="/jak-to-dziala" 
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition"
              >
                Przejdź do poradnika licytacji kopertowych →
              </Link>
            </div>
          </section>
        </div>

        {/* Bottom navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/wiedza" 
            className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-2"
          >
            ← Powrót do bazy wiedzy
          </Link>
        </div>
      </article>
    </div>
  )
}
