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
  metadataBase: new URL('https://uszkodzonezniemiec.pl'),
  title: 'Samochody powypadkowe z Niemiec | Aukcje auta uszkodzone | UszkodzoneZNiemiec.pl',
  description: 'Kupuj auta powypadkowe z aukcji w Niemczech - od €2000. Licytacja kopertowa, transport, dokumenty. Restwertbörsen - 4500+ aut dziennie z niemieckich ubezpieczalni.',
  keywords: 'samochody powypadkowe z niemiec, auta powypadkowe niemcy, import aut z niemiec, restwertbörsen, aukcje samochodów niemcy, car.casion, uszkodzone auto z niemiec, 130%-regelung, giełdy ubezpieczeniowe niemcy, auta uszkodzone niemcy, samochody z niemiec tanie',
  authors: [{ name: 'Miami Autocenter GmbH' }],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://uszkodzonezniemiec.pl',
    siteName: 'UszkodzoneZNiemiec.pl',
    title: 'Samochody powypadkowe z Niemiec - Aukcje Restwertbörsen',
    description: 'Dostęp do zamkniętych niemieckich giełd ubezpieczeniowych Restwertbörsen. Ponad 4500 aut powypadkowych dziennie. Licytacje kopertowe, bezpieczny zakup, transport i rejestracja w Polsce.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UszkodzoneZNiemiec.pl - Samochody powypadkowe z Niemiec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samochody powypadkowe z Niemiec | UszkodzoneZNiemiec.pl',
    description: 'Dostęp do zamkniętych niemieckich giełd ubezpieczeniowych Restwertbörsen. 4500+ aut dziennie.',
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
    canonical: 'https://uszkodzonezniemiec.pl',
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
