import type { Car } from '@/types'

// Mock data for development - will be replaced with car.casion API
export const mockCars: Car[] = [
  {
    id: '1',
    insurer: 'HUK-COBURG-Allgemeine Versicherung AG',
    insurerNumber: '2601292326866',
    make: 'FORD',
    model: 'Focus C-Max 1.6 Trend',
    fullName: 'FORD Focus C-Max Focus C-MAX 1.6 Trend',
    restwert: '400 €',
    repairCost: '3.064 €',
    marketValue: '2.600 €',
    firstRegistration: '03/2007',
    fuel: 'Benzin',
    vin: 'XXXXXXXXXXXX84284',
    transmission: 'Manuell',
    engineSize: '1.596 ccm',
    power: '74 kW',
    mileage: '191.265 KM',
    color: 'Blau,Metallic',
    location: 'DE 31...',
    distance: '178 km',
    sparepartsCost: '1.191 €',
    laborCost: '578 €',
    paintCost: '1.262 €',
    timeLeft: '23h 30m',
    images: [],
  },
  // Add more mock cars as needed
]

export async function fetchCars(filters?: any): Promise<Car[]> {
  // TODO: Replace with actual car.casion API integration
  // For now, return mock data
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockCars), 500)
  })
}

export async function fetchCarById(id: string): Promise<Car | null> {
  // TODO: Replace with actual car.casion API integration
  return new Promise((resolve) => {
    setTimeout(() => {
      const car = mockCars.find((c) => c.id === id)
      resolve(car || null)
    }, 300)
  })
}
