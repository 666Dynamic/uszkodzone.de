import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Samochody powypadkowe z Niemiec | Aukcje online | Uszkodzone.de',
  description: 'Kupuj auta powypadkowe z aukcji w Niemczech - od €2000. Licytacja kopertowa, transport, dokumenty. 8000+ aut dziennie.',
  keywords: 'samochody powypadkowe, import aut z Niemiec, Restwertbörsen, aukcje samochodów, car.casion, uszkodzone auto, 130%-Regelung',
  authors: [{ name: 'Miami Autocenter GmbH' }],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://uszkodzone.de',
    siteName: 'Uszkodzone.de',
    title: 'Uszkodzone.de - Samochody powypadkowe z Niemiec',
    description: 'Dostęp do zamkniętych niemieckich giełd ubezpieczeniowych. Ponad 4500 aut dziennie.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Uszkodzone.de',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uszkodzone.de - Samochody powypadkowe z Niemiec',
    description: 'Dostęp do zamkniętych niemieckich giełd ubezpieczeniowych',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://uszkodzone.de',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={inter.variable}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
