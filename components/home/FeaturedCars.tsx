'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiMapPin, FiCalendar, FiActivity } from 'react-icons/fi'

// Mock data - will be replaced with real car.casion API data
const featuredCars = [
  {
    id: 1,
    insurer: 'HUK-COBURG-Allgemeine Versicherung AG',
    make: 'FORD',
    model: 'Focus C-Max 1.6 Trend',
    restwert: '400 €',
    repairCost: '3.064 €',
    marketValue: '2.600 €',
    year: '03/2007',
    fuel: 'Benzin',
    transmission: 'Manuell',
    power: '74 kW',
    mileage: '191.265 KM',
    location: 'DE 31...',
    timeLeft: '23h 30m',
    image: '/placeholder-car.jpg',
  },
  {
    id: 2,
    insurer: 'ALLIANZ Versicherungs-AG',
    make: 'VW',
    model: 'Golf VII 1.4 TSI Highline',
    restwert: '2.800 €',
    repairCost: '4.500 €',
    marketValue: '8.900 €',
    year: '06/2015',
    fuel: 'Benzin',
    transmission: 'DSG',
    power: '92 kW',
    mileage: '145.800 KM',
    location: 'DE 50...',
    timeLeft: '2d 14h',
    image: '/placeholder-car.jpg',
  },
  {
    id: 3,
    insurer: 'ERGO Versicherung AG',
    make: 'BMW',
    model: '320d Touring Sport Line',
    restwert: '5.200 €',
    repairCost: '6.800 €',
    marketValue: '12.500 €',
    year: '09/2016',
    fuel: 'Diesel',
    transmission: 'Automat',
    power: '140 kW',
    mileage: '198.450 KM',
    location: 'DE 80...',
    timeLeft: '1d 8h',
    image: '/placeholder-car.jpg',
  },
  {
    id: 4,
    insurer: 'DEVK Versicherungen',
    make: 'AUDI',
    model: 'A4 Avant 2.0 TDI S-Line',
    restwert: '4.100 €',
    repairCost: '5.200 €',
    marketValue: '11.200 €',
    year: '03/2017',
    fuel: 'Diesel',
    transmission: 'S tronic',
    power: '110 kW',
    mileage: '167.200 KM',
    location: 'DE 40...',
    timeLeft: '3d 2h',
    image: '/placeholder-car.jpg',
  },
]

export default function FeaturedCars() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Aktualne <span className="text-primary-600">samochody z aukcji</span>
          </h2>
          <p className="text-lg text-gray-600">
            Przykładowe pojazdy z niemieckich giełd ubezpieczeniowych dostępne teraz
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredCars.slice(0, 3).map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-gray-400 text-sm text-center p-4">
                  {car.make} {car.model}
                  <div className="text-xs mt-2">Image from car.casion</div>
                </div>
                {/* Time Badge */}
                <div className="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <FiActivity className="w-3 h-3" />
                  {car.timeLeft}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Insurer */}
                <div className="text-xs text-gray-500 mb-1 truncate">
                  {car.insurer}
                </div>

                {/* Car Title */}
                <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2">
                  {car.make} {car.model}
                </h3>

                {/* Price Grid */}
                <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                  <div className="bg-primary-50 rounded p-2">
                    <div className="text-xs text-gray-600">Restwert</div>
                    <div className="font-bold text-primary-600">{car.restwert}</div>
                  </div>
                  <div className="bg-gray-100 rounded p-2">
                    <div className="text-xs text-gray-600">Rep.-Kosten</div>
                    <div className="font-semibold text-gray-900">{car.repairCost}</div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-1.5 text-xs text-gray-600 mb-3">
                  <div className="flex justify-between">
                    <span>WBW:</span>
                    <span className="font-semibold text-gray-900">{car.marketValue}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1">
                      <FiCalendar className="w-3 h-3" />
                      Erstzulassung:
                    </span>
                    <span className="font-semibold text-gray-900">{car.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Laufleistung:</span>
                    <span className="font-semibold text-gray-900">{car.mileage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Leistung:</span>
                    <span className="font-semibold text-gray-900">{car.power}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1">
                      <FiMapPin className="w-3 h-3" />
                      Standort:
                    </span>
                    <span className="font-semibold text-gray-900">{car.location}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mb-3 text-xs">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {car.fuel}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {car.transmission}
                  </span>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold text-sm hover:bg-primary-700 transition-colors">
                  Złóż ofertę
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/aukcje" className="btn-primary inline-flex items-center gap-2">
            Zobacz wszystkie aukcje
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
