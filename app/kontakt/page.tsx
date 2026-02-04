'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-gray-50 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-primary-600">Kontakt</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Masz pytania? Skontaktuj się z nami. Jesteśmy tu, aby pomóc Ci 
            w zakupie auta z niemieckich giełd ubezpieczeniowych.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Dane kontaktowe
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiMapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                      <p className="text-gray-600">
                        Miami Autocenter GmbH<br />
                        Niemcy
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiMail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a
                        href="mailto:kontakt@uszkodzonezniemiec.pl"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        kontakt@uszkodzonezniemiec.pl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiPhone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                      <a
                        href="tel:+49"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        +49 XXX XXX XXX
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-primary-600">
                <h3 className="font-bold text-gray-900 mb-2">Godziny pracy</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Poniedziałek - Piątek: 9:00 - 18:00</p>
                  <p>Sobota: 10:00 - 14:00</p>
                  <p>Niedziela: Zamknięte</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Wyślij wiadomość
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Imię i nazwisko *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Jan Kowalski"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="jan@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+48 XXX XXX XXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Temat *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Wybierz temat</option>
                        <option value="general">Pytanie ogólne</option>
                        <option value="auction">Pytanie o aukcję</option>
                        <option value="transport">Transport i logistyka</option>
                        <option value="payment">Płatności</option>
                        <option value="registration">Rejestracja w Polsce</option>
                        <option value="other">Inne</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Wiadomość *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Opisz swoje pytanie lub zapytanie..."
                    />
                  </div>

                  {/* Status Messages */}
                  {status === 'success' && (
                    <div className="bg-green-50 text-green-800 px-4 py-3 rounded-lg">
                      Dziękujemy! Twoja wiadomość została wysłana. Odpowiemy najszybciej jak to możliwe.
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="bg-red-50 text-red-800 px-4 py-3 rounded-lg">
                      Wystąpił błąd. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full sm:w-auto btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Wysyłanie...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        Wyślij wiadomość
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
