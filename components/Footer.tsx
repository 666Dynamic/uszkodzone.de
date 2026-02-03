'use client'

import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'
import AnimatedHammerLogo from './AnimatedHammerLogo'

const navigation = {
  platform: [
    { name: 'Aukcje', href: '/aukcje' },
    { name: 'Jak to działa', href: '/jak-to-dziala' },
    { name: 'Kalkulator', href: '/kalkulator' },
  ],
  resources: [
    { name: 'Wiedza', href: '/wiedza' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/#faq' },
  ],
  legal: [
    { name: 'Polityka prywatności', href: '/polityka-prywatnosci' },
    { name: 'Regulamin', href: '/regulamin' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <AnimatedHammerLogo textColor="text-white" accentColor="text-primary-500" />
            </Link>
            <p className="text-sm mb-6">
              Twój dostęp do zamkniętych niemieckich giełd ubezpieczeniowych. Ponad 4500 aut powypadkowych dziennie.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platforma</h3>
            <ul className="space-y-3">
              {navigation.platform.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-primary-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Zasoby</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-primary-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FiMapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-500" />
                <span>Miami Autocenter GmbH<br />Niemcy</span>
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="w-5 h-5 flex-shrink-0 text-primary-500" />
                <a href="mailto:kontakt@uszkodzone.de" className="hover:text-primary-500 transition-colors">
                  kontakt@uszkodzone.de
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="w-5 h-5 flex-shrink-0 text-primary-500" />
                <a href="tel:+49" className="hover:text-primary-500 transition-colors">
                  +49 XXX XXX XXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Uszkodzone.de - Miami Autocenter GmbH. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-400 hover:text-primary-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
