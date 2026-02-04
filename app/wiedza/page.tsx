import type { Metadata } from 'next'
import Link from 'next/link'
import { FiBook, FiAlertTriangle, FiFileText, FiEye } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Baza wiedzy - Wszystko o aukcjach powypadkowych z Niemiec | UszkodzoneZNiemiec.pl',
  description: 'Dowiedz się wszystkiego o zakupie powypadkowych aut z Niemiec, Restwertbörsen, rejestracji i naprawie.',
}

const articles = [
  {
    slug: 'czym-jest-130-regelung',
    title: '130%-Regelung: Niemiecka zasada szkody całkowitej',
    description: 'Najważniejsza zasada która determinuje czy auto trafia na aukcję Restwertbörse. Zrozum formułę matematyczną i dlaczego to daje Ci okazję do oszczędności.',
    icon: FiBook,
    readTime: '6 min',
    category: 'Podstawy',
  },
  {
    slug: 'oferta-wiazaca',
    title: 'Oferta wiążąca - Co to znaczy i jakie konsekwencje?',
    description: 'KRYTYCZNE: Oferta na niemieckich aukcjach jest prawnie wiążąca przez 30 dni. Nie możesz się wycofać bez kar finansowych. Przeczytaj PRZED pierwszą licytacją!',
    icon: FiAlertTriangle,
    readTime: '5 min',
    category: 'Prawne',
  },
  {
    slug: 'rejestracja-uszkodzonego-auta',
    title: 'Rejestracja uszkodzonego auta z Niemiec: Przewodnik',
    description: 'Kompletny przewodnik krok po kroku: akcyza (14/30 dni), dokumenty, badanie techniczne, rola rzeczoznawcy PRZED naprawą. Wszystko, co musisz wiedzieć o rejestracji.',
    icon: FiFileText,
    readTime: '12 min',
    category: 'Prawne',
  },
  // removed: 'ukryte-uszkodzenia' article (no longer published)
]

export default function WiedzaPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Baza <span className="text-primary-600">wiedzy</span>
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Wszystko, co musisz wiedzieć o zakupie powypadkowych aut z Niemiec. 
          Praktyczne poradniki oparte na naszym doświadczeniu i głębokim researchu niemieckich 
          platform Restwertbörse.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/wiedza/${article.slug}`}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition">
                  <article.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-primary-600 font-semibold mb-1">
                    {article.category}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                    {article.title}
                  </h2>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {article.description}
              </p>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">📚 {article.readTime} czytania</span>
                <span className="text-primary-600 font-semibold group-hover:underline">
                  Czytaj więcej →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Więcej artykułów wkrótce
          </h2>
          <p className="text-gray-600 mb-6">
            Pracujemy nad kolejnymi poradnikami: transport i koszty, rejestracja w Polsce, 
            analiza zdjęć przed licytacją, najpopularniejsze modele i wiele innych.
          </p>
          <Link 
            href="/kontakt"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
    </div>
  )
}
