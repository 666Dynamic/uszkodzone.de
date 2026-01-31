'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiTruck } from 'react-icons/fi'

const navigation = [
  { name: 'Aukcje', href: '/aukcje' },
  { name: 'Jak to działa', href: '/jak-to-dziala' },
  { name: 'Kalkulator', href: '/kalkulator' },
  { 
    name: 'Wiedza', 
    href: '/wiedza',
    submenu: [
      { name: '130%-Regelung', href: '/wiedza/czym-jest-130-regelung' },
      { name: 'Oferta wiążąca', href: '/wiedza/oferta-wiazaca' },
      { name: 'Ukryte uszkodzenia', href: '/wiedza/ukryte-uszkodzenia' },
    ]
  },
  { name: 'Koszty', href: '/koszty' },
  { name: 'O nas', href: '/o-nas' },
  { name: 'Blog', href: '/blog' },
  { name: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary-600">
          <FiTruck className="w-8 h-8" />
          <span>Uszkodzone<span className="text-gray-900">.de</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => item.submenu && setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.name}
                {item.submenu && <span className="ml-1">▾</span>}
              </Link>
              
              {item.submenu && openDropdown === item.name && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[220px] z-50">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.name}
                      href={subitem.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      {subitem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/aukcje" className="btn-primary">
            Zobacz aukcje
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t mt-4">
          <div className="container-custom py-4 flex flex-col gap-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium py-2 block"
                  onClick={() => !item.submenu && setMobileMenuOpen(false)}
                >
                  {item.name}
                  {item.submenu && <span className="ml-1">▾</span>}
                </Link>
                
                {item.submenu && (
                  <div className="pl-4 flex flex-col gap-1 mt-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="text-gray-600 hover:text-primary-600 text-sm py-1 block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/aukcje" className="btn-primary text-center mt-2" onClick={() => setMobileMenuOpen(false)}>
              Zobacz aukcje
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
